(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[6262],{6262:(D,N,s)=>{s.r(N),s.d(N,{AccountModule:()=>u});var f=s(35228),i=s(37011),p=s(87675);const R=[{path:"auth",loadChildren:()=>Promise.resolve().then(s.bind(s,12440)).then(c=>c.AuthModule)}];class a{constructor(e){this.router=e,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(e=>{e instanceof i.NavigationStart?console.log("AccountRoutingModule::monitorRouting()/Navigation started to:",e.url):e instanceof i.NavigationEnd?console.log("AccountRoutingModule::monitorRouting()/Navigation ended at:",e.url):e instanceof i.NavigationCancel?console.warn("AccountRoutingModule::monitorRouting()/Navigation canceled:",e.url):e instanceof i.NavigationError&&console.error("AccountRoutingModule::monitorRouting()/Navigation error:",e.url,e.error)})}}a.\u0275fac=function(e){return new(e||a)(p.\u0275\u0275inject(i.Router))},a.\u0275mod=p.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=p.\u0275\u0275defineInjector({imports:[i.RouterModule.forChild(R),i.RouterModule]});var w=s(12440);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=p.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=p.\u0275\u0275defineInjector({imports:[f.CommonModule,a,w.AuthModule]})},12440:(D,N,s)=>{s.r(N),s.d(N,{AuthModule:()=>C});var f=s(35228),i=s(30533),p=s(76380),R=s(54171),a=s(37011),w=s(81042),u=s(20581),c=s(41115),e=s(87675),F=s(55250);function O(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",38),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.error)}}function G(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName is required"),e.\u0275\u0275elementEnd())}function U(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"userName must be a valid userName address"),e.\u0275\u0275elementEnd())}function B(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,G,2,0,"div",40),e.\u0275\u0275template(2,U,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.loginInvalid),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.loginInvalid)}}function V(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function J(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,V,2,0,"div",40),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.loginInvalid)}}const P=function(o){return{"is-invalid":o}};class S{constructor(n,t,l,d,m,h,I,v,A,M){this.logger=n,this.svSio=t,this.svWss=l,this.svUser=d,this.svSess=m,this.svMenu=h,this.svNav=I,this.route=v,this.aRoute=A,this.svBase=M,this.debug=!0,this.resourceGuid=(0,w.Z)(),this.loginInvalid=!1,this.rememberMe=!0,this.submitted=!1,this.error="",this.socketData=[],this.header="Welcome!",this.subheader="Sign in to continue to ASDAP",this.svSio.env=c.N,this.svSio.initSio(null,null),this.fg=new i.FormGroup({userName:new i.FormControl,password:new i.FormControl,rememberMe:new i.FormControl})}ngOnInit(){this.logger.info("cd-user-v2::LoginComponent::ngOnInit()/StorageType.CdObjId:",u.StorageType.CdObjId),this.aRoute.queryParams.subscribe(d=>{this.key=d.key,this.sid=d.sid,this.uid=d.uid,console.log(this.key,this.sid,this.uid),this.setHeader()});const n={storageType:u.StorageType.CdObjId,cdObjId:{appId:localStorage.getItem("appId"),resourceGuid:null,resourceName:"SidebarComponent",ngModule:"SharedModule",jwtToken:localStorage.getItem("accessToken"),socket:null,commTrack:null}};this.logger.info("cd-user-v2::LoginComponent::ngOnInit()/filter:",n),this.sidebarInitData=this.searchLocalStorage(n),this.logger.info("user/LoginComponent::ngOnInit()/this.sidebarInitData:",this.sidebarInitData);const t=localStorage.getItem("socketData");if(t){let d=function(m){return"appInit"===m.name?m:null};this.socketData=JSON.parse(t).filter(d),this.logger.info("user/LoginComponent::ngOnInit()/this.socketData:",this.socketData)}else this.logger.info("Err: socket data is not valid")}setHeader(){console.log("starting LoginService::setHeader()"),this.key&&this.uid&&this.sid?this.svUser.getUser$({query:{where:{userId:this.uid,activationKey:this.key}}},this.sid).subscribe(t=>{console.log("LoginService::setHeader()/subscribe/res:",t),t.data.length>0&&(this.header=`Congratulations ${t.data[0].userName}, your account is now active.`)}):this.header="Welcome!"}login(n){this.logger.info("starting user/LoginComponent::login");let t=n.value;const l=n.valid;this.logger.info("user/LoginComponent::login/01"),this.logger.info("user/LoginComponent::login/fg:",n),this.logger.info("user/LoginComponent::login/valid:",l),this.submitted=!0,t=Object.assign({},t,{consumerGuid:c.N.consumerToken});try{this.logger.info("user/LoginComponent::login/02"),l&&(this.logger.info("user/LoginComponent::login/03"),this.initSession(t))}catch{this.logger.info("user/LoginComponent::login/04"),this.errMsg="Something went wrong!!",this.loginInvalid=!0}}initSession(n){this.logger.info("user/LoginComponent::initSession/01"),this.svUser.auth$(n).subscribe(t=>{if(!0===t.app_state.success){if(this.logger.info("user/LoginComponent::initSession/res:",JSON.stringify(t)),this.svSess.appState=t.app_state,null!==t.app_state.sess.cd_token&&t.app_state.success){this.logger.info("user/LoginComponent::initSession/02");const l=this.configPushPayload("login","push-menu",t.data.userData.userId);l.pushData.m=t.data.menuData,this.logger.info("user/LoginComponent::initSession/envl:",l),"sio"===c.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing sio"),this.svSio.sendPayLoad(l)),"wss"===c.N.wsMode&&(this.logger.info("user/LoginComponent::initSession/envl:...useing wss"),this.svWss.sendMsg(l)),this.svSess.createSess(t,this.svMenu),this.svUser.currentUser={name:`${t.data.userData.userName}`,picture:`${c.N.shellHost}/user-resources/${t.data.userData.userGuid}/avatar-01/a.jpg`},this.svNav.userMenu=[{title:"Profile",link:"/pages/cd-auth/register"},{title:"Log out",link:"/pages/cd-auth/logout"}];const d={queryParams:{token:t.app_state.sess.cd_token},skipLocationChange:!0,replaceUrl:!1};this.route.navigate(["/dashboard"],d),this.route.navigate([c.N.initialPage],d)}}else this.errMsg="The userName and password were not valid",this.loginInvalid=!0,this.svSess.logout()})}configPushPayload(n,t,l){this.logger.info("starting cd-user-v2::LoginComponent::configPushPayload()");const d={pushData:{pushGuid:"",m:"",pushRecepients:[],triggerEvent:"",emittEvent:"",token:"",isNotification:null,appSockets:this.socketData,commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}},req:null,resp:null},m=[{userId:l,subTypeId:1,cdObjId:{appId:c.N.appId,ngModule:"UserFrontModule",resourceName:"LoginComponent",resourceGuid:(0,w.Z)(),jwtToken:"",socket:null,socketId:"",commTrack:{initTime:Number(new Date),relayTime:null,relayed:!1,pushed:!1,pushTime:null,deliveryTime:null,delivered:!1,completed:!1,completedTime:null}}}],h={...d};h.pushData.triggerEvent=n,h.pushData.emittEvent=t;const I={...m[0]};I.subTypeId=1,h.pushData.pushRecepients.push(I),this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/this.sidebarInitData:",JSON.stringify(this.sidebarInitData)),this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/this.sidebarInitData.value:",JSON.stringify(this.sidebarInitData.value));const v={...m[0]};return v.subTypeId=7,this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/uRecepient:",JSON.stringify(v)),v.cdObjId=this.sidebarInitData.value,h.pushData.pushRecepients.push(v),this.logger.info("cd-user-v2::LoginComponent::configPushPayload()/envl:",JSON.stringify(h)),h}searchLocalStorage(n){this.logger.info("starting LoginComponent::searchLocalStorage()/lcLength:");const t=[],l=localStorage.length;this.logger.info("LoginComponent::searchLocalStorage()/lcLength:",l);for(let r=0;r<localStorage.length;r++){const g=localStorage.key(r);var m=localStorage.getItem(g);this.logger.info("Key: "+g+", Value: "+m);try{if(this.logger.info("LoginComponent::searchLocalStorage()/1"),"object"==typeof m){this.logger.info("LoginComponent::searchLocalStorage()/2"),this.logger.info("LoginComponent::searchLocalStorage()/v:",m);const L=JSON.parse(m);"success"in L&&(this.logger.info("LoginComponent::searchLocalStorage()/3"),this.logger.info("LoginComponent::searchLocalStorage()/appState:",L)),"resourceGuid"in L&&(this.logger.info("LoginComponent::searchLocalStorage()/4"),this.logger.info("LoginComponent::searchLocalStorage()/cdObjId:",L)),this.logger.info("LoginComponent::searchLocalStorage()/5"),t.push({key:g,value:JSON.parse(m)})}else this.logger.info("LoginComponent::searchLocalStorage()/typeof (v):",typeof m),this.logger.info("LoginComponent::searchLocalStorage()/6"),t.push({key:g,value:JSON.parse(m)})}catch(L){this.logger.info("offending item:",m),this.logger.info("the item is not an object"),this.logger.info("Error:",L)}}this.logger.info("LoginComponent::searchLocalStorage()/lcArr:",t),this.logger.info("LoginComponent::searchLocalStorage()/f.cdObjId!.resourceName:",n.cdObjId.resourceName);const I=r=>"object"==typeof r.value,v=r=>"resourceName"in r.value,A=r=>r.value.resourceName===n.cdObjId.resourceName&&r.value.ngModule===n.cdObjId.ngModule,M=(r,g)=>r.value.commTrack.initTime>g.value.commTrack.initTime?r:g;let j=null;try{this.debug?(this.logger.info("LoginComponent::searchLocalStorage()/debug=true:"),j=t.filter(r=>"object"==typeof r.value?(this.logger.info("LoginComponent::searchLocalStorage()/filteredByObject: d:",r),r):null).filter(r=>"resourceName"in r.value?(this.logger.info("LoginComponent::searchLocalStorage()/filteredByResourceNameField: d:",r),r):null).filter(r=>(this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d:",r),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.resourceName:",r.value.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.resourceName:",n.cdObjId.resourceName),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: d.value.ngModule:",r.value.ngModule),this.logger.info("LoginComponent::searchLocalStorage()/filteredByName: f.cdObjId!.ngModule:",n.cdObjId.ngModule),r.value.resourceName===n.cdObjId.resourceName&&r.value.ngModule===n.cdObjId.ngModule?r:null)).reduce((r={},g={})=>(this.logger.info("LoginComponent::searchLocalStorage()/prev:",r),this.logger.info("LoginComponent::searchLocalStorage()/current:",g),r.value.commTrack.initTime>g.value.commTrack.initTime?r:g))):(this.logger.info("LoginComponent::searchLocalStorage()/debug=false:"),j=t.filter(I).filter(v).filter(A).reduce(M)),this.logger.info("LoginComponent::searchLocalStorage()/ret:",j)}catch(r){this.logger.info("Error:",r)}return j}onFocus(){this.errMsg=""}}S.\u0275fac=function(n){return new(n||S)(e.\u0275\u0275directiveInject(F.NGXLogger),e.\u0275\u0275directiveInject(u.SioClientService),e.\u0275\u0275directiveInject(u.WebsocketService),e.\u0275\u0275directiveInject(u.UserService),e.\u0275\u0275directiveInject(u.SessService),e.\u0275\u0275directiveInject(u.MenuService),e.\u0275\u0275directiveInject(u.NavService),e.\u0275\u0275directiveInject(a.Router),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(u.BaseService))},S.\u0275cmp=e.\u0275\u0275defineComponent({type:S,selectors:[["app-login"]],decls:56,vars:12,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","userName"],["formControlName","userName","id","userName","placeholder","userName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","customControlInline",1,"custom-control-input"],["for","customControlInline",1,"custom-control-label"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","mr-1"],[1,"mt-5","text-center"],["routerLink","/account/signup",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return t.login(t.fg)}),e.\u0275\u0275template(22,O,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(23,"div",18),e.\u0275\u0275element(24,"i",19),e.\u0275\u0275elementStart(25,"label",20),e.\u0275\u0275text(26,"User Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",21),e.\u0275\u0275template(28,B,3,2,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",18),e.\u0275\u0275element(30,"i",23),e.\u0275\u0275elementStart(31,"label",24),e.\u0275\u0275text(32,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",25),e.\u0275\u0275template(34,J,2,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",26),e.\u0275\u0275element(36,"input",27),e.\u0275\u0275elementStart(37,"label",28),e.\u0275\u0275text(38,"Remember me"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",29)(40,"button",30),e.\u0275\u0275text(41,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",29)(43,"a",31),e.\u0275\u0275element(44,"i",32),e.\u0275\u0275text(45," Forgot your password?"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(46,"div",33)(47,"p"),e.\u0275\u0275text(48,"Don't have an account ? "),e.\u0275\u0275elementStart(49,"a",34),e.\u0275\u0275text(50," Register "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(53,"div",35)(54,"div",36),e.\u0275\u0275element(55,"div",37),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(17),e.\u0275\u0275textInterpolate(t.header),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.subheader),e.\u0275\u0275advance(2),e.\u0275\u0275property("formGroup",t.fg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,P,t.submitted&&t.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.loginInvalid),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(10,P,t.submitted&&t.loginInvalid)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.loginInvalid))},dependencies:[f.NgClass,f.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,p.NgbAlert,a.RouterLink]});var $=s(65893),_=s(52412),z=s(38697);class b{constructor(n){this.http=n}getAll(){return this.http.get("/api/login")}register(n){return this.http.post("/users/register",n)}}function H(o,n){1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1,"Registeration successfull. "),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("dismissible",!1)}function W(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",40),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.error)}}function K(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Userame is required"),e.\u0275\u0275elementEnd())}function Y(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,K,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.username.errors.required)}}function Z(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function Q(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function X(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,Z,2,0,"div",42),e.\u0275\u0275template(2,Q,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.email)}}function q(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function ee(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,q,2,0,"div",42),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.password.errors.required)}}b.\u0275fac=function(n){return new(n||b)(e.\u0275\u0275inject(z.HttpClient))},b.\u0275prov=e.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});const T=function(o){return{"is-invalid":o}};class x{constructor(n,t,l,d,m){this.formBuilder=n,this.route=t,this.router=l,this.authenticationService=d,this.userService=m,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",i.Validators.required],email:["",[i.Validators.required,i.Validators.email]],password:["",i.Validators.required]})}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,!this.signupForm.invalid&&("firebase"===c.N.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(n=>{this.error=n||""}):this.userService.register(this.signupForm.value).pipe((0,$.first)()).subscribe(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},n=>{this.error=n||""}))}}function te(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"ngb-alert",31),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.error)}}function ne(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function oe(o,n){1&o&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function ie(o,n){if(1&o&&(e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275template(1,ne,2,0,"div",33),e.\u0275\u0275template(2,oe,2,0,"div",33),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.email)}}x.\u0275fac=function(n){return new(n||x)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(a.Router),e.\u0275\u0275directiveInject(_.$),e.\u0275\u0275directiveInject(b))},x.\u0275cmp=e.\u0275\u0275defineComponent({type:x,selectors:[["app-signup"]],decls:60,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","#",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Register account"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Get your free ASDAP account now."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),e.\u0275\u0275template(22,H,2,1,"ngb-alert",17),e.\u0275\u0275template(23,W,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(24,"div",19),e.\u0275\u0275element(25,"i",20),e.\u0275\u0275elementStart(26,"label",21),e.\u0275\u0275text(27,"Username"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"input",22),e.\u0275\u0275template(29,Y,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",19),e.\u0275\u0275element(31,"i",24),e.\u0275\u0275elementStart(32,"label",25),e.\u0275\u0275text(33,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(34,"input",26),e.\u0275\u0275template(35,X,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"div",19),e.\u0275\u0275element(37,"i",27),e.\u0275\u0275elementStart(38,"label",28),e.\u0275\u0275text(39,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(40,"input",29),e.\u0275\u0275template(41,ee,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"div",10)(43,"button",30),e.\u0275\u0275text(44,"Register"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(45,"div",31)(46,"p",32),e.\u0275\u0275text(47,"By registering you agree to the ASDAP "),e.\u0275\u0275elementStart(48,"a",33),e.\u0275\u0275text(49,"Terms of Use"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(50,"div",34)(51,"p"),e.\u0275\u0275text(52,"Already have an account ? "),e.\u0275\u0275elementStart(53,"a",35),e.\u0275\u0275text(54," Login"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(55,"p"),e.\u0275\u0275text(56,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(57,"div",36)(58,"div",37),e.\u0275\u0275element(59,"div",38),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",t.signupForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.successmsg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,T,t.submitted&&t.f.username.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.username.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(11,T,t.submitted&&t.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(13,T,t.submitted&&t.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.password.errors))},dependencies:[f.NgClass,f.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,p.NgbAlert,a.RouterLink]});const re=function(o){return{"is-invalid":o}};class E{constructor(n,t,l,d){this.formBuilder=n,this.route=t,this.router=l,this.authenticationService=d,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[i.Validators.required,i.Validators.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===c.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(n=>{this.error=n||""})}}E.\u0275fac=function(n){return new(n||E)(e.\u0275\u0275directiveInject(i.UntypedFormBuilder),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(a.Router),e.\u0275\u0275directiveInject(_.$))},E.\u0275cmp=e.\u0275\u0275defineComponent({type:E,selectors:[["app-passwordreset"]],decls:44,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,t){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Reset Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Reset your password to ASDAP."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"div",16),e.\u0275\u0275text(22," Enter your Email and instructions will be sent to you! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"form",17),e.\u0275\u0275listener("ngSubmit",function(){return t.onSubmit()}),e.\u0275\u0275template(24,te,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(25,"div",19),e.\u0275\u0275element(26,"i",20),e.\u0275\u0275elementStart(27,"label",21),e.\u0275\u0275text(28,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"input",22),e.\u0275\u0275template(30,ie,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",24)(32,"button",25),e.\u0275\u0275text(33,"Reset"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(34,"div",26)(35,"p"),e.\u0275\u0275text(36,"Don't have an account ? "),e.\u0275\u0275elementStart(37,"a",27),e.\u0275\u0275text(38," Log in "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"p"),e.\u0275\u0275text(40,"\xa9 2024 ASDAP. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(41,"div",28)(42,"div",29),e.\u0275\u0275element(43,"div",30),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(23),e.\u0275\u0275property("formGroup",t.resetForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,re,t.submitted&&t.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.email.errors))},dependencies:[f.NgClass,f.NgIf,i.\u0275NgNoValidate,i.DefaultValueAccessor,i.NgControlStatus,i.NgControlStatusGroup,i.FormGroupDirective,i.FormControlName,p.NgbAlert,a.RouterLink]});const se=[{path:"",component:S},{path:"login",component:S},{path:"signup",component:x},{path:"reset-password",component:E}];class y{constructor(n){this.router=n,this.monitorRouting()}monitorRouting(){this.router.events.subscribe(n=>{n instanceof a.NavigationStart?console.log("AuthRoutingModule::monitorRouting()/Navigation started to:",n.url,"with state:",n.restoredState):n instanceof a.NavigationEnd?console.log("AuthRoutingModule::monitorRouting()/Navigation ended at:",n.url,"with state:",n.urlAfterRedirects):n instanceof a.NavigationCancel?console.warn("AuthRoutingModule::monitorRouting()/Navigation canceled:",n.url,"with reason:",n.reason):n instanceof a.NavigationError&&console.error("AuthRoutingModule::monitorRouting()/Navigation error:",n.url,n.error)})}}y.\u0275fac=function(n){return new(n||y)(e.\u0275\u0275inject(a.Router))},y.\u0275mod=e.\u0275\u0275defineNgModule({type:y}),y.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.RouterModule.forChild(se),a.RouterModule]});class C{}C.\u0275fac=function(n){return new(n||C)},C.\u0275mod=e.\u0275\u0275defineNgModule({type:C}),C.\u0275inj=e.\u0275\u0275defineInjector({imports:[f.CommonModule,i.FormsModule,i.ReactiveFormsModule,p.NgbAlertModule,R.W,y]})}}]);