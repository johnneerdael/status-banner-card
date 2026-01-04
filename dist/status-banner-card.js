function t(t,e,i,s){var a,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",v=g.reactiveElementPolyfillSupport,m=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);a?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),a=e.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const o=a.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){if(void 0!==t){const o=this.constructor;if(!1===s&&(a=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??b)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,v?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,S=w.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+L,R=`<${k}>`,T=document,M=()=>T.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,N="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,B=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,F=/"/g,j=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,J=T.createTreeWalker(T,129);function Z(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let a,o=2===e?"<svg>":3===e?"<math>":"",n=D;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===D?"!--"===l[1]?n=U:void 0!==l[1]?n=O:void 0!==l[2]?(j.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=B):void 0!==l[3]&&(n=B):n===B?">"===l[0]?(n=a??D,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?B:'"'===l[3]?F:H):n===F||n===H?n=B:n===U||n===O?n=D:(n=B,a=void 0);const d=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===D?i+R:c>=0?(s.push(r),i.slice(0,c)+E+i.slice(c)+L+d):i+L+(-2===c?e:d)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,o=0;const n=t.length-1,r=this.parts,[l,c]=K(t,e);if(this.el=Y.createElement(l,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&r.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[o++],i=s.getAttribute(t).split(L),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(L)&&(r.push({type:6,index:a}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(L),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),J.nextNode(),r.push({type:2,index:++a});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===k)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(L,t+1));)r.push({type:7,index:a}),t+=L.length-1}a++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===W)return e;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(e=G(t,a._$AS(t,e.values),a,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);J.currentNode=s;let a=J.nextNode(),o=0,n=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new X(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new at(a,this,t)),this._$AV.push(e),r=i[++n]}o!==r?.index&&(a=J.nextNode(),o++)}return J.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),z(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new X(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const a=this.strings;let o=!1;if(void 0===a)t=G(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=G(this,s[i+n],e,n),r===W&&(r=this._$AH[n]),o||=!z(r)||r!==this._$AH[n],r===V?t=V:t!==V&&(t+=(r??"")+a[n+1]),this._$AH[n]=r}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(Y,X),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new X(e.insertBefore(M(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},dt=(t=ht,e,i)=>{const{kind:s,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,a,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];e.call(this,i),this.requestUpdate(s,a,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ut({...t,state:!0,attribute:!1})}function gt(t,e){return t&&"string"==typeof t?t.includes("{{")?t.replace(/\{\{\s*(.+?)\s*\}\}/g,(t,i)=>{try{return function(t,e){const i=t.split("|").map(t=>t.trim());let s=ft(i[0],e);for(let t=1;t<i.length;t++)s=_t(s,i[t],e);return String(s??"")}(i.trim(),e)}catch(t){return console.warn(`[status-banner-card] Failed to evaluate expression: ${i}`,t),""}}):t:t??""}function ft(t,e){if("state"===t)return e.state;if(t.startsWith("attr.")){const i=t.substring(5);return e.attr[i]}const i=t.match(/^states\(['"](.+)['"]\)$/);if(i)return e.hass.states[i[1]]?.state??"unknown";const s=t.match(/^state_attr\(['"](.+)['"],\s*['"](.+)['"]\)$/);if(s)return e.hass.states[s[1]]?.attributes[s[2]];const a=t.match(/^as_timestamp\((.+)\)$/);if(a){const t=ft(a[1].trim(),e),i=new Date(String(t));return isNaN(i.getTime())?0:i.getTime()/1e3}const o=t.match(/^['"](.+)['"]$/);if(o)return o[1];const n=parseFloat(t);return isNaN(n)?t:n}function _t(t,e,i){const s=e.match(/^(\w+)(?:\((.+)\))?$/);if(!s)return t;const[,a,o]=s,n=String(t??"");switch(a){case"upper":return n.toUpperCase();case"lower":return n.toLowerCase();case"capitalize":return n.charAt(0).toUpperCase()+n.slice(1).toLowerCase();case"title":return n.replace(/\b\w/g,t=>t.toUpperCase());case"replace":{const[t,e]=vt(o);return n.replace(new RegExp(function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(t),"g"),e??"")}case"default":{const[t]=vt(o);return n&&"unknown"!==n&&"unavailable"!==n?n:t??""}case"color_map":return i.colorMap?.[n]??i.colorMap?.default??n;case"timestamp_custom":{const[e]=vt(o),i="number"==typeof t?t:parseFloat(n);if(isNaN(i))return n;return function(t,e){const i=(t,e=2)=>String(t).padStart(e,"0"),s={"%Y":String(t.getFullYear()),"%y":String(t.getFullYear()).slice(-2),"%m":i(t.getMonth()+1),"%d":i(t.getDate()),"%H":i(t.getHours()),"%M":i(t.getMinutes()),"%S":i(t.getSeconds()),"%I":i(t.getHours()%12||12),"%p":t.getHours()>=12?"PM":"AM","%j":i(mt(t),3),"%w":String(t.getDay()),"%a":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],"%A":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],"%b":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],"%B":["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],"%%":"%"};let a=e;for(const[t,e]of Object.entries(s))a=a.replace(new RegExp(t,"g"),e);return a}(new Date(1e3*i),e??"%H:%M")}case"round":{const[e]=vt(o),i="number"==typeof t?t:parseFloat(n);if(isNaN(i))return n;const s=parseInt(e??"0",10);return i.toFixed(s)}case"int":{const e="number"==typeof t?t:parseFloat(n);return isNaN(e)?0:Math.floor(e)}case"float":{const t=parseFloat(n);return isNaN(t)?0:t}default:return console.warn(`[status-banner-card] Unknown filter: ${a}`),t}}function vt(t){if(!t)return[];const e=[];let i="",s=!1,a="";for(let o=0;o<t.length;o++){const n=t[o];'"'!==n&&"'"!==n||s?n===a&&s?(s=!1,a=""):","!==n||s?i+=n:(e.push(i.trim()),i=""):(s=!0,a=n)}return i.trim()&&e.push(i.trim()),e.map(t=>t.replace(/^['"]|['"]$/g,""))}function mt(t){const e=new Date(t.getFullYear(),0,0),i=t.getTime()-e.getTime();return Math.floor(i/864e5)}const $t={show_accent:!0,show_pattern:!0,show_status:!0,show_footer:!0,header_height:"120px",icon_size:"54px",border_radius:"16px",timestamp_attribute:"last_triggered",status_label:"Status",pattern_size:20,accent_width:60,accent_height:100,status_opacity:90,accent_start:"bottom-left",accent_end:"top-right",accent_full_background:!1,title_alignment:"right",icon_alignment:"right",timestamp_position:"bottom-left",button_position:"bottom-right",color_map:{blue:"#2196F3",green:"#4CAF50",purple:"#9C27B0",black:"#686868",red:"#F44336",orange:"#FF9800",yellow:"#FFEB3B",default:"#9E9E9E"}},bt={title:"Entity Not Found",subtitle:"Check configuration",icon:"mdi:alert-circle",color:"#F44336",statusText:"The configured entity could not be found."},yt={title:"Unknown State",subtitle:"",icon:"mdi:information",color:"#9E9E9E",status_text:""},xt="status-banner-card",wt="Status Banner Card",At="A flexible status card with banner design for any entity",St="https://github.com/johnneerdael/status-banner-card";function Ct(t,e,i){if(void 0!==t.state)if(t.state.startsWith("/")&&t.state.endsWith("/")){if(!new RegExp(t.state.slice(1,-1)).test(e))return!1}else if(t.state.startsWith("~")){if(t.state.slice(1).toLowerCase()!==e.toLowerCase())return!1}else if(t.state!==e)return!1;if(t.attribute){const e=String(i[t.attribute.name]??"");if(t.attribute.value.startsWith("/")&&t.attribute.value.endsWith("/")){if(!new RegExp(t.attribute.value.slice(1,-1)).test(e))return!1}else if(e!==t.attribute.value)return!1}return!0}function Et(t,e,i,s,a,o){const n=t.states[e];if(!n)return{...bt,subtitle:e,statusLabel:o||"Status"};const r=n.state,l=n.attributes,c={hass:t,entity:e,state:r,attr:l,colorMap:a},h=i?function(t,e,i){for(const s of i)if(Ct(s,t,e))return s;return null}(r,l,i):null,d=h||s||yt;return{title:gt(d.title||r,c),subtitle:gt(d.subtitle||"",c),icon:gt(d.icon||"mdi:information",c),color:gt(d.color||"#9E9E9E",c),statusText:gt(d.status_text||"",c),statusLabel:gt(o||"Status",c),titleFontSize:d.title_font_size,subtitleFontSize:d.subtitle_font_size}}const Lt=n`
  :host {
    --sbc-card-bg: var(--card-background-color, #fff);
    --sbc-primary-text: var(--primary-text-color, #212121);
    --sbc-secondary-text: var(--secondary-text-color, #727272);
    --sbc-secondary-bg: var(--secondary-background-color, #f5f5f5);
    --sbc-divider: var(--divider-color, #e0e0e0);
  }

  ha-card {
    background: none !important;
    box-shadow: none !important;
    border: none !important;
    overflow: hidden;
    cursor: pointer;
  }

  .card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius, 16px);
    overflow: hidden;
    background: var(--sbc-card-bg);
    box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.1));
  }

  /* ═══════════════════════════════════════════════════════════════
     CARD ACCENT (spans entire card)
     ═══════════════════════════════════════════════════════════════ */

  .card-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--accent-width, 60%);
    height: var(--accent-height, 100%);
    background-color: var(--accent-color);
    /* clip-path is now set dynamically via inline style */
    z-index: 0;
    transition: background-color 0.3s ease;
  }

  .card-accent.with-pattern {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: var(--pattern-size, 20px) var(--pattern-size, 20px);
  }

  /* ═══════════════════════════════════════════════════════════════
     HEADER
     ═══════════════════════════════════════════════════════════════ */

  .header {
    position: relative;
    z-index: 1;
    min-height: var(--header-height, 120px);
    display: flex;
    align-items: center;
    width: 100%;
  }

  .header-content {
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content is now set dynamically via inline style */
    align-items: center;
    padding: 0 24px 0 16px;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    /* text-align and margin are now set dynamically via inline style */
  }

  .title {
    font-size: var(--title-font-size, 1.5rem);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.05em;
    color: var(--sbc-primary-text);
    word-break: break-word;
  }

  .subtitle {
    font-size: var(--subtitle-font-size, 1.125rem);
    font-weight: 500;
    opacity: 0.6;
    margin-top: 4px;
    color: var(--sbc-secondary-text);
  }

  .header-icon {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    flex-shrink: 0;
  }

  /* ═══════════════════════════════════════════════════════════════
     BODY
     ═══════════════════════════════════════════════════════════════ */

  .body {
    position: relative;
    z-index: 1;
    padding: 0 24px;
  }

  .status-box {
    position: relative;
    font-size: 1rem;
    line-height: 1.6;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--sbc-divider);
  }

  .status-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--sbc-secondary-bg);
    opacity: var(--status-opacity, 0.9);
    border-radius: inherit;
    z-index: -1;
  }

  .status-label {
    font-weight: 700;
  }

  .status-text {
    opacity: 0.9;
  }

  /* ═══════════════════════════════════════════════════════════════
     FOOTER (proper document flow)
     ═══════════════════════════════════════════════════════════════ */

  .footer {
    position: relative;
    z-index: 1;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .footer.left-only {
    justify-content: flex-start;
  }

  .footer.right-only {
    justify-content: flex-end;
  }

  .footer.center {
    justify-content: center;
  }

  .footer-left,
  .footer-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .footer-left {
    align-items: flex-start;
  }

  .footer-right {
    align-items: flex-end;
  }

  .timestamp {
    font-size: 0.75rem;
    font-family: var(--paper-font-code-family, monospace);
    opacity: 0.4;
    color: var(--sbc-primary-text);
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-family: inherit;
  }

  .action-btn:hover {
    opacity: 0.85;
  }

  .action-btn:active {
    transform: scale(0.95);
  }

  .action-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ═══════════════════════════════════════════════════════════════
     ANIMATIONS
     ═══════════════════════════════════════════════════════════════ */

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  .loading {
    animation: pulse 1.5s infinite ease-in-out;
  }

  /* ═══════════════════════════════════════════════════════════════
     RESPONSIVE
     ═══════════════════════════════════════════════════════════════ */

  @media (max-width: 400px) {
    .title {
      font-size: 1.25rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .header-content {
      padding: 0 16px;
    }

    .body,
    .footer {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`,kt={"top-left":"0 0","top-right":"100% 0","bottom-left":"0 100%","bottom-right":"100% 100%"};let Rt=class extends rt{setConfig(t){this._config={...$t,...t,color_map:{...$t.color_map,...t.color_map}}}getCardSize(){return!1===this._config?.show_status&&!1===this._config?.show_footer?2:3}shouldUpdate(t){if(t.has("_config"))return!0;if(t.has("hass")){const e=t.get("hass");if(!e)return!0;const i=this._config.entity;return e.states[i]!==this.hass.states[i]||(!(!this._config.timestamp_entity||e.states[this._config.timestamp_entity]===this.hass.states[this._config.timestamp_entity])||(!(!this._config.secondary_info_entity||e.states[this._config.secondary_info_entity]===this.hass.states[this._config.secondary_info_entity])||!(!this._config.status_entity||e.states[this._config.status_entity]===this.hass.states[this._config.status_entity])))}return!0}static getConfigElement(){return document.createElement("status-banner-card-editor")}static getStubConfig(){return{entity:"",rules:[{state:"on",title:"Active",subtitle:"System is running",icon:"mdi:check-circle",color:"#4CAF50"},{state:"off",title:"Inactive",subtitle:"System is idle",icon:"mdi:power-standby",color:"#9E9E9E"}],default:{title:"{{ state | upper }}",subtitle:"",icon:"mdi:information",color:"#2196F3"}}}render(){if(!this._config||!this.hass)return I``;if(!this._config.entity)return I`
        <ha-card>
          <div class="card-container" style="padding: 16px;">
            <ha-alert alert-type="warning">
              Please define a primary entity in the editor.
            </ha-alert>
          </div>
        </ha-card>
      `;const t=Et(this.hass,this._config.entity,this._config.rules,this._config.default,this._config.color_map,this._config.status_label),e=!1!==this._config.show_status,i=!1!==this._config.show_footer,s=!1!==this._config.show_accent,a=!1!==this._config.show_pattern,o=this._config.pattern_size??20,n=this._config.accent_width??60,r=this._config.accent_height??100,l=this._config.accent_full_background??!1,c=this._config.accent_start??"bottom-left",h=this._config.accent_end??"top-right",d=l?"none":function(t,e){if(t===e)return"none";const i=kt[t],s=kt[e],a=["top-left","top-right","bottom-left","bottom-right"],o={"top-left":["top-right","bottom-left"],"top-right":["top-left","bottom-right"],"bottom-left":["top-left","bottom-right"],"bottom-right":["top-right","bottom-left"]};let n=null;for(const i of a){if(i===t||i===e)continue;const s=o[t].includes(i),a=o[e].includes(i);if(s&&a){n=i;break}}return n||(n=o[t][0]),`polygon(${i}, ${s}, ${kt[n]})`}(c,h),u=l?"100%":`${n}%`,p=l?"100%":`${r}%`,g=this._config.title_color,f=this._config.subtitle_color,_=this._config.timestamp_color,v=this._config.title_alignment??"right",m=this._config.subtitle_alignment??v,$=this._config.icon_alignment??"right",b=this._config.timestamp_position??"bottom-left",y=this._config.last_execution_alignment??"left",x=this._config.button_position??"bottom-right";return I`
      <ha-card @click=${this._handleCardClick}>
        <div
          class="card-container"
          style="--border-radius: ${this._config.border_radius}"
        >
          ${s?I`<div
                class="card-accent ${a?"with-pattern":""}"
                style="--accent-color: ${t.color}; --accent-width: ${u}; --accent-height: ${p}; --pattern-size: ${o}px; clip-path: ${d}"
              ></div>`:V}
          ${this._renderHeader(t,v,m,$,g,f)}
          ${e&&t.statusText?this._renderStatusBox(t):V}
          ${i?this._renderFooterElements(t,b,y,x,_):V}
        </div>
      </ha-card>
    `}_renderHeader(t,e,i,s,a,o){let n,r="row";if("center"===s)r="column",n="center";else if("center"===e)n="left"===s?"flex-start":"flex-end";else{n=e===s?"right"===e?"flex-end":"flex-start":"space-between"}const l="left"===s?-1:"center"===s?0:1,c="left"===e?-1:"center"===e?0:1,h=e,d=e===s&&"center"!==e?"right"===e?"margin-right: 20px;":"margin-left: 20px;":"center"===e&&"center"!==s?"flex: 1; margin: 0 20px;":"",u="center"===e&&"center"!==s?"flex: 1;":"";return I`
      <div class="header" style="--header-height: ${this._config.header_height}">
        <div class="header-content" style="justify-content: ${n}; flex-direction: ${r};">
          <div class="header-text" style="
            text-align: ${h};
            order: ${c};
            ${u}
            ${d}
            ${t.titleFontSize?`--title-font-size: ${t.titleFontSize};`:""}
            ${t.subtitleFontSize?`--subtitle-font-size: ${t.subtitleFontSize};`:""}
          ">
            <div class="title" style="${a?`color: ${a};`:""}">${t.title}</div>
            ${t.subtitle?I`<div class="subtitle" style="text-align: ${i}; ${o?`color: ${o};`:""}">${t.subtitle}</div>`:V}
          </div>

          <ha-icon
            class="header-icon"
            .icon=${t.icon}
            style="--mdc-icon-size: ${this._config.icon_size}; color: ${this._config.icon_color||t.color}; order: ${l};"
          ></ha-icon>
        </div>
      </div>
    `}_renderStatusBox(t){const e=(this._config.status_opacity??90)/100;let i=t.statusText;if(this._config.status_entity){const t=this.hass.states[this._config.status_entity];t&&(i=this._config.status_entity_attribute?String(t.attributes[this._config.status_entity_attribute]??""):t.state)}return I`
      <div class="body">
        <div class="status-box" style="--status-opacity: ${e}">
          <span class="status-label" style="color: ${t.color}">${t.statusLabel}:</span>
          <span class="status-text">${i}</span>
        </div>
      </div>
    `}_renderFooterElements(t,e,i,s,a){const o=this._getTimestamp(),n=this._config.button_actions?.[0];if(!o&&!n)return I``;const r=e.includes("left"),l=s.includes("left"),c=[],h=[];if(o){const t=I`<div class="timestamp" style="text-align: ${i}; width: 100%; ${a?`color: ${a};`:""}">Last Check: ${o}</div>`;r?c.push(t):h.push(t)}if(n){const e=this._renderButton(n,t);l?c.push(e):h.push(e)}let d="footer";return c.length>0&&0===h.length?d+=" left-only":h.length>0&&0===c.length&&(d+=" right-only"),I`
      <div class="${d}">
        ${c.length>0?I`<div class="footer-left">${c}</div>`:V}
        ${h.length>0?I`<div class="footer-right">${h}</div>`:V}
      </div>
    `}_renderButton(t,e){const i=this.hass.states[this._config.entity],s={hass:this.hass,entity:this._config.entity,state:i?.state||"",attr:i?.attributes||{},colorMap:this._config.color_map},a=t.label?gt(t.label,s):"Update";let o=!1;if("toggle"===(t.type||"service")&&t.entity){const e=this.hass.states[t.entity];o=e&&"on"===e.state}return I`
      <button
        class="action-btn ${t.selector?.replace(".","")||"update-btn"} ${o?"active":""}"
        style="background-color: ${t.color||e.color}"
        @click=${e=>this._handleButtonClick(e,t)}
      >
        ${t.icon?I`<ha-icon icon="${t.icon}"></ha-icon>`:V}
        <span>${a}</span>
      </button>
    `}_getTimestamp(){if(!this._config.timestamp_entity)return null;const t=this.hass.states[this._config.timestamp_entity];if(!t)return null;const e=this._config.timestamp_attribute||"last_triggered",i=t.attributes[e]||t.state;if(!i||"unknown"===i||"unavailable"===i)return null;try{const t=new Date(i);return isNaN(t.getTime())?null:t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return null}}_handleCardClick(){this._config.tap_action&&"more-info"!==this._config.tap_action.action?this._executeAction(this._config.tap_action):this._showMoreInfo()}_handleButtonClick(t,e){t.stopPropagation(),e.tap_action&&this._executeAction(e.tap_action)}_executeAction(t,e){if(t||e){if(e?.type)switch(e.type){case"toggle":return void(e.entity&&this.hass.callService("homeassistant","toggle",{entity_id:e.entity}));case"more-info":if(e.entity){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity}});this.dispatchEvent(t)}return;case"navigate":return void(t&&"navigation_path"in t&&t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new Event("location-changed"))));case"url":return void(t&&"url_path"in t&&t.url_path&&window.open(t.url_path,"_blank"));case"assist":return void this.hass.callService("assist_satellite","start_conversation",{})}if(t)switch(t.action){case"more-info":this._showMoreInfo();break;case"call-service":{if(!t.service)break;const[e,i]=t.service.split(".");this.hass.callService(e,i,{...t.service_data,...t.target||{}});break}case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new Event("location-changed")));break;case"url":t.url_path&&window.open(t.url_path,"_blank")}}}_showMoreInfo(){const t=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:this._config.entity}});this.dispatchEvent(t)}};Rt.styles=Lt,t([ut({attribute:!1})],Rt.prototype,"hass",void 0),t([pt()],Rt.prototype,"_config",void 0),Rt=t([ct("status-banner-card")],Rt),window.customCards=window.customCards||[],window.customCards.push({type:xt,name:wt,description:At,preview:!0,documentationURL:St}),console.info("%c  STATUS-BANNER-CARD  %c  v1.4.0  ","color: white; background: #2196F3; font-weight: bold;","color: #2196F3; background: white; font-weight: bold;");let Tt=class extends rt{constructor(){super(...arguments),this._expandedRule=null}setConfig(t){this._config=t}render(){return this.hass&&this._config?I`
      <div class="editor-container">
        ${this._renderEntitySection()} ${this._renderColorMapSection()}
        ${this._renderLayoutSection()} ${this._renderGlobalDisplaySection()}
        ${this._renderRulesSection()} ${this._renderDefaultSection()}
        ${this._renderStatusBoxSection()} ${this._renderFooterSection()}
      </div>
    `:I``}_renderEntitySection(){return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:database"></ha-icon>
          <span>Entity</span>
        </div>

        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.entity||""}
          .label=${"Primary Entity (State Source)"}
          @value-changed=${t=>this._valueChanged("entity",t.detail.value)}
          allow-custom-entity
        ></ha-entity-picker>
      </div>
    `}_renderRulesSection(){const t=this._config.rules||[];return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:format-list-checks"></ha-icon>
          <span>State Rules</span>
        </div>
        <p class="section-description">
          Rules define what becomes the <strong>Title</strong> and <strong>Subtitle</strong> based on state.
        </p>

        <div class="rules-list">
          ${t.map((t,e)=>this._renderRule(t,e))}
        </div>

        <button class="add-btn" @click=${this._addRule}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Add Rule
        </button>
      </div>
    `}_renderRule(t,e){const i=this._expandedRule===e;return I`
      <div class="rule-card ${i?"expanded":""}">
        <div class="rule-header" @click=${()=>this._toggleRule(e)}>
          <div class="rule-summary">
            <span class="rule-state">${t.state||"Any State"}</span>
            <span class="rule-title">${t.title||"No title"}</span>
          </div>
          <div class="rule-actions">
            <ha-icon-button
              .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
              @click=${t=>this._removeRule(t,e)}
            ></ha-icon-button>
            <ha-icon icon="mdi:chevron-${i?"up":"down"}"></ha-icon>
          </div>
        </div>

        ${i?this._renderRuleDetails(t,e):V}
      </div>
    `}_renderRuleDetails(t,e){return I`
      <div class="rule-details">
        <ha-textfield
          .value=${t.state||""}
          .label=${"Rule Match: State Value (exact or /regex/)"}
          @input=${t=>this._updateRule(e,"state",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${t.title||""}
          .label=${"Display: Title (supports {{ templates }})"}
          @input=${t=>this._updateRule(e,"title",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${t.title_font_size||""}
          .label=${"Display: Title Font Size (e.g., 1.5rem, 24px)"}
          @input=${t=>this._updateRule(e,"title_font_size",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${t.subtitle||""}
          .label=${"Display: Subtitle (supports {{ templates }})"}
          @input=${t=>this._updateRule(e,"subtitle",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${t.subtitle_font_size||""}
          .label=${"Display: Subtitle Font Size (e.g., 1rem, 16px)"}
          @input=${t=>this._updateRule(e,"subtitle_font_size",t.target.value)}
        ></ha-textfield>

        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon||""}
          .label=${"Icon"}
          @value-changed=${t=>this._updateRule(e,"icon",t.detail.value)}
        ></ha-icon-picker>

        <div class="color-input">
          <label>Color</label>
          <div class="color-input-row">
            <input
              type="color"
              .value=${t.color?.startsWith("#")?t.color:"#9E9E9E"}
              @input=${t=>this._updateRule(e,"color",t.target.value)}
            />
            <ha-textfield
              .value=${t.color||""}
              .label=${"Color or template"}
              @input=${t=>this._updateRule(e,"color",t.target.value)}
            ></ha-textfield>
          </div>
        </div>

        <ha-textfield
          .value=${t.status_text||""}
          .label=${"Status Text (supports {{ templates }})"}
          @input=${t=>this._updateRule(e,"status_text",t.target.value)}
        ></ha-textfield>
      </div>
    `}_renderDefaultSection(){const t=this._config.default||{};return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:cog-outline"></ha-icon>
          <span>Default Display</span>
        </div>
        <p class="section-description">Used when no rules match</p>

        <ha-textfield
          .value=${t.title??""}
          .label=${"Default Title"}
          @input=${t=>this._updateDefault("title",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${t.subtitle??""}
          .label=${"Default Subtitle"}
          @input=${t=>this._updateDefault("subtitle",t.target.value)}
        ></ha-textfield>

        <ha-icon-picker
          .hass=${this.hass}
          .value=${t.icon??""}
          .label=${"Default Icon"}
          @value-changed=${t=>this._updateDefault("icon",t.detail.value)}
        ></ha-icon-picker>

        <div class="color-input">
          <label>Default Color</label>
          <input
            type="color"
            .value=${t.color?.startsWith("#")?t.color:"#9E9E9E"}
            @input=${t=>this._updateDefault("color",t.target.value)}
          />
        </div>

        <ha-textfield
          .value=${t.status_text??""}
          .label=${"Default Status Text"}
          @input=${t=>this._updateDefault("status_text",t.target.value)}
        ></ha-textfield>
      </div>
    `}_renderColorMapSection(){const t=this._config.color_map||$t.color_map||{};return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:palette"></ha-icon>
          <span>Color Mapping</span>
        </div>
        <p class="section-description">Use with {{ attr.name | color_map }}</p>

        <div class="color-map-list">
          ${Object.entries(t).map(([t,e])=>I`
              <div class="color-map-item">
                <ha-textfield
                  .value=${t}
                  .label=${"Key"}
                  @input=${i=>this._updateColorMapKey(t,i.target.value,e)}
                ></ha-textfield>
                <input
                  type="color"
                  .value=${e}
                  @input=${e=>this._updateColorMap(t,e.target.value)}
                />
                <ha-icon-button
                  .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                  @click=${()=>this._removeColorMap(t)}
                ></ha-icon-button>
              </div>
            `)}
        </div>

        <button class="add-btn" @click=${this._addColorMap}>
          <ha-icon icon="mdi:plus"></ha-icon>
          Add Color
        </button>
      </div>
    `}_renderFooterSection(){const t=this._config.button_actions?.[0],e=t?.type||"service";return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:page-layout-footer"></ha-icon>
          <span>Footer & Actions</span>
        </div>

        <div class="toggle-row">
          <span>Show Footer</span>
          <ha-switch
            .checked=${!1!==this._config.show_footer}
            @change=${t=>this._valueChanged("show_footer",t.target.checked)}
          ></ha-switch>
        </div>

        ${!1!==this._config.show_footer?I`
              <div class="subsection-header">Last Execution</div>

              <ha-entity-picker
                .hass=${this.hass}
                .value=${this._config.timestamp_entity||""}
                .label=${"Last Execution Entity (Timestamp)"}
                @value-changed=${t=>this._valueChanged("timestamp_entity",t.detail.value)}
                allow-custom-entity
              ></ha-entity-picker>

              <ha-select
                .value=${this._config.last_execution_alignment||"left"}
                .label=${"Alignment"}
                @selected=${t=>this._valueChanged("last_execution_alignment",t.target.value)}
                @closed=${t=>t.stopPropagation()}
              >
                ${[{value:"left",label:"Left"},{value:"right",label:"Right"}].map(t=>I`
                    <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
                  `)}
              </ha-select>

              <div class="subsection-header">Actionable Button</div>

              <ha-textfield
                .value=${t?.label||""}
                .label=${"Button Label"}
                @input=${t=>this._updateButtonAction("label",t.target.value)}
              ></ha-textfield>

              <ha-icon-picker
                .hass=${this.hass}
                .value=${t?.icon||""}
                .label=${"Button Icon"}
                @value-changed=${t=>this._updateButtonAction("icon",t.detail.value)}
              ></ha-icon-picker>

              <div class="color-input">
                <label>Button Color (Not Recommended - follows accent)</label>
                <div class="color-input-row">
                  <input
                    type="color"
                    .value=${t?.color||"#9E9E9E"}
                    @input=${t=>this._updateButtonAction("color",t.target.value)}
                  />
                  <ha-textfield
                    .value=${t?.color||""}
                    .placeholder=${"Default (Accent)"}
                    @input=${t=>this._updateButtonAction("color",t.target.value||void 0)}
                  ></ha-textfield>
                  ${t?.color?I`
                        <ha-icon-button
                          .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                          @click=${()=>this._updateButtonAction("color",void 0)}
                        ></ha-icon-button>
                      `:V}
                </div>
              </div>

              <ha-select
                .value=${e}
                .label=${"Button Type"}
                @selected=${t=>this._updateButtonAction("type",t.target.value)}
                @closed=${t=>t.stopPropagation()}
              >
                ${[{value:"service",label:"Service"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"navigate",label:"Navigate"},{value:"url",label:"URL"},{value:"assist",label:"Assist"}].map(t=>I`
                    <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
                  `)}
              </ha-select>

              ${"service"===e?I`
                    <ha-textfield
                      .value=${t?.service||""}
                      .label=${"Button Service (e.g. script.run)"}
                      @input=${t=>this._updateButtonAction("service",t.target.value)}
                    ></ha-textfield>
                  `:V}
              ${"url"===e?I`
                    <ha-textfield
                      .value=${t?.tap_action?.url_path||""}
                      .label=${"URL"}
                      @input=${t=>this._updateButtonTapAction("url_path",t.target.value)}
                    ></ha-textfield>
                  `:V}
              ${"navigate"===e?I`
                    <ha-textfield
                      .value=${t?.tap_action?.navigation_path||""}
                      .label=${"Navigation Path"}
                      @input=${t=>this._updateButtonTapAction("navigation_path",t.target.value)}
                    ></ha-textfield>
                  `:V}
              ${["service","toggle","more-info"].includes(e)?I`
                    <ha-entity-picker
                      .hass=${this.hass}
                      .value=${t?.entity||""}
                      .label=${"Button Entity"}
                      @value-changed=${t=>this._updateButtonAction("entity",t.detail.value)}
                      allow-custom-entity
                    ></ha-entity-picker>
                  `:V}
            `:V}
      </div>
    `}_renderLayoutSection(){const t=this._config.accent_width??60,e=this._config.accent_height??100;return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:page-layout-body"></ha-icon>
          <span>Layout & Stripes</span>
        </div>

        <div class="toggle-row">
          <span>Show Accent</span>
          <ha-switch
            .checked=${!1!==this._config.show_accent}
            @change=${t=>this._valueChanged("show_accent",t.target.checked)}
          ></ha-switch>
        </div>

        ${!1!==this._config.show_accent?I`
              <div class="toggle-row">
                <span>Show Stripes</span>
                <ha-switch
                  .checked=${!1!==this._config.show_pattern}
                  @change=${t=>this._valueChanged("show_pattern",t.target.checked)}
                ></ha-switch>
              </div>

              ${!1!==this._config.show_pattern?I`
                    <ha-textfield
                      type="number"
                      .value=${String(this._config.pattern_size??20)}
                      .label=${"Stripe Width (px)"}
                      @input=${t=>this._valueChanged("pattern_size",Number(t.target.value)||20)}
                    ></ha-textfield>
                  `:V}

              <div class="slider-row">
                <label>Accent Width: ${t}%</label>
                <div class="slider-container">
                  <span class="slider-label">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    .value=${String(t)}
                    @input=${t=>this._valueChanged("accent_width",Number(t.target.value))}
                  />
                  <span class="slider-label">100%</span>
                </div>
              </div>

              <div class="slider-row">
                <label>Accent Height: ${e}%</label>
                <div class="slider-container">
                  <span class="slider-label">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    .value=${String(e)}
                    @input=${t=>this._valueChanged("accent_height",Number(t.target.value))}
                  />
                  <span class="slider-label">150%</span>
                </div>
              </div>

              <div class="subsection-header">Triangle Shape</div>

              <ha-select
                .value=${this._config.accent_start||"bottom-left"}
                .label=${"Triangle Edge 1"}
                @selected=${t=>this._valueChanged("accent_start",t.target.value)}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="top-left">Top Left</mwc-list-item>
                <mwc-list-item value="top-right">Top Right</mwc-list-item>
                <mwc-list-item value="bottom-left">Bottom Left</mwc-list-item>
                <mwc-list-item value="bottom-right">Bottom Right</mwc-list-item>
              </ha-select>

              <ha-select
                .value=${this._config.accent_end||"top-right"}
                .label=${"Triangle Edge 2"}
                @selected=${t=>this._valueChanged("accent_end",t.target.value)}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="top-left">Top Left</mwc-list-item>
                <mwc-list-item value="top-right">Top Right</mwc-list-item>
                <mwc-list-item value="bottom-left">Bottom Left</mwc-list-item>
                <mwc-list-item value="bottom-right">Bottom Right</mwc-list-item>
              </ha-select>
            `:V}

        <div class="subsection-header">Timestamp Settings</div>
        <ha-textfield
          .value=${this._config.timestamp_attribute||"last_triggered"}
          .label=${"Timestamp Attribute"}
          @input=${t=>this._valueChanged("timestamp_attribute",t.target.value)}
        ></ha-textfield>

        <div class="subsection-header">Dimensions</div>

        <ha-textfield
          .value=${this._config.header_height||"120px"}
          .label=${"Header Height"}
          @input=${t=>this._valueChanged("header_height",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${this._config.icon_size||"54px"}
          .label=${"Icon Size"}
          @input=${t=>this._valueChanged("icon_size",t.target.value)}
        ></ha-textfield>

        <ha-textfield
          .value=${this._config.border_radius||"16px"}
          .label=${"Border Radius"}
          @input=${t=>this._valueChanged("border_radius",t.target.value)}
        ></ha-textfield>
      </div>
    `}_renderGlobalDisplaySection(){const t=[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}];return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:format-paint"></ha-icon>
          <span>Global Display Settings</span>
        </div>

        <div class="subsection-header">Alignment</div>

        <ha-select
          .value=${this._config.title_alignment||"right"}
          .label=${"Title Alignment"}
          @selected=${t=>this._valueChanged("title_alignment",t.target.value)}
          @closed=${t=>t.stopPropagation()}
        >
          ${t.map(t=>I`
              <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
            `)}
        </ha-select>

        <ha-select
          .value=${this._config.subtitle_alignment||this._config.title_alignment||"right"}
          .label=${"Subtitle Alignment"}
          @selected=${t=>this._valueChanged("subtitle_alignment",t.target.value)}
          @closed=${t=>t.stopPropagation()}
        >
          ${t.map(t=>I`
              <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
            `)}
        </ha-select>

        <ha-select
          .value=${this._config.icon_alignment||"right"}
          .label=${"Icon Alignment"}
          @selected=${t=>this._valueChanged("icon_alignment",t.target.value)}
          @closed=${t=>t.stopPropagation()}
        >
          ${t.map(t=>I`
              <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
            `)}
        </ha-select>

        <div class="subsection-header">Text Colors</div>
        <p class="section-description">Override text colors (useful when text overlaps accent)</p>

        <div class="color-input">
          <label>Title Color</label>
          <div class="color-input-row">
            <input
              type="color"
              .value=${this._config.title_color||"#212121"}
              @input=${t=>this._valueChanged("title_color",t.target.value)}
            />
            <ha-textfield
              .value=${this._config.title_color||""}
              .placeholder=${"Default (theme)"}
              @input=${t=>this._valueChanged("title_color",t.target.value||void 0)}
            ></ha-textfield>
            ${this._config.title_color?I`
                  <ha-icon-button
                    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                    @click=${()=>this._valueChanged("title_color",void 0)}
                  ></ha-icon-button>
                `:V}
          </div>
        </div>

        <div class="color-input">
          <label>Subtitle Color</label>
          <div class="color-input-row">
            <input
              type="color"
              .value=${this._config.subtitle_color||"#727272"}
              @input=${t=>this._valueChanged("subtitle_color",t.target.value)}
            />
            <ha-textfield
              .value=${this._config.subtitle_color||""}
              .placeholder=${"Default (theme)"}
              @input=${t=>this._valueChanged("subtitle_color",t.target.value||void 0)}
            ></ha-textfield>
            ${this._config.subtitle_color?I`
                  <ha-icon-button
                    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                    @click=${()=>this._valueChanged("subtitle_color",void 0)}
                  ></ha-icon-button>
                `:V}
          </div>
        </div>

        <div class="color-input">
          <label>Icon Color</label>
          <div class="color-input-row">
            <input
              type="color"
              .value=${this._config.icon_color||"#9E9E9E"}
              @input=${t=>this._valueChanged("icon_color",t.target.value)}
            />
            <ha-textfield
              .value=${this._config.icon_color||""}
              .placeholder=${"Default (accent color)"}
              @input=${t=>this._valueChanged("icon_color",t.target.value||void 0)}
            ></ha-textfield>
            ${this._config.icon_color?I`
                  <ha-icon-button
                    .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                    @click=${()=>this._valueChanged("icon_color",void 0)}
                  ></ha-icon-button>
                `:V}
          </div>
        </div>
      </div>
    `}_renderStatusBoxSection(){const t=this._config.status_opacity??90;return I`
      <div class="section">
        <div class="section-header">
          <ha-icon icon="mdi:card-text-outline"></ha-icon>
          <span>Status Box</span>
        </div>

        <div class="toggle-row">
          <span>Show Status Box</span>
          <ha-switch
            .checked=${!1!==this._config.show_status}
            @change=${t=>this._valueChanged("show_status",t.target.checked)}
          ></ha-switch>
        </div>

        ${!1!==this._config.show_status?I`
              <ha-textfield
                .value=${this._config.status_label||"Status"}
                .label=${"Custom Status Label (Pretext)"}
                @input=${t=>this._valueChanged("status_label",t.target.value)}
              ></ha-textfield>

              <ha-entity-picker
                .hass=${this.hass}
                .value=${this._config.status_entity||""}
                .label=${"Manual Status Label (Entity Override)"}
                @value-changed=${t=>this._valueChanged("status_entity",t.detail.value)}
                allow-custom-entity
              ></ha-entity-picker>

              ${this._config.status_entity?I`
                    <ha-textfield
                      .value=${this._config.status_entity_attribute||""}
                      .label=${"Status Entity Attribute (Optional)"}
                      @input=${t=>this._valueChanged("status_entity_attribute",t.target.value)}
                    ></ha-textfield>
                  `:V}

              <div class="slider-row">
                <label>Status Box Opacity: ${t}%</label>
                <div class="slider-container">
                  <span class="slider-label">0%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    .value=${String(t)}
                    @input=${t=>this._valueChanged("status_opacity",Number(t.target.value))}
                  />
                  <span class="slider-label">100%</span>
                </div>
              </div>
            `:V}
      </div>
    `}_valueChanged(t,e){if(!this._config)return;const i={...this._config,[t]:e};this._fireConfigChanged(i)}_updateRule(t,e,i){const s=[...this._config.rules||[]];s[t]={...s[t],[e]:i},this._fireConfigChanged({...this._config,rules:s})}_addRule(){const t=[...this._config.rules||[]];t.push({state:"",title:"",subtitle:"",icon:"mdi:information",color:"#9E9E9E"}),this._fireConfigChanged({...this._config,rules:t}),this._expandedRule=t.length-1}_removeRule(t,e){t.stopPropagation();const i=[...this._config.rules||[]];i.splice(e,1),this._fireConfigChanged({...this._config,rules:i}),this._expandedRule===e&&(this._expandedRule=null)}_toggleRule(t){this._expandedRule=this._expandedRule===t?null:t}_updateDefault(t,e){const i={...this._config.default||{},[t]:e};this._fireConfigChanged({...this._config,default:i})}_updateColorMap(t,e){const i={...this._config.color_map||{},[t]:e};this._fireConfigChanged({...this._config,color_map:i})}_updateColorMapKey(t,e,i){if(t===e)return;const s={...this._config.color_map||{}};delete s[t],s[e]=i,this._fireConfigChanged({...this._config,color_map:s})}_addColorMap(){const t={...this._config.color_map||{},new_color:"#9E9E9E"};this._fireConfigChanged({...this._config,color_map:t})}_removeColorMap(t){const e={...this._config.color_map||{}};delete e[t],this._fireConfigChanged({...this._config,color_map:e})}_updateButtonAction(t,e){const i=[...this._config.button_actions||[{selector:".update-btn",tap_action:{action:"none"}}]];i[0]||(i[0]={selector:".update-btn",tap_action:{action:"none"}}),i[0][t]=e,this._fireConfigChanged({...this._config,button_actions:i})}_updateButtonTapAction(t,e){const i=[...this._config.button_actions||[]];if(i[0]||(i[0]={selector:".update-btn",tap_action:{action:"call-service",service:"",target:{}}}),i[0].tap_action||(i[0].tap_action={action:"call-service",service:"",target:{}}),"target"===t)i[0].tap_action={...i[0].tap_action,target:{entity_id:e}};else{const s=i[0].tap_action;s[t]=e,"service"===t&&(s.action="call-service")}this._fireConfigChanged({...this._config,button_actions:i})}_fireConfigChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}static get styles(){return n`
      .editor-container {
        padding: 16px;
      }

      .section {
        margin-bottom: 24px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      .section:last-child {
        border-bottom: none;
      }

      .section-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .section-header ha-icon {
        color: var(--primary-color);
      }

      .section-description {
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        margin: -8px 0 12px 0;
      }

      .subsection-header {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin: 16px 0 8px 0;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      ha-entity-picker,
      ha-textfield,
      ha-icon-picker,
      ha-select {
        display: block;
        margin-bottom: 12px;
      }

      /* Rules */
      .rules-list {
        margin-bottom: 12px;
      }

      .rule-card {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        margin-bottom: 8px;
        overflow: hidden;
      }

      .rule-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        cursor: pointer;
        background: var(--secondary-background-color);
      }

      .rule-header:hover {
        background: var(--primary-background-color);
      }

      .rule-summary {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .rule-state {
        font-weight: 500;
        font-size: 0.875rem;
      }

      .rule-title {
        font-size: 0.75rem;
        color: var(--secondary-text-color);
      }

      .rule-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .rule-details {
        padding: 16px;
        background: var(--card-background-color);
        border-top: 1px solid var(--divider-color);
      }

      /* Color Input */
      .color-input {
        margin-bottom: 12px;
      }

      .color-input label {
        display: block;
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .color-input-row {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .color-input input[type='color'] {
        width: 48px;
        height: 48px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        padding: 0;
      }

      .color-input-row ha-textfield {
        flex: 1;
        margin-bottom: 0;
      }

      /* Color Map */
      .color-map-list {
        margin-bottom: 12px;
      }

      .color-map-item {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
      }

      .color-map-item ha-textfield {
        flex: 1;
        margin-bottom: 0;
      }

      .color-map-item input[type='color'] {
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        padding: 0;
      }

      /* Toggle Row */
      .toggle-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
      }

      /* Slider Row */
      .slider-row {
        margin-bottom: 12px;
      }

      .slider-row label {
        display: block;
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .slider-container {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .slider-container input[type='range'] {
        flex: 1;
        height: 4px;
        -webkit-appearance: none;
        appearance: none;
        background: var(--divider-color);
        border-radius: 2px;
        outline: none;
      }

      .slider-container input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
      }

      .slider-container input[type='range']::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
        border: none;
      }

      .slider-label {
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        min-width: 40px;
        text-align: center;
      }

      /* Add Button */
      .add-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        border: 1px dashed var(--divider-color);
        border-radius: 8px;
        background: transparent;
        color: var(--primary-color);
        cursor: pointer;
        font-size: 0.875rem;
        width: 100%;
        justify-content: center;
      }

      .add-btn:hover {
        background: var(--secondary-background-color);
      }
    `}};t([ut({attribute:!1})],Tt.prototype,"hass",void 0),t([pt()],Tt.prototype,"_config",void 0),t([pt()],Tt.prototype,"_expandedRule",void 0),Tt=t([ct("status-banner-card-editor")],Tt);export{Rt as StatusBannerCard,Tt as StatusBannerCardEditor};
//# sourceMappingURL=status-banner-card.js.map
