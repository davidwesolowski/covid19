(this["webpackJsonpcoronavirus-app"]=this["webpackJsonpcoronavirus-app"]||[]).push([[0],{213:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(12),i=r.n(o),c=r(9),d=r.n(c),s=r(15),l=r(4),u=r(10),f=r(8),p=r.n(f),b=r(1),m=r(13),h=r.n(m),g=r(71),v=r.n(g),j=r(72),y=r.n(j);var O={name:"rtbncr",styles:"display:flex;justify-content:center;grid-area:header;padding:5px 3px;@media (min-width: 768px){padding:8px;}"},x={name:"4p8pv7",styles:"filter:invert(100%);width:100%;object-fit:contain;@media (min-width: 768px){width:auto;object-fit:fill;}"},w=function(){return Object(b.e)("header",{css:O},Object(b.e)("img",{src:y.a,alt:"covid19",css:x}))},z=r(42),C=r.n(z),k=r(29),Y=r.n(k);r(54);var I={name:"1x40ru2",styles:"border:1px solid #424242;padding:5px;border-radius:15px;min-width:100%;margin-right:0;margin-bottom:5px;text-align:center;@media (min-width: 768px){flex-basis:27%;padding:10px;margin-right:10px;margin-bottom:0;p{font-size:1rem;}min-width:auto;}"},S={name:"gnspwy",styles:"font-size:1.5em !important;margin:5px 0;"},M={name:"hftq77",styles:"font-size:1.7em !important;margin:5px 0;"},L={name:"y1r802",styles:"font-size:1em !important;margin:5px 0;"},D=function(e){var t=e.title,r=e.countOverall,a=e.date,n=e.description,o=e.styleColor,i=e.countToday,c=Y()(a).tz("Europe/Warsaw").format("D MMMM YYYY, HH:mm");return Object(b.e)("div",{css:Object(b.d)(I,";border-bottom:15px solid ",o,";")},Object(b.e)("h2",{css:S},t),Object(b.e)("h1",{css:M},"Dzisiaj: ",Object(b.e)(C.a,{start:0,end:i,duration:2.75,delay:.2})),Object(b.e)("h1",{css:M},"\u0141\u0105cznie: ",Object(b.e)(C.a,{start:0,end:r,duration:2.75,delay:.2})),Object(b.e)("p",{css:L},c),Object(b.e)("p",{css:L},n))};var P={name:"1e27xhl",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;grid-area:cards;width:auto;@media (min-width: 768px){flex-direction:row;}"},F=function(e){var t=e.data,r=t.confirmed,a=t.deaths,n=t.recovered,o=t.lastUpdate,i=t.today;return r&&Object(b.e)("div",{css:P},Object(b.e)(D,{title:"Zachorowa\u0144",date:o,countToday:i.confirmed,countOverall:r.value,styleColor:"#d50000",description:"Liczba os\xf3b zara\u017conych koronawirusem"}),Object(b.e)(D,{title:"Zgon\xf3w",date:o,countToday:i.deaths,countOverall:a.value,styleColor:"#4a148c",description:"Liczba os\xf3b zmar\u0142ych z powodu koronawirusa"}),Object(b.e)(D,{title:"Wyzdrowie\u0144",date:o,countToday:i.recovered,countOverall:n.value,styleColor:"#43a047",description:"Liczba os\xf3b wyzdrowia\u0142ych z koronawirusa"}))},W=r(43),E=r(74);var A={name:"90tqdq",styles:"grid-area:countries;display:flex;align-items:center;justify-content:center;"},U={name:"162p39e",styles:"width:80%;@media (min-width: 768px){width:50%;}"},B={container:function(e){return Object(l.a)({},e,{flexBasis:"100%",color:"#fff"})},menu:function(e){return Object(l.a)({},e,{flexBasis:"100%",backgroundColor:"#616161","&:hover":{backgroundColor:"#616161"}})},singleValue:function(e){return Object(l.a)({},e,{fontSize:"1.25rem",color:"#fff"})},input:function(e){return Object(l.a)({},e,{color:"#fff",fontSize:"1.25rem"})},control:function(e){return Object(l.a)({},e,{backgroundColor:"#616161"})},indicatorsContainer:function(e){return Object(l.a)({},e,{svg:{color:"#fff"}})},option:function(e){return Object(l.a)({},e,{backgroundColor:"#616161",fontSize:"1.2rem",":hover":{backgroundColor:"#757575"}})},placeholder:function(e){return Object(l.a)({},e,{color:"#eef",fontSize:"1.25rem"})}},T=function(e){var t=e.handleOnChangeCountry,r=Object(a.useState)([{value:"\u015bwiat",label:"\u015awiat"}]),n=Object(u.a)(r,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://covid19.mathdro.id/api/countries/");case 2:t=e.sent,r=t.data.countries,a=r.map((function(e){var t=e.name;return{value:t,label:t}})),i([].concat(Object(W.a)(o),Object(W.a)(a)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(b.e)("div",{css:A},Object(b.e)("div",{css:U},Object(b.e)(E.a,{styles:B,placeholder:"Wybierz kraj",defaultValue:o[0],options:o,onChange:t})))},q=r(30),H=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://covid19.mathdro.id/api/daily");case 2:t=e.sent,r=t.data,a=r.map((function(e){return{confirmed:e.confirmed,deaths:e.deaths,reportDate:e.reportDate}})),n(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var o=r.map((function(e){return e.reportDate}));return r.length&&Object(b.e)(q.b,{data:{labels:o,datasets:[{label:"Przypadki \u015bmiertelne",borderColor:"#4a148c",backgroundColor:"rgba(74, 20, 140, 0.6)",fill:!0,borderWidth:3,data:r.map((function(e){return e.deaths.total}))},{label:"Przypadki zachorowa\u0144",borderColor:"#d50000",backgroundColor:"rgba(255,0,0,0.6)",borderWidth:3,fill:!0,data:r.map((function(e){return e.confirmed.total}))}]},options:{legend:{labels:{fontColor:"#fff",fontSize:16}},tooltips:{bodyFontSize:16,xPadding:15,yPadding:10},responsive:!0,scales:{backgroundColor:"#121212",xAxes:[{ticks:{fontColor:"rgb(255,255,255)",fontSize:14},gridLines:{color:"rgb(255,255,255, 0.2)",zeroLineColor:"rgb(255,255,255)"}}],yAxes:[{ticks:{fontColor:"rgb(255,255,255)",fontSize:14},gridLines:{color:"rgba(255,255,255, 0.2)",zeroLineColor:"rgb(255,255,255)"}}]}}})},J=function(e){var t=e.data,r=t.confirmed,a=t.deaths,n=t.recovered,o=t.lastUpdate,i={legend:{display:!1},title:{display:!0,text:"Aktualny stan, ".concat(Y()(o).tz("Europe/Warsaw").format("D MMMM YYYY")," r."),fontColor:"rgb(255,255,255)",fontSize:18},tooltips:{bodyFontSize:16,xPadding:15,yPadding:10},responsive:!0,scales:{backgroundColor:"#121212",xAxes:[{ticks:{fontColor:"rgb(255,255,255)",fontSize:12},gridLines:{color:"rgb(255,255,255, 0.2)",zeroLineColor:"rgb(255,255,255)"}}],yAxes:[{ticks:{fontColor:"rgb(255,255,255)",fontSize:12},gridLines:{color:"rgba(255,255,255, 0.2)",zeroLineColor:"rgb(255,255,255)"}}]}};return Object(b.e)(q.a,{data:{labels:["Przypadki zachorowa\u0144","Przypadki \u015bmiertelne","Wyzdrowienia"],datasets:[{label:"Ilo\u015b\u0107 os\xf3b",data:[r.value,a.value,n.value],backgroundColor:["rgba(255,0,0,0.7)","rgba(74, 20, 140, 0.7)","rgba(67, 160, 71, 0.7)"]}]},options:i})};var R={name:"ihgk8s",styles:"grid-area:chart;max-width:100%;.chartjs-render-monitor{margin-bottom:15px;}@media (min-width: 768px){.chartjs-render-monitor{margin-bottom:20px;}}"},V=function(e){var t=e.data,r=e.country;return Object(b.e)("div",{css:R},r?Object(b.e)(J,{data:t}):Object(b.e)(H,null))};var Z={name:"d14kih",styles:'display:grid;width:100%;grid-template-areas: "header" "cards" "countries" "chart";grid-template-rows:80px auto 70px 250px;grid-row-gap:10px;@media (min-width: 768px){max-width:80%;margin:0 auto;}'},G={name:"1l4w6pd",styles:"display:flex;justify-content:center;"},K={name:"4boazs",styles:"*{margin:0;padding:0;box-sizing:border-box;}body{min-width:95vw;background-color:#121212;color:#fff;}"},N={confirmed:0,deaths:0,recovered:0},Q=function(){var e=Object(a.useState)(Object(l.a)({},N,{lastUpdate:0,today:Object(l.a)({},N)})),t=Object(u.a)(e,2),r=t[0],o=t[1],i=Object(a.useState)(""),c=Object(u.a)(i,2),f=c[0],m=c[1],g=Object(a.useState)(!0),j=Object(u.a)(g,2),y=j[0],O=j[1];return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(d.a.mark((function e(){var t,r,a,n,i,c,s,l,u,b,m,g;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://covid19.mathdro.id/api",f&&(t+="/countries/".concat(f)),e.next=4,h.a.get(t);case 4:return r=e.sent,a=r.data,n=a.confirmed,i=a.deaths,c=a.recovered,s=a.lastUpdate,l="",l=p()(s).format("M-D-YYYY")===p()().format("M-D-YYYY")?p()().subtract(1,"d").format("M-D-YYYY"):p()().subtract(2,"d").add(1,"h").format("M-D-YYYY"),e.next=14,h.a.get("https://covid19.mathdro.id/api/daily/".concat(l));case 14:u=e.sent,b=u.data,m={confirmed:-1,recovered:-1,deaths:-1},m=f?b.filter((function(e){return e.countryRegion===f})).reduce((function(e,t){return{confirmed:parseInt(e.confirmed)+parseInt(t.confirmed),recovered:parseInt(e.recovered)+parseInt(t.recovered),deaths:parseInt(e.deaths)+parseInt(t.deaths)}}),{confirmed:0,recovered:0,deaths:0}):b.reduce((function(e,t){return{confirmed:parseInt(e.confirmed)+parseInt(t.confirmed),recovered:parseInt(e.recovered)+parseInt(t.recovered),deaths:parseInt(e.deaths)+parseInt(t.deaths)}}),{confirmed:0,recovered:0,deaths:0}),g={confirmed:parseInt(n.value)-m.confirmed,recovered:parseInt(c.value)-m.recovered,deaths:parseInt(i.value)-m.deaths},o({confirmed:n,deaths:i,recovered:c,lastUpdate:s,today:g}),O(!1);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f,o]),Object(b.e)(n.a.Fragment,null,Object(b.e)(b.c,{styles:K}),Object(b.e)("div",{css:Z},Object(b.e)(w,null),y?Object(b.e)("div",{css:G},Object(b.e)(v.a,{type:"Rings",color:"#00BFFF",height:300,width:300})):Object(b.e)(n.a.Fragment,null,Object(b.e)(F,{data:r}),Object(b.e)(T,{handleOnChangeCountry:function(e){"\u015bwiat"===e.value?m(""):m(e.value)}}),Object(b.e)(V,{data:r,country:f}))))};i.a.render(Object(b.e)(Q,null),document.getElementById("root"))},72:function(e,t,r){e.exports=r.p+"static/media/logo.d7265326.png"},75:function(e,t,r){e.exports=r(213)}},[[75,1,2]]]);
//# sourceMappingURL=main.0659da5d.chunk.js.map