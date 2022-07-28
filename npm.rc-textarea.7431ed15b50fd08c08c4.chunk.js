(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[843],{71874:(e,t,a)=>{"use strict";var n=a(20862),r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=r(a(67154)),u=r(a(81109)),l=r(a(59713)),s=r(a(34575)),d=r(a(93913)),c=r(a(2205)),f=r(a(99842)),p=n(a(67294)),v=r(a(49870)),m=r(a(18475)),h=r(a(94184)),x=r(a(64100));!function(e){e[e.NONE=0]="NONE",e[e.RESIZING=1]="RESIZING",e[e.RESIZED=2]="RESIZED"}(i||(i={}));var g=function(e){(0,c.default)(a,e);var t=(0,f.default)(a);function a(e){var n;return(0,s.default)(this,a),(n=t.call(this,e)).saveTextArea=function(e){n.textArea=e},n.handleResize=function(e){var t=n.state.resizeStatus,a=n.props,r=a.autoSize,o=a.onResize;t===i.NONE&&("function"===typeof o&&o(e),r&&n.resizeOnNextFrame())},n.resizeOnNextFrame=function(){cancelAnimationFrame(n.nextFrameActionId),n.nextFrameActionId=requestAnimationFrame(n.resizeTextarea)},n.resizeTextarea=function(){var e=n.props.autoSize;if(e&&n.textArea){var t=e.minRows,a=e.maxRows,r=(0,x.default)(n.textArea,!1,t,a);n.setState({textareaStyles:r,resizeStatus:i.RESIZING},(function(){cancelAnimationFrame(n.resizeFrameId),n.resizeFrameId=requestAnimationFrame((function(){n.setState({resizeStatus:i.RESIZED},(function(){n.resizeFrameId=requestAnimationFrame((function(){n.setState({resizeStatus:i.NONE}),n.fixFirefoxAutoScroll()}))}))}))}))}},n.renderTextArea=function(){var e=n.props,t=e.prefixCls,a=void 0===t?"rc-textarea":t,r=e.autoSize,s=e.onResize,d=e.className,c=e.disabled,f=n.state,x=f.textareaStyles,g=f.resizeStatus,b=(0,m.default)(n.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),z=(0,h.default)(a,d,(0,l.default)({},"".concat(a,"-disabled"),c));"value"in b&&(b.value=b.value||"");var A=(0,u.default)((0,u.default)((0,u.default)({},n.props.style),x),g===i.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return p.createElement(v.default,{onResize:n.handleResize,disabled:!(r||s)},p.createElement("textarea",(0,o.default)({},b,{className:z,style:A,ref:n.saveTextArea})))},n.state={textareaStyles:{},resizeStatus:i.NONE},n}return(0,d.default)(a,[{key:"componentDidMount",value:function(){this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,t=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,t)}}catch(e){}}},{key:"render",value:function(){return this.renderTextArea()}}]),a}(p.Component);t.default=g},64100:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateNodeStyling=o,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a||((a=document.createElement("textarea")).setAttribute("tab-index","-1"),a.setAttribute("aria-hidden","true"),document.body.appendChild(a));e.getAttribute("wrap")?a.setAttribute("wrap",e.getAttribute("wrap")):a.removeAttribute("wrap");var u=o(e,t),l=u.paddingSize,s=u.borderSize,d=u.boxSizing,c=u.sizingStyle;a.setAttribute("style","".concat(c,";").concat(n)),a.value=e.value||e.placeholder||"";var f,p=Number.MIN_SAFE_INTEGER,v=Number.MAX_SAFE_INTEGER,m=a.scrollHeight;"border-box"===d?m+=s:"content-box"===d&&(m-=l);if(null!==r||null!==i){a.value=" ";var h=a.scrollHeight-l;null!==r&&(p=h*r,"border-box"===d&&(p=p+l+s),m=Math.max(p,m)),null!==i&&(v=h*i,"border-box"===d&&(v=v+l+s),f=m>v?"":"hidden",m=Math.min(v,m))}return{height:m,minHeight:p,maxHeight:v,overflowY:f,resize:"none"}};var a,n="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",r=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],i={};function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&i[a])return i[a];var n=window.getComputedStyle(e),o=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),u=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),l=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=r.map((function(e){return"".concat(e,":").concat(n.getPropertyValue(e))})).join(";"),d={sizingStyle:s,paddingSize:u,borderSize:l,boxSizing:o};return t&&a&&(i[a]=d),d}},14818:(e,t,a)=>{"use strict";var n=a(20862),r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ResizableTextArea",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var i=r(a(67154)),o=r(a(34575)),u=r(a(93913)),l=r(a(2205)),s=r(a(99842)),d=n(a(67294)),c=r(a(71874)),f=function(e){(0,l.default)(a,e);var t=(0,s.default)(a);function a(e){var n;(0,o.default)(this,a),(n=t.call(this,e)).focus=function(){n.resizableTextArea.textArea.focus()},n.saveTextArea=function(e){n.resizableTextArea=e},n.handleChange=function(e){var t=n.props.onChange;n.setValue(e.target.value,(function(){n.resizableTextArea.resizeTextarea()})),t&&t(e)},n.handleKeyDown=function(e){var t=n.props,a=t.onPressEnter,r=t.onKeyDown;13===e.keyCode&&a&&a(e),r&&r(e)};var r="undefined"===typeof e.value||null===e.value?e.defaultValue:e.value;return n.state={value:r},n}return(0,u.default)(a,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return d.createElement(c.default,(0,i.default)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),a}(d.Component);t.default=f}}]);
//# sourceMappingURL=npm.rc-textarea.7431ed15b50fd08c08c4.chunk.js.map