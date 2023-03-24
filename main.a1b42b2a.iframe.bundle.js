(self.webpackChunk_17_letscode=self.webpackChunk_17_letscode||[]).push([[179],{"./src/components/UI/UiButton/UiButton.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Disabled:function(){return Disabled},Light:function(){return Light},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiButton_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),classnames=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),UiButton_module=(__webpack_require__("./src/components/UI/index.css"),{button:"UiButton_button__an260",dark:"UiButton_dark__2M7r-",light:"UiButton_light__XXAQc"}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiButton=function UiButton(_ref){var text=_ref.text,onClick=_ref.onClick,disabled=_ref.disabled,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"dark":_ref$theme,classes=_ref.classes;return(0,jsx_runtime.jsx)("button",{onClick:onClick,className:classnames_default()(UiButton_module.button,UiButton_module[theme],classes),disabled:disabled,children:text})};UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:"'dark'",computed:!1},required:!1}}};var UiButton_UiButton=UiButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiButton\\UiButton.jsx"]={name:"UiButton",docgenInfo:UiButton.__docgenInfo,path:"src\\components\\UI\\UiButton\\UiButton.jsx"});var UiButton_stories={title:"Ui-Kit/UiButton",component:UiButton_UiButton},Template=function Template(args){return(0,jsx_runtime.jsx)(UiButton_UiButton,(0,objectSpread2.Z)({},args))},props={text:"Hellow",onClick:function onClick(){return console.log("Button click")},disabled:!1,classes:"",theme:"dark"},Light=Template.bind({});Light.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"light"});var Dark=Template.bind({});Dark.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"dark"});var Disabled=Template.bind({});Disabled.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{disabled:!0}),Light.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiButton {...args} />"}},Light.parameters),Dark.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiButton {...args} />"}},Dark.parameters),Disabled.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiButton {...args} />"}},Disabled.parameters);var __namedExportsOrder=["Light","Dark","Disabled"]},"./src/components/UI/UiInput/UiInput.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiInput_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var cancel=__webpack_require__.p+"static/media/cancel.00e5d25a4b7fd1eb07bef24013d98bdb.svg",UiInput_module_wrapper__input=(__webpack_require__("./src/components/UI/index.css"),"UiInput_wrapper__input__eda2X"),UiInput_module_input="UiInput_input__ImZuh",UiInput_module_clear="UiInput_clear__oMRIj",UiInput_module_clear__disabled="UiInput_clear__disabled__Mps8X",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiInput=function UiInput(_ref){var value=_ref.value,handleInputChange=_ref.handleInputChange,placeholder=_ref.placeholder,classes=_ref.classes;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(UiInput_module_wrapper__input,classes),children:[(0,jsx_runtime.jsx)("input",{type:"text",value:value,onChange:function onChange(e){return handleInputChange(e.target.value)},placeholder:placeholder,className:UiInput_module_input}),(0,jsx_runtime.jsx)("img",{onClick:function onClick(){return value&&handleInputChange("")},src:cancel,className:classnames_default()(UiInput_module_clear,!value&&UiInput_module_clear__disabled),alt:"Clear"})]})};UiInput.__docgenInfo={description:"",methods:[],displayName:"UiInput"};var UiInput_UiInput=UiInput;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiInput\\UiInput.jsx"]={name:"UiInput",docgenInfo:UiInput.__docgenInfo,path:"src\\components\\UI\\UiInput\\UiInput.jsx"});var UiInput_stories={title:"Ui-Kit/UiInput",component:UiInput_UiInput},props={value:"",handleInputChange:function handleInputChange(){return console.log("Input Change")},placeholder:"Placeholder",classes:""},Default=function Template(arg){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsx)(UiInput_UiInput,(0,objectSpread2.Z)((0,objectSpread2.Z)({},arg),{},{value:value,handleInputChange:function handleInputChange(value){setValue(value)}}))}.bind({});Default.args=(0,objectSpread2.Z)({},props),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(arg) => {\r\n    const [value, setValue] = useState('');\r\n\r\n    const handleInputChange = value => {\r\n        setValue(value);\r\n    }\r\n\r\n    return (\r\n        <UiInput\r\n            {...arg}\r\n            value={value}\r\n            handleInputChange={handleInputChange}\r\n        />\r\n    )\r\n}"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/components/UI/UiLoading/UiLoading.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Black:function(){return Black},Blue:function(){return Blue},White:function(){return White},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiLoading_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var loader_black=__webpack_require__.p+"static/media/loader-black.e08f8176ebde7efea3dde63c261a73c7.svg";var loader_white=__webpack_require__.p+"static/media/loader-white.3b2c7a4d9cb5359314b8fdb03eba5b64.svg";var loader_blue=__webpack_require__.p+"static/media/loader-blue.a228a21678d54c77113e99d4d1d26b3a.svg",UiLoading_module_loader="UiLoading_loader__o8e6i",UiLoading_module_shadow="UiLoading_shadow__v5ha4",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiLoading=function UiLoading(_ref){var _ref$theme=_ref.theme,theme=void 0===_ref$theme?"white":_ref$theme,_ref$isShadow=_ref.isShadow,isShadow=void 0===_ref$isShadow||_ref$isShadow,classes=_ref.classes,_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),loaderIcon=_useState2[0],setLoaderIcon=_useState2[1];return(0,react.useEffect)((function(){switch(theme){case"black":default:setLoaderIcon(loader_black);break;case"white":setLoaderIcon(loader_white);break;case"blue":setLoaderIcon(loader_blue)}}),[]),(0,jsx_runtime.jsx)("img",{className:classnames_default()(UiLoading_module_loader,isShadow&&UiLoading_module_shadow,classes),src:loaderIcon,alt:"Loader"})};UiLoading.__docgenInfo={description:"",methods:[],displayName:"UiLoading",props:{theme:{defaultValue:{value:"'white'",computed:!1},required:!1},isShadow:{defaultValue:{value:"true",computed:!1},required:!1}}};var UiLoading_UiLoading=UiLoading;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiLoading\\UiLoading.jsx"]={name:"UiLoading",docgenInfo:UiLoading.__docgenInfo,path:"src\\components\\UI\\UiLoading\\UiLoading.jsx"});var UiLoading_stories={title:"Ui-Kit/UiLoading",component:UiLoading_UiLoading},Template=function Template(args){return(0,jsx_runtime.jsx)(UiLoading_UiLoading,(0,objectSpread2.Z)({},args))},props={theme:"black",isShadow:!1,classes:""},Black=Template.bind({});Black.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"black"});var White=Template.bind({});White.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"white",isShadow:!0});var Blue=Template.bind({});Blue.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"blue"}),Black.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiLoading {...args} />"}},Black.parameters),White.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiLoading {...args} />"}},White.parameters),Blue.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiLoading {...args} />"}},Blue.parameters);var __namedExportsOrder=["Black","White","Blue"]},"./src/components/UI/UiVideo/UiVideo.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiVideo_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),UiVideo_module_video="UiVideo_video__Ky7Y7",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiVideo=function UiVideo(_ref){var src=_ref.src,_ref$playbackRate=_ref.playbackRate,playbackRate=void 0===_ref$playbackRate?1:_ref$playbackRate,classes=_ref.classes,videoRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){videoRef.current.playbackRate=playbackRate}),[]),(0,jsx_runtime.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,className:classnames_default()(UiVideo_module_video,classes),ref:videoRef,children:(0,jsx_runtime.jsx)("source",{src:src})})};UiVideo.__docgenInfo={description:"",methods:[],displayName:"UiVideo",props:{playbackRate:{defaultValue:{value:"1.0",computed:!1},required:!1}}};var UiVideo_UiVideo=UiVideo;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UiVideo\\UiVideo.jsx"]={name:"UiVideo",docgenInfo:UiVideo.__docgenInfo,path:"src\\components\\UI\\UiVideo\\UiVideo.jsx"});var video_namespaceObject=__webpack_require__.p+"db435084c403f6b37d4d.mp4",UiVideo_stories={title:"Ui-Kit/UiVideo",component:UiVideo_UiVideo},props={src:video_namespaceObject,playbackRate:1,classes:""},Default=function Template(args){return(0,jsx_runtime.jsx)(UiVideo_UiVideo,(0,objectSpread2.Z)({},args))}.bind({});Default.args=(0,objectSpread2.Z)({},props),Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <UiVideo {...args} />"}},Default.parameters);var __namedExportsOrder=["Default"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/UI/index.css":function(){},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/UI/UiButton/UiButton.stories.js":"./src/components/UI/UiButton/UiButton.stories.js","./components/UI/UiInput/UiInput.stories.js":"./src/components/UI/UiInput/UiInput.stories.js","./components/UI/UiLoading/UiLoading.stories.js":"./src/components/UI/UiLoading/UiLoading.stories.js","./components/UI/UiVideo/UiVideo.stories.js":"./src/components/UI/UiVideo/UiVideo.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[796],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);