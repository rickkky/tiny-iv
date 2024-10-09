const r = require.context('@/assets/svg-icon', true, /\.svg$/);

const install = function (Vue: any): void {
  r.keys().map(item => {
    const name = item.match(/(.*\/)*([^.]+).*/)![2];
    const p = item.replace('./', '');
    import(`@/assets/svg-icon/${p}?svg`).then(res => {
      Vue.component(`${name}Svg`, res.default);
    });
  });
};

export default {
  install
};
