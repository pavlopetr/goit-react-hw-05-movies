"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{4094:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(501),a=n(6871),c="List_link__EYABn",u="List_list__AK7hC",s=n(184),i=function(t){var e=t.data,n=(0,a.TH)();return(0,s.jsx)("ul",{children:e.map((function(t){return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(r.rU,{className:c,to:"/movies/".concat(t.id),state:n,children:t.title})},t.id)}))})}},4407:function(t,e,n){var r=n(5861),a=n(3144),c=n(5671),u=n(6274),s=n(9359),i=n(7757),o=n.n(i),p=n(4569),f=n.n(p),h="133390594699e864d9dd1aebf0535707";f().defaults.baseURL="https://api.themoviedb.org/3/";var d=(0,s.Z)("SEARCH"),v=(0,s.Z)("TRAND"),l=(0,s.Z)("BASE"),w=(0,a.Z)((function t(){var e=this;(0,c.Z)(this,t),Object.defineProperty(this,d,{writable:!0,value:"search/movie"}),Object.defineProperty(this,v,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,l,{writable:!0,value:"movie/"}),this.trend=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,u.Z)(e,v)[v],"?api_key=").concat(h,"&page=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,r.Z)(o().mark((function t(n,r){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,u.Z)(e,d)[d],"?api_key=").concat(h,"&query=").concat(n,"&page=").concat(r));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),this.fetchId=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,u.Z)(e,l)[l],"/").concat(n,"?api_key=").concat(h));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.cast=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,u.Z)(e,l)[l],"/").concat(n,"/credits?api_key=").concat(h));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,u.Z)(e,l)[l],"/").concat(n,"/reviews?api_key=").concat(h));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),Z=new w;e.Z=Z},7052:function(t,e,n){n.r(e);var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(2791),i=n(4407),o=n(4094),p=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,s.useState)(1),h=(0,a.Z)(f,2),d=h[0],v=h[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.trend(d);case 3:e=t.sent,c(e),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),v(1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(o.Z,{data:n})]})}}}]);
//# sourceMappingURL=52.0cc8a8e5.chunk.js.map