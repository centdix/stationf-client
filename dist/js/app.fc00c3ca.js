(function(e){function t(t){for(var a,o,c=t[0],i=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var i=s[c];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("h1",{staticClass:"text-center"},[e._v("Book a meeting room")]),s("div",{attrs:{id:"date_search"}},[s("h3",{staticClass:"text-center m-4"},[e._v("Search by date and time")]),s("div",{staticClass:"row mt-4 justify-content-center"},[s("label",{staticClass:"col-3"},[e._v("When: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"col-4",attrs:{type:"date",id:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),s("vue-timepicker",{staticClass:"tp",attrs:{"minute-interval":10},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),s("div",{staticClass:"row mt-4 justify-content-center"},[s("label",{staticClass:"col-3"},[e._v("Duration: ")]),s("vue-timepicker",{staticClass:"tp",attrs:{"hour-range":[0,1,2,3,4,5],"minute-interval":30},model:{value:e.duration,callback:function(t){e.duration=t},expression:"duration"}}),s("button",{staticClass:"btn-secondary col-2 offset-md-2",on:{click:e.date_search}},[e._v("Search")])],1)]),s("RoomsList",{attrs:{start_date:e.start_date,end_date:e.end_date,available_rooms:e.available_rooms},on:{book:e.date_search}}),s("hr"),s("BookingsList",{attrs:{bookings:e.bookings},on:{deleteBooking:e.getBookings}})],1)},r=[],o=(s("4160"),s("a434"),s("b0c0"),s("d3b7"),s("ac1f"),s("1276"),s("159b"),s("2909")),c=(s("96cf"),s("1da1")),i=s("97fc"),d=s.n(i),l=(s("1e11"),s("c1df")),u=s.n(l),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.available_rooms.length>0?s("div",{staticClass:"mt-4",attrs:{id:"results"}},[s("hr"),s("div",{staticClass:"row ml-1"},[s("h5",[e._v("Rooms available from "+e._s(e._f("moment")(e.start_date,"L, HH:mm"))+" to "+e._s(e._f("moment")(e.end_date,"L, HH:mm"))+" :")])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-6"},[s("span",[e._v("Minimum capacity: "+e._s(e.min_cap))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.min_cap,expression:"min_cap"}],staticClass:"form-control-range",attrs:{type:"range",id:"formControlRange",min:"0",max:"50"},domProps:{value:e.min_cap},on:{__r:function(t){e.min_cap=t.target.value}}})]),s("div",{staticClass:"col-3 offset-md-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tv_selected,expression:"tv_selected"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexCheckChecked"},domProps:{checked:Array.isArray(e.tv_selected)?e._i(e.tv_selected,null)>-1:e.tv_selected},on:{change:function(t){var s=e.tv_selected,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);a.checked?o<0&&(e.tv_selected=s.concat([r])):o>-1&&(e.tv_selected=s.slice(0,o).concat(s.slice(o+1)))}else e.tv_selected=n}}}),s("label",{staticClass:"form-check-label",attrs:{for:"flexCheckChecked"}},[e._v("TV")])]),s("div",{staticClass:"col-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.retro_selected,expression:"retro_selected"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexCheckChecked"},domProps:{checked:Array.isArray(e.retro_selected)?e._i(e.retro_selected,null)>-1:e.retro_selected},on:{change:function(t){var s=e.retro_selected,a=t.target,n=!!a.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);a.checked?o<0&&(e.retro_selected=s.concat([r])):o>-1&&(e.retro_selected=s.slice(0,o).concat(s.slice(o+1)))}else e.retro_selected=n}}}),s("label",{staticClass:"form-check-label",attrs:{for:"flexCheckChecked"}},[e._v("Retro Projecteur")])])]),e._l(e.filteredRooms,(function(t){return s("div",{key:t.id,staticClass:"card mt-1"},[s("h5",{staticClass:"card-header text-center"},[e._v(" "+e._s(t.name)+" ")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row m-2 justify-content-center"},[s("div",{staticClass:"col-4"},[e._v(" Capacity: "+e._s(t.capacity)+" ")]),s("div",{staticClass:"col-4"},[t.equipements.length>0?s("span",[e._v("Equipments: ")]):s("span",[e._v("No equipments")]),s("br"),e._l(t.equipements,(function(t){return s("span",{key:t.id,staticClass:"ml-3"},[e._v(" "+e._s(t.name)+" ")])}))],2)]),s("div",{staticClass:"row justify-content-end m-3"},[s("button",{staticClass:"btn btn-primary col-3",on:{click:function(s){return e.book(t)}}},[e._v("Book")])])])])}))],2):e._e()},m=[],b=(s("4de4"),{name:"RoomsList",props:["start_date","end_date","available_rooms"],data:function(){return{min_cap:0,tv_selected:!1,retro_selected:!1}},methods:{book:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,n,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a={room_name:e.name,start_date:t.start_date,end_date:t.end_date},n="https://damp-fortress-25110.herokuapp.com/",s.next=4,fetch(n+"book",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});case 4:r=s.sent,t.$emit("book"),200===r.status?t.$toasted.success("Room booked !").goAway(1500):t.$toasted.error("Something went wrong...").goAway(1500);case 7:case"end":return s.stop()}}),s)})))()}},computed:{filteredRooms:function(){var e=this,t=Object(o["a"])(this.available_rooms);return t=t.filter((function(t){if(t.capacity<e.min_cap)return!1;for(var s=!1,a=!1,n=0;n<t.equipements.length;n++)"TV"===t.equipements[n].name&&(s=!0),"Retro Projecteur"===t.equipements[n].name&&(a=!0);return!(e.tv_selected&&!s||e.retro_selected&&!a)})),t}}}),j=b,p=s("2877"),h=Object(p["a"])(j,f,m,!1,null,null,null),v=h.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-4",attrs:{id:"bookings"}},[s("h5",[e._v("Bookings list: ")]),s("div",{staticClass:"col m-2"},[s("ul",{staticClass:"list-group"},e._l(e.bookings,(function(t){return s("li",{key:t.id,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[s("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.room_name))]),s("span",[e._v(e._s(e._f("moment")(t.start_date,"L, HH:mm"))+" - "+e._s(e._f("moment")(t.end_date,"L, HH:mm")))]),s("a",{attrs:{href:"#!"},on:{click:function(s){return e.deleteBooking(t)}}},[e._v("delete")])])})),0)])])},g=[],k={name:"BookingsList",props:["bookings"],data:function(){return{}},methods:{deleteBooking:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var a,n,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a="https://damp-fortress-25110.herokuapp.com/",n=e._id,s.next=4,fetch(a+"bookings/"+n,{method:"DELETE"});case 4:r=s.sent,200===r.status?t.$toasted.success("Booking deleted !").goAway(1500):t.$toasted.error("Something went wrong...").goAway(1500),t.$emit("deleteBooking");case 7:case"end":return s.stop()}}),s)})))()}}},y=k,w=Object(p["a"])(y,_,g,!1,null,null,null),C=w.exports,x={name:"App",components:{VueTimepicker:d.a,RoomsList:v,BookingsList:C},data:function(){return{date:"",time:"",duration:"",available_rooms:[],rooms:[],bookings:[]}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRooms();case 2:return t.next=4,e.getBookings();case 4:case"end":return t.stop()}}),t)})))()},methods:{findByName:function(e,t){for(var s=0;s<e.length;s++)if(e[s].name===t)return s;return-1},getRooms:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s="https://damp-fortress-25110.herokuapp.com/",t.next=3,fetch(s+"rooms",{method:"get"});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e.rooms=n.rooms;case 8:case"end":return t.stop()}}),t)})))()},getBookings:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s="https://damp-fortress-25110.herokuapp.com/",t.next=3,fetch(s+"bookings",{method:"get"});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e.bookings=n;case 8:case"end":return t.stop()}}),t)})))()},date_search:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,a,n,r,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.start_date,a=e.end_date,null!==s&&null!==a&&!s.isBefore(new u.a)&&!s.isSame(a)){t.next=5;break}return e.$toasted.error("Invalid or incomplete inputs").goAway(1500),t.abrupt("return");case 5:return n=Object(o["a"])(e.rooms),r="https://damp-fortress-25110.herokuapp.com/",t.next=9,fetch(r+"bookings",{method:"get"});case 9:return c=t.sent,t.next=12,c.json();case 12:i=t.sent,e.bookings=i,e.bookings.forEach((function(t){var r=u()(t.start_date).subtract(1,"minutes"),o=u()(t.end_date).add(1,"minutes");if(s.isBetween(r,o)||a.isBetween(r,o)){var c=e.findByName(n,t.room_name);n.splice(c,1)}})),e.available_rooms=n;case 16:case"end":return t.stop()}}),t)})))()}},computed:{start_date:function(){var e=this.time.split(":"),t=null;return this.date.length>0&&e.length>1&&(t=new u.a(this.date).hours(e[0]).minutes(e[1])),t},end_date:function(){var e=this.duration.split(":"),t=null;return null!=this.start_date&&e.length>1&&(t=this.start_date.clone(),t.add(parseInt(e[0],10),"hours"),t.add(parseInt(e[1],10),"minutes")),t}}},O=x,z=(s("034f"),Object(p["a"])(O,n,r,!1,null,null,null)),R=z.exports,B=s("a65d"),A=s.n(B);a["a"].config.productionTip=!1,a["a"].use(A.a),a["a"].use(s("2ead")),new a["a"]({render:function(e){return e(R)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.fc00c3ca.js.map