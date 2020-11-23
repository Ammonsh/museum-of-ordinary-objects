(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"068f":function(t,e,n){"use strict";var r=n("85b8"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/ordinary.png"}})])]),t._m(0)],1),n("div",{staticClass:"content"},[n("router-view")],1),n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")]),n("p"),n("a",{attrs:{href:"https://github.com/Ammonsh/museum-of-ordinary-objects.git"}},[t._v("Github")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v("Museum of Ordinary Objects")])])}],s=(n("034f"),n("2877")),o={},c=Object(s["a"])(o,i,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"image-gallery"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"image"},[n("h2",[t._v(t._s(e.title))]),n("h3",[t._v(t._s(e.description))]),n("img",{attrs:{src:e.path}})])})),0)])},p=[],m=(n("96cf"),n("1da1")),f=n("bc3a"),v=n.n(f),h={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},g=h,_=(n("c0d4"),Object(s["a"])(g,d,p,!1,null,"c55958ce",null)),b=_.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("h1",[t._v("The Admin Page!")]),t._m(0),n("div",{staticClass:"add"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),n("p"),n("input",{attrs:{type:"file",name:"photo"},on:{change:t.fileChanged}}),n("button",{on:{click:t.upload}},[t._v("Upload")])]),t.addItem?n("div",{staticClass:"upload"},[n("h2",[t._v(t._s(t.addItem.title))]),n("img",{attrs:{src:t.addItem.path}})]):t._e()]),t._m(1),n("div",{staticClass:"edit"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?n("div",{staticClass:"suggestions"},t._l(t.suggestions,(function(e){return n("div",{key:e.id,staticClass:"suggestion",on:{click:function(n){return t.selectItem(e)}}},[t._v(" "+t._s(e.title)+" ")])})),0):t._e()]),t.findItem?n("div",{staticClass:"upload"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findItem.title,expression:"findItem.title"}],domProps:{value:t.findItem.title},on:{input:function(e){e.target.composing||t.$set(t.findItem,"title",e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.findItem.description,expression:"findItem.description"}],domProps:{value:t.findItem.description},on:{input:function(e){e.target.composing||t.$set(t.findItem,"description",e.target.value)}}}),t._v(" "),n("p"),n("img",{attrs:{src:t.findItem.path}})]):t._e(),t.findItem?n("div",{staticClass:"actions"},[n("button",{on:{click:function(e){return t.deleteItem(t.findItem)}}},[t._v("Delete")]),n("button",{on:{click:function(e){return t.editItem(t.findItem)}}},[t._v("Edit")])]):t._e()])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[t._v("1")]),n("h2",[t._v("Add an Item")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[t._v("2")]),n("h2",[t._v("Edit/Delete an Item")])])}],x=(n("a4d3"),n("e01a"),n("4de4"),n("b0c0"),n("2ca0"),{name:"Admin",data:function(){return{title:"",description:"",file:null,addItem:null,items:[],findTitle:"",findItem:null}},created:function(){this.getItems()},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))}},methods:{getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},selectItem:function(t){this.findTitle="",this.findItem=t},fileChanged:function(t){this.file=t.target.files[0]},upload:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new FormData,n.append("photo",t.file,t.file.name),e.next=5,v.a.post("/api/photos",n);case 5:return r=e.sent,e.next=8,v.a.post("/api/items",{title:t.title,description:t.description,path:r.data.path});case 8:i=e.sent,t.addItem=i.data,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},deleteItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.delete("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},editItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.put("/api/items/"+t._id,{title:e.findItem.title,description:e.findItem.description});case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}}),C=x,y=(n("068f"),Object(s["a"])(C,I,w,!1,null,"1ec52106",null)),O=y.exports;r["a"].use(l["a"]);var j=[{path:"/",name:"home",component:b},{path:"/admin",name:"admin",component:O}],k=new l["a"]({mode:"history",base:"/",routes:j}),P=k;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(t){return t(u)}}).$mount("#app")},"85b8":function(t,e,n){},"85ec":function(t,e,n){},b324:function(t,e,n){},c0d4:function(t,e,n){"use strict";var r=n("b324"),i=n.n(r);i.a}});
//# sourceMappingURL=app.346a19cc.js.map