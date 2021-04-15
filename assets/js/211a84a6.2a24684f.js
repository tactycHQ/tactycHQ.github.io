(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||c[m]||r;return n?i.a.createElement(d,o(o({ref:t},u),{},{components:n})):i.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(110)),l={title:"Sensitivity analysis"},o={unversionedId:"sensitivity-analysis",id:"sensitivity-analysis",isDocsHomePage:!1,title:"Sensitivity analysis",description:"The sensitivity analysis feature enables you to see how your outputs vary as two inputs are flexed. For the purpose of this help page, we will refer to the two inputs as Input 1 and Input 2",source:"@site/docs/sensitivity-analysis.md",slug:"/sensitivity-analysis",permalink:"/docs/sensitivity-analysis",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sensitivity-analysis.md",version:"current",sidebar:"docs",previous:{title:"Live Dashboard",permalink:"/docs/live-dashboard"},next:{title:"Input Contribution",permalink:"/docs/input-contribution"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The sensitivity analysis feature enables you to see how your outputs vary as two inputs are flexed. For the purpose of this help page, we will refer to the two inputs as Input 1 and Input 2")),Object(r.b)("p",null,"The sensitivity analysis page is divided into 3 modules:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Summary of output values as both Input 1 and Input 2 are flexed"),Object(r.b)("li",{parentName:"ol"},"Summary of output values as input 1 is flexed"),Object(r.b)("li",{parentName:"ol"},"Summary of output values as input 2 is flexed")),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Under ",Object(r.b)("strong",{parentName:"li"},"Configuration, s"),"et the 2 inputs you want to flex and change the flex values as you like.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/sensitivity-analysis/config.png",alt:"Config"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Run Sensitivity"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The resulting report has 3 modules."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Module 1")," shows a summary as both ",Object(r.b)("em",{parentName:"p"},"Input 1")," and ",Object(r.b)("em",{parentName:"p"},"Input 2")," are flexed. Users may be familiar with the table output as it is similar to a traditional data table from Excel.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You will be asked to confirm the output variable that Module 3 should focus on")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once selected, the table output and line chart will automatically update"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/sensitivity-analysis/sensitivity.png",alt:"Sensitivity"}))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Module 2")," will show output values flexed for ",Object(r.b)("em",{parentName:"p"},"Input 1"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sensitivity Analysis Line Chart")," at the top that shows how a given output value varies as ****Input 1 is flexed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Analysis at Various Input Values:")," The bottom half of the module shows a table summary of all outputs from the model flexed over the range of ",Object(r.b)("em",{parentName:"li"},"Input 1."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Selecting an output row from this table will set the Sensitivity Analysis Line Chart to that selected output variable"))))))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/sensitivity-analysis/chart.png",alt:"Sensitivity Chart"})),Object(r.b)("p",null,"Sensitivity Analysis Line Chart showing output values as one input is flexed"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/sensitivity-analysis/table.png",alt:"Sensitivity Table"})),Object(r.b)("p",null,"Analysis at Various Input Values"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Module 3")," is the same as Module 2, except flexed for ",Object(r.b)("em",{parentName:"p"},"Input 2")),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/sensitivity-analysis/chart2.png",alt:"Sensitivity Chart 2"})))))}p.isMDXComponent=!0}}]);