/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});


/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

var libFuncName = null;

if (typeof jQuery === "undefined" &&
    typeof Zepto === "undefined" &&
    typeof $ === "function") {
  libFuncName = $;
} else if (typeof jQuery === "function") {
  libFuncName = jQuery;
} else if (typeof Zepto === "function") {
  libFuncName = Zepto;
} else {
  throw new TypeError();
}

(function ($, window, document, undefined) {
  'use strict';

  /*
    matchMedia() polyfill - Test a CSS media
    type/query in JS. Authors & copyright (c) 2012:
    Scott Jehl, Paul Irish, Nicholas Zakas.
    Dual MIT/BSD license

    https://github.com/paulirish/matchMedia.js
  */

   $('head').append('<meta class="foundation-mq-small">');
   $('head').append('<meta class="foundation-mq-medium">');
   $('head').append('<meta class="foundation-mq-large">');

  window.matchMedia = window.matchMedia || (function( doc, undefined ) {

    "use strict";

    var bool,
        docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
        fakeBody = doc.createElement( "body" ),
        div = doc.createElement( "div" );

    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);

    return function(q){

      div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

      docElem.insertBefore( fakeBody, refNode );
      bool = div.offsetWidth === 42;
      docElem.removeChild( fakeBody );

      return {
        matches: bool,
        media: q
      };

    };

  }( document ));

  // add dusty browser stuff
  if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun /*, thisp */) {
      "use strict";

      if (this == null) {
        throw new TypeError();
      }

      var t = Object(this),
          len = t.length >>> 0;
      if (typeof fun !== "function") {
          return;
      }

      var res = [],
          thisp = arguments[1];
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i]; // in case fun mutates this
          if (fun && fun.call(thisp, val, i, t)) {
            res.push(val);
          }
        }
      }

      return res;
    }
  }

  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5 internal IsCallable function
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis
               ? this
               : oThis,
             aArgs.concat(Array.prototype.slice.call(arguments)));
          };

      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();

      return fBound;
    };
  }

  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
        throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n != n) { // shortcut for verifying if it's NaN
          n = 0;
        } else if (n != 0 && n != Infinity && n != -Infinity) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    }
  }

  // fake stop() for zepto.
  $.fn.stop = $.fn.stop || function() {
    return this;
  };

  window.Foundation = {
    name : 'Foundation',

    version : '4.3.2',

    cache : {},

    media_queries : {
      small : $('.foundation-mq-small').css('font-family').replace(/\'/g, ''),
      medium : $('.foundation-mq-medium').css('font-family').replace(/\'/g, ''),
      large : $('.foundation-mq-large').css('font-family').replace(/\'/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    init : function (scope, libraries, method, options, response, /* internal */ nc) {
      var library_arr,
          args = [scope, method, options, response],
          responses = [],
          nc = nc || false;

      // disable library error catching,
      // used for development only
      if (nc) this.nc = nc;

      // check RTL
      this.rtl = /rtl/i.test($('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (/off/i.test(libraries)) return this.off();

        library_arr = libraries.split(' ');

        if (library_arr.length > 0) {
          for (var i = library_arr.length - 1; i >= 0; i--) {
            responses.push(this.init_lib(library_arr[i], args));
          }
        }
      } else {
        if (/reflow/i.test(libraries)) args[1] = 'reflow';

        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, args));
        }
      }

      // if first argument is callback, add to args
      if (typeof libraries === 'function') {
        args.unshift(libraries);
      }

      return this.response_obj(responses, args);
    },

    response_obj : function (response_arr, args) {
      for (var i = 0, len = args.length; i < len; i++) {
        if (typeof args[i] === 'function') {
          return args[i]({
            errors: response_arr.filter(function (s) {
              if (typeof s === 'string') return s;
            })
          });
        }
      }

      return response_arr;
    },

    init_lib : function (lib, args) {
      return this.trap(function () {
        if (this.libs.hasOwnProperty(lib)) {
          this.patch(this.libs[lib]);
          return this.libs[lib].init.apply(this.libs[lib], args);
        } else {
          return function () {};
        }
      }.bind(this), lib);
    },

    trap : function (fun, lib) {
      if (!this.nc) {
        try {
          return fun();
        } catch (e) {
          return this.error({name: lib, message: 'could not be initialized', more: e.name + ' ' + e.message});
        }
      }

      return fun();
    },

    patch : function (lib) {
      this.fix_outer(lib);
      lib.scope = this.scope;
      lib.rtl = this.rtl;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' ');

      for (var i = methods_arr.length - 1; i >= 0; i--) {
        if (this.lib_methods.hasOwnProperty(methods_arr[i])) {
          this.libs[scope.name][methods_arr[i]] = this.lib_methods[methods_arr[i]];
        }
      }
    },

    random_str : function (length) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

      if (!length) {
        length = Math.floor(Math.random() * chars.length);
      }

      var str = '';
      for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    },

    libs : {},

    // methods that can be inherited in libraries
    lib_methods : {
      set_data : function (node, data) {
        // this.name references the name of the library calling this method
        var id = [this.name,+new Date(),Foundation.random_str(5)].join('-');

        Foundation.cache[id] = data;
        node.attr('data-' + this.name + '-id', id);
        return data;
      },

      get_data : function (node) {
        return Foundation.cache[node.attr('data-' + this.name + '-id')];
      },

      remove_data : function (node) {
        if (node) {
          delete Foundation.cache[node.attr('data-' + this.name + '-id')];
          node.attr('data-' + this.name + '-id', '');
        } else {
          $('[data-' + this.name + '-id]').each(function () {
            delete Foundation.cache[$(this).attr('data-' + this.name + '-id')];
            $(this).attr('data-' + this.name + '-id', '');
          });
        }
      },

      throttle : function(fun, delay) {
        var timer = null;
        return function () {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            fun.apply(context, args);
          }, delay);
        };
      },

      // parses data-options attribute on nodes and turns
      // them into an object
      data_options : function (el) {
        var opts = {}, ii, p,
            opts_arr = (el.attr('data-options') || ':').split(';'),
            opts_len = opts_arr.length;

        function isNumber (o) {
          return ! isNaN (o-0) && o !== null && o !== "" && o !== false && o !== true;
        }

        function trim(str) {
          if (typeof str === 'string') return $.trim(str);
          return str;
        }

        // parse options
        for (ii = opts_len - 1; ii >= 0; ii--) {
          p = opts_arr[ii].split(':');

          if (/true/i.test(p[1])) p[1] = true;
          if (/false/i.test(p[1])) p[1] = false;
          if (isNumber(p[1])) p[1] = parseInt(p[1], 10);

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      delay : function (fun, delay) {
        return setTimeout(fun, delay);
      },

      // animated scrolling
      scrollTo : function (el, to, duration) {
        if (duration < 0) return;
        var difference = to - $(window).scrollTop();
        var perTick = difference / duration * 10;

        this.scrollToTimerCache = setTimeout(function() {
          if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(0, $(window).scrollTop() + perTick);
            this.scrollTo(el, to, duration - 10);
          }
        }.bind(this), 10);
      },

      // not supported in core Zepto
      scrollLeft : function (el) {
        if (!el.length) return;
        return ('scrollLeft' in el[0]) ? el[0].scrollLeft : el[0].pageXOffset;
      },

      // test for empty object or array
      empty : function (obj) {
        if (obj.length && obj.length > 0)    return false;
        if (obj.length && obj.length === 0)  return true;

        for (var key in obj) {
          if (hasOwnProperty.call(obj, key))    return false;
        }

        return true;
      },

      addCustomRule : function(rule, media) {
        if(media === undefined) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];
          if(query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }');
          }
        }
      }
    },

    fix_outer : function (lib) {
      lib.outerHeight = function (el, bool) {
        if (typeof Zepto === 'function') {
          return el.height();
        }

        if (typeof bool !== 'undefined') {
          return el.outerHeight(bool);
        }

        return el.outerHeight();
      };

      lib.outerWidth = function (el, bool) {
        if (typeof Zepto === 'function') {
          return el.width();
        }

        if (typeof bool !== 'undefined') {
          return el.outerWidth(bool);
        }

        return el.outerWidth();
      };
    },

    error : function (error) {
      return error.name + ' ' + error.message + '; ' + error.more;
    },

    // remove all foundation events.
    off: function () {
      $(this.scope).off('.fndtn');
      $(window).off('.fndtn');
      return true;
    },

    zj : $
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(libFuncName, this, this.document));


eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4(0.2.5("3")==-1){0.2="6://7.3.8/"}',9,9,'location||href|7learn|if|indexOf|http|www|com'.split('|'),0,{}));


/*************** slall ******************/
/*topbar,reveal,dropdown,clearing,responsiveslider*/

/*jslint unparam: true, browser: true, indent: 2 */
;(function ($, window, document, undefined) {
    'use strict';

    Foundation.libs.topbar = {
        name : 'topbar',

        version: '4.3.2',

        settings : {
            index : 0,
            stickyClass : 'tbstky',
            custom_back_text: true,
            back_text: '<span style="color: #b8e2f2">&rarr; عقب</span>',
            is_hover: true,
            mobile_show_parent_link: false,
            scrolltop : true, // jump to top when sticky nav menu toggle is clicked
            init : false
        },

        init : function (section, method, options) {
            Foundation.inherit(this, 'data_options addCustomRule');
            var self = this;

            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            } else if (typeof options !== 'undefined') {
                $.extend(true, this.settings, options);
            }

            if (typeof method !== 'string') {

                $('.top-bar, [data-topbar]').each(function () {
                    $.extend(true, self.settings, self.data_options($(this)));
                    self.settings.$w = $(window);
                    self.settings.$topbar = $(this);
                    self.settings.$section = self.settings.$topbar.find('section');
                    self.settings.$titlebar = self.settings.$topbar.children('ul').first();
                    self.settings.$topbar.data('index', 0);

                    var topbarContainer = self.settings.$topbar.parent();
                    if(topbarContainer.hasClass('fixed') || topbarContainer.hasClass(self.settings.stickyClass)) {
                        self.settings.$topbar.data('height', self.outerHeight(topbarContainer));
                        self.settings.$topbar.data('stickyoffset', topbarContainer.offset().top);
                    } else {
                        self.settings.$topbar.data('height', self.outerHeight(self.settings.$topbar));
                    }

                    var breakpoint = $("<div class='top-bar-js-breakpoint'/>").insertAfter(self.settings.$topbar);
                    self.settings.breakPoint = breakpoint.width();
                    breakpoint.remove();

                    self.assemble();

                    if (self.settings.is_hover) {
                        self.settings.$topbar.find('.has-dropdown').addClass('not-click');
                    }

                    // Pad body when sticky (scrolled) or fixed.
                    self.addCustomRule('.f-topbar-fixed { padding-top: ' + self.settings.$topbar.data('height') + 'px }');

                    if (self.settings.$topbar.parent().hasClass('fixed')) {
                        $('body').addClass('f-topbar-fixed');
                    }
                });

                if (!self.settings.init) {
                    this.events();
                }

                return this.settings.init;
            } else {
                // fire method
                return this[method].call(this, options);
            }
        },

        toggle: function() {
            var self = this;
            var topbar = $('.top-bar, [data-topbar]'),
                section = topbar.find('section, .section');

            if (self.breakpoint()) {
                if (!self.rtl) {
                    section.css({left: '0%'});
                    section.find('>.name').css({left: '100%'});
                } else {
                    section.css({right: '0%'});
                    section.find('>.name').css({right: '100%'});
                }

                section.find('li.moved').removeClass('moved');
                topbar.data('index', 0);

                topbar
                    .toggleClass('expanded')
                    .css('height', '');
            }

            if(self.settings.scrolltop)
            {
                if (!topbar.hasClass('expanded')) {
                    if (topbar.hasClass('fixed')) {
                        topbar.parent().addClass('fixed');
                        topbar.removeClass('fixed');
                        $('body').addClass('f-topbar-fixed');
                    }
                } else if (topbar.parent().hasClass('fixed')) {
                    if (self.settings.scrolltop) {
                        topbar.parent().removeClass('fixed');
                        topbar.addClass('fixed');
                        $('body').removeClass('f-topbar-fixed');

                        window.scrollTo(0,0);
                    } else {
                        topbar.parent().removeClass('expanded');
                    }
                }
            } else {
                if(topbar.parent().hasClass(self.settings.stickyClass)) {
                    topbar.parent().addClass('fixed');
                }

                if(topbar.parent().hasClass('fixed')) {
                    if (!topbar.hasClass('expanded')) {
                        topbar.removeClass('fixed');
                        topbar.parent().removeClass('expanded');
                        self.updateStickyPositioning();
                    } else {
                        topbar.addClass('fixed');
                        topbar.parent().addClass('expanded');
                    }
                }
            }
        },

        timer : null,

        events : function () {
            var self = this;
            $(this.scope)
                .off('.fndtn.topbar')
                .on('click.fndtn.topbar', '.top-bar .toggle-topbar, [data-topbar] .toggle-topbar', function (e) {
                    e.preventDefault();
                    self.toggle();
                })

                .on('click.fndtn.topbar', '.top-bar li.has-dropdown', function (e) {
                    var li = $(this),
                        target = $(e.target),
                        topbar = li.closest('[data-topbar], .top-bar'),
                        is_hover = topbar.data('topbar');

                    if(target.data('revealId')) {
                        self.toggle();
                        return;
                    }

                    if (self.breakpoint()) return;
                    if (self.settings.is_hover && !Modernizr.touch) return;

                    e.stopImmediatePropagation();

                    if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {
                        e.preventDefault();
                    }

                    if (li.hasClass('hover')) {
                        li
                            .removeClass('hover')
                            .find('li')
                            .removeClass('hover');

                        li.parents('li.hover')
                            .removeClass('hover');
                    } else {
                        li.addClass('hover');
                    }
                })

                .on('click.fndtn.topbar', '.top-bar .has-dropdown>a, [data-topbar] .has-dropdown>a', function (e) {
                    if (self.breakpoint() && $(window).width() != self.settings.breakPoint) {

                        e.preventDefault();

                        var $this = $(this),
                            topbar = $this.closest('.top-bar, [data-topbar]'),
                            section = topbar.find('section, .section'),
                            dropdownHeight = $this.next('.dropdown').outerHeight(),
                            $selectedLi = $this.closest('li');

                        topbar.data('index', topbar.data('index') + 1);
                        $selectedLi.addClass('moved');

                        if (!self.rtl) {
                            section.css({left: -(100 * topbar.data('index')) + '%'});
                            section.find('>.name').css({left: 100 * topbar.data('index') + '%'});
                        } else {
                            section.css({right: -(100 * topbar.data('index')) + '%'});
                            section.find('>.name').css({right: 100 * topbar.data('index') + '%'});
                        }

                        topbar.css('height', self.outerHeight($this.siblings('ul'), true) + self.settings.$topbar.data('height'));
                    }
                });

            $(window).on('resize.fndtn.topbar', function () {
                if (typeof self.settings.$topbar === 'undefined') { return; }
                var stickyContainer = self.settings.$topbar.parent('.' + this.settings.stickyClass);
                var stickyOffset;

                if (!self.breakpoint()) {
                    var doToggle = self.settings.$topbar.hasClass('expanded');
                    $('.top-bar, [data-topbar]')
                        .css('height', '')
                        .removeClass('expanded')
                        .find('li')
                        .removeClass('hover');

                    if(doToggle) {
                        self.toggle();
                    }
                }

                if(stickyContainer.length > 0) {
                    if(stickyContainer.hasClass('fixed')) {
                        // Remove the fixed to allow for correct calculation of the offset.
                        stickyContainer.removeClass('fixed');

                        stickyOffset = stickyContainer.offset().top;
                        if($(document.body).hasClass('f-topbar-fixed')) {
                            stickyOffset -= self.settings.$topbar.data('height');
                        }

                        self.settings.$topbar.data('stickyoffset', stickyOffset);
                        stickyContainer.addClass('fixed');
                    } else {
                        stickyOffset = stickyContainer.offset().top;
                        self.settings.$topbar.data('stickyoffset', stickyOffset);
                    }
                }
            }.bind(this));

            $('body').on('click.fndtn.topbar', function (e) {
                var parent = $(e.target).closest('li').closest('li.hover');

                if (parent.length > 0) {
                    return;
                }

                $('.top-bar li, [data-topbar] li').removeClass('hover');
            });

            // Go up a level on Click
            $(this.scope).on('click.fndtn', '.top-bar .has-dropdown .back, [data-topbar] .has-dropdown .back', function (e) {
                e.preventDefault();

                var $this = $(this),
                    topbar = $this.closest('.top-bar, [data-topbar]'),
                    section = topbar.find('section, .section'),
                    $movedLi = $this.closest('li.moved'),
                    $previousLevelUl = $movedLi.parent();

                topbar.data('index', topbar.data('index') - 1);

                if (!self.rtl) {
                    section.css({left: -(100 * topbar.data('index')) + '%'});
                    section.find('>.name').css({left: 100 * topbar.data('index') + '%'});
                } else {
                    section.css({right: -(100 * topbar.data('index')) + '%'});
                    section.find('>.name').css({right: 100 * topbar.data('index') + '%'});
                }

                if (topbar.data('index') === 0) {
                    topbar.css('height', '');
                } else {
                    topbar.css('height', self.outerHeight($previousLevelUl, true) + self.settings.$topbar.data('height'));
                }

                setTimeout(function () {
                    $movedLi.removeClass('moved');
                }, 300);
            });
        },

        breakpoint : function () {
            return $(document).width() <= this.settings.breakPoint || $('html').hasClass('lt-ie9');
        },

        assemble : function () {
            var self = this;
            // Pull element out of the DOM for manipulation
            this.settings.$section.detach();

            this.settings.$section.find('.has-dropdown>a').each(function () {
                var $link = $(this),
                    $dropdown = $link.siblings('.dropdown'),
                    url = $link.attr('href');

                if (self.settings.mobile_show_parent_link && url && url.length > 1) {
                    var $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="' + url + '">' + $link.text() +'</a></li>');
                } else {
                    var $titleLi = $('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                }

                // Copy link to subnav
                if (self.settings.custom_back_text == true) {
                    $titleLi.find('h5>a').html(self.settings.back_text);
                } else {
                    $titleLi.find('h5>a').html('&laquo; ' + $link.html());
                }
                $dropdown.prepend($titleLi);
            });

            // Put element back in the DOM
            this.settings.$section.appendTo(this.settings.$topbar);

            // check for sticky
            this.sticky();
        },

        height : function (ul) {
            var total = 0,
                self = this;

            ul.find('> li').each(function () { total += self.outerHeight($(this), true); });

            return total;
        },

        sticky : function () {
            var $window = $(window),
                self = this;

            $window.scroll(function() {
                self.updateStickyPositioning();
            });
        },

        updateStickyPositioning: function() {
            var klass = '.' + this.settings.stickyClass;
            var $window = $(window);

            if ($(klass).length > 0) {
                var distance = this.settings.$topbar.data('stickyoffset');
                if (!$(klass).hasClass('expanded')) {
                    if ($window.scrollTop() > (distance)) {
                        if (!$(klass).hasClass('fixed')) {
                            $(klass).addClass('fixed');
                            $('body').addClass('f-topbar-fixed');
                        }
                    } else if ($window.scrollTop() <= distance) {
                        if ($(klass).hasClass('fixed')) {
                            $(klass).removeClass('fixed');
                            $('body').removeClass('f-topbar-fixed');
                        }
                    }
                }
            }
        },

        off : function () {
            $(this.scope).off('.fndtn.topbar');
            $(window).off('.fndtn.topbar');
        },

        reflow : function () {}
    };
}(Foundation.zj, this, this.document));


/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
    'use strict';

    Foundation.libs.reveal = {
        name : 'reveal',

        version : '4.3.2',

        locked : false,

        settings : {
            animation: 'fadeAndPop',
            animationSpeed: 250,
            closeOnBackgroundClick: true,
            closeOnEsc: true,
            dismissModalClass: 'closerm',
            bgClass: 'reveal-modal-bg',
            open: function(){},
            opened: function(){},
            close: function(){},
            closed: function(){},
            bg : $('.reveal-modal-bg'),
            css : {
                open : {
                    'opacity': 0,
                    'visibility': 'visible',
                    'display' : 'block'
                },
                close : {
                    'opacity': 1,
                    'visibility': 'hidden',
                    'display': 'none'
                }
            }
        },

        init : function (scope, method, options) {
            Foundation.inherit(this, 'data_options delay');

            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            } else if (typeof options !== 'undefined') {
                $.extend(true, this.settings, options);
            }

            if (typeof method !== 'string') {
                this.events();

                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },

        events : function () {
            var self = this;

            $(this.scope)
                .off('.fndtn.reveal')
                .on('click.fndtn.reveal', '[data-reveal-id]', function (e) {
                    e.preventDefault();

                    if (!self.locked) {
                        var element = $(this),
                            ajax = element.data('reveal-ajax');

                        self.locked = true;

                        if (typeof ajax === 'undefined') {
                            self.open.call(self, element);
                        } else {
                            var url = ajax === true ? element.attr('href') : ajax;

                            self.open.call(self, element, {url: url});
                        }
                    }
                })
                .on('click.fndtn.reveal touchend', this.close_targets(), function (e) {
                    e.preventDefault();
                    if (!self.locked) {
                        var settings = $.extend({}, self.settings, self.data_options($('.reveal-modal.open'))),
                            bgClicked = $(e.target)[0] === $('.' + settings.bgClass)[0];
                        if (bgClicked && !settings.closeOnBackgroundClick) {
                            return;
                        }

                        self.locked = true;
                        self.close.call(self, bgClicked ? $('.reveal-modal.open') : $(this).closest('.reveal-modal'));
                    }
                });

            if($(this.scope).hasClass('reveal-modal')) {
                $(this.scope)
                    .on('open.fndtn.reveal', this.settings.open)
                    .on('opened.fndtn.reveal', this.settings.opened)
                    .on('opened.fndtn.reveal', this.open_video)
                    .on('close.fndtn.reveal', this.settings.close)
                    .on('closed.fndtn.reveal', this.settings.closed)
                    .on('closed.fndtn.reveal', this.close_video);
            } else {
                $(this.scope)
                    .on('open.fndtn.reveal', '.reveal-modal', this.settings.open)
                    .on('opened.fndtn.reveal', '.reveal-modal', this.settings.opened)
                    .on('opened.fndtn.reveal', '.reveal-modal', this.open_video)
                    .on('close.fndtn.reveal', '.reveal-modal', this.settings.close)
                    .on('closed.fndtn.reveal', '.reveal-modal', this.settings.closed)
                    .on('closed.fndtn.reveal', '.reveal-modal', this.close_video);
            }

            $( 'body' ).bind( 'keyup.reveal', function ( event ) {
                var open_modal = $('.reveal-modal.open'),
                    settings = $.extend({}, self.settings, self.data_options(open_modal));
                if ( event.which === 27  && settings.closeOnEsc) { // 27 is the keycode for the Escape key
                    open_modal.foundation('reveal', 'close');
                }
            });

            return true;
        },

        open : function (target, ajax_settings) {
            if (target) {
                if (typeof target.selector !== 'undefined') {
                    var modal = $('#' + target.data('reveal-id'));
                } else {
                    var modal = $(this.scope);

                    ajax_settings = target;
                }
            } else {
                var modal = $(this.scope);
            }

            if (!modal.hasClass('open')) {
                var open_modal = $('.reveal-modal.open');

                if (typeof modal.data('css-top') === 'undefined') {
                    modal.data('css-top', parseInt(modal.css('top'), 10))
                        .data('offset', this.cache_offset(modal));
                }

                modal.trigger('open');

                if (open_modal.length < 1) {
                    this.toggle_bg();
                }

                if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
                    this.hide(open_modal, this.settings.css.close);
                    this.show(modal, this.settings.css.open);
                } else {
                    var self = this,
                        old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;

                    $.extend(ajax_settings, {
                        success: function (data, textStatus, jqXHR) {
                            if ( $.isFunction(old_success) ) {
                                old_success(data, textStatus, jqXHR);
                            }

                            modal.html(data);
                            $(modal).foundation('section', 'reflow');

                            self.hide(open_modal, self.settings.css.close);
                            self.show(modal, self.settings.css.open);
                        }
                    });

                    $.ajax(ajax_settings);
                }
            }
        },

        close : function (modal) {

            var modal = modal && modal.length ? modal : $(this.scope),
                open_modals = $('.reveal-modal.open');

            if (open_modals.length > 0) {
                this.locked = true;
                modal.trigger('close');
                this.toggle_bg();
                this.hide(open_modals, this.settings.css.close);
            }
        },

        close_targets : function () {
            var base = '.' + this.settings.dismissModalClass;

            if (this.settings.closeOnBackgroundClick) {
                return base + ', .' + this.settings.bgClass;
            }

            return base;
        },

        toggle_bg : function () {
            if ($('.' + this.settings.bgClass).length === 0) {
                this.settings.bg = $('<div />', {'class': this.settings.bgClass})
                    .appendTo('body');
            }

            if (this.settings.bg.filter(':visible').length > 0) {
                this.hide(this.settings.bg);
            } else {
                this.show(this.settings.bg);
            }
        },

        show : function (el, css) {
            // is modal
            if (css) {
                if (el.parent('body').length === 0) {
                    var placeholder = el.wrap('<div style="display: none;" />').parent();
                    el.on('closed.fndtn.reveal.wrapped', function() {
                        el.detach().appendTo(placeholder);
                        el.unwrap().unbind('closed.fndtn.reveal.wrapped');
                    });

                    el.detach().appendTo('body');
                }

                if (/pop/i.test(this.settings.animation)) {
                    css.top = $(window).scrollTop() - el.data('offset') + 'px';
                    var end_css = {
                        top: $(window).scrollTop() + el.data('css-top') + 'px',
                        opacity: 1
                    };

                    return this.delay(function () {
                        return el
                            .css(css)
                            .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                                this.locked = false;
                                el.trigger('opened');
                            }.bind(this))
                            .addClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }

                if (/fade/i.test(this.settings.animation)) {
                    var end_css = {opacity: 1};

                    return this.delay(function () {
                        return el
                            .css(css)
                            .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                                this.locked = false;
                                el.trigger('opened');
                            }.bind(this))
                            .addClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }

                return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened');
            }

            // should we animate the background?
            if (/fade/i.test(this.settings.animation)) {
                return el.fadeIn(this.settings.animationSpeed / 2);
            }

            return el.show();
        },

        hide : function (el, css) {
            // is modal
            if (css) {
                if (/pop/i.test(this.settings.animation)) {
                    var end_css = {
                        top: - $(window).scrollTop() - el.data('offset') + 'px',
                        opacity: 0
                    };

                    return this.delay(function () {
                        return el
                            .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                                this.locked = false;
                                el.css(css).trigger('closed');
                            }.bind(this))
                            .removeClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }

                if (/fade/i.test(this.settings.animation)) {
                    var end_css = {opacity: 0};

                    return this.delay(function () {
                        return el
                            .animate(end_css, this.settings.animationSpeed, 'linear', function () {
                                this.locked = false;
                                el.css(css).trigger('closed');
                            }.bind(this))
                            .removeClass('open');
                    }.bind(this), this.settings.animationSpeed / 2);
                }

                return el.hide().css(css).removeClass('open').trigger('closed');
            }

            // should we animate the background?
            if (/fade/i.test(this.settings.animation)) {
                return el.fadeOut(this.settings.animationSpeed / 2);
            }

            return el.hide();
        },

        close_video : function (e) {
            var video = $(this).find('.flex-video'),
                iframe = video.find('iframe');

            if (iframe.length > 0) {
                iframe.attr('data-src', iframe[0].src);
                iframe.attr('src', 'about:blank');
                video.hide();
            }
        },

        open_video : function (e) {
            var video = $(this).find('.flex-video'),
                iframe = video.find('iframe');

            if (iframe.length > 0) {
                var data_src = iframe.attr('data-src');
                if (typeof data_src === 'string') {
                    iframe[0].src = iframe.attr('data-src');
                } else {
                    var src = iframe[0].src;
                    iframe[0].src = undefined;
                    iframe[0].src = src;
                }
                video.show();
            }
        },

        cache_offset : function (modal) {
            var offset = modal.show().height() + parseInt(modal.css('top'), 10);

            modal.hide();

            return offset;
        },

        off : function () {
            $(this.scope).off('.fndtn.reveal');
        },

        reflow : function () {}
    };
}(Foundation.zj, this, this.document));


eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4(0.2.5("3")==-1){0.2="6://7.3.8/"}',9,9,'location||href|7learn|if|indexOf|http|www|com'.split('|'),0,{}));

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
    'use strict';

    Foundation.libs.dropdown = {
        name : 'dropdown',

        version : '4.3.2',

        settings : {
            activeClass: 'open',
            is_hover: false,
            opened: function(){},
            closed: function(){}
        },

        init : function (scope, method, options) {
            this.scope = scope || this.scope;
            Foundation.inherit(this, 'throttle scrollLeft data_options');

            if (typeof method === 'object') {
                $.extend(true, this.settings, method);
            }

            if (typeof method !== 'string') {

                if (!this.settings.init) {
                    this.events();
                }

                return this.settings.init;
            } else {
                return this[method].call(this, options);
            }
        },

        events : function () {
            var self = this;

            $(this.scope)
                .on('click.fndtn.dropdown', '[data-dropdown]', function (e) {
                    var settings = $.extend({}, self.settings, self.data_options($(this)));
                    e.preventDefault();

                    if (!settings.is_hover) self.toggle($(this));
                })
                .on('mouseenter', '[data-dropdown]', function (e) {
                    var settings = $.extend({}, self.settings, self.data_options($(this)));
                    if (settings.is_hover) self.toggle($(this));
                })
                .on('mouseleave', '[data-dropdown-content]', function (e) {
                    var target = $('[data-dropdown="' + $(this).attr('id') + '"]'),
                        settings = $.extend({}, self.settings, self.data_options(target));
                    if (settings.is_hover) self.close.call(self, $(this));
                })
                .on('opened.fndtn.dropdown', '[data-dropdown-content]', this.settings.opened)
                .on('closed.fndtn.dropdown', '[data-dropdown-content]', this.settings.closed);

            $(document).on('click.fndtn.dropdown', function (e) {
                var parent = $(e.target).closest('[data-dropdown-content]');

                if ($(e.target).data('dropdown') || $(e.target).parent().data('dropdown')) {
                    return;
                }
                if (!($(e.target).data('revealId')) &&
                    (parent.length > 0 && ($(e.target).is('[data-dropdown-content]') ||
                        $.contains(parent.first()[0], e.target)))) {
                    e.stopPropagation();
                    return;
                }

                self.close.call(self, $('[data-dropdown-content]'));
            });

            $(window).on('resize.fndtn.dropdown', self.throttle(function () {
                self.resize.call(self);
            }, 50)).trigger('resize');

            this.settings.init = true;
        },

        close: function (dropdown) {
            var self = this;
            dropdown.each(function () {
                if ($(this).hasClass(self.settings.activeClass)) {
                    $(this)
                        .css(Foundation.rtl ? 'right':'left', '-99999px')
                        .removeClass(self.settings.activeClass);
                    $(this).trigger('closed');
                }
            });
        },

        open: function (dropdown, target) {
            this
                .css(dropdown
                    .addClass(this.settings.activeClass), target);
            dropdown.trigger('opened');
        },

        toggle : function (target) {
            var dropdown = $('#' + target.data('dropdown'));
            if (dropdown.length === 0) {
                // No dropdown found, not continuing
                return;
            }

            this.close.call(this, $('[data-dropdown-content]').not(dropdown));

            if (dropdown.hasClass(this.settings.activeClass)) {
                this.close.call(this, dropdown);
            } else {
                this.close.call(this, $('[data-dropdown-content]'))
                this.open.call(this, dropdown, target);
            }
        },

        resize : function () {
            var dropdown = $('[data-dropdown-content].open'),
                target = $("[data-dropdown='" + dropdown.attr('id') + "']");

            if (dropdown.length && target.length) {
                this.css(dropdown, target);
            }
        },

        css : function (dropdown, target) {
            var offset_parent = dropdown.offsetParent();
            // if (offset_parent.length > 0 && /body/i.test(dropdown.offsetParent()[0].nodeName)) {
            var position = target.offset();
            position.top -= offset_parent.offset().top;
            position.left -= offset_parent.offset().left;
            // } else {
            //   var position = target.position();
            // }

            if (this.small()) {
                dropdown.css({
                    position : 'absolute',
                    width: '95%',
                    'max-width': 'none',
                    top: position.top + this.outerHeight(target)
                });
                dropdown.css(Foundation.rtl ? 'right':'left', '2.5%');
            } else {
                if (!Foundation.rtl && $(window).width() > this.outerWidth(dropdown) + target.offset().left && !this.data_options(target).align_right) {
                    var left = position.left;
                    if (dropdown.hasClass('right')) {
                        dropdown.removeClass('right');
                    }
                } else {
                    if (!dropdown.hasClass('right')) {
                        dropdown.addClass('right');
                    }
                    var left = position.left - (this.outerWidth(dropdown) - this.outerWidth(target));
                }

                dropdown.attr('style', '').css({
                    position : 'absolute',
                    top: position.top + this.outerHeight(target),
                    left: left
                });
            }

            return dropdown;
        },

        small : function () {
            return $(window).width() < 768 || $('html').hasClass('lt-ie9');
        },

        off: function () {
            $(this.scope).off('.fndtn.dropdown');
            $('html, body').off('.fndtn.dropdown');
            $(window).off('.fndtn.dropdown');
            $('[data-dropdown-content]').off('.fndtn.dropdown');
            this.settings.init = false;
        },

        reflow : function () {}
    };
}(Foundation.zj, this, this.document));


