webpackJsonp([1],{"/Foh":function(t,e){},0:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={name:"navbar",data:function(){return{loginForm:!0,login:{email:"",password:""},register:{username:"",email:"",password:""}}},methods:{toggleLoginForm:function(){this.loginForm=!this.loginForm},submitLogin:function(){this.$store.dispatch("login",this.login),this.login={email:"",password:""},$("#myModal").modal("toggle")},submitRegister:function(){this.$store.dispatch("register",this.register),this.register={username:"",email:"",password:""},$("#myModal").modal("toggle")},logout:function(){this.$store.dispatch("logout")}},computed:{user:function(){return this.$store.state.user}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loginForm?s("div",{staticClass:"modal fade",attrs:{id:"myModal",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitLogin(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",required:""},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[t.loginForm?s("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Don't have an account?\n            "),s("strong",[t._v("Sign up!")])]):s("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Already a user?\n            "),s("b",[t._v("Click here to login")])]),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])]):s("div",{staticClass:"modal fade",attrs:{id:"myModal",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submitRegister(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],staticClass:"form-control",attrs:{type:"text",name:"username",required:""},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",required:""},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||t.$set(t.register,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",required:""},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}})]),t._v(" "),t._m(3)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[t.loginForm?s("button",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Don't have an account?\n            "),s("b",[t._v("Sign up!")])]):s("p",{staticClass:"action",on:{click:t.toggleLoginForm}},[t._v("Already a user?\n            "),s("b",[t._v("Click here to login")])]),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])]),t._v(" "),s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"navbar-header"},[s("router-link",{attrs:{to:{name:"Home"}}},[s("h5",{staticClass:"navbar-brand",attrs:{id:"logo"}},[t._v("Keepr")])])],1),t._v(" "),s("ul",{staticClass:"nav navbar-nav navbar-right"},[t.user.username?s("li",[s("h3",{attrs:{id:"welcome"}},[t._v("Welcome,\n            "),s("router-link",{attrs:{to:{name:"Profile"}}},[t._v(" "+t._s(t.user.username))])],1)]):t._e(),t._v(" "),t.user.username?s("li",[s("a",{on:{click:t.logout}},[s("span",{staticClass:"glyphicon glyphicon-log-in"}),t._v(" Logout")])]):s("li",{attrs:{"data-toggle":"modal","data-target":"#myModal"}},[t._m(4)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{attrs:{type:"submit"}},[this._v("Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("Register")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{attrs:{type:"submit"}},[this._v("Register")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[e("span",{staticClass:"glyphicon glyphicon-user"}),this._v("Login")])}]};var n={name:"app",components:{Navbar:s("VU/8")(i,o,!1,function(t){s("ULS4")},null,null).exports},mounted:function(){this.$store.dispatch("authenticate")},computed:{user:function(){return this.$store.state.user}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(n,r,!1,function(t){s("htWb")},null,null).exports,c=s("/ocq"),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row text-center"},t._l(t.keeps,function(e){return s("div",[s("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 card"},[s("div",{staticClass:"card-header"},[s("h3",[s("strong",[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"card-body"},[e.userId==t.user.id?s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteKeep(e)}}},[t._v("Delete")]):t._e(),t._v(" "),s("img",{attrs:{id:"img","data-toggle":"modal","data-target":"#openKeep",src:e.imgUrl,alt:"Keepr Keep"},on:{click:function(s){t.setActiveKeep(e),t.incViews(e,t.user)}}})]),t._v(" "),s("p",{staticClass:"card-footer"},[t._v(t._s(e.description))])])])])})),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"openKeep",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h1",{staticClass:"modal-title"},[t._v(t._s(t.keep.title))]),t._v(" "),s("span",[s("strong",[t._v("Views:")]),t._v(" "+t._s(t.keep.viewCount))]),t._v(" "),s("span",[s("strong",[t._v("Keeps:")]),t._v(" "+t._s(t.keep.keepCount))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")])]),t._v(" "),s("div",{staticClass:"modal-body text-center"},[s("div",[s("img",{staticClass:"thumbnail",attrs:{id:"bigPicture",src:t.keep.imgUrl,alt:"Keepr Keep"}})])]),t._v(" "),s("div",{staticClass:"modal-footer text-center"},[s("span",[t._v("Add to Vault: ")]),t._v(" "),s("form",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.vaultKeep.vaultId,expression:"vaultKeep.vaultId"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.vaultKeep,"vaultId",e.target.multiple?s:s[0])}}},t._l(t.vaults,function(e){return e.userId==t.user.id?s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))]):t._e()}))]),t._v(" "),s("span",[s("button",{on:{click:function(e){t.addToVault(t.keep)}}},[t._v("ADD")])])])])])])])},staticRenderFns:[]};var d=s("VU/8")({data:function(){return{keep:{},vaultKeep:{}}},methods:{deleteKeep:function(t){this.$store.dispatch("deleteKeep",t)},setActiveKeep:function(t){this.keep=t},incViews:function(t,e){""!=e&&e.id!=t.userId&&this.$store.dispatch("incViews",t)},addToVault:function(t){this.vaultKeep.keepId=t.id,this.$store.dispatch("addKeepToVault",this.vaultKeep)}},mounted:function(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults")},computed:{user:function(){return this.$store.state.user},keeps:function(){return this.$store.state.keeps},vaults:function(){return this.$store.state.vaults}}},u,!1,function(t){s("Wd7q")},"data-v-7e61a5d4",null).exports,m={data:function(){return{keep:{title:"",imgUrl:"",description:"",public:"true"},vault:{name:"",description:""}}},mounted:function(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults")},methods:{addKeep:function(){this.$store.dispatch("addKeep",this.keep),$("#keepModal").modal("toggle"),this.keep={}},addVault:function(){this.$store.dispatch("addVault",this.vault),$("#vaultModal").modal("toggle"),this.vault={}},deleteVault:function(t){this.$store.dispatch("deleteVault",t)},clearKeepForm:function(){this.keep={}},clearVaultForm:function(){this.vault={}},deleteKeep:function(t){this.$store.dispatch("deleteKeep",t)}},computed:{user:function(){return this.$store.state.user},keeps:function(){return this.$store.state.keeps},vaults:function(){return this.$store.state.vaults}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-xs-6"},[t.user.username?s("button",{staticClass:"btn new",attrs:{"data-toggle":"modal","data-target":"#keepModal"}},[s("h3",[t._v("+ New Keep +")])]):t._e()]),t._v(" "),s("div",{staticClass:"col-xs-6"},[t.user.username?s("button",{staticClass:"btn new",attrs:{"data-toggle":"modal","data-target":"#vaultModal"}},[s("h3",[t._v("+ New Vault +")])]):t._e()]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"keepModal",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.addKeep(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keep.title,expression:"keep.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",maxlength:"20",required:""},domProps:{value:t.keep.title},on:{input:function(e){e.target.composing||t.$set(t.keep,"title",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"imgUrl"}},[t._v("Image URL")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keep.imgUrl,expression:"keep.imgUrl"}],staticClass:"form-control",attrs:{type:"text",name:"imgUrl",maxlength:"255",required:""},domProps:{value:t.keep.imgUrl},on:{input:function(e){e.target.composing||t.$set(t.keep,"imgUrl",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keep.description,expression:"keep.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",maxlength:"35",required:""},domProps:{value:t.keep.description},on:{input:function(e){e.target.composing||t.$set(t.keep,"description",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group text-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keep.public,expression:"keep.public"}],attrs:{type:"checkbox",id:"public",name:"public",value:"false"},domProps:{checked:Array.isArray(t.keep.public)?t._i(t.keep.public,"false")>-1:t.keep.public},on:{change:function(e){var s=t.keep.public,a=e.target,i=!!a.checked;if(Array.isArray(s)){var o=t._i(s,"false");a.checked?o<0&&(t.keep.public=s.concat(["false"])):o>-1&&(t.keep.public=s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.keep,"public",i)}}}),t._v(" "),s("label",{attrs:{for:"public"}},[t._v("Make this public")])]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.clearKeepForm}},[t._v("Cancel")])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"vaultModal",role:"dialog"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.addVault(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.vault.name,expression:"vault.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",maxlength:"20",required:""},domProps:{value:t.vault.name},on:{input:function(e){e.target.composing||t.$set(t.vault,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.vault.description,expression:"vault.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",maxlength:"30",required:""},domProps:{value:t.vault.description},on:{input:function(e){e.target.composing||t.$set(t.vault,"description",e.target.value)}}})]),t._v(" "),t._m(3)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.clearVaultForm}},[t._v("Cancel")])])])])])]),t._v(" "),s("div",{staticClass:"row text-center"},[s("h2",[t._v("Vaults")]),t._v(" "),s("hr"),t._v(" "),t._l(t.vaults,function(e){return s("div",[e.userId==t.user.id?s("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 card"},[s("div",{staticClass:"card-title"},[s("router-link",{staticStyle:{"font-size":"2em"},attrs:{to:"/vault/"+e.id}},[t._v(t._s(e.name))])],1),t._v(" "),s("div",{staticClass:"card-footer"},[s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteVault(e)}}},[t._v("Delete")])])]):t._e()])})],2),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row text-center"},[s("h2",[t._v("Keeps")]),t._v(" "),s("hr"),t._v(" "),t._l(t.keeps,function(e){return s("div",[e.userId==t.user.id?s("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"card-body"},[s("img",{attrs:{src:e.imgUrl,alt:"Keepr Keep"}})]),t._v(" "),s("p",{staticClass:"card-footer"},[t._v(t._s(e.description))]),t._v(" "),e.userId==t.user.id?s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteKeep(e)}}},[t._v("Delete")]):t._e()])]):t._e()])})],2),t._v(" "),s("hr")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h1",{staticClass:"modal-title"},[this._v("New Keep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Post")]),this._v(" "),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")]),this._v(" "),e("h1",{staticClass:"modal-title"},[this._v("New Vault")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("Create")]),this._v(" "),e("br")])}]};var p=s("VU/8")(m,v,!1,function(t){s("/Foh")},null,null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row text-center"},t._l(t.vaultKeeps,function(e){return s("div",[s("div",{staticClass:"col-xs-12 col-md-3"},[s("h4",[t._v(t._s(e.title))]),t._v(" "),s("img",{staticClass:"thumbnail",attrs:{id:"bigPicture",src:e.imgUrl,alt:"Keepr Keep"}})])])}))},staticRenderFns:[]};var f=s("VU/8")({name:"vault",data:function(){return{}},mounted:function(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults"),this.$store.dispatch("getKeepsByVault",this.$route.params.id)},methods:{},computed:{user:function(){return this.$store.state.user},keeps:function(){return this.$store.state.keeps},vaults:function(){return this.$store.state.vaults},vaultKeeps:function(){return this.$store.state.activeVaultKeep}}},h,!1,function(t){s("SaSo")},null,null).exports;a.a.use(c.a);var g=new c.a({routes:[{path:"/",name:"Home",component:d},{path:"/profile",name:"Profile",component:p},{path:"/vault/:id",name:"Vault",component:f}]}),_=s("mtWM"),C=s.n(_),b=s("NYxO"),k=s("wpkY"),w=s.n(k),K=(s("OMJi"),C.a.create({baseURL:"//localhost:5000/api/",timeout:2e3,withCredentials:!0})),y=C.a.create({baseURL:"//localhost:5000/",timeout:2e3,withCredentials:!0});a.a.use(b.a),a.a.use(w.a);var V=new b.a.Store({state:{err:{},user:{},keeps:[],vaults:[],activeVaultKeep:{}},mutations:{handleError:function(t,e){t.err=e},setUser:function(t,e){t.user=e},setKeeps:function(t,e){t.keeps=e},setVaults:function(t,e){t.vaults=e},setActiveVaultKeeps:function(t,e){t.activeVaultKeep=e}},actions:{addKeepToVault:function(t,e){var s=t.commit,a=t.dispatch;K.post("vaultkeeps",e).then(function(t){a("getKeepsByVault",e)}).catch(function(t){s("handleError",t)})},getKeepsByVault:function(t,e){var s=t.commit;t.dispatch;K("vaultkeeps/"+e).then(function(t){s("setActiveVaultKeeps",t.data)}).catch(function(t){s("handleError",t)})},addKeep:function(t,e){var s=t.commit,a=t.dispatch;K.post("keeps",e).then(function(t){a("getKeeps")}).catch(function(t){s("handleError",t)})},getKeeps:function(t){var e=t.commit;t.dispatch;K("keeps").then(function(t){e("setKeeps",t.data)}).catch(function(t){e("handleError",t)})},deleteKeep:function(t,e){var s=t.commit,a=t.dispatch;K.delete("keeps/"+e.id).then(function(t){a("getKeeps")}).catch(function(t){s("handleError",t)})},incViews:function(t,e){var s=t.commit,a=t.dispatch;e.viewCount++,K.put("keeps/"+e.id,e).then(function(t){a("getKeeps")}).catch(function(t){s("handleError",t)})},addVault:function(t,e){var s=t.commit,a=t.dispatch;K.post("vaults",e).then(function(t){console.log(t),a("getVaults")}).catch(function(t){s("handleError",t)})},getVaults:function(t){var e=t.commit;t.dispatch;K("vaults").then(function(t){console.log(t),e("setVaults",t.data)}).catch(function(t){e("handleError",t)})},deleteVault:function(t,e){var s=t.commit,a=t.dispatch;K.delete("vaults/"+e.id).then(function(t){a("getVaults")}).catch(function(t){s("handleError",t)})},register:function(t,e){var s=t.commit;t.dispatch;y.post("accounts/register",e).then(function(t){console.log(t),s("setUser",t.data),w.a.push({name:"Home"}),console.log("user account created")}).catch(function(t){s("handleError",t)})},login:function(t,e){var s=t.commit;t.dispatch;y.post("accounts/login",e).then(function(t){s("setUser",t.data),w.a.push({name:"Home"}),console.log(t)}).catch(function(t){s("handleError",t)})},logout:function(t){var e=t.commit;t.dispatch;y.delete("accounts/logout").then(function(t){e("setUser",{}),w.a.push({name:"Home"})}).catch(function(t){e("handleError",t)})},authenticate:function(t){var e=t.commit;t.dispatch;y("accounts/authenticate").then(function(t){e("setUser",t.data)}).catch(function(t){e("handleError",t)})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,store:V,template:"<App/>",components:{App:l}})},SaSo:function(t,e){},ULS4:function(t,e){},Wd7q:function(t,e){},htWb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.be67b47572ce13ec4abd.js.map