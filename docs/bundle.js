(function () {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$1=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.6.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$1+w):s+n$1+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$1)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

  function toArray(objectOrArray) {
    objectOrArray = objectOrArray || [];
    return Array.isArray(objectOrArray) ? objectOrArray : [objectOrArray];
  }

  function log(msg) {
    return `[Vaadin.Router] ${msg}`;
  }

  function logValue(value) {
    if (typeof value !== 'object') {
      return String(value);
    }

    const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
    if (stringType === 'Object' || stringType === 'Array') {
      return `${stringType} ${JSON.stringify(value)}`;
    } else {
      return stringType;
    }
  }

  const MODULE = 'module';
  const NOMODULE = 'nomodule';
  const bundleKeys = [MODULE, NOMODULE];

  function ensureBundle(src) {
    if (!src.match(/.+\.[m]?js$/)) {
      throw new Error(
        log(`Unsupported type for bundle "${src}": .js or .mjs expected.`)
      );
    }
  }

  function ensureRoute(route) {
    if (!route || !isString(route.path)) {
      throw new Error(
        log(`Expected route config to be an object with a "path" string property, or an array of such objects`)
      );
    }

    const bundle = route.bundle;

    const stringKeys = ['component', 'redirect', 'bundle'];
    if (
      !isFunction(route.action) &&
      !Array.isArray(route.children) &&
      !isFunction(route.children) &&
      !isObject(bundle) &&
      !stringKeys.some(key => isString(route[key]))
    ) {
      throw new Error(
        log(
          `Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` +
          `or "action" function but none found.`
        )
      );
    }

    if (bundle) {
      if (isString(bundle)) {
        ensureBundle(bundle);
      } else if (!bundleKeys.some(key => key in bundle)) {
        throw new Error(
          log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both')
        );
      } else {
        bundleKeys.forEach(key => key in bundle && ensureBundle(bundle[key]));
      }
    }

    if (route.redirect) {
      ['bundle', 'component'].forEach(overriddenProp => {
        if (overriddenProp in route) {
          console.warn(
            log(
              `Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` +
              `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`
            )
          );
        }
      });
    }
  }

  function ensureRoutes(routes) {
    toArray(routes).forEach(route => ensureRoute(route));
  }

  function loadScript(src, key) {
    let script = document.head.querySelector('script[src="' + src + '"][async]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('src', src);
      if (key === MODULE) {
        script.setAttribute('type', MODULE);
      } else if (key === NOMODULE) {
        script.setAttribute(NOMODULE, '');
      }
      script.async = true;
    }
    return new Promise((resolve, reject) => {
      script.onreadystatechange = script.onload = e => {
        script.__dynamicImportLoaded = true;
        resolve(e);
      };
      script.onerror = e => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        reject(e);
      };
      if (script.parentNode === null) {
        document.head.appendChild(script);
      } else if (script.__dynamicImportLoaded) {
        resolve();
      }
    });
  }

  function loadBundle(bundle) {
    if (isString(bundle)) {
      return loadScript(bundle);
    } else {
      return Promise.race(
        bundleKeys
          .filter(key => key in bundle)
          .map(key => loadScript(bundle[key], key))
      );
    }
  }

  function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(
      `vaadin-router-${type}`,
      {cancelable: type === 'go', detail}
    ));
  }

  function isObject(o) {
    // guard against null passing the typeof check
    return typeof o === 'object' && !!o;
  }

  function isFunction(f) {
    return typeof f === 'function';
  }

  function isString(s) {
    return typeof s === 'string';
  }

  function getNotFoundError(context) {
    const error = new Error(log(`Page not found (${context.pathname})`));
    error.context = context;
    error.code = 404;
    return error;
  }

  const notFoundResult = new (class NotFoundResult {})();

  /* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */
  function getAnchorOrigin(anchor) {
    // IE11: on HTTP and HTTPS the default port is not included into
    // window.location.origin, so won't include it here either.
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === 'http:' && port === '80';
    const defaultHttps = protocol === 'https:' && port === '443';
    const host = (defaultHttp || defaultHttps)
      ? anchor.hostname // does not include the port number (e.g. www.example.org)
      : anchor.host; // does include the port number (e.g. www.example.org:80)
    return `${protocol}//${host}`;
  }

  // The list of checks is not complete:
  //  - SVG support is missing
  //  - the 'rel' attribute is not considered
  function vaadinRouterGlobalClickHandler(event) {
    // ignore the click if the default action is prevented
    if (event.defaultPrevented) {
      return;
    }

    // ignore the click if not with the primary mouse button
    if (event.button !== 0) {
      return;
    }

    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }

    // find the <a> element that the click is at (or within)
    let anchor = event.target;
    const path = event.composedPath
      ? event.composedPath()
      : (event.path || []);

    // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
    // example to check: `for...of` loop here throws the "Not yet implemented" error
    for (let i = 0; i < path.length; i++) {
      const target = path[i];
      if (target.nodeName && target.nodeName.toLowerCase() === 'a') {
        anchor = target;
        break;
      }
    }

    while (anchor && anchor.nodeName.toLowerCase() !== 'a') {
      anchor = anchor.parentNode;
    }

    // ignore the click if not at an <a> element
    if (!anchor || anchor.nodeName.toLowerCase() !== 'a') {
      return;
    }

    // ignore the click if the <a> element has a non-default target
    if (anchor.target && anchor.target.toLowerCase() !== '_self') {
      return;
    }

    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute('download')) {
      return;
    }

    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute('router-ignore')) {
      return;
    }

    // ignore the click if the target URL is a fragment on the current page
    if (anchor.pathname === window.location.pathname && anchor.hash !== '') {
      return;
    }

    // ignore the click if the target is external to the app
    // In IE11 HTMLAnchorElement does not have the `origin` property
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) {
      return;
    }

    // if none of the above, convert the click into a navigation event
    const {pathname, search, hash} = anchor;
    if (fireRouterEvent('go', {pathname, search, hash})) {
      event.preventDefault();
      // for a click event, the scroll is reset to the top position.
      if (event && event.type === 'click') {
        window.scrollTo(0, 0);
      }
    }
  }

  /**
   * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
   * into Vaadin Router navigation events.
   *
   * Only regular clicks on in-app links are translated (primary mouse button, no
   * modifier keys, the target href is within the app's URL space).
   *
   * @memberOf Router.NavigationTrigger
   * @type {NavigationTrigger}
   */
  const CLICK = {
    activate() {
      window.document.addEventListener('click', vaadinRouterGlobalClickHandler);
    },

    inactivate() {
      window.document.removeEventListener('click', vaadinRouterGlobalClickHandler);
    }
  };

  // PopStateEvent constructor shim
  const isIE = /Trident/.test(navigator.userAgent);

  /* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */
  if (isIE && !isFunction(window.PopStateEvent)) {
    window.PopStateEvent = function(inType, params) {
      params = params || {};
      var e = document.createEvent('Event');
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      e.state = params.state || null;
      return e;
    };
    window.PopStateEvent.prototype = window.Event.prototype;
  }

  function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === 'vaadin-router-ignore') {
      return;
    }
    const {pathname, search, hash} = window.location;
    fireRouterEvent('go', {pathname, search, hash});
  }

  /**
   * A navigation trigger for Vaadin Router that translates popstate events into
   * Vaadin Router navigation events.
   *
   * @memberOf Router.NavigationTrigger
   * @type {NavigationTrigger}
   */
  const POPSTATE = {
    activate() {
      window.addEventListener('popstate', vaadinRouterGlobalPopstateHandler);
    },

    inactivate() {
      window.removeEventListener('popstate', vaadinRouterGlobalPopstateHandler);
    }
  };

  /**
   * Expose `pathToRegexp`.
   */
  var pathToRegexp_1 = pathToRegexp$1;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  /**
   * Default configs.
   */
  var DEFAULT_DELIMITER = '/';
  var DEFAULT_DELIMITERS = './';

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
  ].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string}  str
   * @param  {Object=} options
   * @return {!Array}
   */
  function parse (str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;

    while ((res = PATH_REGEXP.exec(str)) !== null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        pathEscaped = true;
        continue
      }

      var prev = '';
      var next = str[index];
      var name = res[2];
      var capture = res[3];
      var group = res[4];
      var modifier = res[5];

      if (!pathEscaped && path.length) {
        var k = path.length - 1;

        if (delimiters.indexOf(path[k]) > -1) {
          prev = path[k];
          path = path.slice(0, k);
        }
      }

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
        pathEscaped = false;
      }

      var partial = prev !== '' && next !== undefined && next !== prev;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = prev || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prev,
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
      });
    }

    // Push any remaining characters.
    if (path || index < str.length) {
      tokens.push(path + str.substr(index));
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @param  {Object=}            options
   * @return {!function(Object=, Object=)}
   */
  function compile (str, options) {
    return tokensToFunction(parse(str, options))
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
      }
    }

    return function (data, options) {
      var path = '';
      var encode = (options && options.encode) || encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;
          continue
        }

        var value = data ? data[token.name] : undefined;
        var segment;

        if (Array.isArray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
          }

          if (value.length === 0) {
            if (token.optional) continue

            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j], token);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue
        }

        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          segment = encode(String(value), token);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
          }

          path += token.prefix + segment;
          continue
        }

        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) path += token.prefix;

          continue
        }

        throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$/()])/g, '\\$1')
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags (options) {
    return options && options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {Array=}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp (path, keys) {
    if (!keys) return path

    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          pattern: null
        });
      }
    }

    return path
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array=}  keys
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp$1(path[i], keys, options).source);
    }

    return new RegExp('(?:' + parts.join('|') + ')', flags(options))
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {Array=}  keys
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function stringToRegexp (path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}  tokens
   * @param  {Array=}  keys
   * @param  {Object=} options
   * @return {!RegExp}
   */
  function tokensToRegExp (tokens, keys, options) {
    options = options || {};

    var strict = options.strict;
    var start = options.start !== false;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = start ? '^' : '';
    var isEndDelimited = tokens.length === 0;

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
        isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
      } else {
        var capture = token.repeat
          ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
          : token.pattern;

        if (keys) keys.push(token);

        if (token.optional) {
          if (token.partial) {
            route += escapeString(token.prefix) + '(' + capture + ')?';
          } else {
            route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
          }
        } else {
          route += escapeString(token.prefix) + '(' + capture + ')';
        }
      }
    }

    if (end) {
      if (!strict) route += '(?:' + delimiter + ')?';

      route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    } else {
      if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
      if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
    }

    return new RegExp(route, flags(options))
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {Array=}                keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp$1 (path, keys, options) {
    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys)
    }

    if (Array.isArray(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
    }

    return stringToRegexp(/** @type {string} */ (path), keys, options)
  }
  pathToRegexp_1.parse = parse_1;
  pathToRegexp_1.compile = compile_1;
  pathToRegexp_1.tokensToFunction = tokensToFunction_1;
  pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  const {hasOwnProperty} = Object.prototype;
  const cache$1 = new Map();
  // see https://github.com/pillarjs/path-to-regexp/issues/148
  cache$1.set('|false', {
    keys: [],
    pattern: /(?:)/
  });

  function decodeParam(val) {
    try {
      return decodeURIComponent(val);
    } catch (err) {
      return val;
    }
  }

  function matchPath(routepath, path, exact, parentKeys, parentParams) {
    exact = !!exact;
    const cacheKey = `${routepath}|${exact}`;
    let regexp = cache$1.get(cacheKey);

    if (!regexp) {
      const keys = [];
      regexp = {
        keys,
        pattern: pathToRegexp_1(routepath, keys, {
          end: exact,
          strict: routepath === ''
        }),
      };
      cache$1.set(cacheKey, regexp);
    }

    const m = regexp.pattern.exec(path);
    if (!m) {
      return null;
    }

    const params = Object.assign({}, parentParams);

    for (let i = 1; i < m.length; i++) {
      const key = regexp.keys[i - 1];
      const prop = key.name;
      const value = m[i];
      if (value !== undefined || !hasOwnProperty.call(params, prop)) {
        if (key.repeat) {
          params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
        } else {
          params[prop] = value ? decodeParam(value) : value;
        }
      }
    }

    return {
      path: m[0],
      keys: (parentKeys || []).concat(regexp.keys),
      params,
    };
  }

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /**
   * Traverses the routes tree and matches its nodes to the given pathname from
   * the root down to the leaves. Each match consumes a part of the pathname and
   * the matching process continues for as long as there is a matching child
   * route for the remaining part of the pathname.
   *
   * The returned value is a lazily evaluated iterator.
   *
   * The leading "/" in a route path matters only for the root of the routes
   * tree (or if all parent routes are ""). In all other cases a leading "/" in
   * a child route path has no significance.
   *
   * The trailing "/" in a _route path_ matters only for the leaves of the
   * routes tree. A leaf route with a trailing "/" matches only a pathname that
   * also has a trailing "/".
   *
   * The trailing "/" in a route path does not affect matching of child routes
   * in any way.
   *
   * The trailing "/" in a _pathname_ generally does not matter (except for
   * the case of leaf nodes described above).
   *
   * The "" and "/" routes have special treatment:
   *  1. as a single route
   *     the "" and "/" routes match only the "" and "/" pathnames respectively
   *  2. as a parent in the routes tree
   *     the "" route matches any pathname without consuming any part of it
   *     the "/" route matches any absolute pathname consuming its leading "/"
   *  3. as a leaf in the routes tree
   *     the "" and "/" routes match only if the entire pathname is consumed by
   *         the parent routes chain. In this case "" and "/" are equivalent.
   *  4. several directly nested "" or "/" routes
   *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
   *       "/" routes does not require a double "/" in the pathname to match)
   *     - if there are only "" in the parent routes chain, no part of the
   *       pathname is consumed, and the leading "/" in the child routes' paths
   *       remains significant
   *
   * Side effect:
   *   - the routes tree { path: '' } matches only the '' pathname
   *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
   *     pathname (for the tree root)
   *
   * Prefix matching can be enabled also by `children: true`.
   */
  function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = route.path || '';
    if (routepath.charAt(0) === '/') {
      if (ignoreLeadingSlash) {
        routepath = routepath.substr(1);
      }
      ignoreLeadingSlash = true;
    }

    return {
      next(routeToSkip) {
        if (route === routeToSkip) {
          return {done: true};
        }

        const children = route.__children = route.__children || route.children;

        if (!match) {
          match = matchPath(routepath, pathname, !children, parentKeys, parentParams);

          if (match) {
            return {
              done: false,
              value: {
                route,
                keys: match.keys,
                params: match.params,
                path: match.path
              },
            };
          }
        }

        if (match && children) {
          while (childIndex < children.length) {
            if (!childMatches) {
              const childRoute = children[childIndex];
              childRoute.parent = route;

              let matchedLength = match.path.length;
              if (matchedLength > 0 && pathname.charAt(matchedLength) === '/') {
                matchedLength += 1;
              }

              childMatches = matchRoute(
                childRoute,
                pathname.substr(matchedLength),
                ignoreLeadingSlash,
                match.keys,
                match.params
              );
            }

            const childMatch = childMatches.next(routeToSkip);
            if (!childMatch.done) {
              return {
                done: false,
                value: childMatch.value,
              };
            }

            childMatches = null;
            childIndex++;
          }
        }

        return {done: true};
      },
    };
  }

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  function resolveRoute(context) {
    if (isFunction(context.route.action)) {
      return context.route.action(context);
    }
    return undefined;
  }

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  function isChildRoute(parentRoute, childRoute) {
    let route = childRoute;
    while (route) {
      route = route.parent;
      if (route === parentRoute) {
        return true;
      }
    }
    return false;
  }

  function generateErrorMessage(currentContext) {
    let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
    const routePath = (currentContext.route || {}).path;
    if (routePath) {
      errorMessage += ` Resolution had failed on route: '${routePath}'`;
    }
    return errorMessage;
  }

  function updateChainForRoute(context, match) {
    const {route, path} = match;

    if (route && !route.__synthetic) {
      const item = {path, route};
      if (!context.chain) {
        context.chain = [];
      } else {
        // Discard old items
        if (route.parent) {
          let i = context.chain.length;
          while (i-- && context.chain[i].route && context.chain[i].route !== route.parent) {
            context.chain.pop();
          }
        }
      }
      context.chain.push(item);
    }
  }

  /**
   */
  class Resolver {
    constructor(routes, options = {}) {
      if (Object(routes) !== routes) {
        throw new TypeError('Invalid routes');
      }

      this.baseUrl = options.baseUrl || '';
      this.errorHandler = options.errorHandler;
      this.resolveRoute = options.resolveRoute || resolveRoute;
      this.context = Object.assign({resolver: this}, options.context);
      this.root = Array.isArray(routes) ? {path: '', __children: routes, parent: null, __synthetic: true} : routes;
      this.root.parent = null;
    }

    /**
     * Returns the current list of routes (as a shallow copy). Adding / removing
     * routes to / from the returned array does not affect the routing config,
     * but modifying the route objects does.
     *
     * @return {!Array<!Router.Route>}
     */
    getRoutes() {
      return [...this.root.__children];
    }

    /**
     * Sets the routing config (replacing the existing one).
     *
     * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
     *    (the array is shallow copied)
     */
    setRoutes(routes) {
      ensureRoutes(routes);
      const newRoutes = [...toArray(routes)];
      this.root.__children = newRoutes;
    }

    /**
     * Appends one or several routes to the routing config and returns the
     * effective routing config after the operation.
     *
     * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
     *    (the array is shallow copied)
     * @return {!Array<!Router.Route>}
     * @protected
     */
    addRoutes(routes) {
      ensureRoutes(routes);
      this.root.__children.push(...toArray(routes));
      return this.getRoutes();
    }

    /**
     * Removes all existing routes from the routing config.
     */
    removeRoutes() {
      this.setRoutes([]);
    }

    /**
     * Asynchronously resolves the given pathname, i.e. finds all routes matching
     * the pathname and tries resolving them one after another in the order they
     * are listed in the routes config until the first non-null result.
     *
     * Returns a promise that is fulfilled with the return value of an object that consists of the first
     * route handler result that returns something other than `null` or `undefined` and context used to get this result.
     *
     * If no route handlers return a non-null result, or if no route matches the
     * given pathname the returned promise is rejected with a 'page not found'
     * `Error`.
     *
     * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
     *    resolve or a context object with a `pathname` property and other
     *    properties to pass to the route resolver functions.
     * @return {!Promise<any>}
     */
    resolve(pathnameOrContext) {
      const context = Object.assign(
        {},
        this.context,
        isString(pathnameOrContext) ? {pathname: pathnameOrContext} : pathnameOrContext
      );
      const match = matchRoute(
        this.root,
        this.__normalizePathname(context.pathname),
        this.baseUrl
      );
      const resolve = this.resolveRoute;
      let matches = null;
      let nextMatches = null;
      let currentContext = context;

      function next(resume, parent = matches.value.route, prevResult) {
        const routeToSkip = prevResult === null && matches.value.route;
        matches = nextMatches || match.next(routeToSkip);
        nextMatches = null;

        if (!resume) {
          if (matches.done || !isChildRoute(parent, matches.value.route)) {
            nextMatches = matches;
            return Promise.resolve(notFoundResult);
          }
        }

        if (matches.done) {
          return Promise.reject(getNotFoundError(context));
        }

        currentContext = Object.assign(
          currentContext
            ? {chain: (currentContext.chain ? currentContext.chain.slice(0) : [])}
            : {},
          context,
          matches.value
        );
        updateChainForRoute(currentContext, matches.value);

        return Promise.resolve(resolve(currentContext)).then(resolution => {
          if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
            currentContext.result = resolution.result || resolution;
            return currentContext;
          }
          return next(resume, parent, resolution);
        });
      }

      context.next = next;

      return Promise.resolve()
        .then(() => next(true, this.root))
        .catch((error) => {
          const errorMessage = generateErrorMessage(currentContext);
          if (!error) {
            error = new Error(errorMessage);
          } else {
            console.warn(errorMessage);
          }
          error.context = error.context || currentContext;
          // DOMException has its own code which is read-only
          if (!(error instanceof DOMException)) {
            error.code = error.code || 500;
          }
          if (this.errorHandler) {
            currentContext.result = this.errorHandler(error);
            return currentContext;
          }
          throw error;
        });
    }

    /**
     * URL constructor polyfill hook. Creates and returns an URL instance.
     */
    static __createUrl(url, base) {
      return new URL(url, base);
    }

    /**
     * If the baseUrl property is set, transforms the baseUrl and returns the full
     * actual `base` string for using in the `new URL(path, base);` and for
     * prepernding the paths with. The returned base ends with a trailing slash.
     *
     * Otherwise, returns empty string.
     */
    get __effectiveBaseUrl() {
      return this.baseUrl
        ? this.constructor.__createUrl(
          this.baseUrl,
          document.baseURI || document.URL
        ).href.replace(/[^\/]*$/, '')
        : '';
    }

    /**
     * If the baseUrl is set, matches the pathname with the router’s baseUrl,
     * and returns the local pathname with the baseUrl stripped out.
     *
     * If the pathname does not match the baseUrl, returns undefined.
     *
     * If the `baseUrl` is not set, returns the unmodified pathname argument.
     */
    __normalizePathname(pathname) {
      if (!this.baseUrl) {
        // No base URL, no need to transform the pathname.
        return pathname;
      }

      const base = this.__effectiveBaseUrl;
      const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
      if (normalizedUrl.slice(0, base.length) === base) {
        return normalizedUrl.slice(base.length);
      }
    }
  }

  Resolver.pathToRegexp = pathToRegexp_1;

  /**
   * Universal Router (https://www.kriasoft.com/universal-router/)
   *
   * Copyright (c) 2015-present Kriasoft.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  const {pathToRegexp} = Resolver;
  const cache = new Map();

  function cacheRoutes(routesByName, route, routes) {
    const name = route.name || route.component;
    if (name) {
      if (routesByName.has(name)) {
        routesByName.get(name).push(route);
      } else {
        routesByName.set(name, [route]);
      }
    }

    if (Array.isArray(routes)) {
      for (let i = 0; i < routes.length; i++) {
        const childRoute = routes[i];
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
      }
    }
  }

  function getRouteByName(routesByName, routeName) {
    const routes = routesByName.get(routeName);
    if (routes && routes.length > 1) {
      throw new Error(
        `Duplicate route with name "${routeName}".`
        + ` Try seting unique 'name' route properties.`
      );
    }
    return routes && routes[0];
  }

  function getRoutePath(route) {
    let path = route.path;
    path = Array.isArray(path) ? path[0] : path;
    return path !== undefined ? path : '';
  }

  function generateUrls(router, options = {}) {
    if (!(router instanceof Resolver)) {
      throw new TypeError('An instance of Resolver is expected');
    }

    const routesByName = new Map();

    return (routeName, params) => {
      let route = getRouteByName(routesByName, routeName);
      if (!route) {
        routesByName.clear(); // clear cache
        cacheRoutes(routesByName, router.root, router.root.__children);

        route = getRouteByName(routesByName, routeName);
        if (!route) {
          throw new Error(`Route "${routeName}" not found`);
        }
      }

      let regexp = cache.get(route.fullPath);
      if (!regexp) {
        let fullPath = getRoutePath(route);
        let rt = route.parent;
        while (rt) {
          const path = getRoutePath(rt);
          if (path) {
            fullPath = path.replace(/\/$/, '') + '/' + fullPath.replace(/^\//, '');
          }
          rt = rt.parent;
        }
        const tokens = pathToRegexp.parse(fullPath);
        const toPath = pathToRegexp.tokensToFunction(tokens);
        const keys = Object.create(null);
        for (let i = 0; i < tokens.length; i++) {
          if (!isString(tokens[i])) {
            keys[tokens[i].name] = true;
          }
        }
        regexp = {toPath, keys};
        cache.set(fullPath, regexp);
        route.fullPath = fullPath;
      }

      let url = regexp.toPath(params, options) || '/';

      if (options.stringifyQueryParams && params) {
        const queryParams = {};
        const keys = Object.keys(params);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!regexp.keys[key]) {
            queryParams[key] = params[key];
          }
        }
        const query = options.stringifyQueryParams(queryParams);
        if (query) {
          url += query.charAt(0) === '?' ? query : `?${query}`;
        }
      }

      return url;
    };
  }

  /**
   * @typedef NavigationTrigger
   * @type {object}
   * @property {function()} activate
   * @property {function()} inactivate
   */

  /** @type {Array<NavigationTrigger>} */
  let triggers = [];

  function setNavigationTriggers(newTriggers) {
    triggers.forEach(trigger => trigger.inactivate());

    newTriggers.forEach(trigger => trigger.activate());

    triggers = newTriggers;
  }

  const willAnimate = elem => {
    const name = getComputedStyle(elem).getPropertyValue('animation-name');
    return name && name !== 'none';
  };

  const waitForAnimation = (elem, cb) => {
    const listener = () => {
      elem.removeEventListener('animationend', listener);
      cb();
    };
    elem.addEventListener('animationend', listener);
  };

  function animate(elem, className) {
    elem.classList.add(className);

    return new Promise(resolve => {
      if (willAnimate(elem)) {
        const rect = elem.getBoundingClientRect();
        const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
        elem.setAttribute('style', `position: absolute; ${size}`);
        waitForAnimation(elem, () => {
          elem.classList.remove(className);
          elem.removeAttribute('style');
          resolve();
        });
      } else {
        elem.classList.remove(className);
        resolve();
      }
    });
  }

  const MAX_REDIRECT_COUNT = 256;

  function isResultNotEmpty(result) {
    return result !== null && result !== undefined;
  }

  function copyContextWithoutNext(context) {
    const copy = Object.assign({}, context);
    delete copy.next;
    return copy;
  }

  function createLocation({pathname = '', search = '', hash = '', chain = [], params = {}, redirectFrom, resolver}, route) {
    const routes = chain.map(item => item.route);
    return {
      baseUrl: resolver && resolver.baseUrl || '',
      pathname,
      search,
      hash,
      routes,
      route: route || routes.length && routes[routes.length - 1] || null,
      params,
      redirectFrom,
      getUrl: (userParams = {}) => getPathnameForRouter(
        Router.pathToRegexp.compile(
          getMatchedPath(routes)
        )(Object.assign({}, params, userParams)),
        resolver
      )
    };
  }

  function createRedirect(context, pathname) {
    const params = Object.assign({}, context.params);
    return {
      redirect: {
        pathname,
        from: context.pathname,
        params
      }
    };
  }

  function renderElement(context, element) {
    element.location = createLocation(context);
    const index = context.chain.map(item => item.route).indexOf(context.route);
    context.chain[index].element = element;
    return element;
  }

  function runCallbackIfPossible(callback, args, thisArg) {
    if (isFunction(callback)) {
      return callback.apply(thisArg, args);
    }
  }

  function amend(amendmentFunction, args, element) {
    return amendmentResult => {
      if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) {
        return amendmentResult;
      }

      if (element) {
        return runCallbackIfPossible(element[amendmentFunction], args, element);
      }
    };
  }

  function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !isObject(newChildren)) {
      throw new Error(
        log(
          `Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`
        )
      );
    }

    route.__children = [];
    const childRoutes = toArray(newChildren);
    for (let i = 0; i < childRoutes.length; i++) {
      ensureRoute(childRoutes[i]);
      route.__children.push(childRoutes[i]);
    }
  }

  function removeDomNodes(nodes) {
    if (nodes && nodes.length) {
      const parent = nodes[0].parentNode;
      for (let i = 0; i < nodes.length; i++) {
        parent.removeChild(nodes[i]);
      }
    }
  }

  function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base
      ? router.constructor.__createUrl(pathname.replace(/^\//, ''), base).pathname
      : pathname;
  }

  function getMatchedPath(chain) {
    return chain.map(item => item.path).reduce((a, b) => {
      if (b.length) {
        return a.replace(/\/$/, '') + '/' + b.replace(/^\//, '');
      }
      return a;
    }, '');
  }

  /**
   * A simple client-side router for single-page applications. It uses
   * express-style middleware and has a first-class support for Web Components and
   * lazy-loading. Works great in Polymer and non-Polymer apps.
   *
   * Use `new Router(outlet, options)` to create a new Router instance.
   *
   * * The `outlet` parameter is a reference to the DOM node to render
   *   the content into.
   *
   * * The `options` parameter is an optional object with options. The following
   *   keys are supported:
   *   * `baseUrl` — the initial value for [
   *     the `baseUrl` property
   *   ](#/classes/Router#property-baseUrl)
   *
   * The Router instance is automatically subscribed to navigation events
   * on `window`.
   *
   * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
   *
   * See also detailed API docs for the following methods, for the advanced usage:
   *
   * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
   * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
   * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
   *
   * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
   *
   * @extends Resolver
   * @demo demo/index.html
   * @summary JavaScript class that renders different DOM content depending on
   *    a given path. It can re-render when triggered or automatically on
   *    'popstate' and / or 'click' events.
   */
  class Router extends Resolver {

    /**
     * Creates a new Router instance with a given outlet, and
     * automatically subscribes it to navigation events on the `window`.
     * Using a constructor argument or a setter for outlet is equivalent:
     *
     * ```
     * const router = new Router();
     * router.setOutlet(outlet);
     * ```
     * @param {?Node=} outlet
     * @param {?RouterOptions=} options
     */
    constructor(outlet, options) {
      const baseElement = document.head.querySelector('base');
      const baseHref = baseElement && baseElement.getAttribute('href');
      super([], Object.assign({
        // Default options
        baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, '')
      }, options));

      this.resolveRoute = context => this.__resolveRoute(context);

      const triggers = Router.NavigationTrigger;
      Router.setTriggers.apply(Router, Object.keys(triggers).map(key => triggers[key]));

      /**
       * The base URL for all routes in the router instance. By default,
       * if the base element exists in the `<head>`, vaadin-router
       * takes the `<base href>` attribute value, resolves against current `document.URL`
       * and gets the `pathname` from the result.
       *
       * @public
       * @type {string}
       */
      this.baseUrl;

      /**
       * A promise that is settled after the current render cycle completes. If
       * there is no render cycle in progress the promise is immediately settled
       * with the last render cycle result.
       *
       * @public
       * @type {!Promise<!RouterLocation>}
       */
      this.ready;
      this.ready = Promise.resolve(outlet);

      /**
       * Contains read-only information about the current router location:
       * pathname, active routes, parameters. See the
       * [Location type declaration](#/classes/RouterLocation)
       * for more details.
       *
       * @public
       * @type {!RouterLocation}
       */
      this.location;
      this.location = createLocation({resolver: this});

      this.__lastStartedRenderId = 0;
      this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
      this.setOutlet(outlet);
      this.subscribe();
      // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
      this.__createdByRouter = new WeakMap();
      this.__addedByRouter = new WeakMap();
    }

    __resolveRoute(context) {
      const route = context.route;

      let callbacks = Promise.resolve();

      if (isFunction(route.children)) {
        callbacks = callbacks
          .then(() => route.children(copyContextWithoutNext(context)))
          .then(children => {
            // The route.children() callback might have re-written the
            // route.children property instead of returning a value
            if (!isResultNotEmpty(children) && !isFunction(route.children)) {
              children = route.children;
            }
            processNewChildren(children, route);
          });
      }

      const commands = {
        redirect: path => createRedirect(context, path),
        component: (component) => {
          const element = document.createElement(component);
          this.__createdByRouter.set(element, true);
          return element;
        }
      };

      return callbacks
        .then(() => {
          if (this.__isLatestRender(context)) {
            return runCallbackIfPossible(route.action, [context, commands], route);
          }
        })
        .then(result => {
          if (isResultNotEmpty(result)) {
            // Actions like `() => import('my-view.js')` are not expected to
            // end the resolution, despite the result is not empty. Checking
            // the result with a whitelist of values that end the resolution.
            if (result instanceof HTMLElement ||
                result.redirect ||
                result === notFoundResult) {
              return result;
            }
          }

          if (isString(route.redirect)) {
            return commands.redirect(route.redirect);
          }

          if (route.bundle) {
            return loadBundle(route.bundle)
              .then(() => {}, () => {
                throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
              });
          }
        })
        .then(result => {
          if (isResultNotEmpty(result)) {
            return result;
          }
          if (isString(route.component)) {
            return commands.component(route.component);
          }
        });
    }

    /**
     * Sets the router outlet (the DOM node where the content for the current
     * route is inserted). Any content pre-existing in the router outlet is
     * removed at the end of each render pass.
     *
     * NOTE: this method is automatically invoked first time when creating a new Router instance.
     *
     * @param {?Node} outlet the DOM node where the content for the current route
     *     is inserted.
     */
    setOutlet(outlet) {
      if (outlet) {
        this.__ensureOutlet(outlet);
      }
      this.__outlet = outlet;
    }

    /**
     * Returns the current router outlet. The initial value is `undefined`.
     *
     * @return {?Node} the current router outlet (or `undefined`)
     */
    getOutlet() {
      return this.__outlet;
    }

    /**
     * Sets the routing config (replacing the existing one) and triggers a
     * navigation event so that the router outlet is refreshed according to the
     * current `window.location` and the new routing config.
     *
     * Each route object may have the following properties, listed here in the processing order:
     * * `path` – the route path (relative to the parent route if any) in the
     * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
     *
     * * `children` – an array of nested routes or a function that provides this
     * array at the render time. The function can be synchronous or asynchronous:
     * in the latter case the render is delayed until the returned promise is
     * resolved. The `children` function is executed every time when this route is
     * being rendered. This allows for dynamic route structures (e.g. backend-defined),
     * but it might have a performance impact as well. In order to avoid calling
     * the function on subsequent renders, you can override the `children` property
     * of the route object and save the calculated array there
     * (via `context.route.children = [ route1, route2, ...];`).
     * Parent routes are fully resolved before resolving the children. Children
     * 'path' values are relative to the parent ones.
     *
     * * `action` – the action that is executed before the route is resolved.
     * The value for this property should be a function, accepting `context`
     * and `commands` parameters described below. If present, this function is
     * always invoked first, disregarding of the other properties' presence.
     * The action can return a result directly or within a `Promise`, which
     * resolves to the result. If the action result is an `HTMLElement` instance,
     * a `commands.component(name)` result, a `commands.redirect(path)` result,
     * or a `context.next()` result, the current route resolution is finished,
     * and other route config properties are ignored.
     * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
     * The target route should also be defined.
     * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
     * or the object with "module" and "nomodule" keys referring to different bundles.
     * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
     * depending on whether the browser supports ES modules or not.
     * The property is ignored when either an `action` returns the result or `redirect` property is present.
     * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
     * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * * `component` – the tag name of the Web Component to resolve the route to.
     * The property is ignored when either an `action` returns the result or `redirect` property is present.
     * If route contains the `component` property (or an action that return a component)
     * and its child route also contains the `component` property, child route's component
     * will be rendered as a light dom child of a parent component.
     *
     * * `name` – the string name of the route to use in the
     * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
     * navigation helper method.
     *
     * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
     * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
     * because arrow functions do not have their own `this` reference.
     *
     * `context` object that is passed to `action` function holds the following properties:
     * * `context.pathname` – string with the pathname being resolved
     *
     * * `context.search` – search query string
     *
     * * `context.hash` – hash string
     *
     * * `context.params` – object with route parameters
     *
     * * `context.route` – object that holds the route that is currently being rendered.
     *
     * * `context.next()` – function for asynchronously getting the next route
     * contents from the resolution chain (if any)
     *
     * `commands` object that is passed to `action` function has
     * the following methods:
     *
     * * `commands.redirect(path)` – function that creates a redirect data
     * for the path specified.
     *
     * * `commands.component(component)` – function that creates a new HTMLElement
     * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
     *
     *
     * @param {!Array<!Route>|!Route} routes a single route or an array of those
     * @param {?boolean} skipRender configure the router but skip rendering the
     *     route corresponding to the current `window.location` values
     *
     * @return {!Promise<!Node>}
     */
    setRoutes(routes, skipRender = false) {
      this.__previousContext = undefined;
      this.__urlForName = undefined;
      super.setRoutes(routes);
      if (!skipRender) {
        this.__onNavigationEvent();
      }
      return this.ready;
    }

    /**
     * Asynchronously resolves the given pathname and renders the resolved route
     * component into the router outlet. If no router outlet is set at the time of
     * calling this method, or at the time when the route resolution is completed,
     * a `TypeError` is thrown.
     *
     * Returns a promise that is fulfilled with the router outlet DOM Node after
     * the route component is created and inserted into the router outlet, or
     * rejected if no route matches the given path.
     *
     * If another render pass is started before the previous one is completed, the
     * result of the previous render pass is ignored.
     *
     * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
     *    the pathname to render or a context object with a `pathname` property,
     *    optional `search` and `hash` properties, and other properties
     *    to pass to the resolver.
     * @param {boolean=} shouldUpdateHistory
     *    update browser history with the rendered location
     * @return {!Promise<!Node>}
     */
    render(pathnameOrContext, shouldUpdateHistory) {
      const renderId = ++this.__lastStartedRenderId;
      const context = Object.assign(
        {
          search: '',
          hash: ''
        },
        isString(pathnameOrContext)
          ? {pathname: pathnameOrContext}
          : pathnameOrContext,
        {
          __renderId: renderId
        }
      );

      // Find the first route that resolves to a non-empty result
      this.ready = this.resolve(context)

        // Process the result of this.resolve() and handle all special commands:
        // (redirect / prevent / component). If the result is a 'component',
        // then go deeper and build the entire chain of nested components matching
        // the pathname. Also call all 'on before' callbacks along the way.
        .then(context => this.__fullyResolveChain(context))

        .then(context => {
          if (this.__isLatestRender(context)) {
            const previousContext = this.__previousContext;

            // Check if the render was prevented and make an early return in that case
            if (context === previousContext) {
              // Replace the history with the previous context
              // to make sure the URL stays the same.
              this.__updateBrowserHistory(previousContext, true);
              return this.location;
            }

            this.location = createLocation(context);

            if (shouldUpdateHistory) {
              // Replace only if first render redirects, so that we don’t leave
              // the redirecting record in the history
              this.__updateBrowserHistory(context, renderId === 1);
            }

            fireRouterEvent('location-changed', {router: this, location: this.location});

            // Skip detaching/re-attaching there are no render changes
            if (context.__skipAttach) {
              this.__copyUnchangedElements(context, previousContext);
              this.__previousContext = context;
              return this.location;
            }

            this.__addAppearingContent(context, previousContext);
            const animationDone = this.__animateIfNeeded(context);

            this.__runOnAfterEnterCallbacks(context);
            this.__runOnAfterLeaveCallbacks(context, previousContext);

            return animationDone.then(() => {
              if (this.__isLatestRender(context)) {
                // If there is another render pass started after this one,
                // the 'disappearing content' would be removed when the other
                // render pass calls `this.__addAppearingContent()`
                this.__removeDisappearingContent();

                this.__previousContext = context;
                return this.location;
              }
            });
          }
        })
        .catch(error => {
          if (renderId === this.__lastStartedRenderId) {
            if (shouldUpdateHistory) {
              this.__updateBrowserHistory(context);
            }
            removeDomNodes(this.__outlet && this.__outlet.children);
            this.location = createLocation(Object.assign(context, {resolver: this}));
            fireRouterEvent('error', Object.assign({router: this, error}, context));
            throw error;
          }
        });
      return this.ready;
    }

    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    __fullyResolveChain(topOfTheChainContextBeforeRedirects,
      contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
      return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)
        // `contextAfterRedirects` is always a context with an `HTMLElement` result
        // In other cases the promise gets rejected and .then() is not called
        .then(contextAfterRedirects => {
          const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
          const topOfTheChainContextAfterRedirects =
            redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;

          const matchedPath = getPathnameForRouter(
            getMatchedPath(contextAfterRedirects.chain),
            contextAfterRedirects.resolver
          );
          const isFound = (matchedPath === contextAfterRedirects.pathname);

          // Recursive method to try matching more child and sibling routes
          const findNextContextIfAny = (context, parent = context.route, prevResult) => {
            return context.next(undefined, parent, prevResult).then(nextContext => {
              if (nextContext === null || nextContext === notFoundResult) {
                // Next context is not found in children, ...
                if (isFound) {
                  // ...but original context is already fully matching - use it
                  return context;
                } else if (parent.parent !== null) {
                  // ...and there is no full match yet - step up to check siblings
                  return findNextContextIfAny(context, parent.parent, nextContext);
                } else {
                  return nextContext;
                }
              }

              return nextContext;
            });
          };

          return findNextContextIfAny(contextAfterRedirects).then(nextContext => {
            if (nextContext === null || nextContext === notFoundResult) {
              throw getNotFoundError(topOfTheChainContextAfterRedirects);
            }

            return nextContext
            && nextContext !== notFoundResult
            && nextContext !== contextAfterRedirects
              ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext)
              : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
          });
        });
    }

    __findComponentContextAfterAllRedirects(context) {
      const result = context.result;
      if (result instanceof HTMLElement) {
        renderElement(context, result);
        return Promise.resolve(context);
      } else if (result.redirect) {
        return this.__redirect(result.redirect, context.__redirectCount, context.__renderId)
          .then(context => this.__findComponentContextAfterAllRedirects(context));
      } else if (result instanceof Error) {
        return Promise.reject(result);
      } else {
        return Promise.reject(
          new Error(
            log(
              `Invalid route resolution result for path "${context.pathname}". ` +
              `Expected redirect object or HTML element, but got: "${logValue(result)}". ` +
              `Double check the action return value for the route.`
            )
          ));
      }
    }

    __amendWithOnBeforeCallbacks(contextWithFullChain) {
      return this.__runOnBeforeCallbacks(contextWithFullChain).then(amendedContext => {
        if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) {
          return amendedContext;
        }
        return this.__fullyResolveChain(amendedContext);
      });
    }

    __runOnBeforeCallbacks(newContext) {
      const previousContext = this.__previousContext || {};
      const previousChain = previousContext.chain || [];
      const newChain = newContext.chain;

      let callbacks = Promise.resolve();
      const prevent = () => ({cancel: true});
      const redirect = (pathname) => createRedirect(newContext, pathname);

      newContext.__divergedChainIndex = 0;
      newContext.__skipAttach = false;
      if (previousChain.length) {
        for (let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex) {
          if (previousChain[i].route !== newChain[i].route
            || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element
            || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) {
            break;
          }
        }

        // Skip re-attaching and notifications if element and chain do not change
        newContext.__skipAttach =
          // Same route chain
          newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length &&
          // Same element
          this.__isReusableElement(newContext.result, previousContext.result);

        if (newContext.__skipAttach) {
          // execute onBeforeLeave for changed segment element when skipping attach
          for (let i = newChain.length - 1; i >= 0; i--) {
            callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {prevent}, previousChain[i]);
          }
          // execute onBeforeEnter for changed segment element when skipping attach
          for (let i = 0; i < newChain.length; i++) {
            callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {prevent, redirect}, newChain[i]);
            previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
          }

        } else {
          // execute onBeforeLeave when NOT skipping attach
          for (let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--) {
            callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {prevent}, previousChain[i]);
          }
        }
      }
      // execute onBeforeEnter when NOT skipping attach
      if (!newContext.__skipAttach) {
        for (let i = 0; i < newChain.length; i++) {
          if (i < newContext.__divergedChainIndex) {
            if (i < previousChain.length && previousChain[i].element) {
              previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            }
          } else {
            callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {prevent, redirect}, newChain[i]);
            if (newChain[i].element) {
              newChain[i].element.location = createLocation(newContext, newChain[i].route);
            }
          }
        }
      }
      return callbacks.then(amendmentResult => {
        if (amendmentResult) {
          if (amendmentResult.cancel) {
            this.__previousContext.__renderId = newContext.__renderId;
            return this.__previousContext;
          }
          if (amendmentResult.redirect) {
            return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
          }
        }
        return newContext;
      });
    }

    __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
      const location = createLocation(newContext);
      return callbacks.then(result => {
        if (this.__isLatestRender(newContext)) {
          const afterLeaveFunction = amend('onBeforeLeave', [location, commands, this], chainElement.element);
          return afterLeaveFunction(result);
        }
      }).then(result => {
        if (!(result || {}).redirect) {
          return result;
        }
      });
    }

    __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
      const location = createLocation(newContext, chainElement.route);
      return callbacks.then(result => {
        if (this.__isLatestRender(newContext)) {
          const beforeEnterFunction = amend('onBeforeEnter', [location, commands, this], chainElement.element);
          return beforeEnterFunction(result);
        }
      });
    }

    __isReusableElement(element, otherElement) {
      if (element && otherElement) {
        return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement)
          ? element.localName === otherElement.localName
          : element === otherElement;
      }
      return false;
    }

    __isLatestRender(context) {
      return context.__renderId === this.__lastStartedRenderId;
    }

    __redirect(redirectData, counter, renderId) {
      if (counter > MAX_REDIRECT_COUNT) {
        throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
      }

      return this.resolve({
        pathname: this.urlForPath(
          redirectData.pathname,
          redirectData.params
        ),
        redirectFrom: redirectData.from,
        __redirectCount: (counter || 0) + 1,
        __renderId: renderId
      });
    }

    __ensureOutlet(outlet = this.__outlet) {
      if (!(outlet instanceof Node)) {
        throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
      }
    }

    __updateBrowserHistory({pathname, search = '', hash = ''}, replace) {
      if (window.location.pathname !== pathname
          || window.location.search !== search
          || window.location.hash !== hash
      ) {
        const changeState = replace ? 'replaceState' : 'pushState';
        window.history[changeState](null, document.title, pathname + search + hash);
        window.dispatchEvent(new PopStateEvent('popstate', {state: 'vaadin-router-ignore'}));
      }
    }

    __copyUnchangedElements(context, previousContext) {
      // Find the deepest common parent between the last and the new component
      // chains. Update references for the unchanged elements in the new chain
      let deepestCommonParent = this.__outlet;
      for (let i = 0; i < context.__divergedChainIndex; i++) {
        const unchangedElement = previousContext && previousContext.chain[i].element;
        if (unchangedElement) {
          if (unchangedElement.parentNode === deepestCommonParent) {
            context.chain[i].element = unchangedElement;
            deepestCommonParent = unchangedElement;
          } else {
            break;
          }
        }
      }
      return deepestCommonParent;
    }

    __addAppearingContent(context, previousContext) {
      this.__ensureOutlet();

      // If the previous 'entering' animation has not completed yet,
      // stop it and remove that content from the DOM before adding new one.
      this.__removeAppearingContent();

      // Copy reusable elements from the previousContext to current
      const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);

      // Keep two lists of DOM elements:
      //  - those that should be removed once the transition animation is over
      //  - and those that should remain
      this.__appearingContent = [];
      this.__disappearingContent = Array
        .from(deepestCommonParent.children)
        .filter(
          // Only remove layout content that was added by router
          e => this.__addedByRouter.get(e) &&
          // Do not remove the result element to avoid flickering
          e !== context.result);

      // Add new elements (starting after the deepest common parent) to the DOM.
      // That way only the components that are actually different between the two
      // locations are added to the DOM (and those that are common remain in the
      // DOM without first removing and then adding them again).
      let parentElement = deepestCommonParent;
      for (let i = context.__divergedChainIndex; i < context.chain.length; i++) {
        const elementToAdd = context.chain[i].element;
        if (elementToAdd) {
          parentElement.appendChild(elementToAdd);
          this.__addedByRouter.set(elementToAdd, true);
          if (parentElement === deepestCommonParent) {
            this.__appearingContent.push(elementToAdd);
          }
          parentElement = elementToAdd;
        }
      }
    }

    __removeDisappearingContent() {
      if (this.__disappearingContent) {
        removeDomNodes(this.__disappearingContent);
      }
      this.__disappearingContent = null;
      this.__appearingContent = null;
    }

    __removeAppearingContent() {
      if (this.__disappearingContent && this.__appearingContent) {
        removeDomNodes(this.__appearingContent);
        this.__disappearingContent = null;
        this.__appearingContent = null;
      }
    }

    __runOnAfterLeaveCallbacks(currentContext, targetContext) {
      if (!targetContext) {
        return;
      }

      // REVERSE iteration: from Z to A
      for (let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--) {
        if (!this.__isLatestRender(currentContext)) {
          break;
        }
        const currentComponent = targetContext.chain[i].element;
        if (!currentComponent) {
          continue;
        }
        try {
          const location = createLocation(currentContext);
          runCallbackIfPossible(
            currentComponent.onAfterLeave,
            [location, {}, targetContext.resolver],
            currentComponent);
        } finally {
          if (this.__disappearingContent.indexOf(currentComponent) > -1) {
            removeDomNodes(currentComponent.children);
          }
        }
      }
    }

    __runOnAfterEnterCallbacks(currentContext) {
      // forward iteration: from A to Z
      for (let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++) {
        if (!this.__isLatestRender(currentContext)) {
          break;
        }
        const currentComponent = currentContext.chain[i].element || {};
        const location = createLocation(currentContext, currentContext.chain[i].route);
        runCallbackIfPossible(
          currentComponent.onAfterEnter,
          [location, {}, currentContext.resolver],
          currentComponent);
      }
    }

    __animateIfNeeded(context) {
      const from = (this.__disappearingContent || [])[0];
      const to = (this.__appearingContent || [])[0];
      const promises = [];

      const chain = context.chain;
      let config;
      for (let i = chain.length; i > 0; i--) {
        if (chain[i - 1].route.animate) {
          config = chain[i - 1].route.animate;
          break;
        }
      }

      if (from && to && config) {
        const leave = isObject(config) && config.leave || 'leaving';
        const enter = isObject(config) && config.enter || 'entering';
        promises.push(animate(from, leave));
        promises.push(animate(to, enter));
      }

      return Promise.all(promises).then(() => context);
    }

    /**
     * Subscribes this instance to navigation events on the `window`.
     *
     * NOTE: beware of resource leaks. For as long as a router instance is
     * subscribed to navigation events, it won't be garbage collected.
     */
    subscribe() {
      window.addEventListener('vaadin-router-go', this.__navigationEventHandler);
    }

    /**
     * Removes the subscription to navigation events created in the `subscribe()`
     * method.
     */
    unsubscribe() {
      window.removeEventListener('vaadin-router-go', this.__navigationEventHandler);
    }

    __onNavigationEvent(event) {
      const {pathname, search, hash} = event ? event.detail : window.location;
      if (isString(this.__normalizePathname(pathname))) {
        if (event && event.preventDefault) {
          event.preventDefault();
        }
        this.render({pathname, search, hash}, true);
      }
    }

    /**
     * Configures what triggers Router navigation events:
     *  - `POPSTATE`: popstate events on the current `window`
     *  - `CLICK`: click events on `<a>` links leading to the current page
     *
     * This method is invoked with the pre-configured values when creating a new Router instance.
     * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
     *
     * See the `router-config.js` for the default navigation triggers config. Based on it, you can
     * create the own one and only import the triggers you need, instead of pulling in all the code,
     * e.g. if you want to handle `click` differently.
     *
     * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
     *
     * @param {...NavigationTrigger} triggers
     */
    static setTriggers(...triggers) {
      setNavigationTriggers(triggers);
    }

    /**
     * Generates a URL for the route with the given name, optionally performing
     * substitution of parameters.
     *
     * The route is searched in all the Router instances subscribed to
     * navigation events.
     *
     * **Note:** For child route names, only array children are considered.
     * It is not possible to generate URLs using a name for routes set with
     * a children function.
     *
     * @function urlForName
     * @param {!string} name the route name or the route’s `component` name.
     * @param {Params=} params Optional object with route path parameters.
     * Named parameters are passed by name (`params[name] = value`), unnamed
     * parameters are passed by index (`params[index] = value`).
     *
     * @return {string}
     */
    urlForName(name, params) {
      if (!this.__urlForName) {
        this.__urlForName = generateUrls(this);
      }
      return getPathnameForRouter(
        this.__urlForName(name, params),
        this
      );
    }

    /**
     * Generates a URL for the given route path, optionally performing
     * substitution of parameters.
     *
     * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
     * @param {Params=} params Optional object with route path parameters.
     * Named parameters are passed by name (`params[name] = value`), unnamed
     * parameters are passed by index (`params[index] = value`).
     *
     * @return {string}
     */
    urlForPath(path, params) {
      return getPathnameForRouter(
        Router.pathToRegexp.compile(path)(params),
        this
      );
    }

    /**
     * Triggers navigation to a new path. Returns a boolean without waiting until
     * the navigation is complete. Returns `true` if at least one `Router`
     * has handled the navigation (was subscribed and had `baseUrl` matching
     * the `path` argument), otherwise returns `false`.
     *
     * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
     *   a new in-app path string, or an URL-like object with `pathname`
     *   string property, and optional `search` and `hash` string properties.
     * @return {boolean}
     */
    static go(path) {
      const {pathname, search, hash} = isString(path)
        ? this.__createUrl(path, 'http://a') // some base to omit origin
        : path;
      return fireRouterEvent('go', {pathname, search, hash});
    }
  }

  const DEV_MODE_CODE_REGEXP =
    /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

  const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

  function isMinified() {
    function test() {
      /** vaadin-dev-mode:start
      return false;
      vaadin-dev-mode:end **/
      return true;
    }
    return uncommentAndRun(test);
  }

  function isDevelopmentMode() {
    try {
      if (isForcedDevelopmentMode()) {
        return true;
      }

      if (!isLocalhost()) {
        return false;
      }

      if (FlowClients) {
        return !isFlowProductionMode();
      }

      return !isMinified();
    } catch (e) {
      // Some error in this code, assume production so no further actions will be taken
      return false;
    }
  }

  function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
  }

  function isLocalhost() {
    return (["localhost","127.0.0.1"].indexOf(window.location.hostname) >= 0);
  }

  function isFlowProductionMode() {
    if (FlowClients) {
      const productionModeApps = Object.keys(FlowClients)
        .map(key => FlowClients[key])
        .filter(client => client.productionMode);
      if (productionModeApps.length > 0) {
        return true;
      }
    }
    return false;
  }

  function uncommentAndRun(callback, args) {
    if (typeof callback !== 'function') {
      return;
    }

    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) {
      try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
      } catch (e) {
        // eat the exception
        console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
      }
    }

    return callback(args);
  }

  // A guard against polymer-modulizer removing the window.Vaadin
  // initialization above.
  window['Vaadin'] = window['Vaadin'] || {};

  /**
   * Inspects the source code of the given `callback` function for
   * specially-marked _commented_ code. If such commented code is found in the
   * callback source, uncomments and runs that code instead of the callback
   * itself. Otherwise runs the callback as is.
   *
   * The optional arguments are passed into the callback / uncommented code,
   * the result is returned.
   *
   * See the `isMinified()` function source code in this file for an example.
   *
   */
  const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) {
      return uncommentAndRun(callback, args);
    }
  };

  if (window.Vaadin.developmentMode === undefined) {
    window.Vaadin.developmentMode = isDevelopmentMode();
  }

  /* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

  function maybeGatherAndSendStats() {
    /** vaadin-dev-mode:start
    (function () {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var getPolymerVersion = function getPolymerVersion() {
    return window.Polymer && window.Polymer.version;
  };

  var StatisticsGatherer = function () {
    function StatisticsGatherer(logger) {
      classCallCheck(this, StatisticsGatherer);

      this.now = new Date().getTime();
      this.logger = logger;
    }

    createClass(StatisticsGatherer, [{
      key: 'frameworkVersionDetectors',
      value: function frameworkVersionDetectors() {
        return {
          'Flow': function Flow() {
            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                return window.Vaadin.Flow.clients[key];
              }).filter(function (client) {
                return client.getVersionInfo;
              }).map(function (client) {
                return client.getVersionInfo().flow;
              });
              if (flowVersions.length > 0) {
                return flowVersions[0];
              }
            }
          },
          'Vaadin Framework': function VaadinFramework() {
            if (window.vaadin && window.vaadin.clients) {
              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                return client.getVersionInfo;
              }).map(function (client) {
                return client.getVersionInfo().vaadinVersion;
              });
              if (frameworkVersions.length > 0) {
                return frameworkVersions[0];
              }
            }
          },
          'AngularJs': function AngularJs() {
            if (window.angular && window.angular.version && window.angular.version) {
              return window.angular.version.full;
            }
          },
          'Angular': function Angular() {
            if (window.ng) {
              var tags = document.querySelectorAll("[ng-version]");
              if (tags.length > 0) {
                return tags[0].getAttribute("ng-version");
              }
              return "Unknown";
            }
          },
          'Backbone.js': function BackboneJs() {
            if (window.Backbone) {
              return window.Backbone.VERSION;
            }
          },
          'React': function React() {
            var reactSelector = '[data-reactroot], [data-reactid]';
            if (!!document.querySelector(reactSelector)) {
              // React does not publish the version by default
              return "unknown";
            }
          },
          'Ember': function Ember() {
            if (window.Em && window.Em.VERSION) {
              return window.Em.VERSION;
            } else if (window.Ember && window.Ember.VERSION) {
              return window.Ember.VERSION;
            }
          },
          'jQuery': function (_jQuery) {
            function jQuery() {
              return _jQuery.apply(this, arguments);
            }

            jQuery.toString = function () {
              return _jQuery.toString();
            };

            return jQuery;
          }(function () {
            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
              return jQuery.prototype.jquery;
            }
          }),
          'Polymer': function Polymer() {
            var version = getPolymerVersion();
            if (version) {
              return version;
            }
          },
          'LitElement': function LitElement() {
            var version = window.litElementVersions && window.litElementVersions[0];
            if (version) {
              return version;
            }
          },
          'LitHtml': function LitHtml() {
            var version = window.litHtmlVersions && window.litHtmlVersions[0];
            if (version) {
              return version;
            }
          },
          'Vue.js': function VueJs() {
            if (window.Vue) {
              return window.Vue.version;
            }
          }
        };
      }
    }, {
      key: 'getUsedVaadinElements',
      value: function getUsedVaadinElements(elements) {
        var version = getPolymerVersion();
        var elementClasses = void 0;
        // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
        // Check all locations calling the method getEntries() in
        // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
        // Currently it is only used by BootstrapHandler.
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: components classes are stored in window.Vaadin
          elementClasses = Object.keys(window.Vaadin).map(function (c) {
            return window.Vaadin[c];
          }).filter(function (c) {
            return c.is;
          });
        } else {
          // Polymer 3: components classes are stored in window.Vaadin.registrations
          elementClasses = window.Vaadin.registrations || [];
        }
        elementClasses.forEach(function (klass) {
          var version = klass.version ? klass.version : "0.0.0";
          elements[klass.is] = { version: version };
        });
      }
    }, {
      key: 'getUsedVaadinThemes',
      value: function getUsedVaadinThemes(themes) {
        ['Lumo', 'Material'].forEach(function (themeName) {
          var theme;
          var version = getPolymerVersion();
          if (version && version.indexOf('2') === 0) {
            // Polymer 2: themes are stored in window.Vaadin
            theme = window.Vaadin[themeName];
          } else {
            // Polymer 3: themes are stored in custom element registry
            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
          }
          if (theme && theme.version) {
            themes[themeName] = { version: theme.version };
          }
        });
      }
    }, {
      key: 'getFrameworks',
      value: function getFrameworks(frameworks) {
        var detectors = this.frameworkVersionDetectors();
        Object.keys(detectors).forEach(function (framework) {
          var detector = detectors[framework];
          try {
            var version = detector();
            if (version) {
              frameworks[framework] = { version: version };
            }
          } catch (e) {}
        });
      }
    }, {
      key: 'gather',
      value: function gather(storage) {
        var storedStats = storage.read();
        var gatheredStats = {};
        var types = ["elements", "frameworks", "themes"];

        types.forEach(function (type) {
          gatheredStats[type] = {};
          if (!storedStats[type]) {
            storedStats[type] = {};
          }
        });

        var previousStats = JSON.stringify(storedStats);

        this.getUsedVaadinElements(gatheredStats.elements);
        this.getFrameworks(gatheredStats.frameworks);
        this.getUsedVaadinThemes(gatheredStats.themes);

        var now = this.now;
        types.forEach(function (type) {
          var keys = Object.keys(gatheredStats[type]);
          keys.forEach(function (key) {
            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
              storedStats[type][key] = { firstUsed: now };
            }
            // Discards any previously logged version number
            storedStats[type][key].version = gatheredStats[type][key].version;
            storedStats[type][key].lastUsed = now;
          });
        });

        var newStats = JSON.stringify(storedStats);
        storage.write(newStats);
        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
          this.logger.debug("New stats: " + newStats);
        }
      }
    }]);
    return StatisticsGatherer;
  }();

  var StatisticsStorage = function () {
    function StatisticsStorage(key) {
      classCallCheck(this, StatisticsStorage);

      this.key = key;
    }

    createClass(StatisticsStorage, [{
      key: 'read',
      value: function read() {
        var localStorageStatsString = localStorage.getItem(this.key);
        try {
          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
        } catch (e) {
          return {};
        }
      }
    }, {
      key: 'write',
      value: function write(data) {
        localStorage.setItem(this.key, data);
      }
    }, {
      key: 'clear',
      value: function clear() {
        localStorage.removeItem(this.key);
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        var storedStats = this.read();
        var empty = true;
        Object.keys(storedStats).forEach(function (key) {
          if (Object.keys(storedStats[key]).length > 0) {
            empty = false;
          }
        });

        return empty;
      }
    }]);
    return StatisticsStorage;
  }();

  var StatisticsSender = function () {
    function StatisticsSender(url, logger) {
      classCallCheck(this, StatisticsSender);

      this.url = url;
      this.logger = logger;
    }

    createClass(StatisticsSender, [{
      key: 'send',
      value: function send(data, errorHandler) {
        var logger = this.logger;

        if (navigator.onLine === false) {
          logger.debug("Offline, can't send");
          errorHandler();
          return;
        }
        logger.debug("Sending data to " + this.url);

        var req = new XMLHttpRequest();
        req.withCredentials = true;
        req.addEventListener("load", function () {
          // Stats sent, nothing more to do
          logger.debug("Response: " + req.responseText);
        });
        req.addEventListener("error", function () {
          logger.debug("Send failed");
          errorHandler();
        });
        req.addEventListener("abort", function () {
          logger.debug("Send aborted");
          errorHandler();
        });
        req.open("POST", this.url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
      }
    }]);
    return StatisticsSender;
  }();

  var StatisticsLogger = function () {
    function StatisticsLogger(id) {
      classCallCheck(this, StatisticsLogger);

      this.id = id;
    }

    createClass(StatisticsLogger, [{
      key: '_isDebug',
      value: function _isDebug() {
        return localStorage.getItem("vaadin." + this.id + ".debug");
      }
    }, {
      key: 'debug',
      value: function debug(msg) {
        if (this._isDebug()) {
          console.info(this.id + ": " + msg);
        }
      }
    }]);
    return StatisticsLogger;
  }();

  var UsageStatistics = function () {
    function UsageStatistics() {
      classCallCheck(this, UsageStatistics);

      this.now = new Date();
      this.timeNow = this.now.getTime();
      this.gatherDelay = 10; // Delay between loading this file and gathering stats
      this.initialDelay = 24 * 60 * 60;

      this.logger = new StatisticsLogger("statistics");
      this.storage = new StatisticsStorage("vaadin.statistics.basket");
      this.gatherer = new StatisticsGatherer(this.logger);
      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
    }

    createClass(UsageStatistics, [{
      key: 'maybeGatherAndSend',
      value: function maybeGatherAndSend() {
        var _this = this;

        if (localStorage.getItem(UsageStatistics.optOutKey)) {
          return;
        }
        this.gatherer.gather(this.storage);
        setTimeout(function () {
          _this.maybeSend();
        }, this.gatherDelay * 1000);
      }
    }, {
      key: 'lottery',
      value: function lottery() {
        return true;
      }
    }, {
      key: 'currentMonth',
      value: function currentMonth() {
        return this.now.getYear() * 12 + this.now.getMonth();
      }
    }, {
      key: 'maybeSend',
      value: function maybeSend() {
        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

        if (!firstUse) {
          // Use a grace period to avoid interfering with tests, incognito mode etc
          firstUse = this.timeNow;
          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
        }

        if (this.timeNow < firstUse + this.initialDelay * 1000) {
          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
          return;
        }
        if (this.currentMonth() <= monthProcessed) {
          this.logger.debug("This month has already been processed");
          return;
        }
        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
        // Use random sampling
        if (this.lottery()) {
          this.logger.debug("Congratulations, we have a winner!");
        } else {
          this.logger.debug("Sorry, no stats from you this time");
          return;
        }

        this.send();
      }
    }, {
      key: 'send',
      value: function send() {
        // Ensure we have the latest data
        this.gatherer.gather(this.storage);

        // Read, send and clean up
        var data = this.storage.read();
        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
        data["usageStatisticsVersion"] = UsageStatistics.version;
        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
        var self = this;
        this.sender.send(info + JSON.stringify(data), function () {
          // Revert the 'month processed' flag
          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
        });
      }
    }], [{
      key: 'version',
      get: function get$1() {
        return '2.1.2';
      }
    }, {
      key: 'firstUseKey',
      get: function get$1() {
        return 'vaadin.statistics.firstuse';
      }
    }, {
      key: 'monthProcessedKey',
      get: function get$1() {
        return 'vaadin.statistics.monthProcessed';
      }
    }, {
      key: 'optOutKey',
      get: function get$1() {
        return 'vaadin.statistics.optout';
      }
    }]);
    return UsageStatistics;
  }();

  try {
    window.Vaadin = window.Vaadin || {};
    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
    // Intentionally ignored as this is not a problem in the app being developed
  }

  }());

    vaadin-dev-mode:end **/
  }

  const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === 'function') {
      return runIfDevelopmentMode(maybeGatherAndSendStats);
    }
  };

  window.Vaadin = window.Vaadin || {};
  window.Vaadin.registrations = window.Vaadin.registrations || [];

  window.Vaadin.registrations.push({
    is: '@vaadin/router',
    version: '1.7.4',
  });

  usageStatistics();

  Router.NavigationTrigger = {POPSTATE, CLICK};

  let bd;

   

  function StartDataBase(){

      let request = indexedDB.open("Dale-Topo");
      request.addEventListener("error", ShowError);
      request.addEventListener("success",Start);
      request.addEventListener("upgradeneeded",CreateDataUsers);
  }

  let ShowError = (event) => {
      alert("Error" + event.code + "/" + event.message);
  };

  let Start =  (event) => {
      bd = event.target.result;
  };

  let CreateDataUsers = (event) => {
      let database = event.target.result;
      let warehouse = database.createObjectStore("Users",{keyPath: "user"});
      warehouse.createIndex("userPoints","points",{unique: false});
  };

  function ValidateUser(userName) {
      return new Promise((resolve, reject) => {
        let transaction = bd.transaction(["Users"], "readwrite");
        let myWarehouse = transaction.objectStore("Users");
        const request = myWarehouse.get(userName);
        request.onsuccess = function (event) {
          const user = event.target.result;
          if (user) {
            resolve(user.points); // Resuelve la promesa con los puntos del usuario
          } else {
            myWarehouse.add({
              user: userName,
              points: 0
            });
            resolve(0); // Resuelve la promesa con 0 puntos (usuario recién agregado)
          }
        };

        request.onerror = function (event) {
          console.error("Error al buscar el usuario:", event.target.error);
          reject(event.target.error); // Rechaza la promesa en caso de error
        };
      });
    }

  class BotonComponentLit extends s {
    static properties = {
      name: { type: String },
    };

    static styles = i$1`
    button {
      font-size: 16px;
      line-height: normal;
      font-family: "BentonSans";
      font-weight: 400;
      background-color: #004481;
      border-radius: 5px;
      color: white;
      width: 150px;
      height: 20px;
    }
  `;

    render() {
      return x` <button id="boton">${this.name}</button> `;
    }
  }
  customElements.define("boton-lit", BotonComponentLit);

  class Home extends s {

    static styles = i$1`
  .contenedor {
    width: 400px;
  }

    img{
      margin-top: 100px;
      margin-bottom: 30px;
    }

    input{
      display: block;
      margin-top: 60px;
      margin-left: 125px; 
      margin-bottom: 20px;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      background-color: transparent;
      border-bottom: 3px solid #2970CA !important;
    }
  `;

    static properties = {
      name: {type: String}
    }

    constructor() {
      super();
      this.name = "Jugar";
    }

    render() {
      return x`
    <div class= "contenedor">
      <img src="../../assets/images/icons/martillo.png" alt="">
      <input id="player" type="text" placeholder="Nombre">
      <boton-lit @click="${this.comprobar}" name="${this.name}"></boton-lit>
    </div>
    `;
    }
      
    async comprobar(e){
      const myPlayer = this.shadowRoot.getElementById("player");
      const playerName = myPlayer.value;
      if(playerName != ""){
        try{
          this.score = await ValidateUser(playerName);
          location.href = `/game?value=${encodeURIComponent(playerName)}&score=${encodeURIComponent(this.score)}`;
        }
         catch (error) { }
      }
      else
        location.href="/";
    }

  }
  customElements.define("home-view", Home);

  class CardProfile extends s {
    static styles = i$1`
    img {
      color: white;
      margin-top: 5px;
      height: 50px;
    }

    label {
      color: white;
      font-size: 1.5rem;
      float: right;
      margin-top: 15px;
    }
  `;

    constructor() {
      super();
      const urlParams = new URLSearchParams(window.location.search);
      this.valueReceived = urlParams.get("value");
    }

    render() {
      return x`
      <img src="../../assets/images/icons/perfil-del-usuario.png" alt="" />
      <label>${this.valueReceived}</label>
    `;
    }
  }
  customElements.define("card-lit", CardProfile);

  class ComboLevel extends s {
    static styles = i$1`
    select {
      margin-left: 10px;
      margin-bottom: 15px;
      background-color: blue;
      border-radius: 5px;
      color:white;
      border: none;
      border-Bottom: 1px solid black;
    }
  `;

    static properties = {
      options: [Array]
    };

    render() {
      return x`
      <select id="sel" @change="${this._selectedOption}">
        ${this.options.map((option) => x`<option>${option.value}</option>`)}
      </select>
    `;
    }

    _selectedOption(event) {
      this.dispatchEvent(new CustomEvent("item-selected", {detail: event.target.value}));
    }
  }

  customElements.define("combo-lit", ComboLevel);

  class HitTheMole extends s {
    static styles = i$1`
    .square {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      margin: 10px;
      background-color: transparent;
    }

    img {
      background-size: cover;
      background-repeat: no-repeat;
      width: 100px;
      height: 100px;
    }

    button{
      border: 0px;   
      margin: 0px;
      padding: 0px;
      background-color: transparent;
    }
  `;

    static properties = {
      enableButton: {type: Boolean, value: true},
      mostrar: {type: Boolean}
    }

    constructor(){
      super();
      this.mostrar = false;
    }
    
    get _renderImage(){
      return x`<img src="../../assets/images/topo.png"/>`;
    }

    render() {
      return x`
      <button ?disabled="${this.enableButton}"><div class="square">${this.mostrar ? this._renderImage: ""}</div></button>
    `;
    }


  }

  customElements.define("hitmole-lit", HitTheMole);

  class Game extends s {
    
    static styles = i$1`
    header {
      background-color: blue;
      height: 60px;
    }

    .left {
      margin-left: 5px;
      float: left;
      position: relative;
      width: 30%;
      height: auto;
    }

    .right {
      margin-top: 15px;
      margin-left: 70px;
      position: relative;
      float: left;
      width: 50%;
      height: auto;
    }

    h3 {
      float: right;
      margin-right: 20px;
    }

    label {
      color: white;
      font-size: 1.2rem;
    }

    .grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: center;
      width: 400px;
      height: 400px;
    }
  `;

    static properties = {
      name: {type: String},
      puntos: { type: Number},
      mensajeAcierto: {type: String, value: ""}, 
      mostrar: {type: Boolean},
      topos: {type: Array},
      playerTouch: {type: Boolean},
      dificultad: {type: String},
    };

    constructor() {
      super();
      this.toposModel = [ false, false, false,false, false, false,false, false, false];
      this.name = "START";
      this.dificultad = "Bajo";
      this.puntos = 0;
      this.topos = [...this.toposModel];
      this.playerTouch = false;
      this.currentInterval = null;
    }

    render() {
      return x`
      <header>
        <div class="left">
          <card-lit></card-lit>
        </div>
        <div class="right">
          <label>Nivel</label>   
          <combo-lit @item-selected="${this.handleSelectedOption}"
            id="dificultad"
             .options="${[
              { value: "Bajo" },
              { value: "Medio" },
              { value: "Alto" },]}">   
          </combo-lit>  
        </div>
      </header>
      <h3>Puntos: <span>${this.puntos}</span></h3>
      <div class="grid"> 
        ${this.topos.map(item => x`<hitmole-lit .enableButton="${this.clickDisabled}" .mostrar=${item} @click="${() => this.elegido(item)}"></hitmole-lit>`)}
      </div>
      <boton-lit id="boton" @click="${this.startStop}" name="${this.name}"></boton-lit>
      <footer>
        <p>${this.mensajeAcierto}</p>
      </footer>
    `;
    }

    //manejador que recibe el valor de la opcion del combo elegida
    handleSelectedOption(event){
      this.dificultad = event.detail;
      this.currentInterval = null;
    }

     myInterval(time){
      let movRandom = 0;
      return setInterval( () => {
        movRandom = Math.floor(Math.random() * this.topos.length);
        this.toposModel[movRandom] = true;
        this.topos = [...this.toposModel];
        this.toposModel[movRandom] = false;
        this.clickDisabled = false;
        this.mensajeAcierto = "";
      }, this.time);
    }

    seleccionDificultad(){
      if(this.currentInterval == null){  
        clearInterval(this.currentInterval);   
      }

      if(this.dificultad == "Bajo"){
        this.time = 1000;
        this.currentInterval = null;
        this.currentInterval = this.myInterval(this.time);
      }
      else if(this.dificultad == "Medio"){
        this.time = 750;  
        this.currentInterval = null;
        this.currentInterval = this.myInterval(this.time);
      }
      else if(this.dificultad == "Alto"){
        this.time = 500;
        this.currentInterval = this.myInterval(this.time);
      }   
    }

    elegido(item){
      if(!this.clickDisabled){
        this.clickDisabled = true;
        this.playerTouch = item;
        if(this.playerTouch == true){
          if(this.dificultad == "Bajo")
            this.puntos = this.puntos + 10;
          else if(this.dificultad == "Medio")
            this.puntos = this.puntos + 20;
          else if(this.dificultad == "Alto")
            this.puntos = this.puntos + 30;
          this.mensajeAcierto = "Le diste";
        }      
      }
    }

    //funcion que inicia y detiene el juego al pulsar el boton y mueve al topo 
    startStop() {
      this.name = this.name === "START" ? "STOP" : "START"; 
      if(this.name != "START"){
        if(this.dificultad == "Bajo"){
          this.seleccionDificultad();
        }
        if(this.dificultad == "Medio"){
          this.seleccionDificultad();
        }
        if(this.dificultad == "Alto"){
          this.seleccionDificultad();
        }
      }
      if(this.name != "STOP"){ 
        clearInterval(this.currentInterval);
      }
      
    }



  }
  customElements.define("game-view", Game);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
        });
  }

  class Principal extends s {

    static styles = i$1` 
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
     
    }

    main {
      flex-grow: 1;
      background: rgb(238,174,202);
      background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    }
  `;

    firstUpdated() {
      super.firstUpdated();
      const router = new Router(this.shadowRoot.querySelector('#outlet'));
      router.setRoutes([
        { path: '/', component: 'home-view' },
        { path: '/game', component: 'game-view' },
        { path: '(.*)', redirect: '/' },
      ]);
      StartDataBase();
    }

    render() {
      return x`
      <main>
        <div id="outlet"></div>
      </main>
    `;
    }
  }

  customElements.define('my-principal', Principal);

})();
