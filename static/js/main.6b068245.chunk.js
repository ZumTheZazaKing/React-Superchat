(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(13),c=n.n(r),i=n(14),s=n(10),a=n(3),u=n(15),o=n.n(u),j=(n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))}),d=n(9),p=(n(24),n(29),n(16)),b=n(17),h=n(4);d.a.initializeApp({apiKey:"AIzaSyDO3KAr7Vw-EyZhlpv2nCpliv2cpotDdkY",authDomain:"superchat-6b42a.firebaseapp.com",projectId:"superchat-6b42a",storageBucket:"superchat-6b42a.appspot.com",messagingSenderId:"586901058821",appId:"1:586901058821:web:0b122313087c36888ef36c",measurementId:"G-C5BEXQYX3F"});var l=d.a.auth(),O=d.a.firestore();function x(){var e=O.collection("messages"),t=e.orderBy("createdAt").limit(35),n=Object(b.a)(t,{idField:"id"}),r=Object(s.a)(n,1)[0],u=Object(a.useState)(""),o=Object(s.a)(u,2),j=o[0],p=o[1],x=Object(a.useRef)();Object(a.useEffect)((function(){x.current.scrollIntoView({behavior:"smooth"})}));var m=function(){var t=Object(i.a)(c.a.mark((function t(n){var r,i,s,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=l.currentUser,i=r.uid,s=r.photoURL,a=r.displayName,t.next=4,e.add({text:j,photoUrl:s,uid:i,createdAt:d.a.firestore.FieldValue.serverTimestamp(),name:a});case 4:p(""),x.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("p",{children:"ZumSuperChat"}),Object(h.jsx)(v,{})]}),Object(h.jsxs)("main",{children:[r&&r.map((function(e){return Object(h.jsx)(f,{message:e},e.id)})),Object(h.jsx)("div",{ref:x})]}),Object(h.jsxs)("form",{onSubmit:m,children:[Object(h.jsx)("input",{type:"text",value:j,onChange:function(e){return p(e.target.value)},required:!0}),Object(h.jsx)("input",{type:"submit",value:"Send"})]})]})}function f(e){var t=e.message,n=t.text,r=t.uid,c=t.photoUrl,i=t.name,s=r===l.currentUser.uid?"sent":"received";return Object(h.jsxs)("div",{className:s,children:[Object(h.jsx)("img",{alt:"pp",src:c,width:"40",height:"40"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:r===l.currentUser.uid?"You":i}),Object(h.jsx)("br",{}),n]})]})}function m(){return Object(h.jsxs)("div",{id:"SignIn",children:[Object(h.jsx)("p",{id:"appTitle",children:"ZumSuperChat"}),Object(h.jsx)("p",{children:"Sign in to talk with people across the world!"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){var e=new d.a.auth.GoogleAuthProvider;l.signInWithPopup(e)},children:"Sign in with Google"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{id:"footer",children:"ZUMTHEZAZAKING \xa92021"})]})}function v(){return l.currentUser&&Object(h.jsx)("button",{onClick:function(){return l.signOut()},children:"Sign Out"})}function g(){var e=Object(p.a)(l),t=Object(s.a)(e,1)[0];return Object(h.jsx)("div",{id:"App",children:t?Object(h.jsx)(x,{}):Object(h.jsx)(m,{})})}var w=Object(h.jsx)(g,{});o.a.render(w,document.getElementById("root")),j()}},[[28,1,2]]]);
//# sourceMappingURL=main.6b068245.chunk.js.map