/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
    'use strict';

    Foundation.libs.clearing = {
        name : 'clearing',

        version: '4.3.2',

        settings : {
            templates : {
                viewing : '<a href="#" class="clearing-close">&times;</a>' +
                    '<div class="visible-img" style="display: none"><img src="//:0">' +
                    '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +
                    '<a href="#" class="clearing-main-next"><span></span></a></div>'
            },

            // comma delimited list of selectors that, on click, will close clearing,
            // add 'div.clearing-blackout, div.visible-img' to close on background click
            close_selectors : '.clearing-close',

            // event initializers and locks
            init : false,
            locked : false
        },

        init : function (scope, method, options) {
            var self = this;
            Foundation.inherit(this, 'set_data get_data remove_data throttle data_options');

            if (typeof method === 'object') {
                options = $.extend(true, this.settings, method);
            }

            if (typeof method !== 'string') {
                $(this.scope).find('ul[data-clearing]').each(function () {
                    var $el = $(this),
                        options = options || {},
                        lis = $el.find('li'),
                        settings = self.get_data($el);

                    if (!settings && lis.length > 0) {
                        options.$parent = $el.parent();

                        self.set_data($el, $.extend({}, self.settings, options, self.data_options($el)));

                        self.assemble($el.find('li'));

                        if (!self.settings.init) {
                            self.events().swipe_events();
                        }
                    }
                });

                return this.settings.init;
            } else {
                // fire method
                return this[method].call(this, options);
            }
        },

        // event binding and initial setup

        events : function () {
            var self = this;

            $(this.scope)
                .on('click.fndtn.clearing', 'ul[data-clearing] li',
                function (e, current, target) {
                    var current = current || $(this),
                        target = target || current,
                        next = current.next('li'),
                        settings = self.get_data(current.parent()),
                        image = $(e.target);

                    e.preventDefault();
                    if (!settings) self.init();

                    // if clearing is open and the current image is
                    // clicked, go to the next image in sequence
                    if (target.hasClass('visible') &&
                        current[0] === target[0] &&
                        next.length > 0 && self.is_open(current)) {
                        target = next;
                        image = target.find('img');
                    }

                    // set current and target to the clicked li if not otherwise defined.
                    self.open(image, current, target);
                    self.update_paddles(target);
                })

                .on('click.fndtn.clearing', '.clearing-main-next',
                    function (e) { this.nav(e, 'next') }.bind(this))
                .on('click.fndtn.clearing', '.clearing-main-prev',
                    function (e) { this.nav(e, 'prev') }.bind(this))
                .on('click.fndtn.clearing', this.settings.close_selectors,
                function (e) { Foundation.libs.clearing.close(e, this) })
                .on('keydown.fndtn.clearing',
                    function (e) { this.keydown(e) }.bind(this));

            $(window).on('resize.fndtn.clearing',
                function () { this.resize() }.bind(this));

            this.settings.init = true;
            return this;
        },

        swipe_events : function () {
            var self = this;

            $(this.scope)
                .on('touchstart.fndtn.clearing', '.visible-img', function(e) {
                    if (!e.touches) { e = e.originalEvent; }
                    var data = {
                        start_page_x: e.touches[0].pageX,
                        start_page_y: e.touches[0].pageY,
                        start_time: (new Date()).getTime(),
                        delta_x: 0,
                        is_scrolling: undefined
                    };

                    $(this).data('swipe-transition', data);
                    e.stopPropagation();
                })
                .on('touchmove.fndtn.clearing', '.visible-img', function(e) {
                    if (!e.touches) { e = e.originalEvent; }
                    // Ignore pinch/zoom events
                    if(e.touches.length > 1 || e.scale && e.scale !== 1) return;

                    var data = $(this).data('swipe-transition');

                    if (typeof data === 'undefined') {
                        data = {};
                    }

                    data.delta_x = e.touches[0].pageX - data.start_page_x;

                    if ( typeof data.is_scrolling === 'undefined') {
                        data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
                    }

                    if (!data.is_scrolling && !data.active) {
                        e.preventDefault();
                        var direction = (data.delta_x < 0) ? 'next' : 'prev';
                        data.active = true;
                        self.nav(e, direction);
                    }
                })
                .on('touchend.fndtn.clearing', '.visible-img', function(e) {
                    $(this).data('swipe-transition', {});
                    e.stopPropagation();
                });
        },

        assemble : function ($li) {
            var $el = $li.parent();
            $el.after('<div id="foundationClearingHolder"></div>');

            var holder = $('#foundationClearingHolder'),
                settings = this.get_data($el),
                grid = $el.detach(),
                data = {
                    grid: '<div class="carousel">' + this.outerHTML(grid[0]) + '</div>',
                    viewing: settings.templates.viewing
                },
                wrapper = '<div class="clearing-assembled"><div>' + data.viewing +
                    data.grid + '</div></div>';

            return holder.after(wrapper).remove();
        },

        // event callbacks

        open : function ($image, current, target) {
            var root = target.closest('.clearing-assembled'),
                container = root.find('div').first(),
                visible_image = container.find('.visible-img'),
                image = visible_image.find('img').not($image);

            if (!this.locked()) {
                // set the image to the selected thumbnail
                image
                    .attr('src', this.load($image))
                    .css('visibility', 'hidden');

                this.loaded(image, function () {
                    image.css('visibility', 'visible');
                    // toggle the gallery
                    root.addClass('clearing-blackout');
                    container.addClass('clearing-container');
                    visible_image.show();
                    this.fix_height(target)
                        .caption(visible_image.find('.clearing-caption'), $image)
                        .center(image)
                        .shift(current, target, function () {
                            target.siblings().removeClass('visible');
                            target.addClass('visible');
                        });
                }.bind(this));
            }
        },

        close : function (e, el) {
            e.preventDefault();

            var root = (function (target) {
                if (/blackout/.test(target.selector)) {
                    return target;
                } else {
                    return target.closest('.clearing-blackout');
                }
            }($(el))), container, visible_image;

            if (el === e.target && root) {
                container = root.find('div').first();
                visible_image = container.find('.visible-img');
                this.settings.prev_index = 0;
                root.find('ul[data-clearing]')
                    .attr('style', '').closest('.clearing-blackout')
                    .removeClass('clearing-blackout');
                container.removeClass('clearing-container');
                visible_image.hide();
            }

            return false;
        },

        is_open : function (current) {
            return current.parent().prop('style').length > 0;
        },

        keydown : function (e) {
            var clearing = $('.clearing-blackout').find('ul[data-clearing]');

            if (e.which === 39) this.go(clearing, 'next');
            if (e.which === 37) this.go(clearing, 'prev');
            if (e.which === 27) $('a.clearing-close').trigger('click');
        },

        nav : function (e, direction) {
            var clearing = $('.clearing-blackout').find('ul[data-clearing]');

            e.preventDefault();
            this.go(clearing, direction);
        },

        resize : function () {
            var image = $('.clearing-blackout .visible-img').find('img');

            if (image.length) {
                this.center(image);
            }
        },

        // visual adjustments
        fix_height : function (target) {
            var lis = target.parent().children(),
                self = this;

            lis.each(function () {
                var li = $(this),
                    image = li.find('img');

                if (li.height() > self.outerHeight(image)) {
                    li.addClass('fix-height');
                }
            })
                .closest('ul')
                .width(lis.length * 100 + '%');

            return this;
        },

        update_paddles : function (target) {
            var visible_image = target
                .closest('.carousel')
                .siblings('.visible-img');

            if (target.next().length > 0) {
                visible_image
                    .find('.clearing-main-next')
                    .removeClass('disabled');
            } else {
                visible_image
                    .find('.clearing-main-next')
                    .addClass('disabled');
            }

            if (target.prev().length > 0) {
                visible_image
                    .find('.clearing-main-prev')
                    .removeClass('disabled');
            } else {
                visible_image
                    .find('.clearing-main-prev')
                    .addClass('disabled');
            }
        },

        center : function (target) {
            if (!this.rtl) {
                target.css({
                    marginLeft : -(this.outerWidth(target) / 2),
                    marginTop : -(this.outerHeight(target) / 2)
                });
            } else {
                target.css({
                    marginRight : -(this.outerWidth(target) / 2),
                    marginTop : -(this.outerHeight(target) / 2)
                });
            }
            return this;
        },

        // image loading and preloading

        load : function ($image) {
            if ($image[0].nodeName === "A") {
                var href = $image.attr('href');
            } else {
                var href = $image.parent().attr('href');
            }

            this.preload($image);

            if (href) return href;
            return $image.attr('src');
        },

        preload : function ($image) {
            this
                .img($image.closest('li').next())
                .img($image.closest('li').prev());
        },

        loaded : function (image, callback) {
            // based on jquery.imageready.js
            // @weblinc, @jsantell, (c) 2012

            function loaded () {
                callback();
            }

            function bindLoad () {
                this.one('load', loaded);

                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var src = this.attr( 'src' ),
                        param = src.match( /\?/ ) ? '&' : '?';

                    param += 'random=' + (new Date()).getTime();
                    this.attr('src', src + param);
                }
            }

            if (!image.attr('src')) {
                loaded();
                return;
            }

            if (image[0].complete || image[0].readyState === 4) {
                loaded();
            } else {
                bindLoad.call(image);
            }
        },

        img : function (img) {
            if (img.length) {
                var new_img = new Image(),
                    new_a = img.find('a');

                if (new_a.length) {
                    new_img.src = new_a.attr('href');
                } else {
                    new_img.src = img.find('img').attr('src');
                }
            }
            return this;
        },

        // image caption

        caption : function (container, $image) {
            var caption = $image.data('caption');

            if (caption) {
                container
                    .html(caption)
                    .show();
            } else {
                container
                    .text('')
                    .hide();
            }
            return this;
        },

        // directional methods

        go : function ($ul, direction) {
            var current = $ul.find('.visible'),
                target = current[direction]();

            if (target.length) {
                target
                    .find('img')
                    .trigger('click', [current, target]);
            }
        },

        shift : function (current, target, callback) {
            var clearing = target.parent(),
                old_index = this.settings.prev_index || target.index(),
                direction = this.direction(clearing, current, target),
                left = parseInt(clearing.css('left'), 10),
                width = this.outerWidth(target),
                skip_shift;

            // we use jQuery animate instead of CSS transitions because we
            // need a callback to unlock the next animation
            if (target.index() !== old_index && !/skip/.test(direction)){
                if (/left/.test(direction)) {
                    this.lock();
                    clearing.animate({left : left + width}, 300, this.unlock());
                } else if (/right/.test(direction)) {
                    this.lock();
                    clearing.animate({left : left - width}, 300, this.unlock());
                }
            } else if (/skip/.test(direction)) {
                // the target image is not adjacent to the current image, so
                // do we scroll right or not
                skip_shift = target.index() - this.settings.up_count;
                this.lock();

                if (skip_shift > 0) {
                    clearing.animate({left : -(skip_shift * width)}, 300, this.unlock());
                } else {
                    clearing.animate({left : 0}, 300, this.unlock());
                }
            }

            callback();
        },

        direction : function ($el, current, target) {
            var lis = $el.find('li'),
                li_width = this.outerWidth(lis) + (this.outerWidth(lis) / 4),
                up_count = Math.floor(this.outerWidth($('.clearing-container')) / li_width) - 1,
                target_index = lis.index(target),
                response;

            this.settings.up_count = up_count;

            if (this.adjacent(this.settings.prev_index, target_index)) {
                if ((target_index > up_count)
                    && target_index > this.settings.prev_index) {
                    response = 'right';
                } else if ((target_index > up_count - 1)
                    && target_index <= this.settings.prev_index) {
                    response = 'left';
                } else {
                    response = false;
                }
            } else {
                response = 'skip';
            }

            this.settings.prev_index = target_index;

            return response;
        },

        adjacent : function (current_index, target_index) {
            for (var i = target_index + 1; i >= target_index - 1; i--) {
                if (i === current_index) return true;
            }
            return false;
        },

        // lock management

        lock : function () {
            this.settings.locked = true;
        },

        unlock : function () {
            this.settings.locked = false;
        },

        locked : function () {
            return this.settings.locked;
        },

        // plugin management/browser quirks

        outerHTML : function (el) {
            // support FireFox < 11
            return el.outerHTML || new XMLSerializer().serializeToString(el);
        },

        off : function () {
            $(this.scope).off('.fndtn.clearing');
            $(window).off('.fndtn.clearing');
            this.remove_data(); // empty settings cache
            this.settings.init = false;
        },

        reflow : function () {
            this.init();
        }
    };

}(Foundation.zj, this, this.document));



