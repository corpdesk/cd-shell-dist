(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[7935],{21076:(fe,L,w)=>{w.d(L,{Am:()=>Be,Bd:()=>J,FA:()=>ge,Fy:()=>pe,I9:()=>ie,Im:()=>Te,Ku:()=>ue,Ll:()=>R,T9:()=>k,Uj:()=>B,XA:()=>re,ZQ:()=>C,bD:()=>Ee,cY:()=>se,eX:()=>Se,g:()=>ae,gR:()=>Ne,hp:()=>Re,jZ:()=>j,lT:()=>Q,lV:()=>oe,nr:()=>Ie,p7:()=>Z,sr:()=>me,tD:()=>ee,u:()=>c,zW:()=>Ce,zw:()=>u});const D=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let i=t.charCodeAt(a);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&a+1<t.length&&56320==(64512&t.charCodeAt(a+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++a)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},H={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let i=0;i<t.length;i+=3){const d=t[i],p=i+1<t.length,x=p?t[i+1]:0,$=i+2<t.length,M=$?t[i+2]:0;let z=(15&x)<<2|M>>6,le=63&M;$||(le=64,p||(z=64)),a.push(n[d>>2],n[(3&d)<<4|x>>4],n[z],n[le])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,a=0;for(;n<t.length;){const i=t[n++];if(i<128)e[a++]=String.fromCharCode(i);else if(i>191&&i<224){const d=t[n++];e[a++]=String.fromCharCode((31&i)<<6|63&d)}else if(i>239&&i<365){const $=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[a++]=String.fromCharCode(55296+($>>10)),e[a++]=String.fromCharCode(56320+(1023&$))}else{const d=t[n++],p=t[n++];e[a++]=String.fromCharCode((15&i)<<12|(63&d)<<6|63&p)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let i=0;i<t.length;){const d=n[t.charAt(i++)],x=i<t.length?n[t.charAt(i)]:0;++i;const M=i<t.length?n[t.charAt(i)]:64;++i;const A=i<t.length?n[t.charAt(i)]:64;if(++i,null==d||null==x||null==M||null==A)throw new U;a.push(d<<2|x>>4),64!==M&&(a.push(x<<4&240|M>>2),64!==A&&a.push(M<<6&192|A))}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class U extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B=function(t){return function(t){const e=D(t);return H.encodeByteArray(e,!0)}(t).replace(/\./g,"")},c=function(t){try{return H.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_(n)||(t[n]=u(t[n],e[n]));return t}function _(t){return"__proto__"!==t}const v=()=>{try{return function S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&c(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},k=()=>{var t;return null===(t=v())||void 0===t?void 0:t.config},re=t=>{var e;return null===(e=v())||void 0===e?void 0:e[`_${t}`]};class se{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(n):e(n,a))}}}function pe(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a=e||"demo-project",i=t.iat||0,d=t.sub||t.user_id;if(!d)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const p=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:i,exp:i+3600,auth_time:i,sub:d,user_id:d,firebase:{sign_in_provider:"custom",identities:{}}},t);return[B(JSON.stringify({alg:"none",type:"JWT"})),B(JSON.stringify(p)),""].join(".")}function C(){return typeof navigator<"u"&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function j(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function R(){var t;const e=null===(t=v())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch{return!1}}function J(){return typeof window<"u"||Z()}function Z(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function me(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function oe(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Q(){const t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ie(){return!R()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ce(){try{return"object"==typeof indexedDB}catch{return!1}}function Se(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(a);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var d;e((null===(d=i.error)||void 0===d?void 0:d.message)||"")}}catch(n){e(n)}})}class ae extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ge.prototype.create)}}class ge{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},i=`${this.service}/${e}`,d=this.errors[e],p=d?function Oe(t,e){return t.replace(xe,(n,a)=>{const i=e[a];return null!=i?String(i):`<${a}?>`})}(d,a):"Error";return new ae(i,`${this.serviceName}: ${p} (${i}).`,a)}}const xe=/\{\$([^}]+)}/g;function Ne(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Te(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ee(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const i of n){if(!a.includes(i))return!1;const d=t[i],p=e[i];if(ve(d)&&ve(p)){if(!Ee(d,p))return!1}else if(d!==p)return!1}for(const i of a)if(!n.includes(i))return!1;return!0}function ve(t){return null!==t&&"object"==typeof t}function Be(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function ie(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[i,d]=a.split("=");e[decodeURIComponent(i)]=decodeURIComponent(d)}}),e}function Re(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ee(t,e){const n=new te(t,e);return n.subscribe.bind(n)}class te{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let i;if(void 0===e&&void 0===n&&void 0===a)throw new Error("Missing Observer.");i=function Me(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:n,complete:a},void 0===i.next&&(i.next=ne),void 0===i.error&&(i.error=ne),void 0===i.complete&&(i.complete=ne);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),d}unsubscribeOne(e){void 0===this.observers||void 0===this.observers[e]||(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ne(){}function ue(t){return t&&t._delegate?t._delegate:t}},63345:(fe,L,w)=>{w.d(L,{A:()=>P});var y=w(21076),b=w(51362),I=w(17852),D=w(8041);class Y{constructor(E,v){this._delegate=E,this.firebase=v,(0,I._addComponent)(E,new b.uA("app-compat",()=>this,"PUBLIC")),this.container=E.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(E){this._delegate.automaticDataCollectionEnabled=E}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(E=>{this._delegate.checkDestroyed(),E()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,I.deleteApp)(this._delegate)))}_getService(E,v=I._DEFAULT_ENTRY_NAME){var G;this._delegate.checkDestroyed();const V=this._delegate.container.getProvider(E);return!V.isInitialized()&&"EXPLICIT"===(null===(G=V.getComponent())||void 0===G?void 0:G.instantiationMode)&&V.initialize(),V.getImmediate({identifier:v})}_removeServiceInstance(E,v=I._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(E).clearInstance(v)}_addComponent(E){(0,I._addComponent)(this._delegate,E)}_addOrOverwriteComponent(E){(0,I._addOrOverwriteComponent)(this._delegate,E)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const U=new y.FA("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),c=function B(){const O=function X(O){const E={},v={__esModule:!0,initializeApp:function k(C,j={}){const R=I.initializeApp(C,j);if((0,y.gR)(E,R.name))return E[R.name];const J=new O(R,v);return E[R.name]=J,J},app:V,registerVersion:I.registerVersion,setLogLevel:I.setLogLevel,onLog:I.onLog,apps:null,SDK_VERSION:I.SDK_VERSION,INTERNAL:{registerComponent:function se(C){const j=C.name,R=j.replace("-compat","");if(I._registerComponent(C)&&"PUBLIC"===C.type){const J=(Z=V())=>{if("function"!=typeof Z[R])throw U.create("invalid-app-argument",{appName:j});return Z[R]()};void 0!==C.serviceProps&&(0,y.zw)(J,C.serviceProps),v[R]=J,O.prototype[R]=function(...Z){return this._getService.bind(this,j).apply(this,C.multipleInstances?Z:[])}}return"PUBLIC"===C.type?v[R]:null},removeApp:function G(C){delete E[C]},useAsService:function pe(C,j){return"serverAuth"===j?null:j},modularAPIs:I}};function V(C){if(!(0,y.gR)(E,C=C||I._DEFAULT_ENTRY_NAME))throw U.create("no-app",{appName:C});return E[C]}return v.default=v,Object.defineProperty(v,"apps",{get:function re(){return Object.keys(E).map(C=>E[C])}}),V.App=O,v}(Y);return O.INTERNAL=Object.assign(Object.assign({},O.INTERNAL),{createFirebaseNamespace:B,extendNamespace:function E(v){(0,y.zw)(O,v)},createSubscribe:y.tD,ErrorFactory:y.FA,deepExtend:y.zw}),O}(),l=new D.Vy("@firebase/app-compat");if((0,y.Bd)()&&void 0!==self.firebase){l.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const O=self.firebase.SDK_VERSION;O&&O.indexOf("LITE")>=0&&l.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const P=c;!function S(O){(0,I.registerVersion)("@firebase/app-compat","0.2.37",O)}()},17852:(fe,L,w)=>{w.r(L),w.d(L,{FirebaseError:()=>D.g,SDK_VERSION:()=>ke,_DEFAULT_ENTRY_NAME:()=>ie,_addComponent:()=>ye,_addOrOverwriteComponent:()=>Me,_apps:()=>q,_clearComponents:()=>et,_components:()=>te,_getProvider:()=>Le,_isFirebaseApp:()=>Pe,_isFirebaseServerApp:()=>qe,_registerComponent:()=>ne,_removeServiceInstance:()=>de,_serverApps:()=>ee,deleteApp:()=>De,getApp:()=>nt,getApps:()=>rt,initializeApp:()=>Ae,initializeServerApp:()=>je,onLog:()=>e,registerVersion:()=>t,setLogLevel:()=>n});var y=w(10467),b=w(51362),I=w(8041),D=w(21076);const Y=(s,r)=>r.some(o=>s instanceof o);let H,U;const c=new WeakMap,l=new WeakMap,u=new WeakMap,_=new WeakMap,S=new WeakMap;let E={get(s,r,o){if(s instanceof IDBTransaction){if("done"===r)return l.get(s);if("objectStoreNames"===r)return s.objectStoreNames||u.get(s);if("store"===r)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return k(s[r])},set:(s,r,o)=>(s[r]=o,!0),has:(s,r)=>s instanceof IDBTransaction&&("done"===r||"store"===r)||r in s};function V(s){return"function"==typeof s?function G(s){return s!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function B(){return U||(U=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(s)?function(...r){return s.apply(re(this),r),k(c.get(this))}:function(...r){return k(s.apply(re(this),r))}:function(r,...o){const f=s.call(re(this),r,...o);return u.set(f,r.sort?r.sort():[r]),k(f)}}(s):(s instanceof IDBTransaction&&function O(s){if(l.has(s))return;const r=new Promise((o,f)=>{const h=()=>{s.removeEventListener("complete",m),s.removeEventListener("error",g),s.removeEventListener("abort",g)},m=()=>{o(),h()},g=()=>{f(s.error||new DOMException("AbortError","AbortError")),h()};s.addEventListener("complete",m),s.addEventListener("error",g),s.addEventListener("abort",g)});l.set(s,r)}(s),Y(s,function X(){return H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(s,E):s)}function k(s){if(s instanceof IDBRequest)return function P(s){const r=new Promise((o,f)=>{const h=()=>{s.removeEventListener("success",m),s.removeEventListener("error",g)},m=()=>{o(k(s.result)),h()},g=()=>{f(s.error),h()};s.addEventListener("success",m),s.addEventListener("error",g)});return r.then(o=>{o instanceof IDBCursor&&c.set(o,s)}).catch(()=>{}),S.set(r,s),r}(s);if(_.has(s))return _.get(s);const r=V(s);return r!==s&&(_.set(s,r),S.set(r,s)),r}const re=s=>S.get(s),C=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],R=new Map;function J(s,r){if(!(s instanceof IDBDatabase)||r in s||"string"!=typeof r)return;if(R.get(r))return R.get(r);const o=r.replace(/FromIndex$/,""),f=r!==o,h=j.includes(o);if(!(o in(f?IDBIndex:IDBObjectStore).prototype)||!h&&!C.includes(o))return;const m=function(){var g=(0,y.A)(function*(N,...T){const K=this.transaction(N,h?"readwrite":"readonly");let he=K.store;return f&&(he=he.index(T.shift())),(yield Promise.all([he[o](...T),h&&K.done]))[0]});return function(T){return g.apply(this,arguments)}}();return R.set(r,m),m}!function v(s){E=s(E)}(s=>({...s,get:(r,o,f)=>J(r,o)||s.get(r,o,f),has:(r,o)=>!!J(r,o)||s.has(r,o)}));class Z{constructor(r){this.container=r}getPlatformInfoString(){return this.container.getProviders().map(o=>{if(function me(s){const r=s.getComponent();return"VERSION"===r?.type}(o)){const f=o.getImmediate();return`${f.library}/${f.version}`}return null}).filter(o=>o).join(" ")}}const oe="@firebase/app",be="0.10.7",Q=new I.Vy("@firebase/app"),ie="[DEFAULT]",Re={[oe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},q=new Map,ee=new Map,te=new Map;function ye(s,r){try{s.container.addComponent(r)}catch(o){Q.debug(`Component ${r.name} failed to register with FirebaseApp ${s.name}`,o)}}function Me(s,r){s.container.addOrOverwriteComponent(r)}function ne(s){const r=s.name;if(te.has(r))return Q.debug(`There were multiple attempts to register component ${r}.`),!1;te.set(r,s);for(const o of q.values())ye(o,s);for(const o of ee.values())ye(o,s);return!0}function Le(s,r){const o=s.container.getProvider("heartbeat").getImmediate({optional:!0});return o&&o.triggerHeartbeat(),s.container.getProvider(r)}function de(s,r,o=ie){Le(s,r).clearInstance(o)}function Pe(s){return void 0!==s.options}function qe(s){return void 0!==s.settings}function et(){te.clear()}const F=new D.FA("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class Fe{constructor(r,o,f){this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},o),this._name=o.name,this._automaticDataCollectionEnabled=o.automaticDataCollectionEnabled,this._container=f,this.container.addComponent(new b.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(r){this.checkDestroyed(),this._automaticDataCollectionEnabled=r}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(r){this._isDeleted=r}checkDestroyed(){if(this.isDeleted)throw F.create("app-deleted",{appName:this._name})}}class $e extends Fe{constructor(r,o,f,h){const m=void 0!==o.automaticDataCollectionEnabled&&o.automaticDataCollectionEnabled,g={name:f,automaticDataCollectionEnabled:m};super(void 0!==r.apiKey?r:r.options,g,h),this._serverConfig=Object.assign({automaticDataCollectionEnabled:m},o),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,o.releaseOnDeref=void 0,t(oe,be,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(r){this.isDeleted||(this._refCount++,void 0!==r&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(r,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){De(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw F.create("server-app-deleted")}}const ke="10.12.4";function Ae(s,r={}){let o=s;"object"!=typeof r&&(r={name:r});const f=Object.assign({name:ie,automaticDataCollectionEnabled:!1},r),h=f.name;if("string"!=typeof h||!h)throw F.create("bad-app-name",{appName:String(h)});if(o||(o=(0,D.T9)()),!o)throw F.create("no-options");const m=q.get(h);if(m){if((0,D.bD)(o,m.options)&&(0,D.bD)(f,m.config))return m;throw F.create("duplicate-app",{appName:h})}const g=new b.h1(h);for(const T of te.values())g.addComponent(T);const N=new Fe(o,f,g);return q.set(h,N),N}function je(s,r){if((0,D.Bd)()&&!(0,D.p7)())throw F.create("invalid-server-app-environment");let o;void 0===r.automaticDataCollectionEnabled&&(r.automaticDataCollectionEnabled=!1),o=Pe(s)?s.options:s;const f=Object.assign(Object.assign({},r),o);if(void 0!==f.releaseOnDeref&&delete f.releaseOnDeref,void 0!==r.releaseOnDeref&&typeof FinalizationRegistry>"u")throw F.create("finalization-registry-not-supported",{});const m=""+(K=JSON.stringify(f),[...K].reduce((he,ft)=>Math.imul(31,he)+ft.charCodeAt(0)|0,0)),g=ee.get(m);var K;if(g)return g.incRefCount(r.releaseOnDeref),g;const N=new b.h1(m);for(const K of te.values())N.addComponent(K);const T=new $e(o,r,m,N);return ee.set(m,T),T}function nt(s=ie){const r=q.get(s);if(!r&&s===ie&&(0,D.T9)())return Ae();if(!r)throw F.create("no-app",{appName:s});return r}function rt(){return Array.from(q.values())}function De(s){return ue.apply(this,arguments)}function ue(){return(ue=(0,y.A)(function*(s){let r=!1;const o=s.name;q.has(o)?(r=!0,q.delete(o)):ee.has(o)&&s.decRefCount()<=0&&(ee.delete(o),r=!0),r&&(yield Promise.all(s.container.getProviders().map(f=>f.delete())),s.isDeleted=!0)})).apply(this,arguments)}function t(s,r,o){var f;let h=null!==(f=Re[s])&&void 0!==f?f:s;o&&(h+=`-${o}`);const m=h.match(/\s|\//),g=r.match(/\s|\//);if(m||g){const N=[`Unable to register library "${h}" with version "${r}":`];return m&&N.push(`library name "${h}" contains illegal characters (whitespace or "/")`),m&&g&&N.push("and"),g&&N.push(`version name "${r}" contains illegal characters (whitespace or "/")`),void Q.warn(N.join(" "))}ne(new b.uA(`${h}-version`,()=>({library:h,version:r}),"VERSION"))}function e(s,r){if(null!==s&&"function"!=typeof s)throw F.create("invalid-log-argument");(0,I.Ey)(s,r)}function n(s){(0,I.He)(s)}const a="firebase-heartbeat-database",i=1,d="firebase-heartbeat-store";let p=null;function x(){return p||(p=function se(s,r,{blocked:o,upgrade:f,blocking:h,terminated:m}={}){const g=indexedDB.open(s,r),N=k(g);return f&&g.addEventListener("upgradeneeded",T=>{f(k(g.result),T.oldVersion,T.newVersion,k(g.transaction),T)}),o&&g.addEventListener("blocked",T=>o(T.oldVersion,T.newVersion,T)),N.then(T=>{m&&T.addEventListener("close",()=>m()),h&&T.addEventListener("versionchange",K=>h(K.oldVersion,K.newVersion,K))}).catch(()=>{}),N}(a,i,{upgrade:(s,r)=>{if(0===r)try{s.createObjectStore(d)}catch(o){console.warn(o)}}}).catch(s=>{throw F.create("idb-open",{originalErrorMessage:s.message})})),p}function M(){return(M=(0,y.A)(function*(s){try{const o=(yield x()).transaction(d),f=yield o.objectStore(d).get(z(s));return yield o.done,f}catch(r){if(r instanceof D.g)Q.warn(r.message);else{const o=F.create("idb-get",{originalErrorMessage:r?.message});Q.warn(o.message)}}})).apply(this,arguments)}function W(s,r){return A.apply(this,arguments)}function A(){return(A=(0,y.A)(function*(s,r){try{const f=(yield x()).transaction(d,"readwrite");yield f.objectStore(d).put(r,z(s)),yield f.done}catch(o){if(o instanceof D.g)Q.warn(o.message);else{const f=F.create("idb-set",{originalErrorMessage:o?.message});Q.warn(f.message)}}})).apply(this,arguments)}function z(s){return`${s.name}!${s.options.appId}`}class ot{constructor(r){this.container=r,this._heartbeatsCache=null;const o=this.container.getProvider("app").getImmediate();this._storage=new ct(o),this._heartbeatsCachePromise=this._storage.read().then(f=>(this._heartbeatsCache=f,f))}triggerHeartbeat(){var r=this;return(0,y.A)(function*(){var o,f;const m=r.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),g=it();if((null!=(null===(o=r._heartbeatsCache)||void 0===o?void 0:o.heartbeats)||(r._heartbeatsCache=yield r._heartbeatsCachePromise,null!=(null===(f=r._heartbeatsCache)||void 0===f?void 0:f.heartbeats)))&&r._heartbeatsCache.lastSentHeartbeatDate!==g&&!r._heartbeatsCache.heartbeats.some(N=>N.date===g))return r._heartbeatsCache.heartbeats.push({date:g,agent:m}),r._heartbeatsCache.heartbeats=r._heartbeatsCache.heartbeats.filter(N=>{const T=new Date(N.date).valueOf();return Date.now()-T<=2592e6}),r._storage.overwrite(r._heartbeatsCache)})()}getHeartbeatsHeader(){var r=this;return(0,y.A)(function*(){var o;if(null===r._heartbeatsCache&&(yield r._heartbeatsCachePromise),null==(null===(o=r._heartbeatsCache)||void 0===o?void 0:o.heartbeats)||0===r._heartbeatsCache.heartbeats.length)return"";const f=it(),{heartbeatsToSend:h,unsentEntries:m}=function at(s,r=1024){const o=[];let f=s.slice();for(const h of s){const m=o.find(g=>g.agent===h.agent);if(m){if(m.dates.push(h.date),st(o)>r){m.dates.pop();break}}else if(o.push({agent:h.agent,dates:[h.date]}),st(o)>r){o.pop();break}f=f.slice(1)}return{heartbeatsToSend:o,unsentEntries:f}}(r._heartbeatsCache.heartbeats),g=(0,D.Uj)(JSON.stringify({version:2,heartbeats:h}));return r._heartbeatsCache.lastSentHeartbeatDate=f,m.length>0?(r._heartbeatsCache.heartbeats=m,yield r._storage.overwrite(r._heartbeatsCache)):(r._heartbeatsCache.heartbeats=[],r._storage.overwrite(r._heartbeatsCache)),g})()}}function it(){return(new Date).toISOString().substring(0,10)}class ct{constructor(r){this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return(0,y.A)(function*(){return!!(0,D.zW)()&&(0,D.eX)().then(()=>!0).catch(()=>!1)})()}read(){var r=this;return(0,y.A)(function*(){if(yield r._canUseIndexedDBPromise){const f=yield function $(s){return M.apply(this,arguments)}(r.app);return f?.heartbeats?f:{heartbeats:[]}}return{heartbeats:[]}})()}overwrite(r){var o=this;return(0,y.A)(function*(){var f;if(yield o._canUseIndexedDBPromise){const m=yield o.read();return W(o.app,{lastSentHeartbeatDate:null!==(f=r.lastSentHeartbeatDate)&&void 0!==f?f:m.lastSentHeartbeatDate,heartbeats:r.heartbeats})}})()}add(r){var o=this;return(0,y.A)(function*(){var f;if(yield o._canUseIndexedDBPromise){const m=yield o.read();return W(o.app,{lastSentHeartbeatDate:null!==(f=r.lastSentHeartbeatDate)&&void 0!==f?f:m.lastSentHeartbeatDate,heartbeats:[...m.heartbeats,...r.heartbeats]})}})()}}function st(s){return(0,D.Uj)(JSON.stringify({version:2,heartbeats:s})).length}!function lt(s){ne(new b.uA("platform-logger",r=>new Z(r),"PRIVATE")),ne(new b.uA("heartbeat",r=>new ot(r),"PRIVATE")),t(oe,be,s),t(oe,be,"esm2017"),t("fire-js","")}("")},51362:(fe,L,w)=>{w.d(L,{h1:()=>X,uA:()=>I});var y=w(10467),b=w(21076);class I{constructor(c,l,u){this.name=c,this.instanceFactory=l,this.type=u,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}const D="[DEFAULT]";class Y{constructor(c,l){this.name=c,this.container=l,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const l=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(l)){const u=new b.cY;if(this.instancesDeferred.set(l,u),this.isInitialized(l)||this.shouldAutoInitialize())try{const _=this.getOrInitializeService({instanceIdentifier:l});_&&u.resolve(_)}catch{}}return this.instancesDeferred.get(l).promise}getImmediate(c){var l;const u=this.normalizeInstanceIdentifier(c?.identifier),_=null!==(l=c?.optional)&&void 0!==l&&l;if(!this.isInitialized(u)&&!this.shouldAutoInitialize()){if(_)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:u})}catch(S){if(_)return null;throw S}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,this.shouldAutoInitialize()){if(function U(B){return"EAGER"===B.instantiationMode}(c))try{this.getOrInitializeService({instanceIdentifier:D})}catch{}for(const[l,u]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(l);try{const S=this.getOrInitializeService({instanceIdentifier:_});u.resolve(S)}catch{}}}}clearInstance(c=D){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}delete(){var c=this;return(0,y.A)(function*(){const l=Array.from(c.instances.values());yield Promise.all([...l.filter(u=>"INTERNAL"in u).map(u=>u.INTERNAL.delete()),...l.filter(u=>"_delete"in u).map(u=>u._delete())])})()}isComponentSet(){return null!=this.component}isInitialized(c=D){return this.instances.has(c)}getOptions(c=D){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:l={}}=c,u=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(u))throw Error(`${this.name}(${u}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const _=this.getOrInitializeService({instanceIdentifier:u,options:l});for(const[S,P]of this.instancesDeferred.entries())u===this.normalizeInstanceIdentifier(S)&&P.resolve(_);return _}onInit(c,l){var u;const _=this.normalizeInstanceIdentifier(l),S=null!==(u=this.onInitCallbacks.get(_))&&void 0!==u?u:new Set;S.add(c),this.onInitCallbacks.set(_,S);const P=this.instances.get(_);return P&&c(P,_),()=>{S.delete(c)}}invokeOnInitCallbacks(c,l){const u=this.onInitCallbacks.get(l);if(u)for(const _ of u)try{_(c,l)}catch{}}getOrInitializeService({instanceIdentifier:c,options:l={}}){let u=this.instances.get(c);if(!u&&this.component&&(u=this.component.instanceFactory(this.container,{instanceIdentifier:(B=c,B===D?void 0:B),options:l}),this.instances.set(c,u),this.instancesOptions.set(c,l),this.invokeOnInitCallbacks(u,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,u)}catch{}var B;return u||null}normalizeInstanceIdentifier(c=D){return this.component?this.component.multipleInstances?c:D:c}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class X{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const l=this.getProvider(c.name);if(l.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);l.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const l=new Y(c,this);return this.providers.set(c,l),l}getProviders(){return Array.from(this.providers.values())}}},8041:(fe,L,w)=>{w.d(L,{$b:()=>b,Ey:()=>B,He:()=>X,Vy:()=>U});const y=[];var b=function(c){return c[c.DEBUG=0]="DEBUG",c[c.VERBOSE=1]="VERBOSE",c[c.INFO=2]="INFO",c[c.WARN=3]="WARN",c[c.ERROR=4]="ERROR",c[c.SILENT=5]="SILENT",c}(b||{});const I={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},D=b.INFO,Y={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},H=(c,l,...u)=>{if(l<c.logLevel)return;const _=(new Date).toISOString(),S=Y[l];if(!S)throw new Error(`Attempted to log a message with an invalid logType (value: ${l})`);console[S](`[${_}]  ${c.name}:`,...u)};class U{constructor(l){this.name=l,this._logLevel=D,this._logHandler=H,this._userLogHandler=null,y.push(this)}get logLevel(){return this._logLevel}set logLevel(l){if(!(l in b))throw new TypeError(`Invalid value "${l}" assigned to \`logLevel\``);this._logLevel=l}setLogLevel(l){this._logLevel="string"==typeof l?I[l]:l}get logHandler(){return this._logHandler}set logHandler(l){if("function"!=typeof l)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=l}get userLogHandler(){return this._userLogHandler}set userLogHandler(l){this._userLogHandler=l}debug(...l){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...l),this._logHandler(this,b.DEBUG,...l)}log(...l){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...l),this._logHandler(this,b.VERBOSE,...l)}info(...l){this._userLogHandler&&this._userLogHandler(this,b.INFO,...l),this._logHandler(this,b.INFO,...l)}warn(...l){this._userLogHandler&&this._userLogHandler(this,b.WARN,...l),this._logHandler(this,b.WARN,...l)}error(...l){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...l),this._logHandler(this,b.ERROR,...l)}}function X(c){y.forEach(l=>{l.setLogLevel(c)})}function B(c,l){for(const u of y){let _=null;l&&l.level&&(_=I[l.level]),u.userLogHandler=null===c?null:(S,P,...O)=>{const E=O.map(v=>{if(null==v)return null;if("string"==typeof v)return v;if("number"==typeof v||"boolean"==typeof v)return v.toString();if(v instanceof Error)return v.message;try{return JSON.stringify(v)}catch{return null}}).filter(v=>v).join(" ");P>=(_??S.logLevel)&&c({level:b[P].toLowerCase(),message:E,args:O,type:S.name})}}}},87935:(fe,L,w)=>{w.r(L),w.d(L,{default:()=>y.A});var y=w(63345);y.A.registerVersion("firebase","10.12.4","app-compat")}}]);