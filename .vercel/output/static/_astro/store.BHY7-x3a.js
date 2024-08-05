import{r as c}from"./index.DhYZZe0J.js";var p={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=c,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,x=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function _(l,t,r){var e,n={},s=null,u=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(u=t.ref);for(e in t)v.call(t,e)&&!E.hasOwnProperty(e)&&(n[e]=t[e]);if(l&&l.defaultProps)for(e in t=l.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:d,type:l,key:s,ref:u,props:n,_owner:x.current}}a.Fragment=m;a.jsx=_;a.jsxs=_;p.exports=a;var R=p.exports;let i=[],o=0;const f=4;let S=l=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},lc:0,listen(e){return r.lc=t.push(e),()=>{for(let s=o+f;s<i.length;)i[s]===e?i.splice(s,f):s+=f;let n=t.indexOf(e);~n&&(t.splice(n,1),--r.lc||r.off())}},notify(e,n){let s=!i.length;for(let u of t)i.push(u,r.value,e,n);if(s){for(o=0;o<i.length;o+=f)i[o](i[o+1],i[o+2],i[o+3]);i.length=0}},off(){},set(e){let n=r.value;n!==e&&(r.value=e,r.notify(n))},subscribe(e){let n=r.listen(e);return e(r.value),n},value:l};return r};function b(l,t,r){let e=new Set([...t,void 0]);return l.listen((n,s,u)=>{e.has(u)&&r(n,s,u)})}function h(l,t={}){let r=c.useCallback(n=>t.keys?b(l,t.keys,n):l.listen(n),[t.keys,l]),e=l.get.bind(l);return c.useSyncExternalStore(r,e,e)}const O=S("home");export{O as d,R as j,h as u};
