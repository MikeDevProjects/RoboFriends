(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(44)},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(18),c=n.n(a),i=n(10),s=n(7),l=n(20),u=n(21),d=n(22),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(38),n(40);var f=n(1),p=n(2),g=n(4),m=n(3),E=n(5),v=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"r2d2?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},O=function(e){return e.robots.map(function(e){return console.log("CardList"),r.a.createElement(v,{key:e.id,id:e.id,name:e.name,email:e.email})})},w=function(e){e.searchField;var t=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},j=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},y=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState(function(e,t){return{hasError:!0}})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(o.Component),R=(n(42),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(g.a)(this,Object(m.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log("CounterButton"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.PureComponent)),S=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(R,{color:"red"}))}}]),t}(o.PureComponent),C=function(e){function t(){var e,n;Object(f.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(g.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.onRequestRobots()},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=(e.error,o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(S,null),r.a.createElement(w,{searchChange:n}),r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(O,{robots:c}))))}}]),t}(o.Component),k=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(C),T=n(11),_={searchField:""},F={isPending:!1,robots:[],error:""},N=(Object(l.createLogger)(),Object(s.combineReducers)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(T.a)(e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(T.a)(e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(T.a)(e,{error:t.payload,isPending:!1});default:return e}}})),P=Object(s.createStore)(N,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(d.a)));c.a.render(r.a.createElement(i.a,{store:P},r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RoboFriends","/service-worker.js");h?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):b(t,e)})}}()}},[[29,2,1]]]);
//# sourceMappingURL=main.b4ef56d7.chunk.js.map