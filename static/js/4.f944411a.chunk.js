(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{121:function(e,t,n){e.exports={users__wrapper:"Users_users__wrapper__3JieZ",selectedPage:"Users_selectedPage__J63sh",user__wrapper:"Users_user__wrapper__1k92u",username__wrapper:"Users_username__wrapper__EId1I",button:"Users_button__1saaY",image:"Users_image__2Sl9a"}},127:function(e,t,n){e.exports={button:"Paginator_button__s2S1I",count:"Paginator_count__1Lf2I",paginator:"Paginator_paginator__9mmeP",pageNumber:"Paginator_pageNumber__CPAgv",selectedPage:"Paginator_selectedPage__UYLLE"}},128:function(e,t,n){e.exports=n.p+"static/media/anonimus.223507bb.jpg"},131:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(121),u=n.n(o),s=n(31);var l=n(53);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||Object(l.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(127),f=n.n(c),p=n(3),g=n.n(p),m=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,l=e.portionSize,c=void 0===l?10:l,p=Math.ceil(t/n),m=[],_=1;_<p;_++)m.push(_);var d=Math.ceil(p/c),b=i(Object(r.useState)(1),2),w=b[0],h=b[1],v=(w-1)*c+1,P=w*c;return a.a.createElement("div",{className:f.a.paginator},w>1&&a.a.createElement("button",{className:f.a.button,onClick:function(){return h(w-1)}},"\u2b05\ufe0f Left"),m.filter((function(e){return e>=v&&e<=P})).map((function(e){return a.a.createElement("span",{className:g()(Object(s.a)({},f.a.selectedPage,o===e),f.a.pageNumber),key:e,onClick:function(){return u(e)}},e)})),d>w&&a.a.createElement("button",{className:f.a.button,onClick:function(){return h(w+1)}},"\u27a1\ufe0f Right"))},_=n(128),d=n.n(_),b=n(12),w=function(e){var t=e.user,n=e.unfollow,r=e.follow,o=e.followingInProgress;return a.a.createElement("div",{key:t.id,className:u.a.user__wrapper},a.a.createElement("div",null,a.a.createElement(b.b,{to:"/profile/".concat(t.id)},a.a.createElement("img",{className:u.a.image,src:t.photos.small?t.photos.small:d.a,alt:"user photo"}))),a.a.createElement("div",{className:u.a.username__wrapper},a.a.createElement("span",null,t.name),a.a.createElement("span",null,t.status)),a.a.createElement("div",{className:u.a.button__wrapper},t.followed?a.a.createElement("button",{className:u.a.button,disabled:o.some((function(e){return e===t.id})),onClick:function(){return n(t.id)}},"Unsubscribe"):a.a.createElement("button",{className:u.a.button,disabled:o.some((function(e){return e===t.id})),onClick:function(){return r(t.id)}},"Subscribe")))},h=function(e){var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.users,s=e.onPageChanged,l=e.unfollow,i=e.follow,c=e.followingInProgress;return a.a.createElement("div",{className:u.a.users__wrapper},a.a.createElement(m,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:s}),o.map((function(e){return a.a.createElement(w,Object.assign({key:e.id},{user:e,unfollow:l,follow:i,followingInProgress:c}))})))},v=n(11),P=n(67),y=n(25),E=n(18),I=n(52);function C(e,t){return e===t}function S(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function N(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var U=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,u=r.pop(),s=N(r),l=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(n)),i=e((function(){for(var e=[],t=s.length,n=0;n<t;n++)e.push(s[n].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=u,i.dependencies=s,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,n=null,r=null;return function(){return S(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var j=U((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),k=function(e){return e.usersPage.pageSize},A=function(e){return e.usersPage.totalItemsCount},z=function(e){return e.usersPage.currentPage},O=function(e){return e.usersPage.isFetching},x=function(e){return e.usersPage.followingInProgress};t.default=Object(E.d)(Object(v.b)((function(e){return{users:j(e),pageSize:k(e),totalItemsCount:A(e),currentPage:z(e),isFetching:O(e),followingInProgress:x(e)}}),{follow:P.b,unfollow:P.e,requestUsers:P.d,getUsersAfterChanged:P.c}),I.a)((function(e){var t=e.users,n=e.pageSize,o=e.totalItemsCount,u=e.currentPage,s=e.isFetching,l=e.followingInProgress,i=e.follow,c=e.unfollow,f=e.requestUsers,p=e.getUsersAfterChanged;Object(r.useEffect)((function(){f(u,n)}),[u]);return a.a.createElement(a.a.Fragment,null,s?a.a.createElement(y.a,null):a.a.createElement(h,{totalItemsCount:o,pageSize:n,currentPage:u,users:t,onPageChanged:function(e){p(e,n)},unfollow:c,follow:i,followingInProgress:l}))}))}}]);
//# sourceMappingURL=4.f944411a.chunk.js.map