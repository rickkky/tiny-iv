import Supercluster from 'supercluster';
import { CLUSTER_DATA_URL } from '@/common/const';

performance.mark('supercluster:fetch-data:start');
const data = await fetch(CLUSTER_DATA_URL).then((res) => res.json());
performance.mark('supercluster:fetch-data:end');
performance.measure(
  'supercluster:fetch-data',
  'supercluster:fetch-data:start',
  'supercluster:fetch-data:end',
);

performance.mark('supercluster:load-cluster:start');
const supercluster = new Supercluster({
  log: true,
  radius: 100,
  extent: 256,
  maxZoom: 17,
}).load(data);
performance.mark('supercluster:load-cluster:end');
performance.measure(
  'supercluster:load-cluster',
  'supercluster:load-cluster:start',
  'supercluster:load-cluster:end',
);

postMessage({ type: 'ready' });

self.addEventListener('message', (evt) => {
  if (evt.data.type === 'query') {
    performance.mark('supercluster:query-cluster:start');
    const clusters = supercluster.getClusters(evt.data.bbox, evt.data.zoom);
    performance.mark('supercluster:query-cluster:end');
    performance.measure(
      'supercluster:query-cluster',
      'supercluster:query-cluster:start',
      'supercluster:query-cluster:end',
    );
    postMessage({ type: 'query-response', clusters });
  }
});
