(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[6262],{6262:(_,k,a)=>{a.r(k),a.d(k,{AccountModule:()=>v});var f=a(35228),i=a(37011),p=a(87675);const T=[{path:"auth",loadChildren:()=>Promise.resolve().then(a.bind(a,12440)).then(u=>u.AuthModule)}];class d{constructor(c){this.router=c,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(c=>{c instanceof i.NavigationStart?console.log("AccountRoutingModule::monitorRouting()/Navigation started to:",c.url):c instanceof i.NavigationEnd?console.log("AccountRoutingModule::monitorRouting()/Navigation ended at:",c.url):c instanceof i.NavigationCancel?console.warn("AccountRoutingModule::monitorRouting()/Navigation canceled:",c.url):c instanceof i.NavigationError&&console.error("AccountRoutingModule::monitorRouting()/Navigation error:",c.url,c.error)})}}d.\u0275fac=function(c){return new(c||d)(p.\u0275\u0275inject(i.Router))},d.\u0275mod=p.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=p.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(T),i.RouterModule]});var M=a(12440);class v{}v.\u0275fac=function(c){return new(c||v)},v.\u0275mod=p.\u0275\u0275defineNgModule({type:v}),v.\u0275inj=p.\u0275\u0275defineInjector({imports:[f.CommonModule,d,M.AuthModule]})},12440:(_,k,a)=>{a.r(k),a.d(k,{AuthModule:()=>I});var f=a(35228),i=a(30533),p=a(76380),T=a(54171),d=a(37011),M=a(15861),v=a(81042),u=a(38089),c=a(41115),e=a(87675),F=a(55250),G=a(95401);function U(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",38),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.error)}}function B(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName is required"),e.\u0275\u0275elementEnd())}function V(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName must be a valid userName address"),e.\u0275\u0275elementEnd())}function J(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,B,2,0,"div",40),e.\u0275\u0275template(2,V,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.loginInvalid),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.loginInvalid)}}function z(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function $(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,z,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.loginInvalid)}}const P=function(o){return{"is-invalid":o}};class b{constructor(n,t,r,l,m,D,L,h,N,S,E){this.logger=n,this.svSio=t,this.svWss=r,this.svUser=l,this.svSess=m,this.svMenu=D,this.svNav=L,this.route=h,this.aRoute=N,this.svBase=S,this.svSioTest=E,this.debug=!0,this.resourceGuid=(0,v.Z)(),this.loginInvalid=!1,this.rememberMe=!0,this.submitted=!1,this.error="",this.socketData=[],this.header="Welcome!",this.subheader="Sign in to continue to ASDAP",this.routParams={queryParams:{token:""},skipLocationChange:!0,replaceUrl:!1},this.svSio.env=c.N,this.svSio.initSio(null,null),this.fg=new i.FormGroup({userName:new i.FormControl,password:new i.FormControl,rememberMe:new i.FormControl})}ngOnInit(){this.logger.info("cd-shell/LoginComponent::ngOnInit()/StorageType.CdObjId:",u.StorageType.CdObjId),this.initialize(),this.aRoute.queryParams.subscribe(l=>{this.key=l.key,this.sid=l.sid,this.uid=l.uid,console.log(this.key,this.sid,this.uid),this.setHeader()});const n={storageType:u.StorageType.CdObjId,cdObjId:{appId:localStorage.getItem("appId"),resourceGuid:null,resourceName:"SidebarComponent",ngModule:"SharedModule",jwtToken:localStorage.getItem("accessToken"),socket:null,commTrack:null}};this.logger.info("cd-shell/LoginComponent::ngOnInit()/filter:",n),this.sidebarInitData=this.searchLocalStorage(n),this.logger.info("cd-shell/LoginComponent::ngOnInit()/this.sidebarInitData:",this.sidebarInitData);const t=localStorage.getItem("socketData");if(t){let l=function(m){return"appInit"===m.name?m:null};this.socketData=JSON.parse(t).filter(l),this.logger.info("cd-shell/LoginComponent::ngOnInit()/this.socketData:",this.socketData)}else this.logger.info("Err: socket data is not valid")}initialize(){const n={storageType:u.StorageType.CdObjId,cdObjId:{appId:localStorage.getItem("appId"),resourceGuid:null,resourceName:"LoginComponent",ngModule:"SharedModule",jwtToken:localStorage.getItem("accessToken"),socket:null,commTrack:null}};this.logger.info("cd-shell/LoginComponent::ngOnInit()/filter:",n),this.sidebarInitData=this.searchLocalStorage(n),this.logger.info("cd-shell/LoginComponent::ngOnInit()/this.sidebarInitData:",this.sidebarInitData);const t=localStorage.getItem("socketData");if(t){let l=function(m){return"appInit"===m.name?m:null};this.socketData=JSON.parse(t).filter(l),this.logger.info("cd-shell/LoginComponent::ngOnInit()/this.socketData:",this.socketData)}else this.logger.info("Err: socket data is not valid");this.setAppId()}setAppId(){var n=this;return(0,M.Z)(function*(){console.log("cd-shell/LoginComponent::setAppId()/01"),console.log("cd-shell/LoginComponent::setAppId()/this.svSio.socket:",n.svSio.socket),localStorage.removeItem("appId");const t=localStorage.getItem("appId");console.log("cd-shell/LoginComponent::setAppId()/appId:",t);const r=yield n.configPushPayload("register-client","push-registered-client",1e3);console.log("cd-shell/LoginComponent::setAppId()/envl:",r),n.listen("push-registered-client"),n.listen("msg-relayed"),n.listen("push-msg-relayed"),n.listen("push-menu"),n.sendSioMessage(r.pushData.triggerEvent,r)})()}listen(n){this.logger.info("cd-shell/cd-shell/LoginComponent::listen/event:",n),this.svSioTest.sioListen(n).subscribe({next:t=>{switch(console.log("cd-shell/LoginComponent::pushSubscribe()/payLoad:",t),t.pushData.emittEvent){case"push-registered-client":console.log("cd-shell/LoginComponent::listenSecure()/push-registered-client/:payLoad.pushData.emittEvent:",t.pushData.emittEvent),console.log("cd-shell/LoginComponent::listenSecure()/push-registered-client/:payLoad.pushData.triggerEvent:",t.pushData.triggerEvent),console.log("handle push-registered-client event"),this.saveSocket(t);break;case"push-msg-relayed":console.log("cd-shell/LoginComponent::listenSecure()/push-msg-relayed/:payLoad.pushData.emittEvent:",t.pushData.emittEvent),console.log("cd-shell/LoginComponent::listenSecure()/push-msg-relayed/:payLoad.pushData.triggerEvent:",t.pushData.triggerEvent),console.log("handle push-msg-relayed event"),this.updateRelayed(t);break;case"msg-relayed":console.log("cd-shell/LoginComponent::listenSecure()/msg-relayed/:payLoad.pushData.emittEvent:",t.pushData.emittEvent),console.log("cd-shell/LoginComponent::listenSecure()/msg-relayed/:payLoad.pushData.triggerEvent:",t.pushData.triggerEvent),console.log("handle msg-relayed event");break;case"push-menu":console.log("cd-shell/LoginComponent::listenSecure()/push-menu/:payLoad.pushData.emittEvent:",t.pushData.emittEvent),console.log("cd-shell/LoginComponent::listenSecure()/push-menu/:payLoad.pushData.triggerEvent:",t.pushData.triggerEvent),console.log("cd-shell/LoginComponent::listenSecure()/push-menu/:payLoad:",t),console.log("handle push-menu event"),this.routParams.queryParams.token=t.pushData.token}},error:t=>{console.error("cd-shell/cd-shell/LoginComponent::listen/Error receiving message:",t)},complete:()=>{console.log("cd-shell/cd-shell/LoginComponent::listen/Message subscription complete")}})}sendSioMessage(n,t){this.logger.info("cd-shell/LoginComponent::sendSioMessage/triggerEvent:",n),this.logger.info("cd-shell/LoginComponent::sendSioMessage/envl:",t),this.svSioTest.sendMessage(n,t).subscribe({next:r=>{console.log("Message sent successfully:",r)},error:r=>{console.error("Error sending message:",r)},complete:()=>{console.log("Message sending complete")}})}setHeader(){console.log("starting LoginService::setHeader()"),this.key&&this.uid&&this.sid?this.svUser.getUser$({query:{where:{userId:this.uid,activationKey:this.key}}},this.sid).subscribe(t=>{console.log("LoginService::setHeader()/subscribe/res:",t),t.data.length>0&&(this.header=`Congratulations ${t.data[0].userName}, your account is now active.`)}):this.header="Welcome!"}login(n){this.logger.info("starting cd-shell/LoginComponent::login");let t=n.value;const r=n.valid;this.logger.info("cd-shell/LoginComponent::login/01"),this.logger.info("cd-shell/LoginComponent::login/fg:",n),this.logger.info("cd-shell/LoginComponent::login/valid:",r),this.submitted=!0,t=Object.assign({},t,{consumerGuid:c.N.consumerToken});try{this.logger.info("cd-shell/LoginComponent::login/02"),r&&(this.logger.info("cd-shell/LoginComponent::login/03"),this.initSession(t))}catch{this.logger.info("cd-shell/LoginComponent::login/04"),this.errMsg="Something went wrong!!",this.loginInvalid=!0}}initSession(n){this.logger.info("cd-shell/LoginComponent::initSession/01"),this.svUser.auth$(n).subscribe(t=>{if(!0===t.app_state.success){if(this.logger.info("cd-shell/LoginComponent::initSession/res:",JSON.stringify(t)),this.svSess.appState=t.app_state,null!==t.app_state.sess.cd_token&&t.app_state.success){this.logger.info("cd-shell/LoginComponent::initSession/02");const r=this.configPushPayload("login","push-menu",t.data.userData.userId);r.pushData.m=t.data.menuData,this.logger.info("cd-shell/LoginComponent::initSession/envl:",r),"sio"===c.N.wsMode&&(this.logger.info("cd-shell/LoginComponent::initSession/envl:...using sio"),this.svSio.sendPayLoad(r)),"wss"===c.N.wsMode&&(this.logger.info("cd-shell/LoginComponent::initSession/envl:...using wss"),this.svWss.sendMsg(r)),this.svSess.createSess(t,this.svMenu),this.svUser.currentUser={name:`${t.data.userData.userName}`,picture:`${c.N.shellHost}/user-resources/${t.data.userData.userGuid}/avatar-01/a.jpg`},this.svNav.userMenu=[{title:"Profile",link:"/pages/cd-auth/register"},{title:"Log out",link:"/pages/cd-auth/logout"}];const l={queryParams:{token:t.app_state.sess.cd_token},skipLocationChange:!0,replaceUrl:!1};this.route.navigate(["/dashboard"],l),this.route.navigate([c.N.initialPage],l)}}else this.errMsg="The userName and password were not valid",this.loginInvalid=!0,this.svSess.logout()})}configPushPayload(n,t,r){console.log("starting cd-user::LoginComponent::configPushPayload()"),this.resourceGuid=this.svBase.getGuid();const l={pushData:{pushGuid:"",m:"",pushRecepients:[],triggerEvent:"",emittEvent:"",token:"",isNotification:null,appSockets:this.socketData,isAppInit:!0,commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}},req:null,resp:null};console.log("cd-user::LoginComponent::configPushPayload()/this.resourceGuid:",this.resourceGuid);const m=this.resourceGuid,D={appId:localStorage.getItem("appId"),ngModule:"UserFrontModule",resourceName:"LoginComponent",resourceGuid:this.resourceGuid,jwtToken:this.jwtWsToken,socket:null,socketId:"",commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}};localStorage.setItem(m,JSON.stringify(D));const L=[{userId:r,subTypeId:1,cdObjId:D}],h={...l};h.pushData.triggerEvent=n,h.pushData.emittEvent=t;const N={...L[0]};N.subTypeId=1,h.pushData.pushRecepients.push(N);const S={...L[0]};return S.subTypeId=7,this.logger.info("cd-user/LoginComponent::configPushPayload()/uRecepient:",JSON.stringify(S)),S.cdObjId=this.sidebarInitData.value,h.pushData.pushRecepients.push(S),this.logger.info("cd-user/LoginComponent::configPushPayload()/envl:",JSON.stringify(h)),h}saveSocket(n){console.log("cd-shell/LoginComponent::saveSocket()/payLoad:",n);const t=n.pushData.appSockets.filter(function r(l){return"appInit"===l.name?l:null});if(t.length>0){const l=JSON.stringify(t);localStorage.removeItem("socketData"),localStorage.setItem("socketData",l)}}updateRelayed(n){console.log("updateRelayed()/01"),console.log("updateRelayed()/payLoad:",n)}searchLocalStorage(n){this.logger.info("starting cd-shell/LoginComponent::searchLocalStorage()/lcLength:");const t=[],r=localStorage.length;this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/lcLength:",r);for(let s=0;s<localStorage.length;s++){const g=localStorage.key(s);var m=localStorage.getItem(g);this.logger.info("Key: "+g+", Value: "+m);try{if(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/1"),"object"==typeof m){this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/2"),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/v:",m);const x=JSON.parse(m);"success"in x&&(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/3"),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/appState:",x)),"resourceGuid"in x&&(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/4"),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/cdObjId:",x)),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/5"),t.push({key:g,value:JSON.parse(m)})}else this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/typeof (v):",typeof m),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/6"),t.push({key:g,value:JSON.parse(m)})}catch(x){this.logger.info("offending item:",m),this.logger.info("the item is not an object"),this.logger.info("Error:",x)}}this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/lcArr:",t),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/f.cdObjId!.resourceName:",n.cdObjId.resourceName);const L=s=>"object"==typeof s.value,h=s=>"resourceName"in s.value,N=s=>s.value.resourceName===n.cdObjId.resourceName&&s.value.ngModule===n.cdObjId.ngModule,S=(s,g)=>s.value.commTrack.initTime>g.value.commTrack.initTime?s:g;let E=null;try{this.debug?(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/debug=true:"),E=t.filter(s=>"object"==typeof s.value?(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByObject: d:",s),s):null).filter(s=>"resourceName"in s.value?(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByResourceNameField: d:",s),s):null).filter(s=>(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByName: d:",s),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByName: d.value.resourceName:",s.value.resourceName),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.resourceName:",n.cdObjId.resourceName),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByName: d.value.ngModule:",s.value.ngModule),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.ngModule:",n.cdObjId.ngModule),s.value.resourceName===n.cdObjId.resourceName&&s.value.ngModule===n.cdObjId.ngModule?s:null)).reduce((s={},g={})=>(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/prev:",s),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/current:",g),s.value.commTrack.initTime>g.value.commTrack.initTime?s:g))):(this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/debug=false:"),E=t.filter(L).filter(h).filter(N).reduce(S)),this.logger.info("cd-shell/LoginComponent::searchLocalStorage()/ret:",E)}catch(s){this.logger.info("Error:",s)}return E}onFocus(){this.errMsg=""}}b.\u0275fac=function(n){return new(n||b)(e.\u0275\u0275directiveInject(F.NGXLogger),e.\u0275\u0275directiveInject(u.SioClientService),e.\u0275\u0275directiveInject(u.WebsocketService),e.\u0275\u0275directiveInject(u.UserService),e.\u0275\u0275directiveInject(u.SessService),e.\u0275\u0275directiveInject(u.MenuService),e.\u0275\u0275directiveInject(u.NavService),e.\u0275\u0275directiveInject(d.Router),e.\u0275\u0275directiveInject(d.ActivatedRoute),e.\u0275\u0275directiveInject(u.BaseService),e.\u0275\u0275directiveInject(G.h))},b.\u0275cmp=e.\u0275\u0275defineComponent({type:b,selectors:[["app-login"]],decls:56,vars:12,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","userName"],["formControlName","userName","id","userName","placeholder","userName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customControlInline",1,"custom-control-input"],["for","customControlInline",1,"custom-control-label"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","mr-1"],[1,"mt-5","text-center"],["routerLink","/account/signup",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return t.login(t.fg)}),e.\u0275\u0275template(22,U,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(23,"div",18),e.\u0275\u0275element(24,"i",19),e.\u0275\u0275elementStart(25,"label",20),e.\u0275\u0275text(26,"User Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",21),e.\u0275\u0275template(28,J,3,2,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",18),e.\u0275\u0275element(30,"i",23),e.\u0275\u0275elementStart(31,"label",24),e.\u0275\u0275text(32,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",25),e.\u0275\u0275template(34,$,2,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",26),e.\u0275\u0275element(36,"input",27),e.\u0275\u0275elementStart(37,"label",28),e.\u0275\u0275text(38,"Remember me"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",29)(40,"button",30),e.\u0275\u0275text(41,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",29)(43,"a",31),e.\u0275\u0275element(44,"i",32),e.\u0275\u0275text(45," Forgot your password?"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(46,"div",33)(47,"p"),e.\u0275\u0275text(48,"Don't have an account ? "),e.\u0275\u0275elementStart(49,"a",34),e.\u0275\u0275text(50," Register "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(53,"div",35)(54,"div",36),e.\u0275\u0275element(55,"div",37),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(17),e.\u0275\u0275textInterpolate(t.header),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.subheader),e.\u0275\u0275advance(2),e.\u0275\u0275property("formGroup",t.fg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,P,t.submitted&&t.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.loginInvalid),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(10,P,t.submitted&&t.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.loginInvalid))},dependencies:[f.NgClass,f.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,p.NgbAlert,d.RouterLink]});var W=a(65893),O=a(52412),H=a(38697);class y{constructor(n){this.http=n}getAll(){return this.http.get("/api/login")}register(n){return this.http.post("/users/register",n)}}function K(o,n){1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1,"Registeration successfull. "),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("dismissible",!1)}function Y(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",40),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.error)}}function Z(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Userame is required"),e.\u0275\u0275elementEnd())}function Q(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,Z,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.username.errors.required)}}function X(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function q(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function ee(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,X,2,0,"div",42),e.\u0275\u0275template(2,q,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.email)}}function te(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function ne(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,te,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.password.errors.required)}}y.\u0275fac=function(n){return new(n||y)(e.\u0275\u0275inject(H.HttpClient))},y.\u0275prov=e.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac,providedIn:"root"});const A=function(o){return{"is-invalid":o}};class j{constructor(n,t,r,l,m){this.formBuilder=n,this.route=t,this.router=r,this.authenticationService=l,this.userService=m,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",i.Validators.required],email:["",[i.Validators.required,i.Validators.email]],password:["",i.Validators.required]})}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,!this.signupForm.invalid&&("firebase"===c.N.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(n=>{this.error=n||""}):this.userService.register(this.signupForm.value).pipe((0,W.first)()).subscribe(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},n=>{this.error=n||""}))}}function oe(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",31),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.error)}}function ie(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function se(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function re(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275template(1,ie,2,0,"div",33),e.\u0275\u0275template(2,se,2,0,"div",33),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.email)}}j.\u0275fac=function(n){return new(n||j)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(d.ActivatedRoute),e.\u0275\u0275directiveInject(d.Router),e.\u0275\u0275directiveInject(O.$),e.\u0275\u0275directiveInject(y))},j.\u0275cmp=e.\u0275\u0275defineComponent({type:j,selectors:[["app-signup"]],decls:60,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","#",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Register account"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Get your free ASDAP account now."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),e.\u0275\u0275template(22,K,2,1,"ngb-alert",17),e.\u0275\u0275template(23,Y,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(24,"div",19),e.\u0275\u0275element(25,"i",20),e.\u0275\u0275elementStart(26,"label",21),e.\u0275\u0275text(27,"Username"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"input",22),e.\u0275\u0275template(29,Q,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",19),e.\u0275\u0275element(31,"i",24),e.\u0275\u0275elementStart(32,"label",25),e.\u0275\u0275text(33,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(34,"input",26),e.\u0275\u0275template(35,ee,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"div",19),e.\u0275\u0275element(37,"i",27),e.\u0275\u0275elementStart(38,"label",28),e.\u0275\u0275text(39,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(40,"input",29),e.\u0275\u0275template(41,ne,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"div",10)(43,"button",30),e.\u0275\u0275text(44,"Register"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(45,"div",31)(46,"p",32),e.\u0275\u0275text(47,"By registering you agree to the ASDAP "),e.\u0275\u0275elementStart(48,"a",33),e.\u0275\u0275text(49,"Terms of Use"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(50,"div",34)(51,"p"),e.\u0275\u0275text(52,"Already have an account ? "),e.\u0275\u0275elementStart(53,"a",35),e.\u0275\u0275text(54," Login"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(55,"p"),e.\u0275\u0275text(56,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(57,"div",36)(58,"div",37),e.\u0275\u0275element(59,"div",38),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",t.signupForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.successmsg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,A,t.submitted&&t.f.username.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.username.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(11,A,t.submitted&&t.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(13,A,t.submitted&&t.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.password.errors))},dependencies:[f.NgClass,f.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,p.NgbAlert,d.RouterLink]});const le=function(o){return{"is-invalid":o}};class w{constructor(n,t,r,l){this.formBuilder=n,this.route=t,this.router=r,this.authenticationService=l,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[i.Validators.required,i.Validators.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===c.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(n=>{this.error=n||""})}}w.\u0275fac=function(n){return new(n||w)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(d.ActivatedRoute),e.\u0275\u0275directiveInject(d.Router),e.\u0275\u0275directiveInject(O.$))},w.\u0275cmp=e.\u0275\u0275defineComponent({type:w,selectors:[["app-passwordreset"]],decls:44,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Reset Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Reset your password to ASDAP."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"div",16),e.\u0275\u0275text(22," Enter your Email and instructions will be sent to you! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"form",17),e.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),e.\u0275\u0275template(24,oe,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(25,"div",19),e.\u0275\u0275element(26,"i",20),e.\u0275\u0275elementStart(27,"label",21),e.\u0275\u0275text(28,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"input",22),e.\u0275\u0275template(30,re,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",24)(32,"button",25),e.\u0275\u0275text(33,"Reset"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(34,"div",26)(35,"p"),e.\u0275\u0275text(36,"Don't have an account ? "),e.\u0275\u0275elementStart(37,"a",27),e.\u0275\u0275text(38," Log in "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"p"),e.\u0275\u0275text(40,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(41,"div",28)(42,"div",29),e.\u0275\u0275element(43,"div",30),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(23),e.\u0275\u0275property("formGroup",t.resetForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,le,t.submitted&&t.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.email.errors))},dependencies:[f.NgClass,f.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,p.NgbAlert,d.RouterLink]});const ae=[{path:"",component:b},{path:"login",component:b},{path:"signup",component:j},{path:"reset-password",component:w}];class C{constructor(n){this.router=n,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(n=>{n instanceof d.NavigationStart?console.log("AuthRoutingModule::monitorRouting()/Navigation started to:",n.url,"with state:",n.restoredState):n instanceof d.NavigationEnd?console.log("AuthRoutingModule::monitorRouting()/Navigation ended at:",n.url,"with state:",n.urlAfterRedirects):n instanceof d.NavigationCancel?console.warn("AuthRoutingModule::monitorRouting()/Navigation canceled:",n.url,"with reason:",n.reason):n instanceof d.NavigationError&&console.error("AuthRoutingModule::monitorRouting()/Navigation error:",n.url,n.error)})}}C.\u0275fac=function(n){return new(n||C)(e.\u0275\u0275inject(d.Router))},C.\u0275mod=e.\u0275\u0275defineNgModule({type:C}),C.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.RouterModule.forChild(ae),d.RouterModule]});class I{}I.\u0275fac=function(n){return new(n||I)},I.\u0275mod=e.\u0275\u0275defineNgModule({type:I}),I.\u0275inj=e.\u0275\u0275defineInjector({imports:[f.CommonModule,i.FormsModule,i.ReactiveFormsModule,p.NgbAlertModule,T.W,C]})}}]);