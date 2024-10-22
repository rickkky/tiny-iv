import HimapPointSelectorProxy from './HimapPointSelectorProxy.vue';

export { HimapPointSelectorProxy };

export default {
  name: 'HimapPointSelectorProxy',
  install: function (app: any) {
    app.component('HimapPointSelectorProxy', HimapPointSelectorProxy);
  },
};
