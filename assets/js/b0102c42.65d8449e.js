(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(114));const a={title:"Input Contribution",custom_edit_url:null},i={unversionedId:"input-contribution",id:"input-contribution",isDocsHomePage:!1,title:"Input Contribution",description:"The input contribution page summarizes which inputs matter the most for your outputs.",source:"@site/docs/input-contribution.md",slug:"/input-contribution",permalink:"/docs/input-contribution",editUrl:null,version:"current"},u=[{value:"Overall Methodology",id:"overall-methodology",children:[]},{value:"Usage",id:"usage",children:[{value:"Module 1",id:"module-1",children:[]},{value:"Module 2",id:"module-2",children:[]},{value:"Module 3",id:"module-3",children:[]}]}],c={toc:u};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The input contribution page summarizes which inputs matter the most for your outputs.")),Object(o.b)("h2",{id:"overall-methodology"},"Overall Methodology"),Object(o.b)("p",null,'Tactyc determines the relative importance of each input using a "variance-based sensitivity analysis" as follows:'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Let's say you have defined 6 inputs and each input has a total of 6 steps (or increments) within the lower and upper bound. This means Tactyc would have calculated a total of 6^5 = 15,625 combinations. This is the ",Object(o.b)("strong",{parentName:"li"},"solution space")," of the output variables"),Object(o.b)("li",{parentName:"ol"},"Tactyc will then *",Object(o.b)("strong",{parentName:"li"},"*compute the "),"average value of your outputs** at each input step across the entire solution space "),Object(o.b)("li",{parentName:"ol"},"Tactyc will then calculate the ",Object(o.b)("strong",{parentName:"li"},"average % change in output values")," as each input is changed from one step to another. "),Object(o.b)("li",{parentName:"ol"},"This allows Tactyc to determine the ",Object(o.b)("strong",{parentName:"li"},"average % change in output value for a 1% change in input value")),Object(o.b)("li",{parentName:"ol"},"Tactyc can now rank and determine the most influential inputs based on their respective 1% impacts on output values")),Object(o.b)("p",null,"Each of the steps above is summarized in the input contribution page for further analysis"),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"First, set an output variable to analyze from the drop down at the top of the page"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/input-contribution/output.png",alt:"Output"})),Object(o.b)("h3",{id:"module-1"},"Module 1"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Module 1")," summarizes the results of Step 5 above are summarized up front as follows. This is the relative ranking of all inputs based on their contribution % to the selected output value's variance"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/input-contribution/sensitivity.png",alt:"Sensitivity"})),Object(o.b)("h3",{id:"module-2"},"Module 2"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Module 2")," summarizes the results of Step 4 above i.e. the impact on output value for a ",Object(o.b)("strong",{parentName:"p"},"1%")," ",Object(o.b)("strong",{parentName:"p"},"increase in input values"),". Tactyc will also present inputs based on whether they are ",Object(o.b)("strong",{parentName:"p"},"positively or negatively correlated")," with the selected output variable"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/input-contribution/chart.png",alt:"Chart 1"})),Object(o.b)("h3",{id:"module-3"},"Module 3"),Object(o.b)("p",null,"Finally ",Object(o.b)("strong",{parentName:"p"},"Module 3")," summarizes the result from ",Object(o.b)("strong",{parentName:"p"},"Step 3 above")," i.e. the average % change in output values as each input value is changed. Tactyc will try to identify and summarize the trends in the output variable as input values are stepped through over their defined range to find inflection points or peaks and troughs."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/input-contribution/chart2.png",alt:"Chart 2"})))}l.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);