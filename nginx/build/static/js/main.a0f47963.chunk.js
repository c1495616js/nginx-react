(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{16:function(e,t,n){e.exports=n(31)},21:function(e,t,n){},22:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(13),r=n.n(c),o=(n(21),n(6)),m=n(5);n(22);function u(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"))}function i(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"))}function E(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h2",null,"Topics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/components")},"Components")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),l.a.createElement(m.a,{path:"".concat(t.path,"/:topicId"),component:p}),l.a.createElement(m.a,{exact:!0,path:t.path,render:function(){return l.a.createElement("h3",null,"Please select a topic.")}}))}function p(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h3",null,t.params.topicId))}var s=function(){return l.a.createElement(o.a,{basename:"wildfire"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/topics"},"Topics"))),l.a.createElement("hr",null),l.a.createElement(m.a,{exact:!0,path:"/",component:u}),l.a.createElement(m.a,{path:"/about",component:i}),l.a.createElement(m.a,{path:"/topics",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a0f47963.chunk.js.map