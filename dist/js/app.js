(function(t){function e(e){for(var a,c,o=e[0],i=e[1],u=e[2],p=0,b=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"22ee":function(t,e,n){t.exports=n.p+"img/search.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s={class:"wrapper",id:"app"},c={class:"page-main"};function o(t,e,n,a,o,i){var u=Object(r["w"])("app-header"),l=Object(r["w"])("router-view"),p=Object(r["w"])("app-footer");return Object(r["r"])(),Object(r["e"])("div",s,[Object(r["i"])(u),Object(r["f"])("main",c,[Object(r["i"])(l)]),Object(r["i"])(p)])}var i={class:"page-head"};function u(t,e,n,a,s,c){var o=Object(r["w"])("app-menu");return Object(r["r"])(),Object(r["e"])("header",i,[Object(r["i"])(o)])}var l=n("bfc3"),p=n.n(l),b={class:"navbar bg-secondary"},d={class:"site-nav container-fluid"},h={class:"site-nav__logo"},f=Object(r["f"])("img",{src:p.a,alt:"Logo"},null,-1),j={class:"site-nav__list row"},O={class:"ml-1 text-hover-blue display-block"},g=Object(r["h"])(" Лиги"),m={class:"ml-1 text-hover-blue display-block"},v=Object(r["h"])(" Команды");function A(t,e,n,a,s,c){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["e"])("nav",b,[Object(r["f"])("div",null,[Object(r["f"])("div",d,[Object(r["f"])("div",h,[Object(r["i"])(o,{to:{name:"home"}},{default:Object(r["C"])((function(){return[f]})),_:1})]),Object(r["f"])("ul",j,[Object(r["f"])("li",O,[Object(r["i"])(o,{to:{name:"leagues"}},{default:Object(r["C"])((function(){return[g]})),_:1})]),Object(r["f"])("li",m,[Object(r["i"])(o,{to:{name:"teams"}},{default:Object(r["C"])((function(){return[v]})),_:1})])])])])])}var y={},S=n("6b0d"),C=n.n(S);const k=C()(y,[["render",A]]);var w=k,P={components:{AppMenu:w}};const D=C()(P,[["render",u]]);var M=D,I={class:"page-footer"},T={class:"container-fluid"},x={class:"page-footer__content"},B={class:"page-footer__inner"},_=Object(r["f"])("div",{class:"page-footer__copyright"},[Object(r["f"])("p",{class:"mb-2"},[Object(r["f"])("a",{href:"https://www.google.com",title:"Privacy",target:"_blank"}," SoccerSTATS.com ")])],-1);function U(t,e,n,a,s,c){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["e"])("footer",I,[Object(r["f"])("div",T,[Object(r["f"])("div",x,[Object(r["f"])("div",B,[Object(r["i"])(o,{to:{name:"home"}})])]),_])])}var N={};const G=C()(N,[["render",U]]);var z=G,J={name:"App",components:{AppHeader:M,AppFooter:z}};n("be0c");const X=C()(J,[["render",o]]);var F=X,Q=n("6c02"),K={class:"container"},W=Object(r["f"])("h1",null,"Home",-1),q=Object(r["f"])("p",null,"«Приложение для просмотра спортивной статистики «SoccerStat»»",-1),L=Object(r["g"])('<table class="resp-tab"><thead><tr><th>Заголовок 1</th><th>Заголовок 2</th><th>Заголовок 3</th><th>Заголовок 4</th></tr></thead><tbody><tr><td><span>Заголовок 1</span>Контент 1</td><td><span>Заголовок 2</span>Контент 1</td><td><span>Заголовок 3</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td></tr></tbody></table>',1);function R(t,e,n,a,s,c){var o=Object(r["w"])("app-search");return Object(r["r"])(),Object(r["e"])("div",K,[W,q,Object(r["i"])(o),L])}var H=n("22ee"),V=n.n(H),E=["value"],Y=Object(r["f"])("button",{class:"site-search__btn",type:"submit"},[Object(r["f"])("span",{class:"u-visually-hidden"},[Object(r["f"])("img",{src:V.a})])],-1);function Z(t,e,n,a,s,c){return Object(r["r"])(),Object(r["e"])("form",{role:"search",class:"site-search site-nav__search",onSubmit:e[1]||(e[1]=Object(r["E"])((function(){return c.searchSubmit&&c.searchSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["f"])("input",{type:"search",name:"search",value:s.searchString,onInput:e[0]||(e[0]=function(){return c.handleInput&&c.handleInput.apply(c,arguments)}),class:"site-search__input js-search-field",placeholder:"Search?"},null,40,E),Y],32)}n("a9e3"),n("ac1f"),n("5319"),n("d81d"),n("07ac"),n("4de4"),n("d3b7"),n("caad"),n("2532");var $={props:{posts:[],perPage:Number},data:function(){return{searchString:"",search_posts:[],original_posts:[],page:1,perPage:null,no_result_text:""}},methods:{searchSubmit:function(){var t=this.searchString.toLowerCase(),e=this.searchString.toUpperCase(),n=this.searchString.replace(this.searchString.charAt(0),this.searchString.charAt(0).toUpperCase()),a=this.search_posts.map((function(t){return Object.values(t)})),r=a.filter((function(a){return a.includes(t)||a.includes(e)||a.includes(n)})),s=r.map((function(t){return{id:r[0][0],name:r[0][1],area:r[0][2]}}));this.searchString?(this.search_posts=s,0==s.length&&(this.no_result_text="No results found")):this.search_posts=this.originalposts;var c={result_posts:this.search_posts,result_text:this.no_result_text};return console.log(a),console.log(r[0]),console.log(s),$emit("handleSubmit",c)},handleInput:function(t){t.target.value||(this.search_posts=this.originalposts),this.searchString=t.target.value}},created:function(){this.search_posts=this.posts,this.originalposts=this.posts}};const tt=C()($,[["render",Z]]);var et=tt,nt={components:{AppSearch:et}};const at=C()(nt,[["render",R]]);var rt=at,st=(n("b0c0"),n("fb6a"),{class:"container"}),ct=Object(r["f"])("h1",null,"Лиги",-1),ot=["value"],it=Object(r["f"])("button",{class:"site-search__btn",type:"submit"},[Object(r["f"])("span",{class:"u-visually-hidden"},[Object(r["f"])("img",{src:V.a})])],-1),ut={class:"league-cards"},lt={class:"card-content"},pt={class:"card-title"},bt={class:"card-subtitle"},dt={class:"text-center"},ht={ref:"not_found"},ft={class:"pagination row"},jt={class:"pagination-list"},Ot={class:"pagination-button"},gt=["onClick"],mt={class:"pagination-button"};function vt(t,e,n,a,s,c){var o=Object(r["w"])("app-search"),i=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["e"])("div",st,[ct,Object(r["i"])(o,{posts:s.posts,perPage:s.perPage,onHandleSubmit:c.handleSubmit},null,8,["posts","perPage","onHandleSubmit"]),Object(r["f"])("form",{role:"search",class:"site-search site-nav__search",onSubmit:e[1]||(e[1]=Object(r["E"])((function(){return c.onFormSubmit&&c.onFormSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["f"])("input",{type:"search",name:"search",value:s.searchString,onInput:e[0]||(e[0]=function(){return c.handleInput&&c.handleInput.apply(c,arguments)}),class:"site-search__input js-search-field",placeholder:"Search?"},null,40,ot),it],32),Object(r["f"])("div",ut,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(c.displayedPosts,(function(t){return Object(r["r"])(),Object(r["e"])("div",{class:"card",key:t.id},[Object(r["i"])(i,{to:{name:"league-calendar",params:{id:t.id}}},{default:Object(r["C"])((function(){return[Object(r["f"])("div",lt,[Object(r["f"])("p",pt,"League: "+Object(r["y"])(t.name),1),Object(r["f"])("p",bt,"Country: "+Object(r["y"])(t.area),1)])]})),_:2},1032,["to"])])})),128))]),Object(r["f"])("div",dt,[Object(r["f"])("p",ht,null,512)]),Object(r["f"])("div",ft,[Object(r["f"])("ul",jt,[Object(r["f"])("span",Ot,[1!=s.page?(Object(r["r"])(),Object(r["e"])("button",{key:0,type:"button",onClick:e[2]||(e[2]=function(t){return s.page--})}," Previous ")):Object(r["d"])("",!0)]),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(s.pages.slice(s.page-1,s.page+9),(function(t){return Object(r["r"])(),Object(r["e"])("button",{type:"button",key:t,onClick:function(e){return s.page=t}},Object(r["y"])(t),9,gt)})),128)),Object(r["f"])("span",mt,[s.page<s.pages.length?(Object(r["r"])(),Object(r["e"])("button",{key:0,type:"button",onClick:e[3]||(e[3]=function(t){return s.page++})}," Next ")):Object(r["d"])("",!0)])])])])}var At=n("bc3a"),yt=n.n(At),St={class:"pagination row"},Ct={class:"pagination-list"},kt={class:"pagination-button"},wt=["onClick"],Pt={class:"pagination-button"};function Dt(t,e,n,a,s,c){return Object(r["r"])(),Object(r["e"])("div",St,[Object(r["f"])("ul",Ct,[Object(r["f"])("span",kt,[1!=n.page?(Object(r["r"])(),Object(r["e"])("button",{key:0,type:"button",onClick:e[0]||(e[0]=function(t){return n.page--})},"Previous")):Object(r["d"])("",!0)]),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(n.pages.slice(n.page-1,n.page+5),(function(t){return Object(r["r"])(),Object(r["e"])("button",{type:"button",key:t,onClick:function(e){return n.page=t}},Object(r["y"])(t),9,wt)})),128)),Object(r["f"])("span",Pt,[n.page<n.pages.length?(Object(r["r"])(),Object(r["e"])("button",{key:0,type:"button",onClick:e[1]||(e[1]=function(t){return n.page++})}," Next ")):Object(r["d"])("",!0)])])])}var Mt={props:{pages:Array,page:Number}};n("8756");const It=C()(Mt,[["render",Dt]]);var Tt=It,xt="1e76ed510bd246519dedbf03833e5322",Bt={components:{AppSearch:et,AppPagination:Tt},data:function(){return{posts:[],page:1,perPage:9,pages:[],searchString:"",originalposts:[]}},methods:{setPages:function(){for(var t=Math.ceil(this.posts.length/this.perPage),e=1;e<=t;e++)this.pages.push(e)},paginate:function(t){var e=this.page,n=this.perPage,a=e*n-n,r=e*n;return t.slice(a,r)},onFormSubmit:function(){var t=this.searchString.toLowerCase(),e=this.searchString.toUpperCase(),n=this.searchString.replace(this.searchString.charAt(0),this.searchString.charAt(0).toUpperCase()),a=this.posts.map((function(t){return Object.values(t)})),r=a.filter((function(a){return a.includes(t)||a.includes(e)||a.includes(n)})),s=r.map((function(t){return{id:r[0][0],name:r[0][1],area:r[0][2]}}));this.searchString?(this.posts=s,0==s.length&&(this.$refs.not_found.innerText="No results found")):this.posts=this.originalposts,console.log(a),console.log(r[0]),console.log(s)},handleInput:function(t){t.target.value||(this.posts=this.originalposts),this.searchString=t.target.value},handleSubmit:function(t){this.posts=t.result_posts,this.$refs.not_found.innerText=t.no_result_text,a}},computed:{key:function(){return xt},displayedPosts:function(){return this.paginate(this.posts)},validateSearchString:function(t){return t.toLowerCase()}},watch:{posts:function(){this.setPages()}},created:function(){var t=this;yt()({method:"get",url:"https://api.football-data.org/v2/competitions",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(e){var n=e.data.competitions.map((function(t){return{id:t.id,name:t.name,area:t.area.name}}));t.posts=n,t.originalposts=n}))}};n("ea9f");const _t=C()(Bt,[["render",vt]]);var Ut=_t,Nt={class:"container"},Gt=Object(r["f"])("h1",null,"Команды",-1),zt=Object(r["f"])("button",{class:"site-search__btn",type:"submit"},[Object(r["f"])("span",{class:"u-visually-hidden"},[Object(r["f"])("img",{src:V.a})])],-1),Jt={class:"team-cards"},Xt={class:"card-content"},Ft={class:"card-title"},Qt={class:"card-image"},Kt=["src"],Wt={class:"pagination row"},qt={class:"pagination-list"},Lt={class:"pagination-button"},Rt=["onClick"],Ht={class:"pagination-button"};function Vt(t,e,n,a,s,c){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["e"])("div",Nt,[Gt,Object(r["f"])("form",{role:"search",class:"site-search site-nav__search",onSubmit:e[1]||(e[1]=Object(r["E"])((function(){return c.onFormSubmit&&c.onFormSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["D"])(Object(r["f"])("input",{type:"search",name:"search","onUpdate:modelValue":e[0]||(e[0]=function(t){return s.searchString=t}),class:"site-search__input js-search-field",placeholder:"Search?"},null,512),[[r["A"],s.searchString]]),zt],32),Object(r["f"])("div",Jt,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(c.displayedPosts,(function(t){return Object(r["r"])(),Object(r["e"])("div",{class:"card",key:t.id},[Object(r["i"])(o,{to:{name:"team-calendar",params:{id:t.id}}},{default:Object(r["C"])((function(){return[Object(r["f"])("div",Xt,[Object(r["f"])("p",Ft,Object(r["y"])(t.name),1),Object(r["f"])("figure",Qt,[Object(r["f"])("img",{src:t.crestUrl,alt:"{{team.name}}",width:"96",height:"96"},null,8,Kt)])])]})),_:2},1032,["to"])])})),128))]),Object(r["f"])("div",Wt,[Object(r["f"])("ul",qt,[Object(r["f"])("span",Lt,[1!=s.page?(Object(r["r"])(),Object(r["e"])("button",{key:0,type:"button",onClick:e[2]||(e[2]=function(t){return s.page--})}," Previous ")):Object(r["d"])("",!0)]),(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(s.pages.slice(s.page-1,s.page+8),(function(t){return Object(r["r"])(),Object(r["e"])("button",{type:"button",key:t,onClick:function(e){return s.page=t}},Object(r["y"])(t),9,Rt)})),128)),Object(r["f"])("span",Ht,[s.page<s.pages.length?(Object(r["r"])(),Object(r["e"])("button",{key:0,type:"button",onClick:e[3]||(e[3]=function(t){return s.page++})}," Next ")):Object(r["d"])("",!0)])])])])}var Et={components:{AppSearch:et},data:function(){return{teams:[],page:1,perPage:8,pages:[],searchString:"",originalteams:[]}},methods:{setPages:function(){for(var t=Math.ceil(this.teams.length/this.perPage),e=1;e<=t;e++)this.pages.push(e)},paginate:function(t){var e=this.page,n=this.perPage,a=e*n-n,r=e*n;return t.slice(a,r)},onFormSubmit:function(){var t=this.searchString.toLowerCase(),e=this.searchString.toUpperCase(),n=this.searchString.replace(this.searchString.charAt(0),this.searchString.charAt(0).toUpperCase()),a=this.teams.map((function(t){return Object.values(t)})),r=a.filter((function(a){return a.includes(t)||a.includes(e)||a.includes(n)})),s=r.map((function(t){return{id:r[0][0],name:r[0][1],area:r[0][2]}}));this.searchString?(this.teams=s,(r.length=0)&&(this.$refs.not_found.innerText="No results found")):this.teams=this.originalteams}},computed:{key:function(){return apiKey},displayedPosts:function(){return this.paginate(this.teams)},validateSearchString:function(t){return t.toLowerCase()}},watch:{teams:function(){this.setPages()}},created:function(){var t=this;yt()({method:"get",url:"https://api.football-data.org/v2/teams",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(e){t.teams=e.data.teams,t.originalteams=e.data.teams}))}};n("d68b");const Yt=C()(Et,[["render",Vt]]);var Zt=Yt,$t=Object(r["f"])("h1",null,"Page not found",-1),te=Object(r["f"])("hr",null,null,-1),ee=Object(r["h"])(" Start from main page "),ne=[$t,te,ee];function ae(t,e,n,a,s,c){return Object(r["r"])(),Object(r["e"])("div",null,ne)}var re={};const se=C()(re,[["render",ae]]);var ce=se,oe={class:"container"},ie=Object(r["f"])("h1",null,"Календарь команды",-1),ue=Object(r["f"])("p",null,"«Приложение для просмотра спортивной статистики «SoccerStat»»",-1),le={class:"resp-tab"},pe=Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[Object(r["f"])("th",null,"Дата"),Object(r["f"])("th",null,"Время"),Object(r["f"])("th",null,"Статус"),Object(r["f"])("th",null,"Названия команд участвующих в матче"),Object(r["f"])("th",null," Счёт. Счёт в основное время, счёт в дополнительное время, итог пенальти. ")])],-1),be=Object(r["f"])("span",null,"data",-1),de=Object(r["f"])("span",null,"time",-1),he=Object(r["f"])("span",null,"status",-1),fe=Object(r["f"])("td",null,[Object(r["f"])("span",null,"score"),Object(r["h"])("Контент 5")],-1);function je(t,e,n,a,s,c){var o=Object(r["w"])("app-breadcrumbs");return Object(r["r"])(),Object(r["e"])("div",oe,[ie,ue,Object(r["i"])(o,{breadcrumb:s.team,main:s.home_breadcrumb},null,8,["breadcrumb","main"]),Object(r["h"])(Object(r["y"])(c.setTime)+" ",1),Object(r["f"])("table",le,[pe,Object(r["f"])("tbody",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(s.matches,(function(t){return Object(r["r"])(),Object(r["e"])("tr",{key:t.id},[Object(r["f"])("td",null,[be,Object(r["h"])(Object(r["y"])(c.setDate(t.utcDate)),1)]),Object(r["f"])("td",null,[de,Object(r["h"])(Object(r["y"])(c.setTime(t.utcDate)),1)]),Object(r["f"])("td",null,[he,Object(r["h"])(Object(r["y"])(t.status),1)]),Object(r["f"])("td",null,Object(r["y"])(t.homeTeam.name)+" - "+Object(r["y"])(t.awayTeam.name),1),fe])})),128))])])])}var Oe={class:"breadcrumbs"},ge={class:"breadcrumbs__list"};function me(t,e,n,a,s,c){return Object(r["r"])(),Object(r["e"])("div",Oe,[Object(r["f"])("ul",ge,[Object(r["f"])("li",null,Object(r["y"])(n.main)+" > ",1),Object(r["f"])("li",null,Object(r["y"])(n.breadcrumb),1)])])}var ve={props:{main:String,breadcrumb:String}};const Ae=C()(ve,[["render",me]]);var ye=Ae,Se={components:{AppSearch:et,AppBreadcrumbs:ye},data:function(){return{team:null,matches:[],home_breadcrumb:"Команды"}},methods:{setTime:function(t){var e=new Date(t),n="0"==e.getUTCMinutes()?e.getUTCMinutes()+"0":e.getUTCMinutes();return e.getUTCHours()+" : "+n},setDate:function(t){var e=new Date(t),n=("0"==e.getDay()||e.getDay(),e.getDay()+"-"+e.getUTCMonth()+"-"+e.getUTCFullYear());return n}},created:function(){var t=this;yt()({method:"get",url:"https://api.football-data.org/v2/teams/"+parseInt(this.$route.params.id)+"/matches",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(e){t.matches=e.data.matches})).catch((function(){console.log("error")})),yt()({method:"get",url:"http://api.football-data.org/v2/teams/"+parseInt(this.$route.params.id),headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(e){t.team=e.data.name})).catch((function(){console.log("error")}))}};const Ce=C()(Se,[["render",je]]);var ke=Ce,we={class:"container"},Pe=Object(r["f"])("h1",null,"Календарь команды",-1),De=Object(r["f"])("p",null,"«Приложение для просмотра спортивной статистики «SoccerStat»»",-1),Me=Object(r["g"])('<table class="resp-tab"><thead><tr><th>Дата</th><th>Время</th><th>Статус</th><th>Названия команд участвующих в матче</th><th> Счёт. Счёт в основное время, счёт в дополнительное время, итог пенальти. </th></tr></thead><tbody><tr><td><span>Заголовок 1</span>Контент 1</td><td><span>Заголовок 2</span>Контент 1</td><td><span>Заголовок 3</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr></tbody></table>',1);function Ie(t,e,n,a,s,c){var o=Object(r["w"])("app-breadcrumbs");return Object(r["r"])(),Object(r["e"])("div",we,[Pe,De,Object(r["i"])(o),Object(r["h"])(" "+Object(r["y"])(s.matches)+" ",1),Me])}var Te={components:{AppSearch:et,AppBreadcrumbs:ye},data:function(){return{matches:[]}},mounted:function(){var t=this;yt()({method:"get",url:"http://api.football-data.org/v2/competitions/"+parseInt(this.$route.params.id)+"/matches",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(e){t.matches=e})).catch((function(){console.log("error")}))}};const xe=C()(Te,[["render",Ie]]);var Be=xe,_e=[{name:"home",path:"/",component:rt},{name:"teams",path:"/teams",component:Zt},{name:"leagues",path:"/league",component:Ut},{name:"team-calendar",path:"/team-calendar/:id",component:ke,props:!0},{name:"league-calendar",path:"/league-calendar/:id",component:Be,props:!0},{path:"/:any(.*)",component:ce}],Ue=Object(Q["a"])({history:Object(Q["b"])(),routes:_e}),Ne=Ue,Ge=n("5502"),ze=Object(Ge["a"])({modules:{},strict:!1}),Je=ze,Xe=Object(r["c"])(F);Xe.use(Je),Xe.use(Ne),Xe.mount("#app")},"6f11":function(t,e,n){},8756:function(t,e,n){"use strict";n("e1be")},a33a:function(t,e,n){},be0c:function(t,e,n){"use strict";n("faad")},bfc3:function(t,e){t.exports="data:image/png;base64,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"},d68b:function(t,e,n){"use strict";n("6f11")},e1be:function(t,e,n){},ea9f:function(t,e,n){"use strict";n("a33a")},faad:function(t,e,n){}});