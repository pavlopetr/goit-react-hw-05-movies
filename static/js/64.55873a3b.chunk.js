"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[64],{4094:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(501),a=r(6871),c="List_link__EYABn",s="List_list__AK7hC",u=r(184),i=function(t){var e=t.data,r=(0,a.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)("li",{className:s,children:(0,u.jsx)(n.rU,{className:c,to:"/movies/".concat(t.id),state:r,children:t.title})},t.id)}))})}},4407:function(t,e,r){var n=r(5861),a=r(3144),c=r(5671),s=r(6274),u=r(9359),i=r(7757),o=r.n(i),p=r(4569),f=r.n(p),l="133390594699e864d9dd1aebf0535707";f().defaults.baseURL="https://api.themoviedb.org/3/";var h=(0,u.Z)("SEARCH"),v=(0,u.Z)("TRAND"),d=(0,u.Z)("BASE"),m=(0,a.Z)((function t(){var e=this;(0,c.Z)(this,t),Object.defineProperty(this,h,{writable:!0,value:"search/movie"}),Object.defineProperty(this,v,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,d,{writable:!0,value:"movie/"}),this.trend=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,v)[v],"?api_key=").concat(l,"&page=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,n.Z)(o().mark((function t(r,n){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,h)[h],"?api_key=").concat(l,"&query=").concat(r,"&page=").concat(n));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),this.fetchId=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,d)[d],"/").concat(r,"?api_key=").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.cast=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,d)[d],"/").concat(r,"/credits?api_key=").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,n.Z)(o().mark((function t(r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,s.Z)(e,d)[d],"/").concat(r,"/reviews?api_key=").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),x=new m;e.Z=x},3064:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(2791),i=r(501),o=r(4407),p="SearchForm_form__o80os",f="SearchForm_button__UXY06",l="SearchForm_input__HOxJo",h=r(184),v=function(t){var e=t.setData,r=t.setSearchParams,c=(0,u.useState)(""),i=(0,a.Z)(c,2),v=i[0],d=i[1];return(0,h.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==v){r({query:v});var a=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.search(v,1);case 3:r=t.sent,e(r.results),d(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();a()}},className:p,children:[(0,h.jsx)("input",{type:"text",name:"query",value:v,onChange:function(t){d(t.target.value.trim())},className:l}),(0,h.jsx)("button",{type:"submit",className:f,children:"SEARCH"})]})},d=r(4094),m=function(){var t,e=(0,i.lr)(),r=(0,a.Z)(e,2),c=r[0],p=r[1],f=(0,u.useState)([]),l=(0,a.Z)(f,2),m=l[0],x=l[1],Z=(0,u.useState)(1),w=(0,a.Z)(Z,2),_=w[0],b=w[1],y=null!==(t=c.get("query"))&&void 0!==t?t:"";return(0,u.useEffect)((function(){if(""!==y){b(1);var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.search(y,_);case 3:e=t.sent,x(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[y,_]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{setData:x,setSearchParams:p}),0!==m.length&&""!==y&&(0,h.jsx)(d.Z,{data:m})]})}}}]);
//# sourceMappingURL=64.55873a3b.chunk.js.map