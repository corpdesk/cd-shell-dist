(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[6262],{6262:(B,E,s)=>{s.r(E),s.d(E,{AccountModule:()=>f});var p=s(35228),i=s(37011),g=s(87675);const R=[{path:"auth",loadChildren:()=>Promise.resolve().then(s.bind(s,41459)).then(u=>u.AuthModule)}];class l{constructor(e){this.router=e,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(e=>{e instanceof i.NavigationStart?console.log("AccountRoutingModule::monitorRouting()/Navigation started to:",e.url):e instanceof i.NavigationEnd?console.log("AccountRoutingModule::monitorRouting()/Navigation ended at:",e.url):e instanceof i.NavigationCancel?console.warn("AccountRoutingModule::monitorRouting()/Navigation canceled:",e.url):e instanceof i.NavigationError&&console.error("AccountRoutingModule::monitorRouting()/Navigation error:",e.url,e.error)})}}l.\u0275fac=function(e){return new(e||l)(g.\u0275\u0275inject(i.Router))},l.\u0275mod=g.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=g.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(R),i.RouterModule]});var h=s(41459);class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=g.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=g.\u0275\u0275defineInjector({imports:[p.CommonModule,l,h.AuthModule]})},41459:(B,E,s)=>{s.r(E),s.d(E,{AuthModule:()=>j});var p=s(35228),i=s(30533),g=s(76380),R=s(54171),l=s(37011),h=s(41115),f=s(81042),u=s(15659),e=s(87675),D=s(52412),V=s(27508),U=s(33635),k=s(65893),O=s(38697);class b{constructor(t){this.http=t,console.log("AuthCdAuthenticationService::constructor()/01"),this.currentUserSubject=new U.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return console.log("AuthCdAuthenticationService::get currentUserValue()/this.currentUserSubject:",this.currentUserSubject),this.currentUserSubject.value}login(t,n){return console.log("AuthCdAuthenticationService::login()/01"),console.log("AuthCdAuthenticationService::login()/email:",t),console.log("AuthCdAuthenticationService::login()/password:",n),this.http.post("/users/authenticate",{email:t,password:n}).pipe((0,k.map)(a=>(console.log("AuthCdAuthenticationService::login()/02"),console.log("AuthCdAuthenticationService::login()/user.token:",a),a&&a.token&&(console.log("AuthCdAuthenticationService::login()/email:",t),console.log("AuthCdAuthenticationService::login()/password:",n),console.log("AuthCdAuthenticationService::login()/user:",JSON.stringify(a)),localStorage.setItem("currentUser",JSON.stringify(a)),this.currentUserSubject.next(a)),a)))}loginCd(t,n){return console.log("AuthCdAuthenticationService::loginCd()/01"),console.log("AuthCdAuthenticationService::loginCd()/email:",t),console.log("AuthCdAuthenticationService::loginCd()/password:",n),this.http.post("/users/authenticate",{email:t,password:n}).pipe((0,k.map)(a=>(console.log("AuthCdAuthenticationService::loginCd()/02"),console.log("AuthCdAuthenticationService::loginCd()/user.token:",a),a&&a.token&&(console.log("AuthCdAuthenticationService::loginCd()/email:",t),console.log("AuthCdAuthenticationService::loginCd()/password:",n),console.log("AuthCdAuthenticationService::loginCd()/user:",JSON.stringify(a)),localStorage.setItem("currentUser",JSON.stringify(a)),this.currentUserSubject.next(a)),a)))}logout(){localStorage.removeItem("currentUser"),this.currentUserSubject.next(null)}}b.\u0275fac=function(t){return new(t||b)(e.\u0275\u0275inject(O.HttpClient))},b.\u0275prov=e.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});var J=s(55250);class y{constructor(t){this.http=t,this.menuData=[],this.menuDataSubject=new U.BehaviorSubject(null),this.menuData$=this.menuDataSubject.asObservable()}fetchMenuData(){return this.http.get("/api/menu")}setMenuData(t){this.menuDataSubject.next(t)}}y.\u0275fac=function(t){return new(t||y)(e.\u0275\u0275inject(O.HttpClient))},y.\u0275prov=e.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac,providedIn:"root"});var $=s(81634);function z(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",38),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function H(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName is required"),e.\u0275\u0275elementEnd())}function W(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName must be a valid userName address"),e.\u0275\u0275elementEnd())}function K(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,H,2,0,"div",40),e.\u0275\u0275template(2,W,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid)}}function Y(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function Z(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,Y,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.loginInvalid)}}const G=function(o){return{"is-invalid":o}};class L{constructor(t,n,a,m,c,v,A,S,F,_,x,r,d,C,T,de){this.formBuilder=t,this.route=n,this.router=a,this.authenticationService=m,this.authFackservice=c,this.authCdservice=v,this.logger=A,this.svSio=S,this.svWss=F,this.svUser=_,this.svSess=x,this.svMenu=r,this.svNav=d,this.svBase=C,this.svMenuData=T,this.communicationService=de,this.submitted=!1,this.error="",this.year=(new Date).getFullYear(),this.debug=!0,this.resourceGuid=(0,f.Z)(),this.loginInvalid=!1,this.rememberMe=!0,this.socketData=[]}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.fg=this.formBuilder.group({userName:["",[i.Validators.required]],password:["",[i.Validators.required]]}),this.logger.info("cd-shell/LoginComponent::LoginComponent::ngOnInit()/StorageType.CdObjId:",u.StorageType.CdObjId);const t={storageType:u.StorageType.CdObjId,cdObjId:{appId:localStorage.getItem("appId"),resourceGuid:null,resourceName:"SidebarComponent",ngModule:"SharedModule",jwtToken:localStorage.getItem("accessToken"),socket:null,commTrack:null}};this.logger.info("cd-shell/LoginComponent::LoginComponent::ngOnInit()/filter:",t),this.sidebarInitData=this.searchLocalStorage(t),this.logger.info("user/LoginComponent::ngOnInit()/this.sidebarInitData:",this.sidebarInitData);const n=localStorage.getItem("socketData");if(n){let m=function(c){return"appInit"===c.name?c:null};this.socketData=JSON.parse(n).filter(m),this.logger.info("user/LoginComponent::ngOnInit()/this.socketData:",this.socketData)}else this.logger.info("Err: socket data is not valid")}login(t){let n=t.value;const a=t.valid;this.logger.info("user/LoginComponent::login/01"),this.logger.info("user/LoginComponent::login/fg:",t),this.logger.info("user/LoginComponent::login/valid:",a),this.submitted=!0,n=Object.assign({},n,{consumerGuid:h.N.consumerToken});try{this.logger.info("user/LoginComponent::login/02"),a&&(this.logger.info("user/LoginComponent::login/03"),this.initSession(n))}catch{this.logger.info("user/LoginComponent::login/04"),this.errMsg="Something went wrong!!",this.loginInvalid=!0}}initSession(t){this.logger.info("user/LoginComponent::initSession/01"),this.svUser.auth$(t).subscribe(n=>{if(!0===n.app_state.success){if(this.logger.info("user/LoginComponent::initSession/res:",JSON.stringify(n)),this.svSess.appState=n.app_state,null!==n.app_state.sess.cd_token&&n.app_state.success){this.logger.info("user/LoginComponent::initSession/02");const a=this.configPushPayload("login","push-menu",n.data.userData.userId);a.pushData.m=n.data.menuData,this.communicationService.callHtmlMenu(n.data.menuData),this.logger.info("user/LoginComponent::initSession/envl:",a),"sio"===h.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing sio"),this.svSio.sendPayLoad(a)),"wss"===h.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing wss"),this.svWss.sendMsg(a)),this.svSess.createSess(n,this.svMenu),this.svUser.currentUser={name:`${n.data.userData.userName}`,picture:`${h.N.shellHost}/user-resources/${n.data.userData.userGuid}/avatar-01/a.jpg`},this.svNav.userMenu=[{title:"Profile",link:"/pages/cd-auth/register"},{title:"Log out",link:"/pages/cd-auth/logout"}],this.router.navigate(["/com"],{queryParams:{token:n.app_state.sess.cd_token},skipLocationChange:!0,replaceUrl:!1})}}else this.errMsg="The userName and password were not valid",this.loginInvalid=!0,this.svSess.logout()})}configPushPayload(t,n,a){this.logger.info("starting cd-shell/LoginComponent::LoginComponent::configPushPayload()");const m={pushData:{pushGuid:"",m:"",pushRecepients:[],triggerEvent:"",emittEvent:"",token:"",isNotification:null,appSockets:this.socketData,commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}},req:null,resp:null},c=[{userId:a,subTypeId:1,cdObjId:{appId:h.N.appId,ngModule:"UserFrontModule",resourceName:"LoginComponent",resourceGuid:(0,f.Z)(),jwtToken:"",socket:null,socketId:"",commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}}}],v={...m};v.pushData.triggerEvent=t,v.pushData.emittEvent=n;const A={...c[0]};A.subTypeId=1,v.pushData.pushRecepients.push(A),this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/this.sidebarInitData:",JSON.stringify(this.sidebarInitData)),this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/this.sidebarInitData.value:",JSON.stringify(this.sidebarInitData.value));const S={...c[0]};return S.subTypeId=7,this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/uRecepient:",JSON.stringify(S)),S.cdObjId=this.sidebarInitData.value,v.pushData.pushRecepients.push(S),this.logger.info("cd-shell/LoginComponent::LoginComponent::configPushPayload()/envl:",JSON.stringify(v)),v}searchLocalStorage(t){this.logger.info("starting LoginComponent::searchLocalStorage()/01");const n=[],a=localStorage.length;this.logger.info("LoginComponent::searchLocalStorage()/lcLength:",a);for(let r=0;r<localStorage.length;r++){const d=localStorage.key(r);var c=localStorage.getItem(d);this.logger.info("Key: "+d+", Value: "+c);try{if(this.logger.info("LoginComponent::searchLocalStorage()/1"),"object"==typeof c){this.logger.info("LoginComponent::searchLocalStorage()/2"),this.logger.info("LoginComponent::searchLocalStorage()/v:",c);const C=JSON.parse(c);"success"in C&&(this.logger.info("LoginComponent::searchLocalStorage()/3"),this.logger.info("LoginComponent::searchLocalStorage()/appState:",C)),"resourceGuid"in C&&(this.logger.info("LoginComponent::searchLocalStorage()/4"),this.logger.info("LoginComponent::searchLocalStorage()/cdObjId:",C)),this.logger.info("LoginComponent::searchLocalStorage()/5"),n.push({key:d,value:JSON.parse(c)})}else this.logger.info("LoginComponent::searchLocalStorage()/typeof (v):",typeof c),this.logger.info("LoginComponent::searchLocalStorage()/v:",c),this.logger.info("LoginComponent::searchLocalStorage()/6"),n.push({key:d,value:c})}catch(C){this.logger.info("LoginComponent::searchLocalStorage()/7"),this.logger.error("offending item:",c),this.logger.error("the item is not an object"),this.logger.error("Error:",C)}}this.logger.info("LoginComponent::searchLocalStorage()/8"),this.logger.info("LoginComponent::searchLocalStorage()/lcArr:",n),this.logger.info("LoginComponent::searchLocalStorage()/f.cdObjId!.resourceName:",t.cdObjId.resourceName);const A=r=>"object"==typeof r.value,S=r=>"resourceName"in r.value,F=r=>r.value.resourceName===t.cdObjId.resourceName&&r.value.ngModule===t.cdObjId.ngModule,_=(r,d)=>r.value.commTrack.initTime>d.value.commTrack.initTime?r:d;let x=null;try{this.debug?(this.logger.info("LoginComponent::searchLocalStorage()/9"),this.logger.info("LoginComponent::searchLocalStorage()/debug=true:"),x=n.filter(r=>(this.logger.info("LoginComponent::searchLocalStorage()/10"),"object"==typeof r.value?(this.logger.info("LoginComponent::searchLocalStorage()/11"),this.logger.info("LoginComponent::searchLocalStorage()/filteredByObject: d:",r),r):(this.logger.info("LoginComponent::searchLocalStorage()/12"),[]))).filter(r=>(this.logger.info("LoginComponent::searchLocalStorage()/13"),this.logger.info("LoginComponent::searchLocalStorage()//d:",r),"resourceName"in r.value?(this.logger.info("LoginComponent::searchLocalStorage()/14"),this.logger.info("LoginComponent::searchLocalStorage()/filteredByResourceNameField: d:",r),r):(this.logger.info("LoginComponent::searchLocalStorage()/15"),[]))).filter(r=>(this.logger.info("LoginComponent::searchLocalStorage()/16"),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d:",r),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.resourceName:",r.value.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.resourceName:",t.cdObjId.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.ngModule:",r.value.ngModule),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.ngModule:",t.cdObjId.ngModule),r.value.resourceName===t.cdObjId.resourceName&&r.value.ngModule===t.cdObjId.ngModule?(this.logger.info("LoginComponent::searchLocalStorage()/17"),r):(this.logger.info("LoginComponent::searchLocalStorage()/18"),[]))).reduce((r={},d={})=>(this.logger.info("LoginComponent::searchLocalStorage()/19"),this.logger.info("LoginComponent::searchLocalStorage()/prev:",r),this.logger.info("LoginComponent::searchLocalStorage()/current:",d),r.value.commTrack.initTime>d.value.commTrack.initTime?r:d))):(this.logger.info("LoginComponent::searchLocalStorage()/20"),this.logger.info("LoginComponent::searchLocalStorage()/debug=false:"),x=n.filter(A).filter(S).filter(F).reduce(_)),this.logger.info("LoginComponent::searchLocalStorage()/21"),this.logger.info("LoginComponent::searchLocalStorage()/ret:",x)}catch(r){this.logger.info("LoginComponent::searchLocalStorage()/22"),this.logger.error("Error:",r)}return this.logger.info("LoginComponent::searchLocalStorage()/22"),x}onFocus(){this.errMsg=""}}L.\u0275fac=function(t){return new(t||L)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(l.ActivatedRoute),e.\u0275\u0275directiveInject(l.Router),e.\u0275\u0275directiveInject(D.$),e.\u0275\u0275directiveInject(V.g),e.\u0275\u0275directiveInject(b),e.\u0275\u0275directiveInject(J.NGXLogger),e.\u0275\u0275directiveInject(u.SioClientService),e.\u0275\u0275directiveInject(u.WebsocketService),e.\u0275\u0275directiveInject(u.UserService),e.\u0275\u0275directiveInject(u.SessService),e.\u0275\u0275directiveInject(u.MenuService),e.\u0275\u0275directiveInject(u.NavService),e.\u0275\u0275directiveInject(u.BaseService),e.\u0275\u0275directiveInject(y),e.\u0275\u0275directiveInject($.O))},L.\u0275cmp=e.\u0275\u0275defineComponent({type:L,selectors:[["app-login"]],decls:56,vars:10,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","userName"],["formControlName","userName","id","userName","placeholder","userName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customControlInline",1,"custom-control-input"],["for","customControlInline",1,"custom-control-label"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","mr-1"],[1,"mt-5","text-center"],["routerLink","/account/signup",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Welcome!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Sign in to continue to ASDAP"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return n.login(n.fg)}),e.\u0275\u0275template(22,z,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(23,"div",18),e.\u0275\u0275element(24,"i",19),e.\u0275\u0275elementStart(25,"label",20),e.\u0275\u0275text(26,"User Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",21),e.\u0275\u0275template(28,K,3,2,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",18),e.\u0275\u0275element(30,"i",23),e.\u0275\u0275elementStart(31,"label",24),e.\u0275\u0275text(32,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",25),e.\u0275\u0275template(34,Z,2,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",26),e.\u0275\u0275element(36,"input",27),e.\u0275\u0275elementStart(37,"label",28),e.\u0275\u0275text(38,"Remember me"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",29)(40,"button",30),e.\u0275\u0275text(41,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",29)(43,"a",31),e.\u0275\u0275element(44,"i",32),e.\u0275\u0275text(45," Forgot your password?"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(46,"div",33)(47,"p"),e.\u0275\u0275text(48,"Don't have an account ? "),e.\u0275\u0275elementStart(49,"a",34),e.\u0275\u0275text(50," Register "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"\xa9 2024 EMP Services Ltd. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(53,"div",35)(54,"div",36),e.\u0275\u0275element(55,"div",37),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",n.fg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(6,G,n.submitted&&n.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.loginInvalid),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,G,n.submitted&&n.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.loginInvalid))},dependencies:[p.NgClass,p.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,g.NgbAlert,l.RouterLink]});class I{constructor(t){this.http=t}getAll(){return this.http.get("/api/login")}register(t){return this.http.post("/users/register",t)}}function X(o,t){1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1,"Registeration successfull. "),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("dismissible",!1)}function Q(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",40),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function q(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Userame is required"),e.\u0275\u0275elementEnd())}function ee(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,q,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.username.errors.required)}}function te(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function ne(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function oe(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,te,2,0,"div",42),e.\u0275\u0275template(2,ne,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.email)}}function ie(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function re(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,ie,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.password.errors.required)}}I.\u0275fac=function(t){return new(t||I)(e.\u0275\u0275inject(O.HttpClient))},I.\u0275prov=e.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac,providedIn:"root"});const P=function(o){return{"is-invalid":o}};class w{constructor(t,n,a,m,c){this.formBuilder=t,this.route=n,this.router=a,this.authenticationService=m,this.userService=c,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",i.Validators.required],email:["",[i.Validators.required,i.Validators.email]],password:["",i.Validators.required]})}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,!this.signupForm.invalid&&("firebase"===h.N.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(t=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(t=>{this.error=t||""}):this.userService.register(this.signupForm.value).pipe((0,k.first)()).subscribe(t=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},t=>{this.error=t||""}))}}function ae(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",31),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.error)}}function se(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function le(o,t){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function ce(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275template(1,se,2,0,"div",33),e.\u0275\u0275template(2,le,2,0,"div",33),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.email.errors.email)}}w.\u0275fac=function(t){return new(t||w)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(l.ActivatedRoute),e.\u0275\u0275directiveInject(l.Router),e.\u0275\u0275directiveInject(D.$),e.\u0275\u0275directiveInject(I))},w.\u0275cmp=e.\u0275\u0275defineComponent({type:w,selectors:[["app-signup"]],decls:60,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","#",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Register account"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Get your free ASDAP account now."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return n.onSubmit()}),e.\u0275\u0275template(22,X,2,1,"ngb-alert",17),e.\u0275\u0275template(23,Q,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(24,"div",19),e.\u0275\u0275element(25,"i",20),e.\u0275\u0275elementStart(26,"label",21),e.\u0275\u0275text(27,"Username"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"input",22),e.\u0275\u0275template(29,ee,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",19),e.\u0275\u0275element(31,"i",24),e.\u0275\u0275elementStart(32,"label",25),e.\u0275\u0275text(33,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(34,"input",26),e.\u0275\u0275template(35,oe,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"div",19),e.\u0275\u0275element(37,"i",27),e.\u0275\u0275elementStart(38,"label",28),e.\u0275\u0275text(39,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(40,"input",29),e.\u0275\u0275template(41,re,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"div",10)(43,"button",30),e.\u0275\u0275text(44,"Register"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(45,"div",31)(46,"p",32),e.\u0275\u0275text(47,"By registering you agree to the ASDAP "),e.\u0275\u0275elementStart(48,"a",33),e.\u0275\u0275text(49,"Terms of Use"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(50,"div",34)(51,"p"),e.\u0275\u0275text(52,"Already have an account ? "),e.\u0275\u0275elementStart(53,"a",35),e.\u0275\u0275text(54," Login"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(55,"p"),e.\u0275\u0275text(56,"\xa9 2024 EMP Services Ltd. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(57,"div",36)(58,"div",37),e.\u0275\u0275element(59,"div",38),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",n.signupForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.successmsg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,P,n.submitted&&n.f.username.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.username.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(11,P,n.submitted&&n.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(13,P,n.submitted&&n.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.password.errors))},dependencies:[p.NgClass,p.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,g.NgbAlert,l.RouterLink]});const ue=function(o){return{"is-invalid":o}};class M{constructor(t,n,a,m){this.formBuilder=t,this.route=n,this.router=a,this.authenticationService=m,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[i.Validators.required,i.Validators.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===h.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(t=>{this.error=t||""})}}M.\u0275fac=function(t){return new(t||M)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(l.ActivatedRoute),e.\u0275\u0275directiveInject(l.Router),e.\u0275\u0275directiveInject(D.$))},M.\u0275cmp=e.\u0275\u0275defineComponent({type:M,selectors:[["app-passwordreset"]],decls:44,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Reset Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Reset your password to ASDAP."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"div",16),e.\u0275\u0275text(22," Enter your Email and instructions will be sent to you! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"form",17),e.\u0275\u0275listener("ngSubmit",function(){return n.onSubmit()}),e.\u0275\u0275template(24,ae,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(25,"div",19),e.\u0275\u0275element(26,"i",20),e.\u0275\u0275elementStart(27,"label",21),e.\u0275\u0275text(28,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"input",22),e.\u0275\u0275template(30,ce,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",24)(32,"button",25),e.\u0275\u0275text(33,"Reset"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(34,"div",26)(35,"p"),e.\u0275\u0275text(36,"Don't have an account ? "),e.\u0275\u0275elementStart(37,"a",27),e.\u0275\u0275text(38," Log in "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"p"),e.\u0275\u0275text(40,"\xa9 2024 EMP Services Ltd. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(41,"div",28)(42,"div",29),e.\u0275\u0275element(43,"div",30),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275advance(23),e.\u0275\u0275property("formGroup",n.resetForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,ue,n.submitted&&n.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.submitted&&n.f.email.errors))},dependencies:[p.NgClass,p.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,g.NgbAlert,l.RouterLink]});const me=[{path:"",component:L},{path:"login",component:L},{path:"signup",component:w},{path:"reset-password",component:M}];class N{constructor(t){this.router=t,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(t=>{t instanceof l.NavigationStart?console.log("AuthRoutingModule::monitorRouting()/Navigation started to:",t.url,"with state:",t.restoredState):t instanceof l.NavigationEnd?console.log("AuthRoutingModule::monitorRouting()/Navigation ended at:",t.url,"with state:",t.urlAfterRedirects):t instanceof l.NavigationCancel?console.warn("AuthRoutingModule::monitorRouting()/Navigation canceled:",t.url,"with reason:",t.reason):t instanceof l.NavigationError&&console.error("AuthRoutingModule::monitorRouting()/Navigation error:",t.url,t.error)})}}N.\u0275fac=function(t){return new(t||N)(e.\u0275\u0275inject(l.Router))},N.\u0275mod=e.\u0275\u0275defineNgModule({type:N}),N.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.RouterModule.forChild(me),l.RouterModule]});class j{}j.\u0275fac=function(t){return new(t||j)},j.\u0275mod=e.\u0275\u0275defineNgModule({type:j}),j.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.CommonModule,i.FormsModule,i.ReactiveFormsModule,g.NgbAlertModule,R.W,N]})}}]);