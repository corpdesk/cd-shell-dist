(self.webpackChunkcd_shell=self.webpackChunkcd_shell||[]).push([[6262],{6262:(I,f,o)=>{o.r(f),o.d(f,{AccountModule:()=>e});var l=o(35228),r=o(37011),s=o(87675);const x=[{path:"auth",loadChildren:()=>Promise.resolve().then(o.bind(o,12440)).then(m=>m.AuthModule)}];class a{}a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=s.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=s.\u0275\u0275defineInjector({imports:[r.RouterModule.forChild(x),r.RouterModule]});var v=o(12440);class e{}e.\u0275fac=function(g){return new(g||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({imports:[l.CommonModule,a,v.AuthModule]})},12440:(I,f,o)=>{o.r(f),o.d(f,{AuthModule:()=>p});var l=o(35228),r=o(30533),s=o(76380),x=o(54171),a=o(37011),v=o(41115),e=o(87675),m=o(52412),g=o(27508);function _(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"ngb-alert",38),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(i.error)}}function F(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function N(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function j(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,F,2,0,"div",40),e.\u0275\u0275template(2,N,2,0,"div",40),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.email.errors.email)}}function A(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function L(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",39),e.\u0275\u0275template(1,A,2,0,"div",40),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.password.errors.required)}}const w=function(t){return{"is-invalid":t}};class h{constructor(n,i,d,y,E){this.formBuilder=n,this.route=i,this.router=d,this.authenticationService=y,this.authFackservice=E,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.loginForm=this.formBuilder.group({email:["user@asdap.africa",[r.Validators.required,r.Validators.email]],password:["123456",[r.Validators.required]]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){console.log("starting onSubmit()/01"),console.log("this.loginForm.valid:",this.loginForm.valid),this.submitted=!0,this.loginForm.invalid?console.log("starting onSubmit()/02"):(console.log("starting onSubmit()/03"),"firebase"===v.N.defaultauth?(console.log("starting onSubmit()/04"),this.authenticationService.login(this.f.email.value,this.f.password.value).then(n=>{this.router.navigate(["/"])}).catch(n=>{this.error=n||""})):(console.log("starting onSubmit()/05"),this.router.navigate(["/"])))}}h.\u0275fac=function(n){return new(n||h)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(a.Router),e.\u0275\u0275directiveInject(m.$),e.\u0275\u0275directiveInject(g.g))},h.\u0275cmp=e.\u0275\u0275defineComponent({type:h,selectors:[["app-login"]],decls:56,vars:10,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"form-check"],["type","checkbox","id","customControlInline",1,"form-check-input"],["for","customControlInline",1,"form-check-label"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],["routerLink","/account/reset-password",1,"text-muted"],[1,"mdi","mdi-lock","me-1"],[1,"mt-5","text-center"],["routerLink","/account/signup",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Welcome!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Sign in to continue to ASDAP"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return i.onSubmit()}),e.\u0275\u0275template(22,_,2,2,"ngb-alert",17),e.\u0275\u0275elementStart(23,"div",18),e.\u0275\u0275element(24,"i",19),e.\u0275\u0275elementStart(25,"label",20),e.\u0275\u0275text(26,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(27,"input",21),e.\u0275\u0275template(28,j,3,2,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div",18),e.\u0275\u0275element(30,"i",23),e.\u0275\u0275elementStart(31,"label",24),e.\u0275\u0275text(32,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(33,"input",25),e.\u0275\u0275template(34,L,2,1,"div",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div",26),e.\u0275\u0275element(36,"input",27),e.\u0275\u0275elementStart(37,"label",28),e.\u0275\u0275text(38,"Remember me"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"div",29)(40,"button",30),e.\u0275\u0275text(41,"Log In"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"div",29)(43,"a",31),e.\u0275\u0275element(44,"i",32),e.\u0275\u0275text(45," Forgot your password?"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(46,"div",33)(47,"p"),e.\u0275\u0275text(48,"Don't have an account ? "),e.\u0275\u0275elementStart(49,"a",34),e.\u0275\u0275text(50," Register "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"p"),e.\u0275\u0275text(52,"\xa9 2024 EMP Services Ltd. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(53,"div",35)(54,"div",36),e.\u0275\u0275element(55,"div",37),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",i.loginForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(6,w,i.submitted&&i.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.submitted&&i.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,w,i.submitted&&i.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.submitted&&i.f.password.errors))},dependencies:[l.NgClass,l.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,s.NgbAlert,a.RouterLink]});var P=o(65893),R=o(38697);class u{constructor(n){this.http=n}getAll(){return this.http.get("/api/login")}register(n){return this.http.post("/users/register",n)}}function M(t,n){1&t&&(e.\u0275\u0275elementStart(0,"ngb-alert",39),e.\u0275\u0275text(1,"Registeration successfull. "),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("dismissible",!1)}function T(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"ngb-alert",40),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(i.error)}}function k(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Userame is required"),e.\u0275\u0275elementEnd())}function V(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,k,2,0,"div",42),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.username.errors.required)}}function D(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function G(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function B(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,D,2,0,"div",42),e.\u0275\u0275template(2,G,2,0,"div",42),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.email.errors.email)}}function U(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function z(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",41),e.\u0275\u0275template(1,U,2,0,"div",42),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.password.errors.required)}}u.\u0275fac=function(n){return new(n||u)(e.\u0275\u0275inject(R.HttpClient))},u.\u0275prov=e.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"});const C=function(t){return{"is-invalid":t}};class b{constructor(n,i,d,y,E){this.formBuilder=n,this.route=i,this.router=d,this.authenticationService=y,this.userService=E,this.submitted=!1,this.error="",this.successmsg=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.signupForm=this.formBuilder.group({username:["",r.Validators.required],email:["",[r.Validators.required,r.Validators.email]],password:["",r.Validators.required]})}ngAfterViewInit(){}get f(){return this.signupForm.controls}onSubmit(){this.submitted=!0,!this.signupForm.invalid&&("firebase"===v.N.defaultauth?this.authenticationService.register(this.f.email.value,this.f.password.value).then(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/"])}).catch(n=>{this.error=n||""}):this.userService.register(this.signupForm.value).pipe((0,P.first)()).subscribe(n=>{this.successmsg=!0,this.successmsg&&this.router.navigate(["/account/login"])},n=>{this.error=n||""}))}}function O(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"ngb-alert",31),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275property("dismissible",!1),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(i.error)}}function K(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function Y(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function $(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275template(1,K,2,0,"div",33),e.\u0275\u0275template(2,Y,2,0,"div",33),e.\u0275\u0275elementEnd()),2&t){const i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.f.email.errors.email)}}b.\u0275fac=function(n){return new(n||b)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(a.Router),e.\u0275\u0275directiveInject(m.$),e.\u0275\u0275directiveInject(u))},b.\u0275cmp=e.\u0275\u0275defineComponent({type:b,selectors:[["app-signup"]],decls:60,vars:15,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","success",3,"dismissible",4,"ngIf"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-user-2-line","auti-custom-input-icon"],["for","username"],["type","text","formControlName","username","id","username","placeholder","Enter username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],[1,"ri-lock-2-line","auti-custom-input-icon"],["for","password"],["type","password","formControlName","password","id","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-4","text-center"],[1,"mb-0"],["href","#",1,"text-primary"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","success",3,"dismissible"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Register account"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Get your free Nazox account now."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"form",16),e.\u0275\u0275listener("ngSubmit",function(){return i.onSubmit()}),e.\u0275\u0275template(22,M,2,1,"ngb-alert",17),e.\u0275\u0275template(23,T,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(24,"div",19),e.\u0275\u0275element(25,"i",20),e.\u0275\u0275elementStart(26,"label",21),e.\u0275\u0275text(27,"Username"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"input",22),e.\u0275\u0275template(29,V,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div",19),e.\u0275\u0275element(31,"i",24),e.\u0275\u0275elementStart(32,"label",25),e.\u0275\u0275text(33,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(34,"input",26),e.\u0275\u0275template(35,B,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"div",19),e.\u0275\u0275element(37,"i",27),e.\u0275\u0275elementStart(38,"label",28),e.\u0275\u0275text(39,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(40,"input",29),e.\u0275\u0275template(41,z,2,1,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"div",10)(43,"button",30),e.\u0275\u0275text(44,"Register"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(45,"div",31)(46,"p",32),e.\u0275\u0275text(47,"By registering you agree to the Nazox "),e.\u0275\u0275elementStart(48,"a",33),e.\u0275\u0275text(49,"Terms of Use"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(50,"div",34)(51,"p"),e.\u0275\u0275text(52,"Already have an account ? "),e.\u0275\u0275elementStart(53,"a",35),e.\u0275\u0275text(54," Login"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(55,"p"),e.\u0275\u0275text(56,"\xa9 2024 EMP Services Ltd. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(57,"div",36)(58,"div",37),e.\u0275\u0275element(59,"div",38),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(21),e.\u0275\u0275property("formGroup",i.signupForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.successmsg),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(9,C,i.submitted&&i.f.username.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.submitted&&i.f.username.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(11,C,i.submitted&&i.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.submitted&&i.f.email.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(13,C,i.submitted&&i.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.submitted&&i.f.password.errors))},dependencies:[l.NgClass,l.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,s.NgbAlert,a.RouterLink]});const W=function(t){return{"is-invalid":t}};class S{constructor(n,i,d,y){this.formBuilder=n,this.route=i,this.router=d,this.authenticationService=y,this.submitted=!1,this.error="",this.success="",this.loading=!1,this.year=(new Date).getFullYear()}ngOnInit(){document.body.removeAttribute("data-layout"),document.body.classList.add("auth-body-bg"),this.resetForm=this.formBuilder.group({email:["",[r.Validators.required,r.Validators.email]]})}ngAfterViewInit(){}get f(){return this.resetForm.controls}onSubmit(){this.success="",this.submitted=!0,!this.resetForm.invalid&&"firebase"===v.N.defaultauth&&this.authenticationService.resetPassword(this.f.email.value).catch(n=>{this.error=n||""})}}S.\u0275fac=function(n){return new(n||S)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(a.Router),e.\u0275\u0275directiveInject(m.$))},S.\u0275cmp=e.\u0275\u0275defineComponent({type:S,selectors:[["app-passwordreset"]],decls:44,vars:6,consts:[[1,"home-btn","d-none","d-sm-block"],["routerLink",""],[1,"mdi","mdi-home-variant","h2","text-white"],[1,"container-fluid","p-0"],[1,"row","g-0"],[1,"col-lg-4"],[1,"authentication-page-content","p-4","d-flex","align-items-center","min-vh-100"],[1,"w-100"],[1,"row","justify-content-center"],[1,"col-lg-9"],[1,"text-center"],["routerLink","",1,"logo"],["src","assets/images/logo-dark.png","height","20","alt","logo"],[1,"font-size-18","mt-4"],[1,"text-muted"],[1,"p-2","mt-5"],["role","alert",1,"alert","alert-success","mb-4"],[1,"form-horizontal",3,"formGroup","ngSubmit"],["type","danger",3,"dismissible",4,"ngIf"],[1,"form-group","auth-form-group-custom","mb-4"],[1,"ri-mail-line","auti-custom-input-icon"],["for","email"],["type","email","formControlName","email","id","email","placeholder","Email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"mt-4","text-center"],["type","submit",1,"btn","btn-primary","w-md","waves-effect","waves-light"],[1,"mt-5","text-center"],["routerLink","/account/login",1,"fw-medium","text-primary"],[1,"col-lg-8"],[1,"authentication-bg"],[1,"bg-overlay"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"a",1),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div")(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div")(12,"div",10)(13,"div")(14,"a",11),e.\u0275\u0275element(15,"img",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"h4",13),e.\u0275\u0275text(17,"Reset Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",14),e.\u0275\u0275text(19,"Reset your password to Nazox."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",15)(21,"div",16),e.\u0275\u0275text(22," Enter your Email and instructions will be sent to you! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"form",17),e.\u0275\u0275listener("ngSubmit",function(){return i.onSubmit()}),e.\u0275\u0275template(24,O,2,2,"ngb-alert",18),e.\u0275\u0275elementStart(25,"div",19),e.\u0275\u0275element(26,"i",20),e.\u0275\u0275elementStart(27,"label",21),e.\u0275\u0275text(28,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"input",22),e.\u0275\u0275template(30,$,3,2,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",24)(32,"button",25),e.\u0275\u0275text(33,"Reset"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(34,"div",26)(35,"p"),e.\u0275\u0275text(36,"Don't have an account ? "),e.\u0275\u0275elementStart(37,"a",27),e.\u0275\u0275text(38," Log in "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"p"),e.\u0275\u0275text(40,"\xa9 2024 EMP Services Ltd. Powered by CORPDESK"),e.\u0275\u0275elementEnd()()()()()()()(),e.\u0275\u0275elementStart(41,"div",28)(42,"div",29),e.\u0275\u0275element(43,"div",30),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(23),e.\u0275\u0275property("formGroup",i.resetForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.error),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(4,W,i.submitted&&i.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i.submitted&&i.f.email.errors))},dependencies:[l.NgClass,l.NgIf,r.\u0275NgNoValidate,r.DefaultValueAccessor,r.NgControlStatus,r.NgControlStatusGroup,r.FormGroupDirective,r.FormControlName,s.NgbAlert,a.RouterLink]});const H=[{path:"login",component:h},{path:"signup",component:b},{path:"reset-password",component:S}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=e.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.RouterModule.forChild(H),a.RouterModule]});class p{}p.\u0275fac=function(n){return new(n||p)},p.\u0275mod=e.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.CommonModule,r.FormsModule,r.ReactiveFormsModule,s.NgbAlertModule,x.W,c]})}}]);