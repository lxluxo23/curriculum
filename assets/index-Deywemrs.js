(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Gd={exports:{}},xa={},Wd={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Ly(){if(kg)return xt;kg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(B,oe,be){this.props=B,this.context=oe,this.refs=E,this.updater=be||_}y.prototype.isReactComponent={},y.prototype.setState=function(B,oe){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,oe,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function x(){}x.prototype=y.prototype;function R(B,oe,be){this.props=B,this.context=oe,this.refs=E,this.updater=be||_}var w=R.prototype=new x;w.constructor=R,M(w,y.prototype),w.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function I(B,oe,be){var re,he={},ve=null,pe=null;if(oe!=null)for(re in oe.ref!==void 0&&(pe=oe.ref),oe.key!==void 0&&(ve=""+oe.key),oe)k.call(oe,re)&&!F.hasOwnProperty(re)&&(he[re]=oe[re]);var Ae=arguments.length-2;if(Ae===1)he.children=be;else if(1<Ae){for(var Ie=Array(Ae),qe=0;qe<Ae;qe++)Ie[qe]=arguments[qe+2];he.children=Ie}if(B&&B.defaultProps)for(re in Ae=B.defaultProps,Ae)he[re]===void 0&&(he[re]=Ae[re]);return{$$typeof:r,type:B,key:ve,ref:pe,props:he,_owner:N.current}}function C(B,oe){return{$$typeof:r,type:B.type,key:oe,ref:B.ref,props:B.props,_owner:B._owner}}function T(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function U(B){var oe={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(be){return oe[be]})}var Y=/\/+/g;function K(B,oe){return typeof B=="object"&&B!==null&&B.key!=null?U(""+B.key):oe.toString(36)}function j(B,oe,be,re,he){var ve=typeof B;(ve==="undefined"||ve==="boolean")&&(B=null);var pe=!1;if(B===null)pe=!0;else switch(ve){case"string":case"number":pe=!0;break;case"object":switch(B.$$typeof){case r:case e:pe=!0}}if(pe)return pe=B,he=he(pe),B=re===""?"."+K(pe,0):re,b(he)?(be="",B!=null&&(be=B.replace(Y,"$&/")+"/"),j(he,oe,be,"",function(qe){return qe})):he!=null&&(T(he)&&(he=C(he,be+(!he.key||pe&&pe.key===he.key?"":(""+he.key).replace(Y,"$&/")+"/")+B)),oe.push(he)),1;if(pe=0,re=re===""?".":re+":",b(B))for(var Ae=0;Ae<B.length;Ae++){ve=B[Ae];var Ie=re+K(ve,Ae);pe+=j(ve,oe,be,Ie,he)}else if(Ie=m(B),typeof Ie=="function")for(B=Ie.call(B),Ae=0;!(ve=B.next()).done;)ve=ve.value,Ie=re+K(ve,Ae++),pe+=j(ve,oe,be,Ie,he);else if(ve==="object")throw oe=String(B),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return pe}function te(B,oe,be){if(B==null)return B;var re=[],he=0;return j(B,re,"","",function(ve){return oe.call(be,ve,he++)}),re}function Q(B){if(B._status===-1){var oe=B._result;oe=oe(),oe.then(function(be){(B._status===0||B._status===-1)&&(B._status=1,B._result=be)},function(be){(B._status===0||B._status===-1)&&(B._status=2,B._result=be)}),B._status===-1&&(B._status=0,B._result=oe)}if(B._status===1)return B._result.default;throw B._result}var ie={current:null},V={transition:null},ee={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:V,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:te,forEach:function(B,oe,be){te(B,function(){oe.apply(this,arguments)},be)},count:function(B){var oe=0;return te(B,function(){oe++}),oe},toArray:function(B){return te(B,function(oe){return oe})||[]},only:function(B){if(!T(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},xt.Component=y,xt.Fragment=t,xt.Profiler=s,xt.PureComponent=R,xt.StrictMode=n,xt.Suspense=d,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,xt.act=le,xt.cloneElement=function(B,oe,be){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var re=M({},B.props),he=B.key,ve=B.ref,pe=B._owner;if(oe!=null){if(oe.ref!==void 0&&(ve=oe.ref,pe=N.current),oe.key!==void 0&&(he=""+oe.key),B.type&&B.type.defaultProps)var Ae=B.type.defaultProps;for(Ie in oe)k.call(oe,Ie)&&!F.hasOwnProperty(Ie)&&(re[Ie]=oe[Ie]===void 0&&Ae!==void 0?Ae[Ie]:oe[Ie])}var Ie=arguments.length-2;if(Ie===1)re.children=be;else if(1<Ie){Ae=Array(Ie);for(var qe=0;qe<Ie;qe++)Ae[qe]=arguments[qe+2];re.children=Ae}return{$$typeof:r,type:B.type,key:he,ref:ve,props:re,_owner:pe}},xt.createContext=function(B){return B={$$typeof:l,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},xt.createElement=I,xt.createFactory=function(B){var oe=I.bind(null,B);return oe.type=B,oe},xt.createRef=function(){return{current:null}},xt.forwardRef=function(B){return{$$typeof:u,render:B}},xt.isValidElement=T,xt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:Q}},xt.memo=function(B,oe){return{$$typeof:f,type:B,compare:oe===void 0?null:oe}},xt.startTransition=function(B){var oe=V.transition;V.transition={};try{B()}finally{V.transition=oe}},xt.unstable_act=le,xt.useCallback=function(B,oe){return ie.current.useCallback(B,oe)},xt.useContext=function(B){return ie.current.useContext(B)},xt.useDebugValue=function(){},xt.useDeferredValue=function(B){return ie.current.useDeferredValue(B)},xt.useEffect=function(B,oe){return ie.current.useEffect(B,oe)},xt.useId=function(){return ie.current.useId()},xt.useImperativeHandle=function(B,oe,be){return ie.current.useImperativeHandle(B,oe,be)},xt.useInsertionEffect=function(B,oe){return ie.current.useInsertionEffect(B,oe)},xt.useLayoutEffect=function(B,oe){return ie.current.useLayoutEffect(B,oe)},xt.useMemo=function(B,oe){return ie.current.useMemo(B,oe)},xt.useReducer=function(B,oe,be){return ie.current.useReducer(B,oe,be)},xt.useRef=function(B){return ie.current.useRef(B)},xt.useState=function(B){return ie.current.useState(B)},xt.useSyncExternalStore=function(B,oe,be){return ie.current.useSyncExternalStore(B,oe,be)},xt.useTransition=function(){return ie.current.useTransition()},xt.version="18.3.1",xt}var Og;function Df(){return Og||(Og=1,Wd.exports=Ly()),Wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Dy(){if(Bg)return xa;Bg=1;var r=Df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(u,d,f){var p,g={},m=null,_=null;f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:m,ref:_,props:g,_owner:s.current}}return xa.Fragment=t,xa.jsx=l,xa.jsxs=l,xa}var zg;function Iy(){return zg||(zg=1,Gd.exports=Dy()),Gd.exports}var P=Iy(),J=Df(),ic={},jd={exports:{}},Kn={},Xd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Ny(){return Vg||(Vg=1,function(r){function e(V,ee){var le=V.length;V.push(ee);e:for(;0<le;){var B=le-1>>>1,oe=V[B];if(0<s(oe,ee))V[B]=ee,V[le]=oe,le=B;else break e}}function t(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var ee=V[0],le=V.pop();if(le!==ee){V[0]=le;e:for(var B=0,oe=V.length,be=oe>>>1;B<be;){var re=2*(B+1)-1,he=V[re],ve=re+1,pe=V[ve];if(0>s(he,le))ve<oe&&0>s(pe,he)?(V[B]=pe,V[ve]=le,B=ve):(V[B]=he,V[re]=le,B=re);else if(ve<oe&&0>s(pe,le))V[B]=pe,V[ve]=le,B=ve;else break e}}return ee}function s(V,ee){var le=V.sortIndex-ee.sortIndex;return le!==0?le:V.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();r.unstable_now=function(){return l.now()-u}}var d=[],f=[],p=1,g=null,m=3,_=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(V){for(var ee=t(f);ee!==null;){if(ee.callback===null)n(f);else if(ee.startTime<=V)n(f),ee.sortIndex=ee.expirationTime,e(d,ee);else break;ee=t(f)}}function b(V){if(E=!1,w(V),!M)if(t(d)!==null)M=!0,Q(k);else{var ee=t(f);ee!==null&&ie(b,ee.startTime-V)}}function k(V,ee){M=!1,E&&(E=!1,x(I),I=-1),_=!0;var le=m;try{for(w(ee),g=t(d);g!==null&&(!(g.expirationTime>ee)||V&&!U());){var B=g.callback;if(typeof B=="function"){g.callback=null,m=g.priorityLevel;var oe=B(g.expirationTime<=ee);ee=r.unstable_now(),typeof oe=="function"?g.callback=oe:g===t(d)&&n(d),w(ee)}else n(d);g=t(d)}if(g!==null)var be=!0;else{var re=t(f);re!==null&&ie(b,re.startTime-ee),be=!1}return be}finally{g=null,m=le,_=!1}}var N=!1,F=null,I=-1,C=5,T=-1;function U(){return!(r.unstable_now()-T<C)}function Y(){if(F!==null){var V=r.unstable_now();T=V;var ee=!0;try{ee=F(!0,V)}finally{ee?K():(N=!1,F=null)}}else N=!1}var K;if(typeof R=="function")K=function(){R(Y)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,te=j.port2;j.port1.onmessage=Y,K=function(){te.postMessage(null)}}else K=function(){y(Y,0)};function Q(V){F=V,N||(N=!0,K())}function ie(V,ee){I=y(function(){V(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){M||_||(M=!0,Q(k))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(V){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var le=m;m=ee;try{return V()}finally{m=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,ee){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=m;m=V;try{return ee()}finally{m=le}},r.unstable_scheduleCallback=function(V,ee,le){var B=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?B+le:B):le=B,V){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=le+oe,V={id:p++,callback:ee,priorityLevel:V,startTime:le,expirationTime:oe,sortIndex:-1},le>B?(V.sortIndex=le,e(f,V),t(d)===null&&V===t(f)&&(E?(x(I),I=-1):E=!0,ie(b,le-B))):(V.sortIndex=oe,e(d,V),M||_||(M=!0,Q(k))),V},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(V){var ee=m;return function(){var le=m;m=ee;try{return V.apply(this,arguments)}finally{m=le}}}}($d)),$d}var Hg;function Fy(){return Hg||(Hg=1,Xd.exports=Ny()),Xd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Uy(){if(Gg)return Kn;Gg=1;var r=Df(),e=Fy();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(i){return d.call(g,i)?!0:d.call(p,i)?!1:f.test(i)?g[i]=!0:(p[i]=!0,!1)}function _(i,o,c,h){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,c,h){if(o===null||typeof o>"u"||_(i,o,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(i,o,c,h,v,S,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=c,this.propertyName=i,this.type=o,this.sanitizeURL=S,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];y[o]=new E(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(x,R);y[o]=new E(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(x,R);y[o]=new E(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(x,R);y[o]=new E(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function w(i,o,c,h){var v=y.hasOwnProperty(o)?y[o]:null;(v!==null?v.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,c,v,h)&&(c=null),h||v===null?m(o)&&(c===null?i.removeAttribute(o):i.setAttribute(o,""+c)):v.mustUseProperty?i[v.propertyName]=c===null?v.type===3?!1:"":c:(o=v.attributeName,h=v.attributeNamespace,c===null?i.removeAttribute(o):(v=v.type,c=v===3||v===4&&c===!0?"":""+c,h?i.setAttributeNS(h,o,c):i.setAttribute(o,c))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),U=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),V=Symbol.iterator;function ee(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,B;function oe(i){if(B===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);B=o&&o[1]||""}return`
`+B+i}var be=!1;function re(i,o){if(!i||be)return"";be=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ce){var h=ce}Reflect.construct(i,[],o)}else{try{o.call()}catch(ce){h=ce}i.call(o.prototype)}else{try{throw Error()}catch(ce){h=ce}i()}}catch(ce){if(ce&&h&&typeof ce.stack=="string"){for(var v=ce.stack.split(`
`),S=h.stack.split(`
`),A=v.length-1,z=S.length-1;1<=A&&0<=z&&v[A]!==S[z];)z--;for(;1<=A&&0<=z;A--,z--)if(v[A]!==S[z]){if(A!==1||z!==1)do if(A--,z--,0>z||v[A]!==S[z]){var G=`
`+v[A].replace(" at new "," at ");return i.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",i.displayName)),G}while(1<=A&&0<=z);break}}}finally{be=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?oe(i):""}function he(i){switch(i.tag){case 5:return oe(i.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return i=re(i.type,!1),i;case 11:return i=re(i.type.render,!1),i;case 1:return i=re(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case N:return"Portal";case C:return"Profiler";case I:return"StrictMode";case K:return"Suspense";case j:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case T:return(i._context.displayName||"Context")+".Provider";case Y:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case te:return o=i.displayName||null,o!==null?o:ve(i.type)||"Memo";case Q:o=i._payload,i=i._init;try{return ve(i(o))}catch{}}return null}function pe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function qe(i){var o=Ie(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,S=c.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return v.call(this)},set:function(A){h=""+A,S.call(this,A)}}),Object.defineProperty(i,o,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(A){h=""+A},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Lt(i){i._valueTracker||(i._valueTracker=qe(i))}function pt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var c=o.getValue(),h="";return i&&(h=Ie(i)?i.checked?"true":"false":i.value),i=h,i!==c?(o.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function W(i,o){var c=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function Fn(i,o){var c=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;c=Ae(o.value!=null?o.value:c),i._wrapperState={initialChecked:h,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function yt(i,o){o=o.checked,o!=null&&w(i,"checked",o,!1)}function vt(i,o){yt(i,o);var c=Ae(o.value),h=o.type;if(c!=null)h==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Nt(i,o.type,c):o.hasOwnProperty("defaultValue")&&Nt(i,o.type,Ae(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Ye(i,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,c||o===i.value||(i.value=o),i.defaultValue=o}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function Nt(i,o,c){(o!=="number"||It(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var Xe=Array.isArray;function O(i,o,c,h){if(i=i.options,o){o={};for(var v=0;v<c.length;v++)o["$"+c[v]]=!0;for(c=0;c<i.length;c++)v=o.hasOwnProperty("$"+i[c].value),i[c].selected!==v&&(i[c].selected=v),v&&h&&(i[c].defaultSelected=!0)}else{for(c=""+Ae(c),o=null,v=0;v<i.length;v++){if(i[v].value===c){i[v].selected=!0,h&&(i[v].defaultSelected=!0);return}o!==null||i[v].disabled||(o=i[v])}o!==null&&(o.selected=!0)}}function L(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ae(i,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(t(92));if(Xe(c)){if(1<c.length)throw Error(t(93));c=c[0]}o=c}o==null&&(o=""),c=o}i._wrapperState={initialValue:Ae(c)}}function _e(i,o){var c=Ae(o.value),h=Ae(o.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),o.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),h!=null&&(i.defaultValue=""+h)}function ye(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?me(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,ke=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,h,v){MSApp.execUnsafeLocalFunction(function(){return i(o,c,h,v)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function mt(i,o){if(o){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=o;return}}i.textContent=o}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){ze.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),we[o]=we[i]})});function Qe(i,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||we.hasOwnProperty(i)&&we[i]?(""+o).trim():o+"px"}function it(i,o){i=i.style;for(var c in o)if(o.hasOwnProperty(c)){var h=c.indexOf("--")===0,v=Qe(c,o[c],h);c==="float"&&(c="cssFloat"),h?i.setProperty(c,v):i[c]=v}}var Ve=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(i,o){if(o){if(Ve[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function at(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function q(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,fe=null,ge=null;function Ne(i){if(i=ra(i)){if(typeof Re!="function")throw Error(t(280));var o=i.stateNode;o&&(o=_l(o),Re(i.stateNode,i.type,o))}}function De(i){fe?ge?ge.push(i):ge=[i]:fe=i}function lt(){if(fe){var i=fe,o=ge;if(ge=fe=null,Ne(i),o)for(i=0;i<o.length;i++)Ne(o[i])}}function Ht(i,o){return i(o)}function an(){}var Tt=!1;function Wn(i,o,c){if(Tt)return i(o,c);Tt=!0;try{return Ht(i,o,c)}finally{Tt=!1,(fe!==null||ge!==null)&&(an(),lt())}}function Un(i,o){var c=i.stateNode;if(c===null)return null;var h=_l(c);if(h===null)return null;c=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(t(231,o,typeof c));return c}var Cs=!1;if(u)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Cs=!1}function Hi(i,o,c,h,v,S,A,z,G){var ce=Array.prototype.slice.call(arguments,3);try{o.apply(c,ce)}catch(Se){this.onError(Se)}}var Gi=!1,Zr=null,Jr=!1,mr=null,Za={onError:function(i){Gi=!0,Zr=i}};function Rs(i,o,c,h,v,S,A,z,G){Gi=!1,Zr=null,Hi.apply(Za,arguments)}function Ja(i,o,c,h,v,S,A,z,G){if(Rs.apply(this,arguments),Gi){if(Gi){var ce=Zr;Gi=!1,Zr=null}else throw Error(t(198));Jr||(Jr=!0,mr=ce)}}function Pi(i){var o=i,c=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(c=o.return),i=o.return;while(i)}return o.tag===3?c:null}function Qa(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function el(i){if(Pi(i)!==i)throw Error(t(188))}function hu(i){var o=i.alternate;if(!o){if(o=Pi(i),o===null)throw Error(t(188));return o!==i?null:i}for(var c=i,h=o;;){var v=c.return;if(v===null)break;var S=v.alternate;if(S===null){if(h=v.return,h!==null){c=h;continue}break}if(v.child===S.child){for(S=v.child;S;){if(S===c)return el(v),i;if(S===h)return el(v),o;S=S.sibling}throw Error(t(188))}if(c.return!==h.return)c=v,h=S;else{for(var A=!1,z=v.child;z;){if(z===c){A=!0,c=v,h=S;break}if(z===h){A=!0,h=v,c=S;break}z=z.sibling}if(!A){for(z=S.child;z;){if(z===c){A=!0,c=S,h=v;break}if(z===h){A=!0,h=S,c=v;break}z=z.sibling}if(!A)throw Error(t(189))}}if(c.alternate!==h)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?i:o}function tl(i){return i=hu(i),i!==null?nl(i):null}function nl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=nl(i);if(o!==null)return o;i=i.sibling}return null}var D=e.unstable_scheduleCallback,Z=e.unstable_cancelCallback,ue=e.unstable_shouldYield,de=e.unstable_requestPaint,X=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,rt=e.unstable_LowPriority,st=e.unstable_IdlePriority,$e=null,ct=null;function At(i){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot($e,i,void 0,(i.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Je,$t=Math.log,wt=Math.LN2;function Je(i){return i>>>=0,i===0?32:31-($t(i)/wt|0)|0}var Qt=64,Et=4194304;function Sn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vi(i,o){var c=i.pendingLanes;if(c===0)return 0;var h=0,v=i.suspendedLanes,S=i.pingedLanes,A=c&268435455;if(A!==0){var z=A&~v;z!==0?h=Sn(z):(S&=A,S!==0&&(h=Sn(S)))}else A=c&~v,A!==0?h=Sn(A):S!==0&&(h=Sn(S));if(h===0)return 0;if(o!==0&&o!==h&&(o&v)===0&&(v=h&-h,S=o&-o,v>=S||v===16&&(S&4194240)!==0))return o;if((h&4)!==0&&(h|=c&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)c=31-Ct(o),v=1<<c,h|=i[c],o&=~v;return h}function kn(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(i,o){for(var c=i.suspendedLanes,h=i.pingedLanes,v=i.expirationTimes,S=i.pendingLanes;0<S;){var A=31-Ct(S),z=1<<A,G=v[A];G===-1?((z&c)===0||(z&h)!==0)&&(v[A]=kn(z,o)):G<=o&&(i.expiredLanes|=z),S&=~z}}function Ut(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function On(){var i=Qt;return Qt<<=1,(Qt&4194240)===0&&(Qt=64),i}function bn(i){for(var o=[],c=0;31>c;c++)o.push(i);return o}function tn(i,o,c){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Ct(o),i[o]=c}function An(i,o){var c=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<c;){var v=31-Ct(c),S=1<<v;o[v]=0,h[v]=-1,i[v]=-1,c&=~S}}function es(i,o){var c=i.entangledLanes|=o;for(i=i.entanglements;c;){var h=31-Ct(c),v=1<<h;v&o|i[h]&o&&(i[h]|=o),c&=~v}}var St=0;function mp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gp,fu,vp,_p,xp,pu=!1,il=[],gr=null,vr=null,_r=null,Ho=new Map,Go=new Map,xr=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(i,o){switch(i){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Ho.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(o.pointerId)}}function Wo(i,o,c,h,v,S){return i===null||i.nativeEvent!==S?(i={blockedOn:o,domEventName:c,eventSystemFlags:h,nativeEvent:S,targetContainers:[v]},o!==null&&(o=ra(o),o!==null&&fu(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),i)}function ex(i,o,c,h,v){switch(o){case"focusin":return gr=Wo(gr,i,o,c,h,v),!0;case"dragenter":return vr=Wo(vr,i,o,c,h,v),!0;case"mouseover":return _r=Wo(_r,i,o,c,h,v),!0;case"pointerover":var S=v.pointerId;return Ho.set(S,Wo(Ho.get(S)||null,i,o,c,h,v)),!0;case"gotpointercapture":return S=v.pointerId,Go.set(S,Wo(Go.get(S)||null,i,o,c,h,v)),!0}return!1}function Sp(i){var o=ts(i.target);if(o!==null){var c=Pi(o);if(c!==null){if(o=c.tag,o===13){if(o=Qa(c),o!==null){i.blockedOn=o,xp(i.priority,function(){vp(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function rl(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var c=gu(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var h=new c.constructor(c.type,c);Dt=h,c.target.dispatchEvent(h),Dt=null}else return o=ra(c),o!==null&&fu(o),i.blockedOn=c,!1;o.shift()}return!0}function Mp(i,o,c){rl(i)&&c.delete(o)}function tx(){pu=!1,gr!==null&&rl(gr)&&(gr=null),vr!==null&&rl(vr)&&(vr=null),_r!==null&&rl(_r)&&(_r=null),Ho.forEach(Mp),Go.forEach(Mp)}function jo(i,o){i.blockedOn===o&&(i.blockedOn=null,pu||(pu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tx)))}function Xo(i){function o(v){return jo(v,i)}if(0<il.length){jo(il[0],i);for(var c=1;c<il.length;c++){var h=il[c];h.blockedOn===i&&(h.blockedOn=null)}}for(gr!==null&&jo(gr,i),vr!==null&&jo(vr,i),_r!==null&&jo(_r,i),Ho.forEach(o),Go.forEach(o),c=0;c<xr.length;c++)h=xr[c],h.blockedOn===i&&(h.blockedOn=null);for(;0<xr.length&&(c=xr[0],c.blockedOn===null);)Sp(c),c.blockedOn===null&&xr.shift()}var Ps=b.ReactCurrentBatchConfig,sl=!0;function nx(i,o,c,h){var v=St,S=Ps.transition;Ps.transition=null;try{St=1,mu(i,o,c,h)}finally{St=v,Ps.transition=S}}function ix(i,o,c,h){var v=St,S=Ps.transition;Ps.transition=null;try{St=4,mu(i,o,c,h)}finally{St=v,Ps.transition=S}}function mu(i,o,c,h){if(sl){var v=gu(i,o,c,h);if(v===null)Iu(i,o,h,ol,c),yp(i,h);else if(ex(v,i,o,c,h))h.stopPropagation();else if(yp(i,h),o&4&&-1<Q_.indexOf(i)){for(;v!==null;){var S=ra(v);if(S!==null&&gp(S),S=gu(i,o,c,h),S===null&&Iu(i,o,h,ol,c),S===v)break;v=S}v!==null&&h.stopPropagation()}else Iu(i,o,h,null,c)}}var ol=null;function gu(i,o,c,h){if(ol=null,i=q(h),i=ts(i),i!==null)if(o=Pi(i),o===null)i=null;else if(c=o.tag,c===13){if(i=Qa(o),i!==null)return i;i=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return ol=i,null}function Ep(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Pe:return 1;case Ue:return 4;case Oe:case rt:return 16;case st:return 536870912;default:return 16}default:return 16}}var yr=null,vu=null,al=null;function wp(){if(al)return al;var i,o=vu,c=o.length,h,v="value"in yr?yr.value:yr.textContent,S=v.length;for(i=0;i<c&&o[i]===v[i];i++);var A=c-i;for(h=1;h<=A&&o[c-h]===v[S-h];h++);return al=v.slice(i,1<h?1-h:void 0)}function ll(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function cl(){return!0}function Tp(){return!1}function ei(i){function o(c,h,v,S,A){this._reactName=c,this._targetInst=v,this.type=h,this.nativeEvent=S,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(c=i[z],this[z]=c?c(S):S[z]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?cl:Tp,this.isPropagationStopped=Tp,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),o}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=ei(Ls),$o=le({},Ls,{view:0,detail:0}),rx=ei($o),xu,yu,Yo,ul=le({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Yo&&(Yo&&i.type==="mousemove"?(xu=i.screenX-Yo.screenX,yu=i.screenY-Yo.screenY):yu=xu=0,Yo=i),xu)},movementY:function(i){return"movementY"in i?i.movementY:yu}}),bp=ei(ul),sx=le({},ul,{dataTransfer:0}),ox=ei(sx),ax=le({},$o,{relatedTarget:0}),Su=ei(ax),lx=le({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=ei(lx),ux=le({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),dx=ei(ux),hx=le({},Ls,{data:0}),Ap=ei(hx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=mx[i])?!!o[i]:!1}function Mu(){return gx}var vx=le({},$o,{key:function(i){if(i.key){var o=fx[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ll(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?px[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(i){return i.type==="keypress"?ll(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ll(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),_x=ei(vx),xx=le({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=ei(xx),yx=le({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Sx=ei(yx),Mx=le({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=ei(Mx),wx=le({},ul,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=ei(wx),bx=[9,13,27,32],Eu=u&&"CompositionEvent"in window,qo=null;u&&"documentMode"in document&&(qo=document.documentMode);var Ax=u&&"TextEvent"in window&&!qo,Rp=u&&(!Eu||qo&&8<qo&&11>=qo),Pp=" ",Lp=!1;function Dp(i,o){switch(i){case"keyup":return bx.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ds=!1;function Cx(i,o){switch(i){case"compositionend":return Ip(o);case"keypress":return o.which!==32?null:(Lp=!0,Pp);case"textInput":return i=o.data,i===Pp&&Lp?null:i;default:return null}}function Rx(i,o){if(Ds)return i==="compositionend"||!Eu&&Dp(i,o)?(i=wp(),al=vu=yr=null,Ds=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Rp&&o.locale!=="ko"?null:o.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!Px[i.type]:o==="textarea"}function Fp(i,o,c,h){De(h),o=ml(o,"onChange"),0<o.length&&(c=new _u("onChange","change",null,c,h),i.push({event:c,listeners:o}))}var Ko=null,Zo=null;function Lx(i){Qp(i,0)}function dl(i){var o=ks(i);if(pt(o))return i}function Dx(i,o){if(i==="change")return o}var Up=!1;if(u){var wu;if(u){var Tu="oninput"in document;if(!Tu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Tu=typeof kp.oninput=="function"}wu=Tu}else wu=!1;Up=wu&&(!document.documentMode||9<document.documentMode)}function Op(){Ko&&(Ko.detachEvent("onpropertychange",Bp),Zo=Ko=null)}function Bp(i){if(i.propertyName==="value"&&dl(Zo)){var o=[];Fp(o,Zo,i,q(i)),Wn(Lx,o)}}function Ix(i,o,c){i==="focusin"?(Op(),Ko=o,Zo=c,Ko.attachEvent("onpropertychange",Bp)):i==="focusout"&&Op()}function Nx(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return dl(Zo)}function Fx(i,o){if(i==="click")return dl(o)}function Ux(i,o){if(i==="input"||i==="change")return dl(o)}function kx(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var _i=typeof Object.is=="function"?Object.is:kx;function Jo(i,o){if(_i(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var c=Object.keys(i),h=Object.keys(o);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var v=c[h];if(!d.call(o,v)||!_i(i[v],o[v]))return!1}return!0}function zp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Vp(i,o){var c=zp(i);i=0;for(var h;c;){if(c.nodeType===3){if(h=i+c.textContent.length,i<=o&&h>=o)return{node:c,offset:o-i};i=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=zp(c)}}function Hp(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Hp(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Gp(){for(var i=window,o=It();o instanceof i.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)i=o.contentWindow;else break;o=It(i.document)}return o}function bu(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function Ox(i){var o=Gp(),c=i.focusedElem,h=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&Hp(c.ownerDocument.documentElement,c)){if(h!==null&&bu(c)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(i,c.value.length);else if(i=(o=c.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var v=c.textContent.length,S=Math.min(h.start,v);h=h.end===void 0?S:Math.min(h.end,v),!i.extend&&S>h&&(v=h,h=S,S=v),v=Vp(c,S);var A=Vp(c,h);v&&A&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),i.removeAllRanges(),S>h?(i.addRange(o),i.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),i.addRange(o)))}}for(o=[],i=c;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)i=o[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Bx=u&&"documentMode"in document&&11>=document.documentMode,Is=null,Au=null,Qo=null,Cu=!1;function Wp(i,o,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Cu||Is==null||Is!==It(h)||(h=Is,"selectionStart"in h&&bu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Qo&&Jo(Qo,h)||(Qo=h,h=ml(Au,"onSelect"),0<h.length&&(o=new _u("onSelect","select",null,o,c),i.push({event:o,listeners:h}),o.target=Is)))}function hl(i,o){var c={};return c[i.toLowerCase()]=o.toLowerCase(),c["Webkit"+i]="webkit"+o,c["Moz"+i]="moz"+o,c}var Ns={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Ru={},jp={};u&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function fl(i){if(Ru[i])return Ru[i];if(!Ns[i])return i;var o=Ns[i],c;for(c in o)if(o.hasOwnProperty(c)&&c in jp)return Ru[i]=o[c];return i}var Xp=fl("animationend"),$p=fl("animationiteration"),Yp=fl("animationstart"),qp=fl("transitionend"),Kp=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(i,o){Kp.set(i,o),a(o,[i])}for(var Pu=0;Pu<Zp.length;Pu++){var Lu=Zp[Pu],zx=Lu.toLowerCase(),Vx=Lu[0].toUpperCase()+Lu.slice(1);Sr(zx,"on"+Vx)}Sr(Xp,"onAnimationEnd"),Sr($p,"onAnimationIteration"),Sr(Yp,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(qp,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Jp(i,o,c){var h=i.type||"unknown-event";i.currentTarget=c,Ja(h,o,void 0,i),i.currentTarget=null}function Qp(i,o){o=(o&4)!==0;for(var c=0;c<i.length;c++){var h=i[c],v=h.event;h=h.listeners;e:{var S=void 0;if(o)for(var A=h.length-1;0<=A;A--){var z=h[A],G=z.instance,ce=z.currentTarget;if(z=z.listener,G!==S&&v.isPropagationStopped())break e;Jp(v,z,ce),S=G}else for(A=0;A<h.length;A++){if(z=h[A],G=z.instance,ce=z.currentTarget,z=z.listener,G!==S&&v.isPropagationStopped())break e;Jp(v,z,ce),S=G}}}if(Jr)throw i=mr,Jr=!1,mr=null,i}function Gt(i,o){var c=o[Bu];c===void 0&&(c=o[Bu]=new Set);var h=i+"__bubble";c.has(h)||(em(o,i,2,!1),c.add(h))}function Du(i,o,c){var h=0;o&&(h|=4),em(c,i,h,o)}var pl="_reactListening"+Math.random().toString(36).slice(2);function ta(i){if(!i[pl]){i[pl]=!0,n.forEach(function(c){c!=="selectionchange"&&(Hx.has(c)||Du(c,!1,i),Du(c,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[pl]||(o[pl]=!0,Du("selectionchange",!1,o))}}function em(i,o,c,h){switch(Ep(o)){case 1:var v=nx;break;case 4:v=ix;break;default:v=mu}c=v.bind(null,o,c,i),v=void 0,!Cs||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),h?v!==void 0?i.addEventListener(o,c,{capture:!0,passive:v}):i.addEventListener(o,c,!0):v!==void 0?i.addEventListener(o,c,{passive:v}):i.addEventListener(o,c,!1)}function Iu(i,o,c,h,v){var S=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var A=h.tag;if(A===3||A===4){var z=h.stateNode.containerInfo;if(z===v||z.nodeType===8&&z.parentNode===v)break;if(A===4)for(A=h.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===v||G.nodeType===8&&G.parentNode===v))return;A=A.return}for(;z!==null;){if(A=ts(z),A===null)return;if(G=A.tag,G===5||G===6){h=S=A;continue e}z=z.parentNode}}h=h.return}Wn(function(){var ce=S,Se=q(c),Me=[];e:{var xe=Kp.get(i);if(xe!==void 0){var Fe=_u,He=i;switch(i){case"keypress":if(ll(c)===0)break e;case"keydown":case"keyup":Fe=_x;break;case"focusin":He="focus",Fe=Su;break;case"focusout":He="blur",Fe=Su;break;case"beforeblur":case"afterblur":Fe=Su;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Sx;break;case Xp:case $p:case Yp:Fe=cx;break;case qp:Fe=Ex;break;case"scroll":Fe=rx;break;case"wheel":Fe=Tx;break;case"copy":case"cut":case"paste":Fe=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Cp}var Ge=(o&4)!==0,nn=!Ge&&i==="scroll",ne=Ge?xe!==null?xe+"Capture":null:xe;Ge=[];for(var $=ce,se;$!==null;){se=$;var Te=se.stateNode;if(se.tag===5&&Te!==null&&(se=Te,ne!==null&&(Te=Un($,ne),Te!=null&&Ge.push(na($,Te,se)))),nn)break;$=$.return}0<Ge.length&&(xe=new Fe(xe,He,null,c,Se),Me.push({event:xe,listeners:Ge}))}}if((o&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",xe&&c!==Dt&&(He=c.relatedTarget||c.fromElement)&&(ts(He)||He[Wi]))break e;if((Fe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(He=c.relatedTarget||c.toElement,Fe=ce,He=He?ts(He):null,He!==null&&(nn=Pi(He),He!==nn||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=ce),Fe!==He)){if(Ge=bp,Te="onMouseLeave",ne="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=Cp,Te="onPointerLeave",ne="onPointerEnter",$="pointer"),nn=Fe==null?xe:ks(Fe),se=He==null?xe:ks(He),xe=new Ge(Te,$+"leave",Fe,c,Se),xe.target=nn,xe.relatedTarget=se,Te=null,ts(Se)===ce&&(Ge=new Ge(ne,$+"enter",He,c,Se),Ge.target=se,Ge.relatedTarget=nn,Te=Ge),nn=Te,Fe&&He)t:{for(Ge=Fe,ne=He,$=0,se=Ge;se;se=Fs(se))$++;for(se=0,Te=ne;Te;Te=Fs(Te))se++;for(;0<$-se;)Ge=Fs(Ge),$--;for(;0<se-$;)ne=Fs(ne),se--;for(;$--;){if(Ge===ne||ne!==null&&Ge===ne.alternate)break t;Ge=Fs(Ge),ne=Fs(ne)}Ge=null}else Ge=null;Fe!==null&&tm(Me,xe,Fe,Ge,!1),He!==null&&nn!==null&&tm(Me,nn,He,Ge,!0)}}e:{if(xe=ce?ks(ce):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var je=Dx;else if(Np(xe))if(Up)je=Ux;else{je=Nx;var et=Ix}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(je=Fx);if(je&&(je=je(i,ce))){Fp(Me,je,c,Se);break e}et&&et(i,xe,ce),i==="focusout"&&(et=xe._wrapperState)&&et.controlled&&xe.type==="number"&&Nt(xe,"number",xe.value)}switch(et=ce?ks(ce):window,i){case"focusin":(Np(et)||et.contentEditable==="true")&&(Is=et,Au=ce,Qo=null);break;case"focusout":Qo=Au=Is=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Wp(Me,c,Se);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":Wp(Me,c,Se)}var tt;if(Eu)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Ds?Dp(i,c)&&(ot="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(ot="onCompositionStart");ot&&(Rp&&c.locale!=="ko"&&(Ds||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Ds&&(tt=wp()):(yr=Se,vu="value"in yr?yr.value:yr.textContent,Ds=!0)),et=ml(ce,ot),0<et.length&&(ot=new Ap(ot,i,null,c,Se),Me.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=Ip(c),tt!==null&&(ot.data=tt)))),(tt=Ax?Cx(i,c):Rx(i,c))&&(ce=ml(ce,"onBeforeInput"),0<ce.length&&(Se=new Ap("onBeforeInput","beforeinput",null,c,Se),Me.push({event:Se,listeners:ce}),Se.data=tt))}Qp(Me,o)})}function na(i,o,c){return{instance:i,listener:o,currentTarget:c}}function ml(i,o){for(var c=o+"Capture",h=[];i!==null;){var v=i,S=v.stateNode;v.tag===5&&S!==null&&(v=S,S=Un(i,c),S!=null&&h.unshift(na(i,S,v)),S=Un(i,o),S!=null&&h.push(na(i,S,v))),i=i.return}return h}function Fs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function tm(i,o,c,h,v){for(var S=o._reactName,A=[];c!==null&&c!==h;){var z=c,G=z.alternate,ce=z.stateNode;if(G!==null&&G===h)break;z.tag===5&&ce!==null&&(z=ce,v?(G=Un(c,S),G!=null&&A.unshift(na(c,G,z))):v||(G=Un(c,S),G!=null&&A.push(na(c,G,z)))),c=c.return}A.length!==0&&i.push({event:o,listeners:A})}var Gx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function nm(i){return(typeof i=="string"?i:""+i).replace(Gx,`
`).replace(Wx,"")}function gl(i,o,c){if(o=nm(o),nm(i)!==o&&c)throw Error(t(425))}function vl(){}var Nu=null,Fu=null;function Uu(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(i){return im.resolve(null).then(i).catch($x)}:ku;function $x(i){setTimeout(function(){throw i})}function Ou(i,o){var c=o,h=0;do{var v=c.nextSibling;if(i.removeChild(c),v&&v.nodeType===8)if(c=v.data,c==="/$"){if(h===0){i.removeChild(v),Xo(o);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=v}while(c);Xo(o)}function Mr(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function rm(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return i;o--}else c==="/$"&&o++}i=i.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Li="__reactFiber$"+Us,ia="__reactProps$"+Us,Wi="__reactContainer$"+Us,Bu="__reactEvents$"+Us,Yx="__reactListeners$"+Us,qx="__reactHandles$"+Us;function ts(i){var o=i[Li];if(o)return o;for(var c=i.parentNode;c;){if(o=c[Wi]||c[Li]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(i=rm(i);i!==null;){if(c=i[Li])return c;i=rm(i)}return o}i=c,c=i.parentNode}return null}function ra(i){return i=i[Li]||i[Wi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ks(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function _l(i){return i[ia]||null}var zu=[],Os=-1;function Er(i){return{current:i}}function Wt(i){0>Os||(i.current=zu[Os],zu[Os]=null,Os--)}function zt(i,o){Os++,zu[Os]=i.current,i.current=o}var wr={},Cn=Er(wr),jn=Er(!1),ns=wr;function Bs(i,o){var c=i.type.contextTypes;if(!c)return wr;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var v={},S;for(S in c)v[S]=o[S];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=v),v}function Xn(i){return i=i.childContextTypes,i!=null}function xl(){Wt(jn),Wt(Cn)}function sm(i,o,c){if(Cn.current!==wr)throw Error(t(168));zt(Cn,o),zt(jn,c)}function om(i,o,c){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var v in h)if(!(v in o))throw Error(t(108,pe(i)||"Unknown",v));return le({},c,h)}function yl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||wr,ns=Cn.current,zt(Cn,i),zt(jn,jn.current),!0}function am(i,o,c){var h=i.stateNode;if(!h)throw Error(t(169));c?(i=om(i,o,ns),h.__reactInternalMemoizedMergedChildContext=i,Wt(jn),Wt(Cn),zt(Cn,i)):Wt(jn),zt(jn,c)}var ji=null,Sl=!1,Vu=!1;function lm(i){ji===null?ji=[i]:ji.push(i)}function Kx(i){Sl=!0,lm(i)}function Tr(){if(!Vu&&ji!==null){Vu=!0;var i=0,o=St;try{var c=ji;for(St=1;i<c.length;i++){var h=c[i];do h=h(!0);while(h!==null)}ji=null,Sl=!1}catch(v){throw ji!==null&&(ji=ji.slice(i+1)),D(Pe,Tr),v}finally{St=o,Vu=!1}}return null}var zs=[],Vs=0,Ml=null,El=0,ai=[],li=0,is=null,Xi=1,$i="";function rs(i,o){zs[Vs++]=El,zs[Vs++]=Ml,Ml=i,El=o}function cm(i,o,c){ai[li++]=Xi,ai[li++]=$i,ai[li++]=is,is=i;var h=Xi;i=$i;var v=32-Ct(h)-1;h&=~(1<<v),c+=1;var S=32-Ct(o)+v;if(30<S){var A=v-v%5;S=(h&(1<<A)-1).toString(32),h>>=A,v-=A,Xi=1<<32-Ct(o)+v|c<<v|h,$i=S+i}else Xi=1<<S|c<<v|h,$i=i}function Hu(i){i.return!==null&&(rs(i,1),cm(i,1,0))}function Gu(i){for(;i===Ml;)Ml=zs[--Vs],zs[Vs]=null,El=zs[--Vs],zs[Vs]=null;for(;i===is;)is=ai[--li],ai[li]=null,$i=ai[--li],ai[li]=null,Xi=ai[--li],ai[li]=null}var ti=null,ni=null,Yt=!1,xi=null;function um(i,o){var c=hi(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=i,o=i.deletions,o===null?(i.deletions=[c],i.flags|=16):o.push(c)}function dm(i,o){switch(i.tag){case 5:var c=i.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,ti=i,ni=Mr(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,ti=i,ni=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=is!==null?{id:Xi,overflow:$i}:null,i.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=hi(18,null,null,0),c.stateNode=o,c.return=i,i.child=c,ti=i,ni=null,!0):!1;default:return!1}}function Wu(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ju(i){if(Yt){var o=ni;if(o){var c=o;if(!dm(i,o)){if(Wu(i))throw Error(t(418));o=Mr(c.nextSibling);var h=ti;o&&dm(i,o)?um(h,c):(i.flags=i.flags&-4097|2,Yt=!1,ti=i)}}else{if(Wu(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,ti=i}}}function hm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ti=i}function wl(i){if(i!==ti)return!1;if(!Yt)return hm(i),Yt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Uu(i.type,i.memoizedProps)),o&&(o=ni)){if(Wu(i))throw fm(),Error(t(418));for(;o;)um(i,o),o=Mr(o.nextSibling)}if(hm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(o===0){ni=Mr(i.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}i=i.nextSibling}ni=null}}else ni=ti?Mr(i.stateNode.nextSibling):null;return!0}function fm(){for(var i=ni;i;)i=Mr(i.nextSibling)}function Hs(){ni=ti=null,Yt=!1}function Xu(i){xi===null?xi=[i]:xi.push(i)}var Zx=b.ReactCurrentBatchConfig;function sa(i,o,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var h=c.stateNode}if(!h)throw Error(t(147,i));var v=h,S=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===S?o.ref:(o=function(A){var z=v.refs;A===null?delete z[S]:z[S]=A},o._stringRef=S,o)}if(typeof i!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,i))}return i}function Tl(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function pm(i){var o=i._init;return o(i._payload)}function mm(i){function o(ne,$){if(i){var se=ne.deletions;se===null?(ne.deletions=[$],ne.flags|=16):se.push($)}}function c(ne,$){if(!i)return null;for(;$!==null;)o(ne,$),$=$.sibling;return null}function h(ne,$){for(ne=new Map;$!==null;)$.key!==null?ne.set($.key,$):ne.set($.index,$),$=$.sibling;return ne}function v(ne,$){return ne=Ir(ne,$),ne.index=0,ne.sibling=null,ne}function S(ne,$,se){return ne.index=se,i?(se=ne.alternate,se!==null?(se=se.index,se<$?(ne.flags|=2,$):se):(ne.flags|=2,$)):(ne.flags|=1048576,$)}function A(ne){return i&&ne.alternate===null&&(ne.flags|=2),ne}function z(ne,$,se,Te){return $===null||$.tag!==6?($=kd(se,ne.mode,Te),$.return=ne,$):($=v($,se),$.return=ne,$)}function G(ne,$,se,Te){var je=se.type;return je===F?Se(ne,$,se.props.children,Te,se.key):$!==null&&($.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Q&&pm(je)===$.type)?(Te=v($,se.props),Te.ref=sa(ne,$,se),Te.return=ne,Te):(Te=ql(se.type,se.key,se.props,null,ne.mode,Te),Te.ref=sa(ne,$,se),Te.return=ne,Te)}function ce(ne,$,se,Te){return $===null||$.tag!==4||$.stateNode.containerInfo!==se.containerInfo||$.stateNode.implementation!==se.implementation?($=Od(se,ne.mode,Te),$.return=ne,$):($=v($,se.children||[]),$.return=ne,$)}function Se(ne,$,se,Te,je){return $===null||$.tag!==7?($=hs(se,ne.mode,Te,je),$.return=ne,$):($=v($,se),$.return=ne,$)}function Me(ne,$,se){if(typeof $=="string"&&$!==""||typeof $=="number")return $=kd(""+$,ne.mode,se),$.return=ne,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case k:return se=ql($.type,$.key,$.props,null,ne.mode,se),se.ref=sa(ne,null,$),se.return=ne,se;case N:return $=Od($,ne.mode,se),$.return=ne,$;case Q:var Te=$._init;return Me(ne,Te($._payload),se)}if(Xe($)||ee($))return $=hs($,ne.mode,se,null),$.return=ne,$;Tl(ne,$)}return null}function xe(ne,$,se,Te){var je=$!==null?$.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return je!==null?null:z(ne,$,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case k:return se.key===je?G(ne,$,se,Te):null;case N:return se.key===je?ce(ne,$,se,Te):null;case Q:return je=se._init,xe(ne,$,je(se._payload),Te)}if(Xe(se)||ee(se))return je!==null?null:Se(ne,$,se,Te,null);Tl(ne,se)}return null}function Fe(ne,$,se,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ne=ne.get(se)||null,z($,ne,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return ne=ne.get(Te.key===null?se:Te.key)||null,G($,ne,Te,je);case N:return ne=ne.get(Te.key===null?se:Te.key)||null,ce($,ne,Te,je);case Q:var et=Te._init;return Fe(ne,$,se,et(Te._payload),je)}if(Xe(Te)||ee(Te))return ne=ne.get(se)||null,Se($,ne,Te,je,null);Tl($,Te)}return null}function He(ne,$,se,Te){for(var je=null,et=null,tt=$,ot=$=0,_n=null;tt!==null&&ot<se.length;ot++){tt.index>ot?(_n=tt,tt=null):_n=tt.sibling;var Rt=xe(ne,tt,se[ot],Te);if(Rt===null){tt===null&&(tt=_n);break}i&&tt&&Rt.alternate===null&&o(ne,tt),$=S(Rt,$,ot),et===null?je=Rt:et.sibling=Rt,et=Rt,tt=_n}if(ot===se.length)return c(ne,tt),Yt&&rs(ne,ot),je;if(tt===null){for(;ot<se.length;ot++)tt=Me(ne,se[ot],Te),tt!==null&&($=S(tt,$,ot),et===null?je=tt:et.sibling=tt,et=tt);return Yt&&rs(ne,ot),je}for(tt=h(ne,tt);ot<se.length;ot++)_n=Fe(tt,ne,ot,se[ot],Te),_n!==null&&(i&&_n.alternate!==null&&tt.delete(_n.key===null?ot:_n.key),$=S(_n,$,ot),et===null?je=_n:et.sibling=_n,et=_n);return i&&tt.forEach(function(Nr){return o(ne,Nr)}),Yt&&rs(ne,ot),je}function Ge(ne,$,se,Te){var je=ee(se);if(typeof je!="function")throw Error(t(150));if(se=je.call(se),se==null)throw Error(t(151));for(var et=je=null,tt=$,ot=$=0,_n=null,Rt=se.next();tt!==null&&!Rt.done;ot++,Rt=se.next()){tt.index>ot?(_n=tt,tt=null):_n=tt.sibling;var Nr=xe(ne,tt,Rt.value,Te);if(Nr===null){tt===null&&(tt=_n);break}i&&tt&&Nr.alternate===null&&o(ne,tt),$=S(Nr,$,ot),et===null?je=Nr:et.sibling=Nr,et=Nr,tt=_n}if(Rt.done)return c(ne,tt),Yt&&rs(ne,ot),je;if(tt===null){for(;!Rt.done;ot++,Rt=se.next())Rt=Me(ne,Rt.value,Te),Rt!==null&&($=S(Rt,$,ot),et===null?je=Rt:et.sibling=Rt,et=Rt);return Yt&&rs(ne,ot),je}for(tt=h(ne,tt);!Rt.done;ot++,Rt=se.next())Rt=Fe(tt,ne,ot,Rt.value,Te),Rt!==null&&(i&&Rt.alternate!==null&&tt.delete(Rt.key===null?ot:Rt.key),$=S(Rt,$,ot),et===null?je=Rt:et.sibling=Rt,et=Rt);return i&&tt.forEach(function(Py){return o(ne,Py)}),Yt&&rs(ne,ot),je}function nn(ne,$,se,Te){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case k:e:{for(var je=se.key,et=$;et!==null;){if(et.key===je){if(je=se.type,je===F){if(et.tag===7){c(ne,et.sibling),$=v(et,se.props.children),$.return=ne,ne=$;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Q&&pm(je)===et.type){c(ne,et.sibling),$=v(et,se.props),$.ref=sa(ne,et,se),$.return=ne,ne=$;break e}c(ne,et);break}else o(ne,et);et=et.sibling}se.type===F?($=hs(se.props.children,ne.mode,Te,se.key),$.return=ne,ne=$):(Te=ql(se.type,se.key,se.props,null,ne.mode,Te),Te.ref=sa(ne,$,se),Te.return=ne,ne=Te)}return A(ne);case N:e:{for(et=se.key;$!==null;){if($.key===et)if($.tag===4&&$.stateNode.containerInfo===se.containerInfo&&$.stateNode.implementation===se.implementation){c(ne,$.sibling),$=v($,se.children||[]),$.return=ne,ne=$;break e}else{c(ne,$);break}else o(ne,$);$=$.sibling}$=Od(se,ne.mode,Te),$.return=ne,ne=$}return A(ne);case Q:return et=se._init,nn(ne,$,et(se._payload),Te)}if(Xe(se))return He(ne,$,se,Te);if(ee(se))return Ge(ne,$,se,Te);Tl(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,$!==null&&$.tag===6?(c(ne,$.sibling),$=v($,se),$.return=ne,ne=$):(c(ne,$),$=kd(se,ne.mode,Te),$.return=ne,ne=$),A(ne)):c(ne,$)}return nn}var Gs=mm(!0),gm=mm(!1),bl=Er(null),Al=null,Ws=null,$u=null;function Yu(){$u=Ws=Al=null}function qu(i){var o=bl.current;Wt(bl),i._currentValue=o}function Ku(i,o,c){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===c)break;i=i.return}}function js(i,o){Al=i,$u=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&($n=!0),i.firstContext=null)}function ci(i){var o=i._currentValue;if($u!==i)if(i={context:i,memoizedValue:o,next:null},Ws===null){if(Al===null)throw Error(t(308));Ws=i,Al.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return o}var ss=null;function Zu(i){ss===null?ss=[i]:ss.push(i)}function vm(i,o,c,h){var v=o.interleaved;return v===null?(c.next=c,Zu(o)):(c.next=v.next,v.next=c),o.interleaved=c,Yi(i,h)}function Yi(i,o){i.lanes|=o;var c=i.alternate;for(c!==null&&(c.lanes|=o),c=i,i=i.return;i!==null;)i.childLanes|=o,c=i.alternate,c!==null&&(c.childLanes|=o),c=i,i=i.return;return c.tag===3?c.stateNode:null}var br=!1;function Ju(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function qi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ar(i,o,c){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(bt&2)!==0){var v=h.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),h.pending=o,Yi(i,c)}return v=h.interleaved,v===null?(o.next=o,Zu(h)):(o.next=v.next,v.next=o),h.interleaved=o,Yi(i,c)}function Cl(i,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,c|=h,o.lanes=c,es(i,c)}}function xm(i,o){var c=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var v=null,S=null;if(c=c.firstBaseUpdate,c!==null){do{var A={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};S===null?v=S=A:S=S.next=A,c=c.next}while(c!==null);S===null?v=S=o:S=S.next=o}else v=S=o;c={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:S,shared:h.shared,effects:h.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=o:i.next=o,c.lastBaseUpdate=o}function Rl(i,o,c,h){var v=i.updateQueue;br=!1;var S=v.firstBaseUpdate,A=v.lastBaseUpdate,z=v.shared.pending;if(z!==null){v.shared.pending=null;var G=z,ce=G.next;G.next=null,A===null?S=ce:A.next=ce,A=G;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,z=Se.lastBaseUpdate,z!==A&&(z===null?Se.firstBaseUpdate=ce:z.next=ce,Se.lastBaseUpdate=G))}if(S!==null){var Me=v.baseState;A=0,Se=ce=G=null,z=S;do{var xe=z.lane,Fe=z.eventTime;if((h&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Fe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var He=i,Ge=z;switch(xe=o,Fe=c,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Me=He.call(Fe,Me,xe);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,xe=typeof He=="function"?He.call(Fe,Me,xe):He,xe==null)break e;Me=le({},Me,xe);break e;case 2:br=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,xe=v.effects,xe===null?v.effects=[z]:xe.push(z))}else Fe={eventTime:Fe,lane:xe,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Se===null?(ce=Se=Fe,G=Me):Se=Se.next=Fe,A|=xe;if(z=z.next,z===null){if(z=v.shared.pending,z===null)break;xe=z,z=xe.next,xe.next=null,v.lastBaseUpdate=xe,v.shared.pending=null}}while(!0);if(Se===null&&(G=Me),v.baseState=G,v.firstBaseUpdate=ce,v.lastBaseUpdate=Se,o=v.shared.interleaved,o!==null){v=o;do A|=v.lane,v=v.next;while(v!==o)}else S===null&&(v.shared.lanes=0);ls|=A,i.lanes=A,i.memoizedState=Me}}function ym(i,o,c){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],v=h.callback;if(v!==null){if(h.callback=null,h=c,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var oa={},Di=Er(oa),aa=Er(oa),la=Er(oa);function os(i){if(i===oa)throw Error(t(174));return i}function Qu(i,o){switch(zt(la,o),zt(aa,i),zt(Di,oa),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:We(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=We(o,i)}Wt(Di),zt(Di,o)}function Xs(){Wt(Di),Wt(aa),Wt(la)}function Sm(i){os(la.current);var o=os(Di.current),c=We(o,i.type);o!==c&&(zt(aa,i),zt(Di,c))}function ed(i){aa.current===i&&(Wt(Di),Wt(aa))}var qt=Er(0);function Pl(i){for(var o=i;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var td=[];function nd(){for(var i=0;i<td.length;i++)td[i]._workInProgressVersionPrimary=null;td.length=0}var Ll=b.ReactCurrentDispatcher,id=b.ReactCurrentBatchConfig,as=0,Kt=null,ln=null,gn=null,Dl=!1,ca=!1,ua=0,Jx=0;function Rn(){throw Error(t(321))}function rd(i,o){if(o===null)return!1;for(var c=0;c<o.length&&c<i.length;c++)if(!_i(i[c],o[c]))return!1;return!0}function sd(i,o,c,h,v,S){if(as=S,Kt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Ll.current=i===null||i.memoizedState===null?ny:iy,i=c(h,v),ca){S=0;do{if(ca=!1,ua=0,25<=S)throw Error(t(301));S+=1,gn=ln=null,o.updateQueue=null,Ll.current=ry,i=c(h,v)}while(ca)}if(Ll.current=Fl,o=ln!==null&&ln.next!==null,as=0,gn=ln=Kt=null,Dl=!1,o)throw Error(t(300));return i}function od(){var i=ua!==0;return ua=0,i}function Ii(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=i:gn=gn.next=i,gn}function ui(){if(ln===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=ln.next;var o=gn===null?Kt.memoizedState:gn.next;if(o!==null)gn=o,ln=i;else{if(i===null)throw Error(t(310));ln=i,i={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},gn===null?Kt.memoizedState=gn=i:gn=gn.next=i}return gn}function da(i,o){return typeof o=="function"?o(i):o}function ad(i){var o=ui(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var h=ln,v=h.baseQueue,S=c.pending;if(S!==null){if(v!==null){var A=v.next;v.next=S.next,S.next=A}h.baseQueue=v=S,c.pending=null}if(v!==null){S=v.next,h=h.baseState;var z=A=null,G=null,ce=S;do{var Se=ce.lane;if((as&Se)===Se)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),h=ce.hasEagerState?ce.eagerState:i(h,ce.action);else{var Me={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(z=G=Me,A=h):G=G.next=Me,Kt.lanes|=Se,ls|=Se}ce=ce.next}while(ce!==null&&ce!==S);G===null?A=h:G.next=z,_i(h,o.memoizedState)||($n=!0),o.memoizedState=h,o.baseState=A,o.baseQueue=G,c.lastRenderedState=h}if(i=c.interleaved,i!==null){v=i;do S=v.lane,Kt.lanes|=S,ls|=S,v=v.next;while(v!==i)}else v===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function ld(i){var o=ui(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var h=c.dispatch,v=c.pending,S=o.memoizedState;if(v!==null){c.pending=null;var A=v=v.next;do S=i(S,A.action),A=A.next;while(A!==v);_i(S,o.memoizedState)||($n=!0),o.memoizedState=S,o.baseQueue===null&&(o.baseState=S),c.lastRenderedState=S}return[S,h]}function Mm(){}function Em(i,o){var c=Kt,h=ui(),v=o(),S=!_i(h.memoizedState,v);if(S&&(h.memoizedState=v,$n=!0),h=h.queue,cd(bm.bind(null,c,h,i),[i]),h.getSnapshot!==o||S||gn!==null&&gn.memoizedState.tag&1){if(c.flags|=2048,ha(9,Tm.bind(null,c,h,v,o),void 0,null),vn===null)throw Error(t(349));(as&30)!==0||wm(c,o,v)}return v}function wm(i,o,c){i.flags|=16384,i={getSnapshot:o,value:c},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.stores=[i]):(c=o.stores,c===null?o.stores=[i]:c.push(i))}function Tm(i,o,c,h){o.value=c,o.getSnapshot=h,Am(o)&&Cm(i)}function bm(i,o,c){return c(function(){Am(o)&&Cm(i)})}function Am(i){var o=i.getSnapshot;i=i.value;try{var c=o();return!_i(i,c)}catch{return!0}}function Cm(i){var o=Yi(i,1);o!==null&&Ei(o,i,1,-1)}function Rm(i){var o=Ii();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:i},o.queue=i,i=i.dispatch=ty.bind(null,Kt,i),[o.memoizedState,i]}function ha(i,o,c,h){return i={tag:i,create:o,destroy:c,deps:h,next:null},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.lastEffect=i.next=i):(c=o.lastEffect,c===null?o.lastEffect=i.next=i:(h=c.next,c.next=i,i.next=h,o.lastEffect=i)),i}function Pm(){return ui().memoizedState}function Il(i,o,c,h){var v=Ii();Kt.flags|=i,v.memoizedState=ha(1|o,c,void 0,h===void 0?null:h)}function Nl(i,o,c,h){var v=ui();h=h===void 0?null:h;var S=void 0;if(ln!==null){var A=ln.memoizedState;if(S=A.destroy,h!==null&&rd(h,A.deps)){v.memoizedState=ha(o,c,S,h);return}}Kt.flags|=i,v.memoizedState=ha(1|o,c,S,h)}function Lm(i,o){return Il(8390656,8,i,o)}function cd(i,o){return Nl(2048,8,i,o)}function Dm(i,o){return Nl(4,2,i,o)}function Im(i,o){return Nl(4,4,i,o)}function Nm(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Fm(i,o,c){return c=c!=null?c.concat([i]):null,Nl(4,4,Nm.bind(null,o,i),c)}function ud(){}function Um(i,o){var c=ui();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&rd(o,h[1])?h[0]:(c.memoizedState=[i,o],i)}function km(i,o){var c=ui();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&rd(o,h[1])?h[0]:(i=i(),c.memoizedState=[i,o],i)}function Om(i,o,c){return(as&21)===0?(i.baseState&&(i.baseState=!1,$n=!0),i.memoizedState=c):(_i(c,o)||(c=On(),Kt.lanes|=c,ls|=c,i.baseState=!0),o)}function Qx(i,o){var c=St;St=c!==0&&4>c?c:4,i(!0);var h=id.transition;id.transition={};try{i(!1),o()}finally{St=c,id.transition=h}}function Bm(){return ui().memoizedState}function ey(i,o,c){var h=Lr(i);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},zm(i))Vm(o,c);else if(c=vm(i,o,c,h),c!==null){var v=zn();Ei(c,i,h,v),Hm(c,o,h)}}function ty(i,o,c){var h=Lr(i),v={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(zm(i))Vm(o,v);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=o.lastRenderedReducer,S!==null))try{var A=o.lastRenderedState,z=S(A,c);if(v.hasEagerState=!0,v.eagerState=z,_i(z,A)){var G=o.interleaved;G===null?(v.next=v,Zu(o)):(v.next=G.next,G.next=v),o.interleaved=v;return}}catch{}finally{}c=vm(i,o,v,h),c!==null&&(v=zn(),Ei(c,i,h,v),Hm(c,o,h))}}function zm(i){var o=i.alternate;return i===Kt||o!==null&&o===Kt}function Vm(i,o){ca=Dl=!0;var c=i.pending;c===null?o.next=o:(o.next=c.next,c.next=o),i.pending=o}function Hm(i,o,c){if((c&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,c|=h,o.lanes=c,es(i,c)}}var Fl={readContext:ci,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},ny={readContext:ci,useCallback:function(i,o){return Ii().memoizedState=[i,o===void 0?null:o],i},useContext:ci,useEffect:Lm,useImperativeHandle:function(i,o,c){return c=c!=null?c.concat([i]):null,Il(4194308,4,Nm.bind(null,o,i),c)},useLayoutEffect:function(i,o){return Il(4194308,4,i,o)},useInsertionEffect:function(i,o){return Il(4,2,i,o)},useMemo:function(i,o){var c=Ii();return o=o===void 0?null:o,i=i(),c.memoizedState=[i,o],i},useReducer:function(i,o,c){var h=Ii();return o=c!==void 0?c(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=ey.bind(null,Kt,i),[h.memoizedState,i]},useRef:function(i){var o=Ii();return i={current:i},o.memoizedState=i},useState:Rm,useDebugValue:ud,useDeferredValue:function(i){return Ii().memoizedState=i},useTransition:function(){var i=Rm(!1),o=i[0];return i=Qx.bind(null,i[1]),Ii().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,c){var h=Kt,v=Ii();if(Yt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=o(),vn===null)throw Error(t(349));(as&30)!==0||wm(h,o,c)}v.memoizedState=c;var S={value:c,getSnapshot:o};return v.queue=S,Lm(bm.bind(null,h,S,i),[i]),h.flags|=2048,ha(9,Tm.bind(null,h,S,c,o),void 0,null),c},useId:function(){var i=Ii(),o=vn.identifierPrefix;if(Yt){var c=$i,h=Xi;c=(h&~(1<<32-Ct(h)-1)).toString(32)+c,o=":"+o+"R"+c,c=ua++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=Jx++,o=":"+o+"r"+c.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},iy={readContext:ci,useCallback:Um,useContext:ci,useEffect:cd,useImperativeHandle:Fm,useInsertionEffect:Dm,useLayoutEffect:Im,useMemo:km,useReducer:ad,useRef:Pm,useState:function(){return ad(da)},useDebugValue:ud,useDeferredValue:function(i){var o=ui();return Om(o,ln.memoizedState,i)},useTransition:function(){var i=ad(da)[0],o=ui().memoizedState;return[i,o]},useMutableSource:Mm,useSyncExternalStore:Em,useId:Bm,unstable_isNewReconciler:!1},ry={readContext:ci,useCallback:Um,useContext:ci,useEffect:cd,useImperativeHandle:Fm,useInsertionEffect:Dm,useLayoutEffect:Im,useMemo:km,useReducer:ld,useRef:Pm,useState:function(){return ld(da)},useDebugValue:ud,useDeferredValue:function(i){var o=ui();return ln===null?o.memoizedState=i:Om(o,ln.memoizedState,i)},useTransition:function(){var i=ld(da)[0],o=ui().memoizedState;return[i,o]},useMutableSource:Mm,useSyncExternalStore:Em,useId:Bm,unstable_isNewReconciler:!1};function yi(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var c in i)o[c]===void 0&&(o[c]=i[c]);return o}return o}function dd(i,o,c,h){o=i.memoizedState,c=c(h,o),c=c==null?o:le({},o,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var Ul={isMounted:function(i){return(i=i._reactInternals)?Pi(i)===i:!1},enqueueSetState:function(i,o,c){i=i._reactInternals;var h=zn(),v=Lr(i),S=qi(h,v);S.payload=o,c!=null&&(S.callback=c),o=Ar(i,S,v),o!==null&&(Ei(o,i,v,h),Cl(o,i,v))},enqueueReplaceState:function(i,o,c){i=i._reactInternals;var h=zn(),v=Lr(i),S=qi(h,v);S.tag=1,S.payload=o,c!=null&&(S.callback=c),o=Ar(i,S,v),o!==null&&(Ei(o,i,v,h),Cl(o,i,v))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var c=zn(),h=Lr(i),v=qi(c,h);v.tag=2,o!=null&&(v.callback=o),o=Ar(i,v,h),o!==null&&(Ei(o,i,h,c),Cl(o,i,h))}};function Gm(i,o,c,h,v,S,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,S,A):o.prototype&&o.prototype.isPureReactComponent?!Jo(c,h)||!Jo(v,S):!0}function Wm(i,o,c){var h=!1,v=wr,S=o.contextType;return typeof S=="object"&&S!==null?S=ci(S):(v=Xn(o)?ns:Cn.current,h=o.contextTypes,S=(h=h!=null)?Bs(i,v):wr),o=new o(c,S),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ul,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=S),o}function jm(i,o,c,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,h),o.state!==i&&Ul.enqueueReplaceState(o,o.state,null)}function hd(i,o,c,h){var v=i.stateNode;v.props=c,v.state=i.memoizedState,v.refs={},Ju(i);var S=o.contextType;typeof S=="object"&&S!==null?v.context=ci(S):(S=Xn(o)?ns:Cn.current,v.context=Bs(i,S)),v.state=i.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(dd(i,o,S,c),v.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&Ul.enqueueReplaceState(v,v.state,null),Rl(i,c,v,h),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function $s(i,o){try{var c="",h=o;do c+=he(h),h=h.return;while(h);var v=c}catch(S){v=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:o,stack:v,digest:null}}function fd(i,o,c){return{value:i,source:null,stack:c??null,digest:o??null}}function pd(i,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Xm(i,o,c){c=qi(-1,c),c.tag=3,c.payload={element:null};var h=o.value;return c.callback=function(){Gl||(Gl=!0,Rd=h),pd(i,o)},c}function $m(i,o,c){c=qi(-1,c),c.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var v=o.value;c.payload=function(){return h(v)},c.callback=function(){pd(i,o)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(c.callback=function(){pd(i,o),typeof h!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),c}function Ym(i,o,c){var h=i.pingCache;if(h===null){h=i.pingCache=new sy;var v=new Set;h.set(o,v)}else v=h.get(o),v===void 0&&(v=new Set,h.set(o,v));v.has(c)||(v.add(c),i=xy.bind(null,i,o,c),o.then(i,i))}function qm(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Km(i,o,c,h,v){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=qi(-1,1),o.tag=2,Ar(c,o,1))),c.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var oy=b.ReactCurrentOwner,$n=!1;function Bn(i,o,c,h){o.child=i===null?gm(o,null,c,h):Gs(o,i.child,c,h)}function Zm(i,o,c,h,v){c=c.render;var S=o.ref;return js(o,v),h=sd(i,o,c,h,S,v),c=od(),i!==null&&!$n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,Ki(i,o,v)):(Yt&&c&&Hu(o),o.flags|=1,Bn(i,o,h,v),o.child)}function Jm(i,o,c,h,v){if(i===null){var S=c.type;return typeof S=="function"&&!Ud(S)&&S.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=S,Qm(i,o,S,h,v)):(i=ql(c.type,null,h,o,o.mode,v),i.ref=o.ref,i.return=o,o.child=i)}if(S=i.child,(i.lanes&v)===0){var A=S.memoizedProps;if(c=c.compare,c=c!==null?c:Jo,c(A,h)&&i.ref===o.ref)return Ki(i,o,v)}return o.flags|=1,i=Ir(S,h),i.ref=o.ref,i.return=o,o.child=i}function Qm(i,o,c,h,v){if(i!==null){var S=i.memoizedProps;if(Jo(S,h)&&i.ref===o.ref)if($n=!1,o.pendingProps=h=S,(i.lanes&v)!==0)(i.flags&131072)!==0&&($n=!0);else return o.lanes=i.lanes,Ki(i,o,v)}return md(i,o,c,h,v)}function eg(i,o,c){var h=o.pendingProps,v=h.children,S=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(qs,ii),ii|=c;else{if((c&1073741824)===0)return i=S!==null?S.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,zt(qs,ii),ii|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=S!==null?S.baseLanes:c,zt(qs,ii),ii|=h}else S!==null?(h=S.baseLanes|c,o.memoizedState=null):h=c,zt(qs,ii),ii|=h;return Bn(i,o,v,c),o.child}function tg(i,o){var c=o.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function md(i,o,c,h,v){var S=Xn(c)?ns:Cn.current;return S=Bs(o,S),js(o,v),c=sd(i,o,c,h,S,v),h=od(),i!==null&&!$n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,Ki(i,o,v)):(Yt&&h&&Hu(o),o.flags|=1,Bn(i,o,c,v),o.child)}function ng(i,o,c,h,v){if(Xn(c)){var S=!0;yl(o)}else S=!1;if(js(o,v),o.stateNode===null)Ol(i,o),Wm(o,c,h),hd(o,c,h,v),h=!0;else if(i===null){var A=o.stateNode,z=o.memoizedProps;A.props=z;var G=A.context,ce=c.contextType;typeof ce=="object"&&ce!==null?ce=ci(ce):(ce=Xn(c)?ns:Cn.current,ce=Bs(o,ce));var Se=c.getDerivedStateFromProps,Me=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==h||G!==ce)&&jm(o,A,h,ce),br=!1;var xe=o.memoizedState;A.state=xe,Rl(o,h,A,v),G=o.memoizedState,z!==h||xe!==G||jn.current||br?(typeof Se=="function"&&(dd(o,c,Se,h),G=o.memoizedState),(z=br||Gm(o,c,z,h,xe,G,ce))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=G),A.props=h,A.state=G,A.context=ce,h=z):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{A=o.stateNode,_m(i,o),z=o.memoizedProps,ce=o.type===o.elementType?z:yi(o.type,z),A.props=ce,Me=o.pendingProps,xe=A.context,G=c.contextType,typeof G=="object"&&G!==null?G=ci(G):(G=Xn(c)?ns:Cn.current,G=Bs(o,G));var Fe=c.getDerivedStateFromProps;(Se=typeof Fe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Me||xe!==G)&&jm(o,A,h,G),br=!1,xe=o.memoizedState,A.state=xe,Rl(o,h,A,v);var He=o.memoizedState;z!==Me||xe!==He||jn.current||br?(typeof Fe=="function"&&(dd(o,c,Fe,h),He=o.memoizedState),(ce=br||Gm(o,c,ce,h,xe,He,G)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(h,He,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(h,He,G)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=He),A.props=h,A.state=He,A.context=G,h=ce):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=1024),h=!1)}return gd(i,o,c,h,S,v)}function gd(i,o,c,h,v,S){tg(i,o);var A=(o.flags&128)!==0;if(!h&&!A)return v&&am(o,c,!1),Ki(i,o,S);h=o.stateNode,oy.current=o;var z=A&&typeof c.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&A?(o.child=Gs(o,i.child,null,S),o.child=Gs(o,null,z,S)):Bn(i,o,z,S),o.memoizedState=h.state,v&&am(o,c,!0),o.child}function ig(i){var o=i.stateNode;o.pendingContext?sm(i,o.pendingContext,o.pendingContext!==o.context):o.context&&sm(i,o.context,!1),Qu(i,o.containerInfo)}function rg(i,o,c,h,v){return Hs(),Xu(v),o.flags|=256,Bn(i,o,c,h),o.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(i){return{baseLanes:i,cachePool:null,transitions:null}}function sg(i,o,c){var h=o.pendingProps,v=qt.current,S=!1,A=(o.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(v&2)!==0),z?(S=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),zt(qt,v&1),i===null)return ju(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=h.children,i=h.fallback,S?(h=o.mode,S=o.child,A={mode:"hidden",children:A},(h&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=A):S=Kl(A,h,0,null),i=hs(i,h,c,null),S.return=o,i.return=o,S.sibling=i,o.child=S,o.child.memoizedState=_d(c),o.memoizedState=vd,i):xd(o,A));if(v=i.memoizedState,v!==null&&(z=v.dehydrated,z!==null))return ay(i,o,A,h,z,v,c);if(S){S=h.fallback,A=o.mode,v=i.child,z=v.sibling;var G={mode:"hidden",children:h.children};return(A&1)===0&&o.child!==v?(h=o.child,h.childLanes=0,h.pendingProps=G,o.deletions=null):(h=Ir(v,G),h.subtreeFlags=v.subtreeFlags&14680064),z!==null?S=Ir(z,S):(S=hs(S,A,c,null),S.flags|=2),S.return=o,h.return=o,h.sibling=S,o.child=h,h=S,S=o.child,A=i.child.memoizedState,A=A===null?_d(c):{baseLanes:A.baseLanes|c,cachePool:null,transitions:A.transitions},S.memoizedState=A,S.childLanes=i.childLanes&~c,o.memoizedState=vd,h}return S=i.child,i=S.sibling,h=Ir(S,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=c),h.return=o,h.sibling=null,i!==null&&(c=o.deletions,c===null?(o.deletions=[i],o.flags|=16):c.push(i)),o.child=h,o.memoizedState=null,h}function xd(i,o){return o=Kl({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function kl(i,o,c,h){return h!==null&&Xu(h),Gs(o,i.child,null,c),i=xd(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function ay(i,o,c,h,v,S,A){if(c)return o.flags&256?(o.flags&=-257,h=fd(Error(t(422))),kl(i,o,A,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(S=h.fallback,v=o.mode,h=Kl({mode:"visible",children:h.children},v,0,null),S=hs(S,v,A,null),S.flags|=2,h.return=o,S.return=o,h.sibling=S,o.child=h,(o.mode&1)!==0&&Gs(o,i.child,null,A),o.child.memoizedState=_d(A),o.memoizedState=vd,S);if((o.mode&1)===0)return kl(i,o,A,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var z=h.dgst;return h=z,S=Error(t(419)),h=fd(S,h,void 0),kl(i,o,A,h)}if(z=(A&i.childLanes)!==0,$n||z){if(h=vn,h!==null){switch(A&-A){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(h.suspendedLanes|A))!==0?0:v,v!==0&&v!==S.retryLane&&(S.retryLane=v,Yi(i,v),Ei(h,i,v,-1))}return Fd(),h=fd(Error(t(421))),kl(i,o,A,h)}return v.data==="$?"?(o.flags|=128,o.child=i.child,o=yy.bind(null,i),v._reactRetry=o,null):(i=S.treeContext,ni=Mr(v.nextSibling),ti=o,Yt=!0,xi=null,i!==null&&(ai[li++]=Xi,ai[li++]=$i,ai[li++]=is,Xi=i.id,$i=i.overflow,is=o),o=xd(o,h.children),o.flags|=4096,o)}function og(i,o,c){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Ku(i.return,o,c)}function yd(i,o,c,h,v){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:v}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=h,S.tail=c,S.tailMode=v)}function ag(i,o,c){var h=o.pendingProps,v=h.revealOrder,S=h.tail;if(Bn(i,o,h.children,c),h=qt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&og(i,c,o);else if(i.tag===19)og(i,c,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(zt(qt,h),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(c=o.child,v=null;c!==null;)i=c.alternate,i!==null&&Pl(i)===null&&(v=c),c=c.sibling;c=v,c===null?(v=o.child,o.child=null):(v=c.sibling,c.sibling=null),yd(o,!1,v,c,S);break;case"backwards":for(c=null,v=o.child,o.child=null;v!==null;){if(i=v.alternate,i!==null&&Pl(i)===null){o.child=v;break}i=v.sibling,v.sibling=c,c=v,v=i}yd(o,!0,c,null,S);break;case"together":yd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Ol(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Ki(i,o,c){if(i!==null&&(o.dependencies=i.dependencies),ls|=o.lanes,(c&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,c=Ir(i,i.pendingProps),o.child=c,c.return=o;i.sibling!==null;)i=i.sibling,c=c.sibling=Ir(i,i.pendingProps),c.return=o;c.sibling=null}return o.child}function ly(i,o,c){switch(o.tag){case 3:ig(o),Hs();break;case 5:Sm(o);break;case 1:Xn(o.type)&&yl(o);break;case 4:Qu(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,v=o.memoizedProps.value;zt(bl,h._currentValue),h._currentValue=v;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(zt(qt,qt.current&1),o.flags|=128,null):(c&o.child.childLanes)!==0?sg(i,o,c):(zt(qt,qt.current&1),i=Ki(i,o,c),i!==null?i.sibling:null);zt(qt,qt.current&1);break;case 19:if(h=(c&o.childLanes)!==0,(i.flags&128)!==0){if(h)return ag(i,o,c);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),zt(qt,qt.current),h)break;return null;case 22:case 23:return o.lanes=0,eg(i,o,c)}return Ki(i,o,c)}var lg,Sd,cg,ug;lg=function(i,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Sd=function(){},cg=function(i,o,c,h){var v=i.memoizedProps;if(v!==h){i=o.stateNode,os(Di.current);var S=null;switch(c){case"input":v=W(i,v),h=W(i,h),S=[];break;case"select":v=le({},v,{value:void 0}),h=le({},h,{value:void 0}),S=[];break;case"textarea":v=L(i,v),h=L(i,h),S=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=vl)}_t(c,h);var A;c=null;for(ce in v)if(!h.hasOwnProperty(ce)&&v.hasOwnProperty(ce)&&v[ce]!=null)if(ce==="style"){var z=v[ce];for(A in z)z.hasOwnProperty(A)&&(c||(c={}),c[A]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(s.hasOwnProperty(ce)?S||(S=[]):(S=S||[]).push(ce,null));for(ce in h){var G=h[ce];if(z=v?.[ce],h.hasOwnProperty(ce)&&G!==z&&(G!=null||z!=null))if(ce==="style")if(z){for(A in z)!z.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(c||(c={}),c[A]="");for(A in G)G.hasOwnProperty(A)&&z[A]!==G[A]&&(c||(c={}),c[A]=G[A])}else c||(S||(S=[]),S.push(ce,c)),c=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(S=S||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(S=S||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(s.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&Gt("scroll",i),S||z===G||(S=[])):(S=S||[]).push(ce,G))}c&&(S=S||[]).push("style",c);var ce=S;(o.updateQueue=ce)&&(o.flags|=4)}},ug=function(i,o,c,h){c!==h&&(o.flags|=4)};function fa(i,o){if(!Yt)switch(i.tailMode){case"hidden":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Pn(i){var o=i.alternate!==null&&i.alternate.child===i.child,c=0,h=0;if(o)for(var v=i.child;v!==null;)c|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)c|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=h,i.childLanes=c,o}function cy(i,o,c){var h=o.pendingProps;switch(Gu(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(o),null;case 1:return Xn(o.type)&&xl(),Pn(o),null;case 3:return h=o.stateNode,Xs(),Wt(jn),Wt(Cn),nd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(wl(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,xi!==null&&(Dd(xi),xi=null))),Sd(i,o),Pn(o),null;case 5:ed(o);var v=os(la.current);if(c=o.type,i!==null&&o.stateNode!=null)cg(i,o,c,h,v),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Pn(o),null}if(i=os(Di.current),wl(o)){h=o.stateNode,c=o.type;var S=o.memoizedProps;switch(h[Li]=o,h[ia]=S,i=(o.mode&1)!==0,c){case"dialog":Gt("cancel",h),Gt("close",h);break;case"iframe":case"object":case"embed":Gt("load",h);break;case"video":case"audio":for(v=0;v<ea.length;v++)Gt(ea[v],h);break;case"source":Gt("error",h);break;case"img":case"image":case"link":Gt("error",h),Gt("load",h);break;case"details":Gt("toggle",h);break;case"input":Fn(h,S),Gt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!S.multiple},Gt("invalid",h);break;case"textarea":ae(h,S),Gt("invalid",h)}_t(c,S),v=null;for(var A in S)if(S.hasOwnProperty(A)){var z=S[A];A==="children"?typeof z=="string"?h.textContent!==z&&(S.suppressHydrationWarning!==!0&&gl(h.textContent,z,i),v=["children",z]):typeof z=="number"&&h.textContent!==""+z&&(S.suppressHydrationWarning!==!0&&gl(h.textContent,z,i),v=["children",""+z]):s.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Gt("scroll",h)}switch(c){case"input":Lt(h),Ye(h,S,!0);break;case"textarea":Lt(h),ye(h);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(h.onclick=vl)}h=v,o.updateQueue=h,h!==null&&(o.flags|=4)}else{A=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=A.createElement(c,{is:h.is}):(i=A.createElement(c),c==="select"&&(A=i,h.multiple?A.multiple=!0:h.size&&(A.size=h.size))):i=A.createElementNS(i,c),i[Li]=o,i[ia]=h,lg(i,o,!1,!1),o.stateNode=i;e:{switch(A=at(c,h),c){case"dialog":Gt("cancel",i),Gt("close",i),v=h;break;case"iframe":case"object":case"embed":Gt("load",i),v=h;break;case"video":case"audio":for(v=0;v<ea.length;v++)Gt(ea[v],i);v=h;break;case"source":Gt("error",i),v=h;break;case"img":case"image":case"link":Gt("error",i),Gt("load",i),v=h;break;case"details":Gt("toggle",i),v=h;break;case"input":Fn(i,h),v=W(i,h),Gt("invalid",i);break;case"option":v=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},v=le({},h,{value:void 0}),Gt("invalid",i);break;case"textarea":ae(i,h),v=L(i,h),Gt("invalid",i);break;default:v=h}_t(c,v),z=v;for(S in z)if(z.hasOwnProperty(S)){var G=z[S];S==="style"?it(i,G):S==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&ke(i,G)):S==="children"?typeof G=="string"?(c!=="textarea"||G!=="")&&mt(i,G):typeof G=="number"&&mt(i,""+G):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(s.hasOwnProperty(S)?G!=null&&S==="onScroll"&&Gt("scroll",i):G!=null&&w(i,S,G,A))}switch(c){case"input":Lt(i),Ye(i,h,!1);break;case"textarea":Lt(i),ye(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ae(h.value));break;case"select":i.multiple=!!h.multiple,S=h.value,S!=null?O(i,!!h.multiple,S,!1):h.defaultValue!=null&&O(i,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=vl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Pn(o),null;case 6:if(i&&o.stateNode!=null)ug(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(c=os(la.current),os(Di.current),wl(o)){if(h=o.stateNode,c=o.memoizedProps,h[Li]=o,(S=h.nodeValue!==c)&&(i=ti,i!==null))switch(i.tag){case 3:gl(h.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&gl(h.nodeValue,c,(i.mode&1)!==0)}S&&(o.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[Li]=o,o.stateNode=h}return Pn(o),null;case 13:if(Wt(qt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&ni!==null&&(o.mode&1)!==0&&(o.flags&128)===0)fm(),Hs(),o.flags|=98560,S=!1;else if(S=wl(o),h!==null&&h.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=o.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Li]=o}else Hs(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Pn(o),S=!1}else xi!==null&&(Dd(xi),xi=null),S=!0;if(!S)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=c,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(qt.current&1)!==0?cn===0&&(cn=3):Fd())),o.updateQueue!==null&&(o.flags|=4),Pn(o),null);case 4:return Xs(),Sd(i,o),i===null&&ta(o.stateNode.containerInfo),Pn(o),null;case 10:return qu(o.type._context),Pn(o),null;case 17:return Xn(o.type)&&xl(),Pn(o),null;case 19:if(Wt(qt),S=o.memoizedState,S===null)return Pn(o),null;if(h=(o.flags&128)!==0,A=S.rendering,A===null)if(h)fa(S,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(A=Pl(i),A!==null){for(o.flags|=128,fa(S,!1),h=A.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=c,c=o.child;c!==null;)S=c,i=h,S.flags&=14680066,A=S.alternate,A===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=A.childLanes,S.lanes=A.lanes,S.child=A.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=A.memoizedProps,S.memoizedState=A.memoizedState,S.updateQueue=A.updateQueue,S.type=A.type,i=A.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return zt(qt,qt.current&1|2),o.child}i=i.sibling}S.tail!==null&&X()>Ks&&(o.flags|=128,h=!0,fa(S,!1),o.lanes=4194304)}else{if(!h)if(i=Pl(A),i!==null){if(o.flags|=128,h=!0,c=i.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),fa(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!Yt)return Pn(o),null}else 2*X()-S.renderingStartTime>Ks&&c!==1073741824&&(o.flags|=128,h=!0,fa(S,!1),o.lanes=4194304);S.isBackwards?(A.sibling=o.child,o.child=A):(c=S.last,c!==null?c.sibling=A:o.child=A,S.last=A)}return S.tail!==null?(o=S.tail,S.rendering=o,S.tail=o.sibling,S.renderingStartTime=X(),o.sibling=null,c=qt.current,zt(qt,h?c&1|2:c&1),o):(Pn(o),null);case 22:case 23:return Nd(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(ii&1073741824)!==0&&(Pn(o),o.subtreeFlags&6&&(o.flags|=8192)):Pn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function uy(i,o){switch(Gu(o),o.tag){case 1:return Xn(o.type)&&xl(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Xs(),Wt(jn),Wt(Cn),nd(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return ed(o),null;case 13:if(Wt(qt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Hs()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Wt(qt),null;case 4:return Xs(),null;case 10:return qu(o.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Bl=!1,Ln=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ys(i,o){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){en(i,o,h)}else c.current=null}function Md(i,o,c){try{c()}catch(h){en(i,o,h)}}var dg=!1;function hy(i,o){if(Nu=sl,i=Gp(),bu(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var v=h.anchorOffset,S=h.focusNode;h=h.focusOffset;try{c.nodeType,S.nodeType}catch{c=null;break e}var A=0,z=-1,G=-1,ce=0,Se=0,Me=i,xe=null;t:for(;;){for(var Fe;Me!==c||v!==0&&Me.nodeType!==3||(z=A+v),Me!==S||h!==0&&Me.nodeType!==3||(G=A+h),Me.nodeType===3&&(A+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)xe=Me,Me=Fe;for(;;){if(Me===i)break t;if(xe===c&&++ce===v&&(z=A),xe===S&&++Se===h&&(G=A),(Fe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Fe}c=z===-1||G===-1?null:{start:z,end:G}}else c=null}c=c||{start:0,end:0}}else c=null;for(Fu={focusedElem:i,selectionRange:c},sl=!1,Be=o;Be!==null;)if(o=Be,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Be=i;else for(;Be!==null;){o=Be;try{var He=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,nn=He.memoizedState,ne=o.stateNode,$=ne.getSnapshotBeforeUpdate(o.elementType===o.type?Ge:yi(o.type,Ge),nn);ne.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var se=o.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){en(o,o.return,Te)}if(i=o.sibling,i!==null){i.return=o.return,Be=i;break}Be=o.return}return He=dg,dg=!1,He}function pa(i,o,c){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&i)===i){var S=v.destroy;v.destroy=void 0,S!==void 0&&Md(o,c,S)}v=v.next}while(v!==h)}}function zl(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&i)===i){var h=c.create;c.destroy=h()}c=c.next}while(c!==o)}}function Ed(i){var o=i.ref;if(o!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof o=="function"?o(i):o.current=i}}function hg(i){var o=i.alternate;o!==null&&(i.alternate=null,hg(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Li],delete o[ia],delete o[Bu],delete o[Yx],delete o[qx])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function fg(i){return i.tag===5||i.tag===3||i.tag===4}function pg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||fg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function wd(i,o,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(i,o):c.insertBefore(i,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(i,c)):(o=c,o.appendChild(i)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=vl));else if(h!==4&&(i=i.child,i!==null))for(wd(i,o,c),i=i.sibling;i!==null;)wd(i,o,c),i=i.sibling}function Td(i,o,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?c.insertBefore(i,o):c.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Td(i,o,c),i=i.sibling;i!==null;)Td(i,o,c),i=i.sibling}var Mn=null,Si=!1;function Cr(i,o,c){for(c=c.child;c!==null;)mg(i,o,c),c=c.sibling}function mg(i,o,c){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount($e,c)}catch{}switch(c.tag){case 5:Ln||Ys(c,o);case 6:var h=Mn,v=Si;Mn=null,Cr(i,o,c),Mn=h,Si=v,Mn!==null&&(Si?(i=Mn,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Mn.removeChild(c.stateNode));break;case 18:Mn!==null&&(Si?(i=Mn,c=c.stateNode,i.nodeType===8?Ou(i.parentNode,c):i.nodeType===1&&Ou(i,c),Xo(i)):Ou(Mn,c.stateNode));break;case 4:h=Mn,v=Si,Mn=c.stateNode.containerInfo,Si=!0,Cr(i,o,c),Mn=h,Si=v;break;case 0:case 11:case 14:case 15:if(!Ln&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var S=v,A=S.destroy;S=S.tag,A!==void 0&&((S&2)!==0||(S&4)!==0)&&Md(c,o,A),v=v.next}while(v!==h)}Cr(i,o,c);break;case 1:if(!Ln&&(Ys(c,o),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(z){en(c,o,z)}Cr(i,o,c);break;case 21:Cr(i,o,c);break;case 22:c.mode&1?(Ln=(h=Ln)||c.memoizedState!==null,Cr(i,o,c),Ln=h):Cr(i,o,c);break;default:Cr(i,o,c)}}function gg(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new dy),o.forEach(function(h){var v=Sy.bind(null,i,h);c.has(h)||(c.add(h),h.then(v,v))})}}function Mi(i,o){var c=o.deletions;if(c!==null)for(var h=0;h<c.length;h++){var v=c[h];try{var S=i,A=o,z=A;e:for(;z!==null;){switch(z.tag){case 5:Mn=z.stateNode,Si=!1;break e;case 3:Mn=z.stateNode.containerInfo,Si=!0;break e;case 4:Mn=z.stateNode.containerInfo,Si=!0;break e}z=z.return}if(Mn===null)throw Error(t(160));mg(S,A,v),Mn=null,Si=!1;var G=v.alternate;G!==null&&(G.return=null),v.return=null}catch(ce){en(v,o,ce)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)vg(o,i),o=o.sibling}function vg(i,o){var c=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Mi(o,i),Ni(i),h&4){try{pa(3,i,i.return),zl(3,i)}catch(Ge){en(i,i.return,Ge)}try{pa(5,i,i.return)}catch(Ge){en(i,i.return,Ge)}}break;case 1:Mi(o,i),Ni(i),h&512&&c!==null&&Ys(c,c.return);break;case 5:if(Mi(o,i),Ni(i),h&512&&c!==null&&Ys(c,c.return),i.flags&32){var v=i.stateNode;try{mt(v,"")}catch(Ge){en(i,i.return,Ge)}}if(h&4&&(v=i.stateNode,v!=null)){var S=i.memoizedProps,A=c!==null?c.memoizedProps:S,z=i.type,G=i.updateQueue;if(i.updateQueue=null,G!==null)try{z==="input"&&S.type==="radio"&&S.name!=null&&yt(v,S),at(z,A);var ce=at(z,S);for(A=0;A<G.length;A+=2){var Se=G[A],Me=G[A+1];Se==="style"?it(v,Me):Se==="dangerouslySetInnerHTML"?ke(v,Me):Se==="children"?mt(v,Me):w(v,Se,Me,ce)}switch(z){case"input":vt(v,S);break;case"textarea":_e(v,S);break;case"select":var xe=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!S.multiple;var Fe=S.value;Fe!=null?O(v,!!S.multiple,Fe,!1):xe!==!!S.multiple&&(S.defaultValue!=null?O(v,!!S.multiple,S.defaultValue,!0):O(v,!!S.multiple,S.multiple?[]:"",!1))}v[ia]=S}catch(Ge){en(i,i.return,Ge)}}break;case 6:if(Mi(o,i),Ni(i),h&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,S=i.memoizedProps;try{v.nodeValue=S}catch(Ge){en(i,i.return,Ge)}}break;case 3:if(Mi(o,i),Ni(i),h&4&&c!==null&&c.memoizedState.isDehydrated)try{Xo(o.containerInfo)}catch(Ge){en(i,i.return,Ge)}break;case 4:Mi(o,i),Ni(i);break;case 13:Mi(o,i),Ni(i),v=i.child,v.flags&8192&&(S=v.memoizedState!==null,v.stateNode.isHidden=S,!S||v.alternate!==null&&v.alternate.memoizedState!==null||(Cd=X())),h&4&&gg(i);break;case 22:if(Se=c!==null&&c.memoizedState!==null,i.mode&1?(Ln=(ce=Ln)||Se,Mi(o,i),Ln=ce):Mi(o,i),Ni(i),h&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!Se&&(i.mode&1)!==0)for(Be=i,Se=i.child;Se!==null;){for(Me=Be=Se;Be!==null;){switch(xe=Be,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:pa(4,xe,xe.return);break;case 1:Ys(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){h=xe,c=xe.return;try{o=h,He.props=o.memoizedProps,He.state=o.memoizedState,He.componentWillUnmount()}catch(Ge){en(h,c,Ge)}}break;case 5:Ys(xe,xe.return);break;case 22:if(xe.memoizedState!==null){yg(Me);continue}}Fe!==null?(Fe.return=xe,Be=Fe):yg(Me)}Se=Se.sibling}e:for(Se=null,Me=i;;){if(Me.tag===5){if(Se===null){Se=Me;try{v=Me.stateNode,ce?(S=v.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(z=Me.stateNode,G=Me.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=Qe("display",A))}catch(Ge){en(i,i.return,Ge)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ce?"":Me.memoizedProps}catch(Ge){en(i,i.return,Ge)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Mi(o,i),Ni(i),h&4&&gg(i);break;case 21:break;default:Mi(o,i),Ni(i)}}function Ni(i){var o=i.flags;if(o&2){try{e:{for(var c=i.return;c!==null;){if(fg(c)){var h=c;break e}c=c.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(mt(v,""),h.flags&=-33);var S=pg(i);Td(i,S,v);break;case 3:case 4:var A=h.stateNode.containerInfo,z=pg(i);wd(i,z,A);break;default:throw Error(t(161))}}catch(G){en(i,i.return,G)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function fy(i,o,c){Be=i,_g(i)}function _g(i,o,c){for(var h=(i.mode&1)!==0;Be!==null;){var v=Be,S=v.child;if(v.tag===22&&h){var A=v.memoizedState!==null||Bl;if(!A){var z=v.alternate,G=z!==null&&z.memoizedState!==null||Ln;z=Bl;var ce=Ln;if(Bl=A,(Ln=G)&&!ce)for(Be=v;Be!==null;)A=Be,G=A.child,A.tag===22&&A.memoizedState!==null?Sg(v):G!==null?(G.return=A,Be=G):Sg(v);for(;S!==null;)Be=S,_g(S),S=S.sibling;Be=v,Bl=z,Ln=ce}xg(i)}else(v.subtreeFlags&8772)!==0&&S!==null?(S.return=v,Be=S):xg(i)}}function xg(i){for(;Be!==null;){var o=Be;if((o.flags&8772)!==0){var c=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Ln||zl(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Ln)if(c===null)h.componentDidMount();else{var v=o.elementType===o.type?c.memoizedProps:yi(o.type,c.memoizedProps);h.componentDidUpdate(v,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var S=o.updateQueue;S!==null&&ym(o,S,h);break;case 3:var A=o.updateQueue;if(A!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}ym(o,A,c)}break;case 5:var z=o.stateNode;if(c===null&&o.flags&4){c=z;var G=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&c.focus();break;case"img":G.src&&(c.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ce=o.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Xo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||o.flags&512&&Ed(o)}catch(xe){en(o,o.return,xe)}}if(o===i){Be=null;break}if(c=o.sibling,c!==null){c.return=o.return,Be=c;break}Be=o.return}}function yg(i){for(;Be!==null;){var o=Be;if(o===i){Be=null;break}var c=o.sibling;if(c!==null){c.return=o.return,Be=c;break}Be=o.return}}function Sg(i){for(;Be!==null;){var o=Be;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{zl(4,o)}catch(G){en(o,c,G)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var v=o.return;try{h.componentDidMount()}catch(G){en(o,v,G)}}var S=o.return;try{Ed(o)}catch(G){en(o,S,G)}break;case 5:var A=o.return;try{Ed(o)}catch(G){en(o,A,G)}}}catch(G){en(o,o.return,G)}if(o===i){Be=null;break}var z=o.sibling;if(z!==null){z.return=o.return,Be=z;break}Be=o.return}}var py=Math.ceil,Vl=b.ReactCurrentDispatcher,bd=b.ReactCurrentOwner,di=b.ReactCurrentBatchConfig,bt=0,vn=null,sn=null,En=0,ii=0,qs=Er(0),cn=0,ma=null,ls=0,Hl=0,Ad=0,ga=null,Yn=null,Cd=0,Ks=1/0,Zi=null,Gl=!1,Rd=null,Rr=null,Wl=!1,Pr=null,jl=0,va=0,Pd=null,Xl=-1,$l=0;function zn(){return(bt&6)!==0?X():Xl!==-1?Xl:Xl=X()}function Lr(i){return(i.mode&1)===0?1:(bt&2)!==0&&En!==0?En&-En:Zx.transition!==null?($l===0&&($l=On()),$l):(i=St,i!==0||(i=window.event,i=i===void 0?16:Ep(i.type)),i)}function Ei(i,o,c,h){if(50<va)throw va=0,Pd=null,Error(t(185));tn(i,c,h),((bt&2)===0||i!==vn)&&(i===vn&&((bt&2)===0&&(Hl|=c),cn===4&&Dr(i,En)),qn(i,h),c===1&&bt===0&&(o.mode&1)===0&&(Ks=X()+500,Sl&&Tr()))}function qn(i,o){var c=i.callbackNode;Qr(i,o);var h=vi(i,i===vn?En:0);if(h===0)c!==null&&Z(c),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(c!=null&&Z(c),o===1)i.tag===0?Kx(Eg.bind(null,i)):lm(Eg.bind(null,i)),Xx(function(){(bt&6)===0&&Tr()}),c=null;else{switch(mp(h)){case 1:c=Pe;break;case 4:c=Ue;break;case 16:c=Oe;break;case 536870912:c=st;break;default:c=Oe}c=Lg(c,Mg.bind(null,i))}i.callbackPriority=o,i.callbackNode=c}}function Mg(i,o){if(Xl=-1,$l=0,(bt&6)!==0)throw Error(t(327));var c=i.callbackNode;if(Zs()&&i.callbackNode!==c)return null;var h=vi(i,i===vn?En:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=Yl(i,h);else{o=h;var v=bt;bt|=2;var S=Tg();(vn!==i||En!==o)&&(Zi=null,Ks=X()+500,us(i,o));do try{vy();break}catch(z){wg(i,z)}while(!0);Yu(),Vl.current=S,bt=v,sn!==null?o=0:(vn=null,En=0,o=cn)}if(o!==0){if(o===2&&(v=Ut(i),v!==0&&(h=v,o=Ld(i,v))),o===1)throw c=ma,us(i,0),Dr(i,h),qn(i,X()),c;if(o===6)Dr(i,h);else{if(v=i.current.alternate,(h&30)===0&&!my(v)&&(o=Yl(i,h),o===2&&(S=Ut(i),S!==0&&(h=S,o=Ld(i,S))),o===1))throw c=ma,us(i,0),Dr(i,h),qn(i,X()),c;switch(i.finishedWork=v,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:ds(i,Yn,Zi);break;case 3:if(Dr(i,h),(h&130023424)===h&&(o=Cd+500-X(),10<o)){if(vi(i,0)!==0)break;if(v=i.suspendedLanes,(v&h)!==h){zn(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=ku(ds.bind(null,i,Yn,Zi),o);break}ds(i,Yn,Zi);break;case 4:if(Dr(i,h),(h&4194240)===h)break;for(o=i.eventTimes,v=-1;0<h;){var A=31-Ct(h);S=1<<A,A=o[A],A>v&&(v=A),h&=~S}if(h=v,h=X()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*py(h/1960))-h,10<h){i.timeoutHandle=ku(ds.bind(null,i,Yn,Zi),h);break}ds(i,Yn,Zi);break;case 5:ds(i,Yn,Zi);break;default:throw Error(t(329))}}}return qn(i,X()),i.callbackNode===c?Mg.bind(null,i):null}function Ld(i,o){var c=ga;return i.current.memoizedState.isDehydrated&&(us(i,o).flags|=256),i=Yl(i,o),i!==2&&(o=Yn,Yn=c,o!==null&&Dd(o)),i}function Dd(i){Yn===null?Yn=i:Yn.push.apply(Yn,i)}function my(i){for(var o=i;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var v=c[h],S=v.getSnapshot;v=v.value;try{if(!_i(S(),v))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Dr(i,o){for(o&=~Ad,o&=~Hl,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var c=31-Ct(o),h=1<<c;i[c]=-1,o&=~h}}function Eg(i){if((bt&6)!==0)throw Error(t(327));Zs();var o=vi(i,0);if((o&1)===0)return qn(i,X()),null;var c=Yl(i,o);if(i.tag!==0&&c===2){var h=Ut(i);h!==0&&(o=h,c=Ld(i,h))}if(c===1)throw c=ma,us(i,0),Dr(i,o),qn(i,X()),c;if(c===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,ds(i,Yn,Zi),qn(i,X()),null}function Id(i,o){var c=bt;bt|=1;try{return i(o)}finally{bt=c,bt===0&&(Ks=X()+500,Sl&&Tr())}}function cs(i){Pr!==null&&Pr.tag===0&&(bt&6)===0&&Zs();var o=bt;bt|=1;var c=di.transition,h=St;try{if(di.transition=null,St=1,i)return i()}finally{St=h,di.transition=c,bt=o,(bt&6)===0&&Tr()}}function Nd(){ii=qs.current,Wt(qs)}function us(i,o){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,jx(c)),sn!==null)for(c=sn.return;c!==null;){var h=c;switch(Gu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&xl();break;case 3:Xs(),Wt(jn),Wt(Cn),nd();break;case 5:ed(h);break;case 4:Xs();break;case 13:Wt(qt);break;case 19:Wt(qt);break;case 10:qu(h.type._context);break;case 22:case 23:Nd()}c=c.return}if(vn=i,sn=i=Ir(i.current,null),En=ii=o,cn=0,ma=null,Ad=Hl=ls=0,Yn=ga=null,ss!==null){for(o=0;o<ss.length;o++)if(c=ss[o],h=c.interleaved,h!==null){c.interleaved=null;var v=h.next,S=c.pending;if(S!==null){var A=S.next;S.next=v,h.next=A}c.pending=h}ss=null}return i}function wg(i,o){do{var c=sn;try{if(Yu(),Ll.current=Fl,Dl){for(var h=Kt.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}Dl=!1}if(as=0,gn=ln=Kt=null,ca=!1,ua=0,bd.current=null,c===null||c.return===null){cn=1,ma=o,sn=null;break}e:{var S=i,A=c.return,z=c,G=o;if(o=En,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,Se=z,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Fe=qm(A);if(Fe!==null){Fe.flags&=-257,Km(Fe,A,z,S,o),Fe.mode&1&&Ym(S,ce,o),o=Fe,G=ce;var He=o.updateQueue;if(He===null){var Ge=new Set;Ge.add(G),o.updateQueue=Ge}else He.add(G);break e}else{if((o&1)===0){Ym(S,ce,o),Fd();break e}G=Error(t(426))}}else if(Yt&&z.mode&1){var nn=qm(A);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Km(nn,A,z,S,o),Xu($s(G,z));break e}}S=G=$s(G,z),cn!==4&&(cn=2),ga===null?ga=[S]:ga.push(S),S=A;do{switch(S.tag){case 3:S.flags|=65536,o&=-o,S.lanes|=o;var ne=Xm(S,G,o);xm(S,ne);break e;case 1:z=G;var $=S.type,se=S.stateNode;if((S.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Rr===null||!Rr.has(se)))){S.flags|=65536,o&=-o,S.lanes|=o;var Te=$m(S,z,o);xm(S,Te);break e}}S=S.return}while(S!==null)}Ag(c)}catch(je){o=je,sn===c&&c!==null&&(sn=c=c.return);continue}break}while(!0)}function Tg(){var i=Vl.current;return Vl.current=Fl,i===null?Fl:i}function Fd(){(cn===0||cn===3||cn===2)&&(cn=4),vn===null||(ls&268435455)===0&&(Hl&268435455)===0||Dr(vn,En)}function Yl(i,o){var c=bt;bt|=2;var h=Tg();(vn!==i||En!==o)&&(Zi=null,us(i,o));do try{gy();break}catch(v){wg(i,v)}while(!0);if(Yu(),bt=c,Vl.current=h,sn!==null)throw Error(t(261));return vn=null,En=0,cn}function gy(){for(;sn!==null;)bg(sn)}function vy(){for(;sn!==null&&!ue();)bg(sn)}function bg(i){var o=Pg(i.alternate,i,ii);i.memoizedProps=i.pendingProps,o===null?Ag(i):sn=o,bd.current=null}function Ag(i){var o=i;do{var c=o.alternate;if(i=o.return,(o.flags&32768)===0){if(c=cy(c,o,ii),c!==null){sn=c;return}}else{if(c=uy(c,o),c!==null){c.flags&=32767,sn=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(o=o.sibling,o!==null){sn=o;return}sn=o=i}while(o!==null);cn===0&&(cn=5)}function ds(i,o,c){var h=St,v=di.transition;try{di.transition=null,St=1,_y(i,o,c,h)}finally{di.transition=v,St=h}return null}function _y(i,o,c,h){do Zs();while(Pr!==null);if((bt&6)!==0)throw Error(t(327));c=i.finishedWork;var v=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=c.lanes|c.childLanes;if(An(i,S),i===vn&&(sn=vn=null,En=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Wl||(Wl=!0,Lg(Oe,function(){return Zs(),null})),S=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||S){S=di.transition,di.transition=null;var A=St;St=1;var z=bt;bt|=4,bd.current=null,hy(i,c),vg(c,i),Ox(Fu),sl=!!Nu,Fu=Nu=null,i.current=c,fy(c),de(),bt=z,St=A,di.transition=S}else i.current=c;if(Wl&&(Wl=!1,Pr=i,jl=v),S=i.pendingLanes,S===0&&(Rr=null),At(c.stateNode),qn(i,X()),o!==null)for(h=i.onRecoverableError,c=0;c<o.length;c++)v=o[c],h(v.value,{componentStack:v.stack,digest:v.digest});if(Gl)throw Gl=!1,i=Rd,Rd=null,i;return(jl&1)!==0&&i.tag!==0&&Zs(),S=i.pendingLanes,(S&1)!==0?i===Pd?va++:(va=0,Pd=i):va=0,Tr(),null}function Zs(){if(Pr!==null){var i=mp(jl),o=di.transition,c=St;try{if(di.transition=null,St=16>i?16:i,Pr===null)var h=!1;else{if(i=Pr,Pr=null,jl=0,(bt&6)!==0)throw Error(t(331));var v=bt;for(bt|=4,Be=i.current;Be!==null;){var S=Be,A=S.child;if((Be.flags&16)!==0){var z=S.deletions;if(z!==null){for(var G=0;G<z.length;G++){var ce=z[G];for(Be=ce;Be!==null;){var Se=Be;switch(Se.tag){case 0:case 11:case 15:pa(8,Se,S)}var Me=Se.child;if(Me!==null)Me.return=Se,Be=Me;else for(;Be!==null;){Se=Be;var xe=Se.sibling,Fe=Se.return;if(hg(Se),Se===ce){Be=null;break}if(xe!==null){xe.return=Fe,Be=xe;break}Be=Fe}}}var He=S.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var nn=Ge.sibling;Ge.sibling=null,Ge=nn}while(Ge!==null)}}Be=S}}if((S.subtreeFlags&2064)!==0&&A!==null)A.return=S,Be=A;else e:for(;Be!==null;){if(S=Be,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:pa(9,S,S.return)}var ne=S.sibling;if(ne!==null){ne.return=S.return,Be=ne;break e}Be=S.return}}var $=i.current;for(Be=$;Be!==null;){A=Be;var se=A.child;if((A.subtreeFlags&2064)!==0&&se!==null)se.return=A,Be=se;else e:for(A=$;Be!==null;){if(z=Be,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:zl(9,z)}}catch(je){en(z,z.return,je)}if(z===A){Be=null;break e}var Te=z.sibling;if(Te!==null){Te.return=z.return,Be=Te;break e}Be=z.return}}if(bt=v,Tr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot($e,i)}catch{}h=!0}return h}finally{St=c,di.transition=o}}return!1}function Cg(i,o,c){o=$s(c,o),o=Xm(i,o,1),i=Ar(i,o,1),o=zn(),i!==null&&(tn(i,1,o),qn(i,o))}function en(i,o,c){if(i.tag===3)Cg(i,i,c);else for(;o!==null;){if(o.tag===3){Cg(o,i,c);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Rr===null||!Rr.has(h))){i=$s(c,i),i=$m(o,i,1),o=Ar(o,i,1),i=zn(),o!==null&&(tn(o,1,i),qn(o,i));break}}o=o.return}}function xy(i,o,c){var h=i.pingCache;h!==null&&h.delete(o),o=zn(),i.pingedLanes|=i.suspendedLanes&c,vn===i&&(En&c)===c&&(cn===4||cn===3&&(En&130023424)===En&&500>X()-Cd?us(i,0):Ad|=c),qn(i,o)}function Rg(i,o){o===0&&((i.mode&1)===0?o=1:(o=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var c=zn();i=Yi(i,o),i!==null&&(tn(i,o,c),qn(i,c))}function yy(i){var o=i.memoizedState,c=0;o!==null&&(c=o.retryLane),Rg(i,c)}function Sy(i,o){var c=0;switch(i.tag){case 13:var h=i.stateNode,v=i.memoizedState;v!==null&&(c=v.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Rg(i,c)}var Pg;Pg=function(i,o,c){if(i!==null)if(i.memoizedProps!==o.pendingProps||jn.current)$n=!0;else{if((i.lanes&c)===0&&(o.flags&128)===0)return $n=!1,ly(i,o,c);$n=(i.flags&131072)!==0}else $n=!1,Yt&&(o.flags&1048576)!==0&&cm(o,El,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Ol(i,o),i=o.pendingProps;var v=Bs(o,Cn.current);js(o,c),v=sd(null,o,h,i,v,c);var S=od();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Xn(h)?(S=!0,yl(o)):S=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Ju(o),v.updater=Ul,o.stateNode=v,v._reactInternals=o,hd(o,h,i,c),o=gd(null,o,h,!0,S,c)):(o.tag=0,Yt&&S&&Hu(o),Bn(null,o,v,c),o=o.child),o;case 16:h=o.elementType;e:{switch(Ol(i,o),i=o.pendingProps,v=h._init,h=v(h._payload),o.type=h,v=o.tag=Ey(h),i=yi(h,i),v){case 0:o=md(null,o,h,i,c);break e;case 1:o=ng(null,o,h,i,c);break e;case 11:o=Zm(null,o,h,i,c);break e;case 14:o=Jm(null,o,h,yi(h.type,i),c);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),md(i,o,h,v,c);case 1:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),ng(i,o,h,v,c);case 3:e:{if(ig(o),i===null)throw Error(t(387));h=o.pendingProps,S=o.memoizedState,v=S.element,_m(i,o),Rl(o,h,null,c);var A=o.memoizedState;if(h=A.element,S.isDehydrated)if(S={element:h,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=S,o.memoizedState=S,o.flags&256){v=$s(Error(t(423)),o),o=rg(i,o,h,c,v);break e}else if(h!==v){v=$s(Error(t(424)),o),o=rg(i,o,h,c,v);break e}else for(ni=Mr(o.stateNode.containerInfo.firstChild),ti=o,Yt=!0,xi=null,c=gm(o,null,h,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Hs(),h===v){o=Ki(i,o,c);break e}Bn(i,o,h,c)}o=o.child}return o;case 5:return Sm(o),i===null&&ju(o),h=o.type,v=o.pendingProps,S=i!==null?i.memoizedProps:null,A=v.children,Uu(h,v)?A=null:S!==null&&Uu(h,S)&&(o.flags|=32),tg(i,o),Bn(i,o,A,c),o.child;case 6:return i===null&&ju(o),null;case 13:return sg(i,o,c);case 4:return Qu(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Gs(o,null,h,c):Bn(i,o,h,c),o.child;case 11:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),Zm(i,o,h,v,c);case 7:return Bn(i,o,o.pendingProps,c),o.child;case 8:return Bn(i,o,o.pendingProps.children,c),o.child;case 12:return Bn(i,o,o.pendingProps.children,c),o.child;case 10:e:{if(h=o.type._context,v=o.pendingProps,S=o.memoizedProps,A=v.value,zt(bl,h._currentValue),h._currentValue=A,S!==null)if(_i(S.value,A)){if(S.children===v.children&&!jn.current){o=Ki(i,o,c);break e}}else for(S=o.child,S!==null&&(S.return=o);S!==null;){var z=S.dependencies;if(z!==null){A=S.child;for(var G=z.firstContext;G!==null;){if(G.context===h){if(S.tag===1){G=qi(-1,c&-c),G.tag=2;var ce=S.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),ce.pending=G}}S.lanes|=c,G=S.alternate,G!==null&&(G.lanes|=c),Ku(S.return,c,o),z.lanes|=c;break}G=G.next}}else if(S.tag===10)A=S.type===o.type?null:S.child;else if(S.tag===18){if(A=S.return,A===null)throw Error(t(341));A.lanes|=c,z=A.alternate,z!==null&&(z.lanes|=c),Ku(A,c,o),A=S.sibling}else A=S.child;if(A!==null)A.return=S;else for(A=S;A!==null;){if(A===o){A=null;break}if(S=A.sibling,S!==null){S.return=A.return,A=S;break}A=A.return}S=A}Bn(i,o,v.children,c),o=o.child}return o;case 9:return v=o.type,h=o.pendingProps.children,js(o,c),v=ci(v),h=h(v),o.flags|=1,Bn(i,o,h,c),o.child;case 14:return h=o.type,v=yi(h,o.pendingProps),v=yi(h.type,v),Jm(i,o,h,v,c);case 15:return Qm(i,o,o.type,o.pendingProps,c);case 17:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),Ol(i,o),o.tag=1,Xn(h)?(i=!0,yl(o)):i=!1,js(o,c),Wm(o,h,v),hd(o,h,v,c),gd(null,o,h,!0,i,c);case 19:return ag(i,o,c);case 22:return eg(i,o,c)}throw Error(t(156,o.tag))};function Lg(i,o){return D(i,o)}function My(i,o,c,h){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(i,o,c,h){return new My(i,o,c,h)}function Ud(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Ey(i){if(typeof i=="function")return Ud(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Y)return 11;if(i===te)return 14}return 2}function Ir(i,o){var c=i.alternate;return c===null?(c=hi(i.tag,o,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=o,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,o=i.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function ql(i,o,c,h,v,S){var A=2;if(h=i,typeof i=="function")Ud(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case F:return hs(c.children,v,S,o);case I:A=8,v|=8;break;case C:return i=hi(12,c,o,v|2),i.elementType=C,i.lanes=S,i;case K:return i=hi(13,c,o,v),i.elementType=K,i.lanes=S,i;case j:return i=hi(19,c,o,v),i.elementType=j,i.lanes=S,i;case ie:return Kl(c,v,S,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:A=10;break e;case U:A=9;break e;case Y:A=11;break e;case te:A=14;break e;case Q:A=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=hi(A,c,o,v),o.elementType=i,o.type=h,o.lanes=S,o}function hs(i,o,c,h){return i=hi(7,i,h,o),i.lanes=c,i}function Kl(i,o,c,h){return i=hi(22,i,h,o),i.elementType=ie,i.lanes=c,i.stateNode={isHidden:!1},i}function kd(i,o,c){return i=hi(6,i,null,o),i.lanes=c,i}function Od(i,o,c){return o=hi(4,i.children!==null?i.children:[],i.key,o),o.lanes=c,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function wy(i,o,c,h,v){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Bd(i,o,c,h,v,S,A,z,G){return i=new wy(i,o,c,z,G),o===1?(o=1,S===!0&&(o|=8)):o=0,S=hi(3,null,null,o),i.current=S,S.stateNode=i,S.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(S),i}function Ty(i,o,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:h==null?null:""+h,children:i,containerInfo:o,implementation:c}}function Dg(i){if(!i)return wr;i=i._reactInternals;e:{if(Pi(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Xn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var c=i.type;if(Xn(c))return om(i,c,o)}return o}function Ig(i,o,c,h,v,S,A,z,G){return i=Bd(c,h,!0,i,v,S,A,z,G),i.context=Dg(null),c=i.current,h=zn(),v=Lr(c),S=qi(h,v),S.callback=o??null,Ar(c,S,v),i.current.lanes=v,tn(i,v,h),qn(i,h),i}function Zl(i,o,c,h){var v=o.current,S=zn(),A=Lr(v);return c=Dg(c),o.context===null?o.context=c:o.pendingContext=c,o=qi(S,A),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Ar(v,o,A),i!==null&&(Ei(i,v,A,S),Cl(i,v,A)),A}function Jl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ng(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<o?c:o}}function zd(i,o){Ng(i,o),(i=i.alternate)&&Ng(i,o)}function by(){return null}var Fg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Vd(i){this._internalRoot=i}Ql.prototype.render=Vd.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Zl(i,o,null,null)},Ql.prototype.unmount=Vd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;cs(function(){Zl(null,i,null,null)}),o[Wi]=null}};function Ql(i){this._internalRoot=i}Ql.prototype.unstable_scheduleHydration=function(i){if(i){var o=_p();i={blockedOn:null,target:i,priority:o};for(var c=0;c<xr.length&&o!==0&&o<xr[c].priority;c++);xr.splice(c,0,i),c===0&&Sp(i)}};function Hd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ec(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function Ay(i,o,c,h,v){if(v){if(typeof h=="function"){var S=h;h=function(){var ce=Jl(A);S.call(ce)}}var A=Ig(o,h,i,0,null,!1,!1,"",Ug);return i._reactRootContainer=A,i[Wi]=A.current,ta(i.nodeType===8?i.parentNode:i),cs(),A}for(;v=i.lastChild;)i.removeChild(v);if(typeof h=="function"){var z=h;h=function(){var ce=Jl(G);z.call(ce)}}var G=Bd(i,0,!1,null,null,!1,!1,"",Ug);return i._reactRootContainer=G,i[Wi]=G.current,ta(i.nodeType===8?i.parentNode:i),cs(function(){Zl(o,G,c,h)}),G}function tc(i,o,c,h,v){var S=c._reactRootContainer;if(S){var A=S;if(typeof v=="function"){var z=v;v=function(){var G=Jl(A);z.call(G)}}Zl(o,A,i,v)}else A=Ay(c,o,i,v,h);return Jl(A)}gp=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var c=Sn(o.pendingLanes);c!==0&&(es(o,c|1),qn(o,X()),(bt&6)===0&&(Ks=X()+500,Tr()))}break;case 13:cs(function(){var h=Yi(i,1);if(h!==null){var v=zn();Ei(h,i,1,v)}}),zd(i,1)}},fu=function(i){if(i.tag===13){var o=Yi(i,134217728);if(o!==null){var c=zn();Ei(o,i,134217728,c)}zd(i,134217728)}},vp=function(i){if(i.tag===13){var o=Lr(i),c=Yi(i,o);if(c!==null){var h=zn();Ei(c,i,o,h)}zd(i,o)}},_p=function(){return St},xp=function(i,o){var c=St;try{return St=i,o()}finally{St=c}},Re=function(i,o,c){switch(o){case"input":if(vt(i,c),o=c.name,c.type==="radio"&&o!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var h=c[o];if(h!==i&&h.form===i.form){var v=_l(h);if(!v)throw Error(t(90));pt(h),vt(h,v)}}}break;case"textarea":_e(i,c);break;case"select":o=c.value,o!=null&&O(i,!!c.multiple,o,!1)}},Ht=Id,an=cs;var Cy={usingClientEntryPoint:!1,Events:[ra,ks,_l,De,lt,Id]},_a={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ry={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=tl(i),i===null?null:i.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{$e=nc.inject(Ry),ct=nc}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy,Kn.createPortal=function(i,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(o))throw Error(t(200));return Ty(i,o,null,c)},Kn.createRoot=function(i,o){if(!Hd(i))throw Error(t(299));var c=!1,h="",v=Fg;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Bd(i,1,!1,null,null,c,!1,h,v),i[Wi]=o.current,ta(i.nodeType===8?i.parentNode:i),new Vd(o)},Kn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=tl(o),i=i===null?null:i.stateNode,i},Kn.flushSync=function(i){return cs(i)},Kn.hydrate=function(i,o,c){if(!ec(o))throw Error(t(200));return tc(null,i,o,!0,c)},Kn.hydrateRoot=function(i,o,c){if(!Hd(i))throw Error(t(405));var h=c!=null&&c.hydratedSources||null,v=!1,S="",A=Fg;if(c!=null&&(c.unstable_strictMode===!0&&(v=!0),c.identifierPrefix!==void 0&&(S=c.identifierPrefix),c.onRecoverableError!==void 0&&(A=c.onRecoverableError)),o=Ig(o,null,i,1,c??null,v,!1,S,A),i[Wi]=o.current,ta(i),h)for(i=0;i<h.length;i++)c=h[i],v=c._getVersion,v=v(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,v]:o.mutableSourceEagerHydrationData.push(c,v);return new Ql(o)},Kn.render=function(i,o,c){if(!ec(o))throw Error(t(200));return tc(null,i,o,!1,c)},Kn.unmountComponentAtNode=function(i){if(!ec(i))throw Error(t(40));return i._reactRootContainer?(cs(function(){tc(null,null,i,!1,function(){i._reactRootContainer=null,i[Wi]=null})}),!0):!1},Kn.unstable_batchedUpdates=Id,Kn.unstable_renderSubtreeIntoContainer=function(i,o,c,h){if(!ec(c))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return tc(i,o,c,!1,h)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var Wg;function ky(){if(Wg)return jd.exports;Wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jd.exports=Uy(),jd.exports}var jg;function Oy(){if(jg)return ic;jg=1;var r=ky();return ic.createRoot=r.createRoot,ic.hydrateRoot=r.hydrateRoot,ic}var By=Oy();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xg="popstate";function zy(r={}){function e(n,s){let{pathname:a,search:l,hash:u}=n.location;return kh("",{pathname:a,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(n,s){return typeof s=="string"?s:Da(s)}return Hy(e,t,null,r)}function Jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Bi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vy(){return Math.random().toString(36).substring(2,10)}function $g(r,e){return{usr:r.state,key:r.key,idx:e}}function kh(r,e,t=null,n){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Fo(e):e,state:t,key:e&&e.key||n||Vy()}}function Da({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Fo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substring(n),r=r.substring(0,n)),r&&(e.pathname=r)}return e}function Hy(r,e,t,n={}){let{window:s=document.defaultView,v5Compat:a=!1}=n,l=s.history,u="POP",d=null,f=p();f==null&&(f=0,l.replaceState({...l.state,idx:f},""));function p(){return(l.state||{idx:null}).idx}function g(){u="POP";let y=p(),x=y==null?null:y-f;f=y,d&&d({action:u,location:E.location,delta:x})}function m(y,x){u="PUSH";let R=kh(E.location,y,x);f=p()+1;let w=$g(R,f),b=E.createHref(R);try{l.pushState(w,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(b)}a&&d&&d({action:u,location:E.location,delta:1})}function _(y,x){u="REPLACE";let R=kh(E.location,y,x);f=p();let w=$g(R,f),b=E.createHref(R);l.replaceState(w,"",b),a&&d&&d({action:u,location:E.location,delta:0})}function M(y){return Gy(y)}let E={get action(){return u},get location(){return r(s,l)},listen(y){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Xg,g),d=y,()=>{s.removeEventListener(Xg,g),d=null}},createHref(y){return e(s,y)},createURL:M,encodeLocation(y){let x=M(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:_,go(y){return l.go(y)}};return E}function Gy(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(t,"No window.location.(origin|href) available to create URL");let n=typeof r=="string"?r:Da(r);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=t+n),new URL(n,t)}function Av(r,e,t="/"){return Wy(r,e,t,!1)}function Wy(r,e,t,n){let s=typeof e=="string"?Fo(e):e,a=ur(s.pathname||"/",t);if(a==null)return null;let l=Cv(r);jy(l);let u=null;for(let d=0;u==null&&d<l.length;++d){let f=nS(a);u=eS(l[d],f,n)}return u}function Cv(r,e=[],t=[],n=""){let s=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(Jt(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length));let f=lr([n,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(Jt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Cv(a.children,e,p,f)),!(a.path==null&&!a.index)&&e.push({path:f,score:Jy(f,a.index),routesMeta:p})};return r.forEach((a,l)=>{if(a.path===""||!a.path?.includes("?"))s(a,l);else for(let u of Rv(a.path))s(a,l,u)}),e}function Rv(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(n.length===0)return s?[a,""]:[a];let l=Rv(n.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),s&&u.push(...l),u.map(d=>r.startsWith("/")&&d===""?"/":d)}function jy(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Qy(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var Xy=/^:[\w-]+$/,$y=3,Yy=2,qy=1,Ky=10,Zy=-2,Yg=r=>r==="*";function Jy(r,e){let t=r.split("/"),n=t.length;return t.some(Yg)&&(n+=Zy),e&&(n+=Yy),t.filter(s=>!Yg(s)).reduce((s,a)=>s+(Xy.test(a)?$y:a===""?qy:Ky),n)}function Qy(r,e){return r.length===e.length&&r.slice(0,-1).every((n,s)=>n===e[s])?r[r.length-1]-e[e.length-1]:0}function eS(r,e,t=!1){let{routesMeta:n}=r,s={},a="/",l=[];for(let u=0;u<n.length;++u){let d=n[u],f=u===n.length-1,p=a==="/"?e:e.slice(a.length)||"/",g=Gc({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),m=d.route;if(!g&&f&&t&&!n[n.length-1].route.index&&(g=Gc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!g)return null;Object.assign(s,g.params),l.push({params:s,pathname:lr([a,g.pathname]),pathnameBase:oS(lr([a,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(a=lr([a,g.pathnameBase]))}return l}function Gc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=tS(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),u=s.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:g},m)=>{if(p==="*"){let M=u[m]||"";l=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const _=u[m];return g&&!_?f[p]=void 0:f[p]=(_||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:l,pattern:r}}function tS(r,e=!1,t=!0){Bi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let n=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,d)=>(n.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function nS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ur(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}function iS(r,e="/"){let{pathname:t,search:n="",hash:s=""}=typeof r=="string"?Fo(r):r;return{pathname:t?t.startsWith("/")?t:rS(t,e):e,search:aS(n),hash:lS(s)}}function rS(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Yd(r,e,t,n){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sS(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pv(r){let e=sS(r);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Lv(r,e,t,n=!1){let s;typeof r=="string"?s=Fo(r):(s={...r},Jt(!s.pathname||!s.pathname.includes("?"),Yd("?","pathname","search",s)),Jt(!s.pathname||!s.pathname.includes("#"),Yd("#","pathname","hash",s)),Jt(!s.search||!s.search.includes("#"),Yd("#","search","hash",s)));let a=r===""||s.pathname==="",l=a?"/":s.pathname,u;if(l==null)u=t;else{let g=e.length-1;if(!n&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),g-=1;s.pathname=m.join("/")}u=g>=0?e[g]:"/"}let d=iS(s,u),f=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var lr=r=>r.join("/").replace(/\/\/+/g,"/"),oS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),aS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function cS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var uS=["GET",...Dv];new Set(uS);var Uo=J.createContext(null);Uo.displayName="DataRouter";var Qc=J.createContext(null);Qc.displayName="DataRouterState";J.createContext(!1);var Iv=J.createContext({isTransitioning:!1});Iv.displayName="ViewTransition";var dS=J.createContext(new Map);dS.displayName="Fetchers";var hS=J.createContext(null);hS.displayName="Await";var zi=J.createContext(null);zi.displayName="Navigation";var Ga=J.createContext(null);Ga.displayName="Location";var hr=J.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var If=J.createContext(null);If.displayName="RouteError";function fS(r,{relative:e}={}){Jt(Wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=J.useContext(zi),{hash:s,pathname:a,search:l}=ja(r,{relative:e}),u=a;return t!=="/"&&(u=a==="/"?t:lr([t,a])),n.createHref({pathname:u,search:l,hash:s})}function Wa(){return J.useContext(Ga)!=null}function fr(){return Jt(Wa(),"useLocation() may be used only in the context of a <Router> component."),J.useContext(Ga).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fv(r){J.useContext(zi).static||J.useLayoutEffect(r)}function Nf(){let{isDataRoute:r}=J.useContext(hr);return r?bS():pS()}function pS(){Jt(Wa(),"useNavigate() may be used only in the context of a <Router> component.");let r=J.useContext(Uo),{basename:e,navigator:t}=J.useContext(zi),{matches:n}=J.useContext(hr),{pathname:s}=fr(),a=JSON.stringify(Pv(n)),l=J.useRef(!1);return Fv(()=>{l.current=!0}),J.useCallback((d,f={})=>{if(Bi(l.current,Nv),!l.current)return;if(typeof d=="number"){t.go(d);return}let p=Lv(d,JSON.parse(a),s,f.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:lr([e,p.pathname])),(f.replace?t.replace:t.push)(p,f.state,f)},[e,t,a,s,r])}J.createContext(null);function ja(r,{relative:e}={}){let{matches:t}=J.useContext(hr),{pathname:n}=fr(),s=JSON.stringify(Pv(t));return J.useMemo(()=>Lv(r,JSON.parse(s),n,e==="path"),[r,s,n,e])}function mS(r,e){return Uv(r,e)}function Uv(r,e,t,n){Jt(Wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=J.useContext(zi),{matches:a}=J.useContext(hr),l=a[a.length-1],u=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let x=p&&p.path||"";kv(d,!p||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let g=fr(),m;if(e){let x=typeof e=="string"?Fo(e):e;Jt(f==="/"||x.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${x.pathname}" was given in the \`location\` prop.`),m=x}else m=g;let _=m.pathname||"/",M=_;if(f!=="/"){let x=f.replace(/^\//,"").split("/");M="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let E=Av(r,{pathname:M});Bi(p||E!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Bi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=yS(E&&E.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:lr([f,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:lr([f,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,t,n);return e&&y?J.createElement(Ga.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},y):y}function gS(){let r=TS(),e=cS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",r),l=J.createElement(J.Fragment,null,J.createElement("p",null,"💿 Hey developer 👋"),J.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",J.createElement("code",{style:a},"ErrorBoundary")," or"," ",J.createElement("code",{style:a},"errorElement")," prop on your route.")),J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),t?J.createElement("pre",{style:s},t):null,l)}var vS=J.createElement(gS,null),_S=class extends J.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?J.createElement(hr.Provider,{value:this.props.routeContext},J.createElement(If.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xS({routeContext:r,match:e,children:t}){let n=J.useContext(Uo);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),J.createElement(hr.Provider,{value:r},t)}function yS(r,e=[],t=null,n=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let s=r,a=t?.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&a?.[f.route.id]!==void 0);Jt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(t)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=t,m=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let g,m=!1,_=null,M=null;t&&(g=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||vS,l&&(u<0&&p===0?(kv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,M=null):u===p&&(m=!0,M=f.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,p+1)),y=()=>{let x;return g?x=_:m?x=M:f.route.Component?x=J.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,J.createElement(xS,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:t!=null},children:x})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?J.createElement(_S,{location:t.location,revalidation:t.revalidation,component:_,error:g,children:y(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):y()},null)}function Ff(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SS(r){let e=J.useContext(Uo);return Jt(e,Ff(r)),e}function MS(r){let e=J.useContext(Qc);return Jt(e,Ff(r)),e}function ES(r){let e=J.useContext(hr);return Jt(e,Ff(r)),e}function Uf(r){let e=ES(r),t=e.matches[e.matches.length-1];return Jt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function wS(){return Uf("useRouteId")}function TS(){let r=J.useContext(If),e=MS("useRouteError"),t=Uf("useRouteError");return r!==void 0?r:e.errors?.[t]}function bS(){let{router:r}=SS("useNavigate"),e=Uf("useNavigate"),t=J.useRef(!1);return Fv(()=>{t.current=!0}),J.useCallback(async(s,a={})=>{Bi(t.current,Nv),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...a}))},[r,e])}var qg={};function kv(r,e,t){!e&&!qg[r]&&(qg[r]=!0,Bi(!1,t))}J.memo(AS);function AS({routes:r,future:e,state:t}){return Uv(r,void 0,t,e)}function Oh(r){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CS({basename:r="/",children:e=null,location:t,navigationType:n="POP",navigator:s,static:a=!1}){Jt(!Wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=r.replace(/^\/*/,"/"),u=J.useMemo(()=>({basename:l,navigator:s,static:a,future:{}}),[l,s,a]);typeof t=="string"&&(t=Fo(t));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:m="default"}=t,_=J.useMemo(()=>{let M=ur(d,l);return M==null?null:{location:{pathname:M,search:f,hash:p,state:g,key:m},navigationType:n}},[l,d,f,p,g,m,n]);return Bi(_!=null,`<Router basename="${l}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:J.createElement(zi.Provider,{value:u},J.createElement(Ga.Provider,{children:e,value:_}))}function RS({children:r,location:e}){return mS(Bh(r),e)}function Bh(r,e=[]){let t=[];return J.Children.forEach(r,(n,s)=>{if(!J.isValidElement(n))return;let a=[...e,s];if(n.type===J.Fragment){t.push.apply(t,Bh(n.props.children,a));return}Jt(n.type===Oh,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Bh(n.props.children,a)),t.push(l)}),t}var Fc="get",Uc="application/x-www-form-urlencoded";function eu(r){return r!=null&&typeof r.tagName=="string"}function PS(r){return eu(r)&&r.tagName.toLowerCase()==="button"}function LS(r){return eu(r)&&r.tagName.toLowerCase()==="form"}function DS(r){return eu(r)&&r.tagName.toLowerCase()==="input"}function IS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function NS(r,e){return r.button===0&&(!e||e==="_self")&&!IS(r)}var rc=null;function FS(){if(rc===null)try{new FormData(document.createElement("form"),0),rc=!1}catch{rc=!0}return rc}var US=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qd(r){return r!=null&&!US.has(r)?(Bi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uc}"`),null):r}function kS(r,e){let t,n,s,a,l;if(LS(r)){let u=r.getAttribute("action");n=u?ur(u,e):null,t=r.getAttribute("method")||Fc,s=qd(r.getAttribute("enctype"))||Uc,a=new FormData(r)}else if(PS(r)||DS(r)&&(r.type==="submit"||r.type==="image")){let u=r.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||u.getAttribute("action");if(n=d?ur(d,e):null,t=r.getAttribute("formmethod")||u.getAttribute("method")||Fc,s=qd(r.getAttribute("formenctype"))||qd(u.getAttribute("enctype"))||Uc,a=new FormData(u,r),!FS()){let{name:f,type:p,value:g}=r;if(p==="image"){let m=f?`${f}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else f&&a.append(f,g)}}else{if(eu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Fc,n=null,s=Uc,l=r}return a&&s==="text/plain"&&(l=a,a=void 0),{action:n,method:t.toLowerCase(),encType:s,formData:a,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function OS(r,e,t){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname=`_root.${t}`:e&&ur(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${t}`,n}async function BS(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function VS(r,e,t){let n=await Promise.all(r.map(async s=>{let a=e.routes[s.route.id];if(a){let l=await BS(a,t);return l.links?l.links():[]}return[]}));return jS(n.flat(1).filter(zS).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Kg(r,e,t,n,s,a){let l=(d,f)=>t[f]?d.route.id!==t[f].route.id:!0,u=(d,f)=>t[f].pathname!==d.pathname||t[f].route.path?.endsWith("*")&&t[f].params["*"]!==d.params["*"];return a==="assets"?e.filter((d,f)=>l(d,f)||u(d,f)):a==="data"?e.filter((d,f)=>{let p=n.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(l(d,f)||u(d,f))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function HS(r,e,{includeHydrateFallback:t}={}){return GS(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let a=[s.module];return s.clientActionModule&&(a=a.concat(s.clientActionModule)),s.clientLoaderModule&&(a=a.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(a=a.concat(s.hydrateFallbackModule)),s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function GS(r){return[...new Set(r)]}function WS(r){let e={},t=Object.keys(r).sort();for(let n of t)e[n]=r[n];return e}function jS(r,e){let t=new Set;return new Set(e),r.reduce((n,s)=>{let a=JSON.stringify(WS(s));return t.has(a)||(t.add(a),n.push({key:a,link:s})),n},[])}function Ov(){let r=J.useContext(Uo);return kf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function XS(){let r=J.useContext(Qc);return kf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Of=J.createContext(void 0);Of.displayName="FrameworkContext";function Bv(){let r=J.useContext(Of);return kf(r,"You must render this element inside a <HydratedRouter> element"),r}function $S(r,e){let t=J.useContext(Of),[n,s]=J.useState(!1),[a,l]=J.useState(!1),{onFocus:u,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:g}=e,m=J.useRef(null);J.useEffect(()=>{if(r==="render"&&l(!0),r==="viewport"){let E=x=>{x.forEach(R=>{l(R.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return m.current&&y.observe(m.current),()=>{y.disconnect()}}},[r]),J.useEffect(()=>{if(n){let E=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(E)}}},[n]);let _=()=>{s(!0)},M=()=>{s(!1),l(!1)};return t?r!=="intent"?[a,m,{}]:[a,m,{onFocus:ya(u,_),onBlur:ya(d,M),onMouseEnter:ya(f,_),onMouseLeave:ya(p,M),onTouchStart:ya(g,_)}]:[!1,m,{}]}function ya(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function YS({page:r,...e}){let{router:t}=Ov(),n=J.useMemo(()=>Av(t.routes,r,t.basename),[t.routes,r,t.basename]);return n?J.createElement(KS,{page:r,matches:n,...e}):null}function qS(r){let{manifest:e,routeModules:t}=Bv(),[n,s]=J.useState([]);return J.useEffect(()=>{let a=!1;return VS(r,e,t).then(l=>{a||s(l)}),()=>{a=!0}},[r,e,t]),n}function KS({page:r,matches:e,...t}){let n=fr(),{manifest:s,routeModules:a}=Bv(),{basename:l}=Ov(),{loaderData:u,matches:d}=XS(),f=J.useMemo(()=>Kg(r,e,d,s,n,"data"),[r,e,d,s,n]),p=J.useMemo(()=>Kg(r,e,d,s,n,"assets"),[r,e,d,s,n]),g=J.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let M=new Set,E=!1;if(e.forEach(x=>{let R=s.routes[x.route.id];!R||!R.hasLoader||(!f.some(w=>w.route.id===x.route.id)&&x.route.id in u&&a[x.route.id]?.shouldRevalidate||R.hasClientLoader?E=!0:M.add(x.route.id))}),M.size===0)return[];let y=OS(r,l,"data");return E&&M.size>0&&y.searchParams.set("_routes",e.filter(x=>M.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[l,u,n,s,f,e,r,a]),m=J.useMemo(()=>HS(p,s),[p,s]),_=qS(p);return J.createElement(J.Fragment,null,g.map(M=>J.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),m.map(M=>J.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),_.map(({key:M,link:E})=>J.createElement("link",{key:M,...E})))}function ZS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.7.0")}catch{}function JS({basename:r,children:e,window:t}){let n=J.useRef();n.current==null&&(n.current=zy({window:t,v5Compat:!0}));let s=n.current,[a,l]=J.useState({action:s.action,location:s.location}),u=J.useCallback(d=>{J.startTransition(()=>l(d))},[l]);return J.useLayoutEffect(()=>s.listen(u),[s,u]),J.createElement(CS,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:s})}var Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hv=J.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:s,reloadDocument:a,replace:l,state:u,target:d,to:f,preventScrollReset:p,viewTransition:g,...m},_){let{basename:M}=J.useContext(zi),E=typeof f=="string"&&Vv.test(f),y,x=!1;if(typeof f=="string"&&E&&(y=f,zv))try{let C=new URL(window.location.href),T=f.startsWith("//")?new URL(C.protocol+f):new URL(f),U=ur(T.pathname,M);T.origin===C.origin&&U!=null?f=U+T.search+T.hash:x=!0}catch{Bi(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=fS(f,{relative:s}),[w,b,k]=$S(n,m),N=nM(f,{replace:l,state:u,target:d,preventScrollReset:p,relative:s,viewTransition:g});function F(C){e&&e(C),C.defaultPrevented||N(C)}let I=J.createElement("a",{...m,...k,href:y||R,onClick:x||a?e:F,ref:ZS(_,b),target:d,"data-discover":!E&&t==="render"?"true":void 0});return w&&!E?J.createElement(J.Fragment,null,I,J.createElement(YS,{page:R})):I});Hv.displayName="Link";var QS=J.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:s=!1,style:a,to:l,viewTransition:u,children:d,...f},p){let g=ja(l,{relative:f.relative}),m=fr(),_=J.useContext(Qc),{navigator:M,basename:E}=J.useContext(zi),y=_!=null&&aM(g)&&u===!0,x=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,R=m.pathname,w=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;t||(R=R.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&E&&(w=ur(w,E)||w);const b=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let k=R===x||!s&&R.startsWith(x)&&R.charAt(b)==="/",N=w!=null&&(w===x||!s&&w.startsWith(x)&&w.charAt(x.length)==="/"),F={isActive:k,isPending:N,isTransitioning:y},I=k?e:void 0,C;typeof n=="function"?C=n(F):C=[n,k?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T=typeof a=="function"?a(F):a;return J.createElement(Hv,{...f,"aria-current":I,className:C,ref:p,style:T,to:l,viewTransition:u},typeof d=="function"?d(F):d)});QS.displayName="NavLink";var eM=J.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:s,state:a,method:l=Fc,action:u,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:g,...m},_)=>{let M=sM(),E=oM(u,{relative:f}),y=l.toLowerCase()==="get"?"get":"post",x=typeof u=="string"&&Vv.test(u),R=w=>{if(d&&d(w),w.defaultPrevented)return;w.preventDefault();let b=w.nativeEvent.submitter,k=b?.getAttribute("formmethod")||l;M(b||w.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:s,state:a,relative:f,preventScrollReset:p,viewTransition:g})};return J.createElement("form",{ref:_,method:y,action:E,onSubmit:n?d:R,...m,"data-discover":!x&&r==="render"?"true":void 0})});eM.displayName="Form";function tM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gv(r){let e=J.useContext(Uo);return Jt(e,tM(r)),e}function nM(r,{target:e,replace:t,state:n,preventScrollReset:s,relative:a,viewTransition:l}={}){let u=Nf(),d=fr(),f=ja(r,{relative:a});return J.useCallback(p=>{if(NS(p,e)){p.preventDefault();let g=t!==void 0?t:Da(d)===Da(f);u(r,{replace:g,state:n,preventScrollReset:s,relative:a,viewTransition:l})}},[d,u,f,t,n,e,r,s,a,l])}var iM=0,rM=()=>`__${String(++iM)}__`;function sM(){let{router:r}=Gv("useSubmit"),{basename:e}=J.useContext(zi),t=wS();return J.useCallback(async(n,s={})=>{let{action:a,method:l,encType:u,formData:d,body:f}=kS(n,e);if(s.navigate===!1){let p=s.fetcherKey||rM();await r.fetch(p,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||l,formEncType:s.encType||u,flushSync:s.flushSync})}else await r.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||l,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function oM(r,{relative:e}={}){let{basename:t}=J.useContext(zi),n=J.useContext(hr);Jt(n,"useFormAction must be used inside a RouteContext");let[s]=n.matches.slice(-1),a={...ja(r||".",{relative:e})},l=fr();if(r==null){a.search=l.search;let u=new URLSearchParams(a.search),d=u.getAll("index");if(d.some(p=>p==="")){u.delete("index"),d.filter(g=>g).forEach(g=>u.append("index",g));let p=u.toString();a.search=p?`?${p}`:""}}return(!r||r===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:lr([t,a.pathname])),Da(a)}function aM(r,e={}){let t=J.useContext(Iv);Jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Gv("useViewTransitionState"),s=ja(r,{relative:e.relative});if(!t.isTransitioning)return!1;let a=ur(t.currentLocation.pathname,n)||t.currentLocation.pathname,l=ur(t.nextLocation.pathname,n)||t.nextLocation.pathname;return Gc(s.pathname,l)!=null||Gc(s.pathname,a)!=null}const Wv=J.createContext(void 0),jv=()=>{const r=J.useContext(Wv);if(!r)throw new Error("useTerminal must be used within a TerminalProvider");return r},lM=({children:r})=>{const[e,t]=J.useState(""),[n]=J.useState(null),s=a=>{n&&n(a)};return P.jsx(Wv.Provider,{value:{currentCommand:e,setCurrentCommand:t,executeCommand:s},children:r})},Xv=J.createContext(void 0),$v=()=>{const r=J.useContext(Xv);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r},cM=({children:r})=>{const[e,t]=J.useState("dark");J.useEffect(()=>{const s=localStorage.getItem("portfolio-theme");s&&["dark","light","matrix"].includes(s)&&t(s)},[]),J.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),document.documentElement.className=e,localStorage.setItem("portfolio-theme",e);const s=document.documentElement.style;switch(e){case"light":s.setProperty("--bg-primary","#f8fafc"),s.setProperty("--bg-secondary","#ffffff"),s.setProperty("--bg-tertiary","#e2e8f0"),s.setProperty("--text-primary","#111827"),s.setProperty("--text-secondary","#374151"),s.setProperty("--text-accent","#1d4ed8"),s.setProperty("--border-color","#9ca3af"),s.setProperty("--terminal-bg","#1f2937"),s.setProperty("--terminal-border","#374151"),s.setProperty("--terminal-text","#f9fafb"),s.setProperty("--terminal-prompt","#10b981"),s.setProperty("--terminal-suggestion","#6b7280"),s.setProperty("--sidebar-bg","#f3f4f6"),s.setProperty("--sidebar-border","#d1d5db");break;case"matrix":s.setProperty("--bg-primary","#000000"),s.setProperty("--bg-secondary","#001100"),s.setProperty("--bg-tertiary","#002200"),s.setProperty("--text-primary","#00ff00"),s.setProperty("--text-secondary","#00cc00"),s.setProperty("--text-accent","#00ff41"),s.setProperty("--border-color","#003300"),s.setProperty("--terminal-bg","#000000"),s.setProperty("--terminal-border","#00ff00"),s.setProperty("--terminal-text","#00ff00"),s.setProperty("--terminal-prompt","#00ff41"),s.setProperty("--terminal-suggestion","#008800"),s.setProperty("--sidebar-bg","#000000"),s.setProperty("--sidebar-border","#003300");break;default:s.setProperty("--bg-primary","#0f172a"),s.setProperty("--bg-secondary","#1e293b"),s.setProperty("--bg-tertiary","#334155"),s.setProperty("--text-primary","#f1f5f9"),s.setProperty("--text-secondary","#cbd5e1"),s.setProperty("--text-accent","#60a5fa"),s.setProperty("--border-color","#475569"),s.setProperty("--terminal-bg","#111827"),s.setProperty("--terminal-border","#374151"),s.setProperty("--terminal-text","#f1f5f9"),s.setProperty("--terminal-prompt","#10b981"),s.setProperty("--terminal-suggestion","#6b7280"),s.setProperty("--sidebar-bg","#1e293b"),s.setProperty("--sidebar-border","#475569");break}},[e]);const n=()=>{const s=["dark","light","matrix"],l=(s.indexOf(e)+1)%s.length;t(s[l])};return P.jsx(Xv.Provider,{value:{theme:e,setTheme:t,toggleTheme:n},children:r})},Yv=J.createContext(void 0),uM=()=>{const r=J.useContext(Yv);if(!r)throw new Error("useAsciiArt must be used within an AsciiArtProvider");return r},dM=({children:r})=>{const[e,t]=J.useState("donut");J.useEffect(()=>{const s=localStorage.getItem("portfolio-ascii-art");s&&["cat","roach","donut"].includes(s)?t(s):t("donut")},[]);const n=s=>{t(s),localStorage.setItem("portfolio-ascii-art",s)};return P.jsx(Yv.Provider,{value:{currentArt:e,setCurrentArt:n},children:r})};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qv=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=J.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:a,iconNode:l,...u},d)=>J.createElement("svg",{ref:d,...fM,width:e,height:e,stroke:r,strokeWidth:n?Number(t)*24/Number(e):t,className:qv("lucide",s),...u},[...l.map(([f,p])=>J.createElement(f,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(r,e)=>{const t=J.forwardRef(({className:n,...s},a)=>J.createElement(pM,{ref:a,iconNode:e,className:qv(`lucide-${hM(r)}`,n),...s}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Xt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Xt("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Xt("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=Xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Xt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Xt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Xt("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Xt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Xt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Xt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Xt("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=Xt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Xt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Xt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=Xt("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Xt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Xt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=Xt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Xt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Xt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Xt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=Xt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Xt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),NM=()=>{const{setCurrentCommand:r}=jv(),e=[{icon:P.jsx(wM,{className:"w-5 h-5"}),label:"GitHub",url:"https://github.com/lxluxo23",color:"hover:text-gray-300"},{icon:P.jsx(CM,{className:"w-5 h-5"}),label:"LinkedIn",url:"https://www.linkedin.com/in/lcespedessep/",color:"hover:text-blue-400"},{icon:P.jsx(Zv,{className:"w-5 h-5"}),label:"Email",url:"mailto:luis.cespedes.sep01@gmail.com",color:"hover:text-green-400"}],t=[{icon:P.jsx(e_,{className:"w-4 h-4"}),label:"Ver CV",command:"cv",color:"text-blue-400"},{icon:P.jsx(Kv,{className:"w-4 h-4"}),label:"Proyectos",command:"projects",color:"text-purple-400"},{icon:P.jsx(xM,{className:"w-4 h-4"}),label:"Contacto",command:"contact",color:"text-orange-400"}],n={status:"Disponible para trabajo",activity:"Desarrollando en Spring Boot",location:"Talca, Chile"};return P.jsxs("div",{className:"fixed left-0 top-0 h-full w-80 backdrop-blur-sm border-r p-6 flex flex-col z-10 transition-colors duration-300",style:{backgroundColor:"var(--sidebar-bg)",borderColor:"var(--sidebar-border)"},children:[P.jsxs("div",{className:"text-center mb-8",children:[P.jsx("div",{className:"w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:P.jsx("span",{className:"text-2xl font-bold text-white",children:"LC"})}),P.jsx("h2",{className:"text-xl font-bold mb-1 transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Luis Céspedes"}),P.jsx("p",{className:"text-sm transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"Full Stack Developer"})]}),P.jsxs("div",{className:"mb-8",children:[P.jsxs("h3",{className:"font-semibold mb-3 flex items-center gap-2 transition-colors duration-300",style:{color:"var(--text-primary)"},children:[P.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Estado Actual"]}),P.jsxs("div",{className:"space-y-2 text-sm",children:[P.jsxs("div",{className:"flex items-center gap-2 text-green-400",children:[P.jsx("div",{className:"w-1 h-1 bg-green-400 rounded-full"}),n.status]}),P.jsxs("div",{className:"flex items-center gap-2 transition-colors duration-300",style:{color:"var(--text-secondary)"},children:[P.jsx("div",{className:"w-1 h-1 rounded-full",style:{backgroundColor:"var(--text-secondary)"}}),n.activity]}),P.jsxs("div",{className:"flex items-center gap-2 transition-colors duration-300",style:{color:"var(--text-secondary)"},children:[P.jsx("div",{className:"w-1 h-1 rounded-full",style:{backgroundColor:"var(--text-secondary)"}}),"📍 ",n.location]})]})]}),P.jsxs("div",{className:"mb-8",children:[P.jsx("h3",{className:"font-semibold mb-3 transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Acciones Rápidas"}),P.jsx("div",{className:"space-y-2",children:t.map((s,a)=>P.jsxs("button",{className:"w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left group hover:opacity-80",style:{backgroundColor:"var(--bg-tertiary)"},onClick:()=>{r(s.command);const l=document.querySelector('input[type="text"]');l&&l.focus()},children:[P.jsx("span",{className:s.color,children:s.icon}),P.jsx("span",{className:"transition-colors duration-300",style:{color:"var(--text-primary)"},children:s.label}),P.jsx("span",{className:"text-xs ml-auto transition-colors duration-300",style:{color:"var(--text-secondary)"},children:s.command})]},a))})]}),P.jsxs("div",{className:"mt-auto",children:[P.jsx("h3",{className:"font-semibold mb-3 transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Conecta conmigo"}),P.jsx("div",{className:"flex gap-4",children:e.map((s,a)=>P.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:`p-3 rounded-lg transition-all duration-300 ${s.color} group hover:opacity-80`,style:{backgroundColor:"var(--bg-tertiary)"},title:s.label,children:[s.icon,P.jsx(yM,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity absolute translate-x-1 -translate-y-1"})]},a))}),P.jsx("div",{className:"mt-6 pt-4 border-t transition-colors duration-300",style:{borderColor:"var(--border-color)"},children:P.jsx("p",{className:"text-xs text-center transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"© 2024 Luis Céspedes"})})]})]})},FM=()=>{const r=Nf(),e=fr(),{theme:t,setTheme:n}=$v(),s=`
██╗     ██╗   ██╗██╗███████╗    ██████╗███████╗███████╗██████╗ ███████╗██████╗ ███████╗███████╗
██║     ██║   ██║██║██╔════╝   ██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝
██║     ██║   ██║██║███████╗   ██║     █████╗  ███████╗██████╔╝█████╗  ██║  ██║█████╗  ███████╗
██║     ██║   ██║██║╚════██║   ██║     ██╔══╝  ╚════██║██╔═══╝ ██╔══╝  ██║  ██║██╔══╝  ╚════██║
███████╗╚██████╔╝██║███████║   ╚██████╗███████╗███████║██║     ███████╗██████╔╝███████╗███████║
╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚═════╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═════╝ ╚══════╝╚══════╝
  `,a=[{icon:P.jsx(bM,{className:"w-4 h-4"}),label:"Terminal",path:"/",description:"Terminal interactivo"},{icon:P.jsx(e_,{className:"w-4 h-4"}),label:"CV",path:"/cv",description:"Curriculum Vitae"},{icon:P.jsx(Kv,{className:"w-4 h-4"}),label:"Projects",path:"/projects",description:"Mis proyectos"}],l=[{key:"dark",icon:P.jsx(Qv,{className:"w-4 h-4"}),label:"Dark"},{key:"light",icon:P.jsx(LM,{className:"w-4 h-4"}),label:"Light"},{key:"matrix",icon:P.jsx(RM,{className:"w-4 h-4"}),label:"Matrix"}],u=d=>e.pathname===d;return P.jsx("header",{className:"fixed top-0 left-80 right-0 z-20 backdrop-blur-sm border-b transition-colors duration-300",style:{backgroundColor:"var(--bg-secondary)",borderColor:"var(--border-color)"},children:P.jsxs("div",{className:"px-8 py-4",children:[P.jsx("div",{className:"hidden xl:block mb-4",children:P.jsx("pre",{className:"text-xs leading-none font-mono opacity-60 overflow-hidden transition-colors duration-300",style:{color:"var(--text-accent)"},children:s})}),P.jsxs("nav",{className:"flex items-center justify-between",children:[P.jsxs("div",{className:"xl:hidden",children:[P.jsx("h1",{className:"text-xl font-bold transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Luis Céspedes"}),P.jsx("p",{className:"text-sm transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"Full Stack Developer"})]}),P.jsx("div",{className:"flex items-center gap-2",children:a.map(d=>P.jsxs("button",{onClick:()=>r(d.path),className:`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  ${u(d.path)?"bg-blue-600 text-white shadow-lg shadow-blue-600/25":"text-gray-400 hover:text-white hover:bg-gray-800/50"}
                `,title:d.description,children:[d.icon,P.jsx("span",{className:"hidden sm:inline",children:d.label})]},d.path))}),P.jsx("div",{className:"flex items-center gap-1 bg-gray-800/50 rounded-lg p-1",children:l.map(d=>P.jsx("button",{onClick:()=>n(d.key),className:`
                  p-2 rounded-md transition-all duration-200
                  ${t===d.key?"bg-blue-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}
                `,title:`Tema ${d.label}`,children:d.icon},d.key))})]}),P.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-gray-500",children:[P.jsxs("div",{className:"flex items-center gap-4",children:[P.jsx("span",{children:"🟢 Sistema operativo"}),P.jsxs("span",{children:["⚡ ",new Date().toLocaleDateString()]}),P.jsx("span",{children:"🎯 Backend Developer"})]}),P.jsx("div",{className:"hidden md:flex items-center gap-2",children:P.jsx("span",{children:"Powered by React + TypeScript"})})]})]})})},UM=({variant:r="particles",particleCount:e=100})=>{const t=J.useRef(null),n=J.useRef({x:0,y:0}),s=J.useRef([]),a=J.useRef(),l=J.useMemo(()=>["#60A5FA","#34D399","#A78BFA","#F87171","#FBBF24","#10B981"],[]),u=m=>{const _=[];for(let M=0;M<e;M++)_.push({x:Math.random()*m.width,y:Math.random()*m.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+.5,opacity:Math.random()*.5+.1,color:l[Math.floor(Math.random()*l.length)]});s.current=_},d=(m,_)=>{m.clearRect(0,0,_.width,_.height);const M=s.current,E=n.current;M.forEach((y,x)=>{y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>_.width)&&(y.vx*=-1),(y.y<0||y.y>_.height)&&(y.vy*=-1);const R=E.x-y.x,w=E.y-y.y,b=Math.sqrt(R*R+w*w);if(b<100){const k=(100-b)/100;y.vx+=R*k*1e-4,y.vy+=w*k*1e-4}m.save(),m.globalAlpha=y.opacity,m.fillStyle=y.color,m.beginPath(),m.arc(y.x,y.y,y.size,0,Math.PI*2),m.fill(),m.restore();for(let k=x+1;k<M.length;k++){const N=M[k],F=y.x-N.x,I=y.y-N.y,C=Math.sqrt(F*F+I*I);C<80&&(m.save(),m.globalAlpha=(80-C)/80*.1,m.strokeStyle=y.color,m.lineWidth=.5,m.beginPath(),m.moveTo(y.x,y.y),m.lineTo(N.x,N.y),m.stroke(),m.restore())}})},f=(m,_)=>{m.fillStyle="rgba(0, 0, 0, 0.05)",m.fillRect(0,0,_.width,_.height),m.fillStyle="#00ff00",m.font="15px monospace";const M="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";for(let E=0;E<_.width;E+=20){const y=M[Math.floor(Math.random()*M.length)],x=Math.random()*_.height;m.globalAlpha=Math.random()*.8+.2,m.fillText(y,E,x)}},p=(m,_)=>{m.clearRect(0,0,_.width,_.height);const M=50,E=n.current;m.strokeStyle="#1f2937",m.lineWidth=1;for(let y=0;y<=_.width;y+=M)for(let x=0;x<=_.height;x+=M){const R=E.x-y,w=E.y-x,b=Math.sqrt(R*R+w*w);if(b<150){const k=1-b/150;m.save(),m.globalAlpha=k*.5,m.strokeStyle="#60A5FA",m.beginPath(),m.moveTo(y,x),m.lineTo(y,x+M),m.stroke(),m.beginPath(),m.moveTo(y,x),m.lineTo(y+M,x),m.stroke(),m.restore()}else m.save(),m.globalAlpha=.1,m.strokeStyle="#374151",m.beginPath(),m.moveTo(y,x),m.lineTo(y,x+M),m.stroke(),m.beginPath(),m.moveTo(y,x),m.lineTo(y+M,x),m.stroke(),m.restore()}},g=()=>{const m=t.current;if(!m)return;const _=m.getContext("2d");if(_){switch(r){case"particles":d(_,m);break;case"matrix":f(_,m);break;case"grid":p(_,m);break}a.current=requestAnimationFrame(g)}};return J.useEffect(()=>{const m=t.current;if(!m||!m.getContext("2d"))return;const M=()=>{m.width=window.innerWidth,m.height=window.innerHeight,r==="particles"&&u(m)},E=y=>{n.current={x:y.clientX,y:y.clientY}};return M(),window.addEventListener("resize",M),window.addEventListener("mousemove",E),g(),()=>{window.removeEventListener("resize",M),window.removeEventListener("mousemove",E),a.current&&cancelAnimationFrame(a.current)}},[r,e]),P.jsx("canvas",{ref:t,className:"fixed inset-0 pointer-events-none z-0",style:{background:r==="matrix"?"#000":"transparent"}})},fi=[{title:"Direct Lounge",artist:"SleepCircle",url:"./sounds/matrix/Direct_Lounge_ENAwave.mp3",image:"./sounds/matrix/directLounge.png"},{title:"Synthepanzer",artist:"Telan Devik",url:"./sounds/matrix/Telan_Devik_-_Music_for_Anti-Gravity_Racing_Games_-_05_Synthepanzer.mp3",image:"./sounds/matrix/Synthepanzer.png"},{title:"Yokai Disco",artist:"Telan Devik",url:"./sounds/matrix/Telan_Devik_-_Yokai_disco.mp3",image:"./sounds/matrix/yokai-disco.png"},{title:"Technopolis",artist:"YMO (Isao Takaku cover)",url:"./sounds/matrix/YMO__Technopolis__mixed_2008.mp3",image:"./sounds/matrix/ymoTechnopolis.jpg"},{title:"Devik's First Colony",artist:"Permanent Moon Base",url:"./sounds/matrix/Permanent Moon Base - Devik's first colony.mp3",image:"./sounds/matrix/deviks-first-colony.png"}],kM=()=>{const{theme:r}=$v(),[e,t]=J.useState(()=>Math.floor(Math.random()*fi.length)),[n,s]=J.useState(!1),[a,l]=J.useState(0),[u,d]=J.useState(0),[f,p]=J.useState(.05),[g,m]=J.useState(!1),[_,M]=J.useState(!1),E=J.useRef(null),y=J.useRef(null);J.useEffect(()=>{const I=E.current;if(!I)return;const C=()=>{l(I.currentTime||0)},T=()=>{I.duration&&isFinite(I.duration)&&d(I.duration)},U=()=>{const K=(e+1)%fi.length;t(K),s(!1),setTimeout(()=>{E.current&&E.current.play().then(()=>{s(!0)}).catch(console.error)},500)},Y=K=>{console.error("Audio error:",K),t(j=>(j+1)%fi.length)};return I.addEventListener("timeupdate",C),I.addEventListener("loadedmetadata",T),I.addEventListener("ended",U),I.addEventListener("error",Y),()=>{I.removeEventListener("timeupdate",C),I.removeEventListener("loadedmetadata",T),I.removeEventListener("ended",U),I.removeEventListener("error",Y)}},[e]),J.useEffect(()=>{if(r==="matrix"){const I=E.current;if(!I)return;const C=()=>{l(I.currentTime||0)},T=()=>{I.duration&&isFinite(I.duration)&&d(I.duration)};return I.addEventListener("timeupdate",C),I.addEventListener("loadedmetadata",T),I.addEventListener("canplay",T),I.addEventListener("durationchange",T),()=>{I.removeEventListener("timeupdate",C),I.removeEventListener("loadedmetadata",T),I.removeEventListener("canplay",T),I.removeEventListener("durationchange",T)}}},[r]),J.useEffect(()=>{E.current&&(E.current.volume=g?0:f)},[f,g]),J.useEffect(()=>{E.current&&(E.current.volume=f)},[]),J.useEffect(()=>{if(r!=="matrix"){E.current&&!E.current.paused&&(E.current.pause(),s(!1));return}if(E.current&&r==="matrix"){E.current.volume=f;const I=async()=>{try{await E.current?.play(),s(!0)}catch(C){console.log("Autoplay prevented:",C)}};setTimeout(()=>{I()},100)}},[r]),J.useEffect(()=>{E.current&&(E.current.load(),E.current.volume=g?0:f,l(0),d(0),s(!1))},[e]);const x=async()=>{if(E.current)try{n?(E.current.pause(),s(!1)):(await E.current.play(),s(!0))}catch(I){console.error("Playback error:",I)}},R=I=>{const C=n;t(I==="next"?T=>(T+1)%fi.length:T=>(T-1+fi.length)%fi.length),s(!1),C&&setTimeout(()=>{E.current&&E.current.play().then(()=>{s(!0)}).catch(console.error)},300)},w=I=>{if(!E.current||!u)return;const C=I.currentTarget.getBoundingClientRect(),Y=(I.clientX-C.left)/C.width*u;E.current.currentTime=Y,l(Y)},b=I=>{if(isNaN(I)||!isFinite(I)||I<0)return"0:00";const C=Math.floor(I/60),T=Math.floor(I%60);return`${C}:${T.toString().padStart(2,"0")}`},k=I=>{M(!0),N(I)},N=I=>{if(!y.current)return;const C=y.current.getBoundingClientRect(),T=I.clientX-C.left,U=Math.max(0,Math.min(1,T/C.width));p(U)};return J.useEffect(()=>{const I=T=>{_&&N(T)},C=()=>{M(!1)};return _&&(document.addEventListener("mousemove",I),document.addEventListener("mouseup",C)),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",C)}},[_]),r!=="matrix"?null:P.jsxs(P.Fragment,{children:[P.jsx("style",{children:`
        .joel-player {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 55px;
          background: #c0c0c0;
          border-top: 2px solid #dfdfdf;
          border-left: 2px solid #dfdfdf;
          border-right: 2px solid #808080;
          border-bottom: 2px solid #404040;
          font-family: 'MS Sans Serif', sans-serif;
          font-size: 11px;
        }

        .joel-player-inner {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 3px 6px;
          background: linear-gradient(180deg, #dfdfdf 0%, #c0c0c0 50%, #c0c0c0 100%);
        }

        .joel-album-art {
          width: 35px;
          height: 35px;
          background: #000;
          border: 1px solid #808080;
          border-top-color: #404040;
          border-left-color: #404040;
          border-right-color: #dfdfdf;
          border-bottom-color: #dfdfdf;
          margin-right: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .joel-album-art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .joel-album-placeholder {
          color: #00ff00;
          font-size: 12px;
          font-family: monospace;
        }

        .joel-controls {
          display: flex;
          align-items: center;
          margin-right: 6px;
        }

        .joel-btn {
          width: 32px;
          height: 22px;
          border: none;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAWCAYAAAAvikJUAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVR4nO2bTW7CMBCFX6re0RyjXZUbJF2lx3BuEVbOrV4X5E8hUChkJpD3SRaSF7yRPeOxZwAQQgghhBBCCCFugu3Yqv7T8uZtgHhuYgzMixIAkBeleRB6628NnbSiJ8ZA8ugTdWpYp8bUN7z1twgnw9uGS3MW+nPDA5fMS4J5UTIvStapIUlaZWFv/a2yBqfXAXDeJhO64CPZZ98OiwCMMZA41c+LkrRbhzkdK/97mO77HYbMGZA96PvEeS5tNrHgHsQYCAAhVEtLXdTvyQb94vsH+/2nlSlewT/Wmi6+yYb8lf0sMtGWbwBua3/M+hxl+yEDo83GS94Apvr9LaDTb4fBDWRN/ne3/lJdAL3DliWbjPH8wrLd55Bw6tQgyyxuA4N+CBFVDABGzsbF3c4781+jfZM9Sx0AegrYY7jmXfAffS0dErpWnK2+OXOinr5ubs8aCmBruoJ5PQE8YNtz76//XQsOBk+Aqb7jEwCY3wdr//PQXkXlWweA3/oTbSA6dQEG/VHw16npOwC0TUTXzL2Kbi/kFfhzNlyas9D3CEbvAxgYHQKwPQB6fQIn+sZtwJfgvzWAafHJknPFLyubpgW4cwU5S31rst2uQlUF5EWJdEjm+hlwor//+kBhWosQYtuw7c17/QrPW//p0Z+BxD1ku12FGINRG3B1+kII+NaE1qAvhBBCCCGEEM/AL4wXU4xI/DxFAAAAAElFTkSuQmCC');
          background-repeat: no-repeat;
          cursor: pointer;
          margin-right: 1px;
        }

        .joel-btn:hover {
          filter: brightness(1.1);
        }

        .joel-btn:active {
          filter: brightness(0.9);
        }

        .joel-btn-prev {
          background-position: -192px 0;
        }

        .joel-btn-play {
          background-position: 0px 0;
        }

        .joel-btn-pause {
          background-position: -32px 0;
        }

        .joel-btn-next {
          background-position: -224px 0;
        }

        .joel-btn-loop {
          background-position: -96px 0;
        }

        .joel-track-container {
          flex: 1;
          margin: 0 6px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .joel-track-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3px;
        }

        .joel-time {
          color: #000;
          font-size: 10px;
          font-family: 'Courier New', monospace;
          min-width: 35px;
        }

        .joel-track-title {
          flex: 1;
          text-align: center;
          color: #000;
          font-size: 11px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0 8px;
        }

        .joel-progress-container {
          width: 100%;
          height: 10px;
          background: #c0c0c0;
          border: 1px solid #808080;
          border-top-color: #404040;
          border-left-color: #404040;
          border-right-color: #dfdfdf;
          border-bottom-color: #dfdfdf;
          cursor: pointer;
          position: relative;
        }

        .joel-progress-fill {
          height: 100%;
          background: #000080;
          position: relative;
          transition: width 0.1s linear;
        }

        .joel-progress-thumb {
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          background: #ffffff;
          transform: translateX(1px);
        }

        .joel-volume-container {
          display: flex;
          align-items: center;
          margin-left: 6px;
        }

        .joel-btn-volume {
          background-position: -128px 0;
          margin-right: 4px;
        }

        .joel-btn-volume-muted {
          background-position: -160px 0;
        }

        /* Slider de volumen estilo Joel G original */
        .joel-volume-slider {
          overflow: hidden;
          width: 50px;
          height: 21px;
          cursor: pointer;
          margin-top: 7px;
          float: left;
          background: url('./img/volume-frames.png');
          margin-right: 6px;
          position: relative;
        }

        .joel-volume-bar-value {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 12px;
          background: #c0c0c0;
          border: 1px solid #808080;
          border-top-color: #dfdfdf;
          border-left-color: #dfdfdf;
          border-right-color: #404040;
          border-bottom-color: #404040;
        }

        .joel-volume-text {
          color: #000;
          font-size: 10px;
          font-family: 'Courier New', monospace;
          min-width: 20px;
          text-align: center;
        }

        body {
          padding-bottom: 55px !important;
        }
      `}),P.jsx("div",{className:"joel-player",children:P.jsxs("div",{className:"joel-player-inner",children:[P.jsx("div",{className:"joel-album-art",children:fi[e].image?P.jsx("img",{src:fi[e].image,alt:fi[e].title,onError:I=>{I.currentTarget.style.display="none"}}):P.jsx("div",{className:"joel-album-placeholder",children:"♪"})}),P.jsxs("div",{className:"joel-controls",children:[P.jsx("button",{onClick:()=>R("prev"),className:"joel-btn joel-btn-prev",title:"Previous track"}),P.jsx("button",{onClick:x,className:`joel-btn ${n?"joel-btn-pause":"joel-btn-play"}`,title:n?"Pause":"Play"}),P.jsx("button",{onClick:()=>R("next"),className:"joel-btn joel-btn-next",title:"Next track"}),P.jsx("button",{className:"joel-btn joel-btn-loop",title:"Loop",style:{filter:"brightness(0.8)"}})]}),P.jsxs("div",{className:"joel-track-container",children:[P.jsxs("div",{className:"joel-track-header",children:[P.jsx("div",{className:"joel-time",children:b(a)}),P.jsxs("div",{className:"joel-track-title",children:[fi[e].title," - ",fi[e].artist]}),P.jsx("div",{className:"joel-time",children:b(u)})]}),P.jsx("div",{className:"joel-progress-container",onClick:w,children:P.jsx("div",{className:"joel-progress-fill",style:{width:`${u>0?a/u*100:0}%`},children:P.jsx("div",{className:"joel-progress-thumb"})})})]}),P.jsxs("div",{className:"joel-volume-container",children:[P.jsx("button",{onClick:()=>m(!g),className:`joel-btn ${g?"joel-btn-volume-muted":"joel-btn-volume"}`,title:g?"Unmute":"Mute"}),P.jsx("div",{ref:y,className:"joel-volume-slider",title:"Volume",onMouseDown:k,style:{cursor:_?"grabbing":"pointer"},children:P.jsx("div",{className:"joel-volume-bar-value",style:{left:`calc(${f*100}%)`}})}),P.jsx("div",{className:"joel-volume-text",children:Math.round(f*100)})]})]})}),P.jsx("audio",{ref:E,src:fi[e].url,onPlay:()=>s(!0),onPause:()=>s(!1),onLoadedData:()=>{E.current&&(E.current.volume=f,E.current.duration&&isFinite(E.current.duration)&&d(E.current.duration))},onCanPlay:()=>{E.current&&E.current.duration&&isFinite(E.current.duration)&&d(E.current.duration)},preload:"metadata"})]})},OM=({children:r})=>{const e=fr(),t=()=>{switch(e.pathname){case"/":return"particles";case"/cv":return"grid";default:return"particles"}};return P.jsxs("div",{className:"min-h-screen transition-colors duration-300",style:{backgroundColor:"var(--bg-primary)"},children:[P.jsx(UM,{variant:t()}),P.jsx(NM,{}),P.jsx(FM,{}),P.jsx("main",{className:"ml-80 pt-40 xl:pt-48 relative z-10",children:P.jsx("div",{className:"min-h-screen",children:r})}),P.jsx(kM,{}),P.jsx("div",{className:"lg:hidden fixed inset-0 bg-gray-950 z-50 flex items-center justify-center",children:P.jsxs("div",{className:"text-center text-white p-8",children:[P.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Portfolio de Luis Céspedes"}),P.jsx("p",{className:"text-gray-400 mb-4",children:"Este portafolio está optimizado para pantallas grandes."}),P.jsx("p",{className:"text-sm text-gray-500",children:"Por favor, visita desde un dispositivo con pantalla más grande para la mejor experiencia."})]})})]})},BM={user:"Luis Esteban Céspedes Sepulveda",host:"Portfolio",os:"PortfolioOS",kernel:"Full Stack Developer",uptime:"3 years of experience",role:"Backend-oriented Full Stack Developer",focus:"Backend Development & System Architecture",shell:"/usr/bin/fullstack",terminal:"VS Code",skills:{languages:[{name:"Java",details:"Java 1.8, Java 11"},{name:"Python 3+"},{name:"PHP"},{name:"JavaScript/TypeScript"},{name:".NET"}],frameworks:[{name:"Spring Boot"},{name:"Laravel 7"},{name:"NodeJS 16+"},{name:"Angular 13+"},{name:"Ionic Angular"},{name:"Flask",details:"Python Web Framework"}],databases:{relational:["MySQL","PostgreSQL","Microsoft SQL","Oracle","MariaDB"],nosql:["MongoDB","Redis","Cassandra"]},devops:[{name:"Docker",level:"Advanced"},{name:"Jenkins",details:"Pipelines, CI/CD"},{name:"Linux",details:"Server Administration"},{name:"GitHub Actions"}],cloud:[{name:"Railway"},{name:"VPN",details:"WireGuard"}],mobile:[{name:"Android Studio"},{name:"Flutter",details:"Play Store Publishing"},{name:"Ionic Angular"}],testing:[{name:"Postman",details:"API Testing"},{name:"SonarQube",details:"Code Analysis"},{name:"Unit Testing"}],other:[{name:"WebSockets"},{name:"OAuth 2.0/JWT"},{name:"SSL/TLS"},{name:"Scrum"},{name:"Networking"}]}},zM=r=>({"/home/user":{"about.txt":`Hi! I'm ${r.user}, a ${r.role}. Welcome to my interactive portfolio terminal!`,"skills.txt":VM(r),"contact.txt":`Email: luis.cespedes.sep01@gmail.com 
GitHub: github.com/lxluxo23`,"experience.txt":`Role: ${r.role}
Focus: ${r.focus}
Uptime: ${r.uptime}`}});function VM(r){return`Technical Skills Overview:
  
  Languages:
  ${r.skills.languages.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}`).join(`
`)}
  
  Frameworks:
  ${r.skills.frameworks.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}`).join(`
`)}
  
  Databases:
  Relational:
  ${r.skills.databases.relational.map(e=>`- ${e}`).join(`
`)}
  NoSQL:
  ${r.skills.databases.nosql.map(e=>`- ${e}`).join(`
`)}
  
  DevOps:
  ${r.skills.devops.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}${e.level?` - ${e.level}`:""}`).join(`
`)}
  
  Cloud:
  ${r.skills.cloud.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}`).join(`
`)}
  
  Mobile:
  ${r.skills.mobile.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}`).join(`
`)}
  
  Testing:
  ${r.skills.testing.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}`).join(`
`)}
  
  Other Skills:
  ${r.skills.other.map(e=>`- ${e.name}${e.details?` (${e.details})`:""}`).join(`
`)}`}class HM{currentPath;fileSystem;constructor(e){this.currentPath="/home/user",this.fileSystem=zM(e)}processCommand(e){const[t,...n]=e.trim().toLowerCase().split(" ");switch(t){case"clear":return null;case"help":return{command:e,output:this.getHelpText()};case"pwd":return{command:e,output:this.currentPath};case"ls":return this.handleLs();case"cat":return this.handleCat(n);case"tree":return this.handleTree();case"cv":case"resume":return{command:e,output:"Opening CV page...",action:"navigate",path:"/cv"};case"projects":return{command:e,output:`Projects section coming soon! 🚀
Stay tuned for my latest work and developments.`};case"contact":return{command:e,output:P.jsxs("div",{children:[P.jsxs("div",{className:"mb-2",children:["📧 ",P.jsx("strong",{children:"Email:"})," luis.cespedes.sep01@gmail.com"]}),P.jsxs("div",{className:"mb-2",children:["💼 ",P.jsx("strong",{children:"LinkedIn:"})," linkedin.com/in/lcespedessep"]}),P.jsxs("div",{className:"mb-2",children:["🐙 ",P.jsx("strong",{children:"GitHub:"})," github.com/lxluxo23"]}),P.jsxs("div",{className:"mb-2",children:["📍 ",P.jsx("strong",{children:"Location:"})," Talca, Chile"]}),P.jsx("div",{className:"mt-3 text-green-400",children:"Ready to collaborate! Feel free to reach out."})]})};default:return{command:e,output:`Command not found: ${t}. Type 'help' for available commands.`}}}getHelpText(){return P.jsxs("div",{children:[P.jsxs("div",{children:[P.jsx("strong",{children:"neofetch"})," - Display system information"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"clear"})," - Clear the terminal"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"ls"})," - List directory contents"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"pwd"})," - Print working directory"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"cat"})," - Read file contents"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"cv / resume"})," - View my curriculum vitae"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"projects"})," - See my projects and work"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"contact"})," - Get my contact information"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"tree"})," - Display directory structure"]}),P.jsxs("div",{children:[P.jsx("strong",{children:"help"})," - Show this help message"]})]})}handleLs(){const e=this.fileSystem[this.currentPath];return{command:"ls",output:e?Object.keys(e).join("  "):"Directory not found"}}handleCat(e){if(e.length===0)return{command:"cat",output:"Usage: cat <filename>"};const t=this.fileSystem[this.currentPath],n=e[0];return t&&t[n]?{command:"cat "+n,output:t[n]}:{command:"cat "+n,output:`File ${n} not found`}}handleTree(){const e=`
/home/user
├── documents/
│   ├── resume.pdf
│   └── notes/
│       ├── ideas.txt
│       └── todo.txt
├── technologies/
│   ├── languages/
│   │   ├── java-1.8-11.spec
│   │   ├── javascript-typescript.spec
│   │   ├── python3.spec
│   │   ├── php.spec
│   │   └── dotnet.spec
│   ├── frameworks/
│   │   ├── spring-boot.config
│   │   ├── angular-8-13.config
│   │   ├── nodejs-16.config
│   │   ├── laravel-7.config
│   │   ├── flutter.config
│   │   ├── ionic-angular.config
│   │   └── flask.config
│   ├── databases/
│   │   ├── relational/
│   │   │   ├── mysql.db
│   │   │   ├── postgresql.db
│   │   │   ├── sql-server.db
│   │   │   ├── oracle.db
│   │   │   └── mariadb.db
│   │   └── nosql/
│   │       ├── mongodb.db
│   │       ├── redis.db
│   │       └── cassandra.db
│   ├── devops/
│   │   ├── docker.yaml
│   │   ├── jenkins-ci-cd.yaml
│   │   ├── github-actions.yaml
│   │   ├── linux-admin.sh
│   │   └── pm2.config
│   ├── cloud/
│   │   ├── railway.config
│   │   ├── aws-ec2.config
│   │   ├── huawei-cloud.config
│   │   ├── azure-ad.config
│   │   └── wireguard-vpn.config
│   ├── mobile/
│   │   ├── android-studio.config
│   │   ├── flutter-playstore.config
│   │   └── ionic-angular.config
│   ├── integration/
│   │   ├── soap-services.xml
│   │   ├── jaxb-edocs.xml
│   │   ├── apache-camel.xml
│   │   ├── rest-api.json
│   │   ├── oauth2-jwt.json
│   │   └── websockets.config
│   └── tools/
│       ├── git-gitflow.config
│       ├── postman-api.config
│       ├── sonarqube.config
│       ├── jboss-fuse-eap.config
│       ├── sequelize-orm.config
│       └── ssl-tls.config
└── config/
    ├── .bashrc
    ├── .vimrc
    └── aliases.sh

14 directories, 47 files
    `.trim();return{command:"tree",output:P.jsx("div",{className:"font-mono text-sm",children:P.jsx("pre",{className:"text-green-400 whitespace-pre-wrap",children:e})})}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="171",So={ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GM=0,Zg=1,WM=2,t_=1,zf=2,rr=3,Xr=0,Jn=1,sr=2,Wr=0,Mo=1,Jg=2,Qg=3,e0=4,jM=5,ys=100,XM=101,$M=102,YM=103,qM=104,KM=200,ZM=201,JM=202,QM=203,Vh=204,Hh=205,eE=206,tE=207,nE=208,iE=209,rE=210,sE=211,oE=212,aE=213,lE=214,Gh=0,Wh=1,jh=2,bo=3,Xh=4,$h=5,Yh=6,qh=7,tu=0,cE=1,uE=2,jr=0,dE=1,hE=2,fE=3,Vf=4,pE=5,mE=6,gE=7,t0="attached",vE="detached",n_=300,Ao=301,Co=302,Wc=303,Kh=304,nu=306,Ia=1e3,or=1001,Zh=1002,oi=1003,_E=1004,sc=1005,Ui=1006,Kd=1007,Ms=1008,dr=1009,i_=1010,r_=1011,Na=1012,Hf=1013,Es=1014,ki=1015,Xa=1016,Gf=1017,Wf=1018,Ro=1020,s_=35902,o_=1021,a_=1022,gi=1023,l_=1024,c_=1025,Eo=1026,Po=1027,u_=1028,jf=1029,d_=1030,Xf=1031,$f=1033,kc=33776,Oc=33777,Bc=33778,zc=33779,Jh=35840,Qh=35841,ef=35842,tf=35843,nf=36196,rf=37492,sf=37496,of=37808,af=37809,lf=37810,cf=37811,uf=37812,df=37813,hf=37814,ff=37815,pf=37816,mf=37817,gf=37818,vf=37819,_f=37820,xf=37821,Vc=36492,yf=36494,Sf=36495,h_=36283,Mf=36284,Ef=36285,wf=36286,jc=2300,Tf=2301,Zd=2302,n0=2400,i0=2401,r0=2402,xE=2500,yE=3200,SE=3201,iu=0,ME=1,Gr="",Vt="srgb",Lo="srgb-linear",Xc="linear",kt="srgb",Js=7680,s0=519,EE=512,wE=513,TE=514,f_=515,bE=516,AE=517,CE=518,RE=519,o0=35044,a0="300 es",ar=2e3,$c=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let l0=1234567;const Ca=Math.PI/180,Do=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function Yf(r,e){return(r%e+e)%e}function PE(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function LE(r,e,t){return r!==e?(t-r)/(e-r):0}function Ra(r,e,t){return(1-t)*r+t*e}function DE(r,e,t,n){return Ra(r,e,1-Math.exp(-t*n))}function IE(r,e=1){return e-Math.abs(Yf(r,e*2)-e)}function NE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function FE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function UE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function kE(r,e){return r+Math.random()*(e-r)}function OE(r){return r*(.5-Math.random())}function BE(r){r!==void 0&&(l0=r);let e=l0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zE(r){return r*Ca}function VE(r){return r*Do}function HE(r){return(r&r-1)===0&&r!==0}function GE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function WE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jE(r,e,t,n,s){const a=Math.cos,l=Math.sin,u=a(t/2),d=l(t/2),f=a((e+n)/2),p=l((e+n)/2),g=a((e-n)/2),m=l((e-n)/2),_=a((n-e)/2),M=l((n-e)/2);switch(s){case"XYX":r.set(u*p,d*g,d*m,u*f);break;case"YZY":r.set(d*m,u*p,d*g,u*f);break;case"ZXZ":r.set(d*g,d*m,u*p,u*f);break;case"XZX":r.set(u*p,d*M,d*_,u*f);break;case"YXY":r.set(d*_,u*p,d*M,u*f);break;case"ZYZ":r.set(d*M,d*_,u*p,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function po(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:Ca,RAD2DEG:Do,generateUUID:qr,clamp:dt,euclideanModulo:Yf,mapLinear:PE,inverseLerp:LE,lerp:Ra,damp:DE,pingpong:IE,smoothstep:NE,smootherstep:FE,randInt:UE,randFloat:kE,randFloatSpread:OE,seededRandom:BE,degToRad:zE,radToDeg:VE,isPowerOfTwo:HE,ceilPowerOfTwo:GE,floorPowerOfTwo:WE,setQuaternionFromProperEuler:jE,normalize:Vn,denormalize:po};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*s+e.x,this.y=a*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,s,a,l,u,d,f){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,u,d,f)}set(e,t,n,s,a,l,u,d,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],p=n[4],g=n[7],m=n[2],_=n[5],M=n[8],E=s[0],y=s[3],x=s[6],R=s[1],w=s[4],b=s[7],k=s[2],N=s[5],F=s[8];return a[0]=l*E+u*R+d*k,a[3]=l*y+u*w+d*N,a[6]=l*x+u*b+d*F,a[1]=f*E+p*R+g*k,a[4]=f*y+p*w+g*N,a[7]=f*x+p*b+g*F,a[2]=m*E+_*R+M*k,a[5]=m*y+_*w+M*N,a[8]=m*x+_*b+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8];return t*l*p-t*u*f-n*a*p+n*u*d+s*a*f-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=p*l-u*f,m=u*d-p*a,_=f*a-l*d,M=t*g+n*m+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*f-p*n)*E,e[2]=(u*n-s*l)*E,e[3]=m*E,e[4]=(p*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=_*E,e[7]=(n*d-f*t)*E,e[8]=(l*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,l,u){const d=Math.cos(a),f=Math.sin(a);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-s*f,s*d,-s*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jd=new ut;function p_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XE(){const r=Fa("canvas");return r.style.display="block",r}const c0={};function mo(r){r in c0||(c0[r]=!0,console.warn(r))}function $E(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function YE(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const u0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KE(){const r={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===kt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===kt&&(s.r=wo(s.r),s.g=wo(s.g),s.b=wo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gr?Xc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Lo]:{primaries:e,whitePoint:n,transfer:Xc,toXYZ:u0,fromXYZ:d0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:u0,fromXYZ:d0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),r}const ft=KE();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qs;class ZE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Fa("canvas")),Qs.width=e.width,Qs.height=e.height;const n=Qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=cr(a[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JE=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(Qd(s[l].image)):a.push(Qd(s[l]))}else a=Qd(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Qd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QE=0;class Tn extends bs{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=or,s=or,a=Ui,l=Ms,u=gi,d=dr,f=Tn.DEFAULT_ANISOTROPY,p=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=qr(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=n_;Tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,f=d[0],p=d[4],g=d[8],m=d[1],_=d[5],M=d[9],E=d[2],y=d[6],x=d[10];if(Math.abs(p-m)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(f+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(f+1)/2,b=(_+1)/2,k=(x+1)/2,N=(p+m)/4,F=(g+E)/4,I=(M+y)/4;return w>b&&w>k?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=N/n,a=F/n):b>k?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=N/s,a=I/s):k<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),n=F/a,s=I/a),this.set(n,s,a,t),this}let R=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(m-p)*(m-p));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(g-E)/R,this.z=(m-p)/R,this.w=Math.acos((f+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends e1{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class g_ extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t1 extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,l,u){let d=n[s+0],f=n[s+1],p=n[s+2],g=n[s+3];const m=a[l+0],_=a[l+1],M=a[l+2],E=a[l+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=m,e[t+1]=_,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==m||f!==_||p!==M){let y=1-u;const x=d*m+f*_+p*M+g*E,R=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const k=Math.sqrt(w),N=Math.atan2(k,x*R);y=Math.sin(y*N)/k,u=Math.sin(u*N)/k}const b=u*R;if(d=d*y+m*b,f=f*y+_*b,p=p*y+M*b,g=g*y+E*b,y===1-u){const k=1/Math.sqrt(d*d+f*f+p*p+g*g);d*=k,f*=k,p*=k,g*=k}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,a,l){const u=n[s],d=n[s+1],f=n[s+2],p=n[s+3],g=a[l],m=a[l+1],_=a[l+2],M=a[l+3];return e[t]=u*M+p*g+d*_-f*m,e[t+1]=d*M+p*m+f*g-u*_,e[t+2]=f*M+p*_+u*m-d*g,e[t+3]=p*M-u*g-d*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),p=u(s/2),g=u(a/2),m=d(n/2),_=d(s/2),M=d(a/2);switch(l){case"XYZ":this._x=m*p*g+f*_*M,this._y=f*_*g-m*p*M,this._z=f*p*M+m*_*g,this._w=f*p*g-m*_*M;break;case"YXZ":this._x=m*p*g+f*_*M,this._y=f*_*g-m*p*M,this._z=f*p*M-m*_*g,this._w=f*p*g+m*_*M;break;case"ZXY":this._x=m*p*g-f*_*M,this._y=f*_*g+m*p*M,this._z=f*p*M+m*_*g,this._w=f*p*g-m*_*M;break;case"ZYX":this._x=m*p*g-f*_*M,this._y=f*_*g+m*p*M,this._z=f*p*M-m*_*g,this._w=f*p*g+m*_*M;break;case"YZX":this._x=m*p*g+f*_*M,this._y=f*_*g+m*p*M,this._z=f*p*M-m*_*g,this._w=f*p*g-m*_*M;break;case"XZY":this._x=m*p*g-f*_*M,this._y=f*_*g-m*p*M,this._z=f*p*M+m*_*g,this._w=f*p*g+m*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],l=t[1],u=t[5],d=t[9],f=t[2],p=t[6],g=t[10],m=n+u+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-f)*_,this._z=(l-s)*_}else if(n>u&&n>g){const _=2*Math.sqrt(1+n-u-g);this._w=(p-d)/_,this._x=.25*_,this._y=(s+l)/_,this._z=(a+f)/_}else if(u>g){const _=2*Math.sqrt(1+u-n-g);this._w=(a-f)/_,this._x=(s+l)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+g-n-u);this._w=(l-s)/_,this._x=(a+f)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,l=e._w,u=t._x,d=t._y,f=t._z,p=t._w;return this._x=n*p+l*u+s*f-a*d,this._y=s*p+l*d+a*u-n*f,this._z=a*p+l*f+n*d-s*u,this._w=l*p-n*u-s*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,l=this._w;let u=l*e._w+n*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const _=1-t;return this._w=_*l+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),p=Math.atan2(f,u),g=Math.sin((1-t)*p)/f,m=Math.sin(t*p)/f;return this._w=l*g+this._w*m,this._x=n*g+this._x*m,this._y=s*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*s-u*n),p=2*(u*t-a*s),g=2*(a*n-l*t);return this.x=t+d*f+l*g-u*p,this.y=n+d*p+u*f-a*g,this.z=s+d*g+a*p-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,l=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*l-n*d,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new H,h0=new yn;class As{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,wi):wi.fromBufferAttribute(a,l),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),ac.subVectors(this.max,Sa),eo.subVectors(e.a,Sa),to.subVectors(e.b,Sa),no.subVectors(e.c,Sa),Fr.subVectors(to,eo),Ur.subVectors(no,to),fs.subVectors(eo,no);let t=[0,-Fr.z,Fr.y,0,-Ur.z,Ur.y,0,-fs.z,fs.y,Fr.z,0,-Fr.x,Ur.z,0,-Ur.x,fs.z,0,-fs.x,-Fr.y,Fr.x,0,-Ur.y,Ur.x,0,-fs.y,fs.x,0];return!th(t,eo,to,no,ac)||(t=[1,0,0,0,1,0,0,0,1],!th(t,eo,to,no,ac))?!1:(lc.crossVectors(Fr,Ur),t=[lc.x,lc.y,lc.z],th(t,eo,to,no,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new H,new H,new H,new H,new H,new H,new H,new H],wi=new H,oc=new As,eo=new H,to=new H,no=new H,Fr=new H,Ur=new H,fs=new H,Sa=new H,ac=new H,lc=new H,ps=new H;function th(r,e,t,n,s){for(let a=0,l=r.length-3;a<=l;a+=3){ps.fromArray(r,a);const u=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),d=e.dot(ps),f=t.dot(ps),p=n.dot(ps);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const n1=new As,Ma=new H,nh=new H;class ko{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):n1.setFromPoints(e).getCenter(n);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(nh)),this.expandByPoint(Ma.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new H,ih=new H,cc=new H,kr=new H,rh=new H,uc=new H,sh=new H;class ru{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ih.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(ih);const a=e.distanceTo(t)*.5,l=-this.direction.dot(cc),u=kr.dot(this.direction),d=-kr.dot(cc),f=kr.lengthSq(),p=Math.abs(1-l*l);let g,m,_,M;if(p>0)if(g=l*d-u,m=l*u-d,M=a*p,g>=0)if(m>=-M)if(m<=M){const E=1/p;g*=E,m*=E,_=g*(g+l*m+2*u)+m*(l*g+m+2*d)+f}else m=a,g=Math.max(0,-(l*m+u)),_=-g*g+m*(m+2*d)+f;else m=-a,g=Math.max(0,-(l*m+u)),_=-g*g+m*(m+2*d)+f;else m<=-M?(g=Math.max(0,-(-l*a+u)),m=g>0?-a:Math.min(Math.max(-a,-d),a),_=-g*g+m*(m+2*d)+f):m<=M?(g=0,m=Math.min(Math.max(-a,-d),a),_=m*(m+2*d)+f):(g=Math.max(0,-(l*a+u)),m=g>0?a:Math.min(Math.max(-a,-d),a),_=-g*g+m*(m+2*d)+f);else m=l>0?-a:a,g=Math.max(0,-(l*m+u)),_=-g*g+m*(m+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ih).addScaledVector(cc,m),_}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const n=Qi.dot(this.direction),s=Qi.dot(Qi)-n*n,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,l,u,d;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(a=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||a>s||((a>n||isNaN(n))&&(n=a),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-m.z)*g,d=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,d=(e.min.z-m.z)*g),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,s,a){rh.subVectors(t,e),uc.subVectors(n,e),sh.crossVectors(rh,uc);let l=this.direction.dot(sh),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;kr.subVectors(this.origin,e);const d=u*this.direction.dot(uc.crossVectors(kr,uc));if(d<0)return null;const f=u*this.direction.dot(rh.cross(kr));if(f<0||d+f>l)return null;const p=-u*kr.dot(sh);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,s,a,l,u,d,f,p,g,m,_,M,E,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,l,u,d,f,p,g,m,_,M,E,y)}set(e,t,n,s,a,l,u,d,f,p,g,m,_,M,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=a,x[5]=l,x[9]=u,x[13]=d,x[2]=f,x[6]=p,x[10]=g,x[14]=m,x[3]=_,x[7]=M,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/io.setFromMatrixColumn(e,0).length(),a=1/io.setFromMatrixColumn(e,1).length(),l=1/io.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=l*p,_=l*g,M=u*p,E=u*g;t[0]=d*p,t[4]=-d*g,t[8]=f,t[1]=_+M*f,t[5]=m-E*f,t[9]=-u*d,t[2]=E-m*f,t[6]=M+_*f,t[10]=l*d}else if(e.order==="YXZ"){const m=d*p,_=d*g,M=f*p,E=f*g;t[0]=m+E*u,t[4]=M*u-_,t[8]=l*f,t[1]=l*g,t[5]=l*p,t[9]=-u,t[2]=_*u-M,t[6]=E+m*u,t[10]=l*d}else if(e.order==="ZXY"){const m=d*p,_=d*g,M=f*p,E=f*g;t[0]=m-E*u,t[4]=-l*g,t[8]=M+_*u,t[1]=_+M*u,t[5]=l*p,t[9]=E-m*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const m=l*p,_=l*g,M=u*p,E=u*g;t[0]=d*p,t[4]=M*f-_,t[8]=m*f+E,t[1]=d*g,t[5]=E*f+m,t[9]=_*f-M,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const m=l*d,_=l*f,M=u*d,E=u*f;t[0]=d*p,t[4]=E-m*g,t[8]=M*g+_,t[1]=g,t[5]=l*p,t[9]=-u*p,t[2]=-f*p,t[6]=_*g+M,t[10]=m-E*g}else if(e.order==="XZY"){const m=l*d,_=l*f,M=u*d,E=u*f;t[0]=d*p,t[4]=-g,t[8]=f*p,t[1]=m*g+E,t[5]=l*p,t[9]=_*g-M,t[2]=M*g-_,t[6]=u*p,t[10]=E*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i1,e,r1)}lookAt(e,t,n){const s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Or.crossVectors(n,ri),Or.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Or.crossVectors(n,ri)),Or.normalize(),dc.crossVectors(ri,Or),s[0]=Or.x,s[4]=dc.x,s[8]=ri.x,s[1]=Or.y,s[5]=dc.y,s[9]=ri.y,s[2]=Or.z,s[6]=dc.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],p=n[1],g=n[5],m=n[9],_=n[13],M=n[2],E=n[6],y=n[10],x=n[14],R=n[3],w=n[7],b=n[11],k=n[15],N=s[0],F=s[4],I=s[8],C=s[12],T=s[1],U=s[5],Y=s[9],K=s[13],j=s[2],te=s[6],Q=s[10],ie=s[14],V=s[3],ee=s[7],le=s[11],B=s[15];return a[0]=l*N+u*T+d*j+f*V,a[4]=l*F+u*U+d*te+f*ee,a[8]=l*I+u*Y+d*Q+f*le,a[12]=l*C+u*K+d*ie+f*B,a[1]=p*N+g*T+m*j+_*V,a[5]=p*F+g*U+m*te+_*ee,a[9]=p*I+g*Y+m*Q+_*le,a[13]=p*C+g*K+m*ie+_*B,a[2]=M*N+E*T+y*j+x*V,a[6]=M*F+E*U+y*te+x*ee,a[10]=M*I+E*Y+y*Q+x*le,a[14]=M*C+E*K+y*ie+x*B,a[3]=R*N+w*T+b*j+k*V,a[7]=R*F+w*U+b*te+k*ee,a[11]=R*I+w*Y+b*Q+k*le,a[15]=R*C+w*K+b*ie+k*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],l=e[1],u=e[5],d=e[9],f=e[13],p=e[2],g=e[6],m=e[10],_=e[14],M=e[3],E=e[7],y=e[11],x=e[15];return M*(+a*d*g-s*f*g-a*u*m+n*f*m+s*u*_-n*d*_)+E*(+t*d*_-t*f*m+a*l*m-s*l*_+s*f*p-a*d*p)+y*(+t*f*g-t*u*_-a*l*g+n*l*_+a*u*p-n*f*p)+x*(-s*u*p-t*d*g+t*u*m+s*l*g-n*l*m+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=e[9],m=e[10],_=e[11],M=e[12],E=e[13],y=e[14],x=e[15],R=g*y*f-E*m*f+E*d*_-u*y*_-g*d*x+u*m*x,w=M*m*f-p*y*f-M*d*_+l*y*_+p*d*x-l*m*x,b=p*E*f-M*g*f+M*u*_-l*E*_-p*u*x+l*g*x,k=M*g*d-p*E*d-M*u*m+l*E*m+p*u*y-l*g*y,N=t*R+n*w+s*b+a*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=R*F,e[1]=(E*m*a-g*y*a-E*s*_+n*y*_+g*s*x-n*m*x)*F,e[2]=(u*y*a-E*d*a+E*s*f-n*y*f-u*s*x+n*d*x)*F,e[3]=(g*d*a-u*m*a-g*s*f+n*m*f+u*s*_-n*d*_)*F,e[4]=w*F,e[5]=(p*y*a-M*m*a+M*s*_-t*y*_-p*s*x+t*m*x)*F,e[6]=(M*d*a-l*y*a-M*s*f+t*y*f+l*s*x-t*d*x)*F,e[7]=(l*m*a-p*d*a+p*s*f-t*m*f-l*s*_+t*d*_)*F,e[8]=b*F,e[9]=(M*g*a-p*E*a-M*n*_+t*E*_+p*n*x-t*g*x)*F,e[10]=(l*E*a-M*u*a+M*n*f-t*E*f-l*n*x+t*u*x)*F,e[11]=(p*u*a-l*g*a-p*n*f+t*g*f+l*n*_-t*u*_)*F,e[12]=k*F,e[13]=(p*E*s-M*g*s+M*n*m-t*E*m-p*n*y+t*g*y)*F,e[14]=(M*u*s-l*E*s-M*n*d+t*E*d+l*n*y-t*u*y)*F,e[15]=(l*g*s-p*u*s+p*n*d-t*g*d-l*n*m+t*u*m)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,l=e.x,u=e.y,d=e.z,f=a*l,p=a*u;return this.set(f*l+n,f*u-s*d,f*d+s*u,0,f*u+s*d,p*u+n,p*d-s*l,0,f*d-s*u,p*d+s*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,l){return this.set(1,n,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,l=t._y,u=t._z,d=t._w,f=a+a,p=l+l,g=u+u,m=a*f,_=a*p,M=a*g,E=l*p,y=l*g,x=u*g,R=d*f,w=d*p,b=d*g,k=n.x,N=n.y,F=n.z;return s[0]=(1-(E+x))*k,s[1]=(_+b)*k,s[2]=(M-w)*k,s[3]=0,s[4]=(_-b)*N,s[5]=(1-(m+x))*N,s[6]=(y+R)*N,s[7]=0,s[8]=(M+w)*F,s[9]=(y-R)*F,s[10]=(1-(m+E))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=io.set(s[0],s[1],s[2]).length();const l=io.set(s[4],s[5],s[6]).length(),u=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);const f=1/a,p=1/l,g=1/u;return Ti.elements[0]*=f,Ti.elements[1]*=f,Ti.elements[2]*=f,Ti.elements[4]*=p,Ti.elements[5]*=p,Ti.elements[6]*=p,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,t.setFromRotationMatrix(Ti),n.x=a,n.y=l,n.z=u,this}makePerspective(e,t,n,s,a,l,u=ar){const d=this.elements,f=2*a/(t-e),p=2*a/(n-s),g=(t+e)/(t-e),m=(n+s)/(n-s);let _,M;if(u===ar)_=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(u===$c)_=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=_,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,l,u=ar){const d=this.elements,f=1/(t-e),p=1/(n-s),g=1/(l-a),m=(t+e)*f,_=(n+s)*p;let M,E;if(u===ar)M=(l+a)*g,E=-2*g;else if(u===$c)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-m,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-_,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const io=new H,Ti=new Ke,i1=new H(0,0,0),r1=new H(1,1,1),Or=new H,dc=new H,ri=new H,f0=new Ke,p0=new yn;class dn{constructor(e=0,t=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],g=s[2],m=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return f0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return p0.setFromEuler(this),this.setFromQuaternion(p0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s1=0;const m0=new H,ro=new yn,er=new Ke,hc=new H,Ea=new H,o1=new H,a1=new yn,g0=new H(1,0,0),v0=new H(0,1,0),_0=new H(0,0,1),x0={type:"added"},l1={type:"removed"},so={type:"childadded",child:null},oh={type:"childremoved",child:null};class Bt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new dn,n=new yn,s=new H(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ut}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(g0,e)}rotateY(e){return this.rotateOnAxis(v0,e)}rotateZ(e){return this.rotateOnAxis(_0,e)}translateOnAxis(e,t){return m0.copy(e).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(g0,e)}translateY(e){return this.translateOnAxis(v0,e)}translateZ(e){return this.translateOnAxis(_0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hc.copy(e):hc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Ea,hc,this.up):er.lookAt(hc,Ea,this.up),this.quaternion.setFromRotationMatrix(er),s&&(er.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(er),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x0),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x0),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),p=l(e.images),g=l(e.shapes),m=l(e.skeletons),_=l(e.animations),M=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new H,tr=new H,ah=new H,nr=new H,oo=new H,ao=new H,y0=new H,lh=new H,ch=new H,uh=new H,dh=new Mt,hh=new Mt,fh=new Mt;class Ri{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bi.subVectors(e,t),s.cross(bi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){bi.subVectors(s,t),tr.subVectors(n,t),ah.subVectors(e,t);const l=bi.dot(bi),u=bi.dot(tr),d=bi.dot(ah),f=tr.dot(tr),p=tr.dot(ah),g=l*f-u*u;if(g===0)return a.set(0,0,0),null;const m=1/g,_=(f*d-u*p)*m,M=(l*p-u*d)*m;return a.set(1-_-M,M,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,n,s,a,l,u,d){return this.getBarycoord(e,t,n,s,nr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,nr.x),d.addScaledVector(l,nr.y),d.addScaledVector(u,nr.z),d)}static getInterpolatedAttribute(e,t,n,s,a,l){return dh.setScalar(0),hh.setScalar(0),fh.setScalar(0),dh.fromBufferAttribute(e,t),hh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(dh,a.x),l.addScaledVector(hh,a.y),l.addScaledVector(fh,a.z),l}static isFrontFacing(e,t,n,s){return bi.subVectors(n,t),tr.subVectors(e,t),bi.cross(tr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),bi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Ri.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let l,u;oo.subVectors(s,n),ao.subVectors(a,n),lh.subVectors(e,n);const d=oo.dot(lh),f=ao.dot(lh);if(d<=0&&f<=0)return t.copy(n);ch.subVectors(e,s);const p=oo.dot(ch),g=ao.dot(ch);if(p>=0&&g<=p)return t.copy(s);const m=d*g-p*f;if(m<=0&&d>=0&&p<=0)return l=d/(d-p),t.copy(n).addScaledVector(oo,l);uh.subVectors(e,a);const _=oo.dot(uh),M=ao.dot(uh);if(M>=0&&_<=M)return t.copy(a);const E=_*f-d*M;if(E<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(n).addScaledVector(ao,u);const y=p*M-_*g;if(y<=0&&g-p>=0&&_-M>=0)return y0.subVectors(a,s),u=(g-p)/(g-p+(_-M)),t.copy(s).addScaledVector(y0,u);const x=1/(y+E+m);return l=E*x,u=m*x,t.copy(n).addScaledVector(oo,l).addScaledVector(ao,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},fc={h:0,s:0,l:0};function ph(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Yf(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=ph(l,a,e+1/3),this.g=ph(l,a,e),this.b=ph(l,a,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=__[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ft.fromWorkingColorSpace(In.copy(this),e),Math.round(dt(In.r*255,0,255))*65536+Math.round(dt(In.g*255,0,255))*256+Math.round(dt(In.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(In.copy(this),t);const n=In.r,s=In.g,a=In.b,l=Math.max(n,s,a),u=Math.min(n,s,a);let d,f;const p=(u+l)/2;if(u===l)d=0,f=0;else{const g=l-u;switch(f=p<=.5?g/(l+u):g/(2-l-u),l){case n:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-n)/g+2;break;case a:d=(n-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Vt){ft.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,s=In.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(fc);const n=Ra(Br.h,fc.h,t),s=Ra(Br.s,fc.s,t),a=Ra(Br.l,fc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ze;Ze.NAMES=__;let c1=0;class Kr extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Mo,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Hh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==Xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vh&&(n.blendSrc=this.blendSrc),this.blendDst!==Hh&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $a extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new H,pc=new nt;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=o0,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=po(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o0&&(e.usage=this.usage),e}}class qf extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class x_ extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let u1=0;const pi=new Ke,mh=new Bt,lo=new H,si=new As,wa=new As,xn=new H;class fn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?x_:qf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Ft(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];si.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];wa.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(si.min,wa.min),si.expandByPoint(xn),xn.addVectors(si.max,wa.max),si.expandByPoint(xn)):(si.expandByPoint(wa.min),si.expandByPoint(wa.max))}si.getCenter(n);let s=0;for(let a=0,l=e.count;a<l;a++)xn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)xn.fromBufferAttribute(u,f),d&&(lo.fromBufferAttribute(e,f),xn.add(lo)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let I=0;I<n.count;I++)u[I]=new H,d[I]=new H;const f=new H,p=new H,g=new H,m=new nt,_=new nt,M=new nt,E=new H,y=new H;function x(I,C,T){f.fromBufferAttribute(n,I),p.fromBufferAttribute(n,C),g.fromBufferAttribute(n,T),m.fromBufferAttribute(a,I),_.fromBufferAttribute(a,C),M.fromBufferAttribute(a,T),p.sub(f),g.sub(f),_.sub(m),M.sub(m);const U=1/(_.x*M.y-M.x*_.y);isFinite(U)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(U),y.copy(g).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(U),u[I].add(E),u[C].add(E),u[T].add(E),d[I].add(y),d[C].add(y),d[T].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let I=0,C=R.length;I<C;++I){const T=R[I],U=T.start,Y=T.count;for(let K=U,j=U+Y;K<j;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const w=new H,b=new H,k=new H,N=new H;function F(I){k.fromBufferAttribute(s,I),N.copy(k);const C=u[I];w.copy(C),w.sub(k.multiplyScalar(k.dot(C))).normalize(),b.crossVectors(N,C);const U=b.dot(d[I])<0?-1:1;l.setXYZW(I,w.x,w.y,w.z,U)}for(let I=0,C=R.length;I<C;++I){const T=R[I],U=T.start,Y=T.count;for(let K=U,j=U+Y;K<j;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const s=new H,a=new H,l=new H,u=new H,d=new H,f=new H,p=new H,g=new H;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),E=e.getX(m+1),y=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,y),p.subVectors(l,a),g.subVectors(s,a),p.cross(g),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),u.add(p),d.add(p),f.add(p),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,_=t.count;m<_;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,a),g.subVectors(s,a),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,d){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(d.length*p);let _=0,M=0;for(let E=0,y=d.length;E<y;E++){u.isInterleavedBufferAttribute?_=d[E]*u.data.stride+u.offset:_=d[E]*p;for(let x=0;x<p;x++)m[M++]=f[_++]}return new Qn(m,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,n);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],_=e(m,n);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let g=0,m=f.length;g<m;g++){const _=f[g];p.push(_.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],g=a[f];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,p=l.length;f<p;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new Ke,ms=new ru,mc=new ko,M0=new H,gc=new H,vc=new H,_c=new H,gh=new H,xc=new H,E0=new H,yc=new H;class hn extends Bt{constructor(e=new fn,t=new $a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){xc.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const p=u[d],g=a[d];p!==0&&(gh.fromBufferAttribute(g,e),l?xc.addScaledVector(gh,p):xc.addScaledVector(gh.sub(t),p))}t.add(xc)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(a),ms.copy(e.ray).recast(e.near),!(mc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(mc,M0)===null||ms.origin.distanceToSquared(M0)>(e.far-e.near)**2))&&(S0.copy(a).invert(),ms.copy(e.ray).applyMatrix4(S0),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s;const a=this.geometry,l=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const y=m[M],x=l[y.materialIndex],R=Math.max(y.start,_.start),w=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let b=R,k=w;b<k;b+=3){const N=u.getX(b),F=u.getX(b+1),I=u.getX(b+2);s=Sc(this,x,e,n,f,p,g,N,F,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let y=M,x=E;y<x;y+=3){const R=u.getX(y),w=u.getX(y+1),b=u.getX(y+2);s=Sc(this,l,e,n,f,p,g,R,w,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const y=m[M],x=l[y.materialIndex],R=Math.max(y.start,_.start),w=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let b=R,k=w;b<k;b+=3){const N=b,F=b+1,I=b+2;s=Sc(this,x,e,n,f,p,g,N,F,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let y=M,x=E;y<x;y+=3){const R=y,w=y+1,b=y+2;s=Sc(this,l,e,n,f,p,g,R,w,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function d1(r,e,t,n,s,a,l,u){let d;if(e.side===Jn?d=n.intersectTriangle(l,a,s,!0,u):d=n.intersectTriangle(s,a,l,e.side===Xr,u),d===null)return null;yc.copy(u),yc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(yc);return f<t.near||f>t.far?null:{distance:f,point:yc.clone(),object:r}}function Sc(r,e,t,n,s,a,l,u,d,f){r.getVertexPosition(u,gc),r.getVertexPosition(d,vc),r.getVertexPosition(f,_c);const p=d1(r,e,t,n,gc,vc,_c,E0);if(p){const g=new H;Ri.getBarycoord(E0,gc,vc,_c,g),s&&(p.uv=Ri.getInterpolatedAttribute(s,u,d,f,g,new nt)),a&&(p.uv1=Ri.getInterpolatedAttribute(a,u,d,f,g,new nt)),l&&(p.normal=Ri.getInterpolatedAttribute(l,u,d,f,g,new H),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:f,normal:new H,materialIndex:0};Ri.getNormal(gc,vc,_c,m.normal),p.face=m,p.barycoord=g}return p}class Ya extends fn{constructor(e=1,t=1,n=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const d=[],f=[],p=[],g=[];let m=0,_=0;M("z","y","x",-1,-1,n,t,e,l,a,0),M("z","y","x",1,-1,n,t,-e,l,a,1),M("x","z","y",1,1,e,n,t,s,l,2),M("x","z","y",1,-1,e,n,-t,s,l,3),M("x","y","z",1,-1,e,t,n,s,a,4),M("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(p,3)),this.setAttribute("uv",new Ft(g,2));function M(E,y,x,R,w,b,k,N,F,I,C){const T=b/F,U=k/I,Y=b/2,K=k/2,j=N/2,te=F+1,Q=I+1;let ie=0,V=0;const ee=new H;for(let le=0;le<Q;le++){const B=le*U-K;for(let oe=0;oe<te;oe++){const be=oe*T-Y;ee[E]=be*R,ee[y]=B*w,ee[x]=j,f.push(ee.x,ee.y,ee.z),ee[E]=0,ee[y]=0,ee[x]=N>0?1:-1,p.push(ee.x,ee.y,ee.z),g.push(oe/F),g.push(1-le/I),ie+=1}}for(let le=0;le<I;le++)for(let B=0;B<F;B++){const oe=m+B+te*le,be=m+B+te*(le+1),re=m+(B+1)+te*(le+1),he=m+(B+1)+te*le;d.push(oe,be,he),d.push(be,re,he),V+=6}u.addGroup(_,V,C),_+=V,m+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=Io(r[t]);for(const s in n)e[s]=n[s]}return e}function h1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function y_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const f1={clone:Io,merge:Hn};var p1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p1,this.fragmentShader=m1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=h1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class S_ extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new H,w0=new nt,T0=new nt;class wn extends S_{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,w0,T0),t.subVectors(T0,w0)}setViewOffset(e,t,n,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;a+=l.offsetX*s/d,t-=l.offsetY*n/f,s*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,uo=1;class g1 extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(co,uo,e,t);s.layers=this.layers,this.add(s);const a=new wn(co,uo,e,t);a.layers=this.layers,this.add(a);const l=new wn(co,uo,e,t);l.layers=this.layers,this.add(l);const u=new wn(co,uo,e,t);u.layers=this.layers,this.add(u);const d=new wn(co,uo,e,t);d.layers=this.layers,this.add(d);const f=new wn(co,uo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,l,u,d]=t;for(const f of t)this.remove(f);if(e===ar)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===$c)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,d,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class M_ extends Tn{constructor(e,t,n,s,a,l,u,d,f,p){e=e!==void 0?e:[],t=t!==void 0?t:Ao,super(e,t,n,s,a,l,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v1 extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new M_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ya(5,5,5),a=new $r({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Wr});a.uniforms.tEquirect.value=t;const l=new hn(s,a),u=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Ui),new g1(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(a)}}class Kf extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const b0=new H,A0=new Mt,C0=new Mt,_1=new H,R0=new Ke,Mc=new H,vh=new ko,P0=new Ke,_h=new ru;class x1 extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=t0,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new As),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingBox.expandByPoint(Mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ko),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingSphere.expandByPoint(Mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vh.copy(this.boundingSphere),vh.applyMatrix4(s),e.ray.intersectsSphere(vh)!==!1&&(P0.copy(s).invert(),_h.copy(e.ray).applyMatrix4(P0),!(this.boundingBox!==null&&_h.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_h)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===t0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;A0.fromBufferAttribute(s.attributes.skinIndex,e),C0.fromBufferAttribute(s.attributes.skinWeight,e),b0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=C0.getComponent(a);if(l!==0){const u=A0.getComponent(a);R0.multiplyMatrices(n.bones[u].matrixWorld,n.boneInverses[u]),t.addScaledVector(_1.copy(b0).applyMatrix4(R0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bf extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class y1 extends Tn{constructor(e=null,t=1,n=1,s,a,l,u,d,f=oi,p=oi,g,m){super(null,l,u,d,f,p,s,a,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const L0=new Ke,S1=new Ke;class Zf{constructor(e=[],t=[]){this.uuid=qr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,l=e.length;a<l;a++){const u=e[a]?e[a].matrixWorld:S1;L0.multiplyMatrices(u,t[a]),L0.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Zf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new y1(t,e,e,gi,ki);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let l=t[a];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),l=new bf),this.bones.push(l),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const l=t[s];e.bones.push(l.uuid);const u=n[s];e.boneInverses.push(u.toArray())}return e}}const xh=new H,M1=new H,E1=new ut;class Hr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xh.subVectors(n,t).cross(M1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||E1.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new ko,Ec=new H;class Jf{constructor(e=new Hr,t=new Hr,n=new Hr,s=new Hr,a=new Hr,l=new Hr){this.planes=[e,t,n,s,a,l]}set(e,t,n,s,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ar){const n=this.planes,s=e.elements,a=s[0],l=s[1],u=s[2],d=s[3],f=s[4],p=s[5],g=s[6],m=s[7],_=s[8],M=s[9],E=s[10],y=s[11],x=s[12],R=s[13],w=s[14],b=s[15];if(n[0].setComponents(d-a,m-f,y-_,b-x).normalize(),n[1].setComponents(d+a,m+f,y+_,b+x).normalize(),n[2].setComponents(d+l,m+p,y+M,b+R).normalize(),n[3].setComponents(d-l,m-p,y-M,b-R).normalize(),n[4].setComponents(d-u,m-g,y-E,b-w).normalize(),t===ar)n[5].setComponents(d+u,m+g,y+E,b+w).normalize();else if(t===$c)n[5].setComponents(u,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new H,qc=new H,D0=new Ke,Ta=new ru,wc=new ko,yh=new H,I0=new H;class Kc extends Bt{constructor(e=new fn,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Yc.fromBufferAttribute(t,s-1),qc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Yc.distanceTo(qc);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),wc.radius+=a,e.ray.intersectsSphere(wc)===!1)return;D0.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(D0);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const _=Math.max(0,l.start),M=Math.min(p.count,l.start+l.count);for(let E=_,y=M-1;E<y;E+=f){const x=p.getX(E),R=p.getX(E+1),w=Tc(this,e,Ta,d,x,R);w&&t.push(w)}if(this.isLineLoop){const E=p.getX(M-1),y=p.getX(_),x=Tc(this,e,Ta,d,E,y);x&&t.push(x)}}else{const _=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let E=_,y=M-1;E<y;E+=f){const x=Tc(this,e,Ta,d,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Tc(this,e,Ta,d,M-1,_);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Tc(r,e,t,n,s,a){const l=r.geometry.attributes.position;if(Yc.fromBufferAttribute(l,s),qc.fromBufferAttribute(l,a),t.distanceSqToSegment(Yc,qc,yh,I0)>n)return;yh.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(yh);if(!(d<e.near||d>e.far))return{distance:d,point:I0.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const N0=new H,F0=new H;class w1 extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)N0.fromBufferAttribute(t,s),F0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+N0.distanceTo(F0);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vo extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class E_ extends Tn{constructor(e,t,n,s,a,l,u,d,f,p=Eo){if(p!==Eo&&p!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Eo&&(n=Es),n===void 0&&p===Po&&(n=Ro),super(null,s,a,l,u,d,p,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:oi,this.minFilter=d!==void 0?d:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class T1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let u=0,d=a-1,f;for(;u<=d;)if(s=Math.floor(u+(d-u)/2),f=n[s]-l,f<0)u=s+1;else if(f>0)d=s-1;else{d=s;break}if(s=d,n[s]===l)return s/(a-1);const p=n[s],m=n[s+1]-p,_=(l-p)/m;return(s+_)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const l=this.getPoint(s),u=this.getPoint(a),d=t||(l.isVector2?new nt:new H);return d.copy(u).sub(l).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,s=[],a=[],l=[],u=new H,d=new Ke;for(let _=0;_<=e;_++){const M=_/e;s[_]=this.getTangentAt(M,new H)}a[0]=new H,l[0]=new H;let f=Number.MAX_VALUE;const p=Math.abs(s[0].x),g=Math.abs(s[0].y),m=Math.abs(s[0].z);p<=f&&(f=p,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),m<=f&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],u),l[0].crossVectors(s[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),l[_]=l[_-1].clone(),u.crossVectors(s[_-1],s[_]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(dt(s[_-1].dot(s[_]),-1,1));a[_].applyMatrix4(d.makeRotationAxis(u,M))}l[_].crossVectors(s[_],a[_])}if(t===!0){let _=Math.acos(dt(a[0].dot(a[e]),-1,1));_/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(_=-_);for(let M=1;M<=e;M++)a[M].applyMatrix4(d.makeRotationAxis(s[M],_*M)),l[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qf extends fn{constructor(e=1,t=1,n=1,s=32,a=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),a=Math.floor(a);const p=[],g=[],m=[],_=[];let M=0;const E=[],y=n/2;let x=0;R(),l===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(m,3)),this.setAttribute("uv",new Ft(_,2));function R(){const b=new H,k=new H;let N=0;const F=(t-e)/n;for(let I=0;I<=a;I++){const C=[],T=I/a,U=T*(t-e)+e;for(let Y=0;Y<=s;Y++){const K=Y/s,j=K*d+u,te=Math.sin(j),Q=Math.cos(j);k.x=U*te,k.y=-T*n+y,k.z=U*Q,g.push(k.x,k.y,k.z),b.set(te,F,Q).normalize(),m.push(b.x,b.y,b.z),_.push(K,1-T),C.push(M++)}E.push(C)}for(let I=0;I<s;I++)for(let C=0;C<a;C++){const T=E[C][I],U=E[C+1][I],Y=E[C+1][I+1],K=E[C][I+1];(e>0||C!==0)&&(p.push(T,U,K),N+=3),(t>0||C!==a-1)&&(p.push(U,Y,K),N+=3)}f.addGroup(x,N,0),x+=N}function w(b){const k=M,N=new nt,F=new H;let I=0;const C=b===!0?e:t,T=b===!0?1:-1;for(let Y=1;Y<=s;Y++)g.push(0,y*T,0),m.push(0,T,0),_.push(.5,.5),M++;const U=M;for(let Y=0;Y<=s;Y++){const j=Y/s*d+u,te=Math.cos(j),Q=Math.sin(j);F.x=C*Q,F.y=y*T,F.z=C*te,g.push(F.x,F.y,F.z),m.push(0,T,0),N.x=te*.5+.5,N.y=Q*.5*T+.5,_.push(N.x,N.y),M++}for(let Y=0;Y<s;Y++){const K=k+Y,j=U+Y;b===!0?p.push(j,j+1,K):p.push(j+1,j,K),I+=3}f.addGroup(x,I,b===!0?1:2),x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ou extends Qf{constructor(e=1,t=1,n=32,s=1,a=!1,l=0,u=Math.PI*2){super(0,e,t,n,s,a,l,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:u}}static fromJSON(e){return new ou(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ep extends fn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],l=[];u(s),f(n),p(),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(a.slice(),3)),this.setAttribute("uv",new Ft(l,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(R){const w=new H,b=new H,k=new H;for(let N=0;N<t.length;N+=3)_(t[N+0],w),_(t[N+1],b),_(t[N+2],k),d(w,b,k,R)}function d(R,w,b,k){const N=k+1,F=[];for(let I=0;I<=N;I++){F[I]=[];const C=R.clone().lerp(b,I/N),T=w.clone().lerp(b,I/N),U=N-I;for(let Y=0;Y<=U;Y++)Y===0&&I===N?F[I][Y]=C:F[I][Y]=C.clone().lerp(T,Y/U)}for(let I=0;I<N;I++)for(let C=0;C<2*(N-I)-1;C++){const T=Math.floor(C/2);C%2===0?(m(F[I][T+1]),m(F[I+1][T]),m(F[I][T])):(m(F[I][T+1]),m(F[I+1][T+1]),m(F[I+1][T]))}}function f(R){const w=new H;for(let b=0;b<a.length;b+=3)w.x=a[b+0],w.y=a[b+1],w.z=a[b+2],w.normalize().multiplyScalar(R),a[b+0]=w.x,a[b+1]=w.y,a[b+2]=w.z}function p(){const R=new H;for(let w=0;w<a.length;w+=3){R.x=a[w+0],R.y=a[w+1],R.z=a[w+2];const b=y(R)/2/Math.PI+.5,k=x(R)/Math.PI+.5;l.push(b,1-k)}M(),g()}function g(){for(let R=0;R<l.length;R+=6){const w=l[R+0],b=l[R+2],k=l[R+4],N=Math.max(w,b,k),F=Math.min(w,b,k);N>.9&&F<.1&&(w<.2&&(l[R+0]+=1),b<.2&&(l[R+2]+=1),k<.2&&(l[R+4]+=1))}}function m(R){a.push(R.x,R.y,R.z)}function _(R,w){const b=R*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function M(){const R=new H,w=new H,b=new H,k=new H,N=new nt,F=new nt,I=new nt;for(let C=0,T=0;C<a.length;C+=9,T+=6){R.set(a[C+0],a[C+1],a[C+2]),w.set(a[C+3],a[C+4],a[C+5]),b.set(a[C+6],a[C+7],a[C+8]),N.set(l[T+0],l[T+1]),F.set(l[T+2],l[T+3]),I.set(l[T+4],l[T+5]),k.copy(R).add(w).add(b).divideScalar(3);const U=y(k);E(N,T+0,R,U),E(F,T+2,w,U),E(I,T+4,b,U)}}function E(R,w,b,k){k<0&&R.x===1&&(l[w]=R.x-1),b.x===0&&b.z===0&&(l[w]=k/2/Math.PI+.5)}function y(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.vertices,e.indices,e.radius,e.details)}}const b1={triangulate:function(r,e,t=2){const n=e&&e.length,s=n?e[0]*t:r.length;let a=w_(r,0,s,t,!0);const l=[];if(!a||a.next===a.prev)return l;let u,d,f,p,g,m,_;if(n&&(a=L1(r,e,a,t)),r.length>80*t){u=f=r[0],d=p=r[1];for(let M=t;M<s;M+=t)g=r[M],m=r[M+1],g<u&&(u=g),m<d&&(d=m),g>f&&(f=g),m>p&&(p=m);_=Math.max(f-u,p-d),_=_!==0?32767/_:0}return Ua(a,l,t,u,d,_,0),l}};function w_(r,e,t,n,s){let a,l;if(s===H1(r,e,t,n)>0)for(a=e;a<t;a+=n)l=U0(a,r[a],r[a+1],l);else for(a=t-n;a>=e;a-=n)l=U0(a,r[a],r[a+1],l);return l&&au(l,l.next)&&(Oa(l),l=l.next),l}function Ts(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(au(t,t.next)||Zt(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ua(r,e,t,n,s,a,l){if(!r)return;!l&&a&&U1(r,n,s,a);let u=r,d,f;for(;r.prev!==r.next;){if(d=r.prev,f=r.next,a?C1(r,n,s,a):A1(r)){e.push(d.i/t|0),e.push(r.i/t|0),e.push(f.i/t|0),Oa(r),r=f.next,u=f.next;continue}if(r=f,r===u){l?l===1?(r=R1(Ts(r),e,t),Ua(r,e,t,n,s,a,2)):l===2&&P1(r,e,t,n,s,a):Ua(Ts(r),e,t,n,s,a,1);break}}}function A1(r){const e=r.prev,t=r,n=r.next;if(Zt(e,t,n)>=0)return!1;const s=e.x,a=t.x,l=n.x,u=e.y,d=t.y,f=n.y,p=s<a?s<l?s:l:a<l?a:l,g=u<d?u<f?u:f:d<f?d:f,m=s>a?s>l?s:l:a>l?a:l,_=u>d?u>f?u:f:d>f?d:f;let M=n.next;for(;M!==e;){if(M.x>=p&&M.x<=m&&M.y>=g&&M.y<=_&&_o(s,u,a,d,l,f,M.x,M.y)&&Zt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function C1(r,e,t,n){const s=r.prev,a=r,l=r.next;if(Zt(s,a,l)>=0)return!1;const u=s.x,d=a.x,f=l.x,p=s.y,g=a.y,m=l.y,_=u<d?u<f?u:f:d<f?d:f,M=p<g?p<m?p:m:g<m?g:m,E=u>d?u>f?u:f:d>f?d:f,y=p>g?p>m?p:m:g>m?g:m,x=Af(_,M,e,t,n),R=Af(E,y,e,t,n);let w=r.prevZ,b=r.nextZ;for(;w&&w.z>=x&&b&&b.z<=R;){if(w.x>=_&&w.x<=E&&w.y>=M&&w.y<=y&&w!==s&&w!==l&&_o(u,p,d,g,f,m,w.x,w.y)&&Zt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=_&&b.x<=E&&b.y>=M&&b.y<=y&&b!==s&&b!==l&&_o(u,p,d,g,f,m,b.x,b.y)&&Zt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=x;){if(w.x>=_&&w.x<=E&&w.y>=M&&w.y<=y&&w!==s&&w!==l&&_o(u,p,d,g,f,m,w.x,w.y)&&Zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=R;){if(b.x>=_&&b.x<=E&&b.y>=M&&b.y<=y&&b!==s&&b!==l&&_o(u,p,d,g,f,m,b.x,b.y)&&Zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function R1(r,e,t){let n=r;do{const s=n.prev,a=n.next.next;!au(s,a)&&T_(s,n,n.next,a)&&ka(s,a)&&ka(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Oa(n),Oa(n.next),n=r=a),n=n.next}while(n!==r);return Ts(n)}function P1(r,e,t,n,s,a){let l=r;do{let u=l.next.next;for(;u!==l.prev;){if(l.i!==u.i&&B1(l,u)){let d=b_(l,u);l=Ts(l,l.next),d=Ts(d,d.next),Ua(l,e,t,n,s,a,0),Ua(d,e,t,n,s,a,0);return}u=u.next}l=l.next}while(l!==r)}function L1(r,e,t,n){const s=[];let a,l,u,d,f;for(a=0,l=e.length;a<l;a++)u=e[a]*n,d=a<l-1?e[a+1]*n:r.length,f=w_(r,u,d,n,!1),f===f.next&&(f.steiner=!0),s.push(O1(f));for(s.sort(D1),a=0;a<s.length;a++)t=I1(s[a],t);return t}function D1(r,e){return r.x-e.x}function I1(r,e){const t=N1(r,e);if(!t)return e;const n=b_(t,r);return Ts(n,n.next),Ts(t,t.next)}function N1(r,e){let t=e,n=-1/0,s;const a=r.x,l=r.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const m=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=a&&m>n&&(n=m,s=t.x<t.next.x?t:t.next,m===a))return s}t=t.next}while(t!==e);if(!s)return null;const u=s,d=s.x,f=s.y;let p=1/0,g;t=s;do a>=t.x&&t.x>=d&&a!==t.x&&_o(l<f?a:n,l,d,f,l<f?n:a,l,t.x,t.y)&&(g=Math.abs(l-t.y)/(a-t.x),ka(t,r)&&(g<p||g===p&&(t.x>s.x||t.x===s.x&&F1(s,t)))&&(s=t,p=g)),t=t.next;while(t!==u);return s}function F1(r,e){return Zt(r.prev,r,e.prev)<0&&Zt(e.next,r,r.next)<0}function U1(r,e,t,n){let s=r;do s.z===0&&(s.z=Af(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,k1(s)}function k1(r){let e,t,n,s,a,l,u,d,f=1;do{for(t=r,r=null,a=null,l=0;t;){for(l++,n=t,u=0,e=0;e<f&&(u++,n=n.nextZ,!!n);e++);for(d=f;u>0||d>0&&n;)u!==0&&(d===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,u--):(s=n,n=n.nextZ,d--),a?a.nextZ=s:r=s,s.prevZ=a,a=s;t=n}a.nextZ=null,f*=2}while(l>1);return r}function Af(r,e,t,n,s){return r=(r-t)*s|0,e=(e-n)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function O1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function _o(r,e,t,n,s,a,l,u){return(s-l)*(e-u)>=(r-l)*(a-u)&&(r-l)*(n-u)>=(t-l)*(e-u)&&(t-l)*(a-u)>=(s-l)*(n-u)}function B1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!z1(r,e)&&(ka(r,e)&&ka(e,r)&&V1(r,e)&&(Zt(r.prev,r,e.prev)||Zt(r,e.prev,e))||au(r,e)&&Zt(r.prev,r,r.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function au(r,e){return r.x===e.x&&r.y===e.y}function T_(r,e,t,n){const s=Ac(Zt(r,e,t)),a=Ac(Zt(r,e,n)),l=Ac(Zt(t,n,r)),u=Ac(Zt(t,n,e));return!!(s!==a&&l!==u||s===0&&bc(r,t,e)||a===0&&bc(r,n,e)||l===0&&bc(t,r,n)||u===0&&bc(t,e,n))}function bc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ac(r){return r>0?1:r<0?-1:0}function z1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&T_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ka(r,e){return Zt(r.prev,r,r.next)<0?Zt(r,e,r.next)>=0&&Zt(r,r.prev,e)>=0:Zt(r,e,r.prev)<0||Zt(r,r.next,e)<0}function V1(r,e){let t=r,n=!1;const s=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function b_(r,e){const t=new Cf(r.i,r.x,r.y),n=new Cf(e.i,e.x,e.y),s=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function U0(r,e,t,n){const s=new Cf(r,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Cf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function H1(r,e,t,n){let s=0;for(let a=e,l=t-n;a<t;a+=n)s+=(r[l]-r[a])*(r[a+1]+r[l+1]),l=a;return s}class tp{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return tp.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];k0(e),O0(n,e);let l=e.length;t.forEach(k0);for(let d=0;d<t.length;d++)s.push(l),l+=t[d].length,O0(n,t[d]);const u=b1.triangulate(n,s);for(let d=0;d<u.length;d+=3)a.push(u.slice(d,d+3));return a}}function k0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function O0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class np extends ep{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new np(e.radius,e.detail)}}class Oo extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,l=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,p=d+1,g=e/u,m=t/d,_=[],M=[],E=[],y=[];for(let x=0;x<p;x++){const R=x*m-l;for(let w=0;w<f;w++){const b=w*g-a;M.push(b,-R,0),E.push(0,0,1),y.push(w/u),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<u;R++){const w=R+f*x,b=R+f*(x+1),k=R+1+f*(x+1),N=R+1+f*x;_.push(w,b,N),_.push(b,k,N)}this.setIndex(_),this.setAttribute("position",new Ft(M,3)),this.setAttribute("normal",new Ft(E,3)),this.setAttribute("uv",new Ft(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ip extends fn{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const l=[],u=[],d=[],f=[],p=new H,g=new H,m=new H;for(let _=0;_<=n;_++)for(let M=0;M<=s;M++){const E=M/s*a,y=_/n*Math.PI*2;g.x=(e+t*Math.cos(y))*Math.cos(E),g.y=(e+t*Math.cos(y))*Math.sin(E),g.z=t*Math.sin(y),u.push(g.x,g.y,g.z),p.x=e*Math.cos(E),p.y=e*Math.sin(E),m.subVectors(g,p).normalize(),d.push(m.x,m.y,m.z),f.push(M/s),f.push(_/n)}for(let _=1;_<=n;_++)for(let M=1;M<=s;M++){const E=(s+1)*_+M-1,y=(s+1)*(_-1)+M-1,x=(s+1)*(_-1)+M,R=(s+1)*_+M;l.push(E,y,R),l.push(y,x,R)}this.setIndex(l),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pa extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G1 extends Pa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class To extends Kr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W1 extends Kr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j1 extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X1 extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Cc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function $1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Y1(r){function e(s,a){return r[s]-r[a]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function B0(r,e,t){const n=r.length,s=new r.constructor(n);for(let a=0,l=0;l!==n;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[l++]=r[u+d]}return s}function A_(r,e,t,n){let s=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[s++];if(a===void 0)return;let l=a[n];if(l!==void 0)if(Array.isArray(l))do l=a[n],l!==void 0&&(e.push(a.time),t.push.apply(t,l)),a=r[s++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[n],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=r[s++];while(a!==void 0);else do l=a[n],l!==void 0&&(e.push(a.time),t.push(l)),a=r[s++];while(a!==void 0)}class lu{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];e:{t:{let l;n:{i:if(!(e<s)){for(let u=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(a=s,s=t[++n],e<s)break t}l=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(n=2,a=u);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(s=a,a=t[--n-1],e>=a)break t}l=n,n=0;break n}break e}for(;n<l;){const u=n+l>>>1;e<t[u]?l=u:n=u+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let l=0;l!==s;++l)t[l]=n[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class q1 extends lu{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:n0,endingEnd:n0}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,l=e+1,u=s[a],d=s[l];if(u===void 0)switch(this.getSettings_().endingStart){case i0:a=e,u=2*t-n;break;case r0:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=n}if(d===void 0)switch(this.getSettings_().endingEnd){case i0:l=e,d=2*n-t;break;case r0:l=1,d=n+s[1]-s[0];break;default:l=e-1,d=t}const f=(n-t)*.5,p=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(d-n),this._offsetPrev=a*p,this._offsetNext=l*p}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,p=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,_=this._weightNext,M=(n-t)/(s-t),E=M*M,y=E*M,x=-m*y+2*m*E-m*M,R=(1+m)*y+(-1.5-2*m)*E+(-.5+m)*M+1,w=(-1-_)*y+(1.5+_)*E+.5*M,b=_*y-_*E;for(let k=0;k!==u;++k)a[k]=x*l[p+k]+R*l[f+k]+w*l[d+k]+b*l[g+k];return a}}class K1 extends lu{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,p=(n-t)/(s-t),g=1-p;for(let m=0;m!==u;++m)a[m]=l[f+m]*g+l[d+m]*p;return a}}class Z1 extends lu{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cc(t,this.TimeBufferType),this.values=Cc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cc(e.times,Array),values:Cc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Z1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new K1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new q1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jc:t=this.InterpolantFactoryMethodDiscrete;break;case Tf:t=this.InterpolantFactoryMethodLinear;break;case Zd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jc;case this.InterpolantFactoryMethodLinear:return Tf;case this.InterpolantFactoryMethodSmooth:return Zd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,l=s-1;for(;a!==s&&n[a]<e;)++a;for(;l!==-1&&n[l]>t;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);const u=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*u,l*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let u=0;u!==a;u++){const d=n[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(l!==null&&l>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,l),e=!1;break}l=d}if(s!==void 0&&$1(s))for(let u=0,d=s.length;u!==d;++u){const f=s[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zd,a=e.length-1;let l=1;for(let u=1;u<a;++u){let d=!1;const f=e[u],p=e[u+1];if(f!==p&&(u!==1||f!==e[0]))if(s)d=!0;else{const g=u*n,m=g-n,_=g+n;for(let M=0;M!==n;++M){const E=t[g+M];if(E!==t[m+M]||E!==t[_+M]){d=!0;break}}}if(d){if(u!==l){e[l]=e[u];const g=u*n,m=l*n;for(let _=0;_!==n;++_)t[m+_]=t[g+_]}++l}}if(a>0){e[l]=e[a];for(let u=a*n,d=l*n,f=0;f!==n;++f)t[d+f]=t[u+f];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=Tf;class Bo extends Vi{constructor(e,t,n){super(e,t,n)}}Bo.prototype.ValueTypeName="bool";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=jc;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class C_ extends Vi{}C_.prototype.ValueTypeName="color";class Ba extends Vi{}Ba.prototype.ValueTypeName="number";class J1 extends lu{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,l=this.sampleValues,u=this.valueSize,d=(n-t)/(s-t);let f=e*u;for(let p=f+u;f!==p;f+=4)yn.slerpFlat(a,0,l,f-u,l,f,d);return a}}class No extends Vi{InterpolantFactoryMethodLinear(e){return new J1(this.times,this.values,this.getValueSize(),e)}}No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;class zo extends Vi{constructor(e,t,n){super(e,t,n)}}zo.prototype.ValueTypeName="string";zo.prototype.ValueBufferType=Array;zo.prototype.DefaultInterpolation=jc;zo.prototype.InterpolantFactoryMethodLinear=void 0;zo.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends Vi{}za.prototype.ValueTypeName="vector";class Q1{constructor(e="",t=-1,n=[],s=xE){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let l=0,u=n.length;l!==u;++l)t.push(tw(n[l]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,l=n.length;a!==l;++a)t.push(Vi.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,l=[];for(let u=0;u<a;u++){let d=[],f=[];d.push((u+a-1)%a,u,(u+1)%a),f.push(0,1,0);const p=Y1(d);d=B0(d,1,p),f=B0(f,1,p),!s&&d[0]===0&&(d.push(a),f.push(f[0])),l.push(new Ba(".morphTargetInfluences["+t[u].name+"]",d,f).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const f=e[u],p=f.name.match(a);if(p&&p.length>1){const g=p[1];let m=s[g];m||(s[g]=m=[]),m.push(f)}}const l=[];for(const u in s)l.push(this.CreateFromMorphTargetSequence(u,s[u],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(g,m,_,M,E){if(_.length!==0){const y=[],x=[];A_(_,y,x,M),y.length!==0&&E.push(new g(m,y,x))}},s=[],a=e.name||"default",l=e.fps||30,u=e.blendMode;let d=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const m=f[g].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let E=0;E<m[M].morphTargets.length;E++)_[m[M].morphTargets[E]]=-1;for(const E in _){const y=[],x=[];for(let R=0;R!==m[M].morphTargets.length;++R){const w=m[M];y.push(w.time),x.push(w.morphTarget===E?1:0)}s.push(new Ba(".morphTargetInfluence["+E+"]",y,x))}d=_.length*l}else{const _=".bones["+t[g].name+"]";n(za,_+".position",m,"pos",s),n(No,_+".quaternion",m,"rot",s),n(za,_+".scale",m,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ew(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ba;case"vector":case"vector2":case"vector3":case"vector4":return za;case"color":return C_;case"quaternion":return No;case"bool":case"boolean":return Bo;case"string":return zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function tw(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ew(r.type);if(r.times===void 0){const t=[],n=[];A_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Zc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class nw{constructor(e,t,n){const s=this;let a=!1,l=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,l,u),a=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const _=f[g],M=f[g+1];if(_.global&&(_.lastIndex=0),_.test(p))return M}return null}}}const iw=new nw;class Yr{constructor(e){this.manager=e!==void 0?e:iw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ir={};class rw extends Error{constructor(e,t){super(e),this.response=t}}class R_ extends Yr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Zc.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ir[e]!==void 0){ir[e].push({onLoad:t,onProgress:n,onError:s});return}ir[e]=[],ir[e].push({onLoad:t,onProgress:n,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=ir[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),_=m?parseInt(m):0,M=_!==0;let E=0;const y=new ReadableStream({start(x){R();function R(){g.read().then(({done:w,value:b})=>{if(w)x.close();else{E+=b.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:_});for(let N=0,F=p.length;N<F;N++){const I=p[N];I.onProgress&&I.onProgress(k)}x.enqueue(b),R()}},w=>{x.error(w)})}}});return new Response(y)}else throw new rw(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,_=new TextDecoder(m);return f.arrayBuffer().then(M=>_.decode(M))}}}).then(f=>{Zc.add(e,f);const p=ir[e];delete ir[e];for(let g=0,m=p.length;g<m;g++){const _=p[g];_.onLoad&&_.onLoad(f)}}).catch(f=>{const p=ir[e];if(p===void 0)throw this.manager.itemError(e),f;delete ir[e];for(let g=0,m=p.length;g<m;g++){const _=p[g];_.onError&&_.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sw extends Yr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Zc.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const u=Fa("img");function d(){p(),Zc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(g){p(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class P_ extends Yr{constructor(e){super(e)}load(e,t,n,s){const a=new Tn,l=new sw(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class qa extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class L_ extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sh=new Ke,z0=new H,V0=new H;class rp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(z0),V0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(V0),t.updateMatrixWorld(),Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ow extends rp{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Do*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sp extends qa{constructor(e,t,n=0,s=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new ow}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const H0=new Ke,ba=new H,Mh=new H;class aw extends rp{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),n.position.copy(ba),Mh.copy(n.position),Mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mh),n.updateMatrixWorld(),s.makeTranslation(-ba.x,-ba.y,-ba.z),H0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(H0)}}class Jc extends qa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new aw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D_ extends S_{constructor(e=-1,t=1,n=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,l=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lw extends rp{constructor(){super(new D_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new lw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cu extends qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cw{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class uw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const ap="\\[\\]\\.:\\/",dw=new RegExp("["+ap+"]","g"),lp="[^"+ap+"]",hw="[^"+ap.replace("\\.","")+"]",fw=/((?:WC+[\/:])*)/.source.replace("WC",lp),pw=/(WCOD+)?/.source.replace("WCOD",hw),mw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),gw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),vw=new RegExp("^"+fw+pw+mw+gw+"$"),_w=["material","materials","bones","map"];class xw{constructor(e,t,n){const s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dw,"")}static parseTrackName(e){const t=vw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);_w.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let l=0;l<a.length;l++){const u=a[l];if(u.name===t||u.uuid===t)return u;const d=n(u.children);if(d)return d}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===f){f=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const l=e[s];if(l===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=xw;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class G0{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const W0=new H;class I_ extends Bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new fn,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,u=1,d=32;l<d;l++,u++){const f=l/d*Math.PI*2,p=u/d*Math.PI*2;s.push(Math.cos(f),Math.sin(f),1,Math.cos(p),Math.sin(p),1)}n.setAttribute("position",new Ft(s,3));const a=new su({fog:!1,toneMapped:!1});this.cone=new w1(n,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),W0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(W0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const yw=new H,j0=new Ze,X0=new Ze;class N_ extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new np(t);s.rotateY(Math.PI*.5),this.material=new $a({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const a=s.getAttribute("position"),l=new Float32Array(a.count*3);s.setAttribute("color",new Qn(l,3)),this.add(new hn(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");j0.copy(this.light.color),X0.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const a=n<s/2?j0:X0;t.setXYZ(n,a.r,a.g,a.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(yw.setFromMatrixPosition(this.light.matrixWorld).negate())}}const $0=new H,Rc=new H,Y0=new H;class F_ extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new fn;s.setAttribute("position",new Ft([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new su({fog:!1,toneMapped:!1});this.lightPlane=new Kc(s,a),this.add(this.lightPlane),s=new fn,s.setAttribute("position",new Ft([0,0,0,0,0,1],3)),this.targetLine=new Kc(s,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),$0.setFromMatrixPosition(this.light.matrixWorld),Rc.setFromMatrixPosition(this.light.target.matrixWorld),Y0.subVectors(Rc,$0),this.lightPlane.lookAt(Rc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Rc),this.targetLine.scale.z=Y0.length()}}class Sw extends bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function q0(r,e,t,n){const s=Mw(n);switch(t){case o_:return r*e;case l_:return r*e;case c_:return r*e*2;case u_:return r*e/s.components*s.byteLength;case jf:return r*e/s.components*s.byteLength;case d_:return r*e*2/s.components*s.byteLength;case Xf:return r*e*2/s.components*s.byteLength;case a_:return r*e*3/s.components*s.byteLength;case gi:return r*e*4/s.components*s.byteLength;case $f:return r*e*4/s.components*s.byteLength;case kc:case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bc:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:case tf:return Math.max(r,16)*Math.max(e,8)/4;case Jh:case ef:return Math.max(r,8)*Math.max(e,8)/2;case nf:case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case uf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case df:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ff:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vc:case yf:case Sf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case h_:case Mf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ef:case wf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mw(r){switch(r){case dr:case i_:return{byteLength:1,components:1};case Na:case r_:case Xa:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case Es:case Hf:case ki:return{byteLength:4,components:1};case s_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U_(){let r=null,e=!1,t=null,n=null;function s(a,l){t(a,l),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Ew(r){const e=new WeakMap;function t(u,d){const f=u.array,p=u.usage,g=f.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,f,p),u.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,d,f){const p=d.array,g=d.updateRanges;if(r.bindBuffer(f,u),g.length===0)r.bufferSubData(f,0,p);else{g.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<g.length;_++){const M=g[m],E=g[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,g[m]=E)}g.length=m+1;for(let _=0,M=g.length;_<M;_++){const E=g[_];r.bufferSubData(f,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(r.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:a,update:l}}var ww=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Aw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ow=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$w=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eT="gl_FragColor = linearToOutputTexel( gl_FragColor );",tT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ET=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$T=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_b=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:ww,alphahash_pars_fragment:Tw,alphamap_fragment:bw,alphamap_pars_fragment:Aw,alphatest_fragment:Cw,alphatest_pars_fragment:Rw,aomap_fragment:Pw,aomap_pars_fragment:Lw,batching_pars_vertex:Dw,batching_vertex:Iw,begin_vertex:Nw,beginnormal_vertex:Fw,bsdfs:Uw,iridescence_fragment:kw,bumpmap_pars_fragment:Ow,clipping_planes_fragment:Bw,clipping_planes_pars_fragment:zw,clipping_planes_pars_vertex:Vw,clipping_planes_vertex:Hw,color_fragment:Gw,color_pars_fragment:Ww,color_pars_vertex:jw,color_vertex:Xw,common:$w,cube_uv_reflection_fragment:Yw,defaultnormal_vertex:qw,displacementmap_pars_vertex:Kw,displacementmap_vertex:Zw,emissivemap_fragment:Jw,emissivemap_pars_fragment:Qw,colorspace_fragment:eT,colorspace_pars_fragment:tT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:rT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:gT,envmap_vertex:oT,fog_vertex:aT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:dT,lightmap_pars_fragment:hT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:vT,lights_toon_pars_fragment:_T,lights_phong_fragment:xT,lights_phong_pars_fragment:yT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:wT,lights_fragment_end:TT,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:AT,logdepthbuf_pars_vertex:CT,logdepthbuf_vertex:RT,map_fragment:PT,map_pars_fragment:LT,map_particle_fragment:DT,map_particle_pars_fragment:IT,metalnessmap_fragment:NT,metalnessmap_pars_fragment:FT,morphinstance_vertex:UT,morphcolor_vertex:kT,morphnormal_vertex:OT,morphtarget_pars_vertex:BT,morphtarget_vertex:zT,normal_fragment_begin:VT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:WT,normal_vertex:jT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:$T,clearcoat_normal_fragment_maps:YT,clearcoat_pars_fragment:qT,iridescence_pars_fragment:KT,opaque_fragment:ZT,packing:JT,premultiplied_alpha_fragment:QT,project_vertex:eb,dithering_fragment:tb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:ob,shadowmap_vertex:ab,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:db,skinnormal_vertex:hb,specularmap_fragment:fb,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:vb,transmission_pars_fragment:_b,uv_pars_fragment:xb,uv_pars_vertex:yb,uv_vertex:Sb,worldpos_vertex:Mb,background_vert:Eb,background_frag:wb,backgroundCube_vert:Tb,backgroundCube_frag:bb,cube_vert:Ab,cube_frag:Cb,depth_vert:Rb,depth_frag:Pb,distanceRGBA_vert:Lb,distanceRGBA_frag:Db,equirect_vert:Ib,equirect_frag:Nb,linedashed_vert:Fb,linedashed_frag:Ub,meshbasic_vert:kb,meshbasic_frag:Ob,meshlambert_vert:Bb,meshlambert_frag:zb,meshmatcap_vert:Vb,meshmatcap_frag:Hb,meshnormal_vert:Gb,meshnormal_frag:Wb,meshphong_vert:jb,meshphong_frag:Xb,meshphysical_vert:$b,meshphysical_frag:Yb,meshtoon_vert:qb,meshtoon_frag:Kb,points_vert:Zb,points_frag:Jb,shadow_vert:Qb,shadow_frag:eA,sprite_vert:tA,sprite_frag:nA},Le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Fi={basic:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Hn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Hn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Hn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Hn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Hn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Hn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Hn([Le.common,Le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Hn([Le.lights,Le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Fi.physical={uniforms:Hn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pc={r:0,b:0,g:0},vs=new dn,iA=new Ke;function rA(r,e,t,n,s,a,l){const u=new Ze(0);let d=a===!0?0:1,f,p,g=null,m=0,_=null;function M(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function E(w){let b=!1;const k=M(w);k===null?x(u,d):k&&k.isColor&&(x(k,1),b=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,b){const k=M(b);k&&(k.isCubeTexture||k.mapping===nu)?(p===void 0&&(p=new hn(new Ya(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:Io(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),vs.copy(b.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),p.material.uniforms.envMap.value=k,p.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iA.makeRotationFromEuler(vs)),p.material.toneMapped=ft.getTransfer(k.colorSpace)!==kt,(g!==k||m!==k.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,g=k,m=k.version,_=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):k&&k.isTexture&&(f===void 0&&(f=new hn(new Oo(2,2),new $r({name:"BackgroundMaterial",uniforms:Io(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=k,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=ft.getTransfer(k.colorSpace)!==kt,k.matrixAutoUpdate===!0&&k.updateMatrix(),f.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||m!==k.version||_!==r.toneMapping)&&(f.material.needsUpdate=!0,g=k,m=k.version,_=r.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function x(w,b){w.getRGB(Pc,y_(r)),n.buffers.color.setClear(Pc.r,Pc.g,Pc.b,b,l)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(w,b=1){u.set(w),d=b,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,x(u,d)},render:E,addToRenderList:y,dispose:R}}function sA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=m(null);let a=s,l=!1;function u(T,U,Y,K,j){let te=!1;const Q=g(K,Y,U);a!==Q&&(a=Q,f(a.object)),te=_(T,K,Y,j),te&&M(T,K,Y,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(te||l)&&(l=!1,b(T,U,Y,K),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function g(T,U,Y){const K=Y.wireframe===!0;let j=n[T.id];j===void 0&&(j={},n[T.id]=j);let te=j[U.id];te===void 0&&(te={},j[U.id]=te);let Q=te[K];return Q===void 0&&(Q=m(d()),te[K]=Q),Q}function m(T){const U=[],Y=[],K=[];for(let j=0;j<t;j++)U[j]=0,Y[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:K,object:T,attributes:{},index:null}}function _(T,U,Y,K){const j=a.attributes,te=U.attributes;let Q=0;const ie=Y.getAttributes();for(const V in ie)if(ie[V].location>=0){const le=j[V];let B=te[V];if(B===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(B=T.instanceColor)),le===void 0||le.attribute!==B||B&&le.data!==B.data)return!0;Q++}return a.attributesNum!==Q||a.index!==K}function M(T,U,Y,K){const j={},te=U.attributes;let Q=0;const ie=Y.getAttributes();for(const V in ie)if(ie[V].location>=0){let le=te[V];le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const B={};B.attribute=le,le&&le.data&&(B.data=le.data),j[V]=B,Q++}a.attributes=j,a.attributesNum=Q,a.index=K}function E(){const T=a.newAttributes;for(let U=0,Y=T.length;U<Y;U++)T[U]=0}function y(T){x(T,0)}function x(T,U){const Y=a.newAttributes,K=a.enabledAttributes,j=a.attributeDivisors;Y[T]=1,K[T]===0&&(r.enableVertexAttribArray(T),K[T]=1),j[T]!==U&&(r.vertexAttribDivisor(T,U),j[T]=U)}function R(){const T=a.newAttributes,U=a.enabledAttributes;for(let Y=0,K=U.length;Y<K;Y++)U[Y]!==T[Y]&&(r.disableVertexAttribArray(Y),U[Y]=0)}function w(T,U,Y,K,j,te,Q){Q===!0?r.vertexAttribIPointer(T,U,Y,j,te):r.vertexAttribPointer(T,U,Y,K,j,te)}function b(T,U,Y,K){E();const j=K.attributes,te=Y.getAttributes(),Q=U.defaultAttributeValues;for(const ie in te){const V=te[ie];if(V.location>=0){let ee=j[ie];if(ee===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const le=ee.normalized,B=ee.itemSize,oe=e.get(ee);if(oe===void 0)continue;const be=oe.buffer,re=oe.type,he=oe.bytesPerElement,ve=re===r.INT||re===r.UNSIGNED_INT||ee.gpuType===Hf;if(ee.isInterleavedBufferAttribute){const pe=ee.data,Ae=pe.stride,Ie=ee.offset;if(pe.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)x(V.location+qe,pe.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let qe=0;qe<V.locationSize;qe++)y(V.location+qe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let qe=0;qe<V.locationSize;qe++)w(V.location+qe,B/V.locationSize,re,le,Ae*he,(Ie+B/V.locationSize*qe)*he,ve)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)x(V.location+pe,ee.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<V.locationSize;pe++)y(V.location+pe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let pe=0;pe<V.locationSize;pe++)w(V.location+pe,B/V.locationSize,re,le,B*he,B/V.locationSize*pe*he,ve)}}else if(Q!==void 0){const le=Q[ie];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(V.location,le);break;case 3:r.vertexAttrib3fv(V.location,le);break;case 4:r.vertexAttrib4fv(V.location,le);break;default:r.vertexAttrib1fv(V.location,le)}}}}R()}function k(){I();for(const T in n){const U=n[T];for(const Y in U){const K=U[Y];for(const j in K)p(K[j].object),delete K[j];delete U[Y]}delete n[T]}}function N(T){if(n[T.id]===void 0)return;const U=n[T.id];for(const Y in U){const K=U[Y];for(const j in K)p(K[j].object),delete K[j];delete U[Y]}delete n[T.id]}function F(T){for(const U in n){const Y=n[U];if(Y[T.id]===void 0)continue;const K=Y[T.id];for(const j in K)p(K[j].object),delete K[j];delete Y[T.id]}}function I(){C(),l=!0,a!==s&&(a=s,f(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:I,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:y,disableUnusedAttributes:R}}function oA(r,e,t){let n;function s(f){n=f}function a(f,p){r.drawArrays(n,f,p),t.update(p,n,1)}function l(f,p,g){g!==0&&(r.drawArraysInstanced(n,f,p,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,g);let _=0;for(let M=0;M<g;M++)_+=p[M];t.update(_,n,1)}function d(f,p,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<f.length;M++)l(f[M],p[M],m[M]);else{_.multiDrawArraysInstancedWEBGL(n,f,0,p,0,m,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*m[E];t.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function aA(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(F){return!(F!==gi&&n.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const I=F===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==dr&&n.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!I)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=d(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:k,maxSamples:N}}function lA(r){const e=this;let t=null,n=0,s=!1,a=!1;const l=new Hr,u=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||n!==0||s;return s=m,n=g.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!s||M===null||M.length===0||a&&!y)a?p(null):f();else{const R=a?0:n,w=R*4;let b=x.clippingState||null;d.value=b,b=p(M,m,w,_);for(let k=0;k!==w;++k)b[k]=t[k];x.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,_,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=d.value,M!==!0||y===null){const x=_+E*4,R=m.matrixWorldInverse;u.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,b=_;w!==E;++w,b+=4)l.copy(g[w]).applyMatrix4(R,u),l.normal.toArray(y,b),y[b+3]=l.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function cA(r){let e=new WeakMap;function t(l,u){return u===Wc?l.mapping=Ao:u===Kh&&(l.mapping=Co),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===Wc||u===Kh)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new v1(d.height);return f.fromEquirectangularTexture(r,l),e.set(l,f),l.addEventListener("dispose",s),t(f.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const xo=4,K0=[.125,.215,.35,.446,.526,.582],Ss=20,Eh=new D_,Z0=new Ze;let wh=null,Th=0,bh=0,Ah=!1;const xs=(1+Math.sqrt(5))/2,ho=1/xs,J0=[new H(-xs,ho,0),new H(xs,ho,0),new H(-ho,0,xs),new H(ho,0,xs),new H(0,xs,-ho),new H(0,xs,ho),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Q0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){wh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Th,bh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Xa,format:gi,colorSpace:Lo,depthBuffer:!1},s=ev(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uA(a)),this._blurMaterial=dA(a,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Eh)}_sceneToCubeUV(e,t,n,s){const u=new wn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(Z0),p.toneMapping=jr,p.autoClear=!1;const _=new $a({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),M=new hn(new Ya,_);let E=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,E=!0):(_.color.copy(Z0),E=!0);for(let x=0;x<6;x++){const R=x%3;R===0?(u.up.set(0,d[x],0),u.lookAt(f[x],0,0)):R===1?(u.up.set(0,0,d[x]),u.lookAt(0,f[x],0)):(u.up.set(0,d[x],0),u.lookAt(0,0,f[x]));const w=this._cubeSize;Lc(s,R*w,x>2?w:0,w,w),p.setRenderTarget(s),E&&p.render(M,u),p.render(e,u)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=m,p.autoClear=g,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ao||e.mapping===Co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new hn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Lc(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,Eh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=J0[(s-a-1)%J0.length];this._blur(e,a-1,a,l,u)}t.autoClear=n}_blur(e,t,n,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",a),this._halfBlur(l,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new hn(this._lodPlanes[s],f),m=f.uniforms,_=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Ss-1),E=a/M,y=isFinite(a)?1+Math.floor(p*E):Ss;y>Ss&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const x=[];let R=0;for(let F=0;F<Ss;++F){const I=F/E,C=Math.exp(-I*I/2);x.push(C),F===0?R+=C:F<y&&(R+=2*C)}for(let F=0;F<x.length;F++)x[F]=x[F]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=x,m.latitudinal.value=l==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:w}=this;m.dTheta.value=M,m.mipInt.value=w-n;const b=this._sizeLods[s],k=3*b*(s>w-xo?s-w+xo:0),N=4*(this._cubeSize-b);Lc(t,k,N,3*b,2*b),d.setRenderTarget(t),d.render(g,Eh)}}function uA(r){const e=[],t=[],n=[];let s=r;const a=r-xo+1+K0.length;for(let l=0;l<a;l++){const u=Math.pow(2,s);t.push(u);let d=1/u;l>r-xo?d=K0[l-r+xo-1]:l===0&&(d=0),n.push(d);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,M=6,E=3,y=2,x=1,R=new Float32Array(E*M*_),w=new Float32Array(y*M*_),b=new Float32Array(x*M*_);for(let N=0;N<_;N++){const F=N%3*2/3-1,I=N>2?0:-1,C=[F,I,0,F+2/3,I,0,F+2/3,I+1,0,F,I,0,F+2/3,I+1,0,F,I+1,0];R.set(C,E*M*N),w.set(m,y*M*N);const T=[N,N,N,N,N,N];b.set(T,x*M*N)}const k=new fn;k.setAttribute("position",new Qn(R,E)),k.setAttribute("uv",new Qn(w,y)),k.setAttribute("faceIndex",new Qn(b,x)),e.push(k),s>xo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ev(r,e,t){const n=new ws(r,e,t);return n.texture.mapping=nu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function dA(r,e,t){const n=new Float32Array(Ss),s=new H(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function tv(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function nv(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hA(r){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===Wc||d===Kh,p=d===Ao||d===Co;if(f||p){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return t===null&&(t=new Q0(r)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const _=u.image;return f&&_&&_.height>0||p&&_&&s(_)?(t===null&&(t=new Q0(r)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function fA(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&mo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pA(r,e,t,n){const s={},a=new WeakMap;function l(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",l),delete s[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function d(g){const m=g.attributes;for(const _ in m)e.update(m[_],r.ARRAY_BUFFER)}function f(g){const m=[],_=g.index,M=g.attributes.position;let E=0;if(_!==null){const R=_.array;E=_.version;for(let w=0,b=R.length;w<b;w+=3){const k=R[w+0],N=R[w+1],F=R[w+2];m.push(k,N,N,F,F,k)}}else if(M!==void 0){const R=M.array;E=M.version;for(let w=0,b=R.length/3-1;w<b;w+=3){const k=w+0,N=w+1,F=w+2;m.push(k,N,N,F,F,k)}}else return;const y=new(p_(m)?x_:qf)(m,1);y.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,y)}function p(g){const m=a.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function mA(r,e,t){let n;function s(m){n=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function d(m,_){r.drawElements(n,_,a,m*l),t.update(_,n,1)}function f(m,_,M){M!==0&&(r.drawElementsInstanced(n,_,a,m*l,M),t.update(_,n,M))}function p(m,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,m,0,M);let y=0;for(let x=0;x<M;x++)y+=_[x];t.update(y,n,1)}function g(m,_,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<m.length;x++)f(m[x]/l,_[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(n,_,0,a,m,0,E,0,M);let x=0;for(let R=0;R<M;R++)x+=_[R]*E[R];t.update(x,n,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function gA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,u){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=u*(a/3);break;case r.LINES:t.lines+=u*(a/2);break;case r.LINE_STRIP:t.lines+=u*(a-1);break;case r.LINE_LOOP:t.lines+=u*a;break;case r.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vA(r,e,t){const n=new WeakMap,s=new Mt;function a(l,u,d){const f=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(u);if(m===void 0||m.count!==g){let T=function(){I.dispose(),n.delete(u),u.removeEventListener("dispose",T)};var _=T;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let b=0;M===!0&&(b=1),E===!0&&(b=2),y===!0&&(b=3);let k=u.attributes.position.count*b,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*N*4*g),I=new g_(F,k,N,g);I.type=ki,I.needsUpdate=!0;const C=b*4;for(let U=0;U<g;U++){const Y=x[U],K=R[U],j=w[U],te=k*N*4*U;for(let Q=0;Q<Y.count;Q++){const ie=Q*C;M===!0&&(s.fromBufferAttribute(Y,Q),F[te+ie+0]=s.x,F[te+ie+1]=s.y,F[te+ie+2]=s.z,F[te+ie+3]=0),E===!0&&(s.fromBufferAttribute(K,Q),F[te+ie+4]=s.x,F[te+ie+5]=s.y,F[te+ie+6]=s.z,F[te+ie+7]=0),y===!0&&(s.fromBufferAttribute(j,Q),F[te+ie+8]=s.x,F[te+ie+9]=s.y,F[te+ie+10]=s.z,F[te+ie+11]=j.itemSize===4?s.w:1)}}m={count:g,texture:I,size:new nt(k,N)},n.set(u,m),u.addEventListener("dispose",T)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",l.morphTexture,t);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",f)}d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:a}}function _A(r,e,t,n){let s=new WeakMap;function a(d){const f=n.render.frame,p=d.geometry,g=e.get(d,p);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const m=d.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return g}function l(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}const k_=new Tn,iv=new E_(1,1),O_=new g_,B_=new t1,z_=new M_,rv=[],sv=[],ov=new Float32Array(16),av=new Float32Array(9),lv=new Float32Array(4);function Vo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=rv[s];if(a===void 0&&(a=new Float32Array(s),rv[s]=a),e!==0){n.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,r[l].toArray(a,u)}return a}function pn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uu(r,e){let t=sv[e];t===void 0&&(t=new Int32Array(e),sv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function xA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2fv(this.addr,e),mn(t,e)}}function SA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;r.uniform3fv(this.addr,e),mn(t,e)}}function MA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4fv(this.addr,e),mn(t,e)}}function EA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;lv.set(n),r.uniformMatrix2fv(this.addr,!1,lv),mn(t,n)}}function wA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;av.set(n),r.uniformMatrix3fv(this.addr,!1,av),mn(t,n)}}function TA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;ov.set(n),r.uniformMatrix4fv(this.addr,!1,ov),mn(t,n)}}function bA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function AA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2iv(this.addr,e),mn(t,e)}}function CA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;r.uniform3iv(this.addr,e),mn(t,e)}}function RA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4iv(this.addr,e),mn(t,e)}}function PA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2uiv(this.addr,e),mn(t,e)}}function DA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;r.uniform3uiv(this.addr,e),mn(t,e)}}function IA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4uiv(this.addr,e),mn(t,e)}}function NA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(iv.compareFunction=f_,a=iv):a=k_,t.setTexture2D(e||a,s)}function FA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||B_,s)}function UA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||z_,s)}function kA(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||O_,s)}function OA(r){switch(r){case 5126:return xA;case 35664:return yA;case 35665:return SA;case 35666:return MA;case 35674:return EA;case 35675:return wA;case 35676:return TA;case 5124:case 35670:return bA;case 35667:case 35671:return AA;case 35668:case 35672:return CA;case 35669:case 35673:return RA;case 5125:return PA;case 36294:return LA;case 36295:return DA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return kA}}function BA(r,e){r.uniform1fv(this.addr,e)}function zA(r,e){const t=Vo(e,this.size,2);r.uniform2fv(this.addr,t)}function VA(r,e){const t=Vo(e,this.size,3);r.uniform3fv(this.addr,t)}function HA(r,e){const t=Vo(e,this.size,4);r.uniform4fv(this.addr,t)}function GA(r,e){const t=Vo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function WA(r,e){const t=Vo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jA(r,e){const t=Vo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function XA(r,e){r.uniform1iv(this.addr,e)}function $A(r,e){r.uniform2iv(this.addr,e)}function YA(r,e){r.uniform3iv(this.addr,e)}function qA(r,e){r.uniform4iv(this.addr,e)}function KA(r,e){r.uniform1uiv(this.addr,e)}function ZA(r,e){r.uniform2uiv(this.addr,e)}function JA(r,e){r.uniform3uiv(this.addr,e)}function QA(r,e){r.uniform4uiv(this.addr,e)}function eC(r,e,t){const n=this.cache,s=e.length,a=uu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||k_,a[l])}function tC(r,e,t){const n=this.cache,s=e.length,a=uu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||B_,a[l])}function nC(r,e,t){const n=this.cache,s=e.length,a=uu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||z_,a[l])}function iC(r,e,t){const n=this.cache,s=e.length,a=uu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||O_,a[l])}function rC(r){switch(r){case 5126:return BA;case 35664:return zA;case 35665:return VA;case 35666:return HA;case 35674:return GA;case 35675:return WA;case 35676:return jA;case 5124:case 35670:return XA;case 35667:case 35671:return $A;case 35668:case 35672:return YA;case 35669:case 35673:return qA;case 5125:return KA;case 36294:return ZA;case 36295:return JA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}class sC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=OA(t.type)}}class oC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rC(t.type)}}class aC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const u=s[a];u.setValue(e,t[u.id],n)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function cv(r,e){r.seq.push(e),r.map[e.id]=e}function lC(r,e,t){const n=r.name,s=n.length;for(Ch.lastIndex=0;;){const a=Ch.exec(n),l=Ch.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===s){cv(t,f===void 0?new sC(u,r,e):new oC(u,r,e));break}else{let g=t.map[u];g===void 0&&(g=new aC(u),cv(t,g)),t=g}}}class Hc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);lC(a,l,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,l=t.length;a!==l;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function uv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const cC=37297;let uC=0;function dC(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const dv=new ut;function hC(r){ft._getMatrix(dv,ft.workingColorSpace,r);const e=`mat3( ${dv.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Xc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+dC(r.getShaderSource(e),l)}else return s}function fC(r,e){const t=hC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pC(r,e){let t;switch(e){case dE:t="Linear";break;case hE:t="Reinhard";break;case fE:t="Cineon";break;case Vf:t="ACESFilmic";break;case mE:t="AgX";break;case gE:t="Neutral";break;case pE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dc=new H;function mC(){ft.getLuminanceCoefficients(Dc);const r=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function vC(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _C(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),l=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:r.getAttribLocation(e,l),locationSize:u}}return t}function Aa(r){return r!==""}function fv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(r){return r.replace(xC,SC)}const yC=new Map;function SC(r,e){let t=ht[e];if(t===void 0){const n=yC.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rf(t)}const MC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(r){return r.replace(MC,EC)}function EC(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function gv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function TC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ao:case Co:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bC(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function AC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tu:e="ENVMAP_BLENDING_MULTIPLY";break;case cE:e="ENVMAP_BLENDING_MIX";break;case uE:e="ENVMAP_BLENDING_ADD";break}return e}function CC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function RC(r,e,t,n){const s=r.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=wC(t),f=TC(t),p=bC(t),g=AC(t),m=CC(t),_=gC(t),M=vC(a),E=s.createProgram();let y,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Aa).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Aa).join(`
`),x.length>0&&(x+=`
`)):(y=[gv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),x=[gv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jr?"#define TONE_MAPPING":"",t.toneMapping!==jr?ht.tonemapping_pars_fragment:"",t.toneMapping!==jr?pC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,fC("linearToOutputTexel",t.outputColorSpace),mC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),l=Rf(l),l=fv(l,t),l=pv(l,t),u=Rf(u),u=fv(u,t),u=pv(u,t),l=mv(l),u=mv(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=R+y+l,b=R+x+u,k=uv(s,s.VERTEX_SHADER,w),N=uv(s,s.FRAGMENT_SHADER,b);s.attachShader(E,k),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function F(U){if(r.debug.checkShaderErrors){const Y=s.getProgramInfoLog(E).trim(),K=s.getShaderInfoLog(k).trim(),j=s.getShaderInfoLog(N).trim();let te=!0,Q=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,E,k,N);else{const ie=hv(s,k,"vertex"),V=hv(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+ie+`
`+V)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||j==="")&&(Q=!1);Q&&(U.diagnostics={runnable:te,programLog:Y,vertexShader:{log:K,prefix:y},fragmentShader:{log:j,prefix:x}})}s.deleteShader(k),s.deleteShader(N),I=new Hc(s,E),C=_C(s,E)}let I;this.getUniforms=function(){return I===void 0&&F(this),I};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(E,cC)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=N,this}let PC=0;class LC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DC(e),t.set(e,n)),n}}class DC{constructor(e){this.id=PC++,this.code=e,this.usedTimes=0}}function IC(r,e,t,n,s,a,l){const u=new v_,d=new LC,f=new Set,p=[],g=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function y(C,T,U,Y,K){const j=Y.fog,te=K.geometry,Q=C.isMeshStandardMaterial?Y.environment:null,ie=(C.isMeshStandardMaterial?t:e).get(C.envMap||Q),V=ie&&ie.mapping===nu?ie.image.height:null,ee=M[C.type];C.precision!==null&&(_=s.getMaxPrecision(C.precision),_!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",_,"instead."));const le=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,B=le!==void 0?le.length:0;let oe=0;te.morphAttributes.position!==void 0&&(oe=1),te.morphAttributes.normal!==void 0&&(oe=2),te.morphAttributes.color!==void 0&&(oe=3);let be,re,he,ve;if(ee){const Tt=Fi[ee];be=Tt.vertexShader,re=Tt.fragmentShader}else be=C.vertexShader,re=C.fragmentShader,d.update(C),he=d.getVertexShaderID(C),ve=d.getFragmentShaderID(C);const pe=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ie=K.isInstancedMesh===!0,qe=K.isBatchedMesh===!0,Lt=!!C.map,pt=!!C.matcap,It=!!ie,W=!!C.aoMap,Fn=!!C.lightMap,yt=!!C.bumpMap,vt=!!C.normalMap,Ye=!!C.displacementMap,Nt=!!C.emissiveMap,Xe=!!C.metalnessMap,O=!!C.roughnessMap,L=C.anisotropy>0,ae=C.clearcoat>0,_e=C.dispersion>0,ye=C.iridescence>0,me=C.sheen>0,We=C.transmission>0,Ce=L&&!!C.anisotropyMap,ke=ae&&!!C.clearcoatMap,mt=ae&&!!C.clearcoatNormalMap,we=ae&&!!C.clearcoatRoughnessMap,ze=ye&&!!C.iridescenceMap,Qe=ye&&!!C.iridescenceThicknessMap,it=me&&!!C.sheenColorMap,Ve=me&&!!C.sheenRoughnessMap,_t=!!C.specularMap,at=!!C.specularColorMap,Dt=!!C.specularIntensityMap,q=We&&!!C.transmissionMap,Re=We&&!!C.thicknessMap,fe=!!C.gradientMap,ge=!!C.alphaMap,Ne=C.alphaTest>0,De=!!C.alphaHash,lt=!!C.extensions;let Ht=jr;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const an={shaderID:ee,shaderType:C.type,shaderName:C.name,vertexShader:be,fragmentShader:re,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:_,batching:qe,batchingColor:qe&&K._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,instancingMorph:Ie&&K.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Lo,alphaToCoverage:!!C.alphaToCoverage,map:Lt,matcap:pt,envMap:It,envMapMode:It&&ie.mapping,envMapCubeUVHeight:V,aoMap:W,lightMap:Fn,bumpMap:yt,normalMap:vt,displacementMap:m&&Ye,emissiveMap:Nt,normalMapObjectSpace:vt&&C.normalMapType===ME,normalMapTangentSpace:vt&&C.normalMapType===iu,metalnessMap:Xe,roughnessMap:O,anisotropy:L,anisotropyMap:Ce,clearcoat:ae,clearcoatMap:ke,clearcoatNormalMap:mt,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ye,iridescenceMap:ze,iridescenceThicknessMap:Qe,sheen:me,sheenColorMap:it,sheenRoughnessMap:Ve,specularMap:_t,specularColorMap:at,specularIntensityMap:Dt,transmission:We,transmissionMap:q,thicknessMap:Re,gradientMap:fe,opaque:C.transparent===!1&&C.blending===Mo&&C.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ne,alphaHash:De,combine:C.combine,mapUv:Lt&&E(C.map.channel),aoMapUv:W&&E(C.aoMap.channel),lightMapUv:Fn&&E(C.lightMap.channel),bumpMapUv:yt&&E(C.bumpMap.channel),normalMapUv:vt&&E(C.normalMap.channel),displacementMapUv:Ye&&E(C.displacementMap.channel),emissiveMapUv:Nt&&E(C.emissiveMap.channel),metalnessMapUv:Xe&&E(C.metalnessMap.channel),roughnessMapUv:O&&E(C.roughnessMap.channel),anisotropyMapUv:Ce&&E(C.anisotropyMap.channel),clearcoatMapUv:ke&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:mt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:it&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(C.sheenRoughnessMap.channel),specularMapUv:_t&&E(C.specularMap.channel),specularColorMapUv:at&&E(C.specularColorMap.channel),specularIntensityMapUv:Dt&&E(C.specularIntensityMap.channel),transmissionMapUv:q&&E(C.transmissionMap.channel),thicknessMapUv:Re&&E(C.thicknessMap.channel),alphaMapUv:ge&&E(C.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(vt||L),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!te.attributes.uv&&(Lt||ge),fog:!!j,useFog:C.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:K.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Lt&&C.map.isVideoTexture===!0&&ft.getTransfer(C.map.colorSpace)===kt,decodeVideoTextureEmissive:Nt&&C.emissiveMap.isVideoTexture===!0&&ft.getTransfer(C.emissiveMap.colorSpace)===kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===sr,flipSided:C.side===Jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:lt&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&C.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return an.vertexUv1s=f.has(1),an.vertexUv2s=f.has(2),an.vertexUv3s=f.has(3),f.clear(),an}function x(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const U in C.defines)T.push(U),T.push(C.defines[U]);return C.isRawShaderMaterial===!1&&(R(T,C),w(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function R(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function w(C,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),C.push(u.mask)}function b(C){const T=M[C.type];let U;if(T){const Y=Fi[T];U=f1.clone(Y.uniforms)}else U=C.uniforms;return U}function k(C,T){let U;for(let Y=0,K=p.length;Y<K;Y++){const j=p[Y];if(j.cacheKey===T){U=j,++U.usedTimes;break}}return U===void 0&&(U=new RC(r,T,C,a),p.push(U)),U}function N(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function F(C){d.remove(C)}function I(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:b,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:p,dispose:I}}function NC(){let r=new WeakMap;function e(l){return r.has(l)}function t(l){let u=r.get(l);return u===void 0&&(u={},r.set(l,u)),u}function n(l){r.delete(l)}function s(l,u,d){r.get(l)[u]=d}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function FC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _v(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function l(g,m,_,M,E,y){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:m,material:_,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},r[e]=x):(x.id=g.id,x.object=g,x.geometry=m,x.material=_,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=y),e++,x}function u(g,m,_,M,E,y){const x=l(g,m,_,M,E,y);_.transmission>0?n.push(x):_.transparent===!0?s.push(x):t.push(x)}function d(g,m,_,M,E,y){const x=l(g,m,_,M,E,y);_.transmission>0?n.unshift(x):_.transparent===!0?s.unshift(x):t.unshift(x)}function f(g,m){t.length>1&&t.sort(g||FC),n.length>1&&n.sort(m||vv),s.length>1&&s.sort(m||vv)}function p(){for(let g=e,m=r.length;g<m;g++){const _=r[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:u,unshift:d,finish:p,sort:f}}function UC(){let r=new WeakMap;function e(n,s){const a=r.get(n);let l;return a===void 0?(l=new _v,r.set(n,[l])):s>=a.length?(l=new _v,a.push(l)):l=a[s],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function kC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function OC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let BC=0;function zC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VC(r){const e=new kC,t=OC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);const s=new H,a=new Ke,l=new Ke;function u(f){let p=0,g=0,m=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let _=0,M=0,E=0,y=0,x=0,R=0,w=0,b=0,k=0,N=0,F=0;f.sort(zC);for(let C=0,T=f.length;C<T;C++){const U=f[C],Y=U.color,K=U.intensity,j=U.distance,te=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=Y.r*K,g+=Y.g*K,m+=Y.b*K;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],K);F++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ie=U.shadow,V=t.get(U);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.directionalShadow[_]=V,n.directionalShadowMap[_]=te,n.directionalShadowMatrix[_]=U.shadow.matrix,R++}n.directional[_]=Q,_++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(Y).multiplyScalar(K),Q.distance=j,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[E]=Q;const ie=U.shadow;if(U.map&&(n.spotLightMap[k]=U.map,k++,ie.updateMatrices(U),U.castShadow&&N++),n.spotLightMatrix[E]=ie.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,n.spotShadow[E]=V,n.spotShadowMap[E]=te,b++}E++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(Y).multiplyScalar(K),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[y]=Q,y++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ie=U.shadow,V=t.get(U);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,n.pointShadow[M]=V,n.pointShadowMap[M]=te,n.pointShadowMatrix[M]=U.shadow.matrix,w++}n.point[M]=Q,M++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(K),Q.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[x]=Q,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const I=n.hash;(I.directionalLength!==_||I.pointLength!==M||I.spotLength!==E||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==R||I.numPointShadows!==w||I.numSpotShadows!==b||I.numSpotMaps!==k||I.numLightProbes!==F)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=y,n.point.length=M,n.hemi.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+k-N,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=F,I.directionalLength=_,I.pointLength=M,I.spotLength=E,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=R,I.numPointShadows=w,I.numSpotShadows=b,I.numSpotMaps=k,I.numLightProbes=F,n.version=BC++)}function d(f,p){let g=0,m=0,_=0,M=0,E=0;const y=p.matrixWorldInverse;for(let x=0,R=f.length;x<R;x++){const w=f[x];if(w.isDirectionalLight){const b=n.directional[g];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),g++}else if(w.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),_++}else if(w.isRectAreaLight){const b=n.rectArea[M];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),l.identity(),a.copy(w.matrixWorld),a.premultiply(y),l.extractRotation(a),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),M++}else if(w.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(y),m++}else if(w.isHemisphereLight){const b=n.hemi[E];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(y),E++}}}return{setup:u,setupView:d,state:n}}function xv(r){const e=new VC(r),t=[],n=[];function s(p){f.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function l(p){n.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l}}function HC(r){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let u;return l===void 0?(u=new xv(r),e.set(s,[u])):a>=l.length?(u=new xv(r),l.push(u)):u=l[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const GC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jC(r,e,t){let n=new Jf;const s=new nt,a=new nt,l=new Mt,u=new j1({depthPacking:SE}),d=new X1,f={},p=t.maxTextureSize,g={[Xr]:Jn,[Jn]:Xr,[sr]:sr},m=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:GC,fragmentShader:WC}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new fn;M.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new hn(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t_;let x=this.type;this.render=function(N,F,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Wr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=x!==rr&&this.type===rr,j=x===rr&&this.type!==rr;for(let te=0,Q=N.length;te<Q;te++){const ie=N[te],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ee=V.getFrameExtents();if(s.multiply(ee),a.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ee.x),s.x=a.x*ee.x,V.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ee.y),s.y=a.y*ee.y,V.mapSize.y=a.y)),V.map===null||K===!0||j===!0){const B=this.type!==rr?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new ws(s.x,s.y,B),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const le=V.getViewportCount();for(let B=0;B<le;B++){const oe=V.getViewport(B);l.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),Y.viewport(l),V.updateMatrices(ie,B),n=V.getFrustum(),b(F,I,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===rr&&R(V,I),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(C,T,U)};function R(N,F){const I=e.update(E);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ws(s.x,s.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,I,m,E,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,I,_,E,null)}function w(N,F,I,C){let T=null;const U=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)T=U;else if(T=I.isPointLight===!0?d:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Y=T.uuid,K=F.uuid;let j=f[Y];j===void 0&&(j={},f[Y]=j);let te=j[K];te===void 0&&(te=T.clone(),j[K]=te,F.addEventListener("dispose",k)),T=te}if(T.visible=F.visible,T.wireframe=F.wireframe,C===rr?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:g[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=r.properties.get(T);Y.light=I}return T}function b(N,F,I,C,T){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===rr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);const K=e.update(N),j=N.material;if(Array.isArray(j)){const te=K.groups;for(let Q=0,ie=te.length;Q<ie;Q++){const V=te[Q],ee=j[V.materialIndex];if(ee&&ee.visible){const le=w(N,ee,C,T);N.onBeforeShadow(r,N,F,I,K,le,V),r.renderBufferDirect(I,null,K,le,N,V),N.onAfterShadow(r,N,F,I,K,le,V)}}}else if(j.visible){const te=w(N,j,C,T);N.onBeforeShadow(r,N,F,I,K,te,null),r.renderBufferDirect(I,null,K,te,N,null),N.onAfterShadow(r,N,F,I,K,te,null)}}const Y=N.children;for(let K=0,j=Y.length;K<j;K++)b(Y[K],F,I,C,T)}function k(N){N.target.removeEventListener("dispose",k);for(const I in f){const C=f[I],T=N.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const XC={[Gh]:Wh,[jh]:Yh,[Xh]:qh,[bo]:$h,[Wh]:Gh,[Yh]:jh,[qh]:Xh,[$h]:bo};function $C(r,e){function t(){let q=!1;const Re=new Mt;let fe=null;const ge=new Mt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!q&&(r.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){q=Ne},setClear:function(Ne,De,lt,Ht,an){an===!0&&(Ne*=Ht,De*=Ht,lt*=Ht),Re.set(Ne,De,lt,Ht),ge.equals(Re)===!1&&(r.clearColor(Ne,De,lt,Ht),ge.copy(Re))},reset:function(){q=!1,fe=null,ge.set(-1,0,0,0)}}}function n(){let q=!1,Re=!1,fe=null,ge=null,Ne=null;return{setReversed:function(De){if(Re!==De){const lt=e.get("EXT_clip_control");Re?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ht=Ne;Ne=null,this.setClear(Ht)}Re=De},getReversed:function(){return Re},setTest:function(De){De?pe(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(De){fe!==De&&!q&&(r.depthMask(De),fe=De)},setFunc:function(De){if(Re&&(De=XC[De]),ge!==De){switch(De){case Gh:r.depthFunc(r.NEVER);break;case Wh:r.depthFunc(r.ALWAYS);break;case jh:r.depthFunc(r.LESS);break;case bo:r.depthFunc(r.LEQUAL);break;case Xh:r.depthFunc(r.EQUAL);break;case $h:r.depthFunc(r.GEQUAL);break;case Yh:r.depthFunc(r.GREATER);break;case qh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=De}},setLocked:function(De){q=De},setClear:function(De){Ne!==De&&(Re&&(De=1-De),r.clearDepth(De),Ne=De)},reset:function(){q=!1,fe=null,ge=null,Ne=null,Re=!1}}}function s(){let q=!1,Re=null,fe=null,ge=null,Ne=null,De=null,lt=null,Ht=null,an=null;return{setTest:function(Tt){q||(Tt?pe(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Tt){Re!==Tt&&!q&&(r.stencilMask(Tt),Re=Tt)},setFunc:function(Tt,Wn,Un){(fe!==Tt||ge!==Wn||Ne!==Un)&&(r.stencilFunc(Tt,Wn,Un),fe=Tt,ge=Wn,Ne=Un)},setOp:function(Tt,Wn,Un){(De!==Tt||lt!==Wn||Ht!==Un)&&(r.stencilOp(Tt,Wn,Un),De=Tt,lt=Wn,Ht=Un)},setLocked:function(Tt){q=Tt},setClear:function(Tt){an!==Tt&&(r.clearStencil(Tt),an=Tt)},reset:function(){q=!1,Re=null,fe=null,ge=null,Ne=null,De=null,lt=null,Ht=null,an=null}}}const a=new t,l=new n,u=new s,d=new WeakMap,f=new WeakMap;let p={},g={},m=new WeakMap,_=[],M=null,E=!1,y=null,x=null,R=null,w=null,b=null,k=null,N=null,F=new Ze(0,0,0),I=0,C=!1,T=null,U=null,Y=null,K=null,j=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ie=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),Q=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Q=ie>=2);let ee=null,le={};const B=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),be=new Mt().fromArray(B),re=new Mt().fromArray(oe);function he(q,Re,fe,ge){const Ne=new Uint8Array(4),De=r.createTexture();r.bindTexture(q,De),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<fe;lt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Re+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return De}const ve={};ve[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(r.DEPTH_TEST),l.setFunc(bo),yt(!1),vt(Zg),pe(r.CULL_FACE),W(Wr);function pe(q){p[q]!==!0&&(r.enable(q),p[q]=!0)}function Ae(q){p[q]!==!1&&(r.disable(q),p[q]=!1)}function Ie(q,Re){return g[q]!==Re?(r.bindFramebuffer(q,Re),g[q]=Re,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function qe(q,Re){let fe=_,ge=!1;if(q){fe=m.get(Re),fe===void 0&&(fe=[],m.set(Re,fe));const Ne=q.textures;if(fe.length!==Ne.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let De=0,lt=Ne.length;De<lt;De++)fe[De]=r.COLOR_ATTACHMENT0+De;fe.length=Ne.length,ge=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(fe)}function Lt(q){return M!==q?(r.useProgram(q),M=q,!0):!1}const pt={[ys]:r.FUNC_ADD,[XM]:r.FUNC_SUBTRACT,[$M]:r.FUNC_REVERSE_SUBTRACT};pt[YM]=r.MIN,pt[qM]=r.MAX;const It={[KM]:r.ZERO,[ZM]:r.ONE,[JM]:r.SRC_COLOR,[Vh]:r.SRC_ALPHA,[rE]:r.SRC_ALPHA_SATURATE,[nE]:r.DST_COLOR,[eE]:r.DST_ALPHA,[QM]:r.ONE_MINUS_SRC_COLOR,[Hh]:r.ONE_MINUS_SRC_ALPHA,[iE]:r.ONE_MINUS_DST_COLOR,[tE]:r.ONE_MINUS_DST_ALPHA,[sE]:r.CONSTANT_COLOR,[oE]:r.ONE_MINUS_CONSTANT_COLOR,[aE]:r.CONSTANT_ALPHA,[lE]:r.ONE_MINUS_CONSTANT_ALPHA};function W(q,Re,fe,ge,Ne,De,lt,Ht,an,Tt){if(q===Wr){E===!0&&(Ae(r.BLEND),E=!1);return}if(E===!1&&(pe(r.BLEND),E=!0),q!==jM){if(q!==y||Tt!==C){if((x!==ys||b!==ys)&&(r.blendEquation(r.FUNC_ADD),x=ys,b=ys),Tt)switch(q){case Mo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jg:r.blendFunc(r.ONE,r.ONE);break;case Qg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case e0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case e0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}R=null,w=null,k=null,N=null,F.set(0,0,0),I=0,y=q,C=Tt}return}Ne=Ne||Re,De=De||fe,lt=lt||ge,(Re!==x||Ne!==b)&&(r.blendEquationSeparate(pt[Re],pt[Ne]),x=Re,b=Ne),(fe!==R||ge!==w||De!==k||lt!==N)&&(r.blendFuncSeparate(It[fe],It[ge],It[De],It[lt]),R=fe,w=ge,k=De,N=lt),(Ht.equals(F)===!1||an!==I)&&(r.blendColor(Ht.r,Ht.g,Ht.b,an),F.copy(Ht),I=an),y=q,C=!1}function Fn(q,Re){q.side===sr?Ae(r.CULL_FACE):pe(r.CULL_FACE);let fe=q.side===Jn;Re&&(fe=!fe),yt(fe),q.blending===Mo&&q.transparent===!1?W(Wr):W(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),a.setMask(q.colorWrite);const ge=q.stencilWrite;u.setTest(ge),ge&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Nt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(q){T!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),T=q)}function vt(q){q!==GM?(pe(r.CULL_FACE),q!==U&&(q===Zg?r.cullFace(r.BACK):q===WM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),U=q}function Ye(q){q!==Y&&(Q&&r.lineWidth(q),Y=q)}function Nt(q,Re,fe){q?(pe(r.POLYGON_OFFSET_FILL),(K!==Re||j!==fe)&&(r.polygonOffset(Re,fe),K=Re,j=fe)):Ae(r.POLYGON_OFFSET_FILL)}function Xe(q){q?pe(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function O(q){q===void 0&&(q=r.TEXTURE0+te-1),ee!==q&&(r.activeTexture(q),ee=q)}function L(q,Re,fe){fe===void 0&&(ee===null?fe=r.TEXTURE0+te-1:fe=ee);let ge=le[fe];ge===void 0&&(ge={type:void 0,texture:void 0},le[fe]=ge),(ge.type!==q||ge.texture!==Re)&&(ee!==fe&&(r.activeTexture(fe),ee=fe),r.bindTexture(q,Re||ve[q]),ge.type=q,ge.texture=Re)}function ae(){const q=le[ee];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{r.texStorage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{r.texImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(q){be.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),be.copy(q))}function Ve(q){re.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),re.copy(q))}function _t(q,Re){let fe=f.get(Re);fe===void 0&&(fe=new WeakMap,f.set(Re,fe));let ge=fe.get(q);ge===void 0&&(ge=r.getUniformBlockIndex(Re,q.name),fe.set(q,ge))}function at(q,Re){const ge=f.get(Re).get(q);d.get(Re)!==ge&&(r.uniformBlockBinding(Re,ge,q.__bindingPointIndex),d.set(Re,ge))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},ee=null,le={},g={},m=new WeakMap,_=[],M=null,E=!1,y=null,x=null,R=null,w=null,b=null,k=null,N=null,F=new Ze(0,0,0),I=0,C=!1,T=null,U=null,Y=null,K=null,j=null,be.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:pe,disable:Ae,bindFramebuffer:Ie,drawBuffers:qe,useProgram:Lt,setBlending:W,setMaterial:Fn,setFlipSided:yt,setCullFace:vt,setLineWidth:Ye,setPolygonOffset:Nt,setScissorTest:Xe,activeTexture:O,bindTexture:L,unbindTexture:ae,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:ze,texImage3D:Qe,updateUBOMapping:_t,uniformBlockBinding:at,texStorage2D:mt,texStorage3D:we,texSubImage2D:me,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:it,viewport:Ve,reset:Dt}}function YC(r,e,t,n,s,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new nt,p=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,L){return _?new OffscreenCanvas(O,L):Fa("canvas")}function E(O,L,ae){let _e=1;const ye=Xe(O);if((ye.width>ae||ye.height>ae)&&(_e=ae/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const me=Math.floor(_e*ye.width),We=Math.floor(_e*ye.height);g===void 0&&(g=M(me,We));const Ce=L?M(me,We):g;return Ce.width=me,Ce.height=We,Ce.getContext("2d").drawImage(O,0,0,me,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+We+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(O,L,ae,_e,ye=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let me=L;if(L===r.RED&&(ae===r.FLOAT&&(me=r.R32F),ae===r.HALF_FLOAT&&(me=r.R16F),ae===r.UNSIGNED_BYTE&&(me=r.R8)),L===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.R8UI),ae===r.UNSIGNED_SHORT&&(me=r.R16UI),ae===r.UNSIGNED_INT&&(me=r.R32UI),ae===r.BYTE&&(me=r.R8I),ae===r.SHORT&&(me=r.R16I),ae===r.INT&&(me=r.R32I)),L===r.RG&&(ae===r.FLOAT&&(me=r.RG32F),ae===r.HALF_FLOAT&&(me=r.RG16F),ae===r.UNSIGNED_BYTE&&(me=r.RG8)),L===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.RG8UI),ae===r.UNSIGNED_SHORT&&(me=r.RG16UI),ae===r.UNSIGNED_INT&&(me=r.RG32UI),ae===r.BYTE&&(me=r.RG8I),ae===r.SHORT&&(me=r.RG16I),ae===r.INT&&(me=r.RG32I)),L===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(me=r.RGB16UI),ae===r.UNSIGNED_INT&&(me=r.RGB32UI),ae===r.BYTE&&(me=r.RGB8I),ae===r.SHORT&&(me=r.RGB16I),ae===r.INT&&(me=r.RGB32I)),L===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),ae===r.UNSIGNED_INT&&(me=r.RGBA32UI),ae===r.BYTE&&(me=r.RGBA8I),ae===r.SHORT&&(me=r.RGBA16I),ae===r.INT&&(me=r.RGBA32I)),L===r.RGB&&ae===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),L===r.RGBA){const We=ye?Xc:ft.getTransfer(_e);ae===r.FLOAT&&(me=r.RGBA32F),ae===r.HALF_FLOAT&&(me=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(me=We===kt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function b(O,L){let ae;return O?L===null||L===Es||L===Ro?ae=r.DEPTH24_STENCIL8:L===ki?ae=r.DEPTH32F_STENCIL8:L===Na&&(ae=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Es||L===Ro?ae=r.DEPTH_COMPONENT24:L===ki?ae=r.DEPTH_COMPONENT32F:L===Na&&(ae=r.DEPTH_COMPONENT16),ae}function k(O,L){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==oi&&O.minFilter!==Ui?Math.log2(Math.max(L.width,L.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?L.mipmaps.length:1}function N(O){const L=O.target;L.removeEventListener("dispose",N),I(L),L.isVideoTexture&&p.delete(L)}function F(O){const L=O.target;L.removeEventListener("dispose",F),T(L)}function I(O){const L=n.get(O);if(L.__webglInit===void 0)return;const ae=O.source,_e=m.get(ae);if(_e){const ye=_e[L.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(O),Object.keys(_e).length===0&&m.delete(ae)}n.remove(O)}function C(O){const L=n.get(O);r.deleteTexture(L.__webglTexture);const ae=O.source,_e=m.get(ae);delete _e[L.__cacheKey],l.memory.textures--}function T(O){const L=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(L.__webglFramebuffer[_e]))for(let ye=0;ye<L.__webglFramebuffer[_e].length;ye++)r.deleteFramebuffer(L.__webglFramebuffer[_e][ye]);else r.deleteFramebuffer(L.__webglFramebuffer[_e]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[_e])}else{if(Array.isArray(L.__webglFramebuffer))for(let _e=0;_e<L.__webglFramebuffer.length;_e++)r.deleteFramebuffer(L.__webglFramebuffer[_e]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let _e=0;_e<L.__webglColorRenderbuffer.length;_e++)L.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[_e]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const ae=O.textures;for(let _e=0,ye=ae.length;_e<ye;_e++){const me=n.get(ae[_e]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),l.memory.textures--),n.remove(ae[_e])}n.remove(O)}let U=0;function Y(){U=0}function K(){const O=U;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),U+=1,O}function j(O){const L=[];return L.push(O.wrapS),L.push(O.wrapT),L.push(O.wrapR||0),L.push(O.magFilter),L.push(O.minFilter),L.push(O.anisotropy),L.push(O.internalFormat),L.push(O.format),L.push(O.type),L.push(O.generateMipmaps),L.push(O.premultiplyAlpha),L.push(O.flipY),L.push(O.unpackAlignment),L.push(O.colorSpace),L.join()}function te(O,L){const ae=n.get(O);if(O.isVideoTexture&&Ye(O),O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ae,O,L);return}}t.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+L)}function Q(O,L){const ae=n.get(O);if(O.version>0&&ae.__version!==O.version){re(ae,O,L);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+L)}function ie(O,L){const ae=n.get(O);if(O.version>0&&ae.__version!==O.version){re(ae,O,L);return}t.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+L)}function V(O,L){const ae=n.get(O);if(O.version>0&&ae.__version!==O.version){he(ae,O,L);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+L)}const ee={[Ia]:r.REPEAT,[or]:r.CLAMP_TO_EDGE,[Zh]:r.MIRRORED_REPEAT},le={[oi]:r.NEAREST,[_E]:r.NEAREST_MIPMAP_NEAREST,[sc]:r.NEAREST_MIPMAP_LINEAR,[Ui]:r.LINEAR,[Kd]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},B={[EE]:r.NEVER,[RE]:r.ALWAYS,[wE]:r.LESS,[f_]:r.LEQUAL,[TE]:r.EQUAL,[CE]:r.GEQUAL,[bE]:r.GREATER,[AE]:r.NOTEQUAL};function oe(O,L){if(L.type===ki&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Ui||L.magFilter===Kd||L.magFilter===sc||L.magFilter===Ms||L.minFilter===Ui||L.minFilter===Kd||L.minFilter===sc||L.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,ee[L.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,ee[L.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,ee[L.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,le[L.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,le[L.minFilter]),L.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,B[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===oi||L.minFilter!==sc&&L.minFilter!==Ms||L.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function be(O,L){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,L.addEventListener("dispose",N));const _e=L.source;let ye=m.get(_e);ye===void 0&&(ye={},m.set(_e,ye));const me=j(L);if(me!==O.__cacheKey){ye[me]===void 0&&(ye[me]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),ye[me].usedTimes++;const We=ye[O.__cacheKey];We!==void 0&&(ye[O.__cacheKey].usedTimes--,We.usedTimes===0&&C(L)),O.__cacheKey=me,O.__webglTexture=ye[me].texture}return ae}function re(O,L,ae){let _e=r.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),L.isData3DTexture&&(_e=r.TEXTURE_3D);const ye=be(O,L),me=L.source;t.bindTexture(_e,O.__webglTexture,r.TEXTURE0+ae);const We=n.get(me);if(me.version!==We.__version||ye===!0){t.activeTexture(r.TEXTURE0+ae);const Ce=ft.getPrimaries(ft.workingColorSpace),ke=L.colorSpace===Gr?null:ft.getPrimaries(L.colorSpace),mt=L.colorSpace===Gr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let we=E(L.image,!1,s.maxTextureSize);we=Nt(L,we);const ze=a.convert(L.format,L.colorSpace),Qe=a.convert(L.type);let it=w(L.internalFormat,ze,Qe,L.colorSpace,L.isVideoTexture);oe(_e,L);let Ve;const _t=L.mipmaps,at=L.isVideoTexture!==!0,Dt=We.__version===void 0||ye===!0,q=me.dataReady,Re=k(L,we);if(L.isDepthTexture)it=b(L.format===Po,L.type),Dt&&(at?t.texStorage2D(r.TEXTURE_2D,1,it,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,it,we.width,we.height,0,ze,Qe,null));else if(L.isDataTexture)if(_t.length>0){at&&Dt&&t.texStorage2D(r.TEXTURE_2D,Re,it,_t[0].width,_t[0].height);for(let fe=0,ge=_t.length;fe<ge;fe++)Ve=_t[fe],at?q&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,ze,Qe,Ve.data):t.texImage2D(r.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,ze,Qe,Ve.data);L.generateMipmaps=!1}else at?(Dt&&t.texStorage2D(r.TEXTURE_2D,Re,it,we.width,we.height),q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,ze,Qe,we.data)):t.texImage2D(r.TEXTURE_2D,0,it,we.width,we.height,0,ze,Qe,we.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){at&&Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,it,_t[0].width,_t[0].height,we.depth);for(let fe=0,ge=_t.length;fe<ge;fe++)if(Ve=_t[fe],L.format!==gi)if(ze!==null)if(at){if(q)if(L.layerUpdates.size>0){const Ne=q0(Ve.width,Ve.height,L.format,L.type);for(const De of L.layerUpdates){const lt=Ve.data.subarray(De*Ne/Ve.data.BYTES_PER_ELEMENT,(De+1)*Ne/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,De,Ve.width,Ve.height,1,ze,lt)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,we.depth,ze,Ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,it,Ve.width,Ve.height,we.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,we.depth,ze,Qe,Ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,it,Ve.width,Ve.height,we.depth,0,ze,Qe,Ve.data)}else{at&&Dt&&t.texStorage2D(r.TEXTURE_2D,Re,it,_t[0].width,_t[0].height);for(let fe=0,ge=_t.length;fe<ge;fe++)Ve=_t[fe],L.format!==gi?ze!==null?at?q&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?q&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,ze,Qe,Ve.data):t.texImage2D(r.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,ze,Qe,Ve.data)}else if(L.isDataArrayTexture)if(at){if(Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,it,we.width,we.height,we.depth),q)if(L.layerUpdates.size>0){const fe=q0(we.width,we.height,L.format,L.type);for(const ge of L.layerUpdates){const Ne=we.data.subarray(ge*fe/we.data.BYTES_PER_ELEMENT,(ge+1)*fe/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,we.width,we.height,1,ze,Qe,Ne)}L.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,Qe,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,it,we.width,we.height,we.depth,0,ze,Qe,we.data);else if(L.isData3DTexture)at?(Dt&&t.texStorage3D(r.TEXTURE_3D,Re,it,we.width,we.height,we.depth),q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,Qe,we.data)):t.texImage3D(r.TEXTURE_3D,0,it,we.width,we.height,we.depth,0,ze,Qe,we.data);else if(L.isFramebufferTexture){if(Dt)if(at)t.texStorage2D(r.TEXTURE_2D,Re,it,we.width,we.height);else{let fe=we.width,ge=we.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,it,fe,ge,0,ze,Qe,null),fe>>=1,ge>>=1}}else if(_t.length>0){if(at&&Dt){const fe=Xe(_t[0]);t.texStorage2D(r.TEXTURE_2D,Re,it,fe.width,fe.height)}for(let fe=0,ge=_t.length;fe<ge;fe++)Ve=_t[fe],at?q&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ze,Qe,Ve):t.texImage2D(r.TEXTURE_2D,fe,it,ze,Qe,Ve);L.generateMipmaps=!1}else if(at){if(Dt){const fe=Xe(we);t.texStorage2D(r.TEXTURE_2D,Re,it,fe.width,fe.height)}q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Qe,we)}else t.texImage2D(r.TEXTURE_2D,0,it,ze,Qe,we);y(L)&&x(_e),We.__version=me.version,L.onUpdate&&L.onUpdate(L)}O.__version=L.version}function he(O,L,ae){if(L.image.length!==6)return;const _e=be(O,L),ye=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ae);const me=n.get(ye);if(ye.version!==me.__version||_e===!0){t.activeTexture(r.TEXTURE0+ae);const We=ft.getPrimaries(ft.workingColorSpace),Ce=L.colorSpace===Gr?null:ft.getPrimaries(L.colorSpace),ke=L.colorSpace===Gr||We===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const mt=L.isCompressedTexture||L.image[0].isCompressedTexture,we=L.image[0]&&L.image[0].isDataTexture,ze=[];for(let ge=0;ge<6;ge++)!mt&&!we?ze[ge]=E(L.image[ge],!0,s.maxCubemapSize):ze[ge]=we?L.image[ge].image:L.image[ge],ze[ge]=Nt(L,ze[ge]);const Qe=ze[0],it=a.convert(L.format,L.colorSpace),Ve=a.convert(L.type),_t=w(L.internalFormat,it,Ve,L.colorSpace),at=L.isVideoTexture!==!0,Dt=me.__version===void 0||_e===!0,q=ye.dataReady;let Re=k(L,Qe);oe(r.TEXTURE_CUBE_MAP,L);let fe;if(mt){at&&Dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,_t,Qe.width,Qe.height);for(let ge=0;ge<6;ge++){fe=ze[ge].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const De=fe[Ne];L.format!==gi?it!==null?at?q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,De.width,De.height,it,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,_t,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,De.width,De.height,it,Ve,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,_t,De.width,De.height,0,it,Ve,De.data)}}}else{if(fe=L.mipmaps,at&&Dt){fe.length>0&&Re++;const ge=Xe(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,_t,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(we){at?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze[ge].width,ze[ge].height,it,Ve,ze[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,ze[ge].width,ze[ge].height,0,it,Ve,ze[ge].data);for(let Ne=0;Ne<fe.length;Ne++){const lt=fe[Ne].image[ge].image;at?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,lt.width,lt.height,it,Ve,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,_t,lt.width,lt.height,0,it,Ve,lt.data)}}else{at?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,it,Ve,ze[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,it,Ve,ze[ge]);for(let Ne=0;Ne<fe.length;Ne++){const De=fe[Ne];at?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,it,Ve,De.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,_t,it,Ve,De.image[ge])}}}y(L)&&x(r.TEXTURE_CUBE_MAP),me.__version=ye.version,L.onUpdate&&L.onUpdate(L)}O.__version=L.version}function ve(O,L,ae,_e,ye,me){const We=a.convert(ae.format,ae.colorSpace),Ce=a.convert(ae.type),ke=w(ae.internalFormat,We,Ce,ae.colorSpace),mt=n.get(L),we=n.get(ae);if(we.__renderTarget=L,!mt.__hasExternalTextures){const ze=Math.max(1,L.width>>me),Qe=Math.max(1,L.height>>me);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,me,ke,ze,Qe,L.depth,0,We,Ce,null):t.texImage2D(ye,me,ke,ze,Qe,0,We,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),vt(L)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ye,we.__webglTexture,0,yt(L)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ye,we.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(O,L,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,O),L.depthBuffer){const _e=L.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,me=b(L.stencilBuffer,ye),We=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=yt(L);vt(L)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,me,L.width,L.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,me,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,me,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,O)}else{const _e=L.textures;for(let ye=0;ye<_e.length;ye++){const me=_e[ye],We=a.convert(me.format,me.colorSpace),Ce=a.convert(me.type),ke=w(me.internalFormat,We,Ce,me.colorSpace),mt=yt(L);ae&&vt(L)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,ke,L.width,L.height):vt(L)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,ke,L.width,L.height):r.renderbufferStorage(r.RENDERBUFFER,ke,L.width,L.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(O,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=n.get(L.depthTexture);_e.__renderTarget=L,(!_e.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),te(L.depthTexture,0);const ye=_e.__webglTexture,me=yt(L);if(L.depthTexture.format===Eo)vt(L)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(L.depthTexture.format===Po)vt(L)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ie(O){const L=n.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==O.depthTexture){const _e=O.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),_e){const ye=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),L.__depthDisposeCallback=ye}L.__boundDepthTexture=_e}if(O.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ae(L.__webglFramebuffer,O)}else if(ae){L.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer[_e]),L.__webglDepthbuffer[_e]===void 0)L.__webglDepthbuffer[_e]=r.createRenderbuffer(),pe(L.__webglDepthbuffer[_e],O,!1);else{const ye=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=L.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,me)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=r.createRenderbuffer(),pe(L.__webglDepthbuffer,O,!1);else{const _e=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=L.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(O,L,ae){const _e=n.get(O);L!==void 0&&ve(_e.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&Ie(O)}function Lt(O){const L=O.texture,ae=n.get(O),_e=n.get(L);O.addEventListener("dispose",F);const ye=O.textures,me=O.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=L.version,l.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(L.mipmaps&&L.mipmaps.length>0){ae.__webglFramebuffer[Ce]=[];for(let ke=0;ke<L.mipmaps.length;ke++)ae.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else ae.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ce=0;Ce<L.mipmaps.length;Ce++)ae.__webglFramebuffer[Ce]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ce=0,ke=ye.length;Ce<ke;Ce++){const mt=n.get(ye[Ce]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),l.memory.textures++)}if(O.samples>0&&vt(O)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const ke=ye[Ce];ae.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]);const mt=a.convert(ke.format,ke.colorSpace),we=a.convert(ke.type),ze=w(ke.internalFormat,mt,we,ke.colorSpace,O.isXRRenderTarget===!0),Qe=yt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,ze,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(ae.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),oe(r.TEXTURE_CUBE_MAP,L);for(let Ce=0;Ce<6;Ce++)if(L.mipmaps&&L.mipmaps.length>0)for(let ke=0;ke<L.mipmaps.length;ke++)ve(ae.__webglFramebuffer[Ce][ke],O,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else ve(ae.__webglFramebuffer[Ce],O,L,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(L)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,ke=ye.length;Ce<ke;Ce++){const mt=ye[Ce],we=n.get(mt);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),oe(r.TEXTURE_2D,mt),ve(ae.__webglFramebuffer,O,mt,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(mt)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),oe(Ce,L),L.mipmaps&&L.mipmaps.length>0)for(let ke=0;ke<L.mipmaps.length;ke++)ve(ae.__webglFramebuffer[ke],O,L,r.COLOR_ATTACHMENT0,Ce,ke);else ve(ae.__webglFramebuffer,O,L,r.COLOR_ATTACHMENT0,Ce,0);y(L)&&x(Ce),t.unbindTexture()}O.depthBuffer&&Ie(O)}function pt(O){const L=O.textures;for(let ae=0,_e=L.length;ae<_e;ae++){const ye=L[ae];if(y(ye)){const me=R(O),We=n.get(ye).__webglTexture;t.bindTexture(me,We),x(me),t.unbindTexture()}}}const It=[],W=[];function Fn(O){if(O.samples>0){if(vt(O)===!1){const L=O.textures,ae=O.width,_e=O.height;let ye=r.COLOR_BUFFER_BIT;const me=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=n.get(O),Ce=L.length>1;if(Ce)for(let ke=0;ke<L.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ke=0;ke<L.length;ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const mt=n.get(L[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,ae,_e,0,0,ae,_e,ye,r.NEAREST),d===!0&&(It.length=0,W.length=0,It.push(r.COLOR_ATTACHMENT0+ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(It.push(me),W.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<L.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const mt=n.get(L[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,mt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const L=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[L])}}}function yt(O){return Math.min(s.maxSamples,O.samples)}function vt(O){const L=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Ye(O){const L=l.render.frame;p.get(O)!==L&&(p.set(O,L),O.update())}function Nt(O,L){const ae=O.colorSpace,_e=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Lo&&ae!==Gr&&(ft.getTransfer(ae)===kt?(_e!==gi||ye!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),L}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(f.width=O.naturalWidth||O.width,f.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(f.width=O.displayWidth,f.height=O.displayHeight):(f.width=O.width,f.height=O.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=te,this.setTexture2DArray=Q,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=qe,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Fn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=vt}function qC(r,e){function t(n,s=Gr){let a;const l=ft.getTransfer(s);if(n===dr)return r.UNSIGNED_BYTE;if(n===Gf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===s_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===i_)return r.BYTE;if(n===r_)return r.SHORT;if(n===Na)return r.UNSIGNED_SHORT;if(n===Hf)return r.INT;if(n===Es)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===Xa)return r.HALF_FLOAT;if(n===o_)return r.ALPHA;if(n===a_)return r.RGB;if(n===gi)return r.RGBA;if(n===l_)return r.LUMINANCE;if(n===c_)return r.LUMINANCE_ALPHA;if(n===Eo)return r.DEPTH_COMPONENT;if(n===Po)return r.DEPTH_STENCIL;if(n===u_)return r.RED;if(n===jf)return r.RED_INTEGER;if(n===d_)return r.RG;if(n===Xf)return r.RG_INTEGER;if(n===$f)return r.RGBA_INTEGER;if(n===kc||n===Oc||n===Bc||n===zc)if(l===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===kc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===kc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jh||n===Qh||n===ef||n===tf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ef)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nf||n===rf||n===sf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===nf||n===rf)return l===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===sf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===of||n===af||n===lf||n===cf||n===uf||n===df||n===hf||n===ff||n===pf||n===mf||n===gf||n===vf||n===_f||n===xf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===of)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===af)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===df)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ff)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_f)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xf)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vc||n===yf||n===Sf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vc)return l===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===h_||n===Mf||n===Ef||n===wf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Vc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Mf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ef)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ro?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const KC={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),x=this._getHandJoint(f,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,M=.005;f.inputState.pinching&&m>_+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(KC)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ZC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Tn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $r({vertexShader:ZC,fragmentShader:JC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eR extends bs{constructor(e,t){super();const n=this;let s=null,a=1,l=null,u="local-floor",d=1,f=null,p=null,g=null,m=null,_=null,M=null;const E=new QC,y=t.getContextAttributes();let x=null,R=null;const w=[],b=[],k=new nt;let N=null;const F=new wn;F.viewport=new Mt;const I=new wn;I.viewport=new Mt;const C=[F,I],T=new uw;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=w[re];return he===void 0&&(he=new Rh,w[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=w[re];return he===void 0&&(he=new Rh,w[re]=he),he.getGripSpace()},this.getHand=function(re){let he=w[re];return he===void 0&&(he=new Rh,w[re]=he),he.getHandSpace()};function K(re){const he=b.indexOf(re.inputSource);if(he===-1)return;const ve=w[he];ve!==void 0&&(ve.update(re.inputSource,re.frame,f||l),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function j(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",te);for(let re=0;re<w.length;re++){const he=b[re];he!==null&&(b[re]=null,w[re].disconnect(he))}U=null,Y=null,E.reset(),e.setRenderTarget(x),_=null,m=null,g=null,s=null,R=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(re){f=re},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",j),s.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){const he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new ws(_.framebufferWidth,_.framebufferHeight,{format:gi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let he=null,ve=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?Po:Eo,ve=y.stencil?Ro:Es);const Ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};g=new XRWebGLBinding(s,t),m=g.createProjectionLayer(Ae),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new ws(m.textureWidth,m.textureHeight,{format:gi,type:dr,depthTexture:new E_(m.textureWidth,m.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await s.requestReferenceSpace(u),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function te(re){for(let he=0;he<re.removed.length;he++){const ve=re.removed[he],pe=b.indexOf(ve);pe>=0&&(b[pe]=null,w[pe].disconnect(ve))}for(let he=0;he<re.added.length;he++){const ve=re.added[he];let pe=b.indexOf(ve);if(pe===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=b.length){b.push(ve),pe=Ie;break}else if(b[Ie]===null){b[Ie]=ve,pe=Ie;break}if(pe===-1)break}const Ae=w[pe];Ae&&Ae.connect(ve)}}const Q=new H,ie=new H;function V(re,he,ve){Q.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const pe=Q.distanceTo(ie),Ae=he.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,qe=Ae[14]/(Ae[10]-1),Lt=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],W=(Ae[8]-1)/Ae[0],Fn=(Ie[8]+1)/Ie[0],yt=qe*W,vt=qe*Fn,Ye=pe/(-W+Fn),Nt=Ye*-W;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(Ye),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ae[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=qe+Ye,O=Lt+Ye,L=yt-Nt,ae=vt+(pe-Nt),_e=pt*Lt/O*Xe,ye=It*Lt/O*Xe;re.projectionMatrix.makePerspective(L,ae,_e,ye,Xe,O),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ee(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let he=re.near,ve=re.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(ve=E.depthFar)),T.near=I.near=F.near=he,T.far=I.far=F.far=ve,(U!==T.near||Y!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,Y=T.far),F.layers.mask=re.layers.mask|2,I.layers.mask=re.layers.mask|4,T.layers.mask=F.layers.mask|I.layers.mask;const pe=re.parent,Ae=T.cameras;ee(T,pe);for(let Ie=0;Ie<Ae.length;Ie++)ee(Ae[Ie],pe);Ae.length===2?V(T,F,I):T.projectionMatrix.copy(F.projectionMatrix),le(re,T,pe)};function le(re,he,ve){ve===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(ve.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Do*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(re){d=re,m!==null&&(m.fixedFoveation=re),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=re)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let B=null;function oe(re,he){if(p=he.getViewerPose(f||l),M=he,p!==null){const ve=p.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let pe=!1;ve.length!==T.cameras.length&&(T.cameras.length=0,pe=!0);for(let Ie=0;Ie<ve.length;Ie++){const qe=ve[Ie];let Lt=null;if(_!==null)Lt=_.getViewport(qe);else{const It=g.getViewSubImage(m,qe);Lt=It.viewport,Ie===0&&(e.setRenderTargetTextures(R,It.colorTexture,m.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(R))}let pt=C[Ie];pt===void 0&&(pt=new wn,pt.layers.enable(Ie),pt.viewport=new Mt,C[Ie]=pt),pt.matrix.fromArray(qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ie===0&&(T.matrix.copy(pt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),pe===!0&&T.cameras.push(pt)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=g.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,s.renderState)}}for(let ve=0;ve<w.length;ve++){const pe=b[ve],Ae=w[ve];pe!==null&&Ae!==void 0&&Ae.update(pe,he,f||l)}B&&B(re,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),M=null}const be=new U_;be.setAnimationLoop(oe),this.setAnimationLoop=function(re){B=re},this.dispose=function(){}}}const _s=new dn,tR=new Ke;function nR(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,y_(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,R,w,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),g(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),m(y,x),x.isMeshPhysicalMaterial&&_(y,x,b)):x.isMeshMatcapMaterial?(a(y,x),M(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),E(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?d(y,x,R,w):x.isSpriteMaterial?f(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=e.get(x),w=R.envMap,b=R.envMapRotation;w&&(y.envMap.value=w,_s.copy(b),_s.x*=-1,_s.y*=-1,_s.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(tR.makeRotationFromEuler(_s)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,R,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=w*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function m(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function _(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iR(r,e,t,n){let s={},a={},l=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,w){const b=w.program;n.uniformBlockBinding(R,b)}function f(R,w){let b=s[R.id];b===void 0&&(M(R),b=p(R),s[R.id]=b,R.addEventListener("dispose",y));const k=w.program;n.updateUBOMapping(R,k);const N=e.render.frame;a[R.id]!==N&&(m(R),a[R.id]=N)}function p(R){const w=g();R.__bindingPointIndex=w;const b=r.createBuffer(),k=R.__size,N=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,k,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function g(){for(let R=0;R<u;R++)if(l.indexOf(R)===-1)return l.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const w=s[R.id],b=R.uniforms,k=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let N=0,F=b.length;N<F;N++){const I=Array.isArray(b[N])?b[N]:[b[N]];for(let C=0,T=I.length;C<T;C++){const U=I[C];if(_(U,N,C,k)===!0){const Y=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let te=0;te<K.length;te++){const Q=K[te],ie=E(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,Y+j,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(R,w,b,k){const N=R.value,F=w+"_"+b;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const I=k[F];if(typeof N=="number"||typeof N=="boolean"){if(I!==N)return k[F]=N,!0}else if(I.equals(N)===!1)return I.copy(N),!0}return!1}function M(R){const w=R.uniforms;let b=0;const k=16;for(let F=0,I=w.length;F<I;F++){const C=Array.isArray(w[F])?w[F]:[w[F]];for(let T=0,U=C.length;T<U;T++){const Y=C[T],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let j=0,te=K.length;j<te;j++){const Q=K[j],ie=E(Q),V=b%k,ee=V%ie.boundary,le=V+ee;b+=ee,le!==0&&k-le<ie.storage&&(b+=k-le),Y.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=ie.storage}}}const N=b%k;return N>0&&(b+=k-N),R.__size=b,R.__cache={},this}function E(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function y(R){const w=R.target;w.removeEventListener("dispose",y);const b=l.indexOf(w.__bindingPointIndex);l.splice(b,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function x(){for(const R in s)r.deleteBuffer(s[R]);l=[],s={},a={}}return{bind:d,update:f,dispose:x}}class up{constructor(e={}){const{canvas:t=XE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=l;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=jr,this.toneMappingExposure=1;const b=this;let k=!1,N=0,F=0,I=null,C=-1,T=null;const U=new Mt,Y=new Mt;let K=null;const j=new Ze(0);let te=0,Q=t.width,ie=t.height,V=1,ee=null,le=null;const B=new Mt(0,0,Q,ie),oe=new Mt(0,0,Q,ie);let be=!1;const re=new Jf;let he=!1,ve=!1;const pe=new Ke,Ae=new Ke,Ie=new H,qe=new Mt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function It(){return I===null?V:1}let W=n;function Fn(D,Z){return t.getContext(D,Z)}try{const D={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),W===null){const Z="webgl2";if(W=Fn(Z,D),W===null)throw Fn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let yt,vt,Ye,Nt,Xe,O,L,ae,_e,ye,me,We,Ce,ke,mt,we,ze,Qe,it,Ve,_t,at,Dt,q;function Re(){yt=new fA(W),yt.init(),at=new qC(W,yt),vt=new aA(W,yt,e,at),Ye=new $C(W,yt),vt.reverseDepthBuffer&&m&&Ye.buffers.depth.setReversed(!0),Nt=new gA(W),Xe=new NC,O=new YC(W,yt,Ye,Xe,vt,at,Nt),L=new cA(b),ae=new hA(b),_e=new Ew(W),Dt=new sA(W,_e),ye=new pA(W,_e,Nt,Dt),me=new _A(W,ye,_e,Nt),it=new vA(W,vt,O),we=new lA(Xe),We=new IC(b,L,ae,yt,vt,Dt,we),Ce=new nR(b,Xe),ke=new UC,mt=new HC(yt),Qe=new rA(b,L,ae,Ye,me,_,d),ze=new jC(b,me,vt),q=new iR(W,Nt,vt,Ye),Ve=new oA(W,yt,Nt),_t=new mA(W,yt,Nt),Nt.programs=We.programs,b.capabilities=vt,b.extensions=yt,b.properties=Xe,b.renderLists=ke,b.shadowMap=ze,b.state=Ye,b.info=Nt}Re();const fe=new eR(b,W);this.xr=fe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const D=yt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=yt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(Q,ie,!1))},this.getSize=function(D){return D.set(Q,ie)},this.setSize=function(D,Z,ue=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=D,ie=Z,t.width=Math.floor(D*V),t.height=Math.floor(Z*V),ue===!0&&(t.style.width=D+"px",t.style.height=Z+"px"),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(Q*V,ie*V).floor()},this.setDrawingBufferSize=function(D,Z,ue){Q=D,ie=Z,V=ue,t.width=Math.floor(D*ue),t.height=Math.floor(Z*ue),this.setViewport(0,0,D,Z)},this.getCurrentViewport=function(D){return D.copy(U)},this.getViewport=function(D){return D.copy(B)},this.setViewport=function(D,Z,ue,de){D.isVector4?B.set(D.x,D.y,D.z,D.w):B.set(D,Z,ue,de),Ye.viewport(U.copy(B).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(oe)},this.setScissor=function(D,Z,ue,de){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,Z,ue,de),Ye.scissor(Y.copy(oe).multiplyScalar(V).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(D){Ye.setScissorTest(be=D)},this.setOpaqueSort=function(D){ee=D},this.setTransparentSort=function(D){le=D},this.getClearColor=function(D){return D.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(D=!0,Z=!0,ue=!0){let de=0;if(D){let X=!1;if(I!==null){const Ee=I.texture.format;X=Ee===$f||Ee===Xf||Ee===jf}if(X){const Ee=I.texture.type,Pe=Ee===dr||Ee===Es||Ee===Na||Ee===Ro||Ee===Gf||Ee===Wf,Ue=Qe.getClearColor(),Oe=Qe.getClearAlpha(),rt=Ue.r,st=Ue.g,$e=Ue.b;Pe?(M[0]=rt,M[1]=st,M[2]=$e,M[3]=Oe,W.clearBufferuiv(W.COLOR,0,M)):(E[0]=rt,E[1]=st,E[2]=$e,E[3]=Oe,W.clearBufferiv(W.COLOR,0,E))}else de|=W.COLOR_BUFFER_BIT}Z&&(de|=W.DEPTH_BUFFER_BIT),ue&&(de|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Qe.dispose(),ke.dispose(),mt.dispose(),Xe.dispose(),L.dispose(),ae.dispose(),me.dispose(),Dt.dispose(),q.dispose(),We.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Cs),fe.removeEventListener("sessionend",pr),Hi.stop()};function ge(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const D=Nt.autoReset,Z=ze.enabled,ue=ze.autoUpdate,de=ze.needsUpdate,X=ze.type;Re(),Nt.autoReset=D,ze.enabled=Z,ze.autoUpdate=ue,ze.needsUpdate=de,ze.type=X}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const Z=D.target;Z.removeEventListener("dispose",lt),Ht(Z)}function Ht(D){an(D),Xe.remove(D)}function an(D){const Z=Xe.get(D).programs;Z!==void 0&&(Z.forEach(function(ue){We.releaseProgram(ue)}),D.isShaderMaterial&&We.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ue,de,X,Ee){Z===null&&(Z=Lt);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Qa(D,Z,ue,de,X);Ye.setMaterial(de,Pe);let Oe=ue.index,rt=1;if(de.wireframe===!0){if(Oe=ye.getWireframeAttribute(ue),Oe===void 0)return;rt=2}const st=ue.drawRange,$e=ue.attributes.position;let ct=st.start*rt,At=(st.start+st.count)*rt;Ee!==null&&(ct=Math.max(ct,Ee.start*rt),At=Math.min(At,(Ee.start+Ee.count)*rt)),Oe!==null?(ct=Math.max(ct,0),At=Math.min(At,Oe.count)):$e!=null&&(ct=Math.max(ct,0),At=Math.min(At,$e.count));const Ct=At-ct;if(Ct<0||Ct===1/0)return;Dt.setup(X,de,Ue,ue,Oe);let $t,wt=Ve;if(Oe!==null&&($t=_e.get(Oe),wt=_t,wt.setIndex($t)),X.isMesh)de.wireframe===!0?(Ye.setLineWidth(de.wireframeLinewidth*It()),wt.setMode(W.LINES)):wt.setMode(W.TRIANGLES);else if(X.isLine){let Je=de.linewidth;Je===void 0&&(Je=1),Ye.setLineWidth(Je*It()),X.isLineSegments?wt.setMode(W.LINES):X.isLineLoop?wt.setMode(W.LINE_LOOP):wt.setMode(W.LINE_STRIP)}else X.isPoints?wt.setMode(W.POINTS):X.isSprite&&wt.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)wt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,Qt=X._multiDrawCounts,Et=X._multiDrawCount,Sn=Oe?_e.get(Oe).bytesPerElement:1,vi=Xe.get(de).currentProgram.getUniforms();for(let kn=0;kn<Et;kn++)vi.setValue(W,"_gl_DrawID",kn),wt.render(Je[kn]/Sn,Qt[kn])}else if(X.isInstancedMesh)wt.renderInstances(ct,Ct,X.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Qt=Math.min(ue.instanceCount,Je);wt.renderInstances(ct,Ct,Qt)}else wt.render(ct,Ct)};function Tt(D,Z,ue){D.transparent===!0&&D.side===sr&&D.forceSinglePass===!1?(D.side=Jn,D.needsUpdate=!0,Rs(D,Z,ue),D.side=Xr,D.needsUpdate=!0,Rs(D,Z,ue),D.side=sr):Rs(D,Z,ue)}this.compile=function(D,Z,ue=null){ue===null&&(ue=D),x=mt.get(ue),x.init(Z),w.push(x),ue.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),D!==ue&&D.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const de=new Set;return D.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ue=Ee[Pe];Tt(Ue,ue,X),de.add(Ue)}else Tt(Ee,ue,X),de.add(Ee)}),w.pop(),x=null,de},this.compileAsync=function(D,Z,ue=null){const de=this.compile(D,Z,ue);return new Promise(X=>{function Ee(){if(de.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&de.delete(Pe)}),de.size===0){X(D);return}setTimeout(Ee,10)}yt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Wn=null;function Un(D){Wn&&Wn(D)}function Cs(){Hi.stop()}function pr(){Hi.start()}const Hi=new U_;Hi.setAnimationLoop(Un),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(D){Wn=D,fe.setAnimationLoop(D),D===null?Hi.stop():Hi.start()},fe.addEventListener("sessionstart",Cs),fe.addEventListener("sessionend",pr),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Z),Z=fe.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,Z,I),x=mt.get(D,w.length),x.init(Z),w.push(x),Ae.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),re.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,he=we.init(this.clippingPlanes,ve),y=ke.get(D,R.length),y.init(),R.push(y),fe.enabled===!0&&fe.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Gi(Ee,Z,-1/0,b.sortObjects)}Gi(D,Z,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ee,le),pt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,pt&&Qe.addToRenderList(y,D),this.info.render.frame++,he===!0&&we.beginShadows();const ue=x.state.shadowsArray;ze.render(ue,D,Z),he===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=y.opaque,X=y.transmissive;if(x.setupLights(),Z.isArrayCamera){const Ee=Z.cameras;if(X.length>0)for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Oe=Ee[Pe];Jr(de,X,D,Oe)}pt&&Qe.render(D);for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Oe=Ee[Pe];Zr(y,D,Oe,Oe.viewport)}}else X.length>0&&Jr(de,X,D,Z),pt&&Qe.render(D),Zr(y,D,Z);I!==null&&(O.updateMultisampleRenderTarget(I),O.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(b,D,Z),Dt.resetDefaultState(),C=-1,T=null,w.pop(),w.length>0?(x=w[w.length-1],he===!0&&we.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Gi(D,Z,ue,de){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||re.intersectsSprite(D)){de&&qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ae);const Pe=me.update(D),Ue=D.material;Ue.visible&&y.push(D,Pe,Ue,ue,qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||re.intersectsObject(D))){const Pe=me.update(D),Ue=D.material;if(de&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),qe.copy(D.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),qe.copy(Pe.boundingSphere.center)),qe.applyMatrix4(D.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ue)){const Oe=Pe.groups;for(let rt=0,st=Oe.length;rt<st;rt++){const $e=Oe[rt],ct=Ue[$e.materialIndex];ct&&ct.visible&&y.push(D,Pe,ct,ue,qe.z,$e)}}else Ue.visible&&y.push(D,Pe,Ue,ue,qe.z,null)}}const Ee=D.children;for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++)Gi(Ee[Pe],Z,ue,de)}function Zr(D,Z,ue,de){const X=D.opaque,Ee=D.transmissive,Pe=D.transparent;x.setupLightsView(ue),he===!0&&we.setGlobalState(b.clippingPlanes,ue),de&&Ye.viewport(U.copy(de)),X.length>0&&mr(X,Z,ue),Ee.length>0&&mr(Ee,Z,ue),Pe.length>0&&mr(Pe,Z,ue),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Jr(D,Z,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[de.id]===void 0&&(x.state.transmissionRenderTarget[de.id]=new ws(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Xa:dr,minFilter:Ms,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[de.id],Pe=de.viewport||U;Ee.setSize(Pe.z,Pe.w);const Ue=b.getRenderTarget();b.setRenderTarget(Ee),b.getClearColor(j),te=b.getClearAlpha(),te<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Qe.render(ue);const Oe=b.toneMapping;b.toneMapping=jr;const rt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),x.setupLightsView(de),he===!0&&we.setGlobalState(b.clippingPlanes,de),mr(D,ue,de),O.updateMultisampleRenderTarget(Ee),O.updateRenderTargetMipmap(Ee),yt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let $e=0,ct=Z.length;$e<ct;$e++){const At=Z[$e],Ct=At.object,$t=At.geometry,wt=At.material,Je=At.group;if(wt.side===sr&&Ct.layers.test(de.layers)){const Qt=wt.side;wt.side=Jn,wt.needsUpdate=!0,Za(Ct,ue,de,$t,wt,Je),wt.side=Qt,wt.needsUpdate=!0,st=!0}}st===!0&&(O.updateMultisampleRenderTarget(Ee),O.updateRenderTargetMipmap(Ee))}b.setRenderTarget(Ue),b.setClearColor(j,te),rt!==void 0&&(de.viewport=rt),b.toneMapping=Oe}function mr(D,Z,ue){const de=Z.isScene===!0?Z.overrideMaterial:null;for(let X=0,Ee=D.length;X<Ee;X++){const Pe=D[X],Ue=Pe.object,Oe=Pe.geometry,rt=de===null?Pe.material:de,st=Pe.group;Ue.layers.test(ue.layers)&&Za(Ue,Z,ue,Oe,rt,st)}}function Za(D,Z,ue,de,X,Ee){D.onBeforeRender(b,Z,ue,de,X,Ee),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),X.onBeforeRender(b,Z,ue,de,D,Ee),X.transparent===!0&&X.side===sr&&X.forceSinglePass===!1?(X.side=Jn,X.needsUpdate=!0,b.renderBufferDirect(ue,Z,de,X,D,Ee),X.side=Xr,X.needsUpdate=!0,b.renderBufferDirect(ue,Z,de,X,D,Ee),X.side=sr):b.renderBufferDirect(ue,Z,de,X,D,Ee),D.onAfterRender(b,Z,ue,de,X,Ee)}function Rs(D,Z,ue){Z.isScene!==!0&&(Z=Lt);const de=Xe.get(D),X=x.state.lights,Ee=x.state.shadowsArray,Pe=X.state.version,Ue=We.getParameters(D,X.state,Ee,Z,ue),Oe=We.getProgramCacheKey(Ue);let rt=de.programs;de.environment=D.isMeshStandardMaterial?Z.environment:null,de.fog=Z.fog,de.envMap=(D.isMeshStandardMaterial?ae:L).get(D.envMap||de.environment),de.envMapRotation=de.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,rt===void 0&&(D.addEventListener("dispose",lt),rt=new Map,de.programs=rt);let st=rt.get(Oe);if(st!==void 0){if(de.currentProgram===st&&de.lightsStateVersion===Pe)return Pi(D,Ue),st}else Ue.uniforms=We.getUniforms(D),D.onBeforeCompile(Ue,b),st=We.acquireProgram(Ue,Oe),rt.set(Oe,st),de.uniforms=Ue.uniforms;const $e=de.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($e.clippingPlanes=we.uniform),Pi(D,Ue),de.needsLights=hu(D),de.lightsStateVersion=Pe,de.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),de.currentProgram=st,de.uniformsList=null,st}function Ja(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=Hc.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function Pi(D,Z){const ue=Xe.get(D);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function Qa(D,Z,ue,de,X){Z.isScene!==!0&&(Z=Lt),O.resetTextureUnits();const Ee=Z.fog,Pe=de.isMeshStandardMaterial?Z.environment:null,Ue=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Lo,Oe=(de.isMeshStandardMaterial?ae:L).get(de.envMap||Pe),rt=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,st=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),$e=!!ue.morphAttributes.position,ct=!!ue.morphAttributes.normal,At=!!ue.morphAttributes.color;let Ct=jr;de.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ct=b.toneMapping);const $t=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,wt=$t!==void 0?$t.length:0,Je=Xe.get(de),Qt=x.state.lights;if(he===!0&&(ve===!0||D!==T)){const tn=D===T&&de.id===C;we.setState(de,D,tn)}let Et=!1;de.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Qt.state.version||Je.outputColorSpace!==Ue||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==Oe||de.fog===!0&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==st||Je.morphTargets!==$e||Je.morphNormals!==ct||Je.morphColors!==At||Je.toneMapping!==Ct||Je.morphTargetsCount!==wt)&&(Et=!0):(Et=!0,Je.__version=de.version);let Sn=Je.currentProgram;Et===!0&&(Sn=Rs(de,Z,X));let vi=!1,kn=!1,Qr=!1;const Ut=Sn.getUniforms(),On=Je.uniforms;if(Ye.useProgram(Sn.program)&&(vi=!0,kn=!0,Qr=!0),de.id!==C&&(C=de.id,kn=!0),vi||T!==D){Ye.buffers.depth.getReversed()?(pe.copy(D.projectionMatrix),YE(pe),qE(pe),Ut.setValue(W,"projectionMatrix",pe)):Ut.setValue(W,"projectionMatrix",D.projectionMatrix),Ut.setValue(W,"viewMatrix",D.matrixWorldInverse);const An=Ut.map.cameraPosition;An!==void 0&&An.setValue(W,Ie.setFromMatrixPosition(D.matrixWorld)),vt.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",D.isOrthographicCamera===!0),T!==D&&(T=D,kn=!0,Qr=!0)}if(X.isSkinnedMesh){Ut.setOptional(W,X,"bindMatrix"),Ut.setOptional(W,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ut.setValue(W,"boneTexture",tn.boneTexture,O))}X.isBatchedMesh&&(Ut.setOptional(W,X,"batchingTexture"),Ut.setValue(W,"batchingTexture",X._matricesTexture,O),Ut.setOptional(W,X,"batchingIdTexture"),Ut.setValue(W,"batchingIdTexture",X._indirectTexture,O),Ut.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(W,"batchingColorTexture",X._colorsTexture,O));const bn=ue.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&it.update(X,ue,Sn),(kn||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,Ut.setValue(W,"receiveShadow",X.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(On.envMap.value=Oe,On.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Z.environment!==null&&(On.envMapIntensity.value=Z.environmentIntensity),kn&&(Ut.setValue(W,"toneMappingExposure",b.toneMappingExposure),Je.needsLights&&el(On,Qr),Ee&&de.fog===!0&&Ce.refreshFogUniforms(On,Ee),Ce.refreshMaterialUniforms(On,de,V,ie,x.state.transmissionRenderTarget[D.id]),Hc.upload(W,Ja(Je),On,O)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Hc.upload(W,Ja(Je),On,O),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ut.setValue(W,"center",X.center),Ut.setValue(W,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(W,"normalMatrix",X.normalMatrix),Ut.setValue(W,"modelMatrix",X.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const tn=de.uniformsGroups;for(let An=0,es=tn.length;An<es;An++){const St=tn[An];q.update(St,Sn),q.bind(St,Sn)}}return Sn}function el(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function hu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,Z,ue){Xe.get(D.texture).__webglTexture=Z,Xe.get(D.depthTexture).__webglTexture=ue;const de=Xe.get(D);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Z){const ue=Xe.get(D);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(D,Z=0,ue=0){I=D,N=Z,F=ue;let de=!0,X=null,Ee=!1,Pe=!1;if(D){const Oe=Xe.get(D);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(W.FRAMEBUFFER,null),de=!1;else if(Oe.__webglFramebuffer===void 0)O.setupRenderTarget(D);else if(Oe.__hasExternalTextures)O.rebindTextures(D,Xe.get(D.texture).__webglTexture,Xe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $e=D.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&Xe.has($e)&&(D.width!==$e.image.width||D.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(D)}}const rt=D.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Pe=!0);const st=Xe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(st[Z])?X=st[Z][ue]:X=st[Z],Ee=!0):D.samples>0&&O.useMultisampledRTT(D)===!1?X=Xe.get(D).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[ue]:X=st,U.copy(D.viewport),Y.copy(D.scissor),K=D.scissorTest}else U.copy(B).multiplyScalar(V).floor(),Y.copy(oe).multiplyScalar(V).floor(),K=be;if(Ye.bindFramebuffer(W.FRAMEBUFFER,X)&&de&&Ye.drawBuffers(D,X),Ye.viewport(U),Ye.scissor(Y),Ye.setScissorTest(K),Ee){const Oe=Xe.get(D.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,ue)}else if(Pe){const Oe=Xe.get(D.texture),rt=Z||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Oe.__webglTexture,ue||0,rt)}C=-1},this.readRenderTargetPixels=function(D,Z,ue,de,X,Ee,Pe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){Ye.bindFramebuffer(W.FRAMEBUFFER,Ue);try{const Oe=D.texture,rt=Oe.format,st=Oe.type;if(!vt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-de&&ue>=0&&ue<=D.height-X&&W.readPixels(Z,ue,de,X,at.convert(rt),at.convert(st),Ee)}finally{const Oe=I!==null?Xe.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(D,Z,ue,de,X,Ee,Pe){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){const Oe=D.texture,rt=Oe.format,st=Oe.type;if(!vt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=D.width-de&&ue>=0&&ue<=D.height-X){Ye.bindFramebuffer(W.FRAMEBUFFER,Ue);const $e=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,$e),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(Z,ue,de,X,at.convert(rt),at.convert(st),0);const ct=I!==null?Xe.get(I).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,ct);const At=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await $E(W,At,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,$e),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.deleteBuffer($e),W.deleteSync(At),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,Z=null,ue=0){D.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,D=arguments[1]);const de=Math.pow(2,-ue),X=Math.floor(D.image.width*de),Ee=Math.floor(D.image.height*de),Pe=Z!==null?Z.x:0,Ue=Z!==null?Z.y:0;O.setTexture2D(D,0),W.copyTexSubImage2D(W.TEXTURE_2D,ue,0,0,Pe,Ue,X,Ee),Ye.unbindTexture()};const tl=W.createFramebuffer(),nl=W.createFramebuffer();this.copyTextureToTexture=function(D,Z,ue=null,de=null,X=0,Ee=null){D.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,D=arguments[1],Z=arguments[2],Ee=arguments[3]||0,ue=null),Ee===null&&(X!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Pe,Ue,Oe,rt,st,$e,ct,At,Ct;const $t=D.isCompressedTexture?D.mipmaps[Ee]:D.image;if(ue!==null)Pe=ue.max.x-ue.min.x,Ue=ue.max.y-ue.min.y,Oe=ue.isBox3?ue.max.z-ue.min.z:1,rt=ue.min.x,st=ue.min.y,$e=ue.isBox3?ue.min.z:0;else{const bn=Math.pow(2,-X);Pe=Math.floor($t.width*bn),Ue=Math.floor($t.height*bn),D.isDataArrayTexture?Oe=$t.depth:D.isData3DTexture?Oe=Math.floor($t.depth*bn):Oe=1,rt=0,st=0,$e=0}de!==null?(ct=de.x,At=de.y,Ct=de.z):(ct=0,At=0,Ct=0);const wt=at.convert(Z.format),Je=at.convert(Z.type);let Qt;Z.isData3DTexture?(O.setTexture3D(Z,0),Qt=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(O.setTexture2DArray(Z,0),Qt=W.TEXTURE_2D_ARRAY):(O.setTexture2D(Z,0),Qt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const Et=W.getParameter(W.UNPACK_ROW_LENGTH),Sn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),vi=W.getParameter(W.UNPACK_SKIP_PIXELS),kn=W.getParameter(W.UNPACK_SKIP_ROWS),Qr=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,$t.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,$t.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,rt),W.pixelStorei(W.UNPACK_SKIP_ROWS,st),W.pixelStorei(W.UNPACK_SKIP_IMAGES,$e);const Ut=D.isDataArrayTexture||D.isData3DTexture,On=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const bn=Xe.get(D),tn=Xe.get(Z),An=Xe.get(bn.__renderTarget),es=Xe.get(tn.__renderTarget);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,An.__webglFramebuffer),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let St=0;St<Oe;St++)Ut&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xe.get(D).__webglTexture,X,$e+St),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xe.get(Z).__webglTexture,Ee,Ct+St)),W.blitFramebuffer(rt,st,Pe,Ue,ct,At,Pe,Ue,W.DEPTH_BUFFER_BIT,W.NEAREST);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(X!==0||D.isRenderTargetTexture||Xe.has(D)){const bn=Xe.get(D),tn=Xe.get(Z);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,tl),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,nl);for(let An=0;An<Oe;An++)Ut?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,bn.__webglTexture,X,$e+An):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,bn.__webglTexture,X),On?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tn.__webglTexture,Ee,Ct+An):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,tn.__webglTexture,Ee),X!==0?W.blitFramebuffer(rt,st,Pe,Ue,ct,At,Pe,Ue,W.COLOR_BUFFER_BIT,W.NEAREST):On?W.copyTexSubImage3D(Qt,Ee,ct,At,Ct+An,rt,st,Pe,Ue):W.copyTexSubImage2D(Qt,Ee,ct,At,rt,st,Pe,Ue);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else On?D.isDataTexture||D.isData3DTexture?W.texSubImage3D(Qt,Ee,ct,At,Ct,Pe,Ue,Oe,wt,Je,$t.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Qt,Ee,ct,At,Ct,Pe,Ue,Oe,wt,$t.data):W.texSubImage3D(Qt,Ee,ct,At,Ct,Pe,Ue,Oe,wt,Je,$t):D.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,ct,At,Pe,Ue,wt,Je,$t.data):D.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,ct,At,$t.width,$t.height,wt,$t.data):W.texSubImage2D(W.TEXTURE_2D,Ee,ct,At,Pe,Ue,wt,Je,$t);W.pixelStorei(W.UNPACK_ROW_LENGTH,Et),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Sn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,vi),W.pixelStorei(W.UNPACK_SKIP_ROWS,kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qr),Ee===0&&Z.generateMipmaps&&W.generateMipmap(Qt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(D,Z,ue=null,de=null,X=0){return D.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,D=arguments[2],Z=arguments[3],X=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,Z,ue,de,X)},this.initRenderTarget=function(D){Xe.get(D).__webglFramebuffer===void 0&&O.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?O.setTextureCube(D,0):D.isData3DTexture?O.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?O.setTexture2DArray(D,0):O.setTexture2D(D,0),Ye.unbindTexture()},this.resetState=function(){N=0,F=0,I=null,Ye.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}class rR{constructor(e,t=" .:-=+*#%@",n={}){const s=n.resolution||.15,a=n.scale||1,l=n.color||!1,u=n.alpha||!1,d=n.block||!1,f=n.invert||!1,p=n.strResolution||"low";let g,m;const _=document.createElement("div");_.style.cursor="default";const M=document.createElement("table");_.appendChild(M);let E,y,x;this.setSize=function(j,te){g=j,m=te,e.setSize(j,te),R()},this.render=function(j,te){e.render(j,te),K(M)},this.domElement=_;function R(){E=Math.floor(g*s),y=Math.floor(m*s),F.width=E,F.height=y,x=e.domElement,x.style.backgroundColor&&(M.rows[0].cells[0].style.backgroundColor=x.style.backgroundColor,M.rows[0].cells[0].style.color=x.style.color),M.cellSpacing=0,M.cellPadding=0;const j=M.style;j.whiteSpace="pre",j.margin="0px",j.padding="0px",j.letterSpacing=Y+"px",j.fontFamily=k,j.fontSize=T+"px",j.lineHeight=U+"px",j.textAlign="left",j.textDecoration="none"}const w=" .,:;i1tfLCG08@".split(""),b=" CGO08@".split(""),k="courier new, monospace",N=e.domElement,F=document.createElement("canvas");if(!F.getContext)return;const I=F.getContext("2d");if(!I.getImageData)return;let C=l?b:w;t&&(C=t);const T=2/s*a,U=2/s*a;let Y=0;if(p=="low")switch(a){case 1:Y=-1;break;case 2:case 3:Y=-2.1;break;case 4:Y=-3.1;break;case 5:Y=-4.15;break}if(p=="medium")switch(a){case 1:Y=0;break;case 2:Y=-1;break;case 3:Y=-1.04;break;case 4:case 5:Y=-2.1;break}if(p=="high")switch(a){case 1:case 2:Y=0;break;case 3:case 4:case 5:Y=-1;break}function K(j){I.clearRect(0,0,E,y),I.drawImage(N,0,0,E,y);const te=I.getImageData(0,0,E,y).data;let Q="";for(let ie=0;ie<y;ie+=2){for(let V=0;V<E;V++){const ee=(ie*E+V)*4,le=te[ee],B=te[ee+1],oe=te[ee+2],be=te[ee+3];let re,he;he=(.3*le+.59*B+.11*oe)/255,be==0&&(he=1),re=Math.floor((1-he)*(C.length-1)),f&&(re=C.length-re-1);let ve=C[re];(ve===void 0||ve==" ")&&(ve="&nbsp;"),l?Q+="<span style='color:rgb("+le+","+B+","+oe+");"+(d?"background-color:rgb("+le+","+B+","+oe+");":"")+(u?"opacity:"+be/255+";":"")+"'>"+ve+"</span>":Q+=ve}Q+="<br/>"}j.innerHTML=`<tr><td style="display:block;width:${g}px;height:${m}px;overflow:hidden">${Q}</td></tr>`}}}const yv={type:"change"},dp={type:"start"},V_={type:"end"},Ic=new ru,Sv=new Hr,sR=Math.cos(70*Nn.DEG2RAD),un=new H,Zn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6;class hp extends Sw{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:So.ROTATE,MIDDLE:So.DOLLY,RIGHT:So.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new yn,this._lastTargetPosition=new H,this._quat=new yn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new G0,this._sphericalDelta=new G0,this._scale=1,this._panOffset=new H,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new H,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aR.bind(this),this._onPointerDown=oR.bind(this),this._onPointerUp=lR.bind(this),this._onContextMenu=mR.bind(this),this._onMouseWheel=dR.bind(this),this._onKeyDown=hR.bind(this),this._onTouchStart=fR.bind(this),this._onTouchMove=pR.bind(this),this._onMouseDown=cR.bind(this),this._onMouseMove=uR.bind(this),this._interceptControlDown=gR.bind(this),this._interceptControlUp=vR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yv),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zn:n>Math.PI&&(n-=Zn),s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=un.length();l=this._clampDistance(u*this._scale);const d=u-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const u=new H(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),l=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Ic.origin.copy(this.object.position),Ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ic.direction))<sR?this.object.lookAt(this.target):(Sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ic.intersectPlane(Sv,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(yv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;un.copy(s).sub(this.target);let a=un.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,l=n.width,u=n.height;this._mouse.x=s/l*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function oR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function aR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function lR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(V_),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case So.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ot.DOLLY;break;case So.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ot.ROTATE}break;case So.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(dp)}function uR(r){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function dR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(r.preventDefault(),this.dispatchEvent(dp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(V_))}function hR(r){this.enabled!==!1&&this._handleKeyDown(r)}function fR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ot.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ot.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(dp)}function pR(r){switch(this._trackPointer(r),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ot.NONE}}function mR(r){this.enabled!==!1&&r.preventDefault()}function gR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _R(){const r=J.useRef(null);return J.useEffect(()=>{if(!r.current)return;const e=r.current,t=new Kf,n=new wn(75,1,.1,1e3);n.position.set(0,0,25);const s=new up;s.setSize(300,300);const a=new rR(s," .:-+*=%@#",{resolution:.15,scale:1,color:!1,alpha:!1,block:!1,invert:!0});a.setSize(300,300),a.domElement.style.color="#FFB000",a.domElement.style.backgroundColor="transparent",a.domElement.style.fontSize="10px",a.domElement.style.lineHeight="8px",a.domElement.style.letterSpacing="0px",a.domElement.style.fontFamily="monospace",a.domElement.style.fontWeight="bold";const l=new hp(n,a.domElement);l.enableDamping=!0,l.dampingFactor=.05,l.enableZoom=!0,l.enablePan=!0,l.autoRotate=!1;const u=new ip(10,4,24,48),d=new To({color:16756736,flatShading:!0,shininess:150}),f=new hn(u,d);t.add(f);const p=new Jc(16777215,2);p.position.set(20,20,20),t.add(p);const g=new Jc(16777215,1);g.position.set(-20,-20,-20),t.add(g);const m=new cu(4210752);t.add(m);let _,M=0;const E=()=>{_=requestAnimationFrame(E),M+=.02,f.rotation.y=M,f.rotation.x=Math.sin(M*.5)*.3,f.rotation.z=Math.cos(M*.3)*.2;const y=1+Math.sin(M*2)*.02;f.scale.set(y,y,y),f.position.y=Math.sin(M*.5)*2,f.position.x=Math.cos(M*.3)*2,a.render(t,n)};for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild);return r.current.appendChild(a.domElement),E(),()=>{if(cancelAnimationFrame(_),e)for(;e.firstChild;)e.removeChild(e.firstChild);u.dispose(),d.dispose(),s.dispose()}},[]),P.jsx("div",{ref:r,className:"w-[300px] h-[300px] flex items-start justify-start overflow-hidden",style:{transformOrigin:"top left"}})}class xR extends Yr{constructor(e){super(e)}load(e,t,n,s){const a=this,l=new R_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{t(a.parse(u))}catch(d){s?s(d):console.error(d),a.manager.itemError(e)}},n,s)}parse(e){function t(f){const p=new DataView(f),g=32/8*3+32/8*3*3+16/8,m=p.getUint32(80,!0);if(80+32/8+m*g===p.byteLength)return!0;const M=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(M,p,E))return!1;return!0}function n(f,p,g){for(let m=0,_=f.length;m<_;m++)if(f[m]!==p.getUint8(g+m))return!1;return!0}function s(f){const p=new DataView(f),g=p.getUint32(80,!0);let m,_,M,E=!1,y,x,R,w,b;for(let U=0;U<70;U++)p.getUint32(U,!1)==1129270351&&p.getUint8(U+4)==82&&p.getUint8(U+5)==61&&(E=!0,y=new Float32Array(g*3*3),x=p.getUint8(U+6)/255,R=p.getUint8(U+7)/255,w=p.getUint8(U+8)/255,b=p.getUint8(U+9)/255);const k=84,N=12*4+2,F=new fn,I=new Float32Array(g*3*3),C=new Float32Array(g*3*3),T=new Ze;for(let U=0;U<g;U++){const Y=k+U*N,K=p.getFloat32(Y,!0),j=p.getFloat32(Y+4,!0),te=p.getFloat32(Y+8,!0);if(E){const Q=p.getUint16(Y+48,!0);(Q&32768)===0?(m=(Q&31)/31,_=(Q>>5&31)/31,M=(Q>>10&31)/31):(m=x,_=R,M=w)}for(let Q=1;Q<=3;Q++){const ie=Y+Q*12,V=U*3*3+(Q-1)*3;I[V]=p.getFloat32(ie,!0),I[V+1]=p.getFloat32(ie+4,!0),I[V+2]=p.getFloat32(ie+8,!0),C[V]=K,C[V+1]=j,C[V+2]=te,E&&(T.setRGB(m,_,M,Vt),y[V]=T.r,y[V+1]=T.g,y[V+2]=T.b)}}return F.setAttribute("position",new Qn(I,3)),F.setAttribute("normal",new Qn(C,3)),E&&(F.setAttribute("color",new Qn(y,3)),F.hasColors=!0,F.alpha=b),F}function a(f){const p=new fn,g=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,_=/solid\s(.+)/;let M=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+E+E+E,"g"),x=new RegExp("normal"+E+E+E,"g"),R=[],w=[],b=[],k=new H;let N,F=0,I=0,C=0;for(;(N=g.exec(f))!==null;){I=C;const T=N[0],U=(N=_.exec(T))!==null?N[1]:"";for(b.push(U);(N=m.exec(T))!==null;){let j=0,te=0;const Q=N[0];for(;(N=x.exec(Q))!==null;)k.x=parseFloat(N[1]),k.y=parseFloat(N[2]),k.z=parseFloat(N[3]),te++;for(;(N=y.exec(Q))!==null;)R.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),w.push(k.x,k.y,k.z),j++,C++;te!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+M),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+M),M++}const Y=I,K=C-I;p.userData.groupNames=b,p.addGroup(Y,K,F),F++}return p.setAttribute("position",new Ft(R,3)),p.setAttribute("normal",new Ft(w,3)),p}function l(f){return typeof f!="string"?new TextDecoder().decode(f):f}function u(f){if(typeof f=="string"){const p=new Uint8Array(f.length);for(let g=0;g<f.length;g++)p[g]=f.charCodeAt(g)&255;return p.buffer||p}else return f}const d=u(e);return t(d)?s(d):a(l(e))}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Oi{constructor(e,t,n,s,a="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Oi.nextNameID=Oi.nextNameID||0,this.$name.id=`lil-gui-name-${++Oi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class yR extends Oi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const SR={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Pf,toHexString:Pf},Va={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},MR={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=Va.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const s=r*n<<16^e*n<<8^t*n<<0;return Va.toHexString(s)}},ER={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Va.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const s=r*n<<16^e*n<<8^t*n<<0;return Va.toHexString(s)}},wR=[SR,Va,MR,ER];function TR(r){return wR.find(e=>e.match(r))}class bR extends Oi{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=TR(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Pf(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Lh extends Oi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class AR extends Oi{constructor(e,t,n,s,a,l){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(a);const u=l!==void 0;this.step(u?l:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let R=parseFloat(this.$input.value);isNaN(R)||(this._stepExplicit&&(R=this._snap(R)),this.setValue(this._clamp(R)))},n=R=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+R),this.$input.value=this.getValue())},s=R=>{R.key==="Enter"&&this.$input.blur(),R.code==="ArrowUp"&&(R.preventDefault(),n(this._step*this._arrowKeyMultiplier(R))),R.code==="ArrowDown"&&(R.preventDefault(),n(this._step*this._arrowKeyMultiplier(R)*-1))},a=R=>{this._inputFocused&&(R.preventDefault(),n(this._step*this._normalizeMouseWheel(R)))};let l=!1,u,d,f,p,g;const m=5,_=R=>{u=R.clientX,d=f=R.clientY,l=!0,p=this.getValue(),g=0,window.addEventListener("mousemove",M),window.addEventListener("mouseup",E)},M=R=>{if(l){const w=R.clientX-u,b=R.clientY-d;Math.abs(b)>m?(R.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>m&&E()}if(!l){const w=R.clientY-f;g-=w*this._step*this._arrowKeyMultiplier(R),p+g>this._max?g=this._max-p:p+g<this._min&&(g=this._min-p),this._snapClampSetValue(p+g)}f=R.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",E)},y=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(x,R,w,b,k)=>(x-R)/(w-R)*(k-b)+b,t=x=>{const R=this.$slider.getBoundingClientRect();let w=e(x,R.left,R.right,this._min,this._max);this._snapClampSetValue(w)},n=x=>{this._setDraggingStyle(!0),t(x.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",a)},s=x=>{t(x.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a)};let l=!1,u,d;const f=x=>{x.preventDefault(),this._setDraggingStyle(!0),t(x.touches[0].clientX),l=!1},p=x=>{x.touches.length>1||(this._hasScrollBar?(u=x.touches[0].clientX,d=x.touches[0].clientY,l=!0):f(x),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",m))},g=x=>{if(l){const R=x.touches[0].clientX-u,w=x.touches[0].clientY-d;Math.abs(R)>Math.abs(w)?f(x):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",m))}else x.preventDefault(),t(x.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",m)},_=this._callOnFinishChange.bind(this),M=400;let E;const y=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();const w=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(_,M)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class CR extends Oi{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class RR extends Oi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var PR=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function LR(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Mv=!1;class du{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:a="Controls",closeFolders:l=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Mv&&u&&(LR(PR),Mv=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=l}add(e,t,n,s,a){if(Object(n)===n)return new CR(this,e,t,n);const l=e[t];switch(typeof l){case"number":return new AR(this,e,t,n,s,a);case"boolean":return new yR(this,e,t);case"string":return new RR(this,e,t);case"function":return new Lh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,l)}addColor(e,t,n=1){return new bR(this,e,t,n)}addFolder(e){const t=new du({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Lh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Lh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function DR(){const r=J.useRef(null);return J.useEffect(()=>{if(!r.current)return;const e=r.current,t=new Kf;t.background=new Ze(1710618);const n=400,s=400,a=new wn(50,n/s,.1,1e3);a.position.set(0,80,150),a.lookAt(0,30,0);const l=new up({antialias:!0});l.setSize(n,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.type=zf,l.toneMapping=Vf,l.toneMappingExposure=2,r.current.appendChild(l.domElement);const u=new hp(a,l.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.target.set(0,20,0),u.autoRotate=!0,u.autoRotateSpeed=2,u.update();const d=new sp(16777215,3);d.position.set(0,120,0),d.angle=.6,d.penumbra=.5,d.decay=1,d.distance=250,d.castShadow=!0,d.shadow.bias=-.001,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,t.add(d);const f=new cu(6316128,1.2);t.add(f);const p=new L_(16777215,4473924,1);p.position.set(0,200,0),t.add(p);const g=new op(16777215,1);g.position.set(100,150,50),g.castShadow=!0,t.add(g);const m=new Oo(200,200),_=new Pa({color:9340034,roughness:.4,metalness:.4}),M=new hn(m,_);M.rotation.x=-Math.PI/2,M.position.y=0,M.receiveShadow=!0,t.add(M);const E=new G1({color:16711680,metalness:.6,roughness:.47,clearcoat:.8,clearcoatRoughness:.2,emissive:3355443,emissiveIntensity:0,sheen:.5,sheenRoughness:.4});let y=null;new xR().load("/assets/cockroach.stl",function(B){y=new hn(B,E),y.castShadow=!0,y.receiveShadow=!0,B.center(),B.computeBoundingBox();const oe=B.boundingBox,be=new H;oe?.getSize(be);const he=70/Math.max(be.x,be.y,be.z);y.scale.set(he,he,he),y.position.y=20,t.add(y),d.target=y;let ve=0;const pe=()=>{if(requestAnimationFrame(pe),ve+=.03,y){y.rotation.y=ve*.8;const Ae=Math.abs(Math.sin(ve*2))*8,Ie=Math.sin(ve*2)*.4;y.position.y=20+Ae,y.position.x=Math.sin(ve)*8,y.rotation.z=-Ie;const qe=Math.cos(ve*2)*.2;y.rotation.x=qe}R.update(),I(),u.update(),l.render(t,a)};pe()},void 0,function(B){console.error("Error loading STL:",B)});const R=new I_(d);R.visible=!1,t.add(R);const w=new N_(p,20);w.visible=!1,t.add(w);const b=new F_(g,10);b.visible=!1,t.add(b);const k=new ou(5,10,32),N=new $a({color:16776960,wireframe:!0}),F=new hn(k,N);F.position.copy(d.position),t.add(F);const I=()=>{const B=new H;B.subVectors(d.target.position,d.position).normalize();const oe=new yn;oe.setFromUnitVectors(new H(0,1,0),B),F.setRotationFromQuaternion(oe)},C=new du,T=C.addFolder("Luz Principal (Spot)");T.add(d.position,"x",-200,200,1).name("Pos X"),T.add(d.position,"y",0,300,1).name("Pos Y"),T.add(d.position,"z",-200,200,1).name("Pos Z"),T.add(d,"angle",0,Math.PI/2,.01).name("Ángulo"),T.add(d,"intensity",0,5,.01).name("Intensidad"),T.add(d,"penumbra",0,1,.01).name("Penumbra"),T.add(d,"decay",0,2,.01).name("Decay"),T.open();const U=C.addFolder("Luz Ambiente");U.add(f,"intensity",0,5,.1).name("Intensidad"),U.open();const Y=C.addFolder("Luz Hemisférica");Y.add(p,"intensity",0,5,.1).name("Intensidad"),Y.add(p.position,"x",-300,300,1).name("Pos X"),Y.add(p.position,"y",0,300,1).name("Pos Y"),Y.add(p.position,"z",-300,300,1).name("Pos Z"),Y.open();const K=C.addFolder("Luz Direccional");K.add(g,"intensity",0,5,.1).name("Intensidad"),K.add(g.position,"x",-300,300,1).name("Pos X"),K.add(g.position,"y",0,300,1).name("Pos Y"),K.add(g.position,"z",-300,300,1).name("Pos Z"),K.open();const j=C.addFolder("Material Cucaracha");j.addColor({color:E.color.getHex()},"color").name("Color").onChange(B=>{E.color.set(B)}),j.add(E,"metalness",0,1,.01).name("Metalness"),j.add(E,"roughness",0,1,.01).name("Roughness"),j.add(E,"emissiveIntensity",0,5,.1).name("Emissive Int."),j.open();const te=C.addFolder("Material Piso");te.addColor({color:_.color.getHex()},"color").name("Color Piso").onChange(B=>{_.color.set(B)}),te.add(_,"metalness",0,1,.01).name("Metalness"),te.add(_,"roughness",0,1,.01).name("Roughness"),te.open();const Q=C.addFolder("Cámara");Q.add(a.position,"x",-200,200,1).name("Pos X"),Q.add(a.position,"y",0,300,1).name("Pos Y"),Q.add(a.position,"z",0,300,1).name("Pos Z"),Q.add(u,"autoRotate").name("Auto Rotar"),Q.add(u,"autoRotateSpeed",-10,10,.1).name("Vel. Rotación"),Q.open();const ie=C.addFolder("Cucaracha"),V={posX:0,posY:20,posZ:0,rotX:0,rotY:0,rotZ:0};ie.add(V,"posX",-2e3,2e3,1).name("Pos X").onChange(()=>{y&&(y.position.x=V.posX)}),ie.add(V,"posY",-2e3,2e3,1).name("Pos Y").onChange(()=>{y&&(y.position.y=V.posY)}),ie.add(V,"posZ",-2e3,2e3,1).name("Pos Z").onChange(()=>{y&&(y.position.z=V.posZ)}),ie.add(V,"rotX",-360,360,1).name("Rot X").onChange(()=>{y&&(y.rotation.x=V.rotX)}),ie.add(V,"rotY",-360,360,1).name("Rot Y").onChange(()=>{y&&(y.rotation.y=V.rotY)}),ie.add(V,"rotZ",-360,360,1).name("Rot Z").onChange(()=>{y&&(y.rotation.z=V.rotZ)}),ie.open();const ee=C.addFolder("Debug Helpers"),le={mainLightHelper:!1,hemiLightHelper:!1,dirLightHelper:!1};return ee.add(le,"mainLightHelper").name("Main Light Helper").onChange(B=>{R.visible=B}),ee.add(le,"hemiLightHelper").name("Hemisphere Helper").onChange(B=>{w.visible=B}),ee.add(le,"dirLightHelper").name("Dir Light Helper").onChange(B=>{b.visible=B}),ee.open(),()=>{C.destroy(),e&&e.removeChild(l.domElement),l.dispose()}},[]),P.jsx("div",{ref:r,className:"flex items-center justify-center",style:{width:"400px",height:"400px",transform:"scale(0.85)",transformOrigin:"center",margin:"-50px"}})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var mi=Uint8Array,yo=Uint16Array,IR=Int32Array,H_=new mi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),G_=new mi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),NR=new mi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),W_=function(r,e){for(var t=new yo(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var s=new IR(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)s[a]=a-t[n]<<5|n;return{b:t,r:s}},j_=W_(H_,2),X_=j_.b,FR=j_.r;X_[28]=258,FR[258]=28;var UR=W_(G_,0),kR=UR.b,Lf=new yo(32768);for(var jt=0;jt<32768;++jt){var Vr=(jt&43690)>>1|(jt&21845)<<1;Vr=(Vr&52428)>>2|(Vr&13107)<<2,Vr=(Vr&61680)>>4|(Vr&3855)<<4,Lf[jt]=((Vr&65280)>>8|(Vr&255)<<8)>>1}var La=function(r,e,t){for(var n=r.length,s=0,a=new yo(e);s<n;++s)r[s]&&++a[r[s]-1];var l=new yo(e);for(s=1;s<e;++s)l[s]=l[s-1]+a[s-1]<<1;var u;if(t){u=new yo(1<<e);var d=15-e;for(s=0;s<n;++s)if(r[s])for(var f=s<<4|r[s],p=e-r[s],g=l[r[s]-1]++<<p,m=g|(1<<p)-1;g<=m;++g)u[Lf[g]>>d]=f}else for(u=new yo(n),s=0;s<n;++s)r[s]&&(u[s]=Lf[l[r[s]-1]++]>>15-r[s]);return u},Ka=new mi(288);for(var jt=0;jt<144;++jt)Ka[jt]=8;for(var jt=144;jt<256;++jt)Ka[jt]=9;for(var jt=256;jt<280;++jt)Ka[jt]=7;for(var jt=280;jt<288;++jt)Ka[jt]=8;var $_=new mi(32);for(var jt=0;jt<32;++jt)$_[jt]=5;var OR=La(Ka,9,1),BR=La($_,5,1),Dh=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Ai=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Ih=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},zR=function(r){return(r+7)/8|0},VR=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new mi(r.subarray(e,t))},HR=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ci=function(r,e,t){var n=new Error(e||HR[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Ci),!t)throw n;return n},GR=function(r,e,t,n){var s=r.length,a=0;if(!s||e.f&&!e.l)return t||new mi(0);var l=!t,u=l||e.i!=2,d=e.i;l&&(t=new mi(s*3));var f=function(Lt){var pt=t.length;if(Lt>pt){var It=new mi(Math.max(pt*2,Lt));It.set(t),t=It}},p=e.f||0,g=e.p||0,m=e.b||0,_=e.l,M=e.d,E=e.m,y=e.n,x=s*8;do{if(!_){p=Ai(r,g,1);var R=Ai(r,g+1,3);if(g+=3,R)if(R==1)_=OR,M=BR,E=9,y=5;else if(R==2){var N=Ai(r,g,31)+257,F=Ai(r,g+10,15)+4,I=N+Ai(r,g+5,31)+1;g+=14;for(var C=new mi(I),T=new mi(19),U=0;U<F;++U)T[NR[U]]=Ai(r,g+U*3,7);g+=F*3;for(var Y=Dh(T),K=(1<<Y)-1,j=La(T,Y,1),U=0;U<I;){var te=j[Ai(r,g,K)];g+=te&15;var w=te>>4;if(w<16)C[U++]=w;else{var Q=0,ie=0;for(w==16?(ie=3+Ai(r,g,3),g+=2,Q=C[U-1]):w==17?(ie=3+Ai(r,g,7),g+=3):w==18&&(ie=11+Ai(r,g,127),g+=7);ie--;)C[U++]=Q}}var V=C.subarray(0,N),ee=C.subarray(N);E=Dh(V),y=Dh(ee),_=La(V,E,1),M=La(ee,y,1)}else Ci(1);else{var w=zR(g)+4,b=r[w-4]|r[w-3]<<8,k=w+b;if(k>s){d&&Ci(0);break}u&&f(m+b),t.set(r.subarray(w,k),m),e.b=m+=b,e.p=g=k*8,e.f=p;continue}if(g>x){d&&Ci(0);break}}u&&f(m+131072);for(var le=(1<<E)-1,B=(1<<y)-1,oe=g;;oe=g){var Q=_[Ih(r,g)&le],be=Q>>4;if(g+=Q&15,g>x){d&&Ci(0);break}if(Q||Ci(2),be<256)t[m++]=be;else if(be==256){oe=g,_=null;break}else{var re=be-254;if(be>264){var U=be-257,he=H_[U];re=Ai(r,g,(1<<he)-1)+X_[U],g+=he}var ve=M[Ih(r,g)&B],pe=ve>>4;ve||Ci(3),g+=ve&15;var ee=kR[pe];if(pe>3){var he=G_[pe];ee+=Ih(r,g)&(1<<he)-1,g+=he}if(g>x){d&&Ci(0);break}u&&f(m+131072);var Ae=m+re;if(m<ee){var Ie=a-ee,qe=Math.min(ee,Ae);for(Ie+m<0&&Ci(3);m<qe;++m)t[m]=n[Ie+m]}for(;m<Ae;++m)t[m]=t[m-ee]}}e.l=_,e.p=oe,e.b=m,e.f=p,_&&(p=1,e.m=E,e.d=M,e.n=y)}while(!p);return m!=t.length&&l?VR(t,0,m):t.subarray(0,m)},WR=new mi(0),jR=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Ci(6,"invalid zlib data"),(r[1]>>5&1)==1&&Ci(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function XR(r,e){return GR(r.subarray(jR(r),-4),{i:2},e,e)}var $R=typeof TextDecoder<"u"&&new TextDecoder,YR=0;try{$R.decode(WR,{stream:!0}),YR=1}catch{}function Y_(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let s=r,a=n,l=Math.floor((s+a)/2);for(;e<t[l]||e>=t[l+1];)e<t[l]?a=l:s=l,l=Math.floor((s+a)/2);return l}function qR(r,e,t,n){const s=[],a=[],l=[];s[0]=1;for(let u=1;u<=t;++u){a[u]=e-n[r+1-u],l[u]=n[r+u]-e;let d=0;for(let f=0;f<u;++f){const p=l[f+1],g=a[u-f],m=s[f]/(p+g);s[f]=d+p*m,d=g*m}s[u]=d}return s}function KR(r,e,t,n){const s=Y_(r,n,e),a=qR(s,n,r,e),l=new Mt(0,0,0,0);for(let u=0;u<=r;++u){const d=t[s-r+u],f=a[u],p=d.w*f;l.x+=d.x*p,l.y+=d.y*p,l.z+=d.z*p,l.w+=d.w*f}return l}function ZR(r,e,t,n,s){const a=[];for(let g=0;g<=t;++g)a[g]=0;const l=[];for(let g=0;g<=n;++g)l[g]=a.slice(0);const u=[];for(let g=0;g<=t;++g)u[g]=a.slice(0);u[0][0]=1;const d=a.slice(0),f=a.slice(0);for(let g=1;g<=t;++g){d[g]=e-s[r+1-g],f[g]=s[r+g]-e;let m=0;for(let _=0;_<g;++_){const M=f[_+1],E=d[g-_];u[g][_]=M+E;const y=u[_][g-1]/u[g][_];u[_][g]=m+M*y,m=E*y}u[g][g]=m}for(let g=0;g<=t;++g)l[0][g]=u[g][t];for(let g=0;g<=t;++g){let m=0,_=1;const M=[];for(let E=0;E<=t;++E)M[E]=a.slice(0);M[0][0]=1;for(let E=1;E<=n;++E){let y=0;const x=g-E,R=t-E;g>=E&&(M[_][0]=M[m][0]/u[R+1][x],y=M[_][0]*u[x][R]);const w=x>=-1?1:-x,b=g-1<=R?E-1:t-g;for(let N=w;N<=b;++N)M[_][N]=(M[m][N]-M[m][N-1])/u[R+1][x+N],y+=M[_][N]*u[x+N][R];g<=R&&(M[_][E]=-M[m][E-1]/u[R+1][g],y+=M[_][E]*u[g][R]),l[E][g]=y;const k=m;m=_,_=k}}let p=t;for(let g=1;g<=n;++g){for(let m=0;m<=t;++m)l[g][m]*=p;p*=t-g}return l}function JR(r,e,t,n,s){const a=s<r?s:r,l=[],u=Y_(r,n,e),d=ZR(u,n,r,a,e),f=[];for(let p=0;p<t.length;++p){const g=t[p].clone(),m=g.w;g.x*=m,g.y*=m,g.z*=m,f[p]=g}for(let p=0;p<=a;++p){const g=f[u-r].clone().multiplyScalar(d[p][0]);for(let m=1;m<=r;++m)g.add(f[u-r+m].clone().multiplyScalar(d[p][m]));l[p]=g}for(let p=a+1;p<=s+1;++p)l[p]=new Mt(0,0,0);return l}function QR(r,e){let t=1;for(let s=2;s<=r;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=r-e;++s)n*=s;return t/n}function e2(r){const e=r.length,t=[],n=[];for(let a=0;a<e;++a){const l=r[a];t[a]=new H(l.x,l.y,l.z),n[a]=l.w}const s=[];for(let a=0;a<e;++a){const l=t[a].clone();for(let u=1;u<=a;++u)l.sub(s[a-u].clone().multiplyScalar(QR(a,u)*n[u]));s[a]=l.divideScalar(n[0])}return s}function t2(r,e,t,n,s){const a=JR(r,e,t,n,s);return e2(a)}class n2 extends T1{constructor(e,t,n,s,a){super();const l=t?t.length-1:0,u=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=a||l;for(let d=0;d<u;++d){const f=n[d];this.controlPoints[d]=new Mt(f.x,f.y,f.z,f.w)}}getPoint(e,t=new H){const n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=KR(this.degree,this.knots,this.controlPoints,s);return a.w!==1&&a.divideScalar(a.w),n.set(a.x,a.y,a.z)}getTangent(e,t=new H){const n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=t2(this.degree,this.knots,this.controlPoints,s,1);return n.copy(a[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Mt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let gt,rn,Gn;class i2 extends Yr{constructor(e){super(e)}load(e,t,n,s){const a=this,l=a.path===""?cw.extractUrlBase(e):a.path,u=new R_(this.manager);u.setPath(a.path),u.setResponseType("arraybuffer"),u.setRequestHeader(a.requestHeader),u.setWithCredentials(a.withCredentials),u.load(e,function(d){try{t(a.parse(d,l))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},n,s)}parse(e,t){if(c2(e))gt=new l2().parse(e);else{const s=Z_(e);if(!u2(s))throw new Error("THREE.FBXLoader: Unknown format.");if(wv(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+wv(s));gt=new a2().parse(s)}const n=new P_(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new r2(n,this.manager).parse(gt)}}class r2{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){rn=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),a=new s2().parse(s);return this.parseScene(s,a,n),Gn}parseConnections(){const e=new Map;return"Connections"in gt&&gt.Connections.connections.forEach(function(n){const s=n[0],a=n[1],l=n[2];e.has(s)||e.set(s,{parents:[],children:[]});const u={ID:a,relationship:l};e.get(s).parents.push(u),e.has(a)||e.set(a,{parents:[],children:[]});const d={ID:s,relationship:l};e.get(a).children.push(d)}),e}parseImages(){const e={},t={};if("Video"in gt.Objects){const n=gt.Objects.Video;for(const s in n){const a=n[s],l=parseInt(s);if(e[l]=a.RelativeFilename||a.Filename,"Content"in a){const u=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,d=typeof a.Content=="string"&&a.Content!=="";if(u||d){const f=this.parseImage(n[s]);t[a.RelativeFilename||a.Filename]=f}}}}for(const n in e){const s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase();let a;switch(s){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const l=new Uint8Array(t);return window.URL.createObjectURL(new Blob([l],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in gt.Objects){const n=gt.Objects.Texture;for(const s in n){const a=this.parseTexture(n[s],e);t.set(parseInt(s),a)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const s=e.WrapModeU,a=e.WrapModeV,l=s!==void 0?s.value:0,u=a!==void 0?a.value:0;if(n.wrapS=l===0?Ia:or,n.wrapT=u===0?Ia:or,"Scaling"in e){const d=e.Scaling.value;n.repeat.x=d[0],n.repeat.y=d[1]}if("Translation"in e){const d=e.Translation.value;n.offset.x=d[0],n.offset.y=d[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),s=e.FileName.split(".").pop().toLowerCase(),a=n.has(s)?this.manager.getHandler(`.${s}`):this.textureLoader;if(!a)return console.warn(`FBXLoader: ${s.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Tn;const l=a.path;l||a.setPath(this.textureLoader.path);const u=rn.get(e.id).children;let d;u!==void 0&&u.length>0&&t[u[0].ID]!==void 0&&(d=t[u[0].ID],(d.indexOf("blob:")===0||d.indexOf("data:")===0)&&a.setPath(void 0));const f=a.load(d);return a.setPath(l),f}parseMaterials(e){const t=new Map;if("Material"in gt.Objects){const n=gt.Objects.Material;for(const s in n){const a=this.parseMaterial(n[s],e);a!==null&&t.set(parseInt(s),a)}}return t}parseMaterial(e,t){const n=e.id,s=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!rn.has(n))return null;const l=this.parseParameters(e,t,n);let u;switch(a.toLowerCase()){case"phong":u=new To;break;case"lambert":u=new W1;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),u=new To;break}return u.setValues(l),u.name=s,u}parseParameters(e,t,n){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=ft.toWorkingColorSpace(new Ze().fromArray(e.Diffuse.value),Vt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=ft.toWorkingColorSpace(new Ze().fromArray(e.DiffuseColor.value),Vt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=ft.toWorkingColorSpace(new Ze().fromArray(e.Emissive.value),Vt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=ft.toWorkingColorSpace(new Ze().fromArray(e.EmissiveColor.value),Vt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=ft.toWorkingColorSpace(new Ze().fromArray(e.Specular.value),Vt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=ft.toWorkingColorSpace(new Ze().fromArray(e.SpecularColor.value),Vt));const a=this;return rn.get(n).children.forEach(function(l){const u=l.relationship;switch(u){case"Bump":s.bumpMap=a.getTexture(t,l.ID);break;case"Maya|TEX_ao_map":s.aoMap=a.getTexture(t,l.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=a.getTexture(t,l.ID),s.map!==void 0&&(s.map.colorSpace=Vt);break;case"DisplacementColor":s.displacementMap=a.getTexture(t,l.ID);break;case"EmissiveColor":s.emissiveMap=a.getTexture(t,l.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=Vt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=a.getTexture(t,l.ID);break;case"ReflectionColor":s.envMap=a.getTexture(t,l.ID),s.envMap!==void 0&&(s.envMap.mapping=Wc,s.envMap.colorSpace=Vt);break;case"SpecularColor":s.specularMap=a.getTexture(t,l.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=Vt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=a.getTexture(t,l.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",u);break}}),s}getTexture(e,t){return"LayeredTexture"in gt.Objects&&t in gt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=rn.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in gt.Objects){const n=gt.Objects.Deformer;for(const s in n){const a=n[s],l=rn.get(parseInt(s));if(a.attrType==="Skin"){const u=this.parseSkeleton(l,n);u.ID=s,l.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),u.geometryID=l.parents[0].ID,e[s]=u}else if(a.attrType==="BlendShape"){const u={id:s};u.rawTargets=this.parseMorphTargets(l,n),u.id=s,l.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=u}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(s){const a=t[s.ID];if(a.attrType!=="Cluster")return;const l={ID:s.ID,indices:[],weights:[],transformLink:new Ke().fromArray(a.TransformLink.a)};"Indexes"in a&&(l.indices=a.Indexes.a,l.weights=a.Weights.a),n.push(l)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let s=0;s<e.children.length;s++){const a=e.children[s],l=t[a.ID],u={name:l.attrName,initialWeight:l.DeformPercent,id:l.id,fullWeights:l.FullWeights.a};if(l.attrType!=="BlendShapeChannel")return;u.geoID=rn.get(parseInt(a.ID)).children.filter(function(d){return d.relationship===void 0})[0].ID,n.push(u)}return n}parseScene(e,t,n){Gn=new vo;const s=this.parseModels(e.skeletons,t,n),a=gt.Objects.Model,l=this;s.forEach(function(d){const f=a[d.ID];l.setLookAtProperties(d,f),rn.get(d.ID).parents.forEach(function(g){const m=s.get(g.ID);m!==void 0&&m.add(d)}),d.parent===null&&Gn.add(d)}),this.bindSkeleton(e.skeletons,t,s),this.addGlobalSceneSettings(),Gn.traverse(function(d){if(d.userData.transformData){d.parent&&(d.userData.transformData.parentMatrix=d.parent.matrix,d.userData.transformData.parentMatrixWorld=d.parent.matrixWorld);const f=K_(d.userData.transformData);d.applyMatrix4(f),d.updateWorldMatrix()}});const u=new o2().parse();Gn.children.length===1&&Gn.children[0].isGroup&&(Gn.children[0].animations=u,Gn=Gn.children[0]),Gn.animations=u}parseModels(e,t,n){const s=new Map,a=gt.Objects.Model;for(const l in a){const u=parseInt(l),d=a[l],f=rn.get(u);let p=this.buildSkeleton(f,e,u,d.attrName);if(!p){switch(d.attrType){case"Camera":p=this.createCamera(f);break;case"Light":p=this.createLight(f);break;case"Mesh":p=this.createMesh(f,t,n);break;case"NurbsCurve":p=this.createCurve(f,t);break;case"LimbNode":case"Root":p=new bf;break;case"Null":default:p=new vo;break}p.name=d.attrName?Pt.sanitizeNodeName(d.attrName):"",p.userData.originalName=d.attrName,p.ID=u}this.getTransformData(p,d),s.set(u,p)}return s}buildSkeleton(e,t,n,s){let a=null;return e.parents.forEach(function(l){for(const u in t){const d=t[u];d.rawBones.forEach(function(f,p){if(f.ID===l.ID){const g=a;a=new bf,a.matrixWorld.copy(f.transformLink),a.name=s?Pt.sanitizeNodeName(s):"",a.userData.originalName=s,a.ID=n,d.bones[p]=a,g!==null&&a.add(g)}})}}),a}createCamera(e){let t,n;if(e.children.forEach(function(s){const a=gt.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Bt;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let a=1;n.NearPlane!==void 0&&(a=n.NearPlane.value/1e3);let l=1e3;n.FarPlane!==void 0&&(l=n.FarPlane.value/1e3);let u=window.innerWidth,d=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(u=n.AspectWidth.value,d=n.AspectHeight.value);const f=u/d;let p=45;n.FieldOfView!==void 0&&(p=n.FieldOfView.value);const g=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new wn(p,f,a,l),g!==null&&t.setFocalLength(g);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Bt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new Bt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){const a=gt.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Bt;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let a=16777215;n.Color!==void 0&&(a=ft.toWorkingColorSpace(new Ze().fromArray(n.Color.value),Vt));let l=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(l=0);let u=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?u=0:u=n.FarAttenuationEnd.value);const d=1;switch(s){case 0:t=new Jc(a,l,u,d);break;case 1:t=new op(a,l);break;case 2:let f=Math.PI/3;n.InnerAngle!==void 0&&(f=Nn.degToRad(n.InnerAngle.value));let p=0;n.OuterAngle!==void 0&&(p=Nn.degToRad(n.OuterAngle.value),p=Math.max(p,1)),t=new sp(a,l,u,f,p,d);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Jc(a,l);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,a=null,l=null;const u=[];return e.children.forEach(function(d){t.has(d.ID)&&(a=t.get(d.ID)),n.has(d.ID)&&u.push(n.get(d.ID))}),u.length>1?l=u:u.length>0?l=u[0]:(l=new To({name:Yr.DEFAULT_MATERIAL_NAME,color:13421772}),u.push(l)),"color"in a.attributes&&u.forEach(function(d){d.vertexColors=!0}),a.FBX_Deformer?(s=new x1(a,l),s.normalizeSkinWeights()):s=new hn(a,l),s}createCurve(e,t){const n=e.children.reduce(function(a,l){return t.has(l.ID)&&(a=t.get(l.ID)),a},null),s=new su({name:Yr.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Kc(n,s)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ha(t.RotationOrder.value):n.eulerOrder=Ha(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&rn.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const a=gt.Objects.Model[s.ID];if("Lcl_Translation"in a){const l=a.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(l),Gn.add(e.target)):e.lookAt(new H().fromArray(l))}}})}bindSkeleton(e,t,n){const s=this.parsePoseNodes();for(const a in e){const l=e[a];rn.get(parseInt(l.ID)).parents.forEach(function(d){if(t.has(d.ID)){const f=d.ID;rn.get(f).parents.forEach(function(g){n.has(g.ID)&&n.get(g.ID).bind(new Zf(l.bones),s[g.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in gt.Objects){const t=gt.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(a){e[a.Node]=new Ke().fromArray(a.Matrix.a)}):e[s.Node]=new Ke().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in gt){if("AmbientColor"in gt.GlobalSettings){const e=gt.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){const a=new Ze().setRGB(t,n,s,Vt);Gn.add(new cu(a,1))}}"UnitScaleFactor"in gt.GlobalSettings&&(Gn.userData.unitScaleFactor=gt.GlobalSettings.UnitScaleFactor.value)}}}class s2{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in gt.Objects){const n=gt.Objects.Geometry;for(const s in n){const a=rn.get(parseInt(s)),l=this.parseGeometry(a,n[s],e);t.set(parseInt(s),l)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const s=n.skeletons,a=[],l=e.parents.map(function(g){return gt.Objects.Model[g.ID]});if(l.length===0)return;const u=e.children.reduce(function(g,m){return s[m.ID]!==void 0&&(g=s[m.ID]),g},null);e.children.forEach(function(g){n.morphTargets[g.ID]!==void 0&&a.push(n.morphTargets[g.ID])});const d=l[0],f={};"RotationOrder"in d&&(f.eulerOrder=Ha(d.RotationOrder.value)),"InheritType"in d&&(f.inheritType=parseInt(d.InheritType.value)),"GeometricTranslation"in d&&(f.translation=d.GeometricTranslation.value),"GeometricRotation"in d&&(f.rotation=d.GeometricRotation.value),"GeometricScaling"in d&&(f.scale=d.GeometricScaling.value);const p=K_(f);return this.genGeometry(t,u,a,p)}genGeometry(e,t,n,s){const a=new fn;e.attrName&&(a.name=e.attrName);const l=this.parseGeoNode(e,t),u=this.genBuffers(l),d=new Ft(u.vertex,3);if(d.applyMatrix4(s),a.setAttribute("position",d),u.colors.length>0&&a.setAttribute("color",new Ft(u.colors,3)),t&&(a.setAttribute("skinIndex",new qf(u.weightsIndices,4)),a.setAttribute("skinWeight",new Ft(u.vertexWeights,4)),a.FBX_Deformer=t),u.normal.length>0){const f=new ut().getNormalMatrix(s),p=new Ft(u.normal,3);p.applyNormalMatrix(f),a.setAttribute("normal",p)}if(u.uvs.forEach(function(f,p){const g=p===0?"uv":`uv${p}`;a.setAttribute(g,new Ft(u.uvs[p],2))}),l.material&&l.material.mappingType!=="AllSame"){let f=u.materialIndex[0],p=0;if(u.materialIndex.forEach(function(g,m){g!==f&&(a.addGroup(p,m-p,f),f=g,p=m)}),a.groups.length>0){const g=a.groups[a.groups.length-1],m=g.start+g.count;m!==u.materialIndex.length&&a.addGroup(m,u.materialIndex.length-m,f)}a.groups.length===0&&a.addGroup(0,u.materialIndex.length,u.materialIndex[0])}return this.addMorphTargets(a,e,n,s),a}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,a){s.indices.forEach(function(l,u){n.weightTable[l]===void 0&&(n.weightTable[l]=[]),n.weightTable[l].push({id:a,weight:s.weights[u]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,s=0,a=!1,l=[],u=[],d=[],f=[],p=[],g=[];const m=this;return e.vertexIndices.forEach(function(_,M){let E,y=!1;_<0&&(_=_^-1,y=!0);let x=[],R=[];if(l.push(_*3,_*3+1,_*3+2),e.color){const w=Nc(M,n,_,e.color);d.push(w[0],w[1],w[2])}if(e.skeleton){if(e.weightTable[_]!==void 0&&e.weightTable[_].forEach(function(w){R.push(w.weight),x.push(w.id)}),R.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const w=[0,0,0,0],b=[0,0,0,0];R.forEach(function(k,N){let F=k,I=x[N];b.forEach(function(C,T,U){if(F>C){U[T]=F,F=C;const Y=w[T];w[T]=I,I=Y}})}),x=w,R=b}for(;R.length<4;)R.push(0),x.push(0);for(let w=0;w<4;++w)p.push(R[w]),g.push(x[w])}if(e.normal){const w=Nc(M,n,_,e.normal);u.push(w[0],w[1],w[2])}e.material&&e.material.mappingType!=="AllSame"&&(E=Nc(M,n,_,e.material)[0],E<0&&(m.negativeMaterialIndices=!0,E=0)),e.uv&&e.uv.forEach(function(w,b){const k=Nc(M,n,_,w);f[b]===void 0&&(f[b]=[]),f[b].push(k[0]),f[b].push(k[1])}),s++,y&&(m.genFace(t,e,l,E,u,d,f,p,g,s),n++,s=0,l=[],u=[],d=[],f=[],p=[],g=[])}),t}getNormalNewell(e){const t=new H(0,0,0);for(let n=0;n<e.length;n++){const s=e[n],a=e[(n+1)%e.length];t.x+=(s.y-a.y)*(s.z+a.z),t.y+=(s.z-a.z)*(s.x+a.x),t.z+=(s.x-a.x)*(s.y+a.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new H(0,1,0):new H(0,0,1)).cross(t).normalize(),a=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:a}}flattenVertex(e,t,n){return new nt(e.dot(t),e.dot(n))}genFace(e,t,n,s,a,l,u,d,f,p){let g;if(p>3){const m=[],_=t.baseVertexPositions||t.vertexPositions;for(let x=0;x<n.length;x+=3)m.push(new H(_[n[x]],_[n[x+1]],_[n[x+2]]));const{tangent:M,bitangent:E}=this.getNormalTangentAndBitangent(m),y=[];for(const x of m)y.push(this.flattenVertex(x,M,E));g=tp.triangulateShape(y,[])}else g=[[0,1,2]];for(const[m,_,M]of g)e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),e.vertex.push(t.vertexPositions[n[_*3]]),e.vertex.push(t.vertexPositions[n[_*3+1]]),e.vertex.push(t.vertexPositions[n[_*3+2]]),e.vertex.push(t.vertexPositions[n[M*3]]),e.vertex.push(t.vertexPositions[n[M*3+1]]),e.vertex.push(t.vertexPositions[n[M*3+2]]),t.skeleton&&(e.vertexWeights.push(d[m*4]),e.vertexWeights.push(d[m*4+1]),e.vertexWeights.push(d[m*4+2]),e.vertexWeights.push(d[m*4+3]),e.vertexWeights.push(d[_*4]),e.vertexWeights.push(d[_*4+1]),e.vertexWeights.push(d[_*4+2]),e.vertexWeights.push(d[_*4+3]),e.vertexWeights.push(d[M*4]),e.vertexWeights.push(d[M*4+1]),e.vertexWeights.push(d[M*4+2]),e.vertexWeights.push(d[M*4+3]),e.weightsIndices.push(f[m*4]),e.weightsIndices.push(f[m*4+1]),e.weightsIndices.push(f[m*4+2]),e.weightsIndices.push(f[m*4+3]),e.weightsIndices.push(f[_*4]),e.weightsIndices.push(f[_*4+1]),e.weightsIndices.push(f[_*4+2]),e.weightsIndices.push(f[_*4+3]),e.weightsIndices.push(f[M*4]),e.weightsIndices.push(f[M*4+1]),e.weightsIndices.push(f[M*4+2]),e.weightsIndices.push(f[M*4+3])),t.color&&(e.colors.push(l[m*3]),e.colors.push(l[m*3+1]),e.colors.push(l[m*3+2]),e.colors.push(l[_*3]),e.colors.push(l[_*3+1]),e.colors.push(l[_*3+2]),e.colors.push(l[M*3]),e.colors.push(l[M*3+1]),e.colors.push(l[M*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(a[m*3]),e.normal.push(a[m*3+1]),e.normal.push(a[m*3+2]),e.normal.push(a[_*3]),e.normal.push(a[_*3+1]),e.normal.push(a[_*3+2]),e.normal.push(a[M*3]),e.normal.push(a[M*3+1]),e.normal.push(a[M*3+2])),t.uv&&t.uv.forEach(function(E,y){e.uvs[y]===void 0&&(e.uvs[y]=[]),e.uvs[y].push(u[y][m*2]),e.uvs[y].push(u[y][m*2+1]),e.uvs[y].push(u[y][_*2]),e.uvs[y].push(u[y][_*2+1]),e.uvs[y].push(u[y][M*2]),e.uvs[y].push(u[y][M*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;n.forEach(function(l){l.rawTargets.forEach(function(u){const d=gt.Objects.Geometry[u.geoID];d!==void 0&&a.genMorphGeometry(e,t,d,s,u.name)})})}genMorphGeometry(e,t,n,s,a){const l=t.Vertices!==void 0?t.Vertices.a:[],u=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],d=n.Vertices!==void 0?n.Vertices.a:[],f=n.Indexes!==void 0?n.Indexes.a:[],p=e.attributes.position.count*3,g=new Float32Array(p);for(let E=0;E<f.length;E++){const y=f[E]*3;g[y]=d[E*3],g[y+1]=d[E*3+1],g[y+2]=d[E*3+2]}const m={vertexIndices:u,vertexPositions:g,baseVertexPositions:l},_=this.genBuffers(m),M=new Ft(_.vertex,3);M.name=a||n.attrName,M.applyMatrix4(s),e.morphAttributes.position.push(M)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a;let a=[];return n==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:a,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a;let a=[];return n==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:s,indices:a,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a;let a=[];n==="IndexToDirect"&&(a=e.ColorIndex.a);for(let l=0,u=new Ze;l<s.length;l+=4)u.fromArray(s,l),ft.toWorkingColorSpace(u,Vt),u.toArray(s,l);return{dataSize:4,buffer:s,indices:a,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const s=e.Materials.a,a=[];for(let l=0;l<s.length;++l)a.push(l);return{dataSize:1,buffer:s,indices:a,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new fn;const n=t-1,s=e.KnotVector.a,a=[],l=e.Points.a;for(let g=0,m=l.length;g<m;g+=4)a.push(new Mt().fromArray(l,g));let u,d;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){u=n,d=s.length-1-u;for(let g=0;g<n;++g)a.push(a[g])}const p=new n2(n,s,a,u,d).getPoints(a.length*12);return new fn().setFromPoints(p)}}class o2{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const s=t[n],a=this.addClip(s);e.push(a)}return e}parseClips(){if(gt.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=gt.Objects.AnimationCurveNode,t=new Map;for(const n in e){const s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:s.id,attr:s.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=gt.Objects.AnimationCurve;for(const n in t){const s={id:t[n].id,times:t[n].KeyTime.a.map(d2),values:t[n].KeyValueFloat.a},a=rn.get(s.id);if(a!==void 0){const l=a.parents[0].ID,u=a.parents[0].relationship;u.match(/X/)?e.get(l).curves.x=s:u.match(/Y/)?e.get(l).curves.y=s:u.match(/Z/)?e.get(l).curves.z=s:u.match(/DeformPercent/)&&e.has(l)&&(e.get(l).curves.morph=s)}}}parseAnimationLayers(e){const t=gt.Objects.AnimationLayer,n=new Map;for(const s in t){const a=[],l=rn.get(parseInt(s));l!==void 0&&(l.children.forEach(function(d,f){if(e.has(d.ID)){const p=e.get(d.ID);if(p.curves.x!==void 0||p.curves.y!==void 0||p.curves.z!==void 0){if(a[f]===void 0){const g=rn.get(d.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID;if(g!==void 0){const m=gt.Objects.Model[g.toString()];if(m===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",d);return}const _={modelName:m.attrName?Pt.sanitizeNodeName(m.attrName):"",ID:m.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Gn.traverse(function(M){M.ID===m.id&&(_.transform=M.matrix,M.userData.transformData&&(_.eulerOrder=M.userData.transformData.eulerOrder))}),_.transform||(_.transform=new Ke),"PreRotation"in m&&(_.preRotation=m.PreRotation.value),"PostRotation"in m&&(_.postRotation=m.PostRotation.value),a[f]=_}}a[f]&&(a[f][p.attr]=p)}else if(p.curves.morph!==void 0){if(a[f]===void 0){const g=rn.get(d.ID).parents.filter(function(x){return x.relationship!==void 0})[0].ID,m=rn.get(g).parents[0].ID,_=rn.get(m).parents[0].ID,M=rn.get(_).parents[0].ID,E=gt.Objects.Model[M],y={modelName:E.attrName?Pt.sanitizeNodeName(E.attrName):"",morphName:gt.Objects.Deformer[g].attrName};a[f]=y}a[f][p.attr]=p}}}),n.set(parseInt(s),a))}return n}parseAnimStacks(e){const t=gt.Objects.AnimationStack,n={};for(const s in t){const a=rn.get(parseInt(s)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const l=e.get(a[0].ID);n[s]={name:t[s].attrName,layer:l}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new Q1(e.name,-1,t)}generateTracks(e){const t=[];let n=new H,s=new H;if(e.transform&&e.transform.decompose(n,new yn,s),n=n.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,s){const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);return new za(e+"."+s,a,l)}generateRotationTrack(e,t,n,s,a){let l,u;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const m=this.interpolateRotations(t.x,t.y,t.z,a);l=m[0],u=m[1]}const d=Ha(0);n!==void 0&&(n=n.map(Nn.degToRad),n.push(d),n=new dn().fromArray(n),n=new yn().setFromEuler(n)),s!==void 0&&(s=s.map(Nn.degToRad),s.push(d),s=new dn().fromArray(s),s=new yn().setFromEuler(s).invert());const f=new yn,p=new dn,g=[];if(!u||!l)return new No(e+".quaternion",[0],[0]);for(let m=0;m<u.length;m+=3)p.set(u[m],u[m+1],u[m+2],a),f.setFromEuler(p),n!==void 0&&f.premultiply(n),s!==void 0&&f.multiply(s),m>2&&new yn().fromArray(g,(m-3)/3*4).dot(f)<0&&f.set(-f.x,-f.y,-f.z,-f.w),f.toArray(g,m/3*4);return new No(e+".quaternion",l,g)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(a){return a/100}),s=Gn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ba(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let a=1;a<t.length;a++){const l=t[a];l!==s&&(t[n]=l,s=l,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const s=n,a=[];let l=-1,u=-1,d=-1;return e.forEach(function(f){if(t.x&&(l=t.x.times.indexOf(f)),t.y&&(u=t.y.times.indexOf(f)),t.z&&(d=t.z.times.indexOf(f)),l!==-1){const p=t.x.values[l];a.push(p),s[0]=p}else a.push(s[0]);if(u!==-1){const p=t.y.values[u];a.push(p),s[1]=p}else a.push(s[1]);if(d!==-1){const p=t.z.values[d];a.push(p),s[2]=p}else a.push(s[2])}),a}interpolateRotations(e,t,n,s){const a=[],l=[];a.push(e.times[0]),l.push(Nn.degToRad(e.values[0])),l.push(Nn.degToRad(t.values[0])),l.push(Nn.degToRad(n.values[0]));for(let u=1;u<e.values.length;u++){const d=[e.values[u-1],t.values[u-1],n.values[u-1]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const f=d.map(Nn.degToRad),p=[e.values[u],t.values[u],n.values[u]];if(isNaN(p[0])||isNaN(p[1])||isNaN(p[2]))continue;const g=p.map(Nn.degToRad),m=[p[0]-d[0],p[1]-d[1],p[2]-d[2]],_=[Math.abs(m[0]),Math.abs(m[1]),Math.abs(m[2])];if(_[0]>=180||_[1]>=180||_[2]>=180){const E=Math.max(..._)/180,y=new dn(...f,s),x=new dn(...g,s),R=new yn().setFromEuler(y),w=new yn().setFromEuler(x);R.dot(w)&&w.set(-w.x,-w.y,-w.z,-w.w);const b=e.times[u-1],k=e.times[u]-b,N=new yn,F=new dn;for(let I=0;I<1;I+=1/E)N.copy(R.clone().slerp(w.clone(),I)),a.push(b+I*k),F.setFromQuaternion(N,s),l.push(F.x),l.push(F.y),l.push(F.z)}else a.push(e.times[u]),l.push(Nn.degToRad(e.values[u])),l.push(Nn.degToRad(t.values[u])),l.push(Nn.degToRad(n.values[u]))}return[a,l]}}class a2{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new q_,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,a){const l=s.match(/^[\s\t]*;/),u=s.match(/^[\s\t]*$/);if(l||u)return;const d=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),f=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),p=s.match("^\\t{"+(t.currentIndent-1)+"}}");d?t.parseNodeBegin(s,d):f?t.parseNodeProperty(s,f,n[++a]):p?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(d){return d.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:n},l=this.parseNodeAttr(s),u=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,a):n in u?(n==="PoseNode"?u.PoseNode.push(a):u[n].id!==void 0&&(u[n]={},u[n][u[n].id]=u[n]),l.id!==""&&(u[n][l.id]=a)):typeof l.id=="number"?(u[n]={},u[n][l.id]=a):n!=="Properties70"&&(n==="PoseNode"?u[n]=[a]:u[n]=a),typeof l.id=="number"&&(a.id=l.id),l.name!==""&&(a.attrName=l.name),l.type!==""&&(a.attrType=l.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&a===","&&(a=n.replace(/"/g,"").replace(/,$/,"").trim());const l=this.getCurrentNode();if(l.name==="Properties70"){this.parseNodeSpecialProperty(e,s,a);return}if(s==="C"){const d=a.split(",").slice(1),f=parseInt(d[0]),p=parseInt(d[1]);let g=a.split(",").slice(3);g=g.map(function(m){return m.trim().replace(/^"/,"")}),s="connections",a=[f,p],f2(a,g),l[s]===void 0&&(l[s]=[])}s==="Node"&&(l.id=a),s in l&&Array.isArray(l[s])?l[s].push(a):s!=="a"?l[s]=a:l.a=a,this.setCurrentProp(l,s),s==="a"&&a.slice(-1)!==","&&(l.a=Fh(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Fh(t.a))}parseNodeSpecialProperty(e,t,n){const s=n.split('",').map(function(p){return p.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=s[0],l=s[1],u=s[2],d=s[3];let f=s[4];switch(l){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":f=parseFloat(f);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":f=Fh(f);break}this.getPrevNode()[a]={type:l,type2:u,flag:d,value:f},this.setCurrentProp(this.getPrevNode(),a)}}class l2{parse(e){const t=new Ev(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const s=new q_;for(;!this.endOfContent(t);){const a=this.parseNode(t,n);a!==null&&s.add(a.name,a)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},s=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const l=e.getUint8(),u=e.getString(l);if(s===0)return null;const d=[];for(let m=0;m<a;m++)d.push(this.parseProperty(e));const f=d.length>0?d[0]:"",p=d.length>1?d[1]:"",g=d.length>2?d[2]:"";for(n.singleProperty=a===1&&e.getOffset()===s;s>e.getOffset();){const m=this.parseNode(e,t);m!==null&&this.parseSubNode(u,n,m)}return n.propertyList=d,typeof f=="number"&&(n.id=f),p!==""&&(n.attrName=p),g!==""&&(n.attrType=g),u!==""&&(n.name=u),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){const s=[];n.propertyList.forEach(function(a,l){l!==0&&s.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(a){t[a]=n[a]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],a=n.propertyList[1];const l=n.propertyList[2],u=n.propertyList[3];let d;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?d=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:d=n.propertyList[4],t[s]={type:a,type2:l,flag:u,value:d}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),a=e.getUint32(),l=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const u=XR(new Uint8Array(e.getArrayBuffer(l))),d=new Ev(u.buffer);switch(t){case"b":case"c":return d.getBooleanArray(s);case"d":return d.getFloat64Array(s);case"f":return d.getFloat32Array(s);case"i":return d.getInt32Array(s);case"l":return d.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Ev{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const s=n.indexOf(0);return s>=0&&(n=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(n)}}class q_{add(e,t){this[e]=t}}function c2(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===Z_(r,0,e.length)}function u2(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(s){const a=r[s-1];return r=r.slice(t+s),t++,a}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function wv(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function d2(r){return r/46186158e3}const h2=[];function Nc(r,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=r;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);const a=s*n.dataSize,l=a+n.dataSize;return p2(h2,n.buffer,a,l)}const Nh=new dn,fo=new H;function K_(r){const e=new Ke,t=new Ke,n=new Ke,s=new Ke,a=new Ke,l=new Ke,u=new Ke,d=new Ke,f=new Ke,p=new Ke,g=new Ke,m=new Ke,_=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(fo.fromArray(r.translation));const M=Ha(0);if(r.preRotation){const U=r.preRotation.map(Nn.degToRad);U.push(M),t.makeRotationFromEuler(Nh.fromArray(U))}if(r.rotation){const U=r.rotation.map(Nn.degToRad);U.push(r.eulerOrder||M),n.makeRotationFromEuler(Nh.fromArray(U))}if(r.postRotation){const U=r.postRotation.map(Nn.degToRad);U.push(M),s.makeRotationFromEuler(Nh.fromArray(U)),s.invert()}r.scale&&a.scale(fo.fromArray(r.scale)),r.scalingOffset&&u.setPosition(fo.fromArray(r.scalingOffset)),r.scalingPivot&&l.setPosition(fo.fromArray(r.scalingPivot)),r.rotationOffset&&d.setPosition(fo.fromArray(r.rotationOffset)),r.rotationPivot&&f.setPosition(fo.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(g.copy(r.parentMatrix),p.copy(r.parentMatrixWorld));const E=t.clone().multiply(n).multiply(s),y=new Ke;y.extractRotation(p);const x=new Ke;x.copyPosition(p);const R=x.clone().invert().multiply(p),w=y.clone().invert().multiply(R),b=a,k=new Ke;if(_===0)k.copy(y).multiply(E).multiply(w).multiply(b);else if(_===1)k.copy(y).multiply(w).multiply(E).multiply(b);else{const Y=new Ke().scale(new H().setFromMatrixScale(g)).clone().invert(),K=w.clone().multiply(Y);k.copy(y).multiply(E).multiply(K).multiply(b)}const N=f.clone().invert(),F=l.clone().invert();let I=e.clone().multiply(d).multiply(f).multiply(t).multiply(n).multiply(s).multiply(N).multiply(u).multiply(l).multiply(a).multiply(F);const C=new Ke().copyPosition(I),T=p.clone().multiply(C);return m.copyPosition(T),I=m.clone().multiply(k),I.premultiply(p.invert()),I}function Ha(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Fh(r){return r.split(",").map(function(t){return parseFloat(t)})}function Z_(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function f2(r,e){for(let t=0,n=r.length,s=e.length;t<s;t++,n++)r[n]=e[t]}function p2(r,e,t,n){for(let s=t,a=0;s<n;s++,a++)r[a]=e[s];return r}function m2(){const r=J.useRef(null);return J.useEffect(()=>{if(!r.current)return;const e=r.current,t=new Kf;t.background=new Ze(1710618);const n=400,s=400,a=new wn(50,n/s,.1,1e3);a.position.set(0,80,150),a.lookAt(0,30,0);const l=new up({antialias:!0});l.setSize(n,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.type=zf,l.toneMapping=Vf,l.toneMappingExposure=2,r.current.appendChild(l.domElement);const u=new hp(a,l.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.target.set(0,20,0),u.autoRotate=!0,u.autoRotateSpeed=1.3,u.update();const d=new sp(16777215,3);d.position.set(0,120,0),d.angle=.6,d.penumbra=.5,d.decay=1,d.distance=250,d.castShadow=!0,d.shadow.bias=-.001,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,t.add(d);const f=new cu(6316128,1.2);t.add(f);const p=new L_(16777215,4473924,1);p.position.set(0,200,0),t.add(p);const g=new op(16777215,1);g.position.set(100,150,50),g.castShadow=!0,t.add(g);const m=new Oo(200,200),_=new Pa({color:9340034,roughness:.4,metalness:.4}),M=new hn(m,_);M.rotation.x=-Math.PI/2,M.position.y=0,M.receiveShadow=!0,t.add(M);const y=new P_().load("/assets/uiacat/textures/Muchkin2_BaseColor.png");let x=null;new i2().load("/assets/uiacat/source/OiiaioooooiaiFin.fbx",ee=>{x=ee,ee.traverse(pe=>{pe instanceof hn&&(Array.isArray(pe.material)?pe.material.forEach(Ae=>{(Ae instanceof Pa||Ae instanceof To)&&(Ae.map=y,Ae.needsUpdate=!0)}):(pe.material instanceof Pa||pe.material instanceof To)&&(pe.material.map=y,pe.material.needsUpdate=!0),pe.castShadow=!0,pe.receiveShadow=!0)});const le=new As().setFromObject(ee),B=new H;le.getSize(B);const be=70/Math.max(B.x,B.y,B.z);ee.scale.set(be,be,be);const re=new H;le.getCenter(re),ee.position.sub(re.multiplyScalar(be)),ee.position.y=3,t.add(ee),d.target=ee;let he=0;const ve=()=>{if(requestAnimationFrame(ve),he+=.03,x){x.rotation.y=he*2;const pe=Math.abs(Math.sin(he*2))*8;x.position.y=10+pe}w.update(),C(),u.update(),l.render(t,a)};ve()},ee=>{console.log(ee.loaded/ee.total*100+"% loaded")},ee=>{console.error("Error loading FBX:",ee)});const w=new I_(d);w.visible=!1,t.add(w);const b=new N_(p,20);b.visible=!1,t.add(b);const k=new F_(g,10);k.visible=!1,t.add(k);const N=new ou(5,10,32),F=new $a({color:16776960,wireframe:!0}),I=new hn(N,F);I.position.copy(d.position),t.add(I);const C=()=>{const ee=new H;ee.subVectors(d.target.position,d.position).normalize();const le=new yn;le.setFromUnitVectors(new H(0,1,0),ee),I.setRotationFromQuaternion(le)},T=new du,U=T.addFolder("Luz Principal (Spot)");U.add(d.position,"x",-200,200,1).name("Pos X"),U.add(d.position,"y",0,300,1).name("Pos Y"),U.add(d.position,"z",-200,200,1).name("Pos Z"),U.add(d,"angle",0,Math.PI/2,.01).name("Ángulo"),U.add(d,"intensity",0,5,.01).name("Intensidad"),U.add(d,"penumbra",0,1,.01).name("Penumbra"),U.add(d,"decay",0,2,.01).name("Decay"),U.open();const Y=T.addFolder("Luz Ambiente");Y.add(f,"intensity",0,5,.1).name("Intensidad"),Y.open();const K=T.addFolder("Luz Hemisférica");K.add(p,"intensity",0,5,.1).name("Intensidad"),K.add(p.position,"x",-300,300,1).name("Pos X"),K.add(p.position,"y",0,300,1).name("Pos Y"),K.add(p.position,"z",-300,300,1).name("Pos Z"),K.open();const j=T.addFolder("Luz Direccional");j.add(g,"intensity",0,5,.1).name("Intensidad"),j.add(g.position,"x",-300,300,1).name("Pos X"),j.add(g.position,"y",0,300,1).name("Pos Y"),j.add(g.position,"z",-300,300,1).name("Pos Z"),j.open();const te=T.addFolder("Material Piso");te.addColor({color:_.color.getHex()},"color").name("Color Piso").onChange(ee=>{_.color.set(ee)}),te.add(_,"metalness",0,1,.01).name("Metalness"),te.add(_,"roughness",0,1,.01).name("Roughness"),te.open();const Q=T.addFolder("Cámara");Q.add(a.position,"x",-200,200,1).name("Pos X"),Q.add(a.position,"y",0,300,1).name("Pos Y"),Q.add(a.position,"z",0,300,1).name("Pos Z"),Q.add(u,"autoRotate").name("Auto Rotar"),Q.add(u,"autoRotateSpeed",-10,10,.1).name("Vel. Rotación"),Q.open();const ie=T.addFolder("Debug Helpers"),V={mainLightHelper:!1,hemiLightHelper:!1,dirLightHelper:!1};return ie.add(V,"mainLightHelper").name("Main Light Helper").onChange(ee=>{w.visible=ee}),ie.add(V,"hemiLightHelper").name("Hemisphere Helper").onChange(ee=>{b.visible=ee}),ie.add(V,"dirLightHelper").name("Dir Light Helper").onChange(ee=>{k.visible=ee}),ie.open(),()=>{T.destroy(),e&&e.removeChild(l.domElement),l.dispose()}},[]),P.jsx("div",{ref:r,className:"flex items-center justify-center",style:{width:"400px",height:"400px",transform:"scale(0.85)",transformOrigin:"center",margin:"-50px"}})}function g2({info:r,artType:e="donut"}){const t=()=>{switch(e){case"roach":return P.jsx(DR,{});case"cat":return P.jsx(m2,{});case"donut":default:return P.jsx(_R,{})}};return P.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start",children:[P.jsx("div",{className:"w-[200px] sm:w-[250px] md:w-[300px] shrink-0",children:t()}),P.jsxs("div",{className:"flex-grow text-xs sm:text-sm md:text-base",children:[P.jsxs("div",{className:"text-blue-400",children:[r.user,"@",P.jsx("span",{children:r.host})]}),P.jsx("div",{className:"text-gray-300",children:"---------------------"}),P.jsx("div",{className:"grid gap-1",children:[["OS",r.os],["Role",r.kernel],["Focus",r.focus],["Uptime",r.uptime],["Shell",r.shell],["Terminal",r.terminal],["Languages",r.skills.languages.map(n=>n.name).join(", ")],["Frameworks",r.skills.frameworks.map(n=>n.name).join(", ")],["Databases",[...r.skills.databases.relational,...r.skills.databases.nosql].join(", ")],["DevOps",r.skills.devops.map(n=>n.name).join(", ")],["Cloud",r.skills.cloud.map(n=>n.name).join(", ")],["Testing",r.skills.testing.map(n=>n.name).join(", ")]].map(([n,s])=>P.jsxs("div",{className:"flex flex-wrap",children:[P.jsxs("span",{className:"text-yellow-400 w-24 sm:w-28 md:w-32 shrink-0",children:[n,":"]}),P.jsx("span",{className:"text-gray-300 flex-1 break-words",children:s})]},n))})]})]})}const Uh=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"],v2=()=>{const[r,e]=J.useState([]),[t,n]=J.useState(!1),s=J.useCallback(()=>{e([])},[]),a=J.useCallback(()=>{n(!0),e([]),setTimeout(()=>{n(!1)},100)},[]);return J.useEffect(()=>{const l=u=>{if(u.target instanceof HTMLInputElement||u.target instanceof HTMLTextAreaElement)return;const{key:d}=u;if(!d.startsWith("Arrow")){r.length>0&&s();return}e(f=>{const p=[...f,d];return Uh.slice(0,p.length).every((m,_)=>m===p[_])?p.length===Uh.length?(a(),[]):p:d.startsWith("Arrow")?[d]:[]})};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[r,s,a]),J.useEffect(()=>{if(r.length>0){const l=setTimeout(()=>{s()},3e3);return()=>clearTimeout(l)}},[r,s]),{isActivated:t,currentSequence:r,progress:r.length/Uh.length*100}},_2=({isOpen:r,onClose:e,onSelectArt:t,currentArt:n})=>{const[s,a]=J.useState(null),l=[{id:"cat",name:"🐱 Dancing Cat",description:"Adorable dancing cat animation",preview:`
     /\\_/\\  
    ( o.o ) 
     > ^ <  
   Dancing!
      `},{id:"roach",name:"🪳 Dancing Roach",description:"Classic meme roach dance",preview:`
    /(   )\\
   (  \\_/  )
    |     |
   Dancing!
      `},{id:"donut",name:"🍩 Rotating Donut",description:"3D spinning donut animation",preview:`
      .===.
     (     )
      '==='
    Spinning!
      `}],u=f=>{t(f),e()},d=f=>{a(s===f?null:f)};return r?P.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[P.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:e}),P.jsxs("div",{className:"relative bg-gray-900 rounded-xl border border-gray-700 max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl",children:[P.jsx("div",{className:"bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white",children:P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx(EM,{className:"w-8 h-8"}),P.jsxs("div",{children:[P.jsx("h2",{className:"text-2xl font-bold",children:"🎮 Konami Code Activated!"}),P.jsx("p",{className:"text-blue-100",children:"Choose your secret ASCII art for neofetch"})]})]}),P.jsx("button",{onClick:e,className:"p-2 hover:bg-white/20 rounded-lg transition-colors",children:P.jsx(IM,{className:"w-6 h-6"})})]})}),P.jsxs("div",{className:"p-6 space-y-4 max-h-96 overflow-y-auto",children:[P.jsx("div",{className:"text-center mb-6",children:P.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300",children:[P.jsx("span",{children:"🎯"}),P.jsx("span",{children:"Secret Easter Egg Unlocked!"})]})}),l.map(f=>P.jsxs("div",{className:"space-y-2",children:[P.jsx("div",{className:`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${n===f.id?"border-blue-500 bg-blue-500/10":"border-gray-700 bg-gray-800/50 hover:border-gray-600"}`,onClick:()=>u(f.id),children:P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsxs("div",{className:"flex-1",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("h3",{className:"text-lg font-semibold text-white",children:f.name}),n===f.id&&P.jsx("span",{className:"px-2 py-1 bg-blue-500 text-white text-xs rounded-full",children:"Active"})]}),P.jsx("p",{className:"text-gray-400 text-sm mt-1",children:f.description})]}),P.jsx("button",{onClick:p=>{p.stopPropagation(),d(f.id)},className:"p-2 hover:bg-gray-700 rounded-lg transition-colors",children:s===f.id?P.jsx(SM,{className:"w-5 h-5 text-gray-400"}):P.jsx(MM,{className:"w-5 h-5 text-gray-400"})})]})}),s===f.id&&P.jsx("div",{className:"ml-4 p-3 bg-gray-900 rounded border-l-4 border-blue-500",children:P.jsx("pre",{className:"text-green-400 text-xs font-mono whitespace-pre",children:f.preview})})]},f.id))]}),P.jsx("div",{className:"border-t border-gray-700 p-4 bg-gray-800/50",children:P.jsxs("div",{className:"text-center text-xs text-gray-500",children:[P.jsx("p",{children:"🎮 Konami Code: ↑↑↓↓←→←→"}),P.jsx("p",{children:"Your selection will be saved for future neofetch commands"})]})})]})]}):null},x2=["neofetch","help","clear","ls","pwd","cat","cv","resume","projects","contact","tree"];function y2({userInfo:r={}}){const[e,t]=J.useState([]),[n,s]=J.useState([]),[a,l]=J.useState(-1),[u,d]=J.useState(""),[f,p]=J.useState([]),g=J.useRef(null),m=J.useRef(null),_=Nf(),{currentCommand:M,setCurrentCommand:E}=jv(),{isActivated:y}=v2(),{currentArt:x,setCurrentArt:R}=uM(),[w,b]=J.useState(!1),k=J.useMemo(()=>({...BM,...r}),[r]),N=J.useMemo(()=>new HM(k),[k]),F=J.useRef(!1),I=N.fileSystem,C=N.currentPath;J.useEffect(()=>{g.current&&g.current.focus()},[]);const T=J.useCallback((j,te)=>{const Q=j.trim();if(!Q)return;if(s(V=>[...V,Q].slice(-50)),l(-1),Q.toLowerCase()==="neofetch"){t(V=>[...V,{command:j,output:P.jsx(g2,{info:k,artType:te||x}),isNeofetch:!0}]);return}const ie=N.processCommand(j);ie===null?t([]):(t(V=>[...V,ie]),ie.action==="navigate"&&ie.path&&setTimeout(()=>_(ie.path),1e3))},[k,N,_,x]);J.useEffect(()=>{F.current||(T("neofetch"),E("help"),F.current=!0)},[T]),J.useEffect(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},[e]),J.useEffect(()=>{y&&b(!0)},[y]);const U=j=>{const[te,...Q]=j.split(" ");if(!j.includes(" ")){const ie=x2.filter(V=>V.startsWith(j.toLowerCase()));return p(ie.length>1?ie:[]),ie.length===1?ie[0].slice(j.length):""}if(te.toLowerCase()==="cat"&&Q.length<=1){const ie=I[C];if(ie){const V=Object.keys(ie),ee=Q[0]||"",le=V.filter(B=>B.startsWith(ee.toLowerCase()));if(p(le.length>1?le:[]),le.length===1)return le[0].slice(ee.length)}}if(n.length>0){const ie=n.filter(V=>V.startsWith(j)).slice(-3);if(ie.length>0){const V=ie[ie.length-1];if(V!==j)return V.slice(j.length)}}return p([]),""},Y=j=>{const te=j.target.value;E(te),d(U(te))},K=j=>{if(j.key==="Enter"){const te=M.trim();te&&(T(te),E(""),d(""))}else if(j.key==="Tab")j.preventDefault(),u&&(E(te=>te+u),d(""));else if(j.key==="ArrowUp"){if(j.preventDefault(),n.length>0){const te=a===-1?n.length-1:Math.max(0,a-1);l(te),E(n[te]),d("")}}else if(j.key==="ArrowDown"&&(j.preventDefault(),a>=0)){if(a===n.length-1)l(-1),E("");else{const te=a+1;l(te),E(n[te])}d("")}};return P.jsxs("div",{className:"p-2 sm:p-4 lg:p-6 border-none outline-none",children:[P.jsx("div",{className:"max-w-[90vw] xl:max-w-[75vw] 2xl:max-w-[65vw] mx-auto",children:P.jsxs("div",{className:"rounded-lg overflow-hidden shadow-xl transition-colors duration-300 border-2",style:{backgroundColor:"var(--terminal-bg)",borderColor:"var(--terminal-border)"},children:[P.jsxs("div",{className:"px-2 sm:px-4 py-1 sm:py-2 flex items-center transition-colors duration-300",style:{backgroundColor:"var(--bg-secondary)"},children:[P.jsxs("div",{className:"flex space-x-1 sm:space-x-2",children:[P.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"}),P.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),P.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"})]}),P.jsx("div",{className:"text-xs sm:text-sm mx-auto transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"Terminal"})]}),P.jsxs("div",{ref:m,className:`p-2 sm:p-4 md:p-6 font-mono text-xs sm:text-sm md:text-base \r
                                 h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[65vh]\r
                                 overflow-y-auto relative`,onClick:()=>g.current?.focus(),children:[e.map((j,te)=>P.jsxs("div",{className:"mb-2 sm:mb-4",children:[P.jsxs("div",{className:"break-all transition-colors duration-300",style:{color:"var(--terminal-prompt)"},children:["➜ ",j.command]}),P.jsx("div",{className:`${j.isNeofetch?"":"transition-colors duration-300"} break-words`,style:j.isNeofetch?{}:{color:"var(--terminal-text)"},children:j.output})]},te)),P.jsxs("div",{className:"flex items-center relative",children:[P.jsx("span",{className:"transition-colors duration-300",style:{color:"var(--terminal-prompt)"},children:"➜"}),P.jsxs("div",{className:"flex-1 ml-2 relative",children:[P.jsx("input",{ref:g,type:"text",value:M,onChange:Y,onKeyDown:K,className:"w-full bg-transparent outline-none transition-colors duration-300",style:{color:"var(--terminal-text)"},autoFocus:!0}),u&&P.jsx("span",{className:"absolute left-0 transition-colors duration-300",style:{paddingLeft:`${M.length}ch`,color:"var(--terminal-suggestion)"},children:u})]})]}),f.length>0&&P.jsxs("div",{className:"mt-2 text-xs transition-colors duration-300",style:{color:"var(--terminal-suggestion)"},children:[P.jsx("div",{className:"mb-1",children:"Available options:"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:f.map((j,te)=>P.jsx("span",{className:"px-2 py-1 rounded cursor-pointer hover:opacity-80 transition-all duration-300",style:{backgroundColor:"var(--bg-tertiary)",color:"var(--terminal-text)"},onClick:()=>{E(j),p([]),g.current?.focus()},children:j},te))}),P.jsx("div",{className:"mt-1 transition-colors duration-300",style:{color:"var(--terminal-suggestion)"},children:"Click to select or continue typing..."})]})]})]})}),P.jsx(_2,{isOpen:w,onClose:()=>b(!1),onSelectArt:j=>{R(j),setTimeout(()=>{T("clear"),setTimeout(()=>{T("neofetch",j)},100)},500)},currentArt:x})]})}const Tv=({name:r,color:e="blue"})=>P.jsx("span",{className:`bg-${e}-100 text-${e}-800 px-3 py-1 rounded-full text-sm`,children:r}),S2=()=>{const r=[{company:"Valposystems",period:"Octubre 2023 - Mayo 2025",location:"Talca, Chile",position:"Programador Full Stack",projects:[{name:"Proyecto EVAST",description:"Sistema de gestión de riesgos para la salud",responsibilities:["Diseño, desarrollo y mantenimiento de sistema de gestión de riesgos para la salud, enfocado en vigilancia ambiental y salud de trabajadores expuestos a agentes de riesgo.","Mantenimiento de la aplicación web EVAST, facilitando el ingreso y mantenimiento de registros de actividades de vigilancia ambiental y salud de trabajadores, incluyendo manejo del riesgo RPSL.","Implementación y mantenimiento de servicios backend, asegurando rendimiento óptimo y seguridad de datos.","Revisión de código y pruebas de integración para garantizar calidad y fiabilidad del software.","Implementación de mejoras continuas y correcciones basadas en feedback de usuarios."],integrations:["Implementación e integración de servicios SOAP para enviar documentos electrónicos al organismo SUSESO","Uso de JAXB para manipulación y transformación de e-docs","Cumplimiento de requerimientos normativos del Instituto de Seguridad Laboral (ISL)"],technologies:["Spring Boot","Apache Camel","Angular 8","Git","Gitflow","JBoss Fuse EAP","SQL Server","SCRUM","SOAP","JAXB"]}]},{company:"Gas Maule SPA",period:"Septiembre 2022 - Diciembre 2022",location:"Talca, Chile",position:"Programador Full Stack, Programador Móvil, Administrador de dominio, Administrador cloud",responsibilities:["Desarrollo de sistema existente basado en Laravel","Desarrollo de aplicación móvil de reparto de choferes en Android Studio","Desarrollo de aplicación móvil de pedido de gas clientes en Flutter","Administración de aplicaciones en servidores ECS Cloud (Huawei Cloud)","Gestión de página del dominio principal gasmaule.cl","Administración de Azure AD para correos institucionales"],technologies:["Laravel","Android Studio","Flutter","Huawei Cloud","Azure AD","PHP","MySQL","Git"]},{company:"Grupo Firma Holding Empresarial",period:"Octubre 2021 - Julio 2022",location:"Talca, Chile",position:"Programador Full Stack",description:"Desarrollo integral de sistema de RRHH",achievements:["Desarrollo de sistema completo para gestión de RRHH, incluyendo registro de empleados, liquidaciones y documentos","Creación de módulos para generación automática y distribución digital de documentos","Implementación de sistema de seguimiento de vacaciones y ausencias","Liderazgo de equipo de 4 desarrolladores","Aplicación de metodología de prototipos para desarrollo iterativo"],technologies:["NodeJS 16.0.0","Angular 13.0.0","MySQL","Git","Linux","SSH","PM2","Sequelize ORM","REST API","JWT"]},{company:"Ceho Servicios",period:"Febrero 2021 - Octubre 2021",location:"Regiones: V, VI, VII, VIII - Chile",position:"Soporte Informático en Terreno",responsibilities:["Asistencia técnica para equipos Totalpack, incluyendo instalaciones y mantención de hardware","Asistencia técnica para Atos, incluyendo instalación de telefonía IP y configuración de centrales telefónicas","Mantenimiento preventivo y correctivo de equipos","Configuración y mantenimiento de redes","Soporte técnico a usuarios finales"],technologies:["Windows Server","Redes IP","VoIP","Hardware","Soporte Técnico"]},{company:"Colegio San Ignacio de Talca",period:"Junio 2019 - Febrero 2020",location:"Talca, Chile",position:"Encargado Informático",responsibilities:["Soporte informático general","Administración de red interna","Mantenimiento de equipos computacionales","Gestión de sistemas de información educativa","Soporte a usuarios (profesores y personal administrativo)","Mantenimiento de infraestructura de red"],technologies:["Windows Server","Redes LAN/WAN","Active Directory","Soporte Técnico","Sistemas Educativos"]},{company:"Clínica Lircay",period:"Abril 2018 - Febrero 2019",location:"Talca, Chile",position:"Soporte Informático",responsibilities:["Administración y soporte de sistema propietario de procesos internos","Soporte informático general","Desarrollo de sistemas auxiliares en PHP","Mantenimiento de equipos médicos computarizados","Soporte a usuarios del sistema clínico","Gestión de respaldos y seguridad de datos"],technologies:["PHP","MySQL","Windows Server","Sistemas Clínicos","Redes","Backups","Soporte Técnico"]}];return P.jsxs("section",{className:"mb-8",children:[P.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-6 pb-2 flex items-center gap-2",children:[P.jsx(vM,{className:"w-6 h-6"}),"Experiencia Laboral"]}),P.jsx("div",{className:"space-y-8",children:r.map((e,t)=>P.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-6",children:[P.jsxs("div",{className:"flex justify-between items-start mb-4",children:[P.jsxs("div",{children:[P.jsx("h3",{className:"text-xl font-bold text-gray-800",children:e.company}),P.jsx("p",{className:"text-gray-600 font-semibold",children:e.position}),P.jsx("p",{className:"text-gray-500",children:e.location})]}),P.jsx("span",{className:"text-gray-600 font-medium",children:e.period})]}),e.description&&P.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),e.projects&&e.projects.map((n,s)=>P.jsxs("div",{className:"mt-4",children:[P.jsx("h4",{className:"text-lg font-semibold text-gray-700 mb-2",children:n.name}),P.jsx("p",{className:"text-gray-600 mb-3",children:n.description}),n.responsibilities&&P.jsx("div",{className:"mb-4",children:P.jsx("ul",{className:"list-disc pl-4 space-y-2",children:n.responsibilities.map((a,l)=>P.jsx("li",{className:"text-gray-600",children:a},l))})}),n.integrations&&P.jsxs("div",{className:"mb-4",children:[P.jsxs("h5",{className:"font-semibold text-gray-700 mb-2 flex items-center gap-2",children:[P.jsx(DM,{className:"w-4 h-4"}),"Integraciones"]}),P.jsx("ul",{className:"list-disc pl-4 space-y-2",children:n.integrations.map((a,l)=>P.jsx("li",{className:"text-gray-600",children:a},l))})]}),n.technologies&&P.jsxs("div",{className:"mt-4",children:[P.jsx("h5",{className:"font-semibold text-gray-700 mb-2",children:"Tecnologías"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:n.technologies.map((a,l)=>P.jsx(Tv,{name:a},l))})]})]},s)),e.responsibilities&&P.jsx("div",{className:"mt-4",children:P.jsx("ul",{className:"list-disc pl-4 space-y-2",children:e.responsibilities.map((n,s)=>P.jsx("li",{className:"text-gray-600",children:n},s))})}),e.achievements&&P.jsxs("div",{className:"mt-4",children:[P.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"Logros principales"}),P.jsx("ul",{className:"list-disc pl-4 space-y-2",children:e.achievements.map((n,s)=>P.jsx("li",{className:"text-gray-600",children:n},s))})]}),e.technologies&&P.jsxs("div",{className:"mt-4",children:[P.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"Tecnologías utilizadas"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:e.technologies.map((n,s)=>P.jsx(Tv,{name:n},s))})]})]},t))})]})},M2=()=>{const r={languages:[{name:"Java",details:"Java 1.8, Java 11"},{name:"Python 3+"},{name:"PHP"},{name:"JavaScript/TypeScript"},{name:".NET"}],frameworks:[{name:"Spring Boot"},{name:"Laravel 7"},{name:"NodeJS 16+"},{name:"Angular 13+"},{name:"Ionic Angular"},{name:"Flask",details:"Python Web Framework"}],databases:{relational:["MySQL","PostgreSQL","Microsoft SQL","Oracle","MariaDB"],nosql:["MongoDB","Redis","Cassandra"]},devops:[{name:"Docker",level:"Avanzado"},{name:"Jenkins",details:"Pipelines, CI/CD"},{name:"Linux",details:"Administración de servidores"},{name:"GitHub Actions"}],cloud:[{name:"Railway"},{name:"AWS",details:"EC2"},{name:"VPN",details:"WireGuard"}],mobile:[{name:"Android Studio"},{name:"Flutter",details:"Publicación en Play Store"},{name:"Ionic Angular"}],testing:[{name:"Postman",details:"API Testing"},{name:"SonarQube",details:"Análisis de código"},{name:"Unit Testing"}],other:[{name:"WebSockets"},{name:"OAuth 2.0/JWT"},{name:"SSL/TLS"},{name:"Scrum"},{name:"Networking"}]};return P.jsxs("section",{className:"mb-8",children:[P.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:[P.jsx(Qv,{className:"inline-block w-6 h-6 mr-2"}),"Habilidades Técnicas"]}),P.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[P.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[P.jsx("h3",{className:"font-semibold mb-3",children:"Lenguajes y Frameworks"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:[...r.languages,...r.frameworks].map(e=>P.jsx("span",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]}),P.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[P.jsx("h3",{className:"font-semibold mb-3",children:"Bases de Datos"}),P.jsxs("div",{className:"mb-2",children:[P.jsx("h4",{className:"text-sm text-gray-600 mb-1",children:"Relacionales"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r.databases.relational.map(e=>P.jsx("span",{className:"bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm",children:e},e))})]}),P.jsxs("div",{children:[P.jsx("h4",{className:"text-sm text-gray-600 mb-1",children:"NoSQL"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r.databases.nosql.map(e=>P.jsx("span",{className:"bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm",children:e},e))})]})]}),P.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[P.jsx("h3",{className:"font-semibold mb-3",children:"DevOps & Cloud"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:[...r.devops,...r.cloud].map(e=>P.jsx("span",{className:"bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm",children:e.details||e.level?`${e.name} (${e.details||e.level})`:e.name},e.name))})]}),P.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[P.jsx("h3",{className:"font-semibold mb-3",children:"Desarrollo Móvil"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r.mobile.map(e=>P.jsx("span",{className:"bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]}),P.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[P.jsx("h3",{className:"font-semibold mb-3",children:"Testing y Herramientas"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r.testing.map(e=>P.jsx("span",{className:"bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]}),P.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[P.jsx("h3",{className:"font-semibold mb-3",children:"Otras Habilidades"}),P.jsx("div",{className:"flex flex-wrap gap-2",children:r.other.map(e=>P.jsx("span",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]})]})]})},E2=()=>{const r=[{period:"Marzo 2019 - Diciembre 2020",institution:"Universidad Católica del Maule",location:"Talca, Chile",degree:"Ingeniería en Ejecución Informática",status:"Egresado (No titulado)",type:"university"},{period:"Marzo 2016 - Diciembre 2018",institution:"Centro de formación técnica San Agustín",location:"Talca, Chile",degree:"Analista Programador",status:"Titulado",type:"technical"},{period:"Marzo 2012 - Diciembre 2015",institution:"Centro Educacional Luis Rutten",location:"Talca, Chile",degree:"Mecánica Automotriz",status:"Titulado",type:"highschool"}];return P.jsxs("section",{className:"mb-8",children:[P.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:[P.jsx(gM,{className:"inline-block w-6 h-6 mr-2"}),"Educación"]}),P.jsx("div",{className:"space-y-4",children:r.map((e,t)=>P.jsx("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm",children:P.jsx("div",{className:"flex justify-between items-start",children:P.jsxs("div",{className:"space-y-2",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(TM,{className:"w-5 h-5 text-gray-600"}),P.jsx("h3",{className:"font-bold text-gray-800 text-lg",children:e.institution})]}),P.jsx("div",{className:"text-gray-700 font-medium",children:e.degree}),P.jsxs("div",{className:"flex items-center gap-4 text-gray-600 text-sm",children:[P.jsxs("div",{className:"flex items-center gap-1",children:[P.jsx(Jv,{className:"w-4 h-4"}),e.location]}),P.jsxs("div",{className:"flex items-center gap-1",children:[P.jsx(zh,{className:"w-4 h-4"}),e.period]})]}),P.jsx("div",{className:`inline-block px-3 py-1 rounded-full text-sm ${e.status==="Titulado"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:e.status})]})})},t))})]})},w2=()=>{const r=[{title:"Scrum Fundamentals",org:"SCRUMstudy",validationType:"link",validation:"https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-luisestebanc%C3%A9spedessepulveda.-932279.pdf",icon:"🏆"},{title:"Desarrollo de aplicaciones JAVA",org:"MindHub",validationType:"link",validation:"https://www.credly.com/badges/2c88e9d6-41e6-4aab-8bdf-084e66cf782b",icon:"☕"},{title:"Programador Angular",org:"Edutin Academy",validationType:"link",validation:"https://app.edutin.com/verify/10410494",icon:"🅰️"}];return P.jsxs("section",{className:"mb-8",children:[P.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:[P.jsx(mM,{className:"inline-block w-6 h-6 mr-2"}),"Certificaciones"]}),P.jsx("div",{className:"grid grid-cols-1 gap-4",children:r.map((e,t)=>P.jsx("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow",children:P.jsxs("div",{className:"flex items-start gap-3",children:[P.jsx("span",{className:"text-2xl",role:"img","aria-label":"certificate icon",children:e.icon}),P.jsxs("div",{className:"flex-1",children:[P.jsxs("div",{className:"flex justify-between items-start",children:[P.jsx("h3",{className:"font-bold text-gray-800",children:e.title}),P.jsx("span",{className:"bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full",children:e.org})]}),P.jsx("div",{className:"mt-2 flex items-center gap-2 text-sm",children:e.validationType==="link"?P.jsxs(P.Fragment,{children:[P.jsx(AM,{className:"w-4 h-4 text-gray-600"}),P.jsx("a",{href:e.validation,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Verificar certificación"})]}):P.jsxs(P.Fragment,{children:[P.jsx(_M,{className:"w-4 h-4 text-gray-600"}),P.jsxs("span",{className:"text-gray-600",children:["Código de validación: ",e.validation]})]})})]})]})},t))})]})},fp=new Date(1997,5,20),pp=new Date;let J_=pp.getFullYear()-fp.getFullYear();const bv=pp.getMonth()-fp.getMonth();(bv<0||bv===0&&pp.getDate()<fp.getDate())&&J_--;const T2=()=>P.jsx("div",{className:"p-8",children:P.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-lg shadow-xl font-sans p-8",children:[P.jsxs("header",{className:"text-center mb-8",children:[P.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"Luis Esteban Céspedes Sepulveda"}),P.jsxs("div",{className:"flex justify-center gap-6 text-gray-600",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(Zv,{className:"w-4 h-4"}),P.jsx("span",{children:"luis.cespedes.sep01@gmail.com"})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(PM,{className:"w-4 h-4"}),P.jsx("span",{children:"(+569) 53618681"})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(Jv,{className:"w-4 h-4"}),P.jsx("span",{children:"Maule, Chile"})]})]})]}),P.jsxs("section",{className:"mb-8",children:[P.jsx("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:"Información Personal"}),P.jsxs("div",{className:"grid grid-cols-2 gap-4 text-gray-600",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(zh,{className:"w-4 h-4"}),P.jsxs("span",{children:["Edad: ",J_," años"]})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(zh,{className:"w-4 h-4"}),P.jsx("span",{children:"Fecha de Nacimiento: 20/06/1997"})]})]})]}),P.jsx(S2,{}),P.jsx(M2,{}),P.jsx(E2,{}),P.jsx(w2,{})]})});function b2(){return P.jsx(cM,{children:P.jsx(dM,{children:P.jsx(lM,{children:P.jsx(OM,{children:P.jsxs(RS,{children:[P.jsx(Oh,{path:"/",element:P.jsx(y2,{})}),P.jsx(Oh,{path:"/cv",element:P.jsx(T2,{})})]})})})})})}By.createRoot(document.getElementById("root")).render(P.jsx(J.StrictMode,{children:P.jsx(JS,{children:P.jsx(b2,{})})}));
