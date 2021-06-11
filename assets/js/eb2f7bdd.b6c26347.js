(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(112)),i={title:"Monte Carlo Analysis",custom_edit_url:null},l={unversionedId:"monte-carlo",id:"monte-carlo",isDocsHomePage:!1,title:"Monte Carlo Analysis",description:'A Monte Carlo analysis allows you to answer questions such as "What is the probability that I will  achieve my revenue target of $50 million?".',source:"@site/docs/monte-carlo.md",slug:"/monte-carlo",permalink:"/docs/monte-carlo",editUrl:null,version:"current",sidebar:"docs",previous:{title:"Sensitivity analysis",permalink:"/docs/sensitivity-analysis"},next:{title:"Tactyc Spreadsheet Engine",permalink:"/docs/spreadsheet-engine"}},c=[{value:"Default Monte Carlo Run at Load",id:"default-monte-carlo-run-at-load",children:[]},{value:"Monte Carlo Outputs",id:"monte-carlo-outputs",children:[]},{value:"Custom Monte Carlo Simulation",id:"custom-monte-carlo-simulation",children:[]},{value:"How to use Tactyc&#39;s Monte Carlo Configuration",id:"how-to-use-tactycs-monte-carlo-configuration",children:[]},{value:"Adding Monte-Carlo to your Live Dashboard",id:"adding-monte-carlo-to-your-live-dashboard",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Monte Carlo analysis allows you to answer questions such as ",Object(r.b)("strong",{parentName:"p"},'"What is the probability that I will  achieve my revenue target of $50 million?"'),". "),Object(r.b)("p",null,"A Monte Carlo analysis simply summarizes the resulting probability distribution of outputs when each of your inputs have been randomly sampled over a given range. "),Object(r.b)("h2",{id:"default-monte-carlo-run-at-load"},"Default Monte Carlo Run at Load"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When you are setting up a Tactyc, during the input selection process, Tactyc had presented you a ",Object(r.b)("strong",{parentName:"li"},"Lower Bound and Upper Bound")),Object(r.b)("li",{parentName:"ul"},"Using this range, at first load, Tactyc computed a Monte Carlo simulation on your model over 500 iterations. Each input is sampled over a normal distribution over the range defined (Lower Bound to Upper Bound)")),Object(r.b)("h2",{id:"monte-carlo-outputs"},"Monte Carlo Outputs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Probability Density Function and Histogram summarizing the results of each output")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/mc.png",alt:"Monte Carlo"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Metrics Summarizing Probabilities of Cases and Distribution Metrics")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/config.png",alt:"Configuration"})),Object(r.b)("h2",{id:"custom-monte-carlo-simulation"},"Custom Monte Carlo Simulation"),Object(r.b)("p",null,"Users can customize this Monte Carlo simulation to run their own simulations by selecting"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Number of iterations"),Object(r.b)("li",{parentName:"ul"},"Probability distribution function to be applied to each input. The choices are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Normal"),Object(r.b)("li",{parentName:"ul"},"Uniform"),Object(r.b)("li",{parentName:"ul"},"Triangular"),Object(r.b)("li",{parentName:"ul"},"Lognormal"),Object(r.b)("li",{parentName:"ul"},"Fixed (no distribution)"))),Object(r.b)("li",{parentName:"ul"},"Any parameters associated with the probability distribution (for e.g. mean and standard deviation in the case of Normal Distribution)")),Object(r.b)("h2",{id:"how-to-use-tactycs-monte-carlo-configuration"},"How to use Tactyc's Monte Carlo Configuration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the Monte Carlo configuration panel by clicking on ",Object(r.b)("strong",{parentName:"li"},"Monte Carlo Parameters"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/metrics.png",alt:"Metrics"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tactyc then iterations, probability distribution types and associated paramters for each input"),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Run")," to begin the simulation"),Object(r.b)("li",{parentName:"ul"},"Once Tactyc has finished computing, it will automatically load the results in the output charts")),Object(r.b)("h2",{id:"adding-monte-carlo-to-your-live-dashboard"},"Adding Monte-Carlo to your Live Dashboard"),Object(r.b)("p",null,"You can also add your monte-carlo distribution on a ",Object(r.b)("a",{parentName:"p",href:"live-dashboard"},"live dashboard")," by clicking the ",Object(r.b)("strong",{parentName:"p"},"...")," on\nyour live dashboard and selecting the output for which you want to include."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/monte-carlo/inline-mc.png",alt:"Live Monte-Carlo"})))}s.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=o,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||r;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);