(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||a;return n?r.a.createElement(d,u(u({ref:t},s),{},{components:n})):r.a.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var o=n(3),r=(n(0),n(114));const a={title:"Solver",custom_edit_url:null},l={unversionedId:"solver",id:"solver",isDocsHomePage:!1,title:"Solver",description:"Tactyc lets you run a solver on any output to solve for what inputs minimize, maximize or get an output to a given level. This is similar to Excel's solver, but with a simpler interface and better optimizations.",source:"@site/docs/solver.md",slug:"/solver",permalink:"/docs/solver",editUrl:null,version:"current",sidebar:"docs",previous:{title:"Monte Carlo Analysis",permalink:"/docs/monte-carlo"},next:{title:"Tactyc Spreadsheet Engine",permalink:"/docs/spreadsheet-engine"}},u=[{value:"Solver",id:"solver",children:[{value:"Inputs",id:"inputs",children:[]},{value:"Output",id:"output",children:[]}]},{value:"Solver Results",id:"solver-results",children:[{value:"Inputs",id:"inputs-1",children:[]},{value:"Output",id:"output-1",children:[]}]}],i={toc:u};function s({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tactyc lets you run a solver on any output to solve for what inputs minimize, maximize or get an output to a given level. This is similar to Excel's solver, but with a simpler interface and better optimizations."),Object(r.b)("p",null,"To access Solver, click the menu on any chart and select ",Object(r.b)("strong",{parentName:"p"},"Solver")),Object(r.b)("h2",{id:"solver"},"Solver"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solve.png",alt:"solve"})),Object(r.b)("p",null,"This will bring up the Solver modal, where you can mimize, maximize or try to solve for a specific value"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solver-modal.png",alt:"solver-modal"})),Object(r.b)("h3",{id:"inputs"},"Inputs"),Object(r.b)("p",null,"The top part lets you select what inputs you want to flex and which you want to keep fixed. By default, Solver flexes all numeric inputs, but you can fix any input by selecting ",Object(r.b)("strong",{parentName:"p"},"Type")," -> ",Object(r.b)("strong",{parentName:"p"},"Fixed"),". Text inputs have to be fixed."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Guess")," is the starting value of the input. Because Solver uses a stochastic process, you may want to guide some inputs to be around a certain level. Setting a reasonable Guess value can help you get a reasonable result. But you can always run the solver multiple times and adjust accordingly. The initial Guess values are based on the current inputs values set on your Tactyc."),Object(r.b)("h3",{id:"output"},"Output"),Object(r.b)("p",null,"The bottom section lets you select the output you're trying to solve for and what you're trying to optimize for. The options for ",Object(r.b)("strong",{parentName:"p"},"Optimize")," are ",Object(r.b)("strong",{parentName:"p"},"Equal"),", ",Object(r.b)("strong",{parentName:"p"},"Min")," or ",Object(r.b)("strong",{parentName:"p"},"Max"),". Note that min and max are not bound by anything, so if you have a linear model it may give you extreme input values."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Value")," is the value you're trying to solve for when ",Object(r.b)("strong",{parentName:"p"},"Optimize")," is set to ",Object(r.b)("strong",{parentName:"p"},"Equal")),Object(r.b)("p",null,"To run Solver, click Solve. It may take up to a minute to run."),Object(r.b)("h2",{id:"solver-results"},"Solver Results"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solver-modal-complete.png",alt:"solver-modal-complete"})),Object(r.b)("h3",{id:"inputs-1"},"Inputs"),Object(r.b)("p",null,"Once complete, the top section will show you the inputs to get to your result in the ",Object(r.b)("strong",{parentName:"p"},"Solution")," column."),Object(r.b)("h3",{id:"output-1"},"Output"),Object(r.b)("p",null,"You'll see whether is succeeded or not in the ",Object(r.b)("strong",{parentName:"p"},"Success")," field. You'll also see a ",Object(r.b)("strong",{parentName:"p"},"Score")," which tells you how far away you are from the optimal solution."),Object(r.b)("p",null,"From here, you can set the values on your dashboard or save the solution as a case. If you choose one of these options, once you close the modal, you'll see your new output result."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://du0bb4gb9kg21.cloudfront.net/documentation/solver/solver-complete.png",alt:"solver-complete"})))}s.isMDXComponent=!0}}]);