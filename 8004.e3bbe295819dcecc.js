(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[8004],{5623:(ot,$,A)=>{A.r($),A.d($,{Manager:()=>L,Socket:()=>X,connect:()=>w,default:()=>w,io:()=>w,protocol:()=>me});var q={};A.r(q),A.d(q,{Decoder:()=>J,Encoder:()=>nt,PacketType:()=>a,protocol:()=>me});const p=Object.create(null);p.open="0",p.close="1",p.ping="2",p.pong="3",p.message="4",p.upgrade="5",p.noop="6";const T=Object.create(null);Object.keys(p).forEach(n=>{T[p[n]]=n});const P={type:"error",data:"parser error"},Q="function"==typeof Blob||typeof Blob<"u"&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),G="function"==typeof ArrayBuffer,j=n=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,D=({type:n,data:e},t,s)=>Q&&e instanceof Blob?t?s(e):Z(e,s):G&&(e instanceof ArrayBuffer||j(e))?t?s(e):Z(new Blob([e]),s):s(p[n]+(e||"")),Z=(n,e)=>{const t=new FileReader;return t.onload=function(){const s=t.result.split(",")[1];e("b"+(s||""))},t.readAsDataURL(n)};function ee(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let U;const v=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<64;n++)v["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(n)]=n;const Ee="function"==typeof ArrayBuffer,I=(n,e)=>{if("string"!=typeof n)return{type:"message",data:te(n,e)};const t=n.charAt(0);return"b"===t?{type:"message",data:ke(n.substring(1),e)}:T[t]?n.length>1?{type:T[t],data:n.substring(1)}:{type:T[t]}:P},ke=(n,e)=>{if(Ee){const t=(n=>{let s,r,o,c,h,e=.75*n.length,t=n.length,i=0;"="===n[n.length-1]&&(e--,"="===n[n.length-2]&&e--);const g=new ArrayBuffer(e),d=new Uint8Array(g);for(s=0;s<t;s+=4)r=v[n.charCodeAt(s)],o=v[n.charCodeAt(s+1)],c=v[n.charCodeAt(s+2)],h=v[n.charCodeAt(s+3)],d[i++]=r<<2|o>>4,d[i++]=(15&o)<<4|c>>2,d[i++]=(3&c)<<6|63&h;return g})(n);return te(t,e)}return{base64:!0,data:n}},te=(n,e)=>"blob"===e?n instanceof Blob?n:new Blob([n]):n instanceof ArrayBuffer?n:n.buffer;let V;function R(n){return n.reduce((e,t)=>e+t.length,0)}function O(n,e){if(n[0].length===e)return n.shift();const t=new Uint8Array(e);let s=0;for(let i=0;i<e;i++)t[i]=n[0][s++],s===n[0].length&&(n.shift(),s=0);return n.length&&s<n[0].length&&(n[0]=n[0].slice(s)),t}function f(n){if(n)return function Ce(n){for(var e in f.prototype)n[e]=f.prototype[e];return n}(n)}f.prototype.on=f.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this},f.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this},f.prototype.off=f.prototype.removeListener=f.prototype.removeAllListeners=f.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(1==arguments.length)return delete this._callbacks["$"+n],this;for(var s,i=0;i<t.length;i++)if((s=t[i])===e||s.fn===e){t.splice(i,1);break}return 0===t.length&&delete this._callbacks["$"+n],this},f.prototype.emitReserved=f.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(t){s=0;for(var i=(t=t.slice(0)).length;s<i;++s)t[s].apply(this,e)}return this},f.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]},f.prototype.hasListeners=function(n){return!!this.listeners(n).length};const u=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function ie(n,...e){return e.reduce((t,s)=>(n.hasOwnProperty(s)&&(t[s]=n[s]),t),{})}const Be=u.setTimeout,Se=u.clearTimeout;function C(n,e){e.useNativeTimers?(n.setTimeoutFn=Be.bind(u),n.clearTimeoutFn=Se.bind(u)):(n.setTimeoutFn=u.setTimeout.bind(u),n.clearTimeoutFn=u.clearTimeout.bind(u))}function xe(n){return"string"==typeof n?function Le(n){let e=0,t=0;for(let s=0,i=n.length;s<i;s++)e=n.charCodeAt(s),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(s++,t+=4);return t}(n):Math.ceil(1.33*(n.byteLength||n.size))}class De extends Error{constructor(e,t,s){super(e),this.description=t,this.context=s,this.type="TransportError"}}class F extends f{constructor(e){super(),this.writable=!1,C(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,s){return super.emitReserved("error",new De(e,t,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return("opening"===this.readyState||"open"===this.readyState)&&(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=I(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function qe(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}(e);return t.length?"?"+t:""}}const re="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),B=64,oe={};let ae,ce=0,y=0;function he(n){let e="";do{e=re[n%B]+e,n=Math.floor(n/B)}while(n>0);return e}function fe(){const n=he(+new Date);return n!==ae?(ce=0,ae=n):n+"."+he(ce++)}for(;y<B;y++)oe[re[y]]=y;let ue=!1;try{ue=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ue=ue;function le(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ue))return new XMLHttpRequest}catch{}if(!e)try{return new(u[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch{}}function Ie(){}const Ve=null!=new le({xdomain:!1}).responseType;let S=(()=>{class n extends f{constructor(t,s){super(),C(this,s),this.opts=s,this.method=s.method||"GET",this.uri=t,this.data=void 0!==s.data?s.data:null,this.create()}create(){var t;const s=ie(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");s.xdomain=!!this.opts.xd;const i=this.xhr=new le(s);try{i.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if("POST"===this.method)try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}null===(t=this.opts.cookieJar)||void 0===t||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(i.timeout=this.opts.requestTimeout),i.onreadystatechange=()=>{var r;3===i.readyState&&(null===(r=this.opts.cookieJar)||void 0===r||r.parseCookies(i)),4===i.readyState&&(200===i.status||1223===i.status?this.onLoad():this.setTimeoutFn(()=>{this.onError("number"==typeof i.status?i.status:0)},0))},i.send(this.data)}catch(r){return void this.setTimeoutFn(()=>{this.onError(r)},0)}typeof document<"u"&&(this.index=n.requestsCount++,n.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(!(typeof this.xhr>"u"||null===this.xhr)){if(this.xhr.onreadystatechange=Ie,t)try{this.xhr.abort()}catch{}typeof document<"u"&&delete n.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}return n.requestsCount=0,n.requests={},n})();function pe(){for(let n in S.requests)S.requests.hasOwnProperty(n)&&S.requests[n].abort()}typeof document<"u"&&("function"==typeof attachEvent?attachEvent("onunload",pe):"function"==typeof addEventListener&&addEventListener("onpagehide"in u?"pagehide":"unload",pe,!1));const M="function"==typeof Promise&&"function"==typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),N=u.WebSocket||u.MozWebSocket,de=typeof navigator<"u"&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),We={websocket:class He extends F{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,s=de?{}:ie(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=de?new N(e,t,s):t?new N(e,t):new N(e)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=t===e.length-1;D(e[t],this.supportsBinary,r=>{try{this.ws.send(r)}catch{}i&&M(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=fe()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!N}},webtransport:class Ke extends F{get name(){return"webtransport"}doOpen(){"function"==typeof WebTransport&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=function Oe(n,e){V||(V=new TextDecoder);const t=[];let s=0,i=-1,r=!1;return new TransformStream({transform(o,c){for(t.push(o);;){if(0===s){if(R(t)<1)break;const h=O(t,1);r=!(128&~h[0]),i=127&h[0],s=i<126?3:126===i?1:2}else if(1===s){if(R(t)<2)break;const h=O(t,2);i=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),s=3}else if(2===s){if(R(t)<8)break;const h=O(t,8),g=new DataView(h.buffer,h.byteOffset,h.length),d=g.getUint32(0);if(d>Math.pow(2,21)-1){c.enqueue(P);break}i=d*Math.pow(2,32)+g.getUint32(4),s=3}else{if(R(t)<i)break;const h=O(t,i);c.enqueue(I(r?h:V.decode(h),e)),s=0}if(0===i||i>n){c.enqueue(P);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(t).getReader(),i=function Re(){return new TransformStream({transform(n,e){!function _e(n,e){Q&&n.data instanceof Blob?n.data.arrayBuffer().then(ee).then(e):G&&(n.data instanceof ArrayBuffer||j(n.data))?e(ee(n.data)):D(n,!1,t=>{U||(U=new TextEncoder),e(U.encode(t))})}(n,t=>{const s=t.length;let i;if(s<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,s);else if(s<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,s)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(s))}n.data&&"string"!=typeof n.data&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const r=()=>{s.read().then(({done:c,value:h})=>{c||(this.onPacket(h),r())}).catch(c=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=t===e.length-1;this.writer.write(e[t]).then(()=>{i&&M(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;null===(e=this.transport)||void 0===e||e.close()}},polling:class Fe extends F{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const s="https:"===location.protocol;let i=location.port;i||(i=s?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}this.supportsBinary=Ve&&!(e&&e.forceBase64),this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||t()})),this.writable||(s++,this.once("drain",function(){--s||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((n,e)=>{const t=n.split("\x1e"),s=[];for(let i=0;i<t.length;i++){const r=I(t[i],e);if(s.push(r),"error"===r.type)break}return s})(e,this.socket.binaryType).forEach(s=>{if("opening"===this.readyState&&"open"===s.type&&this.onOpen(),"close"===s.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)}),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((n,e)=>{const t=n.length,s=new Array(t);let i=0;n.forEach((r,o)=>{D(r,!1,c=>{s[o]=c,++i===t&&e(s.join("\x1e"))})})})(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=fe()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new S(this.uri(),e)}doWrite(e,t){const s=this.request({method:"POST",data:e});s.on("success",t),s.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,s)=>{this.onError("xhr poll error",t,s)}),this.pollXhr=e}}},Ye=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ze=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function K(n){if(n.length>2e3)throw"URI too long";const e=n,t=n.indexOf("["),s=n.indexOf("]");-1!=t&&-1!=s&&(n=n.substring(0,t)+n.substring(t,s).replace(/:/g,";")+n.substring(s,n.length));let i=Ye.exec(n||""),r={},o=14;for(;o--;)r[ze[o]]=i[o]||"";return-1!=t&&-1!=s&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=function Je(n,e){const s=e.replace(/\/{2,9}/g,"/").split("/");return("/"==e.slice(0,1)||0===e.length)&&s.splice(0,1),"/"==e.slice(-1)&&s.splice(s.length-1,1),s}(0,r.path),r.queryKey=function Xe(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,r){i&&(t[i]=r)}),t}(0,r.query),r}let ye=(()=>{class n extends f{constructor(t,s={}){super(),this.binaryType="arraybuffer",this.writeBuffer=[],t&&"object"==typeof t&&(s=t,t=null),t?(t=K(t),s.hostname=t.host,s.secure="https"===t.protocol||"wss"===t.protocol,s.port=t.port,t.query&&(s.query=t.query)):s.host&&(s.hostname=K(s.host).host),C(this,s),this.secure=null!=s.secure?s.secure:typeof location<"u"&&"https:"===location.protocol,s.hostname&&!s.port&&(s.port=this.secure?"443":"80"),this.hostname=s.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=s.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=s.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},s),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"==typeof this.opts.query&&(this.opts.query=function Pe(n){let e={},t=n.split("&");for(let s=0,i=t.length;s<i;s++){let r=t[s].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const s=Object.assign({},this.opts.query);s.EIO=4,s.transport=t,this.id&&(s.sid=this.id);const i=Object.assign({},this.opts,{query:s,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new We[t](i)}open(){let t;if(this.opts.rememberUpgrade&&n.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch{return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",s=>this.onClose("transport close",s))}probe(t){let s=this.createTransport(t),i=!1;n.priorWebsocketSuccess=!1;const r=()=>{i||(s.send([{type:"ping",data:"probe"}]),s.once("packet",_=>{if(!i)if("pong"===_.type&&"probe"===_.data){if(this.upgrading=!0,this.emitReserved("upgrading",s),!s)return;n.priorWebsocketSuccess="websocket"===s.name,this.transport.pause(()=>{i||"closed"!==this.readyState&&(we(),this.setTransport(s),s.send([{type:"upgrade"}]),this.emitReserved("upgrade",s),s=null,this.upgrading=!1,this.flush())})}else{const k=new Error("probe error");k.transport=s.name,this.emitReserved("upgradeError",k)}}))};function o(){i||(i=!0,we(),s.close(),s=null)}const c=_=>{const k=new Error("probe error: "+_);k.transport=s.name,o(),this.emitReserved("upgradeError",k)};function h(){c("transport closed")}function g(){c("socket closed")}function d(_){s&&_.name!==s.name&&o()}const we=()=>{s.removeListener("open",r),s.removeListener("error",c),s.removeListener("close",h),this.off("close",g),this.off("upgrading",d)};s.once("open",r),s.once("error",c),s.once("close",h),this.once("close",g),this.once("upgrading",d),-1!==this.upgrades.indexOf("webtransport")&&"webtransport"!==t?this.setTimeoutFn(()=>{i||s.open()},200):s.open()}onOpen(){if(this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade){let t=0;const s=this.upgrades.length;for(;t<s;t++)this.probe(this.upgrades[t])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),this.resetPingTimeout(),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const s=new Error("server error");s.code=t.data,this.onError(s);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let s=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(s+=xe(r)),i>0&&s>this.maxPayload)return this.writeBuffer.slice(0,i);s+=2}return this.writeBuffer}write(t,s,i){return this.sendPacket("message",t,s,i),this}send(t,s,i){return this.sendPacket("message",t,s,i),this}sendPacket(t,s,i,r){if("function"==typeof s&&(r=s,s=void 0),"function"==typeof i&&(r=i,i=null),"closing"===this.readyState||"closed"===this.readyState)return;(i=i||{}).compress=!1!==i.compress;const o={type:t,data:s,options:i};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},s=()=>{this.off("upgrade",s),this.off("upgradeError",s),t()},i=()=>{this.once("upgrade",s),this.once("upgradeError",s)};return("opening"===this.readyState||"open"===this.readyState)&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}onError(t){n.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,s){("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,s),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const s=[];let i=0;const r=t.length;for(;i<r;i++)~this.transports.indexOf(t[i])&&s.push(t[i]);return s}}return n.protocol=4,n})();const Qe="function"==typeof ArrayBuffer,Ge=n=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,ge=Object.prototype.toString,je="function"==typeof Blob||typeof Blob<"u"&&"[object BlobConstructor]"===ge.call(Blob),Ze="function"==typeof File||typeof File<"u"&&"[object FileConstructor]"===ge.call(File);function W(n){return Qe&&(n instanceof ArrayBuffer||Ge(n))||je&&n instanceof Blob||Ze&&n instanceof File}function x(n,e){if(!n||"object"!=typeof n)return!1;if(Array.isArray(n)){for(let t=0,s=n.length;t<s;t++)if(x(n[t]))return!0;return!1}if(W(n))return!0;if(n.toJSON&&"function"==typeof n.toJSON&&1===arguments.length)return x(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&x(n[t]))return!0;return!1}function et(n){const e=[],s=n;return s.data=Y(n.data,e),s.attachments=e.length,{packet:s,buffers:e}}function Y(n,e){if(!n)return n;if(W(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}if(Array.isArray(n)){const t=new Array(n.length);for(let s=0;s<n.length;s++)t[s]=Y(n[s],e);return t}if("object"==typeof n&&!(n instanceof Date)){const t={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=Y(n[s],e));return t}return n}function tt(n,e){return n.data=z(n.data,e),delete n.attachments,n}function z(n,e){if(!n)return n;if(n&&!0===n._placeholder){if("number"==typeof n.num&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=z(n[t],e);else if("object"==typeof n)for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=z(n[t],e));return n}const st=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],me=5;var a=function(n){return n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK",n}(a||{});class nt{constructor(e){this.replacer=e}encode(e){return e.type!==a.EVENT&&e.type!==a.ACK||!x(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===a.EVENT?a.BINARY_EVENT:a.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return(e.type===a.BINARY_EVENT||e.type===a.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=et(e),s=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(s),i}}function be(n){return"[object Object]"===Object.prototype.toString.call(n)}class J extends f{constructor(e){super(),this.reviver=e}add(e){let t;if("string"==typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const s=t.type===a.BINARY_EVENT;s||t.type===a.BINARY_ACK?(t.type=s?a.EVENT:a.ACK,this.reconstructor=new it(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!W(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const s={type:Number(e.charAt(0))};if(void 0===a[s.type])throw new Error("unknown packet type "+s.type);if(s.type===a.BINARY_EVENT||s.type===a.BINARY_ACK){const r=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||"-"!==e.charAt(t))throw new Error("Illegal attachments");s.attachments=Number(o)}if("/"===e.charAt(t+1)){const r=t+1;for(;++t&&","!==e.charAt(t)&&t!==e.length;);s.nsp=e.substring(r,t)}else s.nsp="/";const i=e.charAt(t+1);if(""!==i&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(null==o||Number(o)!=o){--t;break}if(t===e.length)break}s.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(!J.isPayloadValid(s.type,r))throw new Error("invalid payload");s.data=r}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case a.CONNECT:return be(t);case a.DISCONNECT:return void 0===t;case a.CONNECT_ERROR:return"string"==typeof t||be(t);case a.EVENT:case a.BINARY_EVENT:return Array.isArray(t)&&("number"==typeof t[0]||"string"==typeof t[0]&&-1===st.indexOf(t[0]));case a.ACK:case a.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class it{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=tt(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function l(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const rt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class X extends f{constructor(e,t,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[l(e,"open",this.onopen.bind(this)),l(e,"packet",this.onpacket.bind(this)),l(e,"error",this.onerror.bind(this)),l(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(rt.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const s={type:a.EVENT,data:t,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"==typeof t[t.length-1]){const o=this.ids++,c=t.pop();this._registerAckCallback(o,c),s.id=o}return this.flags.volatile&&(!(this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable)||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var s;const i=null!==(s=this.flags.timeout)&&void 0!==s?s:this._opts.ackTimeout;if(void 0===i)return void(this.acks[e]=t);const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let c=0;c<this.sendBuffer.length;c++)this.sendBuffer[c].id===e&&this.sendBuffer.splice(c,1);t.call(this,new Error("operation has timed out"))},i),o=(...c)=>{this.io.clearTimeoutFn(r),t.apply(this,c)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((s,i)=>{const r=(o,c)=>o?i(o):s(c);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;"function"==typeof e[e.length-1]&&(t=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>s!==this._queue[0]?void 0:(null!==i?s.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...r)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:a.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(s=>String(s.id)===e)){const s=this.acks[e];delete this.acks[e],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case a.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case a.EVENT:case a.BINARY_EVENT:this.onevent(e);break;case a.ACK:case a.BINARY_ACK:this.onack(e);break;case a.DISCONNECT:this.ondisconnect();break;case a.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const s of t)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"==typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let s=!1;return function(...i){s||(s=!0,t.packet({type:a.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];"function"==typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:a.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const s of t)s.apply(this,e.data)}}}function b(n){this.ms=(n=n||{}).min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}b.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=1&Math.floor(10*e)?n+t:n-t}return 0|Math.min(n,this.max)},b.prototype.reset=function(){this.attempts=0},b.prototype.setMin=function(n){this.ms=n},b.prototype.setMax=function(n){this.max=n},b.prototype.setJitter=function(n){this.jitter=n};class L extends f{constructor(e,t){var s;super(),this.nsps={},this.subs=[],e&&"object"==typeof e&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.opts=t,C(this,t),this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(s=t.randomizationFactor)&&void 0!==s?s:.5),this.backoff=new b({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==t.timeout?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||q;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==t.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ye(this.uri,this.opts);const t=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=l(t,"open",function(){s.onopen(),e&&e()}),r=c=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",c),e?e(c):this.maybeReconnectOnOpen()},o=l(t,"error",r);if(!1!==this._timeout){const h=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),t.close()},this._timeout);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(l(e,"ping",this.onping.bind(this)),l(e,"data",this.ondata.bind(this)),l(e,"error",this.onerror.bind(this)),l(e,"close",this.onclose.bind(this)),l(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){M(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new X(this,e,t),this.nsps[e]=s),s}_destroy(e){const t=Object.keys(this.nsps);for(const s of t)if(this.nsps[s].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let s=0;s<t.length;s++)this.engine.write(t[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const E={};function w(n,e){"object"==typeof n&&(e=n,n=void 0);const t=function $e(n,e="",t){let s=n;t=t||typeof location<"u"&&location,null==n&&(n=t.protocol+"//"+t.host),"string"==typeof n&&("/"===n.charAt(0)&&(n="/"===n.charAt(1)?t.protocol+n:t.host+n),/^(https?|wss?):\/\//.test(n)||(n=typeof t<"u"?t.protocol+"//"+n:"https://"+n),s=K(n)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const r=-1!==s.host.indexOf(":")?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+r+":"+s.port+e,s.href=s.protocol+"://"+r+(t&&t.port===s.port?"":":"+s.port),s}(n,(e=e||{}).path||"/socket.io"),s=t.source,i=t.id;let h;return e.forceNew||e["force new connection"]||!1===e.multiplex||E[i]&&t.path in E[i].nsps?h=new L(s,e):(E[i]||(E[i]=new L(s,e)),h=E[i]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign(w,{Manager:L,Socket:X,io:w,connect:w})}}]);