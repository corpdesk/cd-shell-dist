(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[6262],{6262:(H,k,s)=>{s.r(k),s.d(k,{AccountModule:()=>m});var v=s(35228),r=s(37011),h=s(87675);const P=[{path:"auth",loadChildren:()=>Promise.resolve().then(s.bind(s,41459)).then(C=>C.AuthModule)}];class c{constructor(l){this.router=l,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(l=>{l instanceof r.NavigationStart?console.log("AccountRoutingModule::monitorRouting()/Navigation started to:",l.url):l instanceof r.NavigationEnd?console.log("AccountRoutingModule::monitorRouting()/Navigation ended at:",l.url):l instanceof r.NavigationCancel?console.warn("AccountRoutingModule::monitorRouting()/Navigation canceled:",l.url):l instanceof r.NavigationError&&console.error("AccountRoutingModule::monitorRouting()/Navigation error:",l.url,l.error)})}}c.\u0275fac=function(l){return new(l||c)(h.\u0275\u0275inject(r.Router))},c.\u0275mod=h.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=h.\u0275\u0275defineInjector({imports:[r.RouterModule.forChild(P),r.RouterModule]});var O=s(41459);class m{}m.\u0275fac=function(l){return new(l||m)},m.\u0275mod=h.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=h.\u0275\u0275defineInjector({imports:[v.CommonModule,c,O.AuthModule]})},41459:(H,k,s)=>{s.r(k),s.d(k,{AuthModule:()=>x});var v=s(35228),r=s(30533),h=s(76380),P=s(54171),c=s(37011),O=s(15861),m=s(41115),C=s(81042),l=s(43707),e=s(87675),F=s(52412),W=s(27508),J=s(33635),_=s(65893),U=s(38697);class L{constructor(t){this.http=t,console.log("AuthCdAuthenticationService::constructor()/01"),this.currentUserSubject=new J.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return console.log("AuthCdAuthenticationService::get currentUserValue()/this.currentUserSubject:",this.currentUserSubject),this.currentUserSubject.value}login(t,n){return console.log("AuthCdAuthenticationService::login()/01"),console.log("AuthCdAuthenticationService::login()/email:",t),console.log("AuthCdAuthenticationService::login()/password:",n),this.http.post("/users/authenticate",{email:t,password:n}).pipe((0,_.map)(a=>(console.log("AuthCdAuthenticationService::login()/02"),console.log("AuthCdAuthenticationService::login()/user.token:",a),a&&a.token&&(console.log("AuthCdAuthenticationService::login()/email:",t),console.log("AuthCdAuthenticationService::login()/password:",n),console.log("AuthCdAuthenticationService::login()/user:",JSON.stringify(a)),localStorage.setItem("currentUser",JSON.stringify(a)),this.currentUserSubject.next(a)),a)))}loginCd(t,n){return console.log("AuthCdAuthenticationService::loginCd()/01"),console.log("AuthCdAuthenticationService::loginCd()/email:",t),console.log("AuthCdAuthenticationService::loginCd()/password:",n),this.http.post("/users/authenticate",{email:t,password:n}).pipe((0,_.map)(a=>(console.log("AuthCdAuthenticationService::loginCd()/02"),console.log("AuthCdAuthenticationService::loginCd()/user.token:",a),a&&a.token&&(console.log("AuthCdAuthenticationService::loginCd()/email:",t),console.log("AuthCdAuthenticationService::loginCd()/password:",n),console.log("AuthCdAuthenticationService::loginCd()/user:",JSON.stringify(a)),localStorage.setItem("currentUser",JSON.stringify(a)),this.currentUserSubject.next(a)),a)))}logout(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)}}L.\u0275fac=function(t){return new(t||L)(e.\u0275\u0275inject(U.HttpClient))},L.\u0275prov=e.\u0275\u0275defineInjectable({token:L,factory:L.\u0275fac,providedIn:"root"});var z=s(55250);class I{constructor(t){this.http=t,this.menuData=[],this.menuDataSubject=new J.BehaviorSubject(null),this.menuData$=this.menuDataSubject.asObservable()}fetchMenuData(){return this.http.get("/api/menu")}setMenuData(t){this.menuDataSubject.next(t)}}I.\u0275fac=function(t){return new(t||I)(e.\u0275\u0275inject(U.HttpClient))},I.\u0275prov=e.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac,providedIn:"root"});var K=s(81634);function Y(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",38),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function Z(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName is required"),e.\u0275\u0275elementEnd())}function Q(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName must be a valid userName address"),e.\u0275\u0275elementEnd())}function X(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,Z,2,0,"div",40),e.\u0275\u0275template(2,Q,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid)}}function q(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function ee(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,q,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid)}}const $=function(o){return{"is-invalid":o}};class N{constructor(t,n,a,d,u,S,E,b,V,B,w,i,g,p,f,T){this.formBuilder=t,this.route=n,this.router=a,this.authenticationService=d,this.authFackservice=u,this.authCdservice=S,this.logger=E,this.svSio=b,this.svWss=V,this.svUser=B,this.svSess=w,this.svMenu=i,this.svNav=g,this.svBase=p,this.svMenuData=f,this.communicationService=T,this.submitted=!1,this.error="",this.year=(new Date).getFullYear(),this.debug=!0,this.resourceGuid=(0,C.Z)(),this.loginInvalid=!1,this.rememberMe=!0,this.socketData=[],this.header="Welcome!"}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.route.queryParams.subscribe(d=>{this.key=d.key,this.sid=d.sid,this.uid=d.uid,console.log(this.key,this.sid,this.uid),this.setHeader()}),this.fg=this.formBuilder.group({userName:["",[r.Validators.required]],password:["",[r.Validators.required]]}),this.logger.info("cd-shell/LoginComponent::LoginComponent::ngOnInit()/StorageType.CdObjId:",l.StorageType.CdObjId);const t={storageType:l.StorageType.CdObjId,cdObjId:{appId:localStorage.getItem("appId"),resourceGuid:null,resourceName:"SidebarComponent",ngModule:"SharedModule",jwtToken:localStorage.getItem("accessToken"),socket:null,commTrack:null}};this.logger.info("cd-shell/LoginComponent::LoginComponent::ngOnInit()/filter:",t),this.sidebarInitData=this.searchLocalStorage(t),this.logger.info("user/LoginComponent::ngOnInit()/this.sidebarInitData:",this.sidebarInitData);const n=localStorage.getItem("socketData");if(n){let d=function(u){return"appInit"===u.name?u:null};this.socketData=JSON.parse(n).filter(d),this.logger.info("user/LoginComponent::ngOnInit()/this.socketData:",this.socketData)}else this.logger.info("Err: socket data is not valid")}setHeader(){console.log("starting LoginService::setHeader()"),this.key&&this.uid&&this.sid?this.svUser.getUser$({query:{where:{userId:this.uid,activationKey:this.key}}},this.sid).subscribe(n=>{console.log("LoginService::setHeader()/subscribe/res:",n),n.data.length>0&&(this.header=`Welcome ${n[0].userName}`)}):this.header="Welcome!"}confirmUser(){var t=this;return(0,O.Z)(function*(){return yield t.svUser.getUser$,!1})()}login(t){let n=t.value;const a=t.valid;this.logger.info("user/LoginComponent::login/01"),this.logger.info("user/LoginComponent::login/fg:",t),this.logger.info("user/LoginComponent::login/valid:",a),this.submitted=!0,n=Object.assign({},n,{consumerGuid:m.N.consumerToken});try{this.logger.info("user/LoginComponent::login/02"),a&&(this.logger.info("user/LoginComponent::login/03"),this.initSession(n))}catch{this.logger.info("user/LoginComponent::login/04"),this.errMsg="Something went wrong!!",this.loginInvalid=!0}}initSession(t){this.logger.info("user/LoginComponent::initSession/01"),this.svUser.auth$(t).subscribe(n=>{if(!0===n.app_state.success){if(this.logger.info("user/LoginComponent::initSession/res:",JSON.stringify(n)),this.svSess.appState=n.app_state,null!==n.app_state.sess.cd_token&&n.app_state.success){this.logger.info("user/LoginComponent::initSession/02");const a=this.configPushPayload("login","push-menu",n.data.userData.userId);a.pushData.m=n.data.menuData,this.communicationService.callHtmlMenu(n.data.menuData,n.app_state.sess.cd_token),this.logger.info("user/LoginComponent::initSession/envl:",a),"sio"===m.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing sio"),this.svSio.sendPayLoad(a)),"wss"===m.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing wss"),this.svWss.sendMsg(a)),this.svSess.createSess(n,this.svMenu),this.svUser.currentUser={name:`${n.data.userData.userName}`,picture:`${m.N.shellHost}/user-resources/${n.data.userData.userGuid}/avatar-01/a.jpg`},this.svNav.userMenu=[{title:"Profile",link:"/pages/cd-auth/register"},{title:"Log out",link:"/pages/cd-auth/logout"}],this.router.navigate([m.N.initialPage],{queryParams:{token:n.app_state.sess.cd_token},skipLocationChange:!0,replaceUrl:!1})}}else this.errMsg="The userName and password were not valid",this.loginInvalid=!0,this.svSess.logout()})}configPushPayload(t,n,a){this.logger.info("starting cd-shell/LoginComponent::LoginComponent::configPushPayload()");const d={pushData:{pushGuid:"",m:"",pushRecepients:[],triggerEvent:"",emittEvent:"",token:"",isNotification:null,appSockets:this.socketData,commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}},req:null,resp:null},u=[{userId:a,subTypeId:1,cdObjId:{appId:m.N.appId,ngModule:"UserFrontModule",resourceName:"LoginComponent",resourceGuid:(0,C.Z)(),jwtToken:"",socket:null,socketId:"",commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}}}],S={...d};S.pushData.triggerEvent=t,S.pushData.emittEvent=n;const E={...u[0]};E.subTypeId=1,S.pushData.pushRecepients.push(E),this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/this.sidebarInitData:",JSON.stringify(this.sidebarInitData)),this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/this.sidebarInitData.value:",JSON.stringify(this.sidebarInitData.value));const b={...u[0]};return b.subTypeId=7,this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/uRecepient:",JSON.stringify(b)),b.cdObjId=this.sidebarInitData.value,S.pushData.pushRecepients.push(b),this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/envl:",JSON.stringify(S)),S}searchLocalStorage(t){this.logger.info("starting LoginComponent::searchLocalStorage()/01");const n=[],a=localStorage.length;this.logger.info("LoginComponent::searchLocalStorage()/lcLength:",a);for(let i=0;i<localStorage.length;i++){const g=localStorage.key(i);var u=localStorage.getItem(g);this.logger.info("Key: "+g+", Value: "+u);try{if(this.logger.info("LoginComponent::searchLocalStorage()/1"),"object"==typeof u){this.logger.info("LoginComponent::searchLocalStorage()/2"),this.logger.info("LoginComponent::searchLocalStorage()/v:",u);const p=JSON.parse(u);"success"in p&&(this.logger.info("LoginComponent::searchLocalStorage()/3"),this.logger.info("LoginComponent::searchLocalStorage()/appState:",p)),"resourceGuid"in p&&(this.logger.info("LoginComponent::searchLocalStorage()/4"),this.logger.info("LoginComponent::searchLocalStorage()/cdObjId:",p)),this.logger.info("LoginComponent::searchLocalStorage()/5"),n.push({key:g,value:JSON.parse(u)})}else this.logger.info("LoginComponent::searchLocalStorage()/typeof (v):",typeof u),this.logger.info("LoginComponent::searchLocalStorage()/v:",u),this.logger.info("LoginComponent::searchLocalStorage()/6"),n.push({key:g,value:u})}catch(p){this.logger.info("LoginComponent::searchLocalStorage()/7"),this.logger.error("offending item:",u),this.logger.error("the item is not an object"),this.logger.error("Error:",p)}}this.logger.info("LoginComponent::searchLocalStorage()/8"),this.logger.info("LoginComponent::searchLocalStorage()/lcArr:",n),this.logger.info("LoginComponent::searchLocalStorage()/f.cdObjId!.resourceName:",t.cdObjId.resourceName);const E=i=>"object"==typeof i.value,b=i=>"resourceName"in i.value,V=i=>i.value.resourceName===t.cdObjId.resourceName&&i.value.ngModule===t.cdObjId.ngModule,B=(i,g)=>i.value.commTrack.initTime>g.value.commTrack.initTime?i:g;let w=null;try{this.debug?(this.logger.info("LoginComponent::searchLocalStorage()/9"),this.logger.info("LoginComponent::searchLocalStorage()/debug=true:"),w=n.filter(i=>(this.logger.info("LoginComponent::searchLocalStorage()/10"),"object"==typeof i.value?(this.logger.info("LoginComponent::searchLocalStorage()/11"),this.logger.info("LoginComponent::searchLocalStorage()/filteredByObject: d:",i),i):(this.logger.info("LoginComponent::searchLocalStorage()/12"),[]))).filter(i=>(this.logger.info("LoginComponent::searchLocalStorage()/13"),this.logger.info("LoginComponent::searchLocalStorage()//d:",i),"object"==typeof i.value?(this.logger.info("LoginComponent::searchLocalStorage()/13-1"),"resourceName"in i.value?(this.logger.info("LoginComponent::searchLocalStorage()/14"),this.logger.info("LoginComponent::searchLocalStorage()/filteredByResourceNameField: d:",i),i):(this.logger.info("LoginComponent::searchLocalStorage()/15"),[])):(this.logger.info("LoginComponent::searchLocalStorage()/15-1"),[]))).filter(i=>(this.logger.info("LoginComponent::searchLocalStorage()/16"),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d:",i),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.resourceName:",i.value.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.resourceName:",t.cdObjId.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.ngModule:",i.value.ngModule),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.ngModule:",t.cdObjId.ngModule),i.value.resourceName===t.cdObjId.resourceName&&i.value.ngModule===t.cdObjId.ngModule?(this.logger.info("LoginComponent::searchLocalStorage()/17"),i):(this.logger.info("LoginComponent::searchLocalStorage()/18"),[]))).reduce((i={},g={})=>{this.logger.info("LoginComponent::searchLocalStorage()/19"),this.logger.info("LoginComponent::searchLocalStorage()/prev:",i),this.logger.info("LoginComponent::searchLocalStorage()/current:",g);const p=y=>{if("string"==typeof y.value)try{return JSON.parse(y.value)}catch{return this.logger.error("Failed to parse item.value:",y.value),null}return y.value},f=p(i),T=p(g);if(f&&T&&f.commTrack&&T.commTrack){const y=f.commTrack.initTime,R=T.commTrack.initTime;if("number"==typeof y&&"number"==typeof R)return y>R?i:g;this.logger.error("Invalid initTime:",y,R)}else this.logger.error("Invalid commTrack structure:"),this.logger.error("prevValue:",f),this.logger.error("currentValue:",T);return i})):(this.logger.info("LoginComponent::searchLocalStorage()/20"),this.logger.info("LoginComponent::searchLocalStorage()/debug=false:"),w=n.filter(E).filter(b).filter(V).reduce(B)),this.logger.info("LoginComponent::searchLocalStorage()/21"),this.logger.info("LoginComponent::searchLocalStorage()/ret:",w)}catch(i){this.logger.info("LoginComponent::searchLocalStorage()/22"),this.logger.error("Error:",i)}return this.logger.info("LoginComponent::searchLocalStorage()/22"),w}onFocus(){this.errMsg=""}}N.\u0275fac=function(t){return new(t||N)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder),e.\u0275\u0275directiveInject(c.ActivatedRoute),e.\u0275\u0275directiveInject(c.Router),e.\u0275\u0275directiveInject(F.$),e.\u0275\u0275directiveInject(W.g),e.\u0275\u0275directiveInject(L),e.\u0275\u0275directiveInject(z.NGXLogger),e.\u0275\u0275directiveInject(l.SioClientService),e.\u0275\u0275directiveInject(l.WebsocketService),e.\u0275\u0275directiveInject(l.UserService),e.\u0275\u0275directiveInject(l.SessService),e.\u0275\u0275directiveInject(l.MenuService),e.\u0275\u0275directiveInject(l.NavService),e.\u0275\u0275directiveInject(l.BaseService),e.\u0275\u0275directiveInject(I),e.\u0275\u0275directiveInject(K.O))},N.\u0275cmp=e.\u0275\u0275defineComponent({type:N,selectors:[["app-login"]],decls:56,vars:11,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","userName"],["formControlName","userName","id","userName","placeholder","userName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customControlInline",1,"custom-control-input"],["for","customControlInline",1,"custom-control-label"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","mr-1"],[1,"mt-5","text-center"],["routerLink","/account/signup",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Sign in to continue to ASDAP"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return n.login(n.fg)}),e.\u0275\u0275template(22,Y,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(23,"div",18),e.\u0275\u0275element(24,"i",19),e.\u0275\u0275elementStart(25,"label",20),e.\u0275\u0275text(26,"User Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",21),e.\u0275\u0275template(28,X,3,2,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",18),e.\u0275\u0275element(30,"i",23),e.\u0275\u0275elementStart(31,"label",24),e.\u0275\u0275text(32,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",25),e.\u0275\u0275template(34,ee,2,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",26),e.\u0275\u0275element(36,"input",27),e.\u0275\u0275elementStart(37,"label",28),e.\u0275\u0275text(38,"Remember me"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",29)(40,"button",30),e.\u0275\u0275text(41,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",29)(43,"a",31),e.\u0275\u0275element(44,"i",32),e.\u0275\u0275text(45," Forgot your password?"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(46,"div",33)(47,"p"),e.\u0275\u0275text(48,"Don't have an account ? "),e.\u0275\u0275elementStart(49,"a",34),e.\u0275\u0275text(50," Register "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(53,"div",35)(54,"div",36),e.\u0275\u0275element(55,"div",37),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(17),e.\u0275\u0275textInterpolate(n.header),e.\u0275\u0275advance(4),e.\u0275\u0275property("formGroup",n.fg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(7,$,n.submitted&&n.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.loginInvalid),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,$,n.submitted&&n.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.loginInvalid))},dependencies:[v.NgClass,v.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,h.NgbAlert,c.RouterLink]});class j{constructor(t){this.http=t}getAll(){return this.http.get("/api/login")}register(t){return this.http.post("/users/register",t)}}function te(o,t){1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1,"Registeration successfull. "),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("dismissible",!1)}function ne(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",40),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function oe(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Userame is required"),e.\u0275\u0275elementEnd())}function ie(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,oe,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.username.errors.required)}}function re(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function ae(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function se(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,re,2,0,"div",42),e.\u0275\u0275template(2,ae,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.email)}}function le(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function ce(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,le,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.password.errors.required)}}j.\u0275fac=function(t){return new(t||j)(e.\u0275\u0275inject(U.HttpClient))},j.\u0275prov=e.\u0275\u0275defineInjectable({token:j,factory:j.\u0275fac,providedIn:"root"});const G=function(o){return{"is-invalid":o}};class M{constructor(t,n,a,d,u){this.formBuilder=t,this.route=n,this.router=a,this.authenticationService=d,this.userService=u,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",r.Validators.required],email:["",[r.Validators.required,r.Validators.email]],password:["",r.Validators.required]})}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,!this.signupForm.invalid&&("firebase"===m.N.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(t=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(t=>{this.error=t||""}):this.userService.register(this.signupForm.value).pipe((0,_.first)()).subscribe(t=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},t=>{this.error=t||""}))}}function ue(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",31),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function de(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function me(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function ge(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275template(1,de,2,0,"div",33),e.\u0275\u0275template(2,me,2,0,"div",33),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.email)}}M.\u0275fac=function(t){return new(t||M)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder),e.\u0275\u0275directiveInject(c.ActivatedRoute),e.\u0275\u0275directiveInject(c.Router),e.\u0275\u0275directiveInject(F.$),e.\u0275\u0275directiveInject(j))},M.\u0275cmp=e.\u0275\u0275defineComponent({type:M,selectors:[["app-signup"]],decls:60,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","#",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Register account"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Get your free ASDAP account now."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return n.onSubmit()}),e.\u0275\u0275template(22,te,2,1,"ngb-alert",17),e.\u0275\u0275template(23,ne,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(24,"div",19),e.\u0275\u0275element(25,"i",20),e.\u0275\u0275elementStart(26,"label",21),e.\u0275\u0275text(27,"Username"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"input",22),e.\u0275\u0275template(29,ie,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",19),e.\u0275\u0275element(31,"i",24),e.\u0275\u0275elementStart(32,"label",25),e.\u0275\u0275text(33,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(34,"input",26),e.\u0275\u0275template(35,se,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"div",19),e.\u0275\u0275element(37,"i",27),e.\u0275\u0275elementStart(38,"label",28),e.\u0275\u0275text(39,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(40,"input",29),e.\u0275\u0275template(41,ce,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"div",10)(43,"button",30),e.\u0275\u0275text(44,"Register"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(45,"div",31)(46,"p",32),e.\u0275\u0275text(47,"By registering you agree to the ASDAP "),e.\u0275\u0275elementStart(48,"a",33),e.\u0275\u0275text(49,"Terms of Use"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(50,"div",34)(51,"p"),e.\u0275\u0275text(52,"Already have an account ? "),e.\u0275\u0275elementStart(53,"a",35),e.\u0275\u0275text(54," Login"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(55,"p"),e.\u0275\u0275text(56,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(57,"div",36)(58,"div",37),e.\u0275\u0275element(59,"div",38),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",n.signupForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.successmsg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,G,n.submitted&&n.f.username.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.username.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(11,G,n.submitted&&n.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(13,G,n.submitted&&n.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.password.errors))},dependencies:[v.NgClass,v.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,h.NgbAlert,c.RouterLink]});const pe=function(o){return{"is-invalid":o}};class D{constructor(t,n,a,d){this.formBuilder=t,this.route=n,this.router=a,this.authenticationService=d,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[r.Validators.required,r.Validators.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===m.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(t=>{this.error=t||""})}}D.\u0275fac=function(t){return new(t||D)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder),e.\u0275\u0275directiveInject(c.ActivatedRoute),e.\u0275\u0275directiveInject(c.Router),e.\u0275\u0275directiveInject(F.$))},D.\u0275cmp=e.\u0275\u0275defineComponent({type:D,selectors:[["app-passwordreset"]],decls:44,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Reset Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Reset your password to ASDAP."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"div",16),e.\u0275\u0275text(22," Enter your Email and instructions will be sent to you! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"form",17),e.\u0275\u0275listener("ngSubmit",function(){return n.onSubmit()}),e.\u0275\u0275template(24,ue,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(25,"div",19),e.\u0275\u0275element(26,"i",20),e.\u0275\u0275elementStart(27,"label",21),e.\u0275\u0275text(28,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"input",22),e.\u0275\u0275template(30,ge,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",24)(32,"button",25),e.\u0275\u0275text(33,"Reset"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(34,"div",26)(35,"p"),e.\u0275\u0275text(36,"Don't have an account ? "),e.\u0275\u0275elementStart(37,"a",27),e.\u0275\u0275text(38," Log in "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"p"),e.\u0275\u0275text(40,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(41,"div",28)(42,"div",29),e.\u0275\u0275element(43,"div",30),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(23),e.\u0275\u0275property("formGroup",n.resetForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,pe,n.submitted&&n.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.email.errors))},dependencies:[v.NgClass,v.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,h.NgbAlert,c.RouterLink]});const he=[{path:"",component:N},{path:"login",component:N},{path:"signup",component:M},{path:"reset-password",component:D}];class A{constructor(t){this.router=t,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(t=>{t instanceof c.NavigationStart?console.log("AuthRoutingModule::monitorRouting()/Navigation started to:",t.url,"with state:",t.restoredState):t instanceof c.NavigationEnd?console.log("AuthRoutingModule::monitorRouting()/Navigation ended at:",t.url,"with state:",t.urlAfterRedirects):t instanceof c.NavigationCancel?console.warn("AuthRoutingModule::monitorRouting()/Navigation canceled:",t.url,"with reason:",t.reason):t instanceof c.NavigationError&&console.error("AuthRoutingModule::monitorRouting()/Navigation error:",t.url,t.error)})}}A.\u0275fac=function(t){return new(t||A)(e.\u0275\u0275inject(c.Router))},A.\u0275mod=e.\u0275\u0275defineNgModule({type:A}),A.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.RouterModule.forChild(he),c.RouterModule]});class x{}x.\u0275fac=function(t){return new(t||x)},x.\u0275mod=e.\u0275\u0275defineNgModule({type:x}),x.\u0275inj=e.\u0275\u0275defineInjector({imports:[v.CommonModule,r.FormsModule,r.ReactiveFormsModule,h.NgbAlertModule,P.W,A]})}}]);