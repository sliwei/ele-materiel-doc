(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{816:function(e,r,t){"use strict";t.r(r);var l={name:"FormDefault",data:function(){return{forms:[{prop:"val1",label:"商品名称",type:"input",attr:{placeholder:"请输入名称"},rules:[{required:!0,message:"请输入名称",trigger:"blur"}]},{prop:"val2",label:"商品分类",type:"input",attr:{placeholder:"请选择分类"},rules:[{required:!0,message:"请选择分类",trigger:"blur"}]},{prop:"val3",label:"库存",type:"inputNum",attr:{placeholder:"请输库存"},rules:[{required:!0,message:"请输库存",trigger:"blur"}]},{prop:"val4",label:"简介",type:"textarea",attr:{placeholder:"请输入简介"}}]}},methods:{submitForm:function(e){console.log(e)},changeForm:function(e,r){console.log(e,r)}}},a=t(27),o=Object(a.a)(l,(function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("ele-materiel",{attrs:{name:"BasicsForm",forms:this.forms},on:{submitForm:this.submitForm,changeForm:this.changeForm}})],1)}),[],!1,null,null,null);r.default=o.exports}}]);