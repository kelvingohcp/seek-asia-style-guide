webpackJsonp([0],{531:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),l=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}(["\n  <JobsDBHeader country={'hk'} language={'en'} />\n  <PageBlock>\n    <Section>\n      <Card>\n        <Section header>\n          <Text screaming>Style Guide Sandbox</Text>\n        </Section>\n      </Card>\n    </Section>\n  </PageBlock>\n  <JobsDBFooter country={'hk'} language={'en'} isExpandedVersion />\n"],["\n  <JobsDBHeader country={'hk'} language={'en'} />\n  <PageBlock>\n    <Section>\n      <Card>\n        <Section header>\n          <Text screaming>Style Guide Sandbox</Text>\n        </Section>\n      </Card>\n    </Section>\n  </PageBlock>\n  <JobsDBFooter country={'hk'} language={'en'} isExpandedVersion />\n"]),s=n(0),u=t(s),d=n(1),f=t(d),p=n(532),m=t(p),b=n(533),h=t(b),g=n(534),v=t(g),y=n(152),C=t(y),w=n(535),M=t(w),k=n(536),_=n(545),x=t(_);n(552),n(555);var O=n(557),j=t(O),E="undefined"==typeof window?null:function(){var e=n(541);return n(542),e}(),S=(0,m.default)(l)+"\n",P=M.default.createInstance({name:"sandbox",version:1}),R=function(e){function r(){var e,n,t,a;o(this,r);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=t=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),t.state={codeReady:!1,code:null,renderCode:null},t.storeCodeMirrorRef=function(e){t.cmRef=e},t.initialiseCode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;t.setState({codeReady:!0,code:e,renderCode:e})},t.updateCode=function(e){var r=t.props.history;t.setState({code:e}),r.replace(e?{hash:"?code="+v.default.encode(e)}:{}),P.setItem("code",e),t.validateCode(e)},t.revertCode=function(){t.updateCode(t.state.renderCode);var e=t.cmRef.codeMirror.getDoc();e.setValue(t.state.renderCode),e.setCursor(t.state.cursor)},t.validateCode=function(e){var r=t.cmRef.codeMirror;r.clearGutter(j.default.gutter);try{new k.Parser({plugins:{jsx:!0}},"<div>"+e+"</div>").parse();var n=r.getDoc().getCursor();t.setState({renderCode:e,cursor:n})}catch(e){var o=e&&(e.message||""),i=o.match(/\(([0-9]+):/),a=i&&i.length>=2&&i[1]&&parseInt(i[1],10)-1;if(!a)return;var c=document.createElement("div");c.classList.add(j.default.marker),c.setAttribute("title",e.message),c.addEventListener("click",t.revertCode),r.setGutterMarker(a,j.default.gutter,c)}},t.handleChange=(0,C.default)(t.updateCode,200),a=n,i(t,a)}return a(r,e),c(r,[{key:"componentDidMount",value:function(){var e=this;this.getCode().then(function(r){var n=r||S;e.initialiseCode(n),e.validateCode(n)})}},{key:"getCode",value:function(){var e=this.props.location,r=e.hash.replace(/^#/,""),n=h.default.parse(r);return n.code?Promise.resolve(v.default.decode(n.code)):P.getItem("code")}},{key:"render",value:function(){var e=this.state,r=e.codeReady,n=e.code,t=e.renderCode,o=this.props.brandedComponents;return r?u.default.createElement("div",null,u.default.createElement("div",{className:j.default.previewContainer},u.default.createElement(x.default,{code:t,brandedComponents:o})),u.default.createElement("div",{className:j.default.editorContainer},u.default.createElement(E,{ref:this.storeCodeMirrorRef,value:n,onChange:this.handleChange,options:{mode:"jsx",theme:"material",lineNumbers:!0,gutters:[j.default.gutter]}}))):null}}]),r}(s.Component);R.propTypes={location:f.default.object.isRequired,history:f.default.object.isRequired,brandedComponents:f.default.object},R.displayName="Sandbox",r.default=R},543:function(e,r){function n(e,r){var n=e[1]||"",o=e[3];if(!o)return n;if(r&&"function"==typeof btoa){var i=t(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function t(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var r=[];return r.toString=function(){return this.map(function(r){var t=n(r,e);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&t[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),r.push(a))}},r}},544:function(e,r,n){function t(e,r){for(var n=0;n<e.length;n++){var t=e[n],o=m[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(u(t.parts[i],r))}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(u(t.parts[i],r));m[t.id]={id:t.id,refs:1,parts:a}}}}function o(e,r){for(var n=[],t={},o=0;o<e.length;o++){var i=e[o],a=r.base?i[0]+r.base:i[0],c=i[1],l=i[2],s=i[3],u={css:c,media:l,sourceMap:s};t[a]?t[a].parts.push(u):n.push(t[a]={id:a,parts:[u]})}return n}function i(e,r){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=y[y.length-1];if("top"===e.insertAt)t?t.nextSibling?n.insertBefore(r,t.nextSibling):n.appendChild(r):n.insertBefore(r,n.firstChild),y.push(r);else if("bottom"===e.insertAt)n.appendChild(r);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=h(e.insertInto+" "+e.insertAt.before);n.insertBefore(r,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var r=y.indexOf(e);r>=0&&y.splice(r,1)}function c(e){var r=document.createElement("style");return e.attrs.type="text/css",s(r,e.attrs),i(e,r),r}function l(e){var r=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(r,e.attrs),i(e,r),r}function s(e,r){Object.keys(r).forEach(function(n){e.setAttribute(n,r[n])})}function u(e,r){var n,t,o,i;if(r.transform&&e.css){if(!(i=r.transform(e.css)))return function(){};e.css=i}if(r.singleton){var s=v++;n=g||(g=c(r)),t=d.bind(null,n,s,!1),o=d.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(r),t=p.bind(null,n,r),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(r),t=f.bind(null,n),o=function(){a(n)});return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}function d(e,r,n,t){var o=n?"":t.css;if(e.styleSheet)e.styleSheet.cssText=w(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function f(e,r){var n=r.css,t=r.media;if(t&&e.setAttribute("media",t),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,r,n){var t=n.css,o=n.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(t=C(t)),o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var m={},b=function(e){var r;return function(){return void 0===r&&(r=e.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var r={};return function(n){if(void 0===r[n]){var t=e.call(this,n);if(t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[n]=t}return r[n]}}(function(e){return document.querySelector(e)}),g=null,v=0,y=[],C=n(554);e.exports=function(e,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},r.attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=b()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var n=o(e,r);return t(n,r),function(e){for(var i=[],a=0;a<n.length;a++){var c=n[a],l=m[c.id];l.refs--,i.push(l)}if(e){t(o(e,r),r)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete m[l.id]}}}};var w=function(){var e=[];return function(r,n){return e[r]=n,e.filter(Boolean).join("\n")}}()},545:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),s=n(0),u=t(s),d=n(1),f=t(d),p=n(537),m=t(p),b=n(546),h=t(b),g=n(547),v=t(g),y=n(548),C=t(y),w=n(550),M=t(w),k=n(4),_=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}(k),x=n(551),O=t(x),j=_.StyleGuideProvider,E=[320,414,740,1024,1280],S=function(e){function r(){return o(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,e),l(r,[{key:"render",value:function(){var e=this.props,r=e.code,n=e.brandedComponents,t=c({},_,n);return u.default.createElement("div",{className:O.default.root},u.default.createElement(h.default,{baseHref:"/seek-asia-style-guide/"},function(e){return E.map(function(n,o){return u.default.createElement("div",{key:n,className:O.default.frameContainer},u.default.createElement(m.default,{head:u.default.createElement("base",{href:"/seek-asia-style-guide/"}),className:O.default.frame,style:{width:n}},u.default.createElement("div",{className:O.default.frameContents},e,e&&u.default.createElement(v.default,{delay:50*(o+1)},u.default.createElement(j,{title:"SEEK Style Guide Sandbox"},u.default.createElement(C.default,{key:r},u.default.createElement(M.default,{jsx:r,initialState:{},scope:t})))))))})}))}}]),r}(s.Component);S.propTypes={code:f.default.string.isRequired,brandedComponents:f.default.object},S.displayName="Preview",r.default=S},546:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),l=n(0),s=t(l),u=n(1),d=t(u),f=n(538),p=t(f),m=function(e){var r=document.querySelectorAll('style, link[rel="stylesheet"]'),n=Array.from(r).map(function(r){if("STYLE"===r.nodeName)return Promise.resolve(r.innerHTML);var n=r.getAttribute("href"),t=0===n.indexOf("http")?n:(0,p.default)(e,n);return fetch(t).then(function(e){return e.text()}).catch(function(e){return console.error("Failed to load CSS from "+t,e),""})});return Promise.all(n).then(function(e){return e.join("\n")})},b=function(e){function r(){var e,n,t,a;o(this,r);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=t=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),t.state={styleContent:""},a=n,i(t,a)}return a(r,e),c(r,[{key:"componentDidMount",value:function(){var e=this,r=this.props.baseHref;m(r).then(function(r){e.setState({styleContent:r})})}},{key:"render",value:function(){var e=this.state.styleContent;return e?this.props.children(s.default.createElement("style",{type:"text/css"},e)):this.props.children(null)}}]),r}(l.Component);b.propTypes={baseHref:d.default.string,children:d.default.func.isRequired},b.defaultProps={baseHref:"/"},b.displayName="CollectStyles",r.default=b},547:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),l=n(0),s=t(l),u=n(1),d=t(u),f=function(e){function r(){var e,n,t,a;o(this,r);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=t=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),t.state={visible:!1},a=n,i(t,a)}return a(r,e),c(r,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({visible:!0})},0)}},{key:"render",value:function(){var e=this.props,r=e.children,n=e.delay,t=this.state.visible,o={transition:"opacity 200ms ease",transitionDelay:n+"ms",opacity:t?1:0};return s.default.createElement("div",{style:o},r)}}]),r}(l.Component);f.propTypes={children:d.default.node.isRequired,delay:d.default.number},f.defaultProps={delay:0},f.displayName="Fade",r.default=f},548:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var c=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),l=n(0),s=t(l),u=n(1),d=t(u),f=n(4),p=n(549),m=t(p),b=function(e){function r(){var e,n,t,a;o(this,r);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=t=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),t.state={error:null,info:null},a=n,i(t,a)}return a(r,e),c(r,[{key:"componentDidCatch",value:function(e,r){this.setState({error:e,info:r})}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.info,t=this.props.children;if(!r)return t;var o=n.componentStack.split("\n").filter(function(e){return/RenderJsx/.test(e)}).map(function(e){return e.replace(/ \(created by .*/g,"")}),i=o.slice(0,o.length-1);return s.default.createElement("div",{className:m.default.root},s.default.createElement(f.Section,null,s.default.createElement(f.Alert,{level:"primary",tone:"critical",message:s.default.createElement(l.Fragment,null,s.default.createElement(f.Strong,null,r.message),i.map(function(e,r){return s.default.createElement("div",{key:r},e)}))})))}}]),r}(l.Component);b.propTypes={children:d.default.node.isRequired},b.displayName="CatchErrors",r.default=b},549:function(e,r){e.exports={root:"CatchErrors__root___pWG_d"}},550:function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),s=n(0),u=t(s),d=n(1),f=t(d),p=n(539),m=n(540),b=t(m),h=function(e){function r(e){o(this,r);var n=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return n.state=n.props.initialState,n}return a(r,e),l(r,[{key:"render",value:function(){var e=this.props,r=e.jsx,n=e.scope,t="<React.Fragment>"+(r.trim()||"<React.Fragment />")+"</React.Fragment>",o=(0,p.transform)(t),i=o.code;return(0,b.default)(i,c({},n,{React:u.default,this:this}))}}]),r}(s.Component);h.displayName="RenderJsx",h.propTypes={jsx:f.default.string.isRequired,scope:f.default.object,initialState:f.default.object},h.defaultProps={scope:{},initialState:{}},h.displayName="RenderJsx",r.default=h},551:function(e,r){e.exports={root:"Preview__root___3YBFl",frameContainer:"Preview__frameContainer___3D1uZ",frame:"Preview__frame___3U0HN",frameContents:"Preview__frameContents___8Etlt"}},552:function(e,r,n){var t=n(553);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0};o.transform=void 0;n(544)(t,o);t.locals&&(e.exports=t.locals)},553:function(e,r,n){r=e.exports=n(543)(!1),r.push([e.i,"/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",""])},554:function(e,r){e.exports=function(e){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=r.protocol+"//"+r.host,t=n+r.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,r){var o=r.trim().replace(/^"(.*)"$/,function(e,r){return r}).replace(/^'(.*)'$/,function(e,r){return r});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:t+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},555:function(e,r,n){var t=n(556);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0};o.transform=void 0;n(544)(t,o);t.locals&&(e.exports=t.locals)},556:function(e,r,n){r=e.exports=n(543)(!1),r.push([e.i,"/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n.cm-s-material .CodeMirror-guttermarker, .cm-s-material .CodeMirror-guttermarker-subtle, .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n.cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n.cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::selection, .cm-s-material .CodeMirror-line > span::selection, .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-material .CodeMirror-line::-moz-selection, .cm-s-material .CodeMirror-line > span::-moz-selection, .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n.cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-variable-2 { color: #80CBC4; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #82B1FF; }\n.cm-s-material .cm-builtin { color: #DECB6B; }\n.cm-s-material .cm-atom { color: #F77669; }\n.cm-s-material .cm-number { color: #F77669; }\n.cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n.cm-s-material .cm-string { color: #C3E88D; }\n.cm-s-material .cm-string-2 { color: #80CBC4; }\n.cm-s-material .cm-comment { color: #546E7A; }\n.cm-s-material .cm-variable { color: #82B1FF; }\n.cm-s-material .cm-tag { color: #80CBC4; }\n.cm-s-material .cm-meta { color: #80CBC4; }\n.cm-s-material .cm-attribute { color: #FFCB6B; }\n.cm-s-material .cm-property { color: #80CBAE; }\n.cm-s-material .cm-qualifier { color: #DECB6B; }\n.cm-s-material .cm-variable-3, .cm-s-material .cm-type { color: #DECB6B; }\n.cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",""])},557:function(e,r){e.exports={previewContainer:"Sandbox__previewContainer___1j1gL",editorContainer:"Sandbox__editorContainer___2ayaD",gutter:"Sandbox__gutter___1o76I",marker:"Sandbox__marker___21uq_"}}});