(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{i43O:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("15JJ"),o=e("VURu"),i=e("ZZ/e"),c=function(){function l(l,n,e,t,u,o){this._location=l,this.router=n,this.route=e,this.study_service=t,this.sanitizer=u,this.loadingController=o}return l.prototype.ngOnInit=function(){var l=this;this.page_data=this.route.paramMap.pipe(Object(u.a)(function(n){return l.subject=n.get("subject"),l.study_service.getTopicsDetails(l.subject,n.get("topic_id"))})),this.page_data.subscribe(function(n){l.topic=n.topic_name,l.description=n.description,l.sub_topics=Object.values(n.sub_topics),l.setSelectedTopic(l.sub_topics[0])})},l.prototype.setSelectedTopic=function(l){l.url=this.sanitizer.bypassSecurityTrustResourceUrl(l.url||"https://www.youtube.com/embed/5TbUxGZtwGI"),this.selected_sub_topic=l,this.presentLoading(),console.log(this.selected_sub_topic)},l.prototype.presentLoading=function(){return l=this,void 0,e=function(){var l;return function(l,n){var e,t,u,o,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(u=2&o[0]?t.return:o[0]?t.throw||((u=t.return)&&u.call(t),0):t.next)&&!(u=u.call(t,o[1])).done)return u;switch(t=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(u=(u=i.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){i.label=o[1];break}if(6===o[0]&&i.label<u[1]){i.label=u[1],u=o;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(o);break}u[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(c){o=[6,c],t=0}finally{e=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({message:"Please Wait..."})];case 1:return[4,(l=n.sent()).present()];case 2:return n.sent(),document.getElementById("video_frame").onload=function(){console.log("iframe loaded"),l.dismiss()},[2]}})},new((n=void 0)||(n=Promise))(function(t,u){function o(l){try{c(e.next(l))}catch(n){u(n)}}function i(l){try{c(e.throw(l))}catch(n){u(n)}}function c(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(o,i)}c((e=e.apply(l,[])).next())});var l,n,e},l.prototype.goBack=function(){this.router.navigate(["/tabs/study/"])},l}(),r=function(){return function(){}}(),a=e("pMnS"),d=e("oBZk"),s=e("Ip0R"),f=e("ZYCi"),p=e("ZYjt"),m=t["\u0275crt"]({encapsulation:0,styles:[[".currently_playing[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}.card-video-header[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-item",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.setSelectedTopic(l.context.$implicit)&&t),t},d.db,d.t)),t["\u0275did"](1,49152,null,0,i.G,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,1,"p",[["class","sub_topics"]],[[2,"currently_playing",null]],null,null,null,null)),(l()(),t["\u0275ted"](3,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.sub_topic_id==n.component.selected_sub_topic.sub_topic_id),l(n,3,0,n.context.index+1+"- "+n.context.$implicit.sub_topic)})}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-list",[],null,null,null,d.gb,d.v)),t["\u0275did"](1,49152,null,0,i.N,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](3,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.sub_topics)},null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"ion-header",[],null,null,null,d.X,d.n)),t["\u0275did"](1,49152,null,0,i.A,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,d.tb,d.J)),t["\u0275did"](3,49152,null,0,i.Ab,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](4,0,null,0,5,"ion-buttons",[["color","white"],["slot","start"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goBack()&&t),t},d.M,d.c)),t["\u0275did"](5,49152,null,0,i.k,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](6,0,null,0,3,"ion-button",[],null,null,null,d.L,d.b)),t["\u0275did"](7,49152,null,0,i.j,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"],["style","color: #f4f5f8"]],null,null,null,d.Y,d.o)),t["\u0275did"](9,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-title",[],null,null,null,d.rb,d.H)),t["\u0275did"](11,49152,null,0,i.yb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](12,0,["",""])),(l()(),t["\u0275eld"](13,0,null,null,48,"ion-content",[],null,null,null,d.T,d.j)),t["\u0275did"](14,49152,null,0,i.t,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](15,0,null,0,4,"ion-card",[["no-margin",""],["no-padding",""]],null,null,null,d.R,d.d)),t["\u0275did"](16,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](17,0,null,0,2,"ion-card-content",[["no-margin",""],["no-padding",""],["style","background-color: black"]],null,null,null,d.N,d.e)),t["\u0275did"](18,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](19,0,null,0,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["height","200"],["id","video_frame"],["style","width: 100%"],["width",""]],[[8,"src",5]],null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,0,34,"ion-card",[],null,null,null,d.R,d.d)),t["\u0275did"](21,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](22,0,null,0,32,"ion-card-content",[],null,null,null,d.N,d.e)),t["\u0275did"](23,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](24,0,null,0,30,"ion-grid",[],null,null,null,d.W,d.m)),t["\u0275did"](25,49152,null,0,i.z,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](26,0,null,0,28,"ion-row",[],null,null,null,d.ib,d.y)),t["\u0275did"](27,49152,null,0,i.hb,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](28,0,null,0,8,"ion-col",[],null,null,null,d.S,d.i)),t["\u0275did"](29,49152,null,0,i.s,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](30,0,null,0,6,"ion-tab-button",[["tab","schedule"]],null,null,null,d.ob,d.E)),t["\u0275did"](31,49152,null,0,i.tb,[t.ChangeDetectorRef,t.ElementRef],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](32,0,null,0,1,"ion-icon",[["name","bookmark"]],null,null,null,d.Y,d.o)),t["\u0275did"](33,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275eld"](34,0,null,0,2,"ion-label",[],null,null,null,d.eb,d.u)),t["\u0275did"](35,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,["Bookmark"])),(l()(),t["\u0275eld"](37,0,null,0,8,"ion-col",[],null,null,null,d.S,d.i)),t["\u0275did"](38,49152,null,0,i.s,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](39,0,null,0,6,"ion-tab-button",[["tab","schedule"]],null,null,null,d.ob,d.E)),t["\u0275did"](40,49152,null,0,i.tb,[t.ChangeDetectorRef,t.ElementRef],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](41,0,null,0,1,"ion-icon",[["name","share"]],null,null,null,d.Y,d.o)),t["\u0275did"](42,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275eld"](43,0,null,0,2,"ion-label",[],null,null,null,d.eb,d.u)),t["\u0275did"](44,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,["Share"])),(l()(),t["\u0275eld"](46,0,null,0,8,"ion-col",[],null,null,null,d.S,d.i)),t["\u0275did"](47,49152,null,0,i.s,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](48,0,null,0,6,"ion-tab-button",[["tab","schedule"]],null,null,null,d.ob,d.E)),t["\u0275did"](49,49152,null,0,i.tb,[t.ChangeDetectorRef,t.ElementRef],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](50,0,null,0,1,"ion-icon",[["name","play-circle"]],null,null,null,d.Y,d.o)),t["\u0275did"](51,49152,null,0,i.B,[t.ChangeDetectorRef,t.ElementRef],{name:[0,"name"]},null),(l()(),t["\u0275eld"](52,0,null,0,2,"ion-label",[],null,null,null,d.eb,d.u)),t["\u0275did"](53,49152,null,0,i.M,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,0,["Assessment"])),(l()(),t["\u0275eld"](55,0,null,0,4,"ion-card",[],null,null,null,d.R,d.d)),t["\u0275did"](56,49152,null,0,i.l,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275eld"](57,0,null,0,2,"ion-card-content",[],null,null,null,d.N,d.e)),t["\u0275did"](58,49152,null,0,i.m,[t.ChangeDetectorRef,t.ElementRef],null,null),(l()(),t["\u0275ted"](59,0,[" "," "])),(l()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](61,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,9,0,"arrow-back"),l(n,31,0,"schedule"),l(n,33,0,"bookmark"),l(n,40,0,"schedule"),l(n,42,0,"share"),l(n,49,0,"schedule"),l(n,51,0,"play-circle"),l(n,61,0,e.sub_topics)},function(l,n){var e=n.component;l(n,12,0,e.subject+"- "+e.topic),l(n,19,0,e.selected_sub_topic.url),l(n,59,0,e.selected_sub_topic.description||e.selected_sub_topic.topic)})}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-view-tutorial",[],null,null,null,g,m)),t["\u0275did"](1,114688,null,0,c,[s.Location,f.m,f.a,o.a,p.DomSanitizer,i.Eb],null,null)],function(l,n){l(n,1,0)},null)}var y=t["\u0275ccf"]("app-view-tutorial",c,R,{},{},[]),C=e("gIcY");e.d(n,"ViewTutorialModuleNgFactory",function(){return _});var _=t["\u0275cmf"](r,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,C.k,C.k,[]),t["\u0275mpd"](4608,i.b,i.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.Fb,i.Fb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.Jb,i.Jb,[i.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,C.i,C.i,[]),t["\u0275mpd"](1073742336,C.b,C.b,[]),t["\u0275mpd"](1073742336,i.Cb,i.Cb,[]),t["\u0275mpd"](1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),t["\u0275mpd"](1073742336,r,r,[]),t["\u0275mpd"](1024,f.k,function(){return[[{path:"",component:c}]]},[])])})}}]);