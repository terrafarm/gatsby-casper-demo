webpackJsonp([0xa6cd3c51205b],{135:function(e,t){},101:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(135);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.default.createElement("h2",{className:"page-description"},e):null},t}(i.default.Component);t.default=s,e.exports=t.default},136:function(e,t){},102:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l);n(136);var s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.text,n=e.image,r=e.url;return n?i.default.createElement("h1",{className:"page-title"},i.default.createElement("a",{href:r},i.default.createElement("img",{src:n,alt:t}))):t?i.default.createElement("h1",{className:"page-title"},t):null},t}(i.default.Component);t.default=s,e.exports=t.default},137:function(e,t){},103:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(104),c=r(s);n(137);var f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,r=e.prev,o=e.next;return i.default.createElement("nav",{className:"pagination"},i.default.createElement(c.default,{className:"newer-posts",url:r,text:"← Newer Posts"}),i.default.createElement("span",{className:"page-number"},"Page ",t," of ",n),i.default.createElement(c.default,{className:"older-posts",url:o,text:"Older Posts →"}))},t}(i.default.Component);t.default=f,e.exports=t.default},138:function(e,t){},104:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),c=r(s),f=n(19),p=r(f);n(138);var d=function(e){function t(){return a(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=o(this.props,[]);return delete t.style,delete t.className,delete t.text,delete t.url,c.default.createElement(p.default,i({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(c.default.Component);t.default=d,e.exports=t.default},59:function(e,t){},52:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(10),c=r(s);n(59);var f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.children,t=(0,c.default)("content",this.props.className);return i.default.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.default.Component);t.default=f,e.exports=t.default},141:function(e,t){},108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),i=r(l),s=n(52),c=r(s),f=n(103),p=r(f);n(141);var d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,r=e.prev,o=e.next,a=e.children,u="";return t>1&&(u+=" paged"),i.default.createElement(c.default,{className:u},i.default.createElement("div",{className:"extra-pagination inner"},i.default.createElement(p.default,{page:t,pages:n,prev:r,next:o})),a,i.default.createElement(p.default,{page:t,pages:n,prev:r,next:o}))},t}(i.default.Component);t.default=d,e.exports=t.default},289:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),i=r(l),s=n(21),c=r(s),f=n(73),p=r(f),d=n(12),h=r(d),y=n(74),m=r(y),b=n(72),_=r(b),w=n(77),g=r(w),E=n(75),v=r(E),O=n(76),x=r(O),j=n(69),P=r(j),C=n(71),N=r(C),M=n(102),T=r(M),S=n(101),R=r(S),k=n(70),A=r(k),G=n(108),Q=r(G),q=function(e){function t(){var n,r,u;o(this,t);for(var l=arguments.length,i=Array(l),s=0;s<l;s++)i[s]=arguments[s];return n=r=a(this,e.call.apply(e,[this].concat(i))),r.state={menuOpen:!1},r.handleOnClick=function(e){e.stopPropagation(),r.state.menuOpen?r.closeMenu():r.openMenu()},r.handleOnClose=function(e){e.stopPropagation(),r.closeMenu()},r.openMenu=function(){r.setState({menuOpen:!0})},r.closeMenu=function(){r.setState({menuOpen:!1})},u=n,a(r,u)}return u(t,e),t.prototype.render=function(){var e=this.props.pathContext,t=e.tag,n=e.nodes,r=e.page,o=e.pages,a=e.total,u=e.limit,l=e.prev,s=e.next,f=this.props.data.authors.edges;return i.default.createElement(m.default,{isOpen:this.state.menuOpen},i.default.createElement(c.default,{title:'Posts tagged as "'+t+'" | '+h.default.siteTitle}),i.default.createElement(_.default,{config:h.default,onClose:this.handleOnClose}),i.default.createElement(g.default,null,i.default.createElement("div",{className:"tag-template"},i.default.createElement(v.default,{className:"tag-head",cover:t.featureImage},i.default.createElement(x.default,null,i.default.createElement(P.default,{logo:h.default.siteLogo,title:h.default.siteTitle}),i.default.createElement(N.default,{navigation:h.default.siteNavigation,onClick:this.handleOnClick})),i.default.createElement("div",{className:"vertical"},i.default.createElement("div",{className:"main-header-content inner"},i.default.createElement(T.default,{text:t}),i.default.createElement(R.default,{text:t.description||"A "+a+"-post collection"})))),i.default.createElement(Q.default,{page:r,pages:o,total:a,limit:u,prev:l,next:s},i.default.createElement(p.default,{postEdges:n,postAuthors:f}))),i.default.createElement(A.default,{copyright:h.default.copyright,promoteGatsby:h.default.promoteGatsby})))},t}(i.default.Component);t.pageQuery="** extracted graphql fragment **";t.default=q}});
//# sourceMappingURL=component---src-templates-tag-jsx-e14d011d79bb31f29fbf.js.map