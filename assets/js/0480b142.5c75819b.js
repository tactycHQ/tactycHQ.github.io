(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,p=d["".concat(o,".").concat(m)]||d[m]||h[m]||c;return a?n.a.createElement(p,s(s({ref:t},i),{},{components:a})):n.a.createElement(p,s({ref:t},i))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return i}));var r=a(3),n=(a(0),a(110));const c={title:"Frequently Asked Questions",custom_edit_url:null},o={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"What is a Tactyc?",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",editUrl:null,version:"current",sidebar:"docs",previous:{title:"Tactyc User Documentation",permalink:"/docs/"},next:{title:"Creating a Tactyc from Excel",permalink:"/docs/tactyc-from-excel"}},s=[{value:"What is a Tactyc?",id:"what-is-a-tactyc",children:[]},{value:"My Excel model is not in *.xls format, how can I have Tactyc process it?",id:"my-excel-model-is-not-in-xls-format-how-can-i-have-tactyc-process-it",children:[]},{value:"My Excel model is large than 5MB. How can I have Tactyc process it?",id:"my-excel-model-is-large-than-5mb-how-can-i-have-tactyc-process-it",children:[]},{value:"My model was not calculated successfully and had errors. What does this mean?",id:"my-model-was-not-calculated-successfully-and-had-errors-what-does-this-mean",children:[]},{value:"I received an error that says &quot;Sorry Tactyc is unable to render this tab&quot;. What does this mean?",id:"i-received-an-error-that-says-sorry-tactyc-is-unable-to-render-this-tab-what-does-this-mean",children:[]},{value:"My model was calculated successfully but with Warnings. What does this mean?",id:"my-model-was-calculated-successfully-but-with-warnings-what-does-this-mean",children:[]}],l={toc:s};function i({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-is-a-tactyc"},"What is a Tactyc?"),Object(n.b)("p",null,"Tactyc is an interactive dashboard that allows control and analysis of an Excel model. We call this dashboard and all its accompanying analysis.. simply a Tactyc."),Object(n.b)("h3",{id:"my-excel-model-is-not-in-xls-format-how-can-i-have-tactyc-process-it"},"My Excel model is not in *.xls format, how can I have Tactyc process it?"),Object(n.b)("p",null,"Open the Excel file in Excel 2007 or higher, and then save it again as *.xlsx. Tactyc will now be able to process it"),Object(n.b)("h3",{id:"my-excel-model-is-large-than-5mb-how-can-i-have-tactyc-process-it"},"My Excel model is large than 5MB. How can I have Tactyc process it?"),Object(n.b)("p",null,"Take a look at if your worksheets have large unused ranges (empty rows or empty columns beyond the last data cell). These can frequently bloat up a spreadsheet. ",Object(n.b)("a",{parentName:"p",href:"suitable-models"},"Here's how to fix this")),Object(n.b)("h3",{id:"my-model-was-not-calculated-successfully-and-had-errors-what-does-this-mean"},"My model was not calculated successfully and had errors. What does this mean?"),Object(n.b)("p",null,"Errors during calculation means the Excel file has features or errors in it that are beyond the parameters of what Tactyc can process today. You can click on ",Object(n.b)("strong",{parentName:"p"},"View Errors")," to see further context. Errors can be:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Formula in cells contain errors"),": If the Excel spreadsheet at the time of load already contains formulas that are in error state (i.e. #REF!, #N/A, #DIV/0 etc.), Tactyc will stop the calculation process. To be clear, if any error codes occur ",Object(n.b)("em",{parentName:"li"},"during the calculation process as input values are flexed"),", Tactyc will successfully manage those errors, but a model in its default load state should not have any error codes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tactyc is unable to process the formula in this cell"),". This can happen if this is a non-standard formula or an Excel feature (such as TABLE or advanced arrays) we haven't supported yet. Try replacing this formula and retrying."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Time out:")," Tactyc assigns approximately 15 minutes of calculation time for every model. If your model calculation process exceeds this limit, Tactyc will stop the calculation process as this is usually a sign that the model has not yet been optimized for Tactyc - or contains logic or dependency trees that are beyond Tactyc's limits (for now!)")),Object(n.b)("h3",{id:"i-received-an-error-that-says-sorry-tactyc-is-unable-to-render-this-tab-what-does-this-mean"},'I received an error that says "Sorry Tactyc is unable to render this tab". What does this mean?'),Object(n.b)("p",null,"This error can occur if"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Your Excel file is password protected. To fix this, remove the password protection from the file"),Object(n.b)("li",{parentName:"ul"},"The worksheet / tab has excess unused or empty cells with formatting. ",Object(n.b)("a",{parentName:"li",href:"suitable-models#technical-limitations"},"Here's how to fix this"))),Object(n.b)("h3",{id:"my-model-was-calculated-successfully-but-with-warnings-what-does-this-mean"},"My model was calculated successfully but with Warnings. What does this mean?"),Object(n.b)("p",null,"Warnings are not critical but meant to flag for the user issues Tactyc may have come upon during the calculation process. You can click on ",Object(n.b)("strong",{parentName:"p"},"View Warnings")," to see further context. Warnings can be:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Formula not Supported:")," This means the model uses an Excel function that Tactyc does not currently support. This may be OK if the cell / function containing that formula is not critical for calculation of the outputs. For e.g. Tactyc does not yet support the TEXT function, as TEXT functions are usually used to format texts inside a cell, but don't usually have a bearing on calculation of numerical outputs"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Use of Unbounded Range"),": Tactyc has encountered formulas that refer to unbounded ranges, for .e.g =SUM(A:A). While Tactyc can work with these, excessive use of such formulas can slow down processing and can make the underlying model prone to errors")))}i.isMDXComponent=!0}}]);