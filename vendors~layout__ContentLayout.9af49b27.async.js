(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{L9jI:function(e,t,n){"use strict";e.exports="/__open-stack-frame-in-editor"},xvq9:function(e,t,n){"use strict";n.d(t,"a",(function(){return he}));var i=n("q1tI"),o="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function r(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function a(e,t){for(var n=t.slice(0,t.length-1),i=0;i<n.length;i++)n[i]=e[n[i].toLowerCase()];return n}function d(e){"string"!==typeof e&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function l(e,t){for(var n=e.length>=t.length?e:t,i=e.length>=t.length?t:e,o=!0,r=0;r<n.length;r++)-1===i.indexOf(n[r])&&(o=!1);return o}for(var s={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":o?173:189,"=":o?61:187,";":o?59:186,"'":222,"[":219,"]":221,"\\":220},c={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},p={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},u={16:!1,18:!1,17:!1,91:!1},h={},f=1;f<20;f++)s["f".concat(f)]=111+f;var v=[],m=!1,g="all",b=[],y=function(e){return s[e.toLowerCase()]||c[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function w(e){g=e||"all"}function E(){return g||"all"}function O(){return v.slice(0)}function _(e){var t=e.target||e.srcElement,n=t.tagName,i=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(i=!1),i}function k(e){return"string"===typeof e&&(e=y(e)),-1!==v.indexOf(e)}function x(e,t){var n,i;for(var o in e||(e=E()),h)if(Object.prototype.hasOwnProperty.call(h,o))for(n=h[o],i=0;i<n.length;)n[i].scope===e?n.splice(i,1):i++;E()===e&&w(t||"all")}function C(e){var t=e.keyCode||e.which||e.charCode,n=v.indexOf(t);if(n>=0&&v.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&v.splice(0,v.length),93!==t&&224!==t||(t=91),t in u)for(var i in u[t]=!1,c)c[i]===t&&(T[i]=!1)}function I(e){if("undefined"===typeof e)Object.keys(h).forEach((function(e){return delete h[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&L(e)}));else if("object"===typeof e)e.key&&L(e);else if("string"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var o=n[0],r=n[1];"function"===typeof o&&(r=o,o=""),L({key:e,scope:o,method:r,splitKey:"+"})}}var L=function(e){var t=e.key,n=e.scope,i=e.method,o=e.splitKey,r=void 0===o?"+":o,s=d(t);s.forEach((function(e){var t=e.split(r),o=t.length,d=t[o-1],s="*"===d?"*":y(d);if(h[s]){n||(n=E());var p=o>1?a(c,t):[];h[s]=h[s].filter((function(e){var t=!i||e.method===i;return!(t&&e.scope===n&&l(e.mods,p))}))}}))};function N(e,t,n,i){var o;if(t.element===i&&(t.scope===n||"all"===t.scope)){for(var r in o=t.mods.length>0,u)Object.prototype.hasOwnProperty.call(u,r)&&(!u[r]&&t.mods.indexOf(+r)>-1||u[r]&&-1===t.mods.indexOf(+r))&&(o=!1);(0!==t.mods.length||u[16]||u[18]||u[17]||u[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function P(e,t){var n=h["*"],i=e.keyCode||e.which||e.charCode;if(T.filter.call(this,e)){if(93!==i&&224!==i||(i=91),-1===v.indexOf(i)&&229!==i&&v.push(i),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=p[t];e[t]&&-1===v.indexOf(n)?v.push(n):!e[t]&&v.indexOf(n)>-1?v.splice(v.indexOf(n),1):"metaKey"===t&&e[t]&&3===v.length&&(e.ctrlKey||e.shiftKey||e.altKey||(v=v.slice(v.indexOf(n))))})),i in u){for(var o in u[i]=!0,c)c[o]===i&&(T[o]=!0);if(!n)return}for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&(u[r]=e[p[r]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===v.indexOf(17)&&v.push(17),-1===v.indexOf(18)&&v.push(18),u[17]=!0,u[18]=!0);var a=E();if(n)for(var d=0;d<n.length;d++)n[d].scope===a&&("keydown"===e.type&&n[d].keydown||"keyup"===e.type&&n[d].keyup)&&N(e,n[d],a,t);if(i in h)for(var l=0;l<h[i].length;l++)if(("keydown"===e.type&&h[i][l].keydown||"keyup"===e.type&&h[i][l].keyup)&&h[i][l].key){for(var s=h[i][l],f=s.splitKey,m=s.key.split(f),g=[],b=0;b<m.length;b++)g.push(y(m[b]));g.sort().join("")===v.sort().join("")&&N(e,s,a,t)}}}function j(e){return b.indexOf(e)>-1}function T(e,t,n){v=[];var i=d(e),o=[],l="all",s=document,p=0,u=!1,f=!0,g="+",w=!1;for(void 0===n&&"function"===typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(l=t.scope),t.element&&(s=t.element),t.keyup&&(u=t.keyup),void 0!==t.keydown&&(f=t.keydown),void 0!==t.capture&&(w=t.capture),"string"===typeof t.splitKey&&(g=t.splitKey)),"string"===typeof t&&(l=t);p<i.length;p++)e=i[p].split(g),o=[],e.length>1&&(o=a(c,e)),e=e[e.length-1],e="*"===e?"*":y(e),e in h||(h[e]=[]),h[e].push({keyup:u,keydown:f,scope:l,mods:o,shortcut:i[p],method:n,key:i[p],splitKey:g,element:s});"undefined"!==typeof s&&!j(s)&&window&&(b.push(s),r(s,"keydown",(function(e){P(e,s)}),w),m||(m=!0,r(window,"focus",(function(){v=[]}),w)),r(s,"keyup",(function(e){P(e,s),C(e)}),w))}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(h).forEach((function(n){var i=h[n].find((function(n){return n.scope===t&&n.shortcut===e}));i&&i.method&&i.method()}))}var R={setScope:w,getScope:E,deleteScope:x,getPressedKeyCodes:O,isPressed:k,filter:_,trigger:S,unbind:I,keyMap:s,modifier:c,modifierMap:p};for(var D in R)Object.prototype.hasOwnProperty.call(R,D)&&(T[D]=R[D]);if("undefined"!==typeof window){var K=window.hotkeys;T.noConflict=function(e){return e&&window.hotkeys===T&&(window.hotkeys=K),T},window.hotkeys=T}let $=new Set;function W(e){function t(){n(window)}function n(e){e&&"function"===typeof e.addEventListener&&(e.addEventListener("click",r,!0),e.addEventListener("mousedown",a,!0),e.addEventListener("mouseover",a,!0),e.addEventListener("mouseup",a,!0),e.addEventListener("pointerdown",d,!0),e.addEventListener("pointerover",l,!0),e.addEventListener("pointerup",s,!0))}function i(){o(window),$.forEach((function(e){try{o(e.contentWindow)}catch(t){}})),$=new Set}function o(e){e&&"function"===typeof e.removeEventListener&&(e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",a,!0),e.removeEventListener("mouseover",a,!0),e.removeEventListener("mouseup",a,!0),e.removeEventListener("pointerdown",d,!0),e.removeEventListener("pointerover",l,!0),e.removeEventListener("pointerup",s,!0))}function r(t){var n;t.preventDefault(),t.stopPropagation(),i(),null===(n=e.onClick)||void 0===n||n.call(e,t.target)}function a(e){e.preventDefault(),e.stopPropagation()}function d(e){e.preventDefault(),e.stopPropagation()}function l(t){var i;t.preventDefault(),t.stopPropagation();const o=t.target;if("IFRAME"===o.tagName){const e=o;try{if(!$.has(e)){const t=e.contentWindow;n(t),$.add(e)}}catch(r){}}null===(i=e.onPointerOver)||void 0===i||i.call(e,t.target)}function s(e){e.preventDefault(),e.stopPropagation()}return t(),i}var B=n("L9jI"),A=n.n(B),M=n("s4NR"),F=n.n(M);const V=e=>"string"===typeof(null===e||void 0===e?void 0:e.type),G=e=>{var t;return"symbol"===typeof(null===(t=null===e||void 0===e?void 0:e.type)||void 0===t?void 0:t.$$typeof)},z=e=>{var t;return(null===(t=null===e||void 0===e?void 0:e.type)||void 0===t?void 0:t.$$typeof)===Symbol.for("react.forward_ref")},Y=e=>{const t=Object.keys(e).find((e=>e.startsWith("__reactInternalInstance$")||e.startsWith("__reactFiber$")));if(t)return e[t]},H=e=>{if(!e)return;const t=Y(e);return t||H(e.parentElement)},X=e=>{let t=e.return;while(t){if(!G(t))return t;t=t.return}return null},q=e=>{const t=null===e||void 0===e?void 0:e.type;if(!t)return;const{displayName:n,name:i}=t;return"string"===typeof n?n:"string"===typeof i?i:void 0},J=e=>{if(!(null===e||void 0===e?void 0:e._debugSource))return;const{fileName:t,lineNumber:n,columnNumber:i}=e._debugSource;return t&&n?{lineNumber:String(n),columnNumber:String(null!==i&&void 0!==i?i:1),absolutePath:t}:void 0},U=e=>{if(!(null===e||void 0===e?void 0:e.pendingProps))return;const{"data-inspector-line":t,"data-inspector-column":n,"data-inspector-relative-path":i}=e.pendingProps;return t&&n&&i?{lineNumber:t,columnNumber:n,relativePath:i}:void 0},Q=e=>{var t;return null!==(t=U(e))&&void 0!==t?t:J(e)},Z=e=>{if(!e)return;const t=X(e);if(!t)return;const n=V(t),i=!t.child.sibling;let o=!n&&i?t:e;const r=o;while(o){if(Q(o))return o;o=o.return}return r},ee=e=>{const t=H(e),n=Z(t);return Q(n)},te=e=>{if(!e)return;const{lineNumber:t,columnNumber:n,relativePath:i,absolutePath:o}=e,r=Boolean(i),a={fileName:r?i:o,lineNumber:t,colNumber:n},d=r?`${A.a}/relative`:A.a;fetch(`${d}?${F.a.stringify(a)}`)},ne=e=>{var t,n;let i,o=e;while(o){let e,r=null!==(t=o.return)&&void 0!==t?t:void 0;while(G(r))z(r)&&(e=r),r=null!==(n=null===r||void 0===r?void 0:r.return)&&void 0!==n?n:void 0;if(e&&(o=e),q(o)&&(i||(i=o),Q(o)))return o;o=r}return i},ie=e=>{const t=H(e),n=Z(t),i=ne(n),o=q(i),r=e.nodeName.toLowerCase(),a=o?`${r} in <${o}>`:r;return{fiber:n,name:o,title:a}};function oe(e){return e.getBoundingClientRect()}function re(e){const t=window.getComputedStyle(e);return{borderLeft:parseInt(t.borderLeftWidth,10),borderRight:parseInt(t.borderRightWidth,10),borderTop:parseInt(t.borderTopWidth,10),borderBottom:parseInt(t.borderBottomWidth,10),marginLeft:parseInt(t.marginLeft,10),marginRight:parseInt(t.marginRight,10),marginTop:parseInt(t.marginTop,10),marginBottom:parseInt(t.marginBottom,10),paddingLeft:parseInt(t.paddingLeft,10),paddingRight:parseInt(t.paddingRight,10),paddingTop:parseInt(t.paddingTop,10),paddingBottom:parseInt(t.paddingBottom,10)}}class ae{constructor(e,t){Object.defineProperty(this,"node",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"border",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"padding",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.node=e.createElement("div"),this.border=e.createElement("div"),this.padding=e.createElement("div"),this.content=e.createElement("div"),this.border.style.borderColor=pe.border,this.padding.style.borderColor=pe.padding,this.content.style.backgroundColor=pe.background,Object.assign(this.node.style,{borderColor:pe.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),t.prepend(this.node)}remove(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}update(e,t){ce(t,"margin",this.node),ce(t,"border",this.border),ce(t,"padding",this.padding),Object.assign(this.content.style,{height:e.height-t.borderTop-t.borderBottom-t.paddingTop-t.paddingBottom+"px",width:e.width-t.borderLeft-t.borderRight-t.paddingLeft-t.paddingRight+"px"}),Object.assign(this.node.style,{top:e.top-t.marginTop+"px",left:e.left-t.marginLeft+"px"})}}class de{constructor(e,t){Object.defineProperty(this,"tip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nameSpan",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"titleDiv",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"infoDiv",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dimSpan",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.tip=e.createElement("div"),Object.assign(this.tip.style,{display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"6px 8px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=e.createElement("span"),this.tip.appendChild(this.nameSpan),Object.assign(this.nameSpan.style,{display:"flex",flexDirection:"column",borderRight:"1px solid #aaaaaa",paddingRight:"0.8rem",marginRight:"0.8rem"}),this.titleDiv=e.createElement("div"),this.nameSpan.appendChild(this.titleDiv),Object.assign(this.titleDiv.style,{color:"#ee78e6",fontSize:"16px"}),this.infoDiv=e.createElement("div"),this.nameSpan.appendChild(this.infoDiv),Object.assign(this.infoDiv.style,{color:"#ee78e6",fontSize:"14px"}),this.dimSpan=e.createElement("span"),this.tip.appendChild(this.dimSpan),Object.assign(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",t.appendChild(this.tip)}remove(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}updateText(e,t,n,i){this.titleDiv.textContent=e,this.infoDiv.textContent=null!==t&&void 0!==t?t:"",this.dimSpan.textContent=`${Math.round(n)}px \xd7 ${Math.round(i)}px`}updatePosition(e,t){const n=this.tip.getBoundingClientRect(),i=se(e,t,{width:n.width,height:n.height});Object.assign(this.tip.style,i.style)}}class le{constructor(){Object.defineProperty(this,"window",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tipBoundsWindow",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const e=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=e;const t=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=t;const n=e.document;this.container=n.createElement("div"),this.container.style.zIndex="10000000",this.tip=new de(n,this.container),this.rects=[],this.removeCallback=()=>{},n.body.appendChild(this.container)}remove(){this.tip.remove(),this.rects.forEach((e=>{e.remove()})),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.removeCallback()}setRemoveCallback(e){this.removeCallback=e.bind(this)}inspect(e,t,n){var i;const o=e.filter((e=>e.nodeType===Node.ELEMENT_NODE));while(this.rects.length>o.length){const e=this.rects.pop();null===e||void 0===e||e.remove()}if(0===o.length)return;while(this.rects.length<o.length)this.rects.push(new ae(this.window.document,this.container));const r={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(o.forEach(((e,t)=>{const n=oe(e,this.window),i=re(e);r.top=Math.min(r.top,n.top-i.marginTop),r.right=Math.max(r.right,n.left+n.width+i.marginRight),r.bottom=Math.max(r.bottom,n.top+n.height+i.marginBottom),r.left=Math.min(r.left,n.left-i.marginLeft);const o=this.rects[t];o.update(n,i)})),!t){t=o[0].nodeName.toLowerCase();const e=o[0],n=null===(i=e.ownerDocument.defaultView)||void 0===i?void 0:i.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(null===n||void 0===n?void 0:n.rendererInterfaces){let i=null;for(const t of n.rendererInterfaces.values()){const n=t.getFiberIDForNative(e,!0);if(null!==n){i=t.getDisplayNameForFiberID(n,!0);break}}i&&(t+=` (in ${i})`)}}this.tip.updateText(t,n,r.right-r.left,r.bottom-r.top);const a=oe(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:r.top,left:r.left,height:r.bottom-r.top,width:r.right-r.left},{top:a.top+this.tipBoundsWindow.scrollY,left:a.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}function se(e,t,n){const i=Math.max(n.height,20),o=Math.max(n.width,60),r=5;let a;a=e.top+e.height+i<=t.top+t.height?e.top+e.height<t.top+0?t.top+r:e.top+e.height+r:e.top-i<=t.top+t.height?e.top-i-r<t.top+r?t.top+r:e.top-i-r:t.top+t.height-i-r;let d=e.left+r;return e.left<t.left&&(d=t.left+r),e.left+o>t.left+t.width&&(d=t.left+t.width-o-r),{style:{top:`${a}px`,left:`${d}px`}}}function ce(e,t,n){Object.assign(n.style,{borderTopWidth:`${e[`${t}Top`]}px`,borderLeftWidth:`${e[`${t}Left`]}px`,borderRightWidth:`${e[`${t}Right`]}px`,borderBottomWidth:`${e[`${t}Bottom`]}px`,borderStyle:"solid"})}const pe={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},ue=["control","shift","command","c"],he=e=>{const{keys:t,onHoverElement:n,onClickElement:o,disableLaunchEditor:r,children:a}=e,d=(null!==t&&void 0!==t?t:ue).join("+"),l=Object(i["useRef"])(),s=Object(i["useRef"])({x:0,y:0}),c=({clientX:e,clientY:t})=>{s.current.x=e,s.current.y=t},p=()=>{const e=new le;l.current=e;const t=W({onPointerOver:h,onClick:f});e.setRemoveCallback(t);const n=s.current,i=document.elementFromPoint(n.x,n.y);i&&h(i)},u=()=>{var e;null===(e=l.current)||void 0===e||e.remove(),l.current=void 0},h=e=>{var t;const i=l.current,o=ee(e),r=null===o||void 0===o?void 0:o.relativePath,a=null===o||void 0===o?void 0:o.absolutePath,{fiber:d,name:s,title:c}=ie(e);null===(t=null===i||void 0===i?void 0:i.inspect)||void 0===t||t.call(i,[e],c,null!==r&&void 0!==r?r:a),null===n||void 0===n||n({element:e,fiber:d,codeInfo:o,name:s})},f=e=>{u();const t=ee(e),{fiber:n,name:i}=ie(e);r||te(t),null===o||void 0===o||o({element:e,fiber:n,codeInfo:t,name:i})};return Object(i["useEffect"])((()=>(document.addEventListener("mousemove",c,!0),()=>{document.removeEventListener("mousemove",c,!0)})),[]),Object(i["useEffect"])((()=>{const e=(e,t)=>{t.key===d?l.current?u():p():"esc"===t.key&&l.current&&u()};return T(`${d}, esc`,e),window.__REACT_DEV_INSPECTOR_TOGGLE__=()=>l.current?u():p(),()=>{T.unbind(`${d}, esc`,e),delete window.__REACT_DEV_INSPECTOR_TOGGLE__}}),[d]),a}}}]);