(function(n,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(n=typeof globalThis<"u"?globalThis:n||self,o(n.HimapPointSelector={}))})(this,function(n){"use strict";function o(e="core"){return`Hello @himap/${e}`}function s(e,t,r,m,p,_,v,S){var i=typeof e=="function"?e.options:e;return t&&(i.render=t,i.staticRenderFns=r,i._compiled=!0),{exports:e,options:i}}const a={name:"HiMapPointSelector",methods:{greet(){return o("point-selector")}}};var l=function(){var t=this,r=t._self._c;return r("div",{staticClass:"hi-map-point-selector"},[t._v(t._s(t.greeting))])},d=[],f=s(a,l,d);const c=f.exports,u={name:"HimapPointSelector",install:function(e){e.component("HimapPointSelector",c)}};n.HimapPointSelector=c,n.default=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});