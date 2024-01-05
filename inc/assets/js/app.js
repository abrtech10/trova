function startCounter(t, e) {
    var n = $(t),
        r = n.length,
        o = [];
    for (i = 0; i < r; i++) o[i] = parseInt(n[i].getAttribute("data-change-counter"));
    for (j = 0; j < r; j++)
        !(function (t, i, r) {
            var o = t;
            setInterval(function () {
                o < i && (o++, (n[r].innerHTML = o));
            }, e / (i - o));
        })(0, o[j], j);
}
function duplicateText(t, e) {
    t.addClass("duplicateTextWrap");
    var i = t.text();
    t.html("");
    for (var n = 0; n < 2; n++) {
        t.append('<p class="pt_inner_' + n + '"></p>');
        for (var r = 0; r < i.length; r++)
            " " == i.split("")[r]
                ? t.find(".pt_inner_" + n).append(" ")
                : t.find(".pt_inner_" + n).append('<span class="pti_item" style="transition:all ease-out ' + e / 1e3 + "s " + (e / (1e3 * i.length)) * r + 's">' + i.split("")[r] + "</span>");
    }
}
function setContainerWidthToRigthEnd() {
    var t = $(".container").outerWidth(),
        e = winW - t;
    $(".setContainerWidthToRigthEnd").outerWidth(t + e / 2);
}
if (
    ((function (t, e) {
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = t.document
                  ? e(t, !0)
                  : function (t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return e(t);
                    })
            : e(t);
    })("undefined" != typeof window ? window : this, function (t, e) {
        function i(t) {
            var e = t.length,
                i = rt.type(t);
            return "function" !== i && !rt.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
        }
        function n(t, e, i) {
            if (rt.isFunction(e))
                return rt.grep(t, function (t, n) {
                    return !!e.call(t, n, t) !== i;
                });
            if (e.nodeType)
                return rt.grep(t, function (t) {
                    return (t === e) !== i;
                });
            if ("string" == typeof e) {
                if (pt.test(e)) return rt.filter(e, t, i);
                e = rt.filter(e, t);
            }
            return rt.grep(t, function (t) {
                return rt.inArray(t, e) >= 0 !== i;
            });
        }
        function r(t, e) {
            do {
                t = t[e];
            } while (t && 1 !== t.nodeType);
            return t;
        }
        function o(t) {
            var e = (_t[t] = {});
            return (
                rt.each(t.match(yt) || [], function (t, i) {
                    e[i] = !0;
                }),
                e
            );
        }
        function s() {
            ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a));
        }
        function a() {
            (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (s(), rt.ready());
        }
        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(St, "-$1").toLowerCase();
                if ("string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || ("false" !== i && ("null" === i ? null : +i + "" === i ? +i : Tt.test(i) ? rt.parseJSON(i) : i));
                    } catch (t) {}
                    rt.data(t, e, i);
                } else i = void 0;
            }
            return i;
        }
        function c(t) {
            var e;
            for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0;
        }
        function u(t, e, i, n) {
            if (rt.acceptData(t)) {
                var r,
                    o,
                    s = rt.expando,
                    a = t.nodeType,
                    l = a ? rt.cache : t,
                    c = a ? t[s] : t[s] && s;
                if ((c && l[c] && (n || l[c].data)) || void 0 !== i || "string" != typeof e)
                    return (
                        c || (c = a ? (t[s] = Y.pop() || rt.guid++) : s),
                        l[c] || (l[c] = a ? {} : { toJSON: rt.noop }),
                        ("object" == typeof e || "function" == typeof e) && (n ? (l[c] = rt.extend(l[c], e)) : (l[c].data = rt.extend(l[c].data, e))),
                        (o = l[c]),
                        n || (o.data || (o.data = {}), (o = o.data)),
                        void 0 !== i && (o[rt.camelCase(e)] = i),
                        "string" == typeof e ? null == (r = o[e]) && (r = o[rt.camelCase(e)]) : (r = o),
                        r
                    );
            }
        }
        function d(t, e, i) {
            if (rt.acceptData(t)) {
                var n,
                    r,
                    o = t.nodeType,
                    s = o ? rt.cache : t,
                    a = o ? t[rt.expando] : rt.expando;
                if (s[a]) {
                    if (e && (n = i ? s[a] : s[a].data)) {
                        rt.isArray(e) ? (e = e.concat(rt.map(e, rt.camelCase))) : e in n ? (e = [e]) : ((e = rt.camelCase(e)), (e = e in n ? [e] : e.split(" "))), (r = e.length);
                        for (; r--; ) delete n[e[r]];
                        if (i ? !c(n) : !rt.isEmptyObject(n)) return;
                    }
                    (i || (delete s[a].data, c(s[a]))) && (o ? rt.cleanData([t], !0) : it.deleteExpando || s != s.window ? delete s[a] : (s[a] = null));
                }
            }
        }
        function p() {
            return !0;
        }
        function h() {
            return !1;
        }
        function f() {
            try {
                return ft.activeElement;
            } catch (t) {}
        }
        function m(t) {
            var e = Lt.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement) for (; e.length; ) i.createElement(e.pop());
            return i;
        }
        function g(t, e) {
            var i,
                n,
                r = 0,
                o = typeof t.getElementsByTagName !== xt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== xt ? t.querySelectorAll(e || "*") : void 0;
            if (!o) for (o = [], i = t.childNodes || t; null != (n = i[r]); r++) !e || rt.nodeName(n, e) ? o.push(n) : rt.merge(o, g(n, e));
            return void 0 === e || (e && rt.nodeName(t, e)) ? rt.merge([t], o) : o;
        }
        function v(t) {
            $t.test(t.type) && (t.defaultChecked = t.checked);
        }
        function y(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
        }
        function _(t) {
            return (t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type), t;
        }
        function b(t) {
            var e = Xt.exec(t.type);
            return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
        }
        function w(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) rt._data(i, "globalEval", !e || rt._data(e[n], "globalEval"));
        }
        function x(t, e) {
            if (1 === e.nodeType && rt.hasData(t)) {
                var i,
                    n,
                    r,
                    o = rt._data(t),
                    s = rt._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, (s.events = {});
                    for (i in a) for (n = 0, r = a[i].length; r > n; n++) rt.event.add(e, i, a[i][n]);
                }
                s.data && (s.data = rt.extend({}, s.data));
            }
        }
        function T(t, e) {
            var i, n, r;
            if (1 === e.nodeType) {
                if (((i = e.nodeName.toLowerCase()), !it.noCloneEvent && e[rt.expando])) {
                    r = rt._data(e);
                    for (n in r.events) rt.removeEvent(e, n, r.handle);
                    e.removeAttribute(rt.expando);
                }
                "script" === i && e.text !== t.text
                    ? ((_(e).text = t.text), b(e))
                    : "object" === i
                    ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML))
                    : "input" === i && $t.test(t.type)
                    ? ((e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value))
                    : "option" === i
                    ? (e.defaultSelected = e.selected = t.defaultSelected)
                    : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
            }
        }
        function S(e, i) {
            var n,
                r = rt(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : rt.css(r[0], "display");
            return r.detach(), o;
        }
        function C(t) {
            var e = ft,
                i = Kt[t];
            return (
                i ||
                    ((i = S(t, e)),
                    ("none" !== i && i) ||
                        ((Zt = (Zt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)), (e = (Zt[0].contentWindow || Zt[0].contentDocument).document), e.write(), e.close(), (i = S(t, e)), Zt.detach()),
                    (Kt[t] = i)),
                i
            );
        }
        function k(t, e) {
            return {
                get: function () {
                    var i = t();
                    if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments);
                },
            };
        }
        function P(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = de.length; r--; ) if ((e = de[r] + i) in t) return e;
            return n;
        }
        function E(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++)
                (n = t[s]),
                    n.style &&
                        ((o[s] = rt._data(n, "olddisplay")),
                        (i = n.style.display),
                        e
                            ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pt(n) && (o[s] = rt._data(n, "olddisplay", C(n.nodeName))))
                            : ((r = Pt(n)), ((i && "none" !== i) || !r) && rt._data(n, "olddisplay", r ? i : rt.css(n, "display"))));
            for (s = 0; a > s; s++) (n = t[s]), n.style && ((e && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = e ? o[s] || "" : "none"));
            return t;
        }
        function $(t, e, i) {
            var n = ae.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
        }
        function A(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
                "margin" === i && (s += rt.css(t, i + kt[o], !0, r)),
                    n
                        ? ("content" === i && (s -= rt.css(t, "padding" + kt[o], !0, r)), "margin" !== i && (s -= rt.css(t, "border" + kt[o] + "Width", !0, r)))
                        : ((s += rt.css(t, "padding" + kt[o], !0, r)), "padding" !== i && (s += rt.css(t, "border" + kt[o] + "Width", !0, r)));
            return s;
        }
        function O(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Jt(t),
                s = it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (((r = te(t, e, o)), (0 > r || null == r) && (r = t.style[e]), ie.test(r))) return r;
                (n = s && (it.boxSizingReliable() || r === t.style[e])), (r = parseFloat(r) || 0);
            }
            return r + A(t, e, i || (s ? "border" : "content"), n, o) + "px";
        }
        function M(t, e, i, n, r) {
            return new M.prototype.init(t, e, i, n, r);
        }
        function D() {
            return (
                setTimeout(function () {
                    pe = void 0;
                }),
                (pe = rt.now())
            );
        }
        function N(t, e) {
            var i,
                n = { height: t },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) (i = kt[r]), (n["margin" + i] = n["padding" + i] = t);
            return e && (n.opacity = n.width = t), n;
        }
        function L(t, e, i) {
            for (var n, r = (ye[e] || []).concat(ye["*"]), o = 0, s = r.length; s > o; o++) if ((n = r[o].call(i, e, t))) return n;
        }
        function R(t, e, i) {
            var n,
                r,
                o,
                s,
                a,
                l,
                c,
                u = this,
                d = {},
                p = t.style,
                h = t.nodeType && Pt(t),
                f = rt._data(t, "fxshow");
            i.queue ||
                ((a = rt._queueHooks(t, "fx")),
                null == a.unqueued &&
                    ((a.unqueued = 0),
                    (l = a.empty.fire),
                    (a.empty.fire = function () {
                        a.unqueued || l();
                    })),
                a.unqueued++,
                u.always(function () {
                    u.always(function () {
                        a.unqueued--, rt.queue(t, "fx").length || a.empty.fire();
                    });
                })),
                1 === t.nodeType &&
                    ("height" in e || "width" in e) &&
                    ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    (c = rt.css(t, "display")),
                    "inline" === ("none" === c ? rt._data(t, "olddisplay") || C(t.nodeName) : c) && "none" === rt.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? (p.zoom = 1) : (p.display = "inline-block"))),
                i.overflow &&
                    ((p.overflow = "hidden"),
                    it.shrinkWrapBlocks() ||
                        u.always(function () {
                            (p.overflow = i.overflow[0]), (p.overflowX = i.overflow[1]), (p.overflowY = i.overflow[2]);
                        }));
            for (n in e)
                if (((r = e[n]), fe.exec(r))) {
                    if ((delete e[n], (o = o || "toggle" === r), r === (h ? "hide" : "show"))) {
                        if ("show" !== r || !f || void 0 === f[n]) continue;
                        h = !0;
                    }
                    d[n] = (f && f[n]) || rt.style(t, n);
                } else c = void 0;
            if (rt.isEmptyObject(d)) "inline" === ("none" === c ? C(t.nodeName) : c) && (p.display = c);
            else {
                f ? "hidden" in f && (h = f.hidden) : (f = rt._data(t, "fxshow", {})),
                    o && (f.hidden = !h),
                    h
                        ? rt(t).show()
                        : u.done(function () {
                              rt(t).hide();
                          }),
                    u.done(function () {
                        var e;
                        rt._removeData(t, "fxshow");
                        for (e in d) rt.style(t, e, d[e]);
                    });
                for (n in d) (s = L(h ? f[n] : 0, n, u)), n in f || ((f[n] = s.start), h && ((s.end = s.start), (s.start = "width" === n || "height" === n ? 1 : 0)));
            }
        }
        function j(t, e) {
            var i, n, r, o, s;
            for (i in t)
                if (((n = rt.camelCase(i)), (r = e[n]), (o = t[i]), rt.isArray(o) && ((r = o[1]), (o = t[i] = o[0])), i !== n && ((t[n] = o), delete t[i]), (s = rt.cssHooks[n]) && "expand" in s)) {
                    (o = s.expand(o)), delete t[n];
                    for (i in o) i in t || ((t[i] = o[i]), (e[i] = r));
                } else e[n] = r;
        }
        function I(t, e, i) {
            var n,
                r,
                o = 0,
                s = ve.length,
                a = rt.Deferred().always(function () {
                    delete l.elem;
                }),
                l = function () {
                    if (r) return !1;
                    for (var e = pe || D(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                    return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1);
                },
                c = a.promise({
                    elem: t,
                    props: rt.extend({}, e),
                    opts: rt.extend(!0, { specialEasing: {} }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: pe || D(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = rt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n;
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
                    },
                }),
                u = c.props;
            for (j(u, c.opts.specialEasing); s > o; o++) if ((n = ve[o].call(c, t, u, c.opts))) return n;
            return (
                rt.map(u, L, c),
                rt.isFunction(c.opts.start) && c.opts.start.call(t, c),
                rt.fx.timer(rt.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            );
        }
        function z(t) {
            return function (e, i) {
                "string" != typeof e && ((i = e), (e = "*"));
                var n,
                    r = 0,
                    o = e.toLowerCase().match(yt) || [];
                if (rt.isFunction(i)) for (; (n = o[r++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
            };
        }
        function F(t, e, i, n) {
            function r(a) {
                var l;
                return (
                    (o[a] = !0),
                    rt.each(t[a] || [], function (t, a) {
                        var c = a(e, i, n);
                        return "string" != typeof c || s || o[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), r(c), !1);
                    }),
                    l
                );
            }
            var o = {},
                s = t === qe;
            return r(e.dataTypes[0]) || (!o["*"] && r("*"));
        }
        function H(t, e) {
            var i,
                n,
                r = rt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && rt.extend(!0, t, i), t;
        }
        function q(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (s in a)
                    if (a[s] && a[s].test(r)) {
                        l.unshift(s);
                        break;
                    }
            if (l[0] in i) o = l[0];
            else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break;
                    }
                    n || (n = s);
                }
                o = o || n;
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
        }
        function B(t, e, i, n) {
            var r,
                o,
                s,
                a,
                l,
                c = {},
                u = t.dataTypes.slice();
            if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o; )
                if ((t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = u.shift())))
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if (((a = r.split(" ")), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]]))) {
                                    !0 === s ? (s = c[r]) : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                                    break;
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else
                                try {
                                    e = s(e);
                                } catch (t) {
                                    return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o };
                                }
                    }
            return { state: "success", data: e };
        }
        function W(t, e, i, n) {
            var r;
            if (rt.isArray(e))
                rt.each(e, function (e, r) {
                    i || Ve.test(t) ? n(t, r) : W(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n);
                });
            else if (i || "object" !== rt.type(e)) n(t, e);
            else for (r in e) W(t + "[" + r + "]", e[r], i, n);
        }
        function V() {
            try {
                return new t.XMLHttpRequest();
            } catch (t) {}
        }
        function X() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP");
            } catch (t) {}
        }
        function U(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
        }
        var Y = [],
            G = Y.slice,
            Q = Y.concat,
            Z = Y.push,
            K = Y.indexOf,
            J = {},
            tt = J.toString,
            et = J.hasOwnProperty,
            it = {},
            nt = "1.11.2",
            rt = function (t, e) {
                return new rt.fn.init(t, e);
            },
            ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^-ms-/,
            at = /-([\da-z])/gi,
            lt = function (t, e) {
                return e.toUpperCase();
            };
        (rt.fn = rt.prototype = {
            jquery: nt,
            constructor: rt,
            selector: "",
            length: 0,
            toArray: function () {
                return G.call(this);
            },
            get: function (t) {
                return null != t ? (0 > t ? this[t + this.length] : this[t]) : G.call(this);
            },
            pushStack: function (t) {
                var e = rt.merge(this.constructor(), t);
                return (e.prevObject = this), (e.context = this.context), e;
            },
            each: function (t, e) {
                return rt.each(this, t, e);
            },
            map: function (t) {
                return this.pushStack(
                    rt.map(this, function (e, i) {
                        return t.call(e, i, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(G.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: Z,
            sort: Y.sort,
            splice: Y.splice,
        }),
            (rt.extend = rt.fn.extend = function () {
                var t,
                    e,
                    i,
                    n,
                    r,
                    o,
                    s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && ((s = this), a--); l > a; a++)
                    if (null != (r = arguments[a]))
                        for (n in r)
                            (t = s[n]),
                                (i = r[n]),
                                s !== i &&
                                    (c && i && (rt.isPlainObject(i) || (e = rt.isArray(i)))
                                        ? (e ? ((e = !1), (o = t && rt.isArray(t) ? t : [])) : (o = t && rt.isPlainObject(t) ? t : {}), (s[n] = rt.extend(c, o, i)))
                                        : void 0 !== i && (s[n] = i));
                return s;
            }),
            rt.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t);
                },
                noop: function () {},
                isFunction: function (t) {
                    return "function" === rt.type(t);
                },
                isArray:
                    Array.isArray ||
                    function (t) {
                        return "array" === rt.type(t);
                    },
                isWindow: function (t) {
                    return null != t && t == t.window;
                },
                isNumeric: function (t) {
                    return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0;
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0;
                },
                isPlainObject: function (t) {
                    var e;
                    if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                    } catch (t) {
                        return !1;
                    }
                    if (it.ownLast) for (e in t) return et.call(t, e);
                    for (e in t);
                    return void 0 === e || et.call(t, e);
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[tt.call(t)] || "object" : typeof t;
                },
                globalEval: function (e) {
                    e &&
                        rt.trim(e) &&
                        (
                            t.execScript ||
                            function (e) {
                                t.eval.call(t, e);
                            }
                        )(e);
                },
                camelCase: function (t) {
                    return t.replace(st, "ms-").replace(at, lt);
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                },
                each: function (t, e, n) {
                    var r = 0,
                        o = t.length,
                        s = i(t);
                    if (n) {
                        if (s) for (; o > r && !1 !== e.apply(t[r], n); r++);
                        else for (r in t) if (!1 === e.apply(t[r], n)) break;
                    } else if (s) for (; o > r && !1 !== e.call(t[r], r, t[r]); r++);
                    else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                    return t;
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(ot, "");
                },
                makeArray: function (t, e) {
                    var n = e || [];
                    return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n;
                },
                inArray: function (t, e, i) {
                    var n;
                    if (e) {
                        if (K) return K.call(e, t, i);
                        for (n = e.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0; n > i; i++) if (i in e && e[i] === t) return i;
                    }
                    return -1;
                },
                merge: function (t, e) {
                    for (var i = +e.length, n = 0, r = t.length; i > n; ) t[r++] = e[n++];
                    if (i !== i) for (; void 0 !== e[n]; ) t[r++] = e[n++];
                    return (t.length = r), t;
                },
                grep: function (t, e, i) {
                    for (var n = [], r = 0, o = t.length, s = !i; o > r; r++) !e(t[r], r) !== s && n.push(t[r]);
                    return n;
                },
                map: function (t, e, n) {
                    var r,
                        o = 0,
                        s = t.length,
                        a = i(t),
                        l = [];
                    if (a) for (; s > o; o++) null != (r = e(t[o], o, n)) && l.push(r);
                    else for (o in t) null != (r = e(t[o], o, n)) && l.push(r);
                    return Q.apply([], l);
                },
                guid: 1,
                proxy: function (t, e) {
                    var i, n, r;
                    return (
                        "string" == typeof e && ((r = t[e]), (e = t), (t = r)),
                        rt.isFunction(t)
                            ? ((i = G.call(arguments, 2)),
                              (n = function () {
                                  return t.apply(e || this, i.concat(G.call(arguments)));
                              }),
                              (n.guid = t.guid = t.guid || rt.guid++),
                              n)
                            : void 0
                    );
                },
                now: function () {
                    return +new Date();
                },
                support: it,
            }),
            rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                J["[object " + e + "]"] = e.toLowerCase();
            });
        var ct = (function (t) {
            function e(t, e, i, n) {
                var r, o, s, a, c, d, p, h, f, m;
                if (((e ? e.ownerDocument || e : I) !== A && $(e), (e = e || A), (i = i || []), (a = e.nodeType), "string" != typeof t || !t || (1 !== a && 9 !== a && 11 !== a))) return i;
                if (!n && M) {
                    if (11 !== a && (r = gt.exec(t)))
                        if ((s = r[1])) {
                            if (9 === a) {
                                if (!(o = e.getElementById(s)) || !o.parentNode) return i;
                                if (o.id === s) return i.push(o), i;
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && R(e, o) && o.id === s) return i.push(o), i;
                        } else {
                            if (r[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = r[3]) && _.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(s)), i;
                        }
                    if (_.qsa && (!D || !D.test(t))) {
                        if (((h = p = j), (f = e), (m = 1 !== a && t), 1 === a && "object" !== e.nodeName.toLowerCase())) {
                            for (d = T(t), (p = e.getAttribute("id")) ? (h = p.replace(yt, "\\$&")) : e.setAttribute("id", h), h = "[id='" + h + "'] ", c = d.length; c--; ) d[c] = h + u(d[c]);
                            (f = (vt.test(t) && l(e.parentNode)) || e), (m = d.join(","));
                        }
                        if (m)
                            try {
                                return Q.apply(i, f.querySelectorAll(m)), i;
                            } catch (t) {
                            } finally {
                                p || e.removeAttribute("id");
                            }
                    }
                }
                return C(t.replace(st, "$1"), e, i, n);
            }
            function i() {
                function t(i, n) {
                    return e.push(i + " ") > b.cacheLength && delete t[e.shift()], (t[i + " "] = n);
                }
                var e = [];
                return t;
            }
            function n(t) {
                return (t[j] = !0), t;
            }
            function r(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e);
                } catch (t) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), (e = null);
                }
            }
            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--; ) b.attrHandle[i[n]] = e;
            }
            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (n) return n;
                if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
                return t ? 1 : -1;
            }
            function a(t) {
                return n(function (e) {
                    return (
                        (e = +e),
                        n(function (i, n) {
                            for (var r, o = t([], i.length, e), s = o.length; s--; ) i[(r = o[s])] && (i[r] = !(n[r] = i[r]));
                        })
                    );
                });
            }
            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t;
            }
            function c() {}
            function u(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n;
            }
            function d(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = F++;
                return e.first
                    ? function (e, i, o) {
                          for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, o);
                      }
                    : function (e, i, s) {
                          var a,
                              l,
                              c = [z, o];
                          if (s) {
                              for (; (e = e[n]); ) if ((1 === e.nodeType || r) && t(e, i, s)) return !0;
                          } else
                              for (; (e = e[n]); )
                                  if (1 === e.nodeType || r) {
                                      if (((l = e[j] || (e[j] = {})), (a = l[n]) && a[0] === z && a[1] === o)) return (c[2] = a[2]);
                                      if (((l[n] = c), (c[2] = t(e, i, s)))) return !0;
                                  }
                      };
            }
            function p(t) {
                return t.length > 1
                    ? function (e, i, n) {
                          for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
                          return !0;
                      }
                    : t[0];
            }
            function h(t, i, n) {
                for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
                return n;
            }
            function f(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (o = t[a]) && (!i || i(o, n, r)) && (s.push(o), c && e.push(a));
                return s;
            }
            function m(t, e, i, r, o, s) {
                return (
                    r && !r[j] && (r = m(r)),
                    o && !o[j] && (o = m(o, s)),
                    n(function (n, s, a, l) {
                        var c,
                            u,
                            d,
                            p = [],
                            m = [],
                            g = s.length,
                            v = n || h(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || (!n && e) ? v : f(v, p, t, a, l),
                            _ = i ? (o || (n ? t : g || r) ? [] : s) : y;
                        if ((i && i(y, _, a, l), r)) for (c = f(_, m), r(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (_[m[u]] = !(y[m[u]] = d));
                        if (n) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], u = _.length; u--; ) (d = _[u]) && c.push((y[u] = d));
                                    o(null, (_ = []), c, l);
                                }
                                for (u = _.length; u--; ) (d = _[u]) && (c = o ? K(n, d) : p[u]) > -1 && (n[c] = !(s[c] = d));
                            }
                        } else (_ = f(_ === s ? _.splice(g, _.length) : _)), o ? o(null, s, _, l) : Q.apply(s, _);
                    })
                );
            }
            function g(t) {
                for (
                    var e,
                        i,
                        n,
                        r = t.length,
                        o = b.relative[t[0].type],
                        s = o || b.relative[" "],
                        a = o ? 1 : 0,
                        l = d(
                            function (t) {
                                return t === e;
                            },
                            s,
                            !0
                        ),
                        c = d(
                            function (t) {
                                return K(e, t) > -1;
                            },
                            s,
                            !0
                        ),
                        h = [
                            function (t, i, n) {
                                var r = (!o && (n || i !== k)) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                                return (e = null), r;
                            },
                        ];
                    r > a;
                    a++
                )
                    if ((i = b.relative[t[a].type])) h = [d(p(h), i)];
                    else {
                        if (((i = b.filter[t[a].type].apply(null, t[a].matches)), i[j])) {
                            for (n = ++a; r > n && !b.relative[t[n].type]; n++);
                            return m(a > 1 && p(h), a > 1 && u(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(st, "$1"), i, n > a && g(t.slice(a, n)), r > n && g((t = t.slice(n))), r > n && u(t));
                        }
                        h.push(i);
                    }
                return p(h);
            }
            function v(t, i) {
                var r = i.length > 0,
                    o = t.length > 0,
                    s = function (n, s, a, l, c) {
                        var u,
                            d,
                            p,
                            h = 0,
                            m = "0",
                            g = n && [],
                            v = [],
                            y = k,
                            _ = n || (o && b.find.TAG("*", c)),
                            w = (z += null == y ? 1 : Math.random() || 0.1),
                            x = _.length;
                        for (c && (k = s !== A && s); m !== x && null != (u = _[m]); m++) {
                            if (o && u) {
                                for (d = 0; (p = t[d++]); )
                                    if (p(u, s, a)) {
                                        l.push(u);
                                        break;
                                    }
                                c && (z = w);
                            }
                            r && ((u = !p && u) && h--, n && g.push(u));
                        }
                        if (((h += m), r && m !== h)) {
                            for (d = 0; (p = i[d++]); ) p(g, v, s, a);
                            if (n) {
                                if (h > 0) for (; m--; ) g[m] || v[m] || (v[m] = Y.call(l));
                                v = f(v);
                            }
                            Q.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && e.uniqueSort(l);
                        }
                        return c && ((z = w), (k = y)), g;
                    };
                return r ? n(s) : s;
            }
            var y,
                _,
                b,
                w,
                x,
                T,
                S,
                C,
                k,
                P,
                E,
                $,
                A,
                O,
                M,
                D,
                N,
                L,
                R,
                j = "sizzle" + 1 * new Date(),
                I = t.document,
                z = 0,
                F = 0,
                H = i(),
                q = i(),
                B = i(),
                W = function (t, e) {
                    return t === e && (E = !0), 0;
                },
                V = 1 << 31,
                X = {}.hasOwnProperty,
                U = [],
                Y = U.pop,
                G = U.push,
                Q = U.push,
                Z = U.slice,
                K = function (t, e) {
                    for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
                    return -1;
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = et.replace("w", "w#"),
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
                rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                ot = new RegExp(tt + "+", "g"),
                st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                at = new RegExp("^" + tt + "*," + tt + "*"),
                lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ut = new RegExp(rt),
                dt = new RegExp("^" + it + "$"),
                pt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i"),
                },
                ht = /^(?:input|select|textarea|button)$/i,
                ft = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                vt = /[+~]/,
                yt = /'|\\/g,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                bt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
                },
                wt = function () {
                    $();
                };
            try {
                Q.apply((U = Z.call(I.childNodes)), I.childNodes), U[I.childNodes.length].nodeType;
            } catch (t) {
                Q = {
                    apply: U.length
                        ? function (t, e) {
                              G.apply(t, Z.call(e));
                          }
                        : function (t, e) {
                              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                              t.length = i - 1;
                          },
                };
            }
            (_ = e.support = {}),
                (x = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName;
                }),
                ($ = e.setDocument = function (t) {
                    var e,
                        i,
                        n = t ? t.ownerDocument || t : I;
                    return n !== A && 9 === n.nodeType && n.documentElement
                        ? ((A = n),
                          (O = n.documentElement),
                          (i = n.defaultView),
                          i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)),
                          (M = !x(n)),
                          (_.attributes = r(function (t) {
                              return (t.className = "i"), !t.getAttribute("className");
                          })),
                          (_.getElementsByTagName = r(function (t) {
                              return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length;
                          })),
                          (_.getElementsByClassName = mt.test(n.getElementsByClassName)),
                          (_.getById = r(function (t) {
                              return (O.appendChild(t).id = j), !n.getElementsByName || !n.getElementsByName(j).length;
                          })),
                          _.getById
                              ? ((b.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && M) {
                                        var i = e.getElementById(t);
                                        return i && i.parentNode ? [i] : [];
                                    }
                                }),
                                (b.filter.ID = function (t) {
                                    var e = t.replace(_t, bt);
                                    return function (t) {
                                        return t.getAttribute("id") === e;
                                    };
                                }))
                              : (delete b.find.ID,
                                (b.filter.ID = function (t) {
                                    var e = t.replace(_t, bt);
                                    return function (t) {
                                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                        return i && i.value === e;
                                    };
                                })),
                          (b.find.TAG = _.getElementsByTagName
                              ? function (t, e) {
                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0;
                                }
                              : function (t, e) {
                                    var i,
                                        n = [],
                                        r = 0,
                                        o = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; (i = o[r++]); ) 1 === i.nodeType && n.push(i);
                                        return n;
                                    }
                                    return o;
                                }),
                          (b.find.CLASS =
                              _.getElementsByClassName &&
                              function (t, e) {
                                  return M ? e.getElementsByClassName(t) : void 0;
                              }),
                          (N = []),
                          (D = []),
                          (_.qsa = mt.test(n.querySelectorAll)) &&
                              (r(function (t) {
                                  (O.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                      t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + tt + "*(?:''|\"\")"),
                                      t.querySelectorAll("[selected]").length || D.push("\\[" + tt + "*(?:value|" + J + ")"),
                                      t.querySelectorAll("[id~=" + j + "-]").length || D.push("~="),
                                      t.querySelectorAll(":checked").length || D.push(":checked"),
                                      t.querySelectorAll("a#" + j + "+*").length || D.push(".#.+[+~]");
                              }),
                              r(function (t) {
                                  var e = n.createElement("input");
                                  e.setAttribute("type", "hidden"),
                                      t.appendChild(e).setAttribute("name", "D"),
                                      t.querySelectorAll("[name=d]").length && D.push("name" + tt + "*[*^$|!~]?="),
                                      t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"),
                                      t.querySelectorAll("*,:x"),
                                      D.push(",.*:");
                              })),
                          (_.matchesSelector = mt.test((L = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector))) &&
                              r(function (t) {
                                  (_.disconnectedMatch = L.call(t, "div")), L.call(t, "[s!='']:x"), N.push("!=", rt);
                              }),
                          (D = D.length && new RegExp(D.join("|"))),
                          (N = N.length && new RegExp(N.join("|"))),
                          (e = mt.test(O.compareDocumentPosition)),
                          (R =
                              e || mt.test(O.contains)
                                  ? function (t, e) {
                                        var i = 9 === t.nodeType ? t.documentElement : t,
                                            n = e && e.parentNode;
                                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                    }
                                  : function (t, e) {
                                        if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                        return !1;
                                    }),
                          (W = e
                              ? function (t, e) {
                                    if (t === e) return (E = !0), 0;
                                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return (
                                        i ||
                                        ((i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1),
                                        1 & i || (!_.sortDetached && e.compareDocumentPosition(t) === i)
                                            ? t === n || (t.ownerDocument === I && R(I, t))
                                                ? -1
                                                : e === n || (e.ownerDocument === I && R(I, e))
                                                ? 1
                                                : P
                                                ? K(P, t) - K(P, e)
                                                : 0
                                            : 4 & i
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (t, e) {
                                    if (t === e) return (E = !0), 0;
                                    var i,
                                        r = 0,
                                        o = t.parentNode,
                                        a = e.parentNode,
                                        l = [t],
                                        c = [e];
                                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : P ? K(P, t) - K(P, e) : 0;
                                    if (o === a) return s(t, e);
                                    for (i = t; (i = i.parentNode); ) l.unshift(i);
                                    for (i = e; (i = i.parentNode); ) c.unshift(i);
                                    for (; l[r] === c[r]; ) r++;
                                    return r ? s(l[r], c[r]) : l[r] === I ? -1 : c[r] === I ? 1 : 0;
                                }),
                          n)
                        : A;
                }),
                (e.matches = function (t, i) {
                    return e(t, null, null, i);
                }),
                (e.matchesSelector = function (t, i) {
                    if (((t.ownerDocument || t) !== A && $(t), (i = i.replace(ct, "='$1']")), !(!_.matchesSelector || !M || (N && N.test(i)) || (D && D.test(i)))))
                        try {
                            var n = L.call(t, i);
                            if (n || _.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                        } catch (t) {}
                    return e(i, A, null, [t]).length > 0;
                }),
                (e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== A && $(t), R(t, e);
                }),
                (e.attr = function (t, e) {
                    (t.ownerDocument || t) !== A && $(t);
                    var i = b.attrHandle[e.toLowerCase()],
                        n = i && X.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0;
                    return void 0 !== n ? n : _.attributes || !M ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                }),
                (e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t);
                }),
                (e.uniqueSort = function (t) {
                    var e,
                        i = [],
                        n = 0,
                        r = 0;
                    if (((E = !_.detectDuplicates), (P = !_.sortStable && t.slice(0)), t.sort(W), E)) {
                        for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
                        for (; n--; ) t.splice(i[n], 1);
                    }
                    return (P = null), t;
                }),
                (w = e.getText = function (t) {
                    var e,
                        i = "",
                        n = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += w(t);
                        } else if (3 === r || 4 === r) return t.nodeValue;
                    } else for (; (e = t[n++]); ) i += w(e);
                    return i;
                }),
                (b = e.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: pt,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (t) {
                            return (t[1] = t[1].replace(_t, bt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(_t, bt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                        },
                        CHILD: function (t) {
                            return (
                                (t[1] = t[1].toLowerCase()),
                                "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
                                t
                            );
                        },
                        PSEUDO: function (t) {
                            var e,
                                i = !t[6] && t[2];
                            return pt.CHILD.test(t[0])
                                ? null
                                : (t[3] ? (t[2] = t[4] || t[5] || "") : i && ut.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(_t, bt).toLowerCase();
                            return "*" === t
                                ? function () {
                                      return !0;
                                  }
                                : function (t) {
                                      return t.nodeName && t.nodeName.toLowerCase() === e;
                                  };
                        },
                        CLASS: function (t) {
                            var e = H[t + " "];
                            return (
                                e ||
                                ((e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) &&
                                    H(t, function (t) {
                                        return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (t, i, n) {
                            return function (r) {
                                var o = e.attr(r, t);
                                return null == o
                                    ? "!=" === i
                                    : !i ||
                                          ((o += ""),
                                          "=" === i
                                              ? o === n
                                              : "!=" === i
                                              ? o !== n
                                              : "^=" === i
                                              ? n && 0 === o.indexOf(n)
                                              : "*=" === i
                                              ? n && o.indexOf(n) > -1
                                              : "$=" === i
                                              ? n && o.slice(-n.length) === n
                                              : "~=" === i
                                              ? (" " + o.replace(ot, " ") + " ").indexOf(n) > -1
                                              : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (t, e, i, n, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === r
                                ? function (t) {
                                      return !!t.parentNode;
                                  }
                                : function (e, i, l) {
                                      var c,
                                          u,
                                          d,
                                          p,
                                          h,
                                          f,
                                          m = o !== s ? "nextSibling" : "previousSibling",
                                          g = e.parentNode,
                                          v = a && e.nodeName.toLowerCase(),
                                          y = !l && !a;
                                      if (g) {
                                          if (o) {
                                              for (; m; ) {
                                                  for (d = e; (d = d[m]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                  f = m = "only" === t && !f && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((f = [s ? g.firstChild : g.lastChild]), s && y)) {
                                              for (u = g[j] || (g[j] = {}), c = u[t] || [], h = c[0] === z && c[1], p = c[0] === z && c[2], d = h && g.childNodes[h]; (d = (++h && d && d[m]) || (p = h = 0) || f.pop()); )
                                                  if (1 === d.nodeType && ++p && d === e) {
                                                      u[t] = [z, h, p];
                                                      break;
                                                  }
                                          } else if (y && (c = (e[j] || (e[j] = {}))[t]) && c[0] === z) p = c[1];
                                          else for (; (d = (++h && d && d[m]) || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[j] || (d[j] = {}))[t] = [z, p]), d !== e)); );
                                          return (p -= r) === n || (p % n == 0 && p / n >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (t, i) {
                            var r,
                                o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[j]
                                ? o(i)
                                : o.length > 1
                                ? ((r = [t, t, "", i]),
                                  b.setFilters.hasOwnProperty(t.toLowerCase())
                                      ? n(function (t, e) {
                                            for (var n, r = o(t, i), s = r.length; s--; ) (n = K(t, r[s])), (t[n] = !(e[n] = r[s]));
                                        })
                                      : function (t) {
                                            return o(t, 0, r);
                                        })
                                : o;
                        },
                    },
                    pseudos: {
                        not: n(function (t) {
                            var e = [],
                                i = [],
                                r = S(t.replace(st, "$1"));
                            return r[j]
                                ? n(function (t, e, i, n) {
                                      for (var o, s = r(t, null, n, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                                  })
                                : function (t, n, o) {
                                      return (e[0] = t), r(e, null, o, i), (e[0] = null), !i.pop();
                                  };
                        }),
                        has: n(function (t) {
                            return function (i) {
                                return e(t, i).length > 0;
                            };
                        }),
                        contains: n(function (t) {
                            return (
                                (t = t.replace(_t, bt)),
                                function (e) {
                                    return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
                                }
                            );
                        }),
                        lang: n(function (t) {
                            return (
                                dt.test(t || "") || e.error("unsupported lang: " + t),
                                (t = t.replace(_t, bt).toLowerCase()),
                                function (e) {
                                    var i;
                                    do {
                                        if ((i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id;
                        },
                        root: function (t) {
                            return t === O;
                        },
                        focus: function (t) {
                            return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                        },
                        enabled: function (t) {
                            return !1 === t.disabled;
                        },
                        disabled: function (t) {
                            return !0 === t.disabled;
                        },
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (t) {
                            return !b.pseudos.empty(t);
                        },
                        header: function (t) {
                            return ft.test(t.nodeName);
                        },
                        input: function (t) {
                            return ht.test(t.nodeName);
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e && "button" === t.type) || "button" === e;
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                        },
                        first: a(function () {
                            return [0];
                        }),
                        last: a(function (t, e) {
                            return [e - 1];
                        }),
                        eq: a(function (t, e, i) {
                            return [0 > i ? i + e : i];
                        }),
                        even: a(function (t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t;
                        }),
                        odd: a(function (t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t;
                        }),
                        lt: a(function (t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                            return t;
                        }),
                        gt: a(function (t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
                            return t;
                        }),
                    },
                }),
                (b.pseudos.nth = b.pseudos.eq);
            for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                b.pseudos[y] = (function (t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                })(y);
            for (y in { submit: !0, reset: !0 })
                b.pseudos[y] = (function (t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t;
                    };
                })(y);
            return (
                (c.prototype = b.filters = b.pseudos),
                (b.setFilters = new c()),
                (T = e.tokenize = function (t, i) {
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u = q[t + " "];
                    if (u) return i ? 0 : u.slice(0);
                    for (a = t, l = [], c = b.preFilter; a; ) {
                        (!n || (r = at.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push((o = []))), (n = !1), (r = lt.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(st, " ") }), (a = a.slice(n.length)));
                        for (s in b.filter) !(r = pt[s].exec(a)) || (c[s] && !(r = c[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return i ? a.length : a ? e.error(t) : q(t, l).slice(0);
                }),
                (S = e.compile = function (t, e) {
                    var i,
                        n = [],
                        r = [],
                        o = B[t + " "];
                    if (!o) {
                        for (e || (e = T(t)), i = e.length; i--; ) (o = g(e[i])), o[j] ? n.push(o) : r.push(o);
                        (o = B(t, v(r, n))), (o.selector = t);
                    }
                    return o;
                }),
                (C = e.select = function (t, e, i, n) {
                    var r,
                        o,
                        s,
                        a,
                        c,
                        d = "function" == typeof t && t,
                        p = !n && T((t = d.selector || t));
                    if (((i = i || []), 1 === p.length)) {
                        if (((o = p[0] = p[0].slice(0)), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && M && b.relative[o[1].type])) {
                            if (!(e = (b.find.ID(s.matches[0].replace(_t, bt), e) || [])[0])) return i;
                            d && (e = e.parentNode), (t = t.slice(o.shift().value.length));
                        }
                        for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && ((s = o[r]), !b.relative[(a = s.type)]); )
                            if ((c = b.find[a]) && (n = c(s.matches[0].replace(_t, bt), (vt.test(o[0].type) && l(e.parentNode)) || e))) {
                                if ((o.splice(r, 1), !(t = n.length && u(o)))) return Q.apply(i, n), i;
                                break;
                            }
                    }
                    return (d || S(t, p))(n, e, !M, i, (vt.test(t) && l(e.parentNode)) || e), i;
                }),
                (_.sortStable = j.split("").sort(W).join("") === j),
                (_.detectDuplicates = !!E),
                $(),
                (_.sortDetached = r(function (t) {
                    return 1 & t.compareDocumentPosition(A.createElement("div"));
                })),
                r(function (t) {
                    return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                }) ||
                    o("type|href|height|width", function (t, e, i) {
                        return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                    }),
                (_.attributes &&
                    r(function (t) {
                        return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                    })) ||
                    o("value", function (t, e, i) {
                        return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
                    }),
                r(function (t) {
                    return null == t.getAttribute("disabled");
                }) ||
                    o(J, function (t, e, i) {
                        var n;
                        return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                    }),
                e
            );
        })(t);
        (rt.find = ct), (rt.expr = ct.selectors), (rt.expr[":"] = rt.expr.pseudos), (rt.unique = ct.uniqueSort), (rt.text = ct.getText), (rt.isXMLDoc = ct.isXML), (rt.contains = ct.contains);
        var ut = rt.expr.match.needsContext,
            dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pt = /^.[^:#\[\.,]*$/;
        (rt.filter = function (t, e, i) {
            var n = e[0];
            return (
                i && (t = ":not(" + t + ")"),
                1 === e.length && 1 === n.nodeType
                    ? rt.find.matchesSelector(n, t)
                        ? [n]
                        : []
                    : rt.find.matches(
                          t,
                          rt.grep(e, function (t) {
                              return 1 === t.nodeType;
                          })
                      )
            );
        }),
            rt.fn.extend({
                find: function (t) {
                    var e,
                        i = [],
                        n = this,
                        r = n.length;
                    if ("string" != typeof t)
                        return this.pushStack(
                            rt(t).filter(function () {
                                for (e = 0; r > e; e++) if (rt.contains(n[e], this)) return !0;
                            })
                        );
                    for (e = 0; r > e; e++) rt.find(t, n[e], i);
                    return (i = this.pushStack(r > 1 ? rt.unique(i) : i)), (i.selector = this.selector ? this.selector + " " + t : t), i;
                },
                filter: function (t) {
                    return this.pushStack(n(this, t || [], !1));
                },
                not: function (t) {
                    return this.pushStack(n(this, t || [], !0));
                },
                is: function (t) {
                    return !!n(this, "string" == typeof t && ut.test(t) ? rt(t) : t || [], !1).length;
                },
            });
        var ht,
            ft = t.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        ((rt.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (((e = e instanceof rt ? e[0] : e), rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), dt.test(i[1]) && rt.isPlainObject(e)))
                        for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this;
                }
                if ((n = ft.getElementById(i[2])) && n.parentNode) {
                    if (n.id !== i[2]) return ht.find(t);
                    (this.length = 1), (this[0] = n);
                }
                return (this.context = ft), (this.selector = t), this;
            }
            return t.nodeType
                ? ((this.context = this[0] = t), (this.length = 1), this)
                : rt.isFunction(t)
                ? void 0 !== ht.ready
                    ? ht.ready(t)
                    : t(rt)
                : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), rt.makeArray(t, this));
        }).prototype = rt.fn),
            (ht = rt(ft));
        var gt = /^(?:parents|prev(?:Until|All))/,
            vt = { children: !0, contents: !0, next: !0, prev: !0 };
        rt.extend({
            dir: function (t, e, i) {
                for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !rt(r).is(i)); ) 1 === r.nodeType && n.push(r), (r = r[e]);
                return n;
            },
            sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i;
            },
        }),
            rt.fn.extend({
                has: function (t) {
                    var e,
                        i = rt(t, this),
                        n = i.length;
                    return this.filter(function () {
                        for (e = 0; n > e; e++) if (rt.contains(this, i[e])) return !0;
                    });
                },
                closest: function (t, e) {
                    for (var i, n = 0, r = this.length, o = [], s = ut.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > n; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                                o.push(i);
                                break;
                            }
                    return this.pushStack(o.length > 1 ? rt.unique(o) : o);
                },
                index: function (t) {
                    return t ? ("string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (t, e) {
                    return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))));
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                },
            }),
            rt.each(
                {
                    parent: function (t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null;
                    },
                    parents: function (t) {
                        return rt.dir(t, "parentNode");
                    },
                    parentsUntil: function (t, e, i) {
                        return rt.dir(t, "parentNode", i);
                    },
                    next: function (t) {
                        return r(t, "nextSibling");
                    },
                    prev: function (t) {
                        return r(t, "previousSibling");
                    },
                    nextAll: function (t) {
                        return rt.dir(t, "nextSibling");
                    },
                    prevAll: function (t) {
                        return rt.dir(t, "previousSibling");
                    },
                    nextUntil: function (t, e, i) {
                        return rt.dir(t, "nextSibling", i);
                    },
                    prevUntil: function (t, e, i) {
                        return rt.dir(t, "previousSibling", i);
                    },
                    siblings: function (t) {
                        return rt.sibling((t.parentNode || {}).firstChild, t);
                    },
                    children: function (t) {
                        return rt.sibling(t.firstChild);
                    },
                    contents: function (t) {
                        return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes);
                    },
                },
                function (t, e) {
                    rt.fn[t] = function (i, n) {
                        var r = rt.map(this, e, i);
                        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = rt.filter(n, r)), this.length > 1 && (vt[t] || (r = rt.unique(r)), gt.test(t) && (r = r.reverse())), this.pushStack(r);
                    };
                }
            );
        var yt = /\S+/g,
            _t = {};
        (rt.Callbacks = function (t) {
            t = "string" == typeof t ? _t[t] || o(t) : rt.extend({}, t);
            var e,
                i,
                n,
                r,
                s,
                a,
                l = [],
                c = !t.once && [],
                u = function (o) {
                    for (i = t.memory && o, n = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++)
                        if (!1 === l[s].apply(o[0], o[1]) && t.stopOnFalse) {
                            i = !1;
                            break;
                        }
                    (e = !1), l && (c ? c.length && u(c.shift()) : i ? (l = []) : d.disable());
                },
                d = {
                    add: function () {
                        if (l) {
                            var n = l.length;
                            !(function e(i) {
                                rt.each(i, function (i, n) {
                                    var r = rt.type(n);
                                    "function" === r ? (t.unique && d.has(n)) || l.push(n) : n && n.length && "string" !== r && e(n);
                                });
                            })(arguments),
                                e ? (r = l.length) : i && ((a = n), u(i));
                        }
                        return this;
                    },
                    remove: function () {
                        return (
                            l &&
                                rt.each(arguments, function (t, i) {
                                    for (var n; (n = rt.inArray(i, l, n)) > -1; ) l.splice(n, 1), e && (r >= n && r--, s >= n && s--);
                                }),
                            this
                        );
                    },
                    has: function (t) {
                        return t ? rt.inArray(t, l) > -1 : !(!l || !l.length);
                    },
                    empty: function () {
                        return (l = []), (r = 0), this;
                    },
                    disable: function () {
                        return (l = c = i = void 0), this;
                    },
                    disabled: function () {
                        return !l;
                    },
                    lock: function () {
                        return (c = void 0), i || d.disable(), this;
                    },
                    locked: function () {
                        return !c;
                    },
                    fireWith: function (t, i) {
                        return !l || (n && !c) || ((i = i || []), (i = [t, i.slice ? i.slice() : i]), e ? c.push(i) : u(i)), this;
                    },
                    fire: function () {
                        return d.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!n;
                    },
                };
            return d;
        }),
            rt.extend({
                Deferred: function (t) {
                    var e = [
                            ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", rt.Callbacks("memory")],
                        ],
                        i = "pending",
                        n = {
                            state: function () {
                                return i;
                            },
                            always: function () {
                                return r.done(arguments).fail(arguments), this;
                            },
                            then: function () {
                                var t = arguments;
                                return rt
                                    .Deferred(function (i) {
                                        rt.each(e, function (e, o) {
                                            var s = rt.isFunction(t[e]) && t[e];
                                            r[o[1]](function () {
                                                var t = s && s.apply(this, arguments);
                                                t && rt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments);
                                            });
                                        }),
                                            (t = null);
                                    })
                                    .promise();
                            },
                            promise: function (t) {
                                return null != t ? rt.extend(t, n) : n;
                            },
                        },
                        r = {};
                    return (
                        (n.pipe = n.then),
                        rt.each(e, function (t, o) {
                            var s = o[2],
                                a = o[3];
                            (n[o[1]] = s.add),
                                a &&
                                    s.add(
                                        function () {
                                            i = a;
                                        },
                                        e[1 ^ t][2].disable,
                                        e[2][2].lock
                                    ),
                                (r[o[0]] = function () {
                                    return r[o[0] + "With"](this === r ? n : this, arguments), this;
                                }),
                                (r[o[0] + "With"] = s.fireWith);
                        }),
                        n.promise(r),
                        t && t.call(r, r),
                        r
                    );
                },
                when: function (t) {
                    var e,
                        i,
                        n,
                        r = 0,
                        o = G.call(arguments),
                        s = o.length,
                        a = 1 !== s || (t && rt.isFunction(t.promise)) ? s : 0,
                        l = 1 === a ? t : rt.Deferred(),
                        c = function (t, i, n) {
                            return function (r) {
                                (i[t] = this), (n[t] = arguments.length > 1 ? G.call(arguments) : r), n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
                            };
                        };
                    if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, e)) : --a;
                    return a || l.resolveWith(n, o), l.promise();
                },
            });
        var bt;
        (rt.fn.ready = function (t) {
            return rt.ready.promise().done(t), this;
        }),
            rt.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (t) {
                    t ? rt.readyWait++ : rt.ready(!0);
                },
                ready: function (t) {
                    if (!0 === t ? !--rt.readyWait : !rt.isReady) {
                        if (!ft.body) return setTimeout(rt.ready);
                        (rt.isReady = !0), (!0 !== t && --rt.readyWait > 0) || (bt.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")));
                    }
                },
            }),
            (rt.ready.promise = function (e) {
                if (!bt)
                    if (((bt = rt.Deferred()), "complete" === ft.readyState)) setTimeout(rt.ready);
                    else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
                    else {
                        ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                        var i = !1;
                        try {
                            i = null == t.frameElement && ft.documentElement;
                        } catch (t) {}
                        i &&
                            i.doScroll &&
                            (function t() {
                                if (!rt.isReady) {
                                    try {
                                        i.doScroll("left");
                                    } catch (e) {
                                        return setTimeout(t, 50);
                                    }
                                    s(), rt.ready();
                                }
                            })();
                    }
                return bt.promise(e);
            });
        var wt,
            xt = "undefined";
        for (wt in rt(it)) break;
        (it.ownLast = "0" !== wt),
            (it.inlineBlockNeedsLayout = !1),
            rt(function () {
                var t, e, i, n;
                (i = ft.getElementsByTagName("body")[0]) &&
                    i.style &&
                    ((e = ft.createElement("div")),
                    (n = ft.createElement("div")),
                    (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    i.appendChild(n).appendChild(e),
                    typeof e.style.zoom !== xt && ((e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth), t && (i.style.zoom = 1)),
                    i.removeChild(n));
            }),
            (function () {
                var t = ft.createElement("div");
                if (null == it.deleteExpando) {
                    it.deleteExpando = !0;
                    try {
                        delete t.test;
                    } catch (t) {
                        it.deleteExpando = !1;
                    }
                }
                t = null;
            })(),
            (rt.acceptData = function (t) {
                var e = rt.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1;
                return (1 === i || 9 === i) && (!e || (!0 !== e && t.getAttribute("classid") === e));
            });
        var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            St = /([A-Z])/g;
        rt.extend({
            cache: {},
            noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
            hasData: function (t) {
                return !!(t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando]) && !c(t);
            },
            data: function (t, e, i) {
                return u(t, e, i);
            },
            removeData: function (t, e) {
                return d(t, e);
            },
            _data: function (t, e, i) {
                return u(t, e, i, !0);
            },
            _removeData: function (t, e) {
                return d(t, e, !0);
            },
        }),
            rt.fn.extend({
                data: function (t, e) {
                    var i,
                        n,
                        r,
                        o = this[0],
                        s = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && ((r = rt.data(o)), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                            for (i = s.length; i--; ) s[i] && ((n = s[i].name), 0 === n.indexOf("data-") && ((n = rt.camelCase(n.slice(5))), l(o, n, r[n])));
                            rt._data(o, "parsedAttrs", !0);
                        }
                        return r;
                    }
                    return "object" == typeof t
                        ? this.each(function () {
                              rt.data(this, t);
                          })
                        : arguments.length > 1
                        ? this.each(function () {
                              rt.data(this, t, e);
                          })
                        : o
                        ? l(o, t, rt.data(o, t))
                        : void 0;
                },
                removeData: function (t) {
                    return this.each(function () {
                        rt.removeData(this, t);
                    });
                },
            }),
            rt.extend({
                queue: function (t, e, i) {
                    var n;
                    return t ? ((e = (e || "fx") + "queue"), (n = rt._data(t, e)), i && (!n || rt.isArray(i) ? (n = rt._data(t, e, rt.makeArray(i))) : n.push(i)), n || []) : void 0;
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var i = rt.queue(t, e),
                        n = i.length,
                        r = i.shift(),
                        o = rt._queueHooks(t, e),
                        s = function () {
                            rt.dequeue(t, e);
                        };
                    "inprogress" === r && ((r = i.shift()), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire();
                },
                _queueHooks: function (t, e) {
                    var i = e + "queueHooks";
                    return (
                        rt._data(t, i) ||
                        rt._data(t, i, {
                            empty: rt.Callbacks("once memory").add(function () {
                                rt._removeData(t, e + "queue"), rt._removeData(t, i);
                            }),
                        })
                    );
                },
            }),
            rt.fn.extend({
                queue: function (t, e) {
                    var i = 2;
                    return (
                        "string" != typeof t && ((e = t), (t = "fx"), i--),
                        arguments.length < i
                            ? rt.queue(this[0], t)
                            : void 0 === e
                            ? this
                            : this.each(function () {
                                  var i = rt.queue(this, t, e);
                                  rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t);
                              })
                    );
                },
                dequeue: function (t) {
                    return this.each(function () {
                        rt.dequeue(this, t);
                    });
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", []);
                },
                promise: function (t, e) {
                    var i,
                        n = 1,
                        r = rt.Deferred(),
                        o = this,
                        s = this.length,
                        a = function () {
                            --n || r.resolveWith(o, [o]);
                        };
                    for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (i = rt._data(o[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                    return a(), r.promise(e);
                },
            });
        var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            kt = ["Top", "Right", "Bottom", "Left"],
            Pt = function (t, e) {
                return (t = e || t), "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t);
            },
            Et = (rt.access = function (t, e, i, n, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === rt.type(i)) {
                    r = !0;
                    for (a in i) rt.access(t, e, a, i[a], !0, o, s);
                } else if (
                    void 0 !== n &&
                    ((r = !0),
                    rt.isFunction(n) || (s = !0),
                    c &&
                        (s
                            ? (e.call(t, n), (e = null))
                            : ((c = e),
                              (e = function (t, e, i) {
                                  return c.call(rt(t), i);
                              }))),
                    e)
                )
                    for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : c ? e.call(t) : l ? e(t[0], i) : o;
            }),
            $t = /^(?:checkbox|radio)$/i;
        !(function () {
            var t = ft.createElement("input"),
                e = ft.createElement("div"),
                i = ft.createDocumentFragment();
            if (
                ((e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (it.leadingWhitespace = 3 === e.firstChild.nodeType),
                (it.tbody = !e.getElementsByTagName("tbody").length),
                (it.htmlSerialize = !!e.getElementsByTagName("link").length),
                (it.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML),
                (t.type = "checkbox"),
                (t.checked = !0),
                i.appendChild(t),
                (it.appendChecked = t.checked),
                (e.innerHTML = "<textarea>x</textarea>"),
                (it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
                i.appendChild(e),
                (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
                (it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (it.noCloneEvent = !0),
                e.attachEvent &&
                    (e.attachEvent("onclick", function () {
                        it.noCloneEvent = !1;
                    }),
                    e.cloneNode(!0).click()),
                null == it.deleteExpando)
            ) {
                it.deleteExpando = !0;
                try {
                    delete e.test;
                } catch (t) {
                    it.deleteExpando = !1;
                }
            }
        })(),
            (function () {
                var e,
                    i,
                    n = ft.createElement("div");
                for (e in { submit: !0, change: !0, focusin: !0 }) (i = "on" + e), (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), (it[e + "Bubbles"] = !1 === n.attributes[i].expando));
                n = null;
            })();
        var At = /^(?:input|select|textarea)$/i,
            Ot = /^key/,
            Mt = /^(?:mouse|pointer|contextmenu)|click/,
            Dt = /^(?:focusinfocus|focusoutblur)$/,
            Nt = /^([^.]*)(?:\.(.+)|)$/;
        (rt.event = {
            global: {},
            add: function (t, e, i, n, r) {
                var o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    m,
                    g = rt._data(t);
                if (g) {
                    for (
                        i.handler && ((l = i), (i = l.handler), (r = l.selector)),
                            i.guid || (i.guid = rt.guid++),
                            (s = g.events) || (s = g.events = {}),
                            (u = g.handle) ||
                                ((u = g.handle = function (t) {
                                    return typeof rt === xt || (t && rt.event.triggered === t.type) ? void 0 : rt.event.dispatch.apply(u.elem, arguments);
                                }),
                                (u.elem = t)),
                            e = (e || "").match(yt) || [""],
                            a = e.length;
                        a--;

                    )
                        (o = Nt.exec(e[a]) || []),
                            (h = m = o[1]),
                            (f = (o[2] || "").split(".").sort()),
                            h &&
                                ((c = rt.event.special[h] || {}),
                                (h = (r ? c.delegateType : c.bindType) || h),
                                (c = rt.event.special[h] || {}),
                                (d = rt.extend({ type: h, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && rt.expr.match.needsContext.test(r), namespace: f.join(".") }, l)),
                                (p = s[h]) || ((p = s[h] = []), (p.delegateCount = 0), (c.setup && !1 !== c.setup.call(t, n, f, u)) || (t.addEventListener ? t.addEventListener(h, u, !1) : t.attachEvent && t.attachEvent("on" + h, u))),
                                c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)),
                                r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                                (rt.event.global[h] = !0));
                    t = null;
                }
            },
            remove: function (t, e, i, n, r) {
                var o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    m,
                    g = rt.hasData(t) && rt._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(yt) || [""], c = e.length; c--; )
                        if (((a = Nt.exec(e[c]) || []), (h = m = a[1]), (f = (a[2] || "").split(".").sort()), h)) {
                            for (d = rt.event.special[h] || {}, h = (n ? d.delegateType : d.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--; )
                                (s = p[o]),
                                    (!r && m !== s.origType) ||
                                        (i && i.guid !== s.guid) ||
                                        (a && !a.test(s.namespace)) ||
                                        (n && n !== s.selector && ("**" !== n || !s.selector)) ||
                                        (p.splice(o, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !p.length && ((d.teardown && !1 !== d.teardown.call(t, f, g.handle)) || rt.removeEvent(t, h, g.handle), delete u[h]);
                        } else for (h in u) rt.event.remove(t, h + e[c], i, n, !0);
                    rt.isEmptyObject(u) && (delete g.handle, rt._removeData(t, "events"));
                }
            },
            trigger: function (e, i, n, r) {
                var o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p = [n || ft],
                    h = et.call(e, "type") ? e.type : e,
                    f = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                    ((a = u = n = n || ft),
                    3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !Dt.test(h + rt.event.triggered) &&
                        (h.indexOf(".") >= 0 && ((f = h.split(".")), (h = f.shift()), f.sort()),
                        (s = h.indexOf(":") < 0 && "on" + h),
                        (e = e[rt.expando] ? e : new rt.Event(h, "object" == typeof e && e)),
                        (e.isTrigger = r ? 2 : 3),
                        (e.namespace = f.join(".")),
                        (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (e.result = void 0),
                        e.target || (e.target = n),
                        (i = null == i ? [e] : rt.makeArray(i, [e])),
                        (c = rt.event.special[h] || {}),
                        r || !c.trigger || !1 !== c.trigger.apply(n, i)))
                ) {
                    if (!r && !c.noBubble && !rt.isWindow(n)) {
                        for (l = c.delegateType || h, Dt.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (u = a);
                        u === (n.ownerDocument || ft) && p.push(u.defaultView || u.parentWindow || t);
                    }
                    for (d = 0; (a = p[d++]) && !e.isPropagationStopped(); )
                        (e.type = d > 1 ? l : c.bindType || h),
                            (o = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle")),
                            o && o.apply(a, i),
                            (o = s && a[s]) && o.apply && rt.acceptData(a) && ((e.result = o.apply(a, i)), !1 === e.result && e.preventDefault());
                    if (((e.type = h), !r && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), i)) && rt.acceptData(n) && s && n[h] && !rt.isWindow(n))) {
                        (u = n[s]), u && (n[s] = null), (rt.event.triggered = h);
                        try {
                            n[h]();
                        } catch (t) {}
                        (rt.event.triggered = void 0), u && (n[s] = u);
                    }
                    return e.result;
                }
            },
            dispatch: function (t) {
                t = rt.event.fix(t);
                var e,
                    i,
                    n,
                    r,
                    o,
                    s = [],
                    a = G.call(arguments),
                    l = (rt._data(this, "events") || {})[t.type] || [],
                    c = rt.event.special[t.type] || {};
                if (((a[0] = t), (t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                    for (s = rt.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
                        for (t.currentTarget = r.elem, o = 0; (n = r.handlers[o++]) && !t.isImmediatePropagationStopped(); )
                            (!t.namespace_re || t.namespace_re.test(n.namespace)) &&
                                ((t.handleObj = n), (t.data = n.data), void 0 !== (i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result;
                }
            },
            handlers: function (t, e) {
                var i,
                    n,
                    r,
                    o,
                    s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (r = [], o = 0; a > o; o++) (n = e[o]), (i = n.selector + " "), void 0 === r[i] && (r[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), r[i] && r.push(n);
                            r.length && s.push({ elem: l, handlers: r });
                        }
                return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
            },
            fix: function (t) {
                if (t[rt.expando]) return t;
                var e,
                    i,
                    n,
                    r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Mt.test(r) ? this.mouseHooks : Ot.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(o), e = n.length; e--; ) (i = n[e]), (t[i] = o[i]);
                return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), (t.metaKey = !!t.metaKey), s.filter ? s.filter(t, o) : t;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i,
                        n,
                        r,
                        o = e.button,
                        s = e.fromElement;
                    return (
                        null == t.pageX &&
                            null != e.clientX &&
                            ((n = t.target.ownerDocument || ft),
                            (r = n.documentElement),
                            (i = n.body),
                            (t.pageX = e.clientX + ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) - ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                            (t.pageY = e.clientY + ((r && r.scrollTop) || (i && i.scrollTop) || 0) - ((r && r.clientTop) || (i && i.clientTop) || 0))),
                        !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                        t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                        t
                    );
                },
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== f() && this.focus)
                            try {
                                return this.focus(), !1;
                            } catch (t) {}
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                    },
                    _default: function (t) {
                        return rt.nodeName(t.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                    },
                },
            },
            simulate: function (t, e, i, n) {
                var r = rt.extend(new rt.Event(), i, { type: t, isSimulated: !0, originalEvent: {} });
                n ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault();
            },
        }),
            (rt.removeEvent = ft.removeEventListener
                ? function (t, e, i) {
                      t.removeEventListener && t.removeEventListener(e, i, !1);
                  }
                : function (t, e, i) {
                      var n = "on" + e;
                      t.detachEvent && (typeof t[n] === xt && (t[n] = null), t.detachEvent(n, i));
                  }),
            (rt.Event = function (t, e) {
                return this instanceof rt.Event
                    ? (t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? p : h)) : (this.type = t),
                      e && rt.extend(this, e),
                      (this.timeStamp = (t && t.timeStamp) || rt.now()),
                      void (this[rt.expando] = !0))
                    : new rt.Event(t, e);
            }),
            (rt.Event.prototype = {
                isDefaultPrevented: h,
                isPropagationStopped: h,
                isImmediatePropagationStopped: h,
                preventDefault: function () {
                    var t = this.originalEvent;
                    (this.isDefaultPrevented = p), t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    (this.isPropagationStopped = p), t && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    (this.isImmediatePropagationStopped = p), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            rt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                rt.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function (t) {
                        var i,
                            n = this,
                            r = t.relatedTarget,
                            o = t.handleObj;
                        return (!r || (r !== n && !rt.contains(n, r))) && ((t.type = o.origType), (i = o.handler.apply(this, arguments)), (t.type = e)), i;
                    },
                };
            }),
            it.submitBubbles ||
                (rt.event.special.submit = {
                    setup: function () {
                        return (
                            !rt.nodeName(this, "form") &&
                            void rt.event.add(this, "click._submit keypress._submit", function (t) {
                                var e = t.target,
                                    i = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                                i &&
                                    !rt._data(i, "submitBubbles") &&
                                    (rt.event.add(i, "submit._submit", function (t) {
                                        t._submit_bubble = !0;
                                    }),
                                    rt._data(i, "submitBubbles", !0));
                            })
                        );
                    },
                    postDispatch: function (t) {
                        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0));
                    },
                    teardown: function () {
                        return !rt.nodeName(this, "form") && void rt.event.remove(this, "._submit");
                    },
                }),
            it.changeBubbles ||
                (rt.event.special.change = {
                    setup: function () {
                        return At.test(this.nodeName)
                            ? (("checkbox" === this.type || "radio" === this.type) &&
                                  (rt.event.add(this, "propertychange._change", function (t) {
                                      "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
                                  }),
                                  rt.event.add(this, "click._change", function (t) {
                                      this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0);
                                  })),
                              !1)
                            : void rt.event.add(this, "beforeactivate._change", function (t) {
                                  var e = t.target;
                                  At.test(e.nodeName) &&
                                      !rt._data(e, "changeBubbles") &&
                                      (rt.event.add(e, "change._change", function (t) {
                                          !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0);
                                      }),
                                      rt._data(e, "changeBubbles", !0));
                              });
                    },
                    handle: function (t) {
                        var e = t.target;
                        return this !== e || t.isSimulated || t.isTrigger || ("radio" !== e.type && "checkbox" !== e.type) ? t.handleObj.handler.apply(this, arguments) : void 0;
                    },
                    teardown: function () {
                        return rt.event.remove(this, "._change"), !At.test(this.nodeName);
                    },
                }),
            it.focusinBubbles ||
                rt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                    var i = function (t) {
                        rt.event.simulate(e, t.target, rt.event.fix(t), !0);
                    };
                    rt.event.special[e] = {
                        setup: function () {
                            var n = this.ownerDocument || this,
                                r = rt._data(n, e);
                            r || n.addEventListener(t, i, !0), rt._data(n, e, (r || 0) + 1);
                        },
                        teardown: function () {
                            var n = this.ownerDocument || this,
                                r = rt._data(n, e) - 1;
                            r ? rt._data(n, e, r) : (n.removeEventListener(t, i, !0), rt._removeData(n, e));
                        },
                    };
                }),
            rt.fn.extend({
                on: function (t, e, i, n, r) {
                    var o, s;
                    if ("object" == typeof t) {
                        "string" != typeof e && ((i = i || e), (e = void 0));
                        for (o in t) this.on(o, e, i, t[o], r);
                        return this;
                    }
                    if ((null == i && null == n ? ((n = e), (i = e = void 0)) : null == n && ("string" == typeof e ? ((n = i), (i = void 0)) : ((n = i), (i = e), (e = void 0))), !1 === n)) n = h;
                    else if (!n) return this;
                    return (
                        1 === r &&
                            ((s = n),
                            (n = function (t) {
                                return rt().off(t), s.apply(this, arguments);
                            }),
                            (n.guid = s.guid || (s.guid = rt.guid++))),
                        this.each(function () {
                            rt.event.add(this, t, n, i, e);
                        })
                    );
                },
                one: function (t, e, i, n) {
                    return this.on(t, e, i, n, 1);
                },
                off: function (t, e, i) {
                    var n, r;
                    if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof t) {
                        for (r in t) this.off(r, e, t[r]);
                        return this;
                    }
                    return (
                        (!1 === e || "function" == typeof e) && ((i = e), (e = void 0)),
                        !1 === i && (i = h),
                        this.each(function () {
                            rt.event.remove(this, t, i, e);
                        })
                    );
                },
                trigger: function (t, e) {
                    return this.each(function () {
                        rt.event.trigger(t, e, this);
                    });
                },
                triggerHandler: function (t, e) {
                    var i = this[0];
                    return i ? rt.event.trigger(t, e, i, !0) : void 0;
                },
            });
        var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Rt = / jQuery\d+="(?:null|\d+)"/g,
            jt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
            It = /^\s+/,
            zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ft = /<([\w:]+)/,
            Ht = /<tbody/i,
            qt = /<|&#?\w+;/,
            Bt = /<(?:script|style|link)/i,
            Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Vt = /^$|\/(?:java|ecma)script/i,
            Xt = /^true\/(.*)/,
            Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Yt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
            },
            Gt = m(ft),
            Qt = Gt.appendChild(ft.createElement("div"));
        (Yt.optgroup = Yt.option),
            (Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead),
            (Yt.th = Yt.td),
            rt.extend({
                clone: function (t, e, i) {
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l = rt.contains(t.ownerDocument, t);
                    if (
                        (it.html5Clone || rt.isXMLDoc(t) || !jt.test("<" + t.nodeName + ">") ? (o = t.cloneNode(!0)) : ((Qt.innerHTML = t.outerHTML), Qt.removeChild((o = Qt.firstChild))),
                        !((it.noCloneEvent && it.noCloneChecked) || (1 !== t.nodeType && 11 !== t.nodeType) || rt.isXMLDoc(t)))
                    )
                        for (n = g(o), a = g(t), s = 0; null != (r = a[s]); ++s) n[s] && T(r, n[s]);
                    if (e)
                        if (i) for (a = a || g(t), n = n || g(o), s = 0; null != (r = a[s]); s++) x(r, n[s]);
                        else x(t, o);
                    return (n = g(o, "script")), n.length > 0 && w(n, !l && g(t, "script")), (n = a = r = null), o;
                },
                buildFragment: function (t, e, i, n) {
                    for (var r, o, s, a, l, c, u, d = t.length, p = m(e), h = [], f = 0; d > f; f++)
                        if ((o = t[f]) || 0 === o)
                            if ("object" === rt.type(o)) rt.merge(h, o.nodeType ? [o] : o);
                            else if (qt.test(o)) {
                                for (a = a || p.appendChild(e.createElement("div")), l = (Ft.exec(o) || ["", ""])[1].toLowerCase(), u = Yt[l] || Yt._default, a.innerHTML = u[1] + o.replace(zt, "<$1></$2>") + u[2], r = u[0]; r--; )
                                    a = a.lastChild;
                                if ((!it.leadingWhitespace && It.test(o) && h.push(e.createTextNode(It.exec(o)[0])), !it.tbody))
                                    for (o = "table" !== l || Ht.test(o) ? ("<table>" !== u[1] || Ht.test(o) ? 0 : a) : a.firstChild, r = o && o.childNodes.length; r--; )
                                        rt.nodeName((c = o.childNodes[r]), "tbody") && !c.childNodes.length && o.removeChild(c);
                                for (rt.merge(h, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
                                a = p.lastChild;
                            } else h.push(e.createTextNode(o));
                    for (a && p.removeChild(a), it.appendChecked || rt.grep(g(h, "input"), v), f = 0; (o = h[f++]); )
                        if ((!n || -1 === rt.inArray(o, n)) && ((s = rt.contains(o.ownerDocument, o)), (a = g(p.appendChild(o), "script")), s && w(a), i)) for (r = 0; (o = a[r++]); ) Vt.test(o.type || "") && i.push(o);
                    return (a = null), p;
                },
                cleanData: function (t, e) {
                    for (var i, n, r, o, s = 0, a = rt.expando, l = rt.cache, c = it.deleteExpando, u = rt.event.special; null != (i = t[s]); s++)
                        if ((e || rt.acceptData(i)) && ((r = i[a]), (o = r && l[r]))) {
                            if (o.events) for (n in o.events) u[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, o.handle);
                            l[r] && (delete l[r], c ? delete i[a] : typeof i.removeAttribute !== xt ? i.removeAttribute(a) : (i[a] = null), Y.push(r));
                        }
                },
            }),
            rt.fn.extend({
                text: function (t) {
                    return Et(
                        this,
                        function (t) {
                            return void 0 === t ? rt.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || ft).createTextNode(t));
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            y(this, t).appendChild(t);
                        }
                    });
                },
                prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.insertBefore(t, e.firstChild);
                        }
                    });
                },
                before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this);
                    });
                },
                after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                    });
                },
                remove: function (t, e) {
                    for (var i, n = t ? rt.filter(t, this) : this, r = 0; null != (i = n[r]); r++)
                        e || 1 !== i.nodeType || rt.cleanData(g(i)), i.parentNode && (e && rt.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
                    return this;
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                        t.options && rt.nodeName(t, "select") && (t.options.length = 0);
                    }
                    return this;
                },
                clone: function (t, e) {
                    return (
                        (t = null != t && t),
                        (e = null == e ? t : e),
                        this.map(function () {
                            return rt.clone(this, t, e);
                        })
                    );
                },
                html: function (t) {
                    return Et(
                        this,
                        function (t) {
                            var e = this[0] || {},
                                i = 0,
                                n = this.length;
                            if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Rt, "") : void 0;
                            if (!("string" != typeof t || Bt.test(t) || (!it.htmlSerialize && jt.test(t)) || (!it.leadingWhitespace && It.test(t)) || Yt[(Ft.exec(t) || ["", ""])[1].toLowerCase()])) {
                                t = t.replace(zt, "<$1></$2>");
                                try {
                                    for (; n > i; i++) (e = this[i] || {}), 1 === e.nodeType && (rt.cleanData(g(e, !1)), (e.innerHTML = t));
                                    e = 0;
                                } catch (t) {}
                            }
                            e && this.empty().append(t);
                        },
                        null,
                        t,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var t = arguments[0];
                    return (
                        this.domManip(arguments, function (e) {
                            (t = this.parentNode), rt.cleanData(g(this)), t && t.replaceChild(e, this);
                        }),
                        t && (t.length || t.nodeType) ? this : this.remove()
                    );
                },
                detach: function (t) {
                    return this.remove(t, !0);
                },
                domManip: function (t, e) {
                    t = Q.apply([], t);
                    var i,
                        n,
                        r,
                        o,
                        s,
                        a,
                        l = 0,
                        c = this.length,
                        u = this,
                        d = c - 1,
                        p = t[0],
                        h = rt.isFunction(p);
                    if (h || (c > 1 && "string" == typeof p && !it.checkClone && Wt.test(p)))
                        return this.each(function (i) {
                            var n = u.eq(i);
                            h && (t[0] = p.call(this, i, n.html())), n.domManip(t, e);
                        });
                    if (c && ((a = rt.buildFragment(t, this[0].ownerDocument, !1, this)), (i = a.firstChild), 1 === a.childNodes.length && (a = i), i)) {
                        for (o = rt.map(g(a, "script"), _), r = o.length; c > l; l++) (n = a), l !== d && ((n = rt.clone(n, !0, !0)), r && rt.merge(o, g(n, "script"))), e.call(this[l], n, l);
                        if (r)
                            for (s = o[o.length - 1].ownerDocument, rt.map(o, b), l = 0; r > l; l++)
                                (n = o[l]),
                                    Vt.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(s, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ut, "")));
                        a = i = null;
                    }
                    return this;
                },
            }),
            rt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                rt.fn[t] = function (t) {
                    for (var i, n = 0, r = [], o = rt(t), s = o.length - 1; s >= n; n++) (i = n === s ? this : this.clone(!0)), rt(o[n])[e](i), Z.apply(r, i.get());
                    return this.pushStack(r);
                };
            });
        var Zt,
            Kt = {};
        !(function () {
            var t;
            it.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return (
                    (i = ft.getElementsByTagName("body")[0]),
                    i && i.style
                        ? ((e = ft.createElement("div")),
                          (n = ft.createElement("div")),
                          (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                          i.appendChild(n).appendChild(e),
                          typeof e.style.zoom !== xt &&
                              ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                              (e.appendChild(ft.createElement("div")).style.width = "5px"),
                              (t = 3 !== e.offsetWidth)),
                          i.removeChild(n),
                          t)
                        : void 0
                );
            };
        })();
        var Jt,
            te,
            ee = /^margin/,
            ie = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$", "i"),
            ne = /^(top|right|bottom|left)$/;
        t.getComputedStyle
            ? ((Jt = function (e) {
                  return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null);
              }),
              (te = function (t, e, i) {
                  var n,
                      r,
                      o,
                      s,
                      a = t.style;
                  return (
                      (i = i || Jt(t)),
                      (s = i ? i.getPropertyValue(e) || i[e] : void 0),
                      i &&
                          ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)),
                          ie.test(s) && ee.test(e) && ((n = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = i.width), (a.width = n), (a.minWidth = r), (a.maxWidth = o))),
                      void 0 === s ? s : s + ""
                  );
              }))
            : ft.documentElement.currentStyle &&
              ((Jt = function (t) {
                  return t.currentStyle;
              }),
              (te = function (t, e, i) {
                  var n,
                      r,
                      o,
                      s,
                      a = t.style;
                  return (
                      (i = i || Jt(t)),
                      (s = i ? i[e] : void 0),
                      null == s && a && a[e] && (s = a[e]),
                      ie.test(s) &&
                          !ne.test(e) &&
                          ((n = a.left), (r = t.runtimeStyle), (o = r && r.left), o && (r.left = t.currentStyle.left), (a.left = "fontSize" === e ? "1em" : s), (s = a.pixelLeft + "px"), (a.left = n), o && (r.left = o)),
                      void 0 === s ? s : s + "" || "auto"
                  );
              })),
            !(function () {
                function e() {
                    var e, i, n, r;
                    (i = ft.getElementsByTagName("body")[0]) &&
                        i.style &&
                        ((e = ft.createElement("div")),
                        (n = ft.createElement("div")),
                        (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        i.appendChild(n).appendChild(e),
                        (e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                        (o = s = !1),
                        (l = !0),
                        t.getComputedStyle &&
                            ((o = "1%" !== (t.getComputedStyle(e, null) || {}).top),
                            (s = "4px" === (t.getComputedStyle(e, null) || { width: "4px" }).width),
                            (r = e.appendChild(ft.createElement("div"))),
                            (r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (r.style.marginRight = r.style.width = "0"),
                            (e.style.width = "1px"),
                            (l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)),
                            e.removeChild(r)),
                        (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                        (r = e.getElementsByTagName("td")),
                        (r[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                        (a = 0 === r[0].offsetHeight),
                        a && ((r[0].style.display = ""), (r[1].style.display = "none"), (a = 0 === r[0].offsetHeight)),
                        i.removeChild(n));
                }
                var i, n, r, o, s, a, l;
                (i = ft.createElement("div")),
                    (i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                    (r = i.getElementsByTagName("a")[0]),
                    (n = r && r.style) &&
                        ((n.cssText = "float:left;opacity:.5"),
                        (it.opacity = "0.5" === n.opacity),
                        (it.cssFloat = !!n.cssFloat),
                        (i.style.backgroundClip = "content-box"),
                        (i.cloneNode(!0).style.backgroundClip = ""),
                        (it.clearCloneStyle = "content-box" === i.style.backgroundClip),
                        (it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing),
                        rt.extend(it, {
                            reliableHiddenOffsets: function () {
                                return null == a && e(), a;
                            },
                            boxSizingReliable: function () {
                                return null == s && e(), s;
                            },
                            pixelPosition: function () {
                                return null == o && e(), o;
                            },
                            reliableMarginRight: function () {
                                return null == l && e(), l;
                            },
                        }));
            })(),
            (rt.swap = function (t, e, i, n) {
                var r,
                    o,
                    s = {};
                for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
                r = i.apply(t, n || []);
                for (o in e) t.style[o] = s[o];
                return r;
            });
        var re = /alpha\([^)]*\)/i,
            oe = /opacity\s*=\s*([^)]*)/,
            se = /^(none|table(?!-c[ea]).+)/,
            ae = new RegExp("^(" + Ct + ")(.*)$", "i"),
            le = new RegExp("^([+-])=(" + Ct + ")", "i"),
            ce = { position: "absolute", visibility: "hidden", display: "block" },
            ue = { letterSpacing: "0", fontWeight: "400" },
            de = ["Webkit", "O", "Moz", "ms"];
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = te(t, "opacity");
                            return "" === i ? "1" : i;
                        }
                    },
                },
            },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: it.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r,
                        o,
                        s,
                        a = rt.camelCase(e),
                        l = t.style;
                    if (((e = rt.cssProps[a] || (rt.cssProps[a] = P(l, a))), (s = rt.cssHooks[e] || rt.cssHooks[a]), void 0 === i)) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e];
                    if (
                        ((o = typeof i),
                        "string" === o && (r = le.exec(i)) && ((i = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e))), (o = "number")),
                        null != i &&
                            i === i &&
                            ("number" !== o || rt.cssNumber[a] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n)))))
                    )
                        try {
                            l[e] = i;
                        } catch (t) {}
                }
            },
            css: function (t, e, i, n) {
                var r,
                    o,
                    s,
                    a = rt.camelCase(e);
                return (
                    (e = rt.cssProps[a] || (rt.cssProps[a] = P(t.style, a))),
                    (s = rt.cssHooks[e] || rt.cssHooks[a]),
                    s && "get" in s && (o = s.get(t, !0, i)),
                    void 0 === o && (o = te(t, e, n)),
                    "normal" === o && e in ue && (o = ue[e]),
                    "" === i || i ? ((r = parseFloat(o)), !0 === i || rt.isNumeric(r) ? r || 0 : o) : o
                );
            },
        }),
            rt.each(["height", "width"], function (t, e) {
                rt.cssHooks[e] = {
                    get: function (t, i, n) {
                        return i
                            ? se.test(rt.css(t, "display")) && 0 === t.offsetWidth
                                ? rt.swap(t, ce, function () {
                                      return O(t, e, n);
                                  })
                                : O(t, e, n)
                            : void 0;
                    },
                    set: function (t, i, n) {
                        var r = n && Jt(t);
                        return $(t, i, n ? A(t, e, n, it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0);
                    },
                };
            }),
            it.opacity ||
                (rt.cssHooks.opacity = {
                    get: function (t, e) {
                        return oe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
                    },
                    set: function (t, e) {
                        var i = t.style,
                            n = t.currentStyle,
                            r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                            o = (n && n.filter) || i.filter || "";
                        (i.zoom = 1),
                            ((e >= 1 || "" === e) && "" === rt.trim(o.replace(re, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || (n && !n.filter))) || (i.filter = re.test(o) ? o.replace(re, r) : o + " " + r);
                    },
                }),
            (rt.cssHooks.marginRight = k(it.reliableMarginRight, function (t, e) {
                return e ? rt.swap(t, { display: "inline-block" }, te, [t, "marginRight"]) : void 0;
            })),
            rt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                (rt.cssHooks[t + e] = {
                    expand: function (i) {
                        for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + kt[n] + e] = o[n] || o[n - 2] || o[0];
                        return r;
                    },
                }),
                    ee.test(t) || (rt.cssHooks[t + e].set = $);
            }),
            rt.fn.extend({
                css: function (t, e) {
                    return Et(
                        this,
                        function (t, e, i) {
                            var n,
                                r,
                                o = {},
                                s = 0;
                            if (rt.isArray(e)) {
                                for (n = Jt(t), r = e.length; r > s; s++) o[e[s]] = rt.css(t, e[s], !1, n);
                                return o;
                            }
                            return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e);
                        },
                        t,
                        e,
                        arguments.length > 1
                    );
                },
                show: function () {
                    return E(this, !0);
                },
                hide: function () {
                    return E(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              Pt(this) ? rt(this).show() : rt(this).hide();
                          });
                },
            }),
            (rt.Tween = M),
            (M.prototype = {
                constructor: M,
                init: function (t, e, i, n, r, o) {
                    (this.elem = t), (this.prop = i), (this.easing = r || "swing"), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = o || (rt.cssNumber[i] ? "" : "px"));
                },
                cur: function () {
                    var t = M.propHooks[this.prop];
                    return t && t.get ? t.get(this) : M.propHooks._default.get(this);
                },
                run: function (t) {
                    var e,
                        i = M.propHooks[this.prop];
                    return (
                        (this.pos = e = this.options.duration ? rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t),
                        (this.now = (this.end - this.start) * e + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        i && i.set ? i.set(this) : M.propHooks._default.set(this),
                        this
                    );
                },
            }),
            (M.prototype.init.prototype = M.prototype),
            (M.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || (t.elem.style && null != t.elem.style[t.prop]) ? ((e = rt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0) : t.elem[t.prop];
                    },
                    set: function (t) {
                        rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : (t.elem[t.prop] = t.now);
                    },
                },
            }),
            (M.propHooks.scrollTop = M.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                },
            }),
            (rt.easing = {
                linear: function (t) {
                    return t;
                },
                swing: function (t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                },
            }),
            (rt.fx = M.prototype.init),
            (rt.fx.step = {});
        var pe,
            he,
            fe = /^(?:toggle|show|hide)$/,
            me = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$", "i"),
            ge = /queueHooks$/,
            ve = [R],
            ye = {
                "*": [
                    function (t, e) {
                        var i = this.createTween(t, e),
                            n = i.cur(),
                            r = me.exec(e),
                            o = (r && r[3]) || (rt.cssNumber[t] ? "" : "px"),
                            s = (rt.cssNumber[t] || ("px" !== o && +n)) && me.exec(rt.css(i.elem, t)),
                            a = 1,
                            l = 20;
                        if (s && s[3] !== o) {
                            (o = o || s[3]), (r = r || []), (s = +n || 1);
                            do {
                                (a = a || ".5"), (s /= a), rt.style(i.elem, t, s + o);
                            } while (a !== (a = i.cur() / n) && 1 !== a && --l);
                        }
                        return r && ((s = i.start = +s || +n || 0), (i.unit = o), (i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2])), i;
                    },
                ],
            };
        (rt.Animation = rt.extend(I, {
            tweener: function (t, e) {
                rt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
                for (var i, n = 0, r = t.length; r > n; n++) (i = t[n]), (ye[i] = ye[i] || []), ye[i].unshift(e);
            },
            prefilter: function (t, e) {
                e ? ve.unshift(t) : ve.push(t);
            },
        })),
            (rt.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? rt.extend({}, t) : { complete: i || (!i && e) || (rt.isFunction(t) && t), duration: t, easing: (i && e) || (e && !rt.isFunction(e) && e) };
                return (
                    (n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default),
                    (null == n.queue || !0 === n.queue) && (n.queue = "fx"),
                    (n.old = n.complete),
                    (n.complete = function () {
                        rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue);
                    }),
                    n
                );
            }),
            rt.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(Pt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
                },
                animate: function (t, e, i, n) {
                    var r = rt.isEmptyObject(t),
                        o = rt.speed(e, i, n),
                        s = function () {
                            var e = I(this, rt.extend({}, t), o);
                            (r || rt._data(this, "finish")) && e.stop(!0);
                        };
                    return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                },
                stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i);
                    };
                    return (
                        "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                        e && !1 !== t && this.queue(t || "fx", []),
                        this.each(function () {
                            var e = !0,
                                r = null != t && t + "queueHooks",
                                o = rt.timers,
                                s = rt._data(this);
                            if (r) s[r] && s[r].stop && n(s[r]);
                            else for (r in s) s[r] && s[r].stop && ge.test(r) && n(s[r]);
                            for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(i), (e = !1), o.splice(r, 1));
                            (e || !i) && rt.dequeue(this, t);
                        })
                    );
                },
                finish: function (t) {
                    return (
                        !1 !== t && (t = t || "fx"),
                        this.each(function () {
                            var e,
                                i = rt._data(this),
                                n = i[t + "queue"],
                                r = i[t + "queueHooks"],
                                o = rt.timers,
                                s = n ? n.length : 0;
                            for (i.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                            for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete i.finish;
                        })
                    );
                },
            }),
            rt.each(["toggle", "show", "hide"], function (t, e) {
                var i = rt.fn[e];
                rt.fn[e] = function (t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, r);
                };
            }),
            rt.each({ slideDown: N("show"), slideUp: N("hide"), slideToggle: N("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                rt.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n);
                };
            }),
            (rt.timers = []),
            (rt.fx.tick = function () {
                var t,
                    e = rt.timers,
                    i = 0;
                for (pe = rt.now(); i < e.length; i++) (t = e[i])() || e[i] !== t || e.splice(i--, 1);
                e.length || rt.fx.stop(), (pe = void 0);
            }),
            (rt.fx.timer = function (t) {
                rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop();
            }),
            (rt.fx.interval = 13),
            (rt.fx.start = function () {
                he || (he = setInterval(rt.fx.tick, rt.fx.interval));
            }),
            (rt.fx.stop = function () {
                clearInterval(he), (he = null);
            }),
            (rt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (rt.fn.delay = function (t, e) {
                return (
                    (t = rt.fx ? rt.fx.speeds[t] || t : t),
                    (e = e || "fx"),
                    this.queue(e, function (e, i) {
                        var n = setTimeout(e, t);
                        i.stop = function () {
                            clearTimeout(n);
                        };
                    })
                );
            }),
            (function () {
                var t, e, i, n, r;
                (e = ft.createElement("div")),
                    e.setAttribute("className", "t"),
                    (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                    (n = e.getElementsByTagName("a")[0]),
                    (i = ft.createElement("select")),
                    (r = i.appendChild(ft.createElement("option"))),
                    (t = e.getElementsByTagName("input")[0]),
                    (n.style.cssText = "top:1px"),
                    (it.getSetAttribute = "t" !== e.className),
                    (it.style = /top/.test(n.getAttribute("style"))),
                    (it.hrefNormalized = "/a" === n.getAttribute("href")),
                    (it.checkOn = !!t.value),
                    (it.optSelected = r.selected),
                    (it.enctype = !!ft.createElement("form").enctype),
                    (i.disabled = !0),
                    (it.optDisabled = !r.disabled),
                    (t = ft.createElement("input")),
                    t.setAttribute("value", ""),
                    (it.input = "" === t.getAttribute("value")),
                    (t.value = "t"),
                    t.setAttribute("type", "radio"),
                    (it.radioValue = "t" === t.value);
            })();
        var _e = /\r/g;
        rt.fn.extend({
            val: function (t) {
                var e,
                    i,
                    n,
                    r = this[0];
                return arguments.length
                    ? ((n = rt.isFunction(t)),
                      this.each(function (i) {
                          var r;
                          1 === this.nodeType &&
                              ((r = n ? t.call(this, i, rt(this).val()) : t),
                              null == r
                                  ? (r = "")
                                  : "number" == typeof r
                                  ? (r += "")
                                  : rt.isArray(r) &&
                                    (r = rt.map(r, function (t) {
                                        return null == t ? "" : t + "";
                                    })),
                              ((e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
                      }))
                    : r
                    ? ((e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()]), e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : ((i = r.value), "string" == typeof i ? i.replace(_e, "") : null == i ? "" : i))
                    : void 0;
            },
        }),
            rt.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = rt.find.attr(t, "value");
                            return null != e ? e : rt.trim(rt.text(t));
                        },
                    },
                    select: {
                        get: function (t) {
                            for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                                if (((i = n[l]), !((!i.selected && l !== r) || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || (i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))))) {
                                    if (((e = rt(i).val()), o)) return e;
                                    s.push(e);
                                }
                            return s;
                        },
                        set: function (t, e) {
                            for (var i, n, r = t.options, o = rt.makeArray(e), s = r.length; s--; )
                                if (((n = r[s]), rt.inArray(rt.valHooks.option.get(n), o) >= 0))
                                    try {
                                        n.selected = i = !0;
                                    } catch (t) {
                                        n.scrollHeight;
                                    }
                                else n.selected = !1;
                            return i || (t.selectedIndex = -1), r;
                        },
                    },
                },
            }),
            rt.each(["radio", "checkbox"], function () {
                (rt.valHooks[this] = {
                    set: function (t, e) {
                        return rt.isArray(e) ? (t.checked = rt.inArray(rt(t).val(), e) >= 0) : void 0;
                    },
                }),
                    it.checkOn ||
                        (rt.valHooks[this].get = function (t) {
                            return null === t.getAttribute("value") ? "on" : t.value;
                        });
            });
        var be,
            we,
            xe = rt.expr.attrHandle,
            Te = /^(?:checked|selected)$/i,
            Se = it.getSetAttribute,
            Ce = it.input;
        rt.fn.extend({
            attr: function (t, e) {
                return Et(this, rt.attr, t, e, arguments.length > 1);
            },
            removeAttr: function (t) {
                return this.each(function () {
                    rt.removeAttr(this, t);
                });
            },
        }),
            rt.extend({
                attr: function (t, e, i) {
                    var n,
                        r,
                        o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o)
                        return typeof t.getAttribute === xt
                            ? rt.prop(t, e, i)
                            : ((1 === o && rt.isXMLDoc(t)) || ((e = e.toLowerCase()), (n = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we : be))),
                              void 0 === i
                                  ? n && "get" in n && null !== (r = n.get(t, e))
                                      ? r
                                      : ((r = rt.find.attr(t, e)), null == r ? void 0 : r)
                                  : null !== i
                                  ? n && "set" in n && void 0 !== (r = n.set(t, i, e))
                                      ? r
                                      : (t.setAttribute(e, i + ""), i)
                                  : void rt.removeAttr(t, e));
                },
                removeAttr: function (t, e) {
                    var i,
                        n,
                        r = 0,
                        o = e && e.match(yt);
                    if (o && 1 === t.nodeType)
                        for (; (i = o[r++]); )
                            (n = rt.propFix[i] || i), rt.expr.match.bool.test(i) ? ((Ce && Se) || !Te.test(i) ? (t[n] = !1) : (t[rt.camelCase("default-" + i)] = t[n] = !1)) : rt.attr(t, i, ""), t.removeAttribute(Se ? i : n);
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e;
                            }
                        },
                    },
                },
            }),
            (we = {
                set: function (t, e, i) {
                    return !1 === e ? rt.removeAttr(t, i) : (Ce && Se) || !Te.test(i) ? t.setAttribute((!Se && rt.propFix[i]) || i, i) : (t[rt.camelCase("default-" + i)] = t[i] = !0), i;
                },
            }),
            rt.each(rt.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var i = xe[e] || rt.find.attr;
                xe[e] =
                    (Ce && Se) || !Te.test(e)
                        ? function (t, e, n) {
                              var r, o;
                              return n || ((o = xe[e]), (xe[e] = r), (r = null != i(t, e, n) ? e.toLowerCase() : null), (xe[e] = o)), r;
                          }
                        : function (t, e, i) {
                              return i ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null;
                          };
            }),
            (Ce && Se) ||
                (rt.attrHooks.value = {
                    set: function (t, e, i) {
                        return rt.nodeName(t, "input") ? void (t.defaultValue = e) : be && be.set(t, e, i);
                    },
                }),
            Se ||
                ((be = {
                    set: function (t, e, i) {
                        var n = t.getAttributeNode(i);
                        return n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))), (n.value = e += ""), "value" === i || e === t.getAttribute(i) ? e : void 0;
                    },
                }),
                (xe.id = xe.name = xe.coords = function (t, e, i) {
                    var n;
                    return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null;
                }),
                (rt.valHooks.button = {
                    get: function (t, e) {
                        var i = t.getAttributeNode(e);
                        return i && i.specified ? i.value : void 0;
                    },
                    set: be.set,
                }),
                (rt.attrHooks.contenteditable = {
                    set: function (t, e, i) {
                        be.set(t, "" !== e && e, i);
                    },
                }),
                rt.each(["width", "height"], function (t, e) {
                    rt.attrHooks[e] = {
                        set: function (t, i) {
                            return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
                        },
                    };
                })),
            it.style ||
                (rt.attrHooks.style = {
                    get: function (t) {
                        return t.style.cssText || void 0;
                    },
                    set: function (t, e) {
                        return (t.style.cssText = e + "");
                    },
                });
        var ke = /^(?:input|select|textarea|button|object)$/i,
            Pe = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function (t, e) {
                return Et(this, rt.prop, t, e, arguments.length > 1);
            },
            removeProp: function (t) {
                return (
                    (t = rt.propFix[t] || t),
                    this.each(function () {
                        try {
                            (this[t] = void 0), delete this[t];
                        } catch (t) {}
                    })
                );
            },
        }),
            rt.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function (t, e, i) {
                    var n,
                        r,
                        o,
                        s = t.nodeType;
                    if (t && 3 !== s && 8 !== s && 2 !== s)
                        return (
                            (o = 1 !== s || !rt.isXMLDoc(t)),
                            o && ((e = rt.propFix[e] || e), (r = rt.propHooks[e])),
                            void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t[e] = i)) : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = rt.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : ke.test(t.nodeName) || (Pe.test(t.nodeName) && t.href) ? 0 : -1;
                        },
                    },
                },
            }),
            it.hrefNormalized ||
                rt.each(["href", "src"], function (t, e) {
                    rt.propHooks[e] = {
                        get: function (t) {
                            return t.getAttribute(e, 4);
                        },
                    };
                }),
            it.optSelected ||
                (rt.propHooks.selected = {
                    get: function (t) {
                        var e = t.parentNode;
                        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
                    },
                }),
            rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                rt.propFix[this.toLowerCase()] = this;
            }),
            it.enctype || (rt.propFix.enctype = "encoding");
        var Ee = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function (t) {
                var e,
                    i,
                    n,
                    r,
                    o,
                    s,
                    a = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (rt.isFunction(t))
                    return this.each(function (e) {
                        rt(this).addClass(t.call(this, e, this.className));
                    });
                if (c)
                    for (e = (t || "").match(yt) || []; l > a; a++)
                        if (((i = this[a]), (n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : " ")))) {
                            for (o = 0; (r = e[o++]); ) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            (s = rt.trim(n)), i.className !== s && (i.className = s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    i,
                    n,
                    r,
                    o,
                    s,
                    a = 0,
                    l = this.length,
                    c = 0 === arguments.length || ("string" == typeof t && t);
                if (rt.isFunction(t))
                    return this.each(function (e) {
                        rt(this).removeClass(t.call(this, e, this.className));
                    });
                if (c)
                    for (e = (t || "").match(yt) || []; l > a; a++)
                        if (((i = this[a]), (n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : "")))) {
                            for (o = 0; (r = e[o++]); ) for (; n.indexOf(" " + r + " ") >= 0; ) n = n.replace(" " + r + " ", " ");
                            (s = t ? rt.trim(n) : ""), i.className !== s && (i.className = s);
                        }
                return this;
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i
                    ? e
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : this.each(
                          rt.isFunction(t)
                              ? function (i) {
                                    rt(this).toggleClass(t.call(this, i, this.className, e), e);
                                }
                              : function () {
                                    if ("string" === i) for (var e, n = 0, r = rt(this), o = t.match(yt) || []; (e = o[n++]); ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                                    else (i === xt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), (this.className = this.className || !1 === t ? "" : rt._data(this, "__className__") || ""));
                                }
                      );
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ee, " ").indexOf(e) >= 0) return !0;
                return !1;
            },
        }),
            rt.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function (t, e) {
                    rt.fn[e] = function (t, i) {
                        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
                    };
                }
            ),
            rt.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t);
                },
                bind: function (t, e, i) {
                    return this.on(t, null, e, i);
                },
                unbind: function (t, e) {
                    return this.off(t, null, e);
                },
                delegate: function (t, e, i, n) {
                    return this.on(e, t, i, n);
                },
                undelegate: function (t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
                },
            });
        var $e = rt.now(),
            Ae = /\?/,
            Oe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        (rt.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i,
                n = null,
                r = rt.trim(e + "");
            return r &&
                !rt.trim(
                    r.replace(Oe, function (t, e, r, o) {
                        return i && e && (n = 0), 0 === n ? t : ((i = r || e), (n += !o - !r), "");
                    })
                )
                ? Function("return " + r)()
                : rt.error("Invalid JSON: " + e);
        }),
            (rt.parseXML = function (e) {
                var i, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t.DOMParser ? ((n = new DOMParser()), (i = n.parseFromString(e, "text/xml"))) : ((i = new ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(e));
                } catch (t) {
                    i = void 0;
                }
                return (i && i.documentElement && !i.getElementsByTagName("parsererror").length) || rt.error("Invalid XML: " + e), i;
            });
        var Me,
            De,
            Ne = /#.*$/,
            Le = /([?&])_=[^&]*/,
            Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ie = /^(?:GET|HEAD)$/,
            ze = /^\/\//,
            Fe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            He = {},
            qe = {},
            Be = "*/".concat("*");
        try {
            De = location.href;
        } catch (t) {
            (De = ft.createElement("a")), (De.href = ""), (De = De.href);
        }
        (Me = Fe.exec(De.toLowerCase()) || []),
            rt.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: De,
                    type: "GET",
                    isLocal: je.test(Me[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: { "*": Be, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                    contents: { xml: /xml/, html: /html/, json: /json/ },
                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                    converters: { "* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function (t, e) {
                    return e ? H(H(t, rt.ajaxSettings), e) : H(rt.ajaxSettings, t);
                },
                ajaxPrefilter: z(He),
                ajaxTransport: z(qe),
                ajax: function (t, e) {
                    function i(t, e, i, n) {
                        var r,
                            u,
                            v,
                            y,
                            b,
                            x = e;
                        2 !== _ &&
                            ((_ = 2),
                            a && clearTimeout(a),
                            (c = void 0),
                            (s = n || ""),
                            (w.readyState = t > 0 ? 4 : 0),
                            (r = (t >= 200 && 300 > t) || 304 === t),
                            i && (y = q(d, w, i)),
                            (y = B(d, y, w, r)),
                            r
                                ? (d.ifModified && ((b = w.getResponseHeader("Last-Modified")), b && (rt.lastModified[o] = b), (b = w.getResponseHeader("etag")) && (rt.etag[o] = b)),
                                  204 === t || "HEAD" === d.type ? (x = "nocontent") : 304 === t ? (x = "notmodified") : ((x = y.state), (u = y.data), (v = y.error), (r = !v)))
                                : ((v = x), (t || !x) && ((x = "error"), 0 > t && (t = 0))),
                            (w.status = t),
                            (w.statusText = (e || x) + ""),
                            r ? f.resolveWith(p, [u, x, w]) : f.rejectWith(p, [w, x, v]),
                            w.statusCode(g),
                            (g = void 0),
                            l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]),
                            m.fireWith(p, [w, x]),
                            l && (h.trigger("ajaxComplete", [w, d]), --rt.active || rt.event.trigger("ajaxStop")));
                    }
                    "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                    var n,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d = rt.ajaxSetup({}, e),
                        p = d.context || d,
                        h = d.context && (p.nodeType || p.jquery) ? rt(p) : rt.event,
                        f = rt.Deferred(),
                        m = rt.Callbacks("once memory"),
                        g = d.statusCode || {},
                        v = {},
                        y = {},
                        _ = 0,
                        b = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (2 === _) {
                                    if (!u) for (u = {}; (e = Re.exec(s)); ) u[e[1].toLowerCase()] = e[2];
                                    e = u[t.toLowerCase()];
                                }
                                return null == e ? null : e;
                            },
                            getAllResponseHeaders: function () {
                                return 2 === _ ? s : null;
                            },
                            setRequestHeader: function (t, e) {
                                var i = t.toLowerCase();
                                return _ || ((t = y[i] = y[i] || t), (v[t] = e)), this;
                            },
                            overrideMimeType: function (t) {
                                return _ || (d.mimeType = t), this;
                            },
                            statusCode: function (t) {
                                var e;
                                if (t)
                                    if (2 > _) for (e in t) g[e] = [g[e], t[e]];
                                    else w.always(t[w.status]);
                                return this;
                            },
                            abort: function (t) {
                                var e = t || b;
                                return c && c.abort(e), i(0, e), this;
                            },
                        };
                    if (
                        ((f.promise(w).complete = m.add),
                        (w.success = w.done),
                        (w.error = w.fail),
                        (d.url = ((t || d.url || De) + "").replace(Ne, "").replace(ze, Me[1] + "//")),
                        (d.type = e.method || e.type || d.method || d.type),
                        (d.dataTypes = rt
                            .trim(d.dataType || "*")
                            .toLowerCase()
                            .match(yt) || [""]),
                        null == d.crossDomain &&
                            ((n = Fe.exec(d.url.toLowerCase())), (d.crossDomain = !(!n || (n[1] === Me[1] && n[2] === Me[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Me[3] || ("http:" === Me[1] ? "80" : "443")))))),
                        d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)),
                        F(He, d, e, w),
                        2 === _)
                    )
                        return w;
                    (l = rt.event && d.global),
                        l && 0 == rt.active++ && rt.event.trigger("ajaxStart"),
                        (d.type = d.type.toUpperCase()),
                        (d.hasContent = !Ie.test(d.type)),
                        (o = d.url),
                        d.hasContent || (d.data && ((o = d.url += (Ae.test(o) ? "&" : "?") + d.data), delete d.data), !1 === d.cache && (d.url = Le.test(o) ? o.replace(Le, "$1_=" + $e++) : o + (Ae.test(o) ? "&" : "?") + "_=" + $e++)),
                        d.ifModified && (rt.lastModified[o] && w.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && w.setRequestHeader("If-None-Match", rt.etag[o])),
                        ((d.data && d.hasContent && !1 !== d.contentType) || e.contentType) && w.setRequestHeader("Content-Type", d.contentType),
                        w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : d.accepts["*"]);
                    for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(p, w, d) || 2 === _)) return w.abort();
                    b = "abort";
                    for (r in { success: 1, error: 1, complete: 1 }) w[r](d[r]);
                    if ((c = F(qe, d, e, w))) {
                        (w.readyState = 1),
                            l && h.trigger("ajaxSend", [w, d]),
                            d.async &&
                                d.timeout > 0 &&
                                (a = setTimeout(function () {
                                    w.abort("timeout");
                                }, d.timeout));
                        try {
                            (_ = 1), c.send(v, i);
                        } catch (t) {
                            if (!(2 > _)) throw t;
                            i(-1, t);
                        }
                    } else i(-1, "No Transport");
                    return w;
                },
                getJSON: function (t, e, i) {
                    return rt.get(t, e, i, "json");
                },
                getScript: function (t, e) {
                    return rt.get(t, void 0, e, "script");
                },
            }),
            rt.each(["get", "post"], function (t, e) {
                rt[e] = function (t, i, n, r) {
                    return rt.isFunction(i) && ((r = r || n), (n = i), (i = void 0)), rt.ajax({ url: t, type: e, dataType: r, data: i, success: n });
                };
            }),
            (rt._evalUrl = function (t) {
                return rt.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
            }),
            rt.fn.extend({
                wrapAll: function (t) {
                    if (rt.isFunction(t))
                        return this.each(function (e) {
                            rt(this).wrapAll(t.call(this, e));
                        });
                    if (this[0]) {
                        var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]),
                            e
                                .map(function () {
                                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                                    return t;
                                })
                                .append(this);
                    }
                    return this;
                },
                wrapInner: function (t) {
                    return this.each(
                        rt.isFunction(t)
                            ? function (e) {
                                  rt(this).wrapInner(t.call(this, e));
                              }
                            : function () {
                                  var e = rt(this),
                                      i = e.contents();
                                  i.length ? i.wrapAll(t) : e.append(t);
                              }
                    );
                },
                wrap: function (t) {
                    var e = rt.isFunction(t);
                    return this.each(function (i) {
                        rt(this).wrapAll(e ? t.call(this, i) : t);
                    });
                },
                unwrap: function () {
                    return this.parent()
                        .each(function () {
                            rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes);
                        })
                        .end();
                },
            }),
            (rt.expr.filters.hidden = function (t) {
                return (t.offsetWidth <= 0 && t.offsetHeight <= 0) || (!it.reliableHiddenOffsets() && "none" === ((t.style && t.style.display) || rt.css(t, "display")));
            }),
            (rt.expr.filters.visible = function (t) {
                return !rt.expr.filters.hidden(t);
            });
        var We = /%20/g,
            Ve = /\[\]$/,
            Xe = /\r?\n/g,
            Ue = /^(?:submit|button|image|reset|file)$/i,
            Ye = /^(?:input|select|textarea|keygen)/i;
        (rt.param = function (t, e) {
            var i,
                n = [],
                r = function (t, e) {
                    (e = rt.isFunction(e) ? e() : null == e ? "" : e), (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
                };
            if ((void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || (t.jquery && !rt.isPlainObject(t))))
                rt.each(t, function () {
                    r(this.name, this.value);
                });
            else for (i in t) W(i, t[i], e, r);
            return n.join("&").replace(We, "+");
        }),
            rt.fn.extend({
                serialize: function () {
                    return rt.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = rt.prop(this, "elements");
                        return t ? rt.makeArray(t) : this;
                    })
                        .filter(function () {
                            var t = this.type;
                            return this.name && !rt(this).is(":disabled") && Ye.test(this.nodeName) && !Ue.test(t) && (this.checked || !$t.test(t));
                        })
                        .map(function (t, e) {
                            var i = rt(this).val();
                            return null == i
                                ? null
                                : rt.isArray(i)
                                ? rt.map(i, function (t) {
                                      return { name: e.name, value: t.replace(Xe, "\r\n") };
                                  })
                                : { name: e.name, value: i.replace(Xe, "\r\n") };
                        })
                        .get();
                },
            }),
            (rt.ajaxSettings.xhr =
                void 0 !== t.ActiveXObject
                    ? function () {
                          return (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V()) || X();
                      }
                    : V);
        var Ge = 0,
            Qe = {},
            Ze = rt.ajaxSettings.xhr();
        t.attachEvent &&
            t.attachEvent("onunload", function () {
                for (var t in Qe) Qe[t](void 0, !0);
            }),
            (it.cors = !!Ze && "withCredentials" in Ze),
            (Ze = it.ajax = !!Ze) &&
                rt.ajaxTransport(function (t) {
                    if (!t.crossDomain || it.cors) {
                        var e;
                        return {
                            send: function (i, n) {
                                var r,
                                    o = t.xhr(),
                                    s = ++Ge;
                                if ((o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                                for (r in i) void 0 !== i[r] && o.setRequestHeader(r, i[r] + "");
                                o.send((t.hasContent && t.data) || null),
                                    (e = function (i, r) {
                                        var a, l, c;
                                        if (e && (r || 4 === o.readyState))
                                            if ((delete Qe[s], (e = void 0), (o.onreadystatechange = rt.noop), r)) 4 !== o.readyState && o.abort();
                                            else {
                                                (c = {}), (a = o.status), "string" == typeof o.responseText && (c.text = o.responseText);
                                                try {
                                                    l = o.statusText;
                                                } catch (t) {
                                                    l = "";
                                                }
                                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : (a = c.text ? 200 : 404);
                                            }
                                        c && n(a, l, c, o.getAllResponseHeaders());
                                    }),
                                    t.async ? (4 === o.readyState ? setTimeout(e) : (o.onreadystatechange = Qe[s] = e)) : e();
                            },
                            abort: function () {
                                e && e(void 0, !0);
                            },
                        };
                    }
                }),
            rt.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                    "text script": function (t) {
                        return rt.globalEval(t), t;
                    },
                },
            }),
            rt.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && ((t.type = "GET"), (t.global = !1));
            }),
            rt.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e,
                        i = ft.head || rt("head")[0] || ft.documentElement;
                    return {
                        send: function (n, r) {
                            (e = ft.createElement("script")),
                                (e.async = !0),
                                t.scriptCharset && (e.charset = t.scriptCharset),
                                (e.src = t.url),
                                (e.onload = e.onreadystatechange = function (t, i) {
                                    (i || !e.readyState || /loaded|complete/.test(e.readyState)) && ((e.onload = e.onreadystatechange = null), e.parentNode && e.parentNode.removeChild(e), (e = null), i || r(200, "success"));
                                }),
                                i.insertBefore(e, i.firstChild);
                        },
                        abort: function () {
                            e && e.onload(void 0, !0);
                        },
                    };
                }
            });
        var Ke = [],
            Je = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ke.pop() || rt.expando + "_" + $e++;
                return (this[t] = !0), t;
            },
        }),
            rt.ajaxPrefilter("json jsonp", function (e, i, n) {
                var r,
                    o,
                    s,
                    a = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0]
                    ? ((r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                      a ? (e[a] = e[a].replace(Je, "$1" + r)) : !1 !== e.jsonp && (e.url += (Ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                      (e.converters["script json"] = function () {
                          return s || rt.error(r + " was not called"), s[0];
                      }),
                      (e.dataTypes[0] = "json"),
                      (o = t[r]),
                      (t[r] = function () {
                          s = arguments;
                      }),
                      n.always(function () {
                          (t[r] = o), e[r] && ((e.jsonpCallback = i.jsonpCallback), Ke.push(r)), s && rt.isFunction(o) && o(s[0]), (s = o = void 0);
                      }),
                      "script")
                    : void 0;
            }),
            (rt.parseHTML = function (t, e, i) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && ((i = e), (e = !1)), (e = e || ft);
                var n = dt.exec(t),
                    r = !i && [];
                return n ? [e.createElement(n[1])] : ((n = rt.buildFragment([t], e, r)), r && r.length && rt(r).remove(), rt.merge([], n.childNodes));
            });
        var ti = rt.fn.load;
        (rt.fn.load = function (t, e, i) {
            if ("string" != typeof t && ti) return ti.apply(this, arguments);
            var n,
                r,
                o,
                s = this,
                a = t.indexOf(" ");
            return (
                a >= 0 && ((n = rt.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
                rt.isFunction(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
                s.length > 0 &&
                    rt
                        .ajax({ url: t, type: o, dataType: "html", data: e })
                        .done(function (t) {
                            (r = arguments), s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t);
                        })
                        .complete(
                            i &&
                                function (t, e) {
                                    s.each(i, r || [t.responseText, e, t]);
                                }
                        ),
                this
            );
        }),
            rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                rt.fn[e] = function (t) {
                    return this.on(e, t);
                };
            }),
            (rt.expr.filters.animated = function (t) {
                return rt.grep(rt.timers, function (e) {
                    return t === e.elem;
                }).length;
            });
        var ei = t.document.documentElement;
        (rt.offset = {
            setOffset: function (t, e, i) {
                var n,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = rt.css(t, "position"),
                    d = rt(t),
                    p = {};
                "static" === u && (t.style.position = "relative"),
                    (a = d.offset()),
                    (o = rt.css(t, "top")),
                    (l = rt.css(t, "left")),
                    (c = ("absolute" === u || "fixed" === u) && rt.inArray("auto", [o, l]) > -1),
                    c ? ((n = d.position()), (s = n.top), (r = n.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                    rt.isFunction(e) && (e = e.call(t, i, a)),
                    null != e.top && (p.top = e.top - a.top + s),
                    null != e.left && (p.left = e.left - a.left + r),
                    "using" in e ? e.using.call(t, p) : d.css(p);
            },
        }),
            rt.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  rt.offset.setOffset(this, t, e);
                              });
                    var e,
                        i,
                        n = { top: 0, left: 0 },
                        r = this[0],
                        o = r && r.ownerDocument;
                    return o
                        ? ((e = o.documentElement),
                          rt.contains(e, r)
                              ? (typeof r.getBoundingClientRect !== xt && (n = r.getBoundingClientRect()),
                                (i = U(o)),
                                { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                              : n)
                        : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var t,
                            e,
                            i = { top: 0, left: 0 },
                            n = this[0];
                        return (
                            "fixed" === rt.css(n, "position")
                                ? (e = n.getBoundingClientRect())
                                : ((t = this.offsetParent()), (e = this.offset()), rt.nodeName(t[0], "html") || (i = t.offset()), (i.top += rt.css(t[0], "borderTopWidth", !0)), (i.left += rt.css(t[0], "borderLeftWidth", !0))),
                            { top: e.top - i.top - rt.css(n, "marginTop", !0), left: e.left - i.left - rt.css(n, "marginLeft", !0) }
                        );
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || ei; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position"); ) t = t.offsetParent;
                        return t || ei;
                    });
                },
            }),
            rt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                var i = /Y/.test(e);
                rt.fn[t] = function (n) {
                    return Et(
                        this,
                        function (t, n, r) {
                            var o = U(t);
                            return void 0 === r ? (o ? (e in o ? o[e] : o.document.documentElement[n]) : t[n]) : void (o ? o.scrollTo(i ? rt(o).scrollLeft() : r, i ? r : rt(o).scrollTop()) : (t[n] = r));
                        },
                        t,
                        n,
                        arguments.length,
                        null
                    );
                };
            }),
            rt.each(["top", "left"], function (t, e) {
                rt.cssHooks[e] = k(it.pixelPosition, function (t, i) {
                    return i ? ((i = te(t, e)), ie.test(i) ? rt(t).position()[e] + "px" : i) : void 0;
                });
            }),
            rt.each({ Height: "height", Width: "width" }, function (t, e) {
                rt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                    rt.fn[n] = function (n, r) {
                        var o = arguments.length && (i || "boolean" != typeof n),
                            s = i || (!0 === n || !0 === r ? "margin" : "border");
                        return Et(
                            this,
                            function (e, i, n) {
                                var r;
                                return rt.isWindow(e)
                                    ? e.document.documentElement["client" + t]
                                    : 9 === e.nodeType
                                    ? ((r = e.documentElement), Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t]))
                                    : void 0 === n
                                    ? rt.css(e, i, s)
                                    : rt.style(e, i, n, s);
                            },
                            e,
                            o ? n : void 0,
                            o,
                            null
                        );
                    };
                });
            }),
            (rt.fn.size = function () {
                return this.length;
            }),
            (rt.fn.andSelf = rt.fn.addBack),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return rt;
                });
        var ii = t.jQuery,
            ni = t.$;
        return (
            (rt.noConflict = function (e) {
                return t.$ === rt && (t.$ = ni), e && t.jQuery === rt && (t.jQuery = ii), rt;
            }),
            typeof e === xt && (t.jQuery = t.$ = rt),
            rt
        );
    }),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? (module.exports = t(require("jquery"))) : t(jQuery);
    })(function (t) {
        t.extend(t.fn, {
            validate: function (e) {
                if (!this.length) return void (e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = t.data(this[0], "validator");
                return (
                    i ||
                    (this.attr("novalidate", "novalidate"),
                    (i = new t.validator(e, this[0])),
                    t.data(this[0], "validator", i),
                    i.settings.onsubmit &&
                        (this.on("click.validate", ":submit", function (e) {
                            (i.submitButton = e.currentTarget), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0);
                        }),
                        this.on("submit.validate", function (e) {
                            function n() {
                                var n, r;
                                return (
                                    i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
                                    !i.settings.submitHandler || ((r = i.settings.submitHandler.call(i, i.currentForm, e)), n && n.remove(), void 0 !== r && r)
                                );
                            }
                            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? ((i.cancelSubmit = !1), n()) : i.form() ? (i.pendingRequest ? ((i.formSubmitted = !0), !1) : n()) : (i.focusInvalid(), !1);
                        })),
                    i)
                );
            },
            valid: function () {
                var e, i, n;
                return (
                    t(this[0]).is("form")
                        ? (e = this.validate().form())
                        : ((n = []),
                          (e = !0),
                          (i = t(this[0].form).validate()),
                          this.each(function () {
                              (e = i.element(this) && e) || (n = n.concat(i.errorList));
                          }),
                          (i.errorList = n)),
                    e
                );
            },
            rules: function (e, i) {
                var n,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c = this[0];
                if (null != c && (!c.form && c.hasAttribute("contenteditable") && ((c.form = this.closest("form")[0]), (c.name = this.attr("name"))), null != c.form)) {
                    if (e)
                        switch (((n = t.data(c.form, "validator").settings), (r = n.rules), (o = t.validator.staticRules(c)), e)) {
                            case "add":
                                t.extend(o, t.validator.normalizeRule(i)), delete o.messages, (r[c.name] = o), i.messages && (n.messages[c.name] = t.extend(n.messages[c.name], i.messages));
                                break;
                            case "remove":
                                return i
                                    ? ((l = {}),
                                      t.each(i.split(/\s/), function (t, e) {
                                          (l[e] = o[e]), delete o[e];
                                      }),
                                      l)
                                    : (delete r[c.name], o);
                        }
                    return (
                        (s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c)),
                        s.required && ((a = s.required), delete s.required, (s = t.extend({ required: a }, s))),
                        s.remote && ((a = s.remote), delete s.remote, (s = t.extend(s, { remote: a }))),
                        s
                    );
                }
            },
        }),
            t.extend(t.expr.pseudos || t.expr[":"], {
                blank: function (e) {
                    return !t.trim("" + t(e).val());
                },
                filled: function (e) {
                    var i = t(e).val();
                    return null !== i && !!t.trim("" + i);
                },
                unchecked: function (e) {
                    return !t(e).prop("checked");
                },
            }),
            (t.validator = function (e, i) {
                (this.settings = t.extend(!0, {}, t.validator.defaults, e)), (this.currentForm = i), this.init();
            }),
            (t.validator.format = function (e, i) {
                return 1 === arguments.length
                    ? function () {
                          var i = t.makeArray(arguments);
                          return i.unshift(e), t.validator.format.apply(this, i);
                      }
                    : void 0 === i
                    ? e
                    : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
                      i.constructor !== Array && (i = [i]),
                      t.each(i, function (t, i) {
                          e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                              return i;
                          });
                      }),
                      e);
            }),
            t.extend(t.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: t([]),
                    errorLabelContainer: t([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (t) {
                        (this.lastActive = t), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)));
                    },
                    onfocusout: function (t) {
                        this.checkable(t) || (!(t.name in this.submitted) && this.optional(t)) || this.element(t);
                    },
                    onkeyup: function (e, i) {
                        var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                        (9 === i.which && "" === this.elementValue(e)) || -1 !== t.inArray(i.keyCode, n) || ((e.name in this.submitted || e.name in this.invalid) && this.element(e));
                    },
                    onclick: function (t) {
                        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
                    },
                    highlight: function (e, i, n) {
                        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n);
                    },
                    unhighlight: function (e, i, n) {
                        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n);
                    },
                },
                setDefaults: function (e) {
                    t.extend(t.validator.defaults, e);
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: t.validator.format("Please enter no more than {0} characters."),
                    minlength: t.validator.format("Please enter at least {0} characters."),
                    rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: t.validator.format("Please enter a value between {0} and {1}."),
                    max: t.validator.format("Please enter a value less than or equal to {0}."),
                    min: t.validator.format("Please enter a value greater than or equal to {0}."),
                    step: t.validator.format("Please enter a multiple of {0}."),
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function () {
                        function e(e) {
                            !this.form && this.hasAttribute("contenteditable") && ((this.form = t(this).closest("form")[0]), (this.name = t(this).attr("name")));
                            var i = t.data(this.form, "validator"),
                                n = "on" + e.type.replace(/^validate/, ""),
                                r = i.settings;
                            r[n] && !t(this).is(r.ignore) && r[n].call(i, this, e);
                        }
                        (this.labelContainer = t(this.settings.errorLabelContainer)),
                            (this.errorContext = (this.labelContainer.length && this.labelContainer) || t(this.currentForm)),
                            (this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                            (this.submitted = {}),
                            (this.valueCache = {}),
                            (this.pendingRequest = 0),
                            (this.pending = {}),
                            (this.invalid = {}),
                            this.reset();
                        var i,
                            n = (this.groups = {});
                        t.each(this.settings.groups, function (e, i) {
                            "string" == typeof i && (i = i.split(/\s/)),
                                t.each(i, function (t, i) {
                                    n[i] = e;
                                });
                        }),
                            (i = this.settings.rules),
                            t.each(i, function (e, n) {
                                i[e] = t.validator.normalizeRule(n);
                            }),
                            t(this.currentForm)
                                .on(
                                    "focusin.validate focusout.validate keyup.validate",
                                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                                    e
                                )
                                .on("click.validate", "select, option, [type='radio'], [type='checkbox']", e),
                            this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    },
                    form: function () {
                        return (
                            this.checkForm(), t.extend(this.submitted, this.errorMap), (this.invalid = t.extend({}, this.errorMap)), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                        );
                    },
                    checkForm: function () {
                        this.prepareForm();
                        for (var t = 0, e = (this.currentElements = this.elements()); e[t]; t++) this.check(e[t]);
                        return this.valid();
                    },
                    element: function (e) {
                        var i,
                            n,
                            r = this.clean(e),
                            o = this.validationTargetFor(r),
                            s = this,
                            a = !0;
                        return (
                            void 0 === o
                                ? delete this.invalid[r.name]
                                : (this.prepareElement(o),
                                  (this.currentElements = t(o)),
                                  (n = this.groups[o.name]),
                                  n &&
                                      t.each(this.groups, function (t, e) {
                                          e === n && t !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(t)))) && r.name in s.invalid && (s.currentElements.push(r), (a = s.check(r) && a));
                                      }),
                                  (i = !1 !== this.check(o)),
                                  (a = a && i),
                                  (this.invalid[o.name] = !i),
                                  this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                                  this.showErrors(),
                                  t(e).attr("aria-invalid", !i)),
                            a
                        );
                    },
                    showErrors: function (e) {
                        if (e) {
                            var i = this;
                            t.extend(this.errorMap, e),
                                (this.errorList = t.map(this.errorMap, function (t, e) {
                                    return { message: t, element: i.findByName(e)[0] };
                                })),
                                (this.successList = t.grep(this.successList, function (t) {
                                    return !(t.name in e);
                                }));
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                    },
                    resetForm: function () {
                        t.fn.resetForm && t(this.currentForm).resetForm(), (this.invalid = {}), (this.submitted = {}), this.prepareForm(), this.hideErrors();
                        var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        this.resetElements(e);
                    },
                    resetElements: function (t) {
                        var e;
                        if (this.settings.unhighlight) for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                        else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                    },
                    numberOfInvalids: function () {
                        return this.objectLength(this.invalid);
                    },
                    objectLength: function (t) {
                        var e,
                            i = 0;
                        for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                        return i;
                    },
                    hideErrors: function () {
                        this.hideThese(this.toHide);
                    },
                    hideThese: function (t) {
                        t.not(this.containers).text(""), this.addWrapper(t).hide();
                    },
                    valid: function () {
                        return 0 === this.size();
                    },
                    size: function () {
                        return this.errorList.length;
                    },
                    focusInvalid: function () {
                        if (this.settings.focusInvalid)
                            try {
                                t(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                                    .filter(":visible")
                                    .focus()
                                    .trigger("focusin");
                            } catch (t) {}
                    },
                    findLastActive: function () {
                        var e = this.lastActive;
                        return (
                            e &&
                            1 ===
                                t.grep(this.errorList, function (t) {
                                    return t.element.name === e.name;
                                }).length &&
                            e
                        );
                    },
                    elements: function () {
                        var e = this,
                            i = {};
                        return t(this.currentForm)
                            .find("input, select, textarea, [contenteditable]")
                            .not(":submit, :reset, :image, :disabled")
                            .not(this.settings.ignore)
                            .filter(function () {
                                var n = this.name || t(this).attr("name");
                                return (
                                    !n && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                                    this.hasAttribute("contenteditable") && ((this.form = t(this).closest("form")[0]), (this.name = n)),
                                    !(n in i || !e.objectLength(t(this).rules()) || ((i[n] = !0), 0))
                                );
                            });
                    },
                    clean: function (e) {
                        return t(e)[0];
                    },
                    errors: function () {
                        var e = this.settings.errorClass.split(" ").join(".");
                        return t(this.settings.errorElement + "." + e, this.errorContext);
                    },
                    resetInternals: function () {
                        (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = t([])), (this.toHide = t([]));
                    },
                    reset: function () {
                        this.resetInternals(), (this.currentElements = t([]));
                    },
                    prepareForm: function () {
                        this.reset(), (this.toHide = this.errors().add(this.containers));
                    },
                    prepareElement: function (t) {
                        this.reset(), (this.toHide = this.errorsFor(t));
                    },
                    elementValue: function (e) {
                        var i,
                            n,
                            r = t(e),
                            o = e.type;
                        return "radio" === o || "checkbox" === o
                            ? this.findByName(e.name).filter(":checked").val()
                            : "number" === o && void 0 !== e.validity
                            ? e.validity.badInput
                                ? "NaN"
                                : r.val()
                            : ((i = e.hasAttribute("contenteditable") ? r.text() : r.val()),
                              "file" === o
                                  ? "C:\\fakepath\\" === i.substr(0, 12)
                                      ? i.substr(12)
                                      : ((n = i.lastIndexOf("/")), n >= 0 ? i.substr(n + 1) : ((n = i.lastIndexOf("\\")), n >= 0 ? i.substr(n + 1) : i))
                                  : "string" == typeof i
                                  ? i.replace(/\r/g, "")
                                  : i);
                    },
                    check: function (e) {
                        e = this.validationTargetFor(this.clean(e));
                        var i,
                            n,
                            r,
                            o,
                            s = t(e).rules(),
                            a = t.map(s, function (t, e) {
                                return e;
                            }).length,
                            l = !1,
                            c = this.elementValue(e);
                        if (("function" == typeof s.normalizer ? (o = s.normalizer) : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o)) {
                            if ("string" != typeof (c = o.call(e, c))) throw new TypeError("The normalizer should return a string value.");
                            delete s.normalizer;
                        }
                        for (n in s) {
                            r = { method: n, parameters: s[n] };
                            try {
                                if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, c, e, r.parameters)) && 1 === a) {
                                    l = !0;
                                    continue;
                                }
                                if (((l = !1), "pending" === i)) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                                if (!i) return this.formatAndAdd(e, r), !1;
                            } catch (t) {
                                throw (
                                    (this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t),
                                    t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."),
                                    t)
                                );
                            }
                        }
                        if (!l) return this.objectLength(s) && this.successList.push(e), !0;
                    },
                    customDataMessage: function (e, i) {
                        return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg");
                    },
                    customMessage: function (t, e) {
                        var i = this.settings.messages[t];
                        return i && (i.constructor === String ? i : i[e]);
                    },
                    findDefined: function () {
                        for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];
                    },
                    defaultMessage: function (e, i) {
                        "string" == typeof i && (i = { method: i });
                        var n = this.findDefined(
                                this.customMessage(e.name, i.method),
                                this.customDataMessage(e, i.method),
                                (!this.settings.ignoreTitle && e.title) || void 0,
                                t.validator.messages[i.method],
                                "<strong>Warning: No message defined for " + e.name + "</strong>"
                            ),
                            r = /\$?\{(\d+)\}/g;
                        return "function" == typeof n ? (n = n.call(this, i.parameters, e)) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)), n;
                    },
                    formatAndAdd: function (t, e) {
                        var i = this.defaultMessage(t, e);
                        this.errorList.push({ message: i, element: t, method: e.method }), (this.errorMap[t.name] = i), (this.submitted[t.name] = i);
                    },
                    addWrapper: function (t) {
                        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
                    },
                    defaultShowErrors: function () {
                        var t, e, i;
                        for (t = 0; this.errorList[t]; t++)
                            (i = this.errorList[t]), this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                        if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                        if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                        (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
                    },
                    validElements: function () {
                        return this.currentElements.not(this.invalidElements());
                    },
                    invalidElements: function () {
                        return t(this.errorList).map(function () {
                            return this.element;
                        });
                    },
                    showLabel: function (e, i) {
                        var n,
                            r,
                            o,
                            s,
                            a = this.errorsFor(e),
                            l = this.idOrName(e),
                            c = t(e).attr("aria-describedby");
                        a.length
                            ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i))
                            : ((a = t("<" + this.settings.errorElement + ">")
                                  .attr("id", l + "-error")
                                  .addClass(this.settings.errorClass)
                                  .html(i || "")),
                              (n = a),
                              this.settings.wrapper &&
                                  (n = a
                                      .hide()
                                      .show()
                                      .wrap("<" + this.settings.wrapper + "/>")
                                      .parent()),
                              this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, t(e)) : n.insertAfter(e),
                              a.is("label")
                                  ? a.attr("for", l)
                                  : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length &&
                                    ((o = a.attr("id")),
                                    c ? c.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (c += " " + o) : (c = o),
                                    t(e).attr("aria-describedby", c),
                                    (r = this.groups[e.name]) &&
                                        ((s = this),
                                        t.each(s.groups, function (e, i) {
                                            i === r && t("[name='" + s.escapeCssMeta(e) + "']", s.currentForm).attr("aria-describedby", a.attr("id"));
                                        })))),
                            !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)),
                            (this.toShow = this.toShow.add(a));
                    },
                    errorsFor: function (e) {
                        var i = this.escapeCssMeta(this.idOrName(e)),
                            n = t(e).attr("aria-describedby"),
                            r = "label[for='" + i + "'], label[for='" + i + "'] *";
                        return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r);
                    },
                    escapeCssMeta: function (t) {
                        return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
                    },
                    idOrName: function (t) {
                        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
                    },
                    validationTargetFor: function (e) {
                        return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0];
                    },
                    checkable: function (t) {
                        return /radio|checkbox/i.test(t.type);
                    },
                    findByName: function (e) {
                        return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']");
                    },
                    getLength: function (e, i) {
                        switch (i.nodeName.toLowerCase()) {
                            case "select":
                                return t("option:selected", i).length;
                            case "input":
                                if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length;
                        }
                        return e.length;
                    },
                    depend: function (t, e) {
                        return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e);
                    },
                    dependTypes: {
                        boolean: function (t) {
                            return t;
                        },
                        string: function (e, i) {
                            return !!t(e, i.form).length;
                        },
                        function: function (t, e) {
                            return t(e);
                        },
                    },
                    optional: function (e) {
                        var i = this.elementValue(e);
                        return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch";
                    },
                    startRequest: function (e) {
                        this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), (this.pending[e.name] = !0));
                    },
                    stopRequest: function (e, i) {
                        this.pendingRequest--,
                            this.pendingRequest < 0 && (this.pendingRequest = 0),
                            delete this.pending[e.name],
                            t(e).removeClass(this.settings.pendingClass),
                            i && 0 === this.pendingRequest && this.formSubmitted && this.form()
                                ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), (this.formSubmitted = !1))
                                : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
                    },
                    previousValue: function (e, i) {
                        return (i = ("string" == typeof i && i) || "remote"), t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, { method: i }) });
                    },
                    destroy: function () {
                        this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
                    },
                },
                classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
                addClassRules: function (e, i) {
                    e.constructor === String ? (this.classRuleSettings[e] = i) : t.extend(this.classRuleSettings, e);
                },
                classRules: function (e) {
                    var i = {},
                        n = t(e).attr("class");
                    return (
                        n &&
                            t.each(n.split(" "), function () {
                                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]);
                            }),
                        i
                    );
                },
                normalizeAttributeRule: function (t, e, i, n) {
                    /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && ((n = Number(n)), isNaN(n) && (n = void 0)), n || 0 === n ? (t[i] = n) : e === i && "range" !== e && (t[i] = !0);
                },
                attributeRules: function (e) {
                    var i,
                        n,
                        r = {},
                        o = t(e),
                        s = e.getAttribute("type");
                    for (i in t.validator.methods) "required" === i ? ((n = e.getAttribute(i)), "" === n && (n = !0), (n = !!n)) : (n = o.attr(i)), this.normalizeAttributeRule(r, s, i, n);
                    return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
                },
                dataRules: function (e) {
                    var i,
                        n,
                        r = {},
                        o = t(e),
                        s = e.getAttribute("type");
                    for (i in t.validator.methods) (n = o.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())), this.normalizeAttributeRule(r, s, i, n);
                    return r;
                },
                staticRules: function (e) {
                    var i = {},
                        n = t.data(e.form, "validator");
                    return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i;
                },
                normalizeRules: function (e, i) {
                    return (
                        t.each(e, function (n, r) {
                            if (!1 === r) return void delete e[n];
                            if (r.param || r.depends) {
                                var o = !0;
                                switch (typeof r.depends) {
                                    case "string":
                                        o = !!t(r.depends, i.form).length;
                                        break;
                                    case "function":
                                        o = r.depends.call(i, i);
                                }
                                o ? (e[n] = void 0 === r.param || r.param) : (t.data(i.form, "validator").resetElements(t(i)), delete e[n]);
                            }
                        }),
                        t.each(e, function (n, r) {
                            e[n] = t.isFunction(r) && "normalizer" !== n ? r(i) : r;
                        }),
                        t.each(["minlength", "maxlength"], function () {
                            e[this] && (e[this] = Number(e[this]));
                        }),
                        t.each(["rangelength", "range"], function () {
                            var i;
                            e[this] &&
                                (t.isArray(e[this]) ? (e[this] = [Number(e[this][0]), Number(e[this][1])]) : "string" == typeof e[this] && ((i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (e[this] = [Number(i[0]), Number(i[1])])));
                        }),
                        t.validator.autoCreateRanges &&
                            (null != e.min && null != e.max && ((e.range = [e.min, e.max]), delete e.min, delete e.max),
                            null != e.minlength && null != e.maxlength && ((e.rangelength = [e.minlength, e.maxlength]), delete e.minlength, delete e.maxlength)),
                        e
                    );
                },
                normalizeRule: function (e) {
                    if ("string" == typeof e) {
                        var i = {};
                        t.each(e.split(/\s/), function () {
                            i[this] = !0;
                        }),
                            (e = i);
                    }
                    return e;
                },
                addMethod: function (e, i, n) {
                    (t.validator.methods[e] = i), (t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e]), i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e));
                },
                methods: {
                    required: function (e, i, n) {
                        if (!this.depend(n, i)) return "dependency-mismatch";
                        if ("select" === i.nodeName.toLowerCase()) {
                            var r = t(i).val();
                            return r && r.length > 0;
                        }
                        return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0;
                    },
                    email: function (t, e) {
                        return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t);
                    },
                    url: function (t, e) {
                        return (
                            this.optional(e) ||
                            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                                t
                            )
                        );
                    },
                    date: function (t, e) {
                        return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString());
                    },
                    dateISO: function (t, e) {
                        return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t);
                    },
                    number: function (t, e) {
                        return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
                    },
                    digits: function (t, e) {
                        return this.optional(e) || /^\d+$/.test(t);
                    },
                    minlength: function (e, i, n) {
                        var r = t.isArray(e) ? e.length : this.getLength(e, i);
                        return this.optional(i) || r >= n;
                    },
                    maxlength: function (e, i, n) {
                        var r = t.isArray(e) ? e.length : this.getLength(e, i);
                        return this.optional(i) || r <= n;
                    },
                    rangelength: function (e, i, n) {
                        var r = t.isArray(e) ? e.length : this.getLength(e, i);
                        return this.optional(i) || (r >= n[0] && r <= n[1]);
                    },
                    min: function (t, e, i) {
                        return this.optional(e) || t >= i;
                    },
                    max: function (t, e, i) {
                        return this.optional(e) || t <= i;
                    },
                    range: function (t, e, i) {
                        return this.optional(e) || (t >= i[0] && t <= i[1]);
                    },
                    step: function (e, i, n) {
                        var r,
                            o = t(i).attr("type"),
                            s = "Step attribute on input type " + o + " is not supported.",
                            a = ["text", "number", "range"],
                            l = new RegExp("\\b" + o + "\\b"),
                            c = o && !l.test(a.join()),
                            u = function (t) {
                                var e = ("" + t).match(/(?:\.(\d+))?$/);
                                return e && e[1] ? e[1].length : 0;
                            },
                            d = function (t) {
                                return Math.round(t * Math.pow(10, r));
                            },
                            p = !0;
                        if (c) throw new Error(s);
                        return (r = u(n)), (u(e) > r || d(e) % d(n) != 0) && (p = !1), this.optional(i) || p;
                    },
                    equalTo: function (e, i, n) {
                        var r = t(n);
                        return (
                            this.settings.onfocusout &&
                                r.not(".validate-equalTo-blur").length &&
                                r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                                    t(i).valid();
                                }),
                            e === r.val()
                        );
                    },
                    remote: function (e, i, n, r) {
                        if (this.optional(i)) return "dependency-mismatch";
                        r = ("string" == typeof r && r) || "remote";
                        var o,
                            s,
                            a,
                            l = this.previousValue(i, r);
                        return (
                            this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                            (l.originalMessage = l.originalMessage || this.settings.messages[i.name][r]),
                            (this.settings.messages[i.name][r] = l.message),
                            (n = ("string" == typeof n && { url: n }) || n),
                            (a = t.param(t.extend({ data: e }, n.data))),
                            l.old === a
                                ? l.valid
                                : ((l.old = a),
                                  (o = this),
                                  this.startRequest(i),
                                  (s = {}),
                                  (s[i.name] = e),
                                  t.ajax(
                                      t.extend(
                                          !0,
                                          {
                                              mode: "abort",
                                              port: "validate" + i.name,
                                              dataType: "json",
                                              data: s,
                                              context: o.currentForm,
                                              success: function (t) {
                                                  var n,
                                                      s,
                                                      a,
                                                      c = !0 === t || "true" === t;
                                                  (o.settings.messages[i.name][r] = l.originalMessage),
                                                      c
                                                          ? ((a = o.formSubmitted), o.resetInternals(), (o.toHide = o.errorsFor(i)), (o.formSubmitted = a), o.successList.push(i), (o.invalid[i.name] = !1), o.showErrors())
                                                          : ((n = {}), (s = t || o.defaultMessage(i, { method: r, parameters: e })), (n[i.name] = l.message = s), (o.invalid[i.name] = !0), o.showErrors(n)),
                                                      (l.valid = c),
                                                      o.stopRequest(i, c);
                                              },
                                          },
                                          n
                                      )
                                  ),
                                  "pending")
                        );
                    },
                },
            });
        var e,
            i = {};
        return (
            t.ajaxPrefilter
                ? t.ajaxPrefilter(function (t, e, n) {
                      var r = t.port;
                      "abort" === t.mode && (i[r] && i[r].abort(), (i[r] = n));
                  })
                : ((e = t.ajax),
                  (t.ajax = function (n) {
                      var r = ("mode" in n ? n : t.ajaxSettings).mode,
                          o = ("port" in n ? n : t.ajaxSettings).port;
                      return "abort" === r ? (i[o] && i[o].abort(), (i[o] = e.apply(this, arguments)), i[o]) : e.apply(this, arguments);
                  })),
            t
        );
    }),
    (function (t) {
        "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = function (e, i) {
                  return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i;
              })
            : t(jQuery);
    })(function (t) {
        "use strict";
        function e(e) {
            var i = e.data;
            e.isDefaultPrevented() || (e.preventDefault(), t(e.target).closest("form").ajaxSubmit(i));
        }
        function i(e) {
            var i = e.target,
                n = t(i);
            if (!n.is("[type=submit],[type=image]")) {
                var r = n.closest("[type=submit]");
                if (0 === r.length) return;
                i = r[0];
            }
            var o = i.form;
            if (((o.clk = i), "image" === i.type))
                if (void 0 !== e.offsetX) (o.clk_x = e.offsetX), (o.clk_y = e.offsetY);
                else if ("function" == typeof t.fn.offset) {
                    var s = n.offset();
                    (o.clk_x = e.pageX - s.left), (o.clk_y = e.pageY - s.top);
                } else (o.clk_x = e.pageX - i.offsetLeft), (o.clk_y = e.pageY - i.offsetTop);
            setTimeout(function () {
                o.clk = o.clk_x = o.clk_y = null;
            }, 100);
        }
        function n() {
            if (t.fn.ajaxSubmit.debug) {
                var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e);
            }
        }
        var r = /\r?\n/g,
            o = {};
        (o.fileapi = void 0 !== t('<input type="file">').get(0).files), (o.formdata = void 0 !== window.FormData);
        var s = !!t.fn.prop;
        (t.fn.attr2 = function () {
            if (!s) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return (t && t.jquery) || "string" == typeof t ? t : this.attr.apply(this, arguments);
        }),
            (t.fn.ajaxSubmit = function (e, i, r, a) {
                function l(i) {
                    var n,
                        r,
                        o = t.param(i, e.traditional).split("&"),
                        s = o.length,
                        a = [];
                    for (n = 0; n < s; n++) (o[n] = o[n].replace(/\+/g, " ")), (r = o[n].split("=")), a.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                    return a;
                }
                function c(i) {
                    function r(t) {
                        var e = null;
                        try {
                            t.contentWindow && (e = t.contentWindow.document);
                        } catch (t) {
                            n("cannot get iframe.contentWindow document: " + t);
                        }
                        if (e) return e;
                        try {
                            e = t.contentDocument ? t.contentDocument : t.document;
                        } catch (i) {
                            n("cannot get iframe.contentDocument: " + i), (e = t.document);
                        }
                        return e;
                    }
                    function o() {
                        function e() {
                            try {
                                var t = r(g).readyState;
                                n("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50);
                            } catch (t) {
                                n("Server abort: ", t, " (", t.name, ")"), a(E), x && clearTimeout(x), (x = void 0);
                            }
                        }
                        var i = h.attr2("target"),
                            o = h.attr2("action"),
                            s = h.attr("enctype") || h.attr("encoding") || "multipart/form-data";
                        T.setAttribute("target", f),
                            (u && !/post/i.test(u)) || T.setAttribute("method", "POST"),
                            o !== d.url && T.setAttribute("action", d.url),
                            d.skipEncodingOverride || (u && !/post/i.test(u)) || h.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }),
                            d.timeout &&
                                (x = setTimeout(function () {
                                    (w = !0), a(P);
                                }, d.timeout));
                        var l = [];
                        try {
                            if (d.extraData)
                                for (var c in d.extraData)
                                    d.extraData.hasOwnProperty(c) &&
                                        (t.isPlainObject(d.extraData[c]) && d.extraData[c].hasOwnProperty("name") && d.extraData[c].hasOwnProperty("value")
                                            ? l.push(
                                                  t('<input type="hidden" name="' + d.extraData[c].name + '">', C)
                                                      .val(d.extraData[c].value)
                                                      .appendTo(T)[0]
                                              )
                                            : l.push(
                                                  t('<input type="hidden" name="' + c + '">', C)
                                                      .val(d.extraData[c])
                                                      .appendTo(T)[0]
                                              ));
                            d.iframeTarget || m.appendTo(k), g.attachEvent ? g.attachEvent("onload", a) : g.addEventListener("load", a, !1), setTimeout(e, 15);
                            try {
                                T.submit();
                            } catch (t) {
                                document.createElement("form").submit.apply(T);
                            }
                        } finally {
                            T.setAttribute("action", o), T.setAttribute("enctype", s), i ? T.setAttribute("target", i) : h.removeAttr("target"), t(l).remove();
                        }
                    }
                    function a(e) {
                        if (!y.aborted && !D) {
                            if (((M = r(g)) || (n("cannot access response document"), (e = E)), e === P && y)) return y.abort("timeout"), void S.reject(y, "timeout");
                            if (e === E && y) return y.abort("server abort"), void S.reject(y, "error", "server abort");
                            if ((M && M.location.href !== d.iframeSrc) || w) {
                                g.detachEvent ? g.detachEvent("onload", a) : g.removeEventListener("load", a, !1);
                                var i,
                                    o = "success";
                                try {
                                    if (w) throw "timeout";
                                    var s = "xml" === d.dataType || M.XMLDocument || t.isXMLDoc(M);
                                    if ((n("isXml=" + s), !s && window.opera && (null === M.body || !M.body.innerHTML) && --N)) return n("requeing onLoad callback, DOM not available"), void setTimeout(a, 250);
                                    var l = M.body ? M.body : M.documentElement;
                                    (y.responseText = l ? l.innerHTML : null),
                                        (y.responseXML = M.XMLDocument ? M.XMLDocument : M),
                                        s && (d.dataType = "xml"),
                                        (y.getResponseHeader = function (t) {
                                            return { "content-type": d.dataType }[t.toLowerCase()];
                                        }),
                                        l && ((y.status = Number(l.getAttribute("status")) || y.status), (y.statusText = l.getAttribute("statusText") || y.statusText));
                                    var c = (d.dataType || "").toLowerCase(),
                                        u = /(json|script|text)/.test(c);
                                    if (u || d.textarea) {
                                        var h = M.getElementsByTagName("textarea")[0];
                                        if (h) (y.responseText = h.value), (y.status = Number(h.getAttribute("status")) || y.status), (y.statusText = h.getAttribute("statusText") || y.statusText);
                                        else if (u) {
                                            var f = M.getElementsByTagName("pre")[0],
                                                v = M.getElementsByTagName("body")[0];
                                            f ? (y.responseText = f.textContent ? f.textContent : f.innerText) : v && (y.responseText = v.textContent ? v.textContent : v.innerText);
                                        }
                                    } else "xml" === c && !y.responseXML && y.responseText && (y.responseXML = L(y.responseText));
                                    try {
                                        O = j(y, c, d);
                                    } catch (t) {
                                        (o = "parsererror"), (y.error = i = t || o);
                                    }
                                } catch (t) {
                                    n("error caught: ", t), (o = "error"), (y.error = i = t || o);
                                }
                                y.aborted && (n("upload aborted"), (o = null)),
                                    y.status && (o = (y.status >= 200 && y.status < 300) || 304 === y.status ? "success" : "error"),
                                    "success" === o
                                        ? (d.success && d.success.call(d.context, O, "success", y), S.resolve(y.responseText, "success", y), p && t.event.trigger("ajaxSuccess", [y, d]))
                                        : o && (void 0 === i && (i = y.statusText), d.error && d.error.call(d.context, y, o, i), S.reject(y, "error", i), p && t.event.trigger("ajaxError", [y, d, i])),
                                    p && t.event.trigger("ajaxComplete", [y, d]),
                                    p && !--t.active && t.event.trigger("ajaxStop"),
                                    d.complete && d.complete.call(d.context, y, o),
                                    (D = !0),
                                    d.timeout && clearTimeout(x),
                                    setTimeout(function () {
                                        d.iframeTarget ? m.attr("src", d.iframeSrc) : m.remove(), (y.responseXML = null);
                                    }, 100);
                            }
                        }
                    }
                    var l,
                        c,
                        d,
                        p,
                        f,
                        m,
                        g,
                        y,
                        _,
                        b,
                        w,
                        x,
                        T = h[0],
                        S = t.Deferred();
                    if (
                        ((S.abort = function (t) {
                            y.abort(t);
                        }),
                        i)
                    )
                        for (c = 0; c < v.length; c++) (l = t(v[c])), s ? l.prop("disabled", !1) : l.removeAttr("disabled");
                    ((d = t.extend(!0, {}, t.ajaxSettings, e)).context = d.context || d), (f = "jqFormIO" + new Date().getTime());
                    var C = T.ownerDocument,
                        k = h.closest("body");
                    if (
                        (d.iframeTarget
                            ? (b = (m = t(d.iframeTarget, C)).attr2("name"))
                                ? (f = b)
                                : m.attr2("name", f)
                            : (m = t('<iframe name="' + f + '" src="' + d.iframeSrc + '" />', C)).css({ position: "absolute", top: "-1000px", left: "-1000px" }),
                        (g = m[0]),
                        (y = {
                            aborted: 0,
                            responseText: null,
                            responseXML: null,
                            status: 0,
                            statusText: "n/a",
                            getAllResponseHeaders: function () {},
                            getResponseHeader: function () {},
                            setRequestHeader: function () {},
                            abort: function (e) {
                                var i = "timeout" === e ? "timeout" : "aborted";
                                n("aborting upload... " + i), (this.aborted = 1);
                                try {
                                    g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop");
                                } catch (t) {}
                                m.attr("src", d.iframeSrc), (y.error = i), d.error && d.error.call(d.context, y, i, e), p && t.event.trigger("ajaxError", [y, d, i]), d.complete && d.complete.call(d.context, y, i);
                            },
                        }),
                        (p = d.global) && 0 == t.active++ && t.event.trigger("ajaxStart"),
                        p && t.event.trigger("ajaxSend", [y, d]),
                        d.beforeSend && !1 === d.beforeSend.call(d.context, y, d))
                    )
                        return d.global && t.active--, S.reject(), S;
                    if (y.aborted) return S.reject(), S;
                    (_ = T.clk) && (b = _.name) && !_.disabled && ((d.extraData = d.extraData || {}), (d.extraData[b] = _.value), "image" === _.type && ((d.extraData[b + ".x"] = T.clk_x), (d.extraData[b + ".y"] = T.clk_y)));
                    var P = 1,
                        E = 2,
                        $ = t("meta[name=csrf-token]").attr("content"),
                        A = t("meta[name=csrf-param]").attr("content");
                    A && $ && ((d.extraData = d.extraData || {}), (d.extraData[A] = $)), d.forceSync ? o() : setTimeout(o, 10);
                    var O,
                        M,
                        D,
                        N = 50,
                        L =
                            t.parseXML ||
                            function (t, e) {
                                return (
                                    window.ActiveXObject ? (((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false"), e.loadXML(t)) : (e = new DOMParser().parseFromString(t, "text/xml")),
                                    e && e.documentElement && "parsererror" !== e.documentElement.nodeName ? e : null
                                );
                            },
                        R =
                            t.parseJSON ||
                            function (t) {
                                return window.eval("(" + t + ")");
                            },
                        j = function (e, i, n) {
                            var r = e.getResponseHeader("content-type") || "",
                                o = ("xml" === i || !i) && r.indexOf("xml") >= 0,
                                s = o ? e.responseXML : e.responseText;
                            return (
                                o && "parsererror" === s.documentElement.nodeName && t.error && t.error("parsererror"),
                                n && n.dataFilter && (s = n.dataFilter(s, i)),
                                "string" == typeof s && (("json" === i || !i) && r.indexOf("json") >= 0 ? (s = R(s)) : ("script" === i || !i) && r.indexOf("javascript") >= 0 && t.globalEval(s)),
                                s
                            );
                        };
                    return S;
                }
                if (!this.length) return n("ajaxSubmit: skipping submit process - no element selected"), this;
                var u,
                    d,
                    p,
                    h = this;
                "function" == typeof e ? (e = { success: e }) : "string" == typeof e || (!1 === e && arguments.length > 0) ? ((e = { url: e, data: i, dataType: r }), "function" == typeof a && (e.success = a)) : void 0 === e && (e = {}),
                    (u = e.method || e.type || this.attr2("method")),
                    (p = (p = "string" == typeof (d = e.url || this.attr2("action")) ? t.trim(d) : "") || window.location.href || "") && (p = (p.match(/^([^#]+)/) || [])[1]),
                    (e = t.extend(!0, { url: p, success: t.ajaxSettings.success, type: u || t.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, e));
                var f = {};
                if ((this.trigger("form-pre-serialize", [this, e, f]), f.veto)) return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
                if (e.beforeSerialize && !1 === e.beforeSerialize(this, e)) return n("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
                var m = e.traditional;
                void 0 === m && (m = t.ajaxSettings.traditional);
                var g,
                    v = [],
                    y = this.formToArray(e.semantic, v, e.filtering);
                if (e.data) {
                    var _ = t.isFunction(e.data) ? e.data(y) : e.data;
                    (e.extraData = _), (g = t.param(_, m));
                }
                if (e.beforeSubmit && !1 === e.beforeSubmit(y, this, e)) return n("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
                if ((this.trigger("form-submit-validate", [y, this, e, f]), f.veto)) return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
                var b = t.param(y, m);
                g && (b = b ? b + "&" + g : g), "GET" === e.type.toUpperCase() ? ((e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + b), (e.data = null)) : (e.data = b);
                var w = [];
                if (
                    (e.resetForm &&
                        w.push(function () {
                            h.resetForm();
                        }),
                    e.clearForm &&
                        w.push(function () {
                            h.clearForm(e.includeHidden);
                        }),
                    !e.dataType && e.target)
                ) {
                    var x = e.success || function () {};
                    w.push(function (i, n, r) {
                        var o = arguments,
                            s = e.replaceTarget ? "replaceWith" : "html";
                        t(e.target)
                            [s](i)
                            .each(function () {
                                x.apply(this, o);
                            });
                    });
                } else e.success && (t.isArray(e.success) ? t.merge(w, e.success) : w.push(e.success));
                if (
                    ((e.success = function (t, i, n) {
                        for (var r = e.context || this, o = 0, s = w.length; o < s; o++) w[o].apply(r, [t, i, n || h, h]);
                    }),
                    e.error)
                ) {
                    var T = e.error;
                    e.error = function (t, i, n) {
                        var r = e.context || this;
                        T.apply(r, [t, i, n, h]);
                    };
                }
                if (e.complete) {
                    var S = e.complete;
                    e.complete = function (t, i) {
                        var n = e.context || this;
                        S.apply(n, [t, i, h]);
                    };
                }
                var C =
                        t("input[type=file]:enabled", this).filter(function () {
                            return "" !== t(this).val();
                        }).length > 0,
                    k = "multipart/form-data",
                    P = h.attr("enctype") === k || h.attr("encoding") === k,
                    E = o.fileapi && o.formdata;
                n("fileAPI :" + E);
                var $,
                    A = (C || P) && !E;
                !1 !== e.iframe && (e.iframe || A)
                    ? e.closeKeepAlive
                        ? t.get(e.closeKeepAlive, function () {
                              $ = c(y);
                          })
                        : ($ = c(y))
                    : ($ =
                          (C || P) && E
                              ? (function (i) {
                                    for (var n = new FormData(), r = 0; r < i.length; r++) n.append(i[r].name, i[r].value);
                                    if (e.extraData) {
                                        var o = l(e.extraData);
                                        for (r = 0; r < o.length; r++) o[r] && n.append(o[r][0], o[r][1]);
                                    }
                                    e.data = null;
                                    var s = t.extend(!0, {}, t.ajaxSettings, e, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });
                                    e.uploadProgress &&
                                        (s.xhr = function () {
                                            var i = t.ajaxSettings.xhr();
                                            return (
                                                i.upload &&
                                                    i.upload.addEventListener(
                                                        "progress",
                                                        function (t) {
                                                            var i = 0,
                                                                n = t.loaded || t.position,
                                                                r = t.total;
                                                            t.lengthComputable && (i = Math.ceil((n / r) * 100)), e.uploadProgress(t, n, r, i);
                                                        },
                                                        !1
                                                    ),
                                                i
                                            );
                                        }),
                                        (s.data = null);
                                    var a = s.beforeSend;
                                    return (
                                        (s.beforeSend = function (t, i) {
                                            e.formData ? (i.data = e.formData) : (i.data = n), a && a.call(this, t, i);
                                        }),
                                        t.ajax(s)
                                    );
                                })(y)
                              : t.ajax(e)),
                    h.removeData("jqxhr").data("jqxhr", $);
                for (var O = 0; O < v.length; O++) v[O] = null;
                return this.trigger("form-submit-notify", [this, e]), this;
            }),
            (t.fn.ajaxForm = function (r, o, s, a) {
                if (
                    (("string" == typeof r || (!1 === r && arguments.length > 0)) && ((r = { url: r, data: o, dataType: s }), "function" == typeof a && (r.success = a)),
                    (r = r || {}),
                    (r.delegation = r.delegation && t.isFunction(t.fn.on)),
                    !r.delegation && 0 === this.length)
                ) {
                    var l = { s: this.selector, c: this.context };
                    return !t.isReady && l.s
                        ? (n("DOM not ready, queuing ajaxForm"),
                          t(function () {
                              t(l.s, l.c).ajaxForm(r);
                          }),
                          this)
                        : (n("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")), this);
                }
                return r.delegation
                    ? (t(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, r, e).on("click.form-plugin", this.selector, r, i), this)
                    : this.ajaxFormUnbind().on("submit.form-plugin", r, e).on("click.form-plugin", r, i);
            }),
            (t.fn.ajaxFormUnbind = function () {
                return this.off("submit.form-plugin click.form-plugin");
            }),
            (t.fn.formToArray = function (e, i, n) {
                var r = [];
                if (0 === this.length) return r;
                var s,
                    a = this[0],
                    l = this.attr("id"),
                    c = e || void 0 === a.elements ? a.getElementsByTagName("*") : a.elements;
                if ((c && (c = t.makeArray(c)), l && (e || /(Edge|Trident)\//.test(navigator.userAgent)) && (s = t(':input[form="' + l + '"]').get()).length && (c = (c || []).concat(s)), !c || !c.length)) return r;
                t.isFunction(n) && (c = t.map(c, n));
                var u, d, p, h, f, m, g;
                for (u = 0, m = c.length; u < m; u++)
                    if (((f = c[u]), (p = f.name) && !f.disabled))
                        if (e && a.clk && "image" === f.type) a.clk === f && (r.push({ name: p, value: t(f).val(), type: f.type }), r.push({ name: p + ".x", value: a.clk_x }, { name: p + ".y", value: a.clk_y }));
                        else if ((h = t.fieldValue(f, !0)) && h.constructor === Array) for (i && i.push(f), d = 0, g = h.length; d < g; d++) r.push({ name: p, value: h[d] });
                        else if (o.fileapi && "file" === f.type) {
                            i && i.push(f);
                            var v = f.files;
                            if (v.length) for (d = 0; d < v.length; d++) r.push({ name: p, value: v[d], type: f.type });
                            else r.push({ name: p, value: "", type: f.type });
                        } else null !== h && void 0 !== h && (i && i.push(f), r.push({ name: p, value: h, type: f.type, required: f.required }));
                if (!e && a.clk) {
                    var y = t(a.clk),
                        _ = y[0];
                    (p = _.name) && !_.disabled && "image" === _.type && (r.push({ name: p, value: y.val() }), r.push({ name: p + ".x", value: a.clk_x }, { name: p + ".y", value: a.clk_y }));
                }
                return r;
            }),
            (t.fn.formSerialize = function (e) {
                return t.param(this.formToArray(e));
            }),
            (t.fn.fieldSerialize = function (e) {
                var i = [];
                return (
                    this.each(function () {
                        var n = this.name;
                        if (n) {
                            var r = t.fieldValue(this, e);
                            if (r && r.constructor === Array) for (var o = 0, s = r.length; o < s; o++) i.push({ name: n, value: r[o] });
                            else null !== r && void 0 !== r && i.push({ name: this.name, value: r });
                        }
                    }),
                    t.param(i)
                );
            }),
            (t.fn.fieldValue = function (e) {
                for (var i = [], n = 0, r = this.length; n < r; n++) {
                    var o = this[n],
                        s = t.fieldValue(o, e);
                    null === s || void 0 === s || (s.constructor === Array && !s.length) || (s.constructor === Array ? t.merge(i, s) : i.push(s));
                }
                return i;
            }),
            (t.fieldValue = function (e, i) {
                var n = e.name,
                    o = e.type,
                    s = e.tagName.toLowerCase();
                if (
                    (void 0 === i && (i = !0),
                    i &&
                        (!n ||
                            e.disabled ||
                            "reset" === o ||
                            "button" === o ||
                            (("checkbox" === o || "radio" === o) && !e.checked) ||
                            (("submit" === o || "image" === o) && e.form && e.form.clk !== e) ||
                            ("select" === s && -1 === e.selectedIndex)))
                )
                    return null;
                if ("select" === s) {
                    var a = e.selectedIndex;
                    if (a < 0) return null;
                    for (var l = [], c = e.options, u = "select-one" === o, d = u ? a + 1 : c.length, p = u ? a : 0; p < d; p++) {
                        var h = c[p];
                        if (h.selected && !h.disabled) {
                            var f = h.value;
                            if ((f || (f = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), u)) return f;
                            l.push(f);
                        }
                    }
                    return l;
                }
                return t(e).val().replace(r, "\r\n");
            }),
            (t.fn.clearForm = function (e) {
                return this.each(function () {
                    t("input,select,textarea", this).clearFields(e);
                });
            }),
            (t.fn.clearFields = t.fn.clearInputs = function (e) {
                var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                return this.each(function () {
                    var n = this.type,
                        r = this.tagName.toLowerCase();
                    i.test(n) || "textarea" === r
                        ? (this.value = "")
                        : "checkbox" === n || "radio" === n
                        ? (this.checked = !1)
                        : "select" === r
                        ? (this.selectedIndex = -1)
                        : "file" === n
                        ? /MSIE/.test(navigator.userAgent)
                            ? t(this).replaceWith(t(this).clone(!0))
                            : t(this).val("")
                        : e && ((!0 === e && /hidden/.test(n)) || ("string" == typeof e && t(this).is(e))) && (this.value = "");
                });
            }),
            (t.fn.resetForm = function () {
                return this.each(function () {
                    var e = t(this),
                        i = this.tagName.toLowerCase();
                    switch (i) {
                        case "input":
                            this.checked = this.defaultChecked;
                        case "textarea":
                            return (this.value = this.defaultValue), !0;
                        case "option":
                        case "optgroup":
                            var n = e.parents("select");
                            return n.length && n[0].multiple ? ("option" === i ? (this.selected = this.defaultSelected) : e.find("option").resetForm()) : n.resetForm(), !0;
                        case "select":
                            return (
                                e.find("option").each(function (t) {
                                    if (((this.selected = this.defaultSelected), this.defaultSelected && !e[0].multiple)) return (e[0].selectedIndex = t), !1;
                                }),
                                !0
                            );
                        case "label":
                            var r = t(e.attr("for")),
                                o = e.find("input,select,textarea");
                            return r[0] && o.unshift(r[0]), o.resetForm(), !0;
                        case "form":
                            return ("function" == typeof this.reset || ("object" == typeof this.reset && !this.reset.nodeType)) && this.reset(), !0;
                        default:
                            return e.find("form,input,label,select,textarea").resetForm(), !0;
                    }
                });
            }),
            (t.fn.enable = function (t) {
                return (
                    void 0 === t && (t = !0),
                    this.each(function () {
                        this.disabled = !t;
                    })
                );
            }),
            (t.fn.selected = function (e) {
                return (
                    void 0 === e && (e = !0),
                    this.each(function () {
                        var i = this.type;
                        if ("checkbox" === i || "radio" === i) this.checked = e;
                        else if ("option" === this.tagName.toLowerCase()) {
                            var n = t(this).parent("select");
                            e && n[0] && "select-one" === n[0].type && n.find("option").selected(!1), (this.selected = e);
                        }
                    })
                );
            }),
            (t.fn.ajaxSubmit.debug = !1);
    }),
    "undefined" == typeof jQuery)
)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1)) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
})(jQuery),
    (function (t) {
        "use strict";
        function e() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
            return !1;
        }
        (t.fn.emulateTransitionEnd = function (e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function () {
                i = !0;
            });
            var r = function () {
                i || t(n).trigger(t.support.transition.end);
            };
            return setTimeout(r, e), this;
        }),
            t(function () {
                (t.support.transition = e()),
                    t.support.transition &&
                        (t.event.special.bsTransitionEnd = {
                            bindType: t.support.transition.end,
                            delegateType: t.support.transition.end,
                            handle: function (e) {
                                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                            },
                        });
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.alert");
                r || i.data("bs.alert", (r = new n(this))), "string" == typeof e && r[e].call(i);
            });
        }
        var i = '[data-dismiss="alert"]',
            n = function (e) {
                t(e).on("click", i, this.close);
            };
        (n.VERSION = "3.3.1"),
            (n.TRANSITION_DURATION = 150),
            (n.prototype.close = function (e) {
                function i() {
                    s.detach().trigger("closed.bs.alert").remove();
                }
                var r = t(this),
                    o = r.attr("data-target");
                o || ((o = r.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
                var s = t(o);
                e && e.preventDefault(),
                    s.length || (s = r.closest(".alert")),
                    s.trigger((e = t.Event("close.bs.alert"))),
                    e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i());
            });
        var r = t.fn.alert;
        (t.fn.alert = e),
            (t.fn.alert.Constructor = n),
            (t.fn.alert.noConflict = function () {
                return (t.fn.alert = r), this;
            }),
            t(document).on("click.bs.alert.data-api", i, n.prototype.close);
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.button"),
                    o = "object" == typeof e && e;
                r || n.data("bs.button", (r = new i(this, o))), "toggle" == e ? r.toggle() : e && r.setState(e);
            });
        }
        var i = function (e, n) {
            (this.$element = t(e)), (this.options = t.extend({}, i.DEFAULTS, n)), (this.isLoading = !1);
        };
        (i.VERSION = "3.3.1"),
            (i.DEFAULTS = { loadingText: "loading..." }),
            (i.prototype.setState = function (e) {
                var i = "disabled",
                    n = this.$element,
                    r = n.is("input") ? "val" : "html",
                    o = n.data();
                (e += "Text"),
                    null == o.resetText && n.data("resetText", n[r]()),
                    setTimeout(
                        t.proxy(function () {
                            n[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? ((this.isLoading = !0), n.addClass(i).attr(i, i)) : this.isLoading && ((this.isLoading = !1), n.removeClass(i).removeAttr(i));
                        }, this),
                        0
                    );
            }),
            (i.prototype.toggle = function () {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? (t = !1) : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
                t && this.$element.toggleClass("active");
            });
        var n = t.fn.button;
        (t.fn.button = e),
            (t.fn.button.Constructor = i),
            (t.fn.button.noConflict = function () {
                return (t.fn.button = n), this;
            }),
            t(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
                    var n = t(i.target);
                    n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault();
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                    t(e.target)
                        .closest(".btn")
                        .toggleClass("focus", /^focus(in)?$/.test(e.type));
                });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.carousel"),
                    o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : o.slide;
                r || n.data("bs.carousel", (r = new i(this, o))), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle();
            });
        }
        var i = function (e, i) {
            (this.$element = t(e)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = i),
                (this.paused = this.sliding = this.interval = this.$active = this.$items = null),
                this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
        };
        (i.VERSION = "3.3.1"),
            (i.TRANSITION_DURATION = 600),
            (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
            (i.prototype.keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    t.preventDefault();
                }
            }),
            (i.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
            }),
            (i.prototype.getItemIndex = function (t) {
                return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
            }),
            (i.prototype.getItemForDirection = function (t, e) {
                var i = "prev" == t ? -1 : 1,
                    n = this.getItemIndex(e),
                    r = (n + i) % this.$items.length;
                return this.$items.eq(r);
            }),
            (i.prototype.to = function (t) {
                var e = this,
                    i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                if (!(t > this.$items.length - 1 || t < 0))
                    return this.sliding
                        ? this.$element.one("slid.bs.carousel", function () {
                              e.to(t);
                          })
                        : i == t
                        ? this.pause().cycle()
                        : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
            }),
            (i.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (i.prototype.next = function () {
                if (!this.sliding) return this.slide("next");
            }),
            (i.prototype.prev = function () {
                if (!this.sliding) return this.slide("prev");
            }),
            (i.prototype.slide = function (e, n) {
                var r = this.$element.find(".item.active"),
                    o = n || this.getItemForDirection(e, r),
                    s = this.interval,
                    a = "next" == e ? "left" : "right",
                    l = "next" == e ? "first" : "last",
                    c = this;
                if (!o.length) {
                    if (!this.options.wrap) return;
                    o = this.$element.find(".item")[l]();
                }
                if (o.hasClass("active")) return (this.sliding = !1);
                var u = o[0],
                    d = t.Event("slide.bs.carousel", { relatedTarget: u, direction: a });
                if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
                    if (((this.sliding = !0), s && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var p = t(this.$indicators.children()[this.getItemIndex(o)]);
                        p && p.addClass("active");
                    }
                    var h = t.Event("slid.bs.carousel", { relatedTarget: u, direction: a });
                    return (
                        t.support.transition && this.$element.hasClass("slide")
                            ? (o.addClass(e),
                              o[0].offsetWidth,
                              r.addClass(a),
                              o.addClass(a),
                              r
                                  .one("bsTransitionEnd", function () {
                                      o.removeClass([e, a].join(" ")).addClass("active"),
                                          r.removeClass(["active", a].join(" ")),
                                          (c.sliding = !1),
                                          setTimeout(function () {
                                              c.$element.trigger(h);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(i.TRANSITION_DURATION))
                            : (r.removeClass("active"), o.addClass("active"), (this.sliding = !1), this.$element.trigger(h)),
                        s && this.cycle(),
                        this
                    );
                }
            });
        var n = t.fn.carousel;
        (t.fn.carousel = e),
            (t.fn.carousel.Constructor = i),
            (t.fn.carousel.noConflict = function () {
                return (t.fn.carousel = n), this;
            });
        var r = function (i) {
            var n,
                r = t(this),
                o = t(r.attr("data-target") || ((n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")));
            if (o.hasClass("carousel")) {
                var s = t.extend({}, o.data(), r.data()),
                    a = r.attr("data-slide-to");
                a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), i.preventDefault();
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r),
            t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var i = t(this);
                    e.call(i, i.data());
                });
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            var i,
                n = e.attr("data-target") || ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            return t(n);
        }
        function i(e) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.collapse"),
                    o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !r && o.toggle && "show" == e && (o.toggle = !1), r || i.data("bs.collapse", (r = new n(this, o))), "string" == typeof e && r[e]();
            });
        }
        var n = function (e, i) {
            (this.$element = t(e)),
                (this.options = t.extend({}, n.DEFAULTS, i)),
                (this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        (n.VERSION = "3.3.1"),
            (n.TRANSITION_DURATION = 350),
            (n.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
            (n.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height";
            }),
            (n.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e,
                        r = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
                    if (!(r && r.length && (e = r.data("bs.collapse")) && e.transitioning)) {
                        var o = t.Event("show.bs.collapse");
                        if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
                            r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                            var s = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var a = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[s](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!t.support.transition) return a.call(this);
                            var l = t.camelCase(["scroll", s].join("-"));
                            this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l]);
                        }
                    }
                }
            }),
            (n.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var r = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        if (!t.support.transition) return r.call(this);
                        this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION);
                    }
                }
            }),
            (n.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (n.prototype.getParent = function () {
                return t(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        t.proxy(function (i, n) {
                            var r = t(n);
                            this.addAriaAndCollapsedClass(e(r), r);
                        }, this)
                    )
                    .end();
            }),
            (n.prototype.addAriaAndCollapsedClass = function (t, e) {
                var i = t.hasClass("in");
                t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
            });
        var r = t.fn.collapse;
        (t.fn.collapse = i),
            (t.fn.collapse.Constructor = n),
            (t.fn.collapse.noConflict = function () {
                return (t.fn.collapse = r), this;
            }),
            t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
                var r = t(this);
                r.attr("data-target") || n.preventDefault();
                var o = e(r),
                    s = o.data("bs.collapse"),
                    a = s ? "toggle" : t.extend({}, r.data(), { trigger: this });
                i.call(o, a);
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            (e && 3 === e.which) ||
                (t(r).remove(),
                t(o).each(function () {
                    var n = t(this),
                        r = i(n),
                        o = { relatedTarget: this };
                    r.hasClass("open") && (r.trigger((e = t.Event("hide.bs.dropdown", o))), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o)));
                }));
        }
        function i(e) {
            var i = e.attr("data-target");
            i || ((i = e.attr("href")), (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
            var n = i && t(i);
            return n && n.length ? n : e.parent();
        }
        function n(e) {
            return this.each(function () {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", (n = new s(this))), "string" == typeof e && n[e].call(i);
            });
        }
        var r = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            s = function (e) {
                t(e).on("click.bs.dropdown", this.toggle);
            };
        (s.VERSION = "3.3.1"),
            (s.prototype.toggle = function (n) {
                var r = t(this);
                if (!r.is(".disabled, :disabled")) {
                    var o = i(r),
                        s = o.hasClass("open");
                    if ((e(), !s)) {
                        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                        var a = { relatedTarget: this };
                        if ((o.trigger((n = t.Event("show.bs.dropdown", a))), n.isDefaultPrevented())) return;
                        r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a);
                    }
                    return !1;
                }
            }),
            (s.prototype.keydown = function (e) {
                if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                    var n = t(this);
                    if ((e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled"))) {
                        var r = i(n),
                            s = r.hasClass("open");
                        if ((!s && 27 != e.which) || (s && 27 == e.which)) return 27 == e.which && r.find(o).trigger("focus"), n.trigger("click");
                        var a = " li:not(.divider):visible a",
                            l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                        if (l.length) {
                            var c = l.index(e.target);
                            38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus");
                        }
                    }
                }
            });
        var a = t.fn.dropdown;
        (t.fn.dropdown = n),
            (t.fn.dropdown.Constructor = s),
            (t.fn.dropdown.noConflict = function () {
                return (t.fn.dropdown = a), this;
            }),
            t(document)
                .on("click.bs.dropdown.data-api", e)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", o, s.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", o, s.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown);
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e, n) {
            return this.each(function () {
                var r = t(this),
                    o = r.data("bs.modal"),
                    s = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
                o || r.data("bs.modal", (o = new i(this, s))), "string" == typeof e ? o[e](n) : s.show && o.show(n);
            });
        }
        var i = function (e, i) {
            (this.options = i),
                (this.$body = t(document.body)),
                (this.$element = t(e)),
                (this.$backdrop = this.isShown = null),
                (this.scrollbarWidth = 0),
                this.options.remote &&
                    this.$element.find(".modal-content").load(
                        this.options.remote,
                        t.proxy(function () {
                            this.$element.trigger("loaded.bs.modal");
                        }, this)
                    );
        };
        (i.VERSION = "3.3.1"),
            (i.TRANSITION_DURATION = 300),
            (i.BACKDROP_TRANSITION_DURATION = 150),
            (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (i.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t);
            }),
            (i.prototype.show = function (e) {
                var n = this,
                    r = t.Event("show.bs.modal", { relatedTarget: e });
                this.$element.trigger(r),
                    this.isShown ||
                        r.isDefaultPrevented() ||
                        ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                        this.backdrop(function () {
                            var r = t.support.transition && n.$element.hasClass("fade");
                            n.$element.parent().length || n.$element.appendTo(n.$body),
                                n.$element.show().scrollTop(0),
                                n.options.backdrop && n.adjustBackdrop(),
                                n.adjustDialog(),
                                r && n.$element[0].offsetWidth,
                                n.$element.addClass("in").attr("aria-hidden", !1),
                                n.enforceFocus();
                            var o = t.Event("shown.bs.modal", { relatedTarget: e });
                            r
                                ? n.$element
                                      .find(".modal-dialog")
                                      .one("bsTransitionEnd", function () {
                                          n.$element.trigger("focus").trigger(o);
                                      })
                                      .emulateTransitionEnd(i.TRANSITION_DURATION)
                                : n.$element.trigger("focus").trigger(o);
                        }));
            }),
            (i.prototype.hide = function (e) {
                e && e.preventDefault(),
                    (e = t.Event("hide.bs.modal")),
                    this.$element.trigger(e),
                    this.isShown &&
                        !e.isDefaultPrevented() &&
                        ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        t(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
                        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
            }),
            (i.prototype.enforceFocus = function () {
                t(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        t.proxy(function (t) {
                            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (i.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                          "keydown.dismiss.bs.modal",
                          t.proxy(function (t) {
                              27 == t.which && this.hide();
                          }, this)
                      )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (i.prototype.resize = function () {
                this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
            }),
            (i.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
                    });
            }),
            (i.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (i.prototype.backdrop = function (e) {
                var n = this,
                    r = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = t.support.transition && r;
                    if (
                        ((this.$backdrop = t('<div class="modal-backdrop ' + r + '" />')
                            .prependTo(this.$element)
                            .on(
                                "click.dismiss.bs.modal",
                                t.proxy(function (t) {
                                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
                                }, this)
                            )),
                        o && this.$backdrop[0].offsetWidth,
                        this.$backdrop.addClass("in"),
                        !e)
                    )
                        return;
                    o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var s = function () {
                        n.removeBackdrop(), e && e();
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s();
                } else e && e();
            }),
            (i.prototype.handleUpdate = function () {
                this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
            }),
            (i.prototype.adjustBackdrop = function () {
                this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight);
            }),
            (i.prototype.adjustDialog = function () {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
            }),
            (i.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (i.prototype.checkScrollbar = function () {
                (this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (i.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
            }),
            (i.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", "");
            }),
            (i.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e;
            });
        var n = t.fn.modal;
        (t.fn.modal = e),
            (t.fn.modal.Constructor = i),
            (t.fn.modal.noConflict = function () {
                return (t.fn.modal = n), this;
            }),
            t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
                var n = t(this),
                    r = n.attr("href"),
                    o = t(n.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, ""))),
                    s = o.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(r) && r }, o.data(), n.data());
                n.is("a") && i.preventDefault(),
                    o.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() ||
                            o.one("hidden.bs.modal", function () {
                                n.is(":visible") && n.trigger("focus");
                            });
                    }),
                    e.call(o, s, this);
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.tooltip"),
                    o = "object" == typeof e && e,
                    s = o && o.selector;
                (r || "destroy" != e) && (s ? (r || n.data("bs.tooltip", (r = {})), r[s] || (r[s] = new i(this, o))) : r || n.data("bs.tooltip", (r = new i(this, o))), "string" == typeof e && r[e]());
            });
        }
        var i = function (t, e) {
            (this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null), this.init("tooltip", t, e);
        };
        (i.VERSION = "3.3.1"),
            (i.TRANSITION_DURATION = 150),
            (i.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
            }),
            (i.prototype.init = function (e, i, n) {
                (this.enabled = !0), (this.type = e), (this.$element = t(i)), (this.options = this.getOptions(n)), (this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport));
                for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
                    var s = r[o];
                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != s) {
                        var a = "hover" == s ? "mouseenter" : "focusin",
                            l = "hover" == s ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = t.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (i.prototype.getDefaults = function () {
                return i.DEFAULTS;
            }),
            (i.prototype.getOptions = function (e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
            }),
            (i.prototype.getDelegateOptions = function () {
                var e = {},
                    i = this.getDefaults();
                return (
                    this._options &&
                        t.each(this._options, function (t, n) {
                            i[t] != n && (e[t] = n);
                        }),
                    e
                );
            }),
            (i.prototype.enter = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return i && i.$tip && i.$tip.is(":visible")
                    ? void (i.hoverState = "in")
                    : (i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                      clearTimeout(i.timeout),
                      (i.hoverState = "in"),
                      i.options.delay && i.options.delay.show
                          ? void (i.timeout = setTimeout(function () {
                                "in" == i.hoverState && i.show();
                            }, i.options.delay.show))
                          : i.show());
            }),
            (i.prototype.leave = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                if ((i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), (i.hoverState = "out"), !i.options.delay || !i.options.delay.hide))
                    return i.hide();
                i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide();
                }, i.options.delay.hide);
            }),
            (i.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !n) return;
                    var r = this,
                        o = this.tip(),
                        s = this.getUID(this.type);
                    this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
                    var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                        l = /\s?auto?\s?/i,
                        c = l.test(a);
                    c && (a = a.replace(l, "") || "top"),
                        o
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(a)
                            .data("bs." + this.type, this),
                        this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
                    var u = this.getPosition(),
                        d = o[0].offsetWidth,
                        p = o[0].offsetHeight;
                    if (c) {
                        var h = a,
                            f = this.options.container ? t(this.options.container) : this.$element.parent(),
                            m = this.getPosition(f);
                        (a = "bottom" == a && u.bottom + p > m.bottom ? "top" : "top" == a && u.top - p < m.top ? "bottom" : "right" == a && u.right + d > m.width ? "left" : "left" == a && u.left - d < m.left ? "right" : a),
                            o.removeClass(h).addClass(a);
                    }
                    var g = this.getCalculatedOffset(a, u, d, p);
                    this.applyPlacement(g, a);
                    var v = function () {
                        var t = r.hoverState;
                        r.$element.trigger("shown.bs." + r.type), (r.hoverState = null), "out" == t && r.leave(r);
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v();
                }
            }),
            (i.prototype.applyPlacement = function (e, i) {
                var n = this.tip(),
                    r = n[0].offsetWidth,
                    o = n[0].offsetHeight,
                    s = parseInt(n.css("margin-top"), 10),
                    a = parseInt(n.css("margin-left"), 10);
                isNaN(s) && (s = 0),
                    isNaN(a) && (a = 0),
                    (e.top = e.top + s),
                    (e.left = e.left + a),
                    t.offset.setOffset(
                        n[0],
                        t.extend(
                            {
                                using: function (t) {
                                    n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                },
                            },
                            e
                        ),
                        0
                    ),
                    n.addClass("in");
                var l = n[0].offsetWidth,
                    c = n[0].offsetHeight;
                "top" == i && c != o && (e.top = e.top + o - c);
                var u = this.getViewportAdjustedDelta(i, e, l, c);
                u.left ? (e.left += u.left) : (e.top += u.top);
                var d = /top|bottom/.test(i),
                    p = d ? 2 * u.left - r + l : 2 * u.top - o + c,
                    h = d ? "offsetWidth" : "offsetHeight";
                n.offset(e), this.replaceArrow(p, n[0][h], d);
            }),
            (i.prototype.replaceArrow = function (t, e, i) {
                this.arrow()
                    .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
                    .css(i ? "top" : "left", "");
            }),
            (i.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
            }),
            (i.prototype.hide = function (e) {
                function n() {
                    "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e();
                }
                var r = this,
                    o = this.tip(),
                    s = t.Event("hide.bs." + this.type);
                if ((this.$element.trigger(s), !s.isDefaultPrevented()))
                    return o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), (this.hoverState = null), this;
            }),
            (i.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
            }),
            (i.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (i.prototype.getPosition = function (e) {
                e = e || this.$element;
                var i = e[0],
                    n = "BODY" == i.tagName,
                    r = i.getBoundingClientRect();
                null == r.width && (r = t.extend({}, r, { width: r.right - r.left, height: r.bottom - r.top }));
                var o = n ? { top: 0, left: 0 } : e.offset(),
                    s = { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                    a = n ? { width: t(window).width(), height: t(window).height() } : null;
                return t.extend({}, r, s, a, o);
            }),
            (i.prototype.getCalculatedOffset = function (t, e, i, n) {
                return "bottom" == t
                    ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
                    : "top" == t
                    ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 }
                    : "left" == t
                    ? { top: e.top + e.height / 2 - n / 2, left: e.left - i }
                    : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width };
            }),
            (i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
                var r = { top: 0, left: 0 };
                if (!this.$viewport) return r;
                var o = (this.options.viewport && this.options.viewport.padding) || 0,
                    s = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var a = e.top - o - s.scroll,
                        l = e.top + o - s.scroll + n;
                    a < s.top ? (r.top = s.top - a) : l > s.top + s.height && (r.top = s.top + s.height - l);
                } else {
                    var c = e.left - o,
                        u = e.left + o + i;
                    c < s.left ? (r.left = s.left - c) : u > s.width && (r.left = s.left + s.width - u);
                }
                return r;
            }),
            (i.prototype.getTitle = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
            }),
            (i.prototype.getUID = function (t) {
                do {
                    t += ~~(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            }),
            (i.prototype.tip = function () {
                return (this.$tip = this.$tip || t(this.options.template));
            }),
            (i.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (i.prototype.enable = function () {
                this.enabled = !0;
            }),
            (i.prototype.disable = function () {
                this.enabled = !1;
            }),
            (i.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (i.prototype.toggle = function (e) {
                var i = this;
                e && ((i = t(e.currentTarget).data("bs." + this.type)) || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i))),
                    i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
            }),
            (i.prototype.destroy = function () {
                var t = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        t.$element.off("." + t.type).removeData("bs." + t.type);
                    });
            });
        var n = t.fn.tooltip;
        (t.fn.tooltip = e),
            (t.fn.tooltip.Constructor = i),
            (t.fn.tooltip.noConflict = function () {
                return (t.fn.tooltip = n), this;
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.popover"),
                    o = "object" == typeof e && e,
                    s = o && o.selector;
                (r || "destroy" != e) && (s ? (r || n.data("bs.popover", (r = {})), r[s] || (r[s] = new i(this, o))) : r || n.data("bs.popover", (r = new i(this, o))), "string" == typeof e && r[e]());
            });
        }
        var i = function (t, e) {
            this.init("popover", t, e);
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (i.VERSION = "3.3.1"),
            (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
            (i.prototype.constructor = i),
            (i.prototype.getDefaults = function () {
                return i.DEFAULTS;
            }),
            (i.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    i = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                    t.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof i ? "html" : "append") : "text"](i),
                    t.removeClass("fade top bottom left right in"),
                    t.find(".popover-title").html() || t.find(".popover-title").hide();
            }),
            (i.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (i.prototype.getContent = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
            }),
            (i.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            }),
            (i.prototype.tip = function () {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
            });
        var n = t.fn.popover;
        (t.fn.popover = e),
            (t.fn.popover.Constructor = i),
            (t.fn.popover.noConflict = function () {
                return (t.fn.popover = n), this;
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(i, n) {
            var r = t.proxy(this.process, this);
            (this.$body = t("body")),
                (this.$scrollElement = t(t(i).is("body") ? window : i)),
                (this.options = t.extend({}, e.DEFAULTS, n)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", r),
                this.refresh(),
                this.process();
        }
        function i(i) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.scrollspy"),
                    o = "object" == typeof i && i;
                r || n.data("bs.scrollspy", (r = new e(this, o))), "string" == typeof i && r[i]();
            });
        }
        (e.VERSION = "3.3.1"),
            (e.DEFAULTS = { offset: 10 }),
            (e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (e.prototype.refresh = function () {
                var e = "offset",
                    i = 0;
                t.isWindow(this.$scrollElement[0]) || ((e = "position"), (i = this.$scrollElement.scrollTop())), (this.offsets = []), (this.targets = []), (this.scrollHeight = this.getScrollHeight());
                var n = this;
                this.$body
                    .find(this.selector)
                    .map(function () {
                        var n = t(this),
                            r = n.data("target") || n.attr("href"),
                            o = /^#./.test(r) && t(r);
                        return (o && o.length && o.is(":visible") && [[o[e]().top + i, r]]) || null;
                    })
                    .sort(function (t, e) {
                        return t[0] - e[0];
                    })
                    .each(function () {
                        n.offsets.push(this[0]), n.targets.push(this[1]);
                    });
            }),
            (e.prototype.process = function () {
                var t,
                    e = this.$scrollElement.scrollTop() + this.options.offset,
                    i = this.getScrollHeight(),
                    n = this.options.offset + i - this.$scrollElement.height(),
                    r = this.offsets,
                    o = this.targets,
                    s = this.activeTarget;
                if ((this.scrollHeight != i && this.refresh(), e >= n)) return s != (t = o[o.length - 1]) && this.activate(t);
                if (s && e < r[0]) return (this.activeTarget = null), this.clear();
                for (t = r.length; t--; ) s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t]);
            }),
            (e.prototype.activate = function (e) {
                (this.activeTarget = e), this.clear();
                var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    n = t(i).parents("li").addClass("active");
                n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy");
            }),
            (e.prototype.clear = function () {
                t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            });
        var n = t.fn.scrollspy;
        (t.fn.scrollspy = i),
            (t.fn.scrollspy.Constructor = e),
            (t.fn.scrollspy.noConflict = function () {
                return (t.fn.scrollspy = n), this;
            }),
            t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    i.call(e, e.data());
                });
            });
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.tab");
                r || n.data("bs.tab", (r = new i(this))), "string" == typeof e && r[e]();
            });
        }
        var i = function (e) {
            this.element = t(e);
        };
        (i.VERSION = "3.3.1"),
            (i.TRANSITION_DURATION = 150),
            (i.prototype.show = function () {
                var e = this.element,
                    i = e.closest("ul:not(.dropdown-menu)"),
                    n = e.data("target");
                if ((n || ((n = e.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, ""))), !e.parent("li").hasClass("active"))) {
                    var r = i.find(".active:last a"),
                        o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                        s = t.Event("show.bs.tab", { relatedTarget: r[0] });
                    if ((r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented())) {
                        var a = t(n);
                        this.activate(e.closest("li"), i),
                            this.activate(a, a.parent(), function () {
                                r.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
                            });
                    }
                }
            }),
            (i.prototype.activate = function (e, n, r) {
                function o() {
                    s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                        e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        r && r();
                }
                var s = n.find("> .active"),
                    a = r && t.support.transition && ((s.length && s.hasClass("fade")) || !!n.find("> .fade").length);
                s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), s.removeClass("in");
            });
        var n = t.fn.tab;
        (t.fn.tab = e),
            (t.fn.tab.Constructor = i),
            (t.fn.tab.noConflict = function () {
                return (t.fn.tab = n), this;
            });
        var r = function (i) {
            i.preventDefault(), e.call(t(this), "show");
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
    })(jQuery),
    (function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this),
                    r = n.data("bs.affix"),
                    o = "object" == typeof e && e;
                r || n.data("bs.affix", (r = new i(this, o))), "string" == typeof e && r[e]();
            });
        }
        var i = function (e, n) {
            (this.options = t.extend({}, i.DEFAULTS, n)),
                (this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = t(e)),
                (this.affixed = this.unpin = this.pinnedOffset = null),
                this.checkPosition();
        };
        (i.VERSION = "3.3.1"),
            (i.RESET = "affix affix-top affix-bottom"),
            (i.DEFAULTS = { offset: 0, target: window }),
            (i.prototype.getState = function (t, e, i, n) {
                var r = this.$target.scrollTop(),
                    o = this.$element.offset(),
                    s = this.$target.height();
                if (null != i && "top" == this.affixed) return r < i && "top";
                if ("bottom" == this.affixed) return null != i ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= t - n) && "bottom";
                var a = null == this.affixed,
                    l = a ? r : o.top,
                    c = a ? s : e;
                return null != i && l <= i ? "top" : null != n && l + c >= t - n && "bottom";
            }),
            (i.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(i.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return (this.pinnedOffset = e.top - t);
            }),
            (i.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1);
            }),
            (i.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = this.$element.height(),
                        n = this.options.offset,
                        r = n.top,
                        o = n.bottom,
                        s = t("body").height();
                    "object" != typeof n && (o = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
                    var a = this.getState(s, e, r, o);
                    if (this.affixed != a) {
                        null != this.unpin && this.$element.css("top", "");
                        var l = "affix" + (a ? "-" + a : ""),
                            c = t.Event(l + ".bs.affix");
                        if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
                        (this.affixed = a),
                            (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(i.RESET)
                                .addClass(l)
                                .trigger(l.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == a && this.$element.offset({ top: s - e - o });
                }
            });
        var n = t.fn.affix;
        (t.fn.affix = e),
            (t.fn.affix.Constructor = i),
            (t.fn.affix.noConflict = function () {
                return (t.fn.affix = n), this;
            }),
            t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var i = t(this),
                        n = i.data();
                    (n.offset = n.offset || {}), null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n);
                });
            });
    })(jQuery),
    (function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
    })(function (t) {
        "use strict";
        var e = window.Slick || {};
        ((e = (function () {
            var e = 0;
            return function (i, n) {
                var r,
                    o = this;
                (o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(i),
                    appendDots: t(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, i) {
                        return t('<button type="button" />').text(i + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (o.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    t.extend(o, o.initials),
                    (o.activeBreakpoint = null),
                    (o.animType = null),
                    (o.animProp = null),
                    (o.breakpoints = []),
                    (o.breakpointSettings = []),
                    (o.cssTransitions = !1),
                    (o.focussed = !1),
                    (o.interrupted = !1),
                    (o.hidden = "hidden"),
                    (o.paused = !0),
                    (o.positionProp = null),
                    (o.respondTo = null),
                    (o.rowCount = 1),
                    (o.shouldClick = !0),
                    (o.$slider = t(i)),
                    (o.$slidesCache = null),
                    (o.transformType = null),
                    (o.transitionType = null),
                    (o.visibilityChange = "visibilitychange"),
                    (o.windowWidth = 0),
                    (o.windowTimer = null),
                    (r = t(i).data("slick") || {}),
                    (o.options = t.extend({}, o.defaults, n, r)),
                    (o.currentSlide = o.options.initialSlide),
                    (o.originalSettings = o.options),
                    void 0 !== document.mozHidden
                        ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                    (o.autoPlay = t.proxy(o.autoPlay, o)),
                    (o.autoPlayClear = t.proxy(o.autoPlayClear, o)),
                    (o.autoPlayIterator = t.proxy(o.autoPlayIterator, o)),
                    (o.changeSlide = t.proxy(o.changeSlide, o)),
                    (o.clickHandler = t.proxy(o.clickHandler, o)),
                    (o.selectHandler = t.proxy(o.selectHandler, o)),
                    (o.setPosition = t.proxy(o.setPosition, o)),
                    (o.swipeHandler = t.proxy(o.swipeHandler, o)),
                    (o.dragHandler = t.proxy(o.dragHandler, o)),
                    (o.keyHandler = t.proxy(o.keyHandler, o)),
                    (o.instanceUid = e++),
                    (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    o.registerBreakpoints(),
                    o.init(!0);
            };
        })()).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }),
            (e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
                var r = this;
                if ("boolean" == typeof i) (n = i), (i = null);
                else if (i < 0 || i >= r.slideCount) return !1;
                r.unload(),
                    "number" == typeof i
                        ? 0 === i && 0 === r.$slides.length
                            ? t(e).appendTo(r.$slideTrack)
                            : n
                            ? t(e).insertBefore(r.$slides.eq(i))
                            : t(e).insertAfter(r.$slides.eq(i))
                        : !0 === n
                        ? t(e).prependTo(r.$slideTrack)
                        : t(e).appendTo(r.$slideTrack),
                    (r.$slides = r.$slideTrack.children(this.options.slide)),
                    r.$slideTrack.children(this.options.slide).detach(),
                    r.$slideTrack.append(r.$slides),
                    r.$slides.each(function (e, i) {
                        t(i).attr("data-slick-index", e);
                    }),
                    (r.$slidesCache = r.$slides),
                    r.reinit();
            }),
            (e.prototype.animateHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed);
                }
            }),
            (e.prototype.animateSlide = function (e, i) {
                var n = {},
                    r = this;
                r.animateHeight(),
                    !0 === r.options.rtl && !1 === r.options.vertical && (e = -e),
                    !1 === r.transformsEnabled
                        ? !1 === r.options.vertical
                            ? r.$slideTrack.animate({ left: e }, r.options.speed, r.options.easing, i)
                            : r.$slideTrack.animate({ top: e }, r.options.speed, r.options.easing, i)
                        : !1 === r.cssTransitions
                        ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
                          t({ animStart: r.currentLeft }).animate(
                              { animStart: e },
                              {
                                  duration: r.options.speed,
                                  easing: r.options.easing,
                                  step: function (t) {
                                      (t = Math.ceil(t)), !1 === r.options.vertical ? ((n[r.animType] = "translate(" + t + "px, 0px)"), r.$slideTrack.css(n)) : ((n[r.animType] = "translate(0px," + t + "px)"), r.$slideTrack.css(n));
                                  },
                                  complete: function () {
                                      i && i.call();
                                  },
                              }
                          ))
                        : (r.applyTransition(),
                          (e = Math.ceil(e)),
                          !1 === r.options.vertical ? (n[r.animType] = "translate3d(" + e + "px, 0px, 0px)") : (n[r.animType] = "translate3d(0px," + e + "px, 0px)"),
                          r.$slideTrack.css(n),
                          i &&
                              setTimeout(function () {
                                  r.disableTransition(), i.call();
                              }, r.options.speed));
            }),
            (e.prototype.getNavTarget = function () {
                var e = this,
                    i = e.options.asNavFor;
                return i && null !== i && (i = t(i).not(e.$slider)), i;
            }),
            (e.prototype.asNavFor = function (e) {
                var i = this.getNavTarget();
                null !== i &&
                    "object" == typeof i &&
                    i.each(function () {
                        var i = t(this).slick("getSlick");
                        i.unslicked || i.slideHandler(e, !0);
                    });
            }),
            (e.prototype.applyTransition = function (t) {
                var e = this,
                    i = {};
                !1 === e.options.fade ? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                    !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (e.prototype.autoPlay = function () {
                var t = this;
                t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
            }),
            (e.prototype.autoPlayClear = function () {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer);
            }),
            (e.prototype.autoPlayIterator = function () {
                var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                t.paused ||
                    t.interrupted ||
                    t.focussed ||
                    (!1 === t.options.infinite &&
                        (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? (t.direction = 0) : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(e));
            }),
            (e.prototype.buildArrows = function () {
                var e = this;
                !0 === e.options.arrows &&
                    ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
                    (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
                    e.slideCount > e.options.slidesToShow
                        ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                          e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                          !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (e.prototype.buildDots = function () {
                var e,
                    i,
                    n = this;
                if (!0 === n.options.dots) {
                    for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                    (n.$dots = i.appendTo(n.options.appendDots)), n.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (e.prototype.buildOut = function () {
                var e = this;
                (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.$slides.each(function (e, i) {
                        t(i)
                            .attr("data-slick-index", e)
                            .data("originalStyling", t(i).attr("style") || "");
                    }),
                    e.$slider.addClass("slick-slider"),
                    (e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    e.$slideTrack.css("opacity", 0),
                    (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                    t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    !0 === e.options.draggable && e.$list.addClass("draggable");
            }),
            (e.prototype.buildRows = function () {
                var t,
                    e,
                    i,
                    n,
                    r,
                    o,
                    s,
                    a = this;
                if (((n = document.createDocumentFragment()), (o = a.$slider.children()), a.options.rows > 1)) {
                    for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var c = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var u = t * s + (e * a.options.slidesPerRow + i);
                                o.get(u) && c.appendChild(o.get(u));
                            }
                            l.appendChild(c);
                        }
                        n.appendChild(l);
                    }
                    a.$slider.empty().append(n),
                        a.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (e.prototype.checkResponsive = function (e, i) {
                var n,
                    r,
                    o,
                    s = this,
                    a = !1,
                    l = s.$slider.width(),
                    c = window.innerWidth || t(window).width();
                if (("window" === s.respondTo ? (o = c) : "slider" === s.respondTo ? (o = l) : "min" === s.respondTo && (o = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive)) {
                    r = null;
                    for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
                    null !== r
                        ? null !== s.activeBreakpoint
                            ? (r !== s.activeBreakpoint || i) &&
                              ((s.activeBreakpoint = r),
                              "unslick" === s.breakpointSettings[r] ? s.unslick(r) : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r])), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                              (a = r))
                            : ((s.activeBreakpoint = r),
                              "unslick" === s.breakpointSettings[r] ? s.unslick(r) : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r])), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                              (a = r))
                        : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), (a = r)),
                        e || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                }
            }),
            (e.prototype.changeSlide = function (e, i) {
                var n,
                    r,
                    o,
                    s = this,
                    a = t(e.currentTarget);
                switch ((a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), (o = s.slideCount % s.options.slidesToScroll != 0), (n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll), e.data.message)) {
                    case "previous":
                        (r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                        break;
                    case "next":
                        (r = 0 === n ? s.options.slidesToScroll : n), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                        break;
                    case "index":
                        var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                        s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (e.prototype.checkNavigable = function (t) {
                var e, i;
                if (((e = this.getNavigableIndexes()), (i = 0), t > e[e.length - 1])) t = e[e.length - 1];
                else
                    for (var n in e) {
                        if (t < e[n]) {
                            t = i;
                            break;
                        }
                        i = e[n];
                    }
                return t;
            }),
            (e.prototype.cleanUpEvents = function () {
                var e = this;
                e.options.dots &&
                    null !== e.$dots &&
                    (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                    !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                    e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                    e.$list.off("click.slick", e.clickHandler),
                    t(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                    !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                    t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                    t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                    t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                    t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
            }),
            (e.prototype.cleanUpSlideEvents = function () {
                var e = this;
                e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
            }),
            (e.prototype.cleanUpRows = function () {
                var t,
                    e = this;
                e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t));
            }),
            (e.prototype.clickHandler = function (t) {
                !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
            }),
            (e.prototype.destroy = function (e) {
                var i = this;
                i.autoPlayClear(),
                    (i.touchObject = {}),
                    i.cleanUpEvents(),
                    t(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow &&
                        i.$prevArrow.length &&
                        (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                    i.$nextArrow &&
                        i.$nextArrow.length &&
                        (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                    i.$slides &&
                        (i.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                t(this).attr("style", t(this).data("originalStyling"));
                            }),
                        i.$slideTrack.children(this.options.slide).detach(),
                        i.$slideTrack.detach(),
                        i.$list.detach(),
                        i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    (i.unslicked = !0),
                    e || i.$slider.trigger("destroy", [i]);
            }),
            (e.prototype.disableTransition = function (t) {
                var e = this,
                    i = {};
                (i[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (e.prototype.fadeSlide = function (t, e) {
                var i = this;
                !1 === i.cssTransitions
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                    : (i.applyTransition(t),
                      i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                          setTimeout(function () {
                              i.disableTransition(t), e.call();
                          }, i.options.speed));
            }),
            (e.prototype.fadeSlideOut = function (t) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
            }),
            (e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                var e = this;
                null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
            }),
            (e.prototype.focusHandler = function () {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                    i.stopImmediatePropagation();
                    var n = t(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus && ((e.focussed = n.is(":focus")), e.autoPlay());
                    }, 0);
                });
            }),
            (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (e.prototype.getDotCount = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    n = 0;
                if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++n;
                    else for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else if (!0 === t.options.centerMode) n = t.slideCount;
                else if (t.options.asNavFor) for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return n - 1;
            }),
            (e.prototype.getLeft = function (t) {
                var e,
                    i,
                    n,
                    r,
                    o = this,
                    s = 0;
                return (
                    (o.slideOffset = 0),
                    (i = o.$slides.first().outerHeight(!0)),
                    !0 === o.options.infinite
                        ? (o.slideCount > o.options.slidesToShow &&
                              ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                              (r = -1),
                              !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? (r = -1.5) : 1 === o.options.slidesToShow && (r = -2)),
                              (s = i * o.options.slidesToShow * r)),
                          o.slideCount % o.options.slidesToScroll != 0 &&
                              t + o.options.slidesToScroll > o.slideCount &&
                              o.slideCount > o.options.slidesToShow &&
                              (t > o.slideCount
                                  ? ((o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1), (s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1))
                                  : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (s = (o.slideCount % o.options.slidesToScroll) * i * -1))))
                        : t + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth), (s = (t + o.options.slidesToShow - o.slideCount) * i)),
                    o.slideCount <= o.options.slidesToShow && ((o.slideOffset = 0), (s = 0)),
                    !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
                        ? (o.slideOffset = (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 - (o.slideWidth * o.slideCount) / 2)
                        : !0 === o.options.centerMode && !0 === o.options.infinite
                        ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
                        : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
                    (e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s),
                    !0 === o.options.variableWidth &&
                        ((n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow)),
                        (e = !0 === o.options.rtl ? (n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0) : n[0] ? -1 * n[0].offsetLeft : 0),
                        !0 === o.options.centerMode &&
                            ((n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1)),
                            (e = !0 === o.options.rtl ? (n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0) : n[0] ? -1 * n[0].offsetLeft : 0),
                            (e += (o.$list.width() - n.outerWidth()) / 2))),
                    e
                );
            }),
            (e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                return this.options[t];
            }),
            (e.prototype.getNavigableIndexes = function () {
                var t,
                    e = this,
                    i = 0,
                    n = 0,
                    r = [];
                for (!1 === e.options.infinite ? (t = e.slideCount) : ((i = -1 * e.options.slidesToScroll), (n = -1 * e.options.slidesToScroll), (t = 2 * e.slideCount)); i < t; )
                    r.push(i), (i = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                return r;
            }),
            (e.prototype.getSlick = function () {
                return this;
            }),
            (e.prototype.getSlideCount = function () {
                var e,
                    i,
                    n = this;
                return (
                    (i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0),
                    !0 === n.options.swipeToSlide
                        ? (n.$slideTrack.find(".slick-slide").each(function (r, o) {
                              if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft) return (e = o), !1;
                          }),
                          Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1)
                        : n.options.slidesToScroll
                );
            }),
            (e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
            }),
            (e.prototype.init = function (e) {
                var i = this;
                t(i.$slider).hasClass("slick-initialized") ||
                    (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()),
                    e && i.$slider.trigger("init", [i]),
                    !0 === i.options.accessibility && i.initADA(),
                    i.options.autoplay && ((i.paused = !1), i.autoPlay());
            }),
            (e.prototype.initADA = function () {
                var e = this,
                    i = Math.ceil(e.slideCount / e.options.slidesToShow),
                    n = e.getNavigableIndexes().filter(function (t) {
                        return t >= 0 && t < e.slideCount;
                    });
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== e.$dots &&
                        (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                            var r = n.indexOf(i);
                            t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + i, tabindex: -1 }), -1 !== r && t(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + r });
                        }),
                        e.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (r) {
                                var o = n[r];
                                t(this).attr({ role: "presentation" }),
                                    t(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + r, "aria-controls": "slick-slide" + e.instanceUid + o, "aria-label": r + 1 + " of " + i, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(e.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var r = e.currentSlide, o = r + e.options.slidesToShow; r < o; r++) e.$slides.eq(r).attr("tabindex", 0);
                e.activateADA();
            }),
            (e.prototype.initArrowEvents = function () {
                var t = this;
                !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide),
                    t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
            }),
            (e.prototype.initDotEvents = function () {
                var e = this;
                !0 === e.options.dots && (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                    !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
            }),
            (e.prototype.initSlideEvents = function () {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
            }),
            (e.prototype.initializeEvents = function () {
                var e = this;
                e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                    e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                    e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("click.slick", e.clickHandler),
                    t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                    !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                    t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                    t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                    t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                    t(e.setPosition);
            }),
            (e.prototype.initUI = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
            }),
            (e.prototype.keyHandler = function (t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && !0 === e.options.accessibility
                        ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                        : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
            }),
            (e.prototype.lazyLoad = function () {
                function e(e) {
                    t("img[data-lazy]", e).each(function () {
                        var e = t(this),
                            i = t(this).attr("data-lazy"),
                            n = t(this).attr("data-srcset"),
                            r = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            s = document.createElement("img");
                        (s.onload = function () {
                            e.animate({ opacity: 0 }, 100, function () {
                                n && (e.attr("srcset", n), r && e.attr("sizes", r)),
                                    e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    o.$slider.trigger("lazyLoaded", [o, e, i]);
                            });
                        }),
                            (s.onerror = function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]);
                            }),
                            (s.src = i);
                    });
                }
                var i,
                    n,
                    r,
                    o = this;
                if (
                    (!0 === o.options.centerMode
                        ? !0 === o.options.infinite
                            ? (r = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2)
                            : ((n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1))), (r = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
                        : ((n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide), (r = Math.ceil(n + o.options.slidesToShow)), !0 === o.options.fade && (n > 0 && n--, r <= o.slideCount && r++)),
                    (i = o.$slider.find(".slick-slide").slice(n, r)),
                    "anticipated" === o.options.lazyLoad)
                )
                    for (var s = n - 1, a = r, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), (i = (i = i.add(l.eq(s))).add(l.eq(a))), s--, a++;
                e(i),
                    o.slideCount <= o.options.slidesToShow
                        ? e(o.$slider.find(".slick-slide"))
                        : o.currentSlide >= o.slideCount - o.options.slidesToShow
                        ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
                        : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
            }),
            (e.prototype.loadSlider = function () {
                var t = this;
                t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
            }),
            (e.prototype.next = e.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (e.prototype.orientationChange = function () {
                var t = this;
                t.checkResponsive(), t.setPosition();
            }),
            (e.prototype.pause = e.prototype.slickPause = function () {
                var t = this;
                t.autoPlayClear(), (t.paused = !0);
            }),
            (e.prototype.play = e.prototype.slickPlay = function () {
                var t = this;
                t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
            }),
            (e.prototype.postSlide = function (e) {
                var i = this;
                i.unslicked ||
                    (i.$slider.trigger("afterChange", [i, e]),
                    (i.animating = !1),
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    (i.swipeLeft = null),
                    i.options.autoplay && i.autoPlay(),
                    !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (e.prototype.prev = e.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (e.prototype.preventDefault = function (t) {
                t.preventDefault();
            }),
            (e.prototype.progressiveLazyLoad = function (e) {
                e = e || 1;
                var i,
                    n,
                    r,
                    o,
                    s,
                    a = this,
                    l = t("img[data-lazy]", a.$slider);
                l.length
                    ? ((i = l.first()),
                      (n = i.attr("data-lazy")),
                      (r = i.attr("data-srcset")),
                      (o = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((s = document.createElement("img")).onload = function () {
                          r && (i.attr("srcset", r), o && i.attr("sizes", o)),
                              i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === a.options.adaptiveHeight && a.setPosition(),
                              a.$slider.trigger("lazyLoaded", [a, i, n]),
                              a.progressiveLazyLoad();
                      }),
                      (s.onerror = function () {
                          e < 3
                              ? setTimeout(function () {
                                    a.progressiveLazyLoad(e + 1);
                                }, 500)
                              : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad());
                      }),
                      (s.src = n))
                    : a.$slider.trigger("allImagesLoaded", [a]);
            }),
            (e.prototype.refresh = function (e) {
                var i,
                    n,
                    r = this;
                (n = r.slideCount - r.options.slidesToShow),
                    !r.options.infinite && r.currentSlide > n && (r.currentSlide = n),
                    r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
                    (i = r.currentSlide),
                    r.destroy(!0),
                    t.extend(r, r.initials, { currentSlide: i }),
                    r.init(),
                    e || r.changeSlide({ data: { message: "index", index: i } }, !1);
            }),
            (e.prototype.registerBreakpoints = function () {
                var e,
                    i,
                    n,
                    r = this,
                    o = r.options.responsive || null;
                if ("array" === t.type(o) && o.length) {
                    r.respondTo = r.options.respondTo || "window";
                    for (e in o)
                        if (((n = r.breakpoints.length - 1), o.hasOwnProperty(e))) {
                            for (i = o[e].breakpoint; n >= 0; ) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                            r.breakpoints.push(i), (r.breakpointSettings[i] = o[e].settings);
                        }
                    r.breakpoints.sort(function (t, e) {
                        return r.options.mobileFirst ? t - e : e - t;
                    });
                }
            }),
            (e.prototype.reinit = function () {
                var e = this;
                (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                    !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    e.setPosition(),
                    e.focusHandler(),
                    (e.paused = !e.options.autoplay),
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e]);
            }),
            (e.prototype.resize = function () {
                var e = this;
                t(window).width() !== e.windowWidth &&
                    (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function () {
                        (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                    }, 50)));
            }),
            (e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
                var n = this;
                if (((t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : n.slideCount - 1) : !0 === e ? --t : t), n.slideCount < 1 || t < 0 || t > n.slideCount - 1)) return !1;
                n.unload(),
                    !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
                    (n.$slides = n.$slideTrack.children(this.options.slide)),
                    n.$slideTrack.children(this.options.slide).detach(),
                    n.$slideTrack.append(n.$slides),
                    (n.$slidesCache = n.$slides),
                    n.reinit();
            }),
            (e.prototype.setCSS = function (t) {
                var e,
                    i,
                    n = this,
                    r = {};
                !0 === n.options.rtl && (t = -t),
                    (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (r[n.positionProp] = t),
                    !1 === n.transformsEnabled
                        ? n.$slideTrack.css(r)
                        : ((r = {}), !1 === n.cssTransitions ? ((r[n.animType] = "translate(" + e + ", " + i + ")"), n.$slideTrack.css(r)) : ((r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(r)));
            }),
            (e.prototype.setDimensions = function () {
                var t = this;
                !1 === t.options.vertical
                    ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    !1 === t.options.vertical && !1 === t.options.variableWidth
                        ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                        : !0 === t.options.variableWidth
                        ? t.$slideTrack.width(5e3 * t.slideCount)
                        : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
            }),
            (e.prototype.setFade = function () {
                var e,
                    i = this;
                i.$slides.each(function (n, r) {
                    (e = i.slideWidth * n * -1),
                        !0 === i.options.rtl ? t(r).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(r).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
                }),
                    i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
            }),
            (e.prototype.setHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e);
                }
            }),
            (e.prototype.setOption = e.prototype.slickSetOption = function () {
                var e,
                    i,
                    n,
                    r,
                    o,
                    s = this,
                    a = !1;
                if (
                    ("object" === t.type(arguments[0])
                        ? ((n = arguments[0]), (a = arguments[1]), (o = "multiple"))
                        : "string" === t.type(arguments[0]) &&
                          ((n = arguments[0]), (r = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                    "single" === o)
                )
                    s.options[n] = r;
                else if ("multiple" === o)
                    t.each(n, function (t, e) {
                        s.options[t] = e;
                    });
                else if ("responsive" === o)
                    for (i in r)
                        if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[i]];
                        else {
                            for (e = s.options.responsive.length - 1; e >= 0; ) s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1), e--;
                            s.options.responsive.push(r[i]);
                        }
                a && (s.unload(), s.reinit());
            }),
            (e.prototype.setPosition = function () {
                var t = this;
                t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
            }),
            (e.prototype.setProps = function () {
                var t = this,
                    e = document.body.style;
                (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                    "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                    (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                    t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform && ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                        ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                        ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform && !1 !== t.animType && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                    (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
            }),
            (e.prototype.setSlideClasses = function (t) {
                var e,
                    i,
                    n,
                    r,
                    o = this;
                if (((i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode)) {
                    var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (e = Math.floor(o.options.slidesToShow / 2)),
                        !0 === o.options.infinite &&
                            (t >= e && t <= o.slideCount - 1 - e
                                ? o.$slides
                                      .slice(t - e + s, t + e + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((n = o.options.slidesToShow + t),
                                  i
                                      .slice(n - e + 1 + s, n + e + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
                        o.$slides.eq(t).addClass("slick-center");
                } else
                    t >= 0 && t <= o.slideCount - o.options.slidesToShow
                        ? o.$slides
                              .slice(t, t + o.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : i.length <= o.options.slidesToShow
                        ? i.addClass("slick-active").attr("aria-hidden", "false")
                        : ((r = o.slideCount % o.options.slidesToShow),
                          (n = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
                          o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow
                              ? i
                                    .slice(n - (o.options.slidesToShow - r), n + r)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : i
                                    .slice(n, n + o.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad) || o.lazyLoad();
            }),
            (e.prototype.setupInfinite = function () {
                var e,
                    i,
                    n,
                    r = this;
                if ((!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && ((i = null), r.slideCount > r.options.slidesToShow))) {
                    for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1)
                        (i = e - 1),
                            t(r.$slides[i])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", i - r.slideCount)
                                .prependTo(r.$slideTrack)
                                .addClass("slick-cloned");
                    for (e = 0; e < n + r.slideCount; e += 1)
                        (i = e),
                            t(r.$slides[i])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", i + r.slideCount)
                                .appendTo(r.$slideTrack)
                                .addClass("slick-cloned");
                    r.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            t(this).attr("id", "");
                        });
                }
            }),
            (e.prototype.interrupt = function (t) {
                var e = this;
                t || e.autoPlay(), (e.interrupted = t);
            }),
            (e.prototype.selectHandler = function (e) {
                var i = this,
                    n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                    r = parseInt(n.attr("data-slick-index"));
                r || (r = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r);
            }),
            (e.prototype.slideHandler = function (t, e, i) {
                var n,
                    r,
                    o,
                    s,
                    a,
                    l = null,
                    c = this;
                if (((e = e || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === t))))
                    if (
                        (!1 === e && c.asNavFor(t),
                        (n = t),
                        (l = c.getLeft(n)),
                        (s = c.getLeft(c.currentSlide)),
                        (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                        !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                    )
                        !1 === c.options.fade &&
                            ((n = c.currentSlide),
                            !0 !== i
                                ? c.animateSlide(s, function () {
                                      c.postSlide(n);
                                  })
                                : c.postSlide(n));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                        !1 === c.options.fade &&
                            ((n = c.currentSlide),
                            !0 !== i
                                ? c.animateSlide(s, function () {
                                      c.postSlide(n);
                                  })
                                : c.postSlide(n));
                    else {
                        if (
                            (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            (r =
                                n < 0
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                        : c.slideCount + n
                                    : n >= c.slideCount
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? 0
                                        : n - c.slideCount
                                    : n),
                            (c.animating = !0),
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
                            (o = c.currentSlide),
                            (c.currentSlide = r),
                            c.setSlideClasses(c.currentSlide),
                            c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                            c.updateDots(),
                            c.updateArrows(),
                            !0 === c.options.fade)
                        )
                            return (
                                !0 !== i
                                    ? (c.fadeSlideOut(o),
                                      c.fadeSlide(r, function () {
                                          c.postSlide(r);
                                      }))
                                    : c.postSlide(r),
                                void c.animateHeight()
                            );
                        !0 !== i
                            ? c.animateSlide(l, function () {
                                  c.postSlide(r);
                              })
                            : c.postSlide(r);
                    }
            }),
            (e.prototype.startLoad = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
            }),
            (e.prototype.swipeDirection = function () {
                var t,
                    e,
                    i,
                    n,
                    r = this;
                return (
                    (t = r.touchObject.startX - r.touchObject.curX),
                    (e = r.touchObject.startY - r.touchObject.curY),
                    (i = Math.atan2(e, t)),
                    (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
                    n <= 45 && n >= 0
                        ? !1 === r.options.rtl
                            ? "left"
                            : "right"
                        : n <= 360 && n >= 315
                        ? !1 === r.options.rtl
                            ? "left"
                            : "right"
                        : n >= 135 && n <= 225
                        ? !1 === r.options.rtl
                            ? "right"
                            : "left"
                        : !0 === r.options.verticalSwiping
                        ? n >= 35 && n <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (e.prototype.swipeEnd = function (t) {
                var e,
                    i,
                    n = this;
                if (((n.dragging = !1), (n.swiping = !1), n.scrolling)) return (n.scrolling = !1), !1;
                if (((n.interrupted = !1), (n.shouldClick = !(n.touchObject.swipeLength > 10)), void 0 === n.touchObject.curX)) return !1;
                if ((!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)) {
                    switch ((i = n.swipeDirection())) {
                        case "left":
                        case "down":
                            (e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount()), (n.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount()), (n.currentDirection = 1);
                    }
                    "vertical" != i && (n.slideHandler(e), (n.touchObject = {}), n.$slider.trigger("swipe", [n, i]));
                } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
            }),
            (e.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))))
                    switch (
                        ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                        !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        t.data.action)
                    ) {
                        case "start":
                            e.swipeStart(t);
                            break;
                        case "move":
                            e.swipeMove(t);
                            break;
                        case "end":
                            e.swipeEnd(t);
                    }
            }),
            (e.prototype.swipeMove = function (t) {
                var e,
                    i,
                    n,
                    r,
                    o,
                    s,
                    a = this;
                return (
                    (o = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
                        ((e = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
                        (a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
                        (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                        (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                        !a.options.verticalSwiping && !a.swiping && s > 4
                            ? ((a.scrolling = !0), !1)
                            : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                              (i = a.swipeDirection()),
                              void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), t.preventDefault()),
                              (r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                              !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                              (n = a.touchObject.swipeLength),
                              (a.touchObject.edgeHit = !1),
                              !1 === a.options.infinite &&
                                  ((0 === a.currentSlide && "right" === i) || (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                                  ((n = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                              !1 === a.options.vertical ? (a.swipeLeft = e + n * r) : (a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * r),
                              !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * r),
                              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                );
            }),
            (e.prototype.swipeStart = function (t) {
                var e,
                    i = this;
                if (((i.interrupted = !0), 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)) return (i.touchObject = {}), !1;
                void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                    (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                    (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                    (i.dragging = !0);
            }),
            (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
            }),
            (e.prototype.unload = function () {
                var e = this;
                t(".slick-cloned", e.$slider).remove(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                    e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                    e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (e.prototype.unslick = function (t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]), e.destroy();
            }),
            (e.prototype.updateArrows = function () {
                var t = this;
                Math.floor(t.options.slidesToShow / 2),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        !t.options.infinite &&
                        (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === t.currentSlide
                            ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode
                            ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - 1 &&
                              !0 === t.options.centerMode &&
                              (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (e.prototype.updateDots = function () {
                var t = this;
                null !== t.$dots &&
                    (t.$dots.find("li").removeClass("slick-active").end(),
                    t.$dots
                        .find("li")
                        .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (e.prototype.visibility = function () {
                var t = this;
                t.options.autoplay && (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
            }),
            (t.fn.slick = function () {
                var t,
                    i,
                    n = this,
                    r = arguments[0],
                    o = Array.prototype.slice.call(arguments, 1),
                    s = n.length;
                for (t = 0; t < s; t++) if (("object" == typeof r || void 0 === r ? (n[t].slick = new e(n[t], r)) : (i = n[t].slick[r].apply(n[t].slick, o)), void 0 !== i)) return i;
                return n;
            });
    }),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
    })(function (t) {
        var e,
            i,
            n,
            r,
            o,
            s,
            a = "Close",
            l = "BeforeClose",
            c = "MarkupParse",
            u = "Open",
            d = "Change",
            p = "mfp",
            h = "." + p,
            f = "mfp-ready",
            m = "mfp-removing",
            g = "mfp-prevent-close",
            v = function () {},
            y = !!window.jQuery,
            _ = t(window),
            b = function (t, i) {
                e.ev.on(p + t + h, i);
            },
            w = function (e, i, n, r) {
                var o = document.createElement("div");
                return (o.className = "mfp-" + e), n && (o.innerHTML = n), r ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)), o;
            },
            x = function (i, n) {
                e.ev.triggerHandler(p + i, n), e.st.callbacks && ((i = i.charAt(0).toLowerCase() + i.slice(1)), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
            },
            T = function (i) {
                return (i === s && e.currTemplate.closeBtn) || ((e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose))), (s = i)), e.currTemplate.closeBtn;
            },
            S = function () {
                t.magnificPopup.instance || ((e = new v()), e.init(), (t.magnificPopup.instance = e));
            },
            C = function () {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
                return !1;
            };
        (v.prototype = {
            constructor: v,
            init: function () {
                var i = navigator.appVersion;
                (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
                    (e.isAndroid = /android/gi.test(i)),
                    (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
                    (e.supportsTransition = C()),
                    (e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                    (n = t(document)),
                    (e.popupsCache = {});
            },
            open: function (i) {
                var r;
                if (!1 === i.isObj) {
                    (e.items = i.items.toArray()), (e.index = 0);
                    var s,
                        a = i.items;
                    for (r = 0; r < a.length; r++)
                        if (((s = a[r]), s.parsed && (s = s.el[0]), s === i.el[0])) {
                            e.index = r;
                            break;
                        }
                } else (e.items = t.isArray(i.items) ? i.items : [i.items]), (e.index = i.index || 0);
                if (e.isOpen) return void e.updateItemHTML();
                (e.types = []),
                    (o = ""),
                    i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = n),
                    i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), (e.currTemplate = e.popupsCache[i.key])) : (e.currTemplate = {}),
                    (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
                    (e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos),
                    e.st.modal && ((e.st.closeOnContentClick = !1), (e.st.closeOnBgClick = !1), (e.st.showCloseBtn = !1), (e.st.enableEscapeKey = !1)),
                    e.bgOverlay ||
                        ((e.bgOverlay = w("bg").on("click" + h, function () {
                            e.close();
                        })),
                        (e.wrap = w("wrap")
                            .attr("tabindex", -1)
                            .on("click" + h, function (t) {
                                e._checkIfClose(t.target) && e.close();
                            })),
                        (e.container = w("container", e.wrap))),
                    (e.contentContainer = w("content")),
                    e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (r = 0; r < l.length; r++) {
                    var d = l[r];
                    (d = d.charAt(0).toUpperCase() + d.slice(1)), e["init" + d].call(e);
                }
                x("BeforeOpen"),
                    e.st.showCloseBtn &&
                        (e.st.closeBtnInside
                            ? (b(c, function (t, e, i, n) {
                                  i.close_replaceWith = T(n.type);
                              }),
                              (o += " mfp-close-btn-in"))
                            : e.wrap.append(T())),
                    e.st.alignTop && (o += " mfp-align-top"),
                    e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: _.scrollTop(), position: "absolute" }),
                    (!1 === e.st.fixedBgPos || ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) && e.bgOverlay.css({ height: n.height(), position: "absolute" }),
                    e.st.enableEscapeKey &&
                        n.on("keyup" + h, function (t) {
                            27 === t.keyCode && e.close();
                        }),
                    _.on("resize" + h, function () {
                        e.updateSize();
                    }),
                    e.st.closeOnContentClick || (o += " mfp-auto-cursor"),
                    o && e.wrap.addClass(o);
                var p = (e.wH = _.height()),
                    m = {};
                if (e.fixedContentPos && e._hasScrollBar(p)) {
                    var g = e._getScrollbarSize();
                    g && (m.marginRight = g);
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : (m.overflow = "hidden"));
                var v = e.st.mainClass;
                return (
                    e.isIE7 && (v += " mfp-ie7"),
                    v && e._addClassToMFP(v),
                    e.updateItemHTML(),
                    x("BuildControls"),
                    t("html").css(m),
                    e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)),
                    (e._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                        e.content ? (e._addClassToMFP(f), e._setFocus()) : e.bgOverlay.addClass(f), n.on("focusin" + h, e._onFocusIn);
                    }, 16),
                    (e.isOpen = !0),
                    e.updateSize(p),
                    x(u),
                    i
                );
            },
            close: function () {
                e.isOpen &&
                    (x(l),
                    (e.isOpen = !1),
                    e.st.removalDelay && !e.isLowIE && e.supportsTransition
                        ? (e._addClassToMFP(m),
                          setTimeout(function () {
                              e._close();
                          }, e.st.removalDelay))
                        : e._close());
            },
            _close: function () {
                x(a);
                var i = m + " " + f + " ";
                if ((e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos)) {
                    var r = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : (r.overflow = ""), t("html").css(r);
                }
                n.off("keyup.mfp focusin" + h),
                    e.ev.off(h),
                    e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    e.bgOverlay.attr("class", "mfp-bg"),
                    e.container.attr("class", "mfp-container"),
                    !e.st.showCloseBtn || (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) || (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
                    e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
                    (e.currItem = null),
                    (e.content = null),
                    (e.currTemplate = null),
                    (e.prevHeight = 0),
                    x("AfterClose");
            },
            updateSize: function (t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), (e.wH = n);
                } else e.wH = t || _.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize");
            },
            updateItemHTML: function () {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if ((x("BeforeChange", [e.currItem ? e.currItem.type : "", n]), (e.currItem = i), !e.currTemplate[n])) {
                    var o = !!e.st[n] && e.st[n].markup;
                    x("FirstMarkupParse", o), (e.currTemplate[n] = !o || t(o));
                }
                r && r !== i.type && e.container.removeClass("mfp-" + r + "-holder");
                var s = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(s, n), (i.preloaded = !0), x(d, i), (r = i.type), e.container.prepend(e.contentContainer), x("AfterChange");
            },
            appendContent: function (t, i) {
                (e.content = t),
                    t ? (e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(T()) : (e.content = t)) : (e.content = ""),
                    x("BeforeAppend"),
                    e.container.addClass("mfp-" + i + "-holder"),
                    e.contentContainer.append(e.content);
            },
            parseEl: function (i) {
                var n,
                    r = e.items[i];
                if ((r.tagName ? (r = { el: t(r) }) : ((n = r.type), (r = { data: r, src: r.src })), r.el)) {
                    for (var o = e.types, s = 0; s < o.length; s++)
                        if (r.el.hasClass("mfp-" + o[s])) {
                            n = o[s];
                            break;
                        }
                    (r.src = r.el.attr("data-mfp-src")), r.src || (r.src = r.el.attr("href"));
                }
                return (r.type = n || e.st.type || "inline"), (r.index = i), (r.parsed = !0), (e.items[i] = r), x("ElementParse", r), e.items[i];
            },
            addGroup: function (t, i) {
                var n = function (n) {
                    (n.mfpEl = this), e._openClick(n, t, i);
                };
                i || (i = {});
                var r = "click.magnificPopup";
                (i.mainEl = t), i.items ? ((i.isObj = !0), t.off(r).on(r, n)) : ((i.isObj = !1), i.delegate ? t.off(r).on(r, i.delegate, n) : ((i.items = t), t.off(r).on(r, n)));
            },
            _openClick: function (i, n, r) {
                if ((void 0 !== r.midClick ? r.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var o = void 0 !== r.disableOn ? r.disableOn : t.magnificPopup.defaults.disableOn;
                    if (o)
                        if (t.isFunction(o)) {
                            if (!o.call(e)) return !0;
                        } else if (_.width() < o) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), (r.el = t(i.mfpEl)), r.delegate && (r.items = n.find(r.delegate)), e.open(r);
                }
            },
            updateStatus: function (t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var r = { status: t, text: n };
                    x("UpdateStatus", r),
                        (t = r.status),
                        (n = r.text),
                        e.preloader.html(n),
                        e.preloader.find("a").on("click", function (t) {
                            t.stopImmediatePropagation();
                        }),
                        e.container.addClass("mfp-s-" + t),
                        (i = t);
                }
            },
            _checkIfClose: function (i) {
                if (!t(i).hasClass(g)) {
                    var n = e.st.closeOnContentClick,
                        r = e.st.closeOnBgClick;
                    if (n && r) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || (e.preloader && i === e.preloader[0])) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0;
                    } else if (r && t.contains(document, i)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t);
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
            },
            _hasScrollBar: function (t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || _.height());
            },
            _setFocus: function () {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
            },
            _onFocusIn: function (i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1);
            },
            _parseMarkup: function (e, i, n) {
                var r;
                n.data && (i = t.extend(n.data, i)),
                    x(c, [e, i, n]),
                    t.each(i, function (i, n) {
                        if (void 0 === n || !1 === n) return !0;
                        if (((r = i.split("_")), r.length > 1)) {
                            var o = e.find(h + "-" + r[0]);
                            if (o.length > 0) {
                                var s = r[1];
                                "replaceWith" === s ? o[0] !== n[0] && o.replaceWith(n) : "img" === s ? (o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class")))) : o.attr(r[1], n);
                            }
                        } else e.find(h + "-" + i).html(n);
                    });
            },
            _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    (t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(t), (e.scrollbarSize = t.offsetWidth - t.clientWidth), document.body.removeChild(t);
                }
                return e.scrollbarSize;
            },
        }),
            (t.magnificPopup = {
                instance: null,
                proto: v.prototype,
                modules: [],
                open: function (e, i) {
                    return S(), (e = e ? t.extend(!0, {}, e) : {}), (e.isObj = !0), (e.index = i || 0), this.instance.open(e);
                },
                close: function () {
                    return t.magnificPopup.instance && t.magnificPopup.instance.close();
                },
                registerModule: function (e, i) {
                    i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            (t.fn.magnificPopup = function (i) {
                S();
                var n = t(this);
                if ("string" == typeof i)
                    if ("open" === i) {
                        var r,
                            o = y ? n.data("magnificPopup") : n[0].magnificPopup,
                            s = parseInt(arguments[1], 10) || 0;
                        o.items ? (r = o.items[s]) : ((r = n), o.delegate && (r = r.find(o.delegate)), (r = r.eq(s))), e._openClick({ mfpEl: r }, n, o);
                    } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
                else (i = t.extend(!0, {}, i)), y ? n.data("magnificPopup", i) : (n[0].magnificPopup = i), e.addGroup(n, i);
                return n;
            });
        var k,
            P,
            E,
            $ = "inline",
            A = function () {
                E && (P.after(E.addClass(k)).detach(), (E = null));
            };
        t.magnificPopup.registerModule($, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function () {
                    e.types.push($),
                        b(a + "." + $, function () {
                            A();
                        });
                },
                getInline: function (i, n) {
                    if ((A(), i.src)) {
                        var r = e.st.inline,
                            o = t(i.src);
                        if (o.length) {
                            var s = o[0].parentNode;
                            s && s.tagName && (P || ((k = r.hiddenClass), (P = w(k)), (k = "mfp-" + k)), (E = o.after(P).detach().removeClass(k))), e.updateStatus("ready");
                        } else e.updateStatus("error", r.tNotFound), (o = t("<div>"));
                        return (i.inlineElement = o), o;
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
                },
            },
        });
        var O,
            M = "ajax",
            D = function () {
                O && t(document.body).removeClass(O);
            },
            N = function () {
                D(), e.req && e.req.abort();
            };
        t.magnificPopup.registerModule(M, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function () {
                    e.types.push(M), (O = e.st.ajax.cursor), b(a + "." + M, N), b("BeforeChange." + M, N);
                },
                getAjax: function (i) {
                    O && t(document.body).addClass(O), e.updateStatus("loading");
                    var n = t.extend(
                        {
                            url: i.src,
                            success: function (n, r, o) {
                                var s = { data: n, xhr: o };
                                x("ParseAjax", s),
                                    e.appendContent(t(s.data), M),
                                    (i.finished = !0),
                                    D(),
                                    e._setFocus(),
                                    setTimeout(function () {
                                        e.wrap.addClass(f);
                                    }, 16),
                                    e.updateStatus("ready"),
                                    x("AjaxContentAdded");
                            },
                            error: function () {
                                D(), (i.finished = i.loadError = !0), e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src));
                            },
                        },
                        e.st.ajax.settings
                    );
                    return (e.req = t.ajax(n)), "";
                },
            },
        });
        var L,
            R = function (i) {
                if (i.data && void 0 !== i.data.title) return i.data.title;
                var n = e.st.image.titleSrc;
                if (n) {
                    if (t.isFunction(n)) return n.call(e, i);
                    if (i.el) return i.el.attr(n) || "";
                }
                return "";
            };
        t.magnificPopup.registerModule("image", {
            options: {
                markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"),
                        b(u + n, function () {
                            "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor);
                        }),
                        b(a + n, function () {
                            i.cursor && t(document.body).removeClass(i.cursor), _.off("resize" + h);
                        }),
                        b("Resize" + n, e.resizeImage),
                        e.isLowIE && b("AfterChange", e.resizeImage);
                },
                resizeImage: function () {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i);
                    }
                },
                _onImageHasSize: function (t) {
                    t.img && ((t.hasSize = !0), L && clearInterval(L), (t.isCheckingImgSize = !1), x("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), (t.imgHidden = !1)));
                },
                findImageSize: function (t) {
                    var i = 0,
                        n = t.img[0],
                        r = function (o) {
                            L && clearInterval(L),
                                (L = setInterval(function () {
                                    return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(L), i++, void (3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)));
                                }, o));
                        };
                    r(1);
                },
                getImage: function (i, n) {
                    var r = 0,
                        o = function () {
                            i &&
                                (i.img[0].complete
                                    ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), (i.hasSize = !0), (i.loaded = !0), x("ImageLoadComplete"))
                                    : (r++, 200 > r ? setTimeout(o, 100) : s()));
                        },
                        s = function () {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), (i.hasSize = !0), (i.loaded = !0), (i.loadError = !0));
                        },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        (c.className = "mfp-img"),
                            i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                            (i.img = t(c).on("load.mfploader", o).on("error.mfploader", s)),
                            (c.src = i.src),
                            l.is("img") && (i.img = i.img.clone()),
                            (c = i.img[0]),
                            c.naturalWidth > 0 ? (i.hasSize = !0) : c.width || (i.hasSize = !1);
                    }
                    return (
                        e._parseMarkup(n, { title: R(i), img_replaceWith: i.img }, i),
                        e.resizeImage(),
                        i.hasSize
                            ? (L && clearInterval(L), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n)
                            : (e.updateStatus("loading"), (i.loading = !0), i.hasSize || ((i.imgHidden = !0), n.addClass("mfp-loading"), e.findImageSize(i)), n)
                    );
                },
            },
        });
        var j,
            I = function () {
                return void 0 === j && (j = void 0 !== document.createElement("p").style.MozTransform), j;
            };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img");
                },
            },
            proto: {
                initZoom: function () {
                    var t,
                        i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var r,
                            o,
                            s = i.duration,
                            c = function (t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    r = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    o = "transition";
                                return (r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = n), e.css(r), e;
                            },
                            u = function () {
                                e.content.css("visibility", "visible");
                            };
                        b("BuildControls" + n, function () {
                            if (e._allowZoom()) {
                                if ((clearTimeout(r), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom()))) return void u();
                                (o = c(t)),
                                    o.css(e._getOffset()),
                                    e.wrap.append(o),
                                    (r = setTimeout(function () {
                                        o.css(e._getOffset(!0)),
                                            (r = setTimeout(function () {
                                                u(),
                                                    setTimeout(function () {
                                                        o.remove(), (t = o = null), x("ZoomAnimationEnded");
                                                    }, 16);
                                            }, s));
                                    }, 16));
                            }
                        }),
                            b(l + n, function () {
                                if (e._allowZoom()) {
                                    if ((clearTimeout(r), (e.st.removalDelay = s), !t)) {
                                        if (!(t = e._getItemToZoom())) return;
                                        o = c(t);
                                    }
                                    o.css(e._getOffset(!0)),
                                        e.wrap.append(o),
                                        e.content.css("visibility", "hidden"),
                                        setTimeout(function () {
                                            o.css(e._getOffset());
                                        }, 16);
                                }
                            }),
                            b(a + n, function () {
                                e._allowZoom() && (u(), o && o.remove(), (t = null));
                            });
                    }
                },
                _allowZoom: function () {
                    return "image" === e.currItem.type;
                },
                _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img;
                },
                _getOffset: function (i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var r = n.offset(),
                        o = parseInt(n.css("padding-top"), 10),
                        s = parseInt(n.css("padding-bottom"), 10);
                    r.top -= t(window).scrollTop() - o;
                    var a = { width: n.width(), height: (y ? n.innerHeight() : n[0].offsetHeight) - s - o };
                    return I() ? (a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)") : ((a.left = r.left), (a.top = r.top)), a;
                },
            },
        });
        var z = "iframe",
            F = function (t) {
                if (e.currTemplate[z]) {
                    var i = e.currTemplate[z].find("iframe");
                    i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"));
                }
            };
        t.magnificPopup.registerModule(z, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                    vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function () {
                    e.types.push(z),
                        b("BeforeChange", function (t, e, i) {
                            e !== i && (e === z ? F() : i === z && F(!0));
                        }),
                        b(a + "." + z, function () {
                            F();
                        });
                },
                getIframe: function (i, n) {
                    var r = i.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function () {
                        return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), (r = this.src.replace("%id%", r)), !1) : void 0;
                    });
                    var s = {};
                    return o.srcAction && (s[o.srcAction] = r), e._parseMarkup(n, s, i), e.updateStatus("ready"), n;
                },
            },
        });
        var H = function (t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t;
            },
            q = function (t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var i = e.st.gallery,
                        r = ".mfp-gallery";
                    return (
                        (e.direction = !0),
                        !(!i || !i.enabled) &&
                            ((o += " mfp-gallery"),
                            b(u + r, function () {
                                i.navigateByImgClick &&
                                    e.wrap.on("click" + r, ".mfp-img", function () {
                                        return e.items.length > 1 ? (e.next(), !1) : void 0;
                                    }),
                                    n.on("keydown" + r, function (t) {
                                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                                    });
                            }),
                            b("UpdateStatus" + r, function (t, i) {
                                i.text && (i.text = q(i.text, e.currItem.index, e.items.length));
                            }),
                            b(c + r, function (t, n, r, o) {
                                var s = e.items.length;
                                r.counter = s > 1 ? q(i.tCounter, o.index, s) : "";
                            }),
                            b("BuildControls" + r, function () {
                                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                                    var n = i.arrowMarkup,
                                        r = (e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g)),
                                        o = (e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g));
                                    r.click(function () {
                                        e.prev();
                                    }),
                                        o.click(function () {
                                            e.next();
                                        }),
                                        e.container.append(r.add(o));
                                }
                            }),
                            b(d + r, function () {
                                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                                    (e._preloadTimeout = setTimeout(function () {
                                        e.preloadNearbyImages(), (e._preloadTimeout = null);
                                    }, 16));
                            }),
                            void b(a + r, function () {
                                n.off(r), e.wrap.off("click" + r), (e.arrowRight = e.arrowLeft = null);
                            }))
                    );
                },
                next: function () {
                    (e.direction = !0), (e.index = H(e.index + 1)), e.updateItemHTML();
                },
                prev: function () {
                    (e.direction = !1), (e.index = H(e.index - 1)), e.updateItemHTML();
                },
                goTo: function (t) {
                    (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    var t,
                        i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        r = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? r : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : r); t++) e._preloadItem(e.index - t);
                },
                _preloadItem: function (i) {
                    if (((i = H(i)), !e.items[i].preloaded)) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)),
                            x("LazyLoad", n),
                            "image" === n.type &&
                                (n.img = t('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        n.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (n.hasSize = !0), (n.loadError = !0), x("LazyLoadError", n);
                                    })
                                    .attr("src", n.src)),
                            (n.preloaded = !0);
                    }
                },
            },
        });
        var B = "retina";
        t.magnificPopup.registerModule(B, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        (i = isNaN(i) ? i() : i) > 1 &&
                            (b("ImageHasSize." + B, function (t, e) {
                                e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" });
                            }),
                            b("ElementParse." + B, function (e, n) {
                                n.src = t.replaceSrc(n, i);
                            }));
                    }
                },
            },
        }),
            S();
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "TweenMax",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (t, e, i) {
            var n = function (t) {
                    var e,
                        i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i;
                },
                r = function (t, e, n) {
                    i.call(this, t, e, n),
                        (this._cycle = 0),
                        (this._yoyo = !0 === this.vars.yoyo),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        (this._dirty = !0),
                        (this.render = r.prototype.render);
                },
                o = 1e-10,
                s = i._internals,
                a = s.isSelector,
                l = s.isArray,
                c = (r.prototype = i.to({}, 0.1, {})),
                u = [];
            (r.version = "1.15.1"),
                (c.constructor = r),
                (c.kill()._gc = !1),
                (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
                (r.getTweensOf = i.getTweensOf),
                (r.lagSmoothing = i.lagSmoothing),
                (r.ticker = i.ticker),
                (r.render = i.render),
                (c.invalidate = function () {
                    return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), i.prototype.invalidate.call(this);
                }),
                (c.updateTo = function (t, e) {
                    var n,
                        r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) (this._initted = !1), o && this.render(0, !0, !0);
                        else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                            var s = this._time;
                            this.render(0, !0, !1), (this._initted = !1), this.render(s, !0, !1);
                        } else if (this._time > 0 || o) {
                            (this._initted = !1), this._init();
                            for (var a, l = 1 / (1 - r), c = this._firstPT; c; ) (a = c.s + c.c), (c.c *= l), (c.s = a - c.c), (c = c._next);
                        }
                    return this;
                }),
                (c.render = function (t, e, i) {
                    this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                    var n,
                        r,
                        a,
                        l,
                        c,
                        d,
                        p,
                        h,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        _ = this._rawPrevTime;
                    if (
                        (t >= f
                            ? ((this._totalTime = f),
                              (this._cycle = this._repeat),
                              this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = y), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                              this._reversed || ((n = !0), (r = "onComplete")),
                              0 === y &&
                                  (this._initted || !this.vars.lazy || i) &&
                                  (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === o) && _ !== t && ((i = !0), _ > o && (r = "onReverseComplete")), (this._rawPrevTime = h = !e || t || _ === t ? t : o)))
                            : 1e-7 > t
                            ? ((this._totalTime = this._time = this._cycle = 0),
                              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                              (0 !== g || (0 === y && _ > 0 && _ !== o)) && ((r = "onReverseComplete"), (n = this._reversed)),
                              0 > t && ((this._active = !1), 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), (this._rawPrevTime = h = !e || t || _ === t ? t : o))),
                              this._initted || (i = !0))
                            : ((this._totalTime = this._time = t),
                              0 !== this._repeat &&
                                  ((l = y + this._repeatDelay),
                                  (this._cycle = (this._totalTime / l) >> 0),
                                  0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,
                                  (this._time = this._totalTime - this._cycle * l),
                                  this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time),
                                  this._time > y ? (this._time = y) : 0 > this._time && (this._time = 0)),
                              this._easeType
                                  ? ((c = this._time / y),
                                    (d = this._easeType),
                                    (p = this._easePower),
                                    (1 === d || (3 === d && c >= 0.5)) && (c = 1 - c),
                                    3 === d && (c *= 2),
                                    1 === p ? (c *= c) : 2 === p ? (c *= c * c) : 3 === p ? (c *= c * c * c) : 4 === p && (c *= c * c * c * c),
                                    (this.ratio = 1 === d ? 1 - c : 2 === d ? c : 0.5 > this._time / y ? c / 2 : 1 - c / 2))
                                  : (this.ratio = this._ease.getRatio(this._time / y))),
                        m === this._time && !i && v === this._cycle)
                    )
                        return void (g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = m), (this._totalTime = g), (this._rawPrevTime = _), (this._cycle = v), s.lazyTweens.push(this), void (this._lazy = [t, e]);
                        this._time && !n ? (this.ratio = this._ease.getRatio(this._time / y)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (
                        !1 !== this._lazy && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== m && t >= 0 && (this._active = !0)),
                            0 === g &&
                                (2 === this._initted && t > 0 && this._init(),
                                this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                                this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))),
                            a = this._firstPT;
                        a;

                    )
                        a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || ((this._totalTime !== g || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))),
                        this._cycle !== v && (e || this._gc || (this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u))),
                        r &&
                            (!this._gc || i) &&
                            (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                            n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                            !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || u),
                            0 === y && this._rawPrevTime === o && h !== o && (this._rawPrevTime = 0));
                }),
                (r.to = function (t, e, i) {
                    return new r(t, e, i);
                }),
                (r.from = function (t, e, i) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new r(t, e, i);
                }),
                (r.fromTo = function (t, e, i, n) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new r(t, e, n);
                }),
                (r.staggerTo = r.allTo = function (t, e, o, s, c, d, p) {
                    s = s || 0;
                    var h,
                        f,
                        m,
                        g,
                        v = o.delay || 0,
                        y = [],
                        _ = function () {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(p || this, d || u);
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > s && ((t = n(t)), t.reverse(), (s *= -1)), h = t.length - 1, m = 0; h >= m; m++) {
                        f = {};
                        for (g in o) f[g] = o[g];
                        (f.delay = v), m === h && c && (f.onComplete = _), (y[m] = new r(t[m], e, f)), (v += s);
                    }
                    return y;
                }),
                (r.staggerFrom = r.allFrom = function (t, e, i, n, o, s, a) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), r.staggerTo(t, e, i, n, o, s, a);
                }),
                (r.staggerFromTo = r.allFromTo = function (t, e, i, n, o, s, a, l) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), r.staggerTo(t, e, n, o, s, a, l);
                }),
                (r.delayedCall = function (t, e, i, n, o) {
                    return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: n, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: n, immediateRender: !1, useFrames: o, overwrite: 0 });
                }),
                (r.set = function (t, e) {
                    return new r(t, 0, e);
                }),
                (r.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0;
                });
            var d = function (t, e) {
                    for (var n = [], r = 0, o = t._first; o; ) o instanceof i ? (n[r++] = o) : (e && (n[r++] = o), (n = n.concat(d(o, e))), (r = n.length)), (o = o._next);
                    return n;
                },
                p = (r.getAllTweens = function (e) {
                    return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e));
                });
            (r.killAll = function (t, i, n, r) {
                null == i && (i = !0), null == n && (n = !0);
                var o,
                    s,
                    a,
                    l = p(0 != r),
                    c = l.length,
                    u = i && n && r;
                for (a = 0; c > a; a++) (s = l[a]), (u || s instanceof e || ((o = s.target === s.vars.onComplete) && n) || (i && !o)) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1));
            }),
                (r.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var o,
                            c,
                            u,
                            d,
                            p,
                            h = s.tweenLookup;
                        if (("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))) for (d = t.length; --d > -1; ) r.killChildTweensOf(t[d], e);
                        else {
                            o = [];
                            for (u in h) for (c = h[u].target.parentNode; c; ) c === t && (o = o.concat(h[u].tweens)), (c = c.parentNode);
                            for (p = o.length, d = 0; p > d; d++) e && o[d].totalTime(o[d].totalDuration()), o[d]._enabled(!1, !1);
                        }
                    }
                });
            var h = function (t, i, n, r) {
                (i = !1 !== i), (n = !1 !== n), (r = !1 !== r);
                for (var o, s, a = p(r), l = i && n && r, c = a.length; --c > -1; ) (s = a[c]), (l || s instanceof e || ((o = s.target === s.vars.onComplete) && n) || (i && !o)) && s.paused(t);
            };
            return (
                (r.pauseAll = function (t, e, i) {
                    h(!0, t, e, i);
                }),
                (r.resumeAll = function (t, e, i) {
                    h(!1, t, e, i);
                }),
                (r.globalTimeScale = function (e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length
                        ? ((e = e || o),
                          (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
                          (n = t._rootFramesTimeline),
                          (r = i.ticker.frame),
                          (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
                          (n._timeScale = t._rootTimeline._timeScale = e),
                          e)
                        : n._timeScale;
                }),
                (c.progress = function (t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
                }),
                (c.totalProgress = function (t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
                }),
                (c.time = function (t, e) {
                    return arguments.length
                        ? (this._dirty && this.totalDuration(),
                          t > this._duration && (t = this._duration),
                          this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                          this.totalTime(t, e))
                        : this._time;
                }),
                (c.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
                }),
                (c.totalDuration = function (t) {
                    return arguments.length
                        ? -1 === this._repeat
                            ? this
                            : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
                        : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                }),
                (c.repeat = function (t) {
                    return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                }),
                (c.repeatDelay = function (t) {
                    return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                }),
                (c.yoyo = function (t) {
                    return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                r
            );
        },
        !0
    ),
        _gsScope._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (t, e, i) {
                var n = function (t) {
                        e.call(this, t),
                            (this._labels = {}),
                            (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                            (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                            (this._sortChildren = !0),
                            (this._onUpdate = this.vars.onUpdate);
                        var i,
                            n,
                            r = this.vars;
                        for (n in r) (i = r[n]), l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                    },
                    r = 1e-10,
                    o = i._internals,
                    s = (n._internals = {}),
                    a = o.isSelector,
                    l = o.isArray,
                    c = o.lazyTweens,
                    u = o.lazyRender,
                    d = [],
                    p = _gsScope._gsDefine.globals,
                    h = function (t) {
                        var e,
                            i = {};
                        for (e in t) i[e] = t[e];
                        return i;
                    },
                    f = (s.pauseCallback = function (t, e, i, n) {
                        var r = t._timeline,
                            o = r._totalTime;
                        (!e && this._forcingPlayhead) || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(n || r, i || d), this._forcingPlayhead && r.seek(o));
                    }),
                    m = function (t) {
                        var e,
                            i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i;
                    },
                    g = (n.prototype = new e());
                return (
                    (n.version = "1.15.1"),
                    (g.constructor = n),
                    (g.kill()._gc = g._forcingPlayhead = !1),
                    (g.to = function (t, e, n, r) {
                        var o = (n.repeat && p.TweenMax) || i;
                        return e ? this.add(new o(t, e, n), r) : this.set(t, n, r);
                    }),
                    (g.from = function (t, e, n, r) {
                        return this.add(((n.repeat && p.TweenMax) || i).from(t, e, n), r);
                    }),
                    (g.fromTo = function (t, e, n, r, o) {
                        var s = (r.repeat && p.TweenMax) || i;
                        return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o);
                    }),
                    (g.staggerTo = function (t, e, r, o, s, l, c, u) {
                        var d,
                            p = new n({ onComplete: l, onCompleteParams: c, onCompleteScope: u, smoothChildTiming: this.smoothChildTiming });
                        for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, 0 > o && ((t = m(t)), t.reverse(), (o *= -1)), d = 0; t.length > d; d++)
                            r.startAt && (r.startAt = h(r.startAt)), p.to(t[d], e, h(r), d * o);
                        return this.add(p, s);
                    }),
                    (g.staggerFrom = function (t, e, i, n, r, o, s, a) {
                        return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, n, r, o, s, a);
                    }),
                    (g.staggerFromTo = function (t, e, i, n, r, o, s, a, l) {
                        return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, n, r, o, s, a, l);
                    }),
                    (g.call = function (t, e, n, r) {
                        return this.add(i.delayedCall(0, t, e, n), r);
                    }),
                    (g.set = function (t, e, n) {
                        return (n = this._parseTimeOrLabel(n, 0, !0)), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n);
                    }),
                    (n.exportRoot = function (t, e) {
                        (t = t || {}), null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var r,
                            o,
                            s = new n(t),
                            a = s._timeline;
                        for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r; )
                            (o = r._next), (e && r instanceof i && r.target === r.vars.onComplete) || s.add(r, r._startTime - r._delay), (r = o);
                        return a.add(s, 0), s;
                    }),
                    (g.add = function (r, o, s, a) {
                        var c, u, d, p, h, f;
                        if (("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t))) {
                            if (r instanceof Array || (r && r.push && l(r))) {
                                for (s = s || "normal", a = a || 0, c = o, u = r.length, d = 0; u > d; d++)
                                    l((p = r[d])) && (p = new n({ tweens: p })),
                                        this.add(p, c),
                                        "string" != typeof p && "function" != typeof p && ("sequence" === s ? (c = p._startTime + p.totalDuration() / p._timeScale) : "start" === s && (p._startTime -= p.delay())),
                                        (c += a);
                                return this._uncache(!0);
                            }
                            if ("string" == typeof r) return this.addLabel(r, o);
                            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                            r = i.delayedCall(0, r);
                        }
                        if ((e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                            for (h = this, f = h.rawTime() > r._startTime; h._timeline; ) f && h._timeline.smoothChildTiming ? h.totalTime(h._totalTime, !0) : h._gc && h._enabled(!0, !1), (h = h._timeline);
                        return this;
                    }),
                    (g.remove = function (e) {
                        if (e instanceof t) return this._remove(e, !1);
                        if (e instanceof Array || (e && e.push && l(e))) {
                            for (var i = e.length; --i > -1; ) this.remove(e[i]);
                            return this;
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
                    }),
                    (g._remove = function (t, i) {
                        e.prototype._remove.call(this, t, i);
                        var n = this._last;
                        return (
                            n
                                ? this._time > n._startTime + n._totalDuration / n._timeScale && ((this._time = this.duration()), (this._totalTime = this._totalDuration))
                                : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                            this
                        );
                    }),
                    (g.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                    }),
                    (g.insert = g.insertMultiple = function (t, e, i, n) {
                        return this.add(t, e || 0, i, n);
                    }),
                    (g.appendMultiple = function (t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
                    }),
                    (g.addLabel = function (t, e) {
                        return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                    }),
                    (g.addPause = function (t, e, n, r) {
                        var o = i.delayedCall(0, f, ["{self}", e, n, r], this);
                        return (o.data = "isPause"), this.add(o, t);
                    }),
                    (g.removeLabel = function (t) {
                        return delete this._labels[t], this;
                    }),
                    (g.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1;
                    }),
                    (g._parseTimeOrLabel = function (e, i, n, r) {
                        var o;
                        if (r instanceof t && r.timeline === this) this.remove(r);
                        else if (r && (r instanceof Array || (r.push && l(r)))) for (o = r.length; --o > -1; ) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                        if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                        if (((i = i || 0), "string" != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = this.duration());
                        else {
                            if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? (n ? (this._labels[e] = this.duration() + i) : i) : this._labels[e] + i;
                            (i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1))), (e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration());
                        }
                        return Number(e) + i;
                    }),
                    (g.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
                    }),
                    (g.stop = function () {
                        return this.paused(!0);
                    }),
                    (g.gotoAndPlay = function (t, e) {
                        return this.play(t, e);
                    }),
                    (g.gotoAndStop = function (t, e) {
                        return this.pause(t, e);
                    }),
                    (g.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            o,
                            s,
                            a,
                            l,
                            p = this._dirty ? this.totalDuration() : this._totalDuration,
                            h = this._time,
                            f = this._startTime,
                            m = this._timeScale,
                            g = this._paused;
                        if (
                            (t >= p
                                ? ((this._totalTime = this._time = p),
                                  this._reversed ||
                                      this._hasPausedChild() ||
                                      ((o = !0),
                                      (a = "onComplete"),
                                      0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && ((l = !0), this._rawPrevTime > r && (a = "onReverseComplete"))),
                                  (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r),
                                  (t = p + 1e-4))
                                : 1e-7 > t
                                ? ((this._totalTime = this._time = 0),
                                  (0 !== h || (0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || (0 > t && this._rawPrevTime >= 0)))) && ((a = "onReverseComplete"), (o = this._reversed)),
                                  0 > t
                                      ? ((this._active = !1), this._rawPrevTime >= 0 && this._first && (l = !0), (this._rawPrevTime = t))
                                      : ((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r), (t = 0), this._initted || (l = !0)))
                                : (this._totalTime = this._time = this._rawPrevTime = t),
                            (this._time !== h && this._first) || i || l)
                        ) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._time !== h && t > 0 && (this._active = !0)),
                                0 === h && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d)),
                                this._time >= h)
                            )
                                for (n = this._first; n && ((s = n._next), !this._paused || g); )
                                    (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                                        (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        (n = s);
                            else
                                for (n = this._last; n && ((s = n._prev), !this._paused || g); )
                                    (n._active || (h >= n._startTime && !n._paused && !n._gc)) &&
                                        (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                        (n = s);
                            this._onUpdate && (e || (c.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d))),
                                a &&
                                    (this._gc ||
                                        ((f === this._startTime || m !== this._timeScale) &&
                                            (0 === this._time || p >= this.totalDuration()) &&
                                            (o && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                            !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || d))));
                        }
                    }),
                    (g._hasPausedChild = function () {
                        for (var t = this._first; t; ) {
                            if (t._paused || (t instanceof n && t._hasPausedChild())) return !0;
                            t = t._next;
                        }
                        return !1;
                    }),
                    (g.getChildren = function (t, e, n, r) {
                        r = r || -9999999999;
                        for (var o = [], s = this._first, a = 0; s; )
                            r > s._startTime || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== t && ((o = o.concat(s.getChildren(!0, e, n))), (a = o.length)))), (s = s._next);
                        return o;
                    }),
                    (g.getTweensOf = function (t, e) {
                        var n,
                            r,
                            o = this._gc,
                            s = [],
                            a = 0;
                        for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1; ) (n[r].timeline === this || (e && this._contains(n[r]))) && (s[a++] = n[r]);
                        return o && this._enabled(!1, !0), s;
                    }),
                    (g.recent = function () {
                        return this._recent;
                    }),
                    (g._contains = function (t) {
                        for (var e = t.timeline; e; ) {
                            if (e === this) return !0;
                            e = e.timeline;
                        }
                        return !1;
                    }),
                    (g.shiftChildren = function (t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, o = this._labels; r; ) r._startTime >= i && (r._startTime += t), (r = r._next);
                        if (e) for (n in o) o[n] >= i && (o[n] += t);
                        return this._uncache(!0);
                    }),
                    (g._kill = function (t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; ) i[n]._kill(t, e) && (r = !0);
                        return r;
                    }),
                    (g.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
                        return !1 !== t && (this._labels = {}), this._uncache(!0);
                    }),
                    (g.invalidate = function () {
                        for (var e = this._first; e; ) e.invalidate(), (e = e._next);
                        return t.prototype.invalidate.call(this);
                    }),
                    (g._enabled = function (t, i) {
                        if (t === this._gc) for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
                        return e.prototype._enabled.call(this, t, i);
                    }),
                    (g.totalTime = function () {
                        this._forcingPlayhead = !0;
                        var e = t.prototype.totalTime.apply(this, arguments);
                        return (this._forcingPlayhead = !1), e;
                    }),
                    (g.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                    }),
                    (g.totalDuration = function (t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, r = this._last, o = 999999999999; r; )
                                    (e = r._prev),
                                        r._dirty && r.totalDuration(),
                                        r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : (o = r._startTime),
                                        0 > r._startTime &&
                                            !r._paused &&
                                            ((n -= r._startTime), this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), (o = 0)),
                                        (i = r._startTime + r._totalDuration / r._timeScale),
                                        i > n && (n = i),
                                        (r = e);
                                (this._duration = this._totalDuration = n), (this._dirty = !1);
                            }
                            return this._totalDuration;
                        }
                        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
                    }),
                    (g.usesFrames = function () {
                        for (var e = this._timeline; e._timeline; ) e = e._timeline;
                        return e === t._rootFramesTimeline;
                    }),
                    (g.rawTime = function () {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
                    }),
                    n
                );
            },
            !0
        ),
        _gsScope._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (t, e, i) {
                var n = function (e) {
                        t.call(this, e), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
                    },
                    r = 1e-10,
                    o = [],
                    s = e._internals,
                    a = s.lazyTweens,
                    l = s.lazyRender,
                    c = new i(null, null, 1, 0),
                    u = (n.prototype = new t());
                return (
                    (u.constructor = n),
                    (u.kill()._gc = !1),
                    (n.version = "1.15.1"),
                    (u.invalidate = function () {
                        return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), t.prototype.invalidate.call(this);
                    }),
                    (u.addCallback = function (t, i, n, r) {
                        return this.add(e.delayedCall(0, t, n, r), i);
                    }),
                    (u.removeCallback = function (t, e) {
                        if (t)
                            if (null == e) this._kill(null, t);
                            else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this;
                    }),
                    (u.removePause = function (e) {
                        return this.removeCallback(t._internals.pauseCallback, e);
                    }),
                    (u.tweenTo = function (t, i) {
                        i = i || {};
                        var n,
                            r,
                            s,
                            a = { ease: c, useFrames: this.usesFrames(), immediateRender: !1 };
                        for (r in i) a[r] = i[r];
                        return (
                            (a.time = this._parseTimeOrLabel(t)),
                            (n = Math.abs(Number(a.time) - this._time) / this._timeScale || 0.001),
                            (s = new e(this, n, a)),
                            (a.onStart = function () {
                                s.target.paused(!0),
                                    s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale),
                                    i.onStart && i.onStart.apply(i.onStartScope || s, i.onStartParams || o);
                            }),
                            s
                        );
                    }),
                    (u.tweenFromTo = function (t, e, i) {
                        (i = i || {}), (t = this._parseTimeOrLabel(t)), (i.startAt = { onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this }), (i.immediateRender = !1 !== i.immediateRender);
                        var n = this.tweenTo(e, i);
                        return n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001);
                    }),
                    (u.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n,
                            s,
                            c,
                            u,
                            d,
                            p,
                            h = this._dirty ? this.totalDuration() : this._totalDuration,
                            f = this._duration,
                            m = this._time,
                            g = this._totalTime,
                            v = this._startTime,
                            y = this._timeScale,
                            _ = this._rawPrevTime,
                            b = this._paused,
                            w = this._cycle;
                        if (
                            (t >= h
                                ? (this._locked || ((this._totalTime = h), (this._cycle = this._repeat)),
                                  this._reversed || this._hasPausedChild() || ((s = !0), (u = "onComplete"), 0 === this._duration && (0 === t || 0 > _ || _ === r) && _ !== t && this._first && ((d = !0), _ > r && (u = "onReverseComplete"))),
                                  (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r),
                                  this._yoyo && 0 != (1 & this._cycle) ? (this._time = t = 0) : ((this._time = f), (t = f + 1e-4)))
                                : 1e-7 > t
                                ? (this._locked || (this._totalTime = this._cycle = 0),
                                  (this._time = 0),
                                  (0 !== m || (0 === f && _ !== r && (_ > 0 || (0 > t && _ >= 0)) && !this._locked)) && ((u = "onReverseComplete"), (s = this._reversed)),
                                  0 > t ? ((this._active = !1), _ >= 0 && this._first && (d = !0), (this._rawPrevTime = t)) : ((this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r), (t = 0), this._initted || (d = !0)))
                                : (0 === f && 0 > _ && (d = !0),
                                  (this._time = this._rawPrevTime = t),
                                  this._locked ||
                                      ((this._totalTime = t),
                                      0 !== this._repeat &&
                                          ((p = f + this._repeatDelay),
                                          (this._cycle = (this._totalTime / p) >> 0),
                                          0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--,
                                          (this._time = this._totalTime - this._cycle * p),
                                          this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time),
                                          this._time > f ? ((this._time = f), (t = f + 1e-4)) : 0 > this._time ? (this._time = t = 0) : (t = this._time)))),
                            this._cycle !== w && !this._locked)
                        ) {
                            var x = this._yoyo && 0 != (1 & w),
                                T = x === (this._yoyo && 0 != (1 & this._cycle)),
                                S = this._totalTime,
                                C = this._cycle,
                                k = this._rawPrevTime,
                                P = this._time;
                            if (
                                ((this._totalTime = w * f),
                                w > this._cycle ? (x = !x) : (this._totalTime += f),
                                (this._time = m),
                                (this._rawPrevTime = 0 === f ? _ - 1e-4 : _),
                                (this._cycle = w),
                                (this._locked = !0),
                                (m = x ? 0 : f),
                                this.render(m, e, 0 === f),
                                e || this._gc || (this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)),
                                T && ((m = x ? f + 1e-4 : -1e-4), this.render(m, !0, !1)),
                                (this._locked = !1),
                                this._paused && !b)
                            )
                                return;
                            (this._time = P), (this._totalTime = S), (this._cycle = C), (this._rawPrevTime = k);
                        }
                        if (!((this._time !== m && this._first) || i || d)) return void (g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                        if (
                            (this._initted || (this._initted = !0),
                            this._active || (!this._paused && this._totalTime !== g && t > 0 && (this._active = !0)),
                            0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)),
                            this._time >= m)
                        )
                            for (n = this._first; n && ((c = n._next), !this._paused || b); )
                                (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                                    (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                    (n = c);
                        else
                            for (n = this._last; n && ((c = n._prev), !this._paused || b); )
                                (n._active || (m >= n._startTime && !n._paused && !n._gc)) &&
                                    (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                    (n = c);
                        this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o))),
                            u &&
                                (this._locked ||
                                    this._gc ||
                                    ((v === this._startTime || y !== this._timeScale) &&
                                        (0 === this._time || h >= this.totalDuration()) &&
                                        (s && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                        !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || o))));
                    }),
                    (u.getActive = function (t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var n,
                            r,
                            o = [],
                            s = this.getChildren(t, e, i),
                            a = 0,
                            l = s.length;
                        for (n = 0; l > n; n++) (r = s[n]), r.isActive() && (o[a++] = r);
                        return o;
                    }),
                    (u.getLabelAfter = function (t) {
                        t || (0 !== t && (t = this._time));
                        var e,
                            i = this.getLabelsArray(),
                            n = i.length;
                        for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
                        return null;
                    }),
                    (u.getLabelBefore = function (t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (t > e[i].time) return e[i].name;
                        return null;
                    }),
                    (u.getLabelsArray = function () {
                        var t,
                            e = [],
                            i = 0;
                        for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                        return (
                            e.sort(function (t, e) {
                                return t.time - e.time;
                            }),
                            e
                        );
                    }),
                    (u.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
                    }),
                    (u.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
                    }),
                    (u.totalDuration = function (e) {
                        return arguments.length
                            ? -1 === this._repeat
                                ? this
                                : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
                            : (this._dirty && (t.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                    }),
                    (u.time = function (t, e) {
                        return arguments.length
                            ? (this._dirty && this.totalDuration(),
                              t > this._duration && (t = this._duration),
                              this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                              this.totalTime(t, e))
                            : this._time;
                    }),
                    (u.repeat = function (t) {
                        return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                    }),
                    (u.repeatDelay = function (t) {
                        return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                    }),
                    (u.yoyo = function (t) {
                        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                    }),
                    (u.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
                    }),
                    n
                );
            },
            !0
        ),
        (function () {
            var t = 180 / Math.PI,
                e = [],
                i = [],
                n = [],
                r = {},
                o = _gsScope._gsDefine.globals,
                s = function (t, e, i, n) {
                    (this.a = t), (this.b = e), (this.c = i), (this.d = n), (this.da = n - t), (this.ca = i - t), (this.ba = e - t);
                },
                a = function (t, e, i, n) {
                    var r = { a: t },
                        o = {},
                        s = {},
                        a = { c: n },
                        l = (t + e) / 2,
                        c = (e + i) / 2,
                        u = (i + n) / 2,
                        d = (l + c) / 2,
                        p = (c + u) / 2,
                        h = (p - d) / 8;
                    return (r.b = l + (t - l) / 4), (o.b = d + h), (r.c = o.a = (r.b + o.b) / 2), (o.c = s.a = (d + p) / 2), (s.b = p - h), (a.b = u + (n - u) / 4), (s.c = a.a = (s.b + a.b) / 2), [r, o, s, a];
                },
                l = function (t, r, o, s, l) {
                    var c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        m,
                        g,
                        v,
                        y,
                        _,
                        b,
                        w,
                        x = t.length - 1,
                        T = 0,
                        S = t[0].a;
                    for (c = 0; x > c; c++)
                        (h = t[T]),
                            (u = h.a),
                            (d = h.d),
                            (p = t[T + 1].d),
                            l
                                ? ((_ = e[c]),
                                  (b = i[c]),
                                  (w = (0.25 * (b + _) * r) / (s ? 0.5 : n[c] || 0.5)),
                                  (f = d - (d - u) * (s ? 0.5 * r : 0 !== _ ? w / _ : 0)),
                                  (m = d + (p - d) * (s ? 0.5 * r : 0 !== b ? w / b : 0)),
                                  (g = d - (f + (((m - f) * ((3 * _) / (_ + b) + 0.5)) / 4 || 0))))
                                : ((f = d - 0.5 * (d - u) * r), (m = d + 0.5 * (p - d) * r), (g = d - (f + m) / 2)),
                            (f += g),
                            (m += g),
                            (h.c = v = f),
                            (h.b = 0 !== c ? S : (S = h.a + 0.6 * (h.c - h.a))),
                            (h.da = d - u),
                            (h.ca = v - u),
                            (h.ba = S - u),
                            o ? ((y = a(u, S, v, d)), t.splice(T, 1, y[0], y[1], y[2], y[3]), (T += 4)) : T++,
                            (S = m);
                    (h = t[T]), (h.b = S), (h.c = S + 0.4 * (h.d - S)), (h.da = h.d - h.a), (h.ca = h.c - h.a), (h.ba = S - h.a), o && ((y = a(h.a, S, h.c, h.d)), t.splice(T, 1, y[0], y[1], y[2], y[3]));
                },
                c = function (t, n, r, o) {
                    var a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h = [];
                    if (o) for (t = [o].concat(t), l = t.length; --l > -1; ) "string" == typeof (p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
                    if (0 > (a = t.length - 2)) return (h[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n])), h;
                    for (l = 0; a > l; l++) (c = t[l][n]), (u = t[l + 1][n]), (h[l] = new s(c, 0, 0, u)), r && ((d = t[l + 2][n]), (e[l] = (e[l] || 0) + (u - c) * (u - c)), (i[l] = (i[l] || 0) + (d - u) * (d - u)));
                    return (h[l] = new s(t[l][n], 0, 0, t[l + 1][n])), h;
                },
                u = function (t, o, s, a, u, d) {
                    var p,
                        h,
                        f,
                        m,
                        g,
                        v,
                        y,
                        _,
                        b = {},
                        w = [],
                        x = d || t[0];
                    (u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
                        null == o && (o = 1);
                    for (h in t[0]) w.push(h);
                    if (t.length > 1) {
                        for (_ = t[t.length - 1], y = !0, p = w.length; --p > -1; )
                            if (((h = w[p]), Math.abs(x[h] - _[h]) > 0.05)) {
                                y = !1;
                                break;
                            }
                        y && ((t = t.concat()), d && t.unshift(d), t.push(t[1]), (d = t[t.length - 3]));
                    }
                    for (e.length = i.length = n.length = 0, p = w.length; --p > -1; ) (h = w[p]), (r[h] = -1 !== u.indexOf("," + h + ",")), (b[h] = c(t, h, r[h], d));
                    for (p = e.length; --p > -1; ) (e[p] = Math.sqrt(e[p])), (i[p] = Math.sqrt(i[p]));
                    if (!a) {
                        for (p = w.length; --p > -1; ) if (r[h]) for (f = b[w[p]], v = f.length - 1, m = 0; v > m; m++) (g = f[m + 1].da / i[m] + f[m].da / e[m]), (n[m] = (n[m] || 0) + g * g);
                        for (p = n.length; --p > -1; ) n[p] = Math.sqrt(n[p]);
                    }
                    for (p = w.length, m = s ? 4 : 1; --p > -1; ) (h = w[p]), (f = b[h]), l(f, o, s, a, r[h]), y && (f.splice(0, m), f.splice(f.length - m, m));
                    return b;
                },
                d = function (t, e, i) {
                    e = e || "soft";
                    var n,
                        r,
                        o,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        m = {},
                        g = "cubic" === e ? 3 : 2,
                        v = "soft" === e,
                        y = [];
                    if ((v && i && (t = [i].concat(t)), null == t || g + 1 > t.length)) throw "invalid Bezier data";
                    for (p in t[0]) y.push(p);
                    for (c = y.length; --c > -1; ) {
                        for (p = y[c], m[p] = l = [], h = 0, d = t.length, u = 0; d > u; u++)
                            (n = null == i ? t[u][p] : "string" == typeof (f = t[u][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f)), v && u > 1 && d - 1 > u && (l[h++] = (n + l[h - 2]) / 2), (l[h++] = n);
                        for (d = h - g + 1, h = 0, u = 0; d > u; u += g) (n = l[u]), (r = l[u + 1]), (o = l[u + 2]), (a = 2 === g ? 0 : l[u + 3]), (l[h++] = f = 3 === g ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o));
                        l.length = h;
                    }
                    return m;
                },
                p = function (t, e, i) {
                    for (var n, r, o, s, a, l, c, u, d, p, h, f = 1 / i, m = t.length; --m > -1; )
                        for (p = t[m], o = p.a, s = p.d - o, a = p.c - o, l = p.b - o, n = r = 0, u = 1; i >= u; u++)
                            (c = f * u), (d = 1 - c), (n = r - (r = (c * c * s + 3 * d * (c * a + d * l)) * c)), (h = m * i + u - 1), (e[h] = (e[h] || 0) + n * n);
                },
                h = function (t, e) {
                    e = e >> 0 || 6;
                    var i,
                        n,
                        r,
                        o,
                        s = [],
                        a = [],
                        l = 0,
                        c = 0,
                        u = e - 1,
                        d = [],
                        h = [];
                    for (i in t) p(t[i], s, e);
                    for (r = s.length, n = 0; r > n; n++) (l += Math.sqrt(s[n])), (o = n % e), (h[o] = l), o === u && ((c += l), (o = (n / e) >> 0), (d[o] = h), (a[o] = c), (l = 0), (h = []));
                    return { length: c, lengths: a, segments: d };
                },
                f = _gsScope._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.4",
                    API: 2,
                    global: !0,
                    init: function (t, e, i) {
                        (this._target = t), e instanceof Array && (e = { values: e }), (this._func = {}), (this._round = {}), (this._props = []), (this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
                        var n,
                            r,
                            o,
                            s,
                            a,
                            l = e.values || [],
                            c = {},
                            p = l[0],
                            f = e.autoRotate || i.vars.orientToBezier;
                        this._autoRotate = f ? (f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]]) : null;
                        for (n in p) this._props.push(n);
                        for (o = this._props.length; --o > -1; )
                            (n = this._props[o]),
                                this._overwriteProps.push(n),
                                (r = this._func[n] = "function" == typeof t[n]),
                                (c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n])),
                                a || (c[n] !== l[0][n] && (a = c));
                        if (
                            ((this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, c)),
                            (this._segCount = this._beziers[n].length),
                            this._timeRes)
                        ) {
                            var m = h(this._beziers, this._timeRes);
                            (this._length = m.length),
                                (this._lengths = m.lengths),
                                (this._segments = m.segments),
                                (this._l1 = this._li = this._s1 = this._si = 0),
                                (this._l2 = this._lengths[0]),
                                (this._curSeg = this._segments[0]),
                                (this._s2 = this._curSeg[0]),
                                (this._prec = 1 / this._curSeg.length);
                        }
                        if ((f = this._autoRotate))
                            for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1; ) {
                                for (s = 0; 3 > s; s++) (n = f[o][s]), (this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]);
                                (n = f[o][2]), (this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]);
                            }
                        return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
                    },
                    set: function (e) {
                        var i,
                            n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p = this._segCount,
                            h = this._func,
                            f = this._target,
                            m = e !== this._startRatio;
                        if (this._timeRes) {
                            if (((u = this._lengths), (d = this._curSeg), (e *= this._length), (r = this._li), e > this._l2 && p - 1 > r)) {
                                for (c = p - 1; c > r && e >= (this._l2 = u[++r]); );
                                (this._l1 = u[r - 1]), (this._li = r), (this._curSeg = d = this._segments[r]), (this._s2 = d[(this._s1 = this._si = 0)]);
                            } else if (this._l1 > e && r > 0) {
                                for (; r > 0 && (this._l1 = u[--r]) >= e; );
                                0 === r && this._l1 > e ? (this._l1 = 0) : r++, (this._l2 = u[r]), (this._li = r), (this._curSeg = d = this._segments[r]), (this._s1 = d[(this._si = d.length - 1) - 1] || 0), (this._s2 = d[this._si]);
                            }
                            if (((i = r), (e -= this._l1), (r = this._si), e > this._s2 && d.length - 1 > r)) {
                                for (c = d.length - 1; c > r && e >= (this._s2 = d[++r]); );
                                (this._s1 = d[r - 1]), (this._si = r);
                            } else if (this._s1 > e && r > 0) {
                                for (; r > 0 && (this._s1 = d[--r]) >= e; );
                                0 === r && this._s1 > e ? (this._s1 = 0) : r++, (this._s2 = d[r]), (this._si = r);
                            }
                            a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
                        } else (i = 0 > e ? 0 : e >= 1 ? p - 1 : (p * e) >> 0), (a = (e - i * (1 / p)) * p);
                        for (n = 1 - a, r = this._props.length; --r > -1; )
                            (o = this._props[r]), (s = this._beziers[o][i]), (l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a), this._round[o] && (l = Math.round(l)), h[o] ? f[o](l) : (f[o] = l);
                        if (this._autoRotate) {
                            var g,
                                v,
                                y,
                                _,
                                b,
                                w,
                                x,
                                T = this._autoRotate;
                            for (r = T.length; --r > -1; )
                                (o = T[r][2]),
                                    (w = T[r][3] || 0),
                                    (x = !0 === T[r][4] ? 1 : t),
                                    (s = this._beziers[T[r][0]]),
                                    (g = this._beziers[T[r][1]]),
                                    s &&
                                        g &&
                                        ((s = s[i]),
                                        (g = g[i]),
                                        (v = s.a + (s.b - s.a) * a),
                                        (_ = s.b + (s.c - s.b) * a),
                                        (v += (_ - v) * a),
                                        (_ += (s.c + (s.d - s.c) * a - _) * a),
                                        (y = g.a + (g.b - g.a) * a),
                                        (b = g.b + (g.c - g.b) * a),
                                        (y += (b - y) * a),
                                        (b += (g.c + (g.d - g.c) * a - b) * a),
                                        (l = m ? Math.atan2(b - y, _ - v) * x + w : this._initialRotations[r]),
                                        h[o] ? f[o](l) : (f[o] = l));
                        }
                    },
                }),
                m = f.prototype;
            (f.bezierThrough = u),
                (f.cubicToQuadratic = a),
                (f._autoCSS = !0),
                (f.quadraticToCubic = function (t, e, i) {
                    return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
                }),
                (f._cssRegister = function () {
                    var t = o.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, o, s, a, l) {
                                e instanceof Array && (e = { values: e }), (l = new f());
                                var c,
                                    u,
                                    d,
                                    p = e.values,
                                    h = p.length - 1,
                                    m = [],
                                    g = {};
                                if (0 > h) return a;
                                for (c = 0; h >= c; c++) (d = i(t, p[c], s, a, l, h !== c)), (m[c] = d.end);
                                for (u in e) g[u] = e[u];
                                return (
                                    (g.values = m),
                                    (a = new r(t, "bezier", 0, 0, d.pt, 2)),
                                    (a.data = d),
                                    (a.plugin = l),
                                    (a.setRatio = n),
                                    0 === g.autoRotate && (g.autoRotate = !0),
                                    !g.autoRotate ||
                                        g.autoRotate instanceof Array ||
                                        ((c = !0 === g.autoRotate ? 0 : Number(g.autoRotate)), (g.autoRotate = null != d.end.left ? [["left", "top", "rotation", c, !1]] : null != d.end.x && [["x", "y", "rotation", c, !1]])),
                                    g.autoRotate && (s._transform || s._enableTransforms(!1), (d.autoRotate = s._target._gsTransform)),
                                    l._onInitTween(d.proxy, g, s._tween),
                                    a
                                );
                            },
                        });
                    }
                }),
                (m._roundProps = function (t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1; ) (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e);
                }),
                (m._kill = function (t) {
                    var e,
                        i,
                        n = this._props;
                    for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1; ) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t);
                });
        })(),
        _gsScope._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (t, e) {
                var i,
                    n,
                    r,
                    o,
                    s = function () {
                        t.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = s.prototype.setRatio);
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = (s.prototype = new t("css"));
                (c.constructor = s),
                    (s.version = "1.15.1"),
                    (s.API = 2),
                    (s.defaultTransformPerspective = 0),
                    (s.defaultSkewType = "compensated"),
                    (c = "px"),
                    (s.suffixMap = { top: c, right: c, bottom: c, left: c, width: c, height: c, fontSize: c, padding: c, margin: c, perspective: c, lineHeight: "" });
                var u,
                    d,
                    p,
                    h,
                    f,
                    m,
                    g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function (t, e) {
                        return e.toUpperCase();
                    },
                    $ = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    D = Math.PI / 180,
                    N = 180 / Math.PI,
                    L = {},
                    R = document,
                    j = function (t) {
                        return R.createElementNS ? R.createElementNS("http://www.w3.org/1999/xhtml", t) : R.createElement(t);
                    },
                    I = j("div"),
                    z = j("img"),
                    F = (s._internals = { _specialProps: l }),
                    H = navigator.userAgent,
                    q = (function () {
                        var t = H.indexOf("Android"),
                            e = j("a");
                        return (
                            (p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3)),
                            (f = p && 6 > Number(H.substr(H.indexOf("Version/") + 8, 1))),
                            (h = -1 !== H.indexOf("Firefox")),
                            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)),
                            !!e && ((e.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(e.style.opacity))
                        );
                    })(),
                    B = function (t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                    },
                    W = function (t) {
                        window.console && console.log(t);
                    },
                    V = "",
                    X = "",
                    U = function (t, e) {
                        e = e || I;
                        var i,
                            n,
                            r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t]; );
                        return n >= 0 ? ((X = 3 === n ? "ms" : i[n]), (V = "-" + X.toLowerCase() + "-"), X + t) : null;
                    },
                    Y = R.defaultView ? R.defaultView.getComputedStyle : function () {},
                    G = (s.getStyle = function (t, e, i, n, r) {
                        var o;
                        return q || "opacity" !== e
                            ? (!n && t.style[e] ? (o = t.style[e]) : (i = i || Y(t)) ? (o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase())) : t.currentStyle && (o = t.currentStyle[e]),
                              null == r || (o && "none" !== o && "auto" !== o && "auto auto" !== o) ? o : r)
                            : B(t);
                    }),
                    Q = (F.convertToPixels = function (t, i, n, r, o) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a,
                            l,
                            c,
                            u = $.test(i),
                            d = t,
                            p = I.style,
                            h = 0 > n;
                        if ((h && (n = -n), "%" === r && -1 !== i.indexOf("border"))) a = (n / 100) * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (((p.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;"), "%" !== r && d.appendChild)) p[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (((d = t.parentNode || R.body), (l = d._gsCache), (c = e.ticker.frame), l && u && l.time === c)) return (l.width * n) / 100;
                                p[u ? "width" : "height"] = n + r;
                            }
                            d.appendChild(I),
                                (a = parseFloat(I[u ? "offsetWidth" : "offsetHeight"])),
                                d.removeChild(I),
                                u && "%" === r && !1 !== s.cacheWidths && ((l = d._gsCache = d._gsCache || {}), (l.time = c), (l.width = (a / n) * 100)),
                                0 !== a || o || (a = Q(t, i, n, r, !0));
                        }
                        return h ? -a : a;
                    }),
                    Z = (F.calculateOffset = function (t, e, i) {
                        if ("absolute" !== G(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = G(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(b, "")) || 0);
                    }),
                    K = function (t, e) {
                        var i,
                            n,
                            r = {};
                        if ((e = e || Y(t, null))) for (i in e) (-1 === i.indexOf("Transform") || wt === i) && (r[i] = e[i]);
                        else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, E)] = e[i]);
                        return (
                            q || (r.opacity = B(t)),
                            (n = Ot(t, e, !1)),
                            (r.rotation = n.rotation),
                            (r.skewX = n.skewX),
                            (r.scaleX = n.scaleX),
                            (r.scaleY = n.scaleY),
                            (r.x = n.x),
                            (r.y = n.y),
                            St && ((r.z = n.z), (r.rotationX = n.rotationX), (r.rotationY = n.rotationY), (r.scaleZ = n.scaleZ)),
                            r.filters && delete r.filters,
                            r
                        );
                    },
                    J = function (t, e, i, n, r) {
                        var o,
                            s,
                            a,
                            l = {},
                            c = t.style;
                        for (s in i)
                            "cssText" !== s &&
                                "length" !== s &&
                                isNaN(s) &&
                                (e[s] !== (o = i[s]) || (r && r[s])) &&
                                -1 === s.indexOf("Origin") &&
                                ("number" == typeof o || "string" == typeof o) &&
                                ((l[s] = "auto" !== o || ("left" !== s && "top" !== s) ? (("" !== o && "auto" !== o && "none" !== o) || "string" != typeof e[s] || "" === e[s].replace(_, "") ? o : 0) : Z(t, s)),
                                void 0 !== c[s] && (a = new ht(c, s, c[s], a)));
                        if (n) for (s in n) "className" !== s && (l[s] = n[s]);
                        return { difs: l, firstMPT: a };
                    },
                    tt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function (t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            o = r.length;
                        for (i = i || Y(t, null); --o > -1; ) (n -= parseFloat(G(t, "padding" + r[o], i, !0)) || 0), (n -= parseFloat(G(t, "border" + r[o] + "Width", i, !0)) || 0);
                        return n;
                    },
                    nt = function (t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return (
                            null == r ? (r = "center" === n ? "50%" : "0") : "center" === r && (r = "50%"),
                            ("center" === n || (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) && (n = "50%"),
                            e && ((e.oxp = -1 !== n.indexOf("%")), (e.oyp = -1 !== r.indexOf("%")), (e.oxr = "=" === n.charAt(1)), (e.oyr = "=" === r.charAt(1)), (e.ox = parseFloat(n.replace(_, ""))), (e.oy = parseFloat(r.replace(_, "")))),
                            n + " " + r + (i.length > 2 ? " " + i[2] : "")
                        );
                    },
                    rt = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
                    },
                    ot = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
                    },
                    st = function (t, e, i, n) {
                        var r, o, s, a, l;
                        return (
                            null == t
                                ? (a = e)
                                : "number" == typeof t
                                ? (a = t)
                                : ((r = 360),
                                  (o = t.split("_")),
                                  (l = "=" === t.charAt(1)),
                                  (s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e)),
                                  o.length &&
                                      (n && (n[i] = e + s),
                                      -1 !== t.indexOf("short") && (s %= r) !== s % (r / 2) && (s = 0 > s ? s + r : s - r),
                                      -1 !== t.indexOf("_cw") && 0 > s ? (s = ((s + 9999999999 * r) % r) - (0 | (s / r)) * r) : -1 !== t.indexOf("ccw") && s > 0 && (s = ((s - 9999999999 * r) % r) - (0 | (s / r)) * r)),
                                  (a = e + s)),
                            1e-6 > a && a > -1e-6 && (a = 0),
                            a
                        );
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0],
                    },
                    lt = function (t, e, i) {
                        return (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t), 0 | (255 * (1 > 6 * t ? e + 6 * (i - e) * t : 0.5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + 0.5);
                    },
                    ct = (s.parseColor = function (t) {
                        var e, i, n, r, o, s;
                        return t && "" !== t
                            ? "number" == typeof t
                                ? [t >> 16, 255 & (t >> 8), 255 & t]
                                : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                                  at[t]
                                      ? at[t]
                                      : "#" === t.charAt(0)
                                      ? (4 === t.length && ((e = t.charAt(1)), (i = t.charAt(2)), (n = t.charAt(3)), (t = "#" + e + e + i + i + n + n)), (t = parseInt(t.substr(1), 16)), [t >> 16, 255 & (t >> 8), 255 & t])
                                      : "hsl" === t.substr(0, 3)
                                      ? ((t = t.match(g)),
                                        (r = (Number(t[0]) % 360) / 360),
                                        (o = Number(t[1]) / 100),
                                        (s = Number(t[2]) / 100),
                                        (i = 0.5 >= s ? s * (o + 1) : s + o - s * o),
                                        (e = 2 * s - i),
                                        t.length > 3 && (t[3] = Number(t[3])),
                                        (t[0] = lt(r + 1 / 3, e, i)),
                                        (t[1] = lt(r, e, i)),
                                        (t[2] = lt(r - 1 / 3, e, i)),
                                        t)
                                      : ((t = t.match(g) || at.transparent), (t[0] = Number(t[0])), (t[1] = Number(t[1])), (t[2] = Number(t[2])), t.length > 3 && (t[3] = Number(t[3])), t))
                            : at.black;
                    }),
                    ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (c in at) ut += "|" + c + "\\b";
                ut = RegExp(ut + ")", "gi");
                var dt = function (t, e, i, n) {
                        if (null == t)
                            return function (t) {
                                return t;
                            };
                        var r,
                            o = e ? (t.match(ut) || [""])[0] : "",
                            s = t.split(o).join("").match(y) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            u = s.length,
                            d = u > 0 ? s[0].replace(g, "") : "";
                        return u
                            ? (r = e
                                  ? function (t) {
                                        var e, p, h, f;
                                        if ("number" == typeof t) t += d;
                                        else if (n && M.test(t)) {
                                            for (f = t.replace(M, "|").split("|"), h = 0; f.length > h; h++) f[h] = r(f[h]);
                                            return f.join(",");
                                        }
                                        if (((e = (t.match(ut) || [o])[0]), (p = t.split(e).join("").match(y) || []), (h = p.length), u > h--)) for (; u > ++h; ) p[h] = i ? p[0 | ((h - 1) / 2)] : s[h];
                                        return a + p.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
                                    }
                                  : function (t) {
                                        var e, o, p;
                                        if ("number" == typeof t) t += d;
                                        else if (n && M.test(t)) {
                                            for (o = t.replace(M, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
                                            return o.join(",");
                                        }
                                        if (((e = t.match(y) || []), (p = e.length), u > p--)) for (; u > ++p; ) e[p] = i ? e[0 | ((p - 1) / 2)] : s[p];
                                        return a + e.join(c) + l;
                                    })
                            : function (t) {
                                  return t;
                              };
                    },
                    pt = function (t) {
                        return (
                            (t = t.split(",")),
                            function (e, i, n, r, o, s, a) {
                                var l,
                                    c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[((l - 1) / 2) >> 0];
                                return r.parse(e, a, o, s);
                            }
                        );
                    },
                    ht =
                        ((F._setPluginRatio = function (t) {
                            this.plugin.setRatio(t);
                            for (var e, i, n, r, o = this.data, s = o.proxy, a = o.firstMPT; a; ) (e = s[a.v]), a.r ? (e = Math.round(e)) : 1e-6 > e && e > -1e-6 && (e = 0), (a.t[a.p] = e), (a = a._next);
                            if ((o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t))
                                for (a = o.firstMPT; a; ) {
                                    if (((i = a.t), i.type)) {
                                        if (1 === i.type) {
                                            for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                            i.e = r;
                                        }
                                    } else i.e = i.s + i.xs0;
                                    a = a._next;
                                }
                        }),
                        function (t, e, i, n, r) {
                            (this.t = t), (this.p = e), (this.v = i), (this.r = r), n && ((n._prev = this), (this._next = n));
                        }),
                    ft =
                        ((F._parseToProxy = function (t, e, i, n, r, o) {
                            var s,
                                a,
                                l,
                                c,
                                u,
                                d = n,
                                p = {},
                                h = {},
                                f = i._transform,
                                m = L;
                            for (i._transform = null, L = e, n = u = i.parse(t, e, n, r), L = m, o && ((i._transform = f), d && ((d._prev = null), d._prev && (d._prev._next = null))); n && n !== d; ) {
                                if (1 >= n.type && ((a = n.p), (h[a] = n.s + n.c), (p[a] = n.s), o || ((c = new ht(n, "s", a, c, n.r)), (n.c = 0)), 1 === n.type))
                                    for (s = n.l; --s > 0; ) (l = "xn" + s), (a = n.p + "_" + l), (h[a] = n.data[l]), (p[a] = n[l]), o || (c = new ht(n, l, a, c, n.rxp[l]));
                                n = n._next;
                            }
                            return { proxy: p, end: h, firstMPT: c, pt: u };
                        }),
                        (F.CSSPropTween = function (t, e, n, r, s, a, l, c, u, d, p) {
                            (this.t = t),
                                (this.p = e),
                                (this.s = n),
                                (this.c = r),
                                (this.n = l || e),
                                t instanceof ft || o.push(this.n),
                                (this.r = c),
                                (this.type = a || 0),
                                u && ((this.pr = u), (i = !0)),
                                (this.b = void 0 === d ? n : d),
                                (this.e = void 0 === p ? n + r : p),
                                s && ((this._next = s), (s._prev = this));
                        })),
                    mt = (s.parseComplex = function (t, e, i, n, r, o, s, a, l, c) {
                        (i = i || o || ""), (s = new ft(t, e, 0, 0, s, c ? 2 : 1, null, !1, a, i, n)), (n += "");
                        var d,
                            p,
                            h,
                            f,
                            m,
                            y,
                            _,
                            b,
                            w,
                            x,
                            T,
                            C,
                            k = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            E = k.length,
                            $ = !1 !== u;
                        for (
                            (-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && ((k = k.join(" ").replace(M, ", ").split(" ")), (P = P.join(" ").replace(M, ", ").split(" ")), (E = k.length)),
                                E !== P.length && ((k = (o || "").split(" ")), (E = k.length)),
                                s.plugin = l,
                                s.setRatio = c,
                                d = 0;
                            E > d;
                            d++
                        )
                            if (((f = k[d]), (m = P[d]), (b = parseFloat(f)) || 0 === b)) s.appendXtra("", b, rt(m, b), m.replace(v, ""), $ && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || at[f] || S.test(f)))
                                (C = "," === m.charAt(m.length - 1) ? ")," : ")"),
                                    (f = ct(f)),
                                    (m = ct(m)),
                                    (w = f.length + m.length > 6),
                                    w && !q && 0 === m[3]
                                        ? ((s["xs" + s.l] += s.l ? " transparent" : "transparent"), (s.e = s.e.split(P[d]).join("transparent")))
                                        : (q || (w = !1),
                                          s
                                              .appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0)
                                              .appendXtra("", f[1], m[1] - f[1], ",", !0)
                                              .appendXtra("", f[2], m[2] - f[2], w ? "," : C, !0),
                                          w && ((f = 4 > f.length ? 1 : f[3]), s.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, C, !1)));
                            else if ((y = f.match(g))) {
                                if (!(_ = m.match(v)) || _.length !== y.length) return s;
                                for (h = 0, p = 0; y.length > p; p++) (T = y[p]), (x = f.indexOf(T, h)), s.appendXtra(f.substr(h, x - h), Number(T), rt(_[p], T), "", $ && "px" === f.substr(x + T.length, 2), 0 === p), (h = x + T.length);
                                s["xs" + s.l] += f.substr(h);
                            } else s["xs" + s.l] += s.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (C = s.xs0 + s.data.s, d = 1; s.l > d; d++) C += s["xs" + d] + s.data["xn" + d];
                            s.e = C + s["xs" + d];
                        }
                        return s.l || ((s.type = -1), (s.xs0 = s.e)), s.xfirst || s;
                    }),
                    gt = 9;
                for (c = ft.prototype, c.l = c.pr = 0; --gt > 0; ) (c["xn" + gt] = 0), (c["xs" + gt] = "");
                (c.xs0 = ""),
                    (c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null),
                    (c.appendXtra = function (t, e, i, n, r, o) {
                        var s = this,
                            a = s.l;
                        return (
                            (s["xs" + a] += o && a ? " " + t : t || ""),
                            i || 0 === a || s.plugin
                                ? (s.l++,
                                  (s.type = s.setRatio ? 2 : 1),
                                  (s["xs" + s.l] = n || ""),
                                  a > 0
                                      ? ((s.data["xn" + a] = e + i), (s.rxp["xn" + a] = r), (s["xn" + a] = e), s.plugin || ((s.xfirst = new ft(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr)), (s.xfirst.xs0 = 0)), s)
                                      : ((s.data = { s: e + i }), (s.rxp = {}), (s.s = e), (s.c = i), (s.r = r), s))
                                : ((s["xs" + a] += e + (n || "")), s)
                        );
                    });
                var vt = function (t, e) {
                        (e = e || {}),
                            (this.p = e.prefix ? U(t) || t : t),
                            (l[t] = l[this.p] = this),
                            (this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi)),
                            e.parser && (this.parse = e.parser),
                            (this.clrs = e.color),
                            (this.multi = e.multi),
                            (this.keyword = e.keyword),
                            (this.dflt = e.defaultValue),
                            (this.pr = e.priority || 0);
                    },
                    yt = (F._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = { parser: i });
                        var n,
                            r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; r.length > n; n++) (e.prefix = 0 === n && e.prefix), (e.defaultValue = i[n] || o), new vt(r[n], e);
                    });
                (c = vt.prototype),
                    (c.parseComplex = function (t, e, i, n, r, o) {
                        var s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p = this.keyword;
                        if ((this.multi && (M.test(i) || M.test(e) ? ((a = e.replace(M, "|").split("|")), (l = i.replace(M, "|").split("|"))) : p && ((a = [e]), (l = [i]))), l)) {
                            for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++)
                                (e = a[s] = a[s] || this.dflt), (i = l[s] = l[s] || this.dflt), p && ((u = e.indexOf(p)), (d = i.indexOf(p)), u !== d && ((i = -1 === d ? l : a), (i[s] += " " + p)));
                            (e = a.join(", ")), (i = l.join(", "));
                        }
                        return mt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o);
                    }),
                    (c.parse = function (t, e, i, n, o, s) {
                        return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), o, s);
                    }),
                    (s.registerSpecialProp = function (t, e, i) {
                        yt(t, {
                            parser: function (t, n, r, o, s, a) {
                                var l = new ft(t, r, 0, 0, s, 2, r, !1, i);
                                return (l.plugin = a), (l.setRatio = e(t, n, o._tween, r)), l;
                            },
                            priority: i,
                        });
                    });
                var _t,
                    bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    wt = U("transform"),
                    xt = V + "transform",
                    Tt = U("transformOrigin"),
                    St = null !== U("perspective"),
                    Ct = (F.Transform = function () {
                        (this.perspective = parseFloat(s.defaultTransformPerspective) || 0), (this.force3D = !(!1 === s.defaultForce3D || !St) && (s.defaultForce3D || "auto"));
                    }),
                    kt = window.SVGElement,
                    Pt = function (t, e, i) {
                        var n,
                            r = R.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r;
                    },
                    Et = document.documentElement,
                    $t = (function () {
                        var t,
                            e,
                            i,
                            n = m || (/Android/i.test(H) && !window.chrome);
                        return (
                            R.createElementNS &&
                                !n &&
                                ((t = Pt("svg", Et)),
                                (e = Pt("rect", t, { width: 100, height: 50, x: 100 })),
                                (i = e.getBoundingClientRect().width),
                                (e.style[Tt] = "50% 50%"),
                                (e.style[wt] = "scaleX(0.5)"),
                                (n = i === e.getBoundingClientRect().width && !(h && St)),
                                Et.removeChild(t)),
                            n
                        );
                    })(),
                    At = function (t, e, i) {
                        var n = t.getBBox();
                        (e = nt(e).split(" ")),
                            (i.xOrigin = (-1 !== e[0].indexOf("%") ? (parseFloat(e[0]) / 100) * n.width : parseFloat(e[0])) + n.x),
                            (i.yOrigin = (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * n.height : parseFloat(e[1])) + n.y);
                    },
                    Ot = (F.getTransform = function (t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var o,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p,
                            h,
                            f,
                            m,
                            g = i ? t._gsTransform || new Ct() : new Ct(),
                            v = 0 > g.scaleX,
                            y = 1e5,
                            _ = St ? parseFloat(G(t, Tt, e, !1, "0 0 0").split(" ")[2]) || g.zOrigin || 0 : 0,
                            b = parseFloat(s.defaultTransformPerspective) || 0;
                        if (
                            (wt
                                ? (a = G(t, xt, e, !0))
                                : t.currentStyle && ((a = t.currentStyle.filter.match(A)), (a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), g.x || 0, g.y || 0].join(",") : "")),
                            (o = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a),
                            (g.svg = !!(kt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM)))),
                            g.svg && (At(t, G(t, Tt, r, !1, "50% 50%") + "", g), (_t = s.useSVGTransformAttr || $t), (l = t.getAttribute("transform")), o && l && -1 !== l.indexOf("matrix") && ((a = l), (o = 0))),
                            !o)
                        ) {
                            for (l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], c = l.length; --c > -1; ) (u = Number(l[c])), (l[c] = (d = u - (u |= 0)) ? (0 | (d * y + (0 > d ? -0.5 : 0.5))) / y + u : u);
                            if (16 === l.length) {
                                var w,
                                    x,
                                    T,
                                    S,
                                    C,
                                    k = l[0],
                                    P = l[1],
                                    E = l[2],
                                    $ = l[3],
                                    O = l[4],
                                    M = l[5],
                                    D = l[6],
                                    L = l[7],
                                    R = l[8],
                                    j = l[9],
                                    I = l[10],
                                    z = l[12],
                                    F = l[13],
                                    H = l[14],
                                    q = l[11],
                                    B = Math.atan2(D, I);
                                g.zOrigin && ((H = -g.zOrigin), (z = R * H - l[12]), (F = j * H - l[13]), (H = I * H + g.zOrigin - l[14])),
                                    (g.rotationX = B * N),
                                    B &&
                                        ((S = Math.cos(-B)),
                                        (C = Math.sin(-B)),
                                        (w = O * S + R * C),
                                        (x = M * S + j * C),
                                        (T = D * S + I * C),
                                        (R = O * -C + R * S),
                                        (j = M * -C + j * S),
                                        (I = D * -C + I * S),
                                        (q = L * -C + q * S),
                                        (O = w),
                                        (M = x),
                                        (D = T)),
                                    (B = Math.atan2(R, I)),
                                    (g.rotationY = B * N),
                                    B && ((S = Math.cos(-B)), (C = Math.sin(-B)), (w = k * S - R * C), (x = P * S - j * C), (T = E * S - I * C), (j = P * C + j * S), (I = E * C + I * S), (q = $ * C + q * S), (k = w), (P = x), (E = T)),
                                    (B = Math.atan2(P, k)),
                                    (g.rotation = B * N),
                                    B && ((S = Math.cos(-B)), (C = Math.sin(-B)), (k = k * S + O * C), (x = P * S + M * C), (M = P * -C + M * S), (D = E * -C + D * S), (P = x)),
                                    g.rotationX && Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 && ((g.rotationX = g.rotation = 0), (g.rotationY += 180)),
                                    (g.scaleX = (0 | (Math.sqrt(k * k + P * P) * y + 0.5)) / y),
                                    (g.scaleY = (0 | (Math.sqrt(M * M + j * j) * y + 0.5)) / y),
                                    (g.scaleZ = (0 | (Math.sqrt(D * D + I * I) * y + 0.5)) / y),
                                    (g.skewX = 0),
                                    (g.perspective = q ? 1 / (0 > q ? -q : q) : 0),
                                    (g.x = z),
                                    (g.y = F),
                                    (g.z = H);
                            } else if (!((St && !n && l.length && g.x === l[4] && g.y === l[5] && (g.rotationX || g.rotationY)) || (void 0 !== g.x && "none" === G(t, "display", e)))) {
                                var W = l.length >= 6,
                                    V = W ? l[0] : 1,
                                    X = l[1] || 0,
                                    U = l[2] || 0,
                                    Y = W ? l[3] : 1;
                                (g.x = l[4] || 0),
                                    (g.y = l[5] || 0),
                                    (p = Math.sqrt(V * V + X * X)),
                                    (h = Math.sqrt(Y * Y + U * U)),
                                    (f = V || X ? Math.atan2(X, V) * N : g.rotation || 0),
                                    (m = U || Y ? Math.atan2(U, Y) * N + f : g.skewX || 0),
                                    Math.abs(m) > 90 && 270 > Math.abs(m) && (v ? ((p *= -1), (m += 0 >= f ? 180 : -180), (f += 0 >= f ? 180 : -180)) : ((h *= -1), (m += 0 >= m ? 180 : -180))),
                                    (g.scaleX = p),
                                    (g.scaleY = h),
                                    (g.rotation = f),
                                    (g.skewX = m),
                                    St && ((g.rotationX = g.rotationY = g.z = 0), (g.perspective = b), (g.scaleZ = 1));
                            }
                            g.zOrigin = _;
                            for (c in g) 2e-5 > g[c] && g[c] > -2e-5 && (g[c] = 0);
                        }
                        return i && (t._gsTransform = g), g;
                    }),
                    Mt = function (t) {
                        var e,
                            i,
                            n = this.data,
                            r = -n.rotation * D,
                            o = r + n.skewX * D,
                            s = 1e5,
                            a = (0 | (Math.cos(r) * n.scaleX * s)) / s,
                            l = (0 | (Math.sin(r) * n.scaleX * s)) / s,
                            c = (0 | (Math.sin(o) * -n.scaleY * s)) / s,
                            u = (0 | (Math.cos(o) * n.scaleY * s)) / s,
                            d = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            (i = l), (l = -c), (c = -i), (e = p.filter), (d.filter = "");
                            var h,
                                f,
                                g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== p.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                                x = n.x + (g * n.xPercent) / 100,
                                T = n.y + (v * n.yPercent) / 100;
                            if (
                                (null != n.ox && ((h = (n.oxp ? 0.01 * g * n.ox : n.ox) - g / 2), (f = (n.oyp ? 0.01 * v * n.oy : n.oy) - v / 2), (x += h - (h * a + f * l)), (T += f - (h * c + f * u))),
                                y ? ((h = g / 2), (f = v / 2), (_ += ", Dx=" + (h - (h * a + f * l) + x) + ", Dy=" + (f - (h * c + f * u) + T) + ")")) : (_ += ", sizingMethod='auto expand')"),
                                (d.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, _) : _ + " " + e),
                                (0 === t || 1 === t) &&
                                    1 === a &&
                                    0 === l &&
                                    0 === c &&
                                    1 === u &&
                                    ((y && -1 === _.indexOf("Dx=0, Dy=0")) || (w.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter"))),
                                !y)
                            ) {
                                var S,
                                    C,
                                    k,
                                    P = 8 > m ? 1 : -1;
                                for (
                                    h = n.ieOffsetX || 0,
                                        f = n.ieOffsetY || 0,
                                        n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + x),
                                        n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * g)) / 2 + T),
                                        gt = 0;
                                    4 > gt;
                                    gt++
                                )
                                    (C = et[gt]),
                                        (S = p[C]),
                                        (i = -1 !== S.indexOf("px") ? parseFloat(S) : Q(this.t, C, parseFloat(S), S.replace(b, "")) || 0),
                                        (k = i !== n[C] ? (2 > gt ? -n.ieOffsetX : -n.ieOffsetY) : 2 > gt ? h - n.ieOffsetX : f - n.ieOffsetY),
                                        (d[C] = (n[C] = Math.round(i - k * (0 === gt || 2 === gt ? 1 : P))) + "px");
                            }
                        }
                    },
                    Dt = (F.set3DTransformRatio = function (t) {
                        var e,
                            i,
                            n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p,
                            f,
                            m,
                            g,
                            v,
                            y,
                            _,
                            b,
                            w,
                            x,
                            T = this.data,
                            S = this.t.style,
                            C = T.rotation * D,
                            k = T.scaleX,
                            P = T.scaleY,
                            E = T.scaleZ,
                            $ = T.x,
                            A = T.y,
                            O = T.z,
                            M = T.perspective;
                        if (!((1 !== t && 0 !== t && T.force3D) || !0 === T.force3D || T.rotationY || T.rotationX || 1 !== E || M || O)) return void Nt.call(this, t);
                        if ((h && ((m = 1e-4), m > k && k > -m && (k = E = 2e-5), m > P && P > -m && (P = E = 2e-5), !M || T.z || T.rotationX || T.rotationY || (M = 0)), C || T.skewX))
                            (g = e = Math.cos(C)),
                                (v = r = Math.sin(C)),
                                T.skewX && ((C -= T.skewX * D), (g = Math.cos(C)), (v = Math.sin(C)), "simple" === T.skewType && ((y = Math.tan(T.skewX * D)), (y = Math.sqrt(1 + y * y)), (g *= y), (v *= y))),
                                (i = -v),
                                (o = g);
                        else {
                            if (!(T.rotationY || T.rotationX || 1 !== E || M || T.svg))
                                return void (S[wt] =
                                    (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") +
                                    $ +
                                    "px," +
                                    A +
                                    "px," +
                                    O +
                                    "px)" +
                                    (1 !== k || 1 !== P ? " scale(" + k + "," + P + ")" : ""));
                            (e = o = 1), (i = r = 0);
                        }
                        (c = 1),
                            (n = s = a = l = u = d = 0),
                            (p = M ? -1 / M : 0),
                            (f = T.zOrigin),
                            (m = 1e-6),
                            (w = ","),
                            (x = "0"),
                            (C = T.rotationY * D),
                            C && ((g = Math.cos(C)), (v = Math.sin(C)), (a = -v), (u = p * -v), (n = e * v), (s = r * v), (c = g), (p *= g), (e *= g), (r *= g)),
                            (C = T.rotationX * D),
                            C && ((g = Math.cos(C)), (v = Math.sin(C)), (y = i * g + n * v), (_ = o * g + s * v), (l = c * v), (d = p * v), (n = i * -v + n * g), (s = o * -v + s * g), (c *= g), (p *= g), (i = y), (o = _)),
                            1 !== E && ((n *= E), (s *= E), (c *= E), (p *= E)),
                            1 !== P && ((i *= P), (o *= P), (l *= P), (d *= P)),
                            1 !== k && ((e *= k), (r *= k), (a *= k), (u *= k)),
                            (f || T.svg) &&
                                (f && (($ += n * -f), (A += s * -f), (O += c * -f + f)),
                                T.svg && (($ += T.xOrigin - (T.xOrigin * e + T.yOrigin * i)), (A += T.yOrigin - (T.xOrigin * r + T.yOrigin * o))),
                                m > $ && $ > -m && ($ = x),
                                m > A && A > -m && (A = x),
                                m > O && O > -m && (O = 0)),
                            (b = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d("),
                            (b += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > a && a > -m ? x : a)),
                            (b += w + (m > u && u > -m ? x : u) + w + (m > i && i > -m ? x : i) + w + (m > o && o > -m ? x : o)),
                            T.rotationX || T.rotationY
                                ? ((b += w + (m > l && l > -m ? x : l) + w + (m > d && d > -m ? x : d) + w + (m > n && n > -m ? x : n)),
                                  (b += w + (m > s && s > -m ? x : s) + w + (m > c && c > -m ? x : c) + w + (m > p && p > -m ? x : p) + w))
                                : (b += ",0,0,0,0,1,0,"),
                            (b += $ + w + A + w + O + w + (M ? 1 + -O / M : 1) + ")"),
                            (S[wt] = b);
                    }),
                    Nt = (F.set2DTransformRatio = function (t) {
                        var e,
                            i,
                            n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p = this.data,
                            h = this.t,
                            f = h.style,
                            m = p.x,
                            g = p.y;
                        return !(p.rotationX || p.rotationY || p.z || !0 === p.force3D || ("auto" === p.force3D && 1 !== t && 0 !== t)) || (p.svg && _t) || !St
                            ? ((r = p.scaleX),
                              (o = p.scaleY),
                              void (p.rotation || p.skewX || p.svg
                                  ? ((e = p.rotation * D),
                                    (i = e - p.skewX * D),
                                    (n = 1e5),
                                    (s = Math.cos(e) * r),
                                    (a = Math.sin(e) * r),
                                    (l = Math.sin(i) * -o),
                                    (c = Math.cos(i) * o),
                                    p.svg && ((m += p.xOrigin - (p.xOrigin * s + p.yOrigin * l)), (g += p.yOrigin - (p.xOrigin * a + p.yOrigin * c)), (d = 1e-6), d > m && m > -d && (m = 0), d > g && g > -d && (g = 0)),
                                    (u = (0 | (s * n)) / n + "," + (0 | (a * n)) / n + "," + (0 | (l * n)) / n + "," + (0 | (c * n)) / n + "," + m + "," + g + ")"),
                                    p.svg && _t ? h.setAttribute("transform", "matrix(" + u) : (f[wt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + u))
                                  : (f[wt] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + o + "," + m + "," + g + ")")))
                            : ((this.setRatio = Dt), void Dt.call(this, t));
                    });
                (c = Ct.prototype),
                    (c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = 0),
                    (c.scaleX = c.scaleY = c.scaleZ = 1),
                    yt(
                        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",
                        {
                            parser: function (t, e, i, n, o, a, l) {
                                if (n._lastParsedTransform === l) return o;
                                n._lastParsedTransform = l;
                                var c,
                                    u,
                                    d,
                                    p,
                                    h,
                                    f,
                                    m,
                                    g = (n._transform = Ot(t, r, !0, l.parseTransform)),
                                    v = t.style,
                                    y = bt.length,
                                    _ = l,
                                    b = {};
                                if ("string" == typeof _.transform && wt) (d = I.style), (d[wt] = _.transform), (d.display = "block"), (d.position = "absolute"), R.body.appendChild(I), (c = Ot(I, null, !1)), R.body.removeChild(I);
                                else if ("object" == typeof _) {
                                    if (
                                        ((c = {
                                            scaleX: ot(null != _.scaleX ? _.scaleX : _.scale, g.scaleX),
                                            scaleY: ot(null != _.scaleY ? _.scaleY : _.scale, g.scaleY),
                                            scaleZ: ot(_.scaleZ, g.scaleZ),
                                            x: ot(_.x, g.x),
                                            y: ot(_.y, g.y),
                                            z: ot(_.z, g.z),
                                            xPercent: ot(_.xPercent, g.xPercent),
                                            yPercent: ot(_.yPercent, g.yPercent),
                                            perspective: ot(_.transformPerspective, g.perspective),
                                        }),
                                        null != (m = _.directionalRotation))
                                    )
                                        if ("object" == typeof m) for (d in m) _[d] = m[d];
                                        else _.rotation = m;
                                    "string" == typeof _.x && -1 !== _.x.indexOf("%") && ((c.x = 0), (c.xPercent = ot(_.x, g.xPercent))),
                                        "string" == typeof _.y && -1 !== _.y.indexOf("%") && ((c.y = 0), (c.yPercent = ot(_.y, g.yPercent))),
                                        (c.rotation = st("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : g.rotation, g.rotation, "rotation", b)),
                                        St &&
                                            ((c.rotationX = st("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", b)),
                                            (c.rotationY = st("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", b))),
                                        (c.skewX = null == _.skewX ? g.skewX : st(_.skewX, g.skewX)),
                                        (c.skewY = null == _.skewY ? g.skewY : st(_.skewY, g.skewY)),
                                        (u = c.skewY - g.skewY) && ((c.skewX += u), (c.rotation += u));
                                }
                                for (
                                    St && null != _.force3D && ((g.force3D = _.force3D), (f = !0)),
                                        g.skewType = _.skewType || g.skewType || s.defaultSkewType,
                                        (h = g.force3D || g.z || g.rotationX || g.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == _.scale || (c.scaleZ = 1);
                                    --y > -1;

                                )
                                    (i = bt[y]),
                                        ((p = c[i] - g[i]) > 1e-6 || -1e-6 > p || null != _[i] || null != L[i]) && ((f = !0), (o = new ft(g, i, g[i], p, o)), i in b && (o.e = b[i]), (o.xs0 = 0), (o.plugin = a), n._overwriteProps.push(o.n));
                                return (
                                    (p = _.transformOrigin),
                                    p &&
                                        g.svg &&
                                        (At(t, nt(p), c),
                                        (o = new ft(g, "xOrigin", g.xOrigin, c.xOrigin - g.xOrigin, o, -1, "transformOrigin")),
                                        (o.b = g.xOrigin),
                                        (o.e = o.xs0 = c.xOrigin),
                                        (o = new ft(g, "yOrigin", g.yOrigin, c.yOrigin - g.yOrigin, o, -1, "transformOrigin")),
                                        (o.b = g.yOrigin),
                                        (o.e = o.xs0 = c.yOrigin),
                                        (p = "0px 0px")),
                                    (p || (St && h && g.zOrigin)) &&
                                        (wt
                                            ? ((f = !0),
                                              (i = Tt),
                                              (p = (p || G(t, i, r, !1, "50% 50%")) + ""),
                                              (o = new ft(v, i, 0, 0, o, -1, "transformOrigin")),
                                              (o.b = v[i]),
                                              (o.plugin = a),
                                              St
                                                  ? ((d = g.zOrigin),
                                                    (p = p.split(" ")),
                                                    (g.zOrigin = (p.length > 2 && (0 === d || "0px" !== p[2]) ? parseFloat(p[2]) : d) || 0),
                                                    (o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px"),
                                                    (o = new ft(g, "zOrigin", 0, 0, o, -1, o.n)),
                                                    (o.b = d),
                                                    (o.xs0 = o.e = g.zOrigin))
                                                  : (o.xs0 = o.e = p))
                                            : nt(p + "", g)),
                                    f && (n._transformType = (g.svg && _t) || (!h && 3 !== this._transformType) ? 2 : 3),
                                    o
                                );
                            },
                            prefix: !0,
                        }
                    ),
                    yt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                    yt("borderRadius", {
                        defaultValue: "0px",
                        parser: function (t, e, i, o, s) {
                            e = this.format(e);
                            var a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                h,
                                f,
                                m,
                                g,
                                v,
                                y,
                                _,
                                b,
                                w,
                                x,
                                T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                S = t.style;
                            for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++)
                                this.p.indexOf("border") && (T[l] = U(T[l])),
                                    (d = u = G(t, T[l], r, !1, "0px")),
                                    -1 !== d.indexOf(" ") && ((u = d.split(" ")), (d = u[0]), (u = u[1])),
                                    (p = c = a[l]),
                                    (h = parseFloat(d)),
                                    (y = d.substr((h + "").length)),
                                    (_ = "=" === p.charAt(1)),
                                    _ ? ((f = parseInt(p.charAt(0) + "1", 10)), (p = p.substr(2)), (f *= parseFloat(p)), (v = p.substr((f + "").length - (0 > f ? 1 : 0)) || "")) : ((f = parseFloat(p)), (v = p.substr((f + "").length))),
                                    "" === v && (v = n[i] || y),
                                    v !== y &&
                                        ((b = Q(t, "borderLeft", h, y)),
                                        (w = Q(t, "borderTop", h, y)),
                                        "%" === v ? ((d = (b / m) * 100 + "%"), (u = (w / g) * 100 + "%")) : "em" === v ? ((x = Q(t, "borderLeft", 1, "em")), (d = b / x + "em"), (u = w / x + "em")) : ((d = b + "px"), (u = w + "px")),
                                        _ && ((p = parseFloat(d) + f + v), (c = parseFloat(u) + f + v))),
                                    (s = mt(S, T[l], d + " " + u, p + " " + c, !1, "0px", s));
                            return s;
                        },
                        prefix: !0,
                        formatter: dt("0px 0px 0px 0px", !1, !0),
                    }),
                    yt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (t, e, i, n, o, s) {
                            var a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                h = "background-position",
                                f = r || Y(t, null),
                                g = this.format((f ? (m ? f.getPropertyValue(h + "-x") + " " + f.getPropertyValue(h + "-y") : f.getPropertyValue(h)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(e);
                            if ((-1 !== g.indexOf("%")) != (-1 !== v.indexOf("%")) && (p = G(t, "backgroundImage").replace(P, "")) && "none" !== p) {
                                for (a = g.split(" "), l = v.split(" "), z.setAttribute("src", p), c = 2; --c > -1; )
                                    (g = a[c]),
                                        (u = -1 !== g.indexOf("%")) !== (-1 !== l[c].indexOf("%")) &&
                                            ((d = 0 === c ? t.offsetWidth - z.width : t.offsetHeight - z.height), (a[c] = u ? (parseFloat(g) / 100) * d + "px" : (parseFloat(g) / d) * 100 + "%"));
                                g = a.join(" ");
                            }
                            return this.parseComplex(t.style, g, v, o, s);
                        },
                        formatter: nt,
                    }),
                    yt("backgroundSize", { defaultValue: "0 0", formatter: nt }),
                    yt("perspective", { defaultValue: "0px", prefix: !0 }),
                    yt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                    yt("transformStyle", { prefix: !0 }),
                    yt("backfaceVisibility", { prefix: !0 }),
                    yt("userSelect", { prefix: !0 }),
                    yt("margin", { parser: pt("marginTop,marginRight,marginBottom,marginLeft") }),
                    yt("padding", { parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                    yt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (t, e, i, n, o, s) {
                            var a, l, c;
                            return (
                                9 > m
                                    ? ((l = t.currentStyle), (c = 8 > m ? " " : ","), (a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")"), (e = this.format(e).split(",").join(c)))
                                    : ((a = this.format(G(t, this.p, r, !1, this.dflt))), (e = this.format(e))),
                                this.parseComplex(t.style, a, e, o, s)
                            );
                        },
                    }),
                    yt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                    yt("autoRound,strictUnits", {
                        parser: function (t, e, i, n, r) {
                            return r;
                        },
                    }),
                    yt("border", {
                        defaultValue: "0px solid #000",
                        parser: function (t, e, i, n, o, s) {
                            return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s);
                        },
                        color: !0,
                        formatter: function (t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0];
                        },
                    }),
                    yt("borderWidth", { parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                    yt("float,cssFloat,styleFloat", {
                        parser: function (t, e, i, n, r) {
                            var o = t.style,
                                s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new ft(o, s, 0, 0, r, -1, i, !1, 0, o[s], e);
                        },
                    });
                var Lt = function (t) {
                    var e,
                        i = this.t,
                        n = i.filter || G(this.data, "filter") || "",
                        r = 0 | (this.s + this.c * t);
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), (e = !G(this.data, "filter"))) : ((i.filter = n.replace(T, "")), (e = !0))),
                        e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? (0 === r && this.xn1) || (i.filter = n + " alpha(opacity=" + r + ")") : (i.filter = n.replace(w, "opacity=" + r)));
                };
                yt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, o, s) {
                        var a = parseFloat(G(t, "opacity", r, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return (
                            "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                            c && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0),
                            q
                                ? (o = new ft(l, "opacity", a, e - a, o))
                                : ((o = new ft(l, "opacity", 100 * a, 100 * (e - a), o)),
                                  (o.xn1 = c ? 1 : 0),
                                  (l.zoom = 1),
                                  (o.type = 2),
                                  (o.b = "alpha(opacity=" + o.s + ")"),
                                  (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                                  (o.data = t),
                                  (o.plugin = s),
                                  (o.setRatio = Lt)),
                            c && ((o = new ft(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")), (o.xs0 = "inherit"), n._overwriteProps.push(o.n), n._overwriteProps.push(i)),
                            o
                        );
                    },
                });
                var Rt = function (t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e));
                    },
                    jt = function (t) {
                        if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : Rt(i, e.p), (e = e._next);
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                    };
                yt("className", {
                    parser: function (t, e, n, o, s, a, l) {
                        var c,
                            u,
                            d,
                            p,
                            h,
                            f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (((s = o._classNamePT = new ft(t, n, 0, 0, s, 2)), (s.setRatio = jt), (s.pr = -11), (i = !0), (s.b = f), (u = K(t, r)), (d = t._gsClassPT))) {
                            for (p = {}, h = d.data; h; ) (p[h.p] = 1), (h = h._next);
                            d.setRatio(1);
                        }
                        return (
                            (t._gsClassPT = s),
                            (s.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                            o._tween._duration && (t.setAttribute("class", s.e), (c = J(t, u, K(t), l, p)), t.setAttribute("class", f), (s.data = c.firstMPT), (t.style.cssText = m), (s = s.xfirst = o.parse(t, c.difs, s, a))),
                            s
                        );
                    },
                });
                var It = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e,
                            i,
                            n,
                            r,
                            o = this.t.style,
                            s = l.transform.parse;
                        if ("all" === this.e) (o.cssText = ""), (r = !0);
                        else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1; ) (i = e[n]), l[i] && (l[i].parse === s ? (r = !0) : (i = "transformOrigin" === i ? Tt : l[i].p)), Rt(o, i);
                        r && (Rt(o, wt), this.t._gsTransform && delete this.t._gsTransform);
                    }
                };
                for (
                    yt("clearProps", {
                        parser: function (t, e, n, r, o) {
                            return (o = new ft(t, n, 0, 0, o, 2)), (o.setRatio = It), (o.e = e), (o.pr = -10), (o.data = r._tween), (i = !0), o;
                        },
                    }),
                        c = "bezier,throwProps,physicsProps,physics2D".split(","),
                        gt = c.length;
                    gt--;

                )
                    !(function (t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            yt(t, {
                                parser: function (t, i, n, r, o, s, c) {
                                    var u = a.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, c)) : (W("Error: " + e + " js file not loaded."), o);
                                },
                            });
                        }
                    })(c[gt]);
                (c = s.prototype),
                    (c._firstPT = c._lastParsedTransform = c._transform = null),
                    (c._onInitTween = function (t, e, a) {
                        if (!t.nodeType) return !1;
                        (this._target = t), (this._tween = a), (this._vars = e), (u = e.autoRound), (i = !1), (n = e.suffixMap || s.suffixMap), (r = Y(t, "")), (o = this._overwriteProps);
                        var l,
                            c,
                            h,
                            m,
                            g,
                            v,
                            y,
                            _,
                            b,
                            w = t.style;
                        if (
                            (d && "" === w.zIndex && ("auto" === (l = G(t, "zIndex", r)) || "" === l) && this._addLazySet(w, "zIndex", 0),
                            "string" == typeof e && ((m = w.cssText), (l = K(t, r)), (w.cssText = m + ";" + e), (l = J(t, l, K(t)).difs), !q && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), (e = l), (w.cssText = m)),
                            (this._firstPT = c = this.parse(t, e, null)),
                            this._transformType)
                        ) {
                            for (
                                b = 3 === this._transformType,
                                    wt
                                        ? p &&
                                          ((d = !0),
                                          "" === w.zIndex && ("auto" === (y = G(t, "zIndex", r)) || "" === y) && this._addLazySet(w, "zIndex", 0),
                                          f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden")))
                                        : (w.zoom = 1),
                                    h = c;
                                h && h._next;

                            )
                                h = h._next;
                            (_ = new ft(t, "transform", 0, 0, null, 2)), this._linkCSSP(_, null, h), (_.setRatio = b && St ? Dt : wt ? Nt : Mt), (_.data = this._transform || Ot(t, r, !0)), o.pop();
                        }
                        if (i) {
                            for (; c; ) {
                                for (v = c._next, h = m; h && h.pr > c.pr; ) h = h._next;
                                (c._prev = h ? h._prev : g) ? (c._prev._next = c) : (m = c), (c._next = h) ? (h._prev = c) : (g = c), (c = v);
                            }
                            this._firstPT = m;
                        }
                        return !0;
                    }),
                    (c.parse = function (t, e, i, o) {
                        var s,
                            a,
                            c,
                            d,
                            p,
                            h,
                            f,
                            m,
                            g,
                            v,
                            y = t.style;
                        for (s in e)
                            (h = e[s]),
                                (a = l[s]),
                                a
                                    ? (i = a.parse(t, h, s, this, i, o, e))
                                    : ((p = G(t, s, r) + ""),
                                      (g = "string" == typeof h),
                                      "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || (g && S.test(h))
                                          ? (g || ((h = ct(h)), (h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")")), (i = mt(y, s, p, h, !0, "transparent", i, 0, o)))
                                          : !g || (-1 === h.indexOf(" ") && -1 === h.indexOf(","))
                                          ? ((c = parseFloat(p)),
                                            (f = c || 0 === c ? p.substr((c + "").length) : ""),
                                            ("" === p || "auto" === p) &&
                                                ("width" === s || "height" === s ? ((c = it(t, s, r)), (f = "px")) : "left" === s || "top" === s ? ((c = Z(t, s, r)), (f = "px")) : ((c = "opacity" !== s ? 0 : 1), (f = ""))),
                                            (v = g && "=" === h.charAt(1)),
                                            v ? ((d = parseInt(h.charAt(0) + "1", 10)), (h = h.substr(2)), (d *= parseFloat(h)), (m = h.replace(b, ""))) : ((d = parseFloat(h)), (m = g ? h.replace(b, "") : "")),
                                            "" === m && (m = s in n ? n[s] : f),
                                            (h = d || 0 === d ? (v ? d + c : d) + m : e[s]),
                                            f !== m &&
                                                "" !== m &&
                                                (d || 0 === d) &&
                                                c &&
                                                ((c = Q(t, s, c, f)),
                                                "%" === m ? ((c /= Q(t, s, 100, "%") / 100), !0 !== e.strictUnits && (p = c + "%")) : "em" === m ? (c /= Q(t, s, 1, "em")) : "px" !== m && ((d = Q(t, s, d, m)), (m = "px")),
                                                v && (d || 0 === d) && (h = d + c + m)),
                                            v && (d += c),
                                            (!c && 0 !== c) || (!d && 0 !== d)
                                                ? void 0 !== y[s] && (h || ("NaN" != h + "" && null != h))
                                                    ? ((i = new ft(y, s, d || c || 0, 0, i, -1, s, !1, 0, p, h)), (i.xs0 = "none" !== h || ("display" !== s && -1 === s.indexOf("Style")) ? h : p))
                                                    : W("invalid " + s + " tween value: " + e[s])
                                                : ((i = new ft(y, s, c, d - c, i, 0, s, !1 !== u && ("px" === m || "zIndex" === s), 0, p, h)), (i.xs0 = m)))
                                          : (i = mt(y, s, p, h, !0, null, i, 0, o))),
                                o && i && !i.plugin && (i.plugin = o);
                        return i;
                    }),
                    (c.setRatio = function (t) {
                        var e,
                            i,
                            n,
                            r = this._firstPT;
                        if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                            if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                                for (; r; ) {
                                    if (((e = r.c * t + r.s), r.r ? (e = Math.round(e)) : 1e-6 > e && e > -1e-6 && (e = 0), r.type))
                                        if (1 === r.type)
                                            if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                            else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i;
                                            }
                                        else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(t);
                                    else r.t[r.p] = e + r.xs0;
                                    r = r._next;
                                }
                            else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t), (r = r._next);
                        else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(t), (r = r._next);
                    }),
                    (c._enableTransforms = function (t) {
                        (this._transform = this._transform || Ot(this._target, r, !0)), (this._transformType = (this._transform.svg && _t) || (!t && 3 !== this._transformType) ? 2 : 3);
                    });
                var zt = function () {
                    (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                };
                (c._addLazySet = function (t, e, i) {
                    var n = (this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2));
                    (n.e = i), (n.setRatio = zt), (n.data = this);
                }),
                    (c._linkCSSP = function (t, e, i, n) {
                        return (
                            t &&
                                (e && (e._prev = t),
                                t._next && (t._next._prev = t._prev),
                                t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (n = !0)),
                                i ? (i._next = t) : n || null !== this._firstPT || (this._firstPT = t),
                                (t._next = e),
                                (t._prev = i)),
                            t
                        );
                    }),
                    (c._kill = function (e) {
                        var i,
                            n,
                            r,
                            o = e;
                        if (e.autoAlpha || e.alpha) {
                            o = {};
                            for (n in e) o[n] = e[n];
                            (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
                        }
                        return (
                            e.className &&
                                (i = this._classNamePT) &&
                                ((r = i.xfirst),
                                r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
                                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                                (this._classNamePT = null)),
                            t.prototype._kill.call(this, o)
                        );
                    });
                var Ft = function (t, e, i) {
                    var n, r, o, s;
                    if (t.slice) for (r = t.length; --r > -1; ) Ft(t[r], e, i);
                    else for (n = t.childNodes, r = n.length; --r > -1; ) (o = n[r]), (s = o.type), o.style && (e.push(K(o)), i && i.push(o)), (1 !== s && 9 !== s && 11 !== s) || !o.childNodes.length || Ft(o, e, i);
                };
                return (
                    (s.cascadeTo = function (t, i, n) {
                        var r,
                            o,
                            s,
                            a = e.to(t, i, n),
                            l = [a],
                            c = [],
                            u = [],
                            d = [],
                            p = e._internals.reservedProps;
                        for (t = a._targets || a.target, Ft(t, c, d), a.render(i, !0), Ft(t, u), a.render(0, !0), a._enabled(!0), r = d.length; --r > -1; )
                            if (((o = J(d[r], c[r], u[r])), o.firstMPT)) {
                                o = o.difs;
                                for (s in n) p[s] && (o[s] = n[s]);
                                l.push(e.to(d[r], i, o));
                            }
                        return l;
                    }),
                    t.activate([s]),
                    s
                );
            },
            !0
        ),
        (function () {
            var t = _gsScope._gsDefine.plugin({
                    propName: "roundProps",
                    priority: -1,
                    API: 2,
                    init: function (t, e, i) {
                        return (this._tween = i), !0;
                    },
                }),
                e = t.prototype;
            (e._onInitAllProps = function () {
                for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, s = {}, a = n._propLookup.roundProps; --o > -1; ) s[r[o]] = 1;
                for (o = r.length; --o > -1; )
                    for (t = r[o], e = n._firstPT; e; )
                        (i = e._next),
                            e.pg
                                ? e.t._roundProps(s, !0)
                                : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? (e._prev._next = i) : n._firstPT === e && (n._firstPT = i), (e._next = e._prev = null), (n._propLookup[t] = a)),
                            (e = i);
                return !1;
            }),
                (e._add = function (t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e);
                });
        })(),
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.3.3",
            init: function (t, e) {
                var i, n, r;
                if ("function" != typeof t.setAttribute) return !1;
                (this._target = t), (this._proxy = {}), (this._start = {}), (this._end = {});
                for (i in e) (this._start[i] = this._proxy[i] = n = t.getAttribute(i)), (r = this._addTween(this._proxy, i, parseFloat(n), e[i], i)), (this._end[i] = r ? r.s + r.c : e[i]), this._overwriteProps.push(i);
                return !0;
            },
            set: function (t) {
                this._super.setRatio.call(this, t);
                for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1; ) (e = i[n]), this._target.setAttribute(e, r[e] + "");
            },
        }),
        (_gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.2.1",
            API: 2,
            init: function (t, e) {
                "object" != typeof e && (e = { rotation: e }), (this.finals = {});
                var i,
                    n,
                    r,
                    o,
                    s,
                    a,
                    l = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (i in e)
                    "useRadians" !== i &&
                        ((a = (e[i] + "").split("_")),
                        (n = a[0]),
                        (r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]())),
                        (o = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0),
                        (s = o - r),
                        a.length &&
                            ((n = a.join("_")),
                            -1 !== n.indexOf("short") && (s %= l) !== s % (l / 2) && (s = 0 > s ? s + l : s - l),
                            -1 !== n.indexOf("_cw") && 0 > s ? (s = ((s + 9999999999 * l) % l) - (0 | (s / l)) * l) : -1 !== n.indexOf("ccw") && s > 0 && (s = ((s - 9999999999 * l) % l) - (0 | (s / l)) * l)),
                        (s > 1e-6 || -1e-6 > s) && (this._addTween(t, i, r, r + s, i), this._overwriteProps.push(i)));
                return !0;
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]), (e = e._next);
            },
        })._autoCSS = !0),
        _gsScope._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (t) {
                var e,
                    i,
                    n,
                    r = _gsScope.GreenSockGlobals || _gsScope,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    c = function (e, i) {
                        var n = l("easing." + e, function () {}, !0),
                            r = (n.prototype = new t());
                        return (r.constructor = n), (r.getRatio = i), n;
                    },
                    u = t.register || function () {},
                    d = function (t, e, i, n) {
                        var r = l("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new n() }, !0);
                        return u(r, t), r;
                    },
                    p = function (t, e, i) {
                        (this.t = t), (this.v = e), i && ((this.next = i), (i.prev = this), (this.c = i.v - e), (this.gap = i.t - t));
                    },
                    h = function (e, i) {
                        var n = l(
                                "easing." + e,
                                function (t) {
                                    (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                                },
                                !0
                            ),
                            r = (n.prototype = new t());
                        return (
                            (r.constructor = n),
                            (r.getRatio = i),
                            (r.config = function (t) {
                                return new n(t);
                            }),
                            n
                        );
                    },
                    f = d(
                        "Back",
                        h("BackOut", function (t) {
                            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                        }),
                        h("BackIn", function (t) {
                            return t * t * ((this._p1 + 1) * t - this._p1);
                        }),
                        h("BackInOut", function (t) {
                            return 1 > (t *= 2) ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                        })
                    ),
                    m = l(
                        "easing.SlowMo",
                        function (t, e, i) {
                            (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : t > 1 && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
                        },
                        !0
                    ),
                    g = (m.prototype = new t());
                return (
                    (g.constructor = m),
                    (g.getRatio = function (t) {
                        var e = t + (0.5 - t) * this._p;
                        return this._p1 > t
                            ? this._calcEnd
                                ? 1 - (t = 1 - t / this._p1) * t
                                : e - (t = 1 - t / this._p1) * t * t * t * e
                            : t > this._p3
                            ? this._calcEnd
                                ? 1 - (t = (t - this._p3) / this._p1) * t
                                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                            : this._calcEnd
                            ? 1
                            : e;
                    }),
                    (m.ease = new m(0.7, 0.7)),
                    (g.config = m.config = function (t, e, i) {
                        return new m(t, e, i);
                    }),
                    (e = l(
                        "easing.SteppedEase",
                        function (t) {
                            (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
                        },
                        !0
                    )),
                    (g = e.prototype = new t()),
                    (g.constructor = e),
                    (g.getRatio = function (t) {
                        return 0 > t ? (t = 0) : t >= 1 && (t = 0.999999999), ((this._p2 * t) >> 0) * this._p1;
                    }),
                    (g.config = e.config = function (t) {
                        return new e(t);
                    }),
                    (i = l(
                        "easing.RoughEase",
                        function (e) {
                            e = e || {};
                            for (
                                var i,
                                    n,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l = e.taper || "none",
                                    c = [],
                                    u = 0,
                                    d = 0 | (e.points || 20),
                                    h = d,
                                    f = !1 !== e.randomize,
                                    m = !0 === e.clamp,
                                    g = e.template instanceof t ? e.template : null,
                                    v = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                                --h > -1;

                            )
                                (i = f ? Math.random() : (1 / d) * h),
                                    (n = g ? g.getRatio(i) : i),
                                    "none" === l ? (r = v) : "out" === l ? ((o = 1 - i), (r = o * o * v)) : "in" === l ? (r = i * i * v) : 0.5 > i ? ((o = 2 * i), (r = 0.5 * o * o * v)) : ((o = 2 * (1 - i)), (r = 0.5 * o * o * v)),
                                    f ? (n += Math.random() * r - 0.5 * r) : h % 2 ? (n += 0.5 * r) : (n -= 0.5 * r),
                                    m && (n > 1 ? (n = 1) : 0 > n && (n = 0)),
                                    (c[u++] = { x: i, y: n });
                            for (
                                c.sort(function (t, e) {
                                    return t.x - e.x;
                                }),
                                    a = new p(1, 1, null),
                                    h = d;
                                --h > -1;

                            )
                                (s = c[h]), (a = new p(s.x, s.y, a));
                            this._prev = new p(0, 0, 0 !== a.t ? a : a.next);
                        },
                        !0
                    )),
                    (g = i.prototype = new t()),
                    (g.constructor = i),
                    (g.getRatio = function (t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t; ) e = e.next;
                            e = e.prev;
                        } else for (; e.prev && e.t >= t; ) e = e.prev;
                        return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                    }),
                    (g.config = function (t) {
                        return new i(t);
                    }),
                    (i.ease = new i()),
                    d(
                        "Bounce",
                        c("BounceOut", function (t) {
                            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                        }),
                        c("BounceIn", function (t) {
                            return 1 / 2.75 > (t = 1 - t)
                                ? 1 - 7.5625 * t * t
                                : 2 / 2.75 > t
                                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                                : 2.5 / 2.75 > t
                                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                        }),
                        c("BounceInOut", function (t) {
                            var e = 0.5 > t;
                            return (
                                (t = e ? 1 - 2 * t : 2 * t - 1),
                                (t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                            );
                        })
                    ),
                    d(
                        "Circ",
                        c("CircOut", function (t) {
                            return Math.sqrt(1 - (t -= 1) * t);
                        }),
                        c("CircIn", function (t) {
                            return -(Math.sqrt(1 - t * t) - 1);
                        }),
                        c("CircInOut", function (t) {
                            return 1 > (t *= 2) ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                        })
                    ),
                    (n = function (e, i, n) {
                        var r = l(
                                "easing." + e,
                                function (t, e) {
                                    (this._p1 = t || 1), (this._p2 = e || n), (this._p3 = (this._p2 / s) * (Math.asin(1 / this._p1) || 0));
                                },
                                !0
                            ),
                            o = (r.prototype = new t());
                        return (
                            (o.constructor = r),
                            (o.getRatio = i),
                            (o.config = function (t, e) {
                                return new r(t, e);
                            }),
                            r
                        );
                    }),
                    d(
                        "Elastic",
                        n(
                            "ElasticOut",
                            function (t) {
                                return this._p1 * Math.pow(2, -10 * t) * Math.sin(((t - this._p3) * s) / this._p2) + 1;
                            },
                            0.3
                        ),
                        n(
                            "ElasticIn",
                            function (t) {
                                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - this._p3) * s) / this._p2);
                            },
                            0.3
                        ),
                        n(
                            "ElasticInOut",
                            function (t) {
                                return 1 > (t *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - this._p3) * s) / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - this._p3) * s) / this._p2) + 1;
                            },
                            0.45
                        )
                    ),
                    d(
                        "Expo",
                        c("ExpoOut", function (t) {
                            return 1 - Math.pow(2, -10 * t);
                        }),
                        c("ExpoIn", function (t) {
                            return Math.pow(2, 10 * (t - 1)) - 0.001;
                        }),
                        c("ExpoInOut", function (t) {
                            return 1 > (t *= 2) ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                        })
                    ),
                    d(
                        "Sine",
                        c("SineOut", function (t) {
                            return Math.sin(t * a);
                        }),
                        c("SineIn", function (t) {
                            return 1 - Math.cos(t * a);
                        }),
                        c("SineInOut", function (t) {
                            return -0.5 * (Math.cos(Math.PI * t) - 1);
                        })
                    ),
                    l(
                        "easing.EaseLookup",
                        {
                            find: function (e) {
                                return t.map[e];
                            },
                        },
                        !0
                    ),
                    u(r.SlowMo, "SlowMo", "ease,"),
                    u(i, "RoughEase", "ease,"),
                    u(e, "SteppedEase", "ease,"),
                    f
                );
            },
            !0
        );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (t, e) {
        "use strict";
        var i = (t.GreenSockGlobals = t.GreenSockGlobals || t);
        if (!i.TweenLite) {
            var n,
                r,
                o,
                s,
                a,
                l = function (t) {
                    var e,
                        n = t.split("."),
                        r = i;
                    for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                    return r;
                },
                c = l("com.greensock"),
                u = 1e-10,
                d = function (t) {
                    var e,
                        i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i;
                },
                p = function () {},
                h = (function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || ("object" == typeof i && !!i.push && t.call(i) === e));
                    };
                })(),
                f = {},
                m = function (e, n, r, o) {
                    (this.sc = f[e] ? f[e].sc : []), (f[e] = this), (this.gsClass = null), (this.func = r);
                    var s = [];
                    (this.check = function (a) {
                        for (var c, u, d, p, h = n.length, g = h; --h > -1; ) (c = f[n[h]] || new m(n[h], [])).gsClass ? ((s[h] = c.gsClass), g--) : a && c.sc.push(this);
                        if (0 === g && r)
                            for (
                                u = ("com.greensock." + e).split("."),
                                    d = u.pop(),
                                    p = l(u.join("."))[d] = this.gsClass = r.apply(r, s),
                                    o &&
                                        ((i[d] = p),
                                        "function" == typeof define && define.amd
                                            ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function () {
                                                  return p;
                                              })
                                            : "TweenMax" === e && "undefined" != typeof module && module.exports && (module.exports = p)),
                                    h = 0;
                                this.sc.length > h;
                                h++
                            )
                                this.sc[h].check();
                    }),
                        this.check(!0);
                },
                g = (t._gsDefine = function (t, e, i, n) {
                    return new m(t, e, i, n);
                }),
                v = (c._class = function (t, e, i) {
                    return (
                        (e = e || function () {}),
                        g(
                            t,
                            [],
                            function () {
                                return e;
                            },
                            i
                        ),
                        e
                    );
                });
            g.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                b = v(
                    "easing.Ease",
                    function (t, e, i, n) {
                        (this._func = t), (this._type = i || 0), (this._power = n || 0), (this._params = e ? y.concat(e) : y);
                    },
                    !0
                ),
                w = (b.map = {}),
                x = (b.register = function (t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), u = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1; )
                        for (o = l[u], r = n ? v("easing." + o, null, !0) : c.easing[o] || {}, s = d.length; --s > -1; ) (a = d[s]), (w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t());
                });
            for (
                o = b.prototype,
                    o._calcEnd = !1,
                    o.getRatio = function (t) {
                        if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            n = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
                        return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : 0.5 > t ? n / 2 : 1 - n / 2;
                    },
                    n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                    r = n.length;
                --r > -1;

            )
                (o = n[r] + ",Power" + r), x(new b(null, null, 1, r), o, "easeOut", !0), x(new b(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), x(new b(null, null, 3, r), o, "easeInOut");
            (w.linear = c.easing.Linear.easeIn), (w.swing = c.easing.Quad.easeInOut);
            var T = v("events.EventDispatcher", function (t) {
                (this._listeners = {}), (this._eventTarget = t || this);
            });
            (o = T.prototype),
                (o.addEventListener = function (t, e, i, n, r) {
                    r = r || 0;
                    var o,
                        l,
                        c = this._listeners[t],
                        u = 0;
                    for (null == c && (this._listeners[t] = c = []), l = c.length; --l > -1; ) (o = c[l]), o.c === e && o.s === i ? c.splice(l, 1) : 0 === u && r > o.pr && (u = l + 1);
                    c.splice(u, 0, { c: e, s: i, up: n, pr: r }), this !== s || a || s.wake();
                }),
                (o.removeEventListener = function (t, e) {
                    var i,
                        n = this._listeners[t];
                    if (n) for (i = n.length; --i > -1; ) if (n[i].c === e) return void n.splice(i, 1);
                }),
                (o.dispatchEvent = function (t) {
                    var e,
                        i,
                        n,
                        r = this._listeners[t];
                    if (r) for (e = r.length, i = this._eventTarget; --e > -1; ) (n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i));
                });
            var S = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                k =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    },
                P = k();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S; ) (S = t[n[r] + "RequestAnimationFrame"]), (C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"]);
            v("Ticker", function (t, e) {
                var i,
                    n,
                    r,
                    o,
                    l,
                    c = this,
                    d = k(),
                    h = !1 !== e && S,
                    f = 500,
                    m = 33,
                    g = function (t) {
                        var e,
                            s,
                            a = k() - P;
                        a > f && (d += a - m),
                            (P += a),
                            (c.time = (P - d) / 1e3),
                            (e = c.time - l),
                            (!i || e > 0 || !0 === t) && (c.frame++, (l += e + (e >= o ? 0.004 : o - e)), (s = !0)),
                            !0 !== t && (r = n(g)),
                            s && c.dispatchEvent("tick");
                    };
                T.call(c),
                    (c.time = c.frame = 0),
                    (c.tick = function () {
                        g(!0);
                    }),
                    (c.lagSmoothing = function (t, e) {
                        (f = t || 1 / u), (m = Math.min(e, f, 0));
                    }),
                    (c.sleep = function () {
                        null != r && (h && C ? C(r) : clearTimeout(r), (n = p), (r = null), c === s && (a = !1));
                    }),
                    (c.wake = function () {
                        null !== r ? c.sleep() : c.frame > 10 && (P = k() - f + 5),
                            (n =
                                0 === i
                                    ? p
                                    : h && S
                                    ? S
                                    : function (t) {
                                          return setTimeout(t, 0 | (1e3 * (l - c.time) + 1));
                                      }),
                            c === s && (a = !0),
                            g(2);
                    }),
                    (c.fps = function (t) {
                        return arguments.length ? ((i = t), (o = 1 / (i || 60)), (l = this.time + o), void c.wake()) : i;
                    }),
                    (c.useRAF = function (t) {
                        return arguments.length ? (c.sleep(), (h = t), void c.fps(i)) : h;
                    }),
                    c.fps(t),
                    setTimeout(function () {
                        h && (!r || 5 > c.frame) && c.useRAF(!1);
                    }, 1500);
            }),
                (o = c.Ticker.prototype = new c.events.EventDispatcher()),
                (o.constructor = c.Ticker);
            var E = v("core.Animation", function (t, e) {
                if (
                    ((this.vars = e = e || {}),
                    (this._duration = this._totalDuration = t || 0),
                    (this._delay = Number(e.delay) || 0),
                    (this._timeScale = 1),
                    (this._active = !0 === e.immediateRender),
                    (this.data = e.data),
                    (this._reversed = !0 === e.reversed),
                    B)
                ) {
                    a || s.wake();
                    var i = this.vars.useFrames ? q : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0);
                }
            });
            (s = E.ticker = new c.Ticker()),
                (o = E.prototype),
                (o._dirty = o._gc = o._initted = o._paused = !1),
                (o._totalTime = o._time = 0),
                (o._rawPrevTime = -1),
                (o._next = o._last = o._onUpdate = o._timeline = o.timeline = null),
                (o._paused = !1);
            var $ = function () {
                a && k() - P > 2e3 && s.wake(), setTimeout($, 2e3);
            };
            $(),
                (o.play = function (t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                }),
                (o.pause = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!0);
                }),
                (o.resume = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!1);
                }),
                (o.seek = function (t, e) {
                    return this.totalTime(Number(t), !1 !== e);
                }),
                (o.restart = function (t, e) {
                    return this.reversed(!1)
                        .paused(!1)
                        .totalTime(t ? -this._delay : 0, !1 !== e, !0);
                }),
                (o.reverse = function (t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                }),
                (o.render = function () {}),
                (o.invalidate = function () {
                    return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
                }),
                (o.isActive = function () {
                    var t,
                        e = this._timeline,
                        i = this._startTime;
                    return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t);
                }),
                (o._enabled = function (t, e) {
                    return (
                        a || s.wake(),
                        (this._gc = !t),
                        (this._active = this.isActive()),
                        !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    );
                }),
                (o._kill = function () {
                    return this._enabled(!1, !1);
                }),
                (o.kill = function (t, e) {
                    return this._kill(t, e), this;
                }),
                (o._uncache = function (t) {
                    for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                    return this;
                }),
                (o._swapSelfInParams = function (t) {
                    for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
                    return i;
                }),
                (o.eventCallback = function (t, e, i, n) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length) return r[t];
                        null == e ? delete r[t] : ((r[t] = e), (r[t + "Params"] = h(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[t + "Scope"] = n)), "onUpdate" === t && (this._onUpdate = e);
                    }
                    return this;
                }),
                (o.delay = function (t) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
                }),
                (o.duration = function (t) {
                    return arguments.length
                        ? ((this._duration = this._totalDuration = t),
                          this._uncache(!0),
                          this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                          this)
                        : ((this._dirty = !1), this._duration);
                }),
                (o.totalDuration = function (t) {
                    return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
                }),
                (o.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
                }),
                (o.totalTime = function (t, e, i) {
                    if ((a || s.wake(), !arguments.length)) return this._totalTime;
                    if (this._timeline) {
                        if ((0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                            this._dirty && this.totalDuration();
                            var n = this._totalDuration,
                                r = this._timeline;
                            if ((t > n && !i && (t = n), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                                for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                        }
                        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), N.length && W());
                    }
                    return this;
                }),
                (o.progress = o.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
                }),
                (o.startTime = function (t) {
                    return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
                }),
                (o.endTime = function (t) {
                    return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
                }),
                (o.timeScale = function (t) {
                    if (!arguments.length) return this._timeScale;
                    if (((t = t || u), this._timeline && this._timeline.smoothChildTiming)) {
                        var e = this._pauseTime,
                            i = e || 0 === e ? e : this._timeline.totalTime();
                        this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
                    }
                    return (this._timeScale = t), this._uncache(!1);
                }),
                (o.reversed = function (t) {
                    return arguments.length
                        ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                        : this._reversed;
                }),
                (o.paused = function (t) {
                    if (!arguments.length) return this._paused;
                    if (t != this._paused && this._timeline) {
                        a || t || s.wake();
                        var e = this._timeline,
                            i = e.rawTime(),
                            n = i - this._pauseTime;
                        !t && e.smoothChildTiming && ((this._startTime += n), this._uncache(!1)),
                            (this._pauseTime = t ? i : null),
                            (this._paused = t),
                            (this._active = this.isActive()),
                            !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0);
                    }
                    return this._gc && !t && this._enabled(!0, !1), this;
                });
            var A = v("core.SimpleTimeline", function (t) {
                E.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
            });
            (o = A.prototype = new E()),
                (o.constructor = A),
                (o.kill()._gc = !1),
                (o._first = o._last = o._recent = null),
                (o._sortChildren = !1),
                (o.add = o.insert = function (t, e) {
                    var i, n;
                    if (
                        ((t._startTime = Number(e || 0) + t._delay),
                        t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                        t.timeline && t.timeline._remove(t, !0),
                        (t.timeline = t._timeline = this),
                        t._gc && t._enabled(!0, !0),
                        (i = this._last),
                        this._sortChildren)
                    )
                        for (n = t._startTime; i && i._startTime > n; ) i = i._prev;
                    return (
                        i ? ((t._next = i._next), (i._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = i), (this._recent = t), this._timeline && this._uncache(!0), this
                    );
                }),
                (o._remove = function (t, e) {
                    return (
                        t.timeline === this &&
                            (e || t._enabled(!1, !0),
                            t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                            t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                            (t._next = t._prev = t.timeline = null),
                            t === this._recent && (this._recent = this._last),
                            this._timeline && this._uncache(!0)),
                        this
                    );
                }),
                (o.render = function (t, e, i) {
                    var n,
                        r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                        (n = r._next),
                            (r._active || (t >= r._startTime && !r._paused)) &&
                                (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                            (r = n);
                }),
                (o.rawTime = function () {
                    return a || s.wake(), this._totalTime;
                });
            var O = v(
                    "TweenLite",
                    function (e, i, n) {
                        if ((E.call(this, i, n), (this.render = O.prototype.render), null == e)) throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                        var r,
                            o,
                            s,
                            a = e.jquery || (e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
                            l = this.vars.overwrite;
                        if (((this._overwrite = l = null == l ? H[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l]), (a || e instanceof Array || (e.push && h(e))) && "number" != typeof e[0]))
                            for (this._targets = s = d(e), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++)
                                (o = s[r]),
                                    o
                                        ? "string" != typeof o
                                            ? o.length && o !== t && o[0] && (o[0] === t || (o[0].nodeType && o[0].style && !o.nodeType))
                                                ? (s.splice(r--, 1), (this._targets = s = s.concat(d(o))))
                                                : ((this._siblings[r] = V(o, this, !1)), 1 === l && this._siblings[r].length > 1 && U(o, this, null, 1, this._siblings[r]))
                                            : "string" == typeof (o = s[r--] = O.selector(o)) && s.splice(r + 1, 1)
                                        : s.splice(r--, 1);
                        else (this._propLookup = {}), (this._siblings = V(e, this, !1)), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || (0 === i && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -u), this.render(-this._delay));
                    },
                    !0
                ),
                M = function (e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType));
                },
                D = function (t, e) {
                    var i,
                        n = {};
                    for (i in t)
                        F[i] || (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) || !(!j[i] || (j[i] && j[i]._autoCSS)) || ((n[i] = t[i]), delete t[i]);
                    t.css = n;
                };
            (o = O.prototype = new E()),
                (o.constructor = O),
                (o.kill()._gc = !1),
                (o.ratio = 0),
                (o._firstPT = o._targets = o._overwrittenProps = o._startAt = null),
                (o._notifyPluginsOfEnabled = o._lazy = !1),
                (O.version = "1.15.1"),
                (O.defaultEase = o._ease = new b(null, null, 1, 1)),
                (O.defaultOverwrite = "auto"),
                (O.ticker = s),
                (O.autoSleep = !0),
                (O.lagSmoothing = function (t, e) {
                    s.lagSmoothing(t, e);
                }),
                (O.selector =
                    t.$ ||
                    t.jQuery ||
                    function (e) {
                        var i = t.$ || t.jQuery;
                        return i ? ((O.selector = i), i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
                    });
            var N = [],
                L = {},
                R = (O._internals = { isArray: h, isSelector: M, lazyTweens: N }),
                j = (O._plugins = {}),
                I = (R.tweenLookup = {}),
                z = 0,
                F = (R.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                }),
                H = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                q = (E._rootFramesTimeline = new A()),
                B = (E._rootTimeline = new A()),
                W = (R.lazyRender = function () {
                    var t,
                        e = N.length;
                    for (L = {}; --e > -1; ) (t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                    N.length = 0;
                });
            (B._startTime = s.time),
                (q._startTime = s.frame),
                (B._active = q._active = !0),
                setTimeout(W, 1),
                (E._updateRoot = O.render = function () {
                    var t, e, i;
                    if ((N.length && W(), B.render((s.time - B._startTime) * B._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), N.length && W(), !(s.frame % 120))) {
                        for (i in I) {
                            for (e = I[i].tweens, t = e.length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete I[i];
                        }
                        if ((!(i = B._first) || i._paused) && O.autoSleep && !q._first && 1 === s._listeners.tick.length) {
                            for (; i && i._paused; ) i = i._next;
                            i || s.sleep();
                        }
                    }
                }),
                s.addEventListener("tick", E._updateRoot);
            var V = function (t, e, i) {
                    var n,
                        r,
                        o = t._gsTweenID;
                    if ((I[o || (t._gsTweenID = o = "t" + z++)] || (I[o] = { target: t, tweens: [] }), e && ((n = I[o].tweens), (n[(r = n.length)] = e), i))) for (; --r > -1; ) n[r] === e && n.splice(r, 1);
                    return I[o].tweens;
                },
                X = function (t, e, i, n) {
                    var r,
                        o,
                        s = t.vars.onOverwrite;
                    return s && (r = s(t, e, i, n)), (s = O.onOverwrite), s && (o = s(t, e, i, n)), !1 !== r && !1 !== o;
                },
                U = function (t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || (X(a, e) && a._enabled(!1, !1) && (s = !0));
                            else if (5 === n) break;
                        return s;
                    }
                    var c,
                        d = e._startTime + u,
                        p = [],
                        h = 0,
                        f = 0 === e._duration;
                    for (o = r.length; --o > -1; )
                        (a = r[o]) === e ||
                            a._gc ||
                            a._paused ||
                            (a._timeline !== e._timeline
                                ? ((c = c || Y(e, 0, f)), 0 === Y(a, c, f) && (p[h++] = a))
                                : d >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > d && (((f || !a._initted) && 2e-10 >= d - a._startTime) || (p[h++] = a)));
                    for (o = h; --o > -1; )
                        if (((a = p[o]), 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || (!a._firstPT && a._initted))) {
                            if (2 !== n && !X(a, e)) continue;
                            a._enabled(!1, !1) && (s = !0);
                        }
                    return s;
                },
                Y = function (t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline; ) {
                        if (((o += n._startTime), (r *= n._timeScale), n._paused)) return -100;
                        n = n._timeline;
                    }
                    return (o /= r), o > e ? o - e : (i && o === e) || (!t._initted && 2 * u > o - e) ? u : (o += t.totalDuration() / t._timeScale / r) > e + u ? 0 : o - e - u;
                };
            (o._init = function () {
                var t,
                    e,
                    i,
                    n,
                    r,
                    o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (r = {});
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (((r.overwrite = !1), (r.immediateRender = !0), (r.lazy = l && !1 !== o.lazy), (r.startAt = r.delay = null), (this._startAt = O.to(this.target, 0, r)), l))
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return;
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                    else {
                        0 !== this._time && (l = !1), (i = {});
                        for (n in o) (F[n] && "autoCSS" !== n) || (i[n] = o[n]);
                        if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = l && !1 !== o.lazy), (i.immediateRender = l), (this._startAt = O.to(this.target, 0, i)), l)) {
                            if (0 === this._time) return;
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                    }
                if (
                    ((this._ease = c = c ? (c instanceof b ? c : "function" == typeof c ? new b(c, o.easeParams) : w[c] || O.defaultEase) : O.defaultEase),
                    o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)),
                    (this._easeType = this._ease._type),
                    (this._easePower = this._ease._power),
                    (this._firstPT = null),
                    this._targets)
                )
                    for (t = this._targets.length; --t > -1; ) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if ((e && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), o.runBackwards))
                    for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
                (this._onUpdate = o.onUpdate), (this._initted = !0);
            }),
                (o._initProps = function (e, i, n, r) {
                    var o, s, a, l, c, u;
                    if (null == e) return !1;
                    L[e._gsTweenID] && W(), this.vars.css || (e.style && e !== t && e.nodeType && j.css && !1 !== this.vars.autoCSS && D(this.vars, e));
                    for (o in this.vars) {
                        if (((u = this.vars[o]), F[o])) u && (u instanceof Array || (u.push && h(u))) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                        else if (j[o] && (l = new j[o]())._onInitTween(e, this.vars[o], this)) {
                            for (this._firstPT = c = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: o, pg: !0, pr: l._priority }, s = l._overwriteProps.length; --s > -1; ) i[l._overwriteProps[s]] = this._firstPT;
                            (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0);
                        } else
                            (this._firstPT = i[o] = c = { _next: this._firstPT, t: e, p: o, f: "function" == typeof e[o], n: o, pg: !1, pr: 0 }),
                                (c.s = c.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o])),
                                (c.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - c.s || 0);
                        c && c._next && (c._next._prev = c);
                    }
                    return r && this._kill(r, e)
                        ? this._initProps(e, i, n, r)
                        : this._overwrite > 1 && this._firstPT && n.length > 1 && U(e, this, i, this._overwrite, n)
                        ? (this._kill(i, e), this._initProps(e, i, n, r))
                        : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (L[e._gsTweenID] = !0), a);
                }),
                (o.render = function (t, e, i) {
                    var n,
                        r,
                        o,
                        s,
                        a = this._time,
                        l = this._duration,
                        c = this._rawPrevTime;
                    if (t >= l)
                        (this._totalTime = this._time = l),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                            this._reversed || ((n = !0), (r = "onComplete")),
                            0 === l &&
                                (this._initted || !this.vars.lazy || i) &&
                                (this._startTime === this._timeline._duration && (t = 0),
                                (0 === t || 0 > c || (c === u && "isPause" !== this.data)) && c !== t && ((i = !0), c > u && (r = "onReverseComplete")),
                                (this._rawPrevTime = s = !e || t || c === t ? t : u));
                    else if (1e-7 > t)
                        (this._totalTime = this._time = 0),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                            (0 !== a || (0 === l && c > 0 && c !== u)) && ((r = "onReverseComplete"), (n = this._reversed)),
                            0 > t && ((this._active = !1), 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== u || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = s = !e || t || c === t ? t : u))),
                            this._initted || (i = !0);
                    else if (((this._totalTime = this._time = t), this._easeType)) {
                        var d = t / l,
                            p = this._easeType,
                            h = this._easePower;
                        (1 === p || (3 === p && d >= 0.5)) && (d = 1 - d),
                            3 === p && (d *= 2),
                            1 === h ? (d *= d) : 2 === h ? (d *= d * d) : 3 === h ? (d *= d * d * d) : 4 === h && (d *= d * d * d * d),
                            (this.ratio = 1 === p ? 1 - d : 2 === p ? d : 0.5 > t / l ? d / 2 : 1 - d / 2);
                    } else this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== a || i) {
                        if (!this._initted) {
                            if ((this._init(), !this._initted || this._gc)) return;
                            if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                                return (this._time = this._totalTime = a), (this._rawPrevTime = c), N.push(this), void (this._lazy = [t, e]);
                            this._time && !n ? (this.ratio = this._ease.getRatio(this._time / l)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                        }
                        for (
                            !1 !== this._lazy && (this._lazy = !1),
                                this._active || (!this._paused && this._time !== a && t >= 0 && (this._active = !0)),
                                0 === a &&
                                    (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                                    this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))),
                                o = this._firstPT;
                            o;

                        )
                            o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                        this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || ((this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))),
                            r &&
                                (!this._gc || i) &&
                                (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _),
                                0 === l && this._rawPrevTime === u && s !== u && (this._rawPrevTime = 0));
                    }
                }),
                (o._kill = function (t, e, i) {
                    if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                    var n, r, o, s, a, l, c, u, d;
                    if ((h(e) || M(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1; ) this._kill(t, e[n]) && (l = !0);
                    else {
                        if (this._targets) {
                            for (n = this._targets.length; --n > -1; )
                                if (e === this._targets[n]) {
                                    (a = this._propLookup[n] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all");
                                    break;
                                }
                        } else {
                            if (e !== this.target) return !1;
                            (a = this._propLookup), (r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                        }
                        if (a) {
                            if (((c = t || a), (u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill)), i && (O.onOverwrite || this.vars.onOverwrite))) {
                                for (o in c) a[o] && (d || (d = []), d.push(o));
                                if (!X(this, i, e, d)) return !1;
                            }
                            for (o in c)
                                (s = a[o]) &&
                                    (s.pg && s.t._kill(c) && (l = !0),
                                    (s.pg && 0 !== s.t._overwriteProps.length) || (s._prev ? (s._prev._next = s._next) : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), (s._next = s._prev = null)),
                                    delete a[o]),
                                    u && (r[o] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1);
                        }
                    }
                    return l;
                }),
                (o.invalidate = function () {
                    return (
                        this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this),
                        (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                        (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                        (this._propLookup = this._targets ? {} : []),
                        E.prototype.invalidate.call(this),
                        this.vars.immediateRender && ((this._time = -u), this.render(-this._delay)),
                        this
                    );
                }),
                (o._enabled = function (t, e) {
                    if ((a || s.wake(), t && this._gc)) {
                        var i,
                            n = this._targets;
                        if (n) for (i = n.length; --i > -1; ) this._siblings[i] = V(n[i], this, !0);
                        else this._siblings = V(this.target, this, !0);
                    }
                    return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && O._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
                }),
                (O.to = function (t, e, i) {
                    return new O(t, e, i);
                }),
                (O.from = function (t, e, i) {
                    return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new O(t, e, i);
                }),
                (O.fromTo = function (t, e, i, n) {
                    return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new O(t, e, n);
                }),
                (O.delayedCall = function (t, e, i, n, r) {
                    return new O(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: r,
                        overwrite: 0,
                    });
                }),
                (O.set = function (t, e) {
                    return new O(t, 0, e);
                }),
                (O.getTweensOf = function (t, e) {
                    if (null == t) return [];
                    t = "string" != typeof t ? t : O.selector(t) || t;
                    var i, n, r, o;
                    if ((h(t) || M(t)) && "number" != typeof t[0]) {
                        for (i = t.length, n = []; --i > -1; ) n = n.concat(O.getTweensOf(t[i], e));
                        for (i = n.length; --i > -1; ) for (o = n[i], r = i; --r > -1; ) o === n[r] && n.splice(i, 1);
                    } else for (n = V(t).concat(), i = n.length; --i > -1; ) (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
                    return n;
                }),
                (O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
                    "object" == typeof e && ((i = e), (e = !1));
                    for (var n = O.getTweensOf(t, e), r = n.length; --r > -1; ) n[r]._kill(i, t);
                });
            var G = v(
                "plugins.TweenPlugin",
                function (t, e) {
                    (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = G.prototype);
                },
                !0
            );
            if (
                ((o = G.prototype),
                (G.version = "1.10.1"),
                (G.API = 2),
                (o._firstPT = null),
                (o._addTween = function (t, e, i, n, r, o) {
                    var s, a;
                    return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)))
                        ? ((this._firstPT = a = { _next: this._firstPT, t: t, p: e, s: i, c: s, f: "function" == typeof t[e], n: r || e, r: o }), a._next && (a._next._prev = a), a)
                        : void 0;
                }),
                (o.setRatio = function (t) {
                    for (var e, i = this._firstPT; i; ) (e = i.c * t + i.s), i.r ? (e = Math.round(e)) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : (i.t[i.p] = e), (i = i._next);
                }),
                (o._kill = function (t) {
                    var e,
                        i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
                    for (; n; ) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next);
                    return !1;
                }),
                (o._roundProps = function (t, e) {
                    for (var i = this._firstPT; i; ) (t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && (i.r = e), (i = i._next);
                }),
                (O._onPluginEvent = function (t, e) {
                    var i,
                        n,
                        r,
                        o,
                        s,
                        a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a; ) {
                            for (s = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
                            (a._prev = n ? n._prev : o) ? (a._prev._next = a) : (r = a), (a._next = n) ? (n._prev = a) : (o = a), (a = s);
                        }
                        a = e._firstPT = r;
                    }
                    for (; a; ) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), (a = a._next);
                    return i;
                }),
                (G.activate = function (t) {
                    for (var e = t.length; --e > -1; ) t[e].API === G.API && (j[new t[e]()._propName] = t[e]);
                    return !0;
                }),
                (g.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e,
                        i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                        s = v(
                            "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                            function () {
                                G.call(this, i, n), (this._overwriteProps = r || []);
                            },
                            !0 === t.global
                        ),
                        a = (s.prototype = new G(i));
                    (a.constructor = s), (s.API = t.API);
                    for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return (s.version = t.version), G.activate([s]), s;
                }),
                (n = t._gsQueue))
            ) {
                for (r = 0; n.length > r; r++) n[r]();
                for (o in f) f[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o);
            }
            a = !1;
        }
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    (function (t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? (module.exports = e()) : (t.ScrollMagic = e());
    })(this, function () {
        "use strict";
        var t = function () {};
        (t.version = "2.0.5"), window.addEventListener("mousewheel", function () {});
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function (n) {
            var o,
                s,
                a = "REVERSE",
                l = "PAUSED",
                c = i.defaults,
                u = this,
                d = r.extend({}, c, n),
                p = [],
                h = !1,
                f = 0,
                m = l,
                g = !0,
                v = 0,
                y = !0,
                _ = function () {
                    d.refreshInterval > 0 && (s = window.setTimeout(k, d.refreshInterval));
                },
                b = function () {
                    return d.vertical ? r.get.scrollTop(d.container) : r.get.scrollLeft(d.container);
                },
                w = function () {
                    return d.vertical ? r.get.height(d.container) : r.get.width(d.container);
                },
                x = (this._setScrollPos = function (t) {
                    d.vertical ? (g ? window.scrollTo(r.get.scrollLeft(), t) : (d.container.scrollTop = t)) : g ? window.scrollTo(t, r.get.scrollTop()) : (d.container.scrollLeft = t);
                }),
                T = function () {
                    if (y && h) {
                        var t = r.type.Array(h) ? h : p.slice(0);
                        h = !1;
                        var e = f;
                        f = u.scrollPos();
                        var i = f - e;
                        0 !== i && (m = i > 0 ? "FORWARD" : a),
                            m === a && t.reverse(),
                            t.forEach(function (t) {
                                t.update(!0);
                            });
                    }
                },
                S = function () {
                    o = r.rAF(T);
                },
                C = function (t) {
                    "resize" == t.type && ((v = w()), (m = l)), !0 !== h && ((h = !0), S());
                },
                k = function () {
                    if (!g && v != w()) {
                        var t;
                        try {
                            t = new Event("resize", { bubbles: !1, cancelable: !1 });
                        } catch (e) {
                            (t = document.createEvent("Event")), t.initEvent("resize", !1, !1);
                        }
                        d.container.dispatchEvent(t);
                    }
                    p.forEach(function (t) {
                        t.refresh();
                    }),
                        _();
                };
            this._options = d;
            var P = function (t) {
                if (t.length <= 1) return t;
                var e = t.slice(0);
                return (
                    e.sort(function (t, e) {
                        return t.scrollOffset() > e.scrollOffset() ? 1 : -1;
                    }),
                    e
                );
            };
            return (
                (this.addScene = function (e) {
                    if (r.type.Array(e))
                        e.forEach(function (t) {
                            u.addScene(t);
                        });
                    else if (e instanceof t.Scene)
                        if (e.controller() !== u) e.addTo(u);
                        else if (p.indexOf(e) < 0) {
                            p.push(e),
                                (p = P(p)),
                                e.on("shift.controller_sort", function () {
                                    p = P(p);
                                });
                            for (var i in d.globalSceneOptions) e[i] && e[i].call(e, d.globalSceneOptions[i]);
                        }
                    return u;
                }),
                (this.removeScene = function (t) {
                    if (r.type.Array(t))
                        t.forEach(function (t) {
                            u.removeScene(t);
                        });
                    else {
                        var e = p.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), p.splice(e, 1), t.remove());
                    }
                    return u;
                }),
                (this.updateScene = function (e, i) {
                    return (
                        r.type.Array(e)
                            ? e.forEach(function (t) {
                                  u.updateScene(t, i);
                              })
                            : i
                            ? e.update(!0)
                            : !0 !== h && e instanceof t.Scene && ((h = h || []), -1 == h.indexOf(e) && h.push(e), (h = P(h)), S()),
                        u
                    );
                }),
                (this.update = function (t) {
                    return C({ type: "resize" }), t && T(), u;
                }),
                (this.scrollTo = function (i, n) {
                    if (r.type.Number(i)) x.call(d.container, i, n);
                    else if (i instanceof t.Scene) i.controller() === u && u.scrollTo(i.scrollOffset(), n);
                    else if (r.type.Function(i)) x = i;
                    else {
                        var o = r.get.elements(i)[0];
                        if (o) {
                            for (; o.parentNode.hasAttribute(e); ) o = o.parentNode;
                            var s = d.vertical ? "top" : "left",
                                a = r.get.offset(d.container),
                                l = r.get.offset(o);
                            g || (a[s] -= u.scrollPos()), u.scrollTo(l[s] - a[s], n);
                        }
                    }
                    return u;
                }),
                (this.scrollPos = function (t) {
                    return arguments.length ? (r.type.Function(t) && (b = t), u) : b.call(u);
                }),
                (this.info = function (t) {
                    var e = { size: v, vertical: d.vertical, scrollPos: f, scrollDirection: m, container: d.container, isDocument: g };
                    return arguments.length ? (void 0 !== e[t] ? e[t] : void 0) : e;
                }),
                (this.loglevel = function () {
                    return u;
                }),
                (this.enabled = function (t) {
                    return arguments.length ? (y != t && ((y = !!t), u.updateScene(p, !0)), u) : y;
                }),
                (this.destroy = function (t) {
                    window.clearTimeout(s);
                    for (var e = p.length; e--; ) p[e].destroy(t);
                    return d.container.removeEventListener("resize", C), d.container.removeEventListener("scroll", C), r.cAF(o), null;
                }),
                (function () {
                    for (var t in d) c.hasOwnProperty(t) || delete d[t];
                    if (((d.container = r.get.elements(d.container)[0]), !d.container)) throw "ScrollMagic.Controller init failed.";
                    (g = d.container === window || d.container === document.body || !document.body.contains(d.container)),
                        g && (d.container = window),
                        (v = w()),
                        d.container.addEventListener("resize", C),
                        d.container.addEventListener("scroll", C),
                        (d.refreshInterval = parseInt(d.refreshInterval) || c.refreshInterval),
                        _();
                })(),
                u
            );
        };
        var i = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
        (t.Controller.addOption = function (t, e) {
            i.defaults[t] = e;
        }),
            (t.Controller.extend = function (e) {
                var i = this;
                (t.Controller = function () {
                    return i.apply(this, arguments), (this.$super = r.extend({}, this)), e.apply(this, arguments) || this;
                }),
                    r.extend(t.Controller, i),
                    (t.Controller.prototype = i.prototype),
                    (t.Controller.prototype.constructor = t.Controller);
            }),
            (t.Scene = function (i) {
                var o,
                    s,
                    a = "BEFORE",
                    l = "DURING",
                    c = "AFTER",
                    u = n.defaults,
                    d = this,
                    p = r.extend({}, u, i),
                    h = a,
                    f = 0,
                    m = { start: 0, end: 0 },
                    g = 0,
                    v = !0,
                    y = {};
                (this.on = function (t, e) {
                    return (
                        r.type.Function(e) &&
                            ((t = t.trim().split(" ")),
                            t.forEach(function (t) {
                                var i = t.split("."),
                                    n = i[0],
                                    r = i[1];
                                "*" != n && (y[n] || (y[n] = []), y[n].push({ namespace: r || "", callback: e }));
                            })),
                        d
                    );
                }),
                    (this.off = function (t, e) {
                        return t
                            ? ((t = t.trim().split(" ")),
                              t.forEach(function (t) {
                                  var i = t.split("."),
                                      n = i[0],
                                      r = i[1] || "";
                                  ("*" === n ? Object.keys(y) : [n]).forEach(function (t) {
                                      for (var i = y[t] || [], n = i.length; n--; ) {
                                          var o = i[n];
                                          !o || (r !== o.namespace && "*" !== r) || (e && e != o.callback) || i.splice(n, 1);
                                      }
                                      i.length || delete y[t];
                                  });
                              }),
                              d)
                            : d;
                    }),
                    (this.trigger = function (e, i) {
                        if (e) {
                            var n = e.trim().split("."),
                                r = n[0],
                                o = n[1],
                                s = y[r];
                            s &&
                                s.forEach(function (e) {
                                    (o && o !== e.namespace) || e.callback.call(d, new t.Event(r, e.namespace, d, i));
                                });
                        }
                        return d;
                    }),
                    d
                        .on("change.internal", function (t) {
                            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? w() : "reverse" === t.what && d.update());
                        })
                        .on("shift.internal", function () {
                            _(), d.update();
                        }),
                    (this.addTo = function (e) {
                        return (
                            e instanceof t.Controller && s != e && (s && s.removeScene(d), (s = e), S(), b(!0), w(!0), _(), s.info("container").addEventListener("resize", x), e.addScene(d), d.trigger("add", { controller: s }), d.update()),
                            d
                        );
                    }),
                    (this.enabled = function (t) {
                        return arguments.length ? (v != t && ((v = !!t), d.update(!0)), d) : v;
                    }),
                    (this.remove = function () {
                        if (s) {
                            s.info("container").removeEventListener("resize", x);
                            var t = s;
                            (s = void 0), t.removeScene(d), d.trigger("remove");
                        }
                        return d;
                    }),
                    (this.destroy = function (t) {
                        return d.trigger("destroy", { reset: t }), d.remove(), d.off("*.*"), null;
                    }),
                    (this.update = function (t) {
                        if (s)
                            if (t)
                                if (s.enabled() && v) {
                                    var e,
                                        i = s.info("scrollPos");
                                    (e = p.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0), d.trigger("update", { startPos: m.start, endPos: m.end, scrollPos: i }), d.progress(e);
                                } else P && h === l && $(!0);
                            else s.updateScene(d, !1);
                        return d;
                    }),
                    (this.refresh = function () {
                        return b(), w(), d;
                    }),
                    (this.progress = function (t) {
                        if (arguments.length) {
                            var e = !1,
                                i = h,
                                n = s ? s.info("scrollDirection") : "PAUSED",
                                r = p.reverse || t >= f;
                            if (
                                (0 === p.duration
                                    ? ((e = f != t), (f = 1 > t && r ? 0 : 1), (h = 0 === f ? a : l))
                                    : 0 > t && h !== a && r
                                    ? ((f = 0), (h = a), (e = !0))
                                    : t >= 0 && 1 > t && r
                                    ? ((f = t), (h = l), (e = !0))
                                    : t >= 1 && h !== c
                                    ? ((f = 1), (h = c), (e = !0))
                                    : h !== l || r || $(),
                                e)
                            ) {
                                var o = { progress: f, state: h, scrollDirection: n },
                                    u = h != i,
                                    m = function (t) {
                                        d.trigger(t, o);
                                    };
                                u && i !== l && (m("enter"), m(i === a ? "start" : "end")), m("progress"), u && h !== l && (m(h === a ? "start" : "end"), m("leave"));
                            }
                            return d;
                        }
                        return f;
                    });
                var _ = function () {
                        (m = { start: g + p.offset }), s && p.triggerElement && (m.start -= s.info("size") * p.triggerHook), (m.end = m.start + p.duration);
                    },
                    b = function (t) {
                        if (o) {
                            var e = "duration";
                            C(e, o.call(d)) && !t && (d.trigger("change", { what: e, newval: p[e] }), d.trigger("shift", { reason: e }));
                        }
                    },
                    w = function (t) {
                        var i = 0,
                            n = p.triggerElement;
                        if (s && n) {
                            for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e); ) n = n.parentNode;
                            var c = r.get.offset(n);
                            o.isDocument || (a[l] -= s.scrollPos()), (i = c[l] - a[l]);
                        }
                        var u = i != g;
                        (g = i), u && !t && d.trigger("shift", { reason: "triggerElementPosition" });
                    },
                    x = function () {
                        p.triggerHook > 0 && d.trigger("shift", { reason: "containerResize" });
                    },
                    T = r.extend(n.validate, {
                        duration: function (t) {
                            if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                                var e = parseFloat(t) / 100;
                                t = function () {
                                    return s ? s.info("size") * e : 0;
                                };
                            }
                            if (r.type.Function(t)) {
                                o = t;
                                try {
                                    t = parseFloat(o());
                                } catch (e) {
                                    t = -1;
                                }
                            }
                            if (((t = parseFloat(t)), !r.type.Number(t) || 0 > t)) throw o ? ((o = void 0), 0) : 0;
                            return t;
                        },
                    }),
                    S = function (t) {
                        (t = arguments.length ? [t] : Object.keys(T)),
                            t.forEach(function (t) {
                                var e;
                                if (T[t])
                                    try {
                                        e = T[t](p[t]);
                                    } catch (i) {
                                        e = u[t];
                                    } finally {
                                        p[t] = e;
                                    }
                            });
                    },
                    C = function (t, e) {
                        var i = !1,
                            n = p[t];
                        return p[t] != e && ((p[t] = e), S(t), (i = n != p[t])), i;
                    },
                    k = function (t) {
                        d[t] ||
                            (d[t] = function (e) {
                                return arguments.length ? ("duration" === t && (o = void 0), C(t, e) && (d.trigger("change", { what: t, newval: p[t] }), n.shifts.indexOf(t) > -1 && d.trigger("shift", { reason: t })), d) : p[t];
                            });
                    };
                (this.controller = function () {
                    return s;
                }),
                    (this.state = function () {
                        return h;
                    }),
                    (this.scrollOffset = function () {
                        return m.start;
                    }),
                    (this.triggerPosition = function () {
                        var t = p.offset;
                        return s && (t += p.triggerElement ? g : s.info("size") * d.triggerHook()), t;
                    });
                var P, E;
                d.on("shift.internal", function (t) {
                    var e = "duration" === t.reason;
                    ((h === c && e) || (h === l && 0 === p.duration)) && $(), e && A();
                })
                    .on("progress.internal", function () {
                        $();
                    })
                    .on("add.internal", function () {
                        A();
                    })
                    .on("destroy.internal", function (t) {
                        d.removePin(t.reset);
                    });
                var $ = function (t) {
                        if (P && s) {
                            var e = s.info(),
                                i = E.spacer.firstChild;
                            if (t || h !== l) {
                                var n = { position: E.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                                    o = r.css(i, "position") != n.position;
                                E.pushFollowers
                                    ? p.duration > 0 && (h === c && 0 === parseFloat(r.css(E.spacer, "padding-top")) ? (o = !0) : h === a && 0 === parseFloat(r.css(E.spacer, "padding-bottom")) && (o = !0))
                                    : (n[e.vertical ? "top" : "left"] = p.duration * f),
                                    r.css(i, n),
                                    o && A();
                            } else {
                                "fixed" != r.css(i, "position") && (r.css(i, { position: "fixed" }), A());
                                var u = r.get.offset(E.spacer, !0),
                                    d = p.reverse || 0 === p.duration ? e.scrollPos - m.start : Math.round(f * p.duration * 10) / 10;
                                (u[e.vertical ? "top" : "left"] += d), r.css(E.spacer.firstChild, { top: u.top, left: u.left });
                            }
                        }
                    },
                    A = function () {
                        if (P && s && E.inFlow) {
                            var t = h === l,
                                e = s.info("vertical"),
                                i = E.spacer.firstChild,
                                n = r.isMarginCollapseType(r.css(E.spacer, "display")),
                                o = {};
                            E.relSize.width || E.relSize.autoFullWidth
                                ? t
                                    ? r.css(P, { width: r.get.width(E.spacer) })
                                    : r.css(P, { width: "100%" })
                                : ((o["min-width"] = r.get.width(e ? P : i, !0, !0)), (o.width = t ? o["min-width"] : "auto")),
                                E.relSize.height
                                    ? t
                                        ? r.css(P, { height: r.get.height(E.spacer) - (E.pushFollowers ? p.duration : 0) })
                                        : r.css(P, { height: "100%" })
                                    : ((o["min-height"] = r.get.height(e ? i : P, !0, !n)), (o.height = t ? o["min-height"] : "auto")),
                                E.pushFollowers && ((o["padding" + (e ? "Top" : "Left")] = p.duration * f), (o["padding" + (e ? "Bottom" : "Right")] = p.duration * (1 - f))),
                                r.css(E.spacer, o);
                        }
                    },
                    O = function () {
                        s && P && h === l && !s.info("isDocument") && $();
                    },
                    M = function () {
                        s &&
                            P &&
                            h === l &&
                            (((E.relSize.width || E.relSize.autoFullWidth) && r.get.width(window) != r.get.width(E.spacer.parentNode)) || (E.relSize.height && r.get.height(window) != r.get.height(E.spacer.parentNode))) &&
                            A();
                    },
                    D = function (t) {
                        s && P && h === l && !s.info("isDocument") && (t.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)));
                    };
                (this.setPin = function (t, i) {
                    var n = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
                    if (((i = r.extend({}, n, i)), !(t = r.get.elements(t)[0]))) return d;
                    if ("fixed" === r.css(t, "position")) return d;
                    if (P) {
                        if (P === t) return d;
                        d.removePin();
                    }
                    P = t;
                    var o = P.parentNode.style.display,
                        s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    P.parentNode.style.display = "none";
                    var a = "absolute" != r.css(P, "position"),
                        l = r.css(P, s.concat(["display"])),
                        c = r.css(P, ["width", "height"]);
                    (P.parentNode.style.display = o), !a && i.pushFollowers && (i.pushFollowers = !1);
                    var u = P.parentNode.insertBefore(document.createElement("div"), P),
                        p = r.extend(l, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
                    if (
                        (a || r.extend(p, r.css(P, ["width", "height"])),
                        r.css(u, p),
                        u.setAttribute(e, ""),
                        r.addClass(u, i.spacerClass),
                        (E = {
                            spacer: u,
                            relSize: { width: "%" === c.width.slice(-1), height: "%" === c.height.slice(-1), autoFullWidth: "auto" === c.width && a && r.isMarginCollapseType(l.display) },
                            pushFollowers: i.pushFollowers,
                            inFlow: a,
                        }),
                        !P.___origStyle)
                    ) {
                        P.___origStyle = {};
                        var h = P.style;
                        s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (t) {
                            P.___origStyle[t] = h[t] || "";
                        });
                    }
                    return (
                        E.relSize.width && r.css(u, { width: c.width }),
                        E.relSize.height && r.css(u, { height: c.height }),
                        u.appendChild(P),
                        r.css(P, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }),
                        (E.relSize.width || E.relSize.autoFullWidth) && r.css(P, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }),
                        window.addEventListener("scroll", O),
                        window.addEventListener("resize", O),
                        window.addEventListener("resize", M),
                        P.addEventListener("mousewheel", D),
                        P.addEventListener("DOMMouseScroll", D),
                        $(),
                        d
                    );
                }),
                    (this.removePin = function (t) {
                        if (P) {
                            if ((h === l && $(!0), t || !s)) {
                                var i = E.spacer.firstChild;
                                if (i.hasAttribute(e)) {
                                    var n = E.spacer.style,
                                        o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                    (margins = {}),
                                        o.forEach(function (t) {
                                            margins[t] = n[t] || "";
                                        }),
                                        r.css(i, margins);
                                }
                                E.spacer.parentNode.insertBefore(i, E.spacer), E.spacer.parentNode.removeChild(E.spacer), P.parentNode.hasAttribute(e) || (r.css(P, P.___origStyle), delete P.___origStyle);
                            }
                            window.removeEventListener("scroll", O),
                                window.removeEventListener("resize", O),
                                window.removeEventListener("resize", M),
                                P.removeEventListener("mousewheel", D),
                                P.removeEventListener("DOMMouseScroll", D),
                                (P = void 0);
                        }
                        return d;
                    });
                var N,
                    L = [];
                return (
                    d.on("destroy.internal", function (t) {
                        d.removeClassToggle(t.reset);
                    }),
                    (this.setClassToggle = function (t, e) {
                        var i = r.get.elements(t);
                        return 0 !== i.length && r.type.String(e)
                            ? (L.length > 0 && d.removeClassToggle(),
                              (N = e),
                              (L = i),
                              d.on("enter.internal_class leave.internal_class", function (t) {
                                  var e = "enter" === t.type ? r.addClass : r.removeClass;
                                  L.forEach(function (t) {
                                      e(t, N);
                                  });
                              }),
                              d)
                            : d;
                    }),
                    (this.removeClassToggle = function (t) {
                        return (
                            t &&
                                L.forEach(function (t) {
                                    r.removeClass(t, N);
                                }),
                            d.off("start.internal_class end.internal_class"),
                            (N = void 0),
                            (L = []),
                            d
                        );
                    }),
                    (function () {
                        for (var t in p) u.hasOwnProperty(t) || delete p[t];
                        for (var e in u) k(e);
                        S();
                    })(),
                    d
                );
            });
        var n = {
            defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: 0.5, reverse: !0, loglevel: 2 },
            validate: {
                offset: function (t) {
                    if (((t = parseFloat(t)), !r.type.Number(t))) throw 0;
                    return t;
                },
                triggerElement: function (t) {
                    if ((t = t || void 0)) {
                        var e = r.get.elements(t)[0];
                        if (!e) throw 0;
                        t = e;
                    }
                    return t;
                },
                triggerHook: function (t) {
                    var e = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
                    if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                    else {
                        if (!(t in e)) throw 0;
                        t = e[t];
                    }
                    return t;
                },
                reverse: function (t) {
                    return !!t;
                },
            },
            shifts: ["duration", "offset", "triggerHook"],
        };
        (t.Scene.addOption = function (t, e, i, r) {
            t in n.defaults || ((n.defaults[t] = e), (n.validate[t] = i), r && n.shifts.push(t));
        }),
            (t.Scene.extend = function (e) {
                var i = this;
                (t.Scene = function () {
                    return i.apply(this, arguments), (this.$super = r.extend({}, this)), e.apply(this, arguments) || this;
                }),
                    r.extend(t.Scene, i),
                    (t.Scene.prototype = i.prototype),
                    (t.Scene.prototype.constructor = t.Scene);
            }),
            (t.Event = function (t, e, i, n) {
                n = n || {};
                for (var r in n) this[r] = n[r];
                return (this.type = t), (this.target = this.currentTarget = i), (this.namespace = e || ""), (this.timeStamp = this.timestamp = Date.now()), this;
            });
        var r = (t._util = (function (t) {
            var e,
                i = {},
                n = function (t) {
                    return parseFloat(t) || 0;
                },
                r = function (e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e);
                },
                o = function (e, i, o, s) {
                    if ((i = i === document ? t : i) === t) s = !1;
                    else if (!d.DomElement(i)) return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (o && s) {
                        var l = r(i);
                        a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight);
                    }
                    return a;
                },
                s = function (t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                        return t[1].toUpperCase();
                    });
                };
            (i.extend = function (t) {
                for (t = t || {}, e = 1; e < arguments.length; e++) if (arguments[e]) for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                return t;
            }),
                (i.isMarginCollapseType = function (t) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1;
                });
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                c = t.requestAnimationFrame,
                u = t.cancelAnimationFrame;
            for (e = 0; !c && e < l.length; ++e) (c = t[l[e] + "RequestAnimationFrame"]), (u = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"]);
            c ||
                (c = function (e) {
                    var i = new Date().getTime(),
                        n = Math.max(0, 16 - (i - a)),
                        r = t.setTimeout(function () {
                            e(i + n);
                        }, n);
                    return (a = i + n), r;
                }),
                u ||
                    (u = function (e) {
                        t.clearTimeout(e);
                    }),
                (i.rAF = c.bind(t)),
                (i.cAF = u.bind(t));
            var d = (i.type = function (t) {
                return Object.prototype.toString
                    .call(t)
                    .replace(/^\[object (.+)\]$/, "$1")
                    .toLowerCase();
            });
            (d.String = function (t) {
                return "string" === d(t);
            }),
                (d.Function = function (t) {
                    return "function" === d(t);
                }),
                (d.Array = function (t) {
                    return Array.isArray(t);
                }),
                (d.Number = function (t) {
                    return !d.Array(t) && t - parseFloat(t) + 1 >= 0;
                }),
                (d.DomElement = function (t) {
                    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName;
                });
            var p = (i.get = {});
            return (
                (p.elements = function (e) {
                    var i = [];
                    if (d.String(e))
                        try {
                            e = document.querySelectorAll(e);
                        } catch (t) {
                            return i;
                        }
                    if ("nodelist" === d(e) || d.Array(e))
                        for (var n = 0, r = (i.length = e.length); r > n; n++) {
                            var o = e[n];
                            i[n] = d.DomElement(o) ? o : p.elements(o);
                        }
                    else (d.DomElement(e) || e === document || e === t) && (i = [e]);
                    return i;
                }),
                (p.scrollTop = function (e) {
                    return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0;
                }),
                (p.scrollLeft = function (e) {
                    return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0;
                }),
                (p.width = function (t, e, i) {
                    return o("width", t, e, i);
                }),
                (p.height = function (t, e, i) {
                    return o("height", t, e, i);
                }),
                (p.offset = function (t, e) {
                    var i = { top: 0, left: 0 };
                    if (t && t.getBoundingClientRect) {
                        var n = t.getBoundingClientRect();
                        (i.top = n.top), (i.left = n.left), e || ((i.top += p.scrollTop()), (i.left += p.scrollLeft()));
                    }
                    return i;
                }),
                (i.addClass = function (t, e) {
                    e && (t.classList ? t.classList.add(e) : (t.className += " " + e));
                }),
                (i.removeClass = function (t, e) {
                    e && (t.classList ? t.classList.remove(e) : (t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")));
                }),
                (i.css = function (t, e) {
                    if (d.String(e)) return r(t)[s(e)];
                    if (d.Array(e)) {
                        var i = {},
                            n = r(t);
                        return (
                            e.forEach(function (t) {
                                i[t] = n[s(t)];
                            }),
                            i
                        );
                    }
                    for (var o in e) {
                        var a = e[o];
                        a == parseFloat(a) && (a += "px"), (t.style[s(o)] = a);
                    }
                }),
                i
            );
        })(window || {}));
        return t;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e)
            : "object" == typeof exports
            ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax))
            : e(t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic), t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite);
    })(this, function (t, e, i) {
        "use strict";
        t.Scene.addOption("tweenChanges", !1, function (t) {
            return !!t;
        }),
            t.Scene.extend(function () {
                var t,
                    n = this;
                n.on("progress.plugin_gsap", function () {
                    r();
                }),
                    n.on("destroy.plugin_gsap", function (t) {
                        n.removeTween(t.reset);
                    });
                var r = function () {
                    if (t) {
                        var e = n.progress(),
                            i = n.state();
                        t.repeat && -1 === t.repeat()
                            ? "DURING" === i && t.paused()
                                ? t.play()
                                : "DURING" === i || t.paused() || t.pause()
                            : e != t.progress() && (0 === n.duration() ? (0 < e ? t.play() : t.reverse()) : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause());
                    }
                };
                (n.setTween = function (o, s, a) {
                    var l;
                    1 < arguments.length && (arguments.length < 3 && ((a = s), (s = 1)), (o = e.to(o, s, a)));
                    try {
                        (l = i ? new i({ smoothChildTiming: !0 }).add(o) : o).pause();
                    } catch (o) {
                        return n;
                    }
                    return t && n.removeTween(), (t = l), o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), r(), n;
                }),
                    (n.removeTween = function (e) {
                        return t && (e && t.progress(0).pause(), t.kill(), (t = void 0)), n;
                    });
            });
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["ScrollMagic", "velocity"], e)
            : "object" == typeof exports
            ? e(require("scrollmagic"), require("velocity"))
            : e(t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic), t.Velocity || (t.jQuery && t.jQuery.Velocity));
    })(this, function (t, e) {
        "use strict";
        var i = 0;
        t.Scene.extend(function () {
            var n,
                r,
                o,
                s,
                a = this,
                l = t._util,
                c = 0;
            a.on("progress.plugin_velocity", function () {
                p();
            }),
                a.on("destroy.plugin_velocity", function (t) {
                    a.off("*.plugin_velocity"), a.removeVelocity(t.reset);
                });
            var u = function (t, i, n) {
                    l.type.Array(t)
                        ? t.forEach(function (t) {
                              u(t, i, n);
                          })
                        : (e.Utilities.data(t, s) || e.Utilities.data(t, s, { reverseProps: l.css(t, Object.keys(r)) }), e(t, i, n), void 0 !== n.queue && e.Utilities.dequeue(t, n.queue));
                },
                d = function (t, i) {
                    if (l.type.Array(t))
                        t.forEach(function (t) {
                            d(t, i);
                        });
                    else {
                        var n = e.Utilities.data(t, s);
                        n && n.reverseProps && (e(t, n.reverseProps, i), void 0 !== i.queue && e.Utilities.dequeue(t, i.queue));
                    }
                },
                p = function () {
                    if (n) {
                        var t = a.progress();
                        t != c && (0 === a.duration() && (0 < t ? u(n, r, o) : d(n, o)), (c = t));
                    }
                };
            (a.setVelocity = function (t, e, c) {
                return n && a.removeVelocity(), (n = l.get.elements(t)), (r = e || {}), (s = "ScrollMagic.animation.velocity[" + i++ + "]"), void 0 !== (o = c || {}).queue && (o.queue = s + "_queue"), p(), a;
            }),
                (a.removeVelocity = function (t) {
                    return (
                        n &&
                            (void 0 !== o.queue && e(n, "stop", o.queue),
                            t && d(n, { duration: 0 }),
                            n.forEach(function (t) {
                                e.Utilities.removeData(t, s);
                            }),
                            (n = r = o = s = void 0)),
                        a
                    );
                });
        });
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define(["ScrollMagic"], e) : e("object" == typeof exports ? require("scrollmagic") : t.ScrollMagic || (t.jQuery && t.jQuery.ScrollMagic));
    })(this, function (t) {
        "use strict";
        var e = "0.85em",
            i = "9999",
            n = t._util,
            r = 0;
        t.Scene.extend(function () {
            var t,
                e = this;
            (e.addIndicators = function (i) {
                if (!t) {
                    var s = { name: "", indent: 0, parent: void 0, colorStart: "green", colorEnd: "red", colorTrigger: "blue" };
                    (i = n.extend({}, s, i)),
                        r++,
                        (t = new o(e, i)),
                        e.on("add.plugin_addIndicators", t.add),
                        e.on("remove.plugin_addIndicators", t.remove),
                        e.on("destroy.plugin_addIndicators", e.removeIndicators),
                        e.controller() && t.add();
                }
                return e;
            }),
                (e.removeIndicators = function () {
                    return t && (t.remove(), this.off("*.plugin_addIndicators"), (t = void 0)), e;
                });
        }),
            t.Controller.addOption("addIndicators", !1),
            t.Controller.extend(function () {
                var e = this,
                    i = e.info(),
                    r = i.container,
                    o = i.isDocument,
                    s = i.vertical,
                    a = { groups: [] };
                this._indicators = a;
                var l = function () {
                        a.updateBoundsPositions();
                    },
                    c = function () {
                        a.updateTriggerGroupPositions();
                    };
                return (
                    r.addEventListener("resize", c),
                    o || (window.addEventListener("resize", c), window.addEventListener("scroll", c)),
                    r.addEventListener("resize", l),
                    r.addEventListener("scroll", l),
                    (this._indicators.updateBoundsPositions = function (t) {
                        for (
                            var e,
                                i,
                                o,
                                l = t ? [n.extend({}, t.triggerGroup, { members: [t] })] : a.groups,
                                c = l.length,
                                u = {},
                                d = s ? "left" : "top",
                                p = s ? "width" : "height",
                                h = s ? n.get.scrollLeft(r) + n.get.width(r) - 15 : n.get.scrollTop(r) + n.get.height(r) - 15;
                            c--;

                        )
                            for (e = (o = l[c]).members.length, i = n.get[p](o.element.firstChild); e--; ) (u[d] = h - i), n.css(o.members[e].bounds, u);
                    }),
                    (this._indicators.updateTriggerGroupPositions = function (t) {
                        for (
                            var i,
                                l,
                                c,
                                u,
                                d = t ? [t] : a.groups,
                                p = d.length,
                                h = o ? document.body : r,
                                f = o ? { top: 0, left: 0 } : n.get.offset(h, !0),
                                m = s ? n.get.width(r) - 15 : n.get.height(r) - 15,
                                g = s ? "width" : "height",
                                v = s ? "Y" : "X";
                            p--;

                        )
                            (l = (i = d[p]).element),
                                (c = i.triggerHook * e.info("size")),
                                (u = n.get[g](l.firstChild.firstChild) < c ? "translate" + v + "(-100%)" : ""),
                                n.css(l, { top: f.top + (s ? c : m - i.members[0].options.indent), left: f.left + (s ? m - i.members[0].options.indent : c) }),
                                n.css(l.firstChild.firstChild, { "-ms-transform": u, "-webkit-transform": u, transform: u });
                    }),
                    (this._indicators.updateTriggerGroupLabel = function (t) {
                        var e = "trigger" + (1 < t.members.length ? "" : " " + t.members[0].options.name),
                            i = t.element.firstChild.firstChild;
                        i.textContent !== e && ((i.textContent = e), s && a.updateBoundsPositions());
                    }),
                    (this.addScene = function (i) {
                        this._options.addIndicators && i instanceof t.Scene && i.controller() === e && i.addIndicators(), this.$super.addScene.apply(this, arguments);
                    }),
                    (this.destroy = function () {
                        r.removeEventListener("resize", c),
                            o || (window.removeEventListener("resize", c), window.removeEventListener("scroll", c)),
                            r.removeEventListener("resize", l),
                            r.removeEventListener("scroll", l),
                            this.$super.destroy.apply(this, arguments);
                    }),
                    e
                );
            });
        var o = function (t, e) {
                var i,
                    o,
                    a = this,
                    l = s.bounds(),
                    c = s.start(e.colorStart),
                    u = s.end(e.colorEnd),
                    d = e.parent && n.get.elements(e.parent)[0];
                (e.name = e.name || r),
                    (c.firstChild.textContent += " " + e.name),
                    (u.textContent += " " + e.name),
                    l.appendChild(c),
                    l.appendChild(u),
                    (a.options = e),
                    (a.bounds = l),
                    (a.triggerGroup = void 0),
                    (this.add = function () {
                        (o = t.controller()), (i = o.info("vertical"));
                        var e = o.info("isDocument");
                        d || (d = e ? document.body : o.info("container")),
                            e || "static" !== n.css(d, "position") || n.css(d, { position: "relative" }),
                            t.on("change.plugin_addIndicators", h),
                            t.on("shift.plugin_addIndicators", p),
                            v(),
                            m(),
                            setTimeout(function () {
                                o._indicators.updateBoundsPositions(a);
                            }, 0);
                    }),
                    (this.remove = function () {
                        if (a.triggerGroup) {
                            if ((t.off("change.plugin_addIndicators", h), t.off("shift.plugin_addIndicators", p), 1 < a.triggerGroup.members.length)) {
                                var e = a.triggerGroup;
                                e.members.splice(e.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(e), o._indicators.updateTriggerGroupPositions(e), (a.triggerGroup = void 0);
                            } else g();
                            f();
                        }
                    });
                var p = function () {
                        m();
                    },
                    h = function (t) {
                        "triggerHook" === t.what && v();
                    },
                    f = function () {
                        l.parentNode.removeChild(l);
                    },
                    m = function () {
                        var r;
                        l.parentNode !== d &&
                            ((r = o.info("vertical")),
                            n.css(c.firstChild, { "border-bottom-width": r ? 1 : 0, "border-right-width": r ? 0 : 1, bottom: r ? -1 : e.indent, right: r ? e.indent : -1, padding: r ? "0 8px" : "2px 4px" }),
                            n.css(u, { "border-top-width": r ? 1 : 0, "border-left-width": r ? 0 : 1, top: r ? "100%" : "", right: r ? e.indent : "", bottom: r ? "" : e.indent, left: r ? "" : "100%", padding: r ? "0 8px" : "2px 4px" }),
                            d.appendChild(l));
                        var s = {};
                        (s[i ? "top" : "left"] = t.triggerPosition()), (s[i ? "height" : "width"] = t.duration()), n.css(l, s), n.css(u, { display: 0 < t.duration() ? "" : "none" });
                    },
                    g = function () {
                        o._indicators.groups.splice(o._indicators.groups.indexOf(a.triggerGroup), 1), a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element), (a.triggerGroup = void 0);
                    },
                    v = function () {
                        var r = t.triggerHook();
                        if (!(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - r) < 1e-4)) {
                            for (var l, c = o._indicators.groups, u = c.length; u--; )
                                if (((l = c[u]), Math.abs(l.triggerHook - r) < 1e-4))
                                    return (
                                        a.triggerGroup &&
                                            (1 === a.triggerGroup.members.length
                                                ? g()
                                                : (a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(a.triggerGroup), o._indicators.updateTriggerGroupPositions(a.triggerGroup))),
                                        l.members.push(a),
                                        (a.triggerGroup = l),
                                        void o._indicators.updateTriggerGroupLabel(l)
                                    );
                            if (a.triggerGroup) {
                                if (1 === a.triggerGroup.members.length) return (a.triggerGroup.triggerHook = r), void o._indicators.updateTriggerGroupPositions(a.triggerGroup);
                                a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1),
                                    o._indicators.updateTriggerGroupLabel(a.triggerGroup),
                                    o._indicators.updateTriggerGroupPositions(a.triggerGroup),
                                    (a.triggerGroup = void 0);
                            }
                            !(function () {
                                var r = s.trigger(e.colorTrigger),
                                    l = {};
                                (l[i ? "right" : "bottom"] = 0),
                                    (l[i ? "border-top-width" : "border-left-width"] = 1),
                                    n.css(r.firstChild, l),
                                    n.css(r.firstChild.firstChild, { padding: i ? "0 8px 3px 8px" : "3px 4px" }),
                                    document.body.appendChild(r);
                                var c = { triggerHook: t.triggerHook(), element: r, members: [a] };
                                o._indicators.groups.push(c), (a.triggerGroup = c), o._indicators.updateTriggerGroupLabel(c), o._indicators.updateTriggerGroupPositions(c);
                            })();
                        }
                    };
            },
            s = {
                start: function (t) {
                    var e = document.createElement("div");
                    (e.textContent = "start"), n.css(e, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: t, "border-color": t });
                    var i = document.createElement("div");
                    return n.css(i, { position: "absolute", overflow: "visible", width: 0, height: 0 }), i.appendChild(e), i;
                },
                end: function (t) {
                    var e = document.createElement("div");
                    return (e.textContent = "end"), n.css(e, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: t, "border-color": t }), e;
                },
                bounds: function () {
                    var t = document.createElement("div");
                    return n.css(t, { position: "absolute", overflow: "visible", "white-space": "nowrap", "pointer-events": "none", "font-size": e }), (t.style.zIndex = i), t;
                },
                trigger: function (t) {
                    var r = document.createElement("div");
                    (r.textContent = "trigger"), n.css(r, { position: "relative" });
                    var o = document.createElement("div");
                    n.css(o, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: t, "border-color": t }), o.appendChild(r);
                    var s = document.createElement("div");
                    return n.css(s, { position: "fixed", overflow: "visible", "white-space": "nowrap", "pointer-events": "none", "font-size": e }), (s.style.zIndex = i), s.appendChild(o), s;
                },
            };
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function (i, n) {
            var r = "x" === n ? "Width" : "Height",
                o = "scroll" + r,
                s = "client" + r,
                a = document.body;
            return i === e || i === t || i === a ? Math.max(t[o], a[o]) - (e["inner" + r] || Math.max(t[s], a[s])) : i[o] - i["offset" + r];
        },
        n = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.4",
            init: function (t, n, r) {
                return (
                    (this._wdw = t === e),
                    (this._target = t),
                    (this._tween = r),
                    "object" != typeof n && (n = { y: n }),
                    (this.vars = n),
                    (this._autoKill = !1 !== n.autoKill),
                    (this.x = this.xPrev = this.getX()),
                    (this.y = this.yPrev = this.getY()),
                    null != n.x ? (this._addTween(this, "x", this.x, "max" === n.x ? i(t, "x") : n.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : (this.skipX = !0),
                    null != n.y ? (this._addTween(this, "y", this.y, "max" === n.y ? i(t, "y") : n.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : (this.skipY = !0),
                    !0
                );
            },
            set: function (t) {
                this._super.setRatio.call(this, t);
                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    o = r - this.yPrev,
                    s = n - this.xPrev;
                this._autoKill &&
                    (!this.skipX && (s > 7 || -7 > s) && i(this._target, "x") > n && (this.skipX = !0),
                    !this.skipY && (o > 7 || -7 > o) && i(this._target, "y") > r && (this.skipY = !0),
                    this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                    this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)),
                    (this.xPrev = this.x),
                    (this.yPrev = this.y);
            },
        }),
        r = n.prototype;
    (n.max = i),
        (r.getX = function () {
            return this._wdw ? (null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft) : this._target.scrollLeft;
        }),
        (r.getY = function () {
            return this._wdw ? (null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop) : this._target.scrollTop;
        }),
        (r._kill = function (t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t);
        });
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    jQuery.Velocity
        ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.")
        : ((function (t) {
              function e(t) {
                  var e = t.length,
                      n = i.type(t);
                  return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
              }
              if (!t.jQuery) {
                  var i = function (t, e) {
                      return new i.fn.init(t, e);
                  };
                  (i.isWindow = function (t) {
                      return null != t && t == t.window;
                  }),
                      (i.type = function (t) {
                          return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[s.call(t)] || "object" : typeof t;
                      }),
                      (i.isArray =
                          Array.isArray ||
                          function (t) {
                              return "array" === i.type(t);
                          }),
                      (i.isPlainObject = function (t) {
                          var e;
                          if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                          try {
                              if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                          } catch (t) {
                              return !1;
                          }
                          for (e in t);
                          return void 0 === e || o.call(t, e);
                      }),
                      (i.each = function (t, i, n) {
                          var r = 0,
                              o = t.length,
                              s = e(t);
                          if (n) {
                              if (s) for (; o > r && !1 !== i.apply(t[r], n); r++);
                              else for (r in t) if (!1 === i.apply(t[r], n)) break;
                          } else if (s) for (; o > r && !1 !== i.call(t[r], r, t[r]); r++);
                          else for (r in t) if (!1 === i.call(t[r], r, t[r])) break;
                          return t;
                      }),
                      (i.data = function (t, e, r) {
                          if (void 0 === r) {
                              var o = t[i.expando],
                                  s = o && n[o];
                              if (void 0 === e) return s;
                              if (s && e in s) return s[e];
                          } else if (void 0 !== e) {
                              var o = t[i.expando] || (t[i.expando] = ++i.uuid);
                              return (n[o] = n[o] || {}), (n[o][e] = r), r;
                          }
                      }),
                      (i.removeData = function (t, e) {
                          var r = t[i.expando],
                              o = r && n[r];
                          o &&
                              i.each(e, function (t, e) {
                                  delete o[e];
                              });
                      }),
                      (i.extend = function () {
                          var t,
                              e,
                              n,
                              r,
                              o,
                              s,
                              a = arguments[0] || {},
                              l = 1,
                              c = arguments.length,
                              u = !1;
                          for ("boolean" == typeof a && ((u = a), (a = arguments[l] || {}), l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && ((a = this), l--); c > l; l++)
                              if (null != (o = arguments[l]))
                                  for (r in o)
                                      (t = a[r]),
                                          (n = o[r]),
                                          a !== n &&
                                              (u && n && (i.isPlainObject(n) || (e = i.isArray(n)))
                                                  ? (e ? ((e = !1), (s = t && i.isArray(t) ? t : [])) : (s = t && i.isPlainObject(t) ? t : {}), (a[r] = i.extend(u, s, n)))
                                                  : void 0 !== n && (a[r] = n));
                          return a;
                      }),
                      (i.queue = function (t, n, r) {
                          if (t) {
                              n = (n || "fx") + "queue";
                              var o = i.data(t, n);
                              return r
                                  ? (!o || i.isArray(r)
                                        ? (o = i.data(
                                              t,
                                              n,
                                              (function (t, i) {
                                                  var n = i || [];
                                                  return (
                                                      null != t &&
                                                          (e(Object(t))
                                                              ? (function (t, e) {
                                                                    for (var i = +e.length, n = 0, r = t.length; i > n; ) t[r++] = e[n++];
                                                                    if (i !== i) for (; void 0 !== e[n]; ) t[r++] = e[n++];
                                                                    t.length = r;
                                                                })(n, "string" == typeof t ? [t] : t)
                                                              : [].push.call(n, t)),
                                                      n
                                                  );
                                              })(r)
                                          ))
                                        : o.push(r),
                                    o)
                                  : o || [];
                          }
                      }),
                      (i.dequeue = function (t, e) {
                          i.each(t.nodeType ? [t] : t, function (t, n) {
                              e = e || "fx";
                              var r = i.queue(n, e),
                                  o = r.shift();
                              "inprogress" === o && (o = r.shift()),
                                  o &&
                                      ("fx" === e && r.unshift("inprogress"),
                                      o.call(n, function () {
                                          i.dequeue(n, e);
                                      }));
                          });
                      }),
                      (i.fn = i.prototype = {
                          init: function (t) {
                              if (t.nodeType) return (this[0] = t), this;
                              throw new Error("Not a DOM node.");
                          },
                          offset: function () {
                              var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                              return { top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
                          },
                          position: function () {
                              function t() {
                                  for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position; ) t = t.offsetParent;
                                  return t || document;
                              }
                              var e = this[0],
                                  t = t.apply(e),
                                  n = this.offset(),
                                  r = /^(?:body|html)$/i.test(t.nodeName) ? { top: 0, left: 0 } : i(t).offset();
                              return (
                                  (n.top -= parseFloat(e.style.marginTop) || 0),
                                  (n.left -= parseFloat(e.style.marginLeft) || 0),
                                  t.style && ((r.top += parseFloat(t.style.borderTopWidth) || 0), (r.left += parseFloat(t.style.borderLeftWidth) || 0)),
                                  { top: n.top - r.top, left: n.left - r.left }
                              );
                          },
                      });
                  var n = {};
                  (i.expando = "velocity" + new Date().getTime()), (i.uuid = 0);
                  for (var r = {}, o = r.hasOwnProperty, s = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) r["[object " + a[l] + "]"] = a[l].toLowerCase();
                  (i.fn.init.prototype = i.fn), (t.Velocity = { Utilities: i });
              }
          })(window),
          (function (t) {
              "object" == typeof module && "object" == typeof module.exports ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : t();
          })(function () {
              return (function (t, e, i, n) {
                  function r(t) {
                      for (var e = -1, i = t ? t.length : 0, n = []; ++e < i; ) {
                          var r = t[e];
                          r && n.push(r);
                      }
                      return n;
                  }
                  function o(t) {
                      return m.isWrapped(t) ? (t = [].slice.call(t)) : m.isNode(t) && (t = [t]), t;
                  }
                  function s(t) {
                      var e = p.data(t, "velocity");
                      return null === e ? n : e;
                  }
                  function a(t) {
                      return function (e) {
                          return Math.round(e * t) * (1 / t);
                      };
                  }
                  function l(t, i, n, r) {
                      function o(t, e) {
                          return 1 - 3 * e + 3 * t;
                      }
                      function s(t, e) {
                          return 3 * e - 6 * t;
                      }
                      function a(t) {
                          return 3 * t;
                      }
                      function l(t, e, i) {
                          return ((o(e, i) * t + s(e, i)) * t + a(e)) * t;
                      }
                      function c(t, e, i) {
                          return 3 * o(e, i) * t * t + 2 * s(e, i) * t + a(e);
                      }
                      function u(e, i) {
                          for (var r = 0; m > r; ++r) {
                              var o = c(i, t, n);
                              if (0 === o) return i;
                              i -= (l(i, t, n) - e) / o;
                          }
                          return i;
                      }
                      function d() {
                          for (var e = 0; _ > e; ++e) T[e] = l(e * b, t, n);
                      }
                      function p(e, i, r) {
                          var o,
                              s,
                              a = 0;
                          do {
                              (s = i + (r - i) / 2), (o = l(s, t, n) - e), o > 0 ? (r = s) : (i = s);
                          } while (Math.abs(o) > v && ++a < y);
                          return s;
                      }
                      function h(e) {
                          for (var i = 0, r = 1, o = _ - 1; r != o && T[r] <= e; ++r) i += b;
                          --r;
                          var s = (e - T[r]) / (T[r + 1] - T[r]),
                              a = i + s * b,
                              l = c(a, t, n);
                          return l >= g ? u(e, a) : 0 == l ? a : p(e, i, i + b);
                      }
                      function f() {
                          (S = !0), (t != i || n != r) && d();
                      }
                      var m = 4,
                          g = 0.001,
                          v = 1e-7,
                          y = 10,
                          _ = 11,
                          b = 1 / (_ - 1),
                          w = "Float32Array" in e;
                      if (4 !== arguments.length) return !1;
                      for (var x = 0; 4 > x; ++x) if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
                      (t = Math.min(t, 1)), (n = Math.min(n, 1)), (t = Math.max(t, 0)), (n = Math.max(n, 0));
                      var T = w ? new Float32Array(_) : new Array(_),
                          S = !1,
                          C = function (e) {
                              return S || f(), t === i && n === r ? e : 0 === e ? 0 : 1 === e ? 1 : l(h(e), i, r);
                          };
                      C.getControlPoints = function () {
                          return [
                              { x: t, y: i },
                              { x: n, y: r },
                          ];
                      };
                      var k = "generateBezier(" + [t, i, n, r] + ")";
                      return (
                          (C.toString = function () {
                              return k;
                          }),
                          C
                      );
                  }
                  function c(t, e) {
                      var i = t;
                      return (
                          m.isString(t)
                              ? _.Easings[t] || (i = !1)
                              : (i = m.isArray(t) && 1 === t.length ? a.apply(null, t) : m.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!m.isArray(t) || 4 !== t.length) && l.apply(null, t)),
                          !1 === i && (i = _.Easings[_.defaults.easing] ? _.defaults.easing : y),
                          i
                      );
                  }
                  function u(t) {
                      if (t) {
                          var e = new Date().getTime(),
                              i = _.State.calls.length;
                          i > 1e4 && (_.State.calls = r(_.State.calls));
                          for (var o = 0; i > o; o++)
                              if (_.State.calls[o]) {
                                  var a = _.State.calls[o],
                                      l = a[0],
                                      c = a[2],
                                      h = a[3],
                                      f = !!h,
                                      g = null;
                                  h || (h = _.State.calls[o][3] = e - 16);
                                  for (var v = Math.min((e - h) / c.duration, 1), y = 0, b = l.length; b > y; y++) {
                                      var x = l[y],
                                          S = x.element;
                                      if (s(S)) {
                                          var C = !1;
                                          if (c.display !== n && null !== c.display && "none" !== c.display) {
                                              if ("flex" === c.display) {
                                                  var k = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                                  p.each(k, function (t, e) {
                                                      w.setPropertyValue(S, "display", e);
                                                  });
                                              }
                                              w.setPropertyValue(S, "display", c.display);
                                          }
                                          c.visibility !== n && "hidden" !== c.visibility && w.setPropertyValue(S, "visibility", c.visibility);
                                          for (var P in x)
                                              if ("element" !== P) {
                                                  var E,
                                                      $ = x[P],
                                                      A = m.isString($.easing) ? _.Easings[$.easing] : $.easing;
                                                  if (1 === v) E = $.endValue;
                                                  else {
                                                      var O = $.endValue - $.startValue;
                                                      if (((E = $.startValue + O * A(v, c, O)), !f && E === $.currentValue)) continue;
                                                  }
                                                  if ((($.currentValue = E), "tween" === P)) g = E;
                                                  else {
                                                      if (w.Hooks.registered[P]) {
                                                          var M = w.Hooks.getRoot(P),
                                                              D = s(S).rootPropertyValueCache[M];
                                                          D && ($.rootPropertyValue = D);
                                                      }
                                                      var N = w.setPropertyValue(S, P, $.currentValue + (0 === parseFloat(E) ? "" : $.unitType), $.rootPropertyValue, $.scrollData);
                                                      w.Hooks.registered[P] && (s(S).rootPropertyValueCache[M] = w.Normalizations.registered[M] ? w.Normalizations.registered[M]("extract", null, N[1]) : N[1]),
                                                          "transform" === N[0] && (C = !0);
                                                  }
                                              }
                                          c.mobileHA && s(S).transformCache.translate3d === n && ((s(S).transformCache.translate3d = "(0px, 0px, 0px)"), (C = !0)), C && w.flushTransformCache(S);
                                      }
                                  }
                                  c.display !== n && "none" !== c.display && (_.State.calls[o][2].display = !1),
                                      c.visibility !== n && "hidden" !== c.visibility && (_.State.calls[o][2].visibility = !1),
                                      c.progress && c.progress.call(a[1], a[1], v, Math.max(0, h + c.duration - e), h, g),
                                      1 === v && d(o);
                              }
                      }
                      _.State.isTicking && T(u);
                  }
                  function d(t, e) {
                      if (!_.State.calls[t]) return !1;
                      for (var i = _.State.calls[t][0], r = _.State.calls[t][1], o = _.State.calls[t][2], a = _.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                          var d = i[c].element;
                          if (
                              (e || o.loop || ("none" === o.display && w.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(d, "visibility", o.visibility)),
                              !0 !== o.loop && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && s(d))
                          ) {
                              (s(d).isAnimating = !1), (s(d).rootPropertyValueCache = {});
                              var h = !1;
                              p.each(w.Lists.transforms3D, function (t, e) {
                                  var i = /^scale/.test(e) ? 1 : 0,
                                      r = s(d).transformCache[e];
                                  s(d).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && ((h = !0), delete s(d).transformCache[e]);
                              }),
                                  o.mobileHA && ((h = !0), delete s(d).transformCache.translate3d),
                                  h && w.flushTransformCache(d),
                                  w.Values.removeClass(d, "velocity-animating");
                          }
                          if (!e && o.complete && !o.loop && c === u - 1)
                              try {
                                  o.complete.call(r, r);
                              } catch (t) {
                                  setTimeout(function () {
                                      throw t;
                                  }, 1);
                              }
                          a && !0 !== o.loop && a(r),
                              s(d) &&
                                  !0 === o.loop &&
                                  !e &&
                                  (p.each(s(d).tweensContainer, function (t, e) {
                                      /^rotate/.test(t) && 360 === parseFloat(e.endValue) && ((e.endValue = 0), (e.startValue = 360)),
                                          /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && ((e.endValue = 0), (e.startValue = 100));
                                  }),
                                  _(d, "reverse", { loop: !0, delay: o.delay })),
                              !1 !== o.queue && p.dequeue(d, o.queue);
                      }
                      _.State.calls[t] = !1;
                      for (var f = 0, m = _.State.calls.length; m > f; f++)
                          if (!1 !== _.State.calls[f]) {
                              l = !0;
                              break;
                          }
                      !1 === l && ((_.State.isTicking = !1), delete _.State.calls, (_.State.calls = []));
                  }
                  var p,
                      h = (function () {
                          if (i.documentMode) return i.documentMode;
                          for (var t = 7; t > 4; t--) {
                              var e = i.createElement("div");
                              if (((e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e"), e.getElementsByTagName("span").length)) return (e = null), t;
                          }
                          return n;
                      })(),
                      f = (function () {
                          var t = 0;
                          return (
                              e.webkitRequestAnimationFrame ||
                              e.mozRequestAnimationFrame ||
                              function (e) {
                                  var i,
                                      n = new Date().getTime();
                                  return (
                                      (i = Math.max(0, 16 - (n - t))),
                                      (t = n + i),
                                      setTimeout(function () {
                                          e(n + i);
                                      }, i)
                                  );
                              }
                          );
                      })(),
                      m = {
                          isString: function (t) {
                              return "string" == typeof t;
                          },
                          isArray:
                              Array.isArray ||
                              function (t) {
                                  return "[object Array]" === Object.prototype.toString.call(t);
                              },
                          isFunction: function (t) {
                              return "[object Function]" === Object.prototype.toString.call(t);
                          },
                          isNode: function (t) {
                              return t && t.nodeType;
                          },
                          isNodeList: function (t) {
                              return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || ("object" == typeof t[0] && t[0].nodeType > 0));
                          },
                          isWrapped: function (t) {
                              return t && (t.jquery || (e.Zepto && e.Zepto.zepto.isZ(t)));
                          },
                          isSVG: function (t) {
                              return e.SVGElement && t instanceof e.SVGElement;
                          },
                          isEmptyObject: function (t) {
                              for (var e in t) return !1;
                              return !0;
                          },
                      },
                      g = !1;
                  if ((t.fn && t.fn.jquery ? ((p = t), (g = !0)) : (p = e.Velocity.Utilities), 8 >= h && !g)) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                  if (7 >= h) return void (jQuery.fn.velocity = jQuery.fn.animate);
                  var v = 400,
                      y = "swing",
                      _ = {
                          State: {
                              isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                              isAndroid: /Android/i.test(navigator.userAgent),
                              isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                              isChrome: e.chrome,
                              isFirefox: /Firefox/i.test(navigator.userAgent),
                              prefixElement: i.createElement("div"),
                              prefixMatches: {},
                              scrollAnchor: null,
                              scrollPropertyLeft: null,
                              scrollPropertyTop: null,
                              isTicking: !1,
                              calls: [],
                          },
                          CSS: {},
                          Utilities: p,
                          Redirects: {},
                          Easings: {},
                          Promise: e.Promise,
                          defaults: { queue: "", duration: v, easing: y, begin: n, complete: n, progress: n, display: n, visibility: n, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 },
                          init: function (t) {
                              p.data(t, "velocity", { isSVG: m.isSVG(t), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                          },
                          hook: null,
                          mock: !1,
                          version: { major: 1, minor: 2, patch: 2 },
                          debug: !1,
                      };
                  e.pageYOffset !== n
                      ? ((_.State.scrollAnchor = e), (_.State.scrollPropertyLeft = "pageXOffset"), (_.State.scrollPropertyTop = "pageYOffset"))
                      : ((_.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body), (_.State.scrollPropertyLeft = "scrollLeft"), (_.State.scrollPropertyTop = "scrollTop"));
                  var b = (function () {
                      function t(t) {
                          return -t.tension * t.x - t.friction * t.v;
                      }
                      function e(e, i, n) {
                          var r = { x: e.x + n.dx * i, v: e.v + n.dv * i, tension: e.tension, friction: e.friction };
                          return { dx: r.v, dv: t(r) };
                      }
                      function i(i, n) {
                          var r = { dx: i.v, dv: t(i) },
                              o = e(i, 0.5 * n, r),
                              s = e(i, 0.5 * n, o),
                              a = e(i, n, s),
                              l = (1 / 6) * (r.dx + 2 * (o.dx + s.dx) + a.dx),
                              c = (1 / 6) * (r.dv + 2 * (o.dv + s.dv) + a.dv);
                          return (i.x = i.x + l * n), (i.v = i.v + c * n), i;
                      }
                      return function t(e, n, r) {
                          var o,
                              s,
                              a,
                              l = { x: -1, v: 0, tension: null, friction: null },
                              c = [0],
                              u = 0;
                          for (
                              e = parseFloat(e) || 500, n = parseFloat(n) || 20, r = r || null, l.tension = e, l.friction = n, o = null !== r, o ? ((u = t(e, n)), (s = (u / r) * 0.016)) : (s = 0.016);
                              (a = i(a || l, s)), c.push(1 + a.x), (u += 16), Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4;

                          );
                          return o
                              ? function (t) {
                                    return c[(t * (c.length - 1)) | 0];
                                }
                              : u;
                      };
                  })();
                  (_.Easings = {
                      linear: function (t) {
                          return t;
                      },
                      swing: function (t) {
                          return 0.5 - Math.cos(t * Math.PI) / 2;
                      },
                      spring: function (t) {
                          return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t);
                      },
                  }),
                      p.each(
                          [
                              ["ease", [0.25, 0.1, 0.25, 1]],
                              ["ease-in", [0.42, 0, 1, 1]],
                              ["ease-out", [0, 0, 0.58, 1]],
                              ["ease-in-out", [0.42, 0, 0.58, 1]],
                              ["easeInSine", [0.47, 0, 0.745, 0.715]],
                              ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                              ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                              ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                              ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                              ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                              ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                              ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                              ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                              ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                              ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                              ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                              ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                              ["easeOutQuint", [0.23, 1, 0.32, 1]],
                              ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                              ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                              ["easeOutExpo", [0.19, 1, 0.22, 1]],
                              ["easeInOutExpo", [1, 0, 0, 1]],
                              ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                              ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                              ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                          ],
                          function (t, e) {
                              _.Easings[e[0]] = l.apply(null, e[1]);
                          }
                      );
                  var w = (_.CSS = {
                      RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi },
                      Lists: {
                          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                      },
                      Hooks: {
                          templates: {
                              textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                              boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                              clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                              backgroundPosition: ["X Y", "0% 0%"],
                              transformOrigin: ["X Y Z", "50% 50% 0px"],
                              perspectiveOrigin: ["X Y", "50% 50%"],
                          },
                          registered: {},
                          register: function () {
                              for (var t = 0; t < w.Lists.colors.length; t++) {
                                  var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                  w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e];
                              }
                              var i, n, r;
                              if (h)
                                  for (i in w.Hooks.templates) {
                                      (n = w.Hooks.templates[i]), (r = n[0].split(" "));
                                      var o = n[1].match(w.RegEx.valueSplit);
                                      "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), (w.Hooks.templates[i] = [r.join(" "), o.join(" ")]));
                                  }
                              for (i in w.Hooks.templates) {
                                  (n = w.Hooks.templates[i]), (r = n[0].split(" "));
                                  for (var t in r) {
                                      var s = i + r[t],
                                          a = t;
                                      w.Hooks.registered[s] = [i, a];
                                  }
                              }
                          },
                          getRoot: function (t) {
                              var e = w.Hooks.registered[t];
                              return e ? e[0] : t;
                          },
                          cleanRootPropertyValue: function (t, e) {
                              return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e;
                          },
                          extractValue: function (t, e) {
                              var i = w.Hooks.registered[t];
                              if (i) {
                                  var n = i[0],
                                      r = i[1];
                                  return (e = w.Hooks.cleanRootPropertyValue(n, e)), e.toString().match(w.RegEx.valueSplit)[r];
                              }
                              return e;
                          },
                          injectValue: function (t, e, i) {
                              var n = w.Hooks.registered[t];
                              if (n) {
                                  var r,
                                      o = n[0],
                                      s = n[1];
                                  return (i = w.Hooks.cleanRootPropertyValue(o, i)), (r = i.toString().match(w.RegEx.valueSplit)), (r[s] = e), r.join(" ");
                              }
                              return i;
                          },
                      },
                      Normalizations: {
                          registered: {
                              clip: function (t, e, i) {
                                  switch (t) {
                                      case "name":
                                          return "clip";
                                      case "extract":
                                          var n;
                                          return w.RegEx.wrappedValueAlreadyExtracted.test(i) ? (n = i) : ((n = i.toString().match(w.RegEx.valueUnwrap)), (n = n ? n[1].replace(/,(\s+)?/g, " ") : i)), n;
                                      case "inject":
                                          return "rect(" + i + ")";
                                  }
                              },
                              blur: function (t, e, i) {
                                  switch (t) {
                                      case "name":
                                          return _.State.isFirefox ? "filter" : "-webkit-filter";
                                      case "extract":
                                          var n = parseFloat(i);
                                          if (!n && 0 !== n) {
                                              var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                              n = r ? r[1] : 0;
                                          }
                                          return n;
                                      case "inject":
                                          return parseFloat(i) ? "blur(" + i + ")" : "none";
                                  }
                              },
                              opacity: function (t, e, i) {
                                  if (8 >= h)
                                      switch (t) {
                                          case "name":
                                              return "filter";
                                          case "extract":
                                              var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                              return (i = n ? n[1] / 100 : 1);
                                          case "inject":
                                              return (e.style.zoom = 1), parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")";
                                      }
                                  else
                                      switch (t) {
                                          case "name":
                                              return "opacity";
                                          case "extract":
                                          case "inject":
                                              return i;
                                      }
                              },
                          },
                          register: function () {
                              9 >= h || _.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                              for (var t = 0; t < w.Lists.transformsBase.length; t++)
                                  !(function () {
                                      var e = w.Lists.transformsBase[t];
                                      w.Normalizations.registered[e] = function (t, i, r) {
                                          switch (t) {
                                              case "name":
                                                  return "transform";
                                              case "extract":
                                                  return s(i) === n || s(i).transformCache[e] === n ? (/^scale/i.test(e) ? 1 : 0) : s(i).transformCache[e].replace(/[()]/g, "");
                                              case "inject":
                                                  var o = !1;
                                                  switch (e.substr(0, e.length - 1)) {
                                                      case "translate":
                                                          o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                          break;
                                                      case "scal":
                                                      case "scale":
                                                          _.State.isAndroid && s(i).transformCache[e] === n && 1 > r && (r = 1), (o = !/(\d)$/i.test(r));
                                                          break;
                                                      case "skew":
                                                          o = !/(deg|\d)$/i.test(r);
                                                          break;
                                                      case "rotate":
                                                          o = !/(deg|\d)$/i.test(r);
                                                  }
                                                  return o || (s(i).transformCache[e] = "(" + r + ")"), s(i).transformCache[e];
                                          }
                                      };
                                  })();
                              for (var t = 0; t < w.Lists.colors.length; t++)
                                  !(function () {
                                      var e = w.Lists.colors[t];
                                      w.Normalizations.registered[e] = function (t, i, r) {
                                          switch (t) {
                                              case "name":
                                                  return e;
                                              case "extract":
                                                  var o;
                                                  if (w.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                                  else {
                                                      var s,
                                                          a = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };
                                                      /^[A-z]+$/i.test(r) ? (s = a[r] !== n ? a[r] : a.black) : w.RegEx.isHex.test(r) ? (s = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")") : /^rgba?\(/i.test(r) || (s = a.black),
                                                          (o = (s || r)
                                                              .toString()
                                                              .match(w.RegEx.valueUnwrap)[1]
                                                              .replace(/,(\s+)?/g, " "));
                                                  }
                                                  return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;
                                              case "inject":
                                                  return (
                                                      8 >= h ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"),
                                                      (8 >= h ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                                  );
                                          }
                                      };
                                  })();
                          },
                      },
                      Names: {
                          camelCase: function (t) {
                              return t.replace(/-(\w)/g, function (t, e) {
                                  return e.toUpperCase();
                              });
                          },
                          SVGAttribute: function (t) {
                              var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                              return (h || (_.State.isAndroid && !_.State.isChrome)) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t);
                          },
                          prefixCheck: function (t) {
                              if (_.State.prefixMatches[t]) return [_.State.prefixMatches[t], !0];
                              for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                                  var r;
                                  if (
                                      ((r =
                                          0 === i
                                              ? t
                                              : e[i] +
                                                t.replace(/^\w/, function (t) {
                                                    return t.toUpperCase();
                                                })),
                                      m.isString(_.State.prefixElement.style[r]))
                                  )
                                      return (_.State.prefixMatches[t] = r), [r, !0];
                              }
                              return [t, !1];
                          },
                      },
                      Values: {
                          hexToRgb: function (t) {
                              var e,
                                  i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                  n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                              return (
                                  (t = t.replace(i, function (t, e, i, n) {
                                      return e + e + i + i + n + n;
                                  })),
                                  (e = n.exec(t)),
                                  e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                              );
                          },
                          isCSSNullValue: function (t) {
                              return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t);
                          },
                          getUnitType: function (t) {
                              return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px";
                          },
                          getDisplayType: function (t) {
                              var e = t && t.tagName.toString().toLowerCase();
                              return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)
                                  ? "inline"
                                  : /^(li)$/i.test(e)
                                  ? "list-item"
                                  : /^(tr)$/i.test(e)
                                  ? "table-row"
                                  : /^(table)$/i.test(e)
                                  ? "table"
                                  : /^(tbody)$/i.test(e)
                                  ? "table-row-group"
                                  : "block";
                          },
                          addClass: function (t, e) {
                              t.classList ? t.classList.add(e) : (t.className += (t.className.length ? " " : "") + e);
                          },
                          removeClass: function (t, e) {
                              t.classList ? t.classList.remove(e) : (t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " "));
                          },
                      },
                      getPropertyValue: function (t, i, r, o) {
                          function a(t, i) {
                              function r() {
                                  c && w.setPropertyValue(t, "display", "none");
                              }
                              var l = 0;
                              if (8 >= h) l = p.css(t, i);
                              else {
                                  var c = !1;
                                  if ((/^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && ((c = !0), w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !o)) {
                                      if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                          var u =
                                              t.offsetHeight -
                                              (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) -
                                              (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) -
                                              (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) -
                                              (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                          return r(), u;
                                      }
                                      if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                          var d =
                                              t.offsetWidth -
                                              (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) -
                                              (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) -
                                              (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) -
                                              (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                          return r(), d;
                                      }
                                  }
                                  var f;
                                  (f = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : (s(t).computedStyle = e.getComputedStyle(t, null))),
                                      "borderColor" === i && (i = "borderTopColor"),
                                      (l = 9 === h && "filter" === i ? f.getPropertyValue(i) : f[i]),
                                      ("" === l || null === l) && (l = t.style[i]),
                                      r();
                              }
                              if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                  var m = a(t, "position");
                                  ("fixed" === m || ("absolute" === m && /top|left/i.test(i))) && (l = p(t).position()[i] + "px");
                              }
                              return l;
                          }
                          var l;
                          if (w.Hooks.registered[i]) {
                              var c = i,
                                  u = w.Hooks.getRoot(c);
                              r === n && (r = w.getPropertyValue(t, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (r = w.Normalizations.registered[u]("extract", t, r)), (l = w.Hooks.extractValue(c, r));
                          } else if (w.Normalizations.registered[i]) {
                              var d, f;
                              (d = w.Normalizations.registered[i]("name", t)),
                                  "transform" !== d && ((f = a(t, w.Names.prefixCheck(d)[0])), w.Values.isCSSNullValue(f) && w.Hooks.templates[i] && (f = w.Hooks.templates[i][1])),
                                  (l = w.Normalizations.registered[i]("extract", t, f));
                          }
                          if (!/^[\d-]/.test(l))
                              if (s(t) && s(t).isSVG && w.Names.SVGAttribute(i))
                                  if (/^(height|width)$/i.test(i))
                                      try {
                                          l = t.getBBox()[i];
                                      } catch (t) {
                                          l = 0;
                                      }
                                  else l = t.getAttribute(i);
                              else l = a(t, w.Names.prefixCheck(i)[0]);
                          return w.Values.isCSSNullValue(l) && (l = 0), _.debug >= 2 && console.log("Get " + i + ": " + l), l;
                      },
                      setPropertyValue: function (t, i, n, r, o) {
                          var a = i;
                          if ("scroll" === i) o.container ? (o.container["scroll" + o.direction] = n) : "Left" === o.direction ? e.scrollTo(n, o.alternateValue) : e.scrollTo(o.alternateValue, n);
                          else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n), (a = "transform"), (n = s(t).transformCache[i]);
                          else {
                              if (w.Hooks.registered[i]) {
                                  var l = i,
                                      c = w.Hooks.getRoot(i);
                                  (r = r || w.getPropertyValue(t, c)), (n = w.Hooks.injectValue(l, n, r)), (i = c);
                              }
                              if ((w.Normalizations.registered[i] && ((n = w.Normalizations.registered[i]("inject", t, n)), (i = w.Normalizations.registered[i]("name", t))), (a = w.Names.prefixCheck(i)[0]), 8 >= h))
                                  try {
                                      t.style[a] = n;
                                  } catch (t) {
                                      _.debug && console.log("Browser does not support [" + n + "] for [" + a + "]");
                                  }
                              else s(t) && s(t).isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : (t.style[a] = n);
                              _.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n);
                          }
                          return [a, n];
                      },
                      flushTransformCache: function (t) {
                          function e(e) {
                              return parseFloat(w.getPropertyValue(t, e));
                          }
                          var i = "";
                          if ((h || (_.State.isAndroid && !_.State.isChrome)) && s(t).isSVG) {
                              var n = {
                                  translate: [e("translateX"), e("translateY")],
                                  skewX: [e("skewX")],
                                  skewY: [e("skewY")],
                                  scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                  rotate: [e("rotateZ"), 0, 0],
                              };
                              p.each(s(t).transformCache, function (t) {
                                  /^translate/i.test(t) ? (t = "translate") : /^scale/i.test(t) ? (t = "scale") : /^rotate/i.test(t) && (t = "rotate"), n[t] && ((i += t + "(" + n[t].join(" ") + ") "), delete n[t]);
                              });
                          } else {
                              var r, o;
                              p.each(s(t).transformCache, function (e) {
                                  return (r = s(t).transformCache[e]), "transformPerspective" === e ? ((o = r), !0) : (9 === h && "rotateZ" === e && (e = "rotate"), void (i += e + r + " "));
                              }),
                                  o && (i = "perspective" + o + " " + i);
                          }
                          w.setPropertyValue(t, "transform", i);
                      },
                  });
                  w.Hooks.register(),
                      w.Normalizations.register(),
                      (_.hook = function (t, e, i) {
                          var r = n;
                          return (
                              (t = o(t)),
                              p.each(t, function (t, o) {
                                  if ((s(o) === n && _.init(o), i === n)) r === n && (r = _.CSS.getPropertyValue(o, e));
                                  else {
                                      var a = _.CSS.setPropertyValue(o, e, i);
                                      "transform" === a[0] && _.CSS.flushTransformCache(o), (r = a);
                                  }
                              }),
                              r
                          );
                      });
                  var x = function () {
                      function t() {
                          return a ? P.promise || null : l;
                      }
                      function r() {
                          function t(t) {
                              function d(t, e) {
                                  var i = n,
                                      r = n,
                                      s = n;
                                  return (
                                      m.isArray(t)
                                          ? ((i = t[0]),
                                            (!m.isArray(t[1]) && /^[\d-]/.test(t[1])) || m.isFunction(t[1]) || w.RegEx.isHex.test(t[1])
                                                ? (s = t[1])
                                                : ((m.isString(t[1]) && !w.RegEx.isHex.test(t[1])) || m.isArray(t[1])) && ((r = e ? t[1] : c(t[1], a.duration)), t[2] !== n && (s = t[2])))
                                          : (i = t),
                                      e || (r = r || a.easing),
                                      m.isFunction(i) && (i = i.call(o, S, T)),
                                      m.isFunction(s) && (s = s.call(o, S, T)),
                                      [i || 0, r, s]
                                  );
                              }
                              function h(t, e) {
                                  var i, n;
                                  return (
                                      (n = (e || "0")
                                          .toString()
                                          .toLowerCase()
                                          .replace(/[%A-z]+$/, function (t) {
                                              return (i = t), "";
                                          })),
                                      i || (i = w.Values.getUnitType(t)),
                                      [n, i]
                                  );
                              }
                              if (a.begin && 0 === S)
                                  try {
                                      a.begin.call(f, f);
                                  } catch (t) {
                                      setTimeout(function () {
                                          throw t;
                                      }, 1);
                                  }
                              if ("scroll" === E) {
                                  var v,
                                      b,
                                      x,
                                      C = /^x$/i.test(a.axis) ? "Left" : "Top",
                                      k = parseFloat(a.offset) || 0;
                                  a.container
                                      ? m.isWrapped(a.container) || m.isNode(a.container)
                                          ? ((a.container = a.container[0] || a.container), (v = a.container["scroll" + C]), (x = v + p(o).position()[C.toLowerCase()] + k))
                                          : (a.container = null)
                                      : ((v = _.State.scrollAnchor[_.State["scrollProperty" + C]]), (b = _.State.scrollAnchor[_.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]]), (x = p(o).offset()[C.toLowerCase()] + k)),
                                      (l = {
                                          scroll: { rootPropertyValue: !1, startValue: v, currentValue: v, endValue: x, unitType: "", easing: a.easing, scrollData: { container: a.container, direction: C, alternateValue: b } },
                                          element: o,
                                      }),
                                      _.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
                              } else if ("reverse" === E) {
                                  if (!s(o).tweensContainer) return void p.dequeue(o, a.queue);
                                  "none" === s(o).opts.display && (s(o).opts.display = "auto"),
                                      "hidden" === s(o).opts.visibility && (s(o).opts.visibility = "visible"),
                                      (s(o).opts.loop = !1),
                                      (s(o).opts.begin = null),
                                      (s(o).opts.complete = null),
                                      y.easing || delete a.easing,
                                      y.duration || delete a.duration,
                                      (a = p.extend({}, s(o).opts, a));
                                  var $ = p.extend(!0, {}, s(o).tweensContainer);
                                  for (var A in $)
                                      if ("element" !== A) {
                                          var O = $[A].startValue;
                                          ($[A].startValue = $[A].currentValue = $[A].endValue),
                                              ($[A].endValue = O),
                                              m.isEmptyObject(y) || ($[A].easing = a.easing),
                                              _.debug && console.log("reverse tweensContainer (" + A + "): " + JSON.stringify($[A]), o);
                                      }
                                  l = $;
                              } else if ("start" === E) {
                                  var $;
                                  s(o).tweensContainer && !0 === s(o).isAnimating && ($ = s(o).tweensContainer),
                                      p.each(g, function (t, e) {
                                          if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                              var i = d(e, !0),
                                                  r = i[0],
                                                  o = i[1],
                                                  s = i[2];
                                              if (w.RegEx.isHex.test(r)) {
                                                  for (var a = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(r), c = s ? w.Values.hexToRgb(s) : n, u = 0; u < a.length; u++) {
                                                      var p = [l[u]];
                                                      o && p.push(o), c !== n && p.push(c[u]), (g[t + a[u]] = p);
                                                  }
                                                  delete g[t];
                                              }
                                          }
                                      });
                                  for (var M in g) {
                                      var D = d(g[M]),
                                          R = D[0],
                                          j = D[1],
                                          I = D[2];
                                      M = w.Names.camelCase(M);
                                      var z = w.Hooks.getRoot(M),
                                          F = !1;
                                      if (s(o).isSVG || "tween" === z || !1 !== w.Names.prefixCheck(z)[1] || w.Normalizations.registered[z] !== n) {
                                          ((a.display !== n && null !== a.display && "none" !== a.display) || (a.visibility !== n && "hidden" !== a.visibility)) && /opacity|filter/.test(M) && !I && 0 !== R && (I = 0),
                                              a._cacheValues && $ && $[M]
                                                  ? (I === n && (I = $[M].endValue + $[M].unitType), (F = s(o).rootPropertyValueCache[z]))
                                                  : w.Hooks.registered[M]
                                                  ? I === n
                                                      ? ((F = w.getPropertyValue(o, z)), (I = w.getPropertyValue(o, M, F)))
                                                      : (F = w.Hooks.templates[z][1])
                                                  : I === n && (I = w.getPropertyValue(o, M));
                                          var H,
                                              q,
                                              B,
                                              W = !1;
                                          if (
                                              ((H = h(M, I)),
                                              (I = H[0]),
                                              (B = H[1]),
                                              (H = h(M, R)),
                                              (R = H[0].replace(/^([+-\/*])=/, function (t, e) {
                                                  return (W = e), "";
                                              })),
                                              (q = H[1]),
                                              (I = parseFloat(I) || 0),
                                              (R = parseFloat(R) || 0),
                                              "%" === q && (/^(fontSize|lineHeight)$/.test(M) ? ((R /= 100), (q = "em")) : /^scale/.test(M) ? ((R /= 100), (q = "")) : /(Red|Green|Blue)$/i.test(M) && ((R = (R / 100) * 255), (q = ""))),
                                              /[\/*]/.test(W))
                                          )
                                              q = B;
                                          else if (B !== q && 0 !== I)
                                              if (0 === R) q = B;
                                              else {
                                                  r =
                                                      r ||
                                                      (function () {
                                                          var t = { myParent: o.parentNode || i.body, position: w.getPropertyValue(o, "position"), fontSize: w.getPropertyValue(o, "fontSize") },
                                                              n = t.position === N.lastPosition && t.myParent === N.lastParent,
                                                              r = t.fontSize === N.lastFontSize;
                                                          (N.lastParent = t.myParent), (N.lastPosition = t.position), (N.lastFontSize = t.fontSize);
                                                          var a = 100,
                                                              l = {};
                                                          if (r && n) (l.emToPx = N.lastEmToPx), (l.percentToPxWidth = N.lastPercentToPxWidth), (l.percentToPxHeight = N.lastPercentToPxHeight);
                                                          else {
                                                              var c = s(o).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                              _.init(c),
                                                                  t.myParent.appendChild(c),
                                                                  p.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                                                      _.CSS.setPropertyValue(c, e, "hidden");
                                                                  }),
                                                                  _.CSS.setPropertyValue(c, "position", t.position),
                                                                  _.CSS.setPropertyValue(c, "fontSize", t.fontSize),
                                                                  _.CSS.setPropertyValue(c, "boxSizing", "content-box"),
                                                                  p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                                                      _.CSS.setPropertyValue(c, e, a + "%");
                                                                  }),
                                                                  _.CSS.setPropertyValue(c, "paddingLeft", a + "em"),
                                                                  (l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / a),
                                                                  (l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / a),
                                                                  (l.emToPx = N.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / a),
                                                                  t.myParent.removeChild(c);
                                                          }
                                                          return (
                                                              null === N.remToPx && (N.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16),
                                                              null === N.vwToPx && ((N.vwToPx = parseFloat(e.innerWidth) / 100), (N.vhToPx = parseFloat(e.innerHeight) / 100)),
                                                              (l.remToPx = N.remToPx),
                                                              (l.vwToPx = N.vwToPx),
                                                              (l.vhToPx = N.vhToPx),
                                                              _.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o),
                                                              l
                                                          );
                                                      })();
                                                  var V = /margin|padding|left|right|width|text|word|letter/i.test(M) || /X$/.test(M) || "x" === M ? "x" : "y";
                                                  switch (B) {
                                                      case "%":
                                                          I *= "x" === V ? r.percentToPxWidth : r.percentToPxHeight;
                                                          break;
                                                      case "px":
                                                          break;
                                                      default:
                                                          I *= r[B + "ToPx"];
                                                  }
                                                  switch (q) {
                                                      case "%":
                                                          I *= 1 / ("x" === V ? r.percentToPxWidth : r.percentToPxHeight);
                                                          break;
                                                      case "px":
                                                          break;
                                                      default:
                                                          I *= 1 / r[q + "ToPx"];
                                                  }
                                              }
                                          switch (W) {
                                              case "+":
                                                  R = I + R;
                                                  break;
                                              case "-":
                                                  R = I - R;
                                                  break;
                                              case "*":
                                                  R *= I;
                                                  break;
                                              case "/":
                                                  R = I / R;
                                          }
                                          (l[M] = { rootPropertyValue: F, startValue: I, currentValue: I, endValue: R, unitType: q, easing: j }), _.debug && console.log("tweensContainer (" + M + "): " + JSON.stringify(l[M]), o);
                                      } else _.debug && console.log("Skipping [" + z + "] due to a lack of browser support.");
                                  }
                                  l.element = o;
                              }
                              l.element &&
                                  (w.Values.addClass(o, "velocity-animating"),
                                  L.push(l),
                                  "" === a.queue && ((s(o).tweensContainer = l), (s(o).opts = a)),
                                  (s(o).isAnimating = !0),
                                  S === T - 1 ? (_.State.calls.push([L, f, a, null, P.resolver]), !1 === _.State.isTicking && ((_.State.isTicking = !0), u())) : S++);
                          }
                          var r,
                              o = this,
                              a = p.extend({}, _.defaults, y),
                              l = {};
                          switch (
                              (s(o) === n && _.init(o),
                              parseFloat(a.delay) &&
                                  !1 !== a.queue &&
                                  p.queue(o, a.queue, function (t) {
                                      (_.velocityQueueEntryFlag = !0), (s(o).delayTimer = { setTimeout: setTimeout(t, parseFloat(a.delay)), next: t });
                                  }),
                              a.duration.toString().toLowerCase())
                          ) {
                              case "fast":
                                  a.duration = 200;
                                  break;
                              case "normal":
                                  a.duration = v;
                                  break;
                              case "slow":
                                  a.duration = 600;
                                  break;
                              default:
                                  a.duration = parseFloat(a.duration) || 1;
                          }
                          !1 !== _.mock && (!0 === _.mock ? (a.duration = a.delay = 1) : ((a.duration *= parseFloat(_.mock) || 1), (a.delay *= parseFloat(_.mock) || 1))),
                              (a.easing = c(a.easing, a.duration)),
                              a.begin && !m.isFunction(a.begin) && (a.begin = null),
                              a.progress && !m.isFunction(a.progress) && (a.progress = null),
                              a.complete && !m.isFunction(a.complete) && (a.complete = null),
                              a.display !== n && null !== a.display && ((a.display = a.display.toString().toLowerCase()), "auto" === a.display && (a.display = _.CSS.Values.getDisplayType(o))),
                              a.visibility !== n && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()),
                              (a.mobileHA = a.mobileHA && _.State.isMobile && !_.State.isGingerbread),
                              !1 === a.queue
                                  ? a.delay
                                      ? setTimeout(t, a.delay)
                                      : t()
                                  : p.queue(o, a.queue, function (e, i) {
                                        return !0 === i ? (P.promise && P.resolver(f), !0) : ((_.velocityQueueEntryFlag = !0), void t(e));
                                    }),
                              ("" !== a.queue && "fx" !== a.queue) || "inprogress" === p.queue(o)[0] || p.dequeue(o);
                      }
                      var a,
                          l,
                          h,
                          f,
                          g,
                          y,
                          b = arguments[0] && (arguments[0].p || (p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || m.isString(arguments[0].properties));
                      if ((m.isWrapped(this) ? ((a = !1), (h = 0), (f = this), (l = this)) : ((a = !0), (h = 1), (f = b ? arguments[0].elements || arguments[0].e : arguments[0])), (f = o(f)))) {
                          b ? ((g = arguments[0].properties || arguments[0].p), (y = arguments[0].options || arguments[0].o)) : ((g = arguments[h]), (y = arguments[h + 1]));
                          var T = f.length,
                              S = 0;
                          if (!/^(stop|finish)$/i.test(g) && !p.isPlainObject(y)) {
                              var C = h + 1;
                              y = {};
                              for (var k = C; k < arguments.length; k++)
                                  m.isArray(arguments[k]) || (!/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]))
                                      ? m.isString(arguments[k]) || m.isArray(arguments[k])
                                          ? (y.easing = arguments[k])
                                          : m.isFunction(arguments[k]) && (y.complete = arguments[k])
                                      : (y.duration = arguments[k]);
                          }
                          var P = { promise: null, resolver: null, rejecter: null };
                          a &&
                              _.Promise &&
                              (P.promise = new _.Promise(function (t, e) {
                                  (P.resolver = t), (P.rejecter = e);
                              }));
                          var E;
                          switch (g) {
                              case "scroll":
                                  E = "scroll";
                                  break;
                              case "reverse":
                                  E = "reverse";
                                  break;
                              case "finish":
                              case "stop":
                                  p.each(f, function (t, e) {
                                      s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout), s(e).delayTimer.next && s(e).delayTimer.next(), delete s(e).delayTimer);
                                  });
                                  var $ = [];
                                  return (
                                      p.each(_.State.calls, function (t, e) {
                                          e &&
                                              p.each(e[1], function (i, r) {
                                                  var o = y === n ? "" : y;
                                                  return (
                                                      (!0 !== o && e[2].queue !== o && (y !== n || !1 !== e[2].queue)) ||
                                                      void p.each(f, function (i, n) {
                                                          n === r &&
                                                              ((!0 === y || m.isString(y)) &&
                                                                  (p.each(p.queue(n, m.isString(y) ? y : ""), function (t, e) {
                                                                      m.isFunction(e) && e(null, !0);
                                                                  }),
                                                                  p.queue(n, m.isString(y) ? y : "", [])),
                                                              "stop" === g
                                                                  ? (s(n) &&
                                                                        s(n).tweensContainer &&
                                                                        !1 !== o &&
                                                                        p.each(s(n).tweensContainer, function (t, e) {
                                                                            e.endValue = e.currentValue;
                                                                        }),
                                                                    $.push(t))
                                                                  : "finish" === g && (e[2].duration = 1));
                                                      })
                                                  );
                                              });
                                      }),
                                      "stop" === g &&
                                          (p.each($, function (t, e) {
                                              d(e, !0);
                                          }),
                                          P.promise && P.resolver(f)),
                                      t()
                                  );
                              default:
                                  if (!p.isPlainObject(g) || m.isEmptyObject(g)) {
                                      if (m.isString(g) && _.Redirects[g]) {
                                          var A = p.extend({}, y),
                                              O = A.duration,
                                              M = A.delay || 0;
                                          return (
                                              !0 === A.backwards && (f = p.extend(!0, [], f).reverse()),
                                              p.each(f, function (t, e) {
                                                  parseFloat(A.stagger) ? (A.delay = M + parseFloat(A.stagger) * t) : m.isFunction(A.stagger) && (A.delay = M + A.stagger.call(e, t, T)),
                                                      A.drag &&
                                                          ((A.duration = parseFloat(O) || (/^(callout|transition)/.test(g) ? 1e3 : v)), (A.duration = Math.max(A.duration * (A.backwards ? 1 - t / T : (t + 1) / T), 0.75 * A.duration, 200))),
                                                      _.Redirects[g].call(e, e, A || {}, t, T, f, P.promise ? P : n);
                                              }),
                                              t()
                                          );
                                      }
                                      var D = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                      return P.promise ? P.rejecter(new Error(D)) : console.log(D), t();
                                  }
                                  E = "start";
                          }
                          var N = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                              L = [];
                          p.each(f, function (t, e) {
                              m.isNode(e) && r.call(e);
                          });
                          var R,
                              A = p.extend({}, _.defaults, y);
                          if (((A.loop = parseInt(A.loop)), (R = 2 * A.loop - 1), A.loop))
                              for (var j = 0; R > j; j++) {
                                  var I = { delay: A.delay, progress: A.progress };
                                  j === R - 1 && ((I.display = A.display), (I.visibility = A.visibility), (I.complete = A.complete)), x(f, "reverse", I);
                              }
                          return t();
                      }
                  };
                  (_ = p.extend(x, _)), (_.animate = x);
                  var T = e.requestAnimationFrame || f;
                  return (
                      _.State.isMobile ||
                          i.hidden === n ||
                          i.addEventListener("visibilitychange", function () {
                              i.hidden
                                  ? ((T = function (t) {
                                        return setTimeout(function () {
                                            t(!0);
                                        }, 16);
                                    }),
                                    u())
                                  : (T = e.requestAnimationFrame || f);
                          }),
                      (t.Velocity = _),
                      t !== e && ((t.fn.velocity = x), (t.fn.velocity.defaults = _.defaults)),
                      p.each(["Down", "Up"], function (t, e) {
                          _.Redirects["slide" + e] = function (t, i, r, o, s, a) {
                              var l = p.extend({}, i),
                                  c = l.begin,
                                  u = l.complete,
                                  d = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                                  h = {};
                              l.display === n && (l.display = "Down" === e ? ("inline" === _.CSS.Values.getDisplayType(t) ? "inline-block" : "block") : "none"),
                                  (l.begin = function () {
                                      c && c.call(s, s);
                                      for (var i in d) {
                                          h[i] = t.style[i];
                                          var n = _.CSS.getPropertyValue(t, i);
                                          d[i] = "Down" === e ? [n, 0] : [0, n];
                                      }
                                      (h.overflow = t.style.overflow), (t.style.overflow = "hidden");
                                  }),
                                  (l.complete = function () {
                                      for (var e in h) t.style[e] = h[e];
                                      u && u.call(s, s), a && a.resolver(s);
                                  }),
                                  _(t, d, l);
                          };
                      }),
                      p.each(["In", "Out"], function (t, e) {
                          _.Redirects["fade" + e] = function (t, i, r, o, s, a) {
                              var l = p.extend({}, i),
                                  c = { opacity: "In" === e ? 1 : 0 },
                                  u = l.complete;
                              (l.complete =
                                  r !== o - 1
                                      ? (l.begin = null)
                                      : function () {
                                            u && u.call(s, s), a && a.resolver(s);
                                        }),
                                  l.display === n && (l.display = "In" === e ? "auto" : "none"),
                                  _(this, c, l);
                          };
                      }),
                      _
                  );
              })(window.jQuery || window.Zepto || window, window, document);
          })),
    (function (t) {
        t.Package ? (Materialize = {}) : (t.Materialize = {});
    })(window),
    "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = Materialize), (exports.default = Materialize)),
    (function (t) {
        for (var e = 0, i = ["webkit", "moz"], n = t.requestAnimationFrame, r = t.cancelAnimationFrame, o = i.length; --o >= 0 && !n; ) (n = t[i[o] + "RequestAnimationFrame"]), (r = t[i[o] + "CancelRequestAnimationFrame"]);
        (n && r) ||
            ((n = function (t) {
                var i = +Date.now(),
                    n = Math.max(e + 16, i);
                return setTimeout(function () {
                    t((e = n));
                }, n - i);
            }),
            (r = clearTimeout)),
            (t.requestAnimationFrame = n),
            (t.cancelAnimationFrame = r);
    })(window),
    (Materialize.objectSelectorString = function (t) {
        return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "");
    }),
    (Materialize.guid = (function () {
        function t() {
            return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
        }
        return function () {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
        };
    })()),
    (Materialize.escapeHash = function (t) {
        return t.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
    }),
    (Materialize.elementOrParentIsFixed = function (t) {
        var e = $(t),
            i = e.add(e.parents()),
            n = !1;
        return (
            i.each(function () {
                if ("fixed" === $(this).css("position")) return (n = !0), !1;
            }),
            n
        );
    });
var getTime =
    Date.now ||
    function () {
        return new Date().getTime();
    };
Materialize.throttle = function (t, e, i) {
    var n,
        r,
        o,
        s = null,
        a = 0;
    i || (i = {});
    var l = function () {
        (a = !1 === i.leading ? 0 : getTime()), (s = null), (o = t.apply(n, r)), (n = r = null);
    };
    return function () {
        var c = getTime();
        a || !1 !== i.leading || (a = c);
        var u = e - (c - a);
        return (n = this), (r = arguments), u <= 0 ? (clearTimeout(s), (s = null), (a = c), (o = t.apply(n, r)), (n = r = null)) : s || !1 === i.trailing || (s = setTimeout(l, u)), o;
    };
};
var Vel;
(Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity),
    (Materialize.Vel = Vel || Velocity),
    (function (t) {
        t(document).ready(function () {
            function e(e) {
                var i = e.css("font-family"),
                    r = e.css("font-size"),
                    o = e.css("line-height"),
                    s = e.css("padding");
                r && n.css("font-size", r),
                    i && n.css("font-family", i),
                    o && n.css("line-height", o),
                    s && n.css("padding", s),
                    e.data("original-height") || e.data("original-height", e.height()),
                    "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"),
                    n.text(e.val() + "\n");
                var a = n.html().replace(/\n/g, "<br>");
                n.html(a),
                    e.is(":visible") ? n.css("width", e.width()) : n.css("width", t(window).width() / 2),
                    e.data("original-height") <= n.height() ? e.css("height", n.height()) : e.val().length < e.data("previous-length") && e.css("height", e.data("original-height")),
                    e.data("previous-length", e.val().length);
            }
            Materialize.updateTextFields = function () {
                t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function (e, i) {
                    var n = t(this);
                    t(i).val().length > 0 || t(i).is(":focus") || i.autofocus || void 0 !== n.attr("placeholder")
                        ? n.siblings("label").addClass("active")
                        : t(i)[0].validity
                        ? n.siblings("label").toggleClass("active", !0 === t(i)[0].validity.badInput)
                        : n.siblings("label").removeClass("active");
                });
            };
            var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(document).on("change", i, function () {
                (0 === t(this).val().length && void 0 === t(this).attr("placeholder")) || t(this).siblings("label").addClass("active"), validate_field(t(this));
            }),
                t(document).ready(function () {
                    Materialize.updateTextFields();
                }),
                t(document).on("reset", function (e) {
                    var n = t(e.target);
                    n.is("form") &&
                        (n.find(i).removeClass("valid").removeClass("invalid"),
                        n.find(i).each(function () {
                            "" === t(this).attr("value") && t(this).siblings("label").removeClass("active");
                        }),
                        n.find("select.initialized").each(function () {
                            var t = n.find("option[selected]").text();
                            n.siblings("input.select-dropdown").val(t);
                        }));
                }),
                t(document).on("focus", i, function () {
                    t(this).siblings("label, .prefix").addClass("active");
                }),
                t(document).on("blur", i, function () {
                    var e = t(this),
                        i = ".prefix";
                    0 === e.val().length && !0 !== e[0].validity.badInput && void 0 === e.attr("placeholder") && (i += ", label"), e.siblings(i).removeClass("active"), validate_field(e);
                }),
                (window.validate_field = function (t) {
                    var e = void 0 !== t.attr("data-length"),
                        i = parseInt(t.attr("data-length")),
                        n = t.val().length;
                    0 !== t.val().length || !1 !== t[0].validity.badInput || t.is(":required")
                        ? t.hasClass("validate") && ((t.is(":valid") && e && n <= i) || (t.is(":valid") && !e) ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
                        : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"));
                });
            t(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function (e) {
                if (9 === e.which) {
                    t(this).addClass("tabbed");
                    return void t(this).one("blur", function (e) {
                        t(this).removeClass("tabbed");
                    });
                }
            });
            var n = t(".hiddendiv").first();
            n.length || ((n = t('<div class="hiddendiv common"></div>')), t("body").append(n));
            t(".materialize-textarea").each(function () {
                var e = t(this);
                e.data("original-height", e.height()), e.data("previous-length", e.val().length);
            }),
                t("body").on("keyup keydown autoresize", ".materialize-textarea", function () {
                    e(t(this));
                }),
                t(document).on("change", '.file-field input[type="file"]', function () {
                    for (var e = t(this).closest(".file-field"), i = e.find("input.file-path"), n = t(this)[0].files, r = [], o = 0; o < n.length; o++) r.push(n[o].name);
                    i.val(r.join(", ")), i.trigger("change");
                });
            var r = "input[type=range]",
                o = !1;
            t(r).each(function () {
                var e = t('<span class="thumb"><span class="value"></span></span>');
                t(this).after(e);
            });
            var s = function (t) {
                    var e = parseInt(t.parent().css("padding-left")),
                        i = -7 + e + "px";
                    t.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: i }, { duration: 300, easing: "easeOutExpo" });
                },
                a = function (t) {
                    var e = t.width() - 15,
                        i = parseFloat(t.attr("max")),
                        n = parseFloat(t.attr("min"));
                    return ((parseFloat(t.val()) - n) / (i - n)) * e;
                };
            t(document).on("change", r, function (e) {
                var i = t(this).siblings(".thumb");
                i.find(".value").html(t(this).val()), i.hasClass("active") || s(i);
                var n = a(t(this));
                i.addClass("active").css("left", n);
            }),
                t(document).on("mousedown touchstart", r, function (e) {
                    var i = t(this).siblings(".thumb");
                    if (
                        (i.length <= 0 && ((i = t('<span class="thumb"><span class="value"></span></span>')), t(this).after(i)),
                        i.find(".value").html(t(this).val()),
                        (o = !0),
                        t(this).addClass("active"),
                        i.hasClass("active") || s(i),
                        "input" !== e.type)
                    ) {
                        var n = a(t(this));
                        i.addClass("active").css("left", n);
                    }
                }),
                t(document).on("mouseup touchend", ".range-field", function () {
                    (o = !1), t(this).removeClass("active");
                }),
                t(document).on("input mousemove touchmove", ".range-field", function (e) {
                    var i = t(this).children(".thumb"),
                        n = t(this).find(r);
                    if (o) {
                        i.hasClass("active") || s(i);
                        var l = a(n);
                        i.addClass("active").css("left", l), i.find(".value").html(i.siblings(r).val());
                    }
                }),
                t(document).on("mouseout touchleave", ".range-field", function () {
                    if (!o) {
                        var e = t(this).children(".thumb"),
                            i = parseInt(t(this).css("padding-left")),
                            n = 7 + i + "px";
                        e.hasClass("active") && e.velocity({ height: "0", width: "0", top: "10px", marginLeft: n }, { duration: 100 }), e.removeClass("active");
                    }
                }),
                (t.fn.autocomplete = function (e) {
                    var i = { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1 };
                    return (
                        (e = t.extend(i, e)),
                        this.each(function () {
                            var i,
                                n = t(this),
                                r = e.data,
                                o = 0,
                                s = -1,
                                a = n.closest(".input-field");
                            if (t.isEmptyObject(r)) n.off("keyup.autocomplete focus.autocomplete");
                            else {
                                var l,
                                    c = t('<ul class="autocomplete-content dropdown-content"></ul>');
                                a.length ? ((l = a.children(".autocomplete-content.dropdown-content").first()), l.length || a.append(c)) : ((l = n.next(".autocomplete-content.dropdown-content")), l.length || n.after(c)),
                                    l.length && (c = l);
                                var u = function (t, e) {
                                        var i = e.find("img"),
                                            n = e
                                                .text()
                                                .toLowerCase()
                                                .indexOf("" + t.toLowerCase()),
                                            r = n + t.length - 1,
                                            o = e.text().slice(0, n),
                                            s = e.text().slice(n, r + 1),
                                            a = e.text().slice(r + 1);
                                        e.html("<span>" + o + "<span class='highlight'>" + s + "</span>" + a + "</span>"), i.length && e.prepend(i);
                                    },
                                    d = function () {
                                        (s = -1), c.find(".active").removeClass("active");
                                    },
                                    p = function () {
                                        c.empty(), d(), (i = void 0);
                                    };
                                n.off("blur.autocomplete").on("blur.autocomplete", function () {
                                    p();
                                }),
                                    n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function (s) {
                                        o = 0;
                                        var a = n.val().toLowerCase();
                                        if (13 !== s.which && 38 !== s.which && 40 !== s.which) {
                                            if (i !== a && (p(), a.length >= e.minLength))
                                                for (var l in r)
                                                    if (r.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(a)) {
                                                        if (o >= e.limit) break;
                                                        var d = t("<li></li>");
                                                        r[l] ? d.append('<img src="' + r[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"), c.append(d), u(a, d), o++;
                                                    }
                                            i = a;
                                        }
                                    }),
                                    n.off("keydown.autocomplete").on("keydown.autocomplete", function (t) {
                                        var e,
                                            i = t.which,
                                            n = c.children("li").length,
                                            r = c.children(".active").first();
                                        if (13 === i && s >= 0) return (e = c.children("li").eq(s)), void (e.length && (e.trigger("mousedown.autocomplete"), t.preventDefault()));
                                        (38 !== i && 40 !== i) || (t.preventDefault(), 38 === i && s > 0 && s--, 40 === i && s < n - 1 && s++, r.removeClass("active"), s >= 0 && c.children("li").eq(s).addClass("active"));
                                    }),
                                    c.off("mousedown.autocomplete touchstart.autocomplete").on("mousedown.autocomplete touchstart.autocomplete", "li", function () {
                                        var i = t(this).text().trim();
                                        n.val(i), n.trigger("change"), p(), "function" == typeof e.onAutocomplete && e.onAutocomplete.call(this, i);
                                    });
                            }
                        })
                    );
                });
        }),
            (t.fn.material_select = function (e) {
                function i(t, e, i) {
                    var r = t.indexOf(e),
                        o = -1 === r;
                    return o ? t.push(e) : t.splice(r, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", o), n(t, i), o;
                }
                function n(t, e) {
                    for (var i = "", n = 0, r = t.length; n < r; n++) {
                        var o = e.find("option").eq(t[n]).text();
                        i += 0 === n ? o : ", " + o;
                    }
                    "" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i);
                }
                t(this).each(function () {
                    var n = t(this);
                    if (!n.hasClass("browser-default")) {
                        var r = !!n.attr("multiple"),
                            o = n.attr("data-select-id");
                        if ((o && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + o).remove()), "destroy" === e))
                            return n.removeAttr("data-select-id").removeClass("initialized"), void t(window).off("click.select");
                        var s = Materialize.guid();
                        n.attr("data-select-id", s);
                        var a = t('<div class="select-wrapper"></div>');
                        a.addClass(n.attr("class")), n.is(":disabled") && a.addClass("disabled");
                        var l = t('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                            c = n.children("option, optgroup"),
                            u = [],
                            d = !1,
                            p = n.find("option:selected").html() || n.find("option:first").html() || "",
                            h = function (e, i, n) {
                                var o = i.is(":disabled") ? "disabled " : "",
                                    s = "optgroup-option" === n ? "optgroup-option " : "",
                                    a = r ? '<input type="checkbox"' + o + "/><label></label>" : "",
                                    c = i.data("icon"),
                                    u = i.attr("class");
                                if (c) {
                                    var d = "";
                                    return u && (d = ' class="' + u + '"'), l.append(t('<li class="' + o + s + '"><img alt="" src="' + c + '"' + d + "><span>" + a + i.html() + "</span></li>")), !0;
                                }
                                l.append(t('<li class="' + o + s + '"><span>' + a + i.html() + "</span></li>"));
                            };
                        c.length &&
                            c.each(function () {
                                if (t(this).is("option")) r ? h(0, t(this), "multiple") : h(0, t(this));
                                else if (t(this).is("optgroup")) {
                                    var e = t(this).children("option");
                                    l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")),
                                        e.each(function () {
                                            h(0, t(this), "optgroup-option");
                                        });
                                }
                            }),
                            l.find("li:not(.optgroup)").each(function (o) {
                                t(this).click(function (s) {
                                    if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                        var a = !0;
                                        r
                                            ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                                                  return !e;
                                              }),
                                              (a = i(u, o, n)),
                                              g.trigger("focus"))
                                            : (l.find("li").removeClass("active"), t(this).toggleClass("active"), g.val(t(this).text())),
                                            v(l, t(this)),
                                            n.find("option").eq(o).prop("selected", a),
                                            n.trigger("change"),
                                            void 0 !== e && e();
                                    }
                                    s.stopPropagation();
                                });
                            }),
                            n.wrap(a);
                        var f = t('<span class="caret">&#9660;</span>'),
                            m = p.replace(/"/g, "&quot;"),
                            g = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + m + '"/>');
                        n.before(g),
                            g.before(f),
                            g.after(l),
                            n.is(":disabled") || g.dropdown({ hover: !1 }),
                            n.attr("tabindex") && t(g[0]).attr("tabindex", n.attr("tabindex")),
                            n.addClass("initialized"),
                            g.on({
                                focus: function () {
                                    if ((t("ul.select-dropdown").not(l[0]).is(":visible") && (t("input.select-dropdown").trigger("close"), t(window).off("click.select")), !l.is(":visible"))) {
                                        t(this).trigger("open", ["focus"]);
                                        var e = t(this).val();
                                        r && e.indexOf(",") >= 0 && (e = e.split(",")[0]);
                                        var i = l.find("li").filter(function () {
                                            return t(this).text().toLowerCase() === e.toLowerCase();
                                        })[0];
                                        v(l, i, !0),
                                            t(window)
                                                .off("click.select")
                                                .on("click.select", function () {
                                                    r && (d || g.trigger("close")), t(window).off("click.select");
                                                });
                                    }
                                },
                                click: function (t) {
                                    t.stopPropagation();
                                },
                            }),
                            g.on("blur", function () {
                                r || (t(this).trigger("close"), t(window).off("click.select")), l.find("li.selected").removeClass("selected");
                            }),
                            l.hover(
                                function () {
                                    d = !0;
                                },
                                function () {
                                    d = !1;
                                }
                            ),
                            r &&
                                n.find("option:selected:not(:disabled)").each(function () {
                                    var t = this.index;
                                    i(u, t, n), l.find("li:not(.optgroup)").eq(t).find(":checkbox").prop("checked", !0);
                                });
                        var v = function (e, i, n) {
                                if (i) {
                                    e.find("li.selected").removeClass("selected");
                                    var o = t(i);
                                    o.addClass("selected"), (r && !n) || l.scrollTo(o);
                                }
                            },
                            y = [],
                            _ = function (e) {
                                if (9 == e.which) return void g.trigger("close");
                                if (40 == e.which && !l.is(":visible")) return void g.trigger("open");
                                if (13 != e.which || l.is(":visible")) {
                                    e.preventDefault();
                                    var i = String.fromCharCode(e.which).toLowerCase(),
                                        n = [9, 13, 27, 38, 40];
                                    if (i && -1 === n.indexOf(e.which)) {
                                        y.push(i);
                                        var o = y.join(""),
                                            s = l.find("li").filter(function () {
                                                return 0 === t(this).text().toLowerCase().indexOf(o);
                                            })[0];
                                        s && v(l, s);
                                    }
                                    if (13 == e.which) {
                                        var a = l.find("li.selected:not(.disabled)")[0];
                                        a && (t(a).trigger("click"), r || g.trigger("close"));
                                    }
                                    40 == e.which && ((s = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0]), v(l, s)),
                                        27 == e.which && g.trigger("close"),
                                        38 == e.which && (s = l.find("li.selected").prev("li:not(.disabled)")[0]) && v(l, s),
                                        setTimeout(function () {
                                            y = [];
                                        }, 1e3);
                                }
                            };
                        g.on("keydown", _);
                    }
                });
            });
    })(jQuery),
    (function () {
        for (
            var t,
                e = function () {},
                i = [
                    "assert",
                    "clear",
                    "count",
                    "debug",
                    "dir",
                    "dirxml",
                    "error",
                    "exception",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "info",
                    "log",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "table",
                    "time",
                    "timeEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "trace",
                    "warn",
                ],
                n = i.length,
                r = (window.console = window.console || {});
            n--;

        )
            (t = i[n]), r[t] || (r[t] = e);
    })(),
    $(function () {
        var t = $(".smooth_scroll_pages"),
            e = $(window);
        t.on("mousewheel DOMMouseScroll", function (t) {
            t.preventDefault();
            var i = t.originalEvent.wheelDelta / 120 || -t.originalEvent.detail / 3,
                n = e.scrollTop(),
                r = n - parseInt(400 * i);
            TweenMax.to(e, 0.75, { scrollTo: { y: r, autoKill: !0 }, ease: Power1.linear, autoKill: !0, overwrite: 5 });
        });
    });
var winW = $(window).outerWidth(),
    winH = $(window).outerHeight(),
    indexPage = $("#index_page").length,
    aboutPage = $("#about_page").length,
    contactPage = $("#contact_page").length,
    awardsPage = $("#awards_page").length,
    aboutPage = $("#about_page").length,
    projectPage = $("#project_listing_page").length,
    projectInsidePage = $("#project_inside_page").length,
    mediaPage = $("#media_page").length,
    newsletterPage = $("#newsletter_page").length,
    rndPage = $("#rnd_page").length,
    transferHeight = function (t, e) {
        var i = $(t).outerHeight();
        $(e).outerHeight(i);
    },
    equalHeight = function (t) {
        var e = 0;
        $(t).each(function () {
            var t = $(this).outerHeight();
            e < t && (e = t);
        }),
            $(t).outerHeight(e);
    },
    ccNext = function () {},
    ccPrev = function () {},
    checkHiddenRadio = function (t, e) {
        $(t).find(".hidden_inputs").prop("checked", !1), $(e).find(".hidden_inputs").prop("checked", !0);
    },
    getCurrentYear = function () {
        var t = new Date(),
            e = t.getFullYear();
        $(".current_year").text(e);
    };
$(document).ready(function (t) {
    if (
        (getCurrentYear(),
        $(".header .link_section a").each(function () {
            var t = $(this).attr("data-color"),
                e = $(this).find(".page_title");
            duplicateText(e, 200), e.find(".pt_inner_1").css({ color: t });
        }),
        $(".sidebar_wrap .links .mobile_page_title").each(function () {
            duplicateText($(this), 400);
        }),
        $("#nav-icon3").click(function () {
            $(this).toggleClass("open"), $(".sidebar_wrap").toggleClass("open");
        }),
        $(".sidebar_wrap .links a").on("click", function () {
            $("#nav-icon3").trigger("click");
        }),
        $(".tab_wrap .tab_head .tab_head_item").on("click", function () {
            var t = $(this).parents(".tab_wrap"),
                e = $(this).attr("data-target");
            $(t).find(".tab_head .tab_head_item").removeClass("tab_active"), $(this).addClass("tab_active"), $(t).find(".tab_content .tab_content_item").removeClass("tab_active"), $(t).find(e).addClass("tab_active");
        }),
        winW > 767 &&
            $(".award_slider").slick({
                dots: !1,
                infinite: !0,
                variableWidth: !0,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !0,
                accessibility: !1,
                prevArrow: '<div class="slick-prev"><img class="img-responsive" src="http://localhost/designbyroar/inc/assets/img/icon-set/awards_next.png"></div>',
                nextArrow: '<div class="slick-next"><img class="img-responsive" src="http://localhost/designbyroar/inc/assets/img/icon-set/awards_next.png"></div>',
            }),
        1 == awardsPage && $(".make_awards_active").addClass("link_active"),
        1 == aboutPage &&
            ($(".make_about_active").addClass("link_active"),
            $(".ot_item .ot_content .know_more").click(function () {
                $(this).parents(".ot_item").toggleClass("active"), $(this).parents(".ot_item").siblings().removeClass("active");
            })),
        1 == projectPage && $(".make_project_active").addClass("link_active"),
        1 == projectInsidePage)
    ) {
        duplicateText($(".next_project_button p"), 200);
    }
    1 == mediaPage && $(".make_media_active").addClass("link_active"),
        1 == rndPage && $(".make_rnd_active").addClass("link_active"),
        1 == newsletterPage && $(".make_newsletter_active").addClass("link_active"),
        1 == contactPage && $(".make_contact_active").addClass("link_active");
});
var autoHomeIntroScrollTime;
$(window).on("load", function () {
    function t(t) {
        $(t)
            .find(".pl_wrap .pl_item")
            .each(function (t, e) {
                var i = $(this).outerHeight(),
                    n = $(this).find(".pl_item_desc"),
                    r = $(this).find(".pl_item_image_inside img"),
                    o = $(this).find(".shape_img img"),
                    s = new TimelineMax();
                s.add(TweenMax.to(n[0], 1, { y: "0%" }), "first")
                    .add(TweenMax.to(r[0], 1, { scale: 1.2 }), "first")
                    .add(TweenMax.to(o[0], 1, { y: "-100%" }), "first");
                new ScrollMagic.Scene({ triggerHook: 1, triggerElement: e, offset: 0, duration: winH + i }).setTween(s).addTo(j);
            });
    }
    if (
        (setTimeout(function () {
            $(".loader_overlay").fadeOut(500);
        }, 0),
        winW > 767 ? $(".inside_page").css({ paddingTop: $(".header").outerHeight() + "px" }) : $(".inside_page").css({ paddingTop: $(".mobile_navbar").outerHeight() + "px" }),
        winW > 991 && setContainerWidthToRigthEnd(),
        1 == indexPage)
    ) {
        setTimeout(function () {
            $(".load_area").addClass("show_text"), 
            1 == $(window).scrollTop() && $("html,body").animate({ scrollTop: autoHomeIntroScrollTime }, 7e3);
        }, 300),
            $(".roar_big_logo .st0").each(function () {
                $(this).css({ fill: "#221F1F" });
            });
        var e = $(".sector_area_inner").html();
        $(".sand_image_area").before('<div class="sector_area_inner cloned_sai">' + e + "</div>");
        var i = $(".behind_sand_image_area").outerWidth();
        $(".sector_area_inner").outerWidth(i), $(".sector_shape_layer1").outerWidth(1.5 * i);
        var n = new ScrollMagic.Controller();
        if (winW > 767) var r = 0;
        else var r = 0.5 * winH;
        var o = winW,
            s = winW,
            a = winH,
            l = 1.5 * winH;
        autoHomeIntroScrollTime = r + o + 300 + s + a + 200 + 0.66 * l;
        new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH, duration: r + o + 300 + s + a + 200 + l }).setPin(".banner_section").addTo(n);
        if (winW < 767) {
            var c = new TimelineMax();
            c.add(TweenMax.to(".pink_area img", 1, { x: "-100%" }), "first")
                .add(TweenMax.to(".yellow_area img", 1, { x: "100%" }), "first")
                .add(TweenMax.to(".blue_area .blue_cutout", 1, { y: "-80%" }), "first");
            new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH, duration: r }).setTween(c).addTo(n);
        }
        var u = new TimelineMax();
        u.add(TweenMax.to(".yellow_area", 1, { x: "100%" }), "first")
            .add(TweenMax.to(".r_big_img", 1, { y: 0.2 * winH, x: "30%" }), "first")
            .add(TweenMax.to(".r_big_img img", 1, { transform: "rotate(90deg) scale(0.7)" }), "first")
            .add(TweenMax.to(".pink_area img", 1, { x: "100%" }), "first-=0.2")
            .add(TweenMax.to(".blue_area .blue_cutout", 1, { y: "-50%" }), "first+=0.2");
        var d = (new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH + r, duration: o }).setTween(u).addTo(n), new TimelineMax());
        d.add(TweenMax.to(".yellow_area .heart_word .heart_shape", 1, { top: 0, y: "-100%" }), "first");
        var p = (new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH + r + o, duration: 300 }).setTween(d).addTo(n), new TimelineMax());
        p.add(TweenMax.to(".blue_area", 1, { y: "-100%" }), "first")
            .add(TweenMax.to(".blue_area .blue_cutout", 1, { y: "-100%" }), "first")
            .add(TweenMax.to(".r_big_img", 1, { y: 1.5 * winH, x: "10%" }), "first")
            .add(TweenMax.to(".r_big_img img", 1, { transform: "rotate(90deg) scale(1)" }), "first")
            .add(TweenMax.to(".r_small_img img", 1, { y: 2 * -winH }), "first");
        var h = (new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH + r + o + 300, duration: s }).setTween(p).addTo(n), new TimelineMax());
        h.add(TweenMax.to(".white_area", 1, { y: "-100%" }), "first").add(TweenMax.to(".blue_area .white_cutout", 1, { y: "-" + winH }), "first");
        var f = (new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH + r + o + 300 + s, duration: a }).setTween(h).addTo(n), $(".roar_big_logo .st0"), new TimelineMax());
        f.add(TweenMax.to(".roar_big_logo .st0", 1, { strokeDashoffset: 0, fill: "#221F1F" }), "first");
        var m = (new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH + r + o + 300 + s + a, duration: 200 }).setTween(f).addTo(n), new TimelineMax());
        m.add(TweenMax.to(".white_area .text_100", 1, { y: "-150px", opacity: 0 }), "first")
            .add(TweenMax.to(".white_area .logo_tagline", 1, { y: "-100px" }), "first")
            .add(TweenMax.to(".white_area .logo_tagline .roar_big_logo", 1, { transform: "scale(1)" }), "first")
            .add(TweenMax.to(".white_area .logo_tagline .main_tagline", 1, { opacity: 1, y: 0 }), "first")
            .add(TweenMax.to(".white_area .logo_tagline .award_winning", 1, { opacity: 1, y: 0 }), "first")
            .add(TweenMax.to(".sector_section .building_area", 1, { opacity: 1, y: 0 }), "first_second")
            .add(TweenMax.to(".sector_section .lion_image", 1, { opacity: 1, y: 0 }), "first_second")
            .add(TweenMax.to(".white_area .logo_tagline .roar_big_logo", 1, { opacity: 0 }), "second")
            .add(TweenMax.to(".white_area .logo_tagline .main_tagline", 1, { opacity: 0 }), "second")
            .add(TweenMax.to(".white_area .logo_tagline .award_winning", 1, { opacity: 0 }), "second");
        new ScrollMagic.Scene({ triggerElement: ".banner_section", offset: 0.5 * winH + r + o + 300 + s + 200 + a, duration: l })
            .setTween(m)
            .addTo(n)
            .on("start", function (t) {
                "FORWARD" == t.scrollDirection && $(".header").addClass("home_header_visible");
            });
        var g = winH,
            v = winH,
            y = i - winW,
            _ = winH,
            b = winH,
            w = (new ScrollMagic.Scene({ triggerElement: ".sector_section", offset: 0.5 * winH, duration: g + v + y + _ + 0 + b }).setPin(".sector_section").addTo(n), new TimelineMax());
        w.add(TweenMax.to(".sector_section .building_area", 1, { opacity: 0, y: "100%" }), "first")
            .add(TweenMax.to(".sector_section .lion_image", 1, { opacity: 0, y: "100%" }), "first")
            .add(TweenMax.to(".sector_section .sector_area .cloud_area", 1, { opacity: 1 }), "first")
            .add(TweenMax.to(".sector_section .sector_shape_layer1", 1, { opacity: 1, y: "0%" }), "first")
            .add(TweenMax.to(".sector_section .sector_shape_layer2", 1, { opacity: 1, y: "0%" }), "first")
            .add(TweenMax.to(".sector_section .sector_area_inner", 1, { opacity: 1, y: "0%" }), "first");
        var x = (new ScrollMagic.Scene({ triggerElement: ".sector_section", offset: 0.5 * winH + g, duration: v }).setTween(w).addTo(n), new TimelineMax());
        x.add(TweenMax.to(".sector_area .behind_sand_image_area", 1, { x: "-120%", right: winW }), "first")
            .add(TweenMax.to(".sector_area .sand_image_area", 1, { x: "-100%", right: winW + 5 }), "first")
            .add(TweenMax.to(".sector_area .sector_area_inner", 1, { x: "-100%", right: winW + 5 }), "first")
            .add(TweenMax.to(".sector_area .sector_shape_layer1", 1, { x: "-100%", right: winW + 5 }), "first")
            .add(TweenMax.to(".sector_area .sector_area_inner .shape_item", 1, { x: "-50%" }), "first");
        var T = new ScrollMagic.Scene({ triggerElement: ".sector_section", offset: 0.5 * winH + g + v, duration: y }).setTween(x).addTo(n);
        winW > 767 &&
            ($(".sector_area_inner .sector_item").each(function (t) {
                $(this).offset().left > -0.5 * $(this).outerWidth() && $(this).addClass("item_in_view");
            }),
            T.on("progress", function () {
                $(".sector_area_inner .sector_item").each(function (t) {
                    $(this).offset().left > -0.5 * $(this).outerWidth() && $(this).offset().left < winW - 0.5 * $(this).outerWidth() ? $(this).addClass("item_in_view") : $(this).removeClass("item_in_view");
                });
            }));
        var S = new TimelineMax();
        S.add(TweenMax.to(".sector_section .follows_area .fs_content_sec .follows_img", 1, { opacity: 1 }), "first")
            .add(TweenMax.to(".sector_area .sand_image_area", 1, { y: "100%" }), "first")
            .add(TweenMax.to(".sector_area .sector_area_inner", 1, { y: "100%" }), "first")
            .add(TweenMax.to(".sector_area .sector_shape_layer1", 1, { y: "100%" }), "first")
            .add(TweenMax.to(".sector_area .sector_area_inner .shape_item", 1, { y: "100%" }), "first")
            .add(TweenMax.to(".sector_area .cloud_area", 1, { opacity: 0 }), "first")
            .add(TweenMax.to(".sector_section .follows_area", 1, { y: "0%" }), "first")
            .add(TweenMax.to(".sector_section .follows_area .fs_yellow_shape", 1, { y: "0%", rotation: "360" }), "first")
            .add(TweenMax.to(".sector_section .follows_area .fs_pink_shape", 1, { y: "0%", rotation: "-180" }), "first")
            .add(TweenMax.to(".sector_section .fs_content_sec .upper_text", 1, { opacity: 1 }), "first")
            .add(TweenMax.to(".sector_section .fs_content_sec .lower_text", 1, { opacity: 1 }), "first")
            .add(TweenMax.to(".sector_section .fs_content_sec .upper_text", 1, { x: "0%" }), "first+=0.25")
            .add(TweenMax.to(".sector_section .fs_content_sec .lower_text", 1, { x: "0%" }), "first+=0.25");
        new ScrollMagic.Scene({ triggerElement: ".sector_section", offset: 0.5 * winH + g + v + y, duration: _ })
            .setTween(S)
            .addTo(n)
            .on("end", function (t) {
                "FORWARD" == t.scrollDirection
                    ? $(".sector_area .sand_image_area,.sector_area .sector_area_inner,.sector_area .sector_shape_layer1,.sector_area .sector_area_inner .shape_item").fadeOut()
                    : $(".sector_area .sand_image_area,.sector_area .sector_area_inner,.sector_area .sector_shape_layer1,.sector_area .sector_area_inner .shape_item").fadeIn();
            });
        var C = new TimelineMax();
        C.add(TweenMax.to(".sector_section .follows_area .fs_pink_shape", 1, { right: "50%", top: "50%", x: "50%", y: "-50%", rotation: "-360" }), "first")
            .add(TweenMax.to("", 1, { scale: 10 }), "first")
            .add(TweenMax.to("", 1, { x: "-50%", y: "-50%", scale: "1" }), "first");
        var k = (new ScrollMagic.Scene({ triggerElement: ".sector_section", offset: 0.5 * winH + g + v + y + _ + 0, duration: b }).setTween(C).addTo(n), winH),
            P = 2 * winW,
            E = winH;
        new ScrollMagic.Scene({ triggerElement: ".team_section", offset: 0.1 * winH, duration: k + P + E })
            .setPin(".team_section")
            .addTo(n)
            .on("start", function (t) {
                "FORWARD" == t.scrollDirection ? $(".team_section").css({ visibility: "visible" }) : $(".team_section").css({ visibility: "hidden" });
            });
        var A = new TimelineMax();
        A.add(TweenMax.to(".team_section .team_blue_shape", 1, { y: "0%" }), "first").add(TweenMax.to(".team_section .people_sec .people_sec_inner", 1, { y: "0%", opacity: 1 }), "first");
        var O = (new ScrollMagic.Scene({ triggerElement: ".team_section", offset: 0.1 * winH, duration: k }).setTween(A).addTo(n), new TimelineMax());
        O.add(TweenMax.to(".team_section .team_section_inner", 1, { x: "0%" }), "first").add(TweenMax.to(".team_section .team_blue_shape img", 1, { x: "0%", left: winW }), "first");
        var M = (new ScrollMagic.Scene({ triggerElement: ".team_section", offset: 0.5 * winH + k, duration: P }).setTween(O).addTo(n), new TimelineMax());
        M.add(TweenMax.from(".team_section .team_section_inner .stats_sec", 1, { y: "0%" }), "first");
        new ScrollMagic.Scene({ triggerElement: ".team_section", offset: 0.1 * winH + k, duration: P / 3 }).setTween(M).addTo(n),
            new ScrollMagic.Scene({ triggerElement: ".project_section .project_r_patern_1", offset: 0.15 * winH, duration: $(".project_section").outerHeight() })
                .setPin(".project_section .project_r_patern_1")
                .setTween(".project_section .project_r_patern_1", 1, { y: "-100%" })
                .addTo(n),
            new ScrollMagic.Scene({ triggerElement: ".project_section .project_r_patern_2", offset: 0.25 * -winH, duration: $(".project_section").outerHeight() + 0.25 * winH })
                .setPin(".project_section .project_r_patern_2")
                .setTween(".project_section .project_r_patern_2", 1, { y: "-100%" })
                .addTo(n);
        winW > 767 &&
            $(".project_section .project_section_inner .project_item").each(function (t, e) {
                var i = ($(this), $(this).outerHeight()),
                    r = $(this).find(".project_item_desc"),
                    o = $(this).find(".project_item_image img"),
                    s = new TimelineMax();
                s.add(TweenMax.to(r[0], 1, { y: 0.5 * -i }), "first").add(TweenMax.to(o[0], 1, { scale: 1.3 }), "first");
                new ScrollMagic.Scene({ triggerElement: this, offset: 0, duration: winH }).setTween(s).addTo(n);
            });
        var D = new TimelineMax();
        D.add(TweenMax.to(".news_section .news_blue_shape", 1, { y: 0 }), "first")
            .add(TweenMax.to(".news_section .leopard_img", 1, { y: 0 }), "first")
            .add(TweenMax.to(".news_section .news_section_inner", 1, { y: 0 }), "first");
        var N = (new ScrollMagic.Scene({ triggerElement: ".news_section", offset: 0, duration: 0.5 * winH }).setTween(D).addTo(n), new TimelineMax());
        N.add(TweenMax.to(".awards_section .award_title", 1, { x: 0, opacity: 1 }), "first")
            .add(TweenMax.to(".awards_section .award_slider", 1, { y: 0, opacity: 1 }), "first")
            .add(TweenMax.to(".awards_section .award_yellow_shape", 1, { y: 0 }), "first")
            .add(TweenMax.to(".awards_section .award_white_shape", 1, { y: 0 }), "first")
            .add(TweenMax.to(".awards_section .award_tiger_image", 1, { x: 0 }), "first")
            .add(TweenMax.to(".awards_section .award_pink_shape", 1, { y: 0 }), "first");
        new ScrollMagic.Scene({ triggerElement: ".awards_section", offset: 0, duration: 0.5 * winH }).setTween(N).addTo(n);
    }
    if (1 == aboutPage) {
        $("#about_page").addClass("about_page_loaded");
        new ScrollMagic.Controller();
    }
    if ((1 == awardsPage && $("#awards_page").addClass("award_page_loaded"), 1 == mediaPage && $("#media_page").addClass("media_page_loaded"), 1 == projectPage)) {
        startCounter(".ticker_counter", 1e3);
        var L = $(".shape_container img");
        $(".pl_wrap").each(function () {
            $(this) 
                .find(".pl_item")
                .each(function (t, e) {
                    $(this).append('<div class="shape_img"><img class="img-responsive" src="' + L[t % 6].src + '"></div>');
                });
        });
        var R = $(".project_listing_area .tab_content_item:nth-child(1) .pl_item:nth-child(1) .pl_item_image_inside img");
        $(".pl_item_image_inside").outerHeight(R.outerHeight()), $(".pl_item_image_inside").outerWidth(R.outerWidth());
        var j = new ScrollMagic.Controller();
        t(".tab_content_item.tab_active"),
            $(".tab_wrap .tab_head .tab_head_item").on("click", function (e) {
                j.destroy(!0), (j = new ScrollMagic.Controller());
                var i = $(this).attr("data-target");
                t(i), (window.location.hash = i), e.preventDefault();
            });
        var I = window.location.hash;
        $("[data-target=" + I + "]").trigger("click");
    }
    if (1 == projectInsidePage) {
        $("#project_inside_page").addClass("project_inside_page_loaded");
        var z = new ScrollMagic.Controller();
        $(".inside_content_wrap_inner .inside_content_item").each(function (t, e) {
            var i = $(this).find(".project_img img").length,
                n = $(this).find(".shape_image img").length,
                r = $(this).find(".qoutes_area").length,
                o = $(this).outerHeight();
            if (i) {
                var s = $(this).find(".project_img img"),
                    a = new TimelineMax();
                a.add(TweenMax.to(s[0], 1, { scale: 1.2 }), "first");
                new ScrollMagic.Scene({ triggerHook: 1, triggerElement: e, offset: 0, duration: winH + o }).setTween(a).addTo(z);
            }
            if (n) {
                var l = $(this).find(".shape_image img"),
                    c = new TimelineMax();
                c.add(TweenMax.to(l[0], 1, { y: "-100%" }), "first");
                new ScrollMagic.Scene({ triggerHook: 1, triggerElement: e, offset: 0, duration: winH + o }).setTween(c).addTo(z);
            }
            if (r) {
                var u = $(this).find(".qoutes_area"),
                    d = $(this).find(".qoutes_area .qoutes_img"),
                    p = new TimelineMax();
                p.add(TweenMax.to(u[0], 1, { y: -0.1 * winH }), "first").add(TweenMax.to(d[0], 1, { top: 0 }), "first");
                new ScrollMagic.Scene({ triggerHook: 1, triggerElement: e, offset: 0, duration: winH + o }).setTween(p).addTo(z);
            }
        });
    }
}),
    window.addEventListener("popstate", function (t) {
        $("[data-target=" + window.location.hash + "]").click();
    }),
    $(window).on("scroll", function (t) {
        var e = $(window).scrollTop();
        e < autoHomeIntroScrollTime && e > autoHomeIntroScrollTime - winH ? $(".scroll_down_sec").fadeIn() : $(".scroll_down_sec").fadeOut(),
            (1 != indexPage && 1 != projectPage) ||
                $("img[data-lazy-src]").each(function () {
                    $(this).offset().top < e + 2 * winH && $(this).attr("src", $(this).attr("data-lazy-src"));
                });
    }),
    $(window).on("resize", function () {}),
    window.addEventListener("orientationchange", function () {
        location.reload();
    }),
    $(".open-popup-link").magnificPopup({ type: "inline", midClick: !0 });
