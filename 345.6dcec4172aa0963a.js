(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[345],{345:(je,N,g)=>{g.r(N),g.d(N,{BrowserModule:()=>Te,By:()=>Oe,DomSanitizer:()=>J,EVENT_MANAGER_PLUGINS:()=>m,EventManager:()=>S,EventManagerPlugin:()=>E,HAMMER_GESTURE_CONFIG:()=>T,HAMMER_LOADER:()=>I,HammerGestureConfig:()=>W,HammerModule:()=>Ie,HydrationFeatureKind:()=>h,Meta:()=>Me,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>k,Title:()=>we,VERSION:()=>Ue,bootstrapApplication:()=>fe,createApplication:()=>pe,disableDebugTools:()=>Ce,enableDebugTools:()=>Re,platformBrowser:()=>Ee,provideClientHydration:()=>ke,provideProtractorTestingSupport:()=>me,withEventReplay:()=>He,withHttpTransferCacheOptions:()=>Pe,withI18nSupport:()=>Le,withNoHttpTransferCache:()=>Ne,\u0275BrowserDomAdapter:()=>v,\u0275BrowserGetTestability:()=>L,\u0275DomEventsPlugin:()=>x,\u0275DomRendererFactory2:()=>C,\u0275DomSanitizerImpl:()=>q,\u0275HammerGesturesPlugin:()=>X,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>b,\u0275KeyEventsPlugin:()=>V,\u0275SharedStylesHost:()=>D,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>z});var l=g(39354),r=g(72264),P=g(16380);class Q extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class v extends Q{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new v)}onAndCancel(o,e,t){return o.addEventListener(e,t),()=>{o.removeEventListener(e,t)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.parentNode&&o.parentNode.removeChild(o)}createElement(o,e){return(e=e||this.getDefaultDocument()).createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return"window"===e?window:"document"===e?o:"body"===e?o.body:null}getBaseHref(o){const e=function ee(){return y=y||document.querySelector("base"),y?y.getAttribute("href"):null}();return null==e?null:function te(n){return new URL(n,document.baseURI).pathname}(e)}resetBaseElement(){y=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return(0,l.\u0275parseCookieValue)(document.cookie,o)}}let y=null;class L{addToWindow(o){r.\u0275global.getAngularTestability=(t,s=!0)=>{const i=o.findTestabilityInTree(t,s);if(null==i)throw new r.\u0275RuntimeError(5103,!1);return i},r.\u0275global.getAllAngularTestabilities=()=>o.getAllTestabilities(),r.\u0275global.getAllAngularRootElements=()=>o.getAllRootElements(),r.\u0275global.frameworkStabilizers||(r.\u0275global.frameworkStabilizers=[]),r.\u0275global.frameworkStabilizers.push(t=>{const s=r.\u0275global.getAllAngularTestabilities();let i=s.length;const a=function(){i--,0==i&&t()};s.forEach(c=>{c.whenStable(a)})})}findTestabilityInTree(o,e,t){return null==e?null:o.getTestability(e)??(t?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(o,e.host,!0):this.findTestabilityInTree(o,e.parentElement,!0):null)}}let ne=(()=>{class n{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const m=new r.InjectionToken("");let S=(()=>{class n{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s){return this._findPluginFor(t).addEventListener(e,t,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new r.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(m),r.\u0275\u0275inject(r.NgZone))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class E{constructor(o){this._doc=o}}const w="ng-app-id";let D=(()=>{class n{constructor(e,t,s,i={}){this.doc=e,this.appId=t,this.nonce=s,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,l.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(s=>s.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${w}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(s=>{null!=s.textContent&&t.set(s.textContent,s)}),t}return null}changeUsageCount(e,t){const s=this.styleRef;if(s.has(e)){const i=s.get(e);return i.usage+=t,i.usage}return s.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const s=this.styleNodesInDOM,i=s?.get(t);if(i?.parentNode===e)return s.delete(t),i.removeAttribute(w),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(w,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){const s=this.getStyleElement(e,t),i=this.styleRef,a=i.get(t)?.elements;a?a.push(s):i.set(t,{elements:[s],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(r.APP_ID),r.\u0275\u0275inject(r.CSP_NONCE,8),r.\u0275\u0275inject(r.PLATFORM_ID))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const _={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},R=/%COMP%/g,H="%COMP%",re=`_nghost-${H}`,oe=`_ngcontent-${H}`,k=new r.InjectionToken("",{providedIn:"root",factory:()=>!0});function U(n,o){return o.map(e=>e.replace(R,n))}let C=(()=>{class n{constructor(e,t,s,i,a,c,u,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=u,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=(0,l.isPlatformServer)(c),this.defaultRenderer=new O(e,a,u,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===r.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:r.ViewEncapsulation.Emulated});const s=this.getOrCreateRenderer(e,t);return s instanceof B?s.applyToHost(e):s instanceof A&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.doc,c=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(t.encapsulation){case r.ViewEncapsulation.Emulated:i=new B(u,d,t,this.appId,f,a,c,p);break;case r.ViewEncapsulation.ShadowDom:return new le(u,d,e,t,a,c,this.nonce,p);default:i=new A(u,d,t,f,a,c,p)}s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(S),r.\u0275\u0275inject(D),r.\u0275\u0275inject(r.APP_ID),r.\u0275\u0275inject(k),r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(r.PLATFORM_ID),r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(r.CSP_NONCE))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class O{constructor(o,e,t,s){this.eventManager=o,this.doc=e,this.ngZone=t,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(o,e){return e?this.doc.createElementNS(_[e]||e,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,e){(j(o)?o.content:o).appendChild(e)}insertBefore(o,e,t){o&&(j(o)?o.content:o).insertBefore(e,t)}removeChild(o,e){o&&o.removeChild(e)}selectRootElement(o,e){let t="string"==typeof o?this.doc.querySelector(o):o;if(!t)throw new r.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,t,s){if(s){e=s+":"+e;const i=_[s];i?o.setAttributeNS(i,e,t):o.setAttribute(e,t)}else o.setAttribute(e,t)}removeAttribute(o,e,t){if(t){const s=_[t];s?o.removeAttributeNS(s,e):o.removeAttribute(`${t}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,t,s){s&(r.RendererStyleFlags2.DashCase|r.RendererStyleFlags2.Important)?o.style.setProperty(e,t,s&r.RendererStyleFlags2.Important?"important":""):o.style[e]=t}removeStyle(o,e,t){t&r.RendererStyleFlags2.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,t){null!=o&&(o[e]=t)}setValue(o,e){o.nodeValue=e}listen(o,e,t){if("string"==typeof o&&!(o=(0,l.\u0275getDOM)().getGlobalEventTarget(this.doc,o)))throw new Error(`Unsupported event target ${o} for event ${e}`);return this.eventManager.addEventListener(o,e,this.decoratePreventDefault(t))}decoratePreventDefault(o){return e=>{if("__ngUnwrap__"===e)return o;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>o(e)):o(e))&&e.preventDefault()}}}function j(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class le extends O{constructor(o,e,t,s,i,a,c,u){super(o,i,a,u),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const d=U(s.id,s.styles);for(const f of d){const p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=f,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,t){return super.insertBefore(this.nodeOrShadowRoot(o),e,t)}removeChild(o,e){return super.removeChild(this.nodeOrShadowRoot(o),e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class A extends O{constructor(o,e,t,s,i,a,c,u){super(o,i,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=u?U(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class B extends A{constructor(o,e,t,s,i,a,c,u){const d=s+"-"+t.id;super(o,e,t,i,a,c,u,d),this.contentAttr=function ie(n){return oe.replace(R,n)}(d),this.hostAttr=function ae(n){return re.replace(R,n)}(d)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,e){const t=super.createElement(o,e);return super.setAttribute(t,this.contentAttr,""),t}}let x=(()=>{class n extends E{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s){return e.addEventListener(t,s,!1),()=>this.removeEventListener(e,t,s)}removeEventListener(e,t,s){return e.removeEventListener(t,s)}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),ue=(()=>{class n extends E{constructor(e){super(e),this.delegate=(0,r.inject)(r.\u0275GLOBAL_EVENT_DELEGATION,{optional:!0})}supports(e){return!!this.delegate&&this.delegate.supports(e)}addEventListener(e,t,s){return this.delegate.addEventListener(e,t,s)}removeEventListener(e,t,s){return this.delegate.removeEventListener(e,t,s)}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const F=["alt","control","meta","shift"],de={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},he={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let V=(()=>{class n extends E{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,t,s){const i=n.parseEventName(t),a=n.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=n._normalizeKey(t.pop());let a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),F.forEach(d=>{const f=t.indexOf(d);f>-1&&(t.splice(f,1),a+=d+".")}),a+=i,0!=t.length||0===i.length)return null;const u={};return u.domEventName=s,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let s=de[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),F.forEach(a=>{a!==s&&(0,he[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{n.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function fe(n,o){return(0,r.\u0275internalCreateApplication)({rootComponent:n,...G(o)})}function pe(n){return(0,r.\u0275internalCreateApplication)(G(n))}function G(n){return{appProviders:[...Z,...n?.providers??[]],platformProviders:b}}function me(){return[...$]}function z(){v.makeCurrent()}const b=[{provide:r.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:r.PLATFORM_INITIALIZER,useValue:z,multi:!0},{provide:l.DOCUMENT,useFactory:function ye(){return(0,r.\u0275setDocument)(document),document},deps:[]}],Ee=(0,r.createPlatformFactory)(r.platformCore,"browser",b),ve=new r.InjectionToken(""),$=[{provide:r.\u0275TESTABILITY_GETTER,useClass:L,deps:[]},{provide:r.\u0275TESTABILITY,useClass:r.Testability,deps:[r.NgZone,r.TestabilityRegistry,r.\u0275TESTABILITY_GETTER]},{provide:r.Testability,useClass:r.Testability,deps:[r.NgZone,r.TestabilityRegistry,r.\u0275TESTABILITY_GETTER]}],Z=[{provide:r.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:r.ErrorHandler,useFactory:function ge(){return new r.ErrorHandler},deps:[]},{provide:m,useClass:x,multi:!0,deps:[l.DOCUMENT,r.NgZone,r.PLATFORM_ID]},{provide:m,useClass:V,multi:!0,deps:[l.DOCUMENT]},{provide:m,useClass:ue,multi:!0},C,D,S,{provide:r.RendererFactory2,useExisting:C},{provide:l.XhrFactory,useClass:ne,deps:[]},[]];let Te=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:r.APP_ID,useValue:e.appId}]}}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(ve,12))};static#t=this.\u0275mod=r.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({providers:[...Z,...$],imports:[l.CommonModule,r.ApplicationModule]})}return n})(),Me=(()=>{class n{constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),c=this.getTags(a).filter(u=>this._containsAttributes(e,u))[0];if(void 0!==c)return c}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return Se[e]||e}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const Se={httpEquiv:"http-equiv"};let we=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function K(n,o){(typeof COMPILED>"u"||!COMPILED)&&((r.\u0275global.ng=r.\u0275global.ng||{})[n]=o)}class De{constructor(o,e){this.msPerTick=o,this.numTicks=e}}class _e{constructor(o){this.appRef=o.injector.get(r.ApplicationRef)}timeChangeDetection(o){const e=o&&o.record,t="Change Detection";e&&"profile"in console&&"function"==typeof console.profile&&console.profile(t);const s=performance.now();let i=0;for(;i<5||performance.now()-s<500;)this.appRef.tick(),i++;const a=performance.now();e&&"profileEnd"in console&&"function"==typeof console.profileEnd&&console.profileEnd(t);const c=(a-s)/i;return console.log(`ran ${i} change detection cycles`),console.log(`${c.toFixed(2)} ms per check`),new De(c,i)}}const Y="profiler";function Re(n){return K(Y,new _e(n)),n}function Ce(){K(Y,null)}class Oe{static all(){return()=>!0}static css(o){return e=>null!=e.nativeElement&&function Ae(n,o){return!!(0,l.\u0275getDOM)().isElementNode(n)&&(n.matches&&n.matches(o)||n.msMatchesSelector&&n.msMatchesSelector(o)||n.webkitMatchesSelector&&n.webkitMatchesSelector(o))}(e.nativeElement,o)}static directive(o){return e=>-1!==e.providerTokens.indexOf(o)}}const be={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},T=new r.InjectionToken("HammerGestureConfig"),I=new r.InjectionToken("HammerLoader");let W=(()=>{class n{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),X=(()=>{class n extends E{constructor(e,t,s,i){super(e),this._config=t,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!be.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(c=this.addEventListener(e,t,s)):c=()=>{}}).catch(()=>{c=()=>{}})),()=>{c()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),c=function(u){i.runGuarded(function(){s(u)})};return a.on(t,c),()=>{a.off(t,c),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(T),r.\u0275\u0275inject(r.\u0275Console),r.\u0275\u0275inject(I,8))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),Ie=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275mod=r.\u0275\u0275defineNgModule({type:n});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({providers:[{provide:m,useClass:X,multi:!0,deps:[l.DOCUMENT,T,r.\u0275Console,[new r.Optional,I]]},{provide:T,useClass:W,deps:[]}]})}return n})(),J=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:function(t){let s=null;return s=t?new(t||n):r.\u0275\u0275inject(q),s},providedIn:"root"})}return n})(),q=(()=>{class n extends J{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case r.SecurityContext.NONE:return t;case r.SecurityContext.HTML:return(0,r.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,r.\u0275unwrapSafeValue)(t):(0,r.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case r.SecurityContext.STYLE:return(0,r.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,r.\u0275unwrapSafeValue)(t):t;case r.SecurityContext.SCRIPT:if((0,r.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,r.\u0275unwrapSafeValue)(t);throw new r.\u0275RuntimeError(5200,!1);case r.SecurityContext.URL:return(0,r.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,r.\u0275unwrapSafeValue)(t):(0,r.\u0275_sanitizeUrl)(String(t));case r.SecurityContext.RESOURCE_URL:if((0,r.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,r.\u0275unwrapSafeValue)(t);throw new r.\u0275RuntimeError(5201,!1);default:throw new r.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,r.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,r.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,r.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,r.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,r.\u0275bypassSanitizationTrustResourceUrl)(e)}static#e=this.\u0275fac=function(t){return new(t||n)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var h=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n}(h||{});function M(n,o=[],e={}){return{\u0275kind:n,\u0275providers:o}}function Ne(){return M(h.NoHttpTransferCache)}function Pe(n){return M(h.HttpTransferCacheOptions,(0,P.\u0275withHttpTransferCache)(n))}function Le(){return M(h.I18nSupport,(0,r.\u0275withI18nSupport)())}function He(){return M(h.EventReplay,(0,r.\u0275withEventReplay)())}function ke(...n){const o=[],e=new Set,t=e.has(h.HttpTransferCacheOptions);for(const{\u0275providers:s,\u0275kind:i}of n)e.add(i),s.length&&o.push(s);return(0,r.makeEnvironmentProviders)([[],(0,r.\u0275withDomHydration)(),e.has(h.NoHttpTransferCache)||t?[]:(0,P.\u0275withHttpTransferCache)({}),o])}const Ue=new r.Version("18.1.1")}}]);