(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["log"],{c26e:function(t,e,n){},de0b:function(t,e,n){"use strict";n("c26e")},f836:function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),c={class:"log"},l=Object(a["f"])("h1",null,"This is the intake log page",-1),b={class:"intake"},u=Object(a["f"])("caption",null,"Intake",-1),r=Object(a["f"])("tr",null,[Object(a["f"])("th",null,"Name"),Object(a["f"])("th",null,"Quantity"),Object(a["f"])("th",null,"Proteins"),Object(a["f"])("th",null,"Carbs"),Object(a["f"])("th",null,"Fats"),Object(a["f"])("th",null,"Calories"),Object(a["f"])("th",null,"Total"),Object(a["f"])("th",null,"Remove?")],-1),o=Object(a["f"])("label",{for:"name"},"Name",-1),s=Object(a["f"])("label",{for:"quantity"},"Quantity",-1),f=Object(a["f"])("label",{for:"proteins"},"Proteins",-1),i=Object(a["f"])("label",{for:"carbs"},"Carbs",-1),j=Object(a["f"])("label",{for:"fats"},"Fats",-1),O=Object(a["f"])("td",{colspan:"2"}," ",-1);function d(t,e,n,d,p,m){return Object(a["o"])(),Object(a["d"])("div",c,[l,Object(a["f"])("table",b,[u,r,(Object(a["o"])(!0),Object(a["d"])(a["a"],null,Object(a["s"])(p.eaten,(function(t,n){return Object(a["o"])(),Object(a["d"])("tr",{key:n},[Object(a["f"])("td",null,Object(a["v"])(t.name),1),Object(a["f"])("td",null,Object(a["v"])(t.quantity),1),Object(a["f"])("td",null,Object(a["v"])(t.macros.proteins),1),Object(a["f"])("td",null,Object(a["v"])(t.macros.carbs),1),Object(a["f"])("td",null,Object(a["v"])(t.macros.fats),1),Object(a["f"])("td",null,Object(a["v"])(t.macros.calories),1),Object(a["f"])("td",null,Object(a["v"])(t.calories),1),Object(a["f"])("td",null,[Object(a["f"])("button",{onClick:e[1]||(e[1]=function(){return m.removeEaten&&m.removeEaten.apply(m,arguments)})},"X")])])})),128)),Object(a["f"])("tr",null,[Object(a["f"])("td",null,[o,Object(a["A"])(Object(a["f"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return p.name=t})},null,512),[[a["x"],p.name]])]),Object(a["f"])("td",null,[s,Object(a["A"])(Object(a["f"])("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=function(t){return p.quantity=t})},null,512),[[a["x"],p.quantity]])]),Object(a["f"])("td",null,[f,Object(a["A"])(Object(a["f"])("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=function(t){return p.proteins=t})},null,512),[[a["x"],p.proteins]])]),Object(a["f"])("td",null,[i,Object(a["A"])(Object(a["f"])("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=function(t){return p.carbs=t})},null,512),[[a["x"],p.carbs]])]),Object(a["f"])("td",null,[j,Object(a["A"])(Object(a["f"])("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=function(t){return p.fats=t})},null,512),[[a["x"],p.fats]])]),O,Object(a["f"])("td",null,[Object(a["f"])("button",{onClick:e[7]||(e[7]=function(){return m.trackEaten&&m.trackEaten.apply(m,arguments)})},"Track Eaten")])])])])}var p=n("f52b"),m={data:function(){return{name:"",quantity:0,proteins:0,carbs:0,fats:0,eaten:[],interactors:{}}},methods:{getEaten:function(){this.eaten=this.$store.state.intake.eaten},trackEaten:function(){var t=this.interactors.make("track eaten");t.process({name:this.name,quantity:parseFloat(this.quantity),macros:{proteins:parseFloat(this.proteins),carbs:parseFloat(this.carbs),fats:parseFloat(this.fats)}}),this.getEaten(),this.$emit("balanceChanged")},removeEaten:function(){}},emits:["balanceChanged"],created:function(){p["a"].call(this),this.getEaten()}};n("de0b");m.render=d;e["default"]=m}}]);
//# sourceMappingURL=log.12d8e885.js.map