(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t),a.d(t,"authService",(function(){return o})),a.d(t,"signIn",(function(){return i})),a.d(t,"createUser",(function(){return l})),a.d(t,"onAuthStateChanged1",(function(){return s})),a.d(t,"googleAuth",(function(){return m})),a.d(t,"githubAuth",(function(){return d})),a.d(t,"signPopup",(function(){return f})),a.d(t,"signOutEx",(function(){return p})),a.d(t,"dbService",(function(){return b})),a.d(t,"nowDate",(function(){return E})),a.d(t,"addDocEx",(function(){return h})),a.d(t,"collectionEx",(function(){return g})),a.d(t,"serverTimestampEx",(function(){return v})),a.d(t,"getDocsEx",(function(){return j})),a.d(t,"onSnapShotEx",(function(){return x})),a.d(t,"docEx",(function(){return O})),a.d(t,"queryEx",(function(){return y})),a.d(t,"orderbyEx",(function(){return w})),a.d(t,"deleteDocEx",(function(){return N})),a.d(t,"updateDocEx",(function(){return S})),a.d(t,"storage",(function(){return k})),a.d(t,"refEx",(function(){return A})),a.d(t,"uploadStringEx",(function(){return I})),a.d(t,"getDownloadURLEx",(function(){return C})),a.d(t,"whereEx",(function(){return P})),a.d(t,"updateProfileEx",(function(){return D}));var n=a(47),r=a(27),c=a(22),u=a(31),o=(Object(n.a)({apiKey:"AIzaSyCjWuB8cpzt-ciq7nPNkiWVfomfVjgcMIA",authDomain:"nwitter-e35db.firebaseapp.com",projectId:"nwitter-e35db",storageBucket:"nwitter-e35db.appspot.com",messagingSenderId:"983078954811",appId:"1:983078954811:web:7bf26c1a0f542a3a1fb91e"}),Object(r.getAuth)()),i=r.signInWithEmailAndPassword,l=r.createUserWithEmailAndPassword,s=r.onAuthStateChanged,m=r.GoogleAuthProvider,d=r.GithubAuthProvider,f=r.signInWithPopup,p=r.signOut,b=c.f,E=c.j,h=c.a,g=c.b,v=c.j,j=c.e,x=c.g,O=c.d,y=c.i,w=c.h,N=c.c,S=c.k,k=Object(u.c)(),A=u.d,I=u.e,C=u.b,P=c.l,D=r.updateProfile},52:function(e,t,a){e.exports=a(68)},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(46),u=a.n(c),o=a(10),i=a(35),l=a(15),s=a(0),m=a.n(s),d=a(3),f=a(11).authService,p=a(27),b=p.createUserWithEmailAndPassword,E=p.signInWithEmailAndPassword,h=a(5).useState,g=function(){var e=h(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=h(""),u=Object(o.a)(c,2),i=u[0],l=u[1],s=h(""),p=Object(o.a)(s,2),g=p[0],v=p[1],j=h(""),x=Object(o.a)(j,2),O=x[0],y=x[1],w=function(e){var t=e.target,a=t.name,r=t.value;"email"===a?n(r):"password"===a&&l(r)},N=function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,b(f,a,i);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,E(a,i);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:N,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,className:"authInput",onChange:w}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:g?"CreateAccount":"Sign In"}),O&&r.a.createElement("span",{className:"authError"},O)),r.a.createElement("span",{onClick:function(){return v((function(e){return!e}))},className:"authSwitch"},g?"Sign In":"Create Account"))},v=a(11),j=a(24),x=a(36),O=function(){var e=function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new v.googleAuth:"github"===a&&(n=new v.githubAuth),e.next=4,Object(v.signPopup)(v.authService,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(j.a,{icon:x.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(g,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google",r.a.createElement(j.a,{icon:x.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github",r.a.createElement(j.a,{icon:x.a}))))},y=a(48),w=a(31),N=a(29),S=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(o.a)(c,2),i=u[0],l=u[1],s=Object(n.useState)(t.text),f=Object(o.a)(s,2),p=f[0],b=f[1],E=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,Object(v.deleteDocEx)(Object(v.docEx)(Object(v.dbService)(),"nweets",t.id));case 4:return e.next=6,Object(w.a)(Object(v.refEx)(v.storage,t.attachmentUrl));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){l((function(e){return!e}))},g=function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,Object(v.updateDocEx)(Object(v.docEx)(Object(v.dbService)(),"nweets",t.id),"text",p);case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:g,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:h,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:E},r.a.createElement(j.a,{icon:N.d})),r.a.createElement("span",{onClick:h},r.a.createElement(j.a,{icon:N.a})))))},k=a(70),A=function(e){var t=e.userObj,a=Object(n.useRef)(),c=Object(n.useState)(""),u=Object(o.a)(c,2),i=u[0],l=u[1],s=Object(n.useState)(""),f=Object(o.a)(s,2),p=f[0],b=f[1],E=function(){var e=Object(d.a)(m.a.mark((function e(a){var n,r,c,u,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===p){e.next=13;break}return r=Object(v.refEx)(v.storage,"".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,Object(v.uploadStringEx)(r,p,"data_url");case 8:return c=e.sent,e.next=11,Object(v.getDownloadURLEx)(c.ref);case 11:n=e.sent,console.log(c);case 13:return u={text:i,createdAt:Object(v.serverTimestampEx)(),creatorId:t.uid,attachmentUrl:n},e.prev=14,e.next=17,Object(v.addDocEx)(Object(v.collectionEx)(Object(v.dbService)(),"nweets"),u);case 17:o=e.sent,console.log("Document written with ID: ",o.id),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("Error adding document: ",e.t0);case 24:l(""),b("");case 26:case"end":return e.stop()}}),e,null,[[14,21]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:E,className:"factoryForm"},r.a.createElement("div",{className:"fatoryInput__container"},r.a.createElement("input",{className:"fatoryInput__input",value:i,onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{htmlFor:"attach-file",className:"factoryInput_label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(j.a,{icon:N.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){console.log(e);var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)},style:{opacity:0}}),p&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:p,style:{backgroundImage:p}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){b(""),a.current.value=null}},r.a.createElement("span",null,"Remove"),r.a.createElement(j.a,{icon:N.c}))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(o.a)(a,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){var e=Object(v.queryEx)(Object(v.collectionEx)(Object(v.dbService)(),"nweets"),Object(v.orderbyEx)("createdAt","desc"));Object(v.onSnapShotEx)(e,(function(e){var t=e.docs.map((function(e){return console.log("...doc.data()-------------"),console.log(e.data()),Object(y.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(A,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},u.map((function(e){return r.a.createElement(S,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(j.a,{icon:x.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(j.a,{icon:N.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},P=function(e){var t=e.refreshUser,a=e.userObj,c=Object(l.f)(),u=Object(n.useState)(a.displayName),i=Object(o.a)(u,2),s=i[0],f=i[1],p=function(){var e=Object(d.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=4;break}return e.next=4,Object(v.updateProfileEx)(v.authService.currentUser,{displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:p,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logout",onClick:function(){Object(v.signOutEx)(v.authService),c.push("/")}},"Log Out"))},D=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(C,{userObj:n}),r.a.createElement(l.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(I,{userObj:n})),r.a.createElement(l.a,{exact:!0,path:"/profile"},r.a.createElement(P,{refreshUser:t,userObj:n}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(O,null)))))};var F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(null),i=Object(o.a)(u,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){Object(v.onAuthStateChanged1)(v.authService,(function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return Object(v.updateProfileEx)(e,{displayName:e.displayName})}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(D,{refreshUser:function(){var e=v.authService.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfileEx:function(t){return Object(v.updateProfileEx)(e,{displayName:e.displayName})}})},isLoggedIn:Boolean(l),userObj:l}):"Initializing...")};a(67);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9c2c2ec5.chunk.js.map