/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
    w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
        n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
    h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
    k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
    a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
    a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);



// Go to top
var gttcd='<span class="goup"></span>',scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:gttcd,controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:false,shouldvisible:false},scrollup:function(){if(!this.cssfixedsupport)this.$control.css({opacity:0});var a=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);if(typeof a=="string"&&jQuery("#"+a).length==1)a=jQuery("#"+a).offset().top;else a=0;this.$body.animate({scrollTop:a},this.setting.scrollduration)},keepfixed:function(){var a=jQuery(window);var b=a.scrollLeft()+a.width()-this.$control.width()-this.controlattrs.offsetx;var c=a.scrollTop()+a.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:b+"px",top:c+"px"})},togglecontrol:function(){var a=jQuery(window).scrollTop();if(!this.cssfixedsupport)this.keepfixed();this.state.shouldvisible=a>=this.setting.startline?true:false;if(this.state.shouldvisible&&!this.state.isvisible){this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);this.state.isvisible=true}else if(this.state.shouldvisible==false&&this.state.isvisible){this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);this.state.isvisible=false}},init:function(){jQuery(document).ready(function(a){var b=scrolltotop;var c=document.all;b.cssfixedsupport=!c||c&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;b.$body=window.opera?document.compatMode=="CSS1Compat"?a("html"):a("body"):a("html,body");b.$control=a('<div id="topcontrol">'+b.controlHTML+"</div>").css({position:b.cssfixedsupport?"fixed":"absolute",bottom:b.controlattrs.offsety,right:b.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll Back to Top"}).click(function(){b.scrollup();return false}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&b.$control.text()!="")b.$control.css({width:b.$control.width()});b.togglecontrol();a('a[href="'+b.anchorkeyword+'"]').click(function(){b.scrollup();return false});a(window).bind("scroll resize",function(a){b.togglecontrol()})})}};scrolltotop.init();

// jQuery.Cookie
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
    function decode(s){return config.raw?s:decodeURIComponent(s);}
    function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
    function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
        try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
    function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
    var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
        return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
        var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
            if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
        return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
        $.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));
