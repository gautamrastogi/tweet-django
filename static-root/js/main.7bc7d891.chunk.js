(this["webpackJsonptweetme2-web"]=this["webpackJsonptweetme2-web"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),r=n.n(a),o=(n(12),n.p+"static/media/logo.6ce24c58.svg"),i=(n(13),n(7)),l=n(2);var j=n(0);function u(e){var t=s.a.createRef(),n=Object(c.useState)([]),a=Object(l.a)(n,2),r=a[0],o=a[1];return Object(j.jsxs)("div",{className:e.classname,children:[Object(j.jsx)("div",{className:"col-30 mb-20",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e),console.log(t.current.value);var n=t.current.value,c=Object(i.a)(r);c.unshift({content:n,like:0,id:132}),o(c),t.current.value=""},children:[Object(j.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})}),Object(j.jsx)(b,{newTweets:r})]})}function b(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)([]),o=Object(l.a)(r,2),u=o[0],b=o[1];return Object(c.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(s);t.length!==u.length&&b(t)}),[u,e.newTweets,s]),Object(c.useEffect)((function(){!function(e){var t=new XMLHttpRequest;t.responseType="json",t.open("GET","http://localhost:8000/api/tweets/"),t.onload=function(){e(t.response,t.status)},t.onerror=function(t){console.log(t),e({message:"The request was an error"},400)},t.send()}((function(e,t){console.log(e,t),200===t?a(e):alert("There was an error")}))}),[]),u.map((function(e,t){return Object(j.jsx)(p,{tweet:e,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))}))}function d(e){var t=e.tweet,n=e.action,s=Object(c.useState)(t.likes?t.likes:0),a=Object(l.a)(s,2),r=a[0],o=a[1],i=Object(c.useState)(!0===t.userLikes),u=Object(l.a)(i,2),b=u[0],d=u[1],p=e.className?e.className:"btn btn-primary btn-sm",m=n.display?n.display:"Action",O="like"===n.type?"".concat(r," ").concat(m):m;return Object(j.jsx)("button",{className:p,onClick:function(e){e.preventDefault(),"like"===n.type&&(!0===b?(o(r-1),d(!1)):(o(r+1),d(!0))),"retweet"===n.type&&console.log("Like")},children:O})}function p(e){var t=e.tweet,n=e.className?e.className:"col-10 mx-auto col-md-6";return Object(j.jsxs)("div",{className:n,children:[Object(j.jsxs)("p",{children:[t.id," - ",t.content]}),Object(j.jsxs)("div",{className:"btn btn-group",children:[Object(j.jsx)(d,{tweet:t,action:{type:"like",display:"Likes"}}),Object(j.jsx)(d,{tweet:t,action:{type:"unlike",display:"UnLike"}}),Object(j.jsx)(d,{tweet:t,action:{type:"retweet",display:"Retweet"}})]})]})}var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(j.jsx)("div",{children:Object(j.jsx)(u,{})}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},f=document.getElementById("root");f&&r.a.render(Object(j.jsx)(m,{}),f);var h=document.getElementById("tweetme-2");h&&r.a.render(Object(j.jsx)(u,{}),h),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.7bc7d891.chunk.js.map