(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Hd={exports:{}},_a={},Gd={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Rx(){if(Ug)return yt;Ug=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(O,oe,Ae){this.props=O,this.context=oe,this.refs=E,this.updater=Ae||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,oe){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,oe,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(O,oe,Ae){this.props=O,this.context=oe,this.refs=E,this.updater=Ae||y}var w=C.prototype=new _;w.constructor=C,M(w,x.prototype),w.isPureReactComponent=!0;var T=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function B(O,oe,Ae){var re,he={},ve=null,pe=null;if(oe!=null)for(re in oe.ref!==void 0&&(pe=oe.ref),oe.key!==void 0&&(ve=""+oe.key),oe)U.call(oe,re)&&!N.hasOwnProperty(re)&&(he[re]=oe[re]);var be=arguments.length-2;if(be===1)he.children=Ae;else if(1<be){for(var Ie=Array(be),qe=0;qe<be;qe++)Ie[qe]=arguments[qe+2];he.children=Ie}if(O&&O.defaultProps)for(re in be=O.defaultProps,be)he[re]===void 0&&(he[re]=be[re]);return{$$typeof:r,type:O,key:ve,ref:pe,props:he,_owner:I.current}}function R(O,oe){return{$$typeof:r,type:O.type,key:oe,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function F(O){var oe={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return oe[Ae]})}var q=/\/+/g;function Z(O,oe){return typeof O=="object"&&O!==null&&O.key!=null?F(""+O.key):oe.toString(36)}function j(O,oe,Ae,re,he){var ve=typeof O;(ve==="undefined"||ve==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(ve){case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case r:case e:pe=!0}}if(pe)return pe=O,he=he(pe),O=re===""?"."+Z(pe,0):re,T(he)?(Ae="",O!=null&&(Ae=O.replace(q,"$&/")+"/"),j(he,oe,Ae,"",function(qe){return qe})):he!=null&&(A(he)&&(he=R(he,Ae+(!he.key||pe&&pe.key===he.key?"":(""+he.key).replace(q,"$&/")+"/")+O)),oe.push(he)),1;if(pe=0,re=re===""?".":re+":",T(O))for(var be=0;be<O.length;be++){ve=O[be];var Ie=re+Z(ve,be);pe+=j(ve,oe,Ae,Ie,he)}else if(Ie=m(O),typeof Ie=="function")for(O=Ie.call(O),be=0;!(ve=O.next()).done;)ve=ve.value,Ie=re+Z(ve,be++),pe+=j(ve,oe,Ae,Ie,he);else if(ve==="object")throw oe=String(O),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return pe}function ee(O,oe,Ae){if(O==null)return O;var re=[],he=0;return j(O,re,"","",function(ve){return oe.call(Ae,ve,he++)}),re}function J(O){if(O._status===-1){var oe=O._result;oe=oe(),oe.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=oe)}if(O._status===1)return O._result.default;throw O._result}var ne={current:null},V={transition:null},Q={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:V,ReactCurrentOwner:I};function le(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:ee,forEach:function(O,oe,Ae){ee(O,function(){oe.apply(this,arguments)},Ae)},count:function(O){var oe=0;return ee(O,function(){oe++}),oe},toArray:function(O){return ee(O,function(oe){return oe})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=x,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=C,yt.StrictMode=n,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,yt.act=le,yt.cloneElement=function(O,oe,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var re=M({},O.props),he=O.key,ve=O.ref,pe=O._owner;if(oe!=null){if(oe.ref!==void 0&&(ve=oe.ref,pe=I.current),oe.key!==void 0&&(he=""+oe.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for(Ie in oe)U.call(oe,Ie)&&!N.hasOwnProperty(Ie)&&(re[Ie]=oe[Ie]===void 0&&be!==void 0?be[Ie]:oe[Ie])}var Ie=arguments.length-2;if(Ie===1)re.children=Ae;else if(1<Ie){be=Array(Ie);for(var qe=0;qe<Ie;qe++)be[qe]=arguments[qe+2];re.children=be}return{$$typeof:r,type:O.type,key:he,ref:ve,props:re,_owner:pe}},yt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},yt.createElement=B,yt.createFactory=function(O){var oe=B.bind(null,O);return oe.type=O,oe},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:u,render:O}},yt.isValidElement=A,yt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:J}},yt.memo=function(O,oe){return{$$typeof:f,type:O,compare:oe===void 0?null:oe}},yt.startTransition=function(O){var oe=V.transition;V.transition={};try{O()}finally{V.transition=oe}},yt.unstable_act=le,yt.useCallback=function(O,oe){return ne.current.useCallback(O,oe)},yt.useContext=function(O){return ne.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return ne.current.useDeferredValue(O)},yt.useEffect=function(O,oe){return ne.current.useEffect(O,oe)},yt.useId=function(){return ne.current.useId()},yt.useImperativeHandle=function(O,oe,Ae){return ne.current.useImperativeHandle(O,oe,Ae)},yt.useInsertionEffect=function(O,oe){return ne.current.useInsertionEffect(O,oe)},yt.useLayoutEffect=function(O,oe){return ne.current.useLayoutEffect(O,oe)},yt.useMemo=function(O,oe){return ne.current.useMemo(O,oe)},yt.useReducer=function(O,oe,Ae){return ne.current.useReducer(O,oe,Ae)},yt.useRef=function(O){return ne.current.useRef(O)},yt.useState=function(O){return ne.current.useState(O)},yt.useSyncExternalStore=function(O,oe,Ae){return ne.current.useSyncExternalStore(O,oe,Ae)},yt.useTransition=function(){return ne.current.useTransition()},yt.version="18.3.1",yt}var kg;function Lf(){return kg||(kg=1,Gd.exports=Rx()),Gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Px(){if(Og)return _a;Og=1;var r=Lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var p,g={},m=null,y=null;f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return _a.Fragment=t,_a.jsx=c,_a.jsxs=c,_a}var Bg;function Lx(){return Bg||(Bg=1,Hd.exports=Px()),Hd.exports}var L=Lx(),ie=Lf(),nc={},Wd={exports:{}},Kn={},jd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Dx(){return zg||(zg=1,function(r){function e(V,Q){var le=V.length;V.push(Q);e:for(;0<le;){var O=le-1>>>1,oe=V[O];if(0<s(oe,Q))V[O]=Q,V[le]=oe,le=O;else break e}}function t(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var Q=V[0],le=V.pop();if(le!==Q){V[0]=le;e:for(var O=0,oe=V.length,Ae=oe>>>1;O<Ae;){var re=2*(O+1)-1,he=V[re],ve=re+1,pe=V[ve];if(0>s(he,le))ve<oe&&0>s(pe,he)?(V[O]=pe,V[ve]=le,O=ve):(V[O]=he,V[re]=le,O=re);else if(ve<oe&&0>s(pe,le))V[O]=pe,V[ve]=le,O=ve;else break e}}return Q}function s(V,Q){var le=V.sortIndex-Q.sortIndex;return le!==0?le:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();r.unstable_now=function(){return c.now()-u}}var d=[],f=[],p=1,g=null,m=3,y=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(V){for(var Q=t(f);Q!==null;){if(Q.callback===null)n(f);else if(Q.startTime<=V)n(f),Q.sortIndex=Q.expirationTime,e(d,Q);else break;Q=t(f)}}function T(V){if(E=!1,w(V),!M)if(t(d)!==null)M=!0,J(U);else{var Q=t(f);Q!==null&&ne(T,Q.startTime-V)}}function U(V,Q){M=!1,E&&(E=!1,_(B),B=-1),y=!0;var le=m;try{for(w(Q),g=t(d);g!==null&&(!(g.expirationTime>Q)||V&&!F());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var oe=O(g.expirationTime<=Q);Q=r.unstable_now(),typeof oe=="function"?g.callback=oe:g===t(d)&&n(d),w(Q)}else n(d);g=t(d)}if(g!==null)var Ae=!0;else{var re=t(f);re!==null&&ne(T,re.startTime-Q),Ae=!1}return Ae}finally{g=null,m=le,y=!1}}var I=!1,N=null,B=-1,R=5,A=-1;function F(){return!(r.unstable_now()-A<R)}function q(){if(N!==null){var V=r.unstable_now();A=V;var Q=!0;try{Q=N(!0,V)}finally{Q?Z():(I=!1,N=null)}}else I=!1}var Z;if(typeof C=="function")Z=function(){C(q)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ee=j.port2;j.port1.onmessage=q,Z=function(){ee.postMessage(null)}}else Z=function(){x(q,0)};function J(V){N=V,I||(I=!0,Z())}function ne(V,Q){B=x(function(){V(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,J(U))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(V){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var le=m;m=Q;try{return V()}finally{m=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=m;m=V;try{return Q()}finally{m=le}},r.unstable_scheduleCallback=function(V,Q,le){var O=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,V){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=le+oe,V={id:p++,callback:Q,priorityLevel:V,startTime:le,expirationTime:oe,sortIndex:-1},le>O?(V.sortIndex=le,e(f,V),t(d)===null&&V===t(f)&&(E?(_(B),B=-1):E=!0,ne(T,le-O))):(V.sortIndex=oe,e(d,V),M||y||(M=!0,J(U))),V},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(V){var Q=m;return function(){var le=m;m=Q;try{return V.apply(this,arguments)}finally{m=le}}}}(Xd)),Xd}var Vg;function Ix(){return Vg||(Vg=1,jd.exports=Dx()),jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Nx(){if(Hg)return Kn;Hg=1;var r=Lf(),e=Ix();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){c(i,o),c(i+"Capture",o)}function c(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(i){return d.call(g,i)?!0:d.call(p,i)?!1:f.test(i)?g[i]=!0:(p[i]=!0,!1)}function y(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,l,h){if(o===null||typeof o>"u"||y(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(i,o,l,h,v,S,b){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=S,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new E(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(_,C);x[o]=new E(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(_,C);x[o]=new E(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(_,C);x[o]=new E(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function w(i,o,l,h){var v=x.hasOwnProperty(o)?x[o]:null;(v!==null?v.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,l,v,h)&&(l=null),h||v===null?m(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):v.mustUseProperty?i[v.propertyName]=l===null?v.type===3?!1:"":l:(o=v.attributeName,h=v.attributeNamespace,l===null?i.removeAttribute(o):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),F=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),V=Symbol.iterator;function Q(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,O;function oe(i){if(O===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);O=o&&o[1]||""}return`
`+O+i}var Ae=!1;function re(i,o){if(!i||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ce){var h=ce}Reflect.construct(i,[],o)}else{try{o.call()}catch(ce){h=ce}i.call(o.prototype)}else{try{throw Error()}catch(ce){h=ce}i()}}catch(ce){if(ce&&h&&typeof ce.stack=="string"){for(var v=ce.stack.split(`
`),S=h.stack.split(`
`),b=v.length-1,z=S.length-1;1<=b&&0<=z&&v[b]!==S[z];)z--;for(;1<=b&&0<=z;b--,z--)if(v[b]!==S[z]){if(b!==1||z!==1)do if(b--,z--,0>z||v[b]!==S[z]){var G=`
`+v[b].replace(" at new "," at ");return i.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",i.displayName)),G}while(1<=b&&0<=z);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?oe(i):""}function he(i){switch(i.tag){case 5:return oe(i.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return i=re(i.type,!1),i;case 11:return i=re(i.type.render,!1),i;case 1:return i=re(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case I:return"Portal";case R:return"Profiler";case B:return"StrictMode";case Z:return"Suspense";case j:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case F:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case q:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ee:return o=i.displayName||null,o!==null?o:ve(i.type)||"Memo";case J:o=i._payload,i=i._init;try{return ve(i(o))}catch{}}return null}function pe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(o);case 8:return o===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function qe(i){var o=Ie(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,S=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return v.call(this)},set:function(b){h=""+b,S.call(this,b)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(b){h=""+b},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Lt(i){i._valueTracker||(i._valueTracker=qe(i))}function pt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Ie(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function W(i,o){var l=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Fn(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=be(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function xt(i,o){o=o.checked,o!=null&&w(i,"checked",o,!1)}function vt(i,o){xt(i,o);var l=be(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Nt(i,o.type,l):o.hasOwnProperty("defaultValue")&&Nt(i,o.type,be(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Ye(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Nt(i,o,l){(o!=="number"||It(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Xe=Array.isArray;function k(i,o,l,h){if(i=i.options,o){o={};for(var v=0;v<l.length;v++)o["$"+l[v]]=!0;for(l=0;l<i.length;l++)v=o.hasOwnProperty("$"+i[l].value),i[l].selected!==v&&(i[l].selected=v),v&&h&&(i[l].defaultSelected=!0)}else{for(l=""+be(l),o=null,v=0;v<i.length;v++){if(i[v].value===l){i[v].selected=!0,h&&(i[v].defaultSelected=!0);return}o!==null||i[v].disabled||(o=i[v])}o!==null&&(o.selected=!0)}}function P(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ae(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:be(l)}}function _e(i,o){var l=be(o.value),h=be(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function xe(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?me(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,ke=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,v){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,v)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function mt(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){ze.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),we[o]=we[i]})});function Qe(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||we.hasOwnProperty(i)&&we[i]?(""+o).trim():o+"px"}function it(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,v=Qe(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,v):i[l]=v}}var Ve=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(i,o){if(o){if(Ve[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function at(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function Y(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,fe=null,ge=null;function Ne(i){if(i=ia(i)){if(typeof Re!="function")throw Error(t(280));var o=i.stateNode;o&&(o=vl(o),Re(i.stateNode,i.type,o))}}function De(i){fe?ge?ge.push(i):ge=[i]:fe=i}function lt(){if(fe){var i=fe,o=ge;if(ge=fe=null,Ne(i),o)for(i=0;i<o.length;i++)Ne(o[i])}}function Ht(i,o){return i(o)}function an(){}var Tt=!1;function Wn(i,o,l){if(Tt)return i(o,l);Tt=!0;try{return Ht(i,o,l)}finally{Tt=!1,(fe!==null||ge!==null)&&(an(),lt())}}function Un(i,o){var l=i.stateNode;if(l===null)return null;var h=vl(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var bs=!1;if(u)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){bs=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{bs=!1}function Vi(i,o,l,h,v,S,b,z,G){var ce=Array.prototype.slice.call(arguments,3);try{o.apply(l,ce)}catch(Se){this.onError(Se)}}var Hi=!1,Kr=null,Zr=!1,pr=null,Ka={onError:function(i){Hi=!0,Kr=i}};function Cs(i,o,l,h,v,S,b,z,G){Hi=!1,Kr=null,Vi.apply(Ka,arguments)}function Za(i,o,l,h,v,S,b,z,G){if(Cs.apply(this,arguments),Hi){if(Hi){var ce=Kr;Hi=!1,Kr=null}else throw Error(t(198));Zr||(Zr=!0,pr=ce)}}function Ri(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Ja(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Qa(i){if(Ri(i)!==i)throw Error(t(188))}function du(i){var o=i.alternate;if(!o){if(o=Ri(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var v=l.return;if(v===null)break;var S=v.alternate;if(S===null){if(h=v.return,h!==null){l=h;continue}break}if(v.child===S.child){for(S=v.child;S;){if(S===l)return Qa(v),i;if(S===h)return Qa(v),o;S=S.sibling}throw Error(t(188))}if(l.return!==h.return)l=v,h=S;else{for(var b=!1,z=v.child;z;){if(z===l){b=!0,l=v,h=S;break}if(z===h){b=!0,h=v,l=S;break}z=z.sibling}if(!b){for(z=S.child;z;){if(z===l){b=!0,l=S,h=v;break}if(z===h){b=!0,h=S,l=v;break}z=z.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function el(i){return i=du(i),i!==null?tl(i):null}function tl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=tl(i);if(o!==null)return o;i=i.sibling}return null}var D=e.unstable_scheduleCallback,K=e.unstable_cancelCallback,ue=e.unstable_shouldYield,de=e.unstable_requestPaint,X=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,rt=e.unstable_LowPriority,st=e.unstable_IdlePriority,$e=null,ct=null;function bt(i){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot($e,i,void 0,(i.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Je,$t=Math.log,wt=Math.LN2;function Je(i){return i>>>=0,i===0?32:31-($t(i)/wt|0)|0}var Qt=64,Et=4194304;function Sn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function gi(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,v=i.suspendedLanes,S=i.pingedLanes,b=l&268435455;if(b!==0){var z=b&~v;z!==0?h=Sn(z):(S&=b,S!==0&&(h=Sn(S)))}else b=l&~v,b!==0?h=Sn(b):S!==0&&(h=Sn(S));if(h===0)return 0;if(o!==0&&o!==h&&(o&v)===0&&(v=h&-h,S=o&-o,v>=S||v===16&&(S&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-Ct(o),v=1<<l,h|=i[l],o&=~v;return h}function kn(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,v=i.expirationTimes,S=i.pendingLanes;0<S;){var b=31-Ct(S),z=1<<b,G=v[b];G===-1?((z&l)===0||(z&h)!==0)&&(v[b]=kn(z,o)):G<=o&&(i.expiredLanes|=z),S&=~z}}function Ut(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function On(){var i=Qt;return Qt<<=1,(Qt&4194240)===0&&(Qt=64),i}function An(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function tn(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Ct(o),i[o]=l}function bn(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var v=31-Ct(l),S=1<<v;o[v]=0,h[v]=-1,i[v]=-1,l&=~S}}function Qr(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-Ct(l),v=1<<h;v&o|i[h]&o&&(i[h]|=o),l&=~v}}var St=0;function pp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var mp,hu,gp,vp,_p,fu=!1,nl=[],mr=null,gr=null,vr=null,Vo=new Map,Ho=new Map,_r=[],Z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(i,o){switch(i){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Vo.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(o.pointerId)}}function Go(i,o,l,h,v,S){return i===null||i.nativeEvent!==S?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:S,targetContainers:[v]},o!==null&&(o=ia(o),o!==null&&hu(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),i)}function J_(i,o,l,h,v){switch(o){case"focusin":return mr=Go(mr,i,o,l,h,v),!0;case"dragenter":return gr=Go(gr,i,o,l,h,v),!0;case"mouseover":return vr=Go(vr,i,o,l,h,v),!0;case"pointerover":var S=v.pointerId;return Vo.set(S,Go(Vo.get(S)||null,i,o,l,h,v)),!0;case"gotpointercapture":return S=v.pointerId,Ho.set(S,Go(Ho.get(S)||null,i,o,l,h,v)),!0}return!1}function xp(i){var o=es(i.target);if(o!==null){var l=Ri(o);if(l!==null){if(o=l.tag,o===13){if(o=Ja(l),o!==null){i.blockedOn=o,_p(i.priority,function(){gp(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function il(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=mu(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Dt=h,l.target.dispatchEvent(h),Dt=null}else return o=ia(l),o!==null&&hu(o),i.blockedOn=l,!1;o.shift()}return!0}function Sp(i,o,l){il(i)&&l.delete(o)}function Q_(){fu=!1,mr!==null&&il(mr)&&(mr=null),gr!==null&&il(gr)&&(gr=null),vr!==null&&il(vr)&&(vr=null),Vo.forEach(Sp),Ho.forEach(Sp)}function Wo(i,o){i.blockedOn===o&&(i.blockedOn=null,fu||(fu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q_)))}function jo(i){function o(v){return Wo(v,i)}if(0<nl.length){Wo(nl[0],i);for(var l=1;l<nl.length;l++){var h=nl[l];h.blockedOn===i&&(h.blockedOn=null)}}for(mr!==null&&Wo(mr,i),gr!==null&&Wo(gr,i),vr!==null&&Wo(vr,i),Vo.forEach(o),Ho.forEach(o),l=0;l<_r.length;l++)h=_r[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<_r.length&&(l=_r[0],l.blockedOn===null);)xp(l),l.blockedOn===null&&_r.shift()}var Rs=T.ReactCurrentBatchConfig,rl=!0;function ey(i,o,l,h){var v=St,S=Rs.transition;Rs.transition=null;try{St=1,pu(i,o,l,h)}finally{St=v,Rs.transition=S}}function ty(i,o,l,h){var v=St,S=Rs.transition;Rs.transition=null;try{St=4,pu(i,o,l,h)}finally{St=v,Rs.transition=S}}function pu(i,o,l,h){if(rl){var v=mu(i,o,l,h);if(v===null)Du(i,o,h,sl,l),yp(i,h);else if(J_(v,i,o,l,h))h.stopPropagation();else if(yp(i,h),o&4&&-1<Z_.indexOf(i)){for(;v!==null;){var S=ia(v);if(S!==null&&mp(S),S=mu(i,o,l,h),S===null&&Du(i,o,h,sl,l),S===v)break;v=S}v!==null&&h.stopPropagation()}else Du(i,o,h,null,l)}}var sl=null;function mu(i,o,l,h){if(sl=null,i=Y(h),i=es(i),i!==null)if(o=Ri(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Ja(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return sl=i,null}function Mp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Pe:return 1;case Ue:return 4;case Oe:case rt:return 16;case st:return 536870912;default:return 16}default:return 16}}var yr=null,gu=null,ol=null;function Ep(){if(ol)return ol;var i,o=gu,l=o.length,h,v="value"in yr?yr.value:yr.textContent,S=v.length;for(i=0;i<l&&o[i]===v[i];i++);var b=l-i;for(h=1;h<=b&&o[l-h]===v[S-h];h++);return ol=v.slice(i,1<h?1-h:void 0)}function al(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function ll(){return!0}function wp(){return!1}function ei(i){function o(l,h,v,S,b){this._reactName=l,this._targetInst=v,this.type=h,this.nativeEvent=S,this.target=b,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(S):S[z]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?ll:wp,this.isPropagationStopped=wp,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),o}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=ei(Ps),Xo=le({},Ps,{view:0,detail:0}),ny=ei(Xo),_u,yu,$o,cl=le({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==$o&&($o&&i.type==="mousemove"?(_u=i.screenX-$o.screenX,yu=i.screenY-$o.screenY):yu=_u=0,$o=i),_u)},movementY:function(i){return"movementY"in i?i.movementY:yu}}),Tp=ei(cl),iy=le({},cl,{dataTransfer:0}),ry=ei(iy),sy=le({},Xo,{relatedTarget:0}),xu=ei(sy),oy=le({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=ei(oy),ly=le({},Ps,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),cy=ei(ly),uy=le({},Ps,{data:0}),Ap=ei(uy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=fy[i])?!!o[i]:!1}function Su(){return py}var my=le({},Xo,{key:function(i){if(i.key){var o=dy[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=al(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?hy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(i){return i.type==="keypress"?al(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?al(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),gy=ei(my),vy=le({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=ei(vy),_y=le({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),yy=ei(_y),xy=le({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=ei(xy),My=le({},cl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=ei(My),wy=[9,13,27,32],Mu=u&&"CompositionEvent"in window,Yo=null;u&&"documentMode"in document&&(Yo=document.documentMode);var Ty=u&&"TextEvent"in window&&!Yo,Cp=u&&(!Mu||Yo&&8<Yo&&11>=Yo),Rp=" ",Pp=!1;function Lp(i,o){switch(i){case"keyup":return wy.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ls=!1;function Ay(i,o){switch(i){case"compositionend":return Dp(o);case"keypress":return o.which!==32?null:(Pp=!0,Rp);case"textInput":return i=o.data,i===Rp&&Pp?null:i;default:return null}}function by(i,o){if(Ls)return i==="compositionend"||!Mu&&Lp(i,o)?(i=Ep(),ol=gu=yr=null,Ls=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Cp&&o.locale!=="ko"?null:o.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!Cy[i.type]:o==="textarea"}function Np(i,o,l,h){De(h),o=pl(o,"onChange"),0<o.length&&(l=new vu("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var qo=null,Ko=null;function Ry(i){Jp(i,0)}function ul(i){var o=Us(i);if(pt(o))return i}function Py(i,o){if(i==="change")return o}var Fp=!1;if(u){var Eu;if(u){var wu="oninput"in document;if(!wu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),wu=typeof Up.oninput=="function"}Eu=wu}else Eu=!1;Fp=Eu&&(!document.documentMode||9<document.documentMode)}function kp(){qo&&(qo.detachEvent("onpropertychange",Op),Ko=qo=null)}function Op(i){if(i.propertyName==="value"&&ul(Ko)){var o=[];Np(o,Ko,i,Y(i)),Wn(Ry,o)}}function Ly(i,o,l){i==="focusin"?(kp(),qo=o,Ko=l,qo.attachEvent("onpropertychange",Op)):i==="focusout"&&kp()}function Dy(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ul(Ko)}function Iy(i,o){if(i==="click")return ul(o)}function Ny(i,o){if(i==="input"||i==="change")return ul(o)}function Fy(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var vi=typeof Object.is=="function"?Object.is:Fy;function Zo(i,o){if(vi(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var v=l[h];if(!d.call(o,v)||!vi(i[v],o[v]))return!1}return!0}function Bp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function zp(i,o){var l=Bp(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Bp(l)}}function Vp(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Vp(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Hp(){for(var i=window,o=It();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=It(i.document)}return o}function Tu(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function Uy(i){var o=Hp(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Vp(l.ownerDocument.documentElement,l)){if(h!==null&&Tu(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var v=l.textContent.length,S=Math.min(h.start,v);h=h.end===void 0?S:Math.min(h.end,v),!i.extend&&S>h&&(v=h,h=S,S=v),v=zp(l,S);var b=zp(l,h);v&&b&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),i.removeAllRanges(),S>h?(i.addRange(o),i.extend(b.node,b.offset)):(o.setEnd(b.node,b.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var ky=u&&"documentMode"in document&&11>=document.documentMode,Ds=null,Au=null,Jo=null,bu=!1;function Gp(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bu||Ds==null||Ds!==It(h)||(h=Ds,"selectionStart"in h&&Tu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Jo&&Zo(Jo,h)||(Jo=h,h=pl(Au,"onSelect"),0<h.length&&(o=new vu("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Ds)))}function dl(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Is={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Cu={},Wp={};u&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function hl(i){if(Cu[i])return Cu[i];if(!Is[i])return i;var o=Is[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Wp)return Cu[i]=o[l];return i}var jp=hl("animationend"),Xp=hl("animationiteration"),$p=hl("animationstart"),Yp=hl("transitionend"),qp=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(i,o){qp.set(i,o),a(o,[i])}for(var Ru=0;Ru<Kp.length;Ru++){var Pu=Kp[Ru],Oy=Pu.toLowerCase(),By=Pu[0].toUpperCase()+Pu.slice(1);xr(Oy,"on"+By)}xr(jp,"onAnimationEnd"),xr(Xp,"onAnimationIteration"),xr($p,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(Yp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Zp(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,Za(h,o,void 0,i),i.currentTarget=null}function Jp(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],v=h.event;h=h.listeners;e:{var S=void 0;if(o)for(var b=h.length-1;0<=b;b--){var z=h[b],G=z.instance,ce=z.currentTarget;if(z=z.listener,G!==S&&v.isPropagationStopped())break e;Zp(v,z,ce),S=G}else for(b=0;b<h.length;b++){if(z=h[b],G=z.instance,ce=z.currentTarget,z=z.listener,G!==S&&v.isPropagationStopped())break e;Zp(v,z,ce),S=G}}}if(Zr)throw i=pr,Zr=!1,pr=null,i}function Gt(i,o){var l=o[Ou];l===void 0&&(l=o[Ou]=new Set);var h=i+"__bubble";l.has(h)||(Qp(o,i,2,!1),l.add(h))}function Lu(i,o,l){var h=0;o&&(h|=4),Qp(l,i,h,o)}var fl="_reactListening"+Math.random().toString(36).slice(2);function ea(i){if(!i[fl]){i[fl]=!0,n.forEach(function(l){l!=="selectionchange"&&(zy.has(l)||Lu(l,!1,i),Lu(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[fl]||(o[fl]=!0,Lu("selectionchange",!1,o))}}function Qp(i,o,l,h){switch(Mp(o)){case 1:var v=ey;break;case 4:v=ty;break;default:v=pu}l=v.bind(null,o,l,i),v=void 0,!bs||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),h?v!==void 0?i.addEventListener(o,l,{capture:!0,passive:v}):i.addEventListener(o,l,!0):v!==void 0?i.addEventListener(o,l,{passive:v}):i.addEventListener(o,l,!1)}function Du(i,o,l,h,v){var S=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var b=h.tag;if(b===3||b===4){var z=h.stateNode.containerInfo;if(z===v||z.nodeType===8&&z.parentNode===v)break;if(b===4)for(b=h.return;b!==null;){var G=b.tag;if((G===3||G===4)&&(G=b.stateNode.containerInfo,G===v||G.nodeType===8&&G.parentNode===v))return;b=b.return}for(;z!==null;){if(b=es(z),b===null)return;if(G=b.tag,G===5||G===6){h=S=b;continue e}z=z.parentNode}}h=h.return}Wn(function(){var ce=S,Se=Y(l),Me=[];e:{var ye=qp.get(i);if(ye!==void 0){var Fe=vu,He=i;switch(i){case"keypress":if(al(l)===0)break e;case"keydown":case"keyup":Fe=gy;break;case"focusin":He="focus",Fe=xu;break;case"focusout":He="blur",Fe=xu;break;case"beforeblur":case"afterblur":Fe=xu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=yy;break;case jp:case Xp:case $p:Fe=ay;break;case Yp:Fe=Sy;break;case"scroll":Fe=ny;break;case"wheel":Fe=Ey;break;case"copy":case"cut":case"paste":Fe=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=bp}var Ge=(o&4)!==0,nn=!Ge&&i==="scroll",te=Ge?ye!==null?ye+"Capture":null:ye;Ge=[];for(var $=ce,se;$!==null;){se=$;var Te=se.stateNode;if(se.tag===5&&Te!==null&&(se=Te,te!==null&&(Te=Un($,te),Te!=null&&Ge.push(ta($,Te,se)))),nn)break;$=$.return}0<Ge.length&&(ye=new Fe(ye,He,null,l,Se),Me.push({event:ye,listeners:Ge}))}}if((o&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",ye&&l!==Dt&&(He=l.relatedTarget||l.fromElement)&&(es(He)||He[Gi]))break e;if((Fe||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Fe?(He=l.relatedTarget||l.toElement,Fe=ce,He=He?es(He):null,He!==null&&(nn=Ri(He),He!==nn||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=ce),Fe!==He)){if(Ge=Tp,Te="onMouseLeave",te="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=bp,Te="onPointerLeave",te="onPointerEnter",$="pointer"),nn=Fe==null?ye:Us(Fe),se=He==null?ye:Us(He),ye=new Ge(Te,$+"leave",Fe,l,Se),ye.target=nn,ye.relatedTarget=se,Te=null,es(Se)===ce&&(Ge=new Ge(te,$+"enter",He,l,Se),Ge.target=se,Ge.relatedTarget=nn,Te=Ge),nn=Te,Fe&&He)t:{for(Ge=Fe,te=He,$=0,se=Ge;se;se=Ns(se))$++;for(se=0,Te=te;Te;Te=Ns(Te))se++;for(;0<$-se;)Ge=Ns(Ge),$--;for(;0<se-$;)te=Ns(te),se--;for(;$--;){if(Ge===te||te!==null&&Ge===te.alternate)break t;Ge=Ns(Ge),te=Ns(te)}Ge=null}else Ge=null;Fe!==null&&em(Me,ye,Fe,Ge,!1),He!==null&&nn!==null&&em(Me,nn,He,Ge,!0)}}e:{if(ye=ce?Us(ce):window,Fe=ye.nodeName&&ye.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ye.type==="file")var je=Py;else if(Ip(ye))if(Fp)je=Ny;else{je=Dy;var et=Ly}else(Fe=ye.nodeName)&&Fe.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(je=Iy);if(je&&(je=je(i,ce))){Np(Me,je,l,Se);break e}et&&et(i,ye,ce),i==="focusout"&&(et=ye._wrapperState)&&et.controlled&&ye.type==="number"&&Nt(ye,"number",ye.value)}switch(et=ce?Us(ce):window,i){case"focusin":(Ip(et)||et.contentEditable==="true")&&(Ds=et,Au=ce,Jo=null);break;case"focusout":Jo=Au=Ds=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Gp(Me,l,Se);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Gp(Me,l,Se)}var tt;if(Mu)e:{switch(i){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Ls?Lp(i,l)&&(ot="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Cp&&l.locale!=="ko"&&(Ls||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Ls&&(tt=Ep()):(yr=Se,gu="value"in yr?yr.value:yr.textContent,Ls=!0)),et=pl(ce,ot),0<et.length&&(ot=new Ap(ot,i,null,l,Se),Me.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=Dp(l),tt!==null&&(ot.data=tt)))),(tt=Ty?Ay(i,l):by(i,l))&&(ce=pl(ce,"onBeforeInput"),0<ce.length&&(Se=new Ap("onBeforeInput","beforeinput",null,l,Se),Me.push({event:Se,listeners:ce}),Se.data=tt))}Jp(Me,o)})}function ta(i,o,l){return{instance:i,listener:o,currentTarget:l}}function pl(i,o){for(var l=o+"Capture",h=[];i!==null;){var v=i,S=v.stateNode;v.tag===5&&S!==null&&(v=S,S=Un(i,l),S!=null&&h.unshift(ta(i,S,v)),S=Un(i,o),S!=null&&h.push(ta(i,S,v))),i=i.return}return h}function Ns(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function em(i,o,l,h,v){for(var S=o._reactName,b=[];l!==null&&l!==h;){var z=l,G=z.alternate,ce=z.stateNode;if(G!==null&&G===h)break;z.tag===5&&ce!==null&&(z=ce,v?(G=Un(l,S),G!=null&&b.unshift(ta(l,G,z))):v||(G=Un(l,S),G!=null&&b.push(ta(l,G,z)))),l=l.return}b.length!==0&&i.push({event:o,listeners:b})}var Vy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function tm(i){return(typeof i=="string"?i:""+i).replace(Vy,`
`).replace(Hy,"")}function ml(i,o,l){if(o=tm(o),tm(i)!==o&&l)throw Error(t(425))}function gl(){}var Iu=null,Nu=null;function Fu(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(i){return nm.resolve(null).then(i).catch(jy)}:Uu;function jy(i){setTimeout(function(){throw i})}function ku(i,o){var l=o,h=0;do{var v=l.nextSibling;if(i.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(h===0){i.removeChild(v),jo(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=v}while(l);jo(o)}function Sr(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function im(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Pi="__reactFiber$"+Fs,na="__reactProps$"+Fs,Gi="__reactContainer$"+Fs,Ou="__reactEvents$"+Fs,Xy="__reactListeners$"+Fs,$y="__reactHandles$"+Fs;function es(i){var o=i[Pi];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Gi]||l[Pi]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=im(i);i!==null;){if(l=i[Pi])return l;i=im(i)}return o}i=l,l=i.parentNode}return null}function ia(i){return i=i[Pi]||i[Gi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Us(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function vl(i){return i[na]||null}var Bu=[],ks=-1;function Mr(i){return{current:i}}function Wt(i){0>ks||(i.current=Bu[ks],Bu[ks]=null,ks--)}function zt(i,o){ks++,Bu[ks]=i.current,i.current=o}var Er={},Cn=Mr(Er),jn=Mr(!1),ts=Er;function Os(i,o){var l=i.type.contextTypes;if(!l)return Er;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var v={},S;for(S in l)v[S]=o[S];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=v),v}function Xn(i){return i=i.childContextTypes,i!=null}function _l(){Wt(jn),Wt(Cn)}function rm(i,o,l){if(Cn.current!==Er)throw Error(t(168));zt(Cn,o),zt(jn,l)}function sm(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var v in h)if(!(v in o))throw Error(t(108,pe(i)||"Unknown",v));return le({},l,h)}function yl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,ts=Cn.current,zt(Cn,i),zt(jn,jn.current),!0}function om(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=sm(i,o,ts),h.__reactInternalMemoizedMergedChildContext=i,Wt(jn),Wt(Cn),zt(Cn,i)):Wt(jn),zt(jn,l)}var Wi=null,xl=!1,zu=!1;function am(i){Wi===null?Wi=[i]:Wi.push(i)}function Yy(i){xl=!0,am(i)}function wr(){if(!zu&&Wi!==null){zu=!0;var i=0,o=St;try{var l=Wi;for(St=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Wi=null,xl=!1}catch(v){throw Wi!==null&&(Wi=Wi.slice(i+1)),D(Pe,wr),v}finally{St=o,zu=!1}}return null}var Bs=[],zs=0,Sl=null,Ml=0,ai=[],li=0,ns=null,ji=1,Xi="";function is(i,o){Bs[zs++]=Ml,Bs[zs++]=Sl,Sl=i,Ml=o}function lm(i,o,l){ai[li++]=ji,ai[li++]=Xi,ai[li++]=ns,ns=i;var h=ji;i=Xi;var v=32-Ct(h)-1;h&=~(1<<v),l+=1;var S=32-Ct(o)+v;if(30<S){var b=v-v%5;S=(h&(1<<b)-1).toString(32),h>>=b,v-=b,ji=1<<32-Ct(o)+v|l<<v|h,Xi=S+i}else ji=1<<S|l<<v|h,Xi=i}function Vu(i){i.return!==null&&(is(i,1),lm(i,1,0))}function Hu(i){for(;i===Sl;)Sl=Bs[--zs],Bs[zs]=null,Ml=Bs[--zs],Bs[zs]=null;for(;i===ns;)ns=ai[--li],ai[li]=null,Xi=ai[--li],ai[li]=null,ji=ai[--li],ai[li]=null}var ti=null,ni=null,Yt=!1,_i=null;function cm(i,o){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function um(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,ti=i,ni=Sr(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,ti=i,ni=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=ns!==null?{id:ji,overflow:Xi}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,ti=i,ni=null,!0):!1;default:return!1}}function Gu(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Wu(i){if(Yt){var o=ni;if(o){var l=o;if(!um(i,o)){if(Gu(i))throw Error(t(418));o=Sr(l.nextSibling);var h=ti;o&&um(i,o)?cm(h,l):(i.flags=i.flags&-4097|2,Yt=!1,ti=i)}}else{if(Gu(i))throw Error(t(418));i.flags=i.flags&-4097|2,Yt=!1,ti=i}}}function dm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ti=i}function El(i){if(i!==ti)return!1;if(!Yt)return dm(i),Yt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Fu(i.type,i.memoizedProps)),o&&(o=ni)){if(Gu(i))throw hm(),Error(t(418));for(;o;)cm(i,o),o=Sr(o.nextSibling)}if(dm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){ni=Sr(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}ni=null}}else ni=ti?Sr(i.stateNode.nextSibling):null;return!0}function hm(){for(var i=ni;i;)i=Sr(i.nextSibling)}function Vs(){ni=ti=null,Yt=!1}function ju(i){_i===null?_i=[i]:_i.push(i)}var qy=T.ReactCurrentBatchConfig;function ra(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var v=h,S=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===S?o.ref:(o=function(b){var z=v.refs;b===null?delete z[S]:z[S]=b},o._stringRef=S,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function wl(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function fm(i){var o=i._init;return o(i._payload)}function pm(i){function o(te,$){if(i){var se=te.deletions;se===null?(te.deletions=[$],te.flags|=16):se.push($)}}function l(te,$){if(!i)return null;for(;$!==null;)o(te,$),$=$.sibling;return null}function h(te,$){for(te=new Map;$!==null;)$.key!==null?te.set($.key,$):te.set($.index,$),$=$.sibling;return te}function v(te,$){return te=Dr(te,$),te.index=0,te.sibling=null,te}function S(te,$,se){return te.index=se,i?(se=te.alternate,se!==null?(se=se.index,se<$?(te.flags|=2,$):se):(te.flags|=2,$)):(te.flags|=1048576,$)}function b(te){return i&&te.alternate===null&&(te.flags|=2),te}function z(te,$,se,Te){return $===null||$.tag!==6?($=Ud(se,te.mode,Te),$.return=te,$):($=v($,se),$.return=te,$)}function G(te,$,se,Te){var je=se.type;return je===N?Se(te,$,se.props.children,Te,se.key):$!==null&&($.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===J&&fm(je)===$.type)?(Te=v($,se.props),Te.ref=ra(te,$,se),Te.return=te,Te):(Te=Yl(se.type,se.key,se.props,null,te.mode,Te),Te.ref=ra(te,$,se),Te.return=te,Te)}function ce(te,$,se,Te){return $===null||$.tag!==4||$.stateNode.containerInfo!==se.containerInfo||$.stateNode.implementation!==se.implementation?($=kd(se,te.mode,Te),$.return=te,$):($=v($,se.children||[]),$.return=te,$)}function Se(te,$,se,Te,je){return $===null||$.tag!==7?($=ds(se,te.mode,Te,je),$.return=te,$):($=v($,se),$.return=te,$)}function Me(te,$,se){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Ud(""+$,te.mode,se),$.return=te,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case U:return se=Yl($.type,$.key,$.props,null,te.mode,se),se.ref=ra(te,null,$),se.return=te,se;case I:return $=kd($,te.mode,se),$.return=te,$;case J:var Te=$._init;return Me(te,Te($._payload),se)}if(Xe($)||Q($))return $=ds($,te.mode,se,null),$.return=te,$;wl(te,$)}return null}function ye(te,$,se,Te){var je=$!==null?$.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return je!==null?null:z(te,$,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case U:return se.key===je?G(te,$,se,Te):null;case I:return se.key===je?ce(te,$,se,Te):null;case J:return je=se._init,ye(te,$,je(se._payload),Te)}if(Xe(se)||Q(se))return je!==null?null:Se(te,$,se,Te,null);wl(te,se)}return null}function Fe(te,$,se,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return te=te.get(se)||null,z($,te,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return te=te.get(Te.key===null?se:Te.key)||null,G($,te,Te,je);case I:return te=te.get(Te.key===null?se:Te.key)||null,ce($,te,Te,je);case J:var et=Te._init;return Fe(te,$,se,et(Te._payload),je)}if(Xe(Te)||Q(Te))return te=te.get(se)||null,Se($,te,Te,je,null);wl($,Te)}return null}function He(te,$,se,Te){for(var je=null,et=null,tt=$,ot=$=0,_n=null;tt!==null&&ot<se.length;ot++){tt.index>ot?(_n=tt,tt=null):_n=tt.sibling;var Rt=ye(te,tt,se[ot],Te);if(Rt===null){tt===null&&(tt=_n);break}i&&tt&&Rt.alternate===null&&o(te,tt),$=S(Rt,$,ot),et===null?je=Rt:et.sibling=Rt,et=Rt,tt=_n}if(ot===se.length)return l(te,tt),Yt&&is(te,ot),je;if(tt===null){for(;ot<se.length;ot++)tt=Me(te,se[ot],Te),tt!==null&&($=S(tt,$,ot),et===null?je=tt:et.sibling=tt,et=tt);return Yt&&is(te,ot),je}for(tt=h(te,tt);ot<se.length;ot++)_n=Fe(tt,te,ot,se[ot],Te),_n!==null&&(i&&_n.alternate!==null&&tt.delete(_n.key===null?ot:_n.key),$=S(_n,$,ot),et===null?je=_n:et.sibling=_n,et=_n);return i&&tt.forEach(function(Ir){return o(te,Ir)}),Yt&&is(te,ot),je}function Ge(te,$,se,Te){var je=Q(se);if(typeof je!="function")throw Error(t(150));if(se=je.call(se),se==null)throw Error(t(151));for(var et=je=null,tt=$,ot=$=0,_n=null,Rt=se.next();tt!==null&&!Rt.done;ot++,Rt=se.next()){tt.index>ot?(_n=tt,tt=null):_n=tt.sibling;var Ir=ye(te,tt,Rt.value,Te);if(Ir===null){tt===null&&(tt=_n);break}i&&tt&&Ir.alternate===null&&o(te,tt),$=S(Ir,$,ot),et===null?je=Ir:et.sibling=Ir,et=Ir,tt=_n}if(Rt.done)return l(te,tt),Yt&&is(te,ot),je;if(tt===null){for(;!Rt.done;ot++,Rt=se.next())Rt=Me(te,Rt.value,Te),Rt!==null&&($=S(Rt,$,ot),et===null?je=Rt:et.sibling=Rt,et=Rt);return Yt&&is(te,ot),je}for(tt=h(te,tt);!Rt.done;ot++,Rt=se.next())Rt=Fe(tt,te,ot,Rt.value,Te),Rt!==null&&(i&&Rt.alternate!==null&&tt.delete(Rt.key===null?ot:Rt.key),$=S(Rt,$,ot),et===null?je=Rt:et.sibling=Rt,et=Rt);return i&&tt.forEach(function(Cx){return o(te,Cx)}),Yt&&is(te,ot),je}function nn(te,$,se,Te){if(typeof se=="object"&&se!==null&&se.type===N&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case U:e:{for(var je=se.key,et=$;et!==null;){if(et.key===je){if(je=se.type,je===N){if(et.tag===7){l(te,et.sibling),$=v(et,se.props.children),$.return=te,te=$;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===J&&fm(je)===et.type){l(te,et.sibling),$=v(et,se.props),$.ref=ra(te,et,se),$.return=te,te=$;break e}l(te,et);break}else o(te,et);et=et.sibling}se.type===N?($=ds(se.props.children,te.mode,Te,se.key),$.return=te,te=$):(Te=Yl(se.type,se.key,se.props,null,te.mode,Te),Te.ref=ra(te,$,se),Te.return=te,te=Te)}return b(te);case I:e:{for(et=se.key;$!==null;){if($.key===et)if($.tag===4&&$.stateNode.containerInfo===se.containerInfo&&$.stateNode.implementation===se.implementation){l(te,$.sibling),$=v($,se.children||[]),$.return=te,te=$;break e}else{l(te,$);break}else o(te,$);$=$.sibling}$=kd(se,te.mode,Te),$.return=te,te=$}return b(te);case J:return et=se._init,nn(te,$,et(se._payload),Te)}if(Xe(se))return He(te,$,se,Te);if(Q(se))return Ge(te,$,se,Te);wl(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,$!==null&&$.tag===6?(l(te,$.sibling),$=v($,se),$.return=te,te=$):(l(te,$),$=Ud(se,te.mode,Te),$.return=te,te=$),b(te)):l(te,$)}return nn}var Hs=pm(!0),mm=pm(!1),Tl=Mr(null),Al=null,Gs=null,Xu=null;function $u(){Xu=Gs=Al=null}function Yu(i){var o=Tl.current;Wt(Tl),i._currentValue=o}function qu(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Ws(i,o){Al=i,Xu=Gs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&($n=!0),i.firstContext=null)}function ci(i){var o=i._currentValue;if(Xu!==i)if(i={context:i,memoizedValue:o,next:null},Gs===null){if(Al===null)throw Error(t(308));Gs=i,Al.dependencies={lanes:0,firstContext:i}}else Gs=Gs.next=i;return o}var rs=null;function Ku(i){rs===null?rs=[i]:rs.push(i)}function gm(i,o,l,h){var v=o.interleaved;return v===null?(l.next=l,Ku(o)):(l.next=v.next,v.next=l),o.interleaved=l,$i(i,h)}function $i(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Tr=!1;function Zu(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Yi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ar(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(At&2)!==0){var v=h.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),h.pending=o,$i(i,l)}return v=h.interleaved,v===null?(o.next=o,Ku(h)):(o.next=v.next,v.next=o),h.interleaved=o,$i(i,l)}function bl(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Qr(i,l)}}function _m(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var v=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?v=S=b:S=S.next=b,l=l.next}while(l!==null);S===null?v=S=o:S=S.next=o}else v=S=o;l={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:S,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Cl(i,o,l,h){var v=i.updateQueue;Tr=!1;var S=v.firstBaseUpdate,b=v.lastBaseUpdate,z=v.shared.pending;if(z!==null){v.shared.pending=null;var G=z,ce=G.next;G.next=null,b===null?S=ce:b.next=ce,b=G;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,z=Se.lastBaseUpdate,z!==b&&(z===null?Se.firstBaseUpdate=ce:z.next=ce,Se.lastBaseUpdate=G))}if(S!==null){var Me=v.baseState;b=0,Se=ce=G=null,z=S;do{var ye=z.lane,Fe=z.eventTime;if((h&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Fe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var He=i,Ge=z;switch(ye=o,Fe=l,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){Me=He.call(Fe,Me,ye);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ye=typeof He=="function"?He.call(Fe,Me,ye):He,ye==null)break e;Me=le({},Me,ye);break e;case 2:Tr=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,ye=v.effects,ye===null?v.effects=[z]:ye.push(z))}else Fe={eventTime:Fe,lane:ye,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Se===null?(ce=Se=Fe,G=Me):Se=Se.next=Fe,b|=ye;if(z=z.next,z===null){if(z=v.shared.pending,z===null)break;ye=z,z=ye.next,ye.next=null,v.lastBaseUpdate=ye,v.shared.pending=null}}while(!0);if(Se===null&&(G=Me),v.baseState=G,v.firstBaseUpdate=ce,v.lastBaseUpdate=Se,o=v.shared.interleaved,o!==null){v=o;do b|=v.lane,v=v.next;while(v!==o)}else S===null&&(v.shared.lanes=0);as|=b,i.lanes=b,i.memoizedState=Me}}function ym(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],v=h.callback;if(v!==null){if(h.callback=null,h=l,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var sa={},Li=Mr(sa),oa=Mr(sa),aa=Mr(sa);function ss(i){if(i===sa)throw Error(t(174));return i}function Ju(i,o){switch(zt(aa,o),zt(oa,i),zt(Li,sa),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:We(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=We(o,i)}Wt(Li),zt(Li,o)}function js(){Wt(Li),Wt(oa),Wt(aa)}function xm(i){ss(aa.current);var o=ss(Li.current),l=We(o,i.type);o!==l&&(zt(oa,i),zt(Li,l))}function Qu(i){oa.current===i&&(Wt(Li),Wt(oa))}var qt=Mr(0);function Rl(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var ed=[];function td(){for(var i=0;i<ed.length;i++)ed[i]._workInProgressVersionPrimary=null;ed.length=0}var Pl=T.ReactCurrentDispatcher,nd=T.ReactCurrentBatchConfig,os=0,Kt=null,ln=null,gn=null,Ll=!1,la=!1,ca=0,Ky=0;function Rn(){throw Error(t(321))}function id(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!vi(i[l],o[l]))return!1;return!0}function rd(i,o,l,h,v,S){if(os=S,Kt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Pl.current=i===null||i.memoizedState===null?ex:tx,i=l(h,v),la){S=0;do{if(la=!1,ca=0,25<=S)throw Error(t(301));S+=1,gn=ln=null,o.updateQueue=null,Pl.current=nx,i=l(h,v)}while(la)}if(Pl.current=Nl,o=ln!==null&&ln.next!==null,os=0,gn=ln=Kt=null,Ll=!1,o)throw Error(t(300));return i}function sd(){var i=ca!==0;return ca=0,i}function Di(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=i:gn=gn.next=i,gn}function ui(){if(ln===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=ln.next;var o=gn===null?Kt.memoizedState:gn.next;if(o!==null)gn=o,ln=i;else{if(i===null)throw Error(t(310));ln=i,i={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},gn===null?Kt.memoizedState=gn=i:gn=gn.next=i}return gn}function ua(i,o){return typeof o=="function"?o(i):o}function od(i){var o=ui(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=ln,v=h.baseQueue,S=l.pending;if(S!==null){if(v!==null){var b=v.next;v.next=S.next,S.next=b}h.baseQueue=v=S,l.pending=null}if(v!==null){S=v.next,h=h.baseState;var z=b=null,G=null,ce=S;do{var Se=ce.lane;if((os&Se)===Se)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),h=ce.hasEagerState?ce.eagerState:i(h,ce.action);else{var Me={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(z=G=Me,b=h):G=G.next=Me,Kt.lanes|=Se,as|=Se}ce=ce.next}while(ce!==null&&ce!==S);G===null?b=h:G.next=z,vi(h,o.memoizedState)||($n=!0),o.memoizedState=h,o.baseState=b,o.baseQueue=G,l.lastRenderedState=h}if(i=l.interleaved,i!==null){v=i;do S=v.lane,Kt.lanes|=S,as|=S,v=v.next;while(v!==i)}else v===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function ad(i){var o=ui(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,v=l.pending,S=o.memoizedState;if(v!==null){l.pending=null;var b=v=v.next;do S=i(S,b.action),b=b.next;while(b!==v);vi(S,o.memoizedState)||($n=!0),o.memoizedState=S,o.baseQueue===null&&(o.baseState=S),l.lastRenderedState=S}return[S,h]}function Sm(){}function Mm(i,o){var l=Kt,h=ui(),v=o(),S=!vi(h.memoizedState,v);if(S&&(h.memoizedState=v,$n=!0),h=h.queue,ld(Tm.bind(null,l,h,i),[i]),h.getSnapshot!==o||S||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,da(9,wm.bind(null,l,h,v,o),void 0,null),vn===null)throw Error(t(349));(os&30)!==0||Em(l,o,v)}return v}function Em(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function wm(i,o,l,h){o.value=l,o.getSnapshot=h,Am(o)&&bm(i)}function Tm(i,o,l){return l(function(){Am(o)&&bm(i)})}function Am(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!vi(i,l)}catch{return!0}}function bm(i){var o=$i(i,1);o!==null&&Mi(o,i,1,-1)}function Cm(i){var o=Di();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},o.queue=i,i=i.dispatch=Qy.bind(null,Kt,i),[o.memoizedState,i]}function da(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=Kt.updateQueue,o===null?(o={lastEffect:null,stores:null},Kt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Rm(){return ui().memoizedState}function Dl(i,o,l,h){var v=Di();Kt.flags|=i,v.memoizedState=da(1|o,l,void 0,h===void 0?null:h)}function Il(i,o,l,h){var v=ui();h=h===void 0?null:h;var S=void 0;if(ln!==null){var b=ln.memoizedState;if(S=b.destroy,h!==null&&id(h,b.deps)){v.memoizedState=da(o,l,S,h);return}}Kt.flags|=i,v.memoizedState=da(1|o,l,S,h)}function Pm(i,o){return Dl(8390656,8,i,o)}function ld(i,o){return Il(2048,8,i,o)}function Lm(i,o){return Il(4,2,i,o)}function Dm(i,o){return Il(4,4,i,o)}function Im(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Nm(i,o,l){return l=l!=null?l.concat([i]):null,Il(4,4,Im.bind(null,o,i),l)}function cd(){}function Fm(i,o){var l=ui();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&id(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Um(i,o){var l=ui();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&id(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function km(i,o,l){return(os&21)===0?(i.baseState&&(i.baseState=!1,$n=!0),i.memoizedState=l):(vi(l,o)||(l=On(),Kt.lanes|=l,as|=l,i.baseState=!0),o)}function Zy(i,o){var l=St;St=l!==0&&4>l?l:4,i(!0);var h=nd.transition;nd.transition={};try{i(!1),o()}finally{St=l,nd.transition=h}}function Om(){return ui().memoizedState}function Jy(i,o,l){var h=Pr(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Bm(i))zm(o,l);else if(l=gm(i,o,l,h),l!==null){var v=zn();Mi(l,i,h,v),Vm(l,o,h)}}function Qy(i,o,l){var h=Pr(i),v={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Bm(i))zm(o,v);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=o.lastRenderedReducer,S!==null))try{var b=o.lastRenderedState,z=S(b,l);if(v.hasEagerState=!0,v.eagerState=z,vi(z,b)){var G=o.interleaved;G===null?(v.next=v,Ku(o)):(v.next=G.next,G.next=v),o.interleaved=v;return}}catch{}finally{}l=gm(i,o,v,h),l!==null&&(v=zn(),Mi(l,i,h,v),Vm(l,o,h))}}function Bm(i){var o=i.alternate;return i===Kt||o!==null&&o===Kt}function zm(i,o){la=Ll=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Vm(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Qr(i,l)}}var Nl={readContext:ci,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},ex={readContext:ci,useCallback:function(i,o){return Di().memoizedState=[i,o===void 0?null:o],i},useContext:ci,useEffect:Pm,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Dl(4194308,4,Im.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Dl(4194308,4,i,o)},useInsertionEffect:function(i,o){return Dl(4,2,i,o)},useMemo:function(i,o){var l=Di();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Di();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=Jy.bind(null,Kt,i),[h.memoizedState,i]},useRef:function(i){var o=Di();return i={current:i},o.memoizedState=i},useState:Cm,useDebugValue:cd,useDeferredValue:function(i){return Di().memoizedState=i},useTransition:function(){var i=Cm(!1),o=i[0];return i=Zy.bind(null,i[1]),Di().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=Kt,v=Di();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),vn===null)throw Error(t(349));(os&30)!==0||Em(h,o,l)}v.memoizedState=l;var S={value:l,getSnapshot:o};return v.queue=S,Pm(Tm.bind(null,h,S,i),[i]),h.flags|=2048,da(9,wm.bind(null,h,S,l,o),void 0,null),l},useId:function(){var i=Di(),o=vn.identifierPrefix;if(Yt){var l=Xi,h=ji;l=(h&~(1<<32-Ct(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=ca++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=Ky++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},tx={readContext:ci,useCallback:Fm,useContext:ci,useEffect:ld,useImperativeHandle:Nm,useInsertionEffect:Lm,useLayoutEffect:Dm,useMemo:Um,useReducer:od,useRef:Rm,useState:function(){return od(ua)},useDebugValue:cd,useDeferredValue:function(i){var o=ui();return km(o,ln.memoizedState,i)},useTransition:function(){var i=od(ua)[0],o=ui().memoizedState;return[i,o]},useMutableSource:Sm,useSyncExternalStore:Mm,useId:Om,unstable_isNewReconciler:!1},nx={readContext:ci,useCallback:Fm,useContext:ci,useEffect:ld,useImperativeHandle:Nm,useInsertionEffect:Lm,useLayoutEffect:Dm,useMemo:Um,useReducer:ad,useRef:Rm,useState:function(){return ad(ua)},useDebugValue:cd,useDeferredValue:function(i){var o=ui();return ln===null?o.memoizedState=i:km(o,ln.memoizedState,i)},useTransition:function(){var i=ad(ua)[0],o=ui().memoizedState;return[i,o]},useMutableSource:Sm,useSyncExternalStore:Mm,useId:Om,unstable_isNewReconciler:!1};function yi(i,o){if(i&&i.defaultProps){o=le({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function ud(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:le({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Fl={isMounted:function(i){return(i=i._reactInternals)?Ri(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=zn(),v=Pr(i),S=Yi(h,v);S.payload=o,l!=null&&(S.callback=l),o=Ar(i,S,v),o!==null&&(Mi(o,i,v,h),bl(o,i,v))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=zn(),v=Pr(i),S=Yi(h,v);S.tag=1,S.payload=o,l!=null&&(S.callback=l),o=Ar(i,S,v),o!==null&&(Mi(o,i,v,h),bl(o,i,v))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=zn(),h=Pr(i),v=Yi(l,h);v.tag=2,o!=null&&(v.callback=o),o=Ar(i,v,h),o!==null&&(Mi(o,i,h,l),bl(o,i,h))}};function Hm(i,o,l,h,v,S,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,S,b):o.prototype&&o.prototype.isPureReactComponent?!Zo(l,h)||!Zo(v,S):!0}function Gm(i,o,l){var h=!1,v=Er,S=o.contextType;return typeof S=="object"&&S!==null?S=ci(S):(v=Xn(o)?ts:Cn.current,h=o.contextTypes,S=(h=h!=null)?Os(i,v):Er),o=new o(l,S),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Fl,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=S),o}function Wm(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Fl.enqueueReplaceState(o,o.state,null)}function dd(i,o,l,h){var v=i.stateNode;v.props=l,v.state=i.memoizedState,v.refs={},Zu(i);var S=o.contextType;typeof S=="object"&&S!==null?v.context=ci(S):(S=Xn(o)?ts:Cn.current,v.context=Os(i,S)),v.state=i.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(ud(i,o,S,l),v.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&Fl.enqueueReplaceState(v,v.state,null),Cl(i,l,v,h),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function Xs(i,o){try{var l="",h=o;do l+=he(h),h=h.return;while(h);var v=l}catch(S){v=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:o,stack:v,digest:null}}function hd(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function fd(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function jm(i,o,l){l=Yi(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){Hl||(Hl=!0,Cd=h),fd(i,o)},l}function Xm(i,o,l){l=Yi(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var v=o.value;l.payload=function(){return h(v)},l.callback=function(){fd(i,o)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){fd(i,o),typeof h!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})}),l}function $m(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new ix;var v=new Set;h.set(o,v)}else v=h.get(o),v===void 0&&(v=new Set,h.set(o,v));v.has(l)||(v.add(l),i=vx.bind(null,i,o,l),o.then(i,i))}function Ym(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function qm(i,o,l,h,v){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Yi(-1,1),o.tag=2,Ar(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var rx=T.ReactCurrentOwner,$n=!1;function Bn(i,o,l,h){o.child=i===null?mm(o,null,l,h):Hs(o,i.child,l,h)}function Km(i,o,l,h,v){l=l.render;var S=o.ref;return Ws(o,v),h=rd(i,o,l,h,S,v),l=sd(),i!==null&&!$n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,qi(i,o,v)):(Yt&&l&&Vu(o),o.flags|=1,Bn(i,o,h,v),o.child)}function Zm(i,o,l,h,v){if(i===null){var S=l.type;return typeof S=="function"&&!Fd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=S,Jm(i,o,S,h,v)):(i=Yl(l.type,null,h,o,o.mode,v),i.ref=o.ref,i.return=o,o.child=i)}if(S=i.child,(i.lanes&v)===0){var b=S.memoizedProps;if(l=l.compare,l=l!==null?l:Zo,l(b,h)&&i.ref===o.ref)return qi(i,o,v)}return o.flags|=1,i=Dr(S,h),i.ref=o.ref,i.return=o,o.child=i}function Jm(i,o,l,h,v){if(i!==null){var S=i.memoizedProps;if(Zo(S,h)&&i.ref===o.ref)if($n=!1,o.pendingProps=h=S,(i.lanes&v)!==0)(i.flags&131072)!==0&&($n=!0);else return o.lanes=i.lanes,qi(i,o,v)}return pd(i,o,l,h,v)}function Qm(i,o,l){var h=o.pendingProps,v=h.children,S=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ys,ii),ii|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,zt(Ys,ii),ii|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=S!==null?S.baseLanes:l,zt(Ys,ii),ii|=h}else S!==null?(h=S.baseLanes|l,o.memoizedState=null):h=l,zt(Ys,ii),ii|=h;return Bn(i,o,v,l),o.child}function eg(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function pd(i,o,l,h,v){var S=Xn(l)?ts:Cn.current;return S=Os(o,S),Ws(o,v),l=rd(i,o,l,h,S,v),h=sd(),i!==null&&!$n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,qi(i,o,v)):(Yt&&h&&Vu(o),o.flags|=1,Bn(i,o,l,v),o.child)}function tg(i,o,l,h,v){if(Xn(l)){var S=!0;yl(o)}else S=!1;if(Ws(o,v),o.stateNode===null)kl(i,o),Gm(o,l,h),dd(o,l,h,v),h=!0;else if(i===null){var b=o.stateNode,z=o.memoizedProps;b.props=z;var G=b.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=ci(ce):(ce=Xn(l)?ts:Cn.current,ce=Os(o,ce));var Se=l.getDerivedStateFromProps,Me=typeof Se=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==h||G!==ce)&&Wm(o,b,h,ce),Tr=!1;var ye=o.memoizedState;b.state=ye,Cl(o,h,b,v),G=o.memoizedState,z!==h||ye!==G||jn.current||Tr?(typeof Se=="function"&&(ud(o,l,Se,h),G=o.memoizedState),(z=Tr||Hm(o,l,z,h,ye,G,ce))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(o.flags|=4194308)):(typeof b.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=G),b.props=h,b.state=G,b.context=ce,h=z):(typeof b.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{b=o.stateNode,vm(i,o),z=o.memoizedProps,ce=o.type===o.elementType?z:yi(o.type,z),b.props=ce,Me=o.pendingProps,ye=b.context,G=l.contextType,typeof G=="object"&&G!==null?G=ci(G):(G=Xn(l)?ts:Cn.current,G=Os(o,G));var Fe=l.getDerivedStateFromProps;(Se=typeof Fe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==Me||ye!==G)&&Wm(o,b,h,G),Tr=!1,ye=o.memoizedState,b.state=ye,Cl(o,h,b,v);var He=o.memoizedState;z!==Me||ye!==He||jn.current||Tr?(typeof Fe=="function"&&(ud(o,l,Fe,h),He=o.memoizedState),(ce=Tr||Hm(o,l,ce,h,ye,He,G)||!1)?(Se||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(h,He,G),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(h,He,G)),typeof b.componentDidUpdate=="function"&&(o.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof b.componentDidUpdate!="function"||z===i.memoizedProps&&ye===i.memoizedState||(o.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&ye===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=He),b.props=h,b.state=He,b.context=G,h=ce):(typeof b.componentDidUpdate!="function"||z===i.memoizedProps&&ye===i.memoizedState||(o.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&ye===i.memoizedState||(o.flags|=1024),h=!1)}return md(i,o,l,h,S,v)}function md(i,o,l,h,v,S){eg(i,o);var b=(o.flags&128)!==0;if(!h&&!b)return v&&om(o,l,!1),qi(i,o,S);h=o.stateNode,rx.current=o;var z=b&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&b?(o.child=Hs(o,i.child,null,S),o.child=Hs(o,null,z,S)):Bn(i,o,z,S),o.memoizedState=h.state,v&&om(o,l,!0),o.child}function ng(i){var o=i.stateNode;o.pendingContext?rm(i,o.pendingContext,o.pendingContext!==o.context):o.context&&rm(i,o.context,!1),Ju(i,o.containerInfo)}function ig(i,o,l,h,v){return Vs(),ju(v),o.flags|=256,Bn(i,o,l,h),o.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(i){return{baseLanes:i,cachePool:null,transitions:null}}function rg(i,o,l){var h=o.pendingProps,v=qt.current,S=!1,b=(o.flags&128)!==0,z;if((z=b)||(z=i!==null&&i.memoizedState===null?!1:(v&2)!==0),z?(S=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),zt(qt,v&1),i===null)return Wu(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(b=h.children,i=h.fallback,S?(h=o.mode,S=o.child,b={mode:"hidden",children:b},(h&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=b):S=ql(b,h,0,null),i=ds(i,h,l,null),S.return=o,i.return=o,S.sibling=i,o.child=S,o.child.memoizedState=vd(l),o.memoizedState=gd,i):_d(o,b));if(v=i.memoizedState,v!==null&&(z=v.dehydrated,z!==null))return sx(i,o,b,h,z,v,l);if(S){S=h.fallback,b=o.mode,v=i.child,z=v.sibling;var G={mode:"hidden",children:h.children};return(b&1)===0&&o.child!==v?(h=o.child,h.childLanes=0,h.pendingProps=G,o.deletions=null):(h=Dr(v,G),h.subtreeFlags=v.subtreeFlags&14680064),z!==null?S=Dr(z,S):(S=ds(S,b,l,null),S.flags|=2),S.return=o,h.return=o,h.sibling=S,o.child=h,h=S,S=o.child,b=i.child.memoizedState,b=b===null?vd(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},S.memoizedState=b,S.childLanes=i.childLanes&~l,o.memoizedState=gd,h}return S=i.child,i=S.sibling,h=Dr(S,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function _d(i,o){return o=ql({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Ul(i,o,l,h){return h!==null&&ju(h),Hs(o,i.child,null,l),i=_d(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function sx(i,o,l,h,v,S,b){if(l)return o.flags&256?(o.flags&=-257,h=hd(Error(t(422))),Ul(i,o,b,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(S=h.fallback,v=o.mode,h=ql({mode:"visible",children:h.children},v,0,null),S=ds(S,v,b,null),S.flags|=2,h.return=o,S.return=o,h.sibling=S,o.child=h,(o.mode&1)!==0&&Hs(o,i.child,null,b),o.child.memoizedState=vd(b),o.memoizedState=gd,S);if((o.mode&1)===0)return Ul(i,o,b,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var z=h.dgst;return h=z,S=Error(t(419)),h=hd(S,h,void 0),Ul(i,o,b,h)}if(z=(b&i.childLanes)!==0,$n||z){if(h=vn,h!==null){switch(b&-b){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(h.suspendedLanes|b))!==0?0:v,v!==0&&v!==S.retryLane&&(S.retryLane=v,$i(i,v),Mi(h,i,v,-1))}return Nd(),h=hd(Error(t(421))),Ul(i,o,b,h)}return v.data==="$?"?(o.flags|=128,o.child=i.child,o=_x.bind(null,i),v._reactRetry=o,null):(i=S.treeContext,ni=Sr(v.nextSibling),ti=o,Yt=!0,_i=null,i!==null&&(ai[li++]=ji,ai[li++]=Xi,ai[li++]=ns,ji=i.id,Xi=i.overflow,ns=o),o=_d(o,h.children),o.flags|=4096,o)}function sg(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),qu(i.return,o,l)}function yd(i,o,l,h,v){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:v}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=h,S.tail=l,S.tailMode=v)}function og(i,o,l){var h=o.pendingProps,v=h.revealOrder,S=h.tail;if(Bn(i,o,h.children,l),h=qt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&sg(i,l,o);else if(i.tag===19)sg(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(zt(qt,h),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(l=o.child,v=null;l!==null;)i=l.alternate,i!==null&&Rl(i)===null&&(v=l),l=l.sibling;l=v,l===null?(v=o.child,o.child=null):(v=l.sibling,l.sibling=null),yd(o,!1,v,l,S);break;case"backwards":for(l=null,v=o.child,o.child=null;v!==null;){if(i=v.alternate,i!==null&&Rl(i)===null){o.child=v;break}i=v.sibling,v.sibling=l,l=v,v=i}yd(o,!0,l,null,S);break;case"together":yd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function kl(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function qi(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),as|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Dr(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Dr(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function ox(i,o,l){switch(o.tag){case 3:ng(o),Vs();break;case 5:xm(o);break;case 1:Xn(o.type)&&yl(o);break;case 4:Ju(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,v=o.memoizedProps.value;zt(Tl,h._currentValue),h._currentValue=v;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(zt(qt,qt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?rg(i,o,l):(zt(qt,qt.current&1),i=qi(i,o,l),i!==null?i.sibling:null);zt(qt,qt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return og(i,o,l);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),zt(qt,qt.current),h)break;return null;case 22:case 23:return o.lanes=0,Qm(i,o,l)}return qi(i,o,l)}var ag,xd,lg,cg;ag=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},xd=function(){},lg=function(i,o,l,h){var v=i.memoizedProps;if(v!==h){i=o.stateNode,ss(Li.current);var S=null;switch(l){case"input":v=W(i,v),h=W(i,h),S=[];break;case"select":v=le({},v,{value:void 0}),h=le({},h,{value:void 0}),S=[];break;case"textarea":v=P(i,v),h=P(i,h),S=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=gl)}_t(l,h);var b;l=null;for(ce in v)if(!h.hasOwnProperty(ce)&&v.hasOwnProperty(ce)&&v[ce]!=null)if(ce==="style"){var z=v[ce];for(b in z)z.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(s.hasOwnProperty(ce)?S||(S=[]):(S=S||[]).push(ce,null));for(ce in h){var G=h[ce];if(z=v?.[ce],h.hasOwnProperty(ce)&&G!==z&&(G!=null||z!=null))if(ce==="style")if(z){for(b in z)!z.hasOwnProperty(b)||G&&G.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in G)G.hasOwnProperty(b)&&z[b]!==G[b]&&(l||(l={}),l[b]=G[b])}else l||(S||(S=[]),S.push(ce,l)),l=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(S=S||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(S=S||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(s.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&Gt("scroll",i),S||z===G||(S=[])):(S=S||[]).push(ce,G))}l&&(S=S||[]).push("style",l);var ce=S;(o.updateQueue=ce)&&(o.flags|=4)}},cg=function(i,o,l,h){l!==h&&(o.flags|=4)};function ha(i,o){if(!Yt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Pn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var v=i.child;v!==null;)l|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)l|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function ax(i,o,l){var h=o.pendingProps;switch(Hu(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(o),null;case 1:return Xn(o.type)&&_l(),Pn(o),null;case 3:return h=o.stateNode,js(),Wt(jn),Wt(Cn),td(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(El(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,_i!==null&&(Ld(_i),_i=null))),xd(i,o),Pn(o),null;case 5:Qu(o);var v=ss(aa.current);if(l=o.type,i!==null&&o.stateNode!=null)lg(i,o,l,h,v),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Pn(o),null}if(i=ss(Li.current),El(o)){h=o.stateNode,l=o.type;var S=o.memoizedProps;switch(h[Pi]=o,h[na]=S,i=(o.mode&1)!==0,l){case"dialog":Gt("cancel",h),Gt("close",h);break;case"iframe":case"object":case"embed":Gt("load",h);break;case"video":case"audio":for(v=0;v<Qo.length;v++)Gt(Qo[v],h);break;case"source":Gt("error",h);break;case"img":case"image":case"link":Gt("error",h),Gt("load",h);break;case"details":Gt("toggle",h);break;case"input":Fn(h,S),Gt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!S.multiple},Gt("invalid",h);break;case"textarea":ae(h,S),Gt("invalid",h)}_t(l,S),v=null;for(var b in S)if(S.hasOwnProperty(b)){var z=S[b];b==="children"?typeof z=="string"?h.textContent!==z&&(S.suppressHydrationWarning!==!0&&ml(h.textContent,z,i),v=["children",z]):typeof z=="number"&&h.textContent!==""+z&&(S.suppressHydrationWarning!==!0&&ml(h.textContent,z,i),v=["children",""+z]):s.hasOwnProperty(b)&&z!=null&&b==="onScroll"&&Gt("scroll",h)}switch(l){case"input":Lt(h),Ye(h,S,!0);break;case"textarea":Lt(h),xe(h);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(h.onclick=gl)}h=v,o.updateQueue=h,h!==null&&(o.flags|=4)}else{b=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=b.createElement(l,{is:h.is}):(i=b.createElement(l),l==="select"&&(b=i,h.multiple?b.multiple=!0:h.size&&(b.size=h.size))):i=b.createElementNS(i,l),i[Pi]=o,i[na]=h,ag(i,o,!1,!1),o.stateNode=i;e:{switch(b=at(l,h),l){case"dialog":Gt("cancel",i),Gt("close",i),v=h;break;case"iframe":case"object":case"embed":Gt("load",i),v=h;break;case"video":case"audio":for(v=0;v<Qo.length;v++)Gt(Qo[v],i);v=h;break;case"source":Gt("error",i),v=h;break;case"img":case"image":case"link":Gt("error",i),Gt("load",i),v=h;break;case"details":Gt("toggle",i),v=h;break;case"input":Fn(i,h),v=W(i,h),Gt("invalid",i);break;case"option":v=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},v=le({},h,{value:void 0}),Gt("invalid",i);break;case"textarea":ae(i,h),v=P(i,h),Gt("invalid",i);break;default:v=h}_t(l,v),z=v;for(S in z)if(z.hasOwnProperty(S)){var G=z[S];S==="style"?it(i,G):S==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&ke(i,G)):S==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&mt(i,G):typeof G=="number"&&mt(i,""+G):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(s.hasOwnProperty(S)?G!=null&&S==="onScroll"&&Gt("scroll",i):G!=null&&w(i,S,G,b))}switch(l){case"input":Lt(i),Ye(i,h,!1);break;case"textarea":Lt(i),xe(i);break;case"option":h.value!=null&&i.setAttribute("value",""+be(h.value));break;case"select":i.multiple=!!h.multiple,S=h.value,S!=null?k(i,!!h.multiple,S,!1):h.defaultValue!=null&&k(i,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=gl)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Pn(o),null;case 6:if(i&&o.stateNode!=null)cg(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=ss(aa.current),ss(Li.current),El(o)){if(h=o.stateNode,l=o.memoizedProps,h[Pi]=o,(S=h.nodeValue!==l)&&(i=ti,i!==null))switch(i.tag){case 3:ml(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&ml(h.nodeValue,l,(i.mode&1)!==0)}S&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Pi]=o,o.stateNode=h}return Pn(o),null;case 13:if(Wt(qt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&ni!==null&&(o.mode&1)!==0&&(o.flags&128)===0)hm(),Vs(),o.flags|=98560,S=!1;else if(S=El(o),h!==null&&h.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=o.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Pi]=o}else Vs(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Pn(o),S=!1}else _i!==null&&(Ld(_i),_i=null),S=!0;if(!S)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(qt.current&1)!==0?cn===0&&(cn=3):Nd())),o.updateQueue!==null&&(o.flags|=4),Pn(o),null);case 4:return js(),xd(i,o),i===null&&ea(o.stateNode.containerInfo),Pn(o),null;case 10:return Yu(o.type._context),Pn(o),null;case 17:return Xn(o.type)&&_l(),Pn(o),null;case 19:if(Wt(qt),S=o.memoizedState,S===null)return Pn(o),null;if(h=(o.flags&128)!==0,b=S.rendering,b===null)if(h)ha(S,!1);else{if(cn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(b=Rl(i),b!==null){for(o.flags|=128,ha(S,!1),h=b.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)S=l,i=h,S.flags&=14680066,b=S.alternate,b===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=b.childLanes,S.lanes=b.lanes,S.child=b.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=b.memoizedProps,S.memoizedState=b.memoizedState,S.updateQueue=b.updateQueue,S.type=b.type,i=b.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return zt(qt,qt.current&1|2),o.child}i=i.sibling}S.tail!==null&&X()>qs&&(o.flags|=128,h=!0,ha(S,!1),o.lanes=4194304)}else{if(!h)if(i=Rl(b),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),ha(S,!0),S.tail===null&&S.tailMode==="hidden"&&!b.alternate&&!Yt)return Pn(o),null}else 2*X()-S.renderingStartTime>qs&&l!==1073741824&&(o.flags|=128,h=!0,ha(S,!1),o.lanes=4194304);S.isBackwards?(b.sibling=o.child,o.child=b):(l=S.last,l!==null?l.sibling=b:o.child=b,S.last=b)}return S.tail!==null?(o=S.tail,S.rendering=o,S.tail=o.sibling,S.renderingStartTime=X(),o.sibling=null,l=qt.current,zt(qt,h?l&1|2:l&1),o):(Pn(o),null);case 22:case 23:return Id(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(ii&1073741824)!==0&&(Pn(o),o.subtreeFlags&6&&(o.flags|=8192)):Pn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function lx(i,o){switch(Hu(o),o.tag){case 1:return Xn(o.type)&&_l(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return js(),Wt(jn),Wt(Cn),td(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Qu(o),null;case 13:if(Wt(qt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Vs()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Wt(qt),null;case 4:return js(),null;case 10:return Yu(o.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Ol=!1,Ln=!1,cx=typeof WeakSet=="function"?WeakSet:Set,Be=null;function $s(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){en(i,o,h)}else l.current=null}function Sd(i,o,l){try{l()}catch(h){en(i,o,h)}}var ug=!1;function ux(i,o){if(Iu=rl,i=Hp(),Tu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var v=h.anchorOffset,S=h.focusNode;h=h.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var b=0,z=-1,G=-1,ce=0,Se=0,Me=i,ye=null;t:for(;;){for(var Fe;Me!==l||v!==0&&Me.nodeType!==3||(z=b+v),Me!==S||h!==0&&Me.nodeType!==3||(G=b+h),Me.nodeType===3&&(b+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)ye=Me,Me=Fe;for(;;){if(Me===i)break t;if(ye===l&&++ce===v&&(z=b),ye===S&&++Se===h&&(G=b),(Fe=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Fe}l=z===-1||G===-1?null:{start:z,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nu={focusedElem:i,selectionRange:l},rl=!1,Be=o;Be!==null;)if(o=Be,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Be=i;else for(;Be!==null;){o=Be;try{var He=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,nn=He.memoizedState,te=o.stateNode,$=te.getSnapshotBeforeUpdate(o.elementType===o.type?Ge:yi(o.type,Ge),nn);te.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var se=o.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){en(o,o.return,Te)}if(i=o.sibling,i!==null){i.return=o.return,Be=i;break}Be=o.return}return He=ug,ug=!1,He}function fa(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&i)===i){var S=v.destroy;v.destroy=void 0,S!==void 0&&Sd(o,l,S)}v=v.next}while(v!==h)}}function Bl(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Md(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function dg(i){var o=i.alternate;o!==null&&(i.alternate=null,dg(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Pi],delete o[na],delete o[Ou],delete o[Xy],delete o[$y])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function hg(i){return i.tag===5||i.tag===3||i.tag===4}function fg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||hg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ed(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=gl));else if(h!==4&&(i=i.child,i!==null))for(Ed(i,o,l),i=i.sibling;i!==null;)Ed(i,o,l),i=i.sibling}function wd(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(wd(i,o,l),i=i.sibling;i!==null;)wd(i,o,l),i=i.sibling}var Mn=null,xi=!1;function br(i,o,l){for(l=l.child;l!==null;)pg(i,o,l),l=l.sibling}function pg(i,o,l){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount($e,l)}catch{}switch(l.tag){case 5:Ln||$s(l,o);case 6:var h=Mn,v=xi;Mn=null,br(i,o,l),Mn=h,xi=v,Mn!==null&&(xi?(i=Mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(xi?(i=Mn,l=l.stateNode,i.nodeType===8?ku(i.parentNode,l):i.nodeType===1&&ku(i,l),jo(i)):ku(Mn,l.stateNode));break;case 4:h=Mn,v=xi,Mn=l.stateNode.containerInfo,xi=!0,br(i,o,l),Mn=h,xi=v;break;case 0:case 11:case 14:case 15:if(!Ln&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var S=v,b=S.destroy;S=S.tag,b!==void 0&&((S&2)!==0||(S&4)!==0)&&Sd(l,o,b),v=v.next}while(v!==h)}br(i,o,l);break;case 1:if(!Ln&&($s(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(z){en(l,o,z)}br(i,o,l);break;case 21:br(i,o,l);break;case 22:l.mode&1?(Ln=(h=Ln)||l.memoizedState!==null,br(i,o,l),Ln=h):br(i,o,l);break;default:br(i,o,l)}}function mg(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new cx),o.forEach(function(h){var v=yx.bind(null,i,h);l.has(h)||(l.add(h),h.then(v,v))})}}function Si(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var v=l[h];try{var S=i,b=o,z=b;e:for(;z!==null;){switch(z.tag){case 5:Mn=z.stateNode,xi=!1;break e;case 3:Mn=z.stateNode.containerInfo,xi=!0;break e;case 4:Mn=z.stateNode.containerInfo,xi=!0;break e}z=z.return}if(Mn===null)throw Error(t(160));pg(S,b,v),Mn=null,xi=!1;var G=v.alternate;G!==null&&(G.return=null),v.return=null}catch(ce){en(v,o,ce)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)gg(o,i),o=o.sibling}function gg(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Si(o,i),Ii(i),h&4){try{fa(3,i,i.return),Bl(3,i)}catch(Ge){en(i,i.return,Ge)}try{fa(5,i,i.return)}catch(Ge){en(i,i.return,Ge)}}break;case 1:Si(o,i),Ii(i),h&512&&l!==null&&$s(l,l.return);break;case 5:if(Si(o,i),Ii(i),h&512&&l!==null&&$s(l,l.return),i.flags&32){var v=i.stateNode;try{mt(v,"")}catch(Ge){en(i,i.return,Ge)}}if(h&4&&(v=i.stateNode,v!=null)){var S=i.memoizedProps,b=l!==null?l.memoizedProps:S,z=i.type,G=i.updateQueue;if(i.updateQueue=null,G!==null)try{z==="input"&&S.type==="radio"&&S.name!=null&&xt(v,S),at(z,b);var ce=at(z,S);for(b=0;b<G.length;b+=2){var Se=G[b],Me=G[b+1];Se==="style"?it(v,Me):Se==="dangerouslySetInnerHTML"?ke(v,Me):Se==="children"?mt(v,Me):w(v,Se,Me,ce)}switch(z){case"input":vt(v,S);break;case"textarea":_e(v,S);break;case"select":var ye=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!S.multiple;var Fe=S.value;Fe!=null?k(v,!!S.multiple,Fe,!1):ye!==!!S.multiple&&(S.defaultValue!=null?k(v,!!S.multiple,S.defaultValue,!0):k(v,!!S.multiple,S.multiple?[]:"",!1))}v[na]=S}catch(Ge){en(i,i.return,Ge)}}break;case 6:if(Si(o,i),Ii(i),h&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,S=i.memoizedProps;try{v.nodeValue=S}catch(Ge){en(i,i.return,Ge)}}break;case 3:if(Si(o,i),Ii(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{jo(o.containerInfo)}catch(Ge){en(i,i.return,Ge)}break;case 4:Si(o,i),Ii(i);break;case 13:Si(o,i),Ii(i),v=i.child,v.flags&8192&&(S=v.memoizedState!==null,v.stateNode.isHidden=S,!S||v.alternate!==null&&v.alternate.memoizedState!==null||(bd=X())),h&4&&mg(i);break;case 22:if(Se=l!==null&&l.memoizedState!==null,i.mode&1?(Ln=(ce=Ln)||Se,Si(o,i),Ln=ce):Si(o,i),Ii(i),h&8192){if(ce=i.memoizedState!==null,(i.stateNode.isHidden=ce)&&!Se&&(i.mode&1)!==0)for(Be=i,Se=i.child;Se!==null;){for(Me=Be=Se;Be!==null;){switch(ye=Be,Fe=ye.child,ye.tag){case 0:case 11:case 14:case 15:fa(4,ye,ye.return);break;case 1:$s(ye,ye.return);var He=ye.stateNode;if(typeof He.componentWillUnmount=="function"){h=ye,l=ye.return;try{o=h,He.props=o.memoizedProps,He.state=o.memoizedState,He.componentWillUnmount()}catch(Ge){en(h,l,Ge)}}break;case 5:$s(ye,ye.return);break;case 22:if(ye.memoizedState!==null){yg(Me);continue}}Fe!==null?(Fe.return=ye,Be=Fe):yg(Me)}Se=Se.sibling}e:for(Se=null,Me=i;;){if(Me.tag===5){if(Se===null){Se=Me;try{v=Me.stateNode,ce?(S=v.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(z=Me.stateNode,G=Me.memoizedProps.style,b=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=Qe("display",b))}catch(Ge){en(i,i.return,Ge)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ce?"":Me.memoizedProps}catch(Ge){en(i,i.return,Ge)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Si(o,i),Ii(i),h&4&&mg(i);break;case 21:break;default:Si(o,i),Ii(i)}}function Ii(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(hg(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(mt(v,""),h.flags&=-33);var S=fg(i);wd(i,S,v);break;case 3:case 4:var b=h.stateNode.containerInfo,z=fg(i);Ed(i,z,b);break;default:throw Error(t(161))}}catch(G){en(i,i.return,G)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function dx(i,o,l){Be=i,vg(i)}function vg(i,o,l){for(var h=(i.mode&1)!==0;Be!==null;){var v=Be,S=v.child;if(v.tag===22&&h){var b=v.memoizedState!==null||Ol;if(!b){var z=v.alternate,G=z!==null&&z.memoizedState!==null||Ln;z=Ol;var ce=Ln;if(Ol=b,(Ln=G)&&!ce)for(Be=v;Be!==null;)b=Be,G=b.child,b.tag===22&&b.memoizedState!==null?xg(v):G!==null?(G.return=b,Be=G):xg(v);for(;S!==null;)Be=S,vg(S),S=S.sibling;Be=v,Ol=z,Ln=ce}_g(i)}else(v.subtreeFlags&8772)!==0&&S!==null?(S.return=v,Be=S):_g(i)}}function _g(i){for(;Be!==null;){var o=Be;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Ln||Bl(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Ln)if(l===null)h.componentDidMount();else{var v=o.elementType===o.type?l.memoizedProps:yi(o.type,l.memoizedProps);h.componentDidUpdate(v,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var S=o.updateQueue;S!==null&&ym(o,S,h);break;case 3:var b=o.updateQueue;if(b!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}ym(o,b,l)}break;case 5:var z=o.stateNode;if(l===null&&o.flags&4){l=z;var G=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ce=o.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&jo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||o.flags&512&&Md(o)}catch(ye){en(o,o.return,ye)}}if(o===i){Be=null;break}if(l=o.sibling,l!==null){l.return=o.return,Be=l;break}Be=o.return}}function yg(i){for(;Be!==null;){var o=Be;if(o===i){Be=null;break}var l=o.sibling;if(l!==null){l.return=o.return,Be=l;break}Be=o.return}}function xg(i){for(;Be!==null;){var o=Be;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Bl(4,o)}catch(G){en(o,l,G)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var v=o.return;try{h.componentDidMount()}catch(G){en(o,v,G)}}var S=o.return;try{Md(o)}catch(G){en(o,S,G)}break;case 5:var b=o.return;try{Md(o)}catch(G){en(o,b,G)}}}catch(G){en(o,o.return,G)}if(o===i){Be=null;break}var z=o.sibling;if(z!==null){z.return=o.return,Be=z;break}Be=o.return}}var hx=Math.ceil,zl=T.ReactCurrentDispatcher,Td=T.ReactCurrentOwner,di=T.ReactCurrentBatchConfig,At=0,vn=null,sn=null,En=0,ii=0,Ys=Mr(0),cn=0,pa=null,as=0,Vl=0,Ad=0,ma=null,Yn=null,bd=0,qs=1/0,Ki=null,Hl=!1,Cd=null,Cr=null,Gl=!1,Rr=null,Wl=0,ga=0,Rd=null,jl=-1,Xl=0;function zn(){return(At&6)!==0?X():jl!==-1?jl:jl=X()}function Pr(i){return(i.mode&1)===0?1:(At&2)!==0&&En!==0?En&-En:qy.transition!==null?(Xl===0&&(Xl=On()),Xl):(i=St,i!==0||(i=window.event,i=i===void 0?16:Mp(i.type)),i)}function Mi(i,o,l,h){if(50<ga)throw ga=0,Rd=null,Error(t(185));tn(i,l,h),((At&2)===0||i!==vn)&&(i===vn&&((At&2)===0&&(Vl|=l),cn===4&&Lr(i,En)),qn(i,h),l===1&&At===0&&(o.mode&1)===0&&(qs=X()+500,xl&&wr()))}function qn(i,o){var l=i.callbackNode;Jr(i,o);var h=gi(i,i===vn?En:0);if(h===0)l!==null&&K(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&K(l),o===1)i.tag===0?Yy(Mg.bind(null,i)):am(Mg.bind(null,i)),Wy(function(){(At&6)===0&&wr()}),l=null;else{switch(pp(h)){case 1:l=Pe;break;case 4:l=Ue;break;case 16:l=Oe;break;case 536870912:l=st;break;default:l=Oe}l=Pg(l,Sg.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Sg(i,o){if(jl=-1,Xl=0,(At&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ks()&&i.callbackNode!==l)return null;var h=gi(i,i===vn?En:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=$l(i,h);else{o=h;var v=At;At|=2;var S=wg();(vn!==i||En!==o)&&(Ki=null,qs=X()+500,cs(i,o));do try{mx();break}catch(z){Eg(i,z)}while(!0);$u(),zl.current=S,At=v,sn!==null?o=0:(vn=null,En=0,o=cn)}if(o!==0){if(o===2&&(v=Ut(i),v!==0&&(h=v,o=Pd(i,v))),o===1)throw l=pa,cs(i,0),Lr(i,h),qn(i,X()),l;if(o===6)Lr(i,h);else{if(v=i.current.alternate,(h&30)===0&&!fx(v)&&(o=$l(i,h),o===2&&(S=Ut(i),S!==0&&(h=S,o=Pd(i,S))),o===1))throw l=pa,cs(i,0),Lr(i,h),qn(i,X()),l;switch(i.finishedWork=v,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:us(i,Yn,Ki);break;case 3:if(Lr(i,h),(h&130023424)===h&&(o=bd+500-X(),10<o)){if(gi(i,0)!==0)break;if(v=i.suspendedLanes,(v&h)!==h){zn(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=Uu(us.bind(null,i,Yn,Ki),o);break}us(i,Yn,Ki);break;case 4:if(Lr(i,h),(h&4194240)===h)break;for(o=i.eventTimes,v=-1;0<h;){var b=31-Ct(h);S=1<<b,b=o[b],b>v&&(v=b),h&=~S}if(h=v,h=X()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*hx(h/1960))-h,10<h){i.timeoutHandle=Uu(us.bind(null,i,Yn,Ki),h);break}us(i,Yn,Ki);break;case 5:us(i,Yn,Ki);break;default:throw Error(t(329))}}}return qn(i,X()),i.callbackNode===l?Sg.bind(null,i):null}function Pd(i,o){var l=ma;return i.current.memoizedState.isDehydrated&&(cs(i,o).flags|=256),i=$l(i,o),i!==2&&(o=Yn,Yn=l,o!==null&&Ld(o)),i}function Ld(i){Yn===null?Yn=i:Yn.push.apply(Yn,i)}function fx(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var v=l[h],S=v.getSnapshot;v=v.value;try{if(!vi(S(),v))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Lr(i,o){for(o&=~Ad,o&=~Vl,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-Ct(o),h=1<<l;i[l]=-1,o&=~h}}function Mg(i){if((At&6)!==0)throw Error(t(327));Ks();var o=gi(i,0);if((o&1)===0)return qn(i,X()),null;var l=$l(i,o);if(i.tag!==0&&l===2){var h=Ut(i);h!==0&&(o=h,l=Pd(i,h))}if(l===1)throw l=pa,cs(i,0),Lr(i,o),qn(i,X()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,us(i,Yn,Ki),qn(i,X()),null}function Dd(i,o){var l=At;At|=1;try{return i(o)}finally{At=l,At===0&&(qs=X()+500,xl&&wr())}}function ls(i){Rr!==null&&Rr.tag===0&&(At&6)===0&&Ks();var o=At;At|=1;var l=di.transition,h=St;try{if(di.transition=null,St=1,i)return i()}finally{St=h,di.transition=l,At=o,(At&6)===0&&wr()}}function Id(){ii=Ys.current,Wt(Ys)}function cs(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Gy(l)),sn!==null)for(l=sn.return;l!==null;){var h=l;switch(Hu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&_l();break;case 3:js(),Wt(jn),Wt(Cn),td();break;case 5:Qu(h);break;case 4:js();break;case 13:Wt(qt);break;case 19:Wt(qt);break;case 10:Yu(h.type._context);break;case 22:case 23:Id()}l=l.return}if(vn=i,sn=i=Dr(i.current,null),En=ii=o,cn=0,pa=null,Ad=Vl=as=0,Yn=ma=null,rs!==null){for(o=0;o<rs.length;o++)if(l=rs[o],h=l.interleaved,h!==null){l.interleaved=null;var v=h.next,S=l.pending;if(S!==null){var b=S.next;S.next=v,h.next=b}l.pending=h}rs=null}return i}function Eg(i,o){do{var l=sn;try{if($u(),Pl.current=Nl,Ll){for(var h=Kt.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}Ll=!1}if(os=0,gn=ln=Kt=null,la=!1,ca=0,Td.current=null,l===null||l.return===null){cn=1,pa=o,sn=null;break}e:{var S=i,b=l.return,z=l,G=o;if(o=En,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,Se=z,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Fe=Ym(b);if(Fe!==null){Fe.flags&=-257,qm(Fe,b,z,S,o),Fe.mode&1&&$m(S,ce,o),o=Fe,G=ce;var He=o.updateQueue;if(He===null){var Ge=new Set;Ge.add(G),o.updateQueue=Ge}else He.add(G);break e}else{if((o&1)===0){$m(S,ce,o),Nd();break e}G=Error(t(426))}}else if(Yt&&z.mode&1){var nn=Ym(b);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),qm(nn,b,z,S,o),ju(Xs(G,z));break e}}S=G=Xs(G,z),cn!==4&&(cn=2),ma===null?ma=[S]:ma.push(S),S=b;do{switch(S.tag){case 3:S.flags|=65536,o&=-o,S.lanes|=o;var te=jm(S,G,o);_m(S,te);break e;case 1:z=G;var $=S.type,se=S.stateNode;if((S.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Cr===null||!Cr.has(se)))){S.flags|=65536,o&=-o,S.lanes|=o;var Te=Xm(S,z,o);_m(S,Te);break e}}S=S.return}while(S!==null)}Ag(l)}catch(je){o=je,sn===l&&l!==null&&(sn=l=l.return);continue}break}while(!0)}function wg(){var i=zl.current;return zl.current=Nl,i===null?Nl:i}function Nd(){(cn===0||cn===3||cn===2)&&(cn=4),vn===null||(as&268435455)===0&&(Vl&268435455)===0||Lr(vn,En)}function $l(i,o){var l=At;At|=2;var h=wg();(vn!==i||En!==o)&&(Ki=null,cs(i,o));do try{px();break}catch(v){Eg(i,v)}while(!0);if($u(),At=l,zl.current=h,sn!==null)throw Error(t(261));return vn=null,En=0,cn}function px(){for(;sn!==null;)Tg(sn)}function mx(){for(;sn!==null&&!ue();)Tg(sn)}function Tg(i){var o=Rg(i.alternate,i,ii);i.memoizedProps=i.pendingProps,o===null?Ag(i):sn=o,Td.current=null}function Ag(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=ax(l,o,ii),l!==null){sn=l;return}}else{if(l=lx(l,o),l!==null){l.flags&=32767,sn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{cn=6,sn=null;return}}if(o=o.sibling,o!==null){sn=o;return}sn=o=i}while(o!==null);cn===0&&(cn=5)}function us(i,o,l){var h=St,v=di.transition;try{di.transition=null,St=1,gx(i,o,l,h)}finally{di.transition=v,St=h}return null}function gx(i,o,l,h){do Ks();while(Rr!==null);if((At&6)!==0)throw Error(t(327));l=i.finishedWork;var v=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(bn(i,S),i===vn&&(sn=vn=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Gl||(Gl=!0,Pg(Oe,function(){return Ks(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=di.transition,di.transition=null;var b=St;St=1;var z=At;At|=4,Td.current=null,ux(i,l),gg(l,i),Uy(Nu),rl=!!Iu,Nu=Iu=null,i.current=l,dx(l),de(),At=z,St=b,di.transition=S}else i.current=l;if(Gl&&(Gl=!1,Rr=i,Wl=v),S=i.pendingLanes,S===0&&(Cr=null),bt(l.stateNode),qn(i,X()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)v=o[l],h(v.value,{componentStack:v.stack,digest:v.digest});if(Hl)throw Hl=!1,i=Cd,Cd=null,i;return(Wl&1)!==0&&i.tag!==0&&Ks(),S=i.pendingLanes,(S&1)!==0?i===Rd?ga++:(ga=0,Rd=i):ga=0,wr(),null}function Ks(){if(Rr!==null){var i=pp(Wl),o=di.transition,l=St;try{if(di.transition=null,St=16>i?16:i,Rr===null)var h=!1;else{if(i=Rr,Rr=null,Wl=0,(At&6)!==0)throw Error(t(331));var v=At;for(At|=4,Be=i.current;Be!==null;){var S=Be,b=S.child;if((Be.flags&16)!==0){var z=S.deletions;if(z!==null){for(var G=0;G<z.length;G++){var ce=z[G];for(Be=ce;Be!==null;){var Se=Be;switch(Se.tag){case 0:case 11:case 15:fa(8,Se,S)}var Me=Se.child;if(Me!==null)Me.return=Se,Be=Me;else for(;Be!==null;){Se=Be;var ye=Se.sibling,Fe=Se.return;if(dg(Se),Se===ce){Be=null;break}if(ye!==null){ye.return=Fe,Be=ye;break}Be=Fe}}}var He=S.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var nn=Ge.sibling;Ge.sibling=null,Ge=nn}while(Ge!==null)}}Be=S}}if((S.subtreeFlags&2064)!==0&&b!==null)b.return=S,Be=b;else e:for(;Be!==null;){if(S=Be,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:fa(9,S,S.return)}var te=S.sibling;if(te!==null){te.return=S.return,Be=te;break e}Be=S.return}}var $=i.current;for(Be=$;Be!==null;){b=Be;var se=b.child;if((b.subtreeFlags&2064)!==0&&se!==null)se.return=b,Be=se;else e:for(b=$;Be!==null;){if(z=Be,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Bl(9,z)}}catch(je){en(z,z.return,je)}if(z===b){Be=null;break e}var Te=z.sibling;if(Te!==null){Te.return=z.return,Be=Te;break e}Be=z.return}}if(At=v,wr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot($e,i)}catch{}h=!0}return h}finally{St=l,di.transition=o}}return!1}function bg(i,o,l){o=Xs(l,o),o=jm(i,o,1),i=Ar(i,o,1),o=zn(),i!==null&&(tn(i,1,o),qn(i,o))}function en(i,o,l){if(i.tag===3)bg(i,i,l);else for(;o!==null;){if(o.tag===3){bg(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Cr===null||!Cr.has(h))){i=Xs(l,i),i=Xm(o,i,1),o=Ar(o,i,1),i=zn(),o!==null&&(tn(o,1,i),qn(o,i));break}}o=o.return}}function vx(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=zn(),i.pingedLanes|=i.suspendedLanes&l,vn===i&&(En&l)===l&&(cn===4||cn===3&&(En&130023424)===En&&500>X()-bd?cs(i,0):Ad|=l),qn(i,o)}function Cg(i,o){o===0&&((i.mode&1)===0?o=1:(o=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var l=zn();i=$i(i,o),i!==null&&(tn(i,o,l),qn(i,l))}function _x(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Cg(i,l)}function yx(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,v=i.memoizedState;v!==null&&(l=v.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Cg(i,l)}var Rg;Rg=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||jn.current)$n=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return $n=!1,ox(i,o,l);$n=(i.flags&131072)!==0}else $n=!1,Yt&&(o.flags&1048576)!==0&&lm(o,Ml,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;kl(i,o),i=o.pendingProps;var v=Os(o,Cn.current);Ws(o,l),v=rd(null,o,h,i,v,l);var S=sd();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Xn(h)?(S=!0,yl(o)):S=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Zu(o),v.updater=Fl,o.stateNode=v,v._reactInternals=o,dd(o,h,i,l),o=md(null,o,h,!0,S,l)):(o.tag=0,Yt&&S&&Vu(o),Bn(null,o,v,l),o=o.child),o;case 16:h=o.elementType;e:{switch(kl(i,o),i=o.pendingProps,v=h._init,h=v(h._payload),o.type=h,v=o.tag=Sx(h),i=yi(h,i),v){case 0:o=pd(null,o,h,i,l);break e;case 1:o=tg(null,o,h,i,l);break e;case 11:o=Km(null,o,h,i,l);break e;case 14:o=Zm(null,o,h,yi(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),pd(i,o,h,v,l);case 1:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),tg(i,o,h,v,l);case 3:e:{if(ng(o),i===null)throw Error(t(387));h=o.pendingProps,S=o.memoizedState,v=S.element,vm(i,o),Cl(o,h,null,l);var b=o.memoizedState;if(h=b.element,S.isDehydrated)if(S={element:h,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},o.updateQueue.baseState=S,o.memoizedState=S,o.flags&256){v=Xs(Error(t(423)),o),o=ig(i,o,h,l,v);break e}else if(h!==v){v=Xs(Error(t(424)),o),o=ig(i,o,h,l,v);break e}else for(ni=Sr(o.stateNode.containerInfo.firstChild),ti=o,Yt=!0,_i=null,l=mm(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Vs(),h===v){o=qi(i,o,l);break e}Bn(i,o,h,l)}o=o.child}return o;case 5:return xm(o),i===null&&Wu(o),h=o.type,v=o.pendingProps,S=i!==null?i.memoizedProps:null,b=v.children,Fu(h,v)?b=null:S!==null&&Fu(h,S)&&(o.flags|=32),eg(i,o),Bn(i,o,b,l),o.child;case 6:return i===null&&Wu(o),null;case 13:return rg(i,o,l);case 4:return Ju(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Hs(o,null,h,l):Bn(i,o,h,l),o.child;case 11:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),Km(i,o,h,v,l);case 7:return Bn(i,o,o.pendingProps,l),o.child;case 8:return Bn(i,o,o.pendingProps.children,l),o.child;case 12:return Bn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,v=o.pendingProps,S=o.memoizedProps,b=v.value,zt(Tl,h._currentValue),h._currentValue=b,S!==null)if(vi(S.value,b)){if(S.children===v.children&&!jn.current){o=qi(i,o,l);break e}}else for(S=o.child,S!==null&&(S.return=o);S!==null;){var z=S.dependencies;if(z!==null){b=S.child;for(var G=z.firstContext;G!==null;){if(G.context===h){if(S.tag===1){G=Yi(-1,l&-l),G.tag=2;var ce=S.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),ce.pending=G}}S.lanes|=l,G=S.alternate,G!==null&&(G.lanes|=l),qu(S.return,l,o),z.lanes|=l;break}G=G.next}}else if(S.tag===10)b=S.type===o.type?null:S.child;else if(S.tag===18){if(b=S.return,b===null)throw Error(t(341));b.lanes|=l,z=b.alternate,z!==null&&(z.lanes|=l),qu(b,l,o),b=S.sibling}else b=S.child;if(b!==null)b.return=S;else for(b=S;b!==null;){if(b===o){b=null;break}if(S=b.sibling,S!==null){S.return=b.return,b=S;break}b=b.return}S=b}Bn(i,o,v.children,l),o=o.child}return o;case 9:return v=o.type,h=o.pendingProps.children,Ws(o,l),v=ci(v),h=h(v),o.flags|=1,Bn(i,o,h,l),o.child;case 14:return h=o.type,v=yi(h,o.pendingProps),v=yi(h.type,v),Zm(i,o,h,v,l);case 15:return Jm(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:yi(h,v),kl(i,o),o.tag=1,Xn(h)?(i=!0,yl(o)):i=!1,Ws(o,l),Gm(o,h,v),dd(o,h,v,l),md(null,o,h,!0,i,l);case 19:return og(i,o,l);case 22:return Qm(i,o,l)}throw Error(t(156,o.tag))};function Pg(i,o){return D(i,o)}function xx(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(i,o,l,h){return new xx(i,o,l,h)}function Fd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Sx(i){if(typeof i=="function")return Fd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===ee)return 14}return 2}function Dr(i,o){var l=i.alternate;return l===null?(l=hi(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Yl(i,o,l,h,v,S){var b=2;if(h=i,typeof i=="function")Fd(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case N:return ds(l.children,v,S,o);case B:b=8,v|=8;break;case R:return i=hi(12,l,o,v|2),i.elementType=R,i.lanes=S,i;case Z:return i=hi(13,l,o,v),i.elementType=Z,i.lanes=S,i;case j:return i=hi(19,l,o,v),i.elementType=j,i.lanes=S,i;case ne:return ql(l,v,S,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:b=10;break e;case F:b=9;break e;case q:b=11;break e;case ee:b=14;break e;case J:b=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=hi(b,l,o,v),o.elementType=i,o.type=h,o.lanes=S,o}function ds(i,o,l,h){return i=hi(7,i,h,o),i.lanes=l,i}function ql(i,o,l,h){return i=hi(22,i,h,o),i.elementType=ne,i.lanes=l,i.stateNode={isHidden:!1},i}function Ud(i,o,l){return i=hi(6,i,null,o),i.lanes=l,i}function kd(i,o,l){return o=hi(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function Mx(i,o,l,h,v){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Od(i,o,l,h,v,S,b,z,G){return i=new Mx(i,o,l,z,G),o===1?(o=1,S===!0&&(o|=8)):o=0,S=hi(3,null,null,o),i.current=S,S.stateNode=i,S.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(S),i}function Ex(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Lg(i){if(!i)return Er;i=i._reactInternals;e:{if(Ri(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Xn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Xn(l))return sm(i,l,o)}return o}function Dg(i,o,l,h,v,S,b,z,G){return i=Od(l,h,!0,i,v,S,b,z,G),i.context=Lg(null),l=i.current,h=zn(),v=Pr(l),S=Yi(h,v),S.callback=o??null,Ar(l,S,v),i.current.lanes=v,tn(i,v,h),qn(i,h),i}function Kl(i,o,l,h){var v=o.current,S=zn(),b=Pr(v);return l=Lg(l),o.context===null?o.context=l:o.pendingContext=l,o=Yi(S,b),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Ar(v,o,b),i!==null&&(Mi(i,v,b,S),bl(i,v,b)),b}function Zl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ig(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Bd(i,o){Ig(i,o),(i=i.alternate)&&Ig(i,o)}function wx(){return null}var Ng=typeof reportError=="function"?reportError:function(i){console.error(i)};function zd(i){this._internalRoot=i}Jl.prototype.render=zd.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Kl(i,o,null,null)},Jl.prototype.unmount=zd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ls(function(){Kl(null,i,null,null)}),o[Gi]=null}};function Jl(i){this._internalRoot=i}Jl.prototype.unstable_scheduleHydration=function(i){if(i){var o=vp();i={blockedOn:null,target:i,priority:o};for(var l=0;l<_r.length&&o!==0&&o<_r[l].priority;l++);_r.splice(l,0,i),l===0&&xp(i)}};function Vd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ql(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function Tx(i,o,l,h,v){if(v){if(typeof h=="function"){var S=h;h=function(){var ce=Zl(b);S.call(ce)}}var b=Dg(o,h,i,0,null,!1,!1,"",Fg);return i._reactRootContainer=b,i[Gi]=b.current,ea(i.nodeType===8?i.parentNode:i),ls(),b}for(;v=i.lastChild;)i.removeChild(v);if(typeof h=="function"){var z=h;h=function(){var ce=Zl(G);z.call(ce)}}var G=Od(i,0,!1,null,null,!1,!1,"",Fg);return i._reactRootContainer=G,i[Gi]=G.current,ea(i.nodeType===8?i.parentNode:i),ls(function(){Kl(o,G,l,h)}),G}function ec(i,o,l,h,v){var S=l._reactRootContainer;if(S){var b=S;if(typeof v=="function"){var z=v;v=function(){var G=Zl(b);z.call(G)}}Kl(o,b,i,v)}else b=Tx(l,o,i,v,h);return Zl(b)}mp=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Sn(o.pendingLanes);l!==0&&(Qr(o,l|1),qn(o,X()),(At&6)===0&&(qs=X()+500,wr()))}break;case 13:ls(function(){var h=$i(i,1);if(h!==null){var v=zn();Mi(h,i,1,v)}}),Bd(i,1)}},hu=function(i){if(i.tag===13){var o=$i(i,134217728);if(o!==null){var l=zn();Mi(o,i,134217728,l)}Bd(i,134217728)}},gp=function(i){if(i.tag===13){var o=Pr(i),l=$i(i,o);if(l!==null){var h=zn();Mi(l,i,o,h)}Bd(i,o)}},vp=function(){return St},_p=function(i,o){var l=St;try{return St=i,o()}finally{St=l}},Re=function(i,o,l){switch(o){case"input":if(vt(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var v=vl(h);if(!v)throw Error(t(90));pt(h),vt(h,v)}}}break;case"textarea":_e(i,l);break;case"select":o=l.value,o!=null&&k(i,!!l.multiple,o,!1)}},Ht=Dd,an=ls;var Ax={usingClientEntryPoint:!1,Events:[ia,Us,vl,De,lt,Dd]},va={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=el(i),i===null?null:i.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{$e=tc.inject(bx),ct=tc}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax,Kn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(o))throw Error(t(200));return Ex(i,o,null,l)},Kn.createRoot=function(i,o){if(!Vd(i))throw Error(t(299));var l=!1,h="",v=Ng;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Od(i,1,!1,null,null,l,!1,h,v),i[Gi]=o.current,ea(i.nodeType===8?i.parentNode:i),new zd(o)},Kn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=el(o),i=i===null?null:i.stateNode,i},Kn.flushSync=function(i){return ls(i)},Kn.hydrate=function(i,o,l){if(!Ql(o))throw Error(t(200));return ec(null,i,o,!0,l)},Kn.hydrateRoot=function(i,o,l){if(!Vd(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,v=!1,S="",b=Ng;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),o=Dg(o,null,i,1,l??null,v,!1,S,b),i[Gi]=o.current,ea(i),h)for(i=0;i<h.length;i++)l=h[i],v=l._getVersion,v=v(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,v]:o.mutableSourceEagerHydrationData.push(l,v);return new Jl(o)},Kn.render=function(i,o,l){if(!Ql(o))throw Error(t(200));return ec(null,i,o,!1,l)},Kn.unmountComponentAtNode=function(i){if(!Ql(i))throw Error(t(40));return i._reactRootContainer?(ls(function(){ec(null,null,i,!1,function(){i._reactRootContainer=null,i[Gi]=null})}),!0):!1},Kn.unstable_batchedUpdates=Dd,Kn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Ql(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ec(i,o,l,!1,h)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var Gg;function Fx(){if(Gg)return Wd.exports;Gg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wd.exports=Nx(),Wd.exports}var Wg;function Ux(){if(Wg)return nc;Wg=1;var r=Fx();return nc.createRoot=r.createRoot,nc.hydrateRoot=r.hydrateRoot,nc}var kx=Ux();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jg="popstate";function Ox(r={}){function e(n,s){let{pathname:a,search:c,hash:u}=n.location;return Uh("",{pathname:a,search:c,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(n,s){return typeof s=="string"?s:La(s)}return zx(e,t,null,r)}function Jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Oi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bx(){return Math.random().toString(36).substring(2,10)}function Xg(r,e){return{usr:r.state,key:r.key,idx:e}}function Uh(r,e,t=null,n){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:t,key:e&&e.key||n||Bx()}}function La({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function No(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substring(n),r=r.substring(0,n)),r&&(e.pathname=r)}return e}function zx(r,e,t,n={}){let{window:s=document.defaultView,v5Compat:a=!1}=n,c=s.history,u="POP",d=null,f=p();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function p(){return(c.state||{idx:null}).idx}function g(){u="POP";let x=p(),_=x==null?null:x-f;f=x,d&&d({action:u,location:E.location,delta:_})}function m(x,_){u="PUSH";let C=Uh(E.location,x,_);f=p()+1;let w=Xg(C,f),T=E.createHref(C);try{c.pushState(w,"",T)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;s.location.assign(T)}a&&d&&d({action:u,location:E.location,delta:1})}function y(x,_){u="REPLACE";let C=Uh(E.location,x,_);f=p();let w=Xg(C,f),T=E.createHref(C);c.replaceState(w,"",T),a&&d&&d({action:u,location:E.location,delta:0})}function M(x){return Vx(x)}let E={get action(){return u},get location(){return r(s,c)},listen(x){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(jg,g),d=x,()=>{s.removeEventListener(jg,g),d=null}},createHref(x){return e(s,x)},createURL:M,encodeLocation(x){let _=M(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:y,go(x){return c.go(x)}};return E}function Vx(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(t,"No window.location.(origin|href) available to create URL");let n=typeof r=="string"?r:La(r);return n=n.replace(/ $/,"%20"),!e&&n.startsWith("//")&&(n=t+n),new URL(n,t)}function Av(r,e,t="/"){return Hx(r,e,t,!1)}function Hx(r,e,t,n){let s=typeof e=="string"?No(e):e,a=cr(s.pathname||"/",t);if(a==null)return null;let c=bv(r);Gx(c);let u=null;for(let d=0;u==null&&d<c.length;++d){let f=eS(a);u=Jx(c[d],f,n)}return u}function bv(r,e=[],t=[],n=""){let s=(a,c,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};d.relativePath.startsWith("/")&&(Jt(d.relativePath.startsWith(n),`Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(n.length));let f=ar([n,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(Jt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),bv(a.children,e,p,f)),!(a.path==null&&!a.index)&&e.push({path:f,score:Kx(f,a.index),routesMeta:p})};return r.forEach((a,c)=>{if(a.path===""||!a.path?.includes("?"))s(a,c);else for(let u of Cv(a.path))s(a,c,u)}),e}function Cv(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(n.length===0)return s?[a,""]:[a];let c=Cv(n.join("/")),u=[];return u.push(...c.map(d=>d===""?a:[a,d].join("/"))),s&&u.push(...c),u.map(d=>r.startsWith("/")&&d===""?"/":d)}function Gx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Zx(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var Wx=/^:[\w-]+$/,jx=3,Xx=2,$x=1,Yx=10,qx=-2,$g=r=>r==="*";function Kx(r,e){let t=r.split("/"),n=t.length;return t.some($g)&&(n+=qx),e&&(n+=Xx),t.filter(s=>!$g(s)).reduce((s,a)=>s+(Wx.test(a)?jx:a===""?$x:Yx),n)}function Zx(r,e){return r.length===e.length&&r.slice(0,-1).every((n,s)=>n===e[s])?r[r.length-1]-e[e.length-1]:0}function Jx(r,e,t=!1){let{routesMeta:n}=r,s={},a="/",c=[];for(let u=0;u<n.length;++u){let d=n[u],f=u===n.length-1,p=a==="/"?e:e.slice(a.length)||"/",g=Hc({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),m=d.route;if(!g&&f&&t&&!n[n.length-1].route.index&&(g=Hc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!g)return null;Object.assign(s,g.params),c.push({params:s,pathname:ar([a,g.pathname]),pathnameBase:rS(ar([a,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(a=ar([a,g.pathnameBase]))}return c}function Hc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=Qx(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let a=s[0],c=a.replace(/(.)\/+$/,"$1"),u=s.slice(1);return{params:n.reduce((f,{paramName:p,isOptional:g},m)=>{if(p==="*"){let M=u[m]||"";c=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const y=u[m];return g&&!y?f[p]=void 0:f[p]=(y||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:r}}function Qx(r,e=!1,t=!0){Oi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let n=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,d)=>(n.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function eS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Oi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function cr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}function tS(r,e="/"){let{pathname:t,search:n="",hash:s=""}=typeof r=="string"?No(r):r;return{pathname:t?t.startsWith("/")?t:nS(t,e):e,search:sS(n),hash:oS(s)}}function nS(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function $d(r,e,t,n){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iS(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rv(r){let e=iS(r);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Pv(r,e,t,n=!1){let s;typeof r=="string"?s=No(r):(s={...r},Jt(!s.pathname||!s.pathname.includes("?"),$d("?","pathname","search",s)),Jt(!s.pathname||!s.pathname.includes("#"),$d("#","pathname","hash",s)),Jt(!s.search||!s.search.includes("#"),$d("#","search","hash",s)));let a=r===""||s.pathname==="",c=a?"/":s.pathname,u;if(c==null)u=t;else{let g=e.length-1;if(!n&&c.startsWith("..")){let m=c.split("/");for(;m[0]==="..";)m.shift(),g-=1;s.pathname=m.join("/")}u=g>=0?e[g]:"/"}let d=tS(s,u),f=c&&c!=="/"&&c.endsWith("/"),p=(a||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var ar=r=>r.join("/").replace(/\/\/+/g,"/"),rS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),sS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,oS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function aS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Lv=["POST","PUT","PATCH","DELETE"];new Set(Lv);var lS=["GET",...Lv];new Set(lS);var Fo=ie.createContext(null);Fo.displayName="DataRouter";var Jc=ie.createContext(null);Jc.displayName="DataRouterState";ie.createContext(!1);var Dv=ie.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var cS=ie.createContext(new Map);cS.displayName="Fetchers";var uS=ie.createContext(null);uS.displayName="Await";var Bi=ie.createContext(null);Bi.displayName="Navigation";var Ha=ie.createContext(null);Ha.displayName="Location";var dr=ie.createContext({outlet:null,matches:[],isDataRoute:!1});dr.displayName="Route";var Df=ie.createContext(null);Df.displayName="RouteError";function dS(r,{relative:e}={}){Jt(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=ie.useContext(Bi),{hash:s,pathname:a,search:c}=Wa(r,{relative:e}),u=a;return t!=="/"&&(u=a==="/"?t:ar([t,a])),n.createHref({pathname:u,search:c,hash:s})}function Ga(){return ie.useContext(Ha)!=null}function hr(){return Jt(Ga(),"useLocation() may be used only in the context of a <Router> component."),ie.useContext(Ha).location}var Iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nv(r){ie.useContext(Bi).static||ie.useLayoutEffect(r)}function If(){let{isDataRoute:r}=ie.useContext(dr);return r?wS():hS()}function hS(){Jt(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let r=ie.useContext(Fo),{basename:e,navigator:t}=ie.useContext(Bi),{matches:n}=ie.useContext(dr),{pathname:s}=hr(),a=JSON.stringify(Rv(n)),c=ie.useRef(!1);return Nv(()=>{c.current=!0}),ie.useCallback((d,f={})=>{if(Oi(c.current,Iv),!c.current)return;if(typeof d=="number"){t.go(d);return}let p=Pv(d,JSON.parse(a),s,f.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ar([e,p.pathname])),(f.replace?t.replace:t.push)(p,f.state,f)},[e,t,a,s,r])}ie.createContext(null);function Wa(r,{relative:e}={}){let{matches:t}=ie.useContext(dr),{pathname:n}=hr(),s=JSON.stringify(Rv(t));return ie.useMemo(()=>Pv(r,JSON.parse(s),n,e==="path"),[r,s,n,e])}function fS(r,e){return Fv(r,e)}function Fv(r,e,t,n){Jt(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=ie.useContext(Bi),{matches:a}=ie.useContext(dr),c=a[a.length-1],u=c?c.params:{},d=c?c.pathname:"/",f=c?c.pathnameBase:"/",p=c&&c.route;{let _=p&&p.path||"";Uv(d,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=hr(),m;if(e){let _=typeof e=="string"?No(e):e;Jt(f==="/"||_.pathname?.startsWith(f),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${_.pathname}" was given in the \`location\` prop.`),m=_}else m=g;let y=m.pathname||"/",M=y;if(f!=="/"){let _=f.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=Av(r,{pathname:M});Oi(p||E!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Oi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=_S(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:ar([f,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?f:ar([f,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),a,t,n);return e&&x?ie.createElement(Ha.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},x):x}function pS(){let r=ES(),e=aS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ie.createElement(ie.Fragment,null,ie.createElement("p",null,"💿 Hey developer 👋"),ie.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ie.createElement("code",{style:a},"ErrorBoundary")," or"," ",ie.createElement("code",{style:a},"errorElement")," prop on your route.")),ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),t?ie.createElement("pre",{style:s},t):null,c)}var mS=ie.createElement(pS,null),gS=class extends ie.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?ie.createElement(dr.Provider,{value:this.props.routeContext},ie.createElement(Df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vS({routeContext:r,match:e,children:t}){let n=ie.useContext(Fo);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),ie.createElement(dr.Provider,{value:r},t)}function _S(r,e=[],t=null,n=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let s=r,a=t?.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&a?.[f.route.id]!==void 0);Jt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(t)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=t,m=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||m){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let g,m=!1,y=null,M=null;t&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||mS,c&&(u<0&&p===0?(Uv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,M=null):u===p&&(m=!0,M=f.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,p+1)),x=()=>{let _;return g?_=y:m?_=M:f.route.Component?_=ie.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=d,ie.createElement(vS,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:t!=null},children:_})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?ie.createElement(gS,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:x(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):x()},null)}function Nf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yS(r){let e=ie.useContext(Fo);return Jt(e,Nf(r)),e}function xS(r){let e=ie.useContext(Jc);return Jt(e,Nf(r)),e}function SS(r){let e=ie.useContext(dr);return Jt(e,Nf(r)),e}function Ff(r){let e=SS(r),t=e.matches[e.matches.length-1];return Jt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function MS(){return Ff("useRouteId")}function ES(){let r=ie.useContext(Df),e=xS("useRouteError"),t=Ff("useRouteError");return r!==void 0?r:e.errors?.[t]}function wS(){let{router:r}=yS("useNavigate"),e=Ff("useNavigate"),t=ie.useRef(!1);return Nv(()=>{t.current=!0}),ie.useCallback(async(s,a={})=>{Oi(t.current,Iv),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...a}))},[r,e])}var Yg={};function Uv(r,e,t){!e&&!Yg[r]&&(Yg[r]=!0,Oi(!1,t))}ie.memo(TS);function TS({routes:r,future:e,state:t}){return Fv(r,void 0,t,e)}function kh(r){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AS({basename:r="/",children:e=null,location:t,navigationType:n="POP",navigator:s,static:a=!1}){Jt(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),u=ie.useMemo(()=>({basename:c,navigator:s,static:a,future:{}}),[c,s,a]);typeof t=="string"&&(t=No(t));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:m="default"}=t,y=ie.useMemo(()=>{let M=cr(d,c);return M==null?null:{location:{pathname:M,search:f,hash:p,state:g,key:m},navigationType:n}},[c,d,f,p,g,m,n]);return Oi(y!=null,`<Router basename="${c}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ie.createElement(Bi.Provider,{value:u},ie.createElement(Ha.Provider,{children:e,value:y}))}function bS({children:r,location:e}){return fS(Oh(r),e)}function Oh(r,e=[]){let t=[];return ie.Children.forEach(r,(n,s)=>{if(!ie.isValidElement(n))return;let a=[...e,s];if(n.type===ie.Fragment){t.push.apply(t,Oh(n.props.children,a));return}Jt(n.type===kh,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let c={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=Oh(n.props.children,a)),t.push(c)}),t}var Nc="get",Fc="application/x-www-form-urlencoded";function Qc(r){return r!=null&&typeof r.tagName=="string"}function CS(r){return Qc(r)&&r.tagName.toLowerCase()==="button"}function RS(r){return Qc(r)&&r.tagName.toLowerCase()==="form"}function PS(r){return Qc(r)&&r.tagName.toLowerCase()==="input"}function LS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function DS(r,e){return r.button===0&&(!e||e==="_self")&&!LS(r)}var ic=null;function IS(){if(ic===null)try{new FormData(document.createElement("form"),0),ic=!1}catch{ic=!0}return ic}var NS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yd(r){return r!=null&&!NS.has(r)?(Oi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fc}"`),null):r}function FS(r,e){let t,n,s,a,c;if(RS(r)){let u=r.getAttribute("action");n=u?cr(u,e):null,t=r.getAttribute("method")||Nc,s=Yd(r.getAttribute("enctype"))||Fc,a=new FormData(r)}else if(CS(r)||PS(r)&&(r.type==="submit"||r.type==="image")){let u=r.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||u.getAttribute("action");if(n=d?cr(d,e):null,t=r.getAttribute("formmethod")||u.getAttribute("method")||Nc,s=Yd(r.getAttribute("formenctype"))||Yd(u.getAttribute("enctype"))||Fc,a=new FormData(u,r),!IS()){let{name:f,type:p,value:g}=r;if(p==="image"){let m=f?`${f}.`:"";a.append(`${m}x`,"0"),a.append(`${m}y`,"0")}else f&&a.append(f,g)}}else{if(Qc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Nc,n=null,s=Fc,c=r}return a&&s==="text/plain"&&(c=a,a=void 0),{action:n,method:t.toLowerCase(),encType:s,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function US(r,e,t){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname=`_root.${t}`:e&&cr(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${t}`,n}async function kS(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function BS(r,e,t){let n=await Promise.all(r.map(async s=>{let a=e.routes[s.route.id];if(a){let c=await kS(a,t);return c.links?c.links():[]}return[]}));return GS(n.flat(1).filter(OS).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function qg(r,e,t,n,s,a){let c=(d,f)=>t[f]?d.route.id!==t[f].route.id:!0,u=(d,f)=>t[f].pathname!==d.pathname||t[f].route.path?.endsWith("*")&&t[f].params["*"]!==d.params["*"];return a==="assets"?e.filter((d,f)=>c(d,f)||u(d,f)):a==="data"?e.filter((d,f)=>{let p=n.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(c(d,f)||u(d,f))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function zS(r,e,{includeHydrateFallback:t}={}){return VS(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let a=[s.module];return s.clientActionModule&&(a=a.concat(s.clientActionModule)),s.clientLoaderModule&&(a=a.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(a=a.concat(s.hydrateFallbackModule)),s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function VS(r){return[...new Set(r)]}function HS(r){let e={},t=Object.keys(r).sort();for(let n of t)e[n]=r[n];return e}function GS(r,e){let t=new Set;return new Set(e),r.reduce((n,s)=>{let a=JSON.stringify(HS(s));return t.has(a)||(t.add(a),n.push({key:a,link:s})),n},[])}function kv(){let r=ie.useContext(Fo);return Uf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function WS(){let r=ie.useContext(Jc);return Uf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var kf=ie.createContext(void 0);kf.displayName="FrameworkContext";function Ov(){let r=ie.useContext(kf);return Uf(r,"You must render this element inside a <HydratedRouter> element"),r}function jS(r,e){let t=ie.useContext(kf),[n,s]=ie.useState(!1),[a,c]=ie.useState(!1),{onFocus:u,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:g}=e,m=ie.useRef(null);ie.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let E=_=>{_.forEach(C=>{c(C.isIntersecting)})},x=new IntersectionObserver(E,{threshold:.5});return m.current&&x.observe(m.current),()=>{x.disconnect()}}},[r]),ie.useEffect(()=>{if(n){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[n]);let y=()=>{s(!0)},M=()=>{s(!1),c(!1)};return t?r!=="intent"?[a,m,{}]:[a,m,{onFocus:ya(u,y),onBlur:ya(d,M),onMouseEnter:ya(f,y),onMouseLeave:ya(p,M),onTouchStart:ya(g,y)}]:[!1,m,{}]}function ya(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function XS({page:r,...e}){let{router:t}=kv(),n=ie.useMemo(()=>Av(t.routes,r,t.basename),[t.routes,r,t.basename]);return n?ie.createElement(YS,{page:r,matches:n,...e}):null}function $S(r){let{manifest:e,routeModules:t}=Ov(),[n,s]=ie.useState([]);return ie.useEffect(()=>{let a=!1;return BS(r,e,t).then(c=>{a||s(c)}),()=>{a=!0}},[r,e,t]),n}function YS({page:r,matches:e,...t}){let n=hr(),{manifest:s,routeModules:a}=Ov(),{basename:c}=kv(),{loaderData:u,matches:d}=WS(),f=ie.useMemo(()=>qg(r,e,d,s,n,"data"),[r,e,d,s,n]),p=ie.useMemo(()=>qg(r,e,d,s,n,"assets"),[r,e,d,s,n]),g=ie.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let M=new Set,E=!1;if(e.forEach(_=>{let C=s.routes[_.route.id];!C||!C.hasLoader||(!f.some(w=>w.route.id===_.route.id)&&_.route.id in u&&a[_.route.id]?.shouldRevalidate||C.hasClientLoader?E=!0:M.add(_.route.id))}),M.size===0)return[];let x=US(r,c,"data");return E&&M.size>0&&x.searchParams.set("_routes",e.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[x.pathname+x.search]},[c,u,n,s,f,e,r,a]),m=ie.useMemo(()=>zS(p,s),[p,s]),y=$S(p);return ie.createElement(ie.Fragment,null,g.map(M=>ie.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),m.map(M=>ie.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),y.map(({key:M,link:E})=>ie.createElement("link",{key:M,...E})))}function qS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bv&&(window.__reactRouterVersion="7.7.0")}catch{}function KS({basename:r,children:e,window:t}){let n=ie.useRef();n.current==null&&(n.current=Ox({window:t,v5Compat:!0}));let s=n.current,[a,c]=ie.useState({action:s.action,location:s.location}),u=ie.useCallback(d=>{ie.startTransition(()=>c(d))},[c]);return ie.useLayoutEffect(()=>s.listen(u),[s,u]),ie.createElement(AS,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:s})}var zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vv=ie.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:s,reloadDocument:a,replace:c,state:u,target:d,to:f,preventScrollReset:p,viewTransition:g,...m},y){let{basename:M}=ie.useContext(Bi),E=typeof f=="string"&&zv.test(f),x,_=!1;if(typeof f=="string"&&E&&(x=f,Bv))try{let R=new URL(window.location.href),A=f.startsWith("//")?new URL(R.protocol+f):new URL(f),F=cr(A.pathname,M);A.origin===R.origin&&F!=null?f=F+A.search+A.hash:_=!0}catch{Oi(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=dS(f,{relative:s}),[w,T,U]=jS(n,m),I=eM(f,{replace:c,state:u,target:d,preventScrollReset:p,relative:s,viewTransition:g});function N(R){e&&e(R),R.defaultPrevented||I(R)}let B=ie.createElement("a",{...m,...U,href:x||C,onClick:_||a?e:N,ref:qS(y,T),target:d,"data-discover":!E&&t==="render"?"true":void 0});return w&&!E?ie.createElement(ie.Fragment,null,B,ie.createElement(XS,{page:C})):B});Vv.displayName="Link";var ZS=ie.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:s=!1,style:a,to:c,viewTransition:u,children:d,...f},p){let g=Wa(c,{relative:f.relative}),m=hr(),y=ie.useContext(Jc),{navigator:M,basename:E}=ie.useContext(Bi),x=y!=null&&sM(g)&&u===!0,_=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,C=m.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(C=C.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&E&&(w=cr(w,E)||w);const T=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let U=C===_||!s&&C.startsWith(_)&&C.charAt(T)==="/",I=w!=null&&(w===_||!s&&w.startsWith(_)&&w.charAt(_.length)==="/"),N={isActive:U,isPending:I,isTransitioning:x},B=U?e:void 0,R;typeof n=="function"?R=n(N):R=[n,U?"active":null,I?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A=typeof a=="function"?a(N):a;return ie.createElement(Vv,{...f,"aria-current":B,className:R,ref:p,style:A,to:c,viewTransition:u},typeof d=="function"?d(N):d)});ZS.displayName="NavLink";var JS=ie.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:s,state:a,method:c=Nc,action:u,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:g,...m},y)=>{let M=iM(),E=rM(u,{relative:f}),x=c.toLowerCase()==="get"?"get":"post",_=typeof u=="string"&&zv.test(u),C=w=>{if(d&&d(w),w.defaultPrevented)return;w.preventDefault();let T=w.nativeEvent.submitter,U=T?.getAttribute("formmethod")||c;M(T||w.currentTarget,{fetcherKey:e,method:U,navigate:t,replace:s,state:a,relative:f,preventScrollReset:p,viewTransition:g})};return ie.createElement("form",{ref:y,method:x,action:E,onSubmit:n?d:C,...m,"data-discover":!_&&r==="render"?"true":void 0})});JS.displayName="Form";function QS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hv(r){let e=ie.useContext(Fo);return Jt(e,QS(r)),e}function eM(r,{target:e,replace:t,state:n,preventScrollReset:s,relative:a,viewTransition:c}={}){let u=If(),d=hr(),f=Wa(r,{relative:a});return ie.useCallback(p=>{if(DS(p,e)){p.preventDefault();let g=t!==void 0?t:La(d)===La(f);u(r,{replace:g,state:n,preventScrollReset:s,relative:a,viewTransition:c})}},[d,u,f,t,n,e,r,s,a,c])}var tM=0,nM=()=>`__${String(++tM)}__`;function iM(){let{router:r}=Hv("useSubmit"),{basename:e}=ie.useContext(Bi),t=MS();return ie.useCallback(async(n,s={})=>{let{action:a,method:c,encType:u,formData:d,body:f}=FS(n,e);if(s.navigate===!1){let p=s.fetcherKey||nM();await r.fetch(p,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||c,formEncType:s.encType||u,flushSync:s.flushSync})}else await r.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:d,body:f,formMethod:s.method||c,formEncType:s.encType||u,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function rM(r,{relative:e}={}){let{basename:t}=ie.useContext(Bi),n=ie.useContext(dr);Jt(n,"useFormAction must be used inside a RouteContext");let[s]=n.matches.slice(-1),a={...Wa(r||".",{relative:e})},c=hr();if(r==null){a.search=c.search;let u=new URLSearchParams(a.search),d=u.getAll("index");if(d.some(p=>p==="")){u.delete("index"),d.filter(g=>g).forEach(g=>u.append("index",g));let p=u.toString();a.search=p?`?${p}`:""}}return(!r||r===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:ar([t,a.pathname])),La(a)}function sM(r,e={}){let t=ie.useContext(Dv);Jt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Hv("useViewTransitionState"),s=Wa(r,{relative:e.relative});if(!t.isTransitioning)return!1;let a=cr(t.currentLocation.pathname,n)||t.currentLocation.pathname,c=cr(t.nextLocation.pathname,n)||t.nextLocation.pathname;return Hc(s.pathname,c)!=null||Hc(s.pathname,a)!=null}const Gv=ie.createContext(void 0),Wv=()=>{const r=ie.useContext(Gv);if(!r)throw new Error("useTerminal must be used within a TerminalProvider");return r},oM=({children:r})=>{const[e,t]=ie.useState(""),[n]=ie.useState(null),s=a=>{n&&n(a)};return L.jsx(Gv.Provider,{value:{currentCommand:e,setCurrentCommand:t,executeCommand:s},children:r})},jv=ie.createContext(void 0),aM=()=>{const r=ie.useContext(jv);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r},lM=({children:r})=>{const[e,t]=ie.useState("dark");ie.useEffect(()=>{const s=localStorage.getItem("portfolio-theme");s&&["dark","light","matrix"].includes(s)&&t(s)},[]),ie.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),document.documentElement.className=e,localStorage.setItem("portfolio-theme",e);const s=document.documentElement.style;switch(e){case"light":s.setProperty("--bg-primary","#f8fafc"),s.setProperty("--bg-secondary","#ffffff"),s.setProperty("--bg-tertiary","#e2e8f0"),s.setProperty("--text-primary","#111827"),s.setProperty("--text-secondary","#374151"),s.setProperty("--text-accent","#1d4ed8"),s.setProperty("--border-color","#9ca3af"),s.setProperty("--terminal-bg","#1f2937"),s.setProperty("--terminal-border","#374151"),s.setProperty("--terminal-text","#f9fafb"),s.setProperty("--terminal-prompt","#10b981"),s.setProperty("--terminal-suggestion","#6b7280"),s.setProperty("--sidebar-bg","#f3f4f6"),s.setProperty("--sidebar-border","#d1d5db");break;case"matrix":s.setProperty("--bg-primary","#000000"),s.setProperty("--bg-secondary","#001100"),s.setProperty("--bg-tertiary","#002200"),s.setProperty("--text-primary","#00ff00"),s.setProperty("--text-secondary","#00cc00"),s.setProperty("--text-accent","#00ff41"),s.setProperty("--border-color","#003300"),s.setProperty("--terminal-bg","#000000"),s.setProperty("--terminal-border","#00ff00"),s.setProperty("--terminal-text","#00ff00"),s.setProperty("--terminal-prompt","#00ff41"),s.setProperty("--terminal-suggestion","#008800"),s.setProperty("--sidebar-bg","#000000"),s.setProperty("--sidebar-border","#003300");break;default:s.setProperty("--bg-primary","#0f172a"),s.setProperty("--bg-secondary","#1e293b"),s.setProperty("--bg-tertiary","#334155"),s.setProperty("--text-primary","#f1f5f9"),s.setProperty("--text-secondary","#cbd5e1"),s.setProperty("--text-accent","#60a5fa"),s.setProperty("--border-color","#475569"),s.setProperty("--terminal-bg","#111827"),s.setProperty("--terminal-border","#374151"),s.setProperty("--terminal-text","#f1f5f9"),s.setProperty("--terminal-prompt","#10b981"),s.setProperty("--terminal-suggestion","#6b7280"),s.setProperty("--sidebar-bg","#1e293b"),s.setProperty("--sidebar-border","#475569");break}},[e]);const n=()=>{const s=["dark","light","matrix"],c=(s.indexOf(e)+1)%s.length;t(s[c])};return L.jsx(jv.Provider,{value:{theme:e,setTheme:t,toggleTheme:n},children:r})},Xv=ie.createContext(void 0),cM=()=>{const r=ie.useContext(Xv);if(!r)throw new Error("useAsciiArt must be used within an AsciiArtProvider");return r},uM=({children:r})=>{const[e,t]=ie.useState("donut");ie.useEffect(()=>{const s=localStorage.getItem("portfolio-ascii-art");s&&["cat","roach","donut"].includes(s)?t(s):t("donut")},[]);const n=s=>{t(s),localStorage.setItem("portfolio-ascii-art",s)};return L.jsx(Xv.Provider,{value:{currentArt:e,setCurrentArt:n},children:r})};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$v=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=ie.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:a,iconNode:c,...u},d)=>ie.createElement("svg",{ref:d,...hM,width:e,height:e,stroke:r,strokeWidth:n?Number(t)*24/Number(e):t,className:$v("lucide",s),...u},[...c.map(([f,p])=>ie.createElement(f,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(r,e)=>{const t=ie.forwardRef(({className:n,...s},a)=>ie.createElement(fM,{ref:a,iconNode:e,className:$v(`lucide-${dM(r)}`,n),...s}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Xt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Xt("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=Xt("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=Xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=Xt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Xt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=Xt("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Xt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Xt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Xt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Xt("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Xt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=Xt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Xt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=Xt("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Xt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=Xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Xt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Xt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Xt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Xt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Xt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Xt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Xt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),IM=()=>{const{setCurrentCommand:r}=Wv(),e=[{icon:L.jsx(EM,{className:"w-5 h-5"}),label:"GitHub",url:"https://github.com/lxluxo23",color:"hover:text-gray-300"},{icon:L.jsx(bM,{className:"w-5 h-5"}),label:"LinkedIn",url:"https://www.linkedin.com/in/lcespedessep/",color:"hover:text-blue-400"},{icon:L.jsx(qv,{className:"w-5 h-5"}),label:"Email",url:"mailto:luis.cespedes.sep01@gmail.com",color:"hover:text-green-400"}],t=[{icon:L.jsx(Jv,{className:"w-4 h-4"}),label:"Ver CV",command:"cv",color:"text-blue-400"},{icon:L.jsx(Yv,{className:"w-4 h-4"}),label:"Proyectos",command:"projects",color:"text-purple-400"},{icon:L.jsx(_M,{className:"w-4 h-4"}),label:"Contacto",command:"contact",color:"text-orange-400"}],n={status:"Disponible para trabajo",activity:"Desarrollando en Spring Boot",location:"Talca, Chile"};return L.jsxs("div",{className:"fixed left-0 top-0 h-full w-80 backdrop-blur-sm border-r p-6 flex flex-col z-10 transition-colors duration-300",style:{backgroundColor:"var(--sidebar-bg)",borderColor:"var(--sidebar-border)"},children:[L.jsxs("div",{className:"text-center mb-8",children:[L.jsx("div",{className:"w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",children:L.jsx("span",{className:"text-2xl font-bold text-white",children:"LC"})}),L.jsx("h2",{className:"text-xl font-bold mb-1 transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Luis Céspedes"}),L.jsx("p",{className:"text-sm transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"Full Stack Developer"})]}),L.jsxs("div",{className:"mb-8",children:[L.jsxs("h3",{className:"font-semibold mb-3 flex items-center gap-2 transition-colors duration-300",style:{color:"var(--text-primary)"},children:[L.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Estado Actual"]}),L.jsxs("div",{className:"space-y-2 text-sm",children:[L.jsxs("div",{className:"flex items-center gap-2 text-green-400",children:[L.jsx("div",{className:"w-1 h-1 bg-green-400 rounded-full"}),n.status]}),L.jsxs("div",{className:"flex items-center gap-2 transition-colors duration-300",style:{color:"var(--text-secondary)"},children:[L.jsx("div",{className:"w-1 h-1 rounded-full",style:{backgroundColor:"var(--text-secondary)"}}),n.activity]}),L.jsxs("div",{className:"flex items-center gap-2 transition-colors duration-300",style:{color:"var(--text-secondary)"},children:[L.jsx("div",{className:"w-1 h-1 rounded-full",style:{backgroundColor:"var(--text-secondary)"}}),"📍 ",n.location]})]})]}),L.jsxs("div",{className:"mb-8",children:[L.jsx("h3",{className:"font-semibold mb-3 transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Acciones Rápidas"}),L.jsx("div",{className:"space-y-2",children:t.map((s,a)=>L.jsxs("button",{className:"w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left group hover:opacity-80",style:{backgroundColor:"var(--bg-tertiary)"},onClick:()=>{r(s.command);const c=document.querySelector('input[type="text"]');c&&c.focus()},children:[L.jsx("span",{className:s.color,children:s.icon}),L.jsx("span",{className:"transition-colors duration-300",style:{color:"var(--text-primary)"},children:s.label}),L.jsx("span",{className:"text-xs ml-auto transition-colors duration-300",style:{color:"var(--text-secondary)"},children:s.command})]},a))})]}),L.jsxs("div",{className:"mt-auto",children:[L.jsx("h3",{className:"font-semibold mb-3 transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Conecta conmigo"}),L.jsx("div",{className:"flex gap-4",children:e.map((s,a)=>L.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:`p-3 rounded-lg transition-all duration-300 ${s.color} group hover:opacity-80`,style:{backgroundColor:"var(--bg-tertiary)"},title:s.label,children:[s.icon,L.jsx(yM,{className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity absolute translate-x-1 -translate-y-1"})]},a))}),L.jsx("div",{className:"mt-6 pt-4 border-t transition-colors duration-300",style:{borderColor:"var(--border-color)"},children:L.jsx("p",{className:"text-xs text-center transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"© 2024 Luis Céspedes"})})]})]})},NM=()=>{const r=If(),e=hr(),{theme:t,setTheme:n}=aM(),s=`
██╗     ██╗   ██╗██╗███████╗    ██████╗███████╗███████╗██████╗ ███████╗██████╗ ███████╗███████╗
██║     ██║   ██║██║██╔════╝   ██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝
██║     ██║   ██║██║███████╗   ██║     █████╗  ███████╗██████╔╝█████╗  ██║  ██║█████╗  ███████╗
██║     ██║   ██║██║╚════██║   ██║     ██╔══╝  ╚════██║██╔═══╝ ██╔══╝  ██║  ██║██╔══╝  ╚════██║
███████╗╚██████╔╝██║███████║   ╚██████╗███████╗███████║██║     ███████╗██████╔╝███████╗███████║
╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚═════╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═════╝ ╚══════╝╚══════╝
  `,a=[{icon:L.jsx(TM,{className:"w-4 h-4"}),label:"Terminal",path:"/",description:"Terminal interactivo"},{icon:L.jsx(Jv,{className:"w-4 h-4"}),label:"CV",path:"/cv",description:"Curriculum Vitae"},{icon:L.jsx(Yv,{className:"w-4 h-4"}),label:"Projects",path:"/projects",description:"Mis proyectos"}],c=[{key:"dark",icon:L.jsx(Zv,{className:"w-4 h-4"}),label:"Dark"},{key:"light",icon:L.jsx(PM,{className:"w-4 h-4"}),label:"Light"},{key:"matrix",icon:L.jsx(CM,{className:"w-4 h-4"}),label:"Matrix"}],u=d=>e.pathname===d;return L.jsx("header",{className:"fixed top-0 left-80 right-0 z-20 backdrop-blur-sm border-b transition-colors duration-300",style:{backgroundColor:"var(--bg-secondary)",borderColor:"var(--border-color)"},children:L.jsxs("div",{className:"px-8 py-4",children:[L.jsx("div",{className:"hidden xl:block mb-4",children:L.jsx("pre",{className:"text-xs leading-none font-mono opacity-60 overflow-hidden transition-colors duration-300",style:{color:"var(--text-accent)"},children:s})}),L.jsxs("nav",{className:"flex items-center justify-between",children:[L.jsxs("div",{className:"xl:hidden",children:[L.jsx("h1",{className:"text-xl font-bold transition-colors duration-300",style:{color:"var(--text-primary)"},children:"Luis Céspedes"}),L.jsx("p",{className:"text-sm transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"Full Stack Developer"})]}),L.jsx("div",{className:"flex items-center gap-2",children:a.map(d=>L.jsxs("button",{onClick:()=>r(d.path),className:`
                  flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                  ${u(d.path)?"bg-blue-600 text-white shadow-lg shadow-blue-600/25":"text-gray-400 hover:text-white hover:bg-gray-800/50"}
                `,title:d.description,children:[d.icon,L.jsx("span",{className:"hidden sm:inline",children:d.label})]},d.path))}),L.jsx("div",{className:"flex items-center gap-1 bg-gray-800/50 rounded-lg p-1",children:c.map(d=>L.jsx("button",{onClick:()=>n(d.key),className:`
                  p-2 rounded-md transition-all duration-200
                  ${t===d.key?"bg-blue-600 text-white":"text-gray-400 hover:text-white hover:bg-gray-700"}
                `,title:`Tema ${d.label}`,children:d.icon},d.key))})]}),L.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-gray-500",children:[L.jsxs("div",{className:"flex items-center gap-4",children:[L.jsx("span",{children:"🟢 Sistema operativo"}),L.jsxs("span",{children:["⚡ ",new Date().toLocaleDateString()]}),L.jsx("span",{children:"🎯 Backend Developer"})]}),L.jsx("div",{className:"hidden md:flex items-center gap-2",children:L.jsx("span",{children:"Powered by React + TypeScript"})})]})]})})},FM=({variant:r="particles",particleCount:e=100})=>{const t=ie.useRef(null),n=ie.useRef({x:0,y:0}),s=ie.useRef([]),a=ie.useRef(),c=ie.useMemo(()=>["#60A5FA","#34D399","#A78BFA","#F87171","#FBBF24","#10B981"],[]),u=m=>{const y=[];for(let M=0;M<e;M++)y.push({x:Math.random()*m.width,y:Math.random()*m.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+.5,opacity:Math.random()*.5+.1,color:c[Math.floor(Math.random()*c.length)]});s.current=y},d=(m,y)=>{m.clearRect(0,0,y.width,y.height);const M=s.current,E=n.current;M.forEach((x,_)=>{x.x+=x.vx,x.y+=x.vy,(x.x<0||x.x>y.width)&&(x.vx*=-1),(x.y<0||x.y>y.height)&&(x.vy*=-1);const C=E.x-x.x,w=E.y-x.y,T=Math.sqrt(C*C+w*w);if(T<100){const U=(100-T)/100;x.vx+=C*U*1e-4,x.vy+=w*U*1e-4}m.save(),m.globalAlpha=x.opacity,m.fillStyle=x.color,m.beginPath(),m.arc(x.x,x.y,x.size,0,Math.PI*2),m.fill(),m.restore();for(let U=_+1;U<M.length;U++){const I=M[U],N=x.x-I.x,B=x.y-I.y,R=Math.sqrt(N*N+B*B);R<80&&(m.save(),m.globalAlpha=(80-R)/80*.1,m.strokeStyle=x.color,m.lineWidth=.5,m.beginPath(),m.moveTo(x.x,x.y),m.lineTo(I.x,I.y),m.stroke(),m.restore())}})},f=(m,y)=>{m.fillStyle="rgba(0, 0, 0, 0.05)",m.fillRect(0,0,y.width,y.height),m.fillStyle="#00ff00",m.font="15px monospace";const M="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";for(let E=0;E<y.width;E+=20){const x=M[Math.floor(Math.random()*M.length)],_=Math.random()*y.height;m.globalAlpha=Math.random()*.8+.2,m.fillText(x,E,_)}},p=(m,y)=>{m.clearRect(0,0,y.width,y.height);const M=50,E=n.current;m.strokeStyle="#1f2937",m.lineWidth=1;for(let x=0;x<=y.width;x+=M)for(let _=0;_<=y.height;_+=M){const C=E.x-x,w=E.y-_,T=Math.sqrt(C*C+w*w);if(T<150){const U=1-T/150;m.save(),m.globalAlpha=U*.5,m.strokeStyle="#60A5FA",m.beginPath(),m.moveTo(x,_),m.lineTo(x,_+M),m.stroke(),m.beginPath(),m.moveTo(x,_),m.lineTo(x+M,_),m.stroke(),m.restore()}else m.save(),m.globalAlpha=.1,m.strokeStyle="#374151",m.beginPath(),m.moveTo(x,_),m.lineTo(x,_+M),m.stroke(),m.beginPath(),m.moveTo(x,_),m.lineTo(x+M,_),m.stroke(),m.restore()}},g=()=>{const m=t.current;if(!m)return;const y=m.getContext("2d");if(y){switch(r){case"particles":d(y,m);break;case"matrix":f(y,m);break;case"grid":p(y,m);break}a.current=requestAnimationFrame(g)}};return ie.useEffect(()=>{const m=t.current;if(!m||!m.getContext("2d"))return;const M=()=>{m.width=window.innerWidth,m.height=window.innerHeight,r==="particles"&&u(m)},E=x=>{n.current={x:x.clientX,y:x.clientY}};return M(),window.addEventListener("resize",M),window.addEventListener("mousemove",E),g(),()=>{window.removeEventListener("resize",M),window.removeEventListener("mousemove",E),a.current&&cancelAnimationFrame(a.current)}},[r,e]),L.jsx("canvas",{ref:t,className:"fixed inset-0 pointer-events-none z-0",style:{background:r==="matrix"?"#000":"transparent"}})},UM=({children:r})=>{const e=hr(),t=()=>{switch(e.pathname){case"/":return"particles";case"/cv":return"grid";default:return"particles"}};return L.jsxs("div",{className:"min-h-screen transition-colors duration-300",style:{backgroundColor:"var(--bg-primary)"},children:[L.jsx(FM,{variant:t()}),L.jsx(IM,{}),L.jsx(NM,{}),L.jsx("main",{className:"ml-80 pt-40 xl:pt-48 relative z-10",children:L.jsx("div",{className:"min-h-screen",children:r})}),L.jsx("div",{className:"lg:hidden fixed inset-0 bg-gray-950 z-50 flex items-center justify-center",children:L.jsxs("div",{className:"text-center text-white p-8",children:[L.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Portfolio de Luis Céspedes"}),L.jsx("p",{className:"text-gray-400 mb-4",children:"Este portafolio está optimizado para pantallas grandes."}),L.jsx("p",{className:"text-sm text-gray-500",children:"Por favor, visita desde un dispositivo con pantalla más grande para la mejor experiencia."})]})})]})},kM={user:"Luis Esteban Céspedes Sepulveda",host:"Portfolio",os:"PortfolioOS",kernel:"Full Stack Developer",uptime:"3 years of experience",role:"Backend-oriented Full Stack Developer",focus:"Backend Development & System Architecture",shell:"/usr/bin/fullstack",terminal:"VS Code",skills:{languages:[{name:"Java",details:"Java 1.8, Java 11"},{name:"Python 3+"},{name:"PHP"},{name:"JavaScript/TypeScript"},{name:".NET"}],frameworks:[{name:"Spring Boot"},{name:"Laravel 7"},{name:"NodeJS 16+"},{name:"Angular 13+"},{name:"Ionic Angular"},{name:"Flask",details:"Python Web Framework"}],databases:{relational:["MySQL","PostgreSQL","Microsoft SQL","Oracle","MariaDB"],nosql:["MongoDB","Redis","Cassandra"]},devops:[{name:"Docker",level:"Advanced"},{name:"Jenkins",details:"Pipelines, CI/CD"},{name:"Linux",details:"Server Administration"},{name:"GitHub Actions"}],cloud:[{name:"Railway"},{name:"VPN",details:"WireGuard"}],mobile:[{name:"Android Studio"},{name:"Flutter",details:"Play Store Publishing"},{name:"Ionic Angular"}],testing:[{name:"Postman",details:"API Testing"},{name:"SonarQube",details:"Code Analysis"},{name:"Unit Testing"}],other:[{name:"WebSockets"},{name:"OAuth 2.0/JWT"},{name:"SSL/TLS"},{name:"Scrum"},{name:"Networking"}]}},OM=r=>({"/home/user":{"about.txt":`Hi! I'm ${r.user}, a ${r.role}. Welcome to my interactive portfolio terminal!`,"skills.txt":BM(r),"contact.txt":`Email: luis.cespedes.sep01@gmail.com 
GitHub: github.com/lxluxo23`,"experience.txt":`Role: ${r.role}
Focus: ${r.focus}
Uptime: ${r.uptime}`}});function BM(r){return`Technical Skills Overview:
  
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
`)}`}class zM{currentPath;fileSystem;constructor(e){this.currentPath="/home/user",this.fileSystem=OM(e)}processCommand(e){const[t,...n]=e.trim().toLowerCase().split(" ");switch(t){case"clear":return null;case"help":return{command:e,output:this.getHelpText()};case"pwd":return{command:e,output:this.currentPath};case"ls":return this.handleLs();case"cat":return this.handleCat(n);case"tree":return this.handleTree();case"cv":case"resume":return{command:e,output:"Opening CV page...",action:"navigate",path:"/cv"};case"projects":return{command:e,output:`Projects section coming soon! 🚀
Stay tuned for my latest work and developments.`};case"contact":return{command:e,output:L.jsxs("div",{children:[L.jsxs("div",{className:"mb-2",children:["📧 ",L.jsx("strong",{children:"Email:"})," luis.cespedes.sep01@gmail.com"]}),L.jsxs("div",{className:"mb-2",children:["💼 ",L.jsx("strong",{children:"LinkedIn:"})," linkedin.com/in/lcespedessep"]}),L.jsxs("div",{className:"mb-2",children:["🐙 ",L.jsx("strong",{children:"GitHub:"})," github.com/lxluxo23"]}),L.jsxs("div",{className:"mb-2",children:["📍 ",L.jsx("strong",{children:"Location:"})," Talca, Chile"]}),L.jsx("div",{className:"mt-3 text-green-400",children:"Ready to collaborate! Feel free to reach out."})]})};default:return{command:e,output:`Command not found: ${t}. Type 'help' for available commands.`}}}getHelpText(){return L.jsxs("div",{children:[L.jsxs("div",{children:[L.jsx("strong",{children:"neofetch"})," - Display system information"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"clear"})," - Clear the terminal"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"ls"})," - List directory contents"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"pwd"})," - Print working directory"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"cat"})," - Read file contents"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"cv / resume"})," - View my curriculum vitae"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"projects"})," - See my projects and work"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"contact"})," - Get my contact information"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"tree"})," - Display directory structure"]}),L.jsxs("div",{children:[L.jsx("strong",{children:"help"})," - Show this help message"]})]})}handleLs(){const e=this.fileSystem[this.currentPath];return{command:"ls",output:e?Object.keys(e).join("  "):"Directory not found"}}handleCat(e){if(e.length===0)return{command:"cat",output:"Usage: cat <filename>"};const t=this.fileSystem[this.currentPath],n=e[0];return t&&t[n]?{command:"cat "+n,output:t[n]}:{command:"cat "+n,output:`File ${n} not found`}}handleTree(){const e=`
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
    `.trim();return{command:"tree",output:L.jsx("div",{className:"font-mono text-sm",children:L.jsx("pre",{className:"text-green-400 whitespace-pre-wrap",children:e})})}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="171",xo={ROTATE:0,DOLLY:1,PAN:2},mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VM=0,Kg=1,HM=2,Qv=1,Bf=2,ir=3,jr=0,Jn=1,rr=2,Gr=0,So=1,Zg=2,Jg=3,Qg=4,GM=5,ys=100,WM=101,jM=102,XM=103,$M=104,YM=200,qM=201,KM=202,ZM=203,zh=204,Vh=205,JM=206,QM=207,e1=208,t1=209,n1=210,i1=211,r1=212,s1=213,o1=214,Hh=0,Gh=1,Wh=2,To=3,jh=4,Xh=5,$h=6,Yh=7,eu=0,a1=1,l1=2,Wr=0,c1=1,u1=2,d1=3,zf=4,h1=5,f1=6,p1=7,e0="attached",m1="detached",e_=300,Ao=301,bo=302,Gc=303,qh=304,tu=306,Da=1e3,sr=1001,Kh=1002,oi=1003,g1=1004,rc=1005,Fi=1006,qd=1007,Ss=1008,ur=1009,t_=1010,n_=1011,Ia=1012,Vf=1013,Ms=1014,Ui=1015,ja=1016,Hf=1017,Gf=1018,Co=1020,i_=35902,r_=1021,s_=1022,mi=1023,o_=1024,a_=1025,Mo=1026,Ro=1027,l_=1028,Wf=1029,c_=1030,jf=1031,Xf=1033,Uc=33776,kc=33777,Oc=33778,Bc=33779,Zh=35840,Jh=35841,Qh=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37808,of=37809,af=37810,lf=37811,cf=37812,uf=37813,df=37814,hf=37815,ff=37816,pf=37817,mf=37818,gf=37819,vf=37820,_f=37821,zc=36492,yf=36494,xf=36495,u_=36283,Sf=36284,Mf=36285,Ef=36286,Wc=2300,wf=2301,Kd=2302,t0=2400,n0=2401,i0=2402,v1=2500,_1=3200,y1=3201,nu=0,x1=1,Hr="",Vt="srgb",Po="srgb-linear",jc="linear",kt="srgb",Zs=7680,r0=519,S1=512,M1=513,E1=514,d_=515,w1=516,T1=517,A1=518,b1=519,s0=35044,o0="300 es",or=2e3,Xc=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a0=1234567;const ba=Math.PI/180,Lo=180/Math.PI;function Yr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function $f(r,e){return(r%e+e)%e}function C1(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function R1(r,e,t){return r!==e?(t-r)/(e-r):0}function Ca(r,e,t){return(1-t)*r+t*e}function P1(r,e,t,n){return Ca(r,e,1-Math.exp(-t*n))}function L1(r,e=1){return e-Math.abs($f(r,e*2)-e)}function D1(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function I1(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function N1(r,e){return r+Math.floor(Math.random()*(e-r+1))}function F1(r,e){return r+Math.random()*(e-r)}function U1(r){return r*(.5-Math.random())}function k1(r){r!==void 0&&(a0=r);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O1(r){return r*ba}function B1(r){return r*Lo}function z1(r){return(r&r-1)===0&&r!==0}function V1(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function H1(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function G1(r,e,t,n,s){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),f=a((e+n)/2),p=c((e+n)/2),g=a((e-n)/2),m=c((e-n)/2),y=a((n-e)/2),M=c((n-e)/2);switch(s){case"XYX":r.set(u*p,d*g,d*m,u*f);break;case"YZY":r.set(d*m,u*p,d*g,u*f);break;case"ZXZ":r.set(d*g,d*m,u*p,u*f);break;case"XZX":r.set(u*p,d*M,d*y,u*f);break;case"YXY":r.set(d*y,u*p,d*M,u*f);break;case"ZYZ":r.set(d*M,d*y,u*p,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:ba,RAD2DEG:Lo,generateUUID:Yr,clamp:dt,euclideanModulo:$f,mapLinear:C1,inverseLerp:R1,lerp:Ca,damp:P1,pingpong:L1,smoothstep:D1,smootherstep:I1,randInt:N1,randFloat:F1,randFloatSpread:U1,seededRandom:k1,degToRad:O1,radToDeg:B1,isPowerOfTwo:z1,ceilPowerOfTwo:V1,floorPowerOfTwo:H1,setQuaternionFromProperEuler:G1,normalize:Vn,denormalize:fo};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,s,a,c,u,d,f){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,u,d,f)}set(e,t,n,s,a,c,u,d,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],u=n[3],d=n[6],f=n[1],p=n[4],g=n[7],m=n[2],y=n[5],M=n[8],E=s[0],x=s[3],_=s[6],C=s[1],w=s[4],T=s[7],U=s[2],I=s[5],N=s[8];return a[0]=c*E+u*C+d*U,a[3]=c*x+u*w+d*I,a[6]=c*_+u*T+d*N,a[1]=f*E+p*C+g*U,a[4]=f*x+p*w+g*I,a[7]=f*_+p*T+g*N,a[2]=m*E+y*C+M*U,a[5]=m*x+y*w+M*I,a[8]=m*_+y*T+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-n*a*p+n*u*d+s*a*f-s*c*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=p*c-u*f,m=u*d-p*a,y=f*a-c*d,M=t*g+n*m+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*f-p*n)*E,e[2]=(u*n-s*c)*E,e[3]=m*E,e[4]=(p*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=y*E,e[7]=(n*d-f*t)*E,e[8]=(c*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(n*d,n*f,-n*(d*c+f*u)+c+e,-s*f,s*d,-s*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Zd.makeScale(e,t)),this}rotate(e){return this.premultiply(Zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new ut;function h_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Na(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function W1(){const r=Na("canvas");return r.style.display="block",r}const l0={};function po(r){r in l0||(l0[r]=!0,console.warn(r))}function j1(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function X1(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $1(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const c0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y1(){const r={enabled:!0,workingColorSpace:Po,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(s.r=Eo(s.r),s.g=Eo(s.g),s.b=Eo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hr?jc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Po]:{primaries:e,whitePoint:n,transfer:jc,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),r}const ft=Y1();function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Js;class q1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=Na("canvas")),Js.width=e.width,Js.height=e.height;const n=Js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=lr(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K1=0;class f_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Yr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Jd(s[c].image)):a.push(Jd(s[c]))}else a=Jd(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?q1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z1=0;class Tn extends Ts{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=sr,s=sr,a=Fi,c=Ss,u=mi,d=ur,f=Tn.DEFAULT_ANISOTROPY,p=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Yr(),this.name="",this.source=new f_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=e_;Tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,f=d[0],p=d[4],g=d[8],m=d[1],y=d[5],M=d[9],E=d[2],x=d[6],_=d[10];if(Math.abs(p-m)<.01&&Math.abs(g-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+E)<.1&&Math.abs(M+x)<.1&&Math.abs(f+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(f+1)/2,T=(y+1)/2,U=(_+1)/2,I=(p+m)/4,N=(g+E)/4,B=(M+x)/4;return w>T&&w>U?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=I/n,a=N/n):T>U?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=I/s,a=B/s):U<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),n=N/a,s=B/a),this.set(n,s,a,t),this}let C=Math.sqrt((x-M)*(x-M)+(g-E)*(g-E)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(x-M)/C,this.y=(g-E)/C,this.z=(m-p)/C,this.w=Math.acos((f+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J1 extends Ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new f_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends J1{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class p_ extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=oi,this.minFilter=oi,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,u){let d=n[s+0],f=n[s+1],p=n[s+2],g=n[s+3];const m=a[c+0],y=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=m,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==m||f!==y||p!==M){let x=1-u;const _=d*m+f*y+p*M+g*E,C=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const U=Math.sqrt(w),I=Math.atan2(U,_*C);x=Math.sin(x*I)/U,u=Math.sin(u*I)/U}const T=u*C;if(d=d*x+m*T,f=f*x+y*T,p=p*x+M*T,g=g*x+E*T,x===1-u){const U=1/Math.sqrt(d*d+f*f+p*p+g*g);d*=U,f*=U,p*=U,g*=U}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,a,c){const u=n[s],d=n[s+1],f=n[s+2],p=n[s+3],g=a[c],m=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+p*g+d*y-f*m,e[t+1]=d*M+p*m+f*g-u*y,e[t+2]=f*M+p*y+u*m-d*g,e[t+3]=p*M-u*g-d*m-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(n/2),p=u(s/2),g=u(a/2),m=d(n/2),y=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=m*p*g+f*y*M,this._y=f*y*g-m*p*M,this._z=f*p*M+m*y*g,this._w=f*p*g-m*y*M;break;case"YXZ":this._x=m*p*g+f*y*M,this._y=f*y*g-m*p*M,this._z=f*p*M-m*y*g,this._w=f*p*g+m*y*M;break;case"ZXY":this._x=m*p*g-f*y*M,this._y=f*y*g+m*p*M,this._z=f*p*M+m*y*g,this._w=f*p*g-m*y*M;break;case"ZYX":this._x=m*p*g-f*y*M,this._y=f*y*g+m*p*M,this._z=f*p*M-m*y*g,this._w=f*p*g+m*y*M;break;case"YZX":this._x=m*p*g+f*y*M,this._y=f*y*g+m*p*M,this._z=f*p*M-m*y*g,this._w=f*p*g-m*y*M;break;case"XZY":this._x=m*p*g-f*y*M,this._y=f*y*g-m*p*M,this._z=f*p*M+m*y*g,this._w=f*p*g+m*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],p=t[6],g=t[10],m=n+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-d)*y,this._y=(a-f)*y,this._z=(c-s)*y}else if(n>u&&n>g){const y=2*Math.sqrt(1+n-u-g);this._w=(p-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-n-g);this._w=(a-f)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+g-n-u);this._w=(c-s)/y,this._x=(a+f)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,p=t._w;return this._x=n*p+c*u+s*f-a*d,this._y=s*p+c*d+a*u-n*f,this._z=a*p+c*f+n*d-s*u,this._w=c*p-n*u-s*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+n*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),p=Math.atan2(f,u),g=Math.sin((1-t)*p)/f,m=Math.sin(t*p)/f;return this._w=c*g+this._w*m,this._x=n*g+this._x*m,this._y=s*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(d0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(d0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*s-u*n),p=2*(u*t-a*s),g=2*(a*n-c*t);return this.x=t+d*f+c*g-u*p,this.y=n+d*p+u*f-a*g,this.z=s+d*g+a*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-n*d,this.z=n*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qd.copy(this).projectOnVector(e),this.sub(Qd)}reflect(e){return this.sub(Qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qd=new H,d0=new xn;class As{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ei):Ei.fromBufferAttribute(a,c),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sc.copy(n.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),oc.subVectors(this.max,xa),Qs.subVectors(e.a,xa),eo.subVectors(e.b,xa),to.subVectors(e.c,xa),Nr.subVectors(eo,Qs),Fr.subVectors(to,eo),hs.subVectors(Qs,to);let t=[0,-Nr.z,Nr.y,0,-Fr.z,Fr.y,0,-hs.z,hs.y,Nr.z,0,-Nr.x,Fr.z,0,-Fr.x,hs.z,0,-hs.x,-Nr.y,Nr.x,0,-Fr.y,Fr.x,0,-hs.y,hs.x,0];return!eh(t,Qs,eo,to,oc)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,Qs,eo,to,oc))?!1:(ac.crossVectors(Nr,Fr),t=[ac.x,ac.y,ac.z],eh(t,Qs,eo,to,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new H,new H,new H,new H,new H,new H,new H,new H],Ei=new H,sc=new As,Qs=new H,eo=new H,to=new H,Nr=new H,Fr=new H,hs=new H,xa=new H,oc=new H,ac=new H,fs=new H;function eh(r,e,t,n,s){for(let a=0,c=r.length-3;a<=c;a+=3){fs.fromArray(r,a);const u=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),d=e.dot(fs),f=t.dot(fs),p=n.dot(fs);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const eE=new As,Sa=new H,th=new H;class Uo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):eE.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Sa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(th)),this.expandByPoint(Sa.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new H,nh=new H,lc=new H,Ur=new H,ih=new H,cc=new H,rh=new H;class iu{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nh.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(nh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(lc),u=Ur.dot(this.direction),d=-Ur.dot(lc),f=Ur.lengthSq(),p=Math.abs(1-c*c);let g,m,y,M;if(p>0)if(g=c*d-u,m=c*u-d,M=a*p,g>=0)if(m>=-M)if(m<=M){const E=1/p;g*=E,m*=E,y=g*(g+c*m+2*u)+m*(c*g+m+2*d)+f}else m=a,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*d)+f;else m=-a,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*d)+f;else m<=-M?(g=Math.max(0,-(-c*a+u)),m=g>0?-a:Math.min(Math.max(-a,-d),a),y=-g*g+m*(m+2*d)+f):m<=M?(g=0,m=Math.min(Math.max(-a,-d),a),y=m*(m+2*d)+f):(g=Math.max(0,-(c*a+u)),m=g>0?a:Math.min(Math.max(-a,-d),a),y=-g*g+m*(m+2*d)+f);else m=c>0?-a:a,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(nh).addScaledVector(lc,m),y}intersectSphere(e,t){Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=n-c,d=n+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,u,d;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(a=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,d=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,d=(e.min.z-m.z)*g),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,s,a){ih.subVectors(t,e),cc.subVectors(n,e),rh.crossVectors(ih,cc);let c=this.direction.dot(rh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Ur.subVectors(this.origin,e);const d=u*this.direction.dot(cc.crossVectors(Ur,cc));if(d<0)return null;const f=u*this.direction.dot(ih.cross(Ur));if(f<0||d+f>c)return null;const p=-u*Ur.dot(rh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,s,a,c,u,d,f,p,g,m,y,M,E,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,u,d,f,p,g,m,y,M,E,x)}set(e,t,n,s,a,c,u,d,f,p,g,m,y,M,E,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=a,_[5]=c,_[9]=u,_[13]=d,_[2]=f,_[6]=p,_[10]=g,_[14]=m,_[3]=y,_[7]=M,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/no.setFromMatrixColumn(e,0).length(),a=1/no.setFromMatrixColumn(e,1).length(),c=1/no.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=c*p,y=c*g,M=u*p,E=u*g;t[0]=d*p,t[4]=-d*g,t[8]=f,t[1]=y+M*f,t[5]=m-E*f,t[9]=-u*d,t[2]=E-m*f,t[6]=M+y*f,t[10]=c*d}else if(e.order==="YXZ"){const m=d*p,y=d*g,M=f*p,E=f*g;t[0]=m+E*u,t[4]=M*u-y,t[8]=c*f,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-M,t[6]=E+m*u,t[10]=c*d}else if(e.order==="ZXY"){const m=d*p,y=d*g,M=f*p,E=f*g;t[0]=m-E*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*p,t[9]=E-m*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const m=c*p,y=c*g,M=u*p,E=u*g;t[0]=d*p,t[4]=M*f-y,t[8]=m*f+E,t[1]=d*g,t[5]=E*f+m,t[9]=y*f-M,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,y=c*f,M=u*d,E=u*f;t[0]=d*p,t[4]=E-m*g,t[8]=M*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*g+M,t[10]=m-E*g}else if(e.order==="XZY"){const m=c*d,y=c*f,M=u*d,E=u*f;t[0]=d*p,t[4]=-g,t[8]=f*p,t[1]=m*g+E,t[5]=c*p,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*p,t[10]=E*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,t,n){const s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),kr.crossVectors(n,ri),kr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),kr.crossVectors(n,ri)),kr.normalize(),uc.crossVectors(ri,kr),s[0]=kr.x,s[4]=uc.x,s[8]=ri.x,s[1]=kr.y,s[5]=uc.y,s[9]=ri.y,s[2]=kr.z,s[6]=uc.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],u=n[4],d=n[8],f=n[12],p=n[1],g=n[5],m=n[9],y=n[13],M=n[2],E=n[6],x=n[10],_=n[14],C=n[3],w=n[7],T=n[11],U=n[15],I=s[0],N=s[4],B=s[8],R=s[12],A=s[1],F=s[5],q=s[9],Z=s[13],j=s[2],ee=s[6],J=s[10],ne=s[14],V=s[3],Q=s[7],le=s[11],O=s[15];return a[0]=c*I+u*A+d*j+f*V,a[4]=c*N+u*F+d*ee+f*Q,a[8]=c*B+u*q+d*J+f*le,a[12]=c*R+u*Z+d*ne+f*O,a[1]=p*I+g*A+m*j+y*V,a[5]=p*N+g*F+m*ee+y*Q,a[9]=p*B+g*q+m*J+y*le,a[13]=p*R+g*Z+m*ne+y*O,a[2]=M*I+E*A+x*j+_*V,a[6]=M*N+E*F+x*ee+_*Q,a[10]=M*B+E*q+x*J+_*le,a[14]=M*R+E*Z+x*ne+_*O,a[3]=C*I+w*A+T*j+U*V,a[7]=C*N+w*F+T*ee+U*Q,a[11]=C*B+w*q+T*J+U*le,a[15]=C*R+w*Z+T*ne+U*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],p=e[2],g=e[6],m=e[10],y=e[14],M=e[3],E=e[7],x=e[11],_=e[15];return M*(+a*d*g-s*f*g-a*u*m+n*f*m+s*u*y-n*d*y)+E*(+t*d*y-t*f*m+a*c*m-s*c*y+s*f*p-a*d*p)+x*(+t*f*g-t*u*y-a*c*g+n*c*y+a*u*p-n*f*p)+_*(-s*u*p-t*d*g+t*u*m+s*c*g-n*c*m+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=e[9],m=e[10],y=e[11],M=e[12],E=e[13],x=e[14],_=e[15],C=g*x*f-E*m*f+E*d*y-u*x*y-g*d*_+u*m*_,w=M*m*f-p*x*f-M*d*y+c*x*y+p*d*_-c*m*_,T=p*E*f-M*g*f+M*u*y-c*E*y-p*u*_+c*g*_,U=M*g*d-p*E*d-M*u*m+c*E*m+p*u*x-c*g*x,I=t*C+n*w+s*T+a*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=C*N,e[1]=(E*m*a-g*x*a-E*s*y+n*x*y+g*s*_-n*m*_)*N,e[2]=(u*x*a-E*d*a+E*s*f-n*x*f-u*s*_+n*d*_)*N,e[3]=(g*d*a-u*m*a-g*s*f+n*m*f+u*s*y-n*d*y)*N,e[4]=w*N,e[5]=(p*x*a-M*m*a+M*s*y-t*x*y-p*s*_+t*m*_)*N,e[6]=(M*d*a-c*x*a-M*s*f+t*x*f+c*s*_-t*d*_)*N,e[7]=(c*m*a-p*d*a+p*s*f-t*m*f-c*s*y+t*d*y)*N,e[8]=T*N,e[9]=(M*g*a-p*E*a-M*n*y+t*E*y+p*n*_-t*g*_)*N,e[10]=(c*E*a-M*u*a+M*n*f-t*E*f-c*n*_+t*u*_)*N,e[11]=(p*u*a-c*g*a-p*n*f+t*g*f+c*n*y-t*u*y)*N,e[12]=U*N,e[13]=(p*E*s-M*g*s+M*n*m-t*E*m-p*n*x+t*g*x)*N,e[14]=(M*u*s-c*E*s-M*n*d+t*E*d+c*n*x-t*u*x)*N,e[15]=(c*g*s-p*u*s+p*n*d-t*g*d-c*n*m+t*u*m)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,u=e.y,d=e.z,f=a*c,p=a*u;return this.set(f*c+n,f*u-s*d,f*d+s*u,0,f*u+s*d,p*u+n,p*d-s*c,0,f*d-s*u,p*d+s*c,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,p=c+c,g=u+u,m=a*f,y=a*p,M=a*g,E=c*p,x=c*g,_=u*g,C=d*f,w=d*p,T=d*g,U=n.x,I=n.y,N=n.z;return s[0]=(1-(E+_))*U,s[1]=(y+T)*U,s[2]=(M-w)*U,s[3]=0,s[4]=(y-T)*I,s[5]=(1-(m+_))*I,s[6]=(x+C)*I,s[7]=0,s[8]=(M+w)*N,s[9]=(x-C)*N,s[10]=(1-(m+E))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=no.set(s[0],s[1],s[2]).length();const c=no.set(s[4],s[5],s[6]).length(),u=no.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],wi.copy(this);const f=1/a,p=1/c,g=1/u;return wi.elements[0]*=f,wi.elements[1]*=f,wi.elements[2]*=f,wi.elements[4]*=p,wi.elements[5]*=p,wi.elements[6]*=p,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,t.setFromRotationMatrix(wi),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,s,a,c,u=or){const d=this.elements,f=2*a/(t-e),p=2*a/(n-s),g=(t+e)/(t-e),m=(n+s)/(n-s);let y,M;if(u===or)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Xc)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=m,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,c,u=or){const d=this.elements,f=1/(t-e),p=1/(n-s),g=1/(c-a),m=(t+e)*f,y=(n+s)*p;let M,E;if(u===or)M=(c+a)*g,E=-2*g;else if(u===Xc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-m,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const no=new H,wi=new Ke,tE=new H(0,0,0),nE=new H(1,1,1),kr=new H,uc=new H,ri=new H,h0=new Ke,f0=new xn;class dn{constructor(e=0,t=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],f=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return h0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const p0=new H,io=new xn,Qi=new Ke,dc=new H,Ma=new H,rE=new H,sE=new xn,m0=new H(1,0,0),g0=new H(0,1,0),v0=new H(0,0,1),_0={type:"added"},oE={type:"removed"},ro={type:"childadded",child:null},sh={type:"childremoved",child:null};class Bt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new dn,n=new xn,s=new H(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ut}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(v0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(v0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dc.copy(e):dc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ma,dc,this.up):Qi.lookAt(dc,Ma,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),io.setFromRotationMatrix(Qi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oE),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,rE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function c(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new H,er=new H,oh=new H,tr=new H,so=new H,oo=new H,y0=new H,ah=new H,lh=new H,ch=new H,uh=new Mt,dh=new Mt,hh=new Mt;class Ci{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ti.subVectors(s,t),er.subVectors(n,t),oh.subVectors(e,t);const c=Ti.dot(Ti),u=Ti.dot(er),d=Ti.dot(oh),f=er.dot(er),p=er.dot(oh),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;const m=1/g,y=(f*d-u*p)*m,M=(c*p-u*d)*m;return a.set(1-y-M,M,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,n,s,a,c,u,d){return this.getBarycoord(e,t,n,s,tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,tr.x),d.addScaledVector(c,tr.y),d.addScaledVector(u,tr.z),d)}static getInterpolatedAttribute(e,t,n,s,a,c){return uh.setScalar(0),dh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),hh.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(uh,a.x),c.addScaledVector(dh,a.y),c.addScaledVector(hh,a.z),c}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),er.subVectors(e,t),Ti.cross(er).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Ti.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,u;so.subVectors(s,n),oo.subVectors(a,n),ah.subVectors(e,n);const d=so.dot(ah),f=oo.dot(ah);if(d<=0&&f<=0)return t.copy(n);lh.subVectors(e,s);const p=so.dot(lh),g=oo.dot(lh);if(p>=0&&g<=p)return t.copy(s);const m=d*g-p*f;if(m<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(n).addScaledVector(so,c);ch.subVectors(e,a);const y=so.dot(ch),M=oo.dot(ch);if(M>=0&&y<=M)return t.copy(a);const E=y*f-d*M;if(E<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(n).addScaledVector(oo,u);const x=p*M-y*g;if(x<=0&&g-p>=0&&y-M>=0)return y0.subVectors(a,s),u=(g-p)/(g-p+(y-M)),t.copy(s).addScaledVector(y0,u);const _=1/(x+E+m);return c=E*_,u=m*_,t.copy(n).addScaledVector(so,c).addScaledVector(oo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},hc={h:0,s:0,l:0};function fh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=$f(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=fh(c,a,e+1/3),this.g=fh(c,a,e),this.b=fh(c,a,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=g_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ft.fromWorkingColorSpace(In.copy(this),e),Math.round(dt(In.r*255,0,255))*65536+Math.round(dt(In.g*255,0,255))*256+Math.round(dt(In.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(In.copy(this),t);const n=In.r,s=In.g,a=In.b,c=Math.max(n,s,a),u=Math.min(n,s,a);let d,f;const p=(u+c)/2;if(u===c)d=0,f=0;else{const g=c-u;switch(f=p<=.5?g/(c+u):g/(2-c-u),c){case n:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-n)/g+2;break;case a:d=(n-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Vt){ft.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,s=In.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(hc);const n=Ca(Or.h,hc.h,t),s=Ca(Or.s,hc.s,t),a=Ca(Or.l,hc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ze;Ze.NAMES=g_;let aE=0;class qr extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Yr(),this.name="",this.type="Material",this.blending=So,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Vh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(n.blending=this.blending),this.side!==jr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zh&&(n.blendSrc=this.blendSrc),this.blendDst!==Vh&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xa extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new H,fc=new nt;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=s0,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),n=Vn(n,this.array),s=Vn(s,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==s0&&(e.usage=this.usage),e}}class Yf extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class v_ extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lE=0;const fi=new Ke,ph=new Bt,ao=new H,si=new As,Ea=new As,yn=new H;class fn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?v_:Yf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ft(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];si.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ea.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(si.min,Ea.min),si.expandByPoint(yn),yn.addVectors(si.max,Ea.max),si.expandByPoint(yn)):(si.expandByPoint(Ea.min),si.expandByPoint(Ea.max))}si.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)yn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)yn.fromBufferAttribute(u,f),d&&(ao.fromBufferAttribute(e,f),yn.add(ao)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let B=0;B<n.count;B++)u[B]=new H,d[B]=new H;const f=new H,p=new H,g=new H,m=new nt,y=new nt,M=new nt,E=new H,x=new H;function _(B,R,A){f.fromBufferAttribute(n,B),p.fromBufferAttribute(n,R),g.fromBufferAttribute(n,A),m.fromBufferAttribute(a,B),y.fromBufferAttribute(a,R),M.fromBufferAttribute(a,A),p.sub(f),g.sub(f),y.sub(m),M.sub(m);const F=1/(y.x*M.y-M.x*y.y);isFinite(F)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(F),x.copy(g).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(F),u[B].add(E),u[R].add(E),u[A].add(E),d[B].add(x),d[R].add(x),d[A].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let B=0,R=C.length;B<R;++B){const A=C[B],F=A.start,q=A.count;for(let Z=F,j=F+q;Z<j;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const w=new H,T=new H,U=new H,I=new H;function N(B){U.fromBufferAttribute(s,B),I.copy(U);const R=u[B];w.copy(R),w.sub(U.multiplyScalar(U.dot(R))).normalize(),T.crossVectors(I,R);const F=T.dot(d[B])<0?-1:1;c.setXYZW(B,w.x,w.y,w.z,F)}for(let B=0,R=C.length;B<R;++B){const A=C[B],F=A.start,q=A.count;for(let Z=F,j=F+q;Z<j;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,y=n.count;m<y;m++)n.setXYZ(m,0,0,0);const s=new H,a=new H,c=new H,u=new H,d=new H,f=new H,p=new H,g=new H;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),E=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,x),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),u.add(p),d.add(p),f.add(p),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(u,d){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(d.length*p);let y=0,M=0;for(let E=0,x=d.length;E<x;E++){u.isInterleavedBufferAttribute?y=d[E]*u.data.stride+u.offset:y=d[E]*p;for(let _=0;_<p;_++)m[M++]=f[y++]}return new Qn(m,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,n);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],y=e(m,n);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let g=0,m=f.length;g<m;g++){const y=f[g];p.push(y.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],g=a[f];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new Ke,ps=new iu,pc=new Uo,S0=new H,mc=new H,gc=new H,vc=new H,mh=new H,_c=new H,M0=new H,yc=new H;class hn extends Bt{constructor(e=new fn,t=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){_c.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const p=u[d],g=a[d];p!==0&&(mh.fromBufferAttribute(g,e),c?_c.addScaledVector(mh,p):_c.addScaledVector(mh.sub(t),p))}t.add(_c)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(a),ps.copy(e.ray).recast(e.near),!(pc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(pc,S0)===null||ps.origin.distanceToSquared(S0)>(e.far-e.near)**2))&&(x0.copy(a).invert(),ps.copy(e.ray).applyMatrix4(x0),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const x=m[M],_=c[x.materialIndex],C=Math.max(x.start,y.start),w=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let T=C,U=w;T<U;T+=3){const I=u.getX(T),N=u.getX(T+1),B=u.getX(T+2);s=xc(this,_,e,n,f,p,g,I,N,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let x=M,_=E;x<_;x+=3){const C=u.getX(x),w=u.getX(x+1),T=u.getX(x+2);s=xc(this,c,e,n,f,p,g,C,w,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const x=m[M],_=c[x.materialIndex],C=Math.max(x.start,y.start),w=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let T=C,U=w;T<U;T+=3){const I=T,N=T+1,B=T+2;s=xc(this,_,e,n,f,p,g,I,N,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let x=M,_=E;x<_;x+=3){const C=x,w=x+1,T=x+2;s=xc(this,c,e,n,f,p,g,C,w,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function cE(r,e,t,n,s,a,c,u){let d;if(e.side===Jn?d=n.intersectTriangle(c,a,s,!0,u):d=n.intersectTriangle(s,a,c,e.side===jr,u),d===null)return null;yc.copy(u),yc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(yc);return f<t.near||f>t.far?null:{distance:f,point:yc.clone(),object:r}}function xc(r,e,t,n,s,a,c,u,d,f){r.getVertexPosition(u,mc),r.getVertexPosition(d,gc),r.getVertexPosition(f,vc);const p=cE(r,e,t,n,mc,gc,vc,M0);if(p){const g=new H;Ci.getBarycoord(M0,mc,gc,vc,g),s&&(p.uv=Ci.getInterpolatedAttribute(s,u,d,f,g,new nt)),a&&(p.uv1=Ci.getInterpolatedAttribute(a,u,d,f,g,new nt)),c&&(p.normal=Ci.getInterpolatedAttribute(c,u,d,f,g,new H),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:f,normal:new H,materialIndex:0};Ci.getNormal(mc,gc,vc,m.normal),p.face=m,p.barycoord=g}return p}class $a extends fn{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],p=[],g=[];let m=0,y=0;M("z","y","x",-1,-1,n,t,e,c,a,0),M("z","y","x",1,-1,n,t,-e,c,a,1),M("x","z","y",1,1,e,n,t,s,c,2),M("x","z","y",1,-1,e,n,-t,s,c,3),M("x","y","z",1,-1,e,t,n,s,a,4),M("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(p,3)),this.setAttribute("uv",new Ft(g,2));function M(E,x,_,C,w,T,U,I,N,B,R){const A=T/N,F=U/B,q=T/2,Z=U/2,j=I/2,ee=N+1,J=B+1;let ne=0,V=0;const Q=new H;for(let le=0;le<J;le++){const O=le*F-Z;for(let oe=0;oe<ee;oe++){const Ae=oe*A-q;Q[E]=Ae*C,Q[x]=O*w,Q[_]=j,f.push(Q.x,Q.y,Q.z),Q[E]=0,Q[x]=0,Q[_]=I>0?1:-1,p.push(Q.x,Q.y,Q.z),g.push(oe/N),g.push(1-le/B),ne+=1}}for(let le=0;le<B;le++)for(let O=0;O<N;O++){const oe=m+O+ee*le,Ae=m+O+ee*(le+1),re=m+(O+1)+ee*(le+1),he=m+(O+1)+ee*le;d.push(oe,Ae,he),d.push(Ae,re,he),V+=6}u.addGroup(y,V,R),y+=V,m+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=Do(r[t]);for(const s in n)e[s]=n[s]}return e}function uE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function __(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const dE={clone:Do,merge:Hn};var hE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hE,this.fragmentShader=fE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=uE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class y_ extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new H,E0=new nt,w0=new nt;class wn extends y_{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,E0,w0),t.subVectors(w0,E0)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*n/f,s*=c.width/d,n*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,co=1;class pE extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(lo,co,e,t);s.layers=this.layers,this.add(s);const a=new wn(lo,co,e,t);a.layers=this.layers,this.add(a);const c=new wn(lo,co,e,t);c.layers=this.layers,this.add(c);const u=new wn(lo,co,e,t);u.layers=this.layers,this.add(u);const d=new wn(lo,co,e,t);d.layers=this.layers,this.add(d);const f=new wn(lo,co,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Xc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class x_ extends Tn{constructor(e,t,n,s,a,c,u,d,f,p){e=e!==void 0?e:[],t=t!==void 0?t:Ao,super(e,t,n,s,a,c,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mE extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new x_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $a(5,5,5),a=new Xr({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Gr});a.uniforms.tEquirect.value=t;const c=new hn(s,a),u=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Fi),new pE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}class qf extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const T0=new H,A0=new Mt,b0=new Mt,gE=new H,C0=new Ke,Sc=new H,gh=new Uo,R0=new Ke,vh=new iu;class vE extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=e0,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new As),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sc),this.boundingBox.expandByPoint(Sc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Uo),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sc),this.boundingSphere.expandByPoint(Sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(s),e.ray.intersectsSphere(gh)!==!1&&(R0.copy(s).invert(),vh.copy(e.ray).applyMatrix4(R0),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===e0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===m1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;A0.fromBufferAttribute(s.attributes.skinIndex,e),b0.fromBufferAttribute(s.attributes.skinWeight,e),T0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=b0.getComponent(a);if(c!==0){const u=A0.getComponent(a);C0.multiplyMatrices(n.bones[u].matrixWorld,n.boneInverses[u]),t.addScaledVector(gE.copy(T0).applyMatrix4(C0),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tf extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _E extends Tn{constructor(e=null,t=1,n=1,s,a,c,u,d,f=oi,p=oi,g,m){super(null,c,u,d,f,p,s,a,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const P0=new Ke,yE=new Ke;class Kf{constructor(e=[],t=[]){this.uuid=Yr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:yE;P0.multiplyMatrices(u,t[a]),P0.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _E(t,e,e,mi,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new Tf),this.bones.push(c),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=n[s];e.boneInverses.push(u.toArray())}return e}}const _h=new H,xE=new H,SE=new ut;class Vr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_h.subVectors(n,t).cross(xE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_h),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||SE.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Uo,Mc=new H;class Zf{constructor(e=new Vr,t=new Vr,n=new Vr,s=new Vr,a=new Vr,c=new Vr){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=or){const n=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],d=s[3],f=s[4],p=s[5],g=s[6],m=s[7],y=s[8],M=s[9],E=s[10],x=s[11],_=s[12],C=s[13],w=s[14],T=s[15];if(n[0].setComponents(d-a,m-f,x-y,T-_).normalize(),n[1].setComponents(d+a,m+f,x+y,T+_).normalize(),n[2].setComponents(d+c,m+p,x+M,T+C).normalize(),n[3].setComponents(d-c,m-p,x-M,T-C).normalize(),n[4].setComponents(d-u,m-g,x-E,T-w).normalize(),t===or)n[5].setComponents(d+u,m+g,x+E,T+w).normalize();else if(t===Xc)n[5].setComponents(u,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Mc.x=s.normal.x>0?e.max.x:e.min.x,Mc.y=s.normal.y>0?e.max.y:e.min.y,Mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new H,Yc=new H,L0=new Ke,wa=new iu,Ec=new Uo,yh=new H,D0=new H;class qc extends Bt{constructor(e=new fn,t=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)$c.fromBufferAttribute(t,s-1),Yc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$c.distanceTo(Yc);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=a,e.ray.intersectsSphere(Ec)===!1)return;L0.copy(s).invert(),wa.copy(e.ray).applyMatrix4(L0);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const y=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let E=y,x=M-1;E<x;E+=f){const _=p.getX(E),C=p.getX(E+1),w=wc(this,e,wa,d,_,C);w&&t.push(w)}if(this.isLineLoop){const E=p.getX(M-1),x=p.getX(y),_=wc(this,e,wa,d,E,x);_&&t.push(_)}}else{const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=y,x=M-1;E<x;E+=f){const _=wc(this,e,wa,d,E,E+1);_&&t.push(_)}if(this.isLineLoop){const E=wc(this,e,wa,d,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function wc(r,e,t,n,s,a){const c=r.geometry.attributes.position;if($c.fromBufferAttribute(c,s),Yc.fromBufferAttribute(c,a),t.distanceSqToSegment($c,Yc,yh,D0)>n)return;yh.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(yh);if(!(d<e.near||d>e.far))return{distance:d,point:D0.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const I0=new H,N0=new H;class ME extends qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)I0.fromBufferAttribute(t,s),N0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+I0.distanceTo(N0);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class go extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class S_ extends Tn{constructor(e,t,n,s,a,c,u,d,f,p=Mo){if(p!==Mo&&p!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Mo&&(n=Ms),n===void 0&&p===Ro&&(n=Co),super(null,s,a,c,u,d,p,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:oi,this.minFilter=d!==void 0?d:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class EE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let c;t?c=t:c=e*n[a-1];let u=0,d=a-1,f;for(;u<=d;)if(s=Math.floor(u+(d-u)/2),f=n[s]-c,f<0)u=s+1;else if(f>0)d=s-1;else{d=s;break}if(s=d,n[s]===c)return s/(a-1);const p=n[s],m=n[s+1]-p,y=(c-p)/m;return(s+y)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),u=this.getPoint(a),d=t||(c.isVector2?new nt:new H);return d.copy(u).sub(c).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new H,s=[],a=[],c=[],u=new H,d=new Ke;for(let y=0;y<=e;y++){const M=y/e;s[y]=this.getTangentAt(M,new H)}a[0]=new H,c[0]=new H;let f=Number.MAX_VALUE;const p=Math.abs(s[0].x),g=Math.abs(s[0].y),m=Math.abs(s[0].z);p<=f&&(f=p,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),m<=f&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],u),c[0].crossVectors(s[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),c[y]=c[y-1].clone(),u.crossVectors(s[y-1],s[y]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(dt(s[y-1].dot(s[y]),-1,1));a[y].applyMatrix4(d.makeRotationAxis(u,M))}c[y].crossVectors(s[y],a[y])}if(t===!0){let y=Math.acos(dt(a[0].dot(a[e]),-1,1));y/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(y=-y);for(let M=1;M<=e;M++)a[M].applyMatrix4(d.makeRotationAxis(s[M],y*M)),c[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jf extends fn{constructor(e=1,t=1,n=1,s=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),a=Math.floor(a);const p=[],g=[],m=[],y=[];let M=0;const E=[],x=n/2;let _=0;C(),c===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(m,3)),this.setAttribute("uv",new Ft(y,2));function C(){const T=new H,U=new H;let I=0;const N=(t-e)/n;for(let B=0;B<=a;B++){const R=[],A=B/a,F=A*(t-e)+e;for(let q=0;q<=s;q++){const Z=q/s,j=Z*d+u,ee=Math.sin(j),J=Math.cos(j);U.x=F*ee,U.y=-A*n+x,U.z=F*J,g.push(U.x,U.y,U.z),T.set(ee,N,J).normalize(),m.push(T.x,T.y,T.z),y.push(Z,1-A),R.push(M++)}E.push(R)}for(let B=0;B<s;B++)for(let R=0;R<a;R++){const A=E[R][B],F=E[R+1][B],q=E[R+1][B+1],Z=E[R][B+1];(e>0||R!==0)&&(p.push(A,F,Z),I+=3),(t>0||R!==a-1)&&(p.push(F,q,Z),I+=3)}f.addGroup(_,I,0),_+=I}function w(T){const U=M,I=new nt,N=new H;let B=0;const R=T===!0?e:t,A=T===!0?1:-1;for(let q=1;q<=s;q++)g.push(0,x*A,0),m.push(0,A,0),y.push(.5,.5),M++;const F=M;for(let q=0;q<=s;q++){const j=q/s*d+u,ee=Math.cos(j),J=Math.sin(j);N.x=R*J,N.y=x*A,N.z=R*ee,g.push(N.x,N.y,N.z),m.push(0,A,0),I.x=ee*.5+.5,I.y=J*.5*A+.5,y.push(I.x,I.y),M++}for(let q=0;q<s;q++){const Z=U+q,j=F+q;T===!0?p.push(j,j+1,Z):p.push(j+1,j,Z),B+=3}f.addGroup(_,B,T===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends Jf{constructor(e=1,t=1,n=32,s=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,n,s,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new su(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qf extends fn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],c=[];u(s),f(n),p(),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(a.slice(),3)),this.setAttribute("uv",new Ft(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(C){const w=new H,T=new H,U=new H;for(let I=0;I<t.length;I+=3)y(t[I+0],w),y(t[I+1],T),y(t[I+2],U),d(w,T,U,C)}function d(C,w,T,U){const I=U+1,N=[];for(let B=0;B<=I;B++){N[B]=[];const R=C.clone().lerp(T,B/I),A=w.clone().lerp(T,B/I),F=I-B;for(let q=0;q<=F;q++)q===0&&B===I?N[B][q]=R:N[B][q]=R.clone().lerp(A,q/F)}for(let B=0;B<I;B++)for(let R=0;R<2*(I-B)-1;R++){const A=Math.floor(R/2);R%2===0?(m(N[B][A+1]),m(N[B+1][A]),m(N[B][A])):(m(N[B][A+1]),m(N[B+1][A+1]),m(N[B+1][A]))}}function f(C){const w=new H;for(let T=0;T<a.length;T+=3)w.x=a[T+0],w.y=a[T+1],w.z=a[T+2],w.normalize().multiplyScalar(C),a[T+0]=w.x,a[T+1]=w.y,a[T+2]=w.z}function p(){const C=new H;for(let w=0;w<a.length;w+=3){C.x=a[w+0],C.y=a[w+1],C.z=a[w+2];const T=x(C)/2/Math.PI+.5,U=_(C)/Math.PI+.5;c.push(T,1-U)}M(),g()}function g(){for(let C=0;C<c.length;C+=6){const w=c[C+0],T=c[C+2],U=c[C+4],I=Math.max(w,T,U),N=Math.min(w,T,U);I>.9&&N<.1&&(w<.2&&(c[C+0]+=1),T<.2&&(c[C+2]+=1),U<.2&&(c[C+4]+=1))}}function m(C){a.push(C.x,C.y,C.z)}function y(C,w){const T=C*3;w.x=e[T+0],w.y=e[T+1],w.z=e[T+2]}function M(){const C=new H,w=new H,T=new H,U=new H,I=new nt,N=new nt,B=new nt;for(let R=0,A=0;R<a.length;R+=9,A+=6){C.set(a[R+0],a[R+1],a[R+2]),w.set(a[R+3],a[R+4],a[R+5]),T.set(a[R+6],a[R+7],a[R+8]),I.set(c[A+0],c[A+1]),N.set(c[A+2],c[A+3]),B.set(c[A+4],c[A+5]),U.copy(C).add(w).add(T).divideScalar(3);const F=x(U);E(I,A+0,C,F),E(N,A+2,w,F),E(B,A+4,T,F)}}function E(C,w,T,U){U<0&&C.x===1&&(c[w]=C.x-1),T.x===0&&T.z===0&&(c[w]=U/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.vertices,e.indices,e.radius,e.details)}}const wE={triangulate:function(r,e,t=2){const n=e&&e.length,s=n?e[0]*t:r.length;let a=M_(r,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,d,f,p,g,m,y;if(n&&(a=RE(r,e,a,t)),r.length>80*t){u=f=r[0],d=p=r[1];for(let M=t;M<s;M+=t)g=r[M],m=r[M+1],g<u&&(u=g),m<d&&(d=m),g>f&&(f=g),m>p&&(p=m);y=Math.max(f-u,p-d),y=y!==0?32767/y:0}return Fa(a,c,t,u,d,y,0),c}};function M_(r,e,t,n,s){let a,c;if(s===zE(r,e,t,n)>0)for(a=e;a<t;a+=n)c=F0(a,r[a],r[a+1],c);else for(a=t-n;a>=e;a-=n)c=F0(a,r[a],r[a+1],c);return c&&ou(c,c.next)&&(ka(c),c=c.next),c}function ws(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ou(t,t.next)||Zt(t.prev,t,t.next)===0)){if(ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fa(r,e,t,n,s,a,c){if(!r)return;!c&&a&&NE(r,n,s,a);let u=r,d,f;for(;r.prev!==r.next;){if(d=r.prev,f=r.next,a?AE(r,n,s,a):TE(r)){e.push(d.i/t|0),e.push(r.i/t|0),e.push(f.i/t|0),ka(r),r=f.next,u=f.next;continue}if(r=f,r===u){c?c===1?(r=bE(ws(r),e,t),Fa(r,e,t,n,s,a,2)):c===2&&CE(r,e,t,n,s,a):Fa(ws(r),e,t,n,s,a,1);break}}}function TE(r){const e=r.prev,t=r,n=r.next;if(Zt(e,t,n)>=0)return!1;const s=e.x,a=t.x,c=n.x,u=e.y,d=t.y,f=n.y,p=s<a?s<c?s:c:a<c?a:c,g=u<d?u<f?u:f:d<f?d:f,m=s>a?s>c?s:c:a>c?a:c,y=u>d?u>f?u:f:d>f?d:f;let M=n.next;for(;M!==e;){if(M.x>=p&&M.x<=m&&M.y>=g&&M.y<=y&&vo(s,u,a,d,c,f,M.x,M.y)&&Zt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function AE(r,e,t,n){const s=r.prev,a=r,c=r.next;if(Zt(s,a,c)>=0)return!1;const u=s.x,d=a.x,f=c.x,p=s.y,g=a.y,m=c.y,y=u<d?u<f?u:f:d<f?d:f,M=p<g?p<m?p:m:g<m?g:m,E=u>d?u>f?u:f:d>f?d:f,x=p>g?p>m?p:m:g>m?g:m,_=Af(y,M,e,t,n),C=Af(E,x,e,t,n);let w=r.prevZ,T=r.nextZ;for(;w&&w.z>=_&&T&&T.z<=C;){if(w.x>=y&&w.x<=E&&w.y>=M&&w.y<=x&&w!==s&&w!==c&&vo(u,p,d,g,f,m,w.x,w.y)&&Zt(w.prev,w,w.next)>=0||(w=w.prevZ,T.x>=y&&T.x<=E&&T.y>=M&&T.y<=x&&T!==s&&T!==c&&vo(u,p,d,g,f,m,T.x,T.y)&&Zt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;w&&w.z>=_;){if(w.x>=y&&w.x<=E&&w.y>=M&&w.y<=x&&w!==s&&w!==c&&vo(u,p,d,g,f,m,w.x,w.y)&&Zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;T&&T.z<=C;){if(T.x>=y&&T.x<=E&&T.y>=M&&T.y<=x&&T!==s&&T!==c&&vo(u,p,d,g,f,m,T.x,T.y)&&Zt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function bE(r,e,t){let n=r;do{const s=n.prev,a=n.next.next;!ou(s,a)&&E_(s,n,n.next,a)&&Ua(s,a)&&Ua(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),ka(n),ka(n.next),n=r=a),n=n.next}while(n!==r);return ws(n)}function CE(r,e,t,n,s,a){let c=r;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&kE(c,u)){let d=w_(c,u);c=ws(c,c.next),d=ws(d,d.next),Fa(c,e,t,n,s,a,0),Fa(d,e,t,n,s,a,0);return}u=u.next}c=c.next}while(c!==r)}function RE(r,e,t,n){const s=[];let a,c,u,d,f;for(a=0,c=e.length;a<c;a++)u=e[a]*n,d=a<c-1?e[a+1]*n:r.length,f=M_(r,u,d,n,!1),f===f.next&&(f.steiner=!0),s.push(UE(f));for(s.sort(PE),a=0;a<s.length;a++)t=LE(s[a],t);return t}function PE(r,e){return r.x-e.x}function LE(r,e){const t=DE(r,e);if(!t)return e;const n=w_(t,r);return ws(n,n.next),ws(t,t.next)}function DE(r,e){let t=e,n=-1/0,s;const a=r.x,c=r.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const m=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=a&&m>n&&(n=m,s=t.x<t.next.x?t:t.next,m===a))return s}t=t.next}while(t!==e);if(!s)return null;const u=s,d=s.x,f=s.y;let p=1/0,g;t=s;do a>=t.x&&t.x>=d&&a!==t.x&&vo(c<f?a:n,c,d,f,c<f?n:a,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(a-t.x),Ua(t,r)&&(g<p||g===p&&(t.x>s.x||t.x===s.x&&IE(s,t)))&&(s=t,p=g)),t=t.next;while(t!==u);return s}function IE(r,e){return Zt(r.prev,r,e.prev)<0&&Zt(e.next,r,r.next)<0}function NE(r,e,t,n){let s=r;do s.z===0&&(s.z=Af(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,FE(s)}function FE(r){let e,t,n,s,a,c,u,d,f=1;do{for(t=r,r=null,a=null,c=0;t;){for(c++,n=t,u=0,e=0;e<f&&(u++,n=n.nextZ,!!n);e++);for(d=f;u>0||d>0&&n;)u!==0&&(d===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,u--):(s=n,n=n.nextZ,d--),a?a.nextZ=s:r=s,s.prevZ=a,a=s;t=n}a.nextZ=null,f*=2}while(c>1);return r}function Af(r,e,t,n,s){return r=(r-t)*s|0,e=(e-n)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function UE(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vo(r,e,t,n,s,a,c,u){return(s-c)*(e-u)>=(r-c)*(a-u)&&(r-c)*(n-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(s-c)*(n-u)}function kE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!OE(r,e)&&(Ua(r,e)&&Ua(e,r)&&BE(r,e)&&(Zt(r.prev,r,e.prev)||Zt(r,e.prev,e))||ou(r,e)&&Zt(r.prev,r,r.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ou(r,e){return r.x===e.x&&r.y===e.y}function E_(r,e,t,n){const s=Ac(Zt(r,e,t)),a=Ac(Zt(r,e,n)),c=Ac(Zt(t,n,r)),u=Ac(Zt(t,n,e));return!!(s!==a&&c!==u||s===0&&Tc(r,t,e)||a===0&&Tc(r,n,e)||c===0&&Tc(t,r,n)||u===0&&Tc(t,e,n))}function Tc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ac(r){return r>0?1:r<0?-1:0}function OE(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&E_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ua(r,e){return Zt(r.prev,r,r.next)<0?Zt(r,e,r.next)>=0&&Zt(r,r.prev,e)>=0:Zt(r,e,r.prev)<0||Zt(r,r.next,e)<0}function BE(r,e){let t=r,n=!1;const s=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function w_(r,e){const t=new bf(r.i,r.x,r.y),n=new bf(e.i,e.x,e.y),s=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function F0(r,e,t,n){const s=new bf(r,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ka(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zE(r,e,t,n){let s=0;for(let a=e,c=t-n;a<t;a+=n)s+=(r[c]-r[a])*(r[a+1]+r[c+1]),c=a;return s}class ep{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return ep.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];U0(e),k0(n,e);let c=e.length;t.forEach(U0);for(let d=0;d<t.length;d++)s.push(c),c+=t[d].length,k0(n,t[d]);const u=wE.triangulate(n,s);for(let d=0;d<u.length;d+=3)a.push(u.slice(d,d+3));return a}}function U0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function k0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class tp extends Qf{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tp(e.radius,e.detail)}}class ko extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,p=d+1,g=e/u,m=t/d,y=[],M=[],E=[],x=[];for(let _=0;_<p;_++){const C=_*m-c;for(let w=0;w<f;w++){const T=w*g-a;M.push(T,-C,0),E.push(0,0,1),x.push(w/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let C=0;C<u;C++){const w=C+f*_,T=C+f*(_+1),U=C+1+f*(_+1),I=C+1+f*_;y.push(w,T,I),y.push(T,U,I)}this.setIndex(y),this.setAttribute("position",new Ft(M,3)),this.setAttribute("normal",new Ft(E,3)),this.setAttribute("uv",new Ft(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class np extends fn{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const c=[],u=[],d=[],f=[],p=new H,g=new H,m=new H;for(let y=0;y<=n;y++)for(let M=0;M<=s;M++){const E=M/s*a,x=y/n*Math.PI*2;g.x=(e+t*Math.cos(x))*Math.cos(E),g.y=(e+t*Math.cos(x))*Math.sin(E),g.z=t*Math.sin(x),u.push(g.x,g.y,g.z),p.x=e*Math.cos(E),p.y=e*Math.sin(E),m.subVectors(g,p).normalize(),d.push(m.x,m.y,m.z),f.push(M/s),f.push(y/n)}for(let y=1;y<=n;y++)for(let M=1;M<=s;M++){const E=(s+1)*y+M-1,x=(s+1)*(y-1)+M-1,_=(s+1)*(y-1)+M,C=(s+1)*y+M;c.push(E,x,C),c.push(x,_,C)}this.setIndex(c),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ra extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VE extends Ra{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wo extends qr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HE extends qr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GE extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function jE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function XE(r){function e(s,a){return r[s]-r[a]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function O0(r,e,t){const n=r.length,s=new r.constructor(n);for(let a=0,c=0;c!==n;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[c++]=r[u+d]}return s}function T_(r,e,t,n){let s=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[s++];if(a===void 0)return;let c=a[n];if(c!==void 0)if(Array.isArray(c))do c=a[n],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=r[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[n],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=r[s++];while(a!==void 0);else do c=a[n],c!==void 0&&(e.push(a.time),t.push(c)),a=r[s++];while(a!==void 0)}class au{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(a=s,s=t[++n],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(n=2,a=u);for(let d=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(s=a,a=t[--n-1],e>=a)break t}c=n,n=0;break n}break e}for(;n<c;){const u=n+c>>>1;e<t[u]?c=u:n=u+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=n[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $E extends au{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:t0,endingEnd:t0}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case n0:a=e,u=2*t-n;break;case i0:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=n}if(d===void 0)switch(this.getSettings_().endingEnd){case n0:c=e,d=2*n-t;break;case i0:c=1,d=n+s[1]-s[0];break;default:c=e-1,d=t}const f=(n-t)*.5,p=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(d-n),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,n,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,p=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,y=this._weightNext,M=(n-t)/(s-t),E=M*M,x=E*M,_=-m*x+2*m*E-m*M,C=(1+m)*x+(-1.5-2*m)*E+(-.5+m)*M+1,w=(-1-y)*x+(1.5+y)*E+.5*M,T=y*x-y*E;for(let U=0;U!==u;++U)a[U]=_*c[p+U]+C*c[f+U]+w*c[d+U]+T*c[g+U];return a}}class YE extends au{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,p=(n-t)/(s-t),g=1-p;for(let m=0;m!==u;++m)a[m]=c[f+m]*g+c[d+m]*p;return a}}class qE extends au{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bc(t,this.TimeBufferType),this.values=bc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bc(e.times,Array),values:bc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new YE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $E(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wc:t=this.InterpolantFactoryMethodDiscrete;break;case wf:t=this.InterpolantFactoryMethodLinear;break;case Kd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wc;case this.InterpolantFactoryMethodLinear:return wf;case this.InterpolantFactoryMethodSmooth:return Kd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,c=s-1;for(;a!==s&&n[a]<e;)++a;for(;c!==-1&&n[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=n.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=n[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&jE(s))for(let u=0,d=s.length;u!==d;++u){const f=s[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kd,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const f=e[u],p=e[u+1];if(f!==p&&(u!==1||f!==e[0]))if(s)d=!0;else{const g=u*n,m=g-n,y=g+n;for(let M=0;M!==n;++M){const E=t[g+M];if(E!==t[m+M]||E!==t[y+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const g=u*n,m=c*n;for(let y=0;y!==n;++y)t[m+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*n,d=c*n,f=0;f!==n;++f)t[d+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=wf;class Oo extends zi{constructor(e,t,n){super(e,t,n)}}Oo.prototype.ValueTypeName="bool";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Wc;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class A_ extends zi{}A_.prototype.ValueTypeName="color";class Oa extends zi{}Oa.prototype.ValueTypeName="number";class KE extends au{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(n-t)/(s-t);let f=e*u;for(let p=f+u;f!==p;f+=4)xn.slerpFlat(a,0,c,f-u,c,f,d);return a}}class Io extends zi{InterpolantFactoryMethodLinear(e){return new KE(this.times,this.values,this.getValueSize(),e)}}Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends zi{constructor(e,t,n){super(e,t,n)}}Bo.prototype.ValueTypeName="string";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=Wc;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ba extends zi{}Ba.prototype.ValueTypeName="vector";class ZE{constructor(e="",t=-1,n=[],s=v1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let c=0,u=n.length;c!==u;++c)t.push(QE(n[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=n.length;a!==c;++a)t.push(zi.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],f=[];d.push((u+a-1)%a,u,(u+1)%a),f.push(0,1,0);const p=XE(d);d=O0(d,1,p),f=O0(f,1,p),!s&&d[0]===0&&(d.push(a),f.push(f[0])),c.push(new Oa(".morphTargetInfluences["+t[u].name+"]",d,f).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const f=e[u],p=f.name.match(a);if(p&&p.length>1){const g=p[1];let m=s[g];m||(s[g]=m=[]),m.push(f)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,n));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(g,m,y,M,E){if(y.length!==0){const x=[],_=[];T_(y,x,_,M),x.length!==0&&E.push(new g(m,x,_))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const m=f[g].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const y={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let E=0;E<m[M].morphTargets.length;E++)y[m[M].morphTargets[E]]=-1;for(const E in y){const x=[],_=[];for(let C=0;C!==m[M].morphTargets.length;++C){const w=m[M];x.push(w.time),_.push(w.morphTarget===E?1:0)}s.push(new Oa(".morphTargetInfluence["+E+"]",x,_))}d=y.length*c}else{const y=".bones["+t[g].name+"]";n(Ba,y+".position",m,"pos",s),n(Io,y+".quaternion",m,"rot",s),n(Ba,y+".scale",m,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oa;case"vector":case"vector2":case"vector3":case"vector4":return Ba;case"color":return A_;case"quaternion":return Io;case"bool":case"boolean":return Oo;case"string":return Bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function QE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JE(r.type);if(r.times===void 0){const t=[],n=[];T_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Kc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ew{constructor(e,t,n){const s=this;let a=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const y=f[g],M=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null}}}const tw=new ew;class $r{constructor(e){this.manager=e!==void 0?e:tw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$r.DEFAULT_MATERIAL_NAME="__DEFAULT";const nr={};class nw extends Error{constructor(e,t){super(e),this.response=t}}class b_ extends $r{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Kc.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(nr[e]!==void 0){nr[e].push({onLoad:t,onProgress:n,onError:s});return}nr[e]=[],nr[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=nr[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=m?parseInt(m):0,M=y!==0;let E=0;const x=new ReadableStream({start(_){C();function C(){g.read().then(({done:w,value:T})=>{if(w)_.close();else{E+=T.byteLength;const U=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let I=0,N=p.length;I<N;I++){const B=p[I];B.onProgress&&B.onProgress(U)}_.enqueue(T),C()}},w=>{_.error(w)})}}});return new Response(x)}else throw new nw(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return f.arrayBuffer().then(M=>y.decode(M))}}}).then(f=>{Kc.add(e,f);const p=nr[e];delete nr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=nr[e];if(p===void 0)throw this.manager.itemError(e),f;delete nr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iw extends $r{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Kc.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Na("img");function d(){p(),Kc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(g){p(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class C_ extends $r{constructor(e){super(e)}load(e,t,n,s){const a=new Tn,c=new iw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Ya extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class R_ extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xh=new Ke,B0=new H,z0=new H;class ip{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;B0.setFromMatrixPosition(e.matrixWorld),t.position.copy(B0),z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(z0),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rw extends ip{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rp extends Ya{constructor(e,t,n=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new rw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const V0=new Ke,Ta=new H,Sh=new H;class sw extends ip{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ta),Sh.copy(n.position),Sh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sh),n.updateMatrixWorld(),s.makeTranslation(-Ta.x,-Ta.y,-Ta.z),V0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V0)}}class Zc extends Ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class P_ extends y_{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ow extends ip{constructor(){super(new P_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new ow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lu extends Ya{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aw{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const op="\\[\\]\\.:\\/",cw=new RegExp("["+op+"]","g"),ap="[^"+op+"]",uw="[^"+op.replace("\\.","")+"]",dw=/((?:WC+[\/:])*)/.source.replace("WC",ap),hw=/(WCOD+)?/.source.replace("WCOD",uw),fw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ap),pw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ap),mw=new RegExp("^"+dw+hw+fw+pw+"$"),gw=["material","materials","bones","map"];class vw{constructor(e,t,n){const s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cw,"")}static parseTrackName(e){const t=mw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);gw.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=n(u.children);if(d)return d}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===f){f=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[s];if(c===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=vw;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class H0{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const G0=new H;class L_ extends Bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new fn,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let c=0,u=1,d=32;c<d;c++,u++){const f=c/d*Math.PI*2,p=u/d*Math.PI*2;s.push(Math.cos(f),Math.sin(f),1,Math.cos(p),Math.sin(p),1)}n.setAttribute("position",new Ft(s,3));const a=new ru({fog:!1,toneMapped:!1});this.cone=new ME(n,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),G0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(G0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const _w=new H,W0=new Ze,j0=new Ze;class D_ extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new tp(t);s.rotateY(Math.PI*.5),this.material=new Xa({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const a=s.getAttribute("position"),c=new Float32Array(a.count*3);s.setAttribute("color",new Qn(c,3)),this.add(new hn(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");W0.copy(this.light.color),j0.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const a=n<s/2?W0:j0;t.setXYZ(n,a.r,a.g,a.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(_w.setFromMatrixPosition(this.light.matrixWorld).negate())}}const X0=new H,Cc=new H,$0=new H;class I_ extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new fn;s.setAttribute("position",new Ft([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new ru({fog:!1,toneMapped:!1});this.lightPlane=new qc(s,a),this.add(this.lightPlane),s=new fn,s.setAttribute("position",new Ft([0,0,0,0,0,1],3)),this.targetLine=new qc(s,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),X0.setFromMatrixPosition(this.light.matrixWorld),Cc.setFromMatrixPosition(this.light.target.matrixWorld),$0.subVectors(Cc,X0),this.lightPlane.lookAt(Cc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Cc),this.targetLine.scale.z=$0.length()}}class yw extends Ts{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Y0(r,e,t,n){const s=xw(n);switch(t){case r_:return r*e;case o_:return r*e;case a_:return r*e*2;case l_:return r*e/s.components*s.byteLength;case Wf:return r*e/s.components*s.byteLength;case c_:return r*e*2/s.components*s.byteLength;case jf:return r*e*2/s.components*s.byteLength;case s_:return r*e*3/s.components*s.byteLength;case mi:return r*e*4/s.components*s.byteLength;case Xf:return r*e*4/s.components*s.byteLength;case Uc:case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:case ef:return Math.max(r,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(r,8)*Math.max(e,8)/2;case tf:case nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case df:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _f:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zc:case yf:case xf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case u_:case Sf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Mf:case Ef:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xw(r){switch(r){case ur:case t_:return{byteLength:1,components:1};case Ia:case n_:case ja:return{byteLength:2,components:1};case Hf:case Gf:return{byteLength:2,components:4};case Ms:case Vf:case Ui:return{byteLength:4,components:1};case i_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N_(){let r=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Sw(r){const e=new WeakMap;function t(u,d){const f=u.array,p=u.usage,g=f.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=r.SHORT;else if(f instanceof Uint32Array)y=r.UNSIGNED_INT;else if(f instanceof Int32Array)y=r.INT;else if(f instanceof Int8Array)y=r.BYTE;else if(f instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,d,f){const p=d.array,g=d.updateRanges;if(r.bindBuffer(f,u),g.length===0)r.bufferSubData(f,0,p);else{g.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<g.length;y++){const M=g[m],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,g[m]=E)}g.length=m+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];r.bufferSubData(f,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(r.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:a,update:c}}var Mw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ew=`#ifdef USE_ALPHAHASH
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
#endif`,ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Aw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cw=`#ifdef USE_AOMAP
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
#endif`,Rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pw=`#ifdef USE_BATCHING
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
#endif`,Lw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fw=`#ifdef USE_IRIDESCENCE
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
#endif`,Uw=`#ifdef USE_BUMPMAP
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
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jw=`#define PI 3.141592653589793
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
} // validated`,Xw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$w=`vec3 transformedNormal = objectNormal;
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
#endif`,Yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
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
}`,uT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
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
#endif`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yT=`PhysicalMaterial material;
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
#endif`,xT=`struct PhysicalMaterial {
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
}`,ST=`
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
#endif`,MT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LT=`#if defined( USE_POINTS_UV )
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
#endif`,DT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
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
#endif`,OT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WT=`#ifdef USE_NORMALMAP
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
#endif`,jT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oA=`float getShadowMask() {
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
}`,aA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
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
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,dA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
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
#endif`,gA=`#ifdef USE_TRANSMISSION
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`#include <common>
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
}`,CA=`#if DEPTH_PACKING == 3200
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
}`,RA=`#define DISTANCE
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
}`,PA=`#define DISTANCE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
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
}`,NA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,UA=`uniform vec3 diffuse;
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
}`,kA=`#define LAMBERT
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
}`,OA=`#define LAMBERT
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
}`,BA=`#define MATCAP
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
}`,zA=`#define MATCAP
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
}`,VA=`#define NORMAL
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
}`,HA=`#define NORMAL
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
}`,GA=`#define PHONG
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
}`,WA=`#define PHONG
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
}`,jA=`#define STANDARD
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
}`,XA=`#define STANDARD
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
}`,$A=`#define TOON
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
}`,YA=`#define TOON
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
}`,qA=`uniform float size;
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
}`,KA=`uniform vec3 diffuse;
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
}`,ZA=`#include <common>
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
}`,JA=`uniform vec3 color;
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
}`,QA=`uniform float rotation;
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
}`,eb=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Mw,alphahash_pars_fragment:Ew,alphamap_fragment:ww,alphamap_pars_fragment:Tw,alphatest_fragment:Aw,alphatest_pars_fragment:bw,aomap_fragment:Cw,aomap_pars_fragment:Rw,batching_pars_vertex:Pw,batching_vertex:Lw,begin_vertex:Dw,beginnormal_vertex:Iw,bsdfs:Nw,iridescence_fragment:Fw,bumpmap_pars_fragment:Uw,clipping_planes_fragment:kw,clipping_planes_pars_fragment:Ow,clipping_planes_pars_vertex:Bw,clipping_planes_vertex:zw,color_fragment:Vw,color_pars_fragment:Hw,color_pars_vertex:Gw,color_vertex:Ww,common:jw,cube_uv_reflection_fragment:Xw,defaultnormal_vertex:$w,displacementmap_pars_vertex:Yw,displacementmap_vertex:qw,emissivemap_fragment:Kw,emissivemap_pars_fragment:Zw,colorspace_fragment:Jw,colorspace_pars_fragment:Qw,envmap_fragment:eT,envmap_common_pars_fragment:tT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:rT,fog_vertex:sT,fog_pars_vertex:oT,fog_fragment:aT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_pars_fragment:uT,lights_lambert_fragment:dT,lights_lambert_pars_fragment:hT,lights_pars_begin:fT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:vT,lights_phong_pars_fragment:_T,lights_physical_fragment:yT,lights_physical_pars_fragment:xT,lights_fragment_begin:ST,lights_fragment_maps:MT,lights_fragment_end:ET,logdepthbuf_fragment:wT,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:bT,map_fragment:CT,map_pars_fragment:RT,map_particle_fragment:PT,map_particle_pars_fragment:LT,metalnessmap_fragment:DT,metalnessmap_pars_fragment:IT,morphinstance_vertex:NT,morphcolor_vertex:FT,morphnormal_vertex:UT,morphtarget_pars_vertex:kT,morphtarget_vertex:OT,normal_fragment_begin:BT,normal_fragment_maps:zT,normal_pars_fragment:VT,normal_pars_vertex:HT,normal_vertex:GT,normalmap_pars_fragment:WT,clearcoat_normal_fragment_begin:jT,clearcoat_normal_fragment_maps:XT,clearcoat_pars_fragment:$T,iridescence_pars_fragment:YT,opaque_fragment:qT,packing:KT,premultiplied_alpha_fragment:ZT,project_vertex:JT,dithering_fragment:QT,dithering_pars_fragment:eA,roughnessmap_fragment:tA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:rA,shadowmap_vertex:sA,shadowmask_pars_fragment:oA,skinbase_vertex:aA,skinning_pars_vertex:lA,skinning_vertex:cA,skinnormal_vertex:uA,specularmap_fragment:dA,specularmap_pars_fragment:hA,tonemapping_fragment:fA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:vA,uv_pars_vertex:_A,uv_vertex:yA,worldpos_vertex:xA,background_vert:SA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:wA,cube_vert:TA,cube_frag:AA,depth_vert:bA,depth_frag:CA,distanceRGBA_vert:RA,distanceRGBA_frag:PA,equirect_vert:LA,equirect_frag:DA,linedashed_vert:IA,linedashed_frag:NA,meshbasic_vert:FA,meshbasic_frag:UA,meshlambert_vert:kA,meshlambert_frag:OA,meshmatcap_vert:BA,meshmatcap_frag:zA,meshnormal_vert:VA,meshnormal_frag:HA,meshphong_vert:GA,meshphong_frag:WA,meshphysical_vert:jA,meshphysical_frag:XA,meshtoon_vert:$A,meshtoon_frag:YA,points_vert:qA,points_frag:KA,shadow_vert:ZA,shadow_frag:JA,sprite_vert:QA,sprite_frag:eb},Le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ni={basic:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Hn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Hn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Hn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Hn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Hn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Hn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Hn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Hn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Hn([Le.common,Le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Hn([Le.lights,Le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ni.physical={uniforms:Hn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Rc={r:0,b:0,g:0},gs=new dn,tb=new Ke;function nb(r,e,t,n,s,a,c){const u=new Ze(0);let d=a===!0?0:1,f,p,g=null,m=0,y=null;function M(w){let T=w.isScene===!0?w.background:null;return T&&T.isTexture&&(T=(w.backgroundBlurriness>0?t:e).get(T)),T}function E(w){let T=!1;const U=M(w);U===null?_(u,d):U&&U.isColor&&(_(U,1),T=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(w,T){const U=M(T);U&&(U.isCubeTexture||U.mapping===tu)?(p===void 0&&(p=new hn(new $a(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:Do(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),gs.copy(T.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(gs)),p.material.toneMapped=ft.getTransfer(U.colorSpace)!==kt,(g!==U||m!==U.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,m=U.version,y=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(f===void 0&&(f=new hn(new ko(2,2),new Xr({name:"BackgroundMaterial",uniforms:Do(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=U,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=ft.getTransfer(U.colorSpace)!==kt,U.matrixAutoUpdate===!0&&U.updateMatrix(),f.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||m!==U.version||y!==r.toneMapping)&&(f.material.needsUpdate=!0,g=U,m=U.version,y=r.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function _(w,T){w.getRGB(Rc,__(r)),n.buffers.color.setClear(Rc.r,Rc.g,Rc.b,T,c)}function C(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(w,T=1){u.set(w),d=T,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,_(u,d)},render:E,addToRenderList:x,dispose:C}}function ib(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=m(null);let a=s,c=!1;function u(A,F,q,Z,j){let ee=!1;const J=g(Z,q,F);a!==J&&(a=J,f(a.object)),ee=y(A,Z,q,j),ee&&M(A,Z,q,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,T(A,F,q,Z),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return r.createVertexArray()}function f(A){return r.bindVertexArray(A)}function p(A){return r.deleteVertexArray(A)}function g(A,F,q){const Z=q.wireframe===!0;let j=n[A.id];j===void 0&&(j={},n[A.id]=j);let ee=j[F.id];ee===void 0&&(ee={},j[F.id]=ee);let J=ee[Z];return J===void 0&&(J=m(d()),ee[Z]=J),J}function m(A){const F=[],q=[],Z=[];for(let j=0;j<t;j++)F[j]=0,q[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Z,object:A,attributes:{},index:null}}function y(A,F,q,Z){const j=a.attributes,ee=F.attributes;let J=0;const ne=q.getAttributes();for(const V in ne)if(ne[V].location>=0){const le=j[V];let O=ee[V];if(O===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),le===void 0||le.attribute!==O||O&&le.data!==O.data)return!0;J++}return a.attributesNum!==J||a.index!==Z}function M(A,F,q,Z){const j={},ee=F.attributes;let J=0;const ne=q.getAttributes();for(const V in ne)if(ne[V].location>=0){let le=ee[V];le===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const O={};O.attribute=le,le&&le.data&&(O.data=le.data),j[V]=O,J++}a.attributes=j,a.attributesNum=J,a.index=Z}function E(){const A=a.newAttributes;for(let F=0,q=A.length;F<q;F++)A[F]=0}function x(A){_(A,0)}function _(A,F){const q=a.newAttributes,Z=a.enabledAttributes,j=a.attributeDivisors;q[A]=1,Z[A]===0&&(r.enableVertexAttribArray(A),Z[A]=1),j[A]!==F&&(r.vertexAttribDivisor(A,F),j[A]=F)}function C(){const A=a.newAttributes,F=a.enabledAttributes;for(let q=0,Z=F.length;q<Z;q++)F[q]!==A[q]&&(r.disableVertexAttribArray(q),F[q]=0)}function w(A,F,q,Z,j,ee,J){J===!0?r.vertexAttribIPointer(A,F,q,j,ee):r.vertexAttribPointer(A,F,q,Z,j,ee)}function T(A,F,q,Z){E();const j=Z.attributes,ee=q.getAttributes(),J=F.defaultAttributeValues;for(const ne in ee){const V=ee[ne];if(V.location>=0){let Q=j[ne];if(Q===void 0&&(ne==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),ne==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),Q!==void 0){const le=Q.normalized,O=Q.itemSize,oe=e.get(Q);if(oe===void 0)continue;const Ae=oe.buffer,re=oe.type,he=oe.bytesPerElement,ve=re===r.INT||re===r.UNSIGNED_INT||Q.gpuType===Vf;if(Q.isInterleavedBufferAttribute){const pe=Q.data,be=pe.stride,Ie=Q.offset;if(pe.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)_(V.location+qe,pe.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let qe=0;qe<V.locationSize;qe++)x(V.location+qe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let qe=0;qe<V.locationSize;qe++)w(V.location+qe,O/V.locationSize,re,le,be*he,(Ie+O/V.locationSize*qe)*he,ve)}else{if(Q.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)_(V.location+pe,Q.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pe=0;pe<V.locationSize;pe++)x(V.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let pe=0;pe<V.locationSize;pe++)w(V.location+pe,O/V.locationSize,re,le,O*he,O/V.locationSize*pe*he,ve)}}else if(J!==void 0){const le=J[ne];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(V.location,le);break;case 3:r.vertexAttrib3fv(V.location,le);break;case 4:r.vertexAttrib4fv(V.location,le);break;default:r.vertexAttrib1fv(V.location,le)}}}}C()}function U(){B();for(const A in n){const F=n[A];for(const q in F){const Z=F[q];for(const j in Z)p(Z[j].object),delete Z[j];delete F[q]}delete n[A]}}function I(A){if(n[A.id]===void 0)return;const F=n[A.id];for(const q in F){const Z=F[q];for(const j in Z)p(Z[j].object),delete Z[j];delete F[q]}delete n[A.id]}function N(A){for(const F in n){const q=n[F];if(q[A.id]===void 0)continue;const Z=q[A.id];for(const j in Z)p(Z[j].object),delete Z[j];delete q[A.id]}}function B(){R(),c=!0,a!==s&&(a=s,f(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:B,resetDefaultState:R,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:x,disableUnusedAttributes:C}}function rb(r,e,t){let n;function s(f){n=f}function a(f,p){r.drawArrays(n,f,p),t.update(p,n,1)}function c(f,p,g){g!==0&&(r.drawArraysInstanced(n,f,p,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,g);let y=0;for(let M=0;M<g;M++)y+=p[M];t.update(y,n,1)}function d(f,p,g,m){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<f.length;M++)c(f[M],p[M],m[M]);else{y.multiDrawArraysInstancedWEBGL(n,f,0,p,0,m,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*m[E];t.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sb(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==mi&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const B=N===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ur&&n.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ui&&!B)}function d(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=d(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:U,maxSamples:I}}function ob(r){const e=this;let t=null,n=0,s=!1,a=!1;const c=new Vr,u=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||n!==0||s;return s=m,n=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const M=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,_=r.get(g);if(!s||M===null||M.length===0||a&&!x)a?p(null):f();else{const C=a?0:n,w=C*4;let T=_.clippingState||null;d.value=T,T=p(M,m,w,y);for(let U=0;U!==w;++U)T[U]=t[U];_.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,y,M){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const _=y+E*4,C=m.matrixWorldInverse;u.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,T=y;w!==E;++w,T+=4)c.copy(g[w]).applyMatrix4(C,u),c.normal.toArray(x,T),x[T+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function ab(r){let e=new WeakMap;function t(c,u){return u===Gc?c.mapping=Ao:u===qh&&(c.mapping=bo),c}function n(c){if(c&&c.isTexture){const u=c.mapping;if(u===Gc||u===qh)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new mE(d.height);return f.fromEquirectangularTexture(r,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const _o=4,q0=[.125,.215,.35,.446,.526,.582],xs=20,Mh=new P_,K0=new Ze;let Eh=null,wh=0,Th=0,Ah=!1;const _s=(1+Math.sqrt(5))/2,uo=1/_s,Z0=[new H(-_s,uo,0),new H(_s,uo,0),new H(-uo,0,_s),new H(uo,0,_s),new H(0,_s,-uo),new H(0,_s,uo),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class J0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Eh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,wh,Th),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Pc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:ja,format:mi,colorSpace:Po,depthBuffer:!1},s=Q0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q0(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lb(a)),this._blurMaterial=cb(a,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Mh)}_sceneToCubeUV(e,t,n,s){const u=new wn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(K0),p.toneMapping=Wr,p.autoClear=!1;const y=new Xa({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),M=new hn(new $a,y);let E=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,E=!0):(y.color.copy(K0),E=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(u.up.set(0,d[_],0),u.lookAt(f[_],0,0)):C===1?(u.up.set(0,0,d[_]),u.lookAt(0,f[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,f[_]));const w=this._cubeSize;Pc(s,C*w,_>2?w:0,w,w),p.setRenderTarget(s),E&&p.render(M,u),p.render(e,u)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=m,p.autoClear=g,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ao||e.mapping===bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new hn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Pc(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,Mh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Z0[(s-a-1)%Z0.length];this._blur(e,a-1,a,c,u)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new hn(this._lodPlanes[s],f),m=f.uniforms,y=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*xs-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):xs;x>xs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xs}`);const _=[];let C=0;for(let N=0;N<xs;++N){const B=N/E,R=Math.exp(-B*B/2);_.push(R),N===0?C+=R:N<x&&(C+=2*R)}for(let N=0;N<_.length;N++)_[N]=_[N]/C;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:w}=this;m.dTheta.value=M,m.mipInt.value=w-n;const T=this._sizeLods[s],U=3*T*(s>w-_o?s-w+_o:0),I=4*(this._cubeSize-T);Pc(t,U,I,3*T,2*T),d.setRenderTarget(t),d.render(g,Mh)}}function lb(r){const e=[],t=[],n=[];let s=r;const a=r-_o+1+q0.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let d=1/u;c>r-_o?d=q0[c-r+_o-1]:c===0&&(d=0),n.push(d);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,M=6,E=3,x=2,_=1,C=new Float32Array(E*M*y),w=new Float32Array(x*M*y),T=new Float32Array(_*M*y);for(let I=0;I<y;I++){const N=I%3*2/3-1,B=I>2?0:-1,R=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];C.set(R,E*M*I),w.set(m,x*M*I);const A=[I,I,I,I,I,I];T.set(A,_*M*I)}const U=new fn;U.setAttribute("position",new Qn(C,E)),U.setAttribute("uv",new Qn(w,x)),U.setAttribute("faceIndex",new Qn(T,_)),e.push(U),s>_o&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Q0(r,e,t){const n=new Es(r,e,t);return n.texture.mapping=tu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function cb(r,e,t){const n=new Float32Array(xs),s=new H(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lp(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function ev(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function tv(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function lp(){return`

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
	`}function ub(r){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===Gc||d===qh,p=d===Ao||d===bo;if(f||p){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return t===null&&(t=new J0(r)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return f&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new J0(r)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function db(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hb(r,e,t,n){const s={},a=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete s[m.id];const y=a.get(m);y&&(e.remove(y),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function d(g){const m=g.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER)}function f(g){const m=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const C=y.array;E=y.version;for(let w=0,T=C.length;w<T;w+=3){const U=C[w+0],I=C[w+1],N=C[w+2];m.push(U,I,I,N,N,U)}}else if(M!==void 0){const C=M.array;E=M.version;for(let w=0,T=C.length/3-1;w<T;w+=3){const U=w+0,I=w+1,N=w+2;m.push(U,I,I,N,N,U)}}else return;const x=new(h_(m)?v_:Yf)(m,1);x.version=E;const _=a.get(g);_&&e.remove(_),a.set(g,x)}function p(g){const m=a.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function fb(r,e,t){let n;function s(m){n=m}let a,c;function u(m){a=m.type,c=m.bytesPerElement}function d(m,y){r.drawElements(n,y,a,m*c),t.update(y,n,1)}function f(m,y,M){M!==0&&(r.drawElementsInstanced(n,y,a,m*c,M),t.update(y,n,M))}function p(m,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,m,0,M);let x=0;for(let _=0;_<M;_++)x+=y[_];t.update(x,n,1)}function g(m,y,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)f(m[_]/c,y[_],E[_]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,a,m,0,E,0,M);let _=0;for(let C=0;C<M;C++)_+=y[C]*E[C];t.update(_,n,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function pb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=u*(a/3);break;case r.LINES:t.lines+=u*(a/2);break;case r.LINE_STRIP:t.lines+=u*(a-1);break;case r.LINE_LOOP:t.lines+=u*a;break;case r.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mb(r,e,t){const n=new WeakMap,s=new Mt;function a(c,u,d){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(u);if(m===void 0||m.count!==g){let A=function(){B.dispose(),n.delete(u),u.removeEventListener("dispose",A)};var y=A;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let T=0;M===!0&&(T=1),E===!0&&(T=2),x===!0&&(T=3);let U=u.attributes.position.count*T,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*I*4*g),B=new p_(N,U,I,g);B.type=Ui,B.needsUpdate=!0;const R=T*4;for(let F=0;F<g;F++){const q=_[F],Z=C[F],j=w[F],ee=U*I*4*F;for(let J=0;J<q.count;J++){const ne=J*R;M===!0&&(s.fromBufferAttribute(q,J),N[ee+ne+0]=s.x,N[ee+ne+1]=s.y,N[ee+ne+2]=s.z,N[ee+ne+3]=0),E===!0&&(s.fromBufferAttribute(Z,J),N[ee+ne+4]=s.x,N[ee+ne+5]=s.y,N[ee+ne+6]=s.z,N[ee+ne+7]=0),x===!0&&(s.fromBufferAttribute(j,J),N[ee+ne+8]=s.x,N[ee+ne+9]=s.y,N[ee+ne+10]=s.z,N[ee+ne+11]=j.itemSize===4?s.w:1)}}m={count:g,texture:B,size:new nt(U,I)},n.set(u,m),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<f.length;x++)M+=f[x];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",f)}d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:a}}function gb(r,e,t,n){let s=new WeakMap;function a(d){const f=n.render.frame,p=d.geometry,g=e.get(d,p);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const m=d.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return g}function c(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const F_=new Tn,nv=new S_(1,1),U_=new p_,k_=new Q1,O_=new x_,iv=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),av=new Float32Array(4);function zo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=iv[s];if(a===void 0&&(a=new Float32Array(s),iv[s]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,r[c].toArray(a,u)}return a}function pn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cu(r,e){let t=rv[e];t===void 0&&(t=new Int32Array(e),rv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2fv(this.addr,e),mn(t,e)}}function yb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;r.uniform3fv(this.addr,e),mn(t,e)}}function xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4fv(this.addr,e),mn(t,e)}}function Sb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;av.set(n),r.uniformMatrix2fv(this.addr,!1,av),mn(t,n)}}function Mb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;ov.set(n),r.uniformMatrix3fv(this.addr,!1,ov),mn(t,n)}}function Eb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;sv.set(n),r.uniformMatrix4fv(this.addr,!1,sv),mn(t,n)}}function wb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2iv(this.addr,e),mn(t,e)}}function Ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;r.uniform3iv(this.addr,e),mn(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4iv(this.addr,e),mn(t,e)}}function Cb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;r.uniform2uiv(this.addr,e),mn(t,e)}}function Pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;r.uniform3uiv(this.addr,e),mn(t,e)}}function Lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;r.uniform4uiv(this.addr,e),mn(t,e)}}function Db(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(nv.compareFunction=d_,a=nv):a=F_,t.setTexture2D(e||a,s)}function Ib(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||k_,s)}function Nb(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||O_,s)}function Fb(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||U_,s)}function Ub(r){switch(r){case 5126:return vb;case 35664:return _b;case 35665:return yb;case 35666:return xb;case 35674:return Sb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return wb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return bb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Fb}}function kb(r,e){r.uniform1fv(this.addr,e)}function Ob(r,e){const t=zo(e,this.size,2);r.uniform2fv(this.addr,t)}function Bb(r,e){const t=zo(e,this.size,3);r.uniform3fv(this.addr,t)}function zb(r,e){const t=zo(e,this.size,4);r.uniform4fv(this.addr,t)}function Vb(r,e){const t=zo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hb(r,e){const t=zo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Gb(r,e){const t=zo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wb(r,e){r.uniform1iv(this.addr,e)}function jb(r,e){r.uniform2iv(this.addr,e)}function Xb(r,e){r.uniform3iv(this.addr,e)}function $b(r,e){r.uniform4iv(this.addr,e)}function Yb(r,e){r.uniform1uiv(this.addr,e)}function qb(r,e){r.uniform2uiv(this.addr,e)}function Kb(r,e){r.uniform3uiv(this.addr,e)}function Zb(r,e){r.uniform4uiv(this.addr,e)}function Jb(r,e,t){const n=this.cache,s=e.length,a=cu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||F_,a[c])}function Qb(r,e,t){const n=this.cache,s=e.length,a=cu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||k_,a[c])}function eC(r,e,t){const n=this.cache,s=e.length,a=cu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||O_,a[c])}function tC(r,e,t){const n=this.cache,s=e.length,a=cu(t,s);pn(n,a)||(r.uniform1iv(this.addr,a),mn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||U_,a[c])}function nC(r){switch(r){case 5126:return kb;case 35664:return Ob;case 35665:return Bb;case 35666:return zb;case 35674:return Vb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return jb;case 35668:case 35672:return Xb;case 35669:case 35673:return $b;case 5125:return Yb;case 36294:return qb;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return eC;case 36289:case 36303:case 36311:case 36292:return tC}}class iC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}}class rC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nC(t.type)}}class sC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],n)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function lv(r,e){r.seq.push(e),r.map[e.id]=e}function oC(r,e,t){const n=r.name,s=n.length;for(bh.lastIndex=0;;){const a=bh.exec(n),c=bh.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===s){lv(t,f===void 0?new iC(u,r,e):new rC(u,r,e));break}else{let g=t.map[u];g===void 0&&(g=new sC(u),lv(t,g)),t=g}}}class Vc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);oC(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function cv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const aC=37297;let lC=0;function cC(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}const uv=new ut;function uC(r){ft._getMatrix(uv,ft.workingColorSpace,r);const e=`mat3( ${uv.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case jc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function dv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+cC(r.getShaderSource(e),c)}else return s}function dC(r,e){const t=uC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hC(r,e){let t;switch(e){case c1:t="Linear";break;case u1:t="Reinhard";break;case d1:t="Cineon";break;case zf:t="ACESFilmic";break;case f1:t="AgX";break;case p1:t="Neutral";break;case h1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lc=new H;function fC(){ft.getLuminanceCoefficients(Lc);const r=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function mC(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gC(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),c=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:r.getAttribLocation(e,c),locationSize:u}}return t}function Aa(r){return r!==""}function hv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(r){return r.replace(vC,yC)}const _C=new Map;function yC(r,e){let t=ht[e];if(t===void 0){const n=_C.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cf(t)}const xC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(r){return r.replace(xC,SC)}function SC(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function mv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function MC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function EC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ao:case bo:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wC(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function TC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case eu:e="ENVMAP_BLENDING_MULTIPLY";break;case a1:e="ENVMAP_BLENDING_MIX";break;case l1:e="ENVMAP_BLENDING_ADD";break}return e}function AC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bC(r,e,t,n){const s=r.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=MC(t),f=EC(t),p=wC(t),g=TC(t),m=AC(t),y=pC(t),M=mC(a),E=s.createProgram();let x,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Aa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Aa).join(`
`),_.length>0&&(_+=`
`)):(x=[mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),_=[mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Wr?hC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,dC("linearToOutputTexel",t.outputColorSpace),fC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),c=Cf(c),c=hv(c,t),c=fv(c,t),u=Cf(u),u=hv(u,t),u=fv(u,t),c=pv(c),u=pv(u),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===o0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=C+x+c,T=C+_+u,U=cv(s,s.VERTEX_SHADER,w),I=cv(s,s.FRAGMENT_SHADER,T);s.attachShader(E,U),s.attachShader(E,I),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(F){if(r.debug.checkShaderErrors){const q=s.getProgramInfoLog(E).trim(),Z=s.getShaderInfoLog(U).trim(),j=s.getShaderInfoLog(I).trim();let ee=!0,J=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,E,U,I);else{const ne=dv(s,U,"vertex"),V=dv(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+ne+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Z===""||j==="")&&(J=!1);J&&(F.diagnostics={runnable:ee,programLog:q,vertexShader:{log:Z,prefix:x},fragmentShader:{log:j,prefix:_}})}s.deleteShader(U),s.deleteShader(I),B=new Vc(s,E),R=gC(s,E)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,aC)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=I,this}let CC=0;class RC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new PC(e),t.set(e,n)),n}}class PC{constructor(e){this.id=CC++,this.code=e,this.usedTimes=0}}function LC(r,e,t,n,s,a,c){const u=new m_,d=new RC,f=new Set,p=[],g=s.logarithmicDepthBuffer,m=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return f.add(R),R===0?"uv":`uv${R}`}function x(R,A,F,q,Z){const j=q.fog,ee=Z.geometry,J=R.isMeshStandardMaterial?q.environment:null,ne=(R.isMeshStandardMaterial?t:e).get(R.envMap||J),V=ne&&ne.mapping===tu?ne.image.height:null,Q=M[R.type];R.precision!==null&&(y=s.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const le=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,O=le!==void 0?le.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let Ae,re,he,ve;if(Q){const Tt=Ni[Q];Ae=Tt.vertexShader,re=Tt.fragmentShader}else Ae=R.vertexShader,re=R.fragmentShader,d.update(R),he=d.getVertexShaderID(R),ve=d.getFragmentShaderID(R);const pe=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Ie=Z.isInstancedMesh===!0,qe=Z.isBatchedMesh===!0,Lt=!!R.map,pt=!!R.matcap,It=!!ne,W=!!R.aoMap,Fn=!!R.lightMap,xt=!!R.bumpMap,vt=!!R.normalMap,Ye=!!R.displacementMap,Nt=!!R.emissiveMap,Xe=!!R.metalnessMap,k=!!R.roughnessMap,P=R.anisotropy>0,ae=R.clearcoat>0,_e=R.dispersion>0,xe=R.iridescence>0,me=R.sheen>0,We=R.transmission>0,Ce=P&&!!R.anisotropyMap,ke=ae&&!!R.clearcoatMap,mt=ae&&!!R.clearcoatNormalMap,we=ae&&!!R.clearcoatRoughnessMap,ze=xe&&!!R.iridescenceMap,Qe=xe&&!!R.iridescenceThicknessMap,it=me&&!!R.sheenColorMap,Ve=me&&!!R.sheenRoughnessMap,_t=!!R.specularMap,at=!!R.specularColorMap,Dt=!!R.specularIntensityMap,Y=We&&!!R.transmissionMap,Re=We&&!!R.thicknessMap,fe=!!R.gradientMap,ge=!!R.alphaMap,Ne=R.alphaTest>0,De=!!R.alphaHash,lt=!!R.extensions;let Ht=Wr;R.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const an={shaderID:Q,shaderType:R.type,shaderName:R.name,vertexShader:Ae,fragmentShader:re,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:qe,batchingColor:qe&&Z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Z.instanceColor!==null,instancingMorph:Ie&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Po,alphaToCoverage:!!R.alphaToCoverage,map:Lt,matcap:pt,envMap:It,envMapMode:It&&ne.mapping,envMapCubeUVHeight:V,aoMap:W,lightMap:Fn,bumpMap:xt,normalMap:vt,displacementMap:m&&Ye,emissiveMap:Nt,normalMapObjectSpace:vt&&R.normalMapType===x1,normalMapTangentSpace:vt&&R.normalMapType===nu,metalnessMap:Xe,roughnessMap:k,anisotropy:P,anisotropyMap:Ce,clearcoat:ae,clearcoatMap:ke,clearcoatNormalMap:mt,clearcoatRoughnessMap:we,dispersion:_e,iridescence:xe,iridescenceMap:ze,iridescenceThicknessMap:Qe,sheen:me,sheenColorMap:it,sheenRoughnessMap:Ve,specularMap:_t,specularColorMap:at,specularIntensityMap:Dt,transmission:We,transmissionMap:Y,thicknessMap:Re,gradientMap:fe,opaque:R.transparent===!1&&R.blending===So&&R.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ne,alphaHash:De,combine:R.combine,mapUv:Lt&&E(R.map.channel),aoMapUv:W&&E(R.aoMap.channel),lightMapUv:Fn&&E(R.lightMap.channel),bumpMapUv:xt&&E(R.bumpMap.channel),normalMapUv:vt&&E(R.normalMap.channel),displacementMapUv:Ye&&E(R.displacementMap.channel),emissiveMapUv:Nt&&E(R.emissiveMap.channel),metalnessMapUv:Xe&&E(R.metalnessMap.channel),roughnessMapUv:k&&E(R.roughnessMap.channel),anisotropyMapUv:Ce&&E(R.anisotropyMap.channel),clearcoatMapUv:ke&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:mt&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:it&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(R.sheenRoughnessMap.channel),specularMapUv:_t&&E(R.specularMap.channel),specularColorMapUv:at&&E(R.specularColorMap.channel),specularIntensityMapUv:Dt&&E(R.specularIntensityMap.channel),transmissionMapUv:Y&&E(R.transmissionMap.channel),thicknessMapUv:Re&&E(R.thicknessMap.channel),alphaMapUv:ge&&E(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(vt||P),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(Lt||ge),fog:!!j,useFog:R.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:be,skinning:Z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Lt&&R.map.isVideoTexture===!0&&ft.getTransfer(R.map.colorSpace)===kt,decodeVideoTextureEmissive:Nt&&R.emissiveMap.isVideoTexture===!0&&ft.getTransfer(R.emissiveMap.colorSpace)===kt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===rr,flipSided:R.side===Jn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:lt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&R.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return an.vertexUv1s=f.has(1),an.vertexUv2s=f.has(2),an.vertexUv3s=f.has(3),f.clear(),an}function _(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)A.push(F),A.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(C(A,R),w(A,R),A.push(r.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function C(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function w(R,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),R.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reverseDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),R.push(u.mask)}function T(R){const A=M[R.type];let F;if(A){const q=Ni[A];F=dE.clone(q.uniforms)}else F=R.uniforms;return F}function U(R,A){let F;for(let q=0,Z=p.length;q<Z;q++){const j=p[q];if(j.cacheKey===A){F=j,++F.usedTimes;break}}return F===void 0&&(F=new bC(r,A,R,a),p.push(F)),F}function I(R){if(--R.usedTimes===0){const A=p.indexOf(R);p[A]=p[p.length-1],p.pop(),R.destroy()}}function N(R){d.remove(R)}function B(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:T,acquireProgram:U,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:B}}function DC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function n(c){r.delete(c)}function s(c,u,d){r.get(c)[u]=d}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function IC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vv(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(g,m,y,M,E,x){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:m,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:x},r[e]=_):(_.id=g.id,_.object=g,_.geometry=m,_.material=y,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=x),e++,_}function u(g,m,y,M,E,x){const _=c(g,m,y,M,E,x);y.transmission>0?n.push(_):y.transparent===!0?s.push(_):t.push(_)}function d(g,m,y,M,E,x){const _=c(g,m,y,M,E,x);y.transmission>0?n.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function f(g,m){t.length>1&&t.sort(g||IC),n.length>1&&n.sort(m||gv),s.length>1&&s.sort(m||gv)}function p(){for(let g=e,m=r.length;g<m;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:u,unshift:d,finish:p,sort:f}}function NC(){let r=new WeakMap;function e(n,s){const a=r.get(n);let c;return a===void 0?(c=new vv,r.set(n,[c])):s>=a.length?(c=new vv,a.push(c)):c=a[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function FC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function UC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kC=0;function OC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function BC(r){const e=new FC,t=UC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);const s=new H,a=new Ke,c=new Ke;function u(f){let p=0,g=0,m=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let y=0,M=0,E=0,x=0,_=0,C=0,w=0,T=0,U=0,I=0,N=0;f.sort(OC);for(let R=0,A=f.length;R<A;R++){const F=f[R],q=F.color,Z=F.intensity,j=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=q.r*Z,g+=q.g*Z,m+=q.b*Z;else if(F.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(F.sh.coefficients[J],Z);N++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ne=F.shadow,V=t.get(F);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.directionalShadow[y]=V,n.directionalShadowMap[y]=ee,n.directionalShadowMatrix[y]=F.shadow.matrix,C++}n.directional[y]=J,y++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(q).multiplyScalar(Z),J.distance=j,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,n.spot[E]=J;const ne=F.shadow;if(F.map&&(n.spotLightMap[U]=F.map,U++,ne.updateMatrices(F),F.castShadow&&I++),n.spotLightMatrix[E]=ne.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.spotShadow[E]=V,n.spotShadowMap[E]=ee,T++}E++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(q).multiplyScalar(Z),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),n.rectArea[x]=J,x++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const ne=F.shadow,V=t.get(F);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,n.pointShadow[M]=V,n.pointShadowMap[M]=ee,n.pointShadowMatrix[M]=F.shadow.matrix,w++}n.point[M]=J,M++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(Z),J.groundColor.copy(F.groundColor).multiplyScalar(Z),n.hemi[_]=J,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const B=n.hash;(B.directionalLength!==y||B.pointLength!==M||B.spotLength!==E||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==C||B.numPointShadows!==w||B.numSpotShadows!==T||B.numSpotMaps!==U||B.numLightProbes!==N)&&(n.directional.length=y,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+U-I,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=N,B.directionalLength=y,B.pointLength=M,B.spotLength=E,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=C,B.numPointShadows=w,B.numSpotShadows=T,B.numSpotMaps=U,B.numLightProbes=N,n.version=kC++)}function d(f,p){let g=0,m=0,y=0,M=0,E=0;const x=p.matrixWorldInverse;for(let _=0,C=f.length;_<C;_++){const w=f[_];if(w.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),g++}else if(w.isSpotLight){const T=n.spot[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),y++}else if(w.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),c.identity(),a.copy(w.matrixWorld),a.premultiply(x),c.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),M++}else if(w.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const T=n.hemi[E];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),E++}}}return{setup:u,setupView:d,state:n}}function _v(r){const e=new BC(r),t=[],n=[];function s(p){f.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function c(p){n.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function zC(r){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new _v(r),e.set(s,[u])):a>=c.length?(u=new _v(r),c.push(u)):u=c[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const VC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HC=`uniform sampler2D shadow_pass;
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
}`;function GC(r,e,t){let n=new Zf;const s=new nt,a=new nt,c=new Mt,u=new GE({depthPacking:y1}),d=new WE,f={},p=t.maxTextureSize,g={[jr]:Jn,[Jn]:jr,[rr]:rr},m=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:VC,fragmentShader:HC}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new fn;M.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new hn(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let _=this.type;this.render=function(I,N,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const R=r.getRenderTarget(),A=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Gr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Z=_!==ir&&this.type===ir,j=_===ir&&this.type!==ir;for(let ee=0,J=I.length;ee<J;ee++){const ne=I[ee],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();if(s.multiply(Q),a.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/Q.x),s.x=a.x*Q.x,V.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/Q.y),s.y=a.y*Q.y,V.mapSize.y=a.y)),V.map===null||Z===!0||j===!0){const O=this.type!==ir?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new Es(s.x,s.y,O),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const le=V.getViewportCount();for(let O=0;O<le;O++){const oe=V.getViewport(O);c.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),q.viewport(c),V.updateMatrices(ne,O),n=V.getFrustum(),T(N,B,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===ir&&C(V,B),V.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(R,A,F)};function C(I,N){const B=e.update(E);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Es(s.x,s.y)),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(N,null,B,m,E,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(N,null,B,y,E,null)}function w(I,N,B,R){let A=null;const F=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)A=F;else if(A=B.isPointLight===!0?d:u,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const q=A.uuid,Z=N.uuid;let j=f[q];j===void 0&&(j={},f[q]=j);let ee=j[Z];ee===void 0&&(ee=A.clone(),j[Z]=ee,N.addEventListener("dispose",U)),A=ee}if(A.visible=N.visible,A.wireframe=N.wireframe,R===ir?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:g[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=r.properties.get(A);q.light=B}return A}function T(I,N,B,R,A){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===ir)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const Z=e.update(I),j=I.material;if(Array.isArray(j)){const ee=Z.groups;for(let J=0,ne=ee.length;J<ne;J++){const V=ee[J],Q=j[V.materialIndex];if(Q&&Q.visible){const le=w(I,Q,R,A);I.onBeforeShadow(r,I,N,B,Z,le,V),r.renderBufferDirect(B,null,Z,le,I,V),I.onAfterShadow(r,I,N,B,Z,le,V)}}}else if(j.visible){const ee=w(I,j,R,A);I.onBeforeShadow(r,I,N,B,Z,ee,null),r.renderBufferDirect(B,null,Z,ee,I,null),I.onAfterShadow(r,I,N,B,Z,ee,null)}}const q=I.children;for(let Z=0,j=q.length;Z<j;Z++)T(q[Z],N,B,R,A)}function U(I){I.target.removeEventListener("dispose",U);for(const B in f){const R=f[B],A=I.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const WC={[Hh]:Gh,[Wh]:$h,[jh]:Yh,[To]:Xh,[Gh]:Hh,[$h]:Wh,[Yh]:jh,[Xh]:To};function jC(r,e){function t(){let Y=!1;const Re=new Mt;let fe=null;const ge=new Mt(0,0,0,0);return{setMask:function(Ne){fe!==Ne&&!Y&&(r.colorMask(Ne,Ne,Ne,Ne),fe=Ne)},setLocked:function(Ne){Y=Ne},setClear:function(Ne,De,lt,Ht,an){an===!0&&(Ne*=Ht,De*=Ht,lt*=Ht),Re.set(Ne,De,lt,Ht),ge.equals(Re)===!1&&(r.clearColor(Ne,De,lt,Ht),ge.copy(Re))},reset:function(){Y=!1,fe=null,ge.set(-1,0,0,0)}}}function n(){let Y=!1,Re=!1,fe=null,ge=null,Ne=null;return{setReversed:function(De){if(Re!==De){const lt=e.get("EXT_clip_control");Re?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const Ht=Ne;Ne=null,this.setClear(Ht)}Re=De},getReversed:function(){return Re},setTest:function(De){De?pe(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(De){fe!==De&&!Y&&(r.depthMask(De),fe=De)},setFunc:function(De){if(Re&&(De=WC[De]),ge!==De){switch(De){case Hh:r.depthFunc(r.NEVER);break;case Gh:r.depthFunc(r.ALWAYS);break;case Wh:r.depthFunc(r.LESS);break;case To:r.depthFunc(r.LEQUAL);break;case jh:r.depthFunc(r.EQUAL);break;case Xh:r.depthFunc(r.GEQUAL);break;case $h:r.depthFunc(r.GREATER);break;case Yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=De}},setLocked:function(De){Y=De},setClear:function(De){Ne!==De&&(Re&&(De=1-De),r.clearDepth(De),Ne=De)},reset:function(){Y=!1,fe=null,ge=null,Ne=null,Re=!1}}}function s(){let Y=!1,Re=null,fe=null,ge=null,Ne=null,De=null,lt=null,Ht=null,an=null;return{setTest:function(Tt){Y||(Tt?pe(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(Tt){Re!==Tt&&!Y&&(r.stencilMask(Tt),Re=Tt)},setFunc:function(Tt,Wn,Un){(fe!==Tt||ge!==Wn||Ne!==Un)&&(r.stencilFunc(Tt,Wn,Un),fe=Tt,ge=Wn,Ne=Un)},setOp:function(Tt,Wn,Un){(De!==Tt||lt!==Wn||Ht!==Un)&&(r.stencilOp(Tt,Wn,Un),De=Tt,lt=Wn,Ht=Un)},setLocked:function(Tt){Y=Tt},setClear:function(Tt){an!==Tt&&(r.clearStencil(Tt),an=Tt)},reset:function(){Y=!1,Re=null,fe=null,ge=null,Ne=null,De=null,lt=null,Ht=null,an=null}}}const a=new t,c=new n,u=new s,d=new WeakMap,f=new WeakMap;let p={},g={},m=new WeakMap,y=[],M=null,E=!1,x=null,_=null,C=null,w=null,T=null,U=null,I=null,N=new Ze(0,0,0),B=0,R=!1,A=null,F=null,q=null,Z=null,j=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=ne>=2);let Q=null,le={};const O=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Ae=new Mt().fromArray(O),re=new Mt().fromArray(oe);function he(Y,Re,fe,ge){const Ne=new Uint8Array(4),De=r.createTexture();r.bindTexture(Y,De),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let lt=0;lt<fe;lt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Re+lt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return De}const ve={};ve[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),ve[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ve[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(r.DEPTH_TEST),c.setFunc(To),xt(!1),vt(Kg),pe(r.CULL_FACE),W(Gr);function pe(Y){p[Y]!==!0&&(r.enable(Y),p[Y]=!0)}function be(Y){p[Y]!==!1&&(r.disable(Y),p[Y]=!1)}function Ie(Y,Re){return g[Y]!==Re?(r.bindFramebuffer(Y,Re),g[Y]=Re,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function qe(Y,Re){let fe=y,ge=!1;if(Y){fe=m.get(Re),fe===void 0&&(fe=[],m.set(Re,fe));const Ne=Y.textures;if(fe.length!==Ne.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let De=0,lt=Ne.length;De<lt;De++)fe[De]=r.COLOR_ATTACHMENT0+De;fe.length=Ne.length,ge=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,ge=!0);ge&&r.drawBuffers(fe)}function Lt(Y){return M!==Y?(r.useProgram(Y),M=Y,!0):!1}const pt={[ys]:r.FUNC_ADD,[WM]:r.FUNC_SUBTRACT,[jM]:r.FUNC_REVERSE_SUBTRACT};pt[XM]=r.MIN,pt[$M]=r.MAX;const It={[YM]:r.ZERO,[qM]:r.ONE,[KM]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[n1]:r.SRC_ALPHA_SATURATE,[e1]:r.DST_COLOR,[JM]:r.DST_ALPHA,[ZM]:r.ONE_MINUS_SRC_COLOR,[Vh]:r.ONE_MINUS_SRC_ALPHA,[t1]:r.ONE_MINUS_DST_COLOR,[QM]:r.ONE_MINUS_DST_ALPHA,[i1]:r.CONSTANT_COLOR,[r1]:r.ONE_MINUS_CONSTANT_COLOR,[s1]:r.CONSTANT_ALPHA,[o1]:r.ONE_MINUS_CONSTANT_ALPHA};function W(Y,Re,fe,ge,Ne,De,lt,Ht,an,Tt){if(Y===Gr){E===!0&&(be(r.BLEND),E=!1);return}if(E===!1&&(pe(r.BLEND),E=!0),Y!==GM){if(Y!==x||Tt!==R){if((_!==ys||T!==ys)&&(r.blendEquation(r.FUNC_ADD),_=ys,T=ys),Tt)switch(Y){case So:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zg:r.blendFunc(r.ONE,r.ONE);break;case Jg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case So:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}C=null,w=null,U=null,I=null,N.set(0,0,0),B=0,x=Y,R=Tt}return}Ne=Ne||Re,De=De||fe,lt=lt||ge,(Re!==_||Ne!==T)&&(r.blendEquationSeparate(pt[Re],pt[Ne]),_=Re,T=Ne),(fe!==C||ge!==w||De!==U||lt!==I)&&(r.blendFuncSeparate(It[fe],It[ge],It[De],It[lt]),C=fe,w=ge,U=De,I=lt),(Ht.equals(N)===!1||an!==B)&&(r.blendColor(Ht.r,Ht.g,Ht.b,an),N.copy(Ht),B=an),x=Y,R=!1}function Fn(Y,Re){Y.side===rr?be(r.CULL_FACE):pe(r.CULL_FACE);let fe=Y.side===Jn;Re&&(fe=!fe),xt(fe),Y.blending===So&&Y.transparent===!1?W(Gr):W(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),a.setMask(Y.colorWrite);const ge=Y.stencilWrite;u.setTest(ge),ge&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Nt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(Y){A!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),A=Y)}function vt(Y){Y!==VM?(pe(r.CULL_FACE),Y!==F&&(Y===Kg?r.cullFace(r.BACK):Y===HM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),F=Y}function Ye(Y){Y!==q&&(J&&r.lineWidth(Y),q=Y)}function Nt(Y,Re,fe){Y?(pe(r.POLYGON_OFFSET_FILL),(Z!==Re||j!==fe)&&(r.polygonOffset(Re,fe),Z=Re,j=fe)):be(r.POLYGON_OFFSET_FILL)}function Xe(Y){Y?pe(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function k(Y){Y===void 0&&(Y=r.TEXTURE0+ee-1),Q!==Y&&(r.activeTexture(Y),Q=Y)}function P(Y,Re,fe){fe===void 0&&(Q===null?fe=r.TEXTURE0+ee-1:fe=Q);let ge=le[fe];ge===void 0&&(ge={type:void 0,texture:void 0},le[fe]=ge),(ge.type!==Y||ge.texture!==Re)&&(Q!==fe&&(r.activeTexture(fe),Q=fe),r.bindTexture(Y,Re||ve[Y]),ge.type=Y,ge.texture=Re)}function ae(){const Y=le[Q];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qe(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(Y){Ae.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Ae.copy(Y))}function Ve(Y){re.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),re.copy(Y))}function _t(Y,Re){let fe=f.get(Re);fe===void 0&&(fe=new WeakMap,f.set(Re,fe));let ge=fe.get(Y);ge===void 0&&(ge=r.getUniformBlockIndex(Re,Y.name),fe.set(Y,ge))}function at(Y,Re){const ge=f.get(Re).get(Y);d.get(Re)!==ge&&(r.uniformBlockBinding(Re,ge,Y.__bindingPointIndex),d.set(Re,ge))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},Q=null,le={},g={},m=new WeakMap,y=[],M=null,E=!1,x=null,_=null,C=null,w=null,T=null,U=null,I=null,N=new Ze(0,0,0),B=0,R=!1,A=null,F=null,q=null,Z=null,j=null,Ae.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:pe,disable:be,bindFramebuffer:Ie,drawBuffers:qe,useProgram:Lt,setBlending:W,setMaterial:Fn,setFlipSided:xt,setCullFace:vt,setLineWidth:Ye,setPolygonOffset:Nt,setScissorTest:Xe,activeTexture:k,bindTexture:P,unbindTexture:ae,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:ze,texImage3D:Qe,updateUBOMapping:_t,uniformBlockBinding:at,texStorage2D:mt,texStorage3D:we,texSubImage2D:me,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:it,viewport:Ve,reset:Dt}}function XC(r,e,t,n,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new nt,p=new WeakMap;let g;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(k,P){return y?new OffscreenCanvas(k,P):Na("canvas")}function E(k,P,ae){let _e=1;const xe=Xe(k);if((xe.width>ae||xe.height>ae)&&(_e=ae/Math.max(xe.width,xe.height)),_e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const me=Math.floor(_e*xe.width),We=Math.floor(_e*xe.height);g===void 0&&(g=M(me,We));const Ce=P?M(me,We):g;return Ce.width=me,Ce.height=We,Ce.getContext("2d").drawImage(k,0,0,me,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+me+"x"+We+")."),Ce}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),k;return k}function x(k){return k.generateMipmaps}function _(k){r.generateMipmap(k)}function C(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(k,P,ae,_e,xe=!1){if(k!==null){if(r[k]!==void 0)return r[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let me=P;if(P===r.RED&&(ae===r.FLOAT&&(me=r.R32F),ae===r.HALF_FLOAT&&(me=r.R16F),ae===r.UNSIGNED_BYTE&&(me=r.R8)),P===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.R8UI),ae===r.UNSIGNED_SHORT&&(me=r.R16UI),ae===r.UNSIGNED_INT&&(me=r.R32UI),ae===r.BYTE&&(me=r.R8I),ae===r.SHORT&&(me=r.R16I),ae===r.INT&&(me=r.R32I)),P===r.RG&&(ae===r.FLOAT&&(me=r.RG32F),ae===r.HALF_FLOAT&&(me=r.RG16F),ae===r.UNSIGNED_BYTE&&(me=r.RG8)),P===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.RG8UI),ae===r.UNSIGNED_SHORT&&(me=r.RG16UI),ae===r.UNSIGNED_INT&&(me=r.RG32UI),ae===r.BYTE&&(me=r.RG8I),ae===r.SHORT&&(me=r.RG16I),ae===r.INT&&(me=r.RG32I)),P===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(me=r.RGB16UI),ae===r.UNSIGNED_INT&&(me=r.RGB32UI),ae===r.BYTE&&(me=r.RGB8I),ae===r.SHORT&&(me=r.RGB16I),ae===r.INT&&(me=r.RGB32I)),P===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),ae===r.UNSIGNED_INT&&(me=r.RGBA32UI),ae===r.BYTE&&(me=r.RGBA8I),ae===r.SHORT&&(me=r.RGBA16I),ae===r.INT&&(me=r.RGBA32I)),P===r.RGB&&ae===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),P===r.RGBA){const We=xe?jc:ft.getTransfer(_e);ae===r.FLOAT&&(me=r.RGBA32F),ae===r.HALF_FLOAT&&(me=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(me=We===kt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function T(k,P){let ae;return k?P===null||P===Ms||P===Co?ae=r.DEPTH24_STENCIL8:P===Ui?ae=r.DEPTH32F_STENCIL8:P===Ia&&(ae=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Ms||P===Co?ae=r.DEPTH_COMPONENT24:P===Ui?ae=r.DEPTH_COMPONENT32F:P===Ia&&(ae=r.DEPTH_COMPONENT16),ae}function U(k,P){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==oi&&k.minFilter!==Fi?Math.log2(Math.max(P.width,P.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?P.mipmaps.length:1}function I(k){const P=k.target;P.removeEventListener("dispose",I),B(P),P.isVideoTexture&&p.delete(P)}function N(k){const P=k.target;P.removeEventListener("dispose",N),A(P)}function B(k){const P=n.get(k);if(P.__webglInit===void 0)return;const ae=k.source,_e=m.get(ae);if(_e){const xe=_e[P.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&R(k),Object.keys(_e).length===0&&m.delete(ae)}n.remove(k)}function R(k){const P=n.get(k);r.deleteTexture(P.__webglTexture);const ae=k.source,_e=m.get(ae);delete _e[P.__cacheKey],c.memory.textures--}function A(k){const P=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(P.__webglFramebuffer[_e]))for(let xe=0;xe<P.__webglFramebuffer[_e].length;xe++)r.deleteFramebuffer(P.__webglFramebuffer[_e][xe]);else r.deleteFramebuffer(P.__webglFramebuffer[_e]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[_e])}else{if(Array.isArray(P.__webglFramebuffer))for(let _e=0;_e<P.__webglFramebuffer.length;_e++)r.deleteFramebuffer(P.__webglFramebuffer[_e]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let _e=0;_e<P.__webglColorRenderbuffer.length;_e++)P.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[_e]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ae=k.textures;for(let _e=0,xe=ae.length;_e<xe;_e++){const me=n.get(ae[_e]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),c.memory.textures--),n.remove(ae[_e])}n.remove(k)}let F=0;function q(){F=0}function Z(){const k=F;return k>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),F+=1,k}function j(k){const P=[];return P.push(k.wrapS),P.push(k.wrapT),P.push(k.wrapR||0),P.push(k.magFilter),P.push(k.minFilter),P.push(k.anisotropy),P.push(k.internalFormat),P.push(k.format),P.push(k.type),P.push(k.generateMipmaps),P.push(k.premultiplyAlpha),P.push(k.flipY),P.push(k.unpackAlignment),P.push(k.colorSpace),P.join()}function ee(k,P){const ae=n.get(k);if(k.isVideoTexture&&Ye(k),k.isRenderTargetTexture===!1&&k.version>0&&ae.__version!==k.version){const _e=k.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(ae,k,P);return}}t.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+P)}function J(k,P){const ae=n.get(k);if(k.version>0&&ae.__version!==k.version){re(ae,k,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+P)}function ne(k,P){const ae=n.get(k);if(k.version>0&&ae.__version!==k.version){re(ae,k,P);return}t.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+P)}function V(k,P){const ae=n.get(k);if(k.version>0&&ae.__version!==k.version){he(ae,k,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+P)}const Q={[Da]:r.REPEAT,[sr]:r.CLAMP_TO_EDGE,[Kh]:r.MIRRORED_REPEAT},le={[oi]:r.NEAREST,[g1]:r.NEAREST_MIPMAP_NEAREST,[rc]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[qd]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},O={[S1]:r.NEVER,[b1]:r.ALWAYS,[M1]:r.LESS,[d_]:r.LEQUAL,[E1]:r.EQUAL,[A1]:r.GEQUAL,[w1]:r.GREATER,[T1]:r.NOTEQUAL};function oe(k,P){if(P.type===Ui&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Fi||P.magFilter===qd||P.magFilter===rc||P.magFilter===Ss||P.minFilter===Fi||P.minFilter===qd||P.minFilter===rc||P.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,Q[P.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,Q[P.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,Q[P.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,le[P.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,le[P.minFilter]),P.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,O[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===oi||P.minFilter!==rc&&P.minFilter!==Ss||P.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Ae(k,P){let ae=!1;k.__webglInit===void 0&&(k.__webglInit=!0,P.addEventListener("dispose",I));const _e=P.source;let xe=m.get(_e);xe===void 0&&(xe={},m.set(_e,xe));const me=j(P);if(me!==k.__cacheKey){xe[me]===void 0&&(xe[me]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ae=!0),xe[me].usedTimes++;const We=xe[k.__cacheKey];We!==void 0&&(xe[k.__cacheKey].usedTimes--,We.usedTimes===0&&R(P)),k.__cacheKey=me,k.__webglTexture=xe[me].texture}return ae}function re(k,P,ae){let _e=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(_e=r.TEXTURE_3D);const xe=Ae(k,P),me=P.source;t.bindTexture(_e,k.__webglTexture,r.TEXTURE0+ae);const We=n.get(me);if(me.version!==We.__version||xe===!0){t.activeTexture(r.TEXTURE0+ae);const Ce=ft.getPrimaries(ft.workingColorSpace),ke=P.colorSpace===Hr?null:ft.getPrimaries(P.colorSpace),mt=P.colorSpace===Hr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let we=E(P.image,!1,s.maxTextureSize);we=Nt(P,we);const ze=a.convert(P.format,P.colorSpace),Qe=a.convert(P.type);let it=w(P.internalFormat,ze,Qe,P.colorSpace,P.isVideoTexture);oe(_e,P);let Ve;const _t=P.mipmaps,at=P.isVideoTexture!==!0,Dt=We.__version===void 0||xe===!0,Y=me.dataReady,Re=U(P,we);if(P.isDepthTexture)it=T(P.format===Ro,P.type),Dt&&(at?t.texStorage2D(r.TEXTURE_2D,1,it,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,it,we.width,we.height,0,ze,Qe,null));else if(P.isDataTexture)if(_t.length>0){at&&Dt&&t.texStorage2D(r.TEXTURE_2D,Re,it,_t[0].width,_t[0].height);for(let fe=0,ge=_t.length;fe<ge;fe++)Ve=_t[fe],at?Y&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,ze,Qe,Ve.data):t.texImage2D(r.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,ze,Qe,Ve.data);P.generateMipmaps=!1}else at?(Dt&&t.texStorage2D(r.TEXTURE_2D,Re,it,we.width,we.height),Y&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,ze,Qe,we.data)):t.texImage2D(r.TEXTURE_2D,0,it,we.width,we.height,0,ze,Qe,we.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){at&&Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,it,_t[0].width,_t[0].height,we.depth);for(let fe=0,ge=_t.length;fe<ge;fe++)if(Ve=_t[fe],P.format!==mi)if(ze!==null)if(at){if(Y)if(P.layerUpdates.size>0){const Ne=Y0(Ve.width,Ve.height,P.format,P.type);for(const De of P.layerUpdates){const lt=Ve.data.subarray(De*Ne/Ve.data.BYTES_PER_ELEMENT,(De+1)*Ne/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,De,Ve.width,Ve.height,1,ze,lt)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,we.depth,ze,Ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,it,Ve.width,Ve.height,we.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Y&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,Ve.width,Ve.height,we.depth,ze,Qe,Ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,it,Ve.width,Ve.height,we.depth,0,ze,Qe,Ve.data)}else{at&&Dt&&t.texStorage2D(r.TEXTURE_2D,Re,it,_t[0].width,_t[0].height);for(let fe=0,ge=_t.length;fe<ge;fe++)Ve=_t[fe],P.format!==mi?ze!==null?at?Y&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Y&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,Ve.width,Ve.height,ze,Qe,Ve.data):t.texImage2D(r.TEXTURE_2D,fe,it,Ve.width,Ve.height,0,ze,Qe,Ve.data)}else if(P.isDataArrayTexture)if(at){if(Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,it,we.width,we.height,we.depth),Y)if(P.layerUpdates.size>0){const fe=Y0(we.width,we.height,P.format,P.type);for(const ge of P.layerUpdates){const Ne=we.data.subarray(ge*fe/we.data.BYTES_PER_ELEMENT,(ge+1)*fe/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,we.width,we.height,1,ze,Qe,Ne)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,Qe,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,it,we.width,we.height,we.depth,0,ze,Qe,we.data);else if(P.isData3DTexture)at?(Dt&&t.texStorage3D(r.TEXTURE_3D,Re,it,we.width,we.height,we.depth),Y&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,Qe,we.data)):t.texImage3D(r.TEXTURE_3D,0,it,we.width,we.height,we.depth,0,ze,Qe,we.data);else if(P.isFramebufferTexture){if(Dt)if(at)t.texStorage2D(r.TEXTURE_2D,Re,it,we.width,we.height);else{let fe=we.width,ge=we.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,it,fe,ge,0,ze,Qe,null),fe>>=1,ge>>=1}}else if(_t.length>0){if(at&&Dt){const fe=Xe(_t[0]);t.texStorage2D(r.TEXTURE_2D,Re,it,fe.width,fe.height)}for(let fe=0,ge=_t.length;fe<ge;fe++)Ve=_t[fe],at?Y&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ze,Qe,Ve):t.texImage2D(r.TEXTURE_2D,fe,it,ze,Qe,Ve);P.generateMipmaps=!1}else if(at){if(Dt){const fe=Xe(we);t.texStorage2D(r.TEXTURE_2D,Re,it,fe.width,fe.height)}Y&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Qe,we)}else t.texImage2D(r.TEXTURE_2D,0,it,ze,Qe,we);x(P)&&_(_e),We.__version=me.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version}function he(k,P,ae){if(P.image.length!==6)return;const _e=Ae(k,P),xe=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+ae);const me=n.get(xe);if(xe.version!==me.__version||_e===!0){t.activeTexture(r.TEXTURE0+ae);const We=ft.getPrimaries(ft.workingColorSpace),Ce=P.colorSpace===Hr?null:ft.getPrimaries(P.colorSpace),ke=P.colorSpace===Hr||We===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const mt=P.isCompressedTexture||P.image[0].isCompressedTexture,we=P.image[0]&&P.image[0].isDataTexture,ze=[];for(let ge=0;ge<6;ge++)!mt&&!we?ze[ge]=E(P.image[ge],!0,s.maxCubemapSize):ze[ge]=we?P.image[ge].image:P.image[ge],ze[ge]=Nt(P,ze[ge]);const Qe=ze[0],it=a.convert(P.format,P.colorSpace),Ve=a.convert(P.type),_t=w(P.internalFormat,it,Ve,P.colorSpace),at=P.isVideoTexture!==!0,Dt=me.__version===void 0||_e===!0,Y=xe.dataReady;let Re=U(P,Qe);oe(r.TEXTURE_CUBE_MAP,P);let fe;if(mt){at&&Dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,_t,Qe.width,Qe.height);for(let ge=0;ge<6;ge++){fe=ze[ge].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const De=fe[Ne];P.format!==mi?it!==null?at?Y&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,De.width,De.height,it,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,_t,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,De.width,De.height,it,Ve,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,_t,De.width,De.height,0,it,Ve,De.data)}}}else{if(fe=P.mipmaps,at&&Dt){fe.length>0&&Re++;const ge=Xe(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,_t,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(we){at?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze[ge].width,ze[ge].height,it,Ve,ze[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,ze[ge].width,ze[ge].height,0,it,Ve,ze[ge].data);for(let Ne=0;Ne<fe.length;Ne++){const lt=fe[Ne].image[ge].image;at?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,lt.width,lt.height,it,Ve,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,_t,lt.width,lt.height,0,it,Ve,lt.data)}}else{at?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,it,Ve,ze[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,it,Ve,ze[ge]);for(let Ne=0;Ne<fe.length;Ne++){const De=fe[Ne];at?Y&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,it,Ve,De.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,_t,it,Ve,De.image[ge])}}}x(P)&&_(r.TEXTURE_CUBE_MAP),me.__version=xe.version,P.onUpdate&&P.onUpdate(P)}k.__version=P.version}function ve(k,P,ae,_e,xe,me){const We=a.convert(ae.format,ae.colorSpace),Ce=a.convert(ae.type),ke=w(ae.internalFormat,We,Ce,ae.colorSpace),mt=n.get(P),we=n.get(ae);if(we.__renderTarget=P,!mt.__hasExternalTextures){const ze=Math.max(1,P.width>>me),Qe=Math.max(1,P.height>>me);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,me,ke,ze,Qe,P.depth,0,We,Ce,null):t.texImage2D(xe,me,ke,ze,Qe,0,We,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),vt(P)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,xe,we.__webglTexture,0,xt(P)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,xe,we.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(k,P,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,k),P.depthBuffer){const _e=P.depthTexture,xe=_e&&_e.isDepthTexture?_e.type:null,me=T(P.stencilBuffer,xe),We=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=xt(P);vt(P)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,me,P.width,P.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,me,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,me,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,k)}else{const _e=P.textures;for(let xe=0;xe<_e.length;xe++){const me=_e[xe],We=a.convert(me.format,me.colorSpace),Ce=a.convert(me.type),ke=w(me.internalFormat,We,Ce,me.colorSpace),mt=xt(P);ae&&vt(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,ke,P.width,P.height):vt(P)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,ke,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ke,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(k,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=n.get(P.depthTexture);_e.__renderTarget=P,(!_e.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ee(P.depthTexture,0);const xe=_e.__webglTexture,me=xt(P);if(P.depthTexture.format===Mo)vt(P)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(P.depthTexture.format===Ro)vt(P)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ie(k){const P=n.get(k),ae=k.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==k.depthTexture){const _e=k.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),_e){const xe=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,_e.removeEventListener("dispose",xe)};_e.addEventListener("dispose",xe),P.__depthDisposeCallback=xe}P.__boundDepthTexture=_e}if(k.depthTexture&&!P.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");be(P.__webglFramebuffer,k)}else if(ae){P.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[_e]),P.__webglDepthbuffer[_e]===void 0)P.__webglDepthbuffer[_e]=r.createRenderbuffer(),pe(P.__webglDepthbuffer[_e],k,!1);else{const xe=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=P.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,me)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),pe(P.__webglDepthbuffer,k,!1);else{const _e=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(k,P,ae){const _e=n.get(k);P!==void 0&&ve(_e.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&Ie(k)}function Lt(k){const P=k.texture,ae=n.get(k),_e=n.get(P);k.addEventListener("dispose",N);const xe=k.textures,me=k.isWebGLCubeRenderTarget===!0,We=xe.length>1;if(We||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=P.version,c.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0){ae.__webglFramebuffer[Ce]=[];for(let ke=0;ke<P.mipmaps.length;ke++)ae.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else ae.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ce=0;Ce<P.mipmaps.length;Ce++)ae.__webglFramebuffer[Ce]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const mt=n.get(xe[Ce]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),c.memory.textures++)}if(k.samples>0&&vt(k)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const ke=xe[Ce];ae.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce]);const mt=a.convert(ke.format,ke.colorSpace),we=a.convert(ke.type),ze=w(ke.internalFormat,mt,we,ke.colorSpace,k.isXRRenderTarget===!0),Qe=xt(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,ze,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ae.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(ae.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),oe(r.TEXTURE_CUBE_MAP,P);for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)ve(ae.__webglFramebuffer[Ce][ke],k,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else ve(ae.__webglFramebuffer[Ce],k,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(P)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const mt=xe[Ce],we=n.get(mt);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),oe(r.TEXTURE_2D,mt),ve(ae.__webglFramebuffer,k,mt,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),x(mt)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ce=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),oe(Ce,P),P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)ve(ae.__webglFramebuffer[ke],k,P,r.COLOR_ATTACHMENT0,Ce,ke);else ve(ae.__webglFramebuffer,k,P,r.COLOR_ATTACHMENT0,Ce,0);x(P)&&_(Ce),t.unbindTexture()}k.depthBuffer&&Ie(k)}function pt(k){const P=k.textures;for(let ae=0,_e=P.length;ae<_e;ae++){const xe=P[ae];if(x(xe)){const me=C(k),We=n.get(xe).__webglTexture;t.bindTexture(me,We),_(me),t.unbindTexture()}}}const It=[],W=[];function Fn(k){if(k.samples>0){if(vt(k)===!1){const P=k.textures,ae=k.width,_e=k.height;let xe=r.COLOR_BUFFER_BIT;const me=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=n.get(k),Ce=P.length>1;if(Ce)for(let ke=0;ke<P.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ke=0;ke<P.length;ke++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const mt=n.get(P[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,ae,_e,0,0,ae,_e,xe,r.NEAREST),d===!0&&(It.length=0,W.length=0,It.push(r.COLOR_ATTACHMENT0+ke),k.depthBuffer&&k.resolveDepthBuffer===!1&&(It.push(me),W.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<P.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const mt=n.get(P[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,mt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&d){const P=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function xt(k){return Math.min(s.maxSamples,k.samples)}function vt(k){const P=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ye(k){const P=c.render.frame;p.get(k)!==P&&(p.set(k,P),k.update())}function Nt(k,P){const ae=k.colorSpace,_e=k.format,xe=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ae!==Po&&ae!==Hr&&(ft.getTransfer(ae)===kt?(_e!==mi||xe!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),P}function Xe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=qe,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Fn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=vt}function $C(r,e){function t(n,s=Hr){let a;const c=ft.getTransfer(s);if(n===ur)return r.UNSIGNED_BYTE;if(n===Hf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Gf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===i_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===t_)return r.BYTE;if(n===n_)return r.SHORT;if(n===Ia)return r.UNSIGNED_SHORT;if(n===Vf)return r.INT;if(n===Ms)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===ja)return r.HALF_FLOAT;if(n===r_)return r.ALPHA;if(n===s_)return r.RGB;if(n===mi)return r.RGBA;if(n===o_)return r.LUMINANCE;if(n===a_)return r.LUMINANCE_ALPHA;if(n===Mo)return r.DEPTH_COMPONENT;if(n===Ro)return r.DEPTH_STENCIL;if(n===l_)return r.RED;if(n===Wf)return r.RED_INTEGER;if(n===c_)return r.RG;if(n===jf)return r.RG_INTEGER;if(n===Xf)return r.RGBA_INTEGER;if(n===Uc||n===kc||n===Oc||n===Bc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zh||n===Jh||n===Qh||n===ef)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tf||n===nf||n===rf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===tf||n===nf)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sf||n===of||n===af||n===lf||n===cf||n===uf||n===df||n===hf||n===ff||n===pf||n===mf||n===gf||n===vf||n===_f)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===sf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===of)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===af)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===df)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ff)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vf)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_f)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===yf||n===xf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===zc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===u_||n===Sf||n===Mf||n===Ef)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===zc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Sf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ef)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const YC={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),_=this._getHandJoint(f,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,M=.005;f.inputState.pinching&&m>y+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=y-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(YC)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new go;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KC=`
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

}`;class ZC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Tn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xr({vertexShader:qC,fragmentShader:KC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JC extends Ts{constructor(e,t){super();const n=this;let s=null,a=1,c=null,u="local-floor",d=1,f=null,p=null,g=null,m=null,y=null,M=null;const E=new ZC,x=t.getContextAttributes();let _=null,C=null;const w=[],T=[],U=new nt;let I=null;const N=new wn;N.viewport=new Mt;const B=new wn;B.viewport=new Mt;const R=[N,B],A=new lw;let F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=w[re];return he===void 0&&(he=new Ch,w[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=w[re];return he===void 0&&(he=new Ch,w[re]=he),he.getGripSpace()},this.getHand=function(re){let he=w[re];return he===void 0&&(he=new Ch,w[re]=he),he.getHandSpace()};function Z(re){const he=T.indexOf(re.inputSource);if(he===-1)return;const ve=w[he];ve!==void 0&&(ve.update(re.inputSource,re.frame,f||c),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function j(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ee);for(let re=0;re<w.length;re++){const he=T[re];he!==null&&(T[re]=null,w[re].disconnect(he))}F=null,q=null,E.reset(),e.setRenderTarget(_),y=null,m=null,g=null,s=null,C=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(re){f=re},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const he={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Es(y.framebufferWidth,y.framebufferHeight,{format:mi,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let he=null,ve=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=x.stencil?Ro:Mo,ve=x.stencil?Co:Ms);const be={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:a};g=new XRWebGLBinding(s,t),m=g.createProjectionLayer(be),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Es(m.textureWidth,m.textureHeight,{format:mi,type:ur,depthTexture:new S_(m.textureWidth,m.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await s.requestReferenceSpace(u),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(re){for(let he=0;he<re.removed.length;he++){const ve=re.removed[he],pe=T.indexOf(ve);pe>=0&&(T[pe]=null,w[pe].disconnect(ve))}for(let he=0;he<re.added.length;he++){const ve=re.added[he];let pe=T.indexOf(ve);if(pe===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=T.length){T.push(ve),pe=Ie;break}else if(T[Ie]===null){T[Ie]=ve,pe=Ie;break}if(pe===-1)break}const be=w[pe];be&&be.connect(ve)}}const J=new H,ne=new H;function V(re,he,ve){J.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const pe=J.distanceTo(ne),be=he.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,qe=be[14]/(be[10]-1),Lt=be[14]/(be[10]+1),pt=(be[9]+1)/be[5],It=(be[9]-1)/be[5],W=(be[8]-1)/be[0],Fn=(Ie[8]+1)/Ie[0],xt=qe*W,vt=qe*Fn,Ye=pe/(-W+Fn),Nt=Ye*-W;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(Ye),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),be[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=qe+Ye,k=Lt+Ye,P=xt-Nt,ae=vt+(pe-Nt),_e=pt*Lt/k*Xe,xe=It*Lt/k*Xe;re.projectionMatrix.makePerspective(P,ae,_e,xe,Xe,k),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Q(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let he=re.near,ve=re.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(ve=E.depthFar)),A.near=B.near=N.near=he,A.far=B.far=N.far=ve,(F!==A.near||q!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,q=A.far),N.layers.mask=re.layers.mask|2,B.layers.mask=re.layers.mask|4,A.layers.mask=N.layers.mask|B.layers.mask;const pe=re.parent,be=A.cameras;Q(A,pe);for(let Ie=0;Ie<be.length;Ie++)Q(be[Ie],pe);be.length===2?V(A,N,B):A.projectionMatrix.copy(N.projectionMatrix),le(re,A,pe)};function le(re,he,ve){ve===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(ve.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Lo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&y===null))return d},this.setFoveation=function(re){d=re,m!==null&&(m.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let O=null;function oe(re,he){if(p=he.getViewerPose(f||c),M=he,p!==null){const ve=p.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let pe=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Ie=0;Ie<ve.length;Ie++){const qe=ve[Ie];let Lt=null;if(y!==null)Lt=y.getViewport(qe);else{const It=g.getViewSubImage(m,qe);Lt=It.viewport,Ie===0&&(e.setRenderTargetTextures(C,It.colorTexture,m.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(C))}let pt=R[Ie];pt===void 0&&(pt=new wn,pt.layers.enable(Ie),pt.viewport=new Mt,R[Ie]=pt),pt.matrix.fromArray(qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ie===0&&(A.matrix.copy(pt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(pt)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ie=g.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,s.renderState)}}for(let ve=0;ve<w.length;ve++){const pe=T[ve],be=w[ve];pe!==null&&be!==void 0&&be.update(pe,he,f||c)}O&&O(re,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ae=new N_;Ae.setAnimationLoop(oe),this.setAnimationLoop=function(re){O=re},this.dispose=function(){}}}const vs=new dn,QC=new Ke;function eR(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,__(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,C,w,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(x,_):_.isMeshToonMaterial?(a(x,_),g(x,_)):_.isMeshPhongMaterial?(a(x,_),p(x,_)):_.isMeshStandardMaterial?(a(x,_),m(x,_),_.isMeshPhysicalMaterial&&y(x,_,T)):_.isMeshMatcapMaterial?(a(x,_),M(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),E(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,C,w):_.isSpriteMaterial?f(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Jn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Jn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_),w=C.envMap,T=C.envMapRotation;w&&(x.envMap.value=w,vs.copy(T),vs.x*=-1,vs.y*=-1,vs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),x.envMapRotation.value.setFromMatrix4(QC.makeRotationFromEuler(vs)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,C,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=w*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function g(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tR(r,e,t,n){let s={},a={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,w){const T=w.program;n.uniformBlockBinding(C,T)}function f(C,w){let T=s[C.id];T===void 0&&(M(C),T=p(C),s[C.id]=T,C.addEventListener("dispose",x));const U=w.program;n.updateUBOMapping(C,U);const I=e.render.frame;a[C.id]!==I&&(m(C),a[C.id]=I)}function p(C){const w=g();C.__bindingPointIndex=w;const T=r.createBuffer(),U=C.__size,I=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,U,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,T),T}function g(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const w=s[C.id],T=C.uniforms,U=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let I=0,N=T.length;I<N;I++){const B=Array.isArray(T[I])?T[I]:[T[I]];for(let R=0,A=B.length;R<A;R++){const F=B[R];if(y(F,I,R,U)===!0){const q=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let j=0;for(let ee=0;ee<Z.length;ee++){const J=Z[ee],ne=E(J);typeof J=="number"||typeof J=="boolean"?(F.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,q+j,F.__data)):J.isMatrix3?(F.__data[0]=J.elements[0],F.__data[1]=J.elements[1],F.__data[2]=J.elements[2],F.__data[3]=0,F.__data[4]=J.elements[3],F.__data[5]=J.elements[4],F.__data[6]=J.elements[5],F.__data[7]=0,F.__data[8]=J.elements[6],F.__data[9]=J.elements[7],F.__data[10]=J.elements[8],F.__data[11]=0):(J.toArray(F.__data,j),j+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,w,T,U){const I=C.value,N=w+"_"+T;if(U[N]===void 0)return typeof I=="number"||typeof I=="boolean"?U[N]=I:U[N]=I.clone(),!0;{const B=U[N];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return U[N]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function M(C){const w=C.uniforms;let T=0;const U=16;for(let N=0,B=w.length;N<B;N++){const R=Array.isArray(w[N])?w[N]:[w[N]];for(let A=0,F=R.length;A<F;A++){const q=R[A],Z=Array.isArray(q.value)?q.value:[q.value];for(let j=0,ee=Z.length;j<ee;j++){const J=Z[j],ne=E(J),V=T%U,Q=V%ne.boundary,le=V+Q;T+=Q,le!==0&&U-le<ne.storage&&(T+=U-le),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=ne.storage}}}const I=T%U;return I>0&&(T+=U-I),C.__size=T,C.__cache={},this}function E(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function x(C){const w=C.target;w.removeEventListener("dispose",x);const T=c.indexOf(w.__bindingPointIndex);c.splice(T,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function _(){for(const C in s)r.deleteBuffer(s[C]);c=[],s={},a={}}return{bind:d,update:f,dispose:_}}class cp{constructor(e={}){const{canvas:t=W1(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let x=null,_=null;const C=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Wr,this.toneMappingExposure=1;const T=this;let U=!1,I=0,N=0,B=null,R=-1,A=null;const F=new Mt,q=new Mt;let Z=null;const j=new Ze(0);let ee=0,J=t.width,ne=t.height,V=1,Q=null,le=null;const O=new Mt(0,0,J,ne),oe=new Mt(0,0,J,ne);let Ae=!1;const re=new Zf;let he=!1,ve=!1;const pe=new Ke,be=new Ke,Ie=new H,qe=new Mt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function It(){return B===null?V:1}let W=n;function Fn(D,K){return t.getContext(D,K)}try{const D={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Of}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),W===null){const K="webgl2";if(W=Fn(K,D),W===null)throw Fn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let xt,vt,Ye,Nt,Xe,k,P,ae,_e,xe,me,We,Ce,ke,mt,we,ze,Qe,it,Ve,_t,at,Dt,Y;function Re(){xt=new db(W),xt.init(),at=new $C(W,xt),vt=new sb(W,xt,e,at),Ye=new jC(W,xt),vt.reverseDepthBuffer&&m&&Ye.buffers.depth.setReversed(!0),Nt=new pb(W),Xe=new DC,k=new XC(W,xt,Ye,Xe,vt,at,Nt),P=new ab(T),ae=new ub(T),_e=new Sw(W),Dt=new ib(W,_e),xe=new hb(W,_e,Nt,Dt),me=new gb(W,xe,_e,Nt),it=new mb(W,vt,k),we=new ob(Xe),We=new LC(T,P,ae,xt,vt,Dt,we),Ce=new eR(T,Xe),ke=new NC,mt=new zC(xt),Qe=new nb(T,P,ae,Ye,me,y,d),ze=new GC(T,me,vt),Y=new tR(W,Nt,vt,Ye),Ve=new rb(W,xt,Nt),_t=new fb(W,xt,Nt),Nt.programs=We.programs,T.capabilities=vt,T.extensions=xt,T.properties=Xe,T.renderLists=ke,T.shadowMap=ze,T.state=Ye,T.info=Nt}Re();const fe=new JC(T,W);this.xr=fe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const D=xt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(J,ne,!1))},this.getSize=function(D){return D.set(J,ne)},this.setSize=function(D,K,ue=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=D,ne=K,t.width=Math.floor(D*V),t.height=Math.floor(K*V),ue===!0&&(t.style.width=D+"px",t.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(J*V,ne*V).floor()},this.setDrawingBufferSize=function(D,K,ue){J=D,ne=K,V=ue,t.width=Math.floor(D*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(F)},this.getViewport=function(D){return D.copy(O)},this.setViewport=function(D,K,ue,de){D.isVector4?O.set(D.x,D.y,D.z,D.w):O.set(D,K,ue,de),Ye.viewport(F.copy(O).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(oe)},this.setScissor=function(D,K,ue,de){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,K,ue,de),Ye.scissor(q.copy(oe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(D){Ye.setScissorTest(Ae=D)},this.setOpaqueSort=function(D){Q=D},this.setTransparentSort=function(D){le=D},this.getClearColor=function(D){return D.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(D=!0,K=!0,ue=!0){let de=0;if(D){let X=!1;if(B!==null){const Ee=B.texture.format;X=Ee===Xf||Ee===jf||Ee===Wf}if(X){const Ee=B.texture.type,Pe=Ee===ur||Ee===Ms||Ee===Ia||Ee===Co||Ee===Hf||Ee===Gf,Ue=Qe.getClearColor(),Oe=Qe.getClearAlpha(),rt=Ue.r,st=Ue.g,$e=Ue.b;Pe?(M[0]=rt,M[1]=st,M[2]=$e,M[3]=Oe,W.clearBufferuiv(W.COLOR,0,M)):(E[0]=rt,E[1]=st,E[2]=$e,E[3]=Oe,W.clearBufferiv(W.COLOR,0,E))}else de|=W.COLOR_BUFFER_BIT}K&&(de|=W.DEPTH_BUFFER_BIT),ue&&(de|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Qe.dispose(),ke.dispose(),mt.dispose(),Xe.dispose(),P.dispose(),ae.dispose(),me.dispose(),Dt.dispose(),Y.dispose(),We.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",bs),fe.removeEventListener("sessionend",fr),Vi.stop()};function ge(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const D=Nt.autoReset,K=ze.enabled,ue=ze.autoUpdate,de=ze.needsUpdate,X=ze.type;Re(),Nt.autoReset=D,ze.enabled=K,ze.autoUpdate=ue,ze.needsUpdate=de,ze.type=X}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function lt(D){const K=D.target;K.removeEventListener("dispose",lt),Ht(K)}function Ht(D){an(D),Xe.remove(D)}function an(D){const K=Xe.get(D).programs;K!==void 0&&(K.forEach(function(ue){We.releaseProgram(ue)}),D.isShaderMaterial&&We.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,ue,de,X,Ee){K===null&&(K=Lt);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Ja(D,K,ue,de,X);Ye.setMaterial(de,Pe);let Oe=ue.index,rt=1;if(de.wireframe===!0){if(Oe=xe.getWireframeAttribute(ue),Oe===void 0)return;rt=2}const st=ue.drawRange,$e=ue.attributes.position;let ct=st.start*rt,bt=(st.start+st.count)*rt;Ee!==null&&(ct=Math.max(ct,Ee.start*rt),bt=Math.min(bt,(Ee.start+Ee.count)*rt)),Oe!==null?(ct=Math.max(ct,0),bt=Math.min(bt,Oe.count)):$e!=null&&(ct=Math.max(ct,0),bt=Math.min(bt,$e.count));const Ct=bt-ct;if(Ct<0||Ct===1/0)return;Dt.setup(X,de,Ue,ue,Oe);let $t,wt=Ve;if(Oe!==null&&($t=_e.get(Oe),wt=_t,wt.setIndex($t)),X.isMesh)de.wireframe===!0?(Ye.setLineWidth(de.wireframeLinewidth*It()),wt.setMode(W.LINES)):wt.setMode(W.TRIANGLES);else if(X.isLine){let Je=de.linewidth;Je===void 0&&(Je=1),Ye.setLineWidth(Je*It()),X.isLineSegments?wt.setMode(W.LINES):X.isLineLoop?wt.setMode(W.LINE_LOOP):wt.setMode(W.LINE_STRIP)}else X.isPoints?wt.setMode(W.POINTS):X.isSprite&&wt.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)wt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,Qt=X._multiDrawCounts,Et=X._multiDrawCount,Sn=Oe?_e.get(Oe).bytesPerElement:1,gi=Xe.get(de).currentProgram.getUniforms();for(let kn=0;kn<Et;kn++)gi.setValue(W,"_gl_DrawID",kn),wt.render(Je[kn]/Sn,Qt[kn])}else if(X.isInstancedMesh)wt.renderInstances(ct,Ct,X.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Qt=Math.min(ue.instanceCount,Je);wt.renderInstances(ct,Ct,Qt)}else wt.render(ct,Ct)};function Tt(D,K,ue){D.transparent===!0&&D.side===rr&&D.forceSinglePass===!1?(D.side=Jn,D.needsUpdate=!0,Cs(D,K,ue),D.side=jr,D.needsUpdate=!0,Cs(D,K,ue),D.side=rr):Cs(D,K,ue)}this.compile=function(D,K,ue=null){ue===null&&(ue=D),_=mt.get(ue),_.init(K),w.push(_),ue.traverseVisible(function(X){X.isLight&&X.layers.test(K.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),D!==ue&&D.traverseVisible(function(X){X.isLight&&X.layers.test(K.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const de=new Set;return D.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ue=Ee[Pe];Tt(Ue,ue,X),de.add(Ue)}else Tt(Ee,ue,X),de.add(Ee)}),w.pop(),_=null,de},this.compileAsync=function(D,K,ue=null){const de=this.compile(D,K,ue);return new Promise(X=>{function Ee(){if(de.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&de.delete(Pe)}),de.size===0){X(D);return}setTimeout(Ee,10)}xt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Wn=null;function Un(D){Wn&&Wn(D)}function bs(){Vi.stop()}function fr(){Vi.start()}const Vi=new N_;Vi.setAnimationLoop(Un),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(D){Wn=D,fe.setAnimationLoop(D),D===null?Vi.stop():Vi.start()},fe.addEventListener("sessionstart",bs),fe.addEventListener("sessionend",fr),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,K,B),_=mt.get(D,w.length),_.init(K),w.push(_),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),re.setFromProjectionMatrix(be),ve=this.localClippingEnabled,he=we.init(this.clippingPlanes,ve),x=ke.get(D,C.length),x.init(),C.push(x),fe.enabled===!0&&fe.isPresenting===!0){const Ee=T.xr.getDepthSensingMesh();Ee!==null&&Hi(Ee,K,-1/0,T.sortObjects)}Hi(D,K,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(Q,le),pt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,pt&&Qe.addToRenderList(x,D),this.info.render.frame++,he===!0&&we.beginShadows();const ue=_.state.shadowsArray;ze.render(ue,D,K),he===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=x.opaque,X=x.transmissive;if(_.setupLights(),K.isArrayCamera){const Ee=K.cameras;if(X.length>0)for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Oe=Ee[Pe];Zr(de,X,D,Oe)}pt&&Qe.render(D);for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Oe=Ee[Pe];Kr(x,D,Oe,Oe.viewport)}}else X.length>0&&Zr(de,X,D,K),pt&&Qe.render(D),Kr(x,D,K);B!==null&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(T,D,K),Dt.resetDefaultState(),R=-1,A=null,w.pop(),w.length>0?(_=w[w.length-1],he===!0&&we.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function Hi(D,K,ue,de){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||re.intersectsSprite(D)){de&&qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(be);const Pe=me.update(D),Ue=D.material;Ue.visible&&x.push(D,Pe,Ue,ue,qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||re.intersectsObject(D))){const Pe=me.update(D),Ue=D.material;if(de&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),qe.copy(D.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),qe.copy(Pe.boundingSphere.center)),qe.applyMatrix4(D.matrixWorld).applyMatrix4(be)),Array.isArray(Ue)){const Oe=Pe.groups;for(let rt=0,st=Oe.length;rt<st;rt++){const $e=Oe[rt],ct=Ue[$e.materialIndex];ct&&ct.visible&&x.push(D,Pe,ct,ue,qe.z,$e)}}else Ue.visible&&x.push(D,Pe,Ue,ue,qe.z,null)}}const Ee=D.children;for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++)Hi(Ee[Pe],K,ue,de)}function Kr(D,K,ue,de){const X=D.opaque,Ee=D.transmissive,Pe=D.transparent;_.setupLightsView(ue),he===!0&&we.setGlobalState(T.clippingPlanes,ue),de&&Ye.viewport(F.copy(de)),X.length>0&&pr(X,K,ue),Ee.length>0&&pr(Ee,K,ue),Pe.length>0&&pr(Pe,K,ue),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Zr(D,K,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[de.id]===void 0&&(_.state.transmissionRenderTarget[de.id]=new Es(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?ja:ur,minFilter:Ss,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[de.id],Pe=de.viewport||F;Ee.setSize(Pe.z,Pe.w);const Ue=T.getRenderTarget();T.setRenderTarget(Ee),T.getClearColor(j),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),pt&&Qe.render(ue);const Oe=T.toneMapping;T.toneMapping=Wr;const rt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),_.setupLightsView(de),he===!0&&we.setGlobalState(T.clippingPlanes,de),pr(D,ue,de),k.updateMultisampleRenderTarget(Ee),k.updateRenderTargetMipmap(Ee),xt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let $e=0,ct=K.length;$e<ct;$e++){const bt=K[$e],Ct=bt.object,$t=bt.geometry,wt=bt.material,Je=bt.group;if(wt.side===rr&&Ct.layers.test(de.layers)){const Qt=wt.side;wt.side=Jn,wt.needsUpdate=!0,Ka(Ct,ue,de,$t,wt,Je),wt.side=Qt,wt.needsUpdate=!0,st=!0}}st===!0&&(k.updateMultisampleRenderTarget(Ee),k.updateRenderTargetMipmap(Ee))}T.setRenderTarget(Ue),T.setClearColor(j,ee),rt!==void 0&&(de.viewport=rt),T.toneMapping=Oe}function pr(D,K,ue){const de=K.isScene===!0?K.overrideMaterial:null;for(let X=0,Ee=D.length;X<Ee;X++){const Pe=D[X],Ue=Pe.object,Oe=Pe.geometry,rt=de===null?Pe.material:de,st=Pe.group;Ue.layers.test(ue.layers)&&Ka(Ue,K,ue,Oe,rt,st)}}function Ka(D,K,ue,de,X,Ee){D.onBeforeRender(T,K,ue,de,X,Ee),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),X.onBeforeRender(T,K,ue,de,D,Ee),X.transparent===!0&&X.side===rr&&X.forceSinglePass===!1?(X.side=Jn,X.needsUpdate=!0,T.renderBufferDirect(ue,K,de,X,D,Ee),X.side=jr,X.needsUpdate=!0,T.renderBufferDirect(ue,K,de,X,D,Ee),X.side=rr):T.renderBufferDirect(ue,K,de,X,D,Ee),D.onAfterRender(T,K,ue,de,X,Ee)}function Cs(D,K,ue){K.isScene!==!0&&(K=Lt);const de=Xe.get(D),X=_.state.lights,Ee=_.state.shadowsArray,Pe=X.state.version,Ue=We.getParameters(D,X.state,Ee,K,ue),Oe=We.getProgramCacheKey(Ue);let rt=de.programs;de.environment=D.isMeshStandardMaterial?K.environment:null,de.fog=K.fog,de.envMap=(D.isMeshStandardMaterial?ae:P).get(D.envMap||de.environment),de.envMapRotation=de.environment!==null&&D.envMap===null?K.environmentRotation:D.envMapRotation,rt===void 0&&(D.addEventListener("dispose",lt),rt=new Map,de.programs=rt);let st=rt.get(Oe);if(st!==void 0){if(de.currentProgram===st&&de.lightsStateVersion===Pe)return Ri(D,Ue),st}else Ue.uniforms=We.getUniforms(D),D.onBeforeCompile(Ue,T),st=We.acquireProgram(Ue,Oe),rt.set(Oe,st),de.uniforms=Ue.uniforms;const $e=de.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($e.clippingPlanes=we.uniform),Ri(D,Ue),de.needsLights=du(D),de.lightsStateVersion=Pe,de.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),de.currentProgram=st,de.uniformsList=null,st}function Za(D){if(D.uniformsList===null){const K=D.currentProgram.getUniforms();D.uniformsList=Vc.seqWithValue(K.seq,D.uniforms)}return D.uniformsList}function Ri(D,K){const ue=Xe.get(D);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Ja(D,K,ue,de,X){K.isScene!==!0&&(K=Lt),k.resetTextureUnits();const Ee=K.fog,Pe=de.isMeshStandardMaterial?K.environment:null,Ue=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Po,Oe=(de.isMeshStandardMaterial?ae:P).get(de.envMap||Pe),rt=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,st=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),$e=!!ue.morphAttributes.position,ct=!!ue.morphAttributes.normal,bt=!!ue.morphAttributes.color;let Ct=Wr;de.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const $t=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,wt=$t!==void 0?$t.length:0,Je=Xe.get(de),Qt=_.state.lights;if(he===!0&&(ve===!0||D!==A)){const tn=D===A&&de.id===R;we.setState(de,D,tn)}let Et=!1;de.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Qt.state.version||Je.outputColorSpace!==Ue||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==Oe||de.fog===!0&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==st||Je.morphTargets!==$e||Je.morphNormals!==ct||Je.morphColors!==bt||Je.toneMapping!==Ct||Je.morphTargetsCount!==wt)&&(Et=!0):(Et=!0,Je.__version=de.version);let Sn=Je.currentProgram;Et===!0&&(Sn=Cs(de,K,X));let gi=!1,kn=!1,Jr=!1;const Ut=Sn.getUniforms(),On=Je.uniforms;if(Ye.useProgram(Sn.program)&&(gi=!0,kn=!0,Jr=!0),de.id!==R&&(R=de.id,kn=!0),gi||A!==D){Ye.buffers.depth.getReversed()?(pe.copy(D.projectionMatrix),X1(pe),$1(pe),Ut.setValue(W,"projectionMatrix",pe)):Ut.setValue(W,"projectionMatrix",D.projectionMatrix),Ut.setValue(W,"viewMatrix",D.matrixWorldInverse);const bn=Ut.map.cameraPosition;bn!==void 0&&bn.setValue(W,Ie.setFromMatrixPosition(D.matrixWorld)),vt.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,kn=!0,Jr=!0)}if(X.isSkinnedMesh){Ut.setOptional(W,X,"bindMatrix"),Ut.setOptional(W,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ut.setValue(W,"boneTexture",tn.boneTexture,k))}X.isBatchedMesh&&(Ut.setOptional(W,X,"batchingTexture"),Ut.setValue(W,"batchingTexture",X._matricesTexture,k),Ut.setOptional(W,X,"batchingIdTexture"),Ut.setValue(W,"batchingIdTexture",X._indirectTexture,k),Ut.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(W,"batchingColorTexture",X._colorsTexture,k));const An=ue.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&it.update(X,ue,Sn),(kn||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,Ut.setValue(W,"receiveShadow",X.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(On.envMap.value=Oe,On.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&K.environment!==null&&(On.envMapIntensity.value=K.environmentIntensity),kn&&(Ut.setValue(W,"toneMappingExposure",T.toneMappingExposure),Je.needsLights&&Qa(On,Jr),Ee&&de.fog===!0&&Ce.refreshFogUniforms(On,Ee),Ce.refreshMaterialUniforms(On,de,V,ne,_.state.transmissionRenderTarget[D.id]),Vc.upload(W,Za(Je),On,k)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Vc.upload(W,Za(Je),On,k),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ut.setValue(W,"center",X.center),Ut.setValue(W,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(W,"normalMatrix",X.normalMatrix),Ut.setValue(W,"modelMatrix",X.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const tn=de.uniformsGroups;for(let bn=0,Qr=tn.length;bn<Qr;bn++){const St=tn[bn];Y.update(St,Sn),Y.bind(St,Sn)}}return Sn}function Qa(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function du(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,K,ue){Xe.get(D.texture).__webglTexture=K,Xe.get(D.depthTexture).__webglTexture=ue;const de=Xe.get(D);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,K){const ue=Xe.get(D);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,ue=0){B=D,I=K,N=ue;let de=!0,X=null,Ee=!1,Pe=!1;if(D){const Oe=Xe.get(D);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(W.FRAMEBUFFER,null),de=!1;else if(Oe.__webglFramebuffer===void 0)k.setupRenderTarget(D);else if(Oe.__hasExternalTextures)k.rebindTextures(D,Xe.get(D.texture).__webglTexture,Xe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $e=D.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&Xe.has($e)&&(D.width!==$e.image.width||D.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(D)}}const rt=D.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Pe=!0);const st=Xe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(st[K])?X=st[K][ue]:X=st[K],Ee=!0):D.samples>0&&k.useMultisampledRTT(D)===!1?X=Xe.get(D).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[ue]:X=st,F.copy(D.viewport),q.copy(D.scissor),Z=D.scissorTest}else F.copy(O).multiplyScalar(V).floor(),q.copy(oe).multiplyScalar(V).floor(),Z=Ae;if(Ye.bindFramebuffer(W.FRAMEBUFFER,X)&&de&&Ye.drawBuffers(D,X),Ye.viewport(F),Ye.scissor(q),Ye.setScissorTest(Z),Ee){const Oe=Xe.get(D.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,ue)}else if(Pe){const Oe=Xe.get(D.texture),rt=K||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Oe.__webglTexture,ue||0,rt)}R=-1},this.readRenderTargetPixels=function(D,K,ue,de,X,Ee,Pe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){Ye.bindFramebuffer(W.FRAMEBUFFER,Ue);try{const Oe=D.texture,rt=Oe.format,st=Oe.type;if(!vt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-de&&ue>=0&&ue<=D.height-X&&W.readPixels(K,ue,de,X,at.convert(rt),at.convert(st),Ee)}finally{const Oe=B!==null?Xe.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(D,K,ue,de,X,Ee,Pe){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){const Oe=D.texture,rt=Oe.format,st=Oe.type;if(!vt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=D.width-de&&ue>=0&&ue<=D.height-X){Ye.bindFramebuffer(W.FRAMEBUFFER,Ue);const $e=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,$e),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(K,ue,de,X,at.convert(rt),at.convert(st),0);const ct=B!==null?Xe.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,ct);const bt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await j1(W,bt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,$e),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.deleteBuffer($e),W.deleteSync(bt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,K=null,ue=0){D.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,D=arguments[1]);const de=Math.pow(2,-ue),X=Math.floor(D.image.width*de),Ee=Math.floor(D.image.height*de),Pe=K!==null?K.x:0,Ue=K!==null?K.y:0;k.setTexture2D(D,0),W.copyTexSubImage2D(W.TEXTURE_2D,ue,0,0,Pe,Ue,X,Ee),Ye.unbindTexture()};const el=W.createFramebuffer(),tl=W.createFramebuffer();this.copyTextureToTexture=function(D,K,ue=null,de=null,X=0,Ee=null){D.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,D=arguments[1],K=arguments[2],Ee=arguments[3]||0,ue=null),Ee===null&&(X!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Pe,Ue,Oe,rt,st,$e,ct,bt,Ct;const $t=D.isCompressedTexture?D.mipmaps[Ee]:D.image;if(ue!==null)Pe=ue.max.x-ue.min.x,Ue=ue.max.y-ue.min.y,Oe=ue.isBox3?ue.max.z-ue.min.z:1,rt=ue.min.x,st=ue.min.y,$e=ue.isBox3?ue.min.z:0;else{const An=Math.pow(2,-X);Pe=Math.floor($t.width*An),Ue=Math.floor($t.height*An),D.isDataArrayTexture?Oe=$t.depth:D.isData3DTexture?Oe=Math.floor($t.depth*An):Oe=1,rt=0,st=0,$e=0}de!==null?(ct=de.x,bt=de.y,Ct=de.z):(ct=0,bt=0,Ct=0);const wt=at.convert(K.format),Je=at.convert(K.type);let Qt;K.isData3DTexture?(k.setTexture3D(K,0),Qt=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(k.setTexture2DArray(K,0),Qt=W.TEXTURE_2D_ARRAY):(k.setTexture2D(K,0),Qt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=W.getParameter(W.UNPACK_ROW_LENGTH),Sn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),gi=W.getParameter(W.UNPACK_SKIP_PIXELS),kn=W.getParameter(W.UNPACK_SKIP_ROWS),Jr=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,$t.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,$t.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,rt),W.pixelStorei(W.UNPACK_SKIP_ROWS,st),W.pixelStorei(W.UNPACK_SKIP_IMAGES,$e);const Ut=D.isDataArrayTexture||D.isData3DTexture,On=K.isDataArrayTexture||K.isData3DTexture;if(D.isDepthTexture){const An=Xe.get(D),tn=Xe.get(K),bn=Xe.get(An.__renderTarget),Qr=Xe.get(tn.__renderTarget);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let St=0;St<Oe;St++)Ut&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xe.get(D).__webglTexture,X,$e+St),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xe.get(K).__webglTexture,Ee,Ct+St)),W.blitFramebuffer(rt,st,Pe,Ue,ct,bt,Pe,Ue,W.DEPTH_BUFFER_BIT,W.NEAREST);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(X!==0||D.isRenderTargetTexture||Xe.has(D)){const An=Xe.get(D),tn=Xe.get(K);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,el),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,tl);for(let bn=0;bn<Oe;bn++)Ut?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,An.__webglTexture,X,$e+bn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,An.__webglTexture,X),On?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tn.__webglTexture,Ee,Ct+bn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,tn.__webglTexture,Ee),X!==0?W.blitFramebuffer(rt,st,Pe,Ue,ct,bt,Pe,Ue,W.COLOR_BUFFER_BIT,W.NEAREST):On?W.copyTexSubImage3D(Qt,Ee,ct,bt,Ct+bn,rt,st,Pe,Ue):W.copyTexSubImage2D(Qt,Ee,ct,bt,rt,st,Pe,Ue);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else On?D.isDataTexture||D.isData3DTexture?W.texSubImage3D(Qt,Ee,ct,bt,Ct,Pe,Ue,Oe,wt,Je,$t.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(Qt,Ee,ct,bt,Ct,Pe,Ue,Oe,wt,$t.data):W.texSubImage3D(Qt,Ee,ct,bt,Ct,Pe,Ue,Oe,wt,Je,$t):D.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,ct,bt,Pe,Ue,wt,Je,$t.data):D.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,ct,bt,$t.width,$t.height,wt,$t.data):W.texSubImage2D(W.TEXTURE_2D,Ee,ct,bt,Pe,Ue,wt,Je,$t);W.pixelStorei(W.UNPACK_ROW_LENGTH,Et),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Sn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,gi),W.pixelStorei(W.UNPACK_SKIP_ROWS,kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Jr),Ee===0&&K.generateMipmaps&&W.generateMipmap(Qt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(D,K,ue=null,de=null,X=0){return D.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,D=arguments[2],K=arguments[3],X=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,K,ue,de,X)},this.initRenderTarget=function(D){Xe.get(D).__webglFramebuffer===void 0&&k.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?k.setTextureCube(D,0):D.isData3DTexture?k.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?k.setTexture2DArray(D,0):k.setTexture2D(D,0),Ye.unbindTexture()},this.resetState=function(){I=0,N=0,B=null,Ye.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}class nR{constructor(e,t=" .:-=+*#%@",n={}){const s=n.resolution||.15,a=n.scale||1,c=n.color||!1,u=n.alpha||!1,d=n.block||!1,f=n.invert||!1,p=n.strResolution||"low";let g,m;const y=document.createElement("div");y.style.cursor="default";const M=document.createElement("table");y.appendChild(M);let E,x,_;this.setSize=function(j,ee){g=j,m=ee,e.setSize(j,ee),C()},this.render=function(j,ee){e.render(j,ee),Z(M)},this.domElement=y;function C(){E=Math.floor(g*s),x=Math.floor(m*s),N.width=E,N.height=x,_=e.domElement,_.style.backgroundColor&&(M.rows[0].cells[0].style.backgroundColor=_.style.backgroundColor,M.rows[0].cells[0].style.color=_.style.color),M.cellSpacing=0,M.cellPadding=0;const j=M.style;j.whiteSpace="pre",j.margin="0px",j.padding="0px",j.letterSpacing=q+"px",j.fontFamily=U,j.fontSize=A+"px",j.lineHeight=F+"px",j.textAlign="left",j.textDecoration="none"}const w=" .,:;i1tfLCG08@".split(""),T=" CGO08@".split(""),U="courier new, monospace",I=e.domElement,N=document.createElement("canvas");if(!N.getContext)return;const B=N.getContext("2d");if(!B.getImageData)return;let R=c?T:w;t&&(R=t);const A=2/s*a,F=2/s*a;let q=0;if(p=="low")switch(a){case 1:q=-1;break;case 2:case 3:q=-2.1;break;case 4:q=-3.1;break;case 5:q=-4.15;break}if(p=="medium")switch(a){case 1:q=0;break;case 2:q=-1;break;case 3:q=-1.04;break;case 4:case 5:q=-2.1;break}if(p=="high")switch(a){case 1:case 2:q=0;break;case 3:case 4:case 5:q=-1;break}function Z(j){B.clearRect(0,0,E,x),B.drawImage(I,0,0,E,x);const ee=B.getImageData(0,0,E,x).data;let J="";for(let ne=0;ne<x;ne+=2){for(let V=0;V<E;V++){const Q=(ne*E+V)*4,le=ee[Q],O=ee[Q+1],oe=ee[Q+2],Ae=ee[Q+3];let re,he;he=(.3*le+.59*O+.11*oe)/255,Ae==0&&(he=1),re=Math.floor((1-he)*(R.length-1)),f&&(re=R.length-re-1);let ve=R[re];(ve===void 0||ve==" ")&&(ve="&nbsp;"),c?J+="<span style='color:rgb("+le+","+O+","+oe+");"+(d?"background-color:rgb("+le+","+O+","+oe+");":"")+(u?"opacity:"+Ae/255+";":"")+"'>"+ve+"</span>":J+=ve}J+="<br/>"}j.innerHTML=`<tr><td style="display:block;width:${g}px;height:${m}px;overflow:hidden">${J}</td></tr>`}}}const yv={type:"change"},up={type:"start"},B_={type:"end"},Dc=new iu,xv=new Vr,iR=Math.cos(70*Nn.DEG2RAD),un=new H,Zn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6;class dp extends yw{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xo.ROTATE,MIDDLE:xo.DOLLY,RIGHT:xo.PAN},this.touches={ONE:mo.ROTATE,TWO:mo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new xn,this._lastTargetPosition=new H,this._quat=new xn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new H0,this._sphericalDelta=new H0,this._scale=1,this._panOffset=new H,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new H,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sR.bind(this),this._onPointerDown=rR.bind(this),this._onPointerUp=oR.bind(this),this._onContextMenu=fR.bind(this),this._onMouseWheel=cR.bind(this),this._onKeyDown=uR.bind(this),this._onTouchStart=dR.bind(this),this._onTouchMove=hR.bind(this),this._onMouseDown=aR.bind(this),this._onMouseMove=lR.bind(this),this._interceptControlDown=pR.bind(this),this._interceptControlUp=mR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yv),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zn:n>Math.PI&&(n-=Zn),s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=un.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const u=new H(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Dc.origin.copy(this.object.position),Dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dc.direction))<iR?this.object.lookAt(this.target):(xv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dc.intersectPlane(xv,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(yv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;un.copy(s).sub(this.target);let a=un.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,c=n.width,u=n.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function sR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function oR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(B_),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function aR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ot.DOLLY;break;case xo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ot.ROTATE}break;case xo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(up)}function lR(r){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function cR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(r.preventDefault(),this.dispatchEvent(up),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(B_))}function uR(r){this.enabled!==!1&&this._handleKeyDown(r)}function dR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case mo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ot.TOUCH_ROTATE;break;case mo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case mo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ot.TOUCH_DOLLY_PAN;break;case mo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(up)}function hR(r){switch(this._trackPointer(r),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ot.NONE}}function fR(r){this.enabled!==!1&&r.preventDefault()}function pR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gR(){const r=ie.useRef(null);return ie.useEffect(()=>{if(!r.current)return;const e=r.current,t=new qf,n=new wn(75,1,.1,1e3);n.position.set(0,0,25);const s=new cp;s.setSize(300,300);const a=new nR(s," .:-+*=%@#",{resolution:.15,scale:1,color:!1,alpha:!1,block:!1,invert:!0});a.setSize(300,300),a.domElement.style.color="#FFB000",a.domElement.style.backgroundColor="transparent",a.domElement.style.fontSize="10px",a.domElement.style.lineHeight="8px",a.domElement.style.letterSpacing="0px",a.domElement.style.fontFamily="monospace",a.domElement.style.fontWeight="bold";const c=new dp(n,a.domElement);c.enableDamping=!0,c.dampingFactor=.05,c.enableZoom=!0,c.enablePan=!0,c.autoRotate=!1;const u=new np(10,4,24,48),d=new wo({color:16756736,flatShading:!0,shininess:150}),f=new hn(u,d);t.add(f);const p=new Zc(16777215,2);p.position.set(20,20,20),t.add(p);const g=new Zc(16777215,1);g.position.set(-20,-20,-20),t.add(g);const m=new lu(4210752);t.add(m);let y,M=0;const E=()=>{y=requestAnimationFrame(E),M+=.02,f.rotation.y=M,f.rotation.x=Math.sin(M*.5)*.3,f.rotation.z=Math.cos(M*.3)*.2;const x=1+Math.sin(M*2)*.02;f.scale.set(x,x,x),f.position.y=Math.sin(M*.5)*2,f.position.x=Math.cos(M*.3)*2,a.render(t,n)};for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild);return r.current.appendChild(a.domElement),E(),()=>{if(cancelAnimationFrame(y),e)for(;e.firstChild;)e.removeChild(e.firstChild);u.dispose(),d.dispose(),s.dispose()}},[]),L.jsx("div",{ref:r,className:"w-[300px] h-[300px] flex items-start justify-start overflow-hidden",style:{transformOrigin:"top left"}})}class vR extends $r{constructor(e){super(e)}load(e,t,n,s){const a=this,c=new b_(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(a.parse(u))}catch(d){s?s(d):console.error(d),a.manager.itemError(e)}},n,s)}parse(e){function t(f){const p=new DataView(f),g=32/8*3+32/8*3*3+16/8,m=p.getUint32(80,!0);if(80+32/8+m*g===p.byteLength)return!0;const M=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(M,p,E))return!1;return!0}function n(f,p,g){for(let m=0,y=f.length;m<y;m++)if(f[m]!==p.getUint8(g+m))return!1;return!0}function s(f){const p=new DataView(f),g=p.getUint32(80,!0);let m,y,M,E=!1,x,_,C,w,T;for(let F=0;F<70;F++)p.getUint32(F,!1)==1129270351&&p.getUint8(F+4)==82&&p.getUint8(F+5)==61&&(E=!0,x=new Float32Array(g*3*3),_=p.getUint8(F+6)/255,C=p.getUint8(F+7)/255,w=p.getUint8(F+8)/255,T=p.getUint8(F+9)/255);const U=84,I=12*4+2,N=new fn,B=new Float32Array(g*3*3),R=new Float32Array(g*3*3),A=new Ze;for(let F=0;F<g;F++){const q=U+F*I,Z=p.getFloat32(q,!0),j=p.getFloat32(q+4,!0),ee=p.getFloat32(q+8,!0);if(E){const J=p.getUint16(q+48,!0);(J&32768)===0?(m=(J&31)/31,y=(J>>5&31)/31,M=(J>>10&31)/31):(m=_,y=C,M=w)}for(let J=1;J<=3;J++){const ne=q+J*12,V=F*3*3+(J-1)*3;B[V]=p.getFloat32(ne,!0),B[V+1]=p.getFloat32(ne+4,!0),B[V+2]=p.getFloat32(ne+8,!0),R[V]=Z,R[V+1]=j,R[V+2]=ee,E&&(A.setRGB(m,y,M,Vt),x[V]=A.r,x[V+1]=A.g,x[V+2]=A.b)}}return N.setAttribute("position",new Qn(B,3)),N.setAttribute("normal",new Qn(R,3)),E&&(N.setAttribute("color",new Qn(x,3)),N.hasColors=!0,N.alpha=T),N}function a(f){const p=new fn,g=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let M=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+E+E+E,"g"),_=new RegExp("normal"+E+E+E,"g"),C=[],w=[],T=[],U=new H;let I,N=0,B=0,R=0;for(;(I=g.exec(f))!==null;){B=R;const A=I[0],F=(I=y.exec(A))!==null?I[1]:"";for(T.push(F);(I=m.exec(A))!==null;){let j=0,ee=0;const J=I[0];for(;(I=_.exec(J))!==null;)U.x=parseFloat(I[1]),U.y=parseFloat(I[2]),U.z=parseFloat(I[3]),ee++;for(;(I=x.exec(J))!==null;)C.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),w.push(U.x,U.y,U.z),j++,R++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+M),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+M),M++}const q=B,Z=R-B;p.userData.groupNames=T,p.addGroup(q,Z,N),N++}return p.setAttribute("position",new Ft(C,3)),p.setAttribute("normal",new Ft(w,3)),p}function c(f){return typeof f!="string"?new TextDecoder().decode(f):f}function u(f){if(typeof f=="string"){const p=new Uint8Array(f.length);for(let g=0;g<f.length;g++)p[g]=f.charCodeAt(g)&255;return p.buffer||p}else return f}const d=u(e);return t(d)?s(d):a(c(e))}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class ki{constructor(e,t,n,s,a="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),ki.nextNameID=ki.nextNameID||0,this.$name.id=`lil-gui-name-${++ki.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class _R extends ki{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Rf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const yR={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Rf,toHexString:Rf},za={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},xR={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=za.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const s=r*n<<16^e*n<<8^t*n<<0;return za.toHexString(s)}},SR={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=za.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const s=r*n<<16^e*n<<8^t*n<<0;return za.toHexString(s)}},MR=[yR,za,xR,SR];function ER(r){return MR.find(e=>e.match(r))}class wR extends ki{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ER(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Rf(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ph extends ki{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class TR extends ki{constructor(e,t,n,s,a,c){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(a);const u=c!==void 0;this.step(u?c:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},n=C=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+C),this.$input.value=this.getValue())},s=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),n(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),n(this._step*this._arrowKeyMultiplier(C)*-1))},a=C=>{this._inputFocused&&(C.preventDefault(),n(this._step*this._normalizeMouseWheel(C)))};let c=!1,u,d,f,p,g;const m=5,y=C=>{u=C.clientX,d=f=C.clientY,c=!0,p=this.getValue(),g=0,window.addEventListener("mousemove",M),window.addEventListener("mouseup",E)},M=C=>{if(c){const w=C.clientX-u,T=C.clientY-d;Math.abs(T)>m?(C.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>m&&E()}if(!c){const w=C.clientY-f;g-=w*this._step*this._arrowKeyMultiplier(C),p+g>this._max?g=this._max-p:p+g<this._min&&(g=this._min-p),this._snapClampSetValue(p+g)}f=C.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",E)},x=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,C,w,T,U)=>(_-C)/(w-C)*(U-T)+T,t=_=>{const C=this.$slider.getBoundingClientRect();let w=e(_,C.left,C.right,this._min,this._max);this._snapClampSetValue(w)},n=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",a)},s=_=>{t(_.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a)};let c=!1,u,d;const f=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),c=!1},p=_=>{_.touches.length>1||(this._hasScrollBar?(u=_.touches[0].clientX,d=_.touches[0].clientY,c=!0):f(_),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",m))},g=_=>{if(c){const C=_.touches[0].clientX-u,w=_.touches[0].clientY-d;Math.abs(C)>Math.abs(w)?f(_):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",m))}else _.preventDefault(),t(_.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",m)},y=this._callOnFinishChange.bind(this),M=400;let E;const x=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const w=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(y,M)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class AR extends ki{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class bR extends ki{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var CR=`.lil-gui {
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
}`;function RR(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Sv=!1;class uu{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:a="Controls",closeFolders:c=!1,injectStyles:u=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Sv&&u&&(RR(CR),Sv=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=c}add(e,t,n,s,a){if(Object(n)===n)return new AR(this,e,t,n);const c=e[t];switch(typeof c){case"number":return new TR(this,e,t,n,s,a);case"boolean":return new _R(this,e,t);case"string":return new bR(this,e,t);case"function":return new Ph(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,n=1){return new wR(this,e,t,n)}addFolder(e){const t=new uu({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ph||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ph)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function PR(){const r=ie.useRef(null);return ie.useEffect(()=>{if(!r.current)return;const e=r.current,t=new qf;t.background=new Ze(1710618);const n=400,s=400,a=new wn(50,n/s,.1,1e3);a.position.set(0,80,150),a.lookAt(0,30,0);const c=new cp({antialias:!0});c.setSize(n,s),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=Bf,c.toneMapping=zf,c.toneMappingExposure=2,r.current.appendChild(c.domElement);const u=new dp(a,c.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.target.set(0,20,0),u.autoRotate=!0,u.autoRotateSpeed=2,u.update();const d=new rp(16777215,3);d.position.set(0,120,0),d.angle=.6,d.penumbra=.5,d.decay=1,d.distance=250,d.castShadow=!0,d.shadow.bias=-.001,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,t.add(d);const f=new lu(6316128,1.2);t.add(f);const p=new R_(16777215,4473924,1);p.position.set(0,200,0),t.add(p);const g=new sp(16777215,1);g.position.set(100,150,50),g.castShadow=!0,t.add(g);const m=new ko(200,200),y=new Ra({color:9340034,roughness:.4,metalness:.4}),M=new hn(m,y);M.rotation.x=-Math.PI/2,M.position.y=0,M.receiveShadow=!0,t.add(M);const E=new VE({color:16711680,metalness:.6,roughness:.47,clearcoat:.8,clearcoatRoughness:.2,emissive:3355443,emissiveIntensity:0,sheen:.5,sheenRoughness:.4});let x=null;new vR().load("/assets/cockroach.stl",function(O){x=new hn(O,E),x.castShadow=!0,x.receiveShadow=!0,O.center(),O.computeBoundingBox();const oe=O.boundingBox,Ae=new H;oe?.getSize(Ae);const he=70/Math.max(Ae.x,Ae.y,Ae.z);x.scale.set(he,he,he),x.position.y=20,t.add(x),d.target=x;let ve=0;const pe=()=>{if(requestAnimationFrame(pe),ve+=.03,x){x.rotation.y=ve*.8;const be=Math.abs(Math.sin(ve*2))*8,Ie=Math.sin(ve*2)*.4;x.position.y=20+be,x.position.x=Math.sin(ve)*8,x.rotation.z=-Ie;const qe=Math.cos(ve*2)*.2;x.rotation.x=qe}C.update(),B(),u.update(),c.render(t,a)};pe()},void 0,function(O){console.error("Error loading STL:",O)});const C=new L_(d);C.visible=!1,t.add(C);const w=new D_(p,20);w.visible=!1,t.add(w);const T=new I_(g,10);T.visible=!1,t.add(T);const U=new su(5,10,32),I=new Xa({color:16776960,wireframe:!0}),N=new hn(U,I);N.position.copy(d.position),t.add(N);const B=()=>{const O=new H;O.subVectors(d.target.position,d.position).normalize();const oe=new xn;oe.setFromUnitVectors(new H(0,1,0),O),N.setRotationFromQuaternion(oe)},R=new uu,A=R.addFolder("Luz Principal (Spot)");A.add(d.position,"x",-200,200,1).name("Pos X"),A.add(d.position,"y",0,300,1).name("Pos Y"),A.add(d.position,"z",-200,200,1).name("Pos Z"),A.add(d,"angle",0,Math.PI/2,.01).name("Ángulo"),A.add(d,"intensity",0,5,.01).name("Intensidad"),A.add(d,"penumbra",0,1,.01).name("Penumbra"),A.add(d,"decay",0,2,.01).name("Decay"),A.open();const F=R.addFolder("Luz Ambiente");F.add(f,"intensity",0,5,.1).name("Intensidad"),F.open();const q=R.addFolder("Luz Hemisférica");q.add(p,"intensity",0,5,.1).name("Intensidad"),q.add(p.position,"x",-300,300,1).name("Pos X"),q.add(p.position,"y",0,300,1).name("Pos Y"),q.add(p.position,"z",-300,300,1).name("Pos Z"),q.open();const Z=R.addFolder("Luz Direccional");Z.add(g,"intensity",0,5,.1).name("Intensidad"),Z.add(g.position,"x",-300,300,1).name("Pos X"),Z.add(g.position,"y",0,300,1).name("Pos Y"),Z.add(g.position,"z",-300,300,1).name("Pos Z"),Z.open();const j=R.addFolder("Material Cucaracha");j.addColor({color:E.color.getHex()},"color").name("Color").onChange(O=>{E.color.set(O)}),j.add(E,"metalness",0,1,.01).name("Metalness"),j.add(E,"roughness",0,1,.01).name("Roughness"),j.add(E,"emissiveIntensity",0,5,.1).name("Emissive Int."),j.open();const ee=R.addFolder("Material Piso");ee.addColor({color:y.color.getHex()},"color").name("Color Piso").onChange(O=>{y.color.set(O)}),ee.add(y,"metalness",0,1,.01).name("Metalness"),ee.add(y,"roughness",0,1,.01).name("Roughness"),ee.open();const J=R.addFolder("Cámara");J.add(a.position,"x",-200,200,1).name("Pos X"),J.add(a.position,"y",0,300,1).name("Pos Y"),J.add(a.position,"z",0,300,1).name("Pos Z"),J.add(u,"autoRotate").name("Auto Rotar"),J.add(u,"autoRotateSpeed",-10,10,.1).name("Vel. Rotación"),J.open();const ne=R.addFolder("Cucaracha"),V={posX:0,posY:20,posZ:0,rotX:0,rotY:0,rotZ:0};ne.add(V,"posX",-2e3,2e3,1).name("Pos X").onChange(()=>{x&&(x.position.x=V.posX)}),ne.add(V,"posY",-2e3,2e3,1).name("Pos Y").onChange(()=>{x&&(x.position.y=V.posY)}),ne.add(V,"posZ",-2e3,2e3,1).name("Pos Z").onChange(()=>{x&&(x.position.z=V.posZ)}),ne.add(V,"rotX",-360,360,1).name("Rot X").onChange(()=>{x&&(x.rotation.x=V.rotX)}),ne.add(V,"rotY",-360,360,1).name("Rot Y").onChange(()=>{x&&(x.rotation.y=V.rotY)}),ne.add(V,"rotZ",-360,360,1).name("Rot Z").onChange(()=>{x&&(x.rotation.z=V.rotZ)}),ne.open();const Q=R.addFolder("Debug Helpers"),le={mainLightHelper:!1,hemiLightHelper:!1,dirLightHelper:!1};return Q.add(le,"mainLightHelper").name("Main Light Helper").onChange(O=>{C.visible=O}),Q.add(le,"hemiLightHelper").name("Hemisphere Helper").onChange(O=>{w.visible=O}),Q.add(le,"dirLightHelper").name("Dir Light Helper").onChange(O=>{T.visible=O}),Q.open(),()=>{R.destroy(),e&&e.removeChild(c.domElement),c.dispose()}},[]),L.jsx("div",{ref:r,className:"flex items-center justify-center",style:{width:"400px",height:"400px",transform:"scale(0.85)",transformOrigin:"center",margin:"-50px"}})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var pi=Uint8Array,yo=Uint16Array,LR=Int32Array,z_=new pi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),V_=new pi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),DR=new pi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),H_=function(r,e){for(var t=new yo(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var s=new LR(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)s[a]=a-t[n]<<5|n;return{b:t,r:s}},G_=H_(z_,2),W_=G_.b,IR=G_.r;W_[28]=258,IR[258]=28;var NR=H_(V_,0),FR=NR.b,Pf=new yo(32768);for(var jt=0;jt<32768;++jt){var zr=(jt&43690)>>1|(jt&21845)<<1;zr=(zr&52428)>>2|(zr&13107)<<2,zr=(zr&61680)>>4|(zr&3855)<<4,Pf[jt]=((zr&65280)>>8|(zr&255)<<8)>>1}var Pa=function(r,e,t){for(var n=r.length,s=0,a=new yo(e);s<n;++s)r[s]&&++a[r[s]-1];var c=new yo(e);for(s=1;s<e;++s)c[s]=c[s-1]+a[s-1]<<1;var u;if(t){u=new yo(1<<e);var d=15-e;for(s=0;s<n;++s)if(r[s])for(var f=s<<4|r[s],p=e-r[s],g=c[r[s]-1]++<<p,m=g|(1<<p)-1;g<=m;++g)u[Pf[g]>>d]=f}else for(u=new yo(n),s=0;s<n;++s)r[s]&&(u[s]=Pf[c[r[s]-1]++]>>15-r[s]);return u},qa=new pi(288);for(var jt=0;jt<144;++jt)qa[jt]=8;for(var jt=144;jt<256;++jt)qa[jt]=9;for(var jt=256;jt<280;++jt)qa[jt]=7;for(var jt=280;jt<288;++jt)qa[jt]=8;var j_=new pi(32);for(var jt=0;jt<32;++jt)j_[jt]=5;var UR=Pa(qa,9,1),kR=Pa(j_,5,1),Lh=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Ai=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Dh=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},OR=function(r){return(r+7)/8|0},BR=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new pi(r.subarray(e,t))},zR=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],bi=function(r,e,t){var n=new Error(e||zR[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,bi),!t)throw n;return n},VR=function(r,e,t,n){var s=r.length,a=0;if(!s||e.f&&!e.l)return t||new pi(0);var c=!t,u=c||e.i!=2,d=e.i;c&&(t=new pi(s*3));var f=function(Lt){var pt=t.length;if(Lt>pt){var It=new pi(Math.max(pt*2,Lt));It.set(t),t=It}},p=e.f||0,g=e.p||0,m=e.b||0,y=e.l,M=e.d,E=e.m,x=e.n,_=s*8;do{if(!y){p=Ai(r,g,1);var C=Ai(r,g+1,3);if(g+=3,C)if(C==1)y=UR,M=kR,E=9,x=5;else if(C==2){var I=Ai(r,g,31)+257,N=Ai(r,g+10,15)+4,B=I+Ai(r,g+5,31)+1;g+=14;for(var R=new pi(B),A=new pi(19),F=0;F<N;++F)A[DR[F]]=Ai(r,g+F*3,7);g+=N*3;for(var q=Lh(A),Z=(1<<q)-1,j=Pa(A,q,1),F=0;F<B;){var ee=j[Ai(r,g,Z)];g+=ee&15;var w=ee>>4;if(w<16)R[F++]=w;else{var J=0,ne=0;for(w==16?(ne=3+Ai(r,g,3),g+=2,J=R[F-1]):w==17?(ne=3+Ai(r,g,7),g+=3):w==18&&(ne=11+Ai(r,g,127),g+=7);ne--;)R[F++]=J}}var V=R.subarray(0,I),Q=R.subarray(I);E=Lh(V),x=Lh(Q),y=Pa(V,E,1),M=Pa(Q,x,1)}else bi(1);else{var w=OR(g)+4,T=r[w-4]|r[w-3]<<8,U=w+T;if(U>s){d&&bi(0);break}u&&f(m+T),t.set(r.subarray(w,U),m),e.b=m+=T,e.p=g=U*8,e.f=p;continue}if(g>_){d&&bi(0);break}}u&&f(m+131072);for(var le=(1<<E)-1,O=(1<<x)-1,oe=g;;oe=g){var J=y[Dh(r,g)&le],Ae=J>>4;if(g+=J&15,g>_){d&&bi(0);break}if(J||bi(2),Ae<256)t[m++]=Ae;else if(Ae==256){oe=g,y=null;break}else{var re=Ae-254;if(Ae>264){var F=Ae-257,he=z_[F];re=Ai(r,g,(1<<he)-1)+W_[F],g+=he}var ve=M[Dh(r,g)&O],pe=ve>>4;ve||bi(3),g+=ve&15;var Q=FR[pe];if(pe>3){var he=V_[pe];Q+=Dh(r,g)&(1<<he)-1,g+=he}if(g>_){d&&bi(0);break}u&&f(m+131072);var be=m+re;if(m<Q){var Ie=a-Q,qe=Math.min(Q,be);for(Ie+m<0&&bi(3);m<qe;++m)t[m]=n[Ie+m]}for(;m<be;++m)t[m]=t[m-Q]}}e.l=y,e.p=oe,e.b=m,e.f=p,y&&(p=1,e.m=E,e.d=M,e.n=x)}while(!p);return m!=t.length&&c?BR(t,0,m):t.subarray(0,m)},HR=new pi(0),GR=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&bi(6,"invalid zlib data"),(r[1]>>5&1)==1&&bi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function WR(r,e){return VR(r.subarray(GR(r),-4),{i:2},e,e)}var jR=typeof TextDecoder<"u"&&new TextDecoder,XR=0;try{jR.decode(HR,{stream:!0}),XR=1}catch{}function X_(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let s=r,a=n,c=Math.floor((s+a)/2);for(;e<t[c]||e>=t[c+1];)e<t[c]?a=c:s=c,c=Math.floor((s+a)/2);return c}function $R(r,e,t,n){const s=[],a=[],c=[];s[0]=1;for(let u=1;u<=t;++u){a[u]=e-n[r+1-u],c[u]=n[r+u]-e;let d=0;for(let f=0;f<u;++f){const p=c[f+1],g=a[u-f],m=s[f]/(p+g);s[f]=d+p*m,d=g*m}s[u]=d}return s}function YR(r,e,t,n){const s=X_(r,n,e),a=$R(s,n,r,e),c=new Mt(0,0,0,0);for(let u=0;u<=r;++u){const d=t[s-r+u],f=a[u],p=d.w*f;c.x+=d.x*p,c.y+=d.y*p,c.z+=d.z*p,c.w+=d.w*f}return c}function qR(r,e,t,n,s){const a=[];for(let g=0;g<=t;++g)a[g]=0;const c=[];for(let g=0;g<=n;++g)c[g]=a.slice(0);const u=[];for(let g=0;g<=t;++g)u[g]=a.slice(0);u[0][0]=1;const d=a.slice(0),f=a.slice(0);for(let g=1;g<=t;++g){d[g]=e-s[r+1-g],f[g]=s[r+g]-e;let m=0;for(let y=0;y<g;++y){const M=f[y+1],E=d[g-y];u[g][y]=M+E;const x=u[y][g-1]/u[g][y];u[y][g]=m+M*x,m=E*x}u[g][g]=m}for(let g=0;g<=t;++g)c[0][g]=u[g][t];for(let g=0;g<=t;++g){let m=0,y=1;const M=[];for(let E=0;E<=t;++E)M[E]=a.slice(0);M[0][0]=1;for(let E=1;E<=n;++E){let x=0;const _=g-E,C=t-E;g>=E&&(M[y][0]=M[m][0]/u[C+1][_],x=M[y][0]*u[_][C]);const w=_>=-1?1:-_,T=g-1<=C?E-1:t-g;for(let I=w;I<=T;++I)M[y][I]=(M[m][I]-M[m][I-1])/u[C+1][_+I],x+=M[y][I]*u[_+I][C];g<=C&&(M[y][E]=-M[m][E-1]/u[C+1][g],x+=M[y][E]*u[g][C]),c[E][g]=x;const U=m;m=y,y=U}}let p=t;for(let g=1;g<=n;++g){for(let m=0;m<=t;++m)c[g][m]*=p;p*=t-g}return c}function KR(r,e,t,n,s){const a=s<r?s:r,c=[],u=X_(r,n,e),d=qR(u,n,r,a,e),f=[];for(let p=0;p<t.length;++p){const g=t[p].clone(),m=g.w;g.x*=m,g.y*=m,g.z*=m,f[p]=g}for(let p=0;p<=a;++p){const g=f[u-r].clone().multiplyScalar(d[p][0]);for(let m=1;m<=r;++m)g.add(f[u-r+m].clone().multiplyScalar(d[p][m]));c[p]=g}for(let p=a+1;p<=s+1;++p)c[p]=new Mt(0,0,0);return c}function ZR(r,e){let t=1;for(let s=2;s<=r;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=r-e;++s)n*=s;return t/n}function JR(r){const e=r.length,t=[],n=[];for(let a=0;a<e;++a){const c=r[a];t[a]=new H(c.x,c.y,c.z),n[a]=c.w}const s=[];for(let a=0;a<e;++a){const c=t[a].clone();for(let u=1;u<=a;++u)c.sub(s[a-u].clone().multiplyScalar(ZR(a,u)*n[u]));s[a]=c.divideScalar(n[0])}return s}function QR(r,e,t,n,s){const a=KR(r,e,t,n,s);return JR(a)}class e2 extends EE{constructor(e,t,n,s,a){super();const c=t?t.length-1:0,u=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=a||c;for(let d=0;d<u;++d){const f=n[d];this.controlPoints[d]=new Mt(f.x,f.y,f.z,f.w)}}getPoint(e,t=new H){const n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=YR(this.degree,this.knots,this.controlPoints,s);return a.w!==1&&a.divideScalar(a.w),n.set(a.x,a.y,a.z)}getTangent(e,t=new H){const n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=QR(this.degree,this.knots,this.controlPoints,s,1);return n.copy(a[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Mt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let gt,rn,Gn;class t2 extends $r{constructor(e){super(e)}load(e,t,n,s){const a=this,c=a.path===""?aw.extractUrlBase(e):a.path,u=new b_(this.manager);u.setPath(a.path),u.setResponseType("arraybuffer"),u.setRequestHeader(a.requestHeader),u.setWithCredentials(a.withCredentials),u.load(e,function(d){try{t(a.parse(d,c))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},n,s)}parse(e,t){if(a2(e))gt=new o2().parse(e);else{const s=q_(e);if(!l2(s))throw new Error("THREE.FBXLoader: Unknown format.");if(Ev(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ev(s));gt=new s2().parse(s)}const n=new C_(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new n2(n,this.manager).parse(gt)}}class n2{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){rn=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),a=new i2().parse(s);return this.parseScene(s,a,n),Gn}parseConnections(){const e=new Map;return"Connections"in gt&&gt.Connections.connections.forEach(function(n){const s=n[0],a=n[1],c=n[2];e.has(s)||e.set(s,{parents:[],children:[]});const u={ID:a,relationship:c};e.get(s).parents.push(u),e.has(a)||e.set(a,{parents:[],children:[]});const d={ID:s,relationship:c};e.get(a).children.push(d)}),e}parseImages(){const e={},t={};if("Video"in gt.Objects){const n=gt.Objects.Video;for(const s in n){const a=n[s],c=parseInt(s);if(e[c]=a.RelativeFilename||a.Filename,"Content"in a){const u=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,d=typeof a.Content=="string"&&a.Content!=="";if(u||d){const f=this.parseImage(n[s]);t[a.RelativeFilename||a.Filename]=f}}}}for(const n in e){const s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase();let a;switch(s){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const c=new Uint8Array(t);return window.URL.createObjectURL(new Blob([c],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in gt.Objects){const n=gt.Objects.Texture;for(const s in n){const a=this.parseTexture(n[s],e);t.set(parseInt(s),a)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const s=e.WrapModeU,a=e.WrapModeV,c=s!==void 0?s.value:0,u=a!==void 0?a.value:0;if(n.wrapS=c===0?Da:sr,n.wrapT=u===0?Da:sr,"Scaling"in e){const d=e.Scaling.value;n.repeat.x=d[0],n.repeat.y=d[1]}if("Translation"in e){const d=e.Translation.value;n.offset.x=d[0],n.offset.y=d[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),s=e.FileName.split(".").pop().toLowerCase(),a=n.has(s)?this.manager.getHandler(`.${s}`):this.textureLoader;if(!a)return console.warn(`FBXLoader: ${s.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Tn;const c=a.path;c||a.setPath(this.textureLoader.path);const u=rn.get(e.id).children;let d;u!==void 0&&u.length>0&&t[u[0].ID]!==void 0&&(d=t[u[0].ID],(d.indexOf("blob:")===0||d.indexOf("data:")===0)&&a.setPath(void 0));const f=a.load(d);return a.setPath(c),f}parseMaterials(e){const t=new Map;if("Material"in gt.Objects){const n=gt.Objects.Material;for(const s in n){const a=this.parseMaterial(n[s],e);a!==null&&t.set(parseInt(s),a)}}return t}parseMaterial(e,t){const n=e.id,s=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!rn.has(n))return null;const c=this.parseParameters(e,t,n);let u;switch(a.toLowerCase()){case"phong":u=new wo;break;case"lambert":u=new HE;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),u=new wo;break}return u.setValues(c),u.name=s,u}parseParameters(e,t,n){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=ft.toWorkingColorSpace(new Ze().fromArray(e.Diffuse.value),Vt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=ft.toWorkingColorSpace(new Ze().fromArray(e.DiffuseColor.value),Vt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=ft.toWorkingColorSpace(new Ze().fromArray(e.Emissive.value),Vt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=ft.toWorkingColorSpace(new Ze().fromArray(e.EmissiveColor.value),Vt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=ft.toWorkingColorSpace(new Ze().fromArray(e.Specular.value),Vt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=ft.toWorkingColorSpace(new Ze().fromArray(e.SpecularColor.value),Vt));const a=this;return rn.get(n).children.forEach(function(c){const u=c.relationship;switch(u){case"Bump":s.bumpMap=a.getTexture(t,c.ID);break;case"Maya|TEX_ao_map":s.aoMap=a.getTexture(t,c.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=a.getTexture(t,c.ID),s.map!==void 0&&(s.map.colorSpace=Vt);break;case"DisplacementColor":s.displacementMap=a.getTexture(t,c.ID);break;case"EmissiveColor":s.emissiveMap=a.getTexture(t,c.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=Vt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=a.getTexture(t,c.ID);break;case"ReflectionColor":s.envMap=a.getTexture(t,c.ID),s.envMap!==void 0&&(s.envMap.mapping=Gc,s.envMap.colorSpace=Vt);break;case"SpecularColor":s.specularMap=a.getTexture(t,c.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=Vt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=a.getTexture(t,c.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",u);break}}),s}getTexture(e,t){return"LayeredTexture"in gt.Objects&&t in gt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=rn.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in gt.Objects){const n=gt.Objects.Deformer;for(const s in n){const a=n[s],c=rn.get(parseInt(s));if(a.attrType==="Skin"){const u=this.parseSkeleton(c,n);u.ID=s,c.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),u.geometryID=c.parents[0].ID,e[s]=u}else if(a.attrType==="BlendShape"){const u={id:s};u.rawTargets=this.parseMorphTargets(c,n),u.id=s,c.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=u}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(s){const a=t[s.ID];if(a.attrType!=="Cluster")return;const c={ID:s.ID,indices:[],weights:[],transformLink:new Ke().fromArray(a.TransformLink.a)};"Indexes"in a&&(c.indices=a.Indexes.a,c.weights=a.Weights.a),n.push(c)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let s=0;s<e.children.length;s++){const a=e.children[s],c=t[a.ID],u={name:c.attrName,initialWeight:c.DeformPercent,id:c.id,fullWeights:c.FullWeights.a};if(c.attrType!=="BlendShapeChannel")return;u.geoID=rn.get(parseInt(a.ID)).children.filter(function(d){return d.relationship===void 0})[0].ID,n.push(u)}return n}parseScene(e,t,n){Gn=new go;const s=this.parseModels(e.skeletons,t,n),a=gt.Objects.Model,c=this;s.forEach(function(d){const f=a[d.ID];c.setLookAtProperties(d,f),rn.get(d.ID).parents.forEach(function(g){const m=s.get(g.ID);m!==void 0&&m.add(d)}),d.parent===null&&Gn.add(d)}),this.bindSkeleton(e.skeletons,t,s),this.addGlobalSceneSettings(),Gn.traverse(function(d){if(d.userData.transformData){d.parent&&(d.userData.transformData.parentMatrix=d.parent.matrix,d.userData.transformData.parentMatrixWorld=d.parent.matrixWorld);const f=Y_(d.userData.transformData);d.applyMatrix4(f),d.updateWorldMatrix()}});const u=new r2().parse();Gn.children.length===1&&Gn.children[0].isGroup&&(Gn.children[0].animations=u,Gn=Gn.children[0]),Gn.animations=u}parseModels(e,t,n){const s=new Map,a=gt.Objects.Model;for(const c in a){const u=parseInt(c),d=a[c],f=rn.get(u);let p=this.buildSkeleton(f,e,u,d.attrName);if(!p){switch(d.attrType){case"Camera":p=this.createCamera(f);break;case"Light":p=this.createLight(f);break;case"Mesh":p=this.createMesh(f,t,n);break;case"NurbsCurve":p=this.createCurve(f,t);break;case"LimbNode":case"Root":p=new Tf;break;case"Null":default:p=new go;break}p.name=d.attrName?Pt.sanitizeNodeName(d.attrName):"",p.userData.originalName=d.attrName,p.ID=u}this.getTransformData(p,d),s.set(u,p)}return s}buildSkeleton(e,t,n,s){let a=null;return e.parents.forEach(function(c){for(const u in t){const d=t[u];d.rawBones.forEach(function(f,p){if(f.ID===c.ID){const g=a;a=new Tf,a.matrixWorld.copy(f.transformLink),a.name=s?Pt.sanitizeNodeName(s):"",a.userData.originalName=s,a.ID=n,d.bones[p]=a,g!==null&&a.add(g)}})}}),a}createCamera(e){let t,n;if(e.children.forEach(function(s){const a=gt.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Bt;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let a=1;n.NearPlane!==void 0&&(a=n.NearPlane.value/1e3);let c=1e3;n.FarPlane!==void 0&&(c=n.FarPlane.value/1e3);let u=window.innerWidth,d=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(u=n.AspectWidth.value,d=n.AspectHeight.value);const f=u/d;let p=45;n.FieldOfView!==void 0&&(p=n.FieldOfView.value);const g=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new wn(p,f,a,c),g!==null&&t.setFocalLength(g);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Bt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new Bt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){const a=gt.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Bt;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let a=16777215;n.Color!==void 0&&(a=ft.toWorkingColorSpace(new Ze().fromArray(n.Color.value),Vt));let c=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(c=0);let u=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?u=0:u=n.FarAttenuationEnd.value);const d=1;switch(s){case 0:t=new Zc(a,c,u,d);break;case 1:t=new sp(a,c);break;case 2:let f=Math.PI/3;n.InnerAngle!==void 0&&(f=Nn.degToRad(n.InnerAngle.value));let p=0;n.OuterAngle!==void 0&&(p=Nn.degToRad(n.OuterAngle.value),p=Math.max(p,1)),t=new rp(a,c,u,f,p,d);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Zc(a,c);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,a=null,c=null;const u=[];return e.children.forEach(function(d){t.has(d.ID)&&(a=t.get(d.ID)),n.has(d.ID)&&u.push(n.get(d.ID))}),u.length>1?c=u:u.length>0?c=u[0]:(c=new wo({name:$r.DEFAULT_MATERIAL_NAME,color:13421772}),u.push(c)),"color"in a.attributes&&u.forEach(function(d){d.vertexColors=!0}),a.FBX_Deformer?(s=new vE(a,c),s.normalizeSkinWeights()):s=new hn(a,c),s}createCurve(e,t){const n=e.children.reduce(function(a,c){return t.has(c.ID)&&(a=t.get(c.ID)),a},null),s=new ru({name:$r.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new qc(n,s)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Va(t.RotationOrder.value):n.eulerOrder=Va(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&rn.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const a=gt.Objects.Model[s.ID];if("Lcl_Translation"in a){const c=a.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(c),Gn.add(e.target)):e.lookAt(new H().fromArray(c))}}})}bindSkeleton(e,t,n){const s=this.parsePoseNodes();for(const a in e){const c=e[a];rn.get(parseInt(c.ID)).parents.forEach(function(d){if(t.has(d.ID)){const f=d.ID;rn.get(f).parents.forEach(function(g){n.has(g.ID)&&n.get(g.ID).bind(new Kf(c.bones),s[g.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in gt.Objects){const t=gt.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(a){e[a.Node]=new Ke().fromArray(a.Matrix.a)}):e[s.Node]=new Ke().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in gt){if("AmbientColor"in gt.GlobalSettings){const e=gt.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){const a=new Ze().setRGB(t,n,s,Vt);Gn.add(new lu(a,1))}}"UnitScaleFactor"in gt.GlobalSettings&&(Gn.userData.unitScaleFactor=gt.GlobalSettings.UnitScaleFactor.value)}}}class i2{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in gt.Objects){const n=gt.Objects.Geometry;for(const s in n){const a=rn.get(parseInt(s)),c=this.parseGeometry(a,n[s],e);t.set(parseInt(s),c)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const s=n.skeletons,a=[],c=e.parents.map(function(g){return gt.Objects.Model[g.ID]});if(c.length===0)return;const u=e.children.reduce(function(g,m){return s[m.ID]!==void 0&&(g=s[m.ID]),g},null);e.children.forEach(function(g){n.morphTargets[g.ID]!==void 0&&a.push(n.morphTargets[g.ID])});const d=c[0],f={};"RotationOrder"in d&&(f.eulerOrder=Va(d.RotationOrder.value)),"InheritType"in d&&(f.inheritType=parseInt(d.InheritType.value)),"GeometricTranslation"in d&&(f.translation=d.GeometricTranslation.value),"GeometricRotation"in d&&(f.rotation=d.GeometricRotation.value),"GeometricScaling"in d&&(f.scale=d.GeometricScaling.value);const p=Y_(f);return this.genGeometry(t,u,a,p)}genGeometry(e,t,n,s){const a=new fn;e.attrName&&(a.name=e.attrName);const c=this.parseGeoNode(e,t),u=this.genBuffers(c),d=new Ft(u.vertex,3);if(d.applyMatrix4(s),a.setAttribute("position",d),u.colors.length>0&&a.setAttribute("color",new Ft(u.colors,3)),t&&(a.setAttribute("skinIndex",new Yf(u.weightsIndices,4)),a.setAttribute("skinWeight",new Ft(u.vertexWeights,4)),a.FBX_Deformer=t),u.normal.length>0){const f=new ut().getNormalMatrix(s),p=new Ft(u.normal,3);p.applyNormalMatrix(f),a.setAttribute("normal",p)}if(u.uvs.forEach(function(f,p){const g=p===0?"uv":`uv${p}`;a.setAttribute(g,new Ft(u.uvs[p],2))}),c.material&&c.material.mappingType!=="AllSame"){let f=u.materialIndex[0],p=0;if(u.materialIndex.forEach(function(g,m){g!==f&&(a.addGroup(p,m-p,f),f=g,p=m)}),a.groups.length>0){const g=a.groups[a.groups.length-1],m=g.start+g.count;m!==u.materialIndex.length&&a.addGroup(m,u.materialIndex.length-m,f)}a.groups.length===0&&a.addGroup(0,u.materialIndex.length,u.materialIndex[0])}return this.addMorphTargets(a,e,n,s),a}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,a){s.indices.forEach(function(c,u){n.weightTable[c]===void 0&&(n.weightTable[c]=[]),n.weightTable[c].push({id:a,weight:s.weights[u]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,s=0,a=!1,c=[],u=[],d=[],f=[],p=[],g=[];const m=this;return e.vertexIndices.forEach(function(y,M){let E,x=!1;y<0&&(y=y^-1,x=!0);let _=[],C=[];if(c.push(y*3,y*3+1,y*3+2),e.color){const w=Ic(M,n,y,e.color);d.push(w[0],w[1],w[2])}if(e.skeleton){if(e.weightTable[y]!==void 0&&e.weightTable[y].forEach(function(w){C.push(w.weight),_.push(w.id)}),C.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const w=[0,0,0,0],T=[0,0,0,0];C.forEach(function(U,I){let N=U,B=_[I];T.forEach(function(R,A,F){if(N>R){F[A]=N,N=R;const q=w[A];w[A]=B,B=q}})}),_=w,C=T}for(;C.length<4;)C.push(0),_.push(0);for(let w=0;w<4;++w)p.push(C[w]),g.push(_[w])}if(e.normal){const w=Ic(M,n,y,e.normal);u.push(w[0],w[1],w[2])}e.material&&e.material.mappingType!=="AllSame"&&(E=Ic(M,n,y,e.material)[0],E<0&&(m.negativeMaterialIndices=!0,E=0)),e.uv&&e.uv.forEach(function(w,T){const U=Ic(M,n,y,w);f[T]===void 0&&(f[T]=[]),f[T].push(U[0]),f[T].push(U[1])}),s++,x&&(m.genFace(t,e,c,E,u,d,f,p,g,s),n++,s=0,c=[],u=[],d=[],f=[],p=[],g=[])}),t}getNormalNewell(e){const t=new H(0,0,0);for(let n=0;n<e.length;n++){const s=e[n],a=e[(n+1)%e.length];t.x+=(s.y-a.y)*(s.z+a.z),t.y+=(s.z-a.z)*(s.x+a.x),t.z+=(s.x-a.x)*(s.y+a.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new H(0,1,0):new H(0,0,1)).cross(t).normalize(),a=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:a}}flattenVertex(e,t,n){return new nt(e.dot(t),e.dot(n))}genFace(e,t,n,s,a,c,u,d,f,p){let g;if(p>3){const m=[],y=t.baseVertexPositions||t.vertexPositions;for(let _=0;_<n.length;_+=3)m.push(new H(y[n[_]],y[n[_+1]],y[n[_+2]]));const{tangent:M,bitangent:E}=this.getNormalTangentAndBitangent(m),x=[];for(const _ of m)x.push(this.flattenVertex(_,M,E));g=ep.triangulateShape(x,[])}else g=[[0,1,2]];for(const[m,y,M]of g)e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),e.vertex.push(t.vertexPositions[n[y*3]]),e.vertex.push(t.vertexPositions[n[y*3+1]]),e.vertex.push(t.vertexPositions[n[y*3+2]]),e.vertex.push(t.vertexPositions[n[M*3]]),e.vertex.push(t.vertexPositions[n[M*3+1]]),e.vertex.push(t.vertexPositions[n[M*3+2]]),t.skeleton&&(e.vertexWeights.push(d[m*4]),e.vertexWeights.push(d[m*4+1]),e.vertexWeights.push(d[m*4+2]),e.vertexWeights.push(d[m*4+3]),e.vertexWeights.push(d[y*4]),e.vertexWeights.push(d[y*4+1]),e.vertexWeights.push(d[y*4+2]),e.vertexWeights.push(d[y*4+3]),e.vertexWeights.push(d[M*4]),e.vertexWeights.push(d[M*4+1]),e.vertexWeights.push(d[M*4+2]),e.vertexWeights.push(d[M*4+3]),e.weightsIndices.push(f[m*4]),e.weightsIndices.push(f[m*4+1]),e.weightsIndices.push(f[m*4+2]),e.weightsIndices.push(f[m*4+3]),e.weightsIndices.push(f[y*4]),e.weightsIndices.push(f[y*4+1]),e.weightsIndices.push(f[y*4+2]),e.weightsIndices.push(f[y*4+3]),e.weightsIndices.push(f[M*4]),e.weightsIndices.push(f[M*4+1]),e.weightsIndices.push(f[M*4+2]),e.weightsIndices.push(f[M*4+3])),t.color&&(e.colors.push(c[m*3]),e.colors.push(c[m*3+1]),e.colors.push(c[m*3+2]),e.colors.push(c[y*3]),e.colors.push(c[y*3+1]),e.colors.push(c[y*3+2]),e.colors.push(c[M*3]),e.colors.push(c[M*3+1]),e.colors.push(c[M*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(a[m*3]),e.normal.push(a[m*3+1]),e.normal.push(a[m*3+2]),e.normal.push(a[y*3]),e.normal.push(a[y*3+1]),e.normal.push(a[y*3+2]),e.normal.push(a[M*3]),e.normal.push(a[M*3+1]),e.normal.push(a[M*3+2])),t.uv&&t.uv.forEach(function(E,x){e.uvs[x]===void 0&&(e.uvs[x]=[]),e.uvs[x].push(u[x][m*2]),e.uvs[x].push(u[x][m*2+1]),e.uvs[x].push(u[x][y*2]),e.uvs[x].push(u[x][y*2+1]),e.uvs[x].push(u[x][M*2]),e.uvs[x].push(u[x][M*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;n.forEach(function(c){c.rawTargets.forEach(function(u){const d=gt.Objects.Geometry[u.geoID];d!==void 0&&a.genMorphGeometry(e,t,d,s,u.name)})})}genMorphGeometry(e,t,n,s,a){const c=t.Vertices!==void 0?t.Vertices.a:[],u=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],d=n.Vertices!==void 0?n.Vertices.a:[],f=n.Indexes!==void 0?n.Indexes.a:[],p=e.attributes.position.count*3,g=new Float32Array(p);for(let E=0;E<f.length;E++){const x=f[E]*3;g[x]=d[E*3],g[x+1]=d[E*3+1],g[x+2]=d[E*3+2]}const m={vertexIndices:u,vertexPositions:g,baseVertexPositions:c},y=this.genBuffers(m),M=new Ft(y.vertex,3);M.name=a||n.attrName,M.applyMatrix4(s),e.morphAttributes.position.push(M)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a;let a=[];return n==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:a,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a;let a=[];return n==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:s,indices:a,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a;let a=[];n==="IndexToDirect"&&(a=e.ColorIndex.a);for(let c=0,u=new Ze;c<s.length;c+=4)u.fromArray(s,c),ft.toWorkingColorSpace(u,Vt),u.toArray(s,c);return{dataSize:4,buffer:s,indices:a,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const s=e.Materials.a,a=[];for(let c=0;c<s.length;++c)a.push(c);return{dataSize:1,buffer:s,indices:a,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new fn;const n=t-1,s=e.KnotVector.a,a=[],c=e.Points.a;for(let g=0,m=c.length;g<m;g+=4)a.push(new Mt().fromArray(c,g));let u,d;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){u=n,d=s.length-1-u;for(let g=0;g<n;++g)a.push(a[g])}const p=new e2(n,s,a,u,d).getPoints(a.length*12);return new fn().setFromPoints(p)}}class r2{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const s=t[n],a=this.addClip(s);e.push(a)}return e}parseClips(){if(gt.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=gt.Objects.AnimationCurveNode,t=new Map;for(const n in e){const s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:s.id,attr:s.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=gt.Objects.AnimationCurve;for(const n in t){const s={id:t[n].id,times:t[n].KeyTime.a.map(c2),values:t[n].KeyValueFloat.a},a=rn.get(s.id);if(a!==void 0){const c=a.parents[0].ID,u=a.parents[0].relationship;u.match(/X/)?e.get(c).curves.x=s:u.match(/Y/)?e.get(c).curves.y=s:u.match(/Z/)?e.get(c).curves.z=s:u.match(/DeformPercent/)&&e.has(c)&&(e.get(c).curves.morph=s)}}}parseAnimationLayers(e){const t=gt.Objects.AnimationLayer,n=new Map;for(const s in t){const a=[],c=rn.get(parseInt(s));c!==void 0&&(c.children.forEach(function(d,f){if(e.has(d.ID)){const p=e.get(d.ID);if(p.curves.x!==void 0||p.curves.y!==void 0||p.curves.z!==void 0){if(a[f]===void 0){const g=rn.get(d.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID;if(g!==void 0){const m=gt.Objects.Model[g.toString()];if(m===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",d);return}const y={modelName:m.attrName?Pt.sanitizeNodeName(m.attrName):"",ID:m.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Gn.traverse(function(M){M.ID===m.id&&(y.transform=M.matrix,M.userData.transformData&&(y.eulerOrder=M.userData.transformData.eulerOrder))}),y.transform||(y.transform=new Ke),"PreRotation"in m&&(y.preRotation=m.PreRotation.value),"PostRotation"in m&&(y.postRotation=m.PostRotation.value),a[f]=y}}a[f]&&(a[f][p.attr]=p)}else if(p.curves.morph!==void 0){if(a[f]===void 0){const g=rn.get(d.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,m=rn.get(g).parents[0].ID,y=rn.get(m).parents[0].ID,M=rn.get(y).parents[0].ID,E=gt.Objects.Model[M],x={modelName:E.attrName?Pt.sanitizeNodeName(E.attrName):"",morphName:gt.Objects.Deformer[g].attrName};a[f]=x}a[f][p.attr]=p}}}),n.set(parseInt(s),a))}return n}parseAnimStacks(e){const t=gt.Objects.AnimationStack,n={};for(const s in t){const a=rn.get(parseInt(s)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const c=e.get(a[0].ID);n[s]={name:t[s].attrName,layer:c}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new ZE(e.name,-1,t)}generateTracks(e){const t=[];let n=new H,s=new H;if(e.transform&&e.transform.decompose(n,new xn,s),n=n.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,s){const a=this.getTimesForAllAxes(t),c=this.getKeyframeTrackValues(a,t,n);return new Ba(e+"."+s,a,c)}generateRotationTrack(e,t,n,s,a){let c,u;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const m=this.interpolateRotations(t.x,t.y,t.z,a);c=m[0],u=m[1]}const d=Va(0);n!==void 0&&(n=n.map(Nn.degToRad),n.push(d),n=new dn().fromArray(n),n=new xn().setFromEuler(n)),s!==void 0&&(s=s.map(Nn.degToRad),s.push(d),s=new dn().fromArray(s),s=new xn().setFromEuler(s).invert());const f=new xn,p=new dn,g=[];if(!u||!c)return new Io(e+".quaternion",[0],[0]);for(let m=0;m<u.length;m+=3)p.set(u[m],u[m+1],u[m+2],a),f.setFromEuler(p),n!==void 0&&f.premultiply(n),s!==void 0&&f.multiply(s),m>2&&new xn().fromArray(g,(m-3)/3*4).dot(f)<0&&f.set(-f.x,-f.y,-f.z,-f.w),f.toArray(g,m/3*4);return new Io(e+".quaternion",c,g)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(a){return a/100}),s=Gn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Oa(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let a=1;a<t.length;a++){const c=t[a];c!==s&&(t[n]=c,s=c,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const s=n,a=[];let c=-1,u=-1,d=-1;return e.forEach(function(f){if(t.x&&(c=t.x.times.indexOf(f)),t.y&&(u=t.y.times.indexOf(f)),t.z&&(d=t.z.times.indexOf(f)),c!==-1){const p=t.x.values[c];a.push(p),s[0]=p}else a.push(s[0]);if(u!==-1){const p=t.y.values[u];a.push(p),s[1]=p}else a.push(s[1]);if(d!==-1){const p=t.z.values[d];a.push(p),s[2]=p}else a.push(s[2])}),a}interpolateRotations(e,t,n,s){const a=[],c=[];a.push(e.times[0]),c.push(Nn.degToRad(e.values[0])),c.push(Nn.degToRad(t.values[0])),c.push(Nn.degToRad(n.values[0]));for(let u=1;u<e.values.length;u++){const d=[e.values[u-1],t.values[u-1],n.values[u-1]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const f=d.map(Nn.degToRad),p=[e.values[u],t.values[u],n.values[u]];if(isNaN(p[0])||isNaN(p[1])||isNaN(p[2]))continue;const g=p.map(Nn.degToRad),m=[p[0]-d[0],p[1]-d[1],p[2]-d[2]],y=[Math.abs(m[0]),Math.abs(m[1]),Math.abs(m[2])];if(y[0]>=180||y[1]>=180||y[2]>=180){const E=Math.max(...y)/180,x=new dn(...f,s),_=new dn(...g,s),C=new xn().setFromEuler(x),w=new xn().setFromEuler(_);C.dot(w)&&w.set(-w.x,-w.y,-w.z,-w.w);const T=e.times[u-1],U=e.times[u]-T,I=new xn,N=new dn;for(let B=0;B<1;B+=1/E)I.copy(C.clone().slerp(w.clone(),B)),a.push(T+B*U),N.setFromQuaternion(I,s),c.push(N.x),c.push(N.y),c.push(N.z)}else a.push(e.times[u]),c.push(Nn.degToRad(e.values[u])),c.push(Nn.degToRad(t.values[u])),c.push(Nn.degToRad(n.values[u]))}return[a,c]}}class s2{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new $_,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,a){const c=s.match(/^[\s\t]*;/),u=s.match(/^[\s\t]*$/);if(c||u)return;const d=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),f=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),p=s.match("^\\t{"+(t.currentIndent-1)+"}}");d?t.parseNodeBegin(s,d):f?t.parseNodeProperty(s,f,n[++a]):p?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(d){return d.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:n},c=this.parseNodeAttr(s),u=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,a):n in u?(n==="PoseNode"?u.PoseNode.push(a):u[n].id!==void 0&&(u[n]={},u[n][u[n].id]=u[n]),c.id!==""&&(u[n][c.id]=a)):typeof c.id=="number"?(u[n]={},u[n][c.id]=a):n!=="Properties70"&&(n==="PoseNode"?u[n]=[a]:u[n]=a),typeof c.id=="number"&&(a.id=c.id),c.name!==""&&(a.attrName=c.name),c.type!==""&&(a.attrType=c.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&a===","&&(a=n.replace(/"/g,"").replace(/,$/,"").trim());const c=this.getCurrentNode();if(c.name==="Properties70"){this.parseNodeSpecialProperty(e,s,a);return}if(s==="C"){const d=a.split(",").slice(1),f=parseInt(d[0]),p=parseInt(d[1]);let g=a.split(",").slice(3);g=g.map(function(m){return m.trim().replace(/^"/,"")}),s="connections",a=[f,p],d2(a,g),c[s]===void 0&&(c[s]=[])}s==="Node"&&(c.id=a),s in c&&Array.isArray(c[s])?c[s].push(a):s!=="a"?c[s]=a:c.a=a,this.setCurrentProp(c,s),s==="a"&&a.slice(-1)!==","&&(c.a=Nh(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Nh(t.a))}parseNodeSpecialProperty(e,t,n){const s=n.split('",').map(function(p){return p.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=s[0],c=s[1],u=s[2],d=s[3];let f=s[4];switch(c){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":f=parseFloat(f);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":f=Nh(f);break}this.getPrevNode()[a]={type:c,type2:u,flag:d,value:f},this.setCurrentProp(this.getPrevNode(),a)}}class o2{parse(e){const t=new Mv(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const s=new $_;for(;!this.endOfContent(t);){const a=this.parseNode(t,n);a!==null&&s.add(a.name,a)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},s=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const c=e.getUint8(),u=e.getString(c);if(s===0)return null;const d=[];for(let m=0;m<a;m++)d.push(this.parseProperty(e));const f=d.length>0?d[0]:"",p=d.length>1?d[1]:"",g=d.length>2?d[2]:"";for(n.singleProperty=a===1&&e.getOffset()===s;s>e.getOffset();){const m=this.parseNode(e,t);m!==null&&this.parseSubNode(u,n,m)}return n.propertyList=d,typeof f=="number"&&(n.id=f),p!==""&&(n.attrName=p),g!==""&&(n.attrType=g),u!==""&&(n.name=u),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){const s=[];n.propertyList.forEach(function(a,c){c!==0&&s.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(a){t[a]=n[a]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],a=n.propertyList[1];const c=n.propertyList[2],u=n.propertyList[3];let d;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?d=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:d=n.propertyList[4],t[s]={type:a,type2:c,flag:u,value:d}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),a=e.getUint32(),c=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const u=WR(new Uint8Array(e.getArrayBuffer(c))),d=new Mv(u.buffer);switch(t){case"b":case"c":return d.getBooleanArray(s);case"d":return d.getFloat64Array(s);case"f":return d.getFloat32Array(s);case"i":return d.getInt32Array(s);case"l":return d.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Mv{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const s=n.indexOf(0);return s>=0&&(n=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(n)}}class $_{add(e,t){this[e]=t}}function a2(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===q_(r,0,e.length)}function l2(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(s){const a=r[s-1];return r=r.slice(t+s),t++,a}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function Ev(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function c2(r){return r/46186158e3}const u2=[];function Ic(r,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=r;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);const a=s*n.dataSize,c=a+n.dataSize;return h2(u2,n.buffer,a,c)}const Ih=new dn,ho=new H;function Y_(r){const e=new Ke,t=new Ke,n=new Ke,s=new Ke,a=new Ke,c=new Ke,u=new Ke,d=new Ke,f=new Ke,p=new Ke,g=new Ke,m=new Ke,y=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(ho.fromArray(r.translation));const M=Va(0);if(r.preRotation){const F=r.preRotation.map(Nn.degToRad);F.push(M),t.makeRotationFromEuler(Ih.fromArray(F))}if(r.rotation){const F=r.rotation.map(Nn.degToRad);F.push(r.eulerOrder||M),n.makeRotationFromEuler(Ih.fromArray(F))}if(r.postRotation){const F=r.postRotation.map(Nn.degToRad);F.push(M),s.makeRotationFromEuler(Ih.fromArray(F)),s.invert()}r.scale&&a.scale(ho.fromArray(r.scale)),r.scalingOffset&&u.setPosition(ho.fromArray(r.scalingOffset)),r.scalingPivot&&c.setPosition(ho.fromArray(r.scalingPivot)),r.rotationOffset&&d.setPosition(ho.fromArray(r.rotationOffset)),r.rotationPivot&&f.setPosition(ho.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(g.copy(r.parentMatrix),p.copy(r.parentMatrixWorld));const E=t.clone().multiply(n).multiply(s),x=new Ke;x.extractRotation(p);const _=new Ke;_.copyPosition(p);const C=_.clone().invert().multiply(p),w=x.clone().invert().multiply(C),T=a,U=new Ke;if(y===0)U.copy(x).multiply(E).multiply(w).multiply(T);else if(y===1)U.copy(x).multiply(w).multiply(E).multiply(T);else{const q=new Ke().scale(new H().setFromMatrixScale(g)).clone().invert(),Z=w.clone().multiply(q);U.copy(x).multiply(E).multiply(Z).multiply(T)}const I=f.clone().invert(),N=c.clone().invert();let B=e.clone().multiply(d).multiply(f).multiply(t).multiply(n).multiply(s).multiply(I).multiply(u).multiply(c).multiply(a).multiply(N);const R=new Ke().copyPosition(B),A=p.clone().multiply(R);return m.copyPosition(A),B=m.clone().multiply(U),B.premultiply(p.invert()),B}function Va(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Nh(r){return r.split(",").map(function(t){return parseFloat(t)})}function q_(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function d2(r,e){for(let t=0,n=r.length,s=e.length;t<s;t++,n++)r[n]=e[t]}function h2(r,e,t,n){for(let s=t,a=0;s<n;s++,a++)r[a]=e[s];return r}function f2(){const r=ie.useRef(null);return ie.useEffect(()=>{if(!r.current)return;const e=r.current,t=new qf;t.background=new Ze(1710618);const n=400,s=400,a=new wn(50,n/s,.1,1e3);a.position.set(0,80,150),a.lookAt(0,30,0);const c=new cp({antialias:!0});c.setSize(n,s),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=Bf,c.toneMapping=zf,c.toneMappingExposure=2,r.current.appendChild(c.domElement);const u=new dp(a,c.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.target.set(0,20,0),u.autoRotate=!0,u.autoRotateSpeed=1.3,u.update();const d=new rp(16777215,3);d.position.set(0,120,0),d.angle=.6,d.penumbra=.5,d.decay=1,d.distance=250,d.castShadow=!0,d.shadow.bias=-.001,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,t.add(d);const f=new lu(6316128,1.2);t.add(f);const p=new R_(16777215,4473924,1);p.position.set(0,200,0),t.add(p);const g=new sp(16777215,1);g.position.set(100,150,50),g.castShadow=!0,t.add(g);const m=new ko(200,200),y=new Ra({color:9340034,roughness:.4,metalness:.4}),M=new hn(m,y);M.rotation.x=-Math.PI/2,M.position.y=0,M.receiveShadow=!0,t.add(M);const x=new C_().load("/assets/uiacat/textures/Muchkin2_BaseColor.png");let _=null;new t2().load("/assets/uiacat/source/OiiaioooooiaiFin.fbx",Q=>{_=Q,Q.traverse(pe=>{pe instanceof hn&&(Array.isArray(pe.material)?pe.material.forEach(be=>{(be instanceof Ra||be instanceof wo)&&(be.map=x,be.needsUpdate=!0)}):(pe.material instanceof Ra||pe.material instanceof wo)&&(pe.material.map=x,pe.material.needsUpdate=!0),pe.castShadow=!0,pe.receiveShadow=!0)});const le=new As().setFromObject(Q),O=new H;le.getSize(O);const Ae=70/Math.max(O.x,O.y,O.z);Q.scale.set(Ae,Ae,Ae);const re=new H;le.getCenter(re),Q.position.sub(re.multiplyScalar(Ae)),Q.position.y=3,t.add(Q),d.target=Q;let he=0;const ve=()=>{if(requestAnimationFrame(ve),he+=.03,_){_.rotation.y=he*2;const pe=Math.abs(Math.sin(he*2))*8;_.position.y=10+pe}w.update(),R(),u.update(),c.render(t,a)};ve()},Q=>{console.log(Q.loaded/Q.total*100+"% loaded")},Q=>{console.error("Error loading FBX:",Q)});const w=new L_(d);w.visible=!1,t.add(w);const T=new D_(p,20);T.visible=!1,t.add(T);const U=new I_(g,10);U.visible=!1,t.add(U);const I=new su(5,10,32),N=new Xa({color:16776960,wireframe:!0}),B=new hn(I,N);B.position.copy(d.position),t.add(B);const R=()=>{const Q=new H;Q.subVectors(d.target.position,d.position).normalize();const le=new xn;le.setFromUnitVectors(new H(0,1,0),Q),B.setRotationFromQuaternion(le)},A=new uu,F=A.addFolder("Luz Principal (Spot)");F.add(d.position,"x",-200,200,1).name("Pos X"),F.add(d.position,"y",0,300,1).name("Pos Y"),F.add(d.position,"z",-200,200,1).name("Pos Z"),F.add(d,"angle",0,Math.PI/2,.01).name("Ángulo"),F.add(d,"intensity",0,5,.01).name("Intensidad"),F.add(d,"penumbra",0,1,.01).name("Penumbra"),F.add(d,"decay",0,2,.01).name("Decay"),F.open();const q=A.addFolder("Luz Ambiente");q.add(f,"intensity",0,5,.1).name("Intensidad"),q.open();const Z=A.addFolder("Luz Hemisférica");Z.add(p,"intensity",0,5,.1).name("Intensidad"),Z.add(p.position,"x",-300,300,1).name("Pos X"),Z.add(p.position,"y",0,300,1).name("Pos Y"),Z.add(p.position,"z",-300,300,1).name("Pos Z"),Z.open();const j=A.addFolder("Luz Direccional");j.add(g,"intensity",0,5,.1).name("Intensidad"),j.add(g.position,"x",-300,300,1).name("Pos X"),j.add(g.position,"y",0,300,1).name("Pos Y"),j.add(g.position,"z",-300,300,1).name("Pos Z"),j.open();const ee=A.addFolder("Material Piso");ee.addColor({color:y.color.getHex()},"color").name("Color Piso").onChange(Q=>{y.color.set(Q)}),ee.add(y,"metalness",0,1,.01).name("Metalness"),ee.add(y,"roughness",0,1,.01).name("Roughness"),ee.open();const J=A.addFolder("Cámara");J.add(a.position,"x",-200,200,1).name("Pos X"),J.add(a.position,"y",0,300,1).name("Pos Y"),J.add(a.position,"z",0,300,1).name("Pos Z"),J.add(u,"autoRotate").name("Auto Rotar"),J.add(u,"autoRotateSpeed",-10,10,.1).name("Vel. Rotación"),J.open();const ne=A.addFolder("Debug Helpers"),V={mainLightHelper:!1,hemiLightHelper:!1,dirLightHelper:!1};return ne.add(V,"mainLightHelper").name("Main Light Helper").onChange(Q=>{w.visible=Q}),ne.add(V,"hemiLightHelper").name("Hemisphere Helper").onChange(Q=>{T.visible=Q}),ne.add(V,"dirLightHelper").name("Dir Light Helper").onChange(Q=>{U.visible=Q}),ne.open(),()=>{A.destroy(),e&&e.removeChild(c.domElement),c.dispose()}},[]),L.jsx("div",{ref:r,className:"flex items-center justify-center",style:{width:"400px",height:"400px",transform:"scale(0.85)",transformOrigin:"center",margin:"-50px"}})}function p2({info:r,artType:e="donut"}){const t=()=>{switch(e){case"roach":return L.jsx(PR,{});case"cat":return L.jsx(f2,{});case"donut":default:return L.jsx(gR,{})}};return L.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start",children:[L.jsx("div",{className:"w-[200px] sm:w-[250px] md:w-[300px] shrink-0",children:t()}),L.jsxs("div",{className:"flex-grow text-xs sm:text-sm md:text-base",children:[L.jsxs("div",{className:"text-blue-400",children:[r.user,"@",L.jsx("span",{children:r.host})]}),L.jsx("div",{className:"text-gray-300",children:"---------------------"}),L.jsx("div",{className:"grid gap-1",children:[["OS",r.os],["Role",r.kernel],["Focus",r.focus],["Uptime",r.uptime],["Shell",r.shell],["Terminal",r.terminal],["Languages",r.skills.languages.map(n=>n.name).join(", ")],["Frameworks",r.skills.frameworks.map(n=>n.name).join(", ")],["Databases",[...r.skills.databases.relational,...r.skills.databases.nosql].join(", ")],["DevOps",r.skills.devops.map(n=>n.name).join(", ")],["Cloud",r.skills.cloud.map(n=>n.name).join(", ")],["Testing",r.skills.testing.map(n=>n.name).join(", ")]].map(([n,s])=>L.jsxs("div",{className:"flex flex-wrap",children:[L.jsxs("span",{className:"text-yellow-400 w-24 sm:w-28 md:w-32 shrink-0",children:[n,":"]}),L.jsx("span",{className:"text-gray-300 flex-1 break-words",children:s})]},n))})]})]})}const Fh=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"],m2=()=>{const[r,e]=ie.useState([]),[t,n]=ie.useState(!1),s=ie.useCallback(()=>{e([])},[]),a=ie.useCallback(()=>{n(!0),e([]),setTimeout(()=>{n(!1)},100)},[]);return ie.useEffect(()=>{const c=u=>{if(u.target instanceof HTMLInputElement||u.target instanceof HTMLTextAreaElement)return;const{key:d}=u;if(!d.startsWith("Arrow")){r.length>0&&s();return}e(f=>{const p=[...f,d];return Fh.slice(0,p.length).every((m,y)=>m===p[y])?p.length===Fh.length?(a(),[]):p:d.startsWith("Arrow")?[d]:[]})};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[r,s,a]),ie.useEffect(()=>{if(r.length>0){const c=setTimeout(()=>{s()},3e3);return()=>clearTimeout(c)}},[r,s]),{isActivated:t,currentSequence:r,progress:r.length/Fh.length*100}},g2=({isOpen:r,onClose:e,onSelectArt:t,currentArt:n})=>{const[s,a]=ie.useState(null),c=[{id:"cat",name:"🐱 Dancing Cat",description:"Adorable dancing cat animation",preview:`
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
      `}],u=f=>{t(f),e()},d=f=>{a(s===f?null:f)};return r?L.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[L.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:e}),L.jsxs("div",{className:"relative bg-gray-900 rounded-xl border border-gray-700 max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl",children:[L.jsx("div",{className:"bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white",children:L.jsxs("div",{className:"flex items-center justify-between",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx(MM,{className:"w-8 h-8"}),L.jsxs("div",{children:[L.jsx("h2",{className:"text-2xl font-bold",children:"🎮 Konami Code Activated!"}),L.jsx("p",{className:"text-blue-100",children:"Choose your secret ASCII art for neofetch"})]})]}),L.jsx("button",{onClick:e,className:"p-2 hover:bg-white/20 rounded-lg transition-colors",children:L.jsx(DM,{className:"w-6 h-6"})})]})}),L.jsxs("div",{className:"p-6 space-y-4 max-h-96 overflow-y-auto",children:[L.jsx("div",{className:"text-center mb-6",children:L.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300",children:[L.jsx("span",{children:"🎯"}),L.jsx("span",{children:"Secret Easter Egg Unlocked!"})]})}),c.map(f=>L.jsxs("div",{className:"space-y-2",children:[L.jsx("div",{className:`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:scale-[1.02] ${n===f.id?"border-blue-500 bg-blue-500/10":"border-gray-700 bg-gray-800/50 hover:border-gray-600"}`,onClick:()=>u(f.id),children:L.jsxs("div",{className:"flex items-center justify-between",children:[L.jsxs("div",{className:"flex-1",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("h3",{className:"text-lg font-semibold text-white",children:f.name}),n===f.id&&L.jsx("span",{className:"px-2 py-1 bg-blue-500 text-white text-xs rounded-full",children:"Active"})]}),L.jsx("p",{className:"text-gray-400 text-sm mt-1",children:f.description})]}),L.jsx("button",{onClick:p=>{p.stopPropagation(),d(f.id)},className:"p-2 hover:bg-gray-700 rounded-lg transition-colors",children:s===f.id?L.jsx(xM,{className:"w-5 h-5 text-gray-400"}):L.jsx(SM,{className:"w-5 h-5 text-gray-400"})})]})}),s===f.id&&L.jsx("div",{className:"ml-4 p-3 bg-gray-900 rounded border-l-4 border-blue-500",children:L.jsx("pre",{className:"text-green-400 text-xs font-mono whitespace-pre",children:f.preview})})]},f.id))]}),L.jsx("div",{className:"border-t border-gray-700 p-4 bg-gray-800/50",children:L.jsxs("div",{className:"text-center text-xs text-gray-500",children:[L.jsx("p",{children:"🎮 Konami Code: ↑↑↓↓←→←→"}),L.jsx("p",{children:"Your selection will be saved for future neofetch commands"})]})})]})]}):null},v2=["neofetch","help","clear","ls","pwd","cat","cv","resume","projects","contact","tree"];function _2({userInfo:r={}}){const[e,t]=ie.useState([]),[n,s]=ie.useState([]),[a,c]=ie.useState(-1),[u,d]=ie.useState(""),[f,p]=ie.useState([]),g=ie.useRef(null),m=ie.useRef(null),y=If(),{currentCommand:M,setCurrentCommand:E}=Wv(),{isActivated:x}=m2(),{currentArt:_,setCurrentArt:C}=cM(),[w,T]=ie.useState(!1),U=ie.useMemo(()=>({...kM,...r}),[r]),I=ie.useMemo(()=>new zM(U),[U]),N=ie.useRef(!1),B=I.fileSystem,R=I.currentPath;ie.useEffect(()=>{g.current&&g.current.focus()},[]);const A=ie.useCallback((j,ee)=>{const J=j.trim();if(!J)return;if(s(V=>[...V,J].slice(-50)),c(-1),J.toLowerCase()==="neofetch"){t(V=>[...V,{command:j,output:L.jsx(p2,{info:U,artType:ee||_}),isNeofetch:!0}]);return}const ne=I.processCommand(j);ne===null?t([]):(t(V=>[...V,ne]),ne.action==="navigate"&&ne.path&&setTimeout(()=>y(ne.path),1e3))},[U,I,y,_]);ie.useEffect(()=>{N.current||(A("neofetch"),E("help"),N.current=!0)},[A]),ie.useEffect(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},[e]),ie.useEffect(()=>{x&&T(!0)},[x]);const F=j=>{const[ee,...J]=j.split(" ");if(!j.includes(" ")){const ne=v2.filter(V=>V.startsWith(j.toLowerCase()));return p(ne.length>1?ne:[]),ne.length===1?ne[0].slice(j.length):""}if(ee.toLowerCase()==="cat"&&J.length<=1){const ne=B[R];if(ne){const V=Object.keys(ne),Q=J[0]||"",le=V.filter(O=>O.startsWith(Q.toLowerCase()));if(p(le.length>1?le:[]),le.length===1)return le[0].slice(Q.length)}}if(n.length>0){const ne=n.filter(V=>V.startsWith(j)).slice(-3);if(ne.length>0){const V=ne[ne.length-1];if(V!==j)return V.slice(j.length)}}return p([]),""},q=j=>{const ee=j.target.value;E(ee),d(F(ee))},Z=j=>{if(j.key==="Enter"){const ee=M.trim();ee&&(A(ee),E(""),d(""))}else if(j.key==="Tab")j.preventDefault(),u&&(E(ee=>ee+u),d(""));else if(j.key==="ArrowUp"){if(j.preventDefault(),n.length>0){const ee=a===-1?n.length-1:Math.max(0,a-1);c(ee),E(n[ee]),d("")}}else if(j.key==="ArrowDown"&&(j.preventDefault(),a>=0)){if(a===n.length-1)c(-1),E("");else{const ee=a+1;c(ee),E(n[ee])}d("")}};return L.jsxs("div",{className:"p-2 sm:p-4 lg:p-6 border-none outline-none",children:[L.jsx("div",{className:"max-w-[90vw] xl:max-w-[75vw] 2xl:max-w-[65vw] mx-auto",children:L.jsxs("div",{className:"rounded-lg overflow-hidden shadow-xl transition-colors duration-300 border-2",style:{backgroundColor:"var(--terminal-bg)",borderColor:"var(--terminal-border)"},children:[L.jsxs("div",{className:"px-2 sm:px-4 py-1 sm:py-2 flex items-center transition-colors duration-300",style:{backgroundColor:"var(--bg-secondary)"},children:[L.jsxs("div",{className:"flex space-x-1 sm:space-x-2",children:[L.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"}),L.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),L.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"})]}),L.jsx("div",{className:"text-xs sm:text-sm mx-auto transition-colors duration-300",style:{color:"var(--text-secondary)"},children:"Terminal"})]}),L.jsxs("div",{ref:m,className:`p-2 sm:p-4 md:p-6 font-mono text-xs sm:text-sm md:text-base \r
                                 h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[65vh]\r
                                 overflow-y-auto relative`,onClick:()=>g.current?.focus(),children:[e.map((j,ee)=>L.jsxs("div",{className:"mb-2 sm:mb-4",children:[L.jsxs("div",{className:"break-all transition-colors duration-300",style:{color:"var(--terminal-prompt)"},children:["➜ ",j.command]}),L.jsx("div",{className:`${j.isNeofetch?"":"transition-colors duration-300"} break-words`,style:j.isNeofetch?{}:{color:"var(--terminal-text)"},children:j.output})]},ee)),L.jsxs("div",{className:"flex items-center relative",children:[L.jsx("span",{className:"transition-colors duration-300",style:{color:"var(--terminal-prompt)"},children:"➜"}),L.jsxs("div",{className:"flex-1 ml-2 relative",children:[L.jsx("input",{ref:g,type:"text",value:M,onChange:q,onKeyDown:Z,className:"w-full bg-transparent outline-none transition-colors duration-300",style:{color:"var(--terminal-text)"},autoFocus:!0}),u&&L.jsx("span",{className:"absolute left-0 transition-colors duration-300",style:{paddingLeft:`${M.length}ch`,color:"var(--terminal-suggestion)"},children:u})]})]}),f.length>0&&L.jsxs("div",{className:"mt-2 text-xs transition-colors duration-300",style:{color:"var(--terminal-suggestion)"},children:[L.jsx("div",{className:"mb-1",children:"Available options:"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:f.map((j,ee)=>L.jsx("span",{className:"px-2 py-1 rounded cursor-pointer hover:opacity-80 transition-all duration-300",style:{backgroundColor:"var(--bg-tertiary)",color:"var(--terminal-text)"},onClick:()=>{E(j),p([]),g.current?.focus()},children:j},ee))}),L.jsx("div",{className:"mt-1 transition-colors duration-300",style:{color:"var(--terminal-suggestion)"},children:"Click to select or continue typing..."})]})]})]})}),L.jsx(g2,{isOpen:w,onClose:()=>T(!1),onSelectArt:j=>{C(j),setTimeout(()=>{A("clear"),setTimeout(()=>{A("neofetch",j)},100)},500)},currentArt:_})]})}const wv=({name:r,color:e="blue"})=>L.jsx("span",{className:`bg-${e}-100 text-${e}-800 px-3 py-1 rounded-full text-sm`,children:r}),y2=()=>{const r=[{company:"Valposystems",period:"Octubre 2023 - Mayo 2025",location:"Talca, Chile",position:"Programador Full Stack",projects:[{name:"Proyecto EVAST",description:"Sistema de gestión de riesgos para la salud",responsibilities:["Diseño, desarrollo y mantenimiento de sistema de gestión de riesgos para la salud, enfocado en vigilancia ambiental y salud de trabajadores expuestos a agentes de riesgo.","Mantenimiento de la aplicación web EVAST, facilitando el ingreso y mantenimiento de registros de actividades de vigilancia ambiental y salud de trabajadores, incluyendo manejo del riesgo RPSL.","Implementación y mantenimiento de servicios backend, asegurando rendimiento óptimo y seguridad de datos.","Revisión de código y pruebas de integración para garantizar calidad y fiabilidad del software.","Implementación de mejoras continuas y correcciones basadas en feedback de usuarios."],integrations:["Implementación e integración de servicios SOAP para enviar documentos electrónicos al organismo SUSESO","Uso de JAXB para manipulación y transformación de e-docs","Cumplimiento de requerimientos normativos del Instituto de Seguridad Laboral (ISL)"],technologies:["Spring Boot","Apache Camel","Angular 8","Git","Gitflow","JBoss Fuse EAP","SQL Server","SCRUM","SOAP","JAXB"]}]},{company:"Gas Maule SPA",period:"Septiembre 2022 - Diciembre 2022",location:"Talca, Chile",position:"Programador Full Stack, Programador Móvil, Administrador de dominio, Administrador cloud",responsibilities:["Desarrollo de sistema existente basado en Laravel","Desarrollo de aplicación móvil de reparto de choferes en Android Studio","Desarrollo de aplicación móvil de pedido de gas clientes en Flutter","Administración de aplicaciones en servidores ECS Cloud (Huawei Cloud)","Gestión de página del dominio principal gasmaule.cl","Administración de Azure AD para correos institucionales"],technologies:["Laravel","Android Studio","Flutter","Huawei Cloud","Azure AD","PHP","MySQL","Git"]},{company:"Grupo Firma Holding Empresarial",period:"Octubre 2021 - Julio 2022",location:"Talca, Chile",position:"Programador Full Stack",description:"Desarrollo integral de sistema de RRHH",achievements:["Desarrollo de sistema completo para gestión de RRHH, incluyendo registro de empleados, liquidaciones y documentos","Creación de módulos para generación automática y distribución digital de documentos","Implementación de sistema de seguimiento de vacaciones y ausencias","Liderazgo de equipo de 4 desarrolladores","Aplicación de metodología de prototipos para desarrollo iterativo"],technologies:["NodeJS 16.0.0","Angular 13.0.0","MySQL","Git","Linux","SSH","PM2","Sequelize ORM","REST API","JWT"]},{company:"Ceho Servicios",period:"Febrero 2021 - Octubre 2021",location:"Regiones: V, VI, VII, VIII - Chile",position:"Soporte Informático en Terreno",responsibilities:["Asistencia técnica para equipos Totalpack, incluyendo instalaciones y mantención de hardware","Asistencia técnica para Atos, incluyendo instalación de telefonía IP y configuración de centrales telefónicas","Mantenimiento preventivo y correctivo de equipos","Configuración y mantenimiento de redes","Soporte técnico a usuarios finales"],technologies:["Windows Server","Redes IP","VoIP","Hardware","Soporte Técnico"]},{company:"Colegio San Ignacio de Talca",period:"Junio 2019 - Febrero 2020",location:"Talca, Chile",position:"Encargado Informático",responsibilities:["Soporte informático general","Administración de red interna","Mantenimiento de equipos computacionales","Gestión de sistemas de información educativa","Soporte a usuarios (profesores y personal administrativo)","Mantenimiento de infraestructura de red"],technologies:["Windows Server","Redes LAN/WAN","Active Directory","Soporte Técnico","Sistemas Educativos"]},{company:"Clínica Lircay",period:"Abril 2018 - Febrero 2019",location:"Talca, Chile",position:"Soporte Informático",responsibilities:["Administración y soporte de sistema propietario de procesos internos","Soporte informático general","Desarrollo de sistemas auxiliares en PHP","Mantenimiento de equipos médicos computarizados","Soporte a usuarios del sistema clínico","Gestión de respaldos y seguridad de datos"],technologies:["PHP","MySQL","Windows Server","Sistemas Clínicos","Redes","Backups","Soporte Técnico"]}];return L.jsxs("section",{className:"mb-8",children:[L.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-6 pb-2 flex items-center gap-2",children:[L.jsx(gM,{className:"w-6 h-6"}),"Experiencia Laboral"]}),L.jsx("div",{className:"space-y-8",children:r.map((e,t)=>L.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-6",children:[L.jsxs("div",{className:"flex justify-between items-start mb-4",children:[L.jsxs("div",{children:[L.jsx("h3",{className:"text-xl font-bold text-gray-800",children:e.company}),L.jsx("p",{className:"text-gray-600 font-semibold",children:e.position}),L.jsx("p",{className:"text-gray-500",children:e.location})]}),L.jsx("span",{className:"text-gray-600 font-medium",children:e.period})]}),e.description&&L.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),e.projects&&e.projects.map((n,s)=>L.jsxs("div",{className:"mt-4",children:[L.jsx("h4",{className:"text-lg font-semibold text-gray-700 mb-2",children:n.name}),L.jsx("p",{className:"text-gray-600 mb-3",children:n.description}),n.responsibilities&&L.jsx("div",{className:"mb-4",children:L.jsx("ul",{className:"list-disc pl-4 space-y-2",children:n.responsibilities.map((a,c)=>L.jsx("li",{className:"text-gray-600",children:a},c))})}),n.integrations&&L.jsxs("div",{className:"mb-4",children:[L.jsxs("h5",{className:"font-semibold text-gray-700 mb-2 flex items-center gap-2",children:[L.jsx(LM,{className:"w-4 h-4"}),"Integraciones"]}),L.jsx("ul",{className:"list-disc pl-4 space-y-2",children:n.integrations.map((a,c)=>L.jsx("li",{className:"text-gray-600",children:a},c))})]}),n.technologies&&L.jsxs("div",{className:"mt-4",children:[L.jsx("h5",{className:"font-semibold text-gray-700 mb-2",children:"Tecnologías"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:n.technologies.map((a,c)=>L.jsx(wv,{name:a},c))})]})]},s)),e.responsibilities&&L.jsx("div",{className:"mt-4",children:L.jsx("ul",{className:"list-disc pl-4 space-y-2",children:e.responsibilities.map((n,s)=>L.jsx("li",{className:"text-gray-600",children:n},s))})}),e.achievements&&L.jsxs("div",{className:"mt-4",children:[L.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"Logros principales"}),L.jsx("ul",{className:"list-disc pl-4 space-y-2",children:e.achievements.map((n,s)=>L.jsx("li",{className:"text-gray-600",children:n},s))})]}),e.technologies&&L.jsxs("div",{className:"mt-4",children:[L.jsx("h4",{className:"font-semibold text-gray-700 mb-2",children:"Tecnologías utilizadas"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:e.technologies.map((n,s)=>L.jsx(wv,{name:n},s))})]})]},t))})]})},x2=()=>{const r={languages:[{name:"Java",details:"Java 1.8, Java 11"},{name:"Python 3+"},{name:"PHP"},{name:"JavaScript/TypeScript"},{name:".NET"}],frameworks:[{name:"Spring Boot"},{name:"Laravel 7"},{name:"NodeJS 16+"},{name:"Angular 13+"},{name:"Ionic Angular"},{name:"Flask",details:"Python Web Framework"}],databases:{relational:["MySQL","PostgreSQL","Microsoft SQL","Oracle","MariaDB"],nosql:["MongoDB","Redis","Cassandra"]},devops:[{name:"Docker",level:"Avanzado"},{name:"Jenkins",details:"Pipelines, CI/CD"},{name:"Linux",details:"Administración de servidores"},{name:"GitHub Actions"}],cloud:[{name:"Railway"},{name:"AWS",details:"EC2"},{name:"VPN",details:"WireGuard"}],mobile:[{name:"Android Studio"},{name:"Flutter",details:"Publicación en Play Store"},{name:"Ionic Angular"}],testing:[{name:"Postman",details:"API Testing"},{name:"SonarQube",details:"Análisis de código"},{name:"Unit Testing"}],other:[{name:"WebSockets"},{name:"OAuth 2.0/JWT"},{name:"SSL/TLS"},{name:"Scrum"},{name:"Networking"}]};return L.jsxs("section",{className:"mb-8",children:[L.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:[L.jsx(Zv,{className:"inline-block w-6 h-6 mr-2"}),"Habilidades Técnicas"]}),L.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[L.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[L.jsx("h3",{className:"font-semibold mb-3",children:"Lenguajes y Frameworks"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:[...r.languages,...r.frameworks].map(e=>L.jsx("span",{className:"bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]}),L.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[L.jsx("h3",{className:"font-semibold mb-3",children:"Bases de Datos"}),L.jsxs("div",{className:"mb-2",children:[L.jsx("h4",{className:"text-sm text-gray-600 mb-1",children:"Relacionales"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:r.databases.relational.map(e=>L.jsx("span",{className:"bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm",children:e},e))})]}),L.jsxs("div",{children:[L.jsx("h4",{className:"text-sm text-gray-600 mb-1",children:"NoSQL"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:r.databases.nosql.map(e=>L.jsx("span",{className:"bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm",children:e},e))})]})]}),L.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[L.jsx("h3",{className:"font-semibold mb-3",children:"DevOps & Cloud"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:[...r.devops,...r.cloud].map(e=>L.jsx("span",{className:"bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm",children:e.details||e.level?`${e.name} (${e.details||e.level})`:e.name},e.name))})]}),L.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[L.jsx("h3",{className:"font-semibold mb-3",children:"Desarrollo Móvil"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:r.mobile.map(e=>L.jsx("span",{className:"bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]}),L.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[L.jsx("h3",{className:"font-semibold mb-3",children:"Testing y Herramientas"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:r.testing.map(e=>L.jsx("span",{className:"bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]}),L.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[L.jsx("h3",{className:"font-semibold mb-3",children:"Otras Habilidades"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:r.other.map(e=>L.jsx("span",{className:"bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm",children:e.details?`${e.name} (${e.details})`:e.name},e.name))})]})]})]})},S2=()=>{const r=[{period:"Marzo 2019 - Diciembre 2020",institution:"Universidad Católica del Maule",location:"Talca, Chile",degree:"Ingeniería en Ejecución Informática",status:"Egresado (No titulado)",type:"university"},{period:"Marzo 2016 - Diciembre 2018",institution:"Centro de formación técnica San Agustín",location:"Talca, Chile",degree:"Analista Programador",status:"Titulado",type:"technical"},{period:"Marzo 2012 - Diciembre 2015",institution:"Centro Educacional Luis Rutten",location:"Talca, Chile",degree:"Mecánica Automotriz",status:"Titulado",type:"highschool"}];return L.jsxs("section",{className:"mb-8",children:[L.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:[L.jsx(mM,{className:"inline-block w-6 h-6 mr-2"}),"Educación"]}),L.jsx("div",{className:"space-y-4",children:r.map((e,t)=>L.jsx("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm",children:L.jsx("div",{className:"flex justify-between items-start",children:L.jsxs("div",{className:"space-y-2",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx(wM,{className:"w-5 h-5 text-gray-600"}),L.jsx("h3",{className:"font-bold text-gray-800 text-lg",children:e.institution})]}),L.jsx("div",{className:"text-gray-700 font-medium",children:e.degree}),L.jsxs("div",{className:"flex items-center gap-4 text-gray-600 text-sm",children:[L.jsxs("div",{className:"flex items-center gap-1",children:[L.jsx(Kv,{className:"w-4 h-4"}),e.location]}),L.jsxs("div",{className:"flex items-center gap-1",children:[L.jsx(Bh,{className:"w-4 h-4"}),e.period]})]}),L.jsx("div",{className:`inline-block px-3 py-1 rounded-full text-sm ${e.status==="Titulado"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:e.status})]})})},t))})]})},M2=()=>{const r=[{title:"Scrum Fundamentals",org:"SCRUMstudy",validationType:"link",validation:"https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-luisestebanc%C3%A9spedessepulveda.-932279.pdf",icon:"🏆"},{title:"Desarrollo de aplicaciones JAVA",org:"MindHub",validationType:"link",validation:"https://www.credly.com/badges/2c88e9d6-41e6-4aab-8bdf-084e66cf782b",icon:"☕"},{title:"Programador Angular",org:"Edutin Academy",validationType:"link",validation:"https://app.edutin.com/verify/10410494",icon:"🅰️"}];return L.jsxs("section",{className:"mb-8",children:[L.jsxs("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:[L.jsx(pM,{className:"inline-block w-6 h-6 mr-2"}),"Certificaciones"]}),L.jsx("div",{className:"grid grid-cols-1 gap-4",children:r.map((e,t)=>L.jsx("div",{className:"bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow",children:L.jsxs("div",{className:"flex items-start gap-3",children:[L.jsx("span",{className:"text-2xl",role:"img","aria-label":"certificate icon",children:e.icon}),L.jsxs("div",{className:"flex-1",children:[L.jsxs("div",{className:"flex justify-between items-start",children:[L.jsx("h3",{className:"font-bold text-gray-800",children:e.title}),L.jsx("span",{className:"bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full",children:e.org})]}),L.jsx("div",{className:"mt-2 flex items-center gap-2 text-sm",children:e.validationType==="link"?L.jsxs(L.Fragment,{children:[L.jsx(AM,{className:"w-4 h-4 text-gray-600"}),L.jsx("a",{href:e.validation,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-800 underline",children:"Verificar certificación"})]}):L.jsxs(L.Fragment,{children:[L.jsx(vM,{className:"w-4 h-4 text-gray-600"}),L.jsxs("span",{className:"text-gray-600",children:["Código de validación: ",e.validation]})]})})]})]})},t))})]})},hp=new Date(1997,5,20),fp=new Date;let K_=fp.getFullYear()-hp.getFullYear();const Tv=fp.getMonth()-hp.getMonth();(Tv<0||Tv===0&&fp.getDate()<hp.getDate())&&K_--;const E2=()=>L.jsx("div",{className:"p-8",children:L.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-lg shadow-xl font-sans p-8",children:[L.jsxs("header",{className:"text-center mb-8",children:[L.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"Luis Esteban Céspedes Sepulveda"}),L.jsxs("div",{className:"flex justify-center gap-6 text-gray-600",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx(qv,{className:"w-4 h-4"}),L.jsx("span",{children:"luis.cespedes.sep01@gmail.com"})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx(RM,{className:"w-4 h-4"}),L.jsx("span",{children:"(+569) 53618681"})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx(Kv,{className:"w-4 h-4"}),L.jsx("span",{children:"Maule, Chile"})]})]})]}),L.jsxs("section",{className:"mb-8",children:[L.jsx("h2",{className:"text-2xl font-bold text-gray-800 border-b-2 border-gray-200 mb-4 pb-2",children:"Información Personal"}),L.jsxs("div",{className:"grid grid-cols-2 gap-4 text-gray-600",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx(Bh,{className:"w-4 h-4"}),L.jsxs("span",{children:["Edad: ",K_," años"]})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx(Bh,{className:"w-4 h-4"}),L.jsx("span",{children:"Fecha de Nacimiento: 20/06/1997"})]})]})]}),L.jsx(y2,{}),L.jsx(x2,{}),L.jsx(S2,{}),L.jsx(M2,{})]})});function w2(){return L.jsx(lM,{children:L.jsx(uM,{children:L.jsx(oM,{children:L.jsx(UM,{children:L.jsxs(bS,{children:[L.jsx(kh,{path:"/",element:L.jsx(_2,{})}),L.jsx(kh,{path:"/cv",element:L.jsx(E2,{})})]})})})})})}kx.createRoot(document.getElementById("root")).render(L.jsx(ie.StrictMode,{children:L.jsx(KS,{children:L.jsx(w2,{})})}));
