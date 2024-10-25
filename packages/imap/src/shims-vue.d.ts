/// <reference types="@himap/point-selector" />

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare interface Window {
  Vue: any;
}
