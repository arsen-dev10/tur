var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var te=ee.prototype=new b;te.constructor=ee,_(te,y.prototype),te.isPureReactComponent=!0;var ne=Array.isArray;function re(){}var x={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function S(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ae(e,t){return S(e.type,t,e.props)}function oe(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function se(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ce=/\/+/g;function le(e,t){return typeof e==`object`&&e&&e.key!=null?se(``+e.key):t.toString(36)}function ue(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(re,re):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function de(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,de(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+le(e,0):a,ne(o)?(i=``,c!=null&&(i=c.replace(ce,`$&/`)+`/`),de(o,r,i,``,function(e){return e})):o!=null&&(oe(o)&&(o=ae(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ce,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ne(e))for(var u=0;u<e.length;u++)a=e[u],s=l+le(a,u),c+=de(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+le(a,u++),c+=de(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return de(ue(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function fe(e,t,n){if(e==null)return e;var r=[],i=0;return de(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function pe(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function he(e){var t=x.T,n={};n.types=t===null?null:t.types,x.T=n;try{var r=e(),i=x.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(re,me)}catch(e){me(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),x.T=t}}function ge(e){var t=x.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else he(ge.bind(null,e))}var _e={map:fe,forEach:function(e,t,n){fe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fe(e,function(){t++}),t},toArray:function(e){return fe(e,function(e){return e})||[]},only:function(e){if(!oe(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=_e,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return x.H.useMemoCache(e)}},e.addTransitionType=ge,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ie.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return S(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ie.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return S(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=oe,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:pe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=he,e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},e.use=function(e){return x.H.use(e)},e.useActionState=function(e,t,n){return x.H.useActionState(e,t,n)},e.useCallback=function(e,t){return x.H.useCallback(e,t)},e.useContext=function(e){return x.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return x.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return x.H.useEffect(e,t)},e.useEffectEvent=function(e){return x.H.useEffectEvent(e)},e.useId=function(){return x.H.useId()},e.useImperativeHandle=function(e,t,n){return x.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return x.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return x.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return x.H.useMemo(e,t)},e.useOptimistic=function(e,t){return x.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return x.H.useReducer(e,t,n)},e.useRef=function(e){return x.H.useRef(e)},e.useState=function(e){return x.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return x.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return x.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,ae());else{var t=n(l);t!==null&&ce(ee,t.startTime-e)}}}var te=!1,ne=-1,re=5,x=-1;function ie(){return g?!0:!(e.unstable_now()-x<re)}function S(){if(g=!1,te){var t=e.unstable_now();x=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ne),ne=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ie());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ce(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ae():te=!1}}}var ae;if(typeof y==`function`)ae=function(){y(S)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=S,ae=function(){se.postMessage(null)}}else ae=function(){_(S,0)};function ce(t,n){ne=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):re=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ne),ne=-1):h=!0,ce(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,ae()))),r},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var ee=null,te=null;function ne(e,t,n){return e===n||e===t&&(ee=e,!0)}function re(e,t,n){return e===n?(te=e,!1):e===t&&(te!==null&&(ee=e),!0)}function x(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ie(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var S=Object.assign,ae=Symbol.for(`react.element`),oe=Symbol.for(`react.transitional.element`),se=Symbol.for(`react.portal`),ce=Symbol.for(`react.fragment`),le=Symbol.for(`react.strict_mode`),ue=Symbol.for(`react.profiler`),de=Symbol.for(`react.consumer`),fe=Symbol.for(`react.context`),pe=Symbol.for(`react.forward_ref`),me=Symbol.for(`react.suspense`),he=Symbol.for(`react.suspense_list`),ge=Symbol.for(`react.memo`),_e=Symbol.for(`react.lazy`),ve=Symbol.for(`react.activity`),ye=Symbol.for(`react.legacy_hidden`),be=Symbol.for(`react.memo_cache_sentinel`),xe=Symbol.for(`react.view_transition`),Se=Symbol.for(`react.recoverable`),Ce=Symbol.iterator;function we(e){return typeof e!=`object`||!e?null:(e=Ce&&e[Ce]||e[`@@iterator`],typeof e==`function`?e:null)}var Te=Symbol.for(`react.client.reference`);function Ee(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ce:return`Fragment`;case ue:return`Profiler`;case le:return`StrictMode`;case me:return`Suspense`;case he:return`SuspenseList`;case ve:return`Activity`;case xe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case se:return`Portal`;case fe:return e.displayName||`Context`;case de:return(e._context.displayName||`Context`)+`.Consumer`;case pe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ge:return t=e.displayName||null,t===null?Ee(e.type)||`Memo`:t;case _e:t=e._payload,e=e._init;try{return Ee(e(t))}catch{}}return null}var De=Array.isArray,C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oe={pending:!1,data:null,method:null,action:null},ke=[],Ae=-1;function je(e){return{current:e}}function Me(e){0>Ae||(e.current=ke[Ae],ke[Ae]=null,Ae--)}function T(e,t){Ae++,ke[Ae]=e.current,e.current=t}var Ne=je(null),Pe=je(null),Fe=je(null),Ie=je(null);function Le(e,t){switch(T(Fe,t),T(Pe,e),T(Ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Me(Ne),T(Ne,e)}function Re(){Me(Ne),Me(Pe),Me(Fe)}function ze(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,T(Ie,e)),t=Ne.current;var n=dp(t,e.type);t!==n&&(T(Pe,e),T(Ne,n))}function Be(e){Pe.current===e&&(Me(Ne),Me(Pe)),Ie.current===e&&(Me(Ie),sh._currentValue=Oe)}var Ve,He;function Ue(e){if(Ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ve=t&&t[1]||``,He=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ve+e+He}var We=!1;function Ge(e,t){if(!e||We)return``;We=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{We=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ue(n):``}function Ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ue(e.type);case 16:return Ue(`Lazy`);case 13:return e.child!==t&&t!==null?Ue(`Suspense Fallback`):Ue(`Suspense`);case 19:return Ue(`SuspenseList`);case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return Ue(`Activity`);case 30:return Ue(`ViewTransition`);default:return``}}function qe(e){try{var t=``,n=null;do t+=Ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Je=Object.prototype.hasOwnProperty,Ye=t.unstable_scheduleCallback,Xe=t.unstable_cancelCallback,Ze=t.unstable_shouldYield,Qe=t.unstable_requestPaint,$e=t.unstable_now,et=t.unstable_getCurrentPriorityLevel,tt=t.unstable_ImmediatePriority,nt=t.unstable_UserBlockingPriority,rt=t.unstable_NormalPriority,it=t.unstable_LowPriority,at=t.unstable_IdlePriority,ot=t.log,st=t.unstable_setDisableYieldValue,ct=null,lt=null;function ut(e){if(typeof ot==`function`&&st(e),lt&&typeof lt.setStrictMode==`function`)try{lt.setStrictMode(ct,e)}catch{}}var dt=Math.clz32?Math.clz32:mt,ft=Math.log,pt=Math.LN2;function mt(e){return e>>>=0,e===0?32:31-(ft(e)/pt|0)|0}var ht=256,gt=262144,_t=4194304;function vt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=vt(n))):i=vt(o):i=vt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=vt(n))):i=vt(o)):i=vt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function bt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-dt(n),i=1<<r;t|=e[r],n&=~i}return t}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-dt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-dt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function kt(e,t){var n=t&-t;return n=n&42?1:At(n),(n&(e.suspendedLanes|t))===0?n:0}function At(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Mt(){var e=w.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Nt(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var Pt=Math.random().toString(36).slice(2),Ft=`__reactFiber$`+Pt,It=`__reactProps$`+Pt,Lt=`__reactContainer$`+Pt,Rt=`__reactEvents$`+Pt,zt=`__reactListeners$`+Pt,Bt=`__reactHandles$`+Pt,Vt=`__reactResources$`+Pt,Ht=`__reactMarker$`+Pt,Ut=`__reactLoad$`+Pt;function Wt(e){delete e[Ft],delete e[It],delete e[zt],delete e[Bt]}function Gt(e){var t;if(t=e[Ft])return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Ft])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Kt(e){if(e=e[Ft]||e[Lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Jt(e){var t=e[Vt];return t||=e[Vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function E(e){e[Ht]=!0}function Yt(e){e[Ut]=void 0}var Xt=new Set,Zt={};function Qt(e,t){$t(e,t),$t(e+`Capture`,t)}function $t(e,t){for(Zt[e]=t,e=0;e<t.length;e++)Xt.add(t[e])}var en=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),tn={},nn={};function rn(e){return Je.call(nn,e)?!0:Je.call(tn,e)?!1:en.test(e)?nn[e]=!0:(tn[e]=!0,!1)}var D=!1;function an(){var e=D;return D=!1,e}function on(e,t,n){if(rn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function sn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function cn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function ln(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function un(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function dn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fn(e){if(!e._valueTracker){var t=un(e)?`checked`:`value`;e._valueTracker=dn(e,t,``+e[t])}}function pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=un(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var mn=/[\n"\\]/g;function hn(e){return e.replace(mn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function gn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+ln(t)):e.value!==``+ln(t)&&(e.value=``+ln(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):vn(e,ln(n)):o===`number`&&e.value==t?vn(e,ln(e.value)):vn(e,ln(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+ln(s):e.removeAttribute(`name`)}function _n(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){fn(e);return}n=n==null?``:``+ln(n),t=t==null?n:``+ln(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),fn(e)}function vn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bn(e,t,n){if(t!=null&&(t=``+ln(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+ln(n)}function xn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(De(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=ln(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),fn(e)}function Sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function wn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,D=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(wn(e,a,r),D=!0)}else for(var o in t)t.hasOwnProperty(o)&&wn(e,o,t[o])}function En(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),On=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return On.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function An(){}var jn=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nn=null,Pn=null;function Fn(e){var t=Kt(e);if(t&&(e=t.stateNode)){var n=e[It]||null;a:switch(e=t.stateNode,t.type){case`input`:if(gn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+hn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[It]||null;if(!a)throw Error(i(90));gn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&pn(r)}break a;case`textarea`:bn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}}}var In=!1;function Ln(e,t,n){if(In)return e(t,n);In=!0;try{return e(t)}finally{if(In=!1,(Nn!==null||Pn!==null)&&(zd(),Nn&&(t=Nn,e=Pn,Pn=Nn=null,Fn(t),e)))for(t=0;t<e.length;t++)Fn(e[t])}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[It]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var zn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Bn=!1;if(zn)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Bn=!0}}),window.addEventListener(`test`,Vn,Vn),window.removeEventListener(`test`,Vn,Vn)}catch{Bn=!1}var Hn=null,Un=null,Wn=null;function Gn(){if(Wn)return Wn;var e,t=Un,n=t.length,r,i=`value`in Hn?Hn.value:Hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wn=i.slice(e,1<r?1-r:void 0)}function Kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Jn(){return!1}function Yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?qn:Jn,this.isPropagationStopped=Jn,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=Yn(Xn),Qn=S({},Xn,{view:0,detail:0}),$n=Yn(Qn),er,tr,nr,rr=S({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==nr&&(nr&&e.type===`mousemove`?(er=e.screenX-nr.screenX,tr=e.screenY-nr.screenY):tr=er=0,nr=e),er)},movementY:function(e){return`movementY`in e?e.movementY:tr}}),ir=Yn(rr),ar=Yn(S({},rr,{dataTransfer:0})),or=Yn(S({},Qn,{relatedTarget:0})),sr=Yn(S({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),cr=Yn(S({},Xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),lr=Yn(S({},Xn,{data:0})),ur={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},dr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},fr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function pr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fr[e])?!!t[e]:!1}function mr(){return pr}var hr=Yn(S({},Qn,{key:function(e){if(e.key){var t=ur[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?dr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mr,charCode:function(e){return e.type===`keypress`?Kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),gr=Yn(S({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_r=Yn(S({},Xn,{submitter:0})),vr=Yn(S({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mr})),yr=Yn(S({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),br=Yn(S({},rr,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xr=Yn(S({},Xn,{newState:0,oldState:0,source:0})),Sr=[9,13,27,32],Cr=zn&&`CompositionEvent`in window,wr=null;zn&&`documentMode`in document&&(wr=document.documentMode);var Tr=zn&&`TextEvent`in window&&!wr,Er=zn&&(!Cr||wr&&8<wr&&11>=wr),Dr=` `,Or=!1;function kr(e,t){switch(e){case`keyup`:return Sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var jr=!1;function Mr(e,t){switch(e){case`compositionend`:return Ar(t);case`keypress`:return t.which===32?(Or=!0,Dr):null;case`textInput`:return e=t.data,e===Dr&&Or?null:e;default:return null}}function Nr(e,t){if(jr)return e===`compositionend`||!Cr&&kr(e,t)?(e=Gn(),Wn=Un=Hn=null,jr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Er&&t.locale!==`ko`?null:t.data;default:return null}}var Pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Pr[e.type]:t===`textarea`}function Ir(e,t,n,r){Nn?Pn?Pn.push(r):Pn=[r]:Nn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Rr=null;function zr(e){Vf(e,0)}function Br(e){if(pn(qt(e)))return e}function Vr(e,t){if(e===`change`)return t}var Hr=!1;if(zn){var Ur;if(zn){var Wr=`oninput`in document;if(!Wr){var Gr=document.createElement(`div`);Gr.setAttribute(`oninput`,`return;`),Wr=typeof Gr.oninput==`function`}Ur=Wr}else Ur=!1;Hr=Ur&&(!document.documentMode||9<document.documentMode)}function Kr(){Lr&&(Lr.detachEvent(`onpropertychange`,qr),Rr=Lr=null)}function qr(e){if(e.propertyName===`value`&&Br(Rr)){var t=[];Ir(t,Rr,e,Mn(e)),Ln(zr,t)}}function Jr(e,t,n){e===`focusin`?(Kr(),Lr=t,Rr=n,Lr.attachEvent(`onpropertychange`,qr)):e===`focusout`&&Kr()}function Yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Br(Rr)}function Xr(e,t){if(e===`click`)return Br(t)}function Zr(e,t){if(e===`input`||e===`change`)return Br(t)}function Qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var $r=typeof Object.is==`function`?Object.is:Qr;function ei(e,t){if($r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Je.call(t,i)||!$r(e[i],t[i]))return!1}return!0}function ti(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ri(e,t){var n=ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=ni(n)}}function ii(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ii(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ai(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ti(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var si=zn&&`documentMode`in document&&11>=document.documentMode,ci=null,li=null,ui=null,di=!1;function fi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||ci==null||ci!==ti(r)||(r=ci,`selectionStart`in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&ei(ui,r)||(ui=r,r=Jf(li,`onSelect`),0<r.length&&(t=new Zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ci)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var mi={animationend:pi(`Animation`,`AnimationEnd`),animationiteration:pi(`Animation`,`AnimationIteration`),animationstart:pi(`Animation`,`AnimationStart`),transitionrun:pi(`Transition`,`TransitionRun`),transitionstart:pi(`Transition`,`TransitionStart`),transitioncancel:pi(`Transition`,`TransitionCancel`),transitionend:pi(`Transition`,`TransitionEnd`)},hi={},gi={};zn&&(gi=document.createElement(`div`).style,`AnimationEvent`in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),`TransitionEvent`in window||delete mi.transitionend.transition);function _i(e){if(hi[e])return hi[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gi)return hi[e]=t[n];return e}var vi=_i(`animationend`),yi=_i(`animationiteration`),bi=_i(`animationstart`),xi=_i(`transitionrun`),Si=_i(`transitionstart`),Ci=_i(`transitioncancel`),wi=_i(`transitionend`),Ti=new Map,Ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ei.push(`scrollEnd`);function Di(e,t){Ti.set(e,t),Qt(t,[e])}var Oi=0;function ki(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=Oi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ai(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ji(e,t){return e=Ai(e),t=Ai(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ni=[],Pi=0,Fi=0;function Ii(){for(var e=Pi,t=Fi=Pi=0;t<e;){var n=Ni[t];Ni[t++]=null;var r=Ni[t];Ni[t++]=null;var i=Ni[t];Ni[t++]=null;var a=Ni[t];if(Ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Bi(n,i,a)}}function Li(e,t,n,r){Ni[Pi++]=e,Ni[Pi++]=t,Ni[Pi++]=n,Ni[Pi++]=r,Fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ri(e,t,n,r){return Li(e,t,n,r),Vi(e)}function zi(e,t){return Li(e,null,null,t),Vi(e)}function Bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-dt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Vi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hi={};function Ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,t,n,r){return new Ui(e,t,n,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ji(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Gi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ne.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ve:return e=Wi(31,n,t,a),e.elementType=ve,e.lanes=o,e;case ce:return Yi(n.children,a,o,t);case le:s=8,a|=24;break;case ue:return e=Wi(12,n,t,a|2),e.elementType=ue,e.lanes=o,e;case me:return e=Wi(13,n,t,a),e.elementType=me,e.lanes=o,e;case he:return e=Wi(19,n,t,a),e.elementType=he,e.lanes=o,e;case ye:case xe:return e=a|32,e=Wi(30,n,t,e),e.elementType=xe,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case fe:s=10;break a;case de:s=9;break a;case pe:s=11;break a;case ge:s=14;break a;case _e:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Yi(e,t,n,r){return e=Wi(7,e,r,t),e.lanes=n,e}function Xi(e,t,n){return e=Wi(6,e,null,t),e.lanes=n,e}function Zi(e){var t=Wi(18,null,null,0);return t.stateNode=e,t}function Qi(e,t,n){return t=Wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $i=new WeakMap;function ea(e,t){if(typeof e==`object`&&e){var n=$i.get(e);return n===void 0?(t={value:e,source:t,stack:qe(t)},$i.set(e,t),t):n}return{value:e,source:t,stack:qe(t)}}var ta=[],na=0,ra=null,ia=0,aa=[],oa=0,sa=null,ca=1,la=``;function ua(e,t){ta[na++]=ia,ta[na++]=ra,ra=e,ia=t}function da(e,t,n){aa[oa++]=ca,aa[oa++]=la,aa[oa++]=sa,sa=e;var r=ca;e=la;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var a=32-dt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ca=1<<32-dt(t)+i|n<<i|r,la=a+e}else ca=1<<a|n<<i|r,la=e}function fa(e){e.return!==null&&(ua(e,1),da(e,1,0))}function pa(e){for(;e===ra;)ra=ta[--na],ta[na]=null,ia=ta[--na],ta[na]=null;for(;e===sa;)sa=aa[--oa],aa[oa]=null,la=aa[--oa],aa[oa]=null,ca=aa[--oa],aa[oa]=null}function ma(e,t){aa[oa++]=ca,aa[oa++]=la,aa[oa++]=sa,ca=t.id,la=t.overflow,sa=e}var O=null,k=null,A=!1,ha=null,ga=!1,_a=Error(i(519));function va(e){throw wa(ea(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),_a}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ft]=e,t[It]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),_n(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),xn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||va(e,!0)}function ba(e){for(O=e.return;O;)switch(O.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:O=O.return}}function xa(e){if(e!==O)return!1;if(!A)return ba(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&k&&va(e),ba(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else t===27?(t=k,Sp(e.type)?(e=um,um=null,k=e):k=t):k=O?lm(e.stateNode.nextSibling):null;return!0}function Sa(){k=O=null,A=!1}function Ca(){var e=ha;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),ha=null),e}function wa(e){ha===null?ha=[e]:ha.push(e)}var Ta=je(null),Ea=null,Da=null;function Oa(e,t,n){T(Ta,t._currentValue),t._currentValue=n}function ka(e){e._currentValue=Ta.current,Me(Ta)}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ja(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Aa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Aa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Aa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;$r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ie.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ja(t,e,n,r),t.flags|=262144,e!==null}function Na(e){for(e=e.firstContext;e!==null;){if(!$r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ea=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fa(e){return La(Ea,e)}function Ia(e,t){return Ea===null&&Pa(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Da===null){if(e===null)throw Error(i(308));Da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Da=Da.next=t;return n}var Ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},za=t.unstable_scheduleCallback,Ba=t.unstable_NormalPriority,j={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Va(){return{controller:new Ra,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&za(Ba,function(){e.controller.abort()})}function Ua(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Wa=null;function Ga(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ka=null,qa=0,Ja=0,Ya=null;function Xa(e,t){if(Ka===null){var n=Ka=[];qa=0,Ja=Pf(),Ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return qa++,t.then(Za,Za),t}function Za(){if(--qa===0&&(Wa=null,Ka!==null)){Ya!==null&&(Ya.status=`fulfilled`);var e=Ka;Ka=null,Ja=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var $a=C.S;C.S=function(e,t){if(gd=$e(),typeof t==`object`&&t&&typeof t.then==`function`&&Xa(e,t),Wa!==null)for(var n=bf;n!==null;)Ua(n,Wa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ua(r,n),r=r.next;if(Ja!==0){r=Wa,r===null&&(r=Wa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}$a!==null&&$a(e,t)};var eo=je(null);function to(){var e=eo.current;return e===null?G.pooledCache:e}function no(e,t){t===null?T(eo,eo.current):T(eo,t.pool)}function ro(){var e=to();return e===null?null:{parent:j._currentValue,pool:e}}var io=Error(i(460)),ao=Error(i(474)),oo=Error(i(542)),so={then:function(){}};function co(e){return e=e.status,e===`fulfilled`||e===`rejected`}function lo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(An,An);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e}throw fo=t,io}}function uo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(fo=e,io):e}}var fo=null;function po(){if(fo===null)throw Error(i(459));var e=fo;return fo=null,e}function mo(e){if(e===io||e===oo)throw Error(i(483))}var ho=null,go=0;function _o(e){var t=go;return go+=1,ho===null&&(ho=[]),lo(ho,e,t)}function vo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function yo(e,t){throw t.$$typeof===ae?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function bo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ki(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ce?(e=d(e,t,n.props.children,r,n.key),vo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===_e&&uo(i)===t.type)?(t=a(t,n.props),vo(t,n),t.return=e,t):(t=Ji(n.type,n.key,n.props,null,e.mode,r),vo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Qi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case oe:return n=Ji(t.type,t.key,t.props,null,e.mode,n),vo(n,t),n.return=e,n;case se:return t=Qi(t,e.mode,n),t.return=e,t;case _e:return t=uo(t),f(e,t,n)}if(De(t)||we(t))return t=Yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,_o(t),n);if(t.$$typeof===fe)return f(e,Ia(e,t),n);yo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case oe:return n.key===i?l(e,t,n,r):null;case se:return n.key===i?u(e,t,n,r):null;case _e:return n=uo(n),p(e,t,n,r)}if(De(n)||we(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,_o(n),r);if(n.$$typeof===fe)return p(e,t,Ia(e,n),r);yo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case oe:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case se:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case _e:return r=uo(r),m(e,t,n,r,i)}if(De(r)||we(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,_o(r),i);if(r.$$typeof===fe)return m(e,t,n,Ia(t,r),i);yo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&ua(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return A&&ua(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&ua(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),A&&ua(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return A&&ua(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),A&&ua(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ce&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case oe:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ce){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),vo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===_e&&uo(l)===r.type){n(e,r.sibling),c=a(r,o.props),vo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ce?(c=Yi(o.props.children,e.mode,c,o.key),vo(c,o),c.return=e,e=c):(c=Ji(o.type,o.key,o.props,null,e.mode,c),vo(c,o),c.return=e,e=c)}return s(e);case se:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Qi(o,e.mode,c),c.return=e,e=c}return s(e);case _e:return o=uo(o),_(e,r,o,c)}if(De(o))return h(e,r,o,c);if(we(o)){if(l=we(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,_o(o),c);if(o.$$typeof===fe)return _(e,r,Ia(e,o),c);yo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{go=0;var i=_(e,t,n,r);return ho=null,i}catch(t){if(t===io||t===oo)throw t;var a=Wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var xo=bo(!0),So=bo(!1),Co=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Eo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Do(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Vi(e),Bi(e,null,n),t}return Li(e,r,t,n),Vi(e)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ao=!1;function jo(){if(Ao){var e=Ya;if(e!==null)throw e}}function Mo(e,t,n,r){Ao=!1;var i=e.updateQueue;Co=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ja&&(Ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=S({},d,f);break a;case 2:Co=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function No(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)No(n[e],t)}var Fo=je(null),Io=je(0);function Lo(e,t){e=od,T(Io,e),T(Fo,t),od=e|t.baseLanes}function Ro(){T(Io,od),T(Fo,Fo.current)}function zo(){od=Io.current,Me(Fo),Me(Io)}var Bo=je(null),Vo=null;function Ho(e){var t=e.alternate;T(qo,qo.current&1),T(Bo,e),Vo===null&&(t===null||Fo.current!==null||t.memoizedState!==null)&&(Vo=e)}function Uo(e){T(qo,qo.current),T(Bo,e),Vo===null&&(Vo=e)}function Wo(e){e.tag===22?(T(qo,qo.current),T(Bo,e),Vo===null&&(Vo=e)):Go()}function Go(){T(qo,qo.current),T(Bo,Bo.current)}function Ko(e){Me(Bo),Vo===e&&(Vo=null),Me(qo)}var qo=je(0);function Jo(e,t){T(Bo,Bo.current),T(qo,t)}function Yo(e){Me(qo),Me(Bo),Vo===e&&(Vo=null)}function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=0,M=null,N=null,P=null,Qo=!1,$o=!1,es=!1,ts=0,ns=0,rs=null,is=0;function F(){throw Error(i(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$r(e[n],t[n]))return!1;return!0}function os(e,t,n,r,i,a){return Zo=a,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Sc:Cc,es=!1,a=n(r,i),es=!1,$o&&(a=cs(t,n,r,i)),ss(e),a}function ss(e){C.H=xc;var t=N!==null&&N.next!==null;if(Zo=0,P=N=M=null,Qo=!1,ns=0,rs=null,t)throw Error(i(300));e===null||L||(e=e.dependencies,e!==null&&Na(e)&&(L=!0))}function cs(e,t,n,r){M=e;var a=0;do{if($o&&(rs=null),ns=0,$o=!1,25<=a)throw Error(i(301));if(a+=1,P=N=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=wc,o=t(n,r)}while($o);return o}function ls(){var e=C.H,t=e.useState()[0];return t=typeof t.then==`function`?hs(t):t,e=e.useState()[0],(N===null?null:N.memoizedState)!==e&&(M.flags|=1024),t}function us(){var e=ts!==0;return ts=0,e}function ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(Qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qo=!1}Zo=0,P=N=M=null,$o=!1,ns=ts=0,rs=null}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=e:P=P.next=e,P}function I(){if(N===null){var e=M.alternate;e=e===null?null:e.memoizedState}else e=N.next;var t=P===null?M.memoizedState:P.next;if(t!==null)P=t,N=e;else{if(e===null)throw M.alternate===null?Error(i(467)):Error(i(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},P===null?M.memoizedState=P=e:P=P.next=e}return P}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hs(e){var t=ns;return ns+=1,rs===null&&(rs=[]),e=lo(rs,e,t),t=M,(P===null?t.memoizedState:P.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Sc:Cc),e}function gs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return hs(e);if(e.$$typeof===Se)return;if(e.$$typeof===fe)return Fa(e)}throw Error(i(438,String(e)))}function _s(e){var t=null,n=M.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=M.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ms(),M.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=be;return t.index++,n}function vs(e,t){return typeof t==`function`?t(e):t}function ys(e){return bs(I(),N,e)}function bs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Zo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ja&&(d=!0);else if((Zo&p)===p){u=u.next,p===Ja&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,M.lanes|=p,sd|=p;f=u.action,es&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,M.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!$r(o,e.memoizedState)&&(L=!0,d&&(n=Ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xs(e){var t=I(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);$r(o,t.memoizedState)||(L=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ss(e,t,n){var r=M,a=I(),o=A;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!$r((N||a).memoizedState,n);if(s&&(a.memoizedState=n,L=!0),a=a.queue,qs(Ts.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||P!==null&&!!(P.memoizedState.tag&1),Hs(e?9:8,{destroy:void 0},ws.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Zo&127||Cs(r,t,n)}return n}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=M.updateQueue,t===null?(t=ms(),M.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ws(e,t,n,r){t.value=n,t.getSnapshot=r,Es(t)&&Ds(e)}function Ts(e,t,n){return n(function(){Es(t)&&Ds(e)})}function Es(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$r(e,n)}catch{return!0}}function Ds(e){var t=zi(e,2);t!==null&&Pd(t,e,2)}function Os(e){var t=ps();if(typeof e==`function`){var n=e;if(e=n(),es){ut(!0);try{n()}finally{ut(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},t}function ks(e,t,n,r){return e.baseState=n,bs(e,N,typeof r==`function`?r:vs)}function As(e,t,n,r,a){if(vc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};C.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,js(t,o)):(o.next=n.next,t.pending=n.next=o)}}function js(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=C.T,o={};o.types=a===null?null:a.types,C.T=o;try{var s=n(i,r),c=C.S;c!==null&&c(o,s),Ms(e,t,s)}catch(n){Ps(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),C.T=a}}else try{a=n(i,r),Ms(e,t,a)}catch(n){Ps(e,t,n)}}function Ms(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ns(e,t,n)},function(n){return Ps(e,t,n)}):Ns(e,t,n)}function Ns(e,t,n){t.status=`fulfilled`,t.value=n,Fs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,js(e,n)))}function Ps(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Fs(t),t=t.next;while(t!==r)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Is(e,t){return t}function Ls(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=M;if(A){if(k){b:{for(var i=k,a=ga;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=lm(i.nextSibling),r=i.data===`F!`;break a}}va(r)}r=!1}r&&(t=n[0])}}return n=ps(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},n.queue=r,n=hc.bind(null,M,r),r.dispatch=n,r=Os(!1),a=_c.bind(null,M,!1,r.queue),r=ps(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=As.bind(null,M,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Rs(e){return zs(I(),N,e)}function zs(e,t,n){if(t=bs(e,t,Is)[0],e=ys(vs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=hs(t)}catch(e){throw e===io?oo:e}else r=t;t=I();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(M.flags|=2048,Hs(9,{destroy:void 0},Bs.bind(null,i,n),null)),[r,a,e]}function Bs(e,t){e.action=t}function Vs(e){var t=I(),n=N;if(n!==null)return zs(t,n,e);I(),t=t.memoizedState,n=I();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Hs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=M.updateQueue,t===null&&(t=ms(),M.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Us(){return I().memoizedState}function Ws(e,t,n,r){var i=ps();M.flags|=e,i.memoizedState=Hs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Gs(e,t,n,r){var i=I();r=r===void 0?null:r;var a=i.memoizedState.inst;N!==null&&r!==null&&as(r,N.memoizedState.deps)?i.memoizedState=Hs(t,a,n,r):(M.flags|=e,i.memoizedState=Hs(1|t,a,n,r))}function Ks(e,t){Ws(8390656,8,e,t)}function qs(e,t){Gs(2048,8,e,t)}function Js(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=ms(),M.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ys(e){var t=I().memoizedState;return Js({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Xs(e,t){return Gs(4,2,e,t)}function Zs(e,t){return Gs(4,4,e,t)}function Qs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $s(e,t,n){n=n==null?null:n.concat([e]),Gs(4,4,Qs.bind(null,t,e),n)}function ec(){}function tc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&as(t,r[1]))return r[0];if(r=e(),es){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r}function rc(e,t,n){return n===void 0||Zo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),M.lanes|=e,sd|=e,n)}function ic(e,t,n,r){return $r(n,t)?n:Fo.current===null?!(Zo&106)||Zo&1073741824&&!(q&261930)?(L=!0,e.memoizedState=n):(e=Md(),M.lanes|=e,sd|=e,t):(e=rc(e,n,r),$r(e,t)||(L=!0),e)}function ac(e,t,n,r,i){var a=w.p;w.p=a!==0&&8>a?a:8;var o=C.T,s={};s.types=o===null?null:o.types,C.T=s,_c(e,!1,t,n);try{var c=i(),l=C.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?gc(e,t,Qa(c,r),jd(e)):gc(e,t,r,jd(e))}catch(n){gc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{w.p=a,o!==null&&s.types!==null&&(o.types=s.types),C.T=o}}function oc(){}function sc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=cc(e).queue;ac(e,a,t,Oe,n===null?oc:function(){return lc(e),n(r)})}function cc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Oe,baseState:Oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:Oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lc(e){var t=cc(e);t.next===null&&(t=e.alternate.memoizedState),gc(e,t.next.queue,{},jd())}function uc(){return Fa(sh)}function dc(){return I().memoizedState}function fc(){return I().memoizedState}function pc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=Eo(n);var r=Do(t,e,n);r!==null&&(Pd(r,t,n),Oo(r,t,n)),t={cache:Va()},e.payload=t;return}t=t.return}}function mc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vc(e)?yc(t,n):(n=Ri(e,t,n,r),n!==null&&(Pd(n,e,r),bc(n,t,r)))}function hc(e,t,n){gc(e,t,n,jd())}function gc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vc(e))yc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,$r(s,o))return Li(e,t,i,0),G===null&&Ii(),!1}catch{}if(n=Ri(e,t,i,r),n!==null)return Pd(n,e,r),bc(n,t,r),!0}return!1}function _c(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(t)throw Error(i(479))}else t=Ri(e,n,r,2),t!==null&&Pd(t,e,2)}function vc(e){var t=e.alternate;return e===M||t!==null&&t===M}function yc(e,t){$o=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}var xc={readContext:Fa,use:gs,useCallback:F,useContext:F,useEffect:F,useImperativeHandle:F,useLayoutEffect:F,useInsertionEffect:F,useMemo:F,useReducer:F,useRef:F,useState:F,useDebugValue:F,useDeferredValue:F,useTransition:F,useSyncExternalStore:F,useId:F,useHostTransitionStatus:F,useFormState:F,useActionState:F,useOptimistic:F,useMemoCache:F,useCacheRefresh:F,useEffectEvent:F},Sc={readContext:Fa,use:gs,useCallback:function(e,t){return ps().memoizedState=[e,t===void 0?null:t],e},useContext:Fa,useEffect:Ks,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ws(4194308,4,Qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){Ws(4,2,e,t)},useMemo:function(e,t){var n=ps();t=t===void 0?null:t;var r=e();if(es){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ps();if(n!==void 0){var i=n(t);if(es){ut(!0);try{n(t)}finally{ut(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=mc.bind(null,M,e),[r.memoizedState,e]},useRef:function(e){var t=ps();return e={current:e},t.memoizedState=e},useState:function(e){e=Os(e);var t=e.queue,n=hc.bind(null,M,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ec,useDeferredValue:function(e,t){return rc(ps(),e,t)},useTransition:function(){var e=Os(!1);return e=ac.bind(null,M,e.queue,!0,!1),ps().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=M,a=ps();if(A){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ks(Ts.bind(null,r,o,e),[e]),r.flags|=2048,Hs(9,{destroy:void 0},ws.bind(null,r,o,n,t),null),n},useId:function(){var e=ps(),t=G.identifierPrefix;if(A){var n=la,r=ca;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ts++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=is++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e){var t=ps();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_c.bind(null,M,!0,n),n.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return ps().memoizedState=pc.bind(null,M)},useEffectEvent:function(e){var t=ps(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Cc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:ys,useRef:Us,useState:function(){return ys(vs)},useDebugValue:ec,useDeferredValue:function(e,t){return ic(I(),N.memoizedState,e,t)},useTransition:function(){var e=ys(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){return ks(I(),N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys},wc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:xs,useRef:Us,useState:function(){return xs(vs)},useDebugValue:ec,useDeferredValue:function(e,t){var n=I();return N===null?rc(n,e,t):ic(n,N.memoizedState,e,t)},useTransition:function(){var e=xs(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Vs,useActionState:Vs,useOptimistic:function(e,t){var n=I();return N===null?(n.baseState=e,[e,n.queue.dispatch]):ks(n,N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys};function Tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=Eo(n);r.tag=2,t!=null&&(r.callback=t),t=Do(e,r,n),t!==null&&(Pd(t,e,n),Oo(t,e,n))}};function Dc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,a):!0}function Oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function kc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=S({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ac(e){Mi(e)}function jc(e){console.error(e)}function Mc(e){Mi(e)}function Nc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Pc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Fc(e,t,n){return n=Eo(n),n.tag=3,n.payload={element:null},n.callback=function(){Nc(e,t)},n}function Ic(e){return e=Eo(e),e.tag=3,e}function Lc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Pc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Pc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ma(t,n,a,!0),n=Bo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Vo===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===so?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===so?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(A)return t=Bo.current,t===null?(r!==_a&&(t=Error(i(423),{cause:r}),wa(ea(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ea(r,n),a=Fc(e.stateNode,r,a),ko(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==_a&&(e=Error(i(422),{cause:r}),wa(ea(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ea(o,n),fd===null?fd=[o]:fd.push(o),Y!==4&&(Y=2),t===null)return!0;r=ea(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Fc(n.stateNode,r,e),ko(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ic(a),Lc(a,e,n,r),ko(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var zc=Error(i(461)),L=!1;function R(e,t,n,r){t.child=e===null?So(t,null,n,r):xo(t,e.child,n,r)}function Bc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Pa(t),r=os(e,t,n,o,a,i),s=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&s&&fa(t),t.flags|=1,R(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hc(e,t,a,r,i)):(e=Ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!hl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?ei:n,n(o,r)&&e.ref===t.ref)return ml(e,t,i)}return t.flags|=1,e=Ki(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ei(a,r)&&e.ref===t.ref){if(L=!1,t.pendingProps=r=a,hl(e,i))e.flags&131072&&(L=!0);else return t.lanes=e.lanes,ml(e,t,i)}}return Xc(e,t,n,r,i)}function Uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Gc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&no(t,a===null?null:a.cachePool),a===null?Ro():Lo(t,a),Wo(t);else return r=t.lanes=536870912,Gc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&no(t,null),Ro(),Go()):(no(t,a.cachePool),Lo(t,a),Go(),t.memoizedState=null);return R(e,t,i,n),t.child}function Wc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gc(e,t,n,r,i){var a=to();return a=a===null?null:{parent:j._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&no(t,null),Ro(),Wo(t),e!==null&&Ma(e,t,r,!0),t.childLanes=i,null}function Kc(e,t){return t=al({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qc(e,t,n){return xo(t,e.child,null,n),e=Kc(t,t.pendingProps),e.flags|=2,Ko(t),t.memoizedState=null,e}function Jc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=Kc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wc(null,e);if(Uo(t),(e=k)?(e=am(e,ga),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa===null?null:{id:ca,overflow:la},retryLane:536870912,hydrationErrors:null},n=Zi(e),n.return=t,t.child=n,O=t,k=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return Kc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Uo(t),a){if(t.flags&256)t.flags&=-257,t=qc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(L||Ma(e,t,n,!1),a=(n&e.childLanes)!==0,L||a){if(Fo.current===null){if(r=G,r!==null&&(s=kt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,zi(e,s),Pd(r,e,s),zc;Kd()}t=qc(e,t,n)}else e=o.treeContext,k=lm(s.nextSibling),O=t,A=!0,ha=null,ga=!1,e!==null&&ma(t,e),t=Kc(t,r),t.flags|=134221824;return t}return e=Ki(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xc(e,t,n,r,i){return Pa(t),n=os(e,t,n,r,void 0,i),r=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&r&&fa(t),t.flags|=1,R(e,t,n,i),t.child)}function Zc(e,t,n,r,i,a){return Pa(t),t.updateQueue=null,n=cs(t,r,n,i),ss(e),r=us(),e!==null&&!L?(ds(e,t,a),ml(e,t,a)):(A&&r&&fa(t),t.flags|=1,R(e,t,n,a),t.child)}function Qc(e,t,n,r,i){if(Pa(t),t.stateNode===null){var a=Hi,o=n.contextType;typeof o==`object`&&o&&(a=Fa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ec,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},wo(t),o=n.contextType,a.context=typeof o==`object`&&o?Fa(o):Hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Tc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ec.enqueueReplaceState(a,a.state,null),Mo(t,r,a,i),jo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=kc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Hi,typeof u==`object`&&u&&(o=Fa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Oc(t,a,r,o),Co=!1;var f=t.memoizedState;a.state=f,Mo(t,r,a,i),jo(),l=t.memoizedState,s||f!==l||Co?(typeof d==`function`&&(Tc(t,n,d,r),l=t.memoizedState),(c=Co||Dc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,To(e,t),o=t.memoizedProps,u=kc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Hi,typeof l==`object`&&l&&(c=Fa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Oc(t,a,r,c),Co=!1,f=t.memoizedState,a.state=f,Mo(t,r,a,i),jo();var p=t.memoizedState;o!==d||f!==p||Co||e!==null&&e.dependencies!==null&&Na(e.dependencies)?(typeof s==`function`&&(Tc(t,n,s,r),p=t.memoizedState),(u=Co||Dc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=xo(t,e.child,null,i),t.child=xo(t,null,n,i)):R(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ml(e,t,i),e}function $c(e,t,n,r){return Sa(),t.flags|=256,R(e,t,n,r),t.child}var el={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tl(e){return{baseLanes:e,cachePool:ro()}}function nl(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function rl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(qo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(A){if(i?Ho(t):Go(),(e=k)?(e=am(e,ga),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa===null?null:{id:ca,overflow:la},retryLane:536870912,hydrationErrors:null},n=Zi(e),n.return=t,t.child=n,O=t,k=null)):e=null,e===null)throw va(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Go(),i=t.mode,a=al({mode:`hidden`,children:a},i),r=Yi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=tl(n),r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(null,r)):(Ho(t),il(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return sl(e,t,a,o,r,c,s,n)}return i?(Go(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ki(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Yi(i,a,n,null),i.flags|=2):i=Ki(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Wc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=tl(n):(a=i.cachePool,a===null?a=ro():(s=j._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(e.child,r)):(Ho(t),n=e.child,e=n.sibling,n=Ki(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function il(e,t){return t=al({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function al(e,t){return e=Wi(22,e,null,t),e.lanes=0,e}function ol(e,t,n){return xo(t,e.child,null,n),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Ho(t),t.flags&=-257,ol(e,t,c)):t.memoizedState===null?(Go(),o=a.fallback,s=t.mode,a=al({mode:`visible`,children:a.children},s),o=Yi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,xo(t,e.child,null,c),a=t.child,a.memoizedState=tl(c),a.childLanes=nl(e,r,c),t.memoizedState=el,Wc(null,a)):(Go(),t.child=e.child,t.flags|=128,null);if(Ho(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,wa({value:a,source:null,stack:null})),ol(e,t,c)}if(L||Ma(e,t,c,!1),r=(c&e.childLanes)!==0,L||r){if(Fo.current!==null)return ol(e,t,c);if(r=G,r!==null&&(a=kt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,zi(e,a),Pd(r,e,a),zc;return om(o)||Kd(),ol(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,k=lm(o.nextSibling),O=t,A=!0,ha=null,ga=!1,e!==null&&ma(t,e),t=il(t,a.children),t.flags|=134221824,t)}function cl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function ll(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Xo(n)===null&&(t=e),e=e.sibling}return t}function ul(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function dl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function fl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=qo.current;if(t.flags&128)return Jo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Jo(t,o),i===`backwards`&&e!==null?(dl(e),R(e,t,r,n),dl(e)):R(e,t,r,n),r=A?ia:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cl(e,n,t);else if(e.tag===19)cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,dl(t)),ul(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,a,r);break;case`together`:ul(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,a,r)}return t.child}function pl(e,t,n){var r=t.pendingProps;return Oa(t,t.type,r.value),R(e,t,r.children,n),t.child}function ml(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Na(e)))}function gl(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Oa(t,j,e.memoizedState.cache),Sa();break;case 27:case 5:ze(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ho(t),t.flags|=128,null;r=Ma(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?rl(e,t,n):(Ho(t),e=ml(e,t,n),e===null?null:e.sibling)}Ho(t);break;case 19:if(t.flags&128)return fl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return fl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Jo(t,qo.current),r)break;return null;case 22:return t.lanes=0,Uc(e,t,n,t.pendingProps);case 24:Oa(t,j,e.memoizedState.cache)}return ml(e,t,n)}function _l(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)L=!0;else{if(!hl(e,n)&&!(t.flags&128))return L=!1,gl(e,t,n);L=!!(e.flags&131072)}}else L=!1,A&&t.flags&1048576&&da(t,ia,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=uo(t.elementType),t.type=e,typeof e==`function`)Gi(e)?(r=kc(e,r),t.tag=1,t=Qc(null,t,e,r,n)):(t.tag=0,t=Xc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===pe){t.tag=11,t=Bc(null,t,e,r,n);break a}if(a===ge){t.tag=14,t=Vc(null,t,e,r,n);break a}if(a===fe){t.tag=10,t.type=e,t=pl(null,t,n);break a}}throw t=Ee(e)||e,Error(i(306,t,``))}}return t;case 0:return Xc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=kc(r,t.pendingProps),Qc(e,t,r,a,n);case 3:a:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,To(e,t),Mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Oa(t,j,r),r!==o.cache&&ja(t,[j],n,!0),jo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=$c(e,t,r,n);break a}if(r!==a){a=ea(Error(i(424)),t),wa(a),t=$c(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=lm(e.firstChild),O=t,A=!0,ha=null,ga=!0,n=So(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Sa(),r===a){t=ml(e,t,n);break a}R(e,t,r,n)}t=t.child}return t;case 26:return Yc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(t.stateNode=fp(t.type,t.pendingProps,Fe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ze(t),e===null&&A&&(r=t.stateNode=hm(t.type,t.pendingProps,Fe.current),O=t,ga=!0,a=k,Sp(t.type)?(um=a,k=lm(r.firstChild)):k=a),R(e,t,t.pendingProps.children,n),Yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((a=r=k)&&(r=rm(r,t.type,t.pendingProps,ga),r===null?a=!1:(t.stateNode=r,O=t,k=lm(r.firstChild),ga=!1,a=!0)),a||va(t)),ze(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=os(e,t,ls,null,null,n),sh._currentValue=a),Yc(e,t),R(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=im(n,t.pendingProps,ga),n===null?e=!1:(t.stateNode=n,O=t,k=null,e=!0)),e||va(t)),null;case 13:return rl(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xo(t,null,r,n):R(e,t,r,n),t.child;case 11:return Bc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Yc(e,t),R(e,t,r,n),t.child;case 8:return R(e,t,t.pendingProps.children,n),t.child;case 12:return R(e,t,t.pendingProps.children,n),t.child;case 10:return pl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Pa(t),a=Fa(a),r=r(a),t.flags|=1,R(e,t,r,n),t.child;case 14:return Vc(e,t,t.type,t.pendingProps,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 19:return fl(e,t,n);case 31:return Jc(e,t,n);case 22:return Uc(e,t,n,t.pendingProps);case 24:return Pa(t),r=Fa(j),e===null?(a=to(),a===null&&(a=G,o=Va(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},wo(t),Oa(t,j,a)):((e.lanes&n)!==0&&(To(e,t),Mo(t,null,null,n),jo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Oa(t,j,r),r!==a.cache&&ja(t,[j],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Oa(t,j,r))),R(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:A&&fa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Yc(e,t),R(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function vl(e){e.flags|=4}function yl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw fo=so,ao}}else e.flags&=-16777217}function bl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw fo=so,ao}}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ct(),e.lanes|=t,dd|=t)}function Sl(e,t){if(!A)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cl(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ka(j),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xa(t)?vl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca())),z(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(vl(t),o===null?(z(t),yl(t,a,null,r,n)):(z(t),bl(t,o))):o?o===e.memoizedState?(z(t),t.flags&=-16777217):(vl(t),z(t),bl(t,o)):(e=e.memoizedProps,e!==r&&vl(t),z(t),yl(t,a,e,r,n)),null;case 27:if(Be(t),n=Fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}e=Ne.current,xa(t)?ya(t,e):(e=hm(a,r,n),t.stateNode=e,vl(t))}return z(t),t.subtreeFlags&=-33554433,null;case 5:if(Be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}if(o=Ne.current,xa(t))ya(t,o);else{var s=lp(Fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ft]=t,o[It]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&vl(t)}}return z(t),t.subtreeFlags&=-33554433,yl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Fe.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=O,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||va(t,!0)}else e=lp(e).createTextNode(r),e[Ft]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=xa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ft]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ko(t),t):(Ko(t),null);if(t.flags&128)throw Error(i(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ft]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),a=!1}else a=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ko(t),t):(Ko(t),null)}return Ko(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),z(t),null);case 4:return Re(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,z(t),null;case 10:return ka(t.type),z(t),null;case 19:if(Yo(t),r=t.memoizedState,r===null)return z(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Sl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xo(e),o!==null){for(t.flags|=128,Sl(r,!1),e=o.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)qi(n,e),n=n.sibling;return Jo(t,qo.current&1|2),A&&ua(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&$e()>_d&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Xo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Sl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!A)return z(t),null}else 2*$e()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=$e(),e.sibling=null,o=qo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||A?Jo(t,o):(n=o,T(Bo,t),T(qo,n),Vo===null&&(Vo=t)),A&&ua(t,r.treeForkCount),e}return z(t),null;case 22:case 23:return Ko(t),zo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Me(eo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ka(j),z(t),null;case 25:return null;case 30:return t.flags|=33554432,z(t),null}throw Error(i(156,t.tag))}function wl(e,t){switch(pa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(j),Re(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Be(t),null;case 31:if(t.memoizedState!==null){if(Ko(t),t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ko(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Yo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Re(),null;case 10:return ka(t.type),null;case 22:case 23:return Ko(t),zo(),e!==null&&Me(eo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ka(j),null;case 25:return null;default:return null}}function Tl(e,t){switch(pa(t),t.tag){case 3:ka(j),Re();break;case 26:case 27:case 5:Be(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ko(t);break;case 13:Ko(t);break;case 19:Yo(t);break;case 10:ka(t.type);break;case 22:case 23:Ko(t),zo(),e!==null&&Me(eo);break;case 24:ka(j)}}function El(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Dl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Ol(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Po(t,n)}catch(t){Z(e,e.return,t)}}}function kl(e,t,n){n.props=kc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=ki(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function jl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ml(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Nl(e){for(var t=e.return;t!==null&&(Il(t)&&em(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Pl(e){for(var t=e.return;t!==null&&(Il(t)&&tm(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Fl(e){return e.tag===5||e.tag===3||e.tag===27}function Il(e){return e&&e.tag===7&&e.stateNode!==null}function Ll(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Rl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[It]=t}catch(t){Z(e,e.return,t)}}function zl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Bl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An)),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Vl(e,t,n,r),e=e.sibling;e!==null;)Vl(e,t,n,r),e=e.sibling}function Hl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Hl(e,t,n,r),e=e.sibling;e!==null;)Hl(e,t,n,r),e=e.sibling}function Ul(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Ft]=e,t[It]=n}catch(t){Z(e,e.return,t)}}var Wl=!1,Gl=null;function Kl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Wl=!0)}var ql=null;function Jl(){var e=ql;return ql=null,e}var Yl=0;function Xl(e,t,n,r,i){return Yl=0,Zl(e.child,t,n,r,i)}function Zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Wl=!0,Tp(o,Yl===0?t:t+`_`+Yl,n),Yl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Zl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ql(e.child,t)),e=e.sibling}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($l(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=ji(t.default,t.share),t!==`none`&&(Xl(e,n,t,null,!1)||Ql(e.child,!1))}e=e.sibling}}function eu(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=ki(r,n),a=ji(r.default,n.paired?r.share:r.enter);a===`none`?$l(e):Xl(e,i,a,null,!1)?($l(e),n.paired||t||Nd(e,r.onEnter)):Ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e,t),e=e.sibling;else $l(e)}function tu(e){if(Gl!==null&&Gl.size!==0){var t=Gl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ji(n.default,n.share);if(a!==`none`&&(Xl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Ql(e.child,!1)),t.delete(r),t.size===0)break}}}tu(e)}e=e.sibling}}}function nu(e){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode),r=Gl===null?void 0:Gl.get(n),i=ji(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Xl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Gl.delete(n),Nd(e,t.onShare)):Ql(e.child,!1)),Gl!==null&&tu(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else Gl!==null&&tu(e)}function ru(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode);t=ji(t.default,t.update),e.flags&=-5,t!==`none`&&Xl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&ru(e);e=e.sibling}}function iu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ql(e.child,!1))}iu(e)}e=e.sibling}}function au(e){if(e.tag===30)e.stateNode.paired=null,Ql(e.child,!1),iu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)au(e),e=e.sibling;else iu(e)}function ou(e){for(e=e.child;e!==null;)e.tag===30?Ql(e.child,!1):e.subtreeFlags&33554432&&ou(e),e=e.sibling}function su(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Yl<a.length){var l=a[Yl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Yl===0?n:n+`_`+Yl,i),s&&e.flags&4||(ql===null&&(ql=[]),ql.push(c,Yl===0?r:r+`_`+Yl,t.memoizedProps)),Yl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:su(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function cu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=ki(n,r),a=ji(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Yl=0,i=su(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&cu(e,t);e=e.sibling}}var B=!1,V=!1,lu=!1,uu=!1,du=typeof WeakSet==`function`?WeakSet:Set,H=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=ai(e),oi(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,H=t,t=n?9270:1024;H!==null;){if(e=H,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&nu(r[a]);if(e.alternate===null&&e.flags&2)n&&Kl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&nu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Kl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,H=r):(n&&ru(e),_u(n))}}Gl=null}function _u(e){for(;H!==null;){var t=H,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=kc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=ki(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=ji(a.default,a.update),a!==`none`&&Xl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&El(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=kc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Ol(n),r&512&&Al(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Po(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Ul(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Ll(n),r&512&&Al(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||B,!r){var a=t!==null&&t.memoizedState!==null||V;t=B,i=V,B=r,(V=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),B=t,V=i}break;case 30:Lu(e,n),r&512&&Al(n,n.return);break;case 7:r&512&&Al(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,D=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount==`function`)try{lt.onCommitFiberUnmount(ct,n)}catch{}switch(n.tag){case 26:V||jl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!V&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||jl(n,t),Pl(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:V||jl(n,t),Pl(n);case 6:if(n.tag===6&&Pl(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),D=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),D=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Dl(2,n,t),V||Dl(4,n,t),wu(e,t,n);break;case 1:V||(jl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&kl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,wu(e,t,n),V=r;break;case 30:jl(n,t),wu(e,t,n);break;case 7:V||jl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new du),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new du),t;default:throw Error(i(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(i(160));Tu(s,c,o),U=null,Cu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Au(t,e,n),Nu(e),a&4&&(Dl(3,e,e.return),El(3,e),Dl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&64&&B&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ju,Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(B)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Ht]||r[Ft]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Ft]=e,E(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ft]=e,E(r),t=r}e.stateNode=t}}else B||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Rl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||V||t.parentNode.removeChild(t)):a.count--,n===null?B||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),r!==null&&a&4&&Rl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=lu,lu=!1,Au(t,e,n),lu=o,Nu(e),a&512&&(V||r===null||jl(r,r.return)),e.flags&32){t=e.stateNode;try{Sn(t,``),D=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Rl(e,t,r===null?t:r.memoizedProps)),a&1024&&(uu=!0);break;case 6:if(Au(t,e,n),Nu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,D=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(D=!1,Wm=null,o=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=o,Nu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}uu&&(uu=!1,Pu(e)),D=!1;break;case 4:a=lu,lu=B,r=an(),o=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=o,D&&pu&&(mu=!0),D=r,lu=a;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=$e()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=B,l=V,u=lu;B=c||o,lu=u||o,V=l||s,Au(t,e,n),V=l,lu=u,B=c,Nu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||B||V||(t=s||V,n=B,r=V,B=o||B,V=t,Ru(e,2),B=n,V=r),!o&&lu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(V||r===null||jl(r,r.return)),a=an(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&ji(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),s&&r!==null&&D&&(e.flags|=4),pu=o,D=a;break;case 21:break;case 7:a&512&&(V||r===null||jl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(zl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Il(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Fl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Hl(e,Bl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(Sn(l,``),n.flags&=-33),Hl(e,Bl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Vl(e,Bl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else cu(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)eu(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Jl(),Fu(t,e),!fu&&!mu){if(e=ql,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}ql=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):eu(e,!1));break;case 30:r=fu,i=Jl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=ki(a,o),o=ki(n.memoizedProps,o);var s=ji(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Yl=0,t=su(e,n,t,o,s,a,!0),Yl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),ql=i):i!==null&&(i.push.apply(i,ql),ql=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Dl(4,n,n.return),Ru(n,r);break;case 1:jl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&kl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:jl(n,n.return),n.tag!==5&&n.tag!==27||Pl(n),Ru(n,r);break;case 6:Pl(n);break;case 26:jl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||V||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:jl(n,n.return),Ru(n,r);break;case 7:jl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),El(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)No(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Ol(a),Al(a,a.return);break;case 27:n&2&&Ul(a);case 5:a.tag!==5&&a.tag!==27||Nl(a),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 6:Nl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||B||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Al(a,a.return);break;case 30:zu(i,a,n),Al(a,a.return);break;case 7:Al(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&ou(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&au(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&El(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ha(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&au(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&au(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ql(a.child,!0),Ql(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),El(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Gl===null&&(Gl=new Map),Gl.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Dl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Dl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(Su(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var ed={getCacheForType:function(e){var t=Fa(j),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fa(j).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:C.T===null?Mt():Pf()}function Md(){if(ud===0){if(!(q&536870912)||A){var e=gt;gt<<=1,!(gt&3932160)&&(gt=262144),ud=e}else ud=536870912}return e=Bo.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(ki(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),Tt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||bt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-$e(),10<a)){if(Rd(r,t,ud,!rd),yt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,o,`Throttled`,-0,0),a);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Gl=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-$e():(a&4194048)===a?gd-$e():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!$r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=xt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-dt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Dt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,Da=Ea=null,fs(e),ho=null,go=0,e=K;for(;e!==null;)Tl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Ki(e.current,null),q=t,J=0,nd=null,rd=!1,id=bt(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=xt(e,t),Ii(),n}function Hd(e,t){M=null,C.H=xc,t===io||t===oo?(t=po(),J=3):t===ao?(t=po(),J=4):J=t===zc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,Nc(e,ea(t,e.current)))}function Ud(){var e=Bo.current;return e===null?!0:(q&4194048)===q?Vo===null:(q&62914560)===q||q&536870912?e===Vo:!1}function Wd(){var e=C.H;return C.H=xc,e===null?xc:e}function Gd(){var e=C.A;return C.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&Bo.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Bo.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,Da=Ea=null,W=r,C.H=i,C.A=a,K===null&&(G=null,q=0,Ii()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),a=Gd();G!==e||q!==t?(vd=null,_d=$e()+500,Vd(e,t)):id=bt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,o,1);break;case 2:case 9:if(co(o)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:co(o)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,o,5);break;case 6:J=0,nd=null,$d(e,t,o,6);break;case 8:Bd(),Y=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return Da=Ea=null,C.H=r,C.A=a,W=n,K===null?(G=null,q=0,Ii(),Y):0}function Xd(){for(;K!==null&&!Ze();)Zd(K)}function Zd(e){var t=_l(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Zc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:fs(t);var r=t;r===O&&(A?(ba(r),r.tag===5&&r.stateNode!=null&&(k=r.stateNode)):(ba(r),A=!0));default:Tl(n,t),t=K=qi(t,od),t=_l(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){Da=Ea=null,fs(t),ho=null,go=0;var i=t.return;try{if(Rc(e,i,t,n,q)){Y=1,Nc(e,ea(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,Nc(e,ea(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Bo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=Cl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=wl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Fi,Et(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ga(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(rt,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Wl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=C.T,C.T=null,i=w.p,w.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,w.p=i,C.T=r}}X=1,Wl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=C.T,C.T=null;var i=w.p;w.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=ai(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ii(s.ownerDocument.documentElement,s)){if(c!==null&&oi(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ri(s,h),v=ri(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,w.p=i,C.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=C.T,C.T=null;var r=w.p;w.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,w.p=r,C.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Qe();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),jt(r),n=n.stateNode,lt&&typeof lt.onCommitFiberRoot==`function`)try{lt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=C.T,a=w.p,w.p=2,C.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{C.T=n,w.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=jt(Sd),r=C.T,a=w.p;try{w.p=32>n?32:n,C.T=null,n=wd,wd=null;var o=bd,s=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),Uu(o,o.current,s,n),W=c,Df(0,!1),lt&&typeof lt.onPostCommitFiberRoot==`function`)try{lt.onPostCommitFiberRoot(ct,o)}catch{}return!0}finally{w.p=a,C.T=r,uf(e,t)}}function pf(e,t,n){t=ea(n,t),t=Fc(e.stateNode,t,2),e=Do(e,t,2),e!==null&&(Tt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=ea(n,e),n=Ic(2),r=Do(t,n,2),r!==null&&(Lc(n,r,t,e),Tt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>$e()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=Ct()),e=zi(e,t),e!==null&&(Tt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ye(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-dt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=yt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||bt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=$e(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-dt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=St(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=yt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Xe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Xe(r),jt(n)){case 2:case 8:n=nt;break;case 32:n=rt;break;case 268435456:n=at;break;default:n=rt}return r=jf.bind(null,e),n=Ye(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Xe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=yt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,$e()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ye(tt,Of):kf()})}function Pf(){if(Tf===0){var e=Ja;e===0&&(e=ht,ht<<=1,!(ht&261888)&&(ht=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:kn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[It]||null).action),o=r.submitter;o&&(t=(t=o[It]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);sc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),sc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<Ei.length;Lf++){var Rf=Ei[Lf];Di(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Di(vi,`onAnimationEnd`),Di(yi,`onAnimationIteration`),Di(bi,`onAnimationStart`),Di(`dblclick`,`onDoubleClick`),Di(`focusin`,`onFocus`),Di(`focusout`,`onBlur`),Di(xi,`onTransitionRun`),Di(Si,`onTransitionStart`),Di(Ci,`onTransitionCancel`),Di(wi,`onTransitionEnd`),$t(`onMouseEnter`,[`mouseout`,`mouseover`]),$t(`onMouseLeave`,[`mouseout`,`mouseover`]),$t(`onPointerEnter`,[`pointerout`,`pointerover`]),$t(`onPointerLeave`,[`pointerout`,`pointerover`]),Qt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Qt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Qt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Qt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Rt];n===void 0&&(n=t[Rt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Xt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Ln(function(){var r=a,i=Mn(n),s=[];a:{var c=Ti.get(e);if(c!==void 0){var l=Zn,u=e;switch(e){case`keypress`:if(Kn(n)===0)break a;case`keydown`:case`keyup`:l=hr;break;case`focusin`:u=`focus`,l=or;break;case`focusout`:u=`blur`,l=or;break;case`beforeblur`:case`afterblur`:l=or;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=ir;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=ar;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=vr;break;case vi:case yi:case bi:l=sr;break;case wi:l=yr;break;case`scroll`:case`scrollend`:l=$n;break;case`wheel`:l=br;break;case`copy`:case`cut`:case`paste`:l=cr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=gr;break;case`submit`:l=_r;break;case`toggle`:case`beforetoggle`:l=xr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Rn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==jn&&(u=n.relatedTarget||n.fromElement)&&(Gt(u)||u[Lt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=ir,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=gr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:qt(c),h=l==null?u:qt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Gt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ie(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?qt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Vr;else if(Fr(c)){if(Hr)_=Zr;else{_=Yr;var v=Jr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&En(r.elementType)&&(_=Vr):_=Xr;if(_&&=_(e,r)){Ir(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?qt(r):window,e){case`focusin`:(Fr(v)||v.contentEditable===`true`)&&(ci=v,li=r,ui=null);break;case`focusout`:ui=li=ci=null;break;case`mousedown`:di=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:di=!1,fi(s,n,i);break;case`selectionchange`:if(si)break;case`keydown`:case`keyup`:fi(s,n,i)}var y;if(Cr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else jr?kr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Er&&n.locale!==`ko`&&(jr||b!==`onCompositionStart`?b===`onCompositionEnd`&&jr&&(y=Gn()):(Hn=i,Un=`value`in Hn?Hn.value:Hn.textContent,jr=!0)),v=Jf(r,b),0<v.length&&(b=new lr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Ar(n),y!==null&&(b.data=y)))),(y=Tr?Mr(e,n):Nr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new lr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Rn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Rn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Rn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Rn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&Sn(e,``+r);else return;break;case`className`:sn(e,`class`,r);break;case`tabIndex`:sn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:sn(e,n,r);break;case`style`:Tn(e,r,o);return;case`data`:if(t!==`object`){sn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=An);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=kn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),on(e,`popover`,r);break;case`xlinkActuate`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:on(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Dn.get(n)||n,on(e,n,r);else return}D=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:Tn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)Sn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=An);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[It]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}D=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):on(e,n,r)}return}D=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}_n(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&yn(e,!!r,n,!0):yn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}xn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(En(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(D=!0),o=m;break;case`name`:m!==f&&(D=!0),a=m;break;case`checked`:m!==f&&(D=!0),u=m;break;case`defaultChecked`:m!==f&&(D=!0),d=m;break;case`value`:m!==f&&(D=!0),s=m;break;case`defaultValue`:m!==f&&(D=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}gn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(D=!0),p=o;break;case`defaultValue`:o!==l&&(D=!0),c=o;break;case`multiple`:o!==l&&(D=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?yn(e,!!n,n?[]:``,!1):yn(e,!!n,t,!0)):yn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(D=!0),p=a;break;case`defaultValue`:a!==o&&(D=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}bn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(D=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(En(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Ft]=r,n[It]=t,np(n,e,t),E(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:S({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Gt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ie(n,a,x),t===null?t=!1:(h(t,!0,ne,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ie(r,a,x),t===null?t=!1:(h(t,!0,re,a,r),a=ee,te=ee=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===An&&(e.onclick=null),Wt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=w.d;w.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Kt(e);t!==null&&t.tag===5&&t.type===`form`?lc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=hn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),E(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+hn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+hn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+hn(n.imageSizes)+`"]`)):i+=`[href="`+hn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=S({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ut]=!0,o.onload=o.onerror=function(){Yt(o)}),E(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+hn(r)+`"][href="`+hn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=S({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),E(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Jt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=S({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);E(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=S({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),E(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=S({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),E(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Fe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Jt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Jt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Jt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+hn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ut]){r.loading=1;return}}else t=e.createElement(`link`),t[Ut]=!0,t.onload=t.onerror=Yt.bind(null,t),np(t,`link`,n),E(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+hn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+hn(n.href)+`"]`);if(r)return t.instance=r,E(r),r;var a=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),E(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,E(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),E(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,E(a),a):(r=n,(a=vm.get(o))&&(r=S({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),E(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ht]||a[Ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,E(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),E(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:fe,Provider:null,Consumer:null,_currentValue:Oe,_currentValue2:Oe,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Wi(3,null,null,t),e.current=a,a.stateNode=e,t=Va(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},wo(a),e}function uh(e){return e?(e=Hi,e):Hi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=Eo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Do(e,r,t),n!==null&&(Pd(n,e,t),Oo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=zi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=At(t);var n=zi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=2,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function vh(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=8,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Kt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=vt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-dt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=$e()+500,Df(0,!1))}}break;case 31:case 13:s=zi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Mn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(et()){case tt:return 2;case nt:return 8;case rt:case it:return 32;case at:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Kt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jn=r,n.target.dispatchEvent(r),jn=null}else return t=Kt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Kt(n);a!==null&&(e.splice(t,3),t-=3,sc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[It]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[It]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Lt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:C,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{ct=Jh.inject(qh),lt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ac,s=jc,c=Mc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Lt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`/* ============================================\r
   VISIT KYRGYZSTAN — TRANSLATIONS\r
   RU / EN / KY (Кыргызча)\r
   ============================================ */\r
\r
const TRANSLATIONS = {\r
\r
  /* ══════════════ РУССКИЙ ══════════════ */\r
  ru: {\r
    // NAV\r
    nav_home:       "Главная",\r
    nav_places:     "Места",\r
    nav_mountains:  "Горы",\r
    nav_routes:     "Маршруты",\r
    nav_map:        "Карта",\r
    nav_reviews:    "Отзывы",\r
\r
    // SEARCH\r
    search_placeholder: "Поиск мест, маршрутов, гор...",\r
    search_btn:         "Найти",\r
    search_noresult:    "Ничего не найдено. Попробуйте: «Иссык-Куль», «горы», «маршруты»",\r
    search_hint:        "Результаты поиска:",\r
\r
    // HERO (index)\r
    hero_title:    "Добро пожаловать в",\r
    hero_country:  "Кыргызстан",\r
    hero_subtitle: "Страна тысячи гор, бирюзовых озёр и бескрайних просторов. Откройте для себя настоящее сердце Азии.",\r
    hero_btn1:     "Исследовать места",\r
    hero_btn2:     "Планировать маршрут",\r
    stat_peaks:    "горных пика",\r
    stat_height:   "ср. высота",\r
    stat_routes:   "маршрутов",\r
    stat_tourists: "туристов в год",\r
\r
    // SECTIONS\r
    sec_categories:  "Что вас интересует?",\r
    sec_top:         "Топ достопримечательностей",\r
    sec_top_sub:     "Самые популярные места среди туристов",\r
    sec_why:         "Почему Кыргызстан?",\r
    sec_reviews:     "Отзывы туристов",\r
    sec_all_reviews: "Все отзывы и оставить свой",\r
    sec_saved:       "Ваши сохранённые места",\r
    sec_plan:        "Спланируйте свою поездку",\r
    sec_plan_sub:    "Укажите откуда и куда — мы подберём маршрут и транспорт.",\r
    sec_plan_btn:    "Открыть планировщик",\r
\r
    // CATEGORIES\r
    cat_mountains:  "Горные вершины",\r
    cat_mountains_d:"Пик Ленина, Хан-Тенгри и другие",\r
    cat_lakes:      "Озёра и реки",\r
    cat_lakes_d:    "Иссык-Куль, Сон-Куль, Сары-Чeлек",\r
    cat_trekking:   "Треккинг",\r
    cat_trekking_d: "Маршруты для любого уровня",\r
    cat_culture:    "Культура и история",\r
    cat_culture_d:  "Юрты, традиции, Манас",\r
    cat_horse:      "Конные прогулки",\r
    cat_horse_d:    "Верхом по степям и ущельям",\r
    cat_gorge:      "Ущелья и леса",\r
    cat_gorge_d:    "Арстанбап, Чон-Кемин, Ала-Арча",\r
\r
    // WHY section\r
    why1_t: "Горы на любой вкус",\r
    why1_d: "От лёгких прогулок до сложных восхождений на 7000+ метров",\r
    why2_t: "Доступные цены",\r
    why2_d: "Один из самых бюджетных видов туризма в Азии",\r
    why3_t: "Гостеприимство",\r
    why3_d: "Кыргызы — одни из самых гостеприимных народов мира",\r
    why4_t: "Нетронутая природа",\r
    why4_d: "90% территории — горы, ущелья и альпийские луга",\r
    why5_t: "Разнообразие маршрутов",\r
    why5_d: "Треккинг, конные туры, альпинизм, кайтсёрфинг",\r
    why6_t: "Безопасная страна",\r
    why6_d: "Спокойная и дружелюбная атмосфера для путешественников",\r
\r
    // PLANNER\r
    plan_from:      "Откуда",\r
    plan_to:        "Куда",\r
    plan_transport: "Транспорт",\r
    plan_btn:       "Найти маршрут",\r
    plan_bus:       "Автобус",\r
    plan_taxi:      "Такси/Авто",\r
    plan_plane:     "Самолёт + авто",\r
    plan_horse:     "Конный тур",\r
\r
    // PLACES\r
    places_title:   "Достопримечательности",\r
    places_sub:     "Откройте лучшие места Кыргызстана",\r
    filter_all:     "Все",\r
    filter_lake:    "Озёра",\r
    filter_gorge:   "Ущелья",\r
    filter_canyon:  "Каньоны",\r
    filter_culture: "Культура",\r
    filter_forest:  "Леса",\r
    filter_city:    "Города",\r
    how_to_get:     "Как добраться",\r
    best_time:      "Лучшее время",\r
    btn_map:        "На карте",\r
    btn_reviews:    "Отзывы",\r
    btn_more:       "Подробнее",\r
    btn_save:       "Сохранить",\r
    btn_saved_clear:"Очистить список",\r
\r
    // MOUNTAINS\r
    mountains_title:"Горные красоты",\r
    mountains_sub:  "Тянь-Шань и Памир — крыша Центральной Азии",\r
    difficulty:     "Сложность",\r
    ascent_time:    "Восхождение",\r
    best_season:    "Сезон",\r
    how_to_reach:   "Как добраться",\r
    tips_title:     "Важные советы",\r
    tip1_t: "Разрешения",  tip1_d: "Для погранзон нужен специальный пропуск ГКНБ",\r
    tip2_t: "Страховка",   tip2_d: "Обязательна с покрытием горного спасения от $50 000",\r
    tip3_t: "Гиды",        tip3_d: "Рекомендуем сертифицированных горных гидов КР",\r
\r
    // ROUTES\r
    routes_title:   "Маршруты и транспорт",\r
    routes_sub:     "Все пути к красотам — от Бишкека до любой вершины",\r
    transport_from_bishkek: "Транспорт из Бишкека",\r
    dest:    "Направление",\r
    transp:  "Транспорт",\r
    time:    "Время",\r
    price:   "Цена (сом)",\r
    from_where: "Откуда",\r
    filter_trek:    "Треккинг",\r
    filter_horse_r: "Конные",\r
    filter_climb:   "Альпинизм",\r
    filter_easy:    "Лёгкие",\r
\r
    // MAP\r
    map_title:      "Интерактивная карта",\r
    map_sub:        "Все туристические точки на одной карте",\r
    show:           "Показать",\r
    map_all:        "Все",\r
    legend_title:   "Легенда",\r
    leg_mountain:   "Горы и вершины",\r
    leg_lake:       "Озёра и реки",\r
    leg_culture:    "Культура и история",\r
    leg_nature:     "Природа и парки",\r
    all_points:     "Все точки на карте",\r
\r
    // REVIEWS\r
    reviews_title:  "Отзывы путешественников",\r
    reviews_sub:    "Поделитесь опытом и читайте отзывы других",\r
    total_reviews:  "Отзывов",\r
    avg_rating:     "Средний рейтинг",\r
    popular_place:  "Популярное место",\r
    five_star:      "Отзывов 5★",\r
    form_title:     "Оставить отзыв",\r
    form_name:      "Ваше имя",\r
    form_country:   "Страна",\r
    form_place:     "Место посещения",\r
    form_place_ph:  "— Выберите место —",\r
    form_rating:    "Оценка",\r
    form_date:      "Дата посещения",\r
    form_text:      "Ваш отзыв",\r
    form_text_ph:   "Расскажите о впечатлениях: природа, люди, транспорт...",\r
    form_tips:      "Полезные советы",\r
    form_tips_ph:   "Лучшее время для посещения, что взять с собой...",\r
    form_submit:    "Опубликовать отзыв",\r
    form_privacy:   "Отзывы сохраняются в браузере",\r
    all_reviews:    "Все отзывы",\r
    filter_allp:    "Все места",\r
    filter_allr:    "Все оценки",\r
    sort_new:       "Сначала новые",\r
    sort_rating:    "По рейтингу",\r
    no_reviews:     "Отзывов пока нет. Будьте первым!",\r
    toast_saved:    "сохранено!",\r
    toast_removed:  "удалено из сохранённых",\r
    toast_cleared:  "Список очищен",\r
    toast_review:   "Отзыв опубликован! Спасибо 🙏",\r
    toast_err_name: "Введите ваше имя",\r
    toast_err_place:"Выберите место",\r
    toast_err_star: "Выберите оценку (звёзды)",\r
    toast_err_text: "Напишите отзыв (минимум 20 символов)",\r
\r
    // FOOTER\r
    footer_tagline: "Ваш надёжный путеводитель по Кыргызстану.",\r
    footer_nav:     "Навигация",\r
    footer_regions: "Регионы",\r
    footer_contact: "Контакты",\r
    footer_copy:    "Все права защищены.",\r
    footer_made:    "Создано с",\r
    footer_for:     "для туристов",\r
  },\r
\r
  /* ══════════════ ENGLISH ══════════════ */\r
  en: {\r
    nav_home:       "Home",\r
    nav_places:     "Places",\r
    nav_mountains:  "Mountains",\r
    nav_routes:     "Routes",\r
    nav_map:        "Map",\r
    nav_reviews:    "Reviews",\r
\r
    search_placeholder: "Search places, routes, mountains...",\r
    search_btn:         "Search",\r
    search_noresult:    "Nothing found. Try: «Issyk-Kul», «mountains», «trekking»",\r
    search_hint:        "Search results:",\r
\r
    hero_title:    "Welcome to",\r
    hero_country:  "Kyrgyzstan",\r
    hero_subtitle: "Land of a thousand mountains, turquoise lakes and endless horizons. Discover the true heart of Asia.",\r
    hero_btn1:     "Explore Places",\r
    hero_btn2:     "Plan a Route",\r
    stat_peaks:    "mountain peaks",\r
    stat_height:   "avg. altitude",\r
    stat_routes:   "routes",\r
    stat_tourists: "tourists per year",\r
\r
    sec_categories:  "What interests you?",\r
    sec_top:         "Top Attractions",\r
    sec_top_sub:     "Most popular places among tourists",\r
    sec_why:         "Why Kyrgyzstan?",\r
    sec_reviews:     "Traveller Reviews",\r
    sec_all_reviews: "All reviews & leave yours",\r
    sec_saved:       "Your Saved Places",\r
    sec_plan:        "Plan Your Trip",\r
    sec_plan_sub:    "Tell us where you're going — we'll find the best route and transport.",\r
    sec_plan_btn:    "Open Planner",\r
\r
    cat_mountains:  "Mountain Peaks",\r
    cat_mountains_d:"Lenin Peak, Khan Tengri and more",\r
    cat_lakes:      "Lakes & Rivers",\r
    cat_lakes_d:    "Issyk-Kul, Son-Kul, Sary-Chelek",\r
    cat_trekking:   "Trekking",\r
    cat_trekking_d: "Routes for every level",\r
    cat_culture:    "Culture & History",\r
    cat_culture_d:  "Yurts, traditions, Manas",\r
    cat_horse:      "Horse Riding",\r
    cat_horse_d:    "Ride through steppes and gorges",\r
    cat_gorge:      "Gorges & Forests",\r
    cat_gorge_d:    "Arstanbap, Chon-Kemin, Ala-Archa",\r
\r
    why1_t: "Mountains for Everyone",\r
    why1_d: "From easy walks to challenging ascents of 7000+ metres",\r
    why2_t: "Affordable Prices",\r
    why2_d: "One of the most budget-friendly destinations in Asia",\r
    why3_t: "Hospitality",\r
    why3_d: "Kyrgyz people are among the most welcoming in the world",\r
    why4_t: "Pristine Nature",\r
    why4_d: "90% of the territory is mountains, gorges and alpine meadows",\r
    why5_t: "Diverse Routes",\r
    why5_d: "Trekking, horse tours, mountaineering, kitesurfing",\r
    why6_t: "Safe Country",\r
    why6_d: "Calm and friendly atmosphere for travellers",\r
\r
    plan_from:      "From",\r
    plan_to:        "To",\r
    plan_transport: "Transport",\r
    plan_btn:       "Find Route",\r
    plan_bus:       "Bus",\r
    plan_taxi:      "Taxi / Car",\r
    plan_plane:     "Flight + Car",\r
    plan_horse:     "Horse Tour",\r
\r
    places_title:   "Attractions",\r
    places_sub:     "Discover the best places in Kyrgyzstan",\r
    filter_all:     "All",\r
    filter_lake:    "Lakes",\r
    filter_gorge:   "Gorges",\r
    filter_canyon:  "Canyons",\r
    filter_culture: "Culture",\r
    filter_forest:  "Forests",\r
    filter_city:    "Cities",\r
    how_to_get:     "How to get there",\r
    best_time:      "Best time",\r
    btn_map:        "On Map",\r
    btn_reviews:    "Reviews",\r
    btn_more:       "More Info",\r
    btn_save:       "Save",\r
    btn_saved_clear:"Clear list",\r
\r
    mountains_title:"Mountain Beauty",\r
    mountains_sub:  "Tian Shan & Pamir — the roof of Central Asia",\r
    difficulty:     "Difficulty",\r
    ascent_time:    "Ascent",\r
    best_season:    "Season",\r
    how_to_reach:   "How to reach",\r
    tips_title:     "Important Tips",\r
    tip1_t: "Permits",    tip1_d: "Border zone permits required from GKNB",\r
    tip2_t: "Insurance",  tip2_d: "Mountain rescue insurance minimum $50,000",\r
    tip3_t: "Guides",     tip3_d: "We recommend certified mountain guides",\r
\r
    routes_title:   "Routes & Transport",\r
    routes_sub:     "All paths to Kyrgyzstan's beauty — from Bishkek to any peak",\r
    transport_from_bishkek: "Transport from Bishkek",\r
    dest:    "Destination",\r
    transp:  "Transport",\r
    time:    "Time",\r
    price:   "Price (som)",\r
    from_where: "Departure",\r
    filter_trek:    "Trekking",\r
    filter_horse_r: "Horse",\r
    filter_climb:   "Climbing",\r
    filter_easy:    "Easy",\r
\r
    map_title:      "Interactive Map",\r
    map_sub:        "All tourist spots on one map",\r
    show:           "Show",\r
    map_all:        "All",\r
    legend_title:   "Legend",\r
    leg_mountain:   "Mountains & Peaks",\r
    leg_lake:       "Lakes & Rivers",\r
    leg_culture:    "Culture & History",\r
    leg_nature:     "Nature & Parks",\r
    all_points:     "All map points",\r
\r
    reviews_title:  "Traveller Reviews",\r
    reviews_sub:    "Share your experience and read others",\r
    total_reviews:  "Reviews",\r
    avg_rating:     "Avg. Rating",\r
    popular_place:  "Popular Place",\r
    five_star:      "5★ Reviews",\r
    form_title:     "Leave a Review",\r
    form_name:      "Your Name",\r
    form_country:   "Country",\r
    form_place:     "Place Visited",\r
    form_place_ph:  "— Select a place —",\r
    form_rating:    "Rating",\r
    form_date:      "Date of Visit",\r
    form_text:      "Your Review",\r
    form_text_ph:   "Tell us about nature, people, transport...",\r
    form_tips:      "Useful Tips",\r
    form_tips_ph:   "Best time to visit, what to bring...",\r
    form_submit:    "Publish Review",\r
    form_privacy:   "Reviews are saved in your browser",\r
    all_reviews:    "All Reviews",\r
    filter_allp:    "All places",\r
    filter_allr:    "All ratings",\r
    sort_new:       "Newest first",\r
    sort_rating:    "By rating",\r
    no_reviews:     "No reviews yet. Be the first!",\r
    toast_saved:    "saved!",\r
    toast_removed:  "removed from saved",\r
    toast_cleared:  "List cleared",\r
    toast_review:   "Review published! Thank you 🙏",\r
    toast_err_name: "Enter your name",\r
    toast_err_place:"Select a place",\r
    toast_err_star: "Select a rating (stars)",\r
    toast_err_text: "Write a review (min 20 characters)",\r
\r
    footer_tagline: "Your reliable guide to Kyrgyzstan.",\r
    footer_nav:     "Navigation",\r
    footer_regions: "Regions",\r
    footer_contact: "Contacts",\r
    footer_copy:    "All rights reserved.",\r
    footer_made:    "Made with",\r
    footer_for:     "for tourists",\r
  },\r
\r
  /* ══════════════ КЫРГЫЗЧА ══════════════ */\r
  ky: {\r
    nav_home:       "Башкы бет",\r
    nav_places:     "Жерлер",\r
    nav_mountains:  "Тоолор",\r
    nav_routes:     "Маршруттар",\r
    nav_map:        "Карта",\r
    nav_reviews:    "Пикирлер",\r
\r
    search_placeholder: "Жерлерди, маршруттарды, тоолорду издөө...",\r
    search_btn:         "Издөө",\r
    search_noresult:    "Эч нерсе табылган жок. «Ысык-Көл», «тоолор» деп аракет кылыңыз",\r
    search_hint:        "Издөө жыйынтыктары:",\r
\r
    hero_title:    "Кош келиңиздер",\r
    hero_country:  "Кыргызстан",\r
    hero_subtitle: "Миң тоонун, зөңгөзөл көлдөрдүн жана чексиз кеңиктин өлкөсү. Азиянын чыныгы жүрөгүн ачып билиңиз.",\r
    hero_btn1:     "Жерлерди изилдөө",\r
    hero_btn2:     "Маршрут түзүү",\r
    stat_peaks:    "тоо чокусу",\r
    stat_height:   "орт. бийиктик",\r
    stat_routes:   "маршрут",\r
    stat_tourists: "турист жылына",\r
\r
    sec_categories:  "Сизди эмне кызыктырат?",\r
    sec_top:         "Эң мыкты жерлер",\r
    sec_top_sub:     "Туристтердин арасында эң популярдуу жерлер",\r
    sec_why:         "Эмне үчүн Кыргызстан?",\r
    sec_reviews:     "Туристтердин пикирлери",\r
    sec_all_reviews: "Бардык пикирлер жана өзүңүздүн пикириңизди жазыңыз",\r
    sec_saved:       "Сакталган жерлериңиз",\r
    sec_plan:        "Саякатыңызды пландаңыз",\r
    sec_plan_sub:    "Кайдан жана кайда баратканыңызды айтыңыз — биз маршрут жана транспорт табабыз.",\r
    sec_plan_btn:    "Планировщикти ачуу",\r
\r
    cat_mountains:  "Тоо чокулары",\r
    cat_mountains_d:"Ленин чокусу, Хан-Теңири жана башкалар",\r
    cat_lakes:      "Көлдөр жана дарыялар",\r
    cat_lakes_d:    "Ысык-Көл, Соң-Көл, Сары-Челек",\r
    cat_trekking:   "Треккинг",\r
    cat_trekking_d: "Ар кандай деңгээл үчүн маршруттар",\r
    cat_culture:    "Маданият жана тарых",\r
    cat_culture_d:  "Боз үйлөр, салттар, Манас",\r
    cat_horse:      "Атчан серүүн",\r
    cat_horse_d:    "Талааларда жана капчыгайларда атчан",\r
    cat_gorge:      "Капчыгайлар жана токойлор",\r
    cat_gorge_d:    "Арстанбап, Чоң-Кемин, Ала-Арча",\r
\r
    why1_t: "Ар кимге ылайык тоолор",\r
    why1_d: "Жеңил сейилдөөдөн 7000+ метрлик чокуларга чейин",\r
    why2_t: "Жеткиликтүү баалар",\r
    why2_d: "Азиядагы эң арзан туристтик дестинациялардын бири",\r
    why3_t: "Меймандостук",\r
    why3_d: "Кыргыздар дүйнөдөгү эң меймандос элдердин бири",\r
    why4_t: "Тынч табият",\r
    why4_d: "Аймактын 90% — тоолор, капчыгайлар жана альп чалгындары",\r
    why5_t: "Маршруттардын көп түрдүүлүгү",\r
    why5_d: "Треккинг, атчан жүрүш, альпинизм, кайтсёрфинг",\r
    why6_t: "Коопсуз өлкө",\r
    why6_d: "Саякатчылар үчүн тынч жана достук атмосфера",\r
\r
    plan_from:      "Кайдан",\r
    plan_to:        "Кайда",\r
    plan_transport: "Транспорт",\r
    plan_btn:       "Маршрут табуу",\r
    plan_bus:       "Автобус",\r
    plan_taxi:      "Такси/Машина",\r
    plan_plane:     "Учак + машина",\r
    plan_horse:     "Атчан тур",\r
\r
    places_title:   "Көрүүгө арзыган жерлер",\r
    places_sub:     "Кыргызстандын эң мыкты жерлерин ачып билиңиз",\r
    filter_all:     "Баары",\r
    filter_lake:    "Көлдөр",\r
    filter_gorge:   "Капчыгайлар",\r
    filter_canyon:  "Каньондор",\r
    filter_culture: "Маданият",\r
    filter_forest:  "Токойлор",\r
    filter_city:    "Шаарлар",\r
    how_to_get:     "Кантип жетүүгө болот",\r
    best_time:      "Эң жакшы мезгил",\r
    btn_map:        "Картада",\r
    btn_reviews:    "Пикирлер",\r
    btn_more:       "Толугураак",\r
    btn_save:       "Сактоо",\r
    btn_saved_clear:"Тизмени тазалоо",\r
\r
    mountains_title:"Тоо сулуулугу",\r
    mountains_sub:  "Тянь-Шань жана Памир — Борбордук Азиянын чатыры",\r
    difficulty:     "Кыйынчылык",\r
    ascent_time:    "Чыгуу",\r
    best_season:    "Мезгили",\r
    how_to_reach:   "Кантип жетүүгө болот",\r
    tips_title:     "Маанилүү кеңештер",\r
    tip1_t: "Уруксаттар", tip1_d: "Чек ара аймактары үчүн МКМБ аркылуу өткөзмө керек",\r
    tip2_t: "Камсыздандыруу", tip2_d: "Тоодон куткаруу камсыздандыруусу $50,000дан кем эмес",\r
    tip3_t: "Гиддер",    tip3_d: "Сертификатталган тоо гиддерин сунуштайбыз",\r
\r
    routes_title:   "Маршруттар жана транспорт",\r
    routes_sub:     "Бишкектен каалаган чокуга чейинки бардык жолдор",\r
    transport_from_bishkek: "Бишкектен транспорт",\r
    dest:    "Багыт",\r
    transp:  "Транспорт",\r
    time:    "Убакыт",\r
    price:   "Баасы (сом)",\r
    from_where: "Кайдан",\r
    filter_trek:    "Треккинг",\r
    filter_horse_r: "Атчан",\r
    filter_climb:   "Альпинизм",\r
    filter_easy:    "Жеңил",\r
\r
    map_title:      "Интерактивдүү карта",\r
    map_sub:        "Бардык туристтик жерлер бир картада",\r
    show:           "Көрсөтүү",\r
    map_all:        "Баары",\r
    legend_title:   "Белги",\r
    leg_mountain:   "Тоолор жана чокулар",\r
    leg_lake:       "Көлдөр жана дарыялар",\r
    leg_culture:    "Маданият жана тарых",\r
    leg_nature:     "Табият жана парктар",\r
    all_points:     "Картадагы бардык жерлер",\r
\r
    reviews_title:  "Саякатчылардын пикирлери",\r
    reviews_sub:    "Тажрыйбаңызды бөлүшүңүз жана башкалардын пикирлерин окуңуз",\r
    total_reviews:  "Пикир",\r
    avg_rating:     "Орточо баа",\r
    popular_place:  "Популярдуу жер",\r
    five_star:      "5★ Пикир",\r
    form_title:     "Пикир калтыруу",\r
    form_name:      "Атыңыз",\r
    form_country:   "Өлкө",\r
    form_place:     "Барган жер",\r
    form_place_ph:  "— Жерди тандаңыз —",\r
    form_rating:    "Баа",\r
    form_date:      "Барган күнү",\r
    form_text:      "Пикириңиз",\r
    form_text_ph:   "Табият, адамдар, транспорт жөнүндө айтыңыз...",\r
    form_tips:      "Пайдалуу кеңештер",\r
    form_tips_ph:   "Баруунун эң жакшы мезгили, эмне алуу керек...",\r
    form_submit:    "Пикирди жарыялоо",\r
    form_privacy:   "Пикирлер браузерде сакталат",\r
    all_reviews:    "Бардык пикирлер",\r
    filter_allp:    "Бардык жерлер",\r
    filter_allr:    "Бардык баалар",\r
    sort_new:       "Алгач жаңылар",\r
    sort_rating:    "Баа боюнча",\r
    no_reviews:     "Азырынча пикир жок. Биринчи болуңуз!",\r
    toast_saved:    "сакталды!",\r
    toast_removed:  "сакталгандардан алынды",\r
    toast_cleared:  "Тизме тазаланды",\r
    toast_review:   "Пикир жарыяланды! Рахмат 🙏",\r
    toast_err_name: "Атыңызды жазыңыз",\r
    toast_err_place:"Жерди тандаңыз",\r
    toast_err_star: "Баа коюңуз (жылдызчалар)",\r
    toast_err_text: "Пикир жазыңыз (кеминде 20 символ)",\r
\r
    footer_tagline: "Кыргызстан боюнча ишенимдүү жол башчыңыз.",\r
    footer_nav:     "Навигация",\r
    footer_regions: "Аймактар",\r
    footer_contact: "Байланыш",\r
    footer_copy:    "Бардык укуктар корголгон.",\r
    footer_made:    "Жасалган",\r
    footer_for:     "туристтер үчүн",\r
  }\r
};\r
\r
// Данные поиска на всех языках\r
const SEARCH_INDEX = [\r
  { key: ['иссык', 'issyk', 'ысык', 'issyk-kul', 'иссык-куль', 'ысык-көл', 'озеро', 'lake', 'көл'],  url: 'places.html#issykkul' },\r
  { key: ['ала-арча', 'ala-archa', 'ala archa', 'арча', 'alaarcha', 'парк', 'park', 'паркы'],         url: 'places.html#alaarcha' },\r
  { key: ['сон-куль', 'son-kul', 'соң-көл', 'сон куль', 'son kul', 'соңкөл'],                        url: 'places.html#sonkul' },\r
  { key: ['сказка', 'skazka', 'fairy', 'каньон', 'canyon', 'каньон сказка'],                         url: 'places.html#skazka' },\r
  { key: ['арстанбап', 'arstanbap', 'лес', 'forest', 'токой', 'орех'],                               url: 'places.html#arstanbap' },\r
  { key: ['ош', 'osh', 'южная столица', 'south capital', 'түштүк'],                                   url: 'places.html#osh' },\r
  { key: ['сары-челек', 'sary-chelek', 'сары челек', 'сары-чeлек'],                                   url: 'places.html#sarychelek' },\r
  { key: ['талас', 'talas', 'манас', 'manas'],                                                        url: 'places.html#talas' },\r
  { key: ['конорчек', 'konorchek'],                                                                    url: 'places.html#konorchek' },\r
  { key: ['ленин', 'lenin', 'пик ленина', 'peak', 'чоку', '7134'],                                   url: 'mountains.html#lenin' },\r
  { key: ['хан-тенгри', 'khan tengri', 'хан тенгри', 'хантенгри', 'tengri', '6995'],                 url: 'mountains.html#khantengri' },\r
  { key: ['победа', 'pobeda', 'victory', 'жеңиш', '7439'],                                            url: 'mountains.html#pobeda' },\r
  { key: ['ак-шыйрак', 'akshyirak', 'ак шыйрак'],                                                    url: 'mountains.html#akshyirak' },\r
  { key: ['горы', 'mountains', 'тоолор', 'гора', 'mountain', 'тоо', 'альпин', 'alpine'],             url: 'mountains.html' },\r
  { key: ['маршрут', 'route', 'маршруттар', 'trek', 'треккинг', 'trekking', 'поход'],                url: 'routes.html' },\r
  { key: ['транспорт', 'transport', 'bus', 'автобус', 'такси', 'taxi', 'самолет', 'plane'],          url: 'routes.html' },\r
  { key: ['конный', 'horse', 'лошадь', 'атчан', 'ат'],                                               url: 'routes.html#horse' },\r
  { key: ['карта', 'map', 'карта', 'картасы'],                                                        url: 'map.html' },\r
  { key: ['отзыв', 'review', 'пикир', 'отзывы', 'reviews', 'пикирлер'],                              url: 'reviews.html' },\r
  { key: ['каракол', 'karakol'],                                                                       url: 'routes.html' },\r
  { key: ['нарын', 'naryn'],                                                                           url: 'routes.html' },\r
  { key: ['бишкек', 'bishkek', 'столица', 'capital', 'башкент'],                                     url: 'index.html' },\r
];\r
`,b=`/* ============================================\r
   VISIT KYRGYZSTAN — MAIN JS\r
   Язык (RU/EN/KY) + Живой поиск + Отзывы\r
   ============================================ */\r
\r
/* ══════════════════════════════════════════\r
   1. ЯЗЫК — инициализация и переключение\r
   ══════════════════════════════════════════ */\r
\r
function getLang() {\r
  return localStorage.getItem('kg_lang') || 'ru';\r
}\r
\r
function setLang(lang) {\r
  localStorage.setItem('kg_lang', lang);\r
  applyLang(lang);\r
  // Обновить кнопки переключателя\r
  document.querySelectorAll('.lang-btn').forEach(btn => {\r
    btn.classList.toggle('active', btn.dataset.lang === lang);\r
  });\r
  // Установить lang у <html>\r
  document.documentElement.lang = lang === 'ky' ? 'ky' : lang === 'en' ? 'en' : 'ru';\r
  // Обновить зависимые части страницы\r
  renderReviews();\r
  initHomePage();\r
}\r
\r
function applyLang(lang) {\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : null;\r
  if (!T) return;\r
\r
  // Перевод текстовых узлов по data-i18n\r
  document.querySelectorAll('[data-i18n]').forEach(el => {\r
    const key = el.getAttribute('data-i18n');\r
    if (T[key] !== undefined) el.textContent = T[key];\r
  });\r
\r
  // Перевод placeholder по data-i18n-placeholder\r
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {\r
    const key = el.getAttribute('data-i18n-placeholder');\r
    if (T[key] !== undefined) el.placeholder = T[key];\r
  });\r
\r
  // Перевод title кнопок\r
  document.querySelectorAll('[data-i18n-title]').forEach(el => {\r
    const key = el.getAttribute('data-i18n-title');\r
    if (T[key] !== undefined) el.title = T[key];\r
  });\r
}\r
\r
/* ══════════════════════════════════════════\r
   2. ЖИВОЙ ПОИСК\r
   ══════════════════════════════════════════ */\r
\r
// Полный каталог точек для поиска (локализованные названия)\r
const PLACES_DATA = [\r
  { ru:'Иссык-Куль',       en:'Issyk-Kul',          ky:'Ысык-Көл',\r
    ru_d:'Горное озеро, Иссык-Кульская обл.',\r
    en_d:'Mountain lake, Issyk-Kul region',\r
    ky_d:'Тоо көлү, Ысык-Көл облусу',\r
    url:'places.html#issykkul', icon:'fas fa-water', cat_ru:'Озеро', cat_en:'Lake', cat_ky:'Көл' },\r
  { ru:'Ала-Арча',         en:'Ala-Archa',           ky:'Ала-Арча',\r
    ru_d:'Нацпарк, 40 км от Бишкека',\r
    en_d:'National park, 40 km from Bishkek',\r
    ky_d:'Улуттук парк, Бишкектен 40 км',\r
    url:'places.html#alaarcha', icon:'fas fa-tree', cat_ru:'Заповедник', cat_en:'Nature Park', cat_ky:'Жаратылыш' },\r
  { ru:'Сон-Куль',         en:'Son-Kul',             ky:'Соң-Көл',\r
    ru_d:'Высокогорное озеро, 3016 м',\r
    en_d:'Alpine lake, 3016 m altitude',\r
    ky_d:'Бийик тоо көлү, 3016 м',\r
    url:'places.html#sonkul', icon:'fas fa-water', cat_ru:'Озеро', cat_en:'Lake', cat_ky:'Көл' },\r
  { ru:'Каньон Сказка',    en:'Fairy Tale Canyon',   ky:'Жомок Каньону',\r
    ru_d:'Красные скалы у Иссык-Куля',\r
    en_d:'Red rocks near Issyk-Kul',\r
    ky_d:'Ысык-Көлдүн жанындагы кызыл аскалар',\r
    url:'places.html#skazka', icon:'fas fa-mountain', cat_ru:'Каньон', cat_en:'Canyon', cat_ky:'Каньон' },\r
  { ru:'Пик Ленина',       en:'Lenin Peak',          ky:'Ленин Чокусу',\r
    ru_d:'7134 м — семитысячник Тянь-Шаня',\r
    en_d:'7134 m — one of the accessible 7000ers',\r
    ky_d:'7134 м — Тянь-Шандын жети миңдиги',\r
    url:'mountains.html#lenin', icon:'fas fa-mountain', cat_ru:'Гора', cat_en:'Mountain', cat_ky:'Тоо' },\r
  { ru:'Хан-Тенгри',       en:'Khan Tengri',         ky:'Хан-Теңири',\r
    ru_d:'6995 м — Повелитель неба',\r
    en_d:'6995 m — Lord of the Sky',\r
    ky_d:'6995 м — Теңирдин бийи',\r
    url:'mountains.html#khantengri', icon:'fas fa-mountain', cat_ru:'Гора', cat_en:'Mountain', cat_ky:'Тоо' },\r
  { ru:'Пик Победы',       en:'Peak Pobeda',         ky:'Жеңиш Чокусу',\r
    ru_d:'7439 м — высшая точка Кыргызстана',\r
    en_d:'7439 m — highest point of Kyrgyzstan',\r
    ky_d:'7439 м — Кыргызстандын эң бийик чокусу',\r
    url:'mountains.html#pobeda', icon:'fas fa-mountain', cat_ru:'Гора', cat_en:'Mountain', cat_ky:'Тоо' },\r
  { ru:'Ош',               en:'Osh',                 ky:'Ош',\r
    ru_d:'Древний город, 3000+ лет, Шёлковый путь',\r
    en_d:'Ancient city, 3000+ years, Silk Road',\r
    ky_d:'Байыркы шаар, 3000+ жыл, Жибек жолу',\r
    url:'places.html#osh', icon:'fas fa-landmark', cat_ru:'Город', cat_en:'City', cat_ky:'Шаар' },\r
  { ru:'Арстанбап',        en:'Arstanbap',           ky:'Арстанбап',\r
    ru_d:'Ореховый лес ЮНЕСКО, Жалал-Абад',\r
    en_d:'UNESCO walnut forest, Jalal-Abad',\r
    ky_d:'ЮНЕСКО жаңгак токою, Жалал-Абад',\r
    url:'places.html#arstanbap', icon:'fas fa-tree', cat_ru:'Лес', cat_en:'Forest', cat_ky:'Токой' },\r
  { ru:'Сары-Чeлек',       en:'Sary-Chelek',         ky:'Сары-Челек',\r
    ru_d:'Озеро-заповедник ЮНЕСКО',\r
    en_d:'UNESCO biosphere reserve lake',\r
    ky_d:'ЮНЕСКО биосфералык корук көлү',\r
    url:'places.html#sarychelek', icon:'fas fa-water', cat_ru:'Озеро', cat_en:'Lake', cat_ky:'Көл' },\r
  { ru:'Таласская долина',  en:'Talas Valley',        ky:'Талас өрөөнү',\r
    ru_d:'Родина эпоса «Манас»',\r
    en_d:'Birthplace of the Manas epic',\r
    ky_d:'«Манас» эпосунун мекени',\r
    url:'places.html#talas', icon:'fas fa-landmark', cat_ru:'Культура', cat_en:'Culture', cat_ky:'Маданият' },\r
  { ru:'Треккинг маршруты', en:'Trekking Routes',    ky:'Треккинг маршруттары',\r
    ru_d:'Пешие маршруты для любого уровня',\r
    en_d:'Hiking routes for any level',\r
    ky_d:'Ар кандай деңгээл үчүн жөө маршруттар',\r
    url:'routes.html', icon:'fas fa-hiking', cat_ru:'Маршруты', cat_en:'Routes', cat_ky:'Маршруттар' },\r
  { ru:'Конные туры',       en:'Horse Tours',         ky:'Атчан туруктар',\r
    ru_d:'Верхом по горам и долинам',\r
    en_d:'Horse riding through mountains and valleys',\r
    ky_d:'Тоолор жана өрөөндөр аркылуу атчан жүрүш',\r
    url:'routes.html#horse', icon:'fas fa-horse', cat_ru:'Маршруты', cat_en:'Routes', cat_ky:'Маршруттар' },\r
  { ru:'Карта',             en:'Map',                 ky:'Карта',\r
    ru_d:'Все места Кыргызстана на карте',\r
    en_d:'All Kyrgyzstan places on the map',\r
    ky_d:'Картадагы бардык жерлер',\r
    url:'map.html', icon:'fas fa-map', cat_ru:'Карта', cat_en:'Map', cat_ky:'Карта' },\r
  { ru:'Отзывы',            en:'Reviews',             ky:'Пикирлер',\r
    ru_d:'Читайте и оставляйте отзывы',\r
    en_d:'Read and leave reviews',\r
    ky_d:'Пикирлерди окуңуз жана калтырыңыз',\r
    url:'reviews.html', icon:'fas fa-star', cat_ru:'Отзывы', cat_en:'Reviews', cat_ky:'Пикирлер' },\r
  { ru:'Бишкек',            en:'Bishkek',             ky:'Бишкек',\r
    ru_d:'Столица Кыргызстана',\r
    en_d:'Capital of Kyrgyzstan',\r
    ky_d:'Кыргызстандын борбор шаары',\r
    url:'map.html', icon:'fas fa-city', cat_ru:'Город', cat_en:'City', cat_ky:'Шаар' },\r
  { ru:'Каракол',           en:'Karakol',             ky:'Каракол',\r
    ru_d:'Горный курорт у Иссык-Куля',\r
    en_d:'Mountain resort near Issyk-Kul',\r
    ky_d:'Ысык-Көлдүн жанындагы тоо курорту',\r
    url:'routes.html', icon:'fas fa-mountain', cat_ru:'Курорт', cat_en:'Resort', cat_ky:'Курорт' },\r
];\r
\r
let searchTimeout = null;\r
\r
function initSearch() {\r
  const input = document.getElementById('globalSearch');\r
  const dropdown = document.getElementById('searchDropdown');\r
  if (!input || !dropdown) return;\r
\r
  input.addEventListener('input', () => {\r
    clearTimeout(searchTimeout);\r
    searchTimeout = setTimeout(() => liveSearch(input.value), 180);\r
  });\r
\r
  input.addEventListener('keydown', (e) => {\r
    if (e.key === 'Enter') { e.preventDefault(); doSearch(); }\r
    if (e.key === 'Escape') closeDropdown();\r
    if (e.key === 'ArrowDown') { e.preventDefault(); focusDropdownItem(0); }\r
  });\r
\r
  // Закрыть при клике вне\r
  document.addEventListener('click', (e) => {\r
    if (!input.contains(e.target) && !dropdown.contains(e.target)) closeDropdown();\r
  });\r
}\r
\r
function liveSearch(query) {\r
  const dropdown = document.getElementById('searchDropdown');\r
  if (!dropdown) return;\r
  const q = query.trim().toLowerCase();\r
\r
  if (!q) { closeDropdown(); return; }\r
\r
  const lang = getLang();\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : null;\r
\r
  const results = PLACES_DATA.filter(p => {\r
    const name = (p[lang] || p.ru || '').toLowerCase();\r
    const desc = (p[\`\${lang}_d\`] || p['ru_d'] || '').toLowerCase();\r
    return name.includes(q) || desc.includes(q);\r
  }).slice(0, 8);\r
\r
  if (results.length === 0) {\r
    const noMsg = T ? T.search_noresult : 'Ничего не найдено';\r
    dropdown.innerHTML = \`<div class="search-no-result"><i class="fas fa-search-minus" style="font-size:1.5rem;opacity:.3;display:block;margin-bottom:.5rem"></i>\${noMsg}</div>\`;\r
    dropdown.classList.add('open');\r
    return;\r
  }\r
\r
  const hintText = T ? T.search_hint : 'Результаты:';\r
  let html = \`<div class="search-dropdown-header"><i class="fas fa-search"></i> \${hintText}</div>\`;\r
\r
  results.forEach((p, i) => {\r
    const name = p[lang] || p.ru;\r
    const desc = p[\`\${lang}_d\`] || p['ru_d'];\r
    const cat  = p[\`cat_\${lang}\`] || p['cat_ru'];\r
    // Подсветка совпадения\r
    const re = new RegExp(\`(\${escapeRegex(q)})\`, 'gi');\r
    const highlightedName = name.replace(re, '<mark>$1</mark>');\r
    html += \`\r
      <a class="search-item" href="\${p.url}" tabindex="0" data-index="\${i}">\r
        <div class="search-item-icon"><i class="\${p.icon}"></i></div>\r
        <div class="search-item-text">\r
          <strong>\${highlightedName}</strong>\r
          <span>\${desc}</span>\r
        </div>\r
        <div class="search-item-cat">\${cat}</div>\r
      </a>\`;\r
  });\r
\r
  dropdown.innerHTML = html;\r
  dropdown.classList.add('open');\r
\r
  // Навигация стрелками\r
  dropdown.querySelectorAll('.search-item').forEach((item, idx) => {\r
    item.addEventListener('keydown', (e) => {\r
      if (e.key === 'ArrowDown') { e.preventDefault(); focusDropdownItem(idx + 1); }\r
      if (e.key === 'ArrowUp')   { e.preventDefault(); idx === 0 ? document.getElementById('globalSearch').focus() : focusDropdownItem(idx - 1); }\r
      if (e.key === 'Escape')    closeDropdown();\r
    });\r
  });\r
}\r
\r
function focusDropdownItem(idx) {\r
  const items = document.querySelectorAll('#searchDropdown .search-item');\r
  if (items[idx]) items[idx].focus();\r
}\r
\r
function closeDropdown() {\r
  const dropdown = document.getElementById('searchDropdown');\r
  if (dropdown) { dropdown.classList.remove('open'); dropdown.innerHTML = ''; }\r
}\r
\r
function doSearch() {\r
  const input = document.getElementById('globalSearch');\r
  if (!input) return;\r
  const q = input.value.trim().toLowerCase();\r
  if (!q) return;\r
\r
  const lang = getLang();\r
  const found = PLACES_DATA.find(p => {\r
    const name = (p[lang] || p.ru || '').toLowerCase();\r
    const desc = (p[\`\${lang}_d\`] || p['ru_d'] || '').toLowerCase();\r
    return name.includes(q) || desc.includes(q);\r
  });\r
\r
  if (found) {\r
    closeDropdown();\r
    window.location.href = found.url;\r
  } else {\r
    const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : null;\r
    const msg = T ? T.search_noresult : 'Ничего не найдено';\r
    showToast(msg, '');\r
  }\r
}\r
\r
function escapeRegex(s) {\r
  return s.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');\r
}\r
\r
/* ══════════════════════════════════════════\r
   3. МОБИЛЬНОЕ МЕНЮ\r
   ══════════════════════════════════════════ */\r
function initBurger() {\r
  const burger = document.getElementById('burger');\r
  const nav    = document.getElementById('mainNav');\r
  if (!burger || !nav) return;\r
  burger.addEventListener('click', () => nav.classList.toggle('open'));\r
  document.addEventListener('click', (e) => {\r
    if (!burger.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open');\r
  });\r
}\r
\r
/* ══════════════════════════════════════════\r
   4. СОХРАНЕНИЕ МЕСТ\r
   ══════════════════════════════════════════ */\r
function getSaved() {\r
  try { return JSON.parse(localStorage.getItem('kg_saved_places') || '[]'); }\r
  catch { return []; }\r
}\r
function setSaved(arr) { localStorage.setItem('kg_saved_places', JSON.stringify(arr)); }\r
\r
function savePlace(btn, name) {\r
  const lang = getLang();\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : TRANSLATIONS.ru;\r
  let saved = getSaved();\r
  if (saved.includes(name)) {\r
    saved = saved.filter(s => s !== name);\r
    btn.classList.remove('saved');\r
    showToast(\`«\${name}» \${T.toast_removed}\`, 'error');\r
  } else {\r
    saved.push(name);\r
    btn.classList.add('saved');\r
    showToast(\`«\${name}» \${T.toast_saved}\`, 'success');\r
  }\r
  setSaved(saved);\r
  initSavedSection();\r
}\r
\r
function restoreSaveButtons() {\r
  const saved = getSaved();\r
  document.querySelectorAll('.save-btn').forEach(btn => {\r
    const m = (btn.getAttribute('onclick') || '').match(/savePlace\\(this,\\s*'([^']+)'\\)/);\r
    if (m && saved.includes(m[1])) btn.classList.add('saved');\r
  });\r
}\r
\r
function initSavedSection() {\r
  const section = document.getElementById('savedSection');\r
  const list    = document.getElementById('savedList');\r
  if (!section || !list) return;\r
  const saved = getSaved();\r
  section.style.display = saved.length ? 'block' : 'none';\r
  list.innerHTML = saved.map(name => \`\r
    <div class="saved-tag">\r
      <i class="fas fa-map-marker-alt"></i> \${name}\r
      <button onclick="removeSaved('\${name}')" title="Удалить"><i class="fas fa-times"></i></button>\r
    </div>\`).join('');\r
}\r
\r
function removeSaved(name) {\r
  setSaved(getSaved().filter(s => s !== name));\r
  initSavedSection();\r
  document.querySelectorAll('.save-btn').forEach(btn => {\r
    if ((btn.getAttribute('onclick') || '').includes(\`'\${name}'\`)) btn.classList.remove('saved');\r
  });\r
  showToast(\`«\${name}» удалено\`, 'error');\r
}\r
\r
function clearSaved() {\r
  setSaved([]);\r
  initSavedSection();\r
  document.querySelectorAll('.save-btn').forEach(b => b.classList.remove('saved'));\r
  const lang = getLang();\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : TRANSLATIONS.ru;\r
  showToast(T.toast_cleared, '');\r
}\r
\r
/* ══════════════════════════════════════════\r
   5. ПЛАНИРОВЩИК МАРШРУТА\r
   ══════════════════════════════════════════ */\r
const routeData = {\r
  'Бишкек_Иссык-Куль_Автобус':       { time:'4-5 ч', price:'300-500 сом', desc:'Маршрутка с Западного автовокзала. Отправление с 06:00. Прибытие в Чолпон-Ата.' },\r
  'Бишкек_Иссык-Куль_Такси/Авто':    { time:'3-4 ч', price:'2000-3000 сом', desc:'Такси или аренда авто по трассе А-363. Комфортно, быстро.' },\r
  'Бишкек_Ала-Арча_Автобус':         { time:'1 ч',   price:'60 сом', desc:'Маршрутка №265 из Бишкека. Последнее отправление в 18:00.' },\r
  'Бишкек_Ала-Арча_Такси/Авто':      { time:'40 мин',price:'600-800 сом', desc:'Такси до КПП парка. Удобно для групп.' },\r
  'Бишкек_Сон-Куль_Автобус':         { time:'5-6 ч', price:'350-500 сом', desc:'До Кочкора маршруткой (3 ч, 180 сом) + местный транспорт.' },\r
  'Бишкек_Сон-Куль_Конный тур':      { time:'2-3 дня', price:'от 3000 сом/день', desc:'Конный маршрут из Кочкора. Ночлег в юртах. Организует CBT Кочкор.' },\r
  'Бишкек_Пик Ленина (БЛ)_Самолёт + авто':{ time:'1ч+6ч', price:'2000+3000 сом', desc:'Рейс Бишкек–Ош (1 ч), затем авто через Алайскую долину до базового лагеря.' },\r
  'Бишкек_Каньон Сказка_Автобус':    { time:'8 ч',   price:'600 сом', desc:'До Каракола (6-7 ч), затем такси до Тосора (1.5 ч).' },\r
  'Бишкек_Каньон Сказка_Такси/Авто': { time:'5 ч',   price:'4000-5000 сом', desc:'Аренда авто через Иссык-Куль по трассе А-363.' },\r
  'Бишкек_Арстанбап_Автобус':        { time:'11-13 ч', price:'700-900 сом', desc:'Автобус до Жалал-Абада (9-11 ч), маршрутка до Арстанбапа (2 ч).' },\r
  'Ош_Пик Ленина (БЛ)_Такси/Авто':  { time:'5-6 ч', price:'3000-4000 сом', desc:'Такси из Оша через Сары-Таш до базового лагеря.' },\r
  'Каракол_Иссык-Куль_Автобус':      { time:'30 мин',price:'50 сом', desc:'Маршрутки ходят постоянно вдоль побережья.' },\r
  'Каракол_Каньон Сказка_Такси/Авто':{ time:'1.5 ч', price:'1500 сом', desc:'Такси из Каракола до Тосора.' },\r
};\r
\r
function quickPlan() {\r
  const from = document.getElementById('from')?.value;\r
  const to   = document.getElementById('to')?.value;\r
  const tr   = document.getElementById('transport')?.value;\r
  const res  = document.getElementById('planResult');\r
  if (!res) return;\r
\r
  const key  = \`\${from}_\${to}_\${tr}\`;\r
  const data = routeData[key];\r
  const lang = getLang();\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : TRANSLATIONS.ru;\r
\r
  if (data) {\r
    res.innerHTML = \`\r
      <div style="border-left:4px solid var(--primary);padding-left:1rem">\r
        <strong style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;color:var(--primary)">\r
          <i class="fas fa-route"></i> \${from} → \${to}\r
        </strong>\r
        <div style="display:flex;gap:1.5rem;margin-bottom:.5rem;flex-wrap:wrap">\r
          <span><i class="fas fa-clock" style="color:var(--primary)"></i> <strong>\${T.time||'Время'}:</strong> \${data.time}</span>\r
          <span><i class="fas fa-wallet" style="color:var(--green)"></i> <strong>\${T.price||'Цена'}:</strong> \${data.price}</span>\r
        </div>\r
        <p style="font-size:.88rem;color:var(--gray)">\${data.desc}</p>\r
        <a href="routes.html" style="display:inline-flex;align-items:center;gap:.4rem;color:var(--primary);font-weight:600;font-size:.88rem;margin-top:.5rem">\r
          \${T.nav_routes||'Маршруты'} <i class="fas fa-arrow-right"></i>\r
        </a>\r
      </div>\`;\r
  } else {\r
    res.innerHTML = \`\r
      <div style="border-left:4px solid var(--accent);padding-left:1rem">\r
        <strong><i class="fas fa-info-circle" style="color:var(--accent)"></i> \${from} → \${to}</strong>\r
        <p style="font-size:.88rem;color:var(--gray);margin-top:.4rem">\r
          \${lang==='en' ? 'We recommend renting a car or joining an organized tour. Ask local operators for details.' :\r
            lang==='ky' ? 'Машина ижарасын же уюштурулган экскурсияны сунуштайбыз.' :\r
            'Рекомендуем аренду авто или организованный тур. Уточняйте у местных туроператоров.'}\r
        </p>\r
        <a href="routes.html" style="display:inline-flex;align-items:center;gap:.4rem;color:var(--primary);font-weight:600;font-size:.88rem;margin-top:.5rem">\r
          \${T.nav_routes||'Маршруты'} <i class="fas fa-arrow-right"></i>\r
        </a>\r
      </div>\`;\r
  }\r
  res.classList.add('show');\r
}\r
\r
/* ══════════════════════════════════════════\r
   6. ОТЗЫВЫ\r
   ══════════════════════════════════════════ */\r
const DEFAULT_REVIEWS = [\r
  { id:'d1', name:'Александр К.', country:'Россия',   place:'Иссык-Куль', rating:5, text:'Иссык-Куль — это что-то невероятное! Чистейшая вода, горы вокруг, добрые местные люди. Ехали из Бишкека на маршрутке — 4 часа пролетели незаметно. Обязательно вернёмся!', tips:'Берите солнцезащитный крем — солнце очень активное.', date:'2026-07', isDefault:true },\r
  { id:'d2', name:'Maria S.',      country:'Germany',  place:'Пик Ленина', rating:5, text:'Incredible experience! The base camp at 3600m already has breathtaking views. We flew to Osh, then drove through the Alai Valley. The guide was professional and very friendly.', tips:'Acclimatization is very important. Take your time.', date:'2026-08', isDefault:true },\r
  { id:'d3', name:'Айгүл М.',      country:'Казакстан',place:'Сон-Куль',   rating:5, text:'Соң-Көл мени биринчи карашта эле жеңди. Боз үйлөрдүн лагери, кымыз, көлдүн үстүндөгү күн батыш. Кочкордон атта келдик — бул өзү унутулгус саякат!', tips:'Жайда да түндөр абдан суук болот — жылуу кийим алыңыз.', date:'2026-07', isDefault:true },\r
  { id:'d4', name:'Томас Л.',      country:'Франция',  place:'Ала-Арча',   rating:4, text:'Отличный однодневный треккинг! Маршрутка из Бишкека очень удобная. Водопад Ак-Сай впечатлил. Минус — много туристов в выходные. Лучше идти в будни.', tips:'Стартуйте пораньше, чтобы обогнать толпу.', date:'2026-06', isDefault:true },\r
  { id:'d5', name:'Наташа В.',     country:'Беларусь', place:'Каньон Сказка',rating:5,text:'Фотограф мечты — Каньон Сказка! Красные скалы на фоне синего Иссык-Куля — просто волшебство. Взяли такси из Каракола, очень удобно.', tips:'Лучшее освещение утром и на закате для фото.', date:'2026-08', isDefault:true },\r
  { id:'d6', name:'James O.',      country:'USA',      place:'Ош',         rating:4, text:'Osh is a real cultural kaleidoscope! The bazaar is amazing, Suleiman-Too is a sacred place with stunning views. Flew from Bishkek in just 1 hour — very convenient.', tips:'Visit early morning when the bazaar is just opening.', date:'2026-05', isDefault:true },\r
];\r
\r
function getReviews() {\r
  try {\r
    const s = JSON.parse(localStorage.getItem('kg_reviews') || 'null');\r
    if (!s) { localStorage.setItem('kg_reviews', JSON.stringify(DEFAULT_REVIEWS)); return DEFAULT_REVIEWS; }\r
    return s;\r
  } catch { return DEFAULT_REVIEWS; }\r
}\r
function saveReviews(arr) { localStorage.setItem('kg_reviews', JSON.stringify(arr)); }\r
\r
function submitReview() {\r
  const lang = getLang();\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : TRANSLATIONS.ru;\r
\r
  const name  = document.getElementById('reviewName')?.value?.trim();\r
  const country= document.getElementById('reviewCountry')?.value?.trim() || '';\r
  const place = document.getElementById('reviewPlace')?.value;\r
  const text  = document.getElementById('reviewText')?.value?.trim();\r
  const tips  = document.getElementById('reviewTips')?.value?.trim() || '';\r
  const dateEl= document.getElementById('reviewDate')?.value;\r
  const rEl   = document.querySelector('input[name="rating"]:checked');\r
\r
  if (!name)           { showToast(T.toast_err_name,  'error'); return; }\r
  if (!place)          { showToast(T.toast_err_place, 'error'); return; }\r
  if (!rEl)            { showToast(T.toast_err_star,  'error'); return; }\r
  if (!text||text.length<20){ showToast(T.toast_err_text, 'error'); return; }\r
\r
  const review = { id:'r_'+Date.now(), name, country, place, rating:parseInt(rEl.value), text, tips, date:dateEl||new Date().toISOString().slice(0,7), isDefault:false };\r
  const reviews = getReviews();\r
  reviews.unshift(review);\r
  saveReviews(reviews);\r
\r
  // Сбросить форму\r
  ['reviewName','reviewCountry','reviewText','reviewTips'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });\r
  document.getElementById('reviewPlace').value = '';\r
  document.querySelectorAll('input[name="rating"]').forEach(r => r.checked=false);\r
\r
  showToast(T.toast_review, 'success');\r
  renderReviews();\r
  updateStats();\r
}\r
\r
function renderReviews() {\r
  const wall      = document.getElementById('reviewsWall');\r
  const noReviews = document.getElementById('noReviews');\r
  if (!wall) return;\r
\r
  let reviews = getReviews();\r
  const placeF  = document.getElementById('filterPlace')?.value;\r
  const ratingF = document.getElementById('filterRating')?.value;\r
  const sort    = document.getElementById('sortReviews')?.value || 'new';\r
\r
  if (placeF)  reviews = reviews.filter(r => r.place === placeF);\r
  if (ratingF) reviews = reviews.filter(r => r.rating >= parseInt(ratingF));\r
  if (sort==='rating') reviews.sort((a,b) => b.rating - a.rating);\r
  else reviews.sort((a,b) => b.id > a.id ? 1 : -1);\r
\r
  if (reviews.length === 0) {\r
    wall.innerHTML = '';\r
    if (noReviews) noReviews.style.display = 'block';\r
    return;\r
  }\r
  if (noReviews) noReviews.style.display = 'none';\r
\r
  wall.innerHTML = reviews.map(r => \`\r
    <div class="review-wall-card">\r
      <div class="r-stars">\${'★'.repeat(r.rating)}\${'☆'.repeat(5-r.rating)}</div>\r
      <div class="r-text">"\${escapeHtml(r.text)}"</div>\r
      \${r.tips?\`<div style="font-size:.82rem;color:var(--green);margin-bottom:.75rem"><i class="fas fa-lightbulb"></i> <em>\${escapeHtml(r.tips)}</em></div>\`:''}\r
      <div class="r-footer">\r
        <div>\r
          <div class="r-author">\${escapeHtml(r.name)} \${r.country?\`<span style="font-size:.78rem;color:var(--gray)">· \${escapeHtml(r.country)}</span>\`:''}\r
          </div>\r
          <div class="r-place"><i class="fas fa-map-marker-alt" style="color:var(--primary)"></i> \${escapeHtml(r.place)}</div>\r
        </div>\r
        <div style="text-align:right">\r
          <div class="r-date">\${formatDate(r.date)}</div>\r
          \${!r.isDefault?\`<button onclick="deleteReview('\${r.id}')" style="background:none;border:none;cursor:pointer;color:var(--gray);font-size:.78rem;margin-top:.3rem"><i class="fas fa-trash"></i></button>\`:''}\r
        </div>\r
      </div>\r
    </div>\`).join('');\r
\r
  updateStats();\r
}\r
\r
function deleteReview(id) {\r
  saveReviews(getReviews().filter(r => r.id !== id));\r
  renderReviews();\r
  const lang = getLang();\r
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[lang] : TRANSLATIONS.ru;\r
  showToast(T.toast_removed || 'Удалено', 'error');\r
}\r
\r
function updateStats() {\r
  const reviews = getReviews();\r
  const total   = reviews.length;\r
  const avg     = total ? (reviews.reduce((s,r) => s+r.rating, 0)/total).toFixed(1) : '—';\r
  const fiveStar= reviews.filter(r => r.rating===5).length;\r
  const placeCount = {};\r
  reviews.forEach(r => { placeCount[r.place] = (placeCount[r.place]||0)+1; });\r
  const topPlace = Object.keys(placeCount).reduce((a,b) => placeCount[a]>placeCount[b]?a:b, '—');\r
\r
  const el = (id, v) => { const e=document.getElementById(id); if(e) e.textContent=v; };\r
  el('totalCount',  total);\r
  el('avgRating',   avg==='—' ? '—' : \`\${avg} ★\`);\r
  el('topPlace',    topPlace);\r
  el('fiveStarCount', fiveStar);\r
}\r
\r
function initHomePage() {\r
  const preview = document.getElementById('reviewsPreview');\r
  if (!preview) return;\r
  const reviews = getReviews().slice(0, 3);\r
  preview.innerHTML = reviews.map(r => \`\r
    <div class="review-card">\r
      <div class="review-stars">\${'★'.repeat(r.rating)}\${'☆'.repeat(5-r.rating)}</div>\r
      <div class="review-text">"\${escapeHtml(r.text.slice(0,140))}\${r.text.length>140?'...':''}"</div>\r
      <div class="review-author">\r
        <div class="avatar">\${r.name.charAt(0).toUpperCase()}</div>\r
        <div class="meta">\r
          <strong>\${escapeHtml(r.name)}</strong>\r
          <span><i class="fas fa-map-marker-alt" style="color:var(--primary)"></i> \${escapeHtml(r.place)}</span>\r
        </div>\r
      </div>\r
    </div>\`).join('');\r
}\r
\r
/* ══════════════════════════════════════════\r
   7. ФИЛЬТРЫ МЕСТ И МАРШРУТОВ\r
   ══════════════════════════════════════════ */\r
function initPlacesFilter() {\r
  const btns = document.querySelectorAll('#filterGroup .filter-btn');\r
  btns.forEach(btn => {\r
    btn.addEventListener('click', () => {\r
      btns.forEach(b => b.classList.remove('active'));\r
      btn.classList.add('active');\r
      const f = btn.dataset.filter;\r
      document.querySelectorAll('#placesGrid .place-card').forEach(card => {\r
        const cats = card.dataset.cat || '';\r
        card.style.display = (f==='all' || cats.includes(f)) ? '' : 'none';\r
      });\r
    });\r
  });\r
}\r
\r
function initRoutesFilter() {\r
  const btns = document.querySelectorAll('#routeFilter .filter-btn');\r
  btns.forEach(btn => {\r
    btn.addEventListener('click', () => {\r
      btns.forEach(b => b.classList.remove('active'));\r
      btn.classList.add('active');\r
      const f = btn.dataset.filter;\r
      document.querySelectorAll('#routesGrid .route-card').forEach(card => {\r
        const cats = card.dataset.cat || '';\r
        card.style.display = (f==='all' || cats.includes(f)) ? '' : 'none';\r
      });\r
    });\r
  });\r
}\r
\r
/* ══════════════════════════════════════════\r
   8. УВЕДОМЛЕНИЯ (TOAST)\r
   ══════════════════════════════════════════ */\r
let toastTimer = null;\r
function showToast(msg, type='') {\r
  const toast    = document.getElementById('toast');\r
  const toastMsg = document.getElementById('toastMsg');\r
  if (!toast || !toastMsg) return;\r
  toastMsg.textContent = msg;\r
  toast.className = 'toast show' + (type ? ' '+type : '');\r
  clearTimeout(toastTimer);\r
  toastTimer = setTimeout(() => toast.classList.remove('show','success','error'), 3200);\r
}\r
\r
/* ══════════════════════════════════════════\r
   9. УТИЛИТЫ\r
   ══════════════════════════════════════════ */\r
function escapeHtml(s) {\r
  if (!s) return '';\r
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');\r
}\r
function formatDate(d) {\r
  if (!d) return '';\r
  try {\r
    const [y,m] = d.split('-');\r
    const months = {\r
      ru:['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],\r
      en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],\r
      ky:['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],\r
    };\r
    const lang = getLang();\r
    return \`\${(months[lang]||months.ru)[parseInt(m)-1]} \${y}\`;\r
  } catch { return d; }\r
}\r
\r
/* ══════════════════════════════════════════\r
   10. HEADER SCROLL\r
   ══════════════════════════════════════════ */\r
window.addEventListener('scroll', () => {\r
  const h = document.querySelector('.header');\r
  if (h) h.style.background = window.scrollY>50 ? 'rgba(255,255,255,.98)' : 'rgba(255,255,255,.95)';\r
});\r
\r
/* ══════════════════════════════════════════\r
   11. ИНИЦИАЛИЗАЦИЯ (DOMContentLoaded)\r
   ══════════════════════════════════════════ */\r
document.addEventListener('DOMContentLoaded', () => {\r
  // Применить сохранённый язык\r
  const lang = getLang();\r
  applyLang(lang);\r
  document.querySelectorAll('.lang-btn').forEach(btn => {\r
    btn.classList.toggle('active', btn.dataset.lang === lang);\r
  });\r
  document.documentElement.lang = lang === 'ky' ? 'ky' : lang === 'en' ? 'en' : 'ru';\r
\r
  // Бургер меню\r
  initBurger();\r
\r
  // Живой поиск\r
  initSearch();\r
\r
  // Восстановить кнопки сохранения\r
  restoreSaveButtons();\r
  initSavedSection();\r
\r
  // Страничная инициализация\r
  const path = window.location.pathname;\r
  if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/kiro') || path.endsWith('/kiro/')) {\r
    initHomePage();\r
  }\r
  if (path.includes('places.html'))  initPlacesFilter();\r
  if (path.includes('routes.html'))  initRoutesFilter();\r
  if (path.includes('reviews.html')) { renderReviews(); updateStats(); }\r
});\r
`,ee=`\r
function requireAuth() {\r
  if (localStorage.getItem('kg_admin_auth') !== 'true') {\r
    window.location.href = 'index.html';\r
    return false;\r
  }\r
  // Сессия 8 часов\r
  const loginTime = parseInt(localStorage.getItem('kg_admin_login_time') || '0');\r
  if (Date.now() - loginTime > 8 * 3600 * 1000) {\r
    adminLogout();\r
    return false;\r
  }\r
  return true;\r
}\r
\r
function adminLogout() {\r
  localStorage.removeItem('kg_admin_auth');\r
  localStorage.removeItem('kg_admin_login_time');\r
  window.location.href = 'index.html';\r
}\r
\r
function initSidebar() {\r
  const page = window.location.pathname.split('/').pop();\r
  document.querySelectorAll('.menu-item').forEach(item => {\r
    const href = item.getAttribute('data-href') || item.getAttribute('onclick');\r
    if (href && href.includes(page)) item.classList.add('active');\r
  });\r
\r
  // Мобильный бургер\r
  const burger = document.getElementById('adminBurger');\r
  const sidebar = document.querySelector('.sidebar');\r
  if (burger && sidebar) {\r
    burger.addEventListener('click', () => sidebar.classList.toggle('open'));\r
    document.addEventListener('click', e => {\r
      if (sidebar && !sidebar.contains(e.target) && !burger.contains(e.target)) {\r
        sidebar.classList.remove('open');\r
      }\r
    });\r
  }\r
}\r
\r
const DEFAULT_PLACES = [\r
  { id:'p1', name:'Иссык-Куль',       cat:'lake',    region:'Иссык-Кульская обл.', rating:5, status:'active', transport:'Автобус 4-5ч (300-500 сом), Машина 3-4ч', desc:'Второе по величине горное озеро в мире.', img:'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400', bestTime:'Июнь–Сент.' },\r
  { id:'p2', name:'Ала-Арча',         cat:'gorge',   region:'Чуйская обл.',         rating:5, status:'active', transport:'Маршрутка №265 (1ч, 60 сом), Такси 600-800 сом', desc:'Национальный природный парк, 40 км от Бишкека.', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400', bestTime:'Май–Окт.' },\r
  { id:'p3', name:'Сон-Куль',         cat:'lake',    region:'Нарынская обл.',       rating:5, status:'active', transport:'Кочкор+авто (3+2.5ч), Верхом 1 день',        desc:'Высокогорное озеро, 3016м.', img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', bestTime:'Июнь–Авг.' },\r
  { id:'p4', name:'Каньон Сказка',    cat:'canyon',  region:'Иссык-Куль',           rating:4, status:'active', transport:'Авто из Каракола 1.5ч, Такси ~1500 сом',      desc:'Красные скалы у берега Иссык-Куля.', img:'https://images.unsplash.com/photo-1548032885-b5e38734688a?w=400', bestTime:'Апр.–Окт.' },\r
  { id:'p5', name:'Арстанбап',        cat:'forest',  region:'Жалал-Абадская обл.',  rating:4, status:'active', transport:'Маршрутка из Жалал-Абада 2ч (150 сом)',       desc:'Один из крупнейших ореховых лесов мира.', img:'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=400', bestTime:'Авг.–Окт.' },\r
  { id:'p6', name:'Ош',               cat:'city',    region:'Ошская обл.',           rating:4, status:'active', transport:'Самолёт 1ч (1500+ сом), Автобус 10-12ч',      desc:'Древний город, 3000+ лет.', img:'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400', bestTime:'Весь год' },\r
  { id:'p7', name:'Каньон Конорчек',  cat:'canyon',  region:'Чуйская обл.',         rating:4, status:'active', transport:'Авто из Бишкека 1.5-2ч, Такси 2000-3000 сом', desc:'Красные скалы в 2 часах от Бишкека.', img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400', bestTime:'Апр.–Нояб.' },\r
  { id:'p8', name:'Сары-Чeлек',       cat:'lake',    region:'Жалал-Абадская обл.',  rating:5, status:'active', transport:'До Таш-Кумыра 6ч + авто 1.5ч',               desc:'Озеро-заповедник ЮНЕСКО.', img:'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400', bestTime:'Июнь–Сент.' },\r
  { id:'p9', name:'Таласская долина', cat:'culture', region:'Таласская обл.',        rating:4, status:'active', transport:'Автобус из Бишкека 4-5ч (250 сом)',            desc:'Родина эпоса «Манас».', img:'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=400', bestTime:'Май–Сент.' },\r
];\r
\r
const DEFAULT_ROUTES = [\r
  { id:'r1', name:'Ала-Арча — Водопад Ак-Сай', type:'trek',    difficulty:'easy',   duration:'6-7 ч',    distance:'14 км', height:'2200-3500 м', season:'Май–Окт.',  transport:'Маршрутка №265 (60 сом)', status:'active' },\r
  { id:'r2', name:'Кочкор — Сон-Куль',          type:'horse',   difficulty:'medium', duration:'2-3 дня',  distance:'80 км', height:'2800-3200 м', season:'Июнь–Авг.', transport:'Маршрутка до Кочкора 3ч (180 сом)', status:'active' },\r
  { id:'r3', name:'Каракол — Алтын-Арашан',     type:'trek',    difficulty:'medium', duration:'2 дня',    distance:'24 км', height:'1760-3600 м', season:'Май–Окт.',  transport:'Маршрутка до Каракола 7ч (500 сом)', status:'active' },\r
  { id:'r4', name:'Восхождение на Пик Ленина',  type:'climb',   difficulty:'hard',   duration:'3-4 нед.', distance:'—',     height:'3600-7134 м', season:'Июль–Авг.', transport:'Самолёт до Оша + авто до БЛ', status:'active' },\r
  { id:'r5', name:'Великий Шёлковый путь',       type:'culture', difficulty:'easy',   duration:'7-10 дн.', distance:'800 км',height:'различная',  season:'Апр.–Окт.', transport:'Аренда авто / с водителем', status:'active' },\r
  { id:'r6', name:'Арстанбап — Большой водопад', type:'trek',    difficulty:'easy',   duration:'4-5 ч',    distance:'8 км',  height:'1600-2000 м', season:'Май–Сент.', transport:'Автобус до Жалал-Абада (700 сом)', status:'active' },\r
];\r
\r
function getPlaces()  { try { return JSON.parse(localStorage.getItem('kg_admin_places') || 'null') || DEFAULT_PLACES; } catch { return DEFAULT_PLACES; } }\r
function savePlaces(d){ localStorage.setItem('kg_admin_places', JSON.stringify(d)); }\r
function getRoutes()  { try { return JSON.parse(localStorage.getItem('kg_admin_routes') || 'null') || DEFAULT_ROUTES; } catch { return DEFAULT_ROUTES; } }\r
function saveRoutes(d){ localStorage.setItem('kg_admin_routes', JSON.stringify(d)); }\r
function getReviews() { try { return JSON.parse(localStorage.getItem('kg_reviews') || '[]'); } catch { return []; } }\r
function saveReviews(d){ localStorage.setItem('kg_reviews', JSON.stringify(d)); }\r
function getSettings(){ try { return JSON.parse(localStorage.getItem('kg_admin_settings') || 'null') || { siteName:'VisitKyrgyzstan', siteEmail:'info@visit-kyrgyzstan.kg', sitePhone:'+996 312 000 000', maintenanceMode:false, reviewsAutoApprove:true, itemsPerPage:10 }; } catch { return {}; } }\r
function saveSettings(d){ localStorage.setItem('kg_admin_settings', JSON.stringify(d)); }\r
\r
function getStats() {\r
  const places  = getPlaces();\r
  const routes  = getRoutes();\r
  const reviews = getReviews();\r
  const saved   = JSON.parse(localStorage.getItem('kg_saved_places') || '[]');\r
  const avgRating = reviews.length ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1) : 0;\r
  return {\r
    totalPlaces:   places.length,\r
    activePlaces:  places.filter(p=>p.status==='active').length,\r
    totalRoutes:   routes.length,\r
    totalReviews:  reviews.length,\r
    avgRating,\r
    savedCount:    saved.length,\r
    fiveStar:      reviews.filter(r=>r.rating===5).length,\r
  };\r
}\r
\r
\r
function escHtml(s) {\r
  if (!s) return '';\r
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');\r
}\r
function genId(prefix) { return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2,7); }\r
function formatDateShort(ts) {\r
  if (!ts) return '—';\r
  const d = new Date(typeof ts === 'number' ? ts : Date.parse(ts));\r
  if (isNaN(d)) return ts;\r
  return d.toLocaleDateString('ru-RU', {day:'2-digit',month:'short',year:'numeric'});\r
}\r
\r
let _toastTimer = null;\r
function adminToast(msg, type='ok') {\r
  let toast = document.getElementById('adminToast');\r
  if (!toast) {\r
    toast = document.createElement('div');\r
    toast.id = 'adminToast';\r
    toast.className = 'admin-toast';\r
    document.body.appendChild(toast);\r
  }\r
  toast.innerHTML = \`<i class="fas fa-\${type==='ok'?'check-circle':type==='err'?'times-circle':'exclamation-triangle'}"></i> \${msg}\`;\r
  toast.className = \`admin-toast show \${type}\`;\r
  clearTimeout(_toastTimer);\r
  _toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);\r
}\r
\r
function adminConfirm(msg, onYes, title='Вы уверены?') {\r
  let overlay = document.getElementById('confirmOverlay');\r
  if (!overlay) {\r
    overlay = document.createElement('div');\r
    overlay.id = 'confirmOverlay';\r
    overlay.className = 'confirm-overlay';\r
    overlay.innerHTML = \`\r
      <div class="confirm-box">\r
        <div class="confirm-icon">⚠️</div>\r
        <h3 id="confirmTitle"></h3>\r
        <p  id="confirmMsg"></p>\r
        <div class="confirm-btns">\r
          <button class="btn btn-ghost" onclick="closeConfirm()">Отмена</button>\r
          <button class="btn btn-danger" id="confirmYesBtn">Да, удалить</button>\r
        </div>\r
      </div>\`;\r
    document.body.appendChild(overlay);\r
  }\r
  document.getElementById('confirmTitle').textContent = title;\r
  document.getElementById('confirmMsg').textContent   = msg;\r
  const yesBtn = document.getElementById('confirmYesBtn');\r
  yesBtn.onclick = () => { closeConfirm(); onYes(); };\r
  overlay.classList.add('open');\r
}\r
function closeConfirm() {\r
  const o = document.getElementById('confirmOverlay');\r
  if (o) o.classList.remove('open');\r
}\r
function openModal(id) { document.getElementById(id)?.classList.add('open'); }\r
function closeModal(id){ document.getElementById(id)?.classList.remove('open'); }\r
// Закрытие по клику вне\r
document.addEventListener('click', e => {\r
  document.querySelectorAll('.modal-overlay.open').forEach(overlay => {\r
    if (e.target === overlay) overlay.classList.remove('open');\r
  });\r
});\r
document.addEventListener('keydown', e => {\r
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open, .confirm-overlay.open').forEach(o => o.classList.remove('open'));\r
});\r
\r
const CAT_LABELS = { lake:'Озеро', mountain:'Гора', canyon:'Каньон', forest:'Лес', culture:'Культура', city:'Город', gorge:'Ущелье' };\r
const TYPE_LABELS = { trek:'Треккинг', horse:'Конный', climb:'Альпинизм', culture:'Культурный' };\r
const DIFF_LABELS = { easy:'Лёгкий', medium:'Средний', hard:'Сложный' };\r
const STATUS_LABELS = { active:'Активен', hidden:'Скрыт' };\r
`,te=`<!doctype html>
<html lang="ru"><body>
<header class="header"><div class="container"><div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div><nav class="nav" id="mainNav"><a href="index.html" class="active"><i class="fas fa-home"></i><span data-i18n="nav_home">Главная</span></a><a href="places.html"><i class="fas fa-map-marker-alt"></i><span data-i18n="nav_places">Места</span></a><a href="mountains.html"><i class="fas fa-mountain"></i><span data-i18n="nav_mountains">Горы</span></a><a href="routes.html"><i class="fas fa-route"></i><span data-i18n="nav_routes">Маршруты</span></a><a href="map.html"><i class="fas fa-map"></i><span data-i18n="nav_map">Карта</span></a><a href="reviews.html"><i class="fas fa-star"></i><span data-i18n="nav_reviews">Отзывы</span></a></nav><div class="lang-switcher"><button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button><button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button><button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button></div><a href="?admin=" class="btn btn-primary" style="padding:.55rem .8rem;font-size:.8rem;white-space:nowrap"><i class="fas fa-user-shield"></i> Админка</a><button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button></div></header>
<section class="hero"><div class="hero-overlay"></div><div class="hero-content"><h1><span data-i18n="hero_title">Добро пожаловать в</span> <span class="accent-word" data-i18n="hero_country">Кыргызстан</span></h1><p data-i18n="hero_subtitle">Страна тысячи гор, бирюзовых озёр и бескрайних просторов. Откройте для себя настоящее сердце Азии.</p><div class="hero-btns"><a href="places.html" class="btn btn-primary"><i class="fas fa-compass"></i><span data-i18n="hero_btn1">Исследовать места</span></a><a href="routes.html" class="btn btn-outline"><i class="fas fa-route"></i><span data-i18n="hero_btn2">Планировать маршрут</span></a></div><div class="hero-stats"><div class="stat"><strong>94</strong><span data-i18n="stat_peaks">горных пика</span></div><div class="stat"><strong>40+</strong><span data-i18n="stat_routes">маршрутов</span></div><div class="stat"><strong>500K+</strong><span data-i18n="stat_tourists">туристов в год</span></div></div></div></section>
<section class="categories section"><div class="container"><div class="section-header"><h2 data-i18n="cat_title">Откройте Кыргызстан</h2><p>Выберите направление для путешествия</p></div><div class="categories-grid"><a href="mountains.html" class="category-card" style="--bg:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600')"><i class="fas fa-mountain"></i><h3 data-i18n="nav_mountains">Горы</h3></a><a href="places.html" class="category-card" style="--bg:url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600')"><i class="fas fa-water"></i><h3 data-i18n="nav_places">Места</h3></a><a href="routes.html" class="category-card" style="--bg:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600')"><i class="fas fa-route"></i><h3 data-i18n="nav_routes">Маршруты</h3></a></div></div></section>
<section class="section" style="background:#f7fafc"><div class="container"><div class="section-header"><h2 data-i18n="sec_reviews">Отзывы путешественников</h2></div><div class="reviews-grid" id="reviewsPreview"></div><div style="text-align:center;margin-top:2rem"><a class="btn btn-primary" href="reviews.html">Все отзывы</a></div></div></section>
<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i><strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Ваш путеводитель по Кыргызстану.</p></div><div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul><li><a href="places.html">Места</a></li><li><a href="mountains.html">Горы</a></li><li><a href="routes.html">Маршруты</a></li></ul></div><div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p></div></div><div class="footer-bottom"><p>© 2026 VisitKyrgyzstan.</p></div></div></footer><div class="toast" id="toast"><i class="fas fa-check-circle"></i><span id="toastMsg"></span></div>
</body></html>
`,ne=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Достопримечательности Кыргызстана</title>\r
  <meta name="description" content="Все достопримечательности Кыргызстана: Иссык-Куль, Сон-Куль, Каньон Сказка, Ош, Арстанбап." />\r
  <link rel="stylesheet" href="style.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
\r
  <header class="header">\r
    <div class="container">\r
      <div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div>\r
      <nav class="nav" id="mainNav">\r
        <a href="index.html"><i class="fas fa-home"></i> <span data-i18n="nav_home">Главная</span></a>\r
        <a href="places.html" class="active"><i class="fas fa-map-marker-alt"></i> <span data-i18n="nav_places">Места</span></a>\r
        <a href="mountains.html"><i class="fas fa-mountain"></i> <span data-i18n="nav_mountains">Горы</span></a>\r
        <a href="routes.html"><i class="fas fa-route"></i> <span data-i18n="nav_routes">Маршруты</span></a>\r
        <a href="map.html"><i class="fas fa-map"></i> <span data-i18n="nav_map">Карта</span></a>\r
        <a href="reviews.html"><i class="fas fa-star"></i> <span data-i18n="nav_reviews">Отзывы</span></a>\r
      </nav>\r
      <div class="lang-switcher" id="langSwitcher">\r
        <button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button>\r
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>\r
        <button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button>\r
      </div>\r
      <button class="burger" id="burger"><span></span><span></span><span></span></button>\r
    </div>\r
  </header>\r
\r
  <section class="page-hero" style="background-image:url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400');background-size:cover;background-position:center;">\r
    <div class="overlay"></div>\r
    <div class="page-hero-content">\r
      <h1><i class="fas fa-map-marker-alt"></i> <span data-i18n="places_title">Достопримечательности</span></h1>\r
      <p data-i18n="places_sub">Откройте лучшие места Кыргызстана</p>\r
    </div>\r
  </section>\r
\r
  <!-- ПОИСК -->\r
  <section class="search-section">\r
    <div class="container">\r
      <div class="search-box">\r
        <i class="fas fa-search"></i>\r
        <div class="search-wrapper">\r
          <input type="text" id="globalSearch" data-i18n-placeholder="search_placeholder" placeholder="Поиск мест, маршрутов, гор..." autocomplete="off" />\r
          <div class="search-dropdown" id="searchDropdown"></div>\r
        </div>\r
        <button onclick="doSearch()" data-i18n="search_btn">Найти</button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section">\r
    <div class="container">\r
      <div class="breadcrumb">\r
        <a href="index.html" data-i18n="nav_home">Главная</a>\r
        <i class="fas fa-chevron-right"></i>\r
        <span data-i18n="nav_places">Места</span>\r
      </div>\r
\r
      <div class="places-filter-bar">\r
        <strong>Filter:</strong>\r
        <div class="filter-group" id="filterGroup">\r
          <button class="filter-btn active" data-filter="all" data-i18n="filter_all">Все</button>\r
          <button class="filter-btn" data-filter="lake" data-i18n="filter_lake">🌊 Озёра</button>\r
          <button class="filter-btn" data-filter="gorge" data-i18n="filter_gorge">🌲 Ущелья</button>\r
          <button class="filter-btn" data-filter="canyon" data-i18n="filter_canyon">🏜️ Каньоны</button>\r
          <button class="filter-btn" data-filter="culture" data-i18n="filter_culture">🏛️ Культура</button>\r
          <button class="filter-btn" data-filter="forest" data-i18n="filter_forest">🌳 Леса</button>\r
          <button class="filter-btn" data-filter="city" data-i18n="filter_city">🏙️ Города</button>\r
        </div>\r
      </div>\r
\r
      <div class="places-grid" id="placesGrid">\r
\r
        <div class="place-card" id="issykkul" data-cat="lake">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600')">\r
            <span class="badge">Озеро</span>\r
            <button class="save-btn" onclick="savePlace(this,'Иссык-Куль')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Иссык-Куль</h3>\r
            <p>Второе по величине горное озеро в мире (6236 км²). Бирюзовая вода, пляжи и горные пики вокруг.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Иссык-Кульская обл.</span><span class="stars">★★★★★</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-bus"></i> Автобус из Бишкека: 4-5 ч (300-500 сом)<br>\r
              <i class="fas fa-car"></i> Машина: 3-4 ч · <i class="fas fa-taxi"></i> Такси: 2000-3000 сом\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="alaarcha" data-cat="gorge">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600')">\r
            <span class="badge">Заповедник</span>\r
            <button class="save-btn" onclick="savePlace(this,'Ала-Арча')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Ала-Арча</h3>\r
            <p>Национальный природный парк в 40 км от Бишкека. Водопад Ак-Сай, ледники, тропы.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Чуйская обл.</span><span class="stars">★★★★★</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-bus"></i> Маршрутка №265: 1 ч (60 сом)<br>\r
              <i class="fas fa-taxi"></i> Такси: 600-800 сом · <i class="fas fa-car"></i> Машина: 40 мин\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="sonkul" data-cat="lake">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600')">\r
            <span class="badge">Озеро</span>\r
            <button class="save-btn" onclick="savePlace(this,'Сон-Куль')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Сон-Куль</h3>\r
            <p>Высокогорное озеро 3016 м. Юрточные лагеря, кумыс, незабываемые закаты.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Нарынская обл.</span><span class="stars">★★★★★</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-bus"></i> До Кочкора: 3 ч (180 сом) + авто<br>\r
              <i class="fas fa-horse"></i> Верхом из Кочкора: 1 день\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="skazka" data-cat="canyon">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1548032885-b5e38734688a?w=600')">\r
            <span class="badge">Каньон</span>\r
            <button class="save-btn" onclick="savePlace(this,'Каньон Сказка')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Каньон Сказка</h3>\r
            <p>«Кыргызский Гранд-Каньон». Красные скалы у берега Иссык-Куля.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> 100 км от Каракола</span><span class="stars">★★★★☆</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-car"></i> Машина из Каракола: 1.5 ч<br>\r
              <i class="fas fa-taxi"></i> Такси: ~1500 сом\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="arstanbap" data-cat="forest">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=600')">\r
            <span class="badge">Лес</span>\r
            <button class="save-btn" onclick="savePlace(this,'Арстанбап')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Арстанбап</h3>\r
            <p>Один из крупнейших ореховых лесов в мире (60 000 га). Водопады, гостевые дома.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Жалал-Абадская обл.</span><span class="stars">★★★★☆</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-bus"></i> Из Жалал-Абада: 2 ч (150 сом)<br>\r
              <i class="fas fa-taxi"></i> Такси: ~1000 сом\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="osh" data-cat="culture city">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600')">\r
            <span class="badge">Город</span>\r
            <button class="save-btn" onclick="savePlace(this,'Ош')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Ош — Южная столица</h3>\r
            <p>Один из древнейших городов Центральной Азии (3000+ лет). Сулайман-Тоо, базар.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Ошская область</span><span class="stars">★★★★☆</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-plane"></i> Самолёт из Бишкека: 1 ч (от 1500 сом)<br>\r
              <i class="fas fa-bus"></i> Ночной автобус: 10-12 ч\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="konorchek" data-cat="canyon">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600')">\r
            <span class="badge">Каньон</span>\r
            <button class="save-btn" onclick="savePlace(this,'Каньон Конорчек')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Каньон Конорчек</h3>\r
            <p>Живописный каньон с красными скалами в 2 часах от Бишкека.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Чуйская обл.</span><span class="stars">★★★★☆</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-car"></i> Машина из Бишкека: 1.5-2 ч<br>\r
              <i class="fas fa-taxi"></i> Такси: 2000-3000 сом (туда-обратно)\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="sarychelek" data-cat="lake forest">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600')">\r
            <span class="badge">Озеро</span>\r
            <button class="save-btn" onclick="savePlace(this,'Сары-Чeлек')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Сары-Чeлек</h3>\r
            <p>Кристально чистое озеро в ореховых лесах. Биосферный заповедник ЮНЕСКО.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Жалал-Абадская обл.</span><span class="stars">★★★★★</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-bus"></i> До Таш-Кумыра: 6 ч + авто 1.5 ч<br>\r
              <i class="fas fa-car"></i> Полный маршрут: 7-8 ч\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="place-card" id="talas" data-cat="culture">\r
          <div class="place-img" style="background-image:url('https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=600')">\r
            <span class="badge">Культура</span>\r
            <button class="save-btn" onclick="savePlace(this,'Таласская долина')"><i class="fas fa-bookmark"></i></button>\r
          </div>\r
          <div class="place-body">\r
            <h3>Таласская долина</h3>\r
            <p>Родина эпоса «Манас». Мавзолей богатыря и место Таласской битвы 751 года.</p>\r
            <div class="place-meta"><span><i class="fas fa-map-marker-alt"></i> Таласская обл.</span><span class="stars">★★★★☆</span></div>\r
            <div class="place-transport">\r
              <strong data-i18n="how_to_get">Как добраться:</strong><br>\r
              <i class="fas fa-bus"></i> Автобус из Бишкека: 4-5 ч (250 сом)<br>\r
              <i class="fas fa-taxi"></i> Такси: 2500 сом\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            <a href="reviews.html" class="btn-sm" style="background:var(--green);margin-left:.5rem"><i class="fas fa-star"></i> <span data-i18n="btn_reviews">Отзывы</span></a>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </section>\r
\r
  <footer class="footer">\r
    <div class="container">\r
      <div class="footer-grid">\r
        <div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i> <strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Ваш надёжный путеводитель.</p></div>\r
        <div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul>\r
          <li><a href="index.html" data-i18n="nav_home">Главная</a></li>\r
          <li><a href="places.html" data-i18n="nav_places">Места</a></li>\r
          <li><a href="mountains.html" data-i18n="nav_mountains">Горы</a></li>\r
          <li><a href="routes.html" data-i18n="nav_routes">Маршруты</a></li>\r
          <li><a href="map.html" data-i18n="nav_map">Карта</a></li>\r
          <li><a href="reviews.html" data-i18n="nav_reviews">Отзывы</a></li>\r
        </ul></div>\r
        <div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p><p><i class="fas fa-phone"></i> +996 312 000 000</p></div>\r
      </div>\r
      <div class="footer-bottom"><p>&copy; 2026 VisitKyrgyzstan. <span data-i18n="footer_copy">Все права защищены.</span></p></div>\r
    </div>\r
  </footer>\r
\r
  <div class="toast" id="toast"><i class="fas fa-check-circle"></i> <span id="toastMsg"></span></div>\r
  <script src="translations.js"><\/script>\r
  <script src="main.js"><\/script>\r
</body>\r
</html>\r
`,re=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Горные красоты Кыргызстана</title>\r
  <meta name="description" content="Горы Кыргызстана: Пик Ленина 7134м, Хан-Тенгри 6995м, Победа 7439м. Маршруты восхождений, транспорт." />\r
  <link rel="stylesheet" href="style.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
\r
  <header class="header">\r
    <div class="container">\r
      <div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div>\r
      <nav class="nav" id="mainNav">\r
        <a href="index.html"><i class="fas fa-home"></i> <span data-i18n="nav_home">Главная</span></a>\r
        <a href="places.html"><i class="fas fa-map-marker-alt"></i> <span data-i18n="nav_places">Места</span></a>\r
        <a href="mountains.html" class="active"><i class="fas fa-mountain"></i> <span data-i18n="nav_mountains">Горы</span></a>\r
        <a href="routes.html"><i class="fas fa-route"></i> <span data-i18n="nav_routes">Маршруты</span></a>\r
        <a href="map.html"><i class="fas fa-map"></i> <span data-i18n="nav_map">Карта</span></a>\r
        <a href="reviews.html"><i class="fas fa-star"></i> <span data-i18n="nav_reviews">Отзывы</span></a>\r
      </nav>\r
      <div class="lang-switcher" id="langSwitcher">\r
        <button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button>\r
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>\r
        <button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button>\r
      </div>\r
      <button class="burger" id="burger"><span></span><span></span><span></span></button>\r
    </div>\r
  </header>\r
\r
  <section class="page-hero" style="background-image:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400');background-size:cover;background-position:center;">\r
    <div class="overlay"></div>\r
    <div class="page-hero-content">\r
      <h1><i class="fas fa-mountain"></i> <span data-i18n="mountains_title">Горные красоты</span></h1>\r
      <p data-i18n="mountains_sub">Тянь-Шань и Памир — крыша Центральной Азии</p>\r
    </div>\r
  </section>\r
\r
  <!-- ПОИСК -->\r
  <section class="search-section">\r
    <div class="container">\r
      <div class="search-box">\r
        <i class="fas fa-search"></i>\r
        <div class="search-wrapper">\r
          <input type="text" id="globalSearch" data-i18n-placeholder="search_placeholder" placeholder="Поиск..." autocomplete="off" />\r
          <div class="search-dropdown" id="searchDropdown"></div>\r
        </div>\r
        <button onclick="doSearch()" data-i18n="search_btn">Найти</button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section">\r
    <div class="container">\r
      <div class="breadcrumb">\r
        <a href="index.html" data-i18n="nav_home">Главная</a>\r
        <i class="fas fa-chevron-right"></i>\r
        <span data-i18n="nav_mountains">Горы</span>\r
      </div>\r
\r
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:3rem">\r
        <div style="text-align:center;background:var(--light);border-radius:var(--radius);padding:1.5rem"><div style="font-size:2rem;font-weight:800;color:var(--primary)">94</div><div style="color:var(--gray);font-size:.9rem">Пика выше 4000 м</div></div>\r
        <div style="text-align:center;background:var(--light);border-radius:var(--radius);padding:1.5rem"><div style="font-size:2rem;font-weight:800;color:var(--primary)">7439</div><div style="color:var(--gray);font-size:.9rem">Высшая точка (Победа)</div></div>\r
        <div style="text-align:center;background:var(--light);border-radius:var(--radius);padding:1.5rem"><div style="font-size:2rem;font-weight:800;color:var(--primary)">40%</div><div style="color:var(--gray);font-size:.9rem">Территории — горы</div></div>\r
        <div style="text-align:center;background:var(--light);border-radius:var(--radius);padding:1.5rem"><div style="font-size:2rem;font-weight:800;color:var(--primary)">6</div><div style="color:var(--gray);font-size:.9rem">Семитысячников</div></div>\r
      </div>\r
\r
      <div class="mountain-grid">\r
\r
        <div class="mountain-card" id="lenin">\r
          <div class="mountain-img" style="background-image:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800')">\r
            <span class="mountain-badge">🏔️ 7134 м • Тянь-Шань</span>\r
          </div>\r
          <div class="mountain-body">\r
            <h2>Пик Ленина</h2>\r
            <p>Третий по высоте пик в Кыргызстане — один из наиболее доступных семитысячников мира. Базовый лагерь на 3600 м в Алайской долине.</p>\r
            <div class="mountain-info">\r
              <div class="info-badge"><i class="fas fa-ruler-vertical"></i> 7134 м</div>\r
              <div class="info-badge"><i class="fas fa-calendar"></i> Июль–Август</div>\r
              <div class="info-badge"><i class="fas fa-star"></i> <span data-i18n="difficulty">Сложность</span>: Высокая</div>\r
              <div class="info-badge"><i class="fas fa-clock"></i> 3-4 нед.</div>\r
            </div>\r
            <div class="mountain-transport">\r
              <h4><i class="fas fa-route" style="color:var(--primary);margin-right:.4rem"></i> <span data-i18n="how_to_reach">Как добраться</span></h4>\r
              <ul>\r
                <li><i class="fas fa-plane"></i> Самолёт Бишкек→Ош: 1 ч + авто до Сары-Таша: 4 ч</li>\r
                <li><i class="fas fa-bus"></i> Ночной автобус Бишкек→Ош: 10-12 ч</li>\r
                <li><i class="fas fa-car"></i> От Оша до базового лагеря: 4-5 ч</li>\r
              </ul>\r
            </div>\r
            <div style="display:flex;gap:.75rem;flex-wrap:wrap">\r
              <a href="routes.html" class="btn-sm"><i class="fas fa-hiking"></i> Маршрут</a>\r
              <a href="map.html" class="btn-sm" style="background:var(--green)"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="mountain-card" id="khantengri">\r
          <div class="mountain-img" style="background-image:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800')">\r
            <span class="mountain-badge">🏔️ 6995 м • Тянь-Шань</span>\r
          </div>\r
          <div class="mountain-body">\r
            <h2>Хан-Тенгри</h2>\r
            <p>«Повелитель неба» — одна из красивейших гор мира. Мраморная пирамида на закате окрашивается в красный цвет.</p>\r
            <div class="mountain-info">\r
              <div class="info-badge"><i class="fas fa-ruler-vertical"></i> 6995 м</div>\r
              <div class="info-badge"><i class="fas fa-calendar"></i> Июль–Август</div>\r
              <div class="info-badge"><i class="fas fa-star"></i> <span data-i18n="difficulty">Сложность</span>: Очень высокая</div>\r
              <div class="info-badge"><i class="fas fa-clock"></i> 4-5 нед.</div>\r
            </div>\r
            <div class="mountain-transport">\r
              <h4><i class="fas fa-route" style="color:var(--primary);margin-right:.4rem"></i> <span data-i18n="how_to_reach">Как добраться</span></h4>\r
              <ul>\r
                <li><i class="fas fa-car"></i> Бишкек→Каракол: 3.5 ч машина</li>\r
                <li><i class="fas fa-helicopter"></i> Вертолёт до БЛ Майды-Адыр: ~45 мин</li>\r
                <li><i class="fas fa-hiking"></i> Пешком до Северного БЛ: 4-5 дней</li>\r
              </ul>\r
            </div>\r
            <div style="display:flex;gap:.75rem;flex-wrap:wrap">\r
              <a href="routes.html" class="btn-sm"><i class="fas fa-hiking"></i> Маршрут</a>\r
              <a href="map.html" class="btn-sm" style="background:var(--green)"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="mountain-card" id="pobeda">\r
          <div class="mountain-img" style="background-image:url('https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800')">\r
            <span class="mountain-badge">🏔️ 7439 м • Тянь-Шань</span>\r
          </div>\r
          <div class="mountain-body">\r
            <h2>Пик Победы (Томур)</h2>\r
            <p>Высочайшая точка Кыргызстана. Один из наиболее опасных семитысячников — суровый климат и лавинная опасность.</p>\r
            <div class="mountain-info">\r
              <div class="info-badge"><i class="fas fa-ruler-vertical"></i> 7439 м</div>\r
              <div class="info-badge"><i class="fas fa-calendar"></i> Июль–Август</div>\r
              <div class="info-badge"><i class="fas fa-star"></i> Экстремальная</div>\r
              <div class="info-badge"><i class="fas fa-clock"></i> 5-6 нед.</div>\r
            </div>\r
            <div class="mountain-transport">\r
              <h4><i class="fas fa-route" style="color:var(--primary);margin-right:.4rem"></i> <span data-i18n="how_to_reach">Как добраться</span></h4>\r
              <ul>\r
                <li><i class="fas fa-car"></i> Бишкек→Каракол: машина 3.5 ч</li>\r
                <li><i class="fas fa-helicopter"></i> Вертолёт от Каракола: по запросу</li>\r
                <li><i class="fas fa-exclamation-triangle" style="color:#f59e0b"></i> Требуется пропуск погранзоны</li>\r
              </ul>\r
            </div>\r
            <div style="display:flex;gap:.75rem;flex-wrap:wrap">\r
              <a href="routes.html" class="btn-sm"><i class="fas fa-hiking"></i> Маршрут</a>\r
              <a href="map.html" class="btn-sm" style="background:var(--green)"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="mountain-card" id="akshyirak">\r
          <div class="mountain-img" style="background-image:url('https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800')">\r
            <span class="mountain-badge">🏔️ 5168 м • Иссык-Кульская обл.</span>\r
          </div>\r
          <div class="mountain-body">\r
            <h2>Ак-Шыйрак</h2>\r
            <p>Горный массив с многочисленными ледниками. Популярен для ски-туринга и уединённых маршрутов.</p>\r
            <div class="mountain-info">\r
              <div class="info-badge"><i class="fas fa-ruler-vertical"></i> до 5168 м</div>\r
              <div class="info-badge"><i class="fas fa-calendar"></i> Июнь–Сент.</div>\r
              <div class="info-badge"><i class="fas fa-star"></i> Средняя</div>\r
            </div>\r
            <div class="mountain-transport">\r
              <h4><i class="fas fa-route" style="color:var(--primary);margin-right:.4rem"></i> <span data-i18n="how_to_reach">Как добраться</span></h4>\r
              <ul>\r
                <li><i class="fas fa-bus"></i> Бишкек→Балыкчи: маршрутка 3 ч</li>\r
                <li><i class="fas fa-car"></i> Балыкчи→Кочкор→подъезд: 3 ч</li>\r
                <li><i class="fas fa-hiking"></i> Пешком до ледников: 1-2 дня</li>\r
              </ul>\r
            </div>\r
            <div style="display:flex;gap:.75rem;flex-wrap:wrap">\r
              <a href="routes.html" class="btn-sm"><i class="fas fa-hiking"></i> Маршрут</a>\r
              <a href="map.html" class="btn-sm" style="background:var(--green)"><i class="fas fa-map"></i> <span data-i18n="btn_map">На карте</span></a>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- СОВЕТЫ -->\r
      <div style="background:linear-gradient(135deg,#1e3a5f,#2563eb);border-radius:var(--radius);padding:2.5rem;margin-top:3rem;color:white">\r
        <h2 style="margin-bottom:1.5rem;font-size:1.6rem"><i class="fas fa-exclamation-circle" style="color:var(--accent)"></i> <span data-i18n="tips_title">Важные советы</span></h2>\r
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">\r
          <div><h4 style="color:var(--accent);margin-bottom:.5rem"><i class="fas fa-id-card"></i> <span data-i18n="tip1_t">Разрешения</span></h4><p style="font-size:.88rem;opacity:.85" data-i18n="tip1_d">Для погранзон нужен специальный пропуск ГКНБ</p></div>\r
          <div><h4 style="color:var(--accent);margin-bottom:.5rem"><i class="fas fa-medkit"></i> <span data-i18n="tip2_t">Страховка</span></h4><p style="font-size:.88rem;opacity:.85" data-i18n="tip2_d">Обязательна с покрытием горного спасения от $50 000</p></div>\r
          <div><h4 style="color:var(--accent);margin-bottom:.5rem"><i class="fas fa-users"></i> <span data-i18n="tip3_t">Гиды</span></h4><p style="font-size:.88rem;opacity:.85" data-i18n="tip3_d">Рекомендуем сертифицированных горных гидов КР</p></div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <footer class="footer">\r
    <div class="container">\r
      <div class="footer-grid">\r
        <div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i> <strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Ваш надёжный путеводитель.</p></div>\r
        <div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul>\r
          <li><a href="index.html" data-i18n="nav_home">Главная</a></li><li><a href="places.html" data-i18n="nav_places">Места</a></li>\r
          <li><a href="mountains.html" data-i18n="nav_mountains">Горы</a></li><li><a href="routes.html" data-i18n="nav_routes">Маршруты</a></li>\r
          <li><a href="map.html" data-i18n="nav_map">Карта</a></li><li><a href="reviews.html" data-i18n="nav_reviews">Отзывы</a></li>\r
        </ul></div>\r
        <div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p><p><i class="fas fa-phone"></i> +996 312 000 000</p></div>\r
      </div>\r
      <div class="footer-bottom"><p>&copy; 2026 VisitKyrgyzstan. <span data-i18n="footer_copy">Все права защищены.</span></p></div>\r
    </div>\r
  </footer>\r
\r
  <div class="toast" id="toast"><i class="fas fa-check-circle"></i> <span id="toastMsg"></span></div>\r
  <script src="translations.js"><\/script>\r
  <script src="main.js"><\/script>\r
</body>\r
</html>\r
`,x=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Маршруты и транспорт — Кыргызстан</title>\r
  <meta name="description" content="Туристические маршруты Кыргызстана. Транспорт из Бишкека в любую точку страны." />\r
  <link rel="stylesheet" href="style.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
\r
  <header class="header">\r
    <div class="container">\r
      <div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div>\r
      <nav class="nav" id="mainNav">\r
        <a href="index.html"><i class="fas fa-home"></i> <span data-i18n="nav_home">Главная</span></a>\r
        <a href="places.html"><i class="fas fa-map-marker-alt"></i> <span data-i18n="nav_places">Места</span></a>\r
        <a href="mountains.html"><i class="fas fa-mountain"></i> <span data-i18n="nav_mountains">Горы</span></a>\r
        <a href="routes.html" class="active"><i class="fas fa-route"></i> <span data-i18n="nav_routes">Маршруты</span></a>\r
        <a href="map.html"><i class="fas fa-map"></i> <span data-i18n="nav_map">Карта</span></a>\r
        <a href="reviews.html"><i class="fas fa-star"></i> <span data-i18n="nav_reviews">Отзывы</span></a>\r
      </nav>\r
      <div class="lang-switcher" id="langSwitcher">\r
        <button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button>\r
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>\r
        <button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button>\r
      </div>\r
      <button class="burger" id="burger"><span></span><span></span><span></span></button>\r
    </div>\r
  </header>\r
\r
  <section class="page-hero" style="background-image:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400');background-size:cover;background-position:center;">\r
    <div class="overlay"></div>\r
    <div class="page-hero-content">\r
      <h1><i class="fas fa-route"></i> <span data-i18n="routes_title">Маршруты и транспорт</span></h1>\r
      <p data-i18n="routes_sub">Все пути к красотам — от Бишкека до любой вершины</p>\r
    </div>\r
  </section>\r
\r
  <!-- ПОИСК -->\r
  <section class="search-section">\r
    <div class="container">\r
      <div class="search-box">\r
        <i class="fas fa-search"></i>\r
        <div class="search-wrapper">\r
          <input type="text" id="globalSearch" data-i18n-placeholder="search_placeholder" placeholder="Поиск..." autocomplete="off" />\r
          <div class="search-dropdown" id="searchDropdown"></div>\r
        </div>\r
        <button onclick="doSearch()" data-i18n="search_btn">Найти</button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section">\r
    <div class="container">\r
      <div class="breadcrumb">\r
        <a href="index.html" data-i18n="nav_home">Главная</a>\r
        <i class="fas fa-chevron-right"></i>\r
        <span data-i18n="nav_routes">Маршруты</span>\r
      </div>\r
\r
      <!-- ТАБЛИЦА ТРАНСПОРТА -->\r
      <div style="background:var(--light);border-radius:var(--radius);padding:2rem;margin-bottom:3rem">\r
        <h2 style="margin-bottom:1.5rem;font-size:1.4rem"><i class="fas fa-bus" style="color:var(--primary)"></i> <span data-i18n="transport_from_bishkek">Транспорт из Бишкека</span></h2>\r
        <div style="overflow-x:auto">\r
          <table style="width:100%;border-collapse:collapse;font-size:.9rem">\r
            <thead>\r
              <tr style="background:var(--primary);color:white">\r
                <th style="padding:.75rem 1rem;text-align:left" data-i18n="dest">Направление</th>\r
                <th style="padding:.75rem 1rem;text-align:left" data-i18n="transp">Транспорт</th>\r
                <th style="padding:.75rem 1rem;text-align:left" data-i18n="time">Время</th>\r
                <th style="padding:.75rem 1rem;text-align:left" data-i18n="price">Цена (сом)</th>\r
                <th style="padding:.75rem 1rem;text-align:left" data-i18n="from_where">Откуда</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr style="border-bottom:1px solid #e2e8f0"><td style="padding:.7rem 1rem;font-weight:600">Иссык-Куль (Чолпон-Ата)</td><td style="padding:.7rem 1rem"><i class="fas fa-bus" style="color:var(--primary)"></i> Маршрутка</td><td style="padding:.7rem 1rem">4-5 ч</td><td style="padding:.7rem 1rem">300-500</td><td style="padding:.7rem 1rem">Зап. автовокзал</td></tr>\r
              <tr style="border-bottom:1px solid #e2e8f0;background:var(--light)"><td style="padding:.7rem 1rem;font-weight:600">Каракол</td><td style="padding:.7rem 1rem"><i class="fas fa-bus" style="color:var(--primary)"></i> Маршрутка</td><td style="padding:.7rem 1rem">6-7 ч</td><td style="padding:.7rem 1rem">400-600</td><td style="padding:.7rem 1rem">Зап. автовокзал</td></tr>\r
              <tr style="border-bottom:1px solid #e2e8f0"><td style="padding:.7rem 1rem;font-weight:600">Нарын</td><td style="padding:.7rem 1rem"><i class="fas fa-bus" style="color:var(--primary)"></i> Автобус</td><td style="padding:.7rem 1rem">7-8 ч</td><td style="padding:.7rem 1rem">350-500</td><td style="padding:.7rem 1rem">Ост. автовокзал</td></tr>\r
              <tr style="border-bottom:1px solid #e2e8f0;background:var(--light)"><td style="padding:.7rem 1rem;font-weight:600">Ош</td><td style="padding:.7rem 1rem"><i class="fas fa-plane" style="color:var(--primary)"></i> Самолёт</td><td style="padding:.7rem 1rem">1 ч</td><td style="padding:.7rem 1rem">1500-4000</td><td style="padding:.7rem 1rem">Аэропорт Манас</td></tr>\r
              <tr style="border-bottom:1px solid #e2e8f0"><td style="padding:.7rem 1rem;font-weight:600">Ош</td><td style="padding:.7rem 1rem"><i class="fas fa-bus" style="color:var(--primary)"></i> Ночной автобус</td><td style="padding:.7rem 1rem">10-12 ч</td><td style="padding:.7rem 1rem">500-900</td><td style="padding:.7rem 1rem">Ост. автовокзал</td></tr>\r
              <tr style="border-bottom:1px solid #e2e8f0;background:var(--light)"><td style="padding:.7rem 1rem;font-weight:600">Жалал-Абад</td><td style="padding:.7rem 1rem"><i class="fas fa-bus" style="color:var(--primary)"></i> Автобус</td><td style="padding:.7rem 1rem">9-11 ч</td><td style="padding:.7rem 1rem">500-800</td><td style="padding:.7rem 1rem">Ост. автовокзал</td></tr>\r
              <tr><td style="padding:.7rem 1rem;font-weight:600">Талас</td><td style="padding:.7rem 1rem"><i class="fas fa-bus" style="color:var(--primary)"></i> Маршрутка</td><td style="padding:.7rem 1rem">4-5 ч</td><td style="padding:.7rem 1rem">250-400</td><td style="padding:.7rem 1rem">Зап. автовокзал</td></tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
\r
      <!-- ФИЛЬТРЫ МАРШРУТОВ -->\r
      <h2 style="margin-bottom:1rem;font-size:1.4rem" data-i18n="routes_title">Туристические маршруты</h2>\r
      <div class="routes-filter" id="routeFilter">\r
        <button class="filter-btn active" data-filter="all" data-i18n="filter_all">Все</button>\r
        <button class="filter-btn" data-filter="trek" data-i18n="filter_trek">🥾 Треккинг</button>\r
        <button class="filter-btn" data-filter="horse" id="horse" data-i18n="filter_horse_r">🐴 Конные</button>\r
        <button class="filter-btn" data-filter="climb" data-i18n="filter_climb">🧗 Альпинизм</button>\r
        <button class="filter-btn" data-filter="culture" data-i18n="filter_culture">🏛️ Культура</button>\r
        <button class="filter-btn" data-filter="easy" data-i18n="filter_easy">🟢 Лёгкие</button>\r
      </div>\r
\r
      <div class="routes-grid" id="routesGrid">\r
\r
        <div class="route-card" data-cat="trek easy">\r
          <div class="route-img" style="background-image:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600')">\r
            <span class="route-difficulty easy">Лёгкий</span>\r
          </div>\r
          <div class="route-body">\r
            <h3>Ала-Арча — Водопад Ак-Сай</h3>\r
            <div class="route-meta">\r
              <span><i class="fas fa-ruler-horizontal"></i> 14 км</span>\r
              <span><i class="fas fa-clock"></i> 6-7 ч</span>\r
              <span><i class="fas fa-ruler-vertical"></i> 2200-3500 м</span>\r
              <span><i class="fas fa-calendar"></i> Май–Окт.</span>\r
            </div>\r
            <p style="font-size:.9rem;color:var(--gray);margin-bottom:.85rem">Классический однодневный маршрут от КПП парка до водопада.</p>\r
            <div class="route-transport-box">\r
              <h4><i class="fas fa-bus" style="color:var(--primary)"></i> <span data-i18n="how_to_get">Как добраться</span></h4>\r
              <p>Маршрутка №265 из Бишкека → КПП Ала-Арча (1 ч, 60 сом).</p>\r
              <div class="transport-icons">\r
                <div class="t-icon"><i class="fas fa-bus"></i> 60 сом / 1 ч</div>\r
                <div class="t-icon"><i class="fas fa-taxi"></i> 700 сом</div>\r
                <div class="t-icon"><i class="fas fa-car"></i> 40 мин</div>\r
              </div>\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">Карта</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="route-card" data-cat="trek horse">\r
          <div class="route-img" style="background-image:url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600')">\r
            <span class="route-difficulty medium">Средний</span>\r
          </div>\r
          <div class="route-body">\r
            <h3>Кочкор — Сон-Куль (конный тур)</h3>\r
            <div class="route-meta">\r
              <span><i class="fas fa-horse"></i> 2-3 дня</span>\r
              <span><i class="fas fa-ruler-vertical"></i> 2800-3200 м</span>\r
              <span><i class="fas fa-calendar"></i> Июнь–Авг.</span>\r
              <span><i class="fas fa-home"></i> Ночь в юрте</span>\r
            </div>\r
            <p style="font-size:.9rem;color:var(--gray);margin-bottom:.85rem">Незабываемый маршрут верхом через горные перевалы к озеру Сон-Куль.</p>\r
            <div class="route-transport-box">\r
              <h4><i class="fas fa-bus" style="color:var(--primary)"></i> <span data-i18n="how_to_get">Как добраться до Кочкора</span></h4>\r
              <p>Бишкек→Кочкор: маршрутка 3 ч (180 сом).</p>\r
              <div class="transport-icons">\r
                <div class="t-icon"><i class="fas fa-bus"></i> 180 сом / 3 ч</div>\r
                <div class="t-icon"><i class="fas fa-horse"></i> Лошадь: 1500 сом/день</div>\r
              </div>\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">Карта</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="route-card" data-cat="trek">\r
          <div class="route-img" style="background-image:url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600')">\r
            <span class="route-difficulty medium">Средний</span>\r
          </div>\r
          <div class="route-body">\r
            <h3>Каракол — Алтын-Арашан</h3>\r
            <div class="route-meta">\r
              <span><i class="fas fa-ruler-horizontal"></i> 24 км</span>\r
              <span><i class="fas fa-clock"></i> 2 дня</span>\r
              <span><i class="fas fa-ruler-vertical"></i> 1760-3600 м</span>\r
              <span><i class="fas fa-calendar"></i> Май–Окт.</span>\r
            </div>\r
            <p style="font-size:.9rem;color:var(--gray);margin-bottom:.85rem">Ущелье, горячие источники Алтын-Арашан, водопады и горные ели.</p>\r
            <div class="route-transport-box">\r
              <h4><i class="fas fa-bus" style="color:var(--primary)"></i> <span data-i18n="how_to_get">Как добраться до Каракола</span></h4>\r
              <p>Бишкек→Каракол: маршрутка 6-7 ч (500 сом).</p>\r
              <div class="transport-icons">\r
                <div class="t-icon"><i class="fas fa-bus"></i> 500 сом / 7 ч</div>\r
                <div class="t-icon"><i class="fas fa-taxi"></i> Такси: 400 сом</div>\r
              </div>\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">Карта</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="route-card" data-cat="climb" id="lenintrek">\r
          <div class="route-img" style="background-image:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600')">\r
            <span class="route-difficulty hard">Сложный</span>\r
          </div>\r
          <div class="route-body">\r
            <h3>Восхождение на Пик Ленина (7134 м)</h3>\r
            <div class="route-meta">\r
              <span><i class="fas fa-clock"></i> 3-4 недели</span>\r
              <span><i class="fas fa-ruler-vertical"></i> 3600-7134 м</span>\r
              <span><i class="fas fa-calendar"></i> Июль–Авг.</span>\r
            </div>\r
            <p style="font-size:.9rem;color:var(--gray);margin-bottom:.85rem">Классический маршрут через северный склон. 4 высотных лагеря.</p>\r
            <div class="route-transport-box">\r
              <h4><i class="fas fa-plane" style="color:var(--primary)"></i> <span data-i18n="how_to_get">Как добраться</span></h4>\r
              <p>Бишкек→Ош: самолёт 1 ч + авто до базового лагеря 5-6 ч.</p>\r
              <div class="transport-icons">\r
                <div class="t-icon"><i class="fas fa-plane"></i> 2000 сом / 1 ч</div>\r
                <div class="t-icon"><i class="fas fa-car"></i> Авто 5-6 ч</div>\r
              </div>\r
            </div>\r
            <a href="mountains.html#lenin" class="btn-sm"><i class="fas fa-mountain"></i> Детали вершины</a>\r
          </div>\r
        </div>\r
\r
        <div class="route-card" data-cat="culture">\r
          <div class="route-img" style="background-image:url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600')">\r
            <span class="route-difficulty easy">Лёгкий</span>\r
          </div>\r
          <div class="route-body">\r
            <h3>По следам Великого Шёлкового пути</h3>\r
            <div class="route-meta">\r
              <span><i class="fas fa-road"></i> Бишкек — Ош</span>\r
              <span><i class="fas fa-clock"></i> 7-10 дней</span>\r
              <span><i class="fas fa-calendar"></i> Апр.–Окт.</span>\r
            </div>\r
            <p style="font-size:.9rem;color:var(--gray);margin-bottom:.85rem">Бишкек → Токмок → Кочкор → Нарын → Таш-Рабат → Ош.</p>\r
            <div class="route-transport-box">\r
              <h4><i class="fas fa-car" style="color:var(--primary)"></i> <span data-i18n="how_to_get">Транспорт</span></h4>\r
              <p>Аренда машины или тур с водителем-гидом.</p>\r
              <div class="transport-icons">\r
                <div class="t-icon"><i class="fas fa-car"></i> Аренда авто</div>\r
                <div class="t-icon"><i class="fas fa-bus"></i> Местные маршрутки</div>\r
              </div>\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">Карта</span></a>\r
          </div>\r
        </div>\r
\r
        <div class="route-card" data-cat="trek easy">\r
          <div class="route-img" style="background-image:url('https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=600')">\r
            <span class="route-difficulty easy">Лёгкий</span>\r
          </div>\r
          <div class="route-body">\r
            <h3>Арстанбап — Большой водопад</h3>\r
            <div class="route-meta">\r
              <span><i class="fas fa-ruler-horizontal"></i> 8 км</span>\r
              <span><i class="fas fa-clock"></i> 4-5 ч</span>\r
              <span><i class="fas fa-ruler-vertical"></i> 1600-2000 м</span>\r
              <span><i class="fas fa-calendar"></i> Май–Сент.</span>\r
            </div>\r
            <p style="font-size:.9rem;color:var(--gray);margin-bottom:.85rem">Прогулка через ореховый лес к водопаду (80 м). Подходит для семей.</p>\r
            <div class="route-transport-box">\r
              <h4><i class="fas fa-bus" style="color:var(--primary)"></i> <span data-i18n="how_to_get">Как добраться</span></h4>\r
              <p>Бишкек→Жалал-Абад (9-11 ч) → Арстанбап (2 ч маршрутка).</p>\r
              <div class="transport-icons">\r
                <div class="t-icon"><i class="fas fa-bus"></i> 700 сом / 11 ч</div>\r
                <div class="t-icon"><i class="fas fa-taxi"></i> Местное такси</div>\r
              </div>\r
            </div>\r
            <a href="map.html" class="btn-sm"><i class="fas fa-map"></i> <span data-i18n="btn_map">Карта</span></a>\r
          </div>\r
        </div>\r
\r
      </div>\r
\r
      <!-- ПЛАНИРОВЩИК -->\r
      <div style="background:var(--light);border-radius:var(--radius);padding:2.5rem;margin-top:3rem">\r
        <h2 style="margin-bottom:1.5rem;font-size:1.4rem"><i class="fas fa-map-marked-alt" style="color:var(--primary)"></i> <span data-i18n="sec_plan">Планировщик маршрута</span></h2>\r
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:1rem;align-items:end">\r
          <div class="form-row" style="margin:0"><label data-i18n="plan_from">Откуда</label>\r
            <select id="from"><option>Бишкек</option><option>Ош</option><option>Каракол</option><option>Нарын</option></select>\r
          </div>\r
          <div class="form-row" style="margin:0"><label data-i18n="plan_to">Куда</label>\r
            <select id="to"><option>Иссык-Куль</option><option>Ала-Арча</option><option>Сон-Куль</option><option>Пик Ленина (БЛ)</option><option>Каньон Сказка</option><option>Арстанбап</option></select>\r
          </div>\r
          <div class="form-row" style="margin:0"><label data-i18n="plan_transport">Транспорт</label>\r
            <select id="transport"><option>Автобус</option><option>Такси/Авто</option><option>Самолёт + авто</option><option>Конный тур</option></select>\r
          </div>\r
          <button class="btn btn-primary" onclick="quickPlan()" style="height:44px;padding:.6rem 1.5rem">\r
            <i class="fas fa-search-location"></i> <span data-i18n="plan_btn">Найти</span>\r
          </button>\r
        </div>\r
        <div id="planResult" class="plan-result" style="margin-top:1.25rem"></div>\r
      </div>\r
\r
    </div>\r
  </section>\r
\r
  <footer class="footer">\r
    <div class="container">\r
      <div class="footer-grid">\r
        <div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i> <strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Ваш надёжный путеводитель.</p></div>\r
        <div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul>\r
          <li><a href="index.html" data-i18n="nav_home">Главная</a></li><li><a href="places.html" data-i18n="nav_places">Места</a></li>\r
          <li><a href="mountains.html" data-i18n="nav_mountains">Горы</a></li><li><a href="routes.html" data-i18n="nav_routes">Маршруты</a></li>\r
          <li><a href="map.html" data-i18n="nav_map">Карта</a></li><li><a href="reviews.html" data-i18n="nav_reviews">Отзывы</a></li>\r
        </ul></div>\r
        <div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p><p><i class="fas fa-phone"></i> +996 312 000 000</p></div>\r
      </div>\r
      <div class="footer-bottom"><p>&copy; 2026 VisitKyrgyzstan. <span data-i18n="footer_copy">Все права защищены.</span></p></div>\r
    </div>\r
  </footer>\r
\r
  <div class="toast" id="toast"><i class="fas fa-check-circle"></i> <span id="toastMsg"></span></div>\r
  <script src="translations.js"><\/script>\r
  <script src="main.js"><\/script>\r
</body>\r
</html>\r
`,ie=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Интерактивная карта Кыргызстана</title>\r
  <meta name="description" content="Интерактивная карта туристических мест Кыргызстана. Горы, озёра, маршруты на одной карте." />\r
  <link rel="stylesheet" href="style.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />\r
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>\r
  <style>\r
    #map { height: 540px; width: 100%; border-radius: var(--radius); z-index: 1; }\r
    .leaflet-popup-content-wrapper { border-radius: 12px !important; box-shadow: 0 8px 32px rgba(0,0,0,.18) !important; }\r
    .leaflet-popup-content { font-family:'Segoe UI',sans-serif; font-size:.9rem; min-width:200px; }\r
    .popup-title { font-weight:700; font-size:1rem; color:#1e293b; margin-bottom:.4rem; }\r
    .popup-type  { font-size:.78rem; background:#dbeafe; color:#1e40af; padding:.2rem .6rem; border-radius:50px; display:inline-block; margin-bottom:.5rem; }\r
    .popup-desc  { font-size:.85rem; color:#64748b; margin-bottom:.6rem; }\r
    .popup-link  { display:inline-flex; align-items:center; gap:.3rem; color:#2563eb; font-weight:600; font-size:.85rem; }\r
    .popup-link:hover { text-decoration:underline; }\r
  </style>\r
</head>\r
<body>\r
\r
  <header class="header">\r
    <div class="container">\r
      <div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div>\r
      <nav class="nav" id="mainNav">\r
        <a href="index.html"><i class="fas fa-home"></i> <span data-i18n="nav_home">Главная</span></a>\r
        <a href="places.html"><i class="fas fa-map-marker-alt"></i> <span data-i18n="nav_places">Места</span></a>\r
        <a href="mountains.html"><i class="fas fa-mountain"></i> <span data-i18n="nav_mountains">Горы</span></a>\r
        <a href="routes.html"><i class="fas fa-route"></i> <span data-i18n="nav_routes">Маршруты</span></a>\r
        <a href="map.html" class="active"><i class="fas fa-map"></i> <span data-i18n="nav_map">Карта</span></a>\r
        <a href="reviews.html"><i class="fas fa-star"></i> <span data-i18n="nav_reviews">Отзывы</span></a>\r
      </nav>\r
      <div class="lang-switcher" id="langSwitcher">\r
        <button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button>\r
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>\r
        <button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button>\r
      </div>\r
      <button class="burger" id="burger"><span></span><span></span><span></span></button>\r
    </div>\r
  </header>\r
\r
  <section class="page-hero" style="background:linear-gradient(135deg,#0f2027,#2c5364);padding-top:66px;height:240px">\r
    <div class="page-hero-content">\r
      <h1><i class="fas fa-map"></i> <span data-i18n="map_title">Интерактивная карта</span></h1>\r
      <p data-i18n="map_sub">Все туристические точки Кыргызстана на одной карте</p>\r
    </div>\r
  </section>\r
\r
  <!-- ПОИСК -->\r
  <section class="search-section">\r
    <div class="container">\r
      <div class="search-box">\r
        <i class="fas fa-search"></i>\r
        <div class="search-wrapper">\r
          <input type="text" id="globalSearch" data-i18n-placeholder="search_placeholder" placeholder="Поиск..." autocomplete="off" />\r
          <div class="search-dropdown" id="searchDropdown"></div>\r
        </div>\r
        <button onclick="doSearch()" data-i18n="search_btn">Найти</button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section">\r
    <div class="container">\r
      <div class="breadcrumb">\r
        <a href="index.html" data-i18n="nav_home">Главная</a>\r
        <i class="fas fa-chevron-right"></i>\r
        <span data-i18n="nav_map">Карта</span>\r
      </div>\r
\r
      <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1.25rem;align-items:center">\r
        <strong style="font-size:.9rem" data-i18n="show">Показать:</strong>\r
        <button class="filter-btn active" onclick="filterMap('all',this)" data-i18n="map_all">Все</button>\r
        <button class="filter-btn" onclick="filterMap('mountain',this)"><i class="fas fa-mountain"></i> <span data-i18n="nav_mountains">Горы</span></button>\r
        <button class="filter-btn" onclick="filterMap('lake',this)"><i class="fas fa-water"></i> <span data-i18n="filter_lake">Озёра</span></button>\r
        <button class="filter-btn" onclick="filterMap('culture',this)"><i class="fas fa-landmark"></i> <span data-i18n="filter_culture">Культура</span></button>\r
        <button class="filter-btn" onclick="filterMap('nature',this)"><i class="fas fa-tree"></i> <span data-i18n="filter_forest">Природа</span></button>\r
      </div>\r
\r
      <div class="map-container" style="padding:0">\r
        <div id="map"></div>\r
        <div class="map-legend" style="border-top:1px solid #e2e8f0">\r
          <h3 data-i18n="legend_title">Легенда</h3>\r
          <div class="legend-items">\r
            <div class="legend-item"><div class="legend-dot dot-mountain"></div> <span data-i18n="leg_mountain">Горы и вершины</span></div>\r
            <div class="legend-item"><div class="legend-dot dot-lake"></div> <span data-i18n="leg_lake">Озёра и реки</span></div>\r
            <div class="legend-item"><div class="legend-dot dot-culture"></div> <span data-i18n="leg_culture">Культура и история</span></div>\r
            <div class="legend-item"><div class="legend-dot dot-nature"></div> <span data-i18n="leg_nature">Природа и парки</span></div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <h2 style="margin-top:3rem;margin-bottom:1.5rem;font-size:1.4rem" data-i18n="all_points">Все точки на карте</h2>\r
      <div class="map-points-list" id="pointsList">\r
        <div class="map-point-card" data-type="lake" onclick="flyTo(42.45,77.0,'Иссык-Куль')"><i class="fas fa-water" style="color:#06b6d4"></i><h4>Иссык-Куль</h4><p>Горное озеро, 6236 км²</p><small>42.45°N, 77.00°E</small></div>\r
        <div class="map-point-card" data-type="nature" onclick="flyTo(42.55,74.48,'Ала-Арча')"><i class="fas fa-tree" style="color:#22c55e"></i><h4>Ала-Арча</h4><p>Нац. парк, ущелье</p><small>42.55°N, 74.48°E</small></div>\r
        <div class="map-point-card" data-type="mountain" onclick="flyTo(39.73,72.82,'Пик Ленина')"><i class="fas fa-mountain" style="color:#3b82f6"></i><h4>Пик Ленина</h4><p>7134 м, семитысячник</p><small>39.73°N, 72.82°E</small></div>\r
        <div class="map-point-card" data-type="mountain" onclick="flyTo(42.21,80.17,'Хан-Тенгри')"><i class="fas fa-mountain" style="color:#3b82f6"></i><h4>Хан-Тенгри</h4><p>6995 м, Тянь-Шань</p><small>42.21°N, 80.17°E</small></div>\r
        <div class="map-point-card" data-type="lake" onclick="flyTo(41.82,75.12,'Сон-Куль')"><i class="fas fa-water" style="color:#06b6d4"></i><h4>Сон-Куль</h4><p>Высокогорное озеро, 3016 м</p><small>41.82°N, 75.12°E</small></div>\r
        <div class="map-point-card" data-type="culture" onclick="flyTo(40.52,72.79,'Ош')"><i class="fas fa-landmark" style="color:#f59e0b"></i><h4>Ош</h4><p>Древний город, 3000 лет</p><small>40.52°N, 72.79°E</small></div>\r
        <div class="map-point-card" data-type="nature" onclick="flyTo(42.5,78.4,'Каньон Сказка')"><i class="fas fa-tree" style="color:#22c55e"></i><h4>Каньон Сказка</h4><p>Красные скалы у озера</p><small>42.50°N, 78.40°E</small></div>\r
        <div class="map-point-card" data-type="nature" onclick="flyTo(41.5,72.93,'Арстанбап')"><i class="fas fa-tree" style="color:#22c55e"></i><h4>Арстанбап</h4><p>Ореховый лес, водопад</p><small>41.50°N, 72.93°E</small></div>\r
        <div class="map-point-card" data-type="lake" onclick="flyTo(41.77,71.45,'Сары-Чeлек')"><i class="fas fa-water" style="color:#06b6d4"></i><h4>Сары-Чeлек</h4><p>Заповедник ЮНЕСКО</p><small>41.77°N, 71.45°E</small></div>\r
        <div class="map-point-card" data-type="culture" onclick="flyTo(42.84,71.36,'Талас')"><i class="fas fa-landmark" style="color:#f59e0b"></i><h4>Таласская долина</h4><p>Родина Манаса</p><small>42.84°N, 71.36°E</small></div>\r
        <div class="map-point-card" data-type="mountain" onclick="flyTo(42.44,78.95,'Каракол')"><i class="fas fa-mountain" style="color:#3b82f6"></i><h4>Каракол</h4><p>Горный курорт</p><small>42.44°N, 78.95°E</small></div>\r
        <div class="map-point-card" data-type="culture" onclick="flyTo(42.87,74.59,'Бишкек')"><i class="fas fa-city" style="color:#f59e0b"></i><h4>Бишкек</h4><p>Столица Кыргызстана</p><small>42.87°N, 74.59°E</small></div>\r
      </div>\r
\r
      <div style="margin-top:3rem">\r
        <h2 style="margin-bottom:1.25rem;font-size:1.3rem"><i class="fas fa-map" style="color:var(--primary)"></i> Google Maps</h2>\r
        <div style="border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)">\r
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938285.7!2d74.5!3d41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389c7aebe99d11c3%3A0x9e7f5fe35f0b0b1f!2sKyrgyzstan!5e0!3m2!1sru!2skg!4v1700000000000!5m2!1sru!2skg"\r
            width="100%" height="450" style="border:0;display:block" allowfullscreen="" loading="lazy" title="Карта Кыргызстана"></iframe>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <footer class="footer">\r
    <div class="container">\r
      <div class="footer-grid">\r
        <div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i> <strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Ваш путеводитель по Кыргызстану.</p></div>\r
        <div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul>\r
          <li><a href="index.html" data-i18n="nav_home">Главная</a></li><li><a href="places.html" data-i18n="nav_places">Места</a></li>\r
          <li><a href="mountains.html" data-i18n="nav_mountains">Горы</a></li><li><a href="routes.html" data-i18n="nav_routes">Маршруты</a></li>\r
          <li><a href="map.html" data-i18n="nav_map">Карта</a></li><li><a href="reviews.html" data-i18n="nav_reviews">Отзывы</a></li>\r
        </ul></div>\r
        <div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p><p><i class="fas fa-phone"></i> +996 312 000 000</p></div>\r
      </div>\r
      <div class="footer-bottom"><p>&copy; 2026 VisitKyrgyzstan. <span data-i18n="footer_copy">Все права защищены.</span></p></div>\r
    </div>\r
  </footer>\r
\r
  <div class="toast" id="toast"><i class="fas fa-check-circle"></i> <span id="toastMsg"></span></div>\r
  <script src="translations.js"><\/script>\r
  <script src="main.js"><\/script>\r
  <script>\r
  const map = L.map('map').setView([41.5,75.0],6);\r
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap',maxZoom:18}).addTo(map);\r
  const typeColors={mountain:'#3b82f6',lake:'#06b6d4',culture:'#f59e0b',nature:'#22c55e'};\r
  function colorMarker(c){return L.divIcon({html:\`<div style="width:16px;height:16px;border-radius:50%;background:\${c};border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.3)"></div>\`,className:'',iconSize:[16,16],iconAnchor:[8,8],popupAnchor:[0,-10]});}\r
  const pts=[\r
    {lat:42.87,lng:74.59,name:'Бишкек',type:'culture',desc:'Столица Кыргызстана',link:'places.html'},\r
    {lat:42.45,lng:77.0,name:'Иссык-Куль',type:'lake',desc:'Горное озеро не замерзает',link:'places.html#issykkul'},\r
    {lat:42.55,lng:74.48,name:'Ала-Арча',type:'nature',desc:'Нац. парк, ущелья и водопады',link:'places.html#alaarcha'},\r
    {lat:39.73,lng:72.82,name:'Пик Ленина',type:'mountain',desc:'7134 м — семитысячник',link:'mountains.html#lenin'},\r
    {lat:42.21,lng:80.17,name:'Хан-Тенгри',type:'mountain',desc:'6995 м — Повелитель неба',link:'mountains.html#khantengri'},\r
    {lat:41.82,lng:75.12,name:'Сон-Куль',type:'lake',desc:'Высокогорное озеро, 3016 м',link:'places.html#sonkul'},\r
    {lat:40.52,lng:72.79,name:'Ош',type:'culture',desc:'Город трёх тысяч лет',link:'places.html#osh'},\r
    {lat:42.50,lng:78.40,name:'Каньон Сказка',type:'nature',desc:'Красные скалы Иссык-Куля',link:'places.html#skazka'},\r
    {lat:41.50,lng:72.93,name:'Арстанбап',type:'nature',desc:'Ореховый лес ЮНЕСКО',link:'places.html#arstanbap'},\r
    {lat:41.77,lng:71.45,name:'Сары-Чeлек',type:'lake',desc:'Озеро в заповеднике',link:'places.html#sarychelek'},\r
    {lat:42.84,lng:71.36,name:'Талас',type:'culture',desc:'Родина эпоса Манас',link:'places.html#talas'},\r
    {lat:42.44,lng:78.95,name:'Каракол',type:'mountain',desc:'Горный курорт и треккинг',link:'routes.html'},\r
    {lat:41.20,lng:72.98,name:'Жалал-Абад',type:'culture',desc:'Термальные источники',link:'places.html'},\r
    {lat:41.42,lng:75.99,name:'Нарын',type:'culture',desc:'Горный город, Шёлковый путь',link:'places.html'},\r
  ];\r
  let allMarkers=[];\r
  pts.forEach(p=>{\r
    const m=L.marker([p.lat,p.lng],{icon:colorMarker(typeColors[p.type])}).addTo(map)\r
      .bindPopup(\`<div class="popup-title">\${p.name}</div><span class="popup-type">\${p.type==='mountain'?'🏔️ Гора':p.type==='lake'?'🌊 Озеро':p.type==='culture'?'🏛️ Культура':'🌲 Природа'}</span><div class="popup-desc">\${p.desc}</div><a class="popup-link" href="\${p.link}"><i class="fas fa-external-link-alt"></i> Подробнее</a>\`);\r
    m._type=p.type; m._name=p.name; allMarkers.push(m);\r
  });\r
  function flyTo(lat,lng,name){\r
    map.flyTo([lat,lng],10,{animate:true,duration:1.2});\r
    allMarkers.forEach(m=>{if(m._name===name)setTimeout(()=>m.openPopup(),1200);});\r
    document.getElementById('map').scrollIntoView({behavior:'smooth',block:'center'});\r
  }\r
  function filterMap(type,btn){\r
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));\r
    btn.classList.add('active');\r
    allMarkers.forEach(m=>{type==='all'||m._type===type?m.addTo(map):map.removeLayer(m);});\r
    document.querySelectorAll('.map-point-card').forEach(c=>{c.style.display=(type==='all'||c.dataset.type===type)?'':'none';});\r
  }\r
  <\/script>\r
</body>\r
</html>\r
`,S=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Отзывы туристов о Кыргызстане</title>\r
  <meta name="description" content="Читайте отзывы туристов о Кыргызстане. Оставьте свой отзыв." />\r
  <link rel="stylesheet" href="style.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
\r
  <header class="header">\r
    <div class="container">\r
      <div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div>\r
      <nav class="nav" id="mainNav">\r
        <a href="index.html"><i class="fas fa-home"></i> <span data-i18n="nav_home">Главная</span></a>\r
        <a href="places.html"><i class="fas fa-map-marker-alt"></i> <span data-i18n="nav_places">Места</span></a>\r
        <a href="mountains.html"><i class="fas fa-mountain"></i> <span data-i18n="nav_mountains">Горы</span></a>\r
        <a href="routes.html"><i class="fas fa-route"></i> <span data-i18n="nav_routes">Маршруты</span></a>\r
        <a href="map.html"><i class="fas fa-map"></i> <span data-i18n="nav_map">Карта</span></a>\r
        <a href="reviews.html" class="active"><i class="fas fa-star"></i> <span data-i18n="nav_reviews">Отзывы</span></a>\r
      </nav>\r
      <div class="lang-switcher" id="langSwitcher">\r
        <button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button>\r
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>\r
        <button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button>\r
      </div>\r
      <button class="burger" id="burger"><span></span><span></span><span></span></button>\r
    </div>\r
  </header>\r
\r
  <section class="page-hero" style="background:linear-gradient(135deg,#1e3a5f,#2563eb);padding-top:66px;height:280px">\r
    <div class="page-hero-content">\r
      <h1><i class="fas fa-star"></i> <span data-i18n="reviews_title">Отзывы путешественников</span></h1>\r
      <p data-i18n="reviews_sub">Поделитесь опытом и читайте отзывы других</p>\r
    </div>\r
  </section>\r
\r
  <!-- ПОИСК -->\r
  <section class="search-section">\r
    <div class="container">\r
      <div class="search-box">\r
        <i class="fas fa-search"></i>\r
        <div class="search-wrapper">\r
          <input type="text" id="globalSearch" data-i18n-placeholder="search_placeholder" placeholder="Поиск..." autocomplete="off" />\r
          <div class="search-dropdown" id="searchDropdown"></div>\r
        </div>\r
        <button onclick="doSearch()" data-i18n="search_btn">Найти</button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="section">\r
    <div class="container">\r
      <div class="breadcrumb">\r
        <a href="index.html" data-i18n="nav_home">Главная</a>\r
        <i class="fas fa-chevron-right"></i>\r
        <span data-i18n="nav_reviews">Отзывы</span>\r
      </div>\r
\r
      <!-- СТАТИСТИКА -->\r
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;margin-bottom:3rem">\r
        <div style="background:var(--light);border-radius:var(--radius);padding:1.5rem;text-align:center">\r
          <div id="totalCount" style="font-size:2rem;font-weight:800;color:var(--primary)">0</div>\r
          <div style="color:var(--gray);font-size:.9rem" data-i18n="total_reviews">Отзывов</div>\r
        </div>\r
        <div style="background:var(--light);border-radius:var(--radius);padding:1.5rem;text-align:center">\r
          <div id="avgRating" style="font-size:2rem;font-weight:800;color:#f59e0b">—</div>\r
          <div style="color:var(--gray);font-size:.9rem" data-i18n="avg_rating">Средний рейтинг</div>\r
        </div>\r
        <div style="background:var(--light);border-radius:var(--radius);padding:1.5rem;text-align:center">\r
          <div id="topPlace" style="font-size:1.1rem;font-weight:800;color:var(--green)">—</div>\r
          <div style="color:var(--gray);font-size:.9rem" data-i18n="popular_place">Популярное место</div>\r
        </div>\r
        <div style="background:var(--light);border-radius:var(--radius);padding:1.5rem;text-align:center">\r
          <div id="fiveStarCount" style="font-size:2rem;font-weight:800;color:var(--primary)">0</div>\r
          <div style="color:var(--gray);font-size:.9rem" data-i18n="five_star">Отзывов 5★</div>\r
        </div>\r
      </div>\r
\r
      <!-- ФОРМА -->\r
      <div class="review-form-box">\r
        <h2><i class="fas fa-pen" style="color:var(--primary)"></i> <span data-i18n="form_title">Оставить отзыв</span></h2>\r
        <div class="form-2col">\r
          <div class="form-group">\r
            <label data-i18n="form_name">Ваше имя</label>\r
            <input type="text" id="reviewName" data-i18n-placeholder="form_name" placeholder="Иван Иванов" />\r
          </div>\r
          <div class="form-group">\r
            <label data-i18n="form_country">Страна</label>\r
            <input type="text" id="reviewCountry" data-i18n-placeholder="form_country" placeholder="Россия..." />\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label data-i18n="form_place">Место посещения</label>\r
          <select id="reviewPlace">\r
            <option value="" data-i18n="form_place_ph">— Выберите место —</option>\r
            <option>Иссык-Куль</option><option>Ала-Арча</option><option>Сон-Куль</option>\r
            <option>Каньон Сказка</option><option>Пик Ленина</option><option>Хан-Тенгри</option>\r
            <option>Ош</option><option>Арстанбап</option><option>Сары-Чeлек</option>\r
            <option>Каракол</option><option>Таласская долина</option><option>Другое</option>\r
          </select>\r
        </div>\r
        <div class="form-2col">\r
          <div class="form-group">\r
            <label data-i18n="form_rating">Оценка</label>\r
            <div class="star-rating" id="starRating">\r
              <input type="radio" id="s5" name="rating" value="5"><label for="s5">★</label>\r
              <input type="radio" id="s4" name="rating" value="4"><label for="s4">★</label>\r
              <input type="radio" id="s3" name="rating" value="3"><label for="s3">★</label>\r
              <input type="radio" id="s2" name="rating" value="2"><label for="s2">★</label>\r
              <input type="radio" id="s1" name="rating" value="1"><label for="s1">★</label>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label data-i18n="form_date">Дата посещения</label>\r
            <input type="month" id="reviewDate" />\r
          </div>\r
        </div>\r
        <div class="form-group">\r
          <label data-i18n="form_text">Ваш отзыв</label>\r
          <textarea id="reviewText" data-i18n-placeholder="form_text_ph" placeholder="Расскажите о впечатлениях..."></textarea>\r
        </div>\r
        <div class="form-group">\r
          <label data-i18n="form_tips">Полезные советы</label>\r
          <input type="text" id="reviewTips" data-i18n-placeholder="form_tips_ph" placeholder="Лучшее время для посещения..." />\r
        </div>\r
        <button class="btn btn-primary" onclick="submitReview()" style="width:100%;justify-content:center;font-size:1rem;padding:1rem">\r
          <i class="fas fa-paper-plane"></i> <span data-i18n="form_submit">Опубликовать отзыв</span>\r
        </button>\r
        <p style="text-align:center;font-size:.82rem;color:var(--gray);margin-top:.75rem">\r
          <i class="fas fa-lock"></i> <span data-i18n="form_privacy">Отзывы сохраняются в браузере</span>\r
        </p>\r
      </div>\r
\r
      <!-- ВСЕ ОТЗЫВЫ -->\r
      <div style="margin-top:3rem">\r
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem">\r
          <h2 style="font-size:1.4rem"><i class="fas fa-comments" style="color:var(--primary)"></i> <span data-i18n="all_reviews">Все отзывы</span></h2>\r
          <div style="display:flex;gap:.75rem;align-items:center;flex-wrap:wrap">\r
            <select id="filterPlace" onchange="renderReviews()" style="padding:.5rem .85rem;border:2px solid #e2e8f0;border-radius:50px;font-size:.88rem;outline:none">\r
              <option value="" data-i18n="filter_allp">Все места</option>\r
              <option>Иссык-Куль</option><option>Ала-Арча</option><option>Сон-Куль</option>\r
              <option>Каньон Сказка</option><option>Пик Ленина</option><option>Ош</option><option>Арстанбап</option>\r
            </select>\r
            <select id="filterRating" onchange="renderReviews()" style="padding:.5rem .85rem;border:2px solid #e2e8f0;border-radius:50px;font-size:.88rem;outline:none">\r
              <option value="" data-i18n="filter_allr">Все оценки</option>\r
              <option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option>\r
            </select>\r
            <select id="sortReviews" onchange="renderReviews()" style="padding:.5rem .85rem;border:2px solid #e2e8f0;border-radius:50px;font-size:.88rem;outline:none">\r
              <option value="new" data-i18n="sort_new">Сначала новые</option>\r
              <option value="rating" data-i18n="sort_rating">По рейтингу</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="reviews-wall" id="reviewsWall"></div>\r
        <div id="noReviews" style="text-align:center;padding:3rem;color:var(--gray);display:none">\r
          <i class="fas fa-comment-slash" style="font-size:3rem;margin-bottom:1rem;opacity:.3"></i>\r
          <p data-i18n="no_reviews">Отзывов пока нет. Будьте первым!</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <footer class="footer">\r
    <div class="container">\r
      <div class="footer-grid">\r
        <div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i> <strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Спасибо за ваш отзыв!</p></div>\r
        <div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul>\r
          <li><a href="index.html" data-i18n="nav_home">Главная</a></li><li><a href="places.html" data-i18n="nav_places">Места</a></li>\r
          <li><a href="mountains.html" data-i18n="nav_mountains">Горы</a></li><li><a href="routes.html" data-i18n="nav_routes">Маршруты</a></li>\r
          <li><a href="map.html" data-i18n="nav_map">Карта</a></li><li><a href="reviews.html" data-i18n="nav_reviews">Отзывы</a></li>\r
        </ul></div>\r
        <div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p><p><i class="fas fa-phone"></i> +996 312 000 000</p></div>\r
      </div>\r
      <div class="footer-bottom"><p>&copy; 2026 VisitKyrgyzstan. <span data-i18n="footer_copy">Все права защищены.</span></p></div>\r
    </div>\r
  </footer>\r
\r
  <div class="toast" id="toast"><i class="fas fa-check-circle"></i> <span id="toastMsg"></span></div>\r
  <script src="translations.js"><\/script>\r
  <script src="main.js"><\/script>\r
</body>\r
</html>\r
`,ae=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Вход — Админ панель VisitKyrgyzstan</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
  <div class="login-page">\r
    <div class="login-card">\r
      <div class="login-logo">\r
        <i class="fas fa-mountain"></i>\r
        <h1>VisitKyrgyzstan</h1>\r
        <p>Панель управления сайтом</p>\r
        <span class="login-badge">ADMIN PANEL</span>\r
      </div>\r
\r
      <div class="login-error" id="loginError">\r
        <i class="fas fa-exclamation-circle"></i>\r
        <span id="loginErrorMsg">Неверный логин или пароль</span>\r
      </div>\r
\r
      <form id="loginForm" onsubmit="doLogin(event)">\r
        <div class="form-group">\r
          <label for="username">\r
            <i class="fas fa-user" style="color:var(--a-primary);margin-right:.35rem"></i>\r
            Логин\r
          </label>\r
          <input type="text" id="username" class="form-control" placeholder="admin" autocomplete="username" required />\r
        </div>\r
        <div class="form-group">\r
          <label for="password">\r
            <i class="fas fa-lock" style="color:var(--a-primary);margin-right:.35rem"></i>\r
            Пароль\r
          </label>\r
          <div style="position:relative">\r
            <input type="password" id="password" class="form-control" placeholder="••••••••" autocomplete="current-password" required style="padding-right:2.5rem" />\r
            <button type="button" onclick="togglePass()" style="position:absolute;right:.75rem;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--a-gray);font-size:.9rem" id="togglePassBtn">\r
              <i class="fas fa-eye"></i>\r
            </button>\r
          </div>\r
        </div>\r
        <button type="submit" class="login-submit" id="loginBtn">\r
          <i class="fas fa-sign-in-alt"></i> Войти в панель\r
        </button>\r
      </form>\r
\r
      <div class="login-hint">\r
        <i class="fas fa-info-circle"></i>\r
        Логин: <code>admin</code> &nbsp;|&nbsp; Пароль: <code>admin123</code>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <script src="admin.js"><\/script>\r
  <script>\r
    // Если уже авторизован — сразу на дашборд\r
    if (localStorage.getItem('kg_admin_auth') === 'true') {\r
      window.location.href = 'dashboard.html';\r
    }\r
\r
    function doLogin(e) {\r
      e.preventDefault();\r
      const user = document.getElementById('username').value.trim();\r
      const pass = document.getElementById('password').value;\r
      const btn  = document.getElementById('loginBtn');\r
\r
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Проверка...';\r
      btn.disabled = true;\r
\r
      setTimeout(() => {\r
        // Получить сохранённые учётные данные или дефолтные\r
        const savedUser = localStorage.getItem('kg_admin_user') || 'admin';\r
        const savedPass = localStorage.getItem('kg_admin_pass') || 'admin123';\r
\r
        if (user === savedUser && pass === savedPass) {\r
          localStorage.setItem('kg_admin_auth', 'true');\r
          localStorage.setItem('kg_admin_login_time', Date.now());\r
          btn.innerHTML = '<i class="fas fa-check"></i> Успешно!';\r
          btn.style.background = '#16a34a';\r
          setTimeout(() => { window.location.href = 'dashboard.html'; }, 600);\r
        } else {\r
          document.getElementById('loginError').classList.add('show');\r
          document.getElementById('loginErrorMsg').textContent = 'Неверный логин или пароль. Попробуйте снова.';\r
          btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти в панель';\r
          btn.disabled = false;\r
          document.getElementById('password').value = '';\r
          document.getElementById('password').focus();\r
        }\r
      }, 700);\r
    }\r
\r
    function togglePass() {\r
      const inp = document.getElementById('password');\r
      const ico = document.querySelector('#togglePassBtn i');\r
      if (inp.type === 'password') {\r
        inp.type = 'text';\r
        ico.className = 'fas fa-eye-slash';\r
      } else {\r
        inp.type = 'password';\r
        ico.className = 'fas fa-eye';\r
      }\r
    }\r
  <\/script>\r
</body>\r
</html>\r
`,oe=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Дашборд — Админ панель</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
<div class="admin-layout">\r
\r
  <!-- SIDEBAR -->\r
  <aside class="sidebar">\r
    <div class="sidebar-logo">\r
      <i class="fas fa-mountain"></i>\r
      <div>\r
        <span>VisitKyrgyzstan</span>\r
        <small>Admin Panel</small>\r
      </div>\r
    </div>\r
    <nav class="sidebar-menu">\r
      <div class="menu-section">Главное</div>\r
      <a href="dashboard.html" class="menu-item active"><i class="fas fa-tachometer-alt"></i> Дашборд</a>\r
\r
      <div class="menu-section">Контент</div>\r
      <a href="places.html"  class="menu-item"><i class="fas fa-map-marker-alt"></i> Места</a>\r
      <a href="routes.html"  class="menu-item"><i class="fas fa-route"></i> Маршруты</a>\r
      <a href="reviews.html" class="menu-item" id="reviewsLink"><i class="fas fa-star"></i> Отзывы</a>\r
\r
      <div class="menu-section">Система</div>\r
      <a href="settings.html" class="menu-item"><i class="fas fa-cog"></i> Настройки</a>\r
      <a href="../index.html" class="menu-item" target="_blank"><i class="fas fa-external-link-alt"></i> Открыть сайт</a>\r
      <a href="#" class="menu-item" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выход</a>\r
    </nav>\r
    <div class="sidebar-footer">\r
      <strong id="sidebarUser">Администратор</strong>\r
      Последний вход: <span id="lastLogin">—</span>\r
    </div>\r
  </aside>\r
\r
  <!-- MAIN -->\r
  <div class="main-content">\r
    <div class="topbar">\r
      <div class="topbar-left">\r
        <button id="adminBurger" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--a-gray);display:none"><i class="fas fa-bars"></i></button>\r
        <div>\r
          <div class="topbar-title">Дашборд</div>\r
          <div class="topbar-breadcrumb"><span>Главная</span></div>\r
        </div>\r
      </div>\r
      <div class="topbar-right">\r
        <a href="../index.html" target="_blank" class="topbar-site-link"><i class="fas fa-globe"></i> Открыть сайт</a>\r
        <div class="topbar-user"><div class="avatar">A</div><span>Admin</span></div>\r
        <button class="logout-btn" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выход</button>\r
      </div>\r
    </div>\r
\r
    <div class="page-body">\r
      <div class="page-header">\r
        <div>\r
          <h1>Добро пожаловать! 👋</h1>\r
          <p>Обзор состояния туристического каталога</p>\r
        </div>\r
        <div style="display:flex;gap:.75rem">\r
          <a href="places.html" class="btn btn-primary"><i class="fas fa-plus"></i> Добавить место</a>\r
          <a href="routes.html" class="btn btn-outline"><i class="fas fa-plus"></i> Добавить маршрут</a>\r
        </div>\r
      </div>\r
\r
      <!-- STAT CARDS -->\r
      <div class="stats-grid" id="statsGrid">\r
        <div class="stat-card">\r
          <div class="stat-icon blue"><i class="fas fa-map-marker-alt"></i></div>\r
          <div class="stat-info"><strong id="statPlaces">—</strong><span>Мест в каталоге</span><div class="stat-change up" id="statPlacesActive"></div></div>\r
        </div>\r
        <div class="stat-card">\r
          <div class="stat-icon green"><i class="fas fa-route"></i></div>\r
          <div class="stat-info"><strong id="statRoutes">—</strong><span>Маршрутов</span></div>\r
        </div>\r
        <div class="stat-card">\r
          <div class="stat-icon amber"><i class="fas fa-star"></i></div>\r
          <div class="stat-info"><strong id="statReviews">—</strong><span>Отзывов</span><div class="stat-change up" id="statAvg"></div></div>\r
        </div>\r
        <div class="stat-card">\r
          <div class="stat-icon purple"><i class="fas fa-bookmark"></i></div>\r
          <div class="stat-info"><strong id="statSaved">—</strong><span>Сохранений</span></div>\r
        </div>\r
      </div>\r
\r
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">\r
\r
        <!-- ПОСЛЕДНИЕ ОТЗЫВЫ -->\r
        <div class="card">\r
          <div class="card-header">\r
            <h2><i class="fas fa-comments"></i> Последние отзывы</h2>\r
            <a href="reviews.html" class="btn btn-ghost btn-sm">Все отзывы</a>\r
          </div>\r
          <div class="card-body" id="recentReviews" style="padding:0">\r
            <div class="empty-state"><i class="fas fa-comment-slash"></i><p>Отзывов пока нет</p></div>\r
          </div>\r
        </div>\r
\r
        <!-- МЕСТА ПО КАТЕГОРИЯМ -->\r
        <div class="card">\r
          <div class="card-header">\r
            <h2><i class="fas fa-chart-bar"></i> Места по категориям</h2>\r
          </div>\r
          <div class="card-body">\r
            <div class="progress-row" id="catProgress"></div>\r
          </div>\r
        </div>\r
\r
        <!-- БЫСТРЫЕ ДЕЙСТВИЯ -->\r
        <div class="card">\r
          <div class="card-header"><h2><i class="fas fa-bolt"></i> Быстрые действия</h2></div>\r
          <div class="card-body">\r
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">\r
              <a href="places.html" class="btn btn-outline" style="justify-content:center"><i class="fas fa-map-marker-alt"></i> Управление местами</a>\r
              <a href="routes.html" class="btn btn-outline" style="justify-content:center"><i class="fas fa-route"></i> Управление маршрутами</a>\r
              <a href="reviews.html" class="btn btn-outline" style="justify-content:center"><i class="fas fa-star"></i> Отзывы</a>\r
              <a href="settings.html" class="btn btn-outline" style="justify-content:center"><i class="fas fa-cog"></i> Настройки</a>\r
              <a href="../index.html" target="_blank" class="btn btn-ghost" style="justify-content:center;grid-column:1/-1"><i class="fas fa-external-link-alt"></i> Открыть сайт в новой вкладке</a>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- ПОСЛЕДНЯЯ АКТИВНОСТЬ -->\r
        <div class="card">\r
          <div class="card-header"><h2><i class="fas fa-history"></i> Активность</h2></div>\r
          <div class="card-body" style="padding:0 1.5rem">\r
            <div class="activity-feed" id="activityFeed"></div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script src="admin.js"><\/script>\r
<script>\r
requireAuth();\r
initSidebar();\r
\r
// Последний вход\r
const lt = localStorage.getItem('kg_admin_login_time');\r
if (lt) document.getElementById('lastLogin').textContent = new Date(parseInt(lt)).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});\r
\r
// Статистика\r
const stats = getStats();\r
document.getElementById('statPlaces').textContent  = stats.totalPlaces;\r
document.getElementById('statRoutes').textContent  = stats.totalRoutes;\r
document.getElementById('statReviews').textContent = stats.totalReviews;\r
document.getElementById('statSaved').textContent   = stats.savedCount;\r
document.getElementById('statPlacesActive').textContent  = \`✓ \${stats.activePlaces} активных\`;\r
document.getElementById('statAvg').textContent           = \`★ Средний: \${stats.avgRating}\`;\r
\r
// Обновить счётчик отзывов в меню\r
const rLink = document.getElementById('reviewsLink');\r
if (stats.totalReviews > 0) rLink.innerHTML += \`<span class="menu-badge green">\${stats.totalReviews}</span>\`;\r
\r
// Последние отзывы\r
const reviews = getReviews().slice(0,5);\r
const recentEl = document.getElementById('recentReviews');\r
if (reviews.length) {\r
  recentEl.innerHTML = reviews.map(r => \`\r
    <div style="display:flex;align-items:flex-start;gap:.75rem;padding:.9rem 1.5rem;border-bottom:1px solid #f1f5f9">\r
      <div style="width:36px;height:36px;border-radius:50%;background:var(--a-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.9rem;flex-shrink:0">\${escHtml(r.name.charAt(0))}</div>\r
      <div style="flex:1;min-width:0">\r
        <div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem">\r
          <strong style="font-size:.88rem">\${escHtml(r.name)}</strong>\r
          <span class="stars-sm">\${'★'.repeat(r.rating)}</span>\r
        </div>\r
        <div style="font-size:.78rem;color:var(--a-gray);margin-bottom:.3rem"><i class="fas fa-map-marker-alt" style="color:var(--a-primary)"></i> \${escHtml(r.place)}</div>\r
        <div style="font-size:.82rem;color:var(--a-dark2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${escHtml(r.text.slice(0,80))}...</div>\r
      </div>\r
    </div>\`).join('');\r
}\r
\r
// Категории — прогресс бар\r
const places = getPlaces();\r
const catCount = {};\r
places.forEach(p => { catCount[p.cat] = (catCount[p.cat]||0)+1; });\r
const catColors = { lake:'blue', mountain:'purple', canyon:'orange', forest:'green', culture:'amber', city:'blue', gorge:'green' };\r
const catProg = document.getElementById('catProgress');\r
catProg.innerHTML = Object.entries(catCount).map(([cat, cnt]) => \`\r
  <div class="progress-item">\r
    <div class="progress-label">\r
      <span>\${CAT_LABELS[cat]||cat}</span>\r
      <span>\${cnt}</span>\r
    </div>\r
    <div class="progress-bar-wrap">\r
      <div class="progress-bar \${catColors[cat]||'blue'}" style="width:\${Math.round(cnt/places.length*100)}%"></div>\r
    </div>\r
  </div>\`).join('');\r
\r
// Активность\r
const actFeed = document.getElementById('activityFeed');\r
const actItems = [\r
  { icon:'fas fa-map-marker-alt', color:'blue',  text:\`Мест в каталоге: <strong>\${stats.totalPlaces}</strong>\`, time:'Сейчас' },\r
  { icon:'fas fa-star',           color:'orange',text:\`Отзывов получено: <strong>\${stats.totalReviews}</strong>\`, time:'Всего' },\r
  { icon:'fas fa-route',          color:'green', text:\`Маршрутов активно: <strong>\${stats.totalRoutes}</strong>\`, time:'Всего' },\r
  { icon:'fas fa-bookmark',       color:'blue',  text:\`Мест сохранено пользователями: <strong>\${stats.savedCount}</strong>\`, time:'Всего' },\r
  { icon:'fas fa-cog',            color:'red',   text:\`Последний вход в панель\`, time: lt ? new Date(parseInt(lt)).toLocaleString('ru-RU',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}) : '—' },\r
];\r
actFeed.innerHTML = actItems.map(a => \`\r
  <div class="activity-item">\r
    <div class="activity-dot \${a.color}"><i class="\${a.icon}"></i></div>\r
    <div class="activity-text"><strong>\${a.text}</strong><span>\${a.time}</span></div>\r
  </div>\`).join('');\r
<\/script>\r
</body>\r
</html>\r
`,se=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Места — Админ панель</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
<div class="admin-layout">\r
\r
  <aside class="sidebar">\r
    <div class="sidebar-logo"><i class="fas fa-mountain"></i><div><span>VisitKyrgyzstan</span><small>Admin Panel</small></div></div>\r
    <nav class="sidebar-menu">\r
      <div class="menu-section">Главное</div>\r
      <a href="dashboard.html" class="menu-item"><i class="fas fa-tachometer-alt"></i> Дашборд</a>\r
      <div class="menu-section">Контент</div>\r
      <a href="places.html"  class="menu-item active"><i class="fas fa-map-marker-alt"></i> Места</a>\r
      <a href="routes.html"  class="menu-item"><i class="fas fa-route"></i> Маршруты</a>\r
      <a href="reviews.html" class="menu-item"><i class="fas fa-star"></i> Отзывы</a>\r
      <div class="menu-section">Система</div>\r
      <a href="settings.html"  class="menu-item"><i class="fas fa-cog"></i> Настройки</a>\r
      <a href="../index.html" class="menu-item" target="_blank"><i class="fas fa-external-link-alt"></i> Открыть сайт</a>\r
      <a href="#" class="menu-item" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выход</a>\r
    </nav>\r
  </aside>\r
\r
  <div class="main-content">\r
    <div class="topbar">\r
      <div class="topbar-left">\r
        <button id="adminBurger" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--a-gray)"><i class="fas fa-bars"></i></button>\r
        <div>\r
          <div class="topbar-title">Места</div>\r
          <div class="topbar-breadcrumb"><a href="dashboard.html">Дашборд</a> <i class="fas fa-chevron-right"></i> <span>Места</span></div>\r
        </div>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="topbar-user"><div class="avatar">A</div><span>Admin</span></div>\r
        <button class="logout-btn" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i></button>\r
      </div>\r
    </div>\r
\r
    <div class="page-body">\r
      <div class="page-header">\r
        <div><h1>Управление местами</h1><p>Добавляйте, редактируйте и удаляйте достопримечательности</p></div>\r
        <button class="btn btn-primary" onclick="openPlaceModal()"><i class="fas fa-plus"></i> Добавить место</button>\r
      </div>\r
\r
      <!-- ФИЛЬТРЫ -->\r
      <div class="filter-bar">\r
        <div class="search-input-wrap">\r
          <i class="fas fa-search"></i>\r
          <input type="text" id="placeSearch" placeholder="Поиск по названию..." oninput="renderPlaces()" />\r
        </div>\r
        <select class="filter-select" id="placeCatFilter" onchange="renderPlaces()">\r
          <option value="">Все категории</option>\r
          <option value="lake">Озёра</option>\r
          <option value="gorge">Ущелья</option>\r
          <option value="canyon">Каньоны</option>\r
          <option value="culture">Культура</option>\r
          <option value="forest">Леса</option>\r
          <option value="city">Города</option>\r
          <option value="mountain">Горы</option>\r
        </select>\r
        <select class="filter-select" id="placeStatusFilter" onchange="renderPlaces()">\r
          <option value="">Все статусы</option>\r
          <option value="active">Активные</option>\r
          <option value="hidden">Скрытые</option>\r
        </select>\r
        <span id="placeCount" style="font-size:.82rem;color:var(--a-gray);white-space:nowrap"></span>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body" style="padding:0">\r
          <table class="admin-table">\r
            <thead>\r
              <tr>\r
                <th style="width:45px">#</th>\r
                <th>Название / Описание</th>\r
                <th>Категория</th>\r
                <th>Регион</th>\r
                <th>Рейтинг</th>\r
                <th>Транспорт</th>\r
                <th>Статус</th>\r
                <th style="width:130px">Действия</th>\r
              </tr>\r
            </thead>\r
            <tbody id="placesTableBody"></tbody>\r
          </table>\r
          <div class="empty-state" id="placesEmpty" style="display:none">\r
            <i class="fas fa-map-marker-slash"></i>\r
            <p>Места не найдены</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- МОДАЛКА ДОБАВИТЬ/РЕДАКТИРОВАТЬ МЕСТО -->\r
<div class="modal-overlay" id="placeModal">\r
  <div class="modal" style="max-width:700px">\r
    <div class="modal-header">\r
      <h3 id="placeModalTitle"><i class="fas fa-map-marker-alt" style="color:var(--a-primary)"></i> Добавить место</h3>\r
      <button class="modal-close" onclick="closeModal('placeModal')"><i class="fas fa-times"></i></button>\r
    </div>\r
    <div class="modal-body">\r
      <input type="hidden" id="placeId" />\r
      <div class="form-grid">\r
        <div class="form-group">\r
          <label>Название <span class="required">*</span></label>\r
          <input type="text" id="placeName" class="form-control" placeholder="Иссык-Куль" />\r
        </div>\r
        <div class="form-group">\r
          <label>Категория <span class="required">*</span></label>\r
          <select id="placeCat" class="form-control">\r
            <option value="lake">🌊 Озеро</option>\r
            <option value="gorge">🌲 Ущелье</option>\r
            <option value="canyon">🏜️ Каньон</option>\r
            <option value="culture">🏛️ Культура</option>\r
            <option value="forest">🌳 Лес</option>\r
            <option value="city">🏙️ Город</option>\r
            <option value="mountain">🏔️ Гора</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Регион <span class="required">*</span></label>\r
          <input type="text" id="placeRegion" class="form-control" placeholder="Иссык-Кульская обл." />\r
        </div>\r
        <div class="form-group">\r
          <label>Рейтинг (1-5)</label>\r
          <select id="placeRating" class="form-control">\r
            <option value="5">★★★★★ (5)</option>\r
            <option value="4">★★★★☆ (4)</option>\r
            <option value="3">★★★☆☆ (3)</option>\r
            <option value="2">★★☆☆☆ (2)</option>\r
            <option value="1">★☆☆☆☆ (1)</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Лучшее время</label>\r
          <input type="text" id="placeBestTime" class="form-control" placeholder="Июнь–Сентябрь" />\r
        </div>\r
        <div class="form-group">\r
          <label>Статус</label>\r
          <select id="placeStatus" class="form-control">\r
            <option value="active">✅ Активен (виден на сайте)</option>\r
            <option value="hidden">🔒 Скрыт</option>\r
          </select>\r
        </div>\r
        <div class="form-group full">\r
          <label>Транспорт (как добраться)</label>\r
          <input type="text" id="placeTransport" class="form-control" placeholder="Автобус из Бишкека 4-5ч (300 сом), Машина 3-4ч" />\r
        </div>\r
        <div class="form-group full">\r
          <label>Описание</label>\r
          <textarea id="placeDesc" class="form-control" placeholder="Краткое описание места..."></textarea>\r
        </div>\r
        <div class="form-group full">\r
          <label>URL изображения</label>\r
          <input type="url" id="placeImg" class="form-control" placeholder="https://..." />\r
          <div class="form-hint">Ссылка на фото (Unsplash, imgur и др.)</div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-ghost" onclick="closeModal('placeModal')">Отмена</button>\r
      <button class="btn btn-primary" onclick="savePlace()"><i class="fas fa-save"></i> Сохранить</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script src="admin.js"><\/script>\r
<script>\r
requireAuth();\r
initSidebar();\r
\r
function renderPlaces() {\r
  let places  = getPlaces();\r
  const q     = document.getElementById('placeSearch').value.toLowerCase();\r
  const cat   = document.getElementById('placeCatFilter').value;\r
  const status= document.getElementById('placeStatusFilter').value;\r
\r
  if (q)      places = places.filter(p => p.name.toLowerCase().includes(q) || (p.region||'').toLowerCase().includes(q));\r
  if (cat)    places = places.filter(p => p.cat === cat);\r
  if (status) places = places.filter(p => p.status === status);\r
\r
  document.getElementById('placeCount').textContent = \`Найдено: \${places.length}\`;\r
  const tbody = document.getElementById('placesTableBody');\r
  const empty = document.getElementById('placesEmpty');\r
\r
  if (!places.length) {\r
    tbody.innerHTML = '';\r
    empty.style.display = 'block';\r
    return;\r
  }\r
  empty.style.display = 'none';\r
\r
  tbody.innerHTML = places.map((p, i) => \`\r
    <tr>\r
      <td style="color:var(--a-gray);font-size:.8rem">\${i+1}</td>\r
      <td>\r
        <div style="display:flex;align-items:center;gap:.75rem">\r
          \${p.img ? \`<img src="\${escHtml(p.img)}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'" />\` : \`<div style="width:44px;height:44px;border-radius:8px;background:var(--a-light);display:flex;align-items:center;justify-content:center;color:var(--a-gray)"><i class="fas fa-image"></i></div>\`}\r
          <div>\r
            <div class="name-cell">\${escHtml(p.name)}</div>\r
            <div class="sub-text">\${escHtml((p.desc||'').slice(0,60))}\${(p.desc||'').length>60?'...':''}</div>\r
          </div>\r
        </div>\r
      </td>\r
      <td><span class="badge-tag \${p.cat}">\${CAT_LABELS[p.cat]||p.cat}</span></td>\r
      <td style="font-size:.82rem;color:var(--a-gray)">\${escHtml(p.region||'—')}</td>\r
      <td><span class="stars-sm">\${'★'.repeat(parseInt(p.rating||0))}\${'☆'.repeat(5-parseInt(p.rating||0))}</span></td>\r
      <td style="font-size:.78rem;color:var(--a-gray);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="\${escHtml(p.transport||'')}">\${escHtml((p.transport||'—').slice(0,40))}...</td>\r
      <td><span class="badge-tag \${p.status==='active'?'active':'hidden'}">\${STATUS_LABELS[p.status]||p.status}</span></td>\r
      <td>\r
        <div style="display:flex;gap:.4rem">\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="editPlace('\${p.id}')" title="Редактировать"><i class="fas fa-edit"></i></button>\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="togglePlaceStatus('\${p.id}')" title="\${p.status==='active'?'Скрыть':'Показать'}" style="color:\${p.status==='active'?'var(--a-orange)':'var(--a-green)'}"><i class="fas fa-\${p.status==='active'?'eye-slash':'eye'}"></i></button>\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="deletePlace('\${p.id}')" title="Удалить" style="color:var(--a-red)"><i class="fas fa-trash"></i></button>\r
        </div>\r
      </td>\r
    </tr>\`).join('');\r
}\r
\r
function openPlaceModal(id) {\r
  document.getElementById('placeId').value       = '';\r
  document.getElementById('placeName').value     = '';\r
  document.getElementById('placeCat').value      = 'lake';\r
  document.getElementById('placeRegion').value   = '';\r
  document.getElementById('placeRating').value   = '5';\r
  document.getElementById('placeStatus').value   = 'active';\r
  document.getElementById('placeTransport').value= '';\r
  document.getElementById('placeDesc').value     = '';\r
  document.getElementById('placeImg').value      = '';\r
  document.getElementById('placeBestTime').value = '';\r
  document.getElementById('placeModalTitle').innerHTML = '<i class="fas fa-plus" style="color:var(--a-primary)"></i> Добавить место';\r
  openModal('placeModal');\r
}\r
\r
function editPlace(id) {\r
  const p = getPlaces().find(x => x.id === id);\r
  if (!p) return;\r
  document.getElementById('placeId').value       = p.id;\r
  document.getElementById('placeName').value     = p.name||'';\r
  document.getElementById('placeCat').value      = p.cat||'lake';\r
  document.getElementById('placeRegion').value   = p.region||'';\r
  document.getElementById('placeRating').value   = String(p.rating||5);\r
  document.getElementById('placeStatus').value   = p.status||'active';\r
  document.getElementById('placeTransport').value= p.transport||'';\r
  document.getElementById('placeDesc').value     = p.desc||'';\r
  document.getElementById('placeImg').value      = p.img||'';\r
  document.getElementById('placeBestTime').value = p.bestTime||'';\r
  document.getElementById('placeModalTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--a-primary)"></i> Редактировать место';\r
  openModal('placeModal');\r
}\r
\r
function savePlace() {\r
  const name = document.getElementById('placeName').value.trim();\r
  if (!name) { adminToast('Введите название места', 'err'); return; }\r
  const region = document.getElementById('placeRegion').value.trim();\r
  if (!region) { adminToast('Введите регион', 'err'); return; }\r
\r
  const id = document.getElementById('placeId').value;\r
  const data = {\r
    id:        id || genId('p'),\r
    name,\r
    cat:       document.getElementById('placeCat').value,\r
    region,\r
    rating:    parseInt(document.getElementById('placeRating').value),\r
    status:    document.getElementById('placeStatus').value,\r
    transport: document.getElementById('placeTransport').value.trim(),\r
    desc:      document.getElementById('placeDesc').value.trim(),\r
    img:       document.getElementById('placeImg').value.trim(),\r
    bestTime:  document.getElementById('placeBestTime').value.trim(),\r
  };\r
\r
  let places = getPlaces();\r
  if (id) {\r
    places = places.map(p => p.id === id ? data : p);\r
    adminToast(\`«\${name}» обновлён\`, 'ok');\r
  } else {\r
    places.unshift(data);\r
    adminToast(\`«\${name}» добавлен\`, 'ok');\r
  }\r
  savePlaces(places);\r
  closeModal('placeModal');\r
  renderPlaces();\r
}\r
\r
function togglePlaceStatus(id) {\r
  let places = getPlaces();\r
  places = places.map(p => p.id === id ? {...p, status: p.status==='active'?'hidden':'active'} : p);\r
  savePlaces(places);\r
  adminToast('Статус изменён', 'ok');\r
  renderPlaces();\r
}\r
\r
function deletePlace(id) {\r
  const p = getPlaces().find(x => x.id === id);\r
  adminConfirm(\`Удалить место «\${p?.name||id}»? Это действие нельзя отменить.\`, () => {\r
    savePlaces(getPlaces().filter(x => x.id !== id));\r
    adminToast('Место удалено', 'warn');\r
    renderPlaces();\r
  });\r
}\r
\r
renderPlaces();\r
<\/script>\r
</body>\r
</html>\r
`,ce=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Маршруты — Админ панель</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
<div class="admin-layout">\r
\r
  <aside class="sidebar">\r
    <div class="sidebar-logo"><i class="fas fa-mountain"></i><div><span>VisitKyrgyzstan</span><small>Admin Panel</small></div></div>\r
    <nav class="sidebar-menu">\r
      <div class="menu-section">Главное</div>\r
      <a href="dashboard.html" class="menu-item"><i class="fas fa-tachometer-alt"></i> Дашборд</a>\r
      <div class="menu-section">Контент</div>\r
      <a href="places.html"  class="menu-item"><i class="fas fa-map-marker-alt"></i> Места</a>\r
      <a href="routes.html"  class="menu-item active"><i class="fas fa-route"></i> Маршруты</a>\r
      <a href="reviews.html" class="menu-item"><i class="fas fa-star"></i> Отзывы</a>\r
      <div class="menu-section">Система</div>\r
      <a href="settings.html"  class="menu-item"><i class="fas fa-cog"></i> Настройки</a>\r
      <a href="../index.html" class="menu-item" target="_blank"><i class="fas fa-external-link-alt"></i> Открыть сайт</a>\r
      <a href="#" class="menu-item" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выход</a>\r
    </nav>\r
  </aside>\r
\r
  <div class="main-content">\r
    <div class="topbar">\r
      <div class="topbar-left">\r
        <button id="adminBurger" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--a-gray)"><i class="fas fa-bars"></i></button>\r
        <div>\r
          <div class="topbar-title">Маршруты</div>\r
          <div class="topbar-breadcrumb"><a href="dashboard.html">Дашборд</a> <i class="fas fa-chevron-right"></i> <span>Маршруты</span></div>\r
        </div>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="topbar-user"><div class="avatar">A</div><span>Admin</span></div>\r
        <button class="logout-btn" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i></button>\r
      </div>\r
    </div>\r
\r
    <div class="page-body">\r
      <div class="page-header">\r
        <div><h1>Управление маршрутами</h1><p>Добавляйте и редактируйте туристические маршруты</p></div>\r
        <button class="btn btn-primary" onclick="openRouteModal()"><i class="fas fa-plus"></i> Добавить маршрут</button>\r
      </div>\r
\r
      <div class="filter-bar">\r
        <div class="search-input-wrap">\r
          <i class="fas fa-search"></i>\r
          <input type="text" id="routeSearch" placeholder="Поиск маршрута..." oninput="renderRoutes()" />\r
        </div>\r
        <select class="filter-select" id="routeTypeFilter" onchange="renderRoutes()">\r
          <option value="">Все типы</option>\r
          <option value="trek">Треккинг</option>\r
          <option value="horse">Конный</option>\r
          <option value="climb">Альпинизм</option>\r
          <option value="culture">Культурный</option>\r
        </select>\r
        <select class="filter-select" id="routeDiffFilter" onchange="renderRoutes()">\r
          <option value="">Любая сложность</option>\r
          <option value="easy">Лёгкий</option>\r
          <option value="medium">Средний</option>\r
          <option value="hard">Сложный</option>\r
        </select>\r
        <span id="routeCount" style="font-size:.82rem;color:var(--a-gray)"></span>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body" style="padding:0">\r
          <table class="admin-table">\r
            <thead>\r
              <tr>\r
                <th style="width:40px">#</th>\r
                <th>Название маршрута</th>\r
                <th>Тип</th>\r
                <th>Сложность</th>\r
                <th>Длительность</th>\r
                <th>Дистанция</th>\r
                <th>Высота</th>\r
                <th>Сезон</th>\r
                <th>Статус</th>\r
                <th style="width:100px">Действия</th>\r
              </tr>\r
            </thead>\r
            <tbody id="routesTableBody"></tbody>\r
          </table>\r
          <div class="empty-state" id="routesEmpty" style="display:none">\r
            <i class="fas fa-route"></i><p>Маршруты не найдены</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- МОДАЛКА МАРШРУТ -->\r
<div class="modal-overlay" id="routeModal">\r
  <div class="modal" style="max-width:660px">\r
    <div class="modal-header">\r
      <h3 id="routeModalTitle"><i class="fas fa-route" style="color:var(--a-primary)"></i> Добавить маршрут</h3>\r
      <button class="modal-close" onclick="closeModal('routeModal')"><i class="fas fa-times"></i></button>\r
    </div>\r
    <div class="modal-body">\r
      <input type="hidden" id="routeId" />\r
      <div class="form-grid">\r
        <div class="form-group full">\r
          <label>Название маршрута <span class="required">*</span></label>\r
          <input type="text" id="routeName" class="form-control" placeholder="Ала-Арча — Водопад Ак-Сай" />\r
        </div>\r
        <div class="form-group">\r
          <label>Тип <span class="required">*</span></label>\r
          <select id="routeType" class="form-control">\r
            <option value="trek">🥾 Треккинг</option>\r
            <option value="horse">🐴 Конный</option>\r
            <option value="climb">🧗 Альпинизм</option>\r
            <option value="culture">🏛️ Культурный</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Сложность</label>\r
          <select id="routeDiff" class="form-control">\r
            <option value="easy">🟢 Лёгкий</option>\r
            <option value="medium">🟡 Средний</option>\r
            <option value="hard">🔴 Сложный</option>\r
          </select>\r
        </div>\r
        <div class="form-group">\r
          <label>Длительность</label>\r
          <input type="text" id="routeDuration" class="form-control" placeholder="6-7 ч" />\r
        </div>\r
        <div class="form-group">\r
          <label>Дистанция</label>\r
          <input type="text" id="routeDistance" class="form-control" placeholder="14 км" />\r
        </div>\r
        <div class="form-group">\r
          <label>Высота (диапазон)</label>\r
          <input type="text" id="routeHeight" class="form-control" placeholder="2200-3500 м" />\r
        </div>\r
        <div class="form-group">\r
          <label>Лучший сезон</label>\r
          <input type="text" id="routeSeason" class="form-control" placeholder="Май–Октябрь" />\r
        </div>\r
        <div class="form-group">\r
          <label>Статус</label>\r
          <select id="routeStatus" class="form-control">\r
            <option value="active">✅ Активен</option>\r
            <option value="hidden">🔒 Скрыт</option>\r
          </select>\r
        </div>\r
        <div class="form-group full">\r
          <label>Транспорт / как добраться</label>\r
          <input type="text" id="routeTransport" class="form-control" placeholder="Маршрутка №265 из Бишкека (1 ч, 60 сом)" />\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn btn-ghost" onclick="closeModal('routeModal')">Отмена</button>\r
      <button class="btn btn-primary" onclick="saveRoute()"><i class="fas fa-save"></i> Сохранить</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script src="admin.js"><\/script>\r
<script>\r
requireAuth();\r
initSidebar();\r
\r
function renderRoutes() {\r
  let routes = getRoutes();\r
  const q    = document.getElementById('routeSearch').value.toLowerCase();\r
  const type = document.getElementById('routeTypeFilter').value;\r
  const diff = document.getElementById('routeDiffFilter').value;\r
\r
  if (q)    routes = routes.filter(r => r.name.toLowerCase().includes(q));\r
  if (type) routes = routes.filter(r => r.type === type);\r
  if (diff) routes = routes.filter(r => r.difficulty === diff);\r
\r
  document.getElementById('routeCount').textContent = \`Найдено: \${routes.length}\`;\r
  const tbody = document.getElementById('routesTableBody');\r
  const empty = document.getElementById('routesEmpty');\r
\r
  if (!routes.length) { tbody.innerHTML=''; empty.style.display='block'; return; }\r
  empty.style.display = 'none';\r
\r
  const diffClass = { easy:'easy', medium:'medium', hard:'hard' };\r
  tbody.innerHTML = routes.map((r,i) => \`\r
    <tr>\r
      <td style="color:var(--a-gray);font-size:.8rem">\${i+1}</td>\r
      <td><div class="name-cell">\${escHtml(r.name)}</div><div class="sub-text">\${escHtml(r.transport||'')}</div></td>\r
      <td><span class="badge-tag \${r.type==='trek'?'gorge':r.type==='horse'?'forest':r.type==='climb'?'mountain':'culture'}">\${TYPE_LABELS[r.type]||r.type}</span></td>\r
      <td><span class="badge-tag \${diffClass[r.difficulty]||'easy'}">\${DIFF_LABELS[r.difficulty]||r.difficulty}</span></td>\r
      <td style="font-size:.82rem"><i class="fas fa-clock" style="color:var(--a-gray)"></i> \${escHtml(r.duration||'—')}</td>\r
      <td style="font-size:.82rem">\${escHtml(r.distance||'—')}</td>\r
      <td style="font-size:.82rem;color:var(--a-gray)">\${escHtml(r.height||'—')}</td>\r
      <td style="font-size:.78rem;color:var(--a-gray)">\${escHtml(r.season||'—')}</td>\r
      <td><span class="badge-tag \${r.status==='active'?'active':'hidden'}">\${r.status==='active'?'Активен':'Скрыт'}</span></td>\r
      <td>\r
        <div style="display:flex;gap:.4rem">\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="editRoute('\${r.id}')" title="Редактировать"><i class="fas fa-edit"></i></button>\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="deleteRoute('\${r.id}')" title="Удалить" style="color:var(--a-red)"><i class="fas fa-trash"></i></button>\r
        </div>\r
      </td>\r
    </tr>\`).join('');\r
}\r
\r
function openRouteModal() {\r
  document.getElementById('routeId').value       = '';\r
  document.getElementById('routeName').value     = '';\r
  document.getElementById('routeType').value     = 'trek';\r
  document.getElementById('routeDiff').value     = 'easy';\r
  document.getElementById('routeDuration').value = '';\r
  document.getElementById('routeDistance').value = '';\r
  document.getElementById('routeHeight').value   = '';\r
  document.getElementById('routeSeason').value   = '';\r
  document.getElementById('routeStatus').value   = 'active';\r
  document.getElementById('routeTransport').value= '';\r
  document.getElementById('routeModalTitle').innerHTML = '<i class="fas fa-plus" style="color:var(--a-primary)"></i> Добавить маршрут';\r
  openModal('routeModal');\r
}\r
\r
function editRoute(id) {\r
  const r = getRoutes().find(x => x.id === id);\r
  if (!r) return;\r
  document.getElementById('routeId').value       = r.id;\r
  document.getElementById('routeName').value     = r.name||'';\r
  document.getElementById('routeType').value     = r.type||'trek';\r
  document.getElementById('routeDiff').value     = r.difficulty||'easy';\r
  document.getElementById('routeDuration').value = r.duration||'';\r
  document.getElementById('routeDistance').value = r.distance||'';\r
  document.getElementById('routeHeight').value   = r.height||'';\r
  document.getElementById('routeSeason').value   = r.season||'';\r
  document.getElementById('routeStatus').value   = r.status||'active';\r
  document.getElementById('routeTransport').value= r.transport||'';\r
  document.getElementById('routeModalTitle').innerHTML = '<i class="fas fa-edit" style="color:var(--a-primary)"></i> Редактировать маршрут';\r
  openModal('routeModal');\r
}\r
\r
function saveRoute() {\r
  const name = document.getElementById('routeName').value.trim();\r
  if (!name) { adminToast('Введите название маршрута', 'err'); return; }\r
  const id = document.getElementById('routeId').value;\r
  const data = {\r
    id:         id || genId('r'),\r
    name,\r
    type:       document.getElementById('routeType').value,\r
    difficulty: document.getElementById('routeDiff').value,\r
    duration:   document.getElementById('routeDuration').value.trim(),\r
    distance:   document.getElementById('routeDistance').value.trim(),\r
    height:     document.getElementById('routeHeight').value.trim(),\r
    season:     document.getElementById('routeSeason').value.trim(),\r
    status:     document.getElementById('routeStatus').value,\r
    transport:  document.getElementById('routeTransport').value.trim(),\r
  };\r
  let routes = getRoutes();\r
  if (id) {\r
    routes = routes.map(r => r.id === id ? data : r);\r
    adminToast(\`Маршрут «\${name}» обновлён\`, 'ok');\r
  } else {\r
    routes.unshift(data);\r
    adminToast(\`Маршрут «\${name}» добавлен\`, 'ok');\r
  }\r
  saveRoutes(routes);\r
  closeModal('routeModal');\r
  renderRoutes();\r
}\r
\r
function deleteRoute(id) {\r
  const r = getRoutes().find(x => x.id === id);\r
  adminConfirm(\`Удалить маршрут «\${r?.name||id}»?\`, () => {\r
    saveRoutes(getRoutes().filter(x => x.id !== id));\r
    adminToast('Маршрут удалён', 'warn');\r
    renderRoutes();\r
  });\r
}\r
\r
renderRoutes();\r
<\/script>\r
</body>\r
</html>\r
`,le=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Отзывы — Админ панель</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
<div class="admin-layout">\r
\r
  <aside class="sidebar">\r
    <div class="sidebar-logo"><i class="fas fa-mountain"></i><div><span>VisitKyrgyzstan</span><small>Admin Panel</small></div></div>\r
    <nav class="sidebar-menu">\r
      <div class="menu-section">Главное</div>\r
      <a href="dashboard.html" class="menu-item"><i class="fas fa-tachometer-alt"></i> Дашборд</a>\r
      <div class="menu-section">Контент</div>\r
      <a href="places.html"  class="menu-item"><i class="fas fa-map-marker-alt"></i> Места</a>\r
      <a href="routes.html"  class="menu-item"><i class="fas fa-route"></i> Маршруты</a>\r
      <a href="reviews.html" class="menu-item active"><i class="fas fa-star"></i> Отзывы</a>\r
      <div class="menu-section">Система</div>\r
      <a href="settings.html"  class="menu-item"><i class="fas fa-cog"></i> Настройки</a>\r
      <a href="../index.html" class="menu-item" target="_blank"><i class="fas fa-external-link-alt"></i> Открыть сайт</a>\r
      <a href="#" class="menu-item" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выход</a>\r
    </nav>\r
  </aside>\r
\r
  <div class="main-content">\r
    <div class="topbar">\r
      <div class="topbar-left">\r
        <button id="adminBurger" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--a-gray)"><i class="fas fa-bars"></i></button>\r
        <div>\r
          <div class="topbar-title">Отзывы</div>\r
          <div class="topbar-breadcrumb"><a href="dashboard.html">Дашборд</a> <i class="fas fa-chevron-right"></i> <span>Отзывы</span></div>\r
        </div>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="topbar-user"><div class="avatar">A</div><span>Admin</span></div>\r
        <button class="logout-btn" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i></button>\r
      </div>\r
    </div>\r
\r
    <div class="page-body">\r
      <div class="page-header">\r
        <div><h1>Управление отзывами</h1><p>Просматривайте и модерируйте отзывы туристов</p></div>\r
        <div style="display:flex;gap:.75rem">\r
          <button class="btn btn-danger" onclick="deleteAllUserReviews()"><i class="fas fa-trash"></i> Очистить пользовательские</button>\r
          <button class="btn btn-ghost" onclick="renderReviewsAdmin()"><i class="fas fa-sync"></i> Обновить</button>\r
        </div>\r
      </div>\r
\r
      <!-- СТАТИСТИКА ОТЗЫВОВ -->\r
      <div class="stats-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:1.5rem" id="reviewStatsGrid"></div>\r
\r
      <!-- ФИЛЬТРЫ -->\r
      <div class="filter-bar">\r
        <div class="search-input-wrap">\r
          <i class="fas fa-search"></i>\r
          <input type="text" id="reviewSearch" placeholder="Поиск по автору или тексту..." oninput="renderReviewsAdmin()" />\r
        </div>\r
        <select class="filter-select" id="reviewPlaceFilter" onchange="renderReviewsAdmin()">\r
          <option value="">Все места</option>\r
          <option>Иссык-Куль</option><option>Ала-Арча</option><option>Сон-Куль</option>\r
          <option>Каньон Сказка</option><option>Пик Ленина</option><option>Ош</option>\r
          <option>Арстанбап</option><option>Сары-Чeлек</option><option>Хан-Тенгри</option>\r
        </select>\r
        <select class="filter-select" id="reviewRatingFilter" onchange="renderReviewsAdmin()">\r
          <option value="">Все оценки</option>\r
          <option value="5">★★★★★</option>\r
          <option value="4">★★★★☆</option>\r
          <option value="3">★★★☆☆</option>\r
          <option value="2">★★☆☆☆</option>\r
          <option value="1">★☆☆☆☆</option>\r
        </select>\r
        <select class="filter-select" id="reviewTypeFilter" onchange="renderReviewsAdmin()">\r
          <option value="">Все типы</option>\r
          <option value="user">Пользовательские</option>\r
          <option value="default">Стандартные</option>\r
        </select>\r
        <span id="reviewCountBadge" style="font-size:.82rem;color:var(--a-gray);white-space:nowrap"></span>\r
      </div>\r
\r
      <div class="card">\r
        <div class="card-body" style="padding:0">\r
          <table class="admin-table">\r
            <thead>\r
              <tr>\r
                <th style="width:40px">#</th>\r
                <th>Автор</th>\r
                <th>Место</th>\r
                <th>Оценка</th>\r
                <th>Текст отзыва</th>\r
                <th>Совет</th>\r
                <th>Тип</th>\r
                <th style="width:80px">Дата</th>\r
                <th style="width:80px">Действия</th>\r
              </tr>\r
            </thead>\r
            <tbody id="reviewsTableBody"></tbody>\r
          </table>\r
          <div class="empty-state" id="reviewsEmpty" style="display:none">\r
            <i class="fas fa-comment-slash"></i>\r
            <p>Отзывы не найдены</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ПРОСМОТР ОТЗЫВА -->\r
<div class="modal-overlay" id="reviewViewModal">\r
  <div class="modal" style="max-width:560px">\r
    <div class="modal-header">\r
      <h3><i class="fas fa-star" style="color:var(--a-accent)"></i> Полный отзыв</h3>\r
      <button class="modal-close" onclick="closeModal('reviewViewModal')"><i class="fas fa-times"></i></button>\r
    </div>\r
    <div class="modal-body" id="reviewViewBody"></div>\r
    <div class="modal-footer">\r
      <button class="btn btn-ghost" onclick="closeModal('reviewViewModal')">Закрыть</button>\r
      <button class="btn btn-danger" id="reviewDeleteBtn"><i class="fas fa-trash"></i> Удалить</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<script src="admin.js"><\/script>\r
<script>\r
requireAuth();\r
initSidebar();\r
\r
function renderReviewStats() {\r
  const all    = getReviews();\r
  const total  = all.length;\r
  const avg    = total ? (all.reduce((s,r)=>s+r.rating,0)/total).toFixed(1) : 0;\r
  const fiveStar = all.filter(r=>r.rating===5).length;\r
  const userR  = all.filter(r=>!r.isDefault).length;\r
\r
  const grid = document.getElementById('reviewStatsGrid');\r
  grid.innerHTML = \`\r
    <div class="stat-card"><div class="stat-icon amber"><i class="fas fa-star"></i></div><div class="stat-info"><strong>\${total}</strong><span>Всего отзывов</span></div></div>\r
    <div class="stat-card"><div class="stat-icon blue"><i class="fas fa-chart-line"></i></div><div class="stat-info"><strong>\${avg} ★</strong><span>Средний рейтинг</span></div></div>\r
    <div class="stat-card"><div class="stat-icon green"><i class="fas fa-thumbs-up"></i></div><div class="stat-info"><strong>\${fiveStar}</strong><span>Отзывов 5★</span></div></div>\r
    <div class="stat-card"><div class="stat-icon orange"><i class="fas fa-user"></i></div><div class="stat-info"><strong>\${userR}</strong><span>Пользовательских</span></div></div>\`;\r
}\r
\r
function renderReviewsAdmin() {\r
  let reviews  = getReviews();\r
  const q      = document.getElementById('reviewSearch').value.toLowerCase();\r
  const place  = document.getElementById('reviewPlaceFilter').value;\r
  const rating = document.getElementById('reviewRatingFilter').value;\r
  const type   = document.getElementById('reviewTypeFilter').value;\r
\r
  if (q)      reviews = reviews.filter(r => r.name.toLowerCase().includes(q) || r.text.toLowerCase().includes(q));\r
  if (place)  reviews = reviews.filter(r => r.place === place);\r
  if (rating) reviews = reviews.filter(r => r.rating === parseInt(rating));\r
  if (type === 'user')    reviews = reviews.filter(r => !r.isDefault);\r
  if (type === 'default') reviews = reviews.filter(r => r.isDefault);\r
\r
  document.getElementById('reviewCountBadge').textContent = \`Найдено: \${reviews.length}\`;\r
  const tbody = document.getElementById('reviewsTableBody');\r
  const empty = document.getElementById('reviewsEmpty');\r
\r
  if (!reviews.length) { tbody.innerHTML=''; empty.style.display='block'; return; }\r
  empty.style.display = 'none';\r
\r
  tbody.innerHTML = reviews.map((r,i) => \`\r
    <tr>\r
      <td style="color:var(--a-gray);font-size:.8rem">\${i+1}</td>\r
      <td>\r
        <div style="display:flex;align-items:center;gap:.6rem">\r
          <div style="width:32px;height:32px;border-radius:50%;background:var(--a-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0">\${escHtml(r.name.charAt(0))}</div>\r
          <div>\r
            <div class="name-cell" style="font-size:.88rem">\${escHtml(r.name)}</div>\r
            \${r.country?\`<div class="sub-text">\${escHtml(r.country)}</div>\`:''}\r
          </div>\r
        </div>\r
      </td>\r
      <td><span style="font-size:.82rem;font-weight:600"><i class="fas fa-map-marker-alt" style="color:var(--a-primary)"></i> \${escHtml(r.place)}</span></td>\r
      <td><span class="stars-sm">\${'★'.repeat(r.rating)}</span></td>\r
      <td style="max-width:200px">\r
        <div style="font-size:.82rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px" title="\${escHtml(r.text)}">\${escHtml(r.text.slice(0,70))}...</div>\r
      </td>\r
      <td style="font-size:.78rem;color:var(--a-gray);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${r.tips?escHtml(r.tips.slice(0,40))+'...':'—'}</td>\r
      <td><span class="badge-tag \${r.isDefault?'hidden':'active'}">\${r.isDefault?'Стандартный':'Пользователь'}</span></td>\r
      <td style="font-size:.78rem;color:var(--a-gray)">\${r.date||'—'}</td>\r
      <td>\r
        <div style="display:flex;gap:.35rem">\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="viewReview('\${r.id}')" title="Просмотр"><i class="fas fa-eye"></i></button>\r
          <button class="btn btn-ghost btn-sm btn-icon" onclick="deleteReviewAdmin('\${r.id}')" title="Удалить" style="color:var(--a-red)"><i class="fas fa-trash"></i></button>\r
        </div>\r
      </td>\r
    </tr>\`).join('');\r
}\r
\r
function viewReview(id) {\r
  const r = getReviews().find(x => x.id === id);\r
  if (!r) return;\r
  document.getElementById('reviewViewBody').innerHTML = \`\r
    <div style="display:flex;align-items:center;gap:.85rem;margin-bottom:1.25rem">\r
      <div style="width:50px;height:50px;border-radius:50%;background:var(--a-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.2rem">\${escHtml(r.name.charAt(0))}</div>\r
      <div>\r
        <strong style="font-size:1.05rem">\${escHtml(r.name)}</strong>\r
        \${r.country?\`<div style="font-size:.82rem;color:var(--a-gray)">\${escHtml(r.country)}</div>\`:''}\r
      </div>\r
      <div class="stars-sm" style="margin-left:auto;font-size:1.2rem">\${'★'.repeat(r.rating)}\${'☆'.repeat(5-r.rating)}</div>\r
    </div>\r
    <div style="background:var(--a-light);border-radius:var(--a-radius-sm);padding:1rem;margin-bottom:1rem">\r
      <div style="font-size:.82rem;color:var(--a-gray);margin-bottom:.4rem"><i class="fas fa-map-marker-alt" style="color:var(--a-primary)"></i> \${escHtml(r.place)} · \${r.date||''}</div>\r
      <p style="font-size:.9rem;line-height:1.7">"\${escHtml(r.text)}"</p>\r
    </div>\r
    \${r.tips?\`<div style="background:#f0fdf4;border-radius:var(--a-radius-sm);padding:.85rem;font-size:.88rem"><i class="fas fa-lightbulb" style="color:var(--a-green)"></i> <em>\${escHtml(r.tips)}</em></div>\`:''}\r
    <div style="margin-top:1rem;font-size:.78rem;color:var(--a-gray)">\r
      ID: <code>\${r.id}</code> · Тип: \${r.isDefault?'Стандартный':'Пользовательский'}\r
    </div>\`;\r
  document.getElementById('reviewDeleteBtn').onclick = () => { closeModal('reviewViewModal'); deleteReviewAdmin(id); };\r
  openModal('reviewViewModal');\r
}\r
\r
function deleteReviewAdmin(id) {\r
  const r = getReviews().find(x => x.id === id);\r
  adminConfirm(\`Удалить отзыв от «\${r?.name||id}»?\`, () => {\r
    saveReviews(getReviews().filter(x => x.id !== id));\r
    adminToast('Отзыв удалён', 'warn');\r
    renderReviewStats();\r
    renderReviewsAdmin();\r
  });\r
}\r
\r
function deleteAllUserReviews() {\r
  const userRevs = getReviews().filter(r => !r.isDefault);\r
  if (!userRevs.length) { adminToast('Нет пользовательских отзывов', 'warn'); return; }\r
  adminConfirm(\`Удалить все \${userRevs.length} пользовательских отзывов?\`, () => {\r
    saveReviews(getReviews().filter(r => r.isDefault));\r
    adminToast('Пользовательские отзывы удалены', 'warn');\r
    renderReviewStats();\r
    renderReviewsAdmin();\r
  }, 'Массовое удаление');\r
}\r
\r
renderReviewStats();\r
renderReviewsAdmin();\r
<\/script>\r
</body>\r
</html>\r
`,ue=`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Настройки — Админ панель</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
<div class="admin-layout">\r
\r
  <aside class="sidebar">\r
    <div class="sidebar-logo"><i class="fas fa-mountain"></i><div><span>VisitKyrgyzstan</span><small>Admin Panel</small></div></div>\r
    <nav class="sidebar-menu">\r
      <div class="menu-section">Главное</div>\r
      <a href="dashboard.html" class="menu-item"><i class="fas fa-tachometer-alt"></i> Дашборд</a>\r
      <div class="menu-section">Контент</div>\r
      <a href="places.html"  class="menu-item"><i class="fas fa-map-marker-alt"></i> Места</a>\r
      <a href="routes.html"  class="menu-item"><i class="fas fa-route"></i> Маршруты</a>\r
      <a href="reviews.html" class="menu-item"><i class="fas fa-star"></i> Отзывы</a>\r
      <div class="menu-section">Система</div>\r
      <a href="settings.html"  class="menu-item active"><i class="fas fa-cog"></i> Настройки</a>\r
      <a href="../index.html" class="menu-item" target="_blank"><i class="fas fa-external-link-alt"></i> Открыть сайт</a>\r
      <a href="#" class="menu-item" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выход</a>\r
    </nav>\r
  </aside>\r
\r
  <div class="main-content">\r
    <div class="topbar">\r
      <div class="topbar-left">\r
        <button id="adminBurger" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--a-gray)"><i class="fas fa-bars"></i></button>\r
        <div>\r
          <div class="topbar-title">Настройки</div>\r
          <div class="topbar-breadcrumb"><a href="dashboard.html">Дашборд</a> <i class="fas fa-chevron-right"></i> <span>Настройки</span></div>\r
        </div>\r
      </div>\r
      <div class="topbar-right">\r
        <div class="topbar-user"><div class="avatar">A</div><span>Admin</span></div>\r
        <button class="logout-btn" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i></button>\r
      </div>\r
    </div>\r
\r
    <div class="page-body">\r
      <div class="page-header">\r
        <div><h1>Настройки</h1><p>Управление параметрами сайта и аккаунта администратора</p></div>\r
      </div>\r
\r
      <div class="settings-grid">\r
        <!-- БОКОВОЕ МЕНЮ НАСТРОЕК -->\r
        <div class="settings-nav">\r
          <div class="settings-nav-item active" onclick="showSection('general',this)"><i class="fas fa-globe"></i> Общие</div>\r
          <div class="settings-nav-item" onclick="showSection('security',this)"><i class="fas fa-shield-alt"></i> Безопасность</div>\r
          <div class="settings-nav-item" onclick="showSection('content',this)"><i class="fas fa-layer-group"></i> Контент</div>\r
          <div class="settings-nav-item" onclick="showSection('data',this)"><i class="fas fa-database"></i> Данные</div>\r
        </div>\r
\r
        <div>\r
          <!-- ОБЩИЕ -->\r
          <div class="settings-section active card" id="section-general">\r
            <div class="card-header"><h2><i class="fas fa-globe"></i> Общие настройки</h2><button class="btn btn-primary btn-sm" onclick="saveGeneral()"><i class="fas fa-save"></i> Сохранить</button></div>\r
            <div class="card-body">\r
              <div class="form-group">\r
                <label>Название сайта</label>\r
                <input type="text" id="siteName" class="form-control" />\r
              </div>\r
              <div class="form-group">\r
                <label>Email сайта</label>\r
                <input type="email" id="siteEmail" class="form-control" />\r
              </div>\r
              <div class="form-group">\r
                <label>Телефон</label>\r
                <input type="text" id="sitePhone" class="form-control" />\r
              </div>\r
              <div class="form-group">\r
                <label>Адрес</label>\r
                <input type="text" id="siteAddress" class="form-control" />\r
              </div>\r
              <div class="setting-row">\r
                <div class="setting-info"><strong>Режим обслуживания</strong><span>Сайт будет недоступен для посетителей</span></div>\r
                <label class="toggle"><input type="checkbox" id="maintenanceMode" /><span class="toggle-slider"></span></label>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- БЕЗОПАСНОСТЬ -->\r
          <div class="settings-section card" id="section-security">\r
            <div class="card-header"><h2><i class="fas fa-shield-alt"></i> Безопасность — Смена пароля</h2></div>\r
            <div class="card-body">\r
              <div class="form-group">\r
                <label>Текущий пароль <span class="required">*</span></label>\r
                <input type="password" id="curPass" class="form-control" placeholder="••••••••" />\r
              </div>\r
              <div class="form-group">\r
                <label>Новый пароль <span class="required">*</span></label>\r
                <input type="password" id="newPass" class="form-control" placeholder="Минимум 6 символов" />\r
              </div>\r
              <div class="form-group">\r
                <label>Подтверждение нового пароля <span class="required">*</span></label>\r
                <input type="password" id="confirmPass" class="form-control" placeholder="Повторите новый пароль" />\r
              </div>\r
              <button class="btn btn-primary" onclick="changePassword()"><i class="fas fa-key"></i> Изменить пароль</button>\r
\r
              <hr style="margin:1.5rem 0;border-color:var(--a-border)">\r
\r
              <div class="form-group">\r
                <label>Изменить логин администратора</label>\r
                <input type="text" id="newLogin" class="form-control" placeholder="Новый логин" />\r
                <div class="form-hint">Текущий логин: <strong id="curLoginDisplay"></strong></div>\r
              </div>\r
              <button class="btn btn-outline" onclick="changeLogin()"><i class="fas fa-user-edit"></i> Изменить логин</button>\r
\r
              <hr style="margin:1.5rem 0;border-color:var(--a-border)">\r
              <div style="background:#fef2f2;border-radius:var(--a-radius-sm);padding:1rem">\r
                <strong style="color:var(--a-red)"><i class="fas fa-exclamation-triangle"></i> Завершить все сессии</strong>\r
                <p style="font-size:.85rem;color:var(--a-gray);margin:.4rem 0 .85rem">Вы будете разлогинены на всех устройствах.</p>\r
                <button class="btn btn-danger btn-sm" onclick="adminLogout()"><i class="fas fa-sign-out-alt"></i> Выйти сейчас</button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- КОНТЕНТ -->\r
          <div class="settings-section card" id="section-content">\r
            <div class="card-header"><h2><i class="fas fa-layer-group"></i> Настройки контента</h2><button class="btn btn-primary btn-sm" onclick="saveContent()"><i class="fas fa-save"></i> Сохранить</button></div>\r
            <div class="card-body">\r
              <div class="setting-row">\r
                <div class="setting-info"><strong>Автоодобрение отзывов</strong><span>Отзывы публикуются сразу без проверки</span></div>\r
                <label class="toggle"><input type="checkbox" id="autoApprove" /><span class="toggle-slider"></span></label>\r
              </div>\r
              <div class="setting-row">\r
                <div class="setting-info"><strong>Показывать рейтинги</strong><span>Звёздочки рейтинга на карточках мест</span></div>\r
                <label class="toggle"><input type="checkbox" id="showRatings" checked /><span class="toggle-slider"></span></label>\r
              </div>\r
              <div class="setting-row">\r
                <div class="setting-info"><strong>Кнопка «Сохранить» на местах</strong><span>Пользователи могут сохранять места в закладки</span></div>\r
                <label class="toggle"><input type="checkbox" id="showSaveBtn" checked /><span class="toggle-slider"></span></label>\r
              </div>\r
              <div class="form-group" style="margin-top:1rem">\r
                <label>Мест на странице</label>\r
                <select id="itemsPerPage" class="form-control" style="max-width:180px">\r
                  <option value="6">6</option>\r
                  <option value="9">9</option>\r
                  <option value="12">12</option>\r
                  <option value="24">24</option>\r
                </select>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- ДАННЫЕ -->\r
          <div class="settings-section card" id="section-data">\r
            <div class="card-header"><h2><i class="fas fa-database"></i> Управление данными</h2></div>\r
            <div class="card-body">\r
\r
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">\r
                <div style="background:var(--a-light);border-radius:var(--a-radius-sm);padding:1.25rem">\r
                  <h4 style="margin-bottom:.5rem"><i class="fas fa-map-marker-alt" style="color:var(--a-primary)"></i> Места</h4>\r
                  <p style="font-size:.82rem;color:var(--a-gray);margin-bottom:.85rem">Записей в базе: <strong id="placesCountData">—</strong></p>\r
                  <button class="btn btn-ghost btn-sm" onclick="resetPlaces()"><i class="fas fa-undo"></i> Сбросить к стандарту</button>\r
                </div>\r
                <div style="background:var(--a-light);border-radius:var(--a-radius-sm);padding:1.25rem">\r
                  <h4 style="margin-bottom:.5rem"><i class="fas fa-route" style="color:var(--a-green)"></i> Маршруты</h4>\r
                  <p style="font-size:.82rem;color:var(--a-gray);margin-bottom:.85rem">Записей в базе: <strong id="routesCountData">—</strong></p>\r
                  <button class="btn btn-ghost btn-sm" onclick="resetRoutes()"><i class="fas fa-undo"></i> Сбросить к стандарту</button>\r
                </div>\r
                <div style="background:var(--a-light);border-radius:var(--a-radius-sm);padding:1.25rem">\r
                  <h4 style="margin-bottom:.5rem"><i class="fas fa-star" style="color:var(--a-accent)"></i> Отзывы</h4>\r
                  <p style="font-size:.82rem;color:var(--a-gray);margin-bottom:.85rem">Всего отзывов: <strong id="reviewsCountData">—</strong></p>\r
                  <button class="btn btn-ghost btn-sm" onclick="resetReviews()"><i class="fas fa-undo"></i> Только стандартные</button>\r
                </div>\r
                <div style="background:var(--a-light);border-radius:var(--a-radius-sm);padding:1.25rem">\r
                  <h4 style="margin-bottom:.5rem"><i class="fas fa-bookmark" style="color:#7c3aed"></i> Сохранения</h4>\r
                  <p style="font-size:.82rem;color:var(--a-gray);margin-bottom:.85rem">Мест сохранено: <strong id="savedCountData">—</strong></p>\r
                  <button class="btn btn-ghost btn-sm" onclick="clearSavedData()"><i class="fas fa-trash"></i> Очистить</button>\r
                </div>\r
              </div>\r
\r
              <div style="background:#fef2f2;border-radius:var(--a-radius-sm);padding:1.25rem;margin-top:1.25rem">\r
                <h4 style="color:var(--a-red);margin-bottom:.5rem"><i class="fas fa-exclamation-triangle"></i> Сброс всех данных</h4>\r
                <p style="font-size:.85rem;color:var(--a-gray);margin-bottom:.85rem">Удалит все пользовательские данные и восстановит стандартные. Это действие необратимо.</p>\r
                <button class="btn btn-danger btn-sm" onclick="resetAll()"><i class="fas fa-trash-alt"></i> Сбросить всё</button>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<script src="admin.js"><\/script>\r
<script>\r
requireAuth();\r
initSidebar();\r
\r
function showSection(name, el) {\r
  document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));\r
  document.querySelectorAll('.settings-nav-item').forEach(n => n.classList.remove('active'));\r
  document.getElementById('section-'+name).classList.add('active');\r
  el.classList.add('active');\r
}\r
\r
// Загрузить настройки\r
const S = getSettings();\r
document.getElementById('siteName').value    = S.siteName    || 'VisitKyrgyzstan';\r
document.getElementById('siteEmail').value   = S.siteEmail   || 'info@visit-kyrgyzstan.kg';\r
document.getElementById('sitePhone').value   = S.sitePhone   || '+996 312 000 000';\r
document.getElementById('siteAddress').value = S.siteAddress || 'г. Бишкек, пр. Чуй 101';\r
document.getElementById('maintenanceMode').checked   = !!S.maintenanceMode;\r
document.getElementById('autoApprove').checked       = S.reviewsAutoApprove !== false;\r
document.getElementById('showRatings').checked       = S.showRatings !== false;\r
document.getElementById('showSaveBtn').checked       = S.showSaveBtn !== false;\r
document.getElementById('itemsPerPage').value        = String(S.itemsPerPage || 9);\r
document.getElementById('curLoginDisplay').textContent = localStorage.getItem('kg_admin_user') || 'admin';\r
\r
// Счётчики данных\r
document.getElementById('placesCountData').textContent  = getPlaces().length;\r
document.getElementById('routesCountData').textContent  = getRoutes().length;\r
document.getElementById('reviewsCountData').textContent = getReviews().length;\r
document.getElementById('savedCountData').textContent   = JSON.parse(localStorage.getItem('kg_saved_places')||'[]').length;\r
\r
function saveGeneral() {\r
  const S = getSettings();\r
  S.siteName        = document.getElementById('siteName').value.trim();\r
  S.siteEmail       = document.getElementById('siteEmail').value.trim();\r
  S.sitePhone       = document.getElementById('sitePhone').value.trim();\r
  S.siteAddress     = document.getElementById('siteAddress').value.trim();\r
  S.maintenanceMode = document.getElementById('maintenanceMode').checked;\r
  saveSettings(S);\r
  adminToast('Общие настройки сохранены', 'ok');\r
}\r
\r
function saveContent() {\r
  const S = getSettings();\r
  S.reviewsAutoApprove = document.getElementById('autoApprove').checked;\r
  S.showRatings        = document.getElementById('showRatings').checked;\r
  S.showSaveBtn        = document.getElementById('showSaveBtn').checked;\r
  S.itemsPerPage       = parseInt(document.getElementById('itemsPerPage').value);\r
  saveSettings(S);\r
  adminToast('Настройки контента сохранены', 'ok');\r
}\r
\r
function changePassword() {\r
  const cur     = document.getElementById('curPass').value;\r
  const newP    = document.getElementById('newPass').value;\r
  const confirm = document.getElementById('confirmPass').value;\r
  const savedPass = localStorage.getItem('kg_admin_pass') || 'admin123';\r
\r
  if (cur !== savedPass)    { adminToast('Неверный текущий пароль', 'err'); return; }\r
  if (newP.length < 6)      { adminToast('Новый пароль должен быть не менее 6 символов', 'err'); return; }\r
  if (newP !== confirm)     { adminToast('Пароли не совпадают', 'err'); return; }\r
\r
  localStorage.setItem('kg_admin_pass', newP);\r
  document.getElementById('curPass').value = '';\r
  document.getElementById('newPass').value = '';\r
  document.getElementById('confirmPass').value = '';\r
  adminToast('Пароль успешно изменён', 'ok');\r
}\r
\r
function changeLogin() {\r
  const newLogin = document.getElementById('newLogin').value.trim();\r
  if (!newLogin || newLogin.length < 3) { adminToast('Логин должен содержать минимум 3 символа', 'err'); return; }\r
  localStorage.setItem('kg_admin_user', newLogin);\r
  document.getElementById('curLoginDisplay').textContent = newLogin;\r
  document.getElementById('newLogin').value = '';\r
  adminToast(\`Логин изменён на «\${newLogin}»\`, 'ok');\r
}\r
\r
function resetPlaces()  { adminConfirm('Сбросить места к стандартным данным?', () => { localStorage.removeItem('kg_admin_places'); document.getElementById('placesCountData').textContent = getPlaces().length; adminToast('Места сброшены', 'ok'); }); }\r
function resetRoutes()  { adminConfirm('Сбросить маршруты к стандартным данным?', () => { localStorage.removeItem('kg_admin_routes'); document.getElementById('routesCountData').textContent = getRoutes().length; adminToast('Маршруты сброшены', 'ok'); }); }\r
function resetReviews() { adminConfirm('Удалить пользовательские отзывы?', () => { const def = getReviews().filter(r=>r.isDefault); saveReviews(def); document.getElementById('reviewsCountData').textContent = def.length; adminToast('Отзывы сброшены', 'ok'); }); }\r
function clearSavedData(){ adminConfirm('Очистить список сохранённых мест?', () => { localStorage.removeItem('kg_saved_places'); document.getElementById('savedCountData').textContent = 0; adminToast('Сохранения очищены', 'ok'); }); }\r
\r
function resetAll() {\r
  adminConfirm('Сбросить ВСЕ данные к стандартным? Это необратимо!', () => {\r
    ['kg_admin_places','kg_admin_routes','kg_reviews','kg_saved_places','kg_admin_settings'].forEach(k => localStorage.removeItem(k));\r
    adminToast('Все данные сброшены', 'warn');\r
    setTimeout(() => location.reload(), 1200);\r
  }, '⚠️ Полный сброс данных');\r
}\r
<\/script>\r
</body>\r
</html>\r
`,de=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n})),fe=o(((e,t)=>{t.exports=de()}))(),pe={"":te,places:ne,mountains:re,routes:x,map:ie,reviews:S},me={"":ae,dashboard:oe,places:se,routes:ce,reviews:le,settings:ue};function he(){let e=new URLSearchParams(window.location.search),t=e.get(`admin`);return t===null?{admin:!1,page:e.get(`page`)||``}:{admin:!0,page:t}}function ge(e){let t=e.match(/<body[^>]*>([\s\S]*?)<\/body>/i);return(t?t[1]:e).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,``)}function _e(e){return[...e.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map(e=>e[1])}function ve(e,t){return e.replace(/\b(href|action)="([^"#]+)(#[^"]*)?"/gi,(e,n,r,i=``)=>{if(/^(https?:|mailto:|tel:|javascript:|\/|\?)/i.test(r))return e;let a=r.replace(/^\.\.\//,``).replace(/\.html$/i,``);return`${n}="${t?r.startsWith(`../`)?`?page=`+a:`?admin=`+a:`?page=`+a}${i}"`})}function ye(e){if(!e.trim())return;let t=document.createElement(`script`);t.text=e,document.body.appendChild(t),t.remove()}function be(e,t){return t?e.replaceAll(`'dashboard.html'`,`'?admin=dashboard'`).replaceAll(`'index.html'`,`'?admin='`):e.replace(/(['"])(index|places|mountains|routes|map|reviews)\.html/gi,(e,t,n)=>`${t}?page=${n===`index`?``:n}`)}function xe({source:e,isAdmin:t,page:n}){let r=(0,_.useRef)(!1),i=(0,_.useRef)(new Set),a=(0,_.useMemo)(()=>ve(ge(e),t),[e,t]);return(0,_.useEffect)(()=>{if(!r.current){let e=t?`__kgAdminLoaded`:`__kgPublicLoaded`;window[e]||(ye(be(t?ee:`${y}\n${b}`,t)),window[e]=!0),r.current=!0,document.dispatchEvent(new Event(`DOMContentLoaded`))}t||(window.applyLang?.(window.getLang?.()||`ru`),n===`places`&&window.initPlacesFilter?.(),n===`routes`&&window.initRoutesFilter?.(),n===`reviews`&&(window.renderReviews?.(),window.updateStats?.()));let a=`${t?`admin`:`public`}:${n}`;window.__kgPageScripts??=new Set,!i.current.has(a)&&!window.__kgPageScripts.has(a)&&(_e(e).forEach(e=>ye(be(e,t))),i.current.add(a),window.__kgPageScripts.add(a))},[e,t,n]),(0,fe.jsx)(`div`,{dangerouslySetInnerHTML:{__html:a}})}function Se(){let[e]=(0,_.useState)(he),t=e.admin?me[e.page]||`<!DOCTYPE html>\r
<html lang="ru">\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Вход — Админ панель VisitKyrgyzstan</title>\r
  <meta name="robots" content="noindex, nofollow" />\r
  <link rel="stylesheet" href="admin.css" />\r
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\r
</head>\r
<body>\r
  <div class="login-page">\r
    <div class="login-card">\r
      <div class="login-logo">\r
        <i class="fas fa-mountain"></i>\r
        <h1>VisitKyrgyzstan</h1>\r
        <p>Панель управления сайтом</p>\r
        <span class="login-badge">ADMIN PANEL</span>\r
      </div>\r
\r
      <div class="login-error" id="loginError">\r
        <i class="fas fa-exclamation-circle"></i>\r
        <span id="loginErrorMsg">Неверный логин или пароль</span>\r
      </div>\r
\r
      <form id="loginForm" onsubmit="doLogin(event)">\r
        <div class="form-group">\r
          <label for="username">\r
            <i class="fas fa-user" style="color:var(--a-primary);margin-right:.35rem"></i>\r
            Логин\r
          </label>\r
          <input type="text" id="username" class="form-control" placeholder="admin" autocomplete="username" required />\r
        </div>\r
        <div class="form-group">\r
          <label for="password">\r
            <i class="fas fa-lock" style="color:var(--a-primary);margin-right:.35rem"></i>\r
            Пароль\r
          </label>\r
          <div style="position:relative">\r
            <input type="password" id="password" class="form-control" placeholder="••••••••" autocomplete="current-password" required style="padding-right:2.5rem" />\r
            <button type="button" onclick="togglePass()" style="position:absolute;right:.75rem;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--a-gray);font-size:.9rem" id="togglePassBtn">\r
              <i class="fas fa-eye"></i>\r
            </button>\r
          </div>\r
        </div>\r
        <button type="submit" class="login-submit" id="loginBtn">\r
          <i class="fas fa-sign-in-alt"></i> Войти в панель\r
        </button>\r
      </form>\r
\r
      <div class="login-hint">\r
        <i class="fas fa-info-circle"></i>\r
        Логин: <code>admin</code> &nbsp;|&nbsp; Пароль: <code>admin123</code>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <script src="admin.js"><\/script>\r
  <script>\r
    // Если уже авторизован — сразу на дашборд\r
    if (localStorage.getItem('kg_admin_auth') === 'true') {\r
      window.location.href = 'dashboard.html';\r
    }\r
\r
    function doLogin(e) {\r
      e.preventDefault();\r
      const user = document.getElementById('username').value.trim();\r
      const pass = document.getElementById('password').value;\r
      const btn  = document.getElementById('loginBtn');\r
\r
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Проверка...';\r
      btn.disabled = true;\r
\r
      setTimeout(() => {\r
        // Получить сохранённые учётные данные или дефолтные\r
        const savedUser = localStorage.getItem('kg_admin_user') || 'admin';\r
        const savedPass = localStorage.getItem('kg_admin_pass') || 'admin123';\r
\r
        if (user === savedUser && pass === savedPass) {\r
          localStorage.setItem('kg_admin_auth', 'true');\r
          localStorage.setItem('kg_admin_login_time', Date.now());\r
          btn.innerHTML = '<i class="fas fa-check"></i> Успешно!';\r
          btn.style.background = '#16a34a';\r
          setTimeout(() => { window.location.href = 'dashboard.html'; }, 600);\r
        } else {\r
          document.getElementById('loginError').classList.add('show');\r
          document.getElementById('loginErrorMsg').textContent = 'Неверный логин или пароль. Попробуйте снова.';\r
          btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти в панель';\r
          btn.disabled = false;\r
          document.getElementById('password').value = '';\r
          document.getElementById('password').focus();\r
        }\r
      }, 700);\r
    }\r
\r
    function togglePass() {\r
      const inp = document.getElementById('password');\r
      const ico = document.querySelector('#togglePassBtn i');\r
      if (inp.type === 'password') {\r
        inp.type = 'text';\r
        ico.className = 'fas fa-eye-slash';\r
      } else {\r
        inp.type = 'password';\r
        ico.className = 'fas fa-eye';\r
      }\r
    }\r
  <\/script>\r
</body>\r
</html>\r
`:pe[e.page]||`<!doctype html>
<html lang="ru"><body>
<header class="header"><div class="container"><div class="logo"><i class="fas fa-mountain"></i><span>Visit<strong>Kyrgyzstan</strong></span></div><nav class="nav" id="mainNav"><a href="index.html" class="active"><i class="fas fa-home"></i><span data-i18n="nav_home">Главная</span></a><a href="places.html"><i class="fas fa-map-marker-alt"></i><span data-i18n="nav_places">Места</span></a><a href="mountains.html"><i class="fas fa-mountain"></i><span data-i18n="nav_mountains">Горы</span></a><a href="routes.html"><i class="fas fa-route"></i><span data-i18n="nav_routes">Маршруты</span></a><a href="map.html"><i class="fas fa-map"></i><span data-i18n="nav_map">Карта</span></a><a href="reviews.html"><i class="fas fa-star"></i><span data-i18n="nav_reviews">Отзывы</span></a></nav><div class="lang-switcher"><button class="lang-btn active" data-lang="ru" onclick="setLang('ru')">RU</button><button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button><button class="lang-btn" data-lang="ky" onclick="setLang('ky')">KY</button></div><a href="?admin=" class="btn btn-primary" style="padding:.55rem .8rem;font-size:.8rem;white-space:nowrap"><i class="fas fa-user-shield"></i> Админка</a><button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button></div></header>
<section class="hero"><div class="hero-overlay"></div><div class="hero-content"><h1><span data-i18n="hero_title">Добро пожаловать в</span> <span class="accent-word" data-i18n="hero_country">Кыргызстан</span></h1><p data-i18n="hero_subtitle">Страна тысячи гор, бирюзовых озёр и бескрайних просторов. Откройте для себя настоящее сердце Азии.</p><div class="hero-btns"><a href="places.html" class="btn btn-primary"><i class="fas fa-compass"></i><span data-i18n="hero_btn1">Исследовать места</span></a><a href="routes.html" class="btn btn-outline"><i class="fas fa-route"></i><span data-i18n="hero_btn2">Планировать маршрут</span></a></div><div class="hero-stats"><div class="stat"><strong>94</strong><span data-i18n="stat_peaks">горных пика</span></div><div class="stat"><strong>40+</strong><span data-i18n="stat_routes">маршрутов</span></div><div class="stat"><strong>500K+</strong><span data-i18n="stat_tourists">туристов в год</span></div></div></div></section>
<section class="categories section"><div class="container"><div class="section-header"><h2 data-i18n="cat_title">Откройте Кыргызстан</h2><p>Выберите направление для путешествия</p></div><div class="categories-grid"><a href="mountains.html" class="category-card" style="--bg:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600')"><i class="fas fa-mountain"></i><h3 data-i18n="nav_mountains">Горы</h3></a><a href="places.html" class="category-card" style="--bg:url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600')"><i class="fas fa-water"></i><h3 data-i18n="nav_places">Места</h3></a><a href="routes.html" class="category-card" style="--bg:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600')"><i class="fas fa-route"></i><h3 data-i18n="nav_routes">Маршруты</h3></a></div></div></section>
<section class="section" style="background:#f7fafc"><div class="container"><div class="section-header"><h2 data-i18n="sec_reviews">Отзывы путешественников</h2></div><div class="reviews-grid" id="reviewsPreview"></div><div style="text-align:center;margin-top:2rem"><a class="btn btn-primary" href="reviews.html">Все отзывы</a></div></div></section>
<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-col"><div class="logo"><i class="fas fa-mountain"></i><strong>VisitKyrgyzstan</strong></div><p data-i18n="footer_tagline">Ваш путеводитель по Кыргызстану.</p></div><div class="footer-col"><h4 data-i18n="footer_nav">Навигация</h4><ul><li><a href="places.html">Места</a></li><li><a href="mountains.html">Горы</a></li><li><a href="routes.html">Маршруты</a></li></ul></div><div class="footer-col"><h4 data-i18n="footer_contact">Контакты</h4><p><i class="fas fa-envelope"></i> info@visit-kyrgyzstan.kg</p></div></div><div class="footer-bottom"><p>© 2026 VisitKyrgyzstan.</p></div></div></footer><div class="toast" id="toast"><i class="fas fa-check-circle"></i><span id="toastMsg"></span></div>
</body></html>
`;return(0,fe.jsx)(xe,{source:t,isAdmin:e.admin,page:e.page},`${e.admin}:${e.page}`)}(0,v.createRoot)(document.getElementById(`root`)).render((0,fe.jsx)(Se,{}));