(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1024:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=(n=["\n  <JobsDBHeader country={'hk'} language={'en'} />\n  <PageBlock>\n    <Section>\n      <Card>\n        <Section header>\n          <Text screaming>Style Guide Sandbox</Text>\n        </Section>\n      </Card>\n    </Section>\n  </PageBlock>\n  <JobsDBFooter country={'hk'} language={'en'} isExpandedVersion />\n"],i=["\n  <JobsDBHeader country={'hk'} language={'en'} />\n  <PageBlock>\n    <Section>\n      <Card>\n        <Section header>\n          <Text screaming>Style Guide Sandbox</Text>\n        </Section>\n      </Card>\n    </Section>\n  </PageBlock>\n  <JobsDBFooter country={'hk'} language={'en'} isExpandedVersion />\n"],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}}))),o=r(0),c=h(o),p=h(r(1)),l=h(r(1034)),u=h(r(1035)),_=h(r(1037)),j=h(r(572)),S=h(r(1041)),d=r(1042),f=h(r(1046));r(1472),r(1475);var y=h(r(1477));function h(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,g="undefined"==typeof window?null:(m=r(1478),r(1485),m),x=(0,l.default)(s)+"\n",b=S.default.createInstance({name:"sandbox",version:1}),C=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=n=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={codeReady:!1,code:null,renderCode:null},n.storeCodeMirrorRef=function(e){n.cmRef=e},n.initialiseCode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;n.setState({codeReady:!0,code:e,renderCode:e})},n.updateCode=function(e){var t=n.props.history;n.setState({code:e}),t.replace(e?{hash:"?code="+_.default.encode(e)}:{}),b.setItem("code",e),n.validateCode(e)},n.revertCode=function(){n.updateCode(n.state.renderCode);var e=n.cmRef.codeMirror.getDoc();e.setValue(n.state.renderCode),e.setCursor(n.state.cursor)},n.validateCode=function(e){var t=n.cmRef.codeMirror;t.clearGutter(y.default.gutter);try{new d.Parser({plugins:{jsx:!0}},"<div>"+e+"</div>").parse();var r=t.getDoc().getCursor();n.setState({renderCode:e,cursor:r})}catch(e){var i=(e&&(e.message||"")).match(/\(([0-9]+):/),a=i&&i.length>=2&&i[1]&&parseInt(i[1],10)-1;if(!a)return;var s=document.createElement("div");s.classList.add(y.default.marker),s.setAttribute("title",e.message),s.addEventListener("click",n.revertCode),t.setGutterMarker(a,y.default.gutter,s)}},n.handleChange=(0,j.default)(n.updateCode,200),E(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;this.getCode().then(function(t){var r=t||x;e.initialiseCode(r),e.validateCode(r)})}},{key:"getCode",value:function(){var e=this.props.location.hash.replace(/^#/,""),t=u.default.parse(e);return t.code?Promise.resolve(_.default.decode(t.code)):b.getItem("code")}},{key:"render",value:function(){var e=this.state,t=e.codeReady,r=e.code,n=e.renderCode,i=this.props.brandedComponents;return t?c.default.createElement("div",null,c.default.createElement("div",{className:y.default.previewContainer},c.default.createElement(f.default,{code:n,brandedComponents:i})),c.default.createElement("div",{className:y.default.editorContainer},c.default.createElement(g,{ref:this.storeCodeMirrorRef,value:r,onChange:this.handleChange,options:{mode:"jsx",theme:"material",lineNumbers:!0,gutters:[y.default.gutter]}}))):null}}]),t}();C.propTypes={location:p.default.object.isRequired,history:p.default.object.isRequired,brandedComponents:p.default.object},C.displayName="Sandbox",t.default=C},1046:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),s=d(a),o=d(r(1)),c=d(r(1047)),p=d(r(1050)),l=d(r(1052)),u=d(r(1053)),_=d(r(1055)),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2)),S=d(r(1471));function d(e){return e&&e.__esModule?e:{default:e}}var f=j.StyleGuideProvider,y=[320,414,740,1024,1280],h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.code,r=e.brandedComponents,i=n({},j,r);return s.default.createElement("div",{className:S.default.root},s.default.createElement(p.default,{baseHref:"/seek-asia-style-guide/"},function(e){return y.map(function(r,n){return s.default.createElement("div",{key:r,className:S.default.frameContainer},s.default.createElement(c.default,{head:s.default.createElement("base",{href:"/seek-asia-style-guide/"}),className:S.default.frame,style:{width:r}},s.default.createElement("div",{className:S.default.frameContents},e,e&&s.default.createElement(l.default,{delay:50*(n+1)},s.default.createElement(f,{title:"SEEK Style Guide Sandbox"},s.default.createElement(u.default,{key:t},s.default.createElement(_.default,{jsx:t,initialState:{},scope:i})))))))})}))}}]),t}();h.propTypes={code:o.default.string.isRequired,brandedComponents:o.default.object},h.displayName="Preview",t.default=h},1050:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=c(i),s=c(r(1)),o=c(r(1051));function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=n=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={styleContent:""},p(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){var t=document.querySelectorAll('style, link[rel="stylesheet"]'),r=Array.from(t).map(function(t){if("STYLE"===t.nodeName)return Promise.resolve(t.innerHTML);var r=t.getAttribute("href"),n=0===r.indexOf("http")?r:(0,o.default)(e,r);return fetch(n).then(function(e){return e.text()}).catch(function(e){return console.error("Failed to load CSS from "+n,e),""})});return Promise.all(r).then(function(e){return e.join("\n")})})(this.props.baseHref).then(function(t){e.setState({styleContent:t})})}},{key:"render",value:function(){var e=this.state.styleContent;return e?this.props.children(a.default.createElement("style",{type:"text/css"},e)):this.props.children(null)}}]),t}();l.propTypes={baseHref:s.default.string,children:s.default.func.isRequired},l.defaultProps={baseHref:"/"},l.displayName="CollectStyles",t.default=l},1052:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=o(i),s=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={visible:!1},c(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({visible:!0})},0)}},{key:"render",value:function(){var e=this.props,t=e.children,r={transition:"opacity 200ms ease",transitionDelay:e.delay+"ms",opacity:this.state.visible?1:0};return a.default.createElement("div",{style:r},t)}}]),t}();p.propTypes={children:s.default.node.isRequired,delay:s.default.number},p.defaultProps={delay:0},p.displayName="Fade",t.default=p},1053:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a=p(i),s=p(r(1)),o=r(2),c=p(r(1054));function p(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={error:null,info:null},l(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.error,r=e.info,n=this.props.children;if(!t)return n;var s=r.componentStack.split("\n").filter(function(e){return/RenderJsx/.test(e)}).map(function(e){return e.replace(/ \(created by .*/g,"")}),p=s.slice(0,s.length-1);return a.default.createElement("div",{className:c.default.root},a.default.createElement(o.Section,null,a.default.createElement(o.Alert,{level:"primary",tone:"critical",message:a.default.createElement(i.Fragment,null,a.default.createElement(o.Strong,null,t.message),p.map(function(e,t){return a.default.createElement("div",{key:t},e)}))})))}}]),t}();u.propTypes={children:s.default.node.isRequired},u.displayName="CatchErrors",t.default=u},1054:function(e,t,r){e.exports={root:"CatchErrors__root___pWG_d"}},1055:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),s=l(a),o=l(r(1)),c=r(1056),p=l(r(1470));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=r.props.initialState,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.jsx,r=e.scope,i="<React.Fragment>"+(t.trim()||"<React.Fragment />")+"</React.Fragment>",a=(0,c.transform)(i).code;return(0,p.default)(a,n({},r,{React:s.default,this:this}))}}]),t}();u.displayName="RenderJsx",u.propTypes={jsx:o.default.string.isRequired,scope:o.default.object,initialState:o.default.object},u.defaultProps={scope:{},initialState:{}},u.displayName="RenderJsx",t.default=u},1067:function(e,t,r){var n={"./Binary_Property/ASCII.js":1068,"./Binary_Property/ASCII_Hex_Digit.js":1069,"./Binary_Property/Alphabetic.js":1070,"./Binary_Property/Any.js":1071,"./Binary_Property/Assigned.js":1072,"./Binary_Property/Bidi_Control.js":1073,"./Binary_Property/Bidi_Mirrored.js":1074,"./Binary_Property/Case_Ignorable.js":1075,"./Binary_Property/Cased.js":1076,"./Binary_Property/Changes_When_Casefolded.js":1077,"./Binary_Property/Changes_When_Casemapped.js":1078,"./Binary_Property/Changes_When_Lowercased.js":1079,"./Binary_Property/Changes_When_NFKC_Casefolded.js":1080,"./Binary_Property/Changes_When_Titlecased.js":1081,"./Binary_Property/Changes_When_Uppercased.js":1082,"./Binary_Property/Dash.js":1083,"./Binary_Property/Default_Ignorable_Code_Point.js":1084,"./Binary_Property/Deprecated.js":1085,"./Binary_Property/Diacritic.js":1086,"./Binary_Property/Emoji.js":1087,"./Binary_Property/Emoji_Component.js":1088,"./Binary_Property/Emoji_Modifier.js":1089,"./Binary_Property/Emoji_Modifier_Base.js":1090,"./Binary_Property/Emoji_Presentation.js":1091,"./Binary_Property/Extended_Pictographic.js":1092,"./Binary_Property/Extender.js":1093,"./Binary_Property/Grapheme_Base.js":1094,"./Binary_Property/Grapheme_Extend.js":1095,"./Binary_Property/Hex_Digit.js":1096,"./Binary_Property/IDS_Binary_Operator.js":1097,"./Binary_Property/IDS_Trinary_Operator.js":1098,"./Binary_Property/ID_Continue.js":1099,"./Binary_Property/ID_Start.js":1100,"./Binary_Property/Ideographic.js":1101,"./Binary_Property/Join_Control.js":1102,"./Binary_Property/Logical_Order_Exception.js":1103,"./Binary_Property/Lowercase.js":1104,"./Binary_Property/Math.js":1105,"./Binary_Property/Noncharacter_Code_Point.js":1106,"./Binary_Property/Pattern_Syntax.js":1107,"./Binary_Property/Pattern_White_Space.js":1108,"./Binary_Property/Quotation_Mark.js":1109,"./Binary_Property/Radical.js":1110,"./Binary_Property/Regional_Indicator.js":1111,"./Binary_Property/Sentence_Terminal.js":1112,"./Binary_Property/Soft_Dotted.js":1113,"./Binary_Property/Terminal_Punctuation.js":1114,"./Binary_Property/Unified_Ideograph.js":1115,"./Binary_Property/Uppercase.js":1116,"./Binary_Property/Variation_Selector.js":1117,"./Binary_Property/White_Space.js":1118,"./Binary_Property/XID_Continue.js":1119,"./Binary_Property/XID_Start.js":1120,"./General_Category/Cased_Letter.js":1121,"./General_Category/Close_Punctuation.js":1122,"./General_Category/Connector_Punctuation.js":1123,"./General_Category/Control.js":1124,"./General_Category/Currency_Symbol.js":1125,"./General_Category/Dash_Punctuation.js":1126,"./General_Category/Decimal_Number.js":1127,"./General_Category/Enclosing_Mark.js":1128,"./General_Category/Final_Punctuation.js":1129,"./General_Category/Format.js":1130,"./General_Category/Initial_Punctuation.js":1131,"./General_Category/Letter.js":1132,"./General_Category/Letter_Number.js":1133,"./General_Category/Line_Separator.js":1134,"./General_Category/Lowercase_Letter.js":1135,"./General_Category/Mark.js":1136,"./General_Category/Math_Symbol.js":1137,"./General_Category/Modifier_Letter.js":1138,"./General_Category/Modifier_Symbol.js":1139,"./General_Category/Nonspacing_Mark.js":1140,"./General_Category/Number.js":1141,"./General_Category/Open_Punctuation.js":1142,"./General_Category/Other.js":1143,"./General_Category/Other_Letter.js":1144,"./General_Category/Other_Number.js":1145,"./General_Category/Other_Punctuation.js":1146,"./General_Category/Other_Symbol.js":1147,"./General_Category/Paragraph_Separator.js":1148,"./General_Category/Private_Use.js":1149,"./General_Category/Punctuation.js":1150,"./General_Category/Separator.js":1151,"./General_Category/Space_Separator.js":1152,"./General_Category/Spacing_Mark.js":1153,"./General_Category/Surrogate.js":1154,"./General_Category/Symbol.js":1155,"./General_Category/Titlecase_Letter.js":1156,"./General_Category/Unassigned.js":1157,"./General_Category/Uppercase_Letter.js":1158,"./Script/Adlam.js":1159,"./Script/Ahom.js":1160,"./Script/Anatolian_Hieroglyphs.js":1161,"./Script/Arabic.js":1162,"./Script/Armenian.js":1163,"./Script/Avestan.js":1164,"./Script/Balinese.js":1165,"./Script/Bamum.js":1166,"./Script/Bassa_Vah.js":1167,"./Script/Batak.js":1168,"./Script/Bengali.js":1169,"./Script/Bhaiksuki.js":1170,"./Script/Bopomofo.js":1171,"./Script/Brahmi.js":1172,"./Script/Braille.js":1173,"./Script/Buginese.js":1174,"./Script/Buhid.js":1175,"./Script/Canadian_Aboriginal.js":1176,"./Script/Carian.js":1177,"./Script/Caucasian_Albanian.js":1178,"./Script/Chakma.js":1179,"./Script/Cham.js":1180,"./Script/Cherokee.js":1181,"./Script/Common.js":1182,"./Script/Coptic.js":1183,"./Script/Cuneiform.js":1184,"./Script/Cypriot.js":1185,"./Script/Cyrillic.js":1186,"./Script/Deseret.js":1187,"./Script/Devanagari.js":1188,"./Script/Dogra.js":1189,"./Script/Duployan.js":1190,"./Script/Egyptian_Hieroglyphs.js":1191,"./Script/Elbasan.js":1192,"./Script/Elymaic.js":1193,"./Script/Ethiopic.js":1194,"./Script/Georgian.js":1195,"./Script/Glagolitic.js":1196,"./Script/Gothic.js":1197,"./Script/Grantha.js":1198,"./Script/Greek.js":1199,"./Script/Gujarati.js":1200,"./Script/Gunjala_Gondi.js":1201,"./Script/Gurmukhi.js":1202,"./Script/Han.js":1203,"./Script/Hangul.js":1204,"./Script/Hanifi_Rohingya.js":1205,"./Script/Hanunoo.js":1206,"./Script/Hatran.js":1207,"./Script/Hebrew.js":1208,"./Script/Hiragana.js":1209,"./Script/Imperial_Aramaic.js":1210,"./Script/Inherited.js":1211,"./Script/Inscriptional_Pahlavi.js":1212,"./Script/Inscriptional_Parthian.js":1213,"./Script/Javanese.js":1214,"./Script/Kaithi.js":1215,"./Script/Kannada.js":1216,"./Script/Katakana.js":1217,"./Script/Kayah_Li.js":1218,"./Script/Kharoshthi.js":1219,"./Script/Khmer.js":1220,"./Script/Khojki.js":1221,"./Script/Khudawadi.js":1222,"./Script/Lao.js":1223,"./Script/Latin.js":1224,"./Script/Lepcha.js":1225,"./Script/Limbu.js":1226,"./Script/Linear_A.js":1227,"./Script/Linear_B.js":1228,"./Script/Lisu.js":1229,"./Script/Lycian.js":1230,"./Script/Lydian.js":1231,"./Script/Mahajani.js":1232,"./Script/Makasar.js":1233,"./Script/Malayalam.js":1234,"./Script/Mandaic.js":1235,"./Script/Manichaean.js":1236,"./Script/Marchen.js":1237,"./Script/Masaram_Gondi.js":1238,"./Script/Medefaidrin.js":1239,"./Script/Meetei_Mayek.js":1240,"./Script/Mende_Kikakui.js":1241,"./Script/Meroitic_Cursive.js":1242,"./Script/Meroitic_Hieroglyphs.js":1243,"./Script/Miao.js":1244,"./Script/Modi.js":1245,"./Script/Mongolian.js":1246,"./Script/Mro.js":1247,"./Script/Multani.js":1248,"./Script/Myanmar.js":1249,"./Script/Nabataean.js":1250,"./Script/Nandinagari.js":1251,"./Script/New_Tai_Lue.js":1252,"./Script/Newa.js":1253,"./Script/Nko.js":1254,"./Script/Nushu.js":1255,"./Script/Nyiakeng_Puachue_Hmong.js":1256,"./Script/Ogham.js":1257,"./Script/Ol_Chiki.js":1258,"./Script/Old_Hungarian.js":1259,"./Script/Old_Italic.js":1260,"./Script/Old_North_Arabian.js":1261,"./Script/Old_Permic.js":1262,"./Script/Old_Persian.js":1263,"./Script/Old_Sogdian.js":1264,"./Script/Old_South_Arabian.js":1265,"./Script/Old_Turkic.js":1266,"./Script/Oriya.js":1267,"./Script/Osage.js":1268,"./Script/Osmanya.js":1269,"./Script/Pahawh_Hmong.js":1270,"./Script/Palmyrene.js":1271,"./Script/Pau_Cin_Hau.js":1272,"./Script/Phags_Pa.js":1273,"./Script/Phoenician.js":1274,"./Script/Psalter_Pahlavi.js":1275,"./Script/Rejang.js":1276,"./Script/Runic.js":1277,"./Script/Samaritan.js":1278,"./Script/Saurashtra.js":1279,"./Script/Sharada.js":1280,"./Script/Shavian.js":1281,"./Script/Siddham.js":1282,"./Script/SignWriting.js":1283,"./Script/Sinhala.js":1284,"./Script/Sogdian.js":1285,"./Script/Sora_Sompeng.js":1286,"./Script/Soyombo.js":1287,"./Script/Sundanese.js":1288,"./Script/Syloti_Nagri.js":1289,"./Script/Syriac.js":1290,"./Script/Tagalog.js":1291,"./Script/Tagbanwa.js":1292,"./Script/Tai_Le.js":1293,"./Script/Tai_Tham.js":1294,"./Script/Tai_Viet.js":1295,"./Script/Takri.js":1296,"./Script/Tamil.js":1297,"./Script/Tangut.js":1298,"./Script/Telugu.js":1299,"./Script/Thaana.js":1300,"./Script/Thai.js":1301,"./Script/Tibetan.js":1302,"./Script/Tifinagh.js":1303,"./Script/Tirhuta.js":1304,"./Script/Ugaritic.js":1305,"./Script/Vai.js":1306,"./Script/Wancho.js":1307,"./Script/Warang_Citi.js":1308,"./Script/Yi.js":1309,"./Script/Zanabazar_Square.js":1310,"./Script_Extensions/Adlam.js":1311,"./Script_Extensions/Ahom.js":1312,"./Script_Extensions/Anatolian_Hieroglyphs.js":1313,"./Script_Extensions/Arabic.js":1314,"./Script_Extensions/Armenian.js":1315,"./Script_Extensions/Avestan.js":1316,"./Script_Extensions/Balinese.js":1317,"./Script_Extensions/Bamum.js":1318,"./Script_Extensions/Bassa_Vah.js":1319,"./Script_Extensions/Batak.js":1320,"./Script_Extensions/Bengali.js":1321,"./Script_Extensions/Bhaiksuki.js":1322,"./Script_Extensions/Bopomofo.js":1323,"./Script_Extensions/Brahmi.js":1324,"./Script_Extensions/Braille.js":1325,"./Script_Extensions/Buginese.js":1326,"./Script_Extensions/Buhid.js":1327,"./Script_Extensions/Canadian_Aboriginal.js":1328,"./Script_Extensions/Carian.js":1329,"./Script_Extensions/Caucasian_Albanian.js":1330,"./Script_Extensions/Chakma.js":1331,"./Script_Extensions/Cham.js":1332,"./Script_Extensions/Cherokee.js":1333,"./Script_Extensions/Common.js":1334,"./Script_Extensions/Coptic.js":1335,"./Script_Extensions/Cuneiform.js":1336,"./Script_Extensions/Cypriot.js":1337,"./Script_Extensions/Cyrillic.js":1338,"./Script_Extensions/Deseret.js":1339,"./Script_Extensions/Devanagari.js":1340,"./Script_Extensions/Dogra.js":1341,"./Script_Extensions/Duployan.js":1342,"./Script_Extensions/Egyptian_Hieroglyphs.js":1343,"./Script_Extensions/Elbasan.js":1344,"./Script_Extensions/Elymaic.js":1345,"./Script_Extensions/Ethiopic.js":1346,"./Script_Extensions/Georgian.js":1347,"./Script_Extensions/Glagolitic.js":1348,"./Script_Extensions/Gothic.js":1349,"./Script_Extensions/Grantha.js":1350,"./Script_Extensions/Greek.js":1351,"./Script_Extensions/Gujarati.js":1352,"./Script_Extensions/Gunjala_Gondi.js":1353,"./Script_Extensions/Gurmukhi.js":1354,"./Script_Extensions/Han.js":1355,"./Script_Extensions/Hangul.js":1356,"./Script_Extensions/Hanifi_Rohingya.js":1357,"./Script_Extensions/Hanunoo.js":1358,"./Script_Extensions/Hatran.js":1359,"./Script_Extensions/Hebrew.js":1360,"./Script_Extensions/Hiragana.js":1361,"./Script_Extensions/Imperial_Aramaic.js":1362,"./Script_Extensions/Inherited.js":1363,"./Script_Extensions/Inscriptional_Pahlavi.js":1364,"./Script_Extensions/Inscriptional_Parthian.js":1365,"./Script_Extensions/Javanese.js":1366,"./Script_Extensions/Kaithi.js":1367,"./Script_Extensions/Kannada.js":1368,"./Script_Extensions/Katakana.js":1369,"./Script_Extensions/Kayah_Li.js":1370,"./Script_Extensions/Kharoshthi.js":1371,"./Script_Extensions/Khmer.js":1372,"./Script_Extensions/Khojki.js":1373,"./Script_Extensions/Khudawadi.js":1374,"./Script_Extensions/Lao.js":1375,"./Script_Extensions/Latin.js":1376,"./Script_Extensions/Lepcha.js":1377,"./Script_Extensions/Limbu.js":1378,"./Script_Extensions/Linear_A.js":1379,"./Script_Extensions/Linear_B.js":1380,"./Script_Extensions/Lisu.js":1381,"./Script_Extensions/Lycian.js":1382,"./Script_Extensions/Lydian.js":1383,"./Script_Extensions/Mahajani.js":1384,"./Script_Extensions/Makasar.js":1385,"./Script_Extensions/Malayalam.js":1386,"./Script_Extensions/Mandaic.js":1387,"./Script_Extensions/Manichaean.js":1388,"./Script_Extensions/Marchen.js":1389,"./Script_Extensions/Masaram_Gondi.js":1390,"./Script_Extensions/Medefaidrin.js":1391,"./Script_Extensions/Meetei_Mayek.js":1392,"./Script_Extensions/Mende_Kikakui.js":1393,"./Script_Extensions/Meroitic_Cursive.js":1394,"./Script_Extensions/Meroitic_Hieroglyphs.js":1395,"./Script_Extensions/Miao.js":1396,"./Script_Extensions/Modi.js":1397,"./Script_Extensions/Mongolian.js":1398,"./Script_Extensions/Mro.js":1399,"./Script_Extensions/Multani.js":1400,"./Script_Extensions/Myanmar.js":1401,"./Script_Extensions/Nabataean.js":1402,"./Script_Extensions/Nandinagari.js":1403,"./Script_Extensions/New_Tai_Lue.js":1404,"./Script_Extensions/Newa.js":1405,"./Script_Extensions/Nko.js":1406,"./Script_Extensions/Nushu.js":1407,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":1408,"./Script_Extensions/Ogham.js":1409,"./Script_Extensions/Ol_Chiki.js":1410,"./Script_Extensions/Old_Hungarian.js":1411,"./Script_Extensions/Old_Italic.js":1412,"./Script_Extensions/Old_North_Arabian.js":1413,"./Script_Extensions/Old_Permic.js":1414,"./Script_Extensions/Old_Persian.js":1415,"./Script_Extensions/Old_Sogdian.js":1416,"./Script_Extensions/Old_South_Arabian.js":1417,"./Script_Extensions/Old_Turkic.js":1418,"./Script_Extensions/Oriya.js":1419,"./Script_Extensions/Osage.js":1420,"./Script_Extensions/Osmanya.js":1421,"./Script_Extensions/Pahawh_Hmong.js":1422,"./Script_Extensions/Palmyrene.js":1423,"./Script_Extensions/Pau_Cin_Hau.js":1424,"./Script_Extensions/Phags_Pa.js":1425,"./Script_Extensions/Phoenician.js":1426,"./Script_Extensions/Psalter_Pahlavi.js":1427,"./Script_Extensions/Rejang.js":1428,"./Script_Extensions/Runic.js":1429,"./Script_Extensions/Samaritan.js":1430,"./Script_Extensions/Saurashtra.js":1431,"./Script_Extensions/Sharada.js":1432,"./Script_Extensions/Shavian.js":1433,"./Script_Extensions/Siddham.js":1434,"./Script_Extensions/SignWriting.js":1435,"./Script_Extensions/Sinhala.js":1436,"./Script_Extensions/Sogdian.js":1437,"./Script_Extensions/Sora_Sompeng.js":1438,"./Script_Extensions/Soyombo.js":1439,"./Script_Extensions/Sundanese.js":1440,"./Script_Extensions/Syloti_Nagri.js":1441,"./Script_Extensions/Syriac.js":1442,"./Script_Extensions/Tagalog.js":1443,"./Script_Extensions/Tagbanwa.js":1444,"./Script_Extensions/Tai_Le.js":1445,"./Script_Extensions/Tai_Tham.js":1446,"./Script_Extensions/Tai_Viet.js":1447,"./Script_Extensions/Takri.js":1448,"./Script_Extensions/Tamil.js":1449,"./Script_Extensions/Tangut.js":1450,"./Script_Extensions/Telugu.js":1451,"./Script_Extensions/Thaana.js":1452,"./Script_Extensions/Thai.js":1453,"./Script_Extensions/Tibetan.js":1454,"./Script_Extensions/Tifinagh.js":1455,"./Script_Extensions/Tirhuta.js":1456,"./Script_Extensions/Ugaritic.js":1457,"./Script_Extensions/Vai.js":1458,"./Script_Extensions/Wancho.js":1459,"./Script_Extensions/Warang_Citi.js":1460,"./Script_Extensions/Yi.js":1461,"./Script_Extensions/Zanabazar_Square.js":1462,"./index.js":1463,"./unicode-version.js":1464};function i(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=1067},1471:function(e,t,r){e.exports={root:"Preview__root___3YBFl",frameContainer:"Preview__frameContainer___3D1uZ",frame:"Preview__frame___3U0HN",frameContents:"Preview__frameContents___8Etlt"}},1477:function(e,t,r){e.exports={previewContainer:"Sandbox__previewContainer___1j1gL",editorContainer:"Sandbox__editorContainer___2ayaD",gutter:"Sandbox__gutter___1o76I",marker:"Sandbox__marker___21uq_"}}}]);