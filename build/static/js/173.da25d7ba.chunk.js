"use strict";(self.webpackChunkrv18_basic=self.webpackChunkrv18_basic||[]).push([[173],{9326:(t,e,o)=>{o.d(e,{FM:()=>p,M7:()=>l,Nm:()=>i,Z1:()=>u,mi:()=>d,qL:()=>r,yS:()=>a});var s=o(5294),c=o(4880),n=o(3014);"".concat(n.L,"/main");const a=async(t,e)=>{let o;if(console.log("m-axios  :",t),console.log("s-axios  :",e),o=""!==e?e:t,o)try{const t=await s.Z.get("".concat(n.L,"/search/category?category=").concat(o));if(200===t.status)return t.data;console.log("no")}catch(c){console.log(c)}},l=async t=>{let{search:e}=t;console.log("axios-data",e);try{console.log("\uc5ec\uae30\uc624\ub098");const t=await s.Z.post("".concat(n.L,"/main/anony/contents"),e);if(console.log(t.status),200===t.status){console.log("result",t.data);return t.data}console.log("no")}catch(o){alert(o.response.data.errorMessage),console.log(o)}},r=async t=>{let{search:e}=t;console.log("axios-data",e);try{const t=await c.Z.post("".concat(n.L,"/main/contents"),e);if(200===t.status){return t.data}console.log("no")}catch(o){console.log(o)}},i=async t=>{let{code:e}=t;console.log("axios",e);const o={code:Number(e)};console.log("params  ",o);try{const t=await c.Z.post("".concat(n.L,"/detail"),o);if(200===t.status)return console.log("R : ",t.data),t.data;console.log("no")}catch(s){console.log(s)}},d=async()=>{try{const t=await c.Z.get("".concat(n.L,"/main/recent"));if(200===t.status)return console.log("\uacb0\uacfc\uac12 : ",t.data),t.data}catch(t){console.log(t)}},u=async t=>{let{code:e}=t;console.log("ax:",e);const o={code:e};try{const t=await c.Z.post("".concat(n.L,"/detail/market"),o);if(200===t.status)return t.data}catch(s){console.log(s)}},p=async t=>{let{postcard:e}=t;console.log("ax :",e);try{const t=await c.Z.post("".concat(n.L,"/shoppingbasket"),e);if(200===t.status)return console.log("result :",t.data),t.data}catch(o){console.log(o)}}},4109:(t,e,o)=>{o.d(e,{Z:()=>a});var s=o(5750),c=(o(2791),o(6535)),n=o(184);const a=t=>{let{sidenNm:e,sideId:o,active:a,onClick:l}=t;console.log("active ".concat(a)),console.log("sidenNm ".concat(a)),console.log("onClick ".concat(l));const r=(0,s.Z)("button",{target:"e1u5507y0"})("border:none;background:none;color:",a?c.G.color.f900:c.G.color.p900,";font-weight:",a?"bold":"normal",";text-decoration:",a?"underline":"none",";margin-top:20px;cursor:pointer;");return(0,n.jsx)("div",{children:(0,n.jsx)(r,{active:a,onClick:l,children:e})})}},4449:(t,e,o)=>{o.d(e,{Z:()=>n});var s=o(5750),c=(o(2791),o(184));const n=t=>{let{sideTitle:e,onClick:o}=t;const n=(0,s.Z)("div",{target:"egqonyr0"})({name:"15ilza1",styles:"margin:0 0 10px 0;p{font-size:30px;font-weight:bold;}"});return(0,c.jsx)(n,{onClick:o,children:(0,c.jsx)("p",{children:e})})}},4577:(t,e,o)=>{o.d(e,{J:()=>n});var s=o(7689),c=o(1087);const n=()=>{const t=(0,s.s0)(),[e,o]=(0,c.lr)(),n=(t,e)=>t||e,a=e.get("type")||"",l=e.get("subtype")||"",r=e.get("search")||"",i=(0,c.fW)({type:a}).toString();return{type:a,sub:l,MoveToType:e=>{console.log("type-parameter",e);let o="";if(e){const t=n(e.type,a);o=(0,c.fW)({type:t}).toString()}else o=i;t({pathname:"../list",search:o})},MoveToSearch:e=>{console.log("\uc774\uc11c\ube0c\ud30c\ub78c = ",e);let o="";if(console.log("parameter : ",e),e){const t=n(e,r);o=(0,c.fW)({search:t}).toString()}else o=i;t({pathname:"/product/list",search:o})},search:r}}},3173:(t,e,o)=>{o.r(e),o.d(e,{default:()=>m});var s=o(2791),c=o(1933),n=o(9326),a=o(8877),l=o(7689),r=o(94),i=o(4109),d=o(4449),u=o(184);const p=(t,e)=>{const o=(0,l.TH)(),c=new URLSearchParams(o.search).get("search"),n=t.type;console.log("side-search \uc785\ub2c8\ub2e4. --------- ",c);const a=(0,l.s0)(),[p,g]=(0,s.useState)([]);(0,s.useEffect)((()=>{let t;"\uc704\uc2a4\ud0a4"===n?t=y:"\uc640\uc778"===n?t=h:"\ube0c\ub79c\ub514"===n?t=m:"\ub9ac\ud050\ub974"===n?t=v:null!==c||e?t=x:console.log("No match"),console.log("result",t),g(t)}),[]);const y=["WHISKEY","ALL","\uc2f1\uae00\ubab0\ud2b8","\ube14\ub80c\ub514\ub4dc","\ubc84\ubc88"],h=["WINE","ALL","\ub808\ub4dc\uc640\uc778","\ud654\uc774\ud2b8\uc640\uc778","\uc2a4\ud30c\ud074\ub9c1 \uc640\uc778","\ub85c\uc81c \uc640\uc778"],v=["LIQUEUR","ALL"],m=["BRANDY","ALL","\uaf2c\ub0d1","\uae54\ubc14\ub3c4\uc2a4","\uc544\ub974\ub9c8\ub0d1"],x=["\uac80\uc0c9\uacb0\uacfc",""];return(0,u.jsxs)(r.K,{children:[(0,u.jsx)(d.Z,{sideTitle:"".concat(null===p||void 0===p?void 0:p[0])}),(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{className:"side-nav",children:[(0,u.jsx)(i.Z,{sidenNm:"".concat(null===p||void 0===p?void 0:p[1]),sideId:1,onClick:()=>(t=>{"\uc704\uc2a4\ud0a4"===t?a("/product/list?type=\uc704\uc2a4\ud0a4"):"\uc640\uc778"===t?a("/product/list?type=\uc640\uc778"):"\ub9ac\ud050\ub974"===t?a("/product/list?type=\ub9ac\ud050\ub974"):"\ube0c\ub79c\ub514"===t&&a("/product/list?type=\ube0c\ub79c\ub514")})(n)}),null!==p&&void 0!==p&&p[1]&&p.length>2?(0,u.jsx)(i.Z,{sidenNm:"".concat(null===p||void 0===p?void 0:p[2]),sideId:2,onClick:()=>(t=>{console.log("typeProps : ",t),"\uc704\uc2a4\ud0a4"===t?a("/product/list?type=\uc704\uc2a4\ud0a4&subtype=\uc2f1\uae00\ubab0\ud2b8"):"\uc640\uc778"===t?a("/product/list?type=\uc640\uc778&subtype=\ub808\ub4dc\uc640\uc778"):"\ube0c\ub79c\ub514"===t&&a("/product/list?type=\ube0c\ub79c\ub514&subtype=\uaf2c\ub0d1")})(n)}):"",null!==p&&void 0!==p&&p[2]&&p.length>3?(0,u.jsx)(i.Z,{sidenNm:"".concat(null===p||void 0===p?void 0:p[3]),sideId:3,onClick:()=>(t=>{console.log("typeProps : ",t),"\uc704\uc2a4\ud0a4"===t?a("/product/list?type=\uc704\uc2a4\ud0a4&subtype=\ube14\ub80c\ub514\ub4dc"):"\uc640\uc778"===t?a("/product/list?type=\uc640\uc778&subtype=\ud654\uc774\ud2b8\uc640\uc778"):"\ub9ac\ud050\ub974"===t?a("/product/list?type=\ub9ac\ud050\ub974"):"\ube0c\ub79c\ub514"===t&&a("/product/list?type=\ube0c\ub79c\ub514&subtype=\uae54\ubc14\ub3c4\uc2a4")})(n)}):"",null!==p&&void 0!==p&&p[3]&&p.length>4?(0,u.jsx)(i.Z,{sidenNm:"".concat(null===p||void 0===p?void 0:p[4]),sideId:4,onClick:()=>(t=>{console.log("typeProps : ",t),"\uc704\uc2a4\ud0a4"===t?a("/product/list?type=\uc704\uc2a4\ud0a4&subtype=\ubc84\ubc88"):"\uc640\uc778"===t?a("/product/list?type=\uc640\uc778&subtype=\uc2a4\ud30c\ud074\ub9c1\uc640\uc778"):"\ub9ac\ud050\ub974"===t?a("/product/list?type=\ub9ac\ud050\ub974"):"\ube0c\ub79c\ub514"===t&&a("/product/list?type=\ube0c\ub79c\ub514&subtype=\uc544\ub974\ub9c8\ub0d1")})(n)}):"",null!==p&&void 0!==p&&p[4]&&p.length>5?(0,u.jsx)(i.Z,{sidenNm:"".concat(null===p||void 0===p?void 0:p[5]),sideId:5,onClick:()=>(t=>{"\uc640\uc778"===t&&a("/product/list?type=\uc640\uc778&subtype=\ub85c\uc81c\uc640\uc778")})(n)}):""]})]})};var g=o(8886),y=o(724),h=o(4577),v=o(8304);o(3755),o(6130),o(4880);const m=t=>{let{test:e}=t;const{isLogin:o}=(0,y.Z)(),{type:l,sub:r,search:i,MoveToSearch:d}=(0,h.J)(),m={type:l,sub:r,search:i},x={searchcontents:i},[b,f]=(0,s.useState)(x),Z="".concat(m.type),j="".concat(m.sub),{data:L}=(0,c.useQuery)({queryKey:["product/list",m],queryFn:()=>(0,n.yS)(Z,j)}),k=m.type,[S,C]=(0,s.useState)([{code:0,name:"",price:0,ratingaverage:0,picture:""}]),w=(0,c.useMutation)({mutationFn:t=>(0,n.M7)({search:t}),onSuccess:t=>{d(b.searchcontents),C(t)},onError:()=>{}}),N=(0,c.useMutation)({mutationFn:t=>(0,n.qL)({search:t}),onSuccess:t=>{d(b.searchcontents),C(t)},onError:()=>{}}),[I,M]=(0,s.useState)(),q=()=>{o?(console.log("\uc77c\ub85c\uc654\ub0d0"),N.mutate(b)):w.mutate(b)},[E,T]=(0,s.useState)({category:""}),{data:A,refetch:F}=(0,c.useQuery)({queryKey:[],queryFn:()=>{o&&(0,n.mi)()},enabled:!1});return(0,s.useEffect)((()=>{i&&(f((t=>({...t,searchcontents:i}))),q())}),[]),(0,u.jsxs)(v.j6,{children:[(0,u.jsx)(p,{type:k,search:i}),(0,u.jsxs)(v.pE,{children:[(0,u.jsx)(g.Z,{onSearchChange:t=>(t=>{f((e=>({searchcontents:t.target.value})))})(t),searchValue:b.searchcontents,searchName:"searchcontents",searchPlaceholder:"\uac80\uc0c9\ud560 \uc8fc\ub958\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onSearchClick:q,onSelectChange:t=>(t=>{console.log("\uc120\ud0dd\ub41c \uce74\ud14c\uace0\ub9ac",t.target.value),T((e=>({...e,category:t.target.value}))),console.log("\uc120\ud0dd\ub41c \uce74\ud14c\uace0\ub9ac",E)})(t),selectValue:E.category,onRecentClick:()=>{F()}}),(0,u.jsx)("div",{}),(0,u.jsxs)(v.T5,{children:[null===L||void 0===L?void 0:L.map(((t,e)=>(0,u.jsx)(a.Z,{data:t},e))),null===S||void 0===S?void 0:S.map(((t,e)=>(0,u.jsx)(a.Z,{data:t},e)))]})]})]})}},94:(t,e,o)=>{o.d(e,{K:()=>n});var s=o(5750),c=o(6535);const n=(0,s.Z)("div",{target:"esg6vq10"})("width:10vw;margin-right:40px;hr{border:2px solid ",c.G.color.p900,";}.side-nav{font-size:16px;a{color:",c.G.color.p600,";}}")}}]);
//# sourceMappingURL=173.da25d7ba.chunk.js.map