(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[6797],{39178:(B,_,v)=>{v.r(_),v.d(_,{CustomNGXLoggerService:()=>W,DEFAULT_COLOR_SCHEME:()=>$,LoggerModule:()=>H,NGXLogger:()=>m,NGXLoggerConfigEngine:()=>w,NGXLoggerConfigEngineFactory:()=>F,NGXLoggerMapperService:()=>A,NGXLoggerMetadataService:()=>j,NGXLoggerMonitor:()=>Q,NGXLoggerRulesService:()=>X,NGXLoggerServerService:()=>k,NGXLoggerWriterService:()=>D,NgxLoggerLevel:()=>u,TOKEN_LOGGER_CONFIG:()=>G,TOKEN_LOGGER_CONFIG_ENGINE_FACTORY:()=>E,TOKEN_LOGGER_MAPPER_SERVICE:()=>C,TOKEN_LOGGER_METADATA_SERVICE:()=>S,TOKEN_LOGGER_RULES_SERVICE:()=>N,TOKEN_LOGGER_SERVER_SERVICE:()=>R,TOKEN_LOGGER_WRITER_SERVICE:()=>O});var h=v(16380),l=v(72264),f=v(44866),g=v(32778),y={},L={};function P(t){for(var s=[],e=0,r=0,i=0;i<t.length;i+=1){var n=y[t[i]];if(void 0===n)throw new Error("Invalid character ("+t[i]+")");var o=32&n;if(r+=(n&=31)<<e,o)e+=5;else{var a=1&r;r>>>=1,s.push(a?0===r?-2147483648:-r:r),r=e=0}}return s}"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").forEach(function(t,s){y[t]=s,L[s]=t});var M=v(39354);const G="TOKEN_LOGGER_CONFIG";class w{constructor(s){this.config=this._clone(s)}get level(){return this.config.level}get serverLogLevel(){return this.config.serverLogLevel}updateConfig(s){this.config=this._clone(s)}partialUpdateConfig(s){s&&Object.keys(s).forEach(e=>{this.config[e]=s[e]})}getConfig(){return this._clone(this.config)}_clone(s){const e={level:null};return Object.keys(s).forEach(r=>{e[r]=s[r]}),e}}const E="TOKEN_LOGGER_CONFIG_ENGINE_FACTORY";class F{provideConfigEngine(s){return new w(s)}}const C="TOKEN_LOGGER_MAPPER_SERVICE";let A=(()=>{class t{constructor(e){this.httpBackend=e,this.sourceMapCache=new Map,this.logPositionCache=new Map}getLogPosition(e,r){const i=this.getStackLine(e);if(!i)return(0,f.of)({fileName:"",lineNumber:0,columnNumber:0});const n=this.getLocalPosition(i);if(!e.enableSourceMaps)return(0,f.of)(n);const o=this.getSourceMapLocation(i);return this.getSourceMap(o,n)}getStackLine(e){const r=new Error;try{throw r}catch{try{let n=4;return r.stack.split("\n")[0].includes(".js:")||(n+=1),r.stack.split("\n")[n+(e.proxiedSteps||0)]}catch{return null}}}getLocalPosition(e){const r=e.lastIndexOf("/");let i=e.indexOf(")");i<0&&(i=void 0);const o=e.substring(r+1,i).split(":");return 3===o.length?{fileName:o[0],lineNumber:+o[1],columnNumber:+o[2]}:{fileName:"unknown",lineNumber:0,columnNumber:0}}getTranspileLocation(e){let r=e.indexOf("(");r<0&&(r=e.lastIndexOf("@"),r<0&&(r=e.lastIndexOf(" ")));let i=e.indexOf(")");return i<0&&(i=void 0),e.substring(r+1,i)}getSourceMapLocation(e){const r=this.getTranspileLocation(e),i=r.substring(0,r.lastIndexOf(":"));return i.substring(0,i.lastIndexOf(":"))+".map"}getMapping(e,r){let i=0,n=0,o=0;const a=e.mappings.split(";");for(let c=0;c<a.length;c++){let d=0;const p=a[c].split(",");for(let b=0;b<p.length;b++){const T=P(p[b]);if(T.length>=4&&(d+=T[0],i+=T[1],n+=T[2],o+=T[3]),c===r.lineNumber){if(d===r.columnNumber)return{fileName:e.sources[i],lineNumber:n,columnNumber:o};if(b+1===p.length)return{fileName:e.sources[i],lineNumber:n,columnNumber:0}}}}return{fileName:"unknown",lineNumber:0,columnNumber:0}}getSourceMap(e,r){const i=new h.HttpRequest("GET",e),n=`${r.fileName}:${r.lineNumber}:${r.columnNumber}`;if(this.logPositionCache.has(n))return this.logPositionCache.get(n);this.sourceMapCache.has(e)||(this.httpBackend?this.sourceMapCache.set(e,this.httpBackend.handle(i).pipe((0,g.filter)(a=>a instanceof h.HttpResponse),(0,g.map)(a=>a.body),(0,g.retry)(3),(0,g.shareReplay)(1))):(console.error("NGXLogger : Can't get sourcemap because HttpBackend is not provided. You need to import HttpClientModule"),this.sourceMapCache.set(e,(0,f.of)(null))));const o=this.sourceMapCache.get(e).pipe((0,g.map)(a=>a?this.getMapping(a,r):r),(0,g.catchError)(()=>(0,f.of)(r)),(0,g.shareReplay)(1));return this.logPositionCache.set(n,o),o}}return t.\u0275fac=function(e){return new(e||t)(l.\u0275\u0275inject(h.HttpBackend,8))},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const S="TOKEN_LOGGER_METADATA_SERVICE";let j=(()=>{class t{constructor(e){this.datePipe=e}computeTimestamp(e){const r=()=>(new Date).toISOString();return e.timestampFormat?this.datePipe?this.datePipe.transform(new Date,e.timestampFormat):(console.error("NGXLogger : Can't use timeStampFormat because DatePipe is not provided. You need to provide DatePipe"),r()):r()}getMetadata(e,r,i,n){const o={level:e,additional:n};return o.message=i&&"function"==typeof i?i():i,o.timestamp=this.computeTimestamp(r),o}}return t.\u0275fac=function(e){return new(e||t)(l.\u0275\u0275inject(M.DatePipe,8))},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();class Q{}const N="TOKEN_LOGGER_RULES_SERVICE";let X=(()=>{class t{shouldCallWriter(e,r,i,n){return!r.disableConsoleLogging&&e>=r.level}shouldCallServer(e,r,i,n){return!!r.serverLoggingUrl&&e>=r.serverLogLevel}shouldCallMonitor(e,r,i,n){return this.shouldCallWriter(e,r,i,n)||this.shouldCallServer(e,r,i,n)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const R="TOKEN_LOGGER_SERVER_SERVICE";let k=(()=>{class t{constructor(e,r){this.httpBackend=e,this.ngZone=r,this.serverCallsQueue=[],this.flushingQueue=new f.BehaviorSubject(!1)}ngOnDestroy(){this.flushingQueue&&(this.flushingQueue.complete(),this.flushingQueue=null),this.addToQueueTimer&&(this.addToQueueTimer.unsubscribe(),this.addToQueueTimer=null)}secureErrorObject(e){return e?.stack}secureAdditionalParameters(e){return null==e?null:e.map((r,i)=>{try{return r instanceof Error?this.secureErrorObject(r):("object"==typeof r&&JSON.stringify(r),r)}catch{return`The additional[${i}] value could not be parsed using JSON.stringify().`}})}secureMessage(e){try{if(e instanceof Error)return this.secureErrorObject(e);"string"!=typeof e&&(e=JSON.stringify(e,null,2))}catch{e='The provided "message" value could not be parsed with JSON.stringify().'}return e}alterHttpRequest(e){return e}logOnServer(e,r,i){if(!this.httpBackend)return console.error("NGXLogger : Can't log on server because HttpBackend is not provided. You need to import HttpClientModule"),(0,f.of)(null);let n=new h.HttpRequest("POST",e,r,i||{}),o=(0,f.of)(n);const a=this.alterHttpRequest(n);return(0,f.isObservable)(a)?o=a:a?o=(0,f.of)(a):console.warn("NGXLogger : alterHttpRequest returned an invalid request. Using default one instead"),o.pipe((0,g.concatMap)(c=>c?this.httpBackend.handle(c):(console.warn("NGXLogger : alterHttpRequest returned an invalid request (observable). Using default one instead"),this.httpBackend.handle(n))),(0,g.filter)(c=>c instanceof h.HttpResponse),(0,g.map)(c=>c.body))}customiseRequestBody(e){return e}flushQueue(e){this.flushingQueue.next(!0),this.addToQueueTimer&&(this.addToQueueTimer.unsubscribe(),this.addToQueueTimer=null),this.serverCallsQueue&&this.serverCallsQueue.length>0&&this.sendToServerAction(this.serverCallsQueue,e),this.serverCallsQueue=[],this.flushingQueue.next(!1)}sendToServerAction(e,r){let i;const n=c=>{const d={...c};return d.additional=this.secureAdditionalParameters(d.additional),d.message=this.secureMessage(d.message),d};Array.isArray(e)?(i=[],e.forEach(c=>{i.push(n(c))})):i=n(e),i=this.customiseRequestBody(i);const o=r.customHttpHeaders||new h.HttpHeaders;o.has("Content-Type")||o.set("Content-Type","application/json");const a=()=>{this.logOnServer(r.serverLoggingUrl,i,{headers:o,params:r.customHttpParams||new h.HttpParams,responseType:r.httpResponseType||"json",withCredentials:r.withCredentials||!1}).pipe((0,g.catchError)(c=>(console.error("NGXLogger: Failed to log on server",c),(0,f.throwError)(c)))).subscribe()};if(!0===r.serverCallsOutsideNgZone){if(!this.ngZone)return void console.error("NGXLogger: NgZone is not provided and serverCallsOutsideNgZone is set to true");this.ngZone.runOutsideAngular(a)}else a()}sendToServer(e,r){if((!r.serverCallsBatchSize||r.serverCallsBatchSize<=0)&&(!r.serverCallsTimer||r.serverCallsTimer<=0))return void this.sendToServerAction(e,r);const i=()=>{this.serverCallsQueue.push({...e}),r.serverCallsBatchSize&&this.serverCallsQueue.length>r.serverCallsBatchSize&&this.flushQueue(r),r.serverCallsTimer>0&&!this.addToQueueTimer&&(this.addToQueueTimer=(0,f.timer)(r.serverCallsTimer).subscribe(n=>{this.flushQueue(r)}))};!0===this.flushingQueue.value?this.flushingQueue.pipe((0,g.filter)(n=>!1===n),(0,g.take)(1)).subscribe(n=>{i()}):i()}}return t.\u0275fac=function(e){return new(e||t)(l.\u0275\u0275inject(h.HttpBackend,8),l.\u0275\u0275inject(l.NgZone,8))},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();const O="TOKEN_LOGGER_WRITER_SERVICE";var u=function(t){return t[t.TRACE=0]="TRACE",t[t.DEBUG=1]="DEBUG",t[t.INFO=2]="INFO",t[t.LOG=3]="LOG",t[t.WARN=4]="WARN",t[t.ERROR=5]="ERROR",t[t.FATAL=6]="FATAL",t[t.OFF=7]="OFF",t}(u||{});const $=["purple","teal","gray","gray","red","red","red"];let D=(()=>{class t{constructor(e){this.platformId=e,this.prepareMetaStringFuncs=[this.getTimestampToWrite,this.getLevelToWrite,this.getFileDetailsToWrite,this.getContextToWrite],this.isIE=(0,M.isPlatformBrowser)(e)&&navigator&&navigator.userAgent&&!(-1===navigator.userAgent.indexOf("MSIE")&&!navigator.userAgent.match(/Trident\//)&&!navigator.userAgent.match(/Edge\//)),this.logFunc=this.isIE?this.logIE.bind(this):this.logModern.bind(this)}getTimestampToWrite(e,r){return e.timestamp}getLevelToWrite(e,r){return u[e.level]}getFileDetailsToWrite(e,r){return!0===r.disableFileDetails?"":`[${e.fileName}:${e.lineNumber}:${e.columnNumber}]`}getContextToWrite(e,r){return r.context?`{${r.context}}`:""}prepareMetaString(e,r){let i="";return this.prepareMetaStringFuncs.forEach(n=>{const o=n(e,r);o&&(i=i+" "+o)}),i.trim()}getColor(e,r){if(e.level!==u.OFF)return(r.colorScheme??$)[e.level]}logIE(e,r,i){const n=e.additional||[];switch(e.level){case u.WARN:console.warn(`${i} `,e.message,...n);break;case u.ERROR:case u.FATAL:console.error(`${i} `,e.message,...n);break;case u.INFO:console.info(`${i} `,e.message,...n);break;default:console.log(`${i} `,e.message,...n)}}logModern(e,r,i){const n=this.getColor(e,r),o=e.additional||[];switch(e.level){case u.WARN:console.warn(`%c${i}`,`color:${n}`,e.message,...o);break;case u.ERROR:case u.FATAL:console.error(`%c${i}`,`color:${n}`,e.message,...o);break;case u.INFO:console.info(`%c${i}`,`color:${n}`,e.message,...o);break;case u.DEBUG:console.debug(`%c${i}`,`color:${n}`,e.message,...o);break;default:console.log(`%c${i}`,`color:${n}`,e.message,...o)}}writeMessage(e,r){const i=this.prepareMetaString(e,r);this.logFunc(e,r,i)}}return t.\u0275fac=function(e){return new(e||t)(l.\u0275\u0275inject(l.PLATFORM_ID))},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),m=(()=>{class t{constructor(e,r,i,n,o,a,c){this.metadataService=i,this.ruleService=n,this.mapperService=o,this.writerService=a,this.serverService=c,this.configEngine=r.provideConfigEngine(e)}get level(){return this.configEngine.level}get serverLogLevel(){return this.configEngine.serverLogLevel}trace(e,...r){this._log(u.TRACE,e,r)}debug(e,...r){this._log(u.DEBUG,e,r)}info(e,...r){this._log(u.INFO,e,r)}log(e,...r){this._log(u.LOG,e,r)}warn(e,...r){this._log(u.WARN,e,r)}error(e,...r){this._log(u.ERROR,e,r)}fatal(e,...r){this._log(u.FATAL,e,r)}setCustomHttpHeaders(e){const r=this.getConfigSnapshot();r.customHttpHeaders=e,this.updateConfig(r)}setCustomParams(e){const r=this.getConfigSnapshot();r.customHttpParams=e,this.updateConfig(r)}setWithCredentialsOptionValue(e){const r=this.getConfigSnapshot();r.withCredentials=e,this.updateConfig(r)}registerMonitor(e){this._loggerMonitor=e}updateConfig(e){this.configEngine.updateConfig(e)}partialUpdateConfig(e){this.configEngine.partialUpdateConfig(e)}getConfigSnapshot(){return this.configEngine.getConfig()}flushServerQueue(){this.serverService.flushQueue(this.getConfigSnapshot())}_log(e,r,i=[]){const n=this.configEngine.getConfig(),o=this.ruleService.shouldCallWriter(e,n,r,i),a=this.ruleService.shouldCallServer(e,n,r,i),c=this.ruleService.shouldCallMonitor(e,n,r,i);if(!o&&!a&&!c)return;const d=this.metadataService.getMetadata(e,n,r,i);this.mapperService.getLogPosition(n,d).pipe((0,g.take)(1)).subscribe(p=>{p&&(d.fileName=p.fileName,d.lineNumber=p.lineNumber,d.columnNumber=p.columnNumber),c&&this._loggerMonitor&&this._loggerMonitor.onLog(d,n),o&&this.writerService.writeMessage(d,n),a&&this.serverService.sendToServer(d,n)})}}return t.\u0275fac=function(e){return new(e||t)(l.\u0275\u0275inject(G),l.\u0275\u0275inject(E),l.\u0275\u0275inject(S),l.\u0275\u0275inject(N),l.\u0275\u0275inject(C),l.\u0275\u0275inject(O),l.\u0275\u0275inject(R))},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),W=(()=>{class t{constructor(e,r,i,n,o,a,c){this.logger=e,this.configEngineFactory=r,this.metadataService=i,this.ruleService=n,this.mapperService=o,this.writerService=a,this.serverService=c}create(e,r,i,n){return this.getNewInstance({config:e,serverService:r,logMonitor:i,mapperService:n})}getNewInstance(e){const r=new m(e?.config??this.logger.getConfigSnapshot(),e?.configEngineFactory??this.configEngineFactory,e?.metadataService??this.metadataService,e?.ruleService??this.ruleService,e?.mapperService??this.mapperService,e?.writerService??this.writerService,e?.serverService??this.serverService);return e?.partialConfig&&r.partialUpdateConfig(e.partialConfig),e?.logMonitor&&r.registerMonitor(e.logMonitor),r}}return t.\u0275fac=function(e){return new(e||t)(l.\u0275\u0275inject(m),l.\u0275\u0275inject(E),l.\u0275\u0275inject(S),l.\u0275\u0275inject(N),l.\u0275\u0275inject(C),l.\u0275\u0275inject(O),l.\u0275\u0275inject(R))},t.\u0275prov=l.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),H=(()=>{class t{static forRoot(e,r){if(r||(r={}),r.configProvider){if(r.configProvider.provide!==G)throw new Error(`Wrong injection token for configProvider, it should be ${G} and you used ${r.configProvider.provide}`)}else r.configProvider={provide:G,useValue:e||{}};if(r.configEngineFactoryProvider){if(r.configEngineFactoryProvider.provide!==E)throw new Error(`Wrong injection token for configEngineFactoryProvider, it should be '${E}' and you used '${r.configEngineFactoryProvider.provide}'`)}else r.configEngineFactoryProvider={provide:E,useClass:F};if(r.metadataProvider){if(r.metadataProvider.provide!==S)throw new Error(`Wrong injection token for metadataProvider, it should be '${S}' and you used '${r.metadataProvider.provide}'`)}else r.metadataProvider={provide:S,useClass:j};if(r.ruleProvider){if(r.ruleProvider.provide!==N)throw new Error(`Wrong injection token for ruleProvider, it should be '${N}' and you used '${r.ruleProvider.provide}'`)}else r.ruleProvider={provide:N,useClass:X};if(r.mapperProvider){if(r.mapperProvider.provide!==C)throw new Error(`Wrong injection token for mapperProvider, it should be '${C}' and you used '${r.mapperProvider.provide}'`)}else r.mapperProvider={provide:C,useClass:A};if(r.writerProvider){if(r.writerProvider.provide!==O)throw new Error(`Wrong injection token for writerProvider, it should be '${O}' and you used '${r.writerProvider.provide}'`)}else r.writerProvider={provide:O,useClass:D};if(r.serverProvider){if(r.serverProvider.provide!==R)throw new Error(`Wrong injection token for serverProvider, it should be '${R}' and you used '${r.writerProvider.provide}'`)}else r.serverProvider={provide:R,useClass:k};return{ngModule:t,providers:[m,r.configProvider,r.configEngineFactoryProvider,r.metadataProvider,r.ruleProvider,r.mapperProvider,r.writerProvider,r.serverProvider,W]}}static forChild(){return{ngModule:t}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=l.\u0275\u0275defineInjector({imports:[[M.CommonModule]]}),t})()}}]);