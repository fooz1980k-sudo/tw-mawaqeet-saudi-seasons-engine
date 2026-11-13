var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o6) {
        if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s4 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s4 && 1 === s4.length;
          e5 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s4, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o6 = 1 === t3.length ? t3[0] : e5.reduce((e6, s4, o7) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s4) + t3[o7 + 1], t3[0]);
      return new n(o6, t3, s);
    };
    S = (s4, o6) => {
      if (e) s4.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o6) {
        const o7 = document.createElement("style"), n5 = t.litNonce;
        void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e5.cssText, s4.appendChild(o7);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s4 of t4.cssRules) e5 += s4.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s4) => t3;
    u = { toAttribute(t3, s4) {
      switch (s4) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s4) {
      let i5 = t3;
      switch (s4) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s4) => !i2(t3, s4);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s4 = b) {
        if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
          const i5 = Symbol(), h7 = this.getPropertyDescriptor(t3, i5, s4);
          void 0 !== h7 && e2(this.prototype, t3, h7);
        }
      }
      static getPropertyDescriptor(t3, s4, i5) {
        const { get: e5, set: r6 } = h(this.prototype, t3) ?? { get() {
          return this[s4];
        }, set(t4) {
          this[s4] = t4;
        } };
        return { get: e5, set(s5) {
          const h7 = e5?.call(this);
          r6?.call(this, s5), this.requestUpdate(t3, h7, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
          for (const i5 of s4) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s4 = litPropertyMetadata.get(t3);
          if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s4] of this.elementProperties) {
          const i5 = this._$Eu(t4, s4);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s4) {
        const i5 = [];
        if (Array.isArray(s4)) {
          const e5 = new Set(s4.flat(1 / 0).reverse());
          for (const s5 of e5) i5.unshift(c(s5));
        } else void 0 !== s4 && i5.push(c(s4));
        return i5;
      }
      static _$Eu(t3, s4) {
        const i5 = s4.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
        for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s4, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s4) {
        const i5 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e5 && true === i5.reflect) {
          const h7 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
          this._$Em = t3, null == h7 ? this.removeAttribute(e5) : this.setAttribute(e5, h7), this._$Em = null;
        }
      }
      _$AK(t3, s4) {
        const i5 = this.constructor, e5 = i5._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i5.getPropertyOptions(e5), h7 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r6 = h7.fromAttribute(s4, t4.type);
          this[e5] = r6 ?? this._$Ej?.get(e5) ?? r6, this._$Em = null;
        }
      }
      requestUpdate(t3, s4, i5, e5 = false, h7) {
        if (void 0 !== t3) {
          const r6 = this.constructor;
          if (false === e5 && (h7 = this[t3]), i5 ??= r6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h7, s4) || i5.useDefault && i5.reflect && h7 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i5)))) return;
          this.C(t3, s4, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s4, { useDefault: i5, reflect: e5, wrapped: h7 }, r6) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h7 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s5] of this._$Ep) this[t5] = s5;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s5, i5] of t4) {
            const { wrapped: t5 } = i5, e5 = this[s5];
            true !== t5 || this._$AL.has(s5) || void 0 === e5 || this.C(s5, void 0, i5, e5);
          }
        }
        let t3 = false;
        const s4 = this._$AL;
        try {
          t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
        } catch (s5) {
          throw t3 = false, this._$EM(), s5;
        }
        t3 && this._$AE(s4);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s4 = t3, e5) {
  if (i5 === E) return i5;
  let h7 = void 0 !== e5 ? s4._$Co?.[e5] : s4._$Cl;
  const o6 = a2(i5) ? void 0 : i5._$litDirective$;
  return h7?.constructor !== o6 && (h7?._$AO?.(false), void 0 === o6 ? h7 = void 0 : (h7 = new o6(t3), h7._$AT(t3, s4, e5)), void 0 !== e5 ? (s4._$Co ??= [])[e5] = h7 : s4._$Cl = h7), void 0 !== h7 && (i5 = M(t3, h7._$AS(t3, i5.values), h7, e5)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s4 = t3.length - 1, e5 = [];
      let n5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c5 = v;
      for (let i6 = 0; i6 < s4; i6++) {
        const s5 = t3[i6];
        let a3, u6, d3 = -1, f5 = 0;
        for (; f5 < s5.length && (c5.lastIndex = f5, u6 = c5.exec(s5), null !== u6); ) f5 = c5.lastIndex, c5 === v ? "!--" === u6[1] ? c5 = _ : void 0 !== u6[1] ? c5 = m : void 0 !== u6[2] ? (y2.test(u6[2]) && (n5 = RegExp("</" + u6[2], "g")), c5 = p2) : void 0 !== u6[3] && (c5 = p2) : c5 === p2 ? ">" === u6[0] ? (c5 = n5 ?? v, d3 = -1) : void 0 === u6[1] ? d3 = -2 : (d3 = c5.lastIndex - u6[2].length, a3 = u6[1], c5 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n5 = void 0);
        const x6 = c5 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l3 += c5 === v ? s5 + r3 : d3 >= 0 ? (e5.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x6) : s5 + o3 + (-2 === d3 ? i6 : x6);
      }
      return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e5) {
        let r6;
        this.parts = [];
        let l3 = 0, a3 = 0;
        const u6 = t3.length - 1, d3 = this.parts, [f5, v6] = N(t3, i5);
        if (this.el = _S.createElement(f5, e5), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r6 = P.nextNode()) && d3.length < u6; ) {
          if (1 === r6.nodeType) {
            if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v6[a3++], s4 = r6.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i6);
              d3.push({ type: 1, index: l3, name: e6[2], strings: s4, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r6.removeAttribute(t4);
            } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r6.removeAttribute(t4));
            if (y2.test(r6.tagName)) {
              const t4 = r6.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r6.textContent = s2 ? s2.emptyScript : "";
                for (let s4 = 0; s4 < i6; s4++) r6.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
                r6.append(t4[i6], c3());
              }
            }
          } else if (8 === r6.nodeType) if (r6.data === n3) d3.push({ type: 2, index: l3 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
          }
          l3++;
        }
      }
      static createElement(t3, i5) {
        const s4 = l2.createElement("template");
        return s4.innerHTML = t3, s4;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s4 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e5;
        let h7 = P.nextNode(), o6 = 0, n5 = 0, r6 = s4[0];
        for (; void 0 !== r6; ) {
          if (o6 === r6.index) {
            let i6;
            2 === r6.type ? i6 = new k(h7, h7.nextSibling, this, t3) : 1 === r6.type ? i6 = new r6.ctor(h7, r6.name, r6.strings, this, t3) : 6 === r6.type && (i6 = new Z(h7, this, t3)), this._$AV.push(i6), r6 = s4[++n5];
          }
          o6 !== r6?.index && (h7 = P.nextNode(), o6++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i5 = 0;
        for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s4, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s4 } = t3, e5 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
        if (this._$AH?._$AD === e5) this._$AH.p(i5);
        else {
          const t4 = new R(e5, this), s5 = t4.u(this.options);
          t4.p(i5), this.T(s5), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s4, e5 = 0;
        for (const h7 of t3) e5 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e5], s4._$AI(h7), e5++;
        e5 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e5), i5.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s4) {
        for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
          const s5 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s5;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s4, e5, h7) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = h7, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s4, e5) {
        const h7 = this.strings;
        let o6 = false;
        if (void 0 === h7) t3 = M(this, t3, i5, 0), o6 = !a2(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n5, r6;
          for (t3 = h7[0], n5 = 0; n5 < h7.length - 1; n5++) r6 = M(this, e6[s4 + n5], i5, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h7[n5 + 1]), this._$AH[n5] = r6;
        }
        o6 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s4, e5, h7) {
        super(t3, i5, s4, e5, h7), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s4 = this._$AH, e5 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h7 = t3 !== A && (s4 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s4), h7 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s4) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s4) => {
      const e5 = s4?.renderBefore ?? i5;
      let h7 = e5._$litPart$;
      if (void 0 === h7) {
        const t4 = s4?.renderBefore ?? null;
        e5._$litPart$ = h7 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
      }
      return h7._$AI(t3), h7;
    };
  }
});

