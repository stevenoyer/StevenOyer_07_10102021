(function(t){function e(e){for(var o,c,i=e[0],r=e[1],l=e[2],d=0,u=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);b&&b(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},c={app:0},a={app:0},s=[];function i(t){return r.p+"js/"+({profil:"profil"}[t]||t)+"."+{profil:"73aa8fcb"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={profil:1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var o="css/"+({profil:"profil"}[t]||t)+"."+{profil:"9dc750f8"}[t]+".css",a=r.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===a))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===o||d===a)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete c[t],b.parentNode.removeChild(b),n(s)},b.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){c[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=i(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(b);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,n[1](u)}a[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var b=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03de":function(t,e,n){t.exports=n.p+"img/icon.a1ceb75f.svg"},"0ed2":function(t,e,n){},2476:function(t,e,n){},"4da4":function(t,e,n){"use strict";n("8ed4")},"5692b":function(t,e,n){"use strict";n("0ed2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,a,s){var i=Object(o["z"])("Header"),r=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",null,[Object(o["i"])(i)]),Object(o["i"])(r)],64)}var a=n("03de"),s=n.n(a),i=function(t){return Object(o["v"])("data-v-28dcbaf5"),t=t(),Object(o["t"])(),t},r={class:"header"},l={id:"nav",class:"navbar navbar-expand-lg header-nav navbar-dark bg-dark"},d={class:"container"},u=i((function(){return Object(o["g"])("a",{class:"navbar-brand",href:"/"},[Object(o["g"])("img",{src:s.a,alt:"",width:"60"})],-1)})),b=i((function(){return Object(o["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["g"])("span",{class:"navbar-toggler-icon"})],-1)})),m={class:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},p={class:"navbar-nav ml-auto mb-2 mb-lg-0"},f={key:0,class:"nav-item"},j=Object(o["h"])("Mon profil"),h={class:"nav-item"};function O(t,e,n,c,a,s){var i=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["f"])("header",r,[Object(o["g"])("nav",l,[Object(o["g"])("div",d,[u,b,Object(o["g"])("div",m,[Object(o["g"])("ul",p,[t.connected?(Object(o["s"])(),Object(o["f"])("li",f,[Object(o["i"])(i,{class:"nav-link btn btn-info me-3","aria-current":"page",to:"/profil"},{default:Object(o["G"])((function(){return[j]})),_:1})])):Object(o["e"])("",!0),Object(o["H"])(Object(o["g"])("li",h,[Object(o["g"])("a",{class:"nav-link btn btn-danger",onClick:e[0]||(e[0]=function(t){return s.disconnect()})},"Se déconnecter")],512),[[o["E"],t.connected]])])])])])])}var g=n("5530"),v=n("5502"),y={name:"Header",data:function(){return{}},computed:Object(g["a"])({},Object(v["b"])(["connected"])),methods:{disconnect:function(){this.$store.dispatch("disconnect"),this.$router.push("/")}}},k=(n("5692b"),n("6b0d")),I=n.n(k);const C=I()(y,[["render",O],["__scopeId","data-v-28dcbaf5"]]);var _=C,w={name:"app",components:{Header:_}};const x=I()(w,[["render",c]]);var D=x,M=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),P={class:"containerfluid container-md mt-5"},A={id:"login"},T=Object(o["g"])("h1",{class:"text-center"},"Bienvenue sur Groupomania",-1),B={id:"posts"};function E(t,e,n,c,a,s){var i=Object(o["z"])("Login"),r=Object(o["z"])("Posts");return Object(o["s"])(),Object(o["f"])("div",P,[Object(o["H"])(Object(o["g"])("div",A,[T,Object(o["i"])(i)],512),[[o["E"],!t.connected]]),Object(o["g"])("div",B,[Object(o["i"])(r)])])}var N=function(t){return Object(o["v"])("data-v-70acba85"),t=t(),Object(o["t"])(),t},z={class:"container-fluid container-md py-5"},U={class:"form-signup"},S={key:0,class:"text-danger text-center text-uppercase"},L={key:1,class:"text-danger text-center text-uppercase"},H={class:"text-center py-2"},$={key:0,class:"link"},F={key:1,class:"link"},V={key:2,class:"row"},G={class:"col-12 col-md-6"},q={class:"mb-3 form-row"},K=N((function(){return Object(o["g"])("label",{for:"prenom",class:"form-label"},"Prénom",-1)})),J={class:"col-12 col-md-6"},Q={class:"mb-3 form-row"},R=N((function(){return Object(o["g"])("label",{for:"nom",class:"form-label"},"Nom",-1)})),W={class:"mb-3 form-row"},X=N((function(){return Object(o["g"])("label",{for:"email",class:"form-label"},"Adresse e-mail",-1)})),Y={class:"mb-3 form-row"},Z=N((function(){return Object(o["g"])("label",{for:"pass",class:"form-label"},"Mot de passe",-1)})),tt={class:"mb-3 text-end form-row"};function et(t,e,n,c,a,s){return Object(o["s"])(),Object(o["f"])("div",z,[Object(o["g"])("div",U,["login"==t.mode?(Object(o["s"])(),Object(o["f"])("h2",S,"Connexion")):(Object(o["s"])(),Object(o["f"])("h2",L,"Inscription")),Object(o["g"])("div",H,["login"==t.mode?(Object(o["s"])(),Object(o["f"])("p",$,[Object(o["g"])("span",{onClick:e[0]||(e[0]=function(t){return s.switchCreate()})},"Vous n'avez pas de compte ?")])):(Object(o["s"])(),Object(o["f"])("p",F,[Object(o["g"])("span",{onClick:e[1]||(e[1]=function(t){return s.switchLogin()})},"Vous avez déjà un compte ?")]))]),"create"==t.mode?(Object(o["s"])(),Object(o["f"])("div",V,[Object(o["g"])("div",G,[Object(o["g"])("div",q,[K,Object(o["H"])(Object(o["g"])("input",{id:"prenom",type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.prenom=e}),placeholder:"John"},null,512),[[o["D"],t.prenom]])])]),Object(o["g"])("div",J,[Object(o["g"])("div",Q,[R,Object(o["H"])(Object(o["g"])("input",{id:"nom",type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.nom=e}),placeholder:"Doe"},null,512),[[o["D"],t.nom]])])])])):Object(o["e"])("",!0),Object(o["g"])("div",W,[X,Object(o["H"])(Object(o["g"])("input",{id:"email",type:"email",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.email=e}),placeholder:"johne.doe@email.com"},null,512),[[o["D"],t.email]])]),Object(o["g"])("div",Y,[Z,Object(o["H"])(Object(o["g"])("input",{id:"pass",type:"password",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.pass=e}),placeholder:"***********"},null,512),[[o["D"],t.pass]])]),Object(o["g"])("div",tt,["login"==t.mode?(Object(o["s"])(),Object(o["f"])("button",{key:0,onClick:e[6]||(e[6]=function(t){return s.login()}),class:Object(o["o"])(["btn btn-primary",{disabled:!s.validateFields}])},"Se connecter",2)):(Object(o["s"])(),Object(o["f"])("button",{key:1,onClick:e[7]||(e[7]=function(t){return s.create()}),class:Object(o["o"])(["btn btn-primary",{disabled:!s.validateFields}])},"S'inscrire",2))])])])}var nt=n("bc3a").default,ot={name:"Login",data:function(){return{mode:"login",prenom:"",nom:"",email:"",pass:""}},computed:Object(g["a"])({validateFields:function(){return"create"==this.mode?""!=this.prenom&&""!=this.nom&&""!=this.email&&""!=this.pass:""!=this.email&&""!=this.pass}},Object(v["b"])(["connected"])),methods:{switchCreate:function(){this.mode="create"},switchLogin:function(){this.mode="login"},login:function(t){var e=this,n={};n=t?{email:t.email,pass:t.pass}:{email:this.email,pass:this.pass},nt.post("http://127.0.0.1:3200/api/auth/login",n).then((function(t){200!=t.status&&alert("Une erreur est survenue lors de la connexion à votre compte."),t.data.userId&&(e.$store.dispatch("loginAccount",{connected:!0,userId:t.data.userId,prenom:t.data.prenom,nom:t.data.nom,email:t.data.email,admin:t.data.admin,token:t.data.token,avatar:t.data.avatar}),e.$router.push("/"))})).catch((function(t){console.log(t)}))},create:function(){var t=this;console.log(this.email,this.pass,this.nom,this.prenom),nt.post("http://127.0.0.1:3200/api/auth/signup",{prenom:this.prenom,nom:this.nom,email:this.email,pass:this.pass}).then((function(e){console.log(e),201!=e.status&&alert("Une erreur est survenue lors de la création du compte."),t.login({email:t.email,pass:t.pass})})).catch((function(t){return console.log(t)}))}}};n("916f");const ct=I()(ot,[["render",et],["__scopeId","data-v-70acba85"]]);var at=ct,st=function(t){return Object(o["v"])("data-v-715d7a80"),t=t(),Object(o["t"])(),t},it={key:0,id:"posts-section"},rt={class:"post-input"},lt={class:"my-3"},dt={class:"mb-3"},ut=st((function(){return Object(o["g"])("label",{for:"content-text",class:"form-label"},null,-1)})),bt=["placeholder"],mt={class:"mb-3 d-flex justify-content-between"},pt={class:"upload"},ft={class:"btn btn-groupomania",for:"image"},jt=Object(o["h"])(" Impoter une image "),ht={class:"list-posts mt-5"};function Ot(t,e,n,c,a,s){var i=Object(o["z"])("ListPost");return t.connected?(Object(o["s"])(),Object(o["f"])("div",it,[Object(o["g"])("div",rt,[Object(o["g"])("div",lt,[Object(o["g"])("h3",null,"Exprimez-vous "+Object(o["B"])(t.prenom)+" !",1)]),Object(o["g"])("div",dt,[ut,Object(o["H"])(Object(o["g"])("textarea",{class:"form-control",name:"content","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.content=e}),id:"content-text",rows:"1",placeholder:"Quoi de neuf, "+t.prenom+" ?"},null,8,bt),[[o["D"],t.content]])]),Object(o["g"])("div",mt,[Object(o["g"])("div",pt,[Object(o["g"])("label",ft,[jt,Object(o["g"])("input",{onChange:e[1]||(e[1]=function(t){return s.uploadImage(t)}),type:"file",name:"image",id:"image",class:"btn btn-groupomania"},null,32)])]),Object(o["g"])("button",{onClick:e[2]||(e[2]=function(t){return s.post()}),type:"submit",class:Object(o["o"])(["btn btn-groupomania",{disabled:!s.validateFields}])},"Publier",2)])]),Object(o["g"])("div",ht,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(t.listPosts,(function(t){return Object(o["s"])(),Object(o["f"])("div",{key:t},[Object(o["i"])(i,{id:t.id,prenom:t.prenom,nom:t.nom,created:t.created,created_by:t.created_by,image:t.image,like_post:t.like_post,like_user:t.like_user,content:t.content,avatar:t.avatar},null,8,["id","prenom","nom","created","created_by","image","like_post","like_user","content","avatar"])])})),128))])])):Object(o["e"])("",!0)}n("2b3d"),n("9861");var gt={class:"card mt-4"},vt={class:"card-header d-flex align-items-center justify-content-between"},yt={class:"d-flex align-items-center"},kt=["src"],It={key:1,class:"rounded-circle",src:"https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png",width:"45"},Ct={class:"ms-2"},_t={class:"author"},wt={class:"created"},xt={key:0,class:"d-flex align-items-center"},Dt=Object(o["g"])("i",{class:"fas fa-trash"},null,-1),Mt=[Dt],Pt=Object(o["g"])("i",{class:"fas fa-edit"},null,-1),At=[Pt],Tt={class:"card-body"},Bt={key:0,class:"card-text"},Et={key:1,class:"text-center mt-4"},Nt=["src"],zt={key:2,id:"mode-edit",class:"mt-4"},Ut={class:"text-end"},St={class:"card-footer text-end"},Lt=["id"],Ht=Object(o["g"])("i",{class:"fas fa-heart"},null,-1),$t=[Ht],Ft=Object(o["g"])("i",{class:"fas fa-comments"},null,-1),Vt=Object(o["g"])("button",{class:"btn disabled"},[Object(o["g"])("i",{class:"fas fa-share"})],-1);function Gt(t,e,n,c,a,s){var i=this,r=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["f"])("div",gt,[Object(o["g"])("div",vt,[Object(o["g"])("div",yt,[Object(o["i"])(r,{to:"/user/"+n.created_by,class:"d-flex align-items-center"},{default:Object(o["G"])((function(){return[n.avatar?(Object(o["s"])(),Object(o["f"])("img",{key:0,class:"rounded-circle",src:n.avatar,width:"45"},null,8,kt)):(Object(o["s"])(),Object(o["f"])("img",It)),Object(o["g"])("div",Ct,[Object(o["g"])("p",_t,Object(o["B"])(n.prenom)+" "+Object(o["B"])(n.nom),1),Object(o["g"])("p",wt,Object(o["B"])(s.formatDate(n.created)),1)])]})),_:1},8,["to"])]),n.created_by==this.userId||1==this.admin?(Object(o["s"])(),Object(o["f"])("div",xt,[Object(o["g"])("button",{onClick:e[0]||(e[0]=function(t){return s.deletePost(n.id)}),class:"btn"},Mt),Object(o["g"])("button",{onClick:e[1]||(e[1]=function(t){return s.updateEditMode(n.id)}),class:"btn"},At)])):Object(o["e"])("",!0)]),Object(o["g"])("div",Tt,[n.content?(Object(o["s"])(),Object(o["f"])("p",Bt,Object(o["B"])(n.content),1)):Object(o["e"])("",!0),n.image?(Object(o["s"])(),Object(o["f"])("div",Et,[Object(o["g"])("img",{class:"image-post",src:n.image},null,8,Nt)])):Object(o["e"])("",!0),this.editMode.postId==n.id&&1==this.editMode.edit?(Object(o["s"])(),Object(o["f"])("div",zt,[Object(o["H"])(Object(o["g"])("textarea",{class:"mb-3 form-control",name:"content","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.newContent=e}),id:"content-text",rows:"4",placeholder:"Quoi de neuf ?"},null,512),[[o["D"],t.newContent]]),Object(o["g"])("div",Ut,[Object(o["g"])("button",{onClick:e[3]||(e[3]=function(t){return i.editMode.edit=!1}),class:"btn btn-danger me-4"},"Annuler"),Object(o["g"])("button",{onClick:e[4]||(e[4]=function(t){return s.updatePost(n.id)}),class:"btn btn-success"},"Mettre à jour")])])):Object(o["e"])("",!0)]),Object(o["g"])("div",St,[Object(o["g"])("button",{id:"button-like-"+n.id,onClick:e[5]||(e[5]=function(t){return s.like(n.id)}),class:Object(o["o"])(["btn",{liked:n.like_post&&n.like_user}])},$t,10,Lt),Object(o["i"])(r,{class:"btn",to:"/post/"+n.id},{default:Object(o["G"])((function(){return[Ft]})),_:1},8,["to"]),Vt])])}n("a9e3");var qt=n("bc3a").default,Kt={name:"ListPost",data:function(){return{editMode:{},newContent:"",liked:""}},props:{id:Number,prenom:String,nom:String,created:[String,Date],created_by:Number,image:String,like_post:Number,like_user:Number,content:String,avatar:String},computed:Object(g["a"])({},Object(v["b"])(["token","userId","admin"])),methods:{formatDate:function(t){var e=new Date(t),n=new Date,o=n.getTime()-e.getTime(),c=Math.round(o/864e5),a=Math.round(o/6e4),s=Math.round(o/1e3);return s<120&&0==c?"Il y a un instant":a<59&&0==c?"Il y a "+a+" minutes":60==a&&0==c?"Il y a 1 heure":a>120&&a<1440&&(0==c||1==c)?"Il y a "+Math.round(a/60)+" heures":a>=1440&&1==c?"Il y a un jour":a>1440&&c>1&&(c<30||c<31)?"Il y a "+c+" jours":a>1440&&c>30&&c<365?"Il y a "+Math.round(c/30)+" mois":c>=365&&c<730?"Il y a plus d'un an":c>=730?"Il y a "+Math.round(c/365)+" ans":void 0},deletePost:function(t){var e=this;qt.delete("http://localhost:3200/api/posts/".concat(t),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(t){console.log(t),e.$route.params.id?e.$router.push("/"):e.$router.go()})).catch((function(t){console.log(t)}))},updateEditMode:function(t){this.editMode={edit:!0,postId:t},this.newContent=""},updatePost:function(t){var e=this;console.log(this.content,t),qt.put("http://localhost:3200/api/posts/".concat(t),{content:this.newContent},{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(t){console.log(t),e.$router.go()})).catch((function(t){console.log(t)}))},like:function(t){qt.post("http://localhost:3200/api/posts/".concat(t),{userId:this.userId},{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){console.log(e);var n=document.querySelector("#button-like-"+t);e.data.liked?n.classList.add("liked"):n.classList.remove("liked")})).catch((function(t){console.log(t)}))}}};n("5d20");const Jt=I()(Kt,[["render",Gt]]);var Qt=Jt,Rt=n("bc3a").default,Wt={name:"Posts",data:function(){return{listPosts:[],content:"",image:"",imageUrl:""}},components:{ListPost:Qt},computed:Object(g["a"])({validateFields:function(){return console.log(this.content),""!=this.content||""!=this.image}},Object(v["b"])(["connected","token","prenom","userId"])),methods:{post:function(){var t=this,e=new FormData;e.append("content",this.content),e.append("userId",this.userId),e.append("image",this.image),console.log(this.userId,this.content,this.image),Rt.post("http://localhost:3200/api/posts",e,{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"image/jpeg"}}).then((function(e){console.log(e),console.log(t.userId),t.$router.go()})).catch((function(t){console.log(t)}))},uploadImage:function(t){this.image=t.target.files[0],this.imageUrl=URL.createObjectURL(this.image),console.log(this.image)}},mounted:function(){var t=this;Rt.get("http://localhost:3200/api/posts",{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){console.log(e.data),t.listPosts=e.data})).catch((function(t){console.log(t)}))}};n("88ce");const Xt=I()(Wt,[["render",Ot],["__scopeId","data-v-715d7a80"]]);var Yt=Xt,Zt={name:"Home",components:{Login:at,Posts:Yt},computed:Object(g["a"])({},Object(v["b"])(["connected","token"]))};const te=I()(Zt,[["render",E]]);var ee=te,ne=function(t){return Object(o["v"])("data-v-f09b0b88"),t=t(),Object(o["t"])(),t},oe={class:"container-fluid container-md"},ce={id:"post-section"},ae={class:"list-posts mt-5"},se={class:"post-comment mt-4"},ie=ne((function(){return Object(o["g"])("label",null,"Poster un commentaire",-1)})),re={class:"d-flex align-items-center"},le=ne((function(){return Object(o["g"])("i",{class:"fas fa-paper-plane"},null,-1)})),de=[le],ue={class:"mt-4"},be={class:"card mb-4"},me={key:0,class:"delete-comment"},pe=["onClick"],fe=ne((function(){return Object(o["g"])("i",{class:"fas fa-trash"},null,-1)})),je=[fe],he={class:"row card-body d-flex align-items-center justify-content-between"},Oe={class:"d-flex align-items-center col-12 col-md-6 col-lg-3"},ge=["src"],ve={key:1,class:"rounded-circle",src:"https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png",width:"45"},ye={class:"ms-2"},ke={class:"author"},Ie={class:"created"},Ce={class:"col-12 col-md-6 col-lg-9"};function _e(t,e,n,c,a,s){var i=this,r=Object(o["z"])("ListPost");return Object(o["s"])(),Object(o["f"])("div",oe,[Object(o["g"])("div",ce,[Object(o["g"])("div",ae,[this.post?(Object(o["s"])(),Object(o["d"])(r,{key:this.post.id,id:this.post.id,prenom:this.post.prenom,nom:this.post.nom,created:this.post.created,created_by:this.post.created_by,image:this.post.image,like_post:this.post.like_post,like_user:this.post.like_user,content:this.post.content,avatar:this.post.avatar},null,8,["id","prenom","nom","created","created_by","image","like_post","like_user","content","avatar"])):Object(o["e"])("",!0),Object(o["g"])("div",se,[ie,Object(o["g"])("div",re,[Object(o["H"])(Object(o["g"])("input",{type:"text",name:"comment","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.comment=e}),class:"form-control",placeholder:"Exprimez-vous"},null,512),[[o["D"],t.comment]]),Object(o["g"])("button",{onClick:e[1]||(e[1]=function(t){return s.postComment(i.post.id)}),class:Object(o["o"])(["btn",{disabled:!s.validateFields}])},de,2)])]),Object(o["g"])("div",ue,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(this.comments,(function(e){return Object(o["s"])(),Object(o["f"])("div",{key:e},[Object(o["g"])("div",be,[t.created_by==i.userId||1==i.admin?(Object(o["s"])(),Object(o["f"])("div",me,[Object(o["g"])("button",{onClick:function(t){return s.deleteComment(e.id)},class:"btn"},je,8,pe)])):Object(o["e"])("",!0),Object(o["g"])("div",he,[Object(o["g"])("div",Oe,[e.avatar?(Object(o["s"])(),Object(o["f"])("img",{key:0,class:"rounded-circle",src:e.avatar,width:"45"},null,8,ge)):(Object(o["s"])(),Object(o["f"])("img",ve)),Object(o["g"])("div",ye,[Object(o["g"])("p",ke,Object(o["B"])(e.prenom)+" "+Object(o["B"])(e.nom),1),Object(o["g"])("p",Ie,Object(o["B"])(s.formatDate(e.created)),1)])]),Object(o["g"])("div",Ce,[Object(o["g"])("p",null,Object(o["B"])(e.content),1)])])])])})),128))])])])])}n("99af");var we=n("bc3a").default,xe={name:"Post",components:{ListPost:Qt},data:function(){return{post:{},editMode:{},comment:"",comments:""}},computed:Object(g["a"])({validateFields:function(){return console.log(this.comment),""!=this.comment}},Object(v["b"])(["token","userId","admin"])),methods:{deleteComment:function(t){var e=this;console.log(t,this.token),we.delete("http://localhost:3200/api/posts/".concat(this.post.id,"/comments/").concat(t),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(t){console.log(t),e.$router.go()})).catch((function(t){console.log(t)}))},postComment:function(t){var e=this;console.log(t);var n={content:this.comment,userId:this.userId};console.log(n),we.post("http://localhost:3200/api/posts/".concat(t,"/comments"),n,{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(t){console.log(t),e.$router.go()})).catch((function(t){console.log(t)}))},formatDate:function(t){var e=new Date(t),n=new Date,o=n.getTime()-e.getTime(),c=Math.round(o/864e5),a=Math.round(o/6e4),s=Math.round(o/1e3);return s<120&&0==c?"Il y a un instant":a<59&&0==c?"Il y a "+a+" minutes":60==a&&0==c?"Il y a 1 heure":a>120&&a<1440&&(0==c||1==c)?"Il y a "+Math.round(a/60)+" heures":a>=1440&&1==c?"Il y a un jour":a>1440&&c>1&&(c<30||c<31)?"Il y a "+c+" jours":a>1440&&c>30&&c<365?"Il y a "+Math.round(c/30)+" mois":c>=365&&c<730?"Il y a plus d'un an":c>=730?"Il y a "+Math.round(c/365)+" ans":void 0}},mounted:function(){var t=this;we.get("http://localhost:3200/api/posts/".concat(this.$route.params.id),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){t.post=e.data[0],console.log(e),console.log(t.post)})).catch((function(t){console.log(t)})),we.get("http://localhost:3200/api/posts/".concat(this.$route.params.id,"/comments"),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){t.comments=e.data,console.log(t.comments)})).catch((function(t){console.log(t)}))}};n("7800");const De=I()(xe,[["render",_e],["__scopeId","data-v-f09b0b88"]]);var Me=De,Pe=function(t){return Object(o["v"])("data-v-2550ea2e"),t=t(),Object(o["t"])(),t},Ae={class:"container-fluid container-md mt-5"},Te={id:"user-section"},Be={class:"card mb-4"},Ee={key:0,class:"delete-comment"},Ne=Pe((function(){return Object(o["g"])("i",{class:"fas fa-trash"},null,-1)})),ze=[Ne],Ue={class:"row card-body d-flex align-items-center justify-content-between"},Se={class:"d-flex align-items-center col-3"},Le=["src"],He={key:1,class:"rounded-circle",src:"https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png",width:"45"},$e={class:"ms-2"},Fe={class:"author"},Ve={class:"info-mail"},Ge=Pe((function(){return Object(o["g"])("div",{class:"col-9"},[Object(o["g"])("p")],-1)})),qe={class:"card-header d-flex align-items-center justify-content-between"},Ke={class:"d-flex align-items-center"},Je=["src"],Qe={key:1,class:"rounded-circle",src:"https://semainedelhistoire.com/wp-content/uploads/2021/04/avatar_placeholder.png",width:"45"},Re={class:"ms-2"},We={class:"author"},Xe={class:"created"},Ye={key:0,class:"d-flex align-items-center"},Ze=["onClick"],tn=Pe((function(){return Object(o["g"])("i",{class:"fas fa-trash"},null,-1)})),en=[tn],nn=["onClick"],on=Pe((function(){return Object(o["g"])("i",{class:"fas fa-edit"},null,-1)})),cn=[on],an={class:"card-body"},sn={key:0,class:"card-text mb-4"},rn={class:"text-center"},ln=["src"],dn={key:1,id:"mode-edit"},un={class:"text-end"},bn=["onClick"],mn={class:"card-footer text-end"},pn=["id","onClick"],fn=Pe((function(){return Object(o["g"])("i",{class:"fas fa-heart"},null,-1)})),jn=[fn],hn=Pe((function(){return Object(o["g"])("i",{class:"fas fa-comments"},null,-1)})),On=Pe((function(){return Object(o["g"])("button",{class:"btn disabled"},[Object(o["g"])("i",{class:"fas fa-share"})],-1)}));function gn(t,e,n,c,a,s){var i=this,r=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["f"])("div",Ae,[Object(o["g"])("div",Te,[Object(o["g"])("div",Be,[1==this.admin?(Object(o["s"])(),Object(o["f"])("div",Ee,[Object(o["g"])("button",{onClick:e[0]||(e[0]=function(t){return s.deleteUser(i.userInfo.id)}),class:"btn"},ze)])):Object(o["e"])("",!0),Object(o["g"])("div",Ue,[Object(o["g"])("div",Se,[this.userInfo.avatar?(Object(o["s"])(),Object(o["f"])("img",{key:0,class:"rounded-circle",src:this.userInfo.avatar,width:"45"},null,8,Le)):(Object(o["s"])(),Object(o["f"])("img",He)),Object(o["g"])("div",$e,[Object(o["g"])("p",Fe,Object(o["B"])(this.userInfo.prenom)+" "+Object(o["B"])(this.userInfo.nom),1),Object(o["g"])("p",Ve,Object(o["B"])(this.userInfo.email),1)])]),Ge])]),(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(a.listPostsUser,(function(n){return Object(o["s"])(),Object(o["f"])("div",{class:"card mb-4",key:n},[Object(o["g"])("div",qe,[Object(o["g"])("div",Ke,[n.avatar?(Object(o["s"])(),Object(o["f"])("img",{key:0,class:"rounded-circle",src:n.avatar,width:"45"},null,8,Je)):(Object(o["s"])(),Object(o["f"])("img",Qe)),Object(o["g"])("div",Re,[Object(o["g"])("p",We,Object(o["B"])(n.prenom)+" "+Object(o["B"])(n.nom),1),Object(o["g"])("p",Xe,Object(o["B"])(s.formatDate(n.created)),1)])]),n.created_by==i.userId||1==i.admin?(Object(o["s"])(),Object(o["f"])("div",Ye,[Object(o["g"])("button",{onClick:function(e){return t.deletePost(n.id)},class:"btn"},en,8,Ze),Object(o["g"])("button",{onClick:function(t){return s.updateEditMode(n.id)},class:"btn"},cn,8,nn)])):Object(o["e"])("",!0)]),Object(o["g"])("div",an,[n.content?(Object(o["s"])(),Object(o["f"])("p",sn,Object(o["B"])(n.content),1)):Object(o["e"])("",!0),Object(o["g"])("div",rn,[n.image?(Object(o["s"])(),Object(o["f"])("img",{key:0,class:"image-post",src:n.image},null,8,ln)):Object(o["e"])("",!0)]),i.editMode.postId==n.id&&1==i.editMode.edit?(Object(o["s"])(),Object(o["f"])("div",dn,[Object(o["H"])(Object(o["g"])("textarea",{class:"mb-3 form-control",name:"content","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.content=e}),id:"content-text",rows:"4",placeholder:"Quoi de neuf ?"},null,512),[[o["D"],t.content]]),Object(o["g"])("div",un,[Object(o["g"])("button",{onClick:e[2]||(e[2]=function(t){return i.editMode.edit=!1}),class:"btn btn-danger me-4"},"Annuler"),Object(o["g"])("button",{onClick:function(e){return t.updatePost(n.id)},class:"btn btn-success"},"Mettre à jour",8,bn)])])):Object(o["e"])("",!0)]),Object(o["g"])("div",mn,[Object(o["g"])("button",{id:"button-like-"+n.id,onClick:function(t){return s.like(n.id)},class:Object(o["o"])(["btn",{liked:n.like_post&&n.like_user}])},jn,10,pn),Object(o["i"])(r,{class:"btn",to:"/post/"+n.id},{default:Object(o["G"])((function(){return[hn]})),_:2},1032,["to"]),On])])})),128))])])}var vn=n("bc3a"),yn=n.n(vn),kn={name:"User",data:function(){return{listPostsUser:[],editMode:{},userInfo:{}}},computed:Object(g["a"])({},Object(v["b"])(["token","userId","admin"])),methods:{formatDate:function(t){var e=new Date(t),n=new Date,o=n.getTime()-e.getTime(),c=Math.round(o/864e5),a=Math.round(o/6e4),s=Math.round(o/1e3);return s<120&&0==c?"Il y a un instant":a<59&&0==c?"Il y a "+a+" minutes":60==a&&0==c?"Il y a 1 heure":a>120&&a<1440&&(0==c||1==c)?"Il y a "+Math.round(a/60)+" heures":a>=1440&&1==c?"Il y a un jour":a>1440&&c>1&&(c<30||c<31)?"Il y a "+c+" jours":a>1440&&c>30&&c<365?"Il y a "+Math.round(c/30)+" mois":c>=365&&c<730?"Il y a plus d'un an":c>=730?"Il y a "+Math.round(c/365)+" ans":void 0},updateEditMode:function(t){this.editMode={edit:!0,postId:t},this.content=""},like:function(t){yn.a.post("http://localhost:3200/api/posts/".concat(t),{userId:this.userId},{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){console.log(e);var n=document.querySelector("#button-like-"+t);e.data.liked?n.classList.add("liked"):n.classList.remove("liked")})).catch((function(t){console.log(t)}))},deleteUser:function(t){var e=this;1==this.admin&&yn.a.delete("http://localhost:3200/api/auth/delete/".concat(t),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(t){console.log(t),e.$route.push("/")})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;yn.a.get("http://localhost:3200/api/posts/user".concat(this.$route.params.id,"/posts"),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){console.log(e),t.listPostsUser=e.data})).catch((function(t){console.log(t)})),yn.a.get("http://localhost:3200/api/auth/user/".concat(this.$route.params.id),{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json"}}).then((function(e){console.log(e),t.userInfo=e.data[0]})).catch((function(t){console.log(t)}))}};n("4da4");const In=I()(kn,[["render",gn],["__scopeId","data-v-2550ea2e"]]);var Cn=In,_n=[{path:"/",name:"Home",component:ee},{path:"/profil",name:"Profil",component:function(){return n.e("profil").then(n.bind(null,"2768"))}},{path:"/post/:id",name:"Post",component:Me},{path:"/user/:id",name:"User",component:Cn}],wn=Object(M["a"])({history:Object(M["b"])(),routes:_n}),xn=wn,Dn=n("0e44"),Mn=Object(v["a"])({state:{connected:!1,token:"",email:"",userId:"",prenom:"",nom:"",admin:"",avatar:""},plugins:[Object(Dn["a"])()],mutations:{CHANGE_CONNECTED:function(t,e){t.connected=e},ADD_TOKEN:function(t,e){t.token=e},ADD_INFO:function(t,e){t.userId=e.userId,t.email=e.email,t.prenom=e.prenom,t.nom=e.nom,t.admin=e.admin,t.avatar=e.avatar},UPDATE_INFO:function(t,e){t.userId=e.userId,t.prenom=e.prenom,t.email=e.email,t.nom=e.nom,t.avatar=e.avatar}},actions:{loginAccount:function(t,e){var n=t.commit;console.log(e),n("CHANGE_CONNECTED",e.connected),n("ADD_TOKEN",e.token),n("ADD_INFO",e)},updateAccount:function(t,e){var n=t.commit;n("UPDATE_INFO",e)},disconnect:function(t){var e=t.commit;e("CHANGE_CONNECTED",!1),e("ADD_TOKEN","")},updateProfile:function(t,e){var n=t.commit;n("ADD_INFO",e)}},modules:{}});Object(o["c"])(D).use(Mn).use(xn).mount("#app")},"5d20":function(t,e,n){"use strict";n("9be6")},"6e2a":function(t,e,n){},7800:function(t,e,n){"use strict";n("2476")},"88ce":function(t,e,n){"use strict";n("9a5f")},"8ed4":function(t,e,n){},"916f":function(t,e,n){"use strict";n("6e2a")},"9a5f":function(t,e,n){},"9be6":function(t,e,n){}});
//# sourceMappingURL=app.fda8bdb1.js.map