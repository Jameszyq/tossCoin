(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/coinskin"],{"14e8":function(n,t,e){"use strict";e.r(t);var i=e("ea92"),o=e.n(i);for(var c in i)"default"!==c&&function(n){e.d(t,n,function(){return i[n]})}(c);t["default"]=o.a},3094:function(n,t,e){"use strict";(function(n){e("9b5a"),e("921b");i(e("66fd"));var t=i(e("d7eb"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"689a":function(n,t,e){"use strict";var i,o=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return i})},"75a4":function(n,t,e){"use strict";var i=e("7b86"),o=e.n(i);o.a},"7b86":function(n,t,e){},d7eb:function(n,t,e){"use strict";e.r(t);var i=e("689a"),o=e("14e8");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("75a4");var a,u=e("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=s.exports},ea92:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{coins:[],coinName:"",coinIndex:-1}},onLoad:function(){this.getCoinList(),this.getUseCoin()},methods:{getCoinList:function(){var n=[{name:"2020鼠",src:"2020shu"},{name:"2019猪",src:"2019zhu"},{name:"2018狗",src:"2018gou"},{name:"2017鸡",src:"2017ji"},{name:"2016猴",src:"2016hou"},{name:"2015羊",src:"2015yang"}];this.coins=[];for(var t=0;t<n.length;t++){var e=n[t],i={name:e.name,id:e.src,src:"http://q74m0xojb.bkt.clouddn.com/img/".concat(e.src,"_back.png")};this.coins.push(i)}},getUseCoin:function(){this.coinName=n.getStorageSync("coinName")||"2020shu"},selectCoin:function(n,t){this.coinIndex=t,this.coinid=n.id},setCoin:function(){n.setStorageSync("coinName",this.coinid),n.showToast({title:"设置成功",duration:2e3}),this.getUseCoin()}}};t.default=e}).call(this,e("543d")["default"])}},[["3094","common/runtime","common/vendor"]]]);