// ../_kit/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../_kit/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r6 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../_kit/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o6) => "object" == typeof o6 ? r4(t3, e5, o6) : ((t4, e6, o7) => {
    const r6 = e6.hasOwnProperty(o7);
    return e6.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e6, o7) : void 0;
  })(t3, e5, o6);
}
var o5, r4;
var init_property = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r6) => {
      const { kind: n5, metadata: i5 } = r6;
      let s4 = globalThis.litPropertyMetadata.get(i5);
      if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n5) {
        const { name: o6 } = r6;
        return { set(r7) {
          const n6 = e5.get.call(this);
          e5.set.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        }, init(e6) {
          return void 0 !== e6 && this.C(o6, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n5) {
        const { name: o6 } = r6;
        return function(r7) {
          const n6 = this[o6];
          e5.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
        };
      }
      throw Error("Unsupported decorator location: " + n5);
    };
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}
var init_state = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../_kit/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../_kit/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// dist/mawaqeet-calendar.js
var mawaqeet_calendar_exports = {};
__export(mawaqeet_calendar_exports, {
  default: () => A2
});
async function K(a3, t3 = 1, e5) {
  var n5, r6, i5;
  await H2();
  try {
    return await ((i5 = (r6 = (n5 = y3()) == null ? void 0 : n5.cart) == null ? void 0 : r6.addItem) == null ? void 0 : i5.call(r6, e5 ? { id: a3, quantity: t3, notes: e5 } : { id: a3, quantity: t3 })), true;
  } catch {
    return false;
  }
}
function X(a3, t3 = true) {
  var e5, n5, r6;
  try {
    (r6 = t3 ? (e5 = y3()) == null ? void 0 : e5.success : (n5 = y3()) == null ? void 0 : n5.error) == null || r6(a3);
  } catch {
  }
}
function P2() {
  try {
    return { ...I2(), ...JSON.parse(localStorage.getItem(k2) || "{}") };
  } catch {
    return I2();
  }
}
function tt(a3) {
  try {
    localStorage.setItem(k2, JSON.stringify(a3));
  } catch {
  }
}
function S3(a3) {
  const t3 = P2();
  return a3(t3), tt(t3), t3;
}
function et() {
  let a3 = false;
  try {
    a3 = !sessionStorage.getItem(k2), sessionStorage.setItem(k2, "1");
  } catch {
  }
  return a3 ? S3((t3) => {
    t3.visits += 1, t3.last = Date.now();
  }) : P2();
}
function at() {
  R2 || (R2 = true, Q("cart::item.added", (a3) => {
    var e5;
    const t3 = Number(((e5 = a3 == null ? void 0 : a3.data) == null ? void 0 : e5.product_id) ?? 0);
    t3 && S3((n5) => {
      n5.carted.includes(t3) || (n5.carted = [...n5.carted.slice(-40), t3]);
    });
  }));
}
function ct(a3) {
  const t3 = st[a3];
  if (!t3 || F.has(t3)) return t3;
  F.add(t3);
  const e5 = document.createElement("link");
  return e5.rel = "stylesheet", e5.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t3)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e5), t3;
}
function ft(a3) {
  try {
    L2 ?? (L2 = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const t3 = Object.fromEntries(L2.formatToParts(a3).map((e5) => [e5.type, e5.value]));
    return { y: parseInt(t3.year), m: parseInt(t3.month), d: parseInt(t3.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
function ut(a3, t3, e5, n5) {
  const r6 = [];
  for (let i5 = 0; i5 <= n5; i5++) {
    const l3 = v2(e5, i5), p4 = ft(l3);
    p4.m === a3 && p4.d === t3 && (r6.push(l3), i5 += 300);
  }
  return r6;
}
function ht(a3) {
  const t3 = f3(a3, 11, 30);
  for (; t3.getDay() !== 5; ) t3.setDate(t3.getDate() - 1);
  return t3;
}
function mt(a3, t3, e5 = 27, n5 = "before") {
  const r6 = f3(a3, t3, Math.min(e5, new Date(a3, t3, 0).getDate()));
  if (n5 !== "none") for (; r6.getDay() === 5 || r6.getDay() === 6; ) r6.setDate(r6.getDate() + (n5 === "before" ? -1 : 1));
  return r6;
}
function bt(a3, t3 = {}) {
  const e5 = v2(a3, -40), n5 = 440, r6 = [], i5 = (o6, d3, s4, m5) => ut(d3, s4, e5, n5).forEach((x6) => r6.push({ id: o6, start: x6, end: v2(x6, m5) }));
  i5("ramadan", 9, 1, 29), i5("eid_fitr", 10, 1, 3), i5("hajj", 12, 1, 7), i5("arafah", 12, 9, 0), i5("eid_adha", 12, 10, 3), i5("hijri_new_year", 1, 1, 0);
  for (const o6 of [a3.getFullYear() - 1, a3.getFullYear(), a3.getFullYear() + 1]) {
    r6.push({ id: "founding", start: f3(o6, 2, 22), end: f3(o6, 2, 22) }), r6.push({ id: "national", start: f3(o6, 9, 23), end: f3(o6, 9, 23) }), r6.push({ id: "mothers", start: f3(o6, 3, 21), end: f3(o6, 3, 21) });
    const d3 = ht(o6);
    r6.push({ id: "white_friday", start: v2(d3, -(t3.whiteFridayDays ?? 7)), end: v2(d3, 3) }), r6.push({ id: "summer", start: f3(o6, 6, 15), end: f3(o6, 8, 31) }), r6.push({ id: "winter", start: f3(o6, 12, 1), end: f3(o6 + 1, 2, 28) });
    for (let s4 = 1; s4 <= 12; s4++) {
      const m5 = mt(o6, s4, t3.payDay ?? 27, t3.payShift ?? "before");
      r6.push({ id: "payday", start: m5, end: v2(m5, 3) });
      const x6 = f3(o6, s4, 10);
      r6.push({ id: "citizen", start: x6, end: v2(x6, 1) });
    }
  }
  if (t3.school) {
    const o6 = /* @__PURE__ */ new Date(t3.school + "T00:00:00");
    isNaN(+o6) || r6.push({ id: "back_to_school", start: v2(o6, -14), end: o6 });
  }
  for (const o6 of r6.filter((d3) => d3.id === "ramadan")) {
    const d3 = r6.find((s4) => s4.id === "eid_fitr" && +s4.start > +o6.start && +s4.start - +o6.start < 32 * G);
    d3 && (o6.end = v2(d3.start, -1));
  }
  const l3 = +e5, p4 = +e5 + n5 * G;
  return r6.filter((o6) => +o6.end >= l3 && +o6.start <= p4).sort((o6, d3) => +o6.start - +d3.start);
}
var y3, H2, O, M2, u3, W, $2, b3, g2, h3, J, z2, Q, Z2, k2, I2, j, R2, rt, Y, nt, it, ot, st, F, dt, lt, E2, _2, pt, G, f3, v2, L2, gt, T2, xt, vt, yt, wt, $t, _t, N2, A2;
var init_mawaqeet_calendar = __esm({
  "dist/mawaqeet-calendar.js"() {
    "use strict";
    init_lit();
    init_decorators();
    y3 = () => window.salla ?? window.Salla;
    H2 = async () => {
      var a3, t3;
      try {
        await ((t3 = (a3 = y3()) == null ? void 0 : a3.onReady) == null ? void 0 : t3.call(a3));
      } catch {
      }
    };
    O = () => {
      var a3, t3, e5, n5, r6;
      try {
        const i5 = ((t3 = (a3 = y3()) == null ? void 0 : a3.lang) == null ? void 0 : t3.locale) ?? ((r6 = (n5 = (e5 = y3()) == null ? void 0 : e5.config) == null ? void 0 : n5.get) == null ? void 0 : r6.call(n5, "user.language_code"));
        if (typeof i5 == "string" && i5) return i5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    M2 = () => O() === "en";
    u3 = (a3, t3) => M2() ? t3 : a3;
    W = (a3) => {
      var t3, e5, n5;
      try {
        return (n5 = (e5 = (t3 = y3()) == null ? void 0 : t3.config) == null ? void 0 : e5.get) == null ? void 0 : n5.call(e5, a3);
      } catch {
        return;
      }
    };
    $2 = (a3, t3 = "") => {
      if (a3 == null) return t3;
      if (typeof a3 == "string") {
        const e5 = a3.trim();
        if (e5.startsWith("{") && e5.endsWith("}"))
          try {
            return $2(JSON.parse(e5), t3);
          } catch {
          }
        return e5 || t3;
      }
      if (typeof a3 == "number" || typeof a3 == "boolean") return String(a3);
      if (typeof a3 == "object") {
        const e5 = a3, n5 = e5[O()] ?? e5.ar ?? e5.en ?? Object.values(e5).find((r6) => typeof r6 == "string" && r6);
        return typeof n5 == "string" && n5.trim() ? n5 : t3;
      }
      return t3;
    };
    b3 = (a3, t3 = "") => {
      const e5 = Array.isArray(a3) ? a3[0] : a3, n5 = typeof e5 == "object" && e5 ? e5.value : e5;
      return n5 == null || n5 === "" ? t3 : String(n5);
    };
    g2 = (a3, t3 = 0) => {
      const e5 = Number(a3);
      return a3 === "" || a3 == null || !Number.isFinite(e5) ? t3 : e5;
    };
    h3 = (a3, t3 = false) => a3 == null || a3 === "" ? t3 : a3 === true || a3 === "true" || a3 === 1 || a3 === "1";
    J = (a3) => Array.isArray(a3) ? a3 : [];
    z2 = (a3) => {
      var t3, e5;
      try {
        const n5 = (e5 = (t3 = y3()) == null ? void 0 : t3.money) == null ? void 0 : e5.call(t3, a3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(a3 * 100) / 100} ${u3("\u0631.\u0633", "SAR")}`;
    };
    Q = (a3, t3) => {
      var e5, n5, r6;
      try {
        (r6 = (n5 = (e5 = y3()) == null ? void 0 : e5.event) == null ? void 0 : n5.on) == null || r6.call(n5, a3, t3);
      } catch {
      }
    };
    Z2 = () => String(W("store.name") ?? "");
    k2 = "tw_smart_mem_v1";
    I2 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    j = (a3, t3 = 1) => S3((e5) => {
      e5.seen[a3.id] = (e5.seen[a3.id] || 0) + t3, e5.prices = [...e5.prices.slice(-29), a3.price], a3.category && (e5.tags[a3.category] = (e5.tags[a3.category] || 0) + t3);
    });
    R2 = false;
    rt = () => {
      const a3 = innerWidth, t3 = navigator.userAgent;
      return /iPad|Tablet/i.test(t3) || a3 >= 700 && a3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(t3) || a3 < 700 ? "mobile" : "desktop";
    };
    Y = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    nt = () => {
      const a3 = new URLSearchParams(location.search).get("tw_date"), t3 = a3 ? /* @__PURE__ */ new Date(a3 + "T12:00:00") : null;
      return t3 && !isNaN(+t3) ? t3 : /* @__PURE__ */ new Date();
    };
    it = Object.defineProperty;
    ot = (a3, t3, e5, n5) => {
      for (var r6 = void 0, i5 = a3.length - 1, l3; i5 >= 0; i5--)
        (l3 = a3[i5]) && (r6 = l3(t3, e5, r6) || r6);
      return r6 && it(t3, e5, r6), r6;
    };
    st = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    F = /* @__PURE__ */ new Set();
    dt = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    lt = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    E2 = class E3 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), at(), et();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((t3) => {
          var e5;
          t3.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (e5 = this.io) == null || e5.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this.io) == null || t3.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const t3 = this.c, e5 = Date.now(), n5 = Date.parse(String(t3.s_from || "")), r6 = Date.parse(String(t3.s_to || ""));
        if (Number.isFinite(n5) && e5 < n5 || Number.isFinite(r6) && e5 > r6) return true;
        const i5 = rt();
        return !!(h3(t3.s_hide_mobile) && i5 === "mobile" || h3(t3.s_hide_desktop) && i5 !== "mobile");
      }
      vars(t3 = "") {
        const e5 = this.c, n5 = [], r6 = (l3, p4) => {
          p4 !== "" && p4 != null && n5.push(`${l3}:${p4}`);
        };
        r6("--a", e5.s_accent || ""), r6("--a2", e5.s_accent2 || ""), r6("--bgc", e5.s_bg || ""), r6("--fgc", e5.s_text || ""), r6("--cardc", e5.s_card || ""), r6("--r", `${g2(e5.s_radius, 22)}px`), r6("--gap", `${g2(e5.s_gap, 18)}px`), r6("--ts", `${g2(e5.s_title_size, 38)}px`), r6("--fs", `${g2(e5.s_text_size, 16)}px`), r6("--pt", `${g2(e5.s_pad_top, 56)}px`), r6("--pb", `${g2(e5.s_pad_bottom, 56)}px`), r6("--maxw", dt[b3(e5.s_width, "normal")] ?? "1240px"), r6("--sh", lt[Math.max(0, Math.min(5, g2(e5.s_shadow, 2)))]), r6("--ms", `${g2(e5.s_anim_ms, 700)}ms`), r6("--ov", String(g2(e5.s_overlay, 45) / 100)), e5.s_bg_image && r6("--bgimg", `url("${String(e5.s_bg_image)}")`);
        const i5 = ct(b3(e5.s_font, "inherit"));
        return i5 && r6("font-family", `'${i5}', inherit`), n5.join(";") + (t3 ? ";" + t3 : "");
      }
      cls() {
        const t3 = this.c;
        return [
          "sec",
          `th-${b3(t3.s_theme, "auto")}`,
          `al-${b3(t3.s_align, "start")}`,
          `an-${b3(t3.s_anim, "rise")}`,
          `pt-${b3(t3.s_pattern, "none")}`,
          `bs-${b3(t3.s_btn_style, "pill")}`,
          h3(t3.s_border) ? "bordered" : "",
          h3(t3.s_stagger, true) ? "stagger" : "",
          t3.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(t3, e5 = {}, n5 = "", r6 = "", i5 = true) {
        if (this.hiddenNow()) return A;
        const l3 = this.c, p4 = $2(l3.eyebrow, e5.eyebrow ?? ""), o6 = $2(l3.title, e5.title ?? ""), d3 = $2(l3.subtitle, e5.sub ?? ""), s4 = i5 && h3(l3.s_show_head, true) && (p4 || o6 || d3);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(r6)} id=${String(l3.s_anchor || "") || A}>
      <div class="wrap">${s4 ? b2`<header class="head">${p4 ? b2`<span class="eyebrow">${p4}</span>` : ""}${o6 ? b2`<h2 class="title">${o6}</h2>` : ""}${d3 ? b2`<p class="sub">${d3}</p>` : ""}</header>` : ""}
      ${t3}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(t3) {
        const e5 = t3.filter(Boolean);
        return !e5.length || !Y() || !h3(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${u3("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${e5.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(t3, e5 = {}) {
        var n5;
        return b2`<article class="pc ${t3.available ? "" : "oos"}">
      <a class="ph" href=${t3.url} @click=${() => j(t3)}><img src=${t3.image} alt=${t3.name} loading="lazy" />${(n5 = e5.badges) != null && n5.length ? b2`<span class="badges">${e5.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${t3.url} @click=${() => j(t3)}>${t3.name}</a>
        <div class="pr"><b>${z2(t3.price)}</b>${t3.regular > t3.price ? b2`<s>${z2(t3.regular)}</s>` : ""}</div>
        ${e5.rating !== false && t3.rating > 0 ? b2`<div class="rt">★ ${t3.rating.toFixed(1)}${t3.ratingCount ? b2` <small>(${t3.ratingCount})</small>` : ""}</div>` : ""}
        ${e5.extra ?? ""}
        ${e5.quick !== false ? b2`<button class="btn sm" ?disabled=${!t3.available} @click=${() => this.add(t3)}>${t3.available ? u3("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : u3("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(t3, e5 = 1, n5) {
        j(t3, 3), await K(t3.id, e5, n5) ? X(u3("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = t3.url;
      }
    };
    E2.base = i`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
    _2 = E2;
    ot([
      n4({ type: Object })
    ], _2.prototype, "config");
    pt = {
      ramadan: { ar: "\u0631\u0645\u0636\u0627\u0646", en: "Ramadan", emoji: "\u{1F319}", pal: ["#0f2a3f", "#d9b25f", "#f7efd9"], pri: 9 },
      eid_fitr: { ar: "\u0639\u064A\u062F \u0627\u0644\u0641\u0637\u0631", en: "Eid al-Fitr", emoji: "\u{1F389}", pal: ["#3b1f5e", "#f2c14e", "#fff6e0"], pri: 10 },
      hajj: { ar: "\u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", en: "First ten of Dhul-Hijjah", emoji: "\u{1F54B}", pal: ["#1d2b24", "#c9a45c", "#f4efe2"], pri: 6 },
      arafah: { ar: "\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", en: "Day of Arafah", emoji: "\u{1F932}", pal: ["#1d2b24", "#e7c873", "#f6f1e2"], pri: 8 },
      eid_adha: { ar: "\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649", en: "Eid al-Adha", emoji: "\u{1F411}", pal: ["#14361f", "#e2b857", "#fbf5e4"], pri: 10 },
      hijri_new_year: { ar: "\u0631\u0623\u0633 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0647\u062C\u0631\u064A\u0629", en: "Hijri New Year", emoji: "\u2728", pal: ["#1c1c2e", "#b9a26a", "#f3eee0"], pri: 4 },
      founding: { ar: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", en: "Founding Day", emoji: "\u{1F3F0}", pal: ["#4a2c17", "#c8a165", "#f7ecd9"], pri: 8 },
      national: { ar: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", en: "Saudi National Day", emoji: "\u{1F1F8}\u{1F1E6}", pal: ["#0b5d3b", "#ffffff", "#e8f5ee"], pri: 9 },
      white_friday: { ar: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", en: "White Friday", emoji: "\u{1F3F7}\uFE0F", pal: ["#0d0d0f", "#ffffff", "#f2f2f2"], pri: 9 },
      payday: { ar: "\u0645\u0648\u0633\u0645 \u0627\u0644\u0631\u0648\u0627\u062A\u0628", en: "Payday", emoji: "\u{1F4B8}", pal: ["#103b2c", "#3ddc97", "#ecfff6"], pri: 5 },
      citizen: { ar: "\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", en: "Citizen Account day", emoji: "\u{1F3E6}", pal: ["#0e3a4a", "#58c4dd", "#eaf8fc"], pri: 3 },
      mothers: { ar: "\u064A\u0648\u0645 \u0627\u0644\u0623\u0645", en: "Mother's Day", emoji: "\u{1F490}", pal: ["#5a1f3a", "#f2a7c3", "#fff0f6"], pri: 6 },
      back_to_school: { ar: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", en: "Back to school", emoji: "\u{1F392}", pal: ["#1e2f6b", "#ffcc33", "#eef2ff"], pri: 6 },
      summer: { ar: "\u0627\u0644\u0635\u064A\u0641", en: "Summer", emoji: "\u2600\uFE0F", pal: ["#0f4c5c", "#ffb703", "#fff8e6"], pri: 1 },
      winter: { ar: "\u0627\u0644\u0634\u062A\u0627\u0621", en: "Winter", emoji: "\u2744\uFE0F", pal: ["#1b263b", "#9ad1ff", "#eef6ff"], pri: 1 }
    };
    G = 864e5;
    f3 = (a3, t3, e5) => new Date(a3, t3 - 1, e5, 0, 0, 0);
    v2 = (a3, t3) => new Date(a3.getFullYear(), a3.getMonth(), a3.getDate() + t3);
    L2 = null;
    gt = (a3, t3 = false) => {
      try {
        return new Intl.DateTimeFormat(t3 ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(a3);
      } catch {
        return "";
      }
    };
    T2 = (a3, t3 = false) => new Intl.DateTimeFormat(t3 ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(a3);
    xt = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"];
    vt = ["citizen", "summer", "winter", "hijri_new_year"];
    yt = (a3) => xt.filter((t3) => h3(a3[`o_${t3}`], !vt.includes(t3)));
    wt = (a3) => ({ payDay: g2(a3.pay_day, 27), payShift: b3(a3.pay_shift, "before"), school: String(a3.school_date || "").slice(0, 10), whiteFridayDays: g2(a3.wf_days, 7) });
    $t = (a3) => {
      const t3 = String(a3.preview_date || "").slice(0, 10);
      if (t3 && (Y() || window.__twDemo)) {
        const e5 = /* @__PURE__ */ new Date(t3 + "T12:00:00");
        if (!isNaN(+e5)) return e5;
      }
      return nt();
    };
    _t = (a3, t3) => {
      const e5 = (i5) => `${i5.getFullYear()}${String(i5.getMonth() + 1).padStart(2, "0")}${String(i5.getDate()).padStart(2, "0")}`, n5 = new Date(a3.end.getFullYear(), a3.end.getMonth(), a3.end.getDate() + 1), r6 = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//tw-mawaqeet//AR",
        "BEGIN:VEVENT",
        `UID:${a3.id}-${e5(a3.start)}@mawaqeet`,
        `DTSTART;VALUE=DATE:${e5(a3.start)}`,
        `DTEND;VALUE=DATE:${e5(n5)}`,
        `SUMMARY:${t3}`,
        "BEGIN:VALARM",
        "TRIGGER:-P2D",
        "ACTION:DISPLAY",
        `DESCRIPTION:${t3}`,
        "END:VALARM",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join(`\r
`);
      return URL.createObjectURL(new Blob([r6], { type: "text/calendar" }));
    };
    N2 = class N3 extends _2 {
      render() {
        const t3 = this.c, e5 = M2(), n5 = $t(t3), r6 = yt(t3), i5 = /* @__PURE__ */ new Set(), l3 = g2(t3.months, 12), p4 = bt(n5, wt(t3)).filter((s4) => r6.includes(s4.id) && +s4.end + 864e5 >= +n5 && +s4.start <= +n5 + l3 * 30 * 864e5).filter((s4) => h3(t3.dedupe_monthly, true) && (s4.id === "payday" || s4.id === "citizen") ? i5.has(s4.id) ? false : (i5.add(s4.id), true) : true).slice(0, g2(t3.limit, 10)), o6 = J(t3.offers), d3 = Math.round((+n5 - +new Date(n5.getFullYear(), 0, 1)) / (365 * 864e5) * 100);
        return this.shell(
          b2`${h3(t3.year_bar, true) ? b2`<div class="muted" style="font-size:13px">${u3(`\u0645\u0636\u0649 ${d3}% \u0645\u0646 \u0627\u0644\u0633\u0646\u0629`, `${d3}% of the year has passed`)}</div><div class="bar"><i style=${`width:${d3}%`}></i></div>` : ""}
      <div class="${b3(t3.layout, "h") === "v" ? "v" : ""}"><div class="tl">${p4.map((s4) => {
            const m5 = pt[s4.id], x6 = +n5 >= +s4.start && +n5 <= +s4.end + 864e5 - 1, D6 = Math.ceil((+s4.start - +n5) / 864e5), w5 = o6.find((V6) => b3(V6.occasion) === s4.id);
            return b2`<div class="ev ${x6 ? "now" : ""}" style=${`--oc:${m5.pal[0] === "#0d0d0f" ? "#555" : m5.pal[0]}`}>
          <span class="left">${x6 ? u3("\u0627\u0644\u0622\u0646", "Now") : D6 <= 1 ? u3("\u063A\u062F\u0627\u064B", "Tomorrow") : u3(`\u0628\u0639\u062F ${D6} \u064A\u0648\u0645`, `in ${D6} days`)}</span>
          <span class="em">${m5.emoji}</span><b>${m5[e5 ? "en" : "ar"]}</b>
          <div class="dt">${T2(s4.start, e5)}${+s4.end > +s4.start ? ` \u2013 ${T2(s4.end, e5)}` : ""}${h3(t3.show_hijri, true) ? b2`<br />${gt(s4.start, e5)}` : ""}</div>
          ${w5 && $2(w5.text) ? b2`<div class="of">🎁 ${$2(w5.text)}</div>` : ""}
          <div class="acts">${w5 && w5.link ? b2`<a class="btn sm" href=${String(w5.link)}>${$2(w5.button, u3("\u0634\u0648\u0641 \u0627\u0644\u0639\u0631\u0636", "See offer"))}</a>` : ""}
            ${h3(t3.reminders, true) && !x6 ? b2`<a class="btn sm ghost" download=${`${s4.id}.ics`} href=${_t(s4, `${m5[e5 ? "en" : "ar"]} \xB7 ${Z2() || ""}`)}>⏰ ${u3("\u0630\u0643\u0651\u0631\u0646\u064A", "Remind me")}</a>` : ""}</div></div>`;
          })}</div></div>`,
          { eyebrow: u3("\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0645\u0648\u0627\u0633\u0645", "Season calendar"), title: u3("\u0645\u0648\u0627\u0633\u0645 \u0627\u0644\u0633\u0646\u0629\u2026 \u0648\u0639\u0631\u0648\u0636\u0646\u0627 \u0641\u064A\u0647\u0627", "The year\u2019s occasions and our offers") }
        );
      }
    };
    N2.styles = [_2.base, i`
    .tl { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(210px, 1fr); gap: var(--gap); overflow-x: auto; padding: 12px 2px 18px; scroll-snap-type: x mandatory; }
    .v .tl { grid-auto-flow: row; grid-auto-columns: auto; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); overflow: visible; }
    .ev { scroll-snap-align: start; position: relative; border-radius: var(--r); padding: 18px; background: var(--CARD); box-shadow: var(--sh); display: grid; gap: 8px; align-content: start; border-top: 5px solid var(--oc); }
    .ev.now { background: linear-gradient(160deg, color-mix(in srgb, var(--oc) 22%, var(--CARD)), var(--CARD)); outline: 2px solid var(--oc); }
    .em { font-size: 30px; } .ev b { font-size: 17px; } .dt { font-size: 13px; opacity: .75; line-height: 1.6; }
    .left { position: absolute; top: 14px; inset-inline-end: 14px; font-size: 12px; font-weight: 800; padding: 4px 10px; border-radius: 999px; background: color-mix(in srgb, var(--oc) 18%, transparent); }
    .of { font-size: 14px; font-weight: 700; color: var(--A); } .acts { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px; align-items: center; } .acts a { font-size: 13px; }
    .bar { position: relative; height: 6px; border-radius: 9px; background: var(--LINE); margin: 6px 0 4px; } .bar i { position: absolute; inset-block: 0; inset-inline-start: 0; border-radius: 9px; background: var(--A); }
  `];
    A2 = N2;
    typeof A2 < "u" && A2.registerSallaComponent("salla-mawaqeet-calendar");
  }
});

// dist/mawaqeet-countdown.js
var mawaqeet_countdown_exports = {};
__export(mawaqeet_countdown_exports, {
  default: () => D2
});
async function V2(a3, t3 = 1, r6) {
  var n5, e5, o6;
  await X2();
  try {
    return await ((o6 = (e5 = (n5 = $3()) == null ? void 0 : n5.cart) == null ? void 0 : e5.addItem) == null ? void 0 : o6.call(e5, r6 ? { id: a3, quantity: t3, notes: r6 } : { id: a3, quantity: t3 })), true;
  } catch {
    return false;
  }
}
function Z3(a3, t3 = true) {
  var r6, n5, e5;
  try {
    (e5 = t3 ? (r6 = $3()) == null ? void 0 : r6.success : (n5 = $3()) == null ? void 0 : n5.error) == null || e5(a3);
  } catch {
  }
}
function H3() {
  try {
    return { ...M3(), ...JSON.parse(localStorage.getItem(z3) || "{}") };
  } catch {
    return M3();
  }
}
function at2(a3) {
  try {
    localStorage.setItem(z3, JSON.stringify(a3));
  } catch {
  }
}
function N4(a3) {
  const t3 = H3();
  return a3(t3), at2(t3), t3;
}
function rt2() {
  let a3 = false;
  try {
    a3 = !sessionStorage.getItem(z3), sessionStorage.setItem(z3, "1");
  } catch {
  }
  return a3 ? N4((t3) => {
    t3.visits += 1, t3.last = Date.now();
  }) : H3();
}
function et2() {
  B2 || (B2 = true, tt2("cart::item.added", (a3) => {
    var r6;
    const t3 = Number(((r6 = a3 == null ? void 0 : a3.data) == null ? void 0 : r6.product_id) ?? 0);
    t3 && N4((n5) => {
      n5.carted.includes(t3) || (n5.carted = [...n5.carted.slice(-40), t3]);
    });
  }));
}
function lt2(a3) {
  const t3 = ct2[a3];
  if (!t3 || L3.has(t3)) return t3;
  L3.add(t3);
  const r6 = document.createElement("link");
  return r6.rel = "stylesheet", r6.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t3)}:wght@400;500;700;800&display=swap`, document.head.appendChild(r6), t3;
}
function ft2(a3) {
  try {
    R3 ?? (R3 = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const t3 = Object.fromEntries(R3.formatToParts(a3).map((r6) => [r6.type, r6.value]));
    return { y: parseInt(t3.year), m: parseInt(t3.month), d: parseInt(t3.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
function ht2(a3, t3, r6, n5) {
  const e5 = [];
  for (let o6 = 0; o6 <= n5; o6++) {
    const l3 = v3(r6, o6), s4 = ft2(l3);
    s4.m === a3 && s4.d === t3 && (e5.push(l3), o6 += 300);
  }
  return e5;
}
function ut2(a3) {
  const t3 = h4(a3, 11, 30);
  for (; t3.getDay() !== 5; ) t3.setDate(t3.getDate() - 1);
  return t3;
}
function mt2(a3, t3, r6 = 27, n5 = "before") {
  const e5 = h4(a3, t3, Math.min(r6, new Date(a3, t3, 0).getDate()));
  if (n5 !== "none") for (; e5.getDay() === 5 || e5.getDay() === 6; ) e5.setDate(e5.getDate() + (n5 === "before" ? -1 : 1));
  return e5;
}
function bt2(a3, t3 = {}) {
  const r6 = v3(a3, -40), n5 = 440, e5 = [], o6 = (i5, d3, f5, p4) => ht2(d3, f5, r6, n5).forEach((y7) => e5.push({ id: i5, start: y7, end: v3(y7, p4) }));
  o6("ramadan", 9, 1, 29), o6("eid_fitr", 10, 1, 3), o6("hajj", 12, 1, 7), o6("arafah", 12, 9, 0), o6("eid_adha", 12, 10, 3), o6("hijri_new_year", 1, 1, 0);
  for (const i5 of [a3.getFullYear() - 1, a3.getFullYear(), a3.getFullYear() + 1]) {
    e5.push({ id: "founding", start: h4(i5, 2, 22), end: h4(i5, 2, 22) }), e5.push({ id: "national", start: h4(i5, 9, 23), end: h4(i5, 9, 23) }), e5.push({ id: "mothers", start: h4(i5, 3, 21), end: h4(i5, 3, 21) });
    const d3 = ut2(i5);
    e5.push({ id: "white_friday", start: v3(d3, -(t3.whiteFridayDays ?? 7)), end: v3(d3, 3) }), e5.push({ id: "summer", start: h4(i5, 6, 15), end: h4(i5, 8, 31) }), e5.push({ id: "winter", start: h4(i5, 12, 1), end: h4(i5 + 1, 2, 28) });
    for (let f5 = 1; f5 <= 12; f5++) {
      const p4 = mt2(i5, f5, t3.payDay ?? 27, t3.payShift ?? "before");
      e5.push({ id: "payday", start: p4, end: v3(p4, 3) });
      const y7 = h4(i5, f5, 10);
      e5.push({ id: "citizen", start: y7, end: v3(y7, 1) });
    }
  }
  if (t3.school) {
    const i5 = /* @__PURE__ */ new Date(t3.school + "T00:00:00");
    isNaN(+i5) || e5.push({ id: "back_to_school", start: v3(i5, -14), end: i5 });
  }
  for (const i5 of e5.filter((d3) => d3.id === "ramadan")) {
    const d3 = e5.find((f5) => f5.id === "eid_fitr" && +f5.start > +i5.start && +f5.start - +i5.start < 32 * j2);
    d3 && (i5.end = v3(d3.start, -1));
  }
  const l3 = +r6, s4 = +r6 + n5 * j2;
  return e5.filter((i5) => +i5.end >= l3 && +i5.start <= s4).sort((i5, d3) => +i5.start - +d3.start);
}
function xt2(a3, t3, r6 = {}) {
  const n5 = bt2(a3, r6).filter((s4) => !t3 || t3.includes(s4.id)), e5 = +a3, o6 = n5.filter((s4) => e5 >= +s4.start && e5 <= T3(s4.end)).sort((s4, i5) => _3[i5.id].pri - _3[s4.id].pri), l3 = n5.filter((s4) => +s4.start > e5);
  return {
    active: o6,
    next: l3,
    phase: (s4) => e5 < +s4.start ? "soon" : T3(s4.end) - e5 < 2 * j2 && +s4.end > +s4.start ? "last" : "on",
    dayOf: (s4) => Math.floor((e5 - +s4.start) / j2) + 1
  };
}
function kt(a3, t3 = "deco") {
  const r6 = "var(--o2, #d9b25f)";
  return a3 === "ramadan" || a3 === "hajj" || a3 === "arafah" || a3 === "hijri_new_year" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true">${[40, 110, 300, 360].map((n5, e5) => w`<g transform=${`translate(${n5} 0)`} class="sw" style=${`animation-delay:${e5 * 0.4}s`}><line x1="0" y1="0" x2="0" y2=${50 + e5 * 18} stroke=${r6} stroke-width="1.5"/><g transform=${`translate(0 ${50 + e5 * 18})`}><path d="M-12 0h24l-4 8h-16z" fill=${r6}/><rect x="-10" y="8" width="20" height="30" rx="6" fill=${r6} opacity=".9"/><rect x="-6" y="12" width="12" height="22" rx="4" fill="#fff6d8" opacity=".85"/><path d="M-10 38h20l-4 6h-12z" fill=${r6}/></g></g>`)}
      <path d="M215 40a38 38 0 1 0 30 62 32 32 0 1 1-30-62z" fill=${r6}/><circle cx="262" cy="52" r="3" fill=${r6}/><circle cx="180" cy="30" r="2" fill=${r6}/></svg>` : a3 === "eid_fitr" || a3 === "eid_adha" || a3 === "mothers" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 14 }, (n5, e5) => w`<path class="tw" style=${`animation-delay:${e5 % 5 * 0.3}s`} transform=${`translate(${e5 * 53 % 390} ${e5 * 37 % 200}) scale(${0.5 + e5 % 3 * 0.3})`} d="M0-10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z" fill=${r6}/>`)}
      ${[60, 330].map((n5, e5) => w`<g class="sw" style=${`animation-delay:${e5}s`}><line x1=${n5} y1="0" x2=${n5} y2="70" stroke=${r6}/><circle cx=${n5} cy="86" r="16" fill=${e5 ? "#f28fad" : r6}/></g>`)}</svg>` : a3 === "national" || a3 === "founding" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true"><path d="M0 0h400v14c-30 10-50 10-80 0s-50-10-80 0-50 10-80 0-50-10-80 0-50 10-80 0z" fill=${a3 === "national" ? "#0b6b43" : "#7a4a22"}/>
      ${Array.from({ length: 9 }, (n5, e5) => w`<path class="sw" style=${`animation-delay:${e5 * 0.2}s`} transform=${`translate(${20 + e5 * 45} 14)`} d="M0 0h26l-13 22z" fill=${e5 % 2 ? a3 === "national" ? "#fff" : "#c8a165" : a3 === "national" ? "#0b6b43" : "#4a2c17"}/>`)}</svg>` : a3 === "white_friday" || a3 === "payday" || a3 === "citizen" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 10 }, (n5, e5) => w`<g class="fall" style=${`animation-delay:${e5 * 0.5}s;transform-origin:${30 + e5 * 38}px 0`}><rect x=${20 + e5 * 38} y=${10 + e5 % 4 * 30} width="26" height="16" rx="4" fill=${e5 % 2 ? r6 : "currentColor"} opacity=".7" transform=${`rotate(${e5 % 5 * 12 - 24} ${30 + e5 * 38} ${18 + e5 % 4 * 30})`}/></g>`)}</svg>` : b2``;
}
var $3, X2, P3, Y2, b4, w2, x2, g3, m2, Q2, G2, tt2, z3, M3, C2, B2, nt2, W2, it2, ot2, st2, ct2, L3, dt2, pt2, I3, A3, _3, j2, h4, v3, R3, gt2, O2, T3, yt2, vt2, wt2, $t2, _t2, At, jt, Dt, E4, D2;
var init_mawaqeet_countdown = __esm({
  "dist/mawaqeet-countdown.js"() {
    "use strict";
    init_lit();
    init_decorators();
    $3 = () => window.salla ?? window.Salla;
    X2 = async () => {
      var a3, t3;
      try {
        await ((t3 = (a3 = $3()) == null ? void 0 : a3.onReady) == null ? void 0 : t3.call(a3));
      } catch {
      }
    };
    P3 = () => {
      var a3, t3, r6, n5, e5;
      try {
        const o6 = ((t3 = (a3 = $3()) == null ? void 0 : a3.lang) == null ? void 0 : t3.locale) ?? ((e5 = (n5 = (r6 = $3()) == null ? void 0 : r6.config) == null ? void 0 : n5.get) == null ? void 0 : e5.call(n5, "user.language_code"));
        if (typeof o6 == "string" && o6) return o6.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    Y2 = () => P3() === "en";
    b4 = (a3, t3) => Y2() ? t3 : a3;
    w2 = (a3, t3 = "") => {
      if (a3 == null) return t3;
      if (typeof a3 == "string") {
        const r6 = a3.trim();
        if (r6.startsWith("{") && r6.endsWith("}"))
          try {
            return w2(JSON.parse(r6), t3);
          } catch {
          }
        return r6 || t3;
      }
      if (typeof a3 == "number" || typeof a3 == "boolean") return String(a3);
      if (typeof a3 == "object") {
        const r6 = a3, n5 = r6[P3()] ?? r6.ar ?? r6.en ?? Object.values(r6).find((e5) => typeof e5 == "string" && e5);
        return typeof n5 == "string" && n5.trim() ? n5 : t3;
      }
      return t3;
    };
    x2 = (a3, t3 = "") => {
      const r6 = Array.isArray(a3) ? a3[0] : a3, n5 = typeof r6 == "object" && r6 ? r6.value : r6;
      return n5 == null || n5 === "" ? t3 : String(n5);
    };
    g3 = (a3, t3 = 0) => {
      const r6 = Number(a3);
      return a3 === "" || a3 == null || !Number.isFinite(r6) ? t3 : r6;
    };
    m2 = (a3, t3 = false) => a3 == null || a3 === "" ? t3 : a3 === true || a3 === "true" || a3 === 1 || a3 === "1";
    Q2 = (a3) => Array.isArray(a3) ? a3 : [];
    G2 = (a3) => {
      var t3, r6;
      try {
        const n5 = (r6 = (t3 = $3()) == null ? void 0 : t3.money) == null ? void 0 : r6.call(t3, a3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(a3 * 100) / 100} ${b4("\u0631.\u0633", "SAR")}`;
    };
    tt2 = (a3, t3) => {
      var r6, n5, e5;
      try {
        (e5 = (n5 = (r6 = $3()) == null ? void 0 : r6.event) == null ? void 0 : n5.on) == null || e5.call(n5, a3, t3);
      } catch {
      }
    };
    z3 = "tw_smart_mem_v1";
    M3 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    C2 = (a3, t3 = 1) => N4((r6) => {
      r6.seen[a3.id] = (r6.seen[a3.id] || 0) + t3, r6.prices = [...r6.prices.slice(-29), a3.price], a3.category && (r6.tags[a3.category] = (r6.tags[a3.category] || 0) + t3);
    });
    B2 = false;
    nt2 = () => {
      const a3 = innerWidth, t3 = navigator.userAgent;
      return /iPad|Tablet/i.test(t3) || a3 >= 700 && a3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(t3) || a3 < 700 ? "mobile" : "desktop";
    };
    W2 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    it2 = () => {
      const a3 = new URLSearchParams(location.search).get("tw_date"), t3 = a3 ? /* @__PURE__ */ new Date(a3 + "T12:00:00") : null;
      return t3 && !isNaN(+t3) ? t3 : /* @__PURE__ */ new Date();
    };
    ot2 = Object.defineProperty;
    st2 = (a3, t3, r6, n5) => {
      for (var e5 = void 0, o6 = a3.length - 1, l3; o6 >= 0; o6--)
        (l3 = a3[o6]) && (e5 = l3(t3, r6, e5) || e5);
      return e5 && ot2(t3, r6, e5), e5;
    };
    ct2 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    L3 = /* @__PURE__ */ new Set();
    dt2 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    pt2 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    I3 = class I4 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), et2(), rt2();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((t3) => {
          var r6;
          t3.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (r6 = this.io) == null || r6.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this.io) == null || t3.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const t3 = this.c, r6 = Date.now(), n5 = Date.parse(String(t3.s_from || "")), e5 = Date.parse(String(t3.s_to || ""));
        if (Number.isFinite(n5) && r6 < n5 || Number.isFinite(e5) && r6 > e5) return true;
        const o6 = nt2();
        return !!(m2(t3.s_hide_mobile) && o6 === "mobile" || m2(t3.s_hide_desktop) && o6 !== "mobile");
      }
      vars(t3 = "") {
        const r6 = this.c, n5 = [], e5 = (l3, s4) => {
          s4 !== "" && s4 != null && n5.push(`${l3}:${s4}`);
        };
        e5("--a", r6.s_accent || ""), e5("--a2", r6.s_accent2 || ""), e5("--bgc", r6.s_bg || ""), e5("--fgc", r6.s_text || ""), e5("--cardc", r6.s_card || ""), e5("--r", `${g3(r6.s_radius, 22)}px`), e5("--gap", `${g3(r6.s_gap, 18)}px`), e5("--ts", `${g3(r6.s_title_size, 38)}px`), e5("--fs", `${g3(r6.s_text_size, 16)}px`), e5("--pt", `${g3(r6.s_pad_top, 56)}px`), e5("--pb", `${g3(r6.s_pad_bottom, 56)}px`), e5("--maxw", dt2[x2(r6.s_width, "normal")] ?? "1240px"), e5("--sh", pt2[Math.max(0, Math.min(5, g3(r6.s_shadow, 2)))]), e5("--ms", `${g3(r6.s_anim_ms, 700)}ms`), e5("--ov", String(g3(r6.s_overlay, 45) / 100)), r6.s_bg_image && e5("--bgimg", `url("${String(r6.s_bg_image)}")`);
        const o6 = lt2(x2(r6.s_font, "inherit"));
        return o6 && e5("font-family", `'${o6}', inherit`), n5.join(";") + (t3 ? ";" + t3 : "");
      }
      cls() {
        const t3 = this.c;
        return [
          "sec",
          `th-${x2(t3.s_theme, "auto")}`,
          `al-${x2(t3.s_align, "start")}`,
          `an-${x2(t3.s_anim, "rise")}`,
          `pt-${x2(t3.s_pattern, "none")}`,
          `bs-${x2(t3.s_btn_style, "pill")}`,
          m2(t3.s_border) ? "bordered" : "",
          m2(t3.s_stagger, true) ? "stagger" : "",
          t3.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(t3, r6 = {}, n5 = "", e5 = "", o6 = true) {
        if (this.hiddenNow()) return A;
        const l3 = this.c, s4 = w2(l3.eyebrow, r6.eyebrow ?? ""), i5 = w2(l3.title, r6.title ?? ""), d3 = w2(l3.subtitle, r6.sub ?? ""), f5 = o6 && m2(l3.s_show_head, true) && (s4 || i5 || d3);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(e5)} id=${String(l3.s_anchor || "") || A}>
      <div class="wrap">${f5 ? b2`<header class="head">${s4 ? b2`<span class="eyebrow">${s4}</span>` : ""}${i5 ? b2`<h2 class="title">${i5}</h2>` : ""}${d3 ? b2`<p class="sub">${d3}</p>` : ""}</header>` : ""}
      ${t3}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(t3) {
        const r6 = t3.filter(Boolean);
        return !r6.length || !W2() || !m2(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${b4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${r6.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(t3, r6 = {}) {
        var n5;
        return b2`<article class="pc ${t3.available ? "" : "oos"}">
      <a class="ph" href=${t3.url} @click=${() => C2(t3)}><img src=${t3.image} alt=${t3.name} loading="lazy" />${(n5 = r6.badges) != null && n5.length ? b2`<span class="badges">${r6.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${t3.url} @click=${() => C2(t3)}>${t3.name}</a>
        <div class="pr"><b>${G2(t3.price)}</b>${t3.regular > t3.price ? b2`<s>${G2(t3.regular)}</s>` : ""}</div>
        ${r6.rating !== false && t3.rating > 0 ? b2`<div class="rt">★ ${t3.rating.toFixed(1)}${t3.ratingCount ? b2` <small>(${t3.ratingCount})</small>` : ""}</div>` : ""}
        ${r6.extra ?? ""}
        ${r6.quick !== false ? b2`<button class="btn sm" ?disabled=${!t3.available} @click=${() => this.add(t3)}>${t3.available ? b4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : b4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(t3, r6 = 1, n5) {
        C2(t3, 3), await V2(t3.id, r6, n5) ? Z3(b4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = t3.url;
      }
    };
    I3.base = i`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
    A3 = I3;
    st2([
      n4({ type: Object })
    ], A3.prototype, "config");
    _3 = {
      ramadan: { ar: "\u0631\u0645\u0636\u0627\u0646", en: "Ramadan", emoji: "\u{1F319}", pal: ["#0f2a3f", "#d9b25f", "#f7efd9"], pri: 9 },
      eid_fitr: { ar: "\u0639\u064A\u062F \u0627\u0644\u0641\u0637\u0631", en: "Eid al-Fitr", emoji: "\u{1F389}", pal: ["#3b1f5e", "#f2c14e", "#fff6e0"], pri: 10 },
      hajj: { ar: "\u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", en: "First ten of Dhul-Hijjah", emoji: "\u{1F54B}", pal: ["#1d2b24", "#c9a45c", "#f4efe2"], pri: 6 },
      arafah: { ar: "\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", en: "Day of Arafah", emoji: "\u{1F932}", pal: ["#1d2b24", "#e7c873", "#f6f1e2"], pri: 8 },
      eid_adha: { ar: "\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649", en: "Eid al-Adha", emoji: "\u{1F411}", pal: ["#14361f", "#e2b857", "#fbf5e4"], pri: 10 },
      hijri_new_year: { ar: "\u0631\u0623\u0633 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0647\u062C\u0631\u064A\u0629", en: "Hijri New Year", emoji: "\u2728", pal: ["#1c1c2e", "#b9a26a", "#f3eee0"], pri: 4 },
      founding: { ar: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", en: "Founding Day", emoji: "\u{1F3F0}", pal: ["#4a2c17", "#c8a165", "#f7ecd9"], pri: 8 },
      national: { ar: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", en: "Saudi National Day", emoji: "\u{1F1F8}\u{1F1E6}", pal: ["#0b5d3b", "#ffffff", "#e8f5ee"], pri: 9 },
      white_friday: { ar: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", en: "White Friday", emoji: "\u{1F3F7}\uFE0F", pal: ["#0d0d0f", "#ffffff", "#f2f2f2"], pri: 9 },
      payday: { ar: "\u0645\u0648\u0633\u0645 \u0627\u0644\u0631\u0648\u0627\u062A\u0628", en: "Payday", emoji: "\u{1F4B8}", pal: ["#103b2c", "#3ddc97", "#ecfff6"], pri: 5 },
      citizen: { ar: "\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", en: "Citizen Account day", emoji: "\u{1F3E6}", pal: ["#0e3a4a", "#58c4dd", "#eaf8fc"], pri: 3 },
      mothers: { ar: "\u064A\u0648\u0645 \u0627\u0644\u0623\u0645", en: "Mother's Day", emoji: "\u{1F490}", pal: ["#5a1f3a", "#f2a7c3", "#fff0f6"], pri: 6 },
      back_to_school: { ar: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", en: "Back to school", emoji: "\u{1F392}", pal: ["#1e2f6b", "#ffcc33", "#eef2ff"], pri: 6 },
      summer: { ar: "\u0627\u0644\u0635\u064A\u0641", en: "Summer", emoji: "\u2600\uFE0F", pal: ["#0f4c5c", "#ffb703", "#fff8e6"], pri: 1 },
      winter: { ar: "\u0627\u0644\u0634\u062A\u0627\u0621", en: "Winter", emoji: "\u2744\uFE0F", pal: ["#1b263b", "#9ad1ff", "#eef6ff"], pri: 1 }
    };
    j2 = 864e5;
    h4 = (a3, t3, r6) => new Date(a3, t3 - 1, r6, 0, 0, 0);
    v3 = (a3, t3) => new Date(a3.getFullYear(), a3.getMonth(), a3.getDate() + t3);
    R3 = null;
    gt2 = (a3, t3 = false) => {
      try {
        return new Intl.DateTimeFormat(t3 ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(a3);
      } catch {
        return "";
      }
    };
    O2 = (a3, t3 = false) => new Intl.DateTimeFormat(t3 ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(a3);
    T3 = (a3) => +a3 + j2 - 1;
    yt2 = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"];
    vt2 = ["citizen", "summer", "winter", "hijri_new_year"];
    wt2 = (a3) => yt2.filter((t3) => m2(a3[`o_${t3}`], !vt2.includes(t3)));
    $t2 = (a3) => ({ payDay: g3(a3.pay_day, 27), payShift: x2(a3.pay_shift, "before"), school: String(a3.school_date || "").slice(0, 10), whiteFridayDays: g3(a3.wf_days, 7) });
    _t2 = (a3) => {
      const t3 = String(a3.preview_date || "").slice(0, 10);
      if (t3 && (W2() || window.__twDemo)) {
        const r6 = /* @__PURE__ */ new Date(t3 + "T12:00:00");
        if (!isNaN(+r6)) return r6;
      }
      return it2();
    };
    At = i`
  .deco { position: absolute; inset: 0 0 auto 0; width: 100%; height: auto; max-height: 100%; pointer-events: none; z-index: 0; color: var(--o1); }
  .sw { animation: sw 4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: top center; } @keyframes sw { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .tw { animation: tw 2.4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; } @keyframes tw { to { opacity: .25; } }
  .fall { animation: fl 6s linear infinite; } @keyframes fl { from { transform: translateY(-30px); opacity: 0; } 15% { opacity: 1; } to { transform: translateY(220px); opacity: 0; } }
`;
    jt = Object.defineProperty;
    Dt = (a3, t3, r6, n5) => {
      for (var e5 = void 0, o6 = a3.length - 1, l3; o6 >= 0; o6--)
        (l3 = a3[o6]) && (e5 = l3(t3, r6, e5) || e5);
      return e5 && jt(t3, r6, e5), e5;
    };
    E4 = class E5 extends A3 {
      constructor() {
        super(...arguments), this.tick = Date.now(), this.tm = 0;
      }
      connectedCallback() {
        super.connectedCallback(), this.tm = window.setInterval(() => this.tick = Date.now(), 1e3);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), clearInterval(this.tm);
      }
      render() {
        const t3 = this.c, r6 = Y2(), n5 = _t2(t3), e5 = Math.abs(+n5 - Date.now()) < 864e5 ? new Date(this.tick) : n5, o6 = x2(t3.target, "next"), l3 = xt2(n5, o6 === "next" ? wt2(t3) : [o6], $t2(t3)), s4 = l3.next.find((u6) => _3[u6.id].pri >= g3(t3.min_priority, 3)) ?? l3.next[0];
        if (!s4) return A;
        const i5 = _3[s4.id], d3 = Math.max(0, Math.floor((+s4.start - +e5) / 1e3)), f5 = [[Math.floor(d3 / 86400), b4("\u064A\u0648\u0645", "days")], [Math.floor(d3 % 86400 / 3600), b4("\u0633\u0627\u0639\u0629", "hrs")], [Math.floor(d3 % 3600 / 60), b4("\u062F\u0642\u064A\u0642\u0629", "min")], [d3 % 60, b4("\u062B\u0627\u0646\u064A\u0629", "sec")]], p4 = Q2(t3.messages).find((u6) => x2(u6.occasion) === s4.id), y7 = m2(t3.store_colors) ? ["var(--A)", "#fff", "#fff"] : [String(t3.color1 || i5.pal[0]), String(t3.color2 || i5.pal[1]), String(t3.color3 || i5.pal[2])];
        return this.shell(b2`<div class="box" style=${`--o1:${y7[0]};--o2:${y7[1]};--o3:${y7[2]}`}>${m2(t3.decor, true) ? kt(s4.id) : ""}<div class="in">
      <span class="em">${i5.emoji}</span><h3>${p4 && w2(p4.title) || b4(`\u0628\u0627\u0642\u064A \u0639\u0644\u0649 ${i5.ar}`, `Countdown to ${i5.en}`)}</h3>
      ${m2(t3.show_date, true) ? b2`<div class="date">${O2(s4.start, r6)} · ${gt2(s4.start, r6)}</div>` : ""}
      <div class="cd">${f5.slice(0, m2(t3.show_seconds, true) ? 4 : 3).map(([u6, q2]) => b2`<div class="u"><b>${String(u6).padStart(2, "0")}</b><small>${q2}</small></div>`)}</div>
      ${p4 && w2(p4.text) ? b2`<p>${w2(p4.text)}</p>` : ""}${p4 && p4.link || t3.link ? b2`<a class="btn" href=${String(p4 && p4.link || t3.link)}>${p4 && w2(p4.button) || w2(t3.button, b4("\u062C\u0647\u0651\u0632 \u0646\u0641\u0633\u0643 \u0627\u0644\u0622\u0646", "Get ready now"))}</a>` : ""}
      ${m2(t3.show_next, true) ? b2`<div class="nx">${l3.next.filter((u6) => u6 !== s4 && _3[u6.id].pri >= g3(t3.min_priority, 3)).slice(0, g3(t3.next_count, 3)).map((u6) => b2`<span>${_3[u6.id].emoji} ${_3[u6.id][r6 ? "en" : "ar"]} · ${O2(u6.start, r6)}</span>`)}</div>` : ""}
    </div></div>`, { title: "" });
      }
    };
    E4.styles = [A3.base, At, i`
    .box { position: relative; overflow: hidden; border-radius: var(--r); padding: clamp(24px, 4vw, 48px); background: linear-gradient(150deg, var(--o1), color-mix(in srgb, var(--o1) 65%, #000)); color: var(--o3); box-shadow: var(--sh); text-align: center; }
    .in { position: relative; z-index: 1; display: grid; gap: 12px; justify-items: center; } .em { font-size: 48px; } h3 { margin: 0; font-size: clamp(26px, 4vw, 44px); }
    .date { opacity: .85; font-size: 15px; }
    .cd { display: flex; gap: clamp(8px, 2vw, 18px); direction: ltr; margin: 10px 0; }
    .u { display: grid; gap: 6px; } .u b { display: block; min-width: clamp(62px, 9vw, 96px); padding: 14px 6px; font-size: clamp(30px, 5vw, 56px); font-weight: 900; border-radius: 16px; background: color-mix(in srgb, var(--o3) 12%, transparent); border: 1px solid color-mix(in srgb, var(--o3) 22%, transparent); font-variant-numeric: tabular-nums; position: relative; }
    .u b::after { content: ''; position: absolute; inset: 50% 0 auto; border-top: 1px solid color-mix(in srgb, var(--o1) 40%, transparent); } .u small { font-size: 12px; opacity: .8; }
    .nx { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 8px; } .nx span { font-size: 12px; padding: 6px 12px; border-radius: 999px; background: color-mix(in srgb, var(--o3) 12%, transparent); }
    .btn { background: var(--o2); color: var(--o1); }
  `];
    D2 = E4;
    Dt([
      r5()
    ], D2.prototype, "tick");
    typeof D2 < "u" && D2.registerSallaComponent("salla-mawaqeet-countdown");
  }
});

// dist/mawaqeet-decor.js
var mawaqeet_decor_exports = {};
__export(mawaqeet_decor_exports, {
  default: () => j3
});
async function V3(e5, t3 = 1, a3) {
  var n5, r6, i5;
  await X3();
  try {
    return await ((i5 = (r6 = (n5 = y4()) == null ? void 0 : n5.cart) == null ? void 0 : r6.addItem) == null ? void 0 : i5.call(r6, a3 ? { id: e5, quantity: t3, notes: a3 } : { id: e5, quantity: t3 })), true;
  } catch {
    return false;
  }
}
function Z4(e5, t3 = true) {
  var a3, n5, r6;
  try {
    (r6 = t3 ? (a3 = y4()) == null ? void 0 : a3.success : (n5 = y4()) == null ? void 0 : n5.error) == null || r6(e5);
  } catch {
  }
}
function B3() {
  try {
    return { ...R4(), ...JSON.parse(localStorage.getItem(D3) || "{}") };
  } catch {
    return R4();
  }
}
function et3(e5) {
  try {
    localStorage.setItem(D3, JSON.stringify(e5));
  } catch {
  }
}
function z4(e5) {
  const t3 = B3();
  return e5(t3), et3(t3), t3;
}
function at3() {
  let e5 = false;
  try {
    e5 = !sessionStorage.getItem(D3), sessionStorage.setItem(D3, "1");
  } catch {
  }
  return e5 ? z4((t3) => {
    t3.visits += 1, t3.last = Date.now();
  }) : B3();
}
function rt3() {
  O3 || (O3 = true, tt3("cart::item.added", (e5) => {
    var a3;
    const t3 = Number(((a3 = e5 == null ? void 0 : e5.data) == null ? void 0 : a3.product_id) ?? 0);
    t3 && z4((n5) => {
      n5.carted.includes(t3) || (n5.carted = [...n5.carted.slice(-40), t3]);
    });
  }));
}
function lt3(e5) {
  const t3 = ct3[e5];
  if (!t3 || T4.has(t3)) return t3;
  T4.add(t3);
  const a3 = document.createElement("link");
  return a3.rel = "stylesheet", a3.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(t3)}:wght@400;500;700;800&display=swap`, document.head.appendChild(a3), t3;
}
function ft3(e5) {
  try {
    L4 ?? (L4 = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const t3 = Object.fromEntries(L4.formatToParts(e5).map((a3) => [a3.type, a3.value]));
    return { y: parseInt(t3.year), m: parseInt(t3.month), d: parseInt(t3.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
function ht3(e5, t3, a3, n5) {
  const r6 = [];
  for (let i5 = 0; i5 <= n5; i5++) {
    const l3 = m3(a3, i5), s4 = ft3(l3);
    s4.m === e5 && s4.d === t3 && (r6.push(l3), i5 += 300);
  }
  return r6;
}
function gt3(e5) {
  const t3 = h5(e5, 11, 30);
  for (; t3.getDay() !== 5; ) t3.setDate(t3.getDate() - 1);
  return t3;
}
function ut3(e5, t3, a3 = 27, n5 = "before") {
  const r6 = h5(e5, t3, Math.min(a3, new Date(e5, t3, 0).getDate()));
  if (n5 !== "none") for (; r6.getDay() === 5 || r6.getDay() === 6; ) r6.setDate(r6.getDate() + (n5 === "before" ? -1 : 1));
  return r6;
}
function mt3(e5, t3 = {}) {
  const a3 = m3(e5, -40), n5 = 440, r6 = [], i5 = (o6, c5, p4, w5) => ht3(c5, p4, a3, n5).forEach((b5) => r6.push({ id: o6, start: b5, end: m3(b5, w5) }));
  i5("ramadan", 9, 1, 29), i5("eid_fitr", 10, 1, 3), i5("hajj", 12, 1, 7), i5("arafah", 12, 9, 0), i5("eid_adha", 12, 10, 3), i5("hijri_new_year", 1, 1, 0);
  for (const o6 of [e5.getFullYear() - 1, e5.getFullYear(), e5.getFullYear() + 1]) {
    r6.push({ id: "founding", start: h5(o6, 2, 22), end: h5(o6, 2, 22) }), r6.push({ id: "national", start: h5(o6, 9, 23), end: h5(o6, 9, 23) }), r6.push({ id: "mothers", start: h5(o6, 3, 21), end: h5(o6, 3, 21) });
    const c5 = gt3(o6);
    r6.push({ id: "white_friday", start: m3(c5, -(t3.whiteFridayDays ?? 7)), end: m3(c5, 3) }), r6.push({ id: "summer", start: h5(o6, 6, 15), end: h5(o6, 8, 31) }), r6.push({ id: "winter", start: h5(o6, 12, 1), end: h5(o6 + 1, 2, 28) });
    for (let p4 = 1; p4 <= 12; p4++) {
      const w5 = ut3(o6, p4, t3.payDay ?? 27, t3.payShift ?? "before");
      r6.push({ id: "payday", start: w5, end: m3(w5, 3) });
      const b5 = h5(o6, p4, 10);
      r6.push({ id: "citizen", start: b5, end: m3(b5, 1) });
    }
  }
  if (t3.school) {
    const o6 = /* @__PURE__ */ new Date(t3.school + "T00:00:00");
    isNaN(+o6) || r6.push({ id: "back_to_school", start: m3(o6, -14), end: o6 });
  }
  for (const o6 of r6.filter((c5) => c5.id === "ramadan")) {
    const c5 = r6.find((p4) => p4.id === "eid_fitr" && +p4.start > +o6.start && +p4.start - +o6.start < 32 * A4);
    c5 && (o6.end = m3(c5.start, -1));
  }
  const l3 = +a3, s4 = +a3 + n5 * A4;
  return r6.filter((o6) => +o6.end >= l3 && +o6.start <= s4).sort((o6, c5) => +o6.start - +c5.start);
}
function Y3(e5, t3, a3 = {}) {
  const n5 = mt3(e5, a3).filter((s4) => !t3 || t3.includes(s4.id)), r6 = +e5, i5 = n5.filter((s4) => r6 >= +s4.start && r6 <= P4(s4.end)).sort((s4, o6) => C3[o6.id].pri - C3[s4.id].pri), l3 = n5.filter((s4) => +s4.start > r6);
  return {
    active: i5,
    next: l3,
    phase: (s4) => r6 < +s4.start ? "soon" : P4(s4.end) - r6 < 2 * A4 && +s4.end > +s4.start ? "last" : "on",
    dayOf: (s4) => Math.floor((r6 - +s4.start) / A4) + 1
  };
}
function $t3(e5) {
  const t3 = wt3(e5), a3 = xt3(e5), n5 = vt3(e5), r6 = Y3(t3, a3, n5), i5 = g4(e5.override, "auto");
  if (i5 === "none") return { w: null, phase: "on", day: 0, left: 0, at: t3 };
  if (i5 !== "auto") {
    const o6 = Y3(t3, [i5], n5), c5 = o6.active[0] ?? o6.next[0] ?? null;
    return { w: c5, phase: c5 ? o6.phase(c5) : "on", day: c5 ? o6.dayOf(c5) : 0, left: c5 ? Math.ceil((+c5.start - +t3) / 864e5) : 0, at: t3 };
  }
  if (r6.active[0]) return { w: r6.active[0], phase: r6.phase(r6.active[0]), day: r6.dayOf(r6.active[0]), left: 0, at: t3 };
  const l3 = f4(e5.lead_days, 14), s4 = r6.next.find((o6) => (+o6.start - +t3) / 864e5 <= (C3[o6.id].pri >= 8 ? l3 : Math.min(l3, 5)));
  return s4 ? { w: s4, phase: "soon", day: 0, left: Math.ceil((+s4.start - +t3) / 864e5), at: t3 } : { w: null, phase: "on", day: 0, left: 0, at: t3 };
}
function E6(e5, t3 = "deco") {
  const a3 = "var(--o2, #d9b25f)";
  return e5 === "ramadan" || e5 === "hajj" || e5 === "arafah" || e5 === "hijri_new_year" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true">${[40, 110, 300, 360].map((n5, r6) => w`<g transform=${`translate(${n5} 0)`} class="sw" style=${`animation-delay:${r6 * 0.4}s`}><line x1="0" y1="0" x2="0" y2=${50 + r6 * 18} stroke=${a3} stroke-width="1.5"/><g transform=${`translate(0 ${50 + r6 * 18})`}><path d="M-12 0h24l-4 8h-16z" fill=${a3}/><rect x="-10" y="8" width="20" height="30" rx="6" fill=${a3} opacity=".9"/><rect x="-6" y="12" width="12" height="22" rx="4" fill="#fff6d8" opacity=".85"/><path d="M-10 38h20l-4 6h-12z" fill=${a3}/></g></g>`)}
      <path d="M215 40a38 38 0 1 0 30 62 32 32 0 1 1-30-62z" fill=${a3}/><circle cx="262" cy="52" r="3" fill=${a3}/><circle cx="180" cy="30" r="2" fill=${a3}/></svg>` : e5 === "eid_fitr" || e5 === "eid_adha" || e5 === "mothers" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 14 }, (n5, r6) => w`<path class="tw" style=${`animation-delay:${r6 % 5 * 0.3}s`} transform=${`translate(${r6 * 53 % 390} ${r6 * 37 % 200}) scale(${0.5 + r6 % 3 * 0.3})`} d="M0-10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z" fill=${a3}/>`)}
      ${[60, 330].map((n5, r6) => w`<g class="sw" style=${`animation-delay:${r6}s`}><line x1=${n5} y1="0" x2=${n5} y2="70" stroke=${a3}/><circle cx=${n5} cy="86" r="16" fill=${r6 ? "#f28fad" : a3}/></g>`)}</svg>` : e5 === "national" || e5 === "founding" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true"><path d="M0 0h400v14c-30 10-50 10-80 0s-50-10-80 0-50 10-80 0-50-10-80 0-50 10-80 0z" fill=${e5 === "national" ? "#0b6b43" : "#7a4a22"}/>
      ${Array.from({ length: 9 }, (n5, r6) => w`<path class="sw" style=${`animation-delay:${r6 * 0.2}s`} transform=${`translate(${20 + r6 * 45} 14)`} d="M0 0h26l-13 22z" fill=${r6 % 2 ? e5 === "national" ? "#fff" : "#c8a165" : e5 === "national" ? "#0b6b43" : "#4a2c17"}/>`)}</svg>` : e5 === "white_friday" || e5 === "payday" || e5 === "citizen" ? b2`<svg class=${t3} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 10 }, (n5, r6) => w`<g class="fall" style=${`animation-delay:${r6 * 0.5}s;transform-origin:${30 + r6 * 38}px 0`}><rect x=${20 + r6 * 38} y=${10 + r6 % 4 * 30} width="26" height="16" rx="4" fill=${r6 % 2 ? a3 : "currentColor"} opacity=".7" transform=${`rotate(${r6 % 5 * 12 - 24} ${30 + r6 * 38} ${18 + r6 % 4 * 30})`}/></g>`)}</svg>` : b2``;
}
var y4, X3, W3, H4, x3, v4, g4, f4, u4, Q3, I5, tt3, D3, R4, F2, O3, nt3, U, it3, ot3, st3, ct3, T4, dt3, pt3, G3, k3, C3, A4, h5, m3, L4, P4, bt3, yt3, xt3, vt3, wt3, _t3, kt2, At2, jt2, M4, j3;
var init_mawaqeet_decor = __esm({
  "dist/mawaqeet-decor.js"() {
    "use strict";
    init_lit();
    init_decorators();
    y4 = () => window.salla ?? window.Salla;
    X3 = async () => {
      var e5, t3;
      try {
        await ((t3 = (e5 = y4()) == null ? void 0 : e5.onReady) == null ? void 0 : t3.call(e5));
      } catch {
      }
    };
    W3 = () => {
      var e5, t3, a3, n5, r6;
      try {
        const i5 = ((t3 = (e5 = y4()) == null ? void 0 : e5.lang) == null ? void 0 : t3.locale) ?? ((r6 = (n5 = (a3 = y4()) == null ? void 0 : a3.config) == null ? void 0 : n5.get) == null ? void 0 : r6.call(n5, "user.language_code"));
        if (typeof i5 == "string" && i5) return i5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    H4 = () => W3() === "en";
    x3 = (e5, t3) => H4() ? t3 : e5;
    v4 = (e5, t3 = "") => {
      if (e5 == null) return t3;
      if (typeof e5 == "string") {
        const a3 = e5.trim();
        if (a3.startsWith("{") && a3.endsWith("}"))
          try {
            return v4(JSON.parse(a3), t3);
          } catch {
          }
        return a3 || t3;
      }
      if (typeof e5 == "number" || typeof e5 == "boolean") return String(e5);
      if (typeof e5 == "object") {
        const a3 = e5, n5 = a3[W3()] ?? a3.ar ?? a3.en ?? Object.values(a3).find((r6) => typeof r6 == "string" && r6);
        return typeof n5 == "string" && n5.trim() ? n5 : t3;
      }
      return t3;
    };
    g4 = (e5, t3 = "") => {
      const a3 = Array.isArray(e5) ? e5[0] : e5, n5 = typeof a3 == "object" && a3 ? a3.value : a3;
      return n5 == null || n5 === "" ? t3 : String(n5);
    };
    f4 = (e5, t3 = 0) => {
      const a3 = Number(e5);
      return e5 === "" || e5 == null || !Number.isFinite(a3) ? t3 : a3;
    };
    u4 = (e5, t3 = false) => e5 == null || e5 === "" ? t3 : e5 === true || e5 === "true" || e5 === 1 || e5 === "1";
    Q3 = (e5) => Array.isArray(e5) ? e5 : [];
    I5 = (e5) => {
      var t3, a3;
      try {
        const n5 = (a3 = (t3 = y4()) == null ? void 0 : t3.money) == null ? void 0 : a3.call(t3, e5);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(e5 * 100) / 100} ${x3("\u0631.\u0633", "SAR")}`;
    };
    tt3 = (e5, t3) => {
      var a3, n5, r6;
      try {
        (r6 = (n5 = (a3 = y4()) == null ? void 0 : a3.event) == null ? void 0 : n5.on) == null || r6.call(n5, e5, t3);
      } catch {
      }
    };
    D3 = "tw_smart_mem_v1";
    R4 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    F2 = (e5, t3 = 1) => z4((a3) => {
      a3.seen[e5.id] = (a3.seen[e5.id] || 0) + t3, a3.prices = [...a3.prices.slice(-29), e5.price], e5.category && (a3.tags[e5.category] = (a3.tags[e5.category] || 0) + t3);
    });
    O3 = false;
    nt3 = () => {
      const e5 = innerWidth, t3 = navigator.userAgent;
      return /iPad|Tablet/i.test(t3) || e5 >= 700 && e5 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(t3) || e5 < 700 ? "mobile" : "desktop";
    };
    U = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    it3 = () => {
      const e5 = new URLSearchParams(location.search).get("tw_date"), t3 = e5 ? /* @__PURE__ */ new Date(e5 + "T12:00:00") : null;
      return t3 && !isNaN(+t3) ? t3 : /* @__PURE__ */ new Date();
    };
    ot3 = Object.defineProperty;
    st3 = (e5, t3, a3, n5) => {
      for (var r6 = void 0, i5 = e5.length - 1, l3; i5 >= 0; i5--)
        (l3 = e5[i5]) && (r6 = l3(t3, a3, r6) || r6);
      return r6 && ot3(t3, a3, r6), r6;
    };
    ct3 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    T4 = /* @__PURE__ */ new Set();
    dt3 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    pt3 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    G3 = class G4 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), rt3(), at3();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((t3) => {
          var a3;
          t3.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (a3 = this.io) == null || a3.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this.io) == null || t3.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const t3 = this.c, a3 = Date.now(), n5 = Date.parse(String(t3.s_from || "")), r6 = Date.parse(String(t3.s_to || ""));
        if (Number.isFinite(n5) && a3 < n5 || Number.isFinite(r6) && a3 > r6) return true;
        const i5 = nt3();
        return !!(u4(t3.s_hide_mobile) && i5 === "mobile" || u4(t3.s_hide_desktop) && i5 !== "mobile");
      }
      vars(t3 = "") {
        const a3 = this.c, n5 = [], r6 = (l3, s4) => {
          s4 !== "" && s4 != null && n5.push(`${l3}:${s4}`);
        };
        r6("--a", a3.s_accent || ""), r6("--a2", a3.s_accent2 || ""), r6("--bgc", a3.s_bg || ""), r6("--fgc", a3.s_text || ""), r6("--cardc", a3.s_card || ""), r6("--r", `${f4(a3.s_radius, 22)}px`), r6("--gap", `${f4(a3.s_gap, 18)}px`), r6("--ts", `${f4(a3.s_title_size, 38)}px`), r6("--fs", `${f4(a3.s_text_size, 16)}px`), r6("--pt", `${f4(a3.s_pad_top, 56)}px`), r6("--pb", `${f4(a3.s_pad_bottom, 56)}px`), r6("--maxw", dt3[g4(a3.s_width, "normal")] ?? "1240px"), r6("--sh", pt3[Math.max(0, Math.min(5, f4(a3.s_shadow, 2)))]), r6("--ms", `${f4(a3.s_anim_ms, 700)}ms`), r6("--ov", String(f4(a3.s_overlay, 45) / 100)), a3.s_bg_image && r6("--bgimg", `url("${String(a3.s_bg_image)}")`);
        const i5 = lt3(g4(a3.s_font, "inherit"));
        return i5 && r6("font-family", `'${i5}', inherit`), n5.join(";") + (t3 ? ";" + t3 : "");
      }
      cls() {
        const t3 = this.c;
        return [
          "sec",
          `th-${g4(t3.s_theme, "auto")}`,
          `al-${g4(t3.s_align, "start")}`,
          `an-${g4(t3.s_anim, "rise")}`,
          `pt-${g4(t3.s_pattern, "none")}`,
          `bs-${g4(t3.s_btn_style, "pill")}`,
          u4(t3.s_border) ? "bordered" : "",
          u4(t3.s_stagger, true) ? "stagger" : "",
          t3.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(t3, a3 = {}, n5 = "", r6 = "", i5 = true) {
        if (this.hiddenNow()) return A;
        const l3 = this.c, s4 = v4(l3.eyebrow, a3.eyebrow ?? ""), o6 = v4(l3.title, a3.title ?? ""), c5 = v4(l3.subtitle, a3.sub ?? ""), p4 = i5 && u4(l3.s_show_head, true) && (s4 || o6 || c5);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(r6)} id=${String(l3.s_anchor || "") || A}>
      <div class="wrap">${p4 ? b2`<header class="head">${s4 ? b2`<span class="eyebrow">${s4}</span>` : ""}${o6 ? b2`<h2 class="title">${o6}</h2>` : ""}${c5 ? b2`<p class="sub">${c5}</p>` : ""}</header>` : ""}
      ${t3}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(t3) {
        const a3 = t3.filter(Boolean);
        return !a3.length || !U() || !u4(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${x3("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${a3.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(t3, a3 = {}) {
        var n5;
        return b2`<article class="pc ${t3.available ? "" : "oos"}">
      <a class="ph" href=${t3.url} @click=${() => F2(t3)}><img src=${t3.image} alt=${t3.name} loading="lazy" />${(n5 = a3.badges) != null && n5.length ? b2`<span class="badges">${a3.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${t3.url} @click=${() => F2(t3)}>${t3.name}</a>
        <div class="pr"><b>${I5(t3.price)}</b>${t3.regular > t3.price ? b2`<s>${I5(t3.regular)}</s>` : ""}</div>
        ${a3.rating !== false && t3.rating > 0 ? b2`<div class="rt">★ ${t3.rating.toFixed(1)}${t3.ratingCount ? b2` <small>(${t3.ratingCount})</small>` : ""}</div>` : ""}
        ${a3.extra ?? ""}
        ${a3.quick !== false ? b2`<button class="btn sm" ?disabled=${!t3.available} @click=${() => this.add(t3)}>${t3.available ? x3("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : x3("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(t3, a3 = 1, n5) {
        F2(t3, 3), await V3(t3.id, a3, n5) ? Z4(x3("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = t3.url;
      }
    };
    G3.base = i`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
    k3 = G3;
    st3([
      n4({ type: Object })
    ], k3.prototype, "config");
    C3 = {
      ramadan: { ar: "\u0631\u0645\u0636\u0627\u0646", en: "Ramadan", emoji: "\u{1F319}", pal: ["#0f2a3f", "#d9b25f", "#f7efd9"], pri: 9 },
      eid_fitr: { ar: "\u0639\u064A\u062F \u0627\u0644\u0641\u0637\u0631", en: "Eid al-Fitr", emoji: "\u{1F389}", pal: ["#3b1f5e", "#f2c14e", "#fff6e0"], pri: 10 },
      hajj: { ar: "\u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", en: "First ten of Dhul-Hijjah", emoji: "\u{1F54B}", pal: ["#1d2b24", "#c9a45c", "#f4efe2"], pri: 6 },
      arafah: { ar: "\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", en: "Day of Arafah", emoji: "\u{1F932}", pal: ["#1d2b24", "#e7c873", "#f6f1e2"], pri: 8 },
      eid_adha: { ar: "\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649", en: "Eid al-Adha", emoji: "\u{1F411}", pal: ["#14361f", "#e2b857", "#fbf5e4"], pri: 10 },
      hijri_new_year: { ar: "\u0631\u0623\u0633 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0647\u062C\u0631\u064A\u0629", en: "Hijri New Year", emoji: "\u2728", pal: ["#1c1c2e", "#b9a26a", "#f3eee0"], pri: 4 },
      founding: { ar: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", en: "Founding Day", emoji: "\u{1F3F0}", pal: ["#4a2c17", "#c8a165", "#f7ecd9"], pri: 8 },
      national: { ar: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", en: "Saudi National Day", emoji: "\u{1F1F8}\u{1F1E6}", pal: ["#0b5d3b", "#ffffff", "#e8f5ee"], pri: 9 },
      white_friday: { ar: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", en: "White Friday", emoji: "\u{1F3F7}\uFE0F", pal: ["#0d0d0f", "#ffffff", "#f2f2f2"], pri: 9 },
      payday: { ar: "\u0645\u0648\u0633\u0645 \u0627\u0644\u0631\u0648\u0627\u062A\u0628", en: "Payday", emoji: "\u{1F4B8}", pal: ["#103b2c", "#3ddc97", "#ecfff6"], pri: 5 },
      citizen: { ar: "\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", en: "Citizen Account day", emoji: "\u{1F3E6}", pal: ["#0e3a4a", "#58c4dd", "#eaf8fc"], pri: 3 },
      mothers: { ar: "\u064A\u0648\u0645 \u0627\u0644\u0623\u0645", en: "Mother's Day", emoji: "\u{1F490}", pal: ["#5a1f3a", "#f2a7c3", "#fff0f6"], pri: 6 },
      back_to_school: { ar: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", en: "Back to school", emoji: "\u{1F392}", pal: ["#1e2f6b", "#ffcc33", "#eef2ff"], pri: 6 },
      summer: { ar: "\u0627\u0644\u0635\u064A\u0641", en: "Summer", emoji: "\u2600\uFE0F", pal: ["#0f4c5c", "#ffb703", "#fff8e6"], pri: 1 },
      winter: { ar: "\u0627\u0644\u0634\u062A\u0627\u0621", en: "Winter", emoji: "\u2744\uFE0F", pal: ["#1b263b", "#9ad1ff", "#eef6ff"], pri: 1 }
    };
    A4 = 864e5;
    h5 = (e5, t3, a3) => new Date(e5, t3 - 1, a3, 0, 0, 0);
    m3 = (e5, t3) => new Date(e5.getFullYear(), e5.getMonth(), e5.getDate() + t3);
    L4 = null;
    P4 = (e5) => +e5 + A4 - 1;
    bt3 = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"];
    yt3 = ["citizen", "summer", "winter", "hijri_new_year"];
    xt3 = (e5) => bt3.filter((t3) => u4(e5[`o_${t3}`], !yt3.includes(t3)));
    vt3 = (e5) => ({ payDay: f4(e5.pay_day, 27), payShift: g4(e5.pay_shift, "before"), school: String(e5.school_date || "").slice(0, 10), whiteFridayDays: f4(e5.wf_days, 7) });
    wt3 = (e5) => {
      const t3 = String(e5.preview_date || "").slice(0, 10);
      if (t3 && (U() || window.__twDemo)) {
        const a3 = /* @__PURE__ */ new Date(t3 + "T12:00:00");
        if (!isNaN(+a3)) return a3;
      }
      return it3();
    };
    _t3 = {
      ramadan: { soon: ["\u0631\u0645\u0636\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0628\u0648\u0627\u0628", "\u062C\u0647\u0651\u0632 \u0633\u0641\u0631\u062A\u0643 \u0648\u0647\u062F\u0627\u064A\u0627\u0643 \u0642\u0628\u0644 \u0627\u0644\u0632\u062D\u0645\u0629", "Ramadan is near", "Get ready before the rush"], on: ["\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", "\u0643\u0644 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0641\u0636\u064A\u0644 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F", "Ramadan Kareem", "Everything for the holy month"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0631\u0645\u0636\u0627\u0646", "Shop Ramadan"] },
      eid_fitr: { soon: ["\u0627\u0644\u0639\u064A\u062F \u0642\u0631\u0651\u0628", "\u0643\u0645\u0651\u0644 \u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0639\u064A\u062F \u0642\u0628\u0644 \u0644\u0627 \u064A\u062E\u0644\u0635 \u0627\u0644\u0648\u0642\u062A", "Eid is coming", "Finish your Eid shopping in time"], on: ["\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", "\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0646\u062A\u0645 \u0628\u062E\u064A\u0631\u060C \u0641\u0631\u062D\u0629 \u0627\u0644\u0639\u064A\u062F \u062A\u0643\u0645\u0644 \u0645\u0639\u0646\u0627", "Eid Mubarak", "Celebrate with us"], cta: ["\u0647\u062F\u0627\u064A\u0627 \u0627\u0644\u0639\u064A\u062F", "Eid gifts"] },
      hajj: { soon: ["\u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", "\u0623\u064A\u0627\u0645 \u0645\u0628\u0627\u0631\u0643\u0629 \u0642\u0627\u062F\u0645\u0629", "Dhul-Hijjah", "Blessed days ahead"], on: ["\u0623\u064A\u0627\u0645 \u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", "\u062E\u064A\u0631 \u0627\u0644\u0623\u064A\u0627\u0645\u060C \u0648\u0623\u062C\u0645\u0644 \u0627\u0644\u0647\u062F\u0627\u064A\u0627", "The best ten days", "The best days, the finest gifts"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0622\u0646", "Shop now"] },
      arafah: { soon: ["\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", "\u064A\u0648\u0645 \u0627\u0644\u062F\u0639\u0627\u0621 \u0642\u0631\u064A\u0628", "Day of Arafah", "The day of prayer is near"], on: ["\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", "\u062A\u0642\u0628\u0651\u0644 \u0627\u0644\u0644\u0647 \u0645\u0646\u0627 \u0648\u0645\u0646\u0643\u0645", "Day of Arafah", "May Allah accept from us and you"], cta: ["\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0639\u064A\u062F", "Eid essentials"] },
      eid_adha: { soon: ["\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649 \u0642\u0631\u0651\u0628", "\u062C\u0647\u0651\u0632 \u0625\u0637\u0644\u0627\u0644\u0629 \u0627\u0644\u0639\u064A\u062F \u0648\u0647\u062F\u0627\u064A\u0627\u0647", "Eid al-Adha is near", "Prepare your Eid look and gifts"], on: ["\u0639\u064A\u062F \u0623\u0636\u062D\u0649 \u0645\u0628\u0627\u0631\u0643", "\u0623\u064A\u0627\u0645 \u0641\u0631\u062D \u0648\u0639\u0637\u0627\u0621\u060C \u0645\u0639\u0643\u0645 \u0628\u0643\u0644 \u062C\u062F\u064A\u062F", "Eid al-Adha Mubarak", "Days of joy and giving"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0639\u064A\u062F", "Shop Eid"] },
      hijri_new_year: { soon: ["\u0639\u0627\u0645 \u0647\u062C\u0631\u064A \u062C\u062F\u064A\u062F", "\u0628\u062F\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0642\u0631\u064A\u0628\u0629", "New Hijri year", "A new beginning"], on: ["\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0646\u062A\u0645 \u0628\u062E\u064A\u0631", "\u0639\u0627\u0645 \u0647\u062C\u0631\u064A \u0633\u0639\u064A\u062F", "Happy Hijri New Year", "Wishing you a blessed year"], cta: ["\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u062C\u062F\u064A\u062F", "Discover"] },
      founding: { soon: ["\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", "\u0645\u0646 1727\u2026 \u0648\u0627\u0644\u062D\u0643\u0627\u064A\u0629 \u0645\u0633\u062A\u0645\u0631\u0629", "Founding Day", "Since 1727, the story continues"], on: ["\u064A\u0648\u0645 \u0628\u062F\u064A\u0646\u0627", "\u0646\u062D\u062A\u0641\u064A \u0628\u0625\u0631\u062B\u0646\u0627 \u0628\u062A\u0634\u0643\u064A\u0644\u0629 \u062A\u0644\u064A\u0642", "The day we began", "Celebrating our heritage"], cta: ["\u062A\u0634\u0643\u064A\u0644\u0629 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", "Founding collection"] },
      national: { soon: ["\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A \u0642\u0631\u0651\u0628 \u{1F1F8}\u{1F1E6}", "\u062C\u0647\u0651\u0632 \u0623\u062E\u0636\u0631\u0643", "National Day is near \u{1F1F8}\u{1F1E6}", "Get your green ready"], on: ["\u0647\u0645\u0629 \u062D\u062A\u0649 \u0627\u0644\u0642\u0645\u0629 \u{1F1F8}\u{1F1E6}", "\u0646\u062D\u062A\u0641\u0644 \u0628\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A \u0628\u0639\u0631\u0648\u0636 \u062A\u0644\u064A\u0642", "Saudi National Day \u{1F1F8}\u{1F1E6}", "Celebrating with offers worthy of the day"], cta: ["\u0639\u0631\u0648\u0636 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", "National Day offers"] },
      white_friday: { soon: ["\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621 \u0642\u0631\u0651\u0628\u062A", "\u062C\u0647\u0651\u0632 \u0642\u0627\u0626\u0645\u062A\u0643 \u0645\u0646 \u0627\u0644\u062D\u064A\u0646", "White Friday is coming", "Prepare your list now"], on: ["\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", "\u0623\u0642\u0648\u0649 \u0639\u0631\u0648\u0636 \u0627\u0644\u0633\u0646\u0629 \u0628\u062F\u0623\u062A", "White Friday", "The biggest deals of the year are on"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0639\u0631\u0648\u0636", "Shop deals"] },
      payday: { soon: ["\u0627\u0644\u0631\u0627\u062A\u0628 \u0642\u0631\u0651\u0628", "\u062C\u0647\u0651\u0632 \u0633\u0644\u062A\u0643 \u0645\u0646 \u0627\u0644\u062D\u064A\u0646", "Payday is near", "Fill your cart now"], on: ["\u0646\u0632\u0644 \u0627\u0644\u0631\u0627\u062A\u0628 \u{1F389}", "\u0648\u0642\u062A \u062A\u062F\u0644\u0651\u0644 \u0646\u0641\u0633\u0643", "Payday \u{1F389}", "Time to treat yourself"], cta: ["\u062F\u0644\u0651\u0644 \u0646\u0641\u0633\u0643", "Treat yourself"] },
      citizen: { soon: ["\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646 \u0642\u0631\u064A\u0628", "\u062E\u0637\u0637 \u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A\u0643", "Citizen Account soon", "Plan your shopping"], on: ["\u0646\u0632\u0644 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0630\u0643\u064A\u0629 \u0628\u0623\u0633\u0639\u0627\u0631 \u062A\u0646\u0627\u0633\u0628\u0643", "Citizen Account paid", "Smart picks at good prices"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0622\u0646", "Shop now"] },
      mothers: { soon: ["\u064A\u0648\u0645 \u0627\u0644\u0623\u0645 \u0642\u0631\u064A\u0628", "\u0647\u062F\u064A\u0629 \u062A\u0644\u064A\u0642 \u0628\u0623\u063A\u0644\u0649 \u0627\u0644\u0646\u0627\u0633", "Mother's Day is near", "A gift worthy of her"], on: ["\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0645\u0647\u0627\u062A\u0646\u0627 \u0628\u062E\u064A\u0631", "\u0644\u0623\u0646\u0647\u0627 \u062A\u0633\u062A\u0627\u0647\u0644 \u0627\u0644\u0623\u062C\u0645\u0644", "Happy Mother's Day", "Because she deserves the best"], cta: ["\u0647\u062F\u0627\u064A\u0627 \u0627\u0644\u0623\u0645", "Gifts for mom"] },
      back_to_school: { soon: ["\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", "\u062C\u0647\u0651\u0632 \u0643\u0644 \u0634\u064A \u0642\u0628\u0644 \u0623\u0648\u0644 \u064A\u0648\u0645", "Back to school", "Ready before day one"], on: ["\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", "\u0628\u062F\u0627\u064A\u0629 \u0633\u0646\u0629 \u0628\u0643\u0644 \u0645\u0627 \u064A\u062D\u062A\u0627\u062C\u0648\u0646\u0647", "Back to school", "Everything they need"], cta: ["\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u062F\u0627\u0631\u0633", "School essentials"] },
      summer: { soon: ["\u0627\u0644\u0635\u064A\u0641 \u062C\u0627\u064A", "\u062C\u0647\u0651\u0632 \u0646\u0641\u0633\u0643 \u0644\u0644\u0625\u062C\u0627\u0632\u0629", "Summer is coming", "Get vacation-ready"], on: ["\u0635\u064A\u0641\u0643\u0645 \u0623\u062D\u0644\u0649", "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0635\u064A\u0641 \u0648\u0627\u0644\u0633\u0641\u0631", "Summer vibes", "Summer and travel picks"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0635\u064A\u0641", "Shop summer"] },
      winter: { soon: ["\u0627\u0644\u0634\u062A\u0627\u0621 \u0642\u0631\u0651\u0628", "\u062F\u0641\u0651 \u0646\u0641\u0633\u0643 \u0628\u0623\u062C\u0645\u0644 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A", "Winter is near", "Stay warm in style"], on: ["\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0634\u062A\u0627\u0621", "\u062F\u0641\u0621 \u0648\u0623\u0646\u0627\u0642\u0629", "Winter mood", "Warm and elegant"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0634\u062A\u0627\u0621", "Shop winter"] }
    };
    kt2 = i`
  .deco { position: absolute; inset: 0 0 auto 0; width: 100%; height: auto; max-height: 100%; pointer-events: none; z-index: 0; color: var(--o1); }
  .sw { animation: sw 4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: top center; } @keyframes sw { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .tw { animation: tw 2.4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; } @keyframes tw { to { opacity: .25; } }
  .fall { animation: fl 6s linear infinite; } @keyframes fl { from { transform: translateY(-30px); opacity: 0; } 15% { opacity: 1; } to { transform: translateY(220px); opacity: 0; } }
`;
    At2 = Object.defineProperty;
    jt2 = (e5, t3, a3, n5) => {
      for (var r6 = void 0, i5 = e5.length - 1, l3; i5 >= 0; i5--)
        (l3 = e5[i5]) && (r6 = l3(t3, a3, r6) || r6);
      return r6 && At2(t3, a3, r6), r6;
    };
    M4 = class M5 extends k3 {
      constructor() {
        super(...arguments), this.gone = false;
      }
      connectedCallback() {
        super.connectedCallback();
        const t3 = f4(this.c.overlay_seconds, 8);
        g4(this.c.mode, "strip") === "overlay" && t3 && setTimeout(() => this.gone = true, t3 * 1e3);
      }
      render() {
        const t3 = this.c, a3 = H4(), n5 = $t3(t3);
        if (!n5.w || n5.phase === "soon" && !u4(t3.show_soon, false) || this.gone) return this.hints([x3("\u0627\u0644\u0632\u064A\u0646\u0629 \u062A\u0638\u0647\u0631 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0641\u064A \u0623\u064A\u0627\u0645 \u0627\u0644\u0645\u0648\u0627\u0633\u0645 \u0627\u0644\u0645\u0641\u0639\u0644\u0629 \u0641\u0642\u0637.", "Decorations appear by themselves on enabled occasion days.")]) || A;
        const r6 = n5.w.id, i5 = C3[r6], l3 = g4(t3.mode, "strip"), s4 = `decor-${r6}-${n5.w.start.getFullYear()}`;
        if (u4(t3.once, false) && B3().dismissed[s4]) return A;
        const o6 = () => {
          this.gone = true, z4((S5) => {
            S5.dismissed[s4] = Date.now();
          });
        }, c5 = `--o1:${t3.color1 || i5.pal[0]};--o2:${t3.color2 || i5.pal[1]};--o3:${t3.color3 || i5.pal[2]};--sh2:${f4(t3.height, 180)}px`, p4 = Q3(t3.greetings).find((S5) => g4(S5.occasion) === r6), w5 = p4 && v4(p4.text) || _t3[r6].on[a3 ? 2 : 0], b5 = p4 && v4(p4.sub) || (n5.phase === "soon" ? x3(`\u0628\u0627\u0642\u064A ${n5.left} \u0623\u064A\u0627\u0645`, `${n5.left} days to go`) : v4(t3.signature, ""));
        return this.hiddenNow() ? A : l3 === "overlay" ? b2`<div class="overlay" style=${c5}>${E6(r6)}</div>` : l3 === "corner" ? b2`<div class="corner" style=${c5}>${E6(r6)}<span style="position:relative">${i5.emoji}</span><button class="x" @click=${o6} aria-label="close">×</button></div>` : this.shell(b2`<div class="strip" style=${c5}>${E6(r6)}<div class="in"><b>${i5.emoji} ${w5}</b>${b5 ? b2`<span>${b5}</span>` : ""}</div>${u4(t3.closable, false) ? b2`<button class="x" @click=${o6}>×</button>` : ""}</div>`, { title: "" });
      }
    };
    M4.styles = [k3.base, kt2, i`
    .strip { position: relative; overflow: hidden; min-height: var(--sh2, 150px); border-radius: var(--r); display: grid; place-items: center; text-align: center; padding: 26px; background: linear-gradient(135deg, var(--o1), color-mix(in srgb, var(--o1) 60%, #000)); color: var(--o3); box-shadow: var(--sh); }
    .strip .deco { opacity: .55; } .strip .in { position: relative; z-index: 1; display: grid; gap: 6px; text-shadow: 0 2px 12px #0006; } .strip b { font-size: clamp(22px, 3.4vw, 38px); } .strip span { opacity: .85; }
    .overlay { position: fixed; inset: 0; z-index: 80; pointer-events: none; color: var(--o1); } .overlay .deco { height: 40vh; max-height: none; }
    .corner { position: fixed; z-index: 70; bottom: 16px; inset-inline-start: 16px; width: 120px; height: 120px; border-radius: 50%; overflow: hidden; background: var(--o1); box-shadow: 0 16px 40px -14px #000a; pointer-events: auto; display: grid; place-items: center; font-size: 46px; }
    .corner .deco { opacity: .7; } .x { position: absolute; top: 8px; inset-inline-end: 12px; background: none; border: 0; color: inherit; font-size: 22px; cursor: pointer; pointer-events: auto; z-index: 2; }
  `];
    j3 = M4;
    jt2([
      r5()
    ], j3.prototype, "gone");
    typeof j3 < "u" && j3.registerSallaComponent("salla-mawaqeet-decor");
  }
});

// dist/mawaqeet-hero.js
var mawaqeet_hero_exports = {};
__export(mawaqeet_hero_exports, {
  default: () => j4
});
function tt4(t3) {
  var s4, o6, l3, h7, f5, p4, A6, N6, F4;
  const a3 = k4(t3 == null ? void 0 : t3.sale_price), e5 = k4((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), n5 = a3 && a3 < e5 ? a3 : k4(t3 == null ? void 0 : t3.price) || e5, r6 = Math.max(k4(t3 == null ? void 0 : t3.regular_price), k4(t3 == null ? void 0 : t3.price), n5), i5 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((_4) => String((_4 == null ? void 0 : _4.url) ?? _4 ?? "")).filter(Boolean), c5 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((s4 = t3 == null ? void 0 : t3.image) == null ? void 0 : s4.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? i5[0] ?? ""),
    images: i5,
    price: n5,
    regular: r6,
    discount: r6 > n5 ? Math.round((1 - n5 / r6) * 100) : 0,
    rating: k4(((o6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : o6.stars) ?? ((l3 = t3 == null ? void 0 : t3.rating) == null ? void 0 : l3.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: k4((h7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : h7.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : k4(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: c5 == null || c5 === "" || !Number.isFinite(Number(c5)) ? null : Number(c5),
    endsAt: st4((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((f5 = t3 == null ? void 0 : t3.category) == null ? void 0 : f5.name) ?? ((A6 = (p4 = t3 == null ? void 0 : t3.categories) == null ? void 0 : p4[0]) == null ? void 0 : A6.name) ?? ""),
    brand: String(((N6 = t3 == null ? void 0 : t3.brand) == null ? void 0 : N6.name) ?? ""),
    promo: String(((F4 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : F4.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function lt4(t3) {
  var n5, r6, i5;
  const a3 = (n5 = v5()) == null ? void 0 : n5.product;
  if (!a3) return null;
  const e5 = a3.getDetails ? a3.getDetails.bind(a3) : (i5 = (r6 = a3.api) == null ? void 0 : r6.getDetails) == null ? void 0 : i5.bind(a3.api);
  if (!e5) return null;
  try {
    const c5 = await e5(t3, ["images", "sold_quantity", "category"]), s4 = tt4((c5 == null ? void 0 : c5.data) ?? c5);
    return s4.name ? s4 : null;
  } catch {
    return null;
  }
}
async function dt4(t3) {
  await T5();
  const a3 = "ids:" + t3.join(",");
  return D4.has(a3) || D4.set(a3, Promise.all(t3.map(lt4)).then((e5) => e5.filter((n5) => !!n5))), D4.get(a3);
}
async function Y4(t3, a3 = [], e5 = 12) {
  await T5();
  const n5 = `src:${t3}:${a3.join(",")}:${e5}`;
  return D4.has(n5) || D4.set(n5, (async () => {
    var c5, s4, o6, l3;
    const r6 = (c5 = v5()) == null ? void 0 : c5.product, i5 = r6 != null && r6.fetch ? r6.fetch.bind(r6) : (o6 = (s4 = r6 == null ? void 0 : r6.api) == null ? void 0 : s4.fetch) == null ? void 0 : o6.bind(r6.api);
    if (!i5) return [];
    try {
      const h7 = { source: t3, per_page: e5 };
      a3.length && (h7.source_value = a3);
      const f5 = await i5(h7);
      return (Array.isArray(f5 == null ? void 0 : f5.data) ? f5.data : Array.isArray(f5) ? f5 : ((l3 = f5 == null ? void 0 : f5.data) == null ? void 0 : l3.products) ?? []).map(tt4).filter((A6) => A6.name).slice(0, e5);
    } catch {
      return [];
    }
  })()), D4.get(n5);
}
async function ft4(t3, a3 = "best_selling", e5 = 12) {
  const n5 = ct4(t3);
  if (n5.length) return { items: (await dt4(n5)).slice(0, e5), auto: false };
  let r6 = await Y4(a3, [], e5);
  return !r6.length && a3 !== "latest" && (r6 = await Y4("latest", [], e5)), { items: r6, auto: true };
}
async function ht4(t3, a3 = 1, e5) {
  var n5, r6, i5;
  await T5();
  try {
    return await ((i5 = (r6 = (n5 = v5()) == null ? void 0 : n5.cart) == null ? void 0 : r6.addItem) == null ? void 0 : i5.call(r6, e5 ? { id: t3, quantity: a3, notes: e5 } : { id: t3, quantity: a3 })), true;
  } catch {
    return false;
  }
}
function ut4(t3, a3 = true) {
  var e5, n5, r6;
  try {
    (r6 = a3 ? (e5 = v5()) == null ? void 0 : e5.success : (n5 = v5()) == null ? void 0 : n5.error) == null || r6(t3);
  } catch {
  }
}
function at4() {
  try {
    return { ...W4(), ...JSON.parse(localStorage.getItem(E7) || "{}") };
  } catch {
    return W4();
  }
}
function gt4(t3) {
  try {
    localStorage.setItem(E7, JSON.stringify(t3));
  } catch {
  }
}
function L5(t3) {
  const a3 = at4();
  return t3(a3), gt4(a3), a3;
}
function mt4() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(E7), sessionStorage.setItem(E7, "1");
  } catch {
  }
  return t3 ? L5((a3) => {
    a3.visits += 1, a3.last = Date.now();
  }) : at4();
}
function bt4() {
  H5 || (H5 = true, pt4("cart::item.added", (t3) => {
    var e5;
    const a3 = Number(((e5 = t3 == null ? void 0 : t3.data) == null ? void 0 : e5.product_id) ?? 0);
    a3 && L5((n5) => {
      n5.carted.includes(a3) || (n5.carted = [...n5.carted.slice(-40), a3]);
    });
  }));
}
function _t4(t3) {
  const a3 = $t4[t3];
  if (!a3 || U2.has(a3)) return a3;
  U2.add(a3);
  const e5 = document.createElement("link");
  return e5.rel = "stylesheet", e5.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(a3)}:wght@400;500;700;800&display=swap`, document.head.appendChild(e5), a3;
}
function Dt2(t3) {
  try {
    J2 ?? (J2 = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }));
    const a3 = Object.fromEntries(J2.formatToParts(t3).map((e5) => [e5.type, e5.value]));
    return { y: parseInt(a3.year), m: parseInt(a3.month), d: parseInt(a3.day) };
  } catch {
    return { y: 0, m: 0, d: 0 };
  }
}
function zt(t3, a3, e5, n5) {
  const r6 = [];
  for (let i5 = 0; i5 <= n5; i5++) {
    const c5 = $4(e5, i5), s4 = Dt2(c5);
    s4.m === t3 && s4.d === a3 && (r6.push(c5), i5 += 300);
  }
  return r6;
}
function Ct(t3) {
  const a3 = y5(t3, 11, 30);
  for (; a3.getDay() !== 5; ) a3.setDate(a3.getDate() - 1);
  return a3;
}
function Nt(t3, a3, e5 = 27, n5 = "before") {
  const r6 = y5(t3, a3, Math.min(e5, new Date(t3, a3, 0).getDate()));
  if (n5 !== "none") for (; r6.getDay() === 5 || r6.getDay() === 6; ) r6.setDate(r6.getDate() + (n5 === "before" ? -1 : 1));
  return r6;
}
function Ft(t3, a3 = {}) {
  const e5 = $4(t3, -40), n5 = 440, r6 = [], i5 = (o6, l3, h7, f5) => zt(l3, h7, e5, n5).forEach((p4) => r6.push({ id: o6, start: p4, end: $4(p4, f5) }));
  i5("ramadan", 9, 1, 29), i5("eid_fitr", 10, 1, 3), i5("hajj", 12, 1, 7), i5("arafah", 12, 9, 0), i5("eid_adha", 12, 10, 3), i5("hijri_new_year", 1, 1, 0);
  for (const o6 of [t3.getFullYear() - 1, t3.getFullYear(), t3.getFullYear() + 1]) {
    r6.push({ id: "founding", start: y5(o6, 2, 22), end: y5(o6, 2, 22) }), r6.push({ id: "national", start: y5(o6, 9, 23), end: y5(o6, 9, 23) }), r6.push({ id: "mothers", start: y5(o6, 3, 21), end: y5(o6, 3, 21) });
    const l3 = Ct(o6);
    r6.push({ id: "white_friday", start: $4(l3, -(a3.whiteFridayDays ?? 7)), end: $4(l3, 3) }), r6.push({ id: "summer", start: y5(o6, 6, 15), end: y5(o6, 8, 31) }), r6.push({ id: "winter", start: y5(o6, 12, 1), end: y5(o6 + 1, 2, 28) });
    for (let h7 = 1; h7 <= 12; h7++) {
      const f5 = Nt(o6, h7, a3.payDay ?? 27, a3.payShift ?? "before");
      r6.push({ id: "payday", start: f5, end: $4(f5, 3) });
      const p4 = y5(o6, h7, 10);
      r6.push({ id: "citizen", start: p4, end: $4(p4, 1) });
    }
  }
  if (a3.school) {
    const o6 = /* @__PURE__ */ new Date(a3.school + "T00:00:00");
    isNaN(+o6) || r6.push({ id: "back_to_school", start: $4(o6, -14), end: o6 });
  }
  for (const o6 of r6.filter((l3) => l3.id === "ramadan")) {
    const l3 = r6.find((h7) => h7.id === "eid_fitr" && +h7.start > +o6.start && +h7.start - +o6.start < 32 * C4);
    l3 && (o6.end = $4(l3.start, -1));
  }
  const c5 = +e5, s4 = +e5 + n5 * C4;
  return r6.filter((o6) => +o6.end >= c5 && +o6.start <= s4).sort((o6, l3) => +o6.start - +l3.start);
}
function X4(t3, a3, e5 = {}) {
  const n5 = Ft(t3, e5).filter((s4) => !a3 || a3.includes(s4.id)), r6 = +t3, i5 = n5.filter((s4) => r6 >= +s4.start && r6 <= K2(s4.end)).sort((s4, o6) => M6[o6.id].pri - M6[s4.id].pri), c5 = n5.filter((s4) => +s4.start > r6);
  return {
    active: i5,
    next: c5,
    phase: (s4) => r6 < +s4.start ? "soon" : K2(s4.end) - r6 < 2 * C4 && +s4.end > +s4.start ? "last" : "on",
    dayOf: (s4) => Math.floor((r6 - +s4.start) / C4) + 1
  };
}
function Tt(t3) {
  const a3 = Rt(t3), e5 = Gt(t3), n5 = It(t3), r6 = X4(a3, e5, n5), i5 = m4(t3.override, "auto");
  if (i5 === "none") return { w: null, phase: "on", day: 0, left: 0, at: a3 };
  if (i5 !== "auto") {
    const o6 = X4(a3, [i5], n5), l3 = o6.active[0] ?? o6.next[0] ?? null;
    return { w: l3, phase: l3 ? o6.phase(l3) : "on", day: l3 ? o6.dayOf(l3) : 0, left: l3 ? Math.ceil((+l3.start - +a3) / 864e5) : 0, at: a3 };
  }
  if (r6.active[0]) return { w: r6.active[0], phase: r6.phase(r6.active[0]), day: r6.dayOf(r6.active[0]), left: 0, at: a3 };
  const c5 = g5(t3.lead_days, 14), s4 = r6.next.find((o6) => (+o6.start - +a3) / 864e5 <= (M6[o6.id].pri >= 8 ? c5 : Math.min(c5, 5)));
  return s4 ? { w: s4, phase: "soon", day: 0, left: Math.ceil((+s4.start - +a3) / 864e5), at: a3 } : { w: null, phase: "on", day: 0, left: 0, at: a3 };
}
function Lt(t3, a3 = "deco") {
  const e5 = "var(--o2, #d9b25f)";
  return t3 === "ramadan" || t3 === "hajj" || t3 === "arafah" || t3 === "hijri_new_year" ? b2`<svg class=${a3} viewBox="0 0 400 220" aria-hidden="true">${[40, 110, 300, 360].map((n5, r6) => w`<g transform=${`translate(${n5} 0)`} class="sw" style=${`animation-delay:${r6 * 0.4}s`}><line x1="0" y1="0" x2="0" y2=${50 + r6 * 18} stroke=${e5} stroke-width="1.5"/><g transform=${`translate(0 ${50 + r6 * 18})`}><path d="M-12 0h24l-4 8h-16z" fill=${e5}/><rect x="-10" y="8" width="20" height="30" rx="6" fill=${e5} opacity=".9"/><rect x="-6" y="12" width="12" height="22" rx="4" fill="#fff6d8" opacity=".85"/><path d="M-10 38h20l-4 6h-12z" fill=${e5}/></g></g>`)}
      <path d="M215 40a38 38 0 1 0 30 62 32 32 0 1 1-30-62z" fill=${e5}/><circle cx="262" cy="52" r="3" fill=${e5}/><circle cx="180" cy="30" r="2" fill=${e5}/></svg>` : t3 === "eid_fitr" || t3 === "eid_adha" || t3 === "mothers" ? b2`<svg class=${a3} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 14 }, (n5, r6) => w`<path class="tw" style=${`animation-delay:${r6 % 5 * 0.3}s`} transform=${`translate(${r6 * 53 % 390} ${r6 * 37 % 200}) scale(${0.5 + r6 % 3 * 0.3})`} d="M0-10l2.6 7.4L10 0l-7.4 2.6L0 10l-2.6-7.4L-10 0l7.4-2.6z" fill=${e5}/>`)}
      ${[60, 330].map((n5, r6) => w`<g class="sw" style=${`animation-delay:${r6}s`}><line x1=${n5} y1="0" x2=${n5} y2="70" stroke=${e5}/><circle cx=${n5} cy="86" r="16" fill=${r6 ? "#f28fad" : e5}/></g>`)}</svg>` : t3 === "national" || t3 === "founding" ? b2`<svg class=${a3} viewBox="0 0 400 220" aria-hidden="true"><path d="M0 0h400v14c-30 10-50 10-80 0s-50-10-80 0-50 10-80 0-50-10-80 0-50 10-80 0z" fill=${t3 === "national" ? "#0b6b43" : "#7a4a22"}/>
      ${Array.from({ length: 9 }, (n5, r6) => w`<path class="sw" style=${`animation-delay:${r6 * 0.2}s`} transform=${`translate(${20 + r6 * 45} 14)`} d="M0 0h26l-13 22z" fill=${r6 % 2 ? t3 === "national" ? "#fff" : "#c8a165" : t3 === "national" ? "#0b6b43" : "#4a2c17"}/>`)}</svg>` : t3 === "white_friday" || t3 === "payday" || t3 === "citizen" ? b2`<svg class=${a3} viewBox="0 0 400 220" aria-hidden="true">${Array.from({ length: 10 }, (n5, r6) => w`<g class="fall" style=${`animation-delay:${r6 * 0.5}s;transform-origin:${30 + r6 * 38}px 0`}><rect x=${20 + r6 * 38} y=${10 + r6 % 4 * 30} width="26" height="16" rx="4" fill=${r6 % 2 ? e5 : "currentColor"} opacity=".7" transform=${`rotate(${r6 % 5 * 12 - 24} ${30 + r6 * 38} ${18 + r6 % 4 * 30})`}/></g>`)}</svg>` : b2``;
}
var v5, T5, V4, Z5, x4, w3, m4, g5, u5, ot4, k4, st4, ct4, D4, I6, pt4, E7, W4, B4, H5, yt4, et4, xt4, wt4, vt4, $t4, U2, kt3, At3, O4, z5, M6, C4, y5, $4, J2, jt3, St, K2, Et, Mt, Bt, Gt, It, Rt, Ot, Pt, rt4, P5, j4;
var init_mawaqeet_hero = __esm({
  "dist/mawaqeet-hero.js"() {
    "use strict";
    init_lit();
    init_decorators();
    v5 = () => window.salla ?? window.Salla;
    T5 = async () => {
      var t3, a3;
      try {
        await ((a3 = (t3 = v5()) == null ? void 0 : t3.onReady) == null ? void 0 : a3.call(t3));
      } catch {
      }
    };
    V4 = () => {
      var t3, a3, e5, n5, r6;
      try {
        const i5 = ((a3 = (t3 = v5()) == null ? void 0 : t3.lang) == null ? void 0 : a3.locale) ?? ((r6 = (n5 = (e5 = v5()) == null ? void 0 : e5.config) == null ? void 0 : n5.get) == null ? void 0 : r6.call(n5, "user.language_code"));
        if (typeof i5 == "string" && i5) return i5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    Z5 = () => V4() === "en";
    x4 = (t3, a3) => Z5() ? a3 : t3;
    w3 = (t3, a3 = "") => {
      if (t3 == null) return a3;
      if (typeof t3 == "string") {
        const e5 = t3.trim();
        if (e5.startsWith("{") && e5.endsWith("}"))
          try {
            return w3(JSON.parse(e5), a3);
          } catch {
          }
        return e5 || a3;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const e5 = t3, n5 = e5[V4()] ?? e5.ar ?? e5.en ?? Object.values(e5).find((r6) => typeof r6 == "string" && r6);
        return typeof n5 == "string" && n5.trim() ? n5 : a3;
      }
      return a3;
    };
    m4 = (t3, a3 = "") => {
      const e5 = Array.isArray(t3) ? t3[0] : t3, n5 = typeof e5 == "object" && e5 ? e5.value : e5;
      return n5 == null || n5 === "" ? a3 : String(n5);
    };
    g5 = (t3, a3 = 0) => {
      const e5 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(e5) ? a3 : e5;
    };
    u5 = (t3, a3 = false) => t3 == null || t3 === "" ? a3 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    ot4 = (t3) => Array.isArray(t3) ? t3 : [];
    k4 = (t3) => {
      const a3 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(a3);
      return Number.isFinite(e5) ? e5 : 0;
    };
    st4 = (t3) => {
      if (!t3) return null;
      const a3 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(a3) && a3 > Date.now() ? a3 : null;
    };
    ct4 = (t3) => (Array.isArray(t3) ? t3 : []).map((a3) => Number(typeof a3 == "object" && a3 ? a3.value : a3)).filter((a3) => Number.isFinite(a3) && a3 > 0);
    D4 = /* @__PURE__ */ new Map();
    I6 = (t3) => {
      var a3, e5;
      try {
        const n5 = (e5 = (a3 = v5()) == null ? void 0 : a3.money) == null ? void 0 : e5.call(a3, t3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${x4("\u0631.\u0633", "SAR")}`;
    };
    pt4 = (t3, a3) => {
      var e5, n5, r6;
      try {
        (r6 = (n5 = (e5 = v5()) == null ? void 0 : e5.event) == null ? void 0 : n5.on) == null || r6.call(n5, t3, a3);
      } catch {
      }
    };
    E7 = "tw_smart_mem_v1";
    W4 = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    B4 = (t3, a3 = 1) => L5((e5) => {
      e5.seen[t3.id] = (e5.seen[t3.id] || 0) + a3, e5.prices = [...e5.prices.slice(-29), t3.price], t3.category && (e5.tags[t3.category] = (e5.tags[t3.category] || 0) + a3);
    });
    H5 = false;
    yt4 = () => {
      const t3 = innerWidth, a3 = navigator.userAgent;
      return /iPad|Tablet/i.test(a3) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(a3) || t3 < 700 ? "mobile" : "desktop";
    };
    et4 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    xt4 = () => {
      const t3 = new URLSearchParams(location.search).get("tw_date"), a3 = t3 ? /* @__PURE__ */ new Date(t3 + "T12:00:00") : null;
      return a3 && !isNaN(+a3) ? a3 : /* @__PURE__ */ new Date();
    };
    wt4 = Object.defineProperty;
    vt4 = (t3, a3, e5, n5) => {
      for (var r6 = void 0, i5 = t3.length - 1, c5; i5 >= 0; i5--)
        (c5 = t3[i5]) && (r6 = c5(a3, e5, r6) || r6);
      return r6 && wt4(a3, e5, r6), r6;
    };
    $t4 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    U2 = /* @__PURE__ */ new Set();
    kt3 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    At3 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    O4 = class O5 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), bt4(), mt4();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((a3) => {
          var e5;
          a3.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (e5 = this.io) == null || e5.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var a3;
        super.disconnectedCallback(), (a3 = this.io) == null || a3.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const a3 = this.c, e5 = Date.now(), n5 = Date.parse(String(a3.s_from || "")), r6 = Date.parse(String(a3.s_to || ""));
        if (Number.isFinite(n5) && e5 < n5 || Number.isFinite(r6) && e5 > r6) return true;
        const i5 = yt4();
        return !!(u5(a3.s_hide_mobile) && i5 === "mobile" || u5(a3.s_hide_desktop) && i5 !== "mobile");
      }
      vars(a3 = "") {
        const e5 = this.c, n5 = [], r6 = (c5, s4) => {
          s4 !== "" && s4 != null && n5.push(`${c5}:${s4}`);
        };
        r6("--a", e5.s_accent || ""), r6("--a2", e5.s_accent2 || ""), r6("--bgc", e5.s_bg || ""), r6("--fgc", e5.s_text || ""), r6("--cardc", e5.s_card || ""), r6("--r", `${g5(e5.s_radius, 22)}px`), r6("--gap", `${g5(e5.s_gap, 18)}px`), r6("--ts", `${g5(e5.s_title_size, 38)}px`), r6("--fs", `${g5(e5.s_text_size, 16)}px`), r6("--pt", `${g5(e5.s_pad_top, 56)}px`), r6("--pb", `${g5(e5.s_pad_bottom, 56)}px`), r6("--maxw", kt3[m4(e5.s_width, "normal")] ?? "1240px"), r6("--sh", At3[Math.max(0, Math.min(5, g5(e5.s_shadow, 2)))]), r6("--ms", `${g5(e5.s_anim_ms, 700)}ms`), r6("--ov", String(g5(e5.s_overlay, 45) / 100)), e5.s_bg_image && r6("--bgimg", `url("${String(e5.s_bg_image)}")`);
        const i5 = _t4(m4(e5.s_font, "inherit"));
        return i5 && r6("font-family", `'${i5}', inherit`), n5.join(";") + (a3 ? ";" + a3 : "");
      }
      cls() {
        const a3 = this.c;
        return [
          "sec",
          `th-${m4(a3.s_theme, "auto")}`,
          `al-${m4(a3.s_align, "start")}`,
          `an-${m4(a3.s_anim, "rise")}`,
          `pt-${m4(a3.s_pattern, "none")}`,
          `bs-${m4(a3.s_btn_style, "pill")}`,
          u5(a3.s_border) ? "bordered" : "",
          u5(a3.s_stagger, true) ? "stagger" : "",
          a3.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(a3, e5 = {}, n5 = "", r6 = "", i5 = true) {
        if (this.hiddenNow()) return A;
        const c5 = this.c, s4 = w3(c5.eyebrow, e5.eyebrow ?? ""), o6 = w3(c5.title, e5.title ?? ""), l3 = w3(c5.subtitle, e5.sub ?? ""), h7 = i5 && u5(c5.s_show_head, true) && (s4 || o6 || l3);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(r6)} id=${String(c5.s_anchor || "") || A}>
      <div class="wrap">${h7 ? b2`<header class="head">${s4 ? b2`<span class="eyebrow">${s4}</span>` : ""}${o6 ? b2`<h2 class="title">${o6}</h2>` : ""}${l3 ? b2`<p class="sub">${l3}</p>` : ""}</header>` : ""}
      ${a3}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(a3) {
        const e5 = a3.filter(Boolean);
        return !e5.length || !et4() || !u5(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${x4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${e5.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(a3, e5 = {}) {
        var n5;
        return b2`<article class="pc ${a3.available ? "" : "oos"}">
      <a class="ph" href=${a3.url} @click=${() => B4(a3)}><img src=${a3.image} alt=${a3.name} loading="lazy" />${(n5 = e5.badges) != null && n5.length ? b2`<span class="badges">${e5.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${a3.url} @click=${() => B4(a3)}>${a3.name}</a>
        <div class="pr"><b>${I6(a3.price)}</b>${a3.regular > a3.price ? b2`<s>${I6(a3.regular)}</s>` : ""}</div>
        ${e5.rating !== false && a3.rating > 0 ? b2`<div class="rt">★ ${a3.rating.toFixed(1)}${a3.ratingCount ? b2` <small>(${a3.ratingCount})</small>` : ""}</div>` : ""}
        ${e5.extra ?? ""}
        ${e5.quick !== false ? b2`<button class="btn sm" ?disabled=${!a3.available} @click=${() => this.add(a3)}>${a3.available ? x4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : x4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(a3, e5 = 1, n5) {
        B4(a3, 3), await ht4(a3.id, e5, n5) ? ut4(x4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = a3.url;
      }
    };
    O4.base = i`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
    z5 = O4;
    vt4([
      n4({ type: Object })
    ], z5.prototype, "config");
    M6 = {
      ramadan: { ar: "\u0631\u0645\u0636\u0627\u0646", en: "Ramadan", emoji: "\u{1F319}", pal: ["#0f2a3f", "#d9b25f", "#f7efd9"], pri: 9 },
      eid_fitr: { ar: "\u0639\u064A\u062F \u0627\u0644\u0641\u0637\u0631", en: "Eid al-Fitr", emoji: "\u{1F389}", pal: ["#3b1f5e", "#f2c14e", "#fff6e0"], pri: 10 },
      hajj: { ar: "\u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", en: "First ten of Dhul-Hijjah", emoji: "\u{1F54B}", pal: ["#1d2b24", "#c9a45c", "#f4efe2"], pri: 6 },
      arafah: { ar: "\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", en: "Day of Arafah", emoji: "\u{1F932}", pal: ["#1d2b24", "#e7c873", "#f6f1e2"], pri: 8 },
      eid_adha: { ar: "\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649", en: "Eid al-Adha", emoji: "\u{1F411}", pal: ["#14361f", "#e2b857", "#fbf5e4"], pri: 10 },
      hijri_new_year: { ar: "\u0631\u0623\u0633 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0647\u062C\u0631\u064A\u0629", en: "Hijri New Year", emoji: "\u2728", pal: ["#1c1c2e", "#b9a26a", "#f3eee0"], pri: 4 },
      founding: { ar: "\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", en: "Founding Day", emoji: "\u{1F3F0}", pal: ["#4a2c17", "#c8a165", "#f7ecd9"], pri: 8 },
      national: { ar: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", en: "Saudi National Day", emoji: "\u{1F1F8}\u{1F1E6}", pal: ["#0b5d3b", "#ffffff", "#e8f5ee"], pri: 9 },
      white_friday: { ar: "\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", en: "White Friday", emoji: "\u{1F3F7}\uFE0F", pal: ["#0d0d0f", "#ffffff", "#f2f2f2"], pri: 9 },
      payday: { ar: "\u0645\u0648\u0633\u0645 \u0627\u0644\u0631\u0648\u0627\u062A\u0628", en: "Payday", emoji: "\u{1F4B8}", pal: ["#103b2c", "#3ddc97", "#ecfff6"], pri: 5 },
      citizen: { ar: "\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", en: "Citizen Account day", emoji: "\u{1F3E6}", pal: ["#0e3a4a", "#58c4dd", "#eaf8fc"], pri: 3 },
      mothers: { ar: "\u064A\u0648\u0645 \u0627\u0644\u0623\u0645", en: "Mother's Day", emoji: "\u{1F490}", pal: ["#5a1f3a", "#f2a7c3", "#fff0f6"], pri: 6 },
      back_to_school: { ar: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", en: "Back to school", emoji: "\u{1F392}", pal: ["#1e2f6b", "#ffcc33", "#eef2ff"], pri: 6 },
      summer: { ar: "\u0627\u0644\u0635\u064A\u0641", en: "Summer", emoji: "\u2600\uFE0F", pal: ["#0f4c5c", "#ffb703", "#fff8e6"], pri: 1 },
      winter: { ar: "\u0627\u0644\u0634\u062A\u0627\u0621", en: "Winter", emoji: "\u2744\uFE0F", pal: ["#1b263b", "#9ad1ff", "#eef6ff"], pri: 1 }
    };
    C4 = 864e5;
    y5 = (t3, a3, e5) => new Date(t3, a3 - 1, e5, 0, 0, 0);
    $4 = (t3, a3) => new Date(t3.getFullYear(), t3.getMonth(), t3.getDate() + a3);
    J2 = null;
    jt3 = (t3, a3 = false) => {
      try {
        return new Intl.DateTimeFormat(a3 ? "en-u-ca-islamic-umalqura" : "ar-SA-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(t3);
      } catch {
        return "";
      }
    };
    St = (t3, a3 = false) => new Intl.DateTimeFormat(a3 ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(t3);
    K2 = (t3) => +t3 + C4 - 1;
    Et = {
      ramadan: { soon: ["\u0631\u0645\u0636\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0628\u0648\u0627\u0628", "\u062C\u0647\u0651\u0632 \u0633\u0641\u0631\u062A\u0643 \u0648\u0647\u062F\u0627\u064A\u0627\u0643 \u0642\u0628\u0644 \u0627\u0644\u0632\u062D\u0645\u0629", "Ramadan is near", "Get ready before the rush"], on: ["\u0631\u0645\u0636\u0627\u0646 \u0643\u0631\u064A\u0645", "\u0643\u0644 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0641\u0636\u064A\u0644 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F", "Ramadan Kareem", "Everything for the holy month"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0631\u0645\u0636\u0627\u0646", "Shop Ramadan"] },
      eid_fitr: { soon: ["\u0627\u0644\u0639\u064A\u062F \u0642\u0631\u0651\u0628", "\u0643\u0645\u0651\u0644 \u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0639\u064A\u062F \u0642\u0628\u0644 \u0644\u0627 \u064A\u062E\u0644\u0635 \u0627\u0644\u0648\u0642\u062A", "Eid is coming", "Finish your Eid shopping in time"], on: ["\u0639\u064A\u062F\u0643\u0645 \u0645\u0628\u0627\u0631\u0643", "\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0646\u062A\u0645 \u0628\u062E\u064A\u0631\u060C \u0641\u0631\u062D\u0629 \u0627\u0644\u0639\u064A\u062F \u062A\u0643\u0645\u0644 \u0645\u0639\u0646\u0627", "Eid Mubarak", "Celebrate with us"], cta: ["\u0647\u062F\u0627\u064A\u0627 \u0627\u0644\u0639\u064A\u062F", "Eid gifts"] },
      hajj: { soon: ["\u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", "\u0623\u064A\u0627\u0645 \u0645\u0628\u0627\u0631\u0643\u0629 \u0642\u0627\u062F\u0645\u0629", "Dhul-Hijjah", "Blessed days ahead"], on: ["\u0623\u064A\u0627\u0645 \u0639\u0634\u0631 \u0630\u064A \u0627\u0644\u062D\u062C\u0629", "\u062E\u064A\u0631 \u0627\u0644\u0623\u064A\u0627\u0645\u060C \u0648\u0623\u062C\u0645\u0644 \u0627\u0644\u0647\u062F\u0627\u064A\u0627", "The best ten days", "The best days, the finest gifts"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0622\u0646", "Shop now"] },
      arafah: { soon: ["\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", "\u064A\u0648\u0645 \u0627\u0644\u062F\u0639\u0627\u0621 \u0642\u0631\u064A\u0628", "Day of Arafah", "The day of prayer is near"], on: ["\u064A\u0648\u0645 \u0639\u0631\u0641\u0629", "\u062A\u0642\u0628\u0651\u0644 \u0627\u0644\u0644\u0647 \u0645\u0646\u0627 \u0648\u0645\u0646\u0643\u0645", "Day of Arafah", "May Allah accept from us and you"], cta: ["\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0639\u064A\u062F", "Eid essentials"] },
      eid_adha: { soon: ["\u0639\u064A\u062F \u0627\u0644\u0623\u0636\u062D\u0649 \u0642\u0631\u0651\u0628", "\u062C\u0647\u0651\u0632 \u0625\u0637\u0644\u0627\u0644\u0629 \u0627\u0644\u0639\u064A\u062F \u0648\u0647\u062F\u0627\u064A\u0627\u0647", "Eid al-Adha is near", "Prepare your Eid look and gifts"], on: ["\u0639\u064A\u062F \u0623\u0636\u062D\u0649 \u0645\u0628\u0627\u0631\u0643", "\u0623\u064A\u0627\u0645 \u0641\u0631\u062D \u0648\u0639\u0637\u0627\u0621\u060C \u0645\u0639\u0643\u0645 \u0628\u0643\u0644 \u062C\u062F\u064A\u062F", "Eid al-Adha Mubarak", "Days of joy and giving"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0639\u064A\u062F", "Shop Eid"] },
      hijri_new_year: { soon: ["\u0639\u0627\u0645 \u0647\u062C\u0631\u064A \u062C\u062F\u064A\u062F", "\u0628\u062F\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0642\u0631\u064A\u0628\u0629", "New Hijri year", "A new beginning"], on: ["\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0646\u062A\u0645 \u0628\u062E\u064A\u0631", "\u0639\u0627\u0645 \u0647\u062C\u0631\u064A \u0633\u0639\u064A\u062F", "Happy Hijri New Year", "Wishing you a blessed year"], cta: ["\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u062C\u062F\u064A\u062F", "Discover"] },
      founding: { soon: ["\u064A\u0648\u0645 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", "\u0645\u0646 1727\u2026 \u0648\u0627\u0644\u062D\u0643\u0627\u064A\u0629 \u0645\u0633\u062A\u0645\u0631\u0629", "Founding Day", "Since 1727, the story continues"], on: ["\u064A\u0648\u0645 \u0628\u062F\u064A\u0646\u0627", "\u0646\u062D\u062A\u0641\u064A \u0628\u0625\u0631\u062B\u0646\u0627 \u0628\u062A\u0634\u0643\u064A\u0644\u0629 \u062A\u0644\u064A\u0642", "The day we began", "Celebrating our heritage"], cta: ["\u062A\u0634\u0643\u064A\u0644\u0629 \u0627\u0644\u062A\u0623\u0633\u064A\u0633", "Founding collection"] },
      national: { soon: ["\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A \u0642\u0631\u0651\u0628 \u{1F1F8}\u{1F1E6}", "\u062C\u0647\u0651\u0632 \u0623\u062E\u0636\u0631\u0643", "National Day is near \u{1F1F8}\u{1F1E6}", "Get your green ready"], on: ["\u0647\u0645\u0629 \u062D\u062A\u0649 \u0627\u0644\u0642\u0645\u0629 \u{1F1F8}\u{1F1E6}", "\u0646\u062D\u062A\u0641\u0644 \u0628\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A \u0628\u0639\u0631\u0648\u0636 \u062A\u0644\u064A\u0642", "Saudi National Day \u{1F1F8}\u{1F1E6}", "Celebrating with offers worthy of the day"], cta: ["\u0639\u0631\u0648\u0636 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0648\u0637\u0646\u064A", "National Day offers"] },
      white_friday: { soon: ["\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621 \u0642\u0631\u0651\u0628\u062A", "\u062C\u0647\u0651\u0632 \u0642\u0627\u0626\u0645\u062A\u0643 \u0645\u0646 \u0627\u0644\u062D\u064A\u0646", "White Friday is coming", "Prepare your list now"], on: ["\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", "\u0623\u0642\u0648\u0649 \u0639\u0631\u0648\u0636 \u0627\u0644\u0633\u0646\u0629 \u0628\u062F\u0623\u062A", "White Friday", "The biggest deals of the year are on"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0639\u0631\u0648\u0636", "Shop deals"] },
      payday: { soon: ["\u0627\u0644\u0631\u0627\u062A\u0628 \u0642\u0631\u0651\u0628", "\u062C\u0647\u0651\u0632 \u0633\u0644\u062A\u0643 \u0645\u0646 \u0627\u0644\u062D\u064A\u0646", "Payday is near", "Fill your cart now"], on: ["\u0646\u0632\u0644 \u0627\u0644\u0631\u0627\u062A\u0628 \u{1F389}", "\u0648\u0642\u062A \u062A\u062F\u0644\u0651\u0644 \u0646\u0641\u0633\u0643", "Payday \u{1F389}", "Time to treat yourself"], cta: ["\u062F\u0644\u0651\u0644 \u0646\u0641\u0633\u0643", "Treat yourself"] },
      citizen: { soon: ["\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646 \u0642\u0631\u064A\u0628", "\u062E\u0637\u0637 \u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A\u0643", "Citizen Account soon", "Plan your shopping"], on: ["\u0646\u0632\u0644 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0630\u0643\u064A\u0629 \u0628\u0623\u0633\u0639\u0627\u0631 \u062A\u0646\u0627\u0633\u0628\u0643", "Citizen Account paid", "Smart picks at good prices"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0622\u0646", "Shop now"] },
      mothers: { soon: ["\u064A\u0648\u0645 \u0627\u0644\u0623\u0645 \u0642\u0631\u064A\u0628", "\u0647\u062F\u064A\u0629 \u062A\u0644\u064A\u0642 \u0628\u0623\u063A\u0644\u0649 \u0627\u0644\u0646\u0627\u0633", "Mother's Day is near", "A gift worthy of her"], on: ["\u0643\u0644 \u0639\u0627\u0645 \u0648\u0623\u0645\u0647\u0627\u062A\u0646\u0627 \u0628\u062E\u064A\u0631", "\u0644\u0623\u0646\u0647\u0627 \u062A\u0633\u062A\u0627\u0647\u0644 \u0627\u0644\u0623\u062C\u0645\u0644", "Happy Mother's Day", "Because she deserves the best"], cta: ["\u0647\u062F\u0627\u064A\u0627 \u0627\u0644\u0623\u0645", "Gifts for mom"] },
      back_to_school: { soon: ["\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", "\u062C\u0647\u0651\u0632 \u0643\u0644 \u0634\u064A \u0642\u0628\u0644 \u0623\u0648\u0644 \u064A\u0648\u0645", "Back to school", "Ready before day one"], on: ["\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u062F\u0627\u0631\u0633", "\u0628\u062F\u0627\u064A\u0629 \u0633\u0646\u0629 \u0628\u0643\u0644 \u0645\u0627 \u064A\u062D\u062A\u0627\u062C\u0648\u0646\u0647", "Back to school", "Everything they need"], cta: ["\u062A\u062C\u0647\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u062F\u0627\u0631\u0633", "School essentials"] },
      summer: { soon: ["\u0627\u0644\u0635\u064A\u0641 \u062C\u0627\u064A", "\u062C\u0647\u0651\u0632 \u0646\u0641\u0633\u0643 \u0644\u0644\u0625\u062C\u0627\u0632\u0629", "Summer is coming", "Get vacation-ready"], on: ["\u0635\u064A\u0641\u0643\u0645 \u0623\u062D\u0644\u0649", "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0635\u064A\u0641 \u0648\u0627\u0644\u0633\u0641\u0631", "Summer vibes", "Summer and travel picks"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0635\u064A\u0641", "Shop summer"] },
      winter: { soon: ["\u0627\u0644\u0634\u062A\u0627\u0621 \u0642\u0631\u0651\u0628", "\u062F\u0641\u0651 \u0646\u0641\u0633\u0643 \u0628\u0623\u062C\u0645\u0644 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A", "Winter is near", "Stay warm in style"], on: ["\u0623\u062C\u0648\u0627\u0621 \u0627\u0644\u0634\u062A\u0627\u0621", "\u062F\u0641\u0621 \u0648\u0623\u0646\u0627\u0642\u0629", "Winter mood", "Warm and elegant"], cta: ["\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0634\u062A\u0627\u0621", "Shop winter"] }
    };
    Mt = ["ramadan", "eid_fitr", "hajj", "arafah", "eid_adha", "hijri_new_year", "founding", "national", "white_friday", "payday", "citizen", "mothers", "back_to_school", "summer", "winter"];
    Bt = ["citizen", "summer", "winter", "hijri_new_year"];
    Gt = (t3) => Mt.filter((a3) => u5(t3[`o_${a3}`], !Bt.includes(a3)));
    It = (t3) => ({ payDay: g5(t3.pay_day, 27), payShift: m4(t3.pay_shift, "before"), school: String(t3.school_date || "").slice(0, 10), whiteFridayDays: g5(t3.wf_days, 7) });
    Rt = (t3) => {
      const a3 = String(t3.preview_date || "").slice(0, 10);
      if (a3 && (et4() || window.__twDemo)) {
        const e5 = /* @__PURE__ */ new Date(a3 + "T12:00:00");
        if (!isNaN(+e5)) return e5;
      }
      return xt4();
    };
    Ot = i`
  .deco { position: absolute; inset: 0 0 auto 0; width: 100%; height: auto; max-height: 100%; pointer-events: none; z-index: 0; color: var(--o1); }
  .sw { animation: sw 4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: top center; } @keyframes sw { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .tw { animation: tw 2.4s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; } @keyframes tw { to { opacity: .25; } }
  .fall { animation: fl 6s linear infinite; } @keyframes fl { from { transform: translateY(-30px); opacity: 0; } 15% { opacity: 1; } to { transform: translateY(220px); opacity: 0; } }
`;
    Pt = Object.defineProperty;
    rt4 = (t3, a3, e5, n5) => {
      for (var r6 = void 0, i5 = t3.length - 1, c5; i5 >= 0; i5--)
        (c5 = t3[i5]) && (r6 = c5(a3, e5, r6) || r6);
      return r6 && Pt(a3, e5, r6), r6;
    };
    P5 = class P6 extends z5 {
      constructor() {
        super(...arguments), this.prods = [], this.copied = false;
      }
      willUpdate(a3) {
        a3.has("config") && u5(this.c.show_products, true) && ft4(this.c.products, m4(this.c.auto_source, "offers"), 2).then((e5) => this.prods = e5.items);
      }
      render() {
        var q2;
        const a3 = this.c, e5 = Z5(), n5 = Tt(a3);
        if (!n5.w && (!u5(a3.fallback_show, true) || !w3(a3.fallback_title)))
          return this.hints([x4("\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0648\u0633\u0645 \u0646\u0634\u0637 \u0623\u0648 \u0642\u0631\u064A\u0628 \u0627\u0644\u0622\u0646\u061B \u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u062E\u0641\u064A \u062D\u062A\u0649 \u064A\u0642\u062A\u0631\u0628 \u0627\u0644\u0645\u0648\u0633\u0645 \u0627\u0644\u0642\u0627\u062F\u0645 (\u0623\u0648 \u0627\u0643\u062A\u0628 \u0639\u0646\u0648\u0627\u0646\u0627\u064B \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0627\u064B).", "No season now: hidden until the next one (or set a fallback title).")]) || A;
        const r6 = (q2 = n5.w) == null ? void 0 : q2.id, i5 = r6 ? M6[r6] : null, c5 = r6 ? Et[r6] : null, s4 = n5.phase === "soon" ? "soon" : "on", o6 = ot4(a3.overrides).find((b5) => m4(b5.occasion) === r6 && (m4(b5.phase, "any") === "any" || m4(b5.phase) === s4));
        let l3 = o6 && w3(o6.title) || (c5 ? c5[s4][e5 ? 2 : 0] : w3(a3.fallback_title));
        const h7 = o6 && w3(o6.subtitle) || (c5 ? c5[s4][e5 ? 3 : 1] : w3(a3.fallback_text));
        n5.phase === "last" && u5(a3.last_days, true) && !o6 && (l3 = x4(`\u0622\u062E\u0631 \u0623\u064A\u0627\u0645 ${i5.ar}`, `Last days of ${i5.en}`));
        const f5 = u5(a3.store_colors) || !i5 ? ["var(--A)", "#fff", "#fff"] : [String(a3.color1 || i5.pal[0]), String(a3.color2 || i5.pal[1]), String(a3.color3 || i5.pal[2])], p4 = [];
        i5 && u5(a3.chip_occ, true) && p4.push(`${i5.emoji} ${i5[e5 ? "en" : "ar"]}`), n5.phase === "soon" && u5(a3.chip_left, true) && p4.push(x4(`\u0628\u0627\u0642\u064A ${n5.left} ${n5.left > 10 ? "\u064A\u0648\u0645" : "\u0623\u064A\u0627\u0645"}`, `${n5.left} days to go`)), r6 === "ramadan" && n5.phase !== "soon" && u5(a3.chip_day, true) && p4.push(x4(`\u0627\u0644\u064A\u0648\u0645 ${n5.day} \u0631\u0645\u0636\u0627\u0646`, `Day ${n5.day} of Ramadan`)), u5(a3.chip_date, true) && p4.push(`${jt3(n5.at, e5)} \xB7 ${St(n5.at, e5)}`);
        const A6 = String(o6 && o6.image || a3[`img_${r6}`] || a3.image || ""), N6 = o6 && w3(o6.button) || w3(a3.button) || (c5 ? c5.cta[e5 ? 1 : 0] : x4("\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0622\u0646", "Shop now")), F4 = String(o6 && o6.link || a3.link || "/"), _4 = String(o6 && o6.coupon || "");
        return this.shell(b2`${this.hints([x4("\u062C\u0631\u0651\u0628 \u0623\u064A \u0645\u0648\u0633\u0645: \u0627\u062E\u062A\u0631 \xAB\u062A\u062D\u0643\u0645 \u064A\u062F\u0648\u064A\xBB \u0623\u0648 \xAB\u062C\u0631\u0651\u0628 \u062A\u0627\u0631\u064A\u062E\u0627\u064B\xBB \u0623\u0648 \u0623\u0636\u0641 ?tw_date=2027-02-15 \u0644\u0644\u0631\u0627\u0628\u0637.", "Preview any season with the manual override or ?tw_date=2027-02-15.")])}
      <div class="hero" style=${`--o1:${f5[0]};--o2:${f5[1]};--o3:${f5[2]};--h:${g5(a3.height, 460)}px;--hs:${g5(a3.headline_size, 64)}px`}>
        ${u5(a3.decor, true) && !u5(a3.store_colors) ? Lt(r6) : ""}
        <div class="txt">${p4.length ? b2`<div class="chips">${p4.map((b5) => b2`<span>${b5}</span>`)}</div>` : ""}<h1>${l3}</h1><p class="lead">${h7}</p>
          <div class="cta"><a class="btn" href=${F4}>${N6}</a>${_4 ? b2`<button class="cp" @click=${() => {
          var b5;
          (b5 = navigator.clipboard) == null || b5.writeText(_4), this.copied = true;
        }}>${x4("\u0627\u0644\u0643\u0648\u062F", "Code")} <b>${_4}</b> ${this.copied ? "\u2713" : ""}</button>` : ""}</div></div>
        <div class="art">${A6 ? b2`<img class="main" src=${A6} alt="" />` : b2`<span class="big">${(i5 == null ? void 0 : i5.emoji) ?? "\u2728"}</span>`}
          ${this.prods.map((b5) => b2`<a class="pp" href=${b5.url}><img src=${b5.image} alt="" /><span>${b5.name}<b>${I6(b5.price)}</b></span></a>`)}</div>
      </div>`, { title: "" }, m4(a3.s_width, "normal") === "full" ? "full" : "", "", false);
      }
    };
    P5.styles = [z5.base, Ot, i`
    .hero { position: relative; overflow: hidden; border-radius: var(--r); min-height: var(--h, 460px); display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; gap: 24px;
      background: radial-gradient(800px 400px at 80% 0%, color-mix(in srgb, var(--o2) 30%, transparent), transparent 60%), linear-gradient(160deg, var(--o1), color-mix(in srgb, var(--o1) 70%, #000)); color: var(--o3); box-shadow: var(--sh); }
    .full .hero { border-radius: 0; } @media (max-width: 860px) { .hero { grid-template-columns: 1fr; } }
    .txt { position: relative; z-index: 1; padding: clamp(28px, 5vw, 64px); display: grid; gap: 14px; }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; } .chips span { font-size: 12px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: color-mix(in srgb, var(--o3) 14%, transparent); border: 1px solid color-mix(in srgb, var(--o3) 25%, transparent); }
    h1 { margin: 0; font-size: clamp(32px, 5.4vw, var(--hs, 64px)); line-height: 1.1; font-weight: 900; } h1 em { font-style: normal; color: var(--o2); }
    .lead { margin: 0; font-size: clamp(15px, 1.8vw, 20px); opacity: .9; line-height: 1.8; }
    .btn { background: var(--o2); color: var(--o1); } .btn.ghost { color: var(--o3); background: transparent; border-color: var(--o3); }
    .cta { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; } .cp { border: 1.5px dashed var(--o2); padding: 10px 14px; border-radius: 12px; background: transparent; color: inherit; font: inherit; cursor: pointer; } .cp b { letter-spacing: .12em; }
    .art { position: relative; z-index: 1; height: 100%; min-height: 300px; display: grid; place-items: center; padding: 24px; }
    .art img.main { width: min(100%, 440px); aspect-ratio: 1; object-fit: cover; border-radius: 50% 50% var(--r) var(--r); border: 6px solid color-mix(in srgb, var(--o2) 60%, transparent); box-shadow: 0 40px 80px -30px #000a; }
    .pp { position: absolute; display: flex; gap: 8px; align-items: center; padding: 6px 12px 6px 6px; background: #fff; color: #111; border-radius: 14px; text-decoration: none; font-size: 12px; box-shadow: 0 16px 30px -14px #000a; max-width: 220px; animation: fl2 5s ease-in-out infinite alternate; }
    .pp img { width: 42px; height: 42px; border-radius: 10px; object-fit: cover; } .pp b { display: block; color: var(--o1); } @keyframes fl2 { to { transform: translateY(-10px); } }
    .pp:nth-of-type(1) { top: 12%; inset-inline-start: 4%; } .pp:nth-of-type(2) { bottom: 10%; inset-inline-end: 4%; animation-delay: 1s; }
    .big { font-size: clamp(90px, 14vw, 180px); line-height: 1; filter: drop-shadow(0 20px 40px #0006); }
  `];
    j4 = P5;
    rt4([
      r5()
    ], j4.prototype, "prods");
    rt4([
      r5()
    ], j4.prototype, "copied");
    typeof j4 < "u" && j4.registerSallaComponent("salla-mawaqeet-hero");
  }
});

// dist/mawaqeet-payday.js
var mawaqeet_payday_exports = {};
__export(mawaqeet_payday_exports, {
  default: () => S4
});
function Y5(t3) {
  var s4, u6, m5, d3, f5, b5, _4, k5, C5;
  const e5 = w4(t3 == null ? void 0 : t3.sale_price), r6 = w4((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)), n5 = e5 && e5 < r6 ? e5 : w4(t3 == null ? void 0 : t3.price) || r6, a3 = Math.max(w4(t3 == null ? void 0 : t3.regular_price), w4(t3 == null ? void 0 : t3.price), n5), i5 = (Array.isArray(t3 == null ? void 0 : t3.images) ? t3.images : []).map((v6) => String((v6 == null ? void 0 : v6.url) ?? v6 ?? "")).filter(Boolean), o6 = (t3 == null ? void 0 : t3.sold_quantity) ?? (t3 == null ? void 0 : t3.sold);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((s4 = t3 == null ? void 0 : t3.image) == null ? void 0 : s4.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? i5[0] ?? ""),
    images: i5,
    price: n5,
    regular: a3,
    discount: a3 > n5 ? Math.round((1 - n5 / a3) * 100) : 0,
    rating: w4(((u6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : u6.stars) ?? ((m5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : m5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: w4((d3 = t3 == null ? void 0 : t3.rating) == null ? void 0 : d3.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : w4(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out" && !((t3 == null ? void 0 : t3.quantity) === 0 && !(t3 != null && t3.unlimited_quantity)),
    sold: o6 == null || o6 === "" || !Number.isFinite(Number(o6)) ? null : Number(o6),
    endsAt: Q4((t3 == null ? void 0 : t3.discount_ends) ?? (t3 == null ? void 0 : t3.sale_end) ?? (t3 == null ? void 0 : t3.discount_end)),
    category: String(((f5 = t3 == null ? void 0 : t3.category) == null ? void 0 : f5.name) ?? ((_4 = (b5 = t3 == null ? void 0 : t3.categories) == null ? void 0 : b5[0]) == null ? void 0 : _4.name) ?? ""),
    brand: String(((k5 = t3 == null ? void 0 : t3.brand) == null ? void 0 : k5.name) ?? ""),
    promo: String(((C5 = t3 == null ? void 0 : t3.promotion) == null ? void 0 : C5.title) ?? (t3 == null ? void 0 : t3.promotion_title) ?? "")
  };
}
async function Z6(t3) {
  var n5, a3, i5;
  const e5 = (n5 = x5()) == null ? void 0 : n5.product;
  if (!e5) return null;
  const r6 = e5.getDetails ? e5.getDetails.bind(e5) : (i5 = (a3 = e5.api) == null ? void 0 : a3.getDetails) == null ? void 0 : i5.bind(e5.api);
  if (!r6) return null;
  try {
    const o6 = await r6(t3, ["images", "sold_quantity", "category"]), s4 = Y5((o6 == null ? void 0 : o6.data) ?? o6);
    return s4.name ? s4 : null;
  } catch {
    return null;
  }
}
async function tt5(t3) {
  await j5();
  const e5 = "ids:" + t3.join(",");
  return $5.has(e5) || $5.set(e5, Promise.all(t3.map(Z6)).then((r6) => r6.filter((n5) => !!n5))), $5.get(e5);
}
async function R5(t3, e5 = [], r6 = 12) {
  await j5();
  const n5 = `src:${t3}:${e5.join(",")}:${r6}`;
  return $5.has(n5) || $5.set(n5, (async () => {
    var o6, s4, u6, m5;
    const a3 = (o6 = x5()) == null ? void 0 : o6.product, i5 = a3 != null && a3.fetch ? a3.fetch.bind(a3) : (u6 = (s4 = a3 == null ? void 0 : a3.api) == null ? void 0 : s4.fetch) == null ? void 0 : u6.bind(a3.api);
    if (!i5) return [];
    try {
      const d3 = { source: t3, per_page: r6 };
      e5.length && (d3.source_value = e5);
      const f5 = await i5(d3);
      return (Array.isArray(f5 == null ? void 0 : f5.data) ? f5.data : Array.isArray(f5) ? f5 : ((m5 = f5 == null ? void 0 : f5.data) == null ? void 0 : m5.products) ?? []).map(Y5).filter((_4) => _4.name).slice(0, r6);
    } catch {
      return [];
    }
  })()), $5.get(n5);
}
async function et5(t3, e5 = "best_selling", r6 = 12) {
  const n5 = V5(t3);
  if (n5.length) return { items: (await tt5(n5)).slice(0, r6), auto: false };
  let a3 = await R5(e5, [], r6);
  return !a3.length && e5 !== "latest" && (a3 = await R5("latest", [], r6)), { items: a3, auto: true };
}
async function rt5(t3, e5 = 1, r6) {
  var n5, a3, i5;
  await j5();
  try {
    return await ((i5 = (a3 = (n5 = x5()) == null ? void 0 : n5.cart) == null ? void 0 : a3.addItem) == null ? void 0 : i5.call(a3, r6 ? { id: t3, quantity: e5, notes: r6 } : { id: t3, quantity: e5 })), true;
  } catch {
    return false;
  }
}
function at5(t3, e5 = true) {
  var r6, n5, a3;
  try {
    (a3 = e5 ? (r6 = x5()) == null ? void 0 : r6.success : (n5 = x5()) == null ? void 0 : n5.error) == null || a3(t3);
  } catch {
  }
}
function D5() {
  try {
    return { ...q(), ...JSON.parse(localStorage.getItem(z6) || "{}") };
  } catch {
    return q();
  }
}
function it4(t3) {
  try {
    localStorage.setItem(z6, JSON.stringify(t3));
  } catch {
  }
}
function E8(t3) {
  const e5 = D5();
  return t3(e5), it4(e5), e5;
}
function ot5() {
  let t3 = false;
  try {
    t3 = !sessionStorage.getItem(z6), sessionStorage.setItem(z6, "1");
  } catch {
  }
  return t3 ? E8((e5) => {
    e5.visits += 1, e5.last = Date.now();
  }) : D5();
}
function st5() {
  const t3 = [...D5().prices].sort((e5, r6) => e5 - r6);
  return t3.length >= 3 ? t3[Math.floor(t3.length / 2)] : 0;
}
function ct5(t3, e5 = D5()) {
  let r6 = (e5.seen[t3.id] || 0) * 2 + (e5.carted.includes(t3.id) ? 4 : 0) + (t3.category && e5.tags[t3.category] || 0);
  const n5 = st5();
  return n5 && (r6 += Math.max(0, 2 - Math.abs(t3.price - n5) / n5 * 2)), r6;
}
function dt5() {
  T6 || (T6 = true, nt4("cart::item.added", (t3) => {
    var r6;
    const e5 = Number(((r6 = t3 == null ? void 0 : t3.data) == null ? void 0 : r6.product_id) ?? 0);
    e5 && E8((n5) => {
      n5.carted.includes(e5) || (n5.carted = [...n5.carted.slice(-40), e5]);
    });
  }));
}
function mt5(t3) {
  const e5 = bt5[t3];
  if (!e5 || O6.has(e5)) return e5;
  O6.add(e5);
  const r6 = document.createElement("link");
  return r6.rel = "stylesheet", r6.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e5)}:wght@400;500;700;800&display=swap`, document.head.appendChild(r6), e5;
}
function G5(t3, e5, r6 = 27, n5 = "before") {
  const a3 = yt5(t3, e5, Math.min(r6, new Date(t3, e5, 0).getDate()));
  if (n5 !== "none") for (; a3.getDay() === 5 || a3.getDay() === 6; ) a3.setDate(a3.getDate() + (n5 === "before" ? -1 : 1));
  return a3;
}
var x5, j5, U3, W5, c4, h6, y6, g6, p3, w4, Q4, V5, $5, L6, nt4, z6, q, N5, lt5, T6, gt5, H6, ut5, ft5, ht5, bt5, O6, pt5, xt5, I7, A5, yt5, F3, vt5, wt5, _t5, B5, S4;
var init_mawaqeet_payday = __esm({
  "dist/mawaqeet-payday.js"() {
    "use strict";
    init_lit();
    init_decorators();
    x5 = () => window.salla ?? window.Salla;
    j5 = async () => {
      var t3, e5;
      try {
        await ((e5 = (t3 = x5()) == null ? void 0 : t3.onReady) == null ? void 0 : e5.call(t3));
      } catch {
      }
    };
    U3 = () => {
      var t3, e5, r6, n5, a3;
      try {
        const i5 = ((e5 = (t3 = x5()) == null ? void 0 : t3.lang) == null ? void 0 : e5.locale) ?? ((a3 = (n5 = (r6 = x5()) == null ? void 0 : r6.config) == null ? void 0 : n5.get) == null ? void 0 : a3.call(n5, "user.language_code"));
        if (typeof i5 == "string" && i5) return i5.slice(0, 2);
      } catch {
      }
      return (document.documentElement.lang || "ar").slice(0, 2);
    };
    W5 = () => U3() === "en";
    c4 = (t3, e5) => W5() ? e5 : t3;
    h6 = (t3, e5 = "") => {
      if (t3 == null) return e5;
      if (typeof t3 == "string") {
        const r6 = t3.trim();
        if (r6.startsWith("{") && r6.endsWith("}"))
          try {
            return h6(JSON.parse(r6), e5);
          } catch {
          }
        return r6 || e5;
      }
      if (typeof t3 == "number" || typeof t3 == "boolean") return String(t3);
      if (typeof t3 == "object") {
        const r6 = t3, n5 = r6[U3()] ?? r6.ar ?? r6.en ?? Object.values(r6).find((a3) => typeof a3 == "string" && a3);
        return typeof n5 == "string" && n5.trim() ? n5 : e5;
      }
      return e5;
    };
    y6 = (t3, e5 = "") => {
      const r6 = Array.isArray(t3) ? t3[0] : t3, n5 = typeof r6 == "object" && r6 ? r6.value : r6;
      return n5 == null || n5 === "" ? e5 : String(n5);
    };
    g6 = (t3, e5 = 0) => {
      const r6 = Number(t3);
      return t3 === "" || t3 == null || !Number.isFinite(r6) ? e5 : r6;
    };
    p3 = (t3, e5 = false) => t3 == null || t3 === "" ? e5 : t3 === true || t3 === "true" || t3 === 1 || t3 === "1";
    w4 = (t3) => {
      const e5 = typeof t3 == "object" && t3 ? t3.amount : t3, r6 = Number(e5);
      return Number.isFinite(r6) ? r6 : 0;
    };
    Q4 = (t3) => {
      if (!t3) return null;
      const e5 = typeof t3 == "number" ? t3 < 1e12 ? t3 * 1e3 : t3 : Date.parse(String(t3).replace(" ", "T"));
      return Number.isFinite(e5) && e5 > Date.now() ? e5 : null;
    };
    V5 = (t3) => (Array.isArray(t3) ? t3 : []).map((e5) => Number(typeof e5 == "object" && e5 ? e5.value : e5)).filter((e5) => Number.isFinite(e5) && e5 > 0);
    $5 = /* @__PURE__ */ new Map();
    L6 = (t3) => {
      var e5, r6;
      try {
        const n5 = (r6 = (e5 = x5()) == null ? void 0 : e5.money) == null ? void 0 : r6.call(e5, t3);
        if (n5) return String(n5);
      } catch {
      }
      return `${Math.round(t3 * 100) / 100} ${c4("\u0631.\u0633", "SAR")}`;
    };
    nt4 = (t3, e5) => {
      var r6, n5, a3;
      try {
        (a3 = (n5 = (r6 = x5()) == null ? void 0 : r6.event) == null ? void 0 : n5.on) == null || a3.call(n5, t3, e5);
      } catch {
      }
    };
    z6 = "tw_smart_mem_v1";
    q = () => ({ first: Date.now(), last: 0, visits: 0, srcFirst: "", srcLast: "", seen: {}, carted: [], prices: [], tags: {}, answers: {}, avail: {}, dismissed: {} });
    N5 = (t3, e5 = 1) => E8((r6) => {
      r6.seen[t3.id] = (r6.seen[t3.id] || 0) + e5, r6.prices = [...r6.prices.slice(-29), t3.price], t3.category && (r6.tags[t3.category] = (r6.tags[t3.category] || 0) + e5);
    });
    lt5 = (t3, e5 = true) => {
      if (!e5) return t3;
      const r6 = D5();
      return t3.map((n5, a3) => ({ p: n5, i: a3, s: ct5(n5, r6) })).sort((n5, a3) => a3.s - n5.s || n5.i - a3.i).map((n5) => n5.p);
    };
    T6 = false;
    gt5 = () => {
      const t3 = innerWidth, e5 = navigator.userAgent;
      return /iPad|Tablet/i.test(e5) || t3 >= 700 && t3 < 1024 && "ontouchstart" in window ? "tablet" : /Mobi|Android|iPhone/i.test(e5) || t3 < 700 ? "mobile" : "desktop";
    };
    H6 = () => {
      try {
        return window.top !== window.self || /[?&](preview|edit_mode|theme_preview)=/.test(location.search);
      } catch {
        return true;
      }
    };
    ut5 = () => {
      const t3 = new URLSearchParams(location.search).get("tw_date"), e5 = t3 ? /* @__PURE__ */ new Date(t3 + "T12:00:00") : null;
      return e5 && !isNaN(+e5) ? e5 : /* @__PURE__ */ new Date();
    };
    ft5 = Object.defineProperty;
    ht5 = (t3, e5, r6, n5) => {
      for (var a3 = void 0, i5 = t3.length - 1, o6; i5 >= 0; i5--)
        (o6 = t3[i5]) && (a3 = o6(e5, r6, a3) || a3);
      return a3 && ft5(e5, r6, a3), a3;
    };
    bt5 = { tajawal: "Tajawal", cairo: "Cairo", almarai: "Almarai", plex: "IBM Plex Sans Arabic", messiri: "El Messiri", readex: "Readex Pro", kufi: "Noto Kufi Arabic", amiri: "Amiri", rubik: "Rubik" };
    O6 = /* @__PURE__ */ new Set();
    pt5 = { narrow: "960px", normal: "1240px", wide: "1440px", full: "100%" };
    xt5 = ["none", "0 6px 18px -12px #0003", "0 14px 34px -20px #0004", "0 22px 50px -26px #0005", "0 30px 70px -30px #0007", "0 40px 90px -30px #0009"];
    I7 = class I8 extends i4 {
      get c() {
        return this.config ?? {};
      }
      connectedCallback() {
        super.connectedCallback(), dt5(), ot5();
      }
      firstUpdated() {
        if (!("IntersectionObserver" in window)) {
          this.setAttribute("in", "");
          return;
        }
        this.io = new IntersectionObserver((e5) => {
          var r6;
          e5.some((n5) => n5.isIntersecting) && (this.setAttribute("in", ""), (r6 = this.io) == null || r6.disconnect());
        }, { threshold: 0.12 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var e5;
        super.disconnectedCallback(), (e5 = this.io) == null || e5.disconnect();
      }
      /** Hidden by the merchant's schedule or device rule? */
      hiddenNow() {
        const e5 = this.c, r6 = Date.now(), n5 = Date.parse(String(e5.s_from || "")), a3 = Date.parse(String(e5.s_to || ""));
        if (Number.isFinite(n5) && r6 < n5 || Number.isFinite(a3) && r6 > a3) return true;
        const i5 = gt5();
        return !!(p3(e5.s_hide_mobile) && i5 === "mobile" || p3(e5.s_hide_desktop) && i5 !== "mobile");
      }
      vars(e5 = "") {
        const r6 = this.c, n5 = [], a3 = (o6, s4) => {
          s4 !== "" && s4 != null && n5.push(`${o6}:${s4}`);
        };
        a3("--a", r6.s_accent || ""), a3("--a2", r6.s_accent2 || ""), a3("--bgc", r6.s_bg || ""), a3("--fgc", r6.s_text || ""), a3("--cardc", r6.s_card || ""), a3("--r", `${g6(r6.s_radius, 22)}px`), a3("--gap", `${g6(r6.s_gap, 18)}px`), a3("--ts", `${g6(r6.s_title_size, 38)}px`), a3("--fs", `${g6(r6.s_text_size, 16)}px`), a3("--pt", `${g6(r6.s_pad_top, 56)}px`), a3("--pb", `${g6(r6.s_pad_bottom, 56)}px`), a3("--maxw", pt5[y6(r6.s_width, "normal")] ?? "1240px"), a3("--sh", xt5[Math.max(0, Math.min(5, g6(r6.s_shadow, 2)))]), a3("--ms", `${g6(r6.s_anim_ms, 700)}ms`), a3("--ov", String(g6(r6.s_overlay, 45) / 100)), r6.s_bg_image && a3("--bgimg", `url("${String(r6.s_bg_image)}")`);
        const i5 = mt5(y6(r6.s_font, "inherit"));
        return i5 && a3("font-family", `'${i5}', inherit`), n5.join(";") + (e5 ? ";" + e5 : "");
      }
      cls() {
        const e5 = this.c;
        return [
          "sec",
          `th-${y6(e5.s_theme, "auto")}`,
          `al-${y6(e5.s_align, "start")}`,
          `an-${y6(e5.s_anim, "rise")}`,
          `pt-${y6(e5.s_pattern, "none")}`,
          `bs-${y6(e5.s_btn_style, "pill")}`,
          p3(e5.s_border) ? "bordered" : "",
          p3(e5.s_stagger, true) ? "stagger" : "",
          e5.s_bg_image ? "has-img" : ""
        ].join(" ");
      }
      /** Section shell with the optional eyebrow, title and subtitle the merchant set (defaults are smart, in both languages). */
      shell(e5, r6 = {}, n5 = "", a3 = "", i5 = true) {
        if (this.hiddenNow()) return A;
        const o6 = this.c, s4 = h6(o6.eyebrow, r6.eyebrow ?? ""), u6 = h6(o6.title, r6.title ?? ""), m5 = h6(o6.subtitle, r6.sub ?? ""), d3 = i5 && p3(o6.s_show_head, true) && (s4 || u6 || m5);
        return b2`<section class="${this.cls()} ${n5}" style=${this.vars(a3)} id=${String(o6.s_anchor || "") || A}>
      <div class="wrap">${d3 ? b2`<header class="head">${s4 ? b2`<span class="eyebrow">${s4}</span>` : ""}${u6 ? b2`<h2 class="title">${u6}</h2>` : ""}${m5 ? b2`<p class="sub">${m5}</p>` : ""}</header>` : ""}
      ${e5}</div></section>`;
      }
      /** Setup hints for the merchant, shown only inside Salla's theme editor preview, never to shoppers. */
      hints(e5) {
        const r6 = e5.filter(Boolean);
        return !r6.length || !H6() || !p3(this.c.s_hints, true) ? "" : b2`<aside class="hints" role="note"><b>💡 ${c4("\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0625\u0639\u062F\u0627\u062F (\u064A\u0638\u0647\u0631 \u0644\u0643 \u0641\u0642\u0637)", "Setup assistant (only you see this)")}</b><ul>${r6.map((n5) => b2`<li>${n5}</li>`)}</ul></aside>`;
      }
      card(e5, r6 = {}) {
        var n5;
        return b2`<article class="pc ${e5.available ? "" : "oos"}">
      <a class="ph" href=${e5.url} @click=${() => N5(e5)}><img src=${e5.image} alt=${e5.name} loading="lazy" />${(n5 = r6.badges) != null && n5.length ? b2`<span class="badges">${r6.badges}</span>` : ""}</a>
      <div class="pb"><a class="pn" href=${e5.url} @click=${() => N5(e5)}>${e5.name}</a>
        <div class="pr"><b>${L6(e5.price)}</b>${e5.regular > e5.price ? b2`<s>${L6(e5.regular)}</s>` : ""}</div>
        ${r6.rating !== false && e5.rating > 0 ? b2`<div class="rt">★ ${e5.rating.toFixed(1)}${e5.ratingCount ? b2` <small>(${e5.ratingCount})</small>` : ""}</div>` : ""}
        ${r6.extra ?? ""}
        ${r6.quick !== false ? b2`<button class="btn sm" ?disabled=${!e5.available} @click=${() => this.add(e5)}>${e5.available ? c4("\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629", "Add to cart") : c4("\u0646\u0641\u062F\u062A \u0627\u0644\u0643\u0645\u064A\u0629", "Sold out")}</button>` : ""}
      </div></article>`;
      }
      async add(e5, r6 = 1, n5) {
        N5(e5, 3), await rt5(e5.id, r6, n5) ? at5(c4("\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0644\u0644\u0633\u0644\u0629", "Added to cart")) : location.href = e5.url;
      }
    };
    I7.base = i`
  :host { display: block; font-family: inherit; direction: inherit;
    --A: var(--a, var(--color-primary, #b88a44)); --A2: var(--a2, color-mix(in srgb, var(--A) 55%, #000)); --BG: var(--bgc, transparent); --FG: var(--fgc, inherit); --CARD: var(--cardc, #fff); --LINE: color-mix(in srgb, currentColor 14%, transparent); }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .sec { position: relative; background: var(--BG); color: var(--FG); font-size: var(--fs, 16px); overflow: hidden; isolation: isolate; }
  .sec.has-img::before { content: ''; position: absolute; inset: 0; z-index: -2; background: var(--bgimg) center/cover no-repeat; }
  .sec.has-img::after { content: ''; position: absolute; inset: 0; z-index: -1; background: #000; opacity: var(--ov, .45); }
  .th-light { --BG: var(--bgc, #fff); --FG: var(--fgc, #17140f); --CARD: var(--cardc, #faf8f4); }
  .th-ivory { --BG: var(--bgc, #f7f2e9); --FG: var(--fgc, #1d160c); --CARD: var(--cardc, #fffdf8); }
  .th-dark { --BG: var(--bgc, #111014); --FG: var(--fgc, #f4efe6); --CARD: var(--cardc, #1c1b22); }
  .th-midnight { --BG: var(--bgc, radial-gradient(900px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18); --FG: var(--fgc, #f6f1e7); --CARD: var(--cardc, #19142d); }
  .th-glass { --BG: var(--bgc, linear-gradient(135deg, color-mix(in srgb, var(--A) 14%, #fff), #fff 60%)); --FG: var(--fgc, #15130f); --CARD: var(--cardc, rgba(255,255,255,.6)); }
  .th-glass .pc, .th-glass .panel { backdrop-filter: blur(14px); }
  .th-accent { --BG: var(--bgc, linear-gradient(135deg, var(--A), var(--A2))); --FG: var(--fgc, #fff); --CARD: var(--cardc, rgba(255,255,255,.12)); }
  .th-dark, .th-midnight, .th-accent { --LINE: rgba(255,255,255,.14); }
  .pt-dots { background-image: radial-gradient(color-mix(in srgb, currentColor 12%, transparent) 1px, transparent 1.4px), var(--BG); background-size: 18px 18px, auto; }
  .pt-grid { background-image: linear-gradient(var(--LINE) 1px, transparent 1px), linear-gradient(90deg, var(--LINE) 1px, transparent 1px), var(--BG); background-size: 36px 36px, 36px 36px, auto; }
  .pt-arabesque { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Cpath d='M28 4l7 17 17 7-17 7-7 17-7-17-17-7 17-7z' fill='none' stroke='%23999' stroke-opacity='.18'/%3E%3C/svg%3E"), var(--BG); }
  .pt-waves { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='20'%3E%3Cpath d='M0 10q20-10 40 0t40 0' fill='none' stroke='%23999' stroke-opacity='.2'/%3E%3C/svg%3E"), var(--BG); }
  .wrap { max-width: var(--maxw, 1240px); margin: 0 auto; padding: var(--pt, 56px) clamp(16px, 4vw, 32px) var(--pb, 56px); }
  .head { margin-bottom: calc(var(--gap, 18px) * 1.4); }
  .al-center .head { text-align: center; } .al-center .head .sub { margin-inline: auto; } .al-end .head { text-align: end; }
  .eyebrow { display: inline-block; letter-spacing: .2em; font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--A); margin-bottom: 10px; }
  .th-accent .eyebrow { color: inherit; opacity: .85; }
  h2.title { margin: 0 0 8px; font-size: clamp(22px, calc(var(--ts, 38px) * .62 + 1.2vw), var(--ts, 38px)); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0; opacity: .72; line-height: 1.8; max-width: 720px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 24px; border-radius: 999px; background: var(--A); color: #fff; transition: transform .25s, box-shadow .25s, opacity .2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--A); } .btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .btn.ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; } .btn.sm { padding: 9px 16px; font-size: 14px; }
  .th-accent .btn:not(.ghost) { background: #fff; color: var(--A2); }
  .bs-rounded .btn { border-radius: 12px; } .bs-square .btn { border-radius: 0; } .bs-outline .btn:not(.ghost) { background: transparent; color: var(--A); border: 1.5px solid var(--A); }
  .bs-underline .btn { background: none; color: var(--A); padding-inline: 0; border-radius: 0; border-bottom: 2px solid var(--A); }
  .bordered .pc, .bordered .panel { border: 1px solid var(--LINE); }
  .panel { background: var(--CARD); border-radius: var(--r, 22px); box-shadow: var(--sh); padding: clamp(16px, 2.4vw, 28px); }
  .grid { display: grid; gap: var(--gap, 18px); grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr)); }
  @media (max-width: 860px) { .grid { grid-template-columns: repeat(var(--mcols, 2), minmax(0, 1fr)); } }
  .rail { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, calc((100% - var(--gap) * (var(--cols, 4) - 1)) / var(--cols, 4))); gap: var(--gap, 18px); overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; }
  @media (max-width: 860px) { .rail { grid-auto-columns: calc((100% - var(--gap)) / var(--mcols, 2) - 8px); } }
  .rail > * { scroll-snap-align: start; }
  .pc { position: relative; display: flex; flex-direction: column; background: var(--CARD); border-radius: var(--r, 22px); overflow: hidden; box-shadow: var(--sh); transition: transform .35s; color: inherit; }
  .pc:hover { transform: translateY(-4px); } .pc.oos { opacity: .55; }
  .ph { position: relative; display: block; aspect-ratio: var(--ratio, 1); background: color-mix(in srgb, currentColor 6%, transparent); }
  .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .badges { position: absolute; inset: 10px 10px auto 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .bdg { font-size: 11px; font-weight: 800; padding: 4px 9px; border-radius: 999px; background: var(--A); color: #fff; line-height: 1.4; }
  .bdg.alt { background: #111; } .bdg.ok { background: #15803d; } .bdg.warn { background: #b45309; } .bdg.soft { background: #fff; color: #111; }
  .pb { padding: 12px 14px 14px; display: grid; gap: 6px; flex: 1; align-content: start; }
  .pn { color: inherit; text-decoration: none; font-weight: 700; line-height: 1.5; font-size: .95em; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pr b { color: var(--A); } .th-accent .pr b { color: inherit; } .pr s { opacity: .5; font-size: .85em; }
  .rt { font-size: 13px; color: #d4a017; } .rt small { opacity: .7; color: inherit; }
  .pb .btn { margin-top: auto; width: 100%; }
  .chip { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 999px; border: 1.5px solid var(--LINE); background: var(--CARD); color: inherit; font: inherit; font-size: 14px; cursor: pointer; transition: all .25s; }
  .chip:hover { border-color: var(--A); } .chip.on { background: var(--A); border-color: var(--A); color: #fff; }
  .muted { opacity: .65; } .center { text-align: center; }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: var(--r, 22px); min-height: 220px; }
  @keyframes sk { to { background-position: -200% 0; } }
  .hints { margin: 0 0 18px; padding: 14px 18px; border-radius: 14px; background: #fff8e1; color: #5b4300; border: 1px dashed #e0b84a; font-size: 13px; line-height: 1.8; }
  .hints ul { margin: 6px 0 0; padding-inline-start: 18px; }
  /* reveal motion */
  .sec .wrap > * { transition: opacity var(--ms, .7s) ease, transform var(--ms, .7s) cubic-bezier(.2,.7,.2,1), filter var(--ms, .7s); }
  :host(:not([in])) .an-fade .wrap > * { opacity: 0; }
  :host(:not([in])) .an-rise .wrap > * { opacity: 0; transform: translateY(28px); }
  :host(:not([in])) .an-zoom .wrap > * { opacity: 0; transform: scale(.94); }
  :host(:not([in])) .an-blur .wrap > * { opacity: 0; filter: blur(12px); }
  :host(:not([in])) .an-slide .wrap > * { opacity: 0; transform: translateX(40px); }
  .stagger .wrap > *:nth-child(2) { transition-delay: .08s; } .stagger .wrap > *:nth-child(3) { transition-delay: .16s; } .stagger .wrap > *:nth-child(4) { transition-delay: .24s; }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } :host .sec .wrap > * { opacity: 1 !important; transform: none !important; filter: none !important; } }
  `;
    A5 = I7;
    ht5([
      n4({ type: Object })
    ], A5.prototype, "config");
    yt5 = (t3, e5, r6) => new Date(t3, e5 - 1, r6, 0, 0, 0);
    F3 = (t3, e5 = false) => new Intl.DateTimeFormat(e5 ? "en-GB" : "ar-SA-u-ca-gregory-nu-latn", { day: "numeric", month: "long" }).format(t3);
    vt5 = (t3) => {
      const e5 = String(t3.preview_date || "").slice(0, 10);
      if (e5 && (H6() || window.__twDemo)) {
        const r6 = /* @__PURE__ */ new Date(e5 + "T12:00:00");
        if (!isNaN(+r6)) return r6;
      }
      return ut5();
    };
    wt5 = Object.defineProperty;
    _t5 = (t3, e5, r6, n5) => {
      for (var a3 = void 0, i5 = t3.length - 1, o6; i5 >= 0; i5--)
        (o6 = t3[i5]) && (a3 = o6(e5, r6, a3) || a3);
      return a3 && wt5(e5, r6, a3), a3;
    };
    B5 = class B6 extends A5 {
      constructor() {
        super(...arguments), this.prods = [];
      }
      willUpdate(e5) {
        e5.has("config") && et5(this.c.products, y6(this.c.auto_source, "offers"), g6(this.c.limit, 3)).then((r6) => this.prods = lt5(r6.items.filter((n5) => n5.available), true));
      }
      render() {
        const e5 = this.c, r6 = W5(), n5 = vt5(e5), a3 = n5.getFullYear(), i5 = n5.getMonth() + 1, o6 = g6(e5.pay_day, 27), s4 = y6(e5.pay_shift, "before");
        let u6 = G5(a3, i5, o6, s4);
        +n5 > +u6 + g6(e5.after_days, 4) * 864e5 && (u6 = G5(i5 === 12 ? a3 + 1 : a3, i5 === 12 ? 1 : i5 + 1, o6, s4));
        const m5 = G5(i5 === 1 ? a3 - 1 : a3, i5 === 1 ? 12 : i5 - 1, o6, s4), d3 = Math.ceil((+u6 - +n5) / 864e5), f5 = Math.floor((+n5 - +m5) / 864e5);
        let b5 = d3 <= 0 ? "on" : d3 <= g6(e5.before_days, 5) ? "before" : "mid";
        d3 < 0 && -d3 > g6(e5.after_days, 4) && (b5 = "mid");
        const _4 = p3(e5.citizen, false) && n5.getDate() >= 10 && n5.getDate() <= 11;
        if (b5 === "mid" && !_4 && !p3(e5.show_mid, false)) return this.hints([c4(`\u0627\u0644\u0639\u0646\u0635\u0631 \u064A\u0638\u0647\u0631 \u0642\u0628\u0644 \u0627\u0644\u0631\u0627\u062A\u0628 \u0628\u0640 ${g6(e5.before_days, 5)} \u0623\u064A\u0627\u0645 \u0648\u0628\u0639\u062F\u0647 \u0628\u0640 ${g6(e5.after_days, 4)} \u0623\u064A\u0627\u0645. \u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u0642\u0627\u062F\u0645: ${F3(u6, r6)}.`, `Shows ${g6(e5.before_days, 5)} days before payday. Next payday: ${F3(u6, r6)}.`)]) || A;
        const k5 = _4 ? [h6(e5.citizen_title, c4("\u0646\u0632\u0644 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0637\u0646", "Citizen Account is paid")), h6(e5.citizen_text, c4("\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0630\u0643\u064A\u0629 \u062A\u0646\u0627\u0633\u0628 \u0645\u064A\u0632\u0627\u0646\u064A\u062A\u0643", "Smart picks for your budget"))] : b5 === "on" ? [h6(e5.on_title, c4("\u0646\u0632\u0644 \u0627\u0644\u0631\u0627\u062A\u0628 \u{1F389}", "Payday \u{1F389}")), h6(e5.on_text, c4("\u0648\u0642\u062A \u062A\u062F\u0644\u0651\u0644 \u0646\u0641\u0633\u0643\u060C \u0648\u0627\u0644\u0639\u0631\u0648\u0636 \u0628\u0627\u0646\u062A\u0638\u0627\u0631\u0643", "Time to treat yourself"))] : b5 === "before" ? [h6(e5.before_title, c4(`\u0628\u0627\u0642\u064A ${d3} ${d3 > 2 ? "\u0623\u064A\u0627\u0645" : "\u064A\u0648\u0645"} \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u062A\u0628`, `${d3} days to payday`)), h6(e5.before_text, c4("\u0639\u0628\u0651 \u0633\u0644\u062A\u0643 \u0645\u0646 \u0627\u0644\u062D\u064A\u0646\u060C \u0648\u0623\u0648\u0644 \u0645\u0627 \u064A\u0646\u0632\u0644 \u0627\u0644\u0631\u0627\u062A\u0628 \u0643\u0645\u0651\u0644 \u0637\u0644\u0628\u0643", "Fill your cart now and check out on payday"))] : [h6(e5.mid_title, c4("\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u062A\u0646\u0627\u0633\u0628 \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0634\u0647\u0631", "Mid-month picks")), h6(e5.mid_text, c4("\u0623\u0633\u0639\u0627\u0631 \u062A\u0631\u064A\u062D\u0643 \u0644\u064A\u0646 \u0627\u0644\u0631\u0627\u062A\u0628", "Easy prices until payday"))], C5 = b5 === "on" ? 100 : Math.max(4, Math.min(100, Math.round(f5 / Math.max(1, f5 + d3) * 100)));
        return this.shell(b2`<div class="pd" style=${`--p1:${e5.color1 || "#103b2c"};--p2:${e5.color2 || "#3ddc97"};--pct:${C5}`}>
      ${p3(e5.ring, true) ? b2`<div class="ring"><b>${b5 === "on" ? "\u{1F4B8}" : d3}<small>${b5 === "on" ? c4("\u0627\u0644\u064A\u0648\u0645", "today") : c4("\u064A\u0648\u0645", "days")}</small></b></div>` : b2`<span></span>`}
      <div><h3>${k5[0]}</h3><p>${k5[1]}</p>${p3(e5.show_date, true) ? b2`<p style="font-size:13px;margin-top:6px">${c4("\u0645\u0648\u0639\u062F \u0627\u0644\u0631\u0627\u062A\u0628", "Payday")}: ${F3(u6, r6)}</p>` : ""}
        ${this.prods.length && p3(e5.show_products, true) ? b2`<div class="mini">${this.prods.map((v6) => b2`<a href=${v6.url}><img src=${v6.image} alt="" />${v6.name}</a>`)}</div>` : ""}</div>
      <a class="btn" href=${String(e5.link || "/")}>${h6(e5.button, b5 === "before" ? c4("\u0639\u0628\u0651 \u0633\u0644\u062A\u0643", "Fill your cart") : c4("\u062A\u0633\u0648\u0651\u0642 \u0627\u0644\u0622\u0646", "Shop now"))}</a></div>`, { title: "" });
      }
    };
    B5.styles = [A5.base, i`
    .pd { display: grid; grid-template-columns: auto 1fr auto; gap: 22px; align-items: center; padding: clamp(18px, 3vw, 30px); border-radius: var(--r); background: linear-gradient(120deg, var(--p1, #103b2c), color-mix(in srgb, var(--p1, #103b2c) 70%, #000)); color: #fff; box-shadow: var(--sh); }
    @media (max-width: 860px) { .pd { grid-template-columns: 1fr; text-align: center; justify-items: center; } }
    .ring { width: 96px; height: 96px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(var(--p2, #3ddc97) calc(var(--pct) * 1%), #ffffff22 0); position: relative; }
    .ring::before { content: ''; position: absolute; inset: 8px; border-radius: 50%; background: var(--p1, #103b2c); } .ring b { position: relative; font-size: 24px; line-height: 1; text-align: center; } .ring small { display: block; font-size: 11px; opacity: .8; }
    h3 { margin: 0 0 6px; font-size: clamp(22px, 3vw, 34px); } p { margin: 0; opacity: .85; line-height: 1.7; }
    .btn { background: var(--p2, #3ddc97); color: #062b1f; } .mini { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; } .mini a { display: flex; align-items: center; gap: 8px; background: #ffffff1a; color: #fff; text-decoration: none; padding: 5px 10px 5px 5px; border-radius: 12px; font-size: 12px; }
    .mini img { width: 34px; height: 34px; border-radius: 8px; object-fit: cover; }
    @media (max-width: 860px) { .mini { justify-content: center; } }
  `];
    S4 = B5;
    _t5([
      r5()
    ], S4.prototype, "prods");
    typeof S4 < "u" && S4.registerSallaComponent("salla-mawaqeet-payday");
  }
});

// demo/entry.js
init_lit();
i4.registerSallaComponent = function(n5) {
  if (!customElements.get(n5)) customElements.define(n5, this);
};
await Promise.resolve().then(() => (init_mawaqeet_calendar(), mawaqeet_calendar_exports));
await Promise.resolve().then(() => (init_mawaqeet_countdown(), mawaqeet_countdown_exports));
await Promise.resolve().then(() => (init_mawaqeet_decor(), mawaqeet_decor_exports));
await Promise.resolve().then(() => (init_mawaqeet_hero(), mawaqeet_hero_exports));
await Promise.resolve().then(() => (init_mawaqeet_payday(), mawaqeet_payday_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
