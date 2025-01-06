import fs from 'node:fs';
import * as turf from '@turf/turf';

const bound = [
  [-180, -90],
  [180, 90],
];
const numPoints = 500;
const features = [];
for (let i = 0; i < numPoints; i++) {
  const lng = bound[0][0] + (bound[1][0] - bound[0][0]) * Math.random();
  const lat = bound[0][1] + (bound[1][1] - bound[0][1]) * Math.random();
  const feature = turf.point([lng, lat], {
    name: `Point ${i + 1}`,
    lng,
    lat,
  });
  features.push(feature);
}
const featureCollection = turf.featureCollection(features);

const output = JSON.stringify(featureCollection, null, 2);
const outputPath = new URL(
  '../data/random-cluster-500.json',
  import.meta.url,
).pathname.substring(1);
fs.writeFileSync(outputPath, output);
