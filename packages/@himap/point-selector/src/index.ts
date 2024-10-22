import HimapPointSelector from './HimapPointSelector.vue';

export { HimapPointSelector };

export default {
  name: 'HimapPointSelector',
  install: function (app: any) {
    app.component('HimapPointSelector', HimapPointSelector);
  },
};
