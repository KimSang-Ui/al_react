"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[870],{8870:(e,s,i)=>{i.r(s),i.d(s,{default:()=>h});var a=i(9235),n=i(7689),t=(i(9492),i(2791)),c=i(2641),l=i(2290),r=i(3014),d=i(4880),o=i(184);const h=()=>{const e=(0,n.TH)(),{info:s,productInfo:i,price:h}=e.state||{};(0,n.s0)();var p="";const[x,m]=(0,t.useState)([]),[j,u]=(0,t.useState)([]),g=async()=>{for(let s=0;s<x.length;s++){var e={alcoholname:x[s].productname,marketname:x[s].marketname};await d.Z.post("".concat(r.L,"/purchase/stockcode"),e,{}).then((e=>{j.push(e.data)})).catch((e=>{console.log(e)}))}0!==j.length&&sessionStorage.setItem("stockNum",JSON.stringify(j))};(0,t.useEffect)((()=>{(()=>{console.log(h);var e=0,s="";const a=new Date,n="".concat(a.getFullYear()+"-"+a.getMonth()+"-"+a.getDay()+" "+a.getHours()+":"+a.getMinutes()),t=Math.floor(9e5*Math.random()+1e5);for(let c=0;c<i.length;c++)e=i[c].price*i[c].amount,s+=i[c].name,x.push({image:i[c].picture,productname:i[c].name,purchaseday:n,marketname:i[c].market,amount:i[c].amount,ordernumber:t,delivery:i[c].delivery,address:i[c].address,address2:"",price:e});p=s,g()})()}),[]);return(0,o.jsx)(a.Z,{children:(0,o.jsxs)("div",{className:"pay",children:[(0,o.jsx)("div",{className:"payline1"}),(0,o.jsx)("div",{className:"buyinfo",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uc8fc\ubb38\uc815\ubcf4"})}),(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uc0c1\ud488\uc815\ubcf4"})}),(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uc0c1\ud488\uba85"})}),(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uc218\ub7c9"})}),(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uacb0\uc81c\uae08\uc561"})}),(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uc120\ud0dd\ub9e4\uc7a5"})}),(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"\uad6c\ub9e4\ubc29\uc2dd"})})]})}),(0,o.jsx)("div",{className:"payline2"}),(0,o.jsxs)("div",{className:"info",children:[(0,o.jsxs)("div",{className:"user",children:[(0,o.jsxs)("h2",{children:["\uad6c\ub9e4\uc790 : ",s.nickname]}),(0,o.jsxs)("h2",{children:["\ud734\ub300\ud3f0\ubc88\ud638 : ",s.phone]}),(0,o.jsxs)("h2",{children:["\ubc30\uc1a1\uc9c0 : ",s.address]}),(0,o.jsxs)("h2",{children:["\uc774\uba54\uc77c : ",s.email]})]}),(0,o.jsx)("div",{className:"product",children:i.map(((e,s)=>(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"product-map",children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"220px"},children:[(0,o.jsx)("img",{className:"product-info",style:{width:"100px",height:"100px"},src:e.picture,alt:"\uc774\ubbf8\uc9c0"}),(0,o.jsx)("h2",{className:"product-name",children:e.name}),(0,o.jsx)("h2",{className:"product-count",children:e.amount}),(0,o.jsx)("h2",{className:"product-price",children:e.price}),(0,o.jsx)("h2",{className:"product-market",children:e.market}),(0,o.jsx)("h2",{className:"product-way",children:e.delivery})]})})},s)))})]}),(0,o.jsx)("div",{className:"payline2"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"\uc8fc\ubb38\uae08\uc561"}),(0,o.jsx)("div",{className:"payline1"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"total",children:[(0,o.jsx)("h2",{children:"\ucd1d \uc0c1\ud488\uae08\uc561"}),(0,o.jsx)("h2",{children:"\ucd1d \ubc30\uc1a1\ube44"}),(0,o.jsx)("h2",{children:"\uacb0\uc81c\uc608\uc815\uae08\uc561"})]}),(0,o.jsx)("div",{className:"payline2"}),(0,o.jsxs)("div",{className:"total",children:[(0,o.jsxs)("h1",{children:[h,"\uc6d0"]}),(0,o.jsx)("h1",{children:"0\uc6d0"}),(0,o.jsxs)("h1",{children:[h,"\uc6d0"]})]}),(0,o.jsx)("div",{className:"payline2"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"\uacb0\uc81c\uc218\ub2e8"}),(0,o.jsx)("div",{className:"payline1"}),(0,o.jsx)("div",{className:"paybtndiv",children:(0,o.jsx)(c.ZP,{type:"primary",htmlType:"submit",style:l.zi,onClick:async()=>{const e={price:h,productname:p};await d.Z.post("".concat(r.L,"/purchase/toss"),e,{}).then((e=>{console.log(e),JSON.stringify(e.status).startsWith("2")&&(sessionStorage.setItem("basketInfo",JSON.stringify(x)),window.location.href=e.data.checkoutPage)})).catch((e=>{console.log(e)}))},children:"\ud1a0\uc2a4\uacb0\uc81c"})})]})]})})}},9492:(e,s,i)=>{i.d(s,{FR:()=>c,Nm:()=>l,Np:()=>t});var a=i(5750),n=i(6535);const t=(0,a.Z)("div",{target:"e1mcyvkm2"})({name:"bf48n3",styles:"min-width:1300px;padding:130px 330px 130px 330px"}),c=(0,a.Z)("div",{target:"e1mcyvkm1"})("position:relative;width:100%;display:flex;flex-direction:column;align-items:center;.logo{font-size:50px;font-weight:bold;padding-bottom:130px;}.email-line{position:relative;width:100%;display:flex;justify-content:space-between;align-items:center;color:",n.G.color.p800,";padding-bottom:50px;p{font-size:20px;}.line{height:2px;width:30%;background:",n.G.color.p800,";}}.login-line{position:relative;width:100%;display:flex;justify-content:space-between;align-items:center;color:",n.G.color.p800,";padding:20px 0 40px 0;p{font-size:20px;}.line{height:2px;width:30%;background:",n.G.color.p800,";}}"),l=(0,a.Z)("button",{target:"e1mcyvkm0"})("width:100%;height:60px;margin-bottom:17px;border-radius:8px;font-size:20px;color:",n.G.color.p800,";background:none;border:1px solid ",n.G.color.p500,";cursor:pointer;img{width:21px;margin-right:10px;}")}}]);
//# sourceMappingURL=870.def9a2df.chunk.js.map