import HimapPointSelectorProxy from './HimapPointSelectorProxy.vue';

export { HimapPointSelectorProxy };

export default {
  name: 'HimapPointSelectorProxy',
  install: function (app: any) {
    // prefetch himap-point-selector.umd.js
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/himap-point-selector.umd.js';
    document.head.appendChild(link);
    app.component('HimapPointSelectorProxy', HimapPointSelectorProxy);
  },
};
