(function(){"use strict";var e={2787:function(e,t,a){var n=a(9242),o=a(3396);const s={class:"main-content"};function i(e,t,a,i,l,r){const c=(0,o.up)("Sidebar"),d=(0,o.up)("NavBar"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o.Wm)(c),(0,o._)("div",s,[(0,o.Wm)(d),(0,o.Wm)(u,null,{default:(0,o.w5)((({Component:e,route:t})=>[(0,o.Wm)(n.uT,{name:"slide-fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e),{key:t.path}))])),_:2},1024)])),_:1})])])}var l=a.p+"img/bear.b393c74f.png";const r={class:"sidebar"},c={class:"info"},d=(0,o.uE)('<figure class="avatar-box"><img src="'+l+'" alt="avatar" width="120"></figure><div class="info-content"><h2 class="name">Nguyễn Thành Băng</h2><p class="title-info">Frontend Developer</p></div>',2),u={class:"social-list"},m={href:"https://www.facebook.com/nguyenthanhbang0901/",target:"_blank"},p={href:"https://www.linkedin.com/in/nguyenthanhbang/",target:"_blank"},h={href:"https://github.com/ntbang0901",target:"_blank"},v={class:"info_more"},g={class:"contacts-list"},f={class:"contact-item"},_={class:"icon"},b=(0,o._)("div",{class:"contact-info"},[(0,o._)("p",{class:"contact-title"},"EMAIL"),(0,o._)("a",{href:"mailto:ntbang0901@gmail.com",class:"contact-link"},"ntbang0901@gmail.com")],-1),y={class:"contact-item"},w={class:"icon"},k=(0,o._)("div",{class:"contact-info"},[(0,o._)("p",{class:"contact-title"},"PHONE"),(0,o._)("a",{href:"tel:ntbang0901@gmail.com",class:"contact-link"},"0962948752")],-1),x={class:"contact-item"},j={class:"icon"},T=(0,o._)("div",{class:"contact-info"},[(0,o._)("p",{class:"contact-title"},"LOCATION"),(0,o._)("address",null,"QUẬN 9, TPHCM")],-1),O={class:"contact-item"},D={class:"icon"},P=(0,o._)("div",{class:"contact-info"},[(0,o._)("p",{class:"contact-title"},"BIRTHDAY"),(0,o._)("time",null,"09/01/2001")],-1);function U(e,t,a,n,s,i){const l=(0,o.up)("v-icon");return(0,o.wg)(),(0,o.iD)("aside",r,[(0,o._)("div",c,[d,(0,o._)("div",u,[(0,o._)("a",m,[(0,o.Wm)(l,{icon:"mdi-facebook",size:"large",color:"#e3e3e3"})]),(0,o._)("a",p,[(0,o.Wm)(l,{icon:"mdi-linkedin",size:"large",color:"#e3e3e3"})]),(0,o._)("a",h,[(0,o.Wm)(l,{icon:"mdi-github",size:"large",color:"#e3e3e3"})])])]),(0,o._)("div",v,[(0,o._)("ul",g,[(0,o._)("li",f,[(0,o._)("div",_,[(0,o.Wm)(l,{icon:"mdi-email",size:"large",color:"orange"})]),b]),(0,o._)("li",y,[(0,o._)("div",w,[(0,o.Wm)(l,{icon:"mdi-phone",size:"large",color:"orange"})]),k]),(0,o._)("li",x,[(0,o._)("div",j,[(0,o.Wm)(l,{icon:"mdi-map-marker",size:"large",color:"orange"})]),T]),(0,o._)("li",O,[(0,o._)("div",D,[(0,o.Wm)(l,{icon:"mdi-calendar-range",size:"large",color:"orange"})]),P])])])])}var M={name:"Sidebar"},W=a(89);const S=(0,W.Z)(M,[["render",U]]);var E=S;const A={class:"nav-link"},I={class:"nav-link--item"},N={class:"nav-link--item"},R={class:"nav-link--item"},C={class:"nav-link--item"};function L(e,t,a,n,s,i){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("ul",A,[(0,o._)("li",I,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("ABOUT")])),_:1})]),(0,o._)("li",N,[(0,o.Wm)(l,{to:"/resume"},{default:(0,o.w5)((()=>[(0,o.Uk)("RESUME")])),_:1})]),(0,o._)("li",R,[(0,o.Wm)(l,{to:"/portfolio"},{default:(0,o.w5)((()=>[(0,o.Uk)("PORTFOLIO")])),_:1})]),(0,o._)("li",C,[(0,o.Wm)(l,{to:"/contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("CONTACT")])),_:1})])])])}var z={name:"Navbar"};const J=(0,W.Z)(z,[["render",L],["__scopeId","data-v-1a284bb9"]]);var V=J,B={name:"App",components:{Sidebar:E,NavBar:V}};const F=(0,W.Z)(B,[["render",i]]);var Z=F;const H=()=>({isAuthenticated:!0}),q={},$={},Q={TOGGLE_AUTH(e){e.isAuthenticated=!e.isAuthenticated}};var G={state:H,getters:q,actions:$,mutations:Q},Y=a(65),K=(a(541),a(4161));const X=()=>({todos:[]}),ee={doneTodos:e=>e.todos.filter((e=>e.completed)),progress:(e,t)=>{if(0===e.todos.length)return 0;const a=t.doneTodos;return Math.round(a.length/e.todos.length*100)}},te={async deleteTodo({commit:e},t){try{await K.Z["delete"](`https://jsonplaceholder.typicode.com/todos/${t}`),e("DELETE_TODO",t)}catch(a){console.log(a)}},async addTodo({commit:e},t){try{await K.Z.post("https://jsonplaceholder.typicode.com/todos",t),e("ADD_TODO",t)}catch(a){console.log(a)}},async getTodos({commit:e}){try{const t=await K.Z.get("https://jsonplaceholder.typicode.com/todos?_limit=5");e("SET_TODOS",t.data)}catch(t){console.log(t)}}},ae={MARK_COMPLETED(e,t){e.todos.map((e=>(e.id===t&&(e.completed=!e.completed),e)))},DELETE_TODO(e,t){e.todos=e.todos.filter((e=>e.id!==t))},ADD_TODO(e,t){e.todos.unshift(t)},SET_TODOS(e,t){e.todos=t}};var ne={state:X,getters:ee,actions:te,mutations:ae};const oe={modules:{auth:G,todos:ne}},se=(0,Y.MT)(oe);var ie=se,le=a(678);function re(e,t,a,n,s,i){return(0,o.wg)(),(0,o.iD)("div",null," error ")}var ce={name:"Error"};const de=(0,W.Z)(ce,[["render",re]]);var ue=de;const me=e=>((0,o.dD)("data-v-2c4a3a7e"),e=e(),(0,o.Cn)(),e),pe={class:"about"},he=me((()=>(0,o._)("header",null,[(0,o._)("h2",{class:"title"},"About Me")],-1))),ve=me((()=>(0,o._)("section",null,[(0,o._)("p",null,"I'm a developer working in the field of website development . I enjoy turning complex problems into simple, beautiful and intuitive designs. "),(0,o._)("p",null," My job not only is to build your website but also to make sure that it is functional and user-friendly but at the same time attractive.Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. ")],-1))),ge=[he,ve];function fe(e,t,a,n,s,i){return(0,o.wg)(),(0,o.iD)("article",pe,ge)}var _e={name:"About"};const be=(0,W.Z)(_e,[["render",fe],["__scopeId","data-v-2c4a3a7e"]]);var ye=be;const we=e=>((0,o.dD)("data-v-4da45323"),e=e(),(0,o.Cn)(),e),ke={class:"portfolio"},xe=we((()=>(0,o._)("header",null,[(0,o._)("h2",{class:"title"},"Portfolio")],-1))),je={class:"project-list"};function Te(e,t,a,n,s,i){const l=(0,o.up)("ProjectItem");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("article",ke,[xe,(0,o._)("div",je,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.projects,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e.id,projectProps:e},null,8,["projectProps"])))),128))])])])}var Oe=a(4870),De=a(7139);const Pe={class:"text-overline mb-1"},Ue={class:"text-caption"},Me={class:"d-flex align-center justify-center"},We={class:"d-flex align-center justify-center"};function Se(e,t,a,n,s,i){const l=(0,o.up)("v-img"),r=(0,o.up)("v-card-text"),c=(0,o.up)("v-icon"),d=(0,o.up)("v-btn"),u=(0,o.up)("v-card-actions"),m=(0,o.up)("v-card");return(0,o.wg)(),(0,o.j4)(m,{color:"#3e3e3e",theme:"info",class:"mx-auto rounded-lg","max-width":"260",height:"420"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{class:"text-white",height:"260",width:"260",src:a.projectProps.image,cover:""},null,8,["src"]),(0,o.Wm)(r,{class:"text-white"},{default:(0,o.w5)((()=>[(0,o._)("div",Pe,(0,De.zw)(a.projectProps.title),1),(0,o._)("div",Ue,(0,De.zw)(a.projectProps.detail),1)])),_:1}),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[a.projectProps.link?((0,o.wg)(),(0,o.j4)(d,{key:0,href:a.projectProps.link,target:"_blank",color:"orange"},{default:(0,o.w5)((()=>[(0,o._)("div",Me,[(0,o.Wm)(c,{icon:"mdi-link-variant",size:"large",color:"orange"}),(0,o.Uk)(" Live ")])])),_:1},8,["href"])):(0,o.kq)("",!0),(0,o.Wm)(d,{href:a.projectProps.href,target:"_blank",color:"orange"},{default:(0,o.w5)((()=>[(0,o._)("div",We,[(0,o.Wm)(c,{icon:"mdi-github",size:"large",color:"orange"}),(0,o.Uk)(" Visit Project ")])])),_:1},8,["href"])])),_:1})])),_:1})}var Ee=a(6526),Ae={name:"ProjectItem",props:["projectProps"],data:()=>({mdiAccount:Ee.rI3})};const Ie=(0,W.Z)(Ae,[["render",Se]]);var Ne=Ie,Re=a.p+"img/ecommerce.6add5fea.png",Ce=a.p+"img/quan_ly_bao_hanh_xe.a09ce3ef.png",Le={name:"Portfolio",components:{ProjectItem:Ne},setup(){const e=(0,Oe.iH)([{id:self.crypto.randomUUID(),title:"REDDIT",detail:"Nextjs,Graphql,PostgreSQL,formik,Chakra-ui,apollo,...",image:"https://www.howtogeek.com/wp-content/uploads/2021/07/Reddit-Logo-Cover.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",href:"https://github.com/ntbang0901/reddit",link:"https://reddit-eta-ten.vercel.app/"},{id:self.crypto.randomUUID(),title:"Movie-App",detail:"Nextjs,Firebase,The Movie Database (TMDB),MUI,styled-components,...",image:"https://www.disneystudiolicensing.com/app/themes/DF_960/files/includes/index_page_hero.jpg",href:"https://github.com/ntbang0901/Movie-app",link:"https://movie-app-seven-plum.vercel.app/"},{id:self.crypto.randomUUID(),title:"Book Store",detail:"ReactJs,Bootstrap,Redux,...",image:"https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/323538550_638798981268095_8616948785819840780_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EOyp3SOR71cAX8iFo6L&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdQafVgcyG6Rl4jjxBaiqteYW5B5JkJYlrTnu7lPoNkeaQ&oe=6449FB27",href:"https://github.com/ntbang0901/book-store-reactjs"},{id:self.crypto.randomUUID(),title:"E-commerce",detail:"ReactJs,taildwindcss,react-query,..",image:Re,href:"https://github.com/ntbang0901/ecommerce-reactjs"},{id:self.crypto.randomUUID(),title:"Chat-app",detail:"NextJs,Firebase,styled-components,..",image:"https://cdn.tgdd.vn/Files/2021/04/23/1345590/whatsapp-la-gi-uu-diem-va-cac-tinh-nang-noi-bat-c-8.jpg",href:"https://github.com/ntbang0901/chat-app",link:"https://chat-app-seven-beta.vercel.app/"},{id:self.crypto.randomUUID(),title:"Quản lý bảo hành xe máy",detail:"SpringBoot, Thymeleaf, JPA",image:Ce,href:"https://github.com/ntbang0901/quan_ly_bao_hanh_xe"}]);return{projects:e}}};const ze=(0,W.Z)(Le,[["render",Te],["__scopeId","data-v-4da45323"]]);var Je=ze;const Ve={class:"resume"},Be=(0,o._)("header",null,[(0,o._)("h2",{class:"title"},"Resume")],-1),Fe={class:"title-wrapper d-flex align-center"},Ze={class:"icon"},He=(0,o._)("h3",null,"Education",-1),qe={class:"timeline d-flex"},$e={class:"icon"},Qe=(0,o._)("div",{class:"info-timeline"},[(0,o._)("h3",null,"Posts And Telecommunications Institute Of Technology HCMC"),(0,o._)("span",null,"2019-Present"),(0,o._)("p",null,"My major: Information Security.")],-1),Ge={class:"my-skill"},Ye={class:"title-wrapper d-flex align-center"},Ke={class:"icon"},Xe=(0,o._)("h3",null,"My Skill",-1),et=(0,o.uE)('<div class="skill ml-10"><div class="front-end mt-5 mb-10"><h3>FRONTEND</h3><div class="list-skill mb-3 d-flex"><h4>Language: </h4><span class="text"> Javascript, Typescript, HTML/CSS</span></div><div class="list-skill mb-3 d-flex"><h4>Framework: </h4><span class="text"> VueJs, NextJs</span></div><div class="list-skill d-flex"><h4>Library:</h4><span class="text"> ReactJS, Redux, Redux-Toolkit, Tailwindcss, Bootstrap, Antd and Others Lib</span></div></div><div class="back-end"><h3>BACKEND</h3><div class="list-skill mb-3 d-flex"><h4>Language: </h4><span class="text"> Java, ASP.NET, NodeJs</span></div><div class="list-skill mb-3 d-flex"><h4>Framework:</h4><span class="text"> ExpressJs, Spring boot</span></div><div class="list-skill d-flex"><h4>ORM:</h4><span class="text"> TypeORM, Prisma, JPA</span></div></div></div>',1);function tt(e,t,a,n,s,i){const l=(0,o.up)("v-icon");return(0,o.wg)(),(0,o.iD)("article",Ve,[Be,(0,o._)("section",null,[(0,o._)("div",null,[(0,o._)("div",Fe,[(0,o._)("div",Ze,[(0,o.Wm)(l,{icon:"mdi-school-outline",size:"large",color:"orange"})]),He]),(0,o._)("div",qe,[(0,o._)("div",$e,[(0,o.Wm)(l,{icon:"mdi-timeline",size:"medium",color:"orange"})]),Qe])])]),(0,o._)("section",null,[(0,o._)("div",Ge,[(0,o._)("div",Ye,[(0,o._)("div",Ke,[(0,o.Wm)(l,{icon:"mdi-xml",size:"large",color:"orange"})]),Xe]),et])])])}var at={};const nt=(0,W.Z)(at,[["render",tt]]);var ot=nt;const st={class:"contact"},it=(0,o._)("header",null,[(0,o._)("h2",{class:"title"},"Contact")],-1);function lt(e,t,a,s,i,l){const r=(0,o.up)("v-text-field"),c=(0,o.up)("v-textarea"),d=(0,o.up)("v-btn");return(0,o.wg)(),(0,o.iD)("article",st,[it,(0,o._)("form",{onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>s.submit&&s.submit(...e)),["prevent"]))},[(0,o.Wm)(r,{modelValue:s.name.value.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.name.value.value=e),counter:10,"error-messages":s.name.errorMessage.value,label:"Name"},null,8,["modelValue","error-messages"]),(0,o.Wm)(r,{modelValue:s.phone.value.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.phone.value.value=e),counter:7,"error-messages":s.phone.errorMessage.value,label:"Phone Number"},null,8,["modelValue","error-messages"]),(0,o.Wm)(r,{modelValue:s.email.value.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s.email.value.value=e),"error-messages":s.email.errorMessage.value,label:"E-mail"},null,8,["modelValue","error-messages"]),(0,o.Wm)(c,{modelValue:s.message.value.value,"onUpdate:modelValue":t[3]||(t[3]=e=>s.message.value.value=e),counter:"",label:"Message",maxlength:"120","single-line":""},null,8,["modelValue"]),(0,o.Wm)(d,{class:"me-4",type:"submit"},{default:(0,o.w5)((()=>[(0,o.Uk)(" submit ")])),_:1}),(0,o.Wm)(d,{onClick:s.handleReset},{default:(0,o.w5)((()=>[(0,o.Uk)(" clear ")])),_:1},8,["onClick"])],32)])}var rt=a(5708),ct={name:"Contact",setup(){const{handleSubmit:e,handleReset:t}=(0,rt.cI)({validationSchema:{name(e){return e?.length>=2||"Name needs to be at least 2 characters."},phone(e){return!!(e?.length>9&&/[0-9-]+/.test(e))||"Phone number needs to be at least 9 digits."},email(e){return!!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(e)||"Must be a valid e-mail."}}}),a=(0,rt.U$)("name"),n=(0,rt.U$)("phone"),o=(0,rt.U$)("email"),s=(0,rt.U$)("message"),i=e((e=>{alert(JSON.stringify(e,null,2))}));return{name:a,phone:n,email:o,message:s,submit:i,handleReset:t}}};const dt=(0,W.Z)(ct,[["render",lt]]);var ut=dt;const mt=[{path:"/",component:ye},{path:"/resume",component:ot},{path:"/portfolio",component:Je},{path:"/contact",component:ut},{path:"/:pathMatch(.*)*",component:ue}],pt=(0,le.p7)({history:(0,le.PO)(),routes:mt});var ht=pt,vt=(a(9773),a(3504)),gt=a(1850),ft=a(8600),_t=a(8957),bt=(0,_t.Rd)({components:gt,directives:ft,icons:{defaultSet:"mdi",aliases:vt.j,sets:{mdi:vt.t}}});const yt=(0,n.ri)(Z);yt.use(ht),yt.use(ie),yt.use(bt),yt.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],s=e[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/portfolio-ntbang/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],l=n[1],r=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(r)var d=r(a)}for(t&&t(n);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2787)}));n=a.O(n)})();
//# sourceMappingURL=app.5a541267.js.map