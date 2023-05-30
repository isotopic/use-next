"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [632],
  {
    3177: function (e, t, r) {
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(6006),
        i = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, t, r) {
        var n,
          l = {},
          s = null,
          c = null;
        for (n in (void 0 !== r && (s = "" + r),
        void 0 !== t.key && (s = "" + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          o.call(t, n) && !u.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: s,
          ref: c,
          props: l,
          _owner: a.current,
        };
      }
      (t.jsx = l), (t.jsxs = l);
    },
    9268: function (e, t, r) {
      e.exports = r(3177);
    },
    8727: function (e, t, r) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(6006),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = n.useState,
        a = n.useEffect,
        u = n.useLayoutEffect,
        l = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = o({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                c = n[1];
              return (
                u(
                  function () {
                    (i.value = r), (i.getSnapshot = t), s(i) && c({ inst: i });
                  },
                  [e, r, t]
                ),
                a(
                  function () {
                    return (
                      s(i) && c({ inst: i }),
                      e(function () {
                        s(i) && c({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    3276: function (e, t, r) {
      e.exports = r(8727);
    },
    730: function (e, t, r) {
      r.d(t, {
        ZP: function () {
          return eo;
        },
      });
      var n = r(6006),
        i = r(3276);
      let o = new WeakMap(),
        a = {},
        u = {},
        l = () => {},
        s = l(),
        c = Object,
        d = (e) => e === s,
        f = (e) => "function" == typeof e,
        E = (e, t) => ({ ...e, ...t }),
        g = "undefined",
        _ = typeof window != g,
        p = typeof document != g,
        y = () => _ && typeof window.requestAnimationFrame != g,
        w = (e, t) => {
          let r = o.get(e);
          return [
            () => (!d(t) && e.get(t)) || a,
            (n) => {
              if (!d(t)) {
                let i = e.get(t);
                t in u || (u[t] = i), r[5](t, E(i, n), i || a);
              }
            },
            r[6],
            () => (!d(t) && t in u ? u[t] : (!d(t) && e.get(t)) || a),
          ];
        },
        v = new WeakMap(),
        h = 0,
        R = (e) => {
          let t, r;
          let n = typeof e,
            i = e && e.constructor,
            o = i == Date;
          if (c(e) !== e || o || i == RegExp)
            t = o
              ? e.toJSON()
              : "symbol" == n
              ? e.toString()
              : "string" == n
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = v.get(e))) return t;
            if (((t = ++h + "~"), v.set(e, t), i == Array)) {
              for (r = 0, t = "@"; r < e.length; r++) t += R(e[r]) + ",";
              v.set(e, t);
            }
            if (i == c) {
              t = "#";
              let n = c.keys(e).sort();
              for (; !d((r = n.pop())); )
                d(e[r]) || (t += r + ":" + R(e[r]) + ",");
              v.set(e, t);
            }
          }
          return t;
        },
        m = !0,
        [O, T] =
          _ && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [l, l],
        S = () => {
          let e = p && document.visibilityState;
          return d(e) || "hidden" !== e;
        },
        b = (e) => (
          p && document.addEventListener("visibilitychange", e),
          O("focus", e),
          () => {
            p && document.removeEventListener("visibilitychange", e),
              T("focus", e);
          }
        ),
        V = (e) => {
          let t = () => {
              (m = !0), e();
            },
            r = () => {
              m = !1;
            };
          return (
            O("online", t),
            O("offline", r),
            () => {
              T("online", t), T("offline", r);
            }
          );
        },
        L = { initFocus: b, initReconnect: V },
        k = !n.useId,
        C = !_ || "Deno" in window,
        N = (e) => (y() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        D = C ? n.useEffect : n.useLayoutEffect,
        x = "undefined" != typeof navigator && navigator.connection,
        A =
          !C &&
          x &&
          (["slow-2g", "2g"].includes(x.effectiveType) || x.saveData),
        I = (e) => {
          if (f(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? R(e)
                : ""),
            t,
          ];
        },
        P = 0,
        F = () => ++P;
      var M = {
        __proto__: null,
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function U(...e) {
        let [t, r, n, i] = e,
          a = E(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof i ? { revalidate: i } : i || {}
          ),
          u = a.populateCache,
          l = a.rollbackOnError,
          c = a.optimisticData,
          g = !1 !== a.revalidate,
          _ = (e) => ("function" == typeof l ? l(e) : !1 !== l),
          p = a.throwOnError;
        if (f(r)) {
          let e = [],
            n = t.keys();
          for (let i = n.next(); !i.done; i = n.next()) {
            let n = i.value;
            !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
          }
          return Promise.all(e.map(y));
        }
        return y(r);
        async function y(r) {
          let i;
          let [a] = I(r);
          if (!a) return;
          let [l, E] = w(t, a),
            [y, v, h] = o.get(t),
            R = y[a],
            m = () =>
              g && (delete h[a], R && R[0])
                ? R[0](2).then(() => l().data)
                : l().data;
          if (e.length < 3) return m();
          let O = n,
            T = F();
          v[a] = [T, 0];
          let S = !d(c),
            b = l(),
            V = b.data,
            L = b._c,
            k = d(L) ? V : L;
          if ((S && E({ data: (c = f(c) ? c(k) : c), _c: k }), f(O)))
            try {
              O = O(k);
            } catch (e) {
              i = e;
            }
          if (O && f(O.then)) {
            if (
              ((O = await O.catch((e) => {
                i = e;
              })),
              T !== v[a][0])
            ) {
              if (i) throw i;
              return O;
            }
            i && S && _(i) && ((u = !0), E({ data: (O = k), _c: s }));
          }
          u && !i && (f(u) && (O = u(O, k)), E({ data: O, _c: s })),
            (v[a][1] = F());
          let C = await m();
          if ((E({ _c: s }), i)) {
            if (p) throw i;
            return;
          }
          return u ? C : O;
        }
      }
      let j = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        W = (e, t) => {
          if (!o.has(e)) {
            let r = E(L, t),
              n = {},
              i = U.bind(s, e),
              a = l,
              u = {},
              c = (e, t) => {
                let r = u[e] || [];
                return (u[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
              },
              d = (t, r, n) => {
                e.set(t, r);
                let i = u[t];
                if (i) for (let e of i) e(r, n);
              },
              f = () => {
                if (!o.has(e) && (o.set(e, [n, {}, {}, {}, i, d, c]), !C)) {
                  let t = r.initFocus(setTimeout.bind(s, j.bind(s, n, 0))),
                    i = r.initReconnect(setTimeout.bind(s, j.bind(s, n, 1)));
                  a = () => {
                    t && t(), i && i(), o.delete(e);
                  };
                }
              };
            return f(), [e, i, f, a];
          }
          return [e, o.get(e)[4]];
        },
        $ = (e, t, r, n, i) => {
          let o = r.errorRetryCount,
            a = i.retryCount,
            u =
              ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
              r.errorRetryInterval;
          (d(o) || !(a > o)) && setTimeout(n, u, i);
        },
        q = (e, t) => R(e) == R(t),
        [J, B] = W(new Map()),
        Y = E(
          {
            onLoadingSlow: l,
            onSuccess: l,
            onError: l,
            onErrorRetry: $,
            onDiscarded: l,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: A ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: A ? 5e3 : 3e3,
            compare: q,
            isPaused: () => !1,
            cache: J,
            mutate: B,
            fallback: {},
          },
          { isOnline: () => m, isVisible: S }
        ),
        Z = (e, t) => {
          let r = E(e, t);
          if (t) {
            let { use: n, fallback: i } = e,
              { use: o, fallback: a } = t;
            n && o && (r.use = n.concat(o)), i && a && (r.fallback = E(i, a));
          }
          return r;
        },
        z = (0, n.createContext)({}),
        G = (e) => {
          let { value: t } = e,
            r = (0, n.useContext)(z),
            i = f(t),
            o = (0, n.useMemo)(() => (i ? t(r) : t), [i, r, t]),
            a = (0, n.useMemo)(() => (i ? o : Z(r, o)), [i, r, o]),
            u = o && o.provider,
            l = (0, n.useRef)(s);
          u && !l.current && (l.current = W(u(a.cache || J), o));
          let c = l.current;
          return (
            c && ((a.cache = c[0]), (a.mutate = c[1])),
            D(() => {
              if (c) return c[2] && c[2](), c[3];
            }, []),
            (0, n.createElement)(z.Provider, E(e, { value: a }))
          );
        },
        H = _ && window.__SWR_DEVTOOLS_USE__,
        K = H ? window.__SWR_DEVTOOLS_USE__ : [],
        Q = (e) =>
          f(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        X = () => E(Y, (0, n.useContext)(z)),
        ee = (e) => (t, r, n) => {
          let i =
            r &&
            ((...e) => {
              let [n] = I(t),
                [, , , i] = o.get(J),
                a = i[n];
              return a ? (delete i[n], a) : r(...e);
            });
          return e(t, i, n);
        },
        et = K.concat(ee),
        er = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      H && (window.__SWR_DEVTOOLS_REACT__ = n);
      let en = { dedupe: !0 },
        ei = (e, t, r) => {
          let {
              cache: a,
              compare: u,
              suspense: l,
              fallbackData: c,
              revalidateOnMount: g,
              revalidateIfStale: _,
              refreshInterval: p,
              refreshWhenHidden: y,
              refreshWhenOffline: v,
              keepPreviousData: h,
            } = r,
            [R, m, O] = o.get(a),
            [T, S] = I(e),
            b = (0, n.useRef)(!1),
            V = (0, n.useRef)(!1),
            L = (0, n.useRef)(T),
            x = (0, n.useRef)(t),
            A = (0, n.useRef)(r),
            P = () => A.current,
            j = () => P().isVisible() && P().isOnline(),
            [W, $, q, J] = w(a, T),
            B = (0, n.useRef)({}).current,
            Y = d(c) ? r.fallback[T] : c,
            Z = (e, t) => {
              for (let r in B) {
                let n = r;
                if ("data" === n) {
                  if (!u(e[n], t[n]) && (!d(e[n]) || !u(ei, t[n]))) return !1;
                } else if (t[n] !== e[n]) return !1;
              }
              return !0;
            },
            z = (0, n.useMemo)(() => {
              let e =
                  !!T &&
                  !!t &&
                  (d(g) ? !P().isPaused() && !l && (!!d(_) || _) : g),
                r = (t) => {
                  let r = E(t);
                  return (delete r._k, e)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                n = W(),
                i = J(),
                o = r(n),
                a = n === i ? o : r(i),
                u = o;
              return [
                () => {
                  let e = r(W()),
                    t = Z(e, u);
                  return t
                    ? ((u.data = e.data),
                      (u.isLoading = e.isLoading),
                      (u.isValidating = e.isValidating),
                      (u.error = e.error),
                      u)
                    : ((u = e), e);
                },
                () => a,
              ];
            }, [a, T]),
            G = (0, i.useSyncExternalStore)(
              (0, n.useCallback)(
                (e) =>
                  q(T, (t, r) => {
                    Z(r, t) || e();
                  }),
                [a, T]
              ),
              z[0],
              z[1]
            ),
            H = !b.current,
            K = R[T] && R[T].length > 0,
            Q = G.data,
            X = d(Q) ? Y : Q,
            ee = G.error,
            et = (0, n.useRef)(X),
            ei = h ? (d(Q) ? et.current : Q) : X,
            eo =
              (!K || !!d(ee)) &&
              (H && !d(g)
                ? g
                : !P().isPaused() && (l ? !d(X) && _ : d(X) || _)),
            ea = !!(T && t && H && eo),
            eu = d(G.isValidating) ? ea : G.isValidating,
            el = d(G.isLoading) ? ea : G.isLoading,
            es = (0, n.useCallback)(
              async (e) => {
                let t, n;
                let i = x.current;
                if (!T || !i || V.current || P().isPaused()) return !1;
                let o = !0,
                  a = e || {},
                  l = !O[T] || !a.dedupe,
                  c = () =>
                    k
                      ? !V.current && T === L.current && b.current
                      : T === L.current,
                  E = { isValidating: !1, isLoading: !1 },
                  g = () => {
                    $(E);
                  },
                  _ = () => {
                    let e = O[T];
                    e && e[1] === n && delete O[T];
                  },
                  p = { isValidating: !0 };
                d(W().data) && (p.isLoading = !0);
                try {
                  if (
                    (l &&
                      ($(p),
                      r.loadingTimeout &&
                        d(W().data) &&
                        setTimeout(() => {
                          o && c() && P().onLoadingSlow(T, r);
                        }, r.loadingTimeout),
                      (O[T] = [i(S), F()])),
                    ([t, n] = O[T]),
                    (t = await t),
                    l && setTimeout(_, r.dedupingInterval),
                    !O[T] || O[T][1] !== n)
                  )
                    return l && c() && P().onDiscarded(T), !1;
                  E.error = s;
                  let e = m[T];
                  if (!d(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return g(), l && c() && P().onDiscarded(T), !1;
                  let a = W().data;
                  (E.data = u(a, t) ? a : t),
                    l && c() && P().onSuccess(t, T, r);
                } catch (r) {
                  _();
                  let e = P(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((E.error = r),
                    l &&
                      c() &&
                      (e.onError(r, T, e),
                      (!0 === t || (f(t) && t(r))) &&
                        j() &&
                        e.onErrorRetry(
                          r,
                          T,
                          e,
                          (e) => {
                            let t = R[T];
                            t && t[0] && t[0](M.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (a.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (o = !1), g(), !0;
              },
              [T, a]
            ),
            ec = (0, n.useCallback)((...e) => U(a, L.current, ...e), []);
          if (
            (D(() => {
              (x.current = t), (A.current = r), d(Q) || (et.current = Q);
            }),
            D(() => {
              if (!T) return;
              let e = es.bind(s, en),
                t = 0,
                r = (r, n = {}) => {
                  if (r == M.FOCUS_EVENT) {
                    let r = Date.now();
                    P().revalidateOnFocus &&
                      r > t &&
                      j() &&
                      ((t = r + P().focusThrottleInterval), e());
                  } else if (r == M.RECONNECT_EVENT)
                    P().revalidateOnReconnect && j() && e();
                  else if (r == M.MUTATE_EVENT) return es();
                  else if (r == M.ERROR_REVALIDATE_EVENT) return es(n);
                },
                n = er(T, R, r);
              return (
                (V.current = !1),
                (L.current = T),
                (b.current = !0),
                $({ _k: S }),
                eo && (d(X) || C ? e() : N(e)),
                () => {
                  (V.current = !0), n();
                }
              );
            }, [T]),
            D(() => {
              let e;
              function t() {
                let t = f(p) ? p(W().data) : p;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !W().error && (y || P().isVisible()) && (v || P().isOnline())
                  ? es(en).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [p, y, v, T]),
            (0, n.useDebugValue)(ei),
            l && d(X) && T)
          ) {
            if (!k && C)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            throw (
              ((x.current = t),
              (A.current = r),
              (V.current = !1),
              d(ee) ? es(en) : ee)
            );
          }
          return {
            mutate: ec,
            get data() {
              return (B.data = !0), ei;
            },
            get error() {
              return (B.error = !0), ee;
            },
            get isValidating() {
              return (B.isValidating = !0), eu;
            },
            get isLoading() {
              return (B.isLoading = !0), el;
            },
          };
        };
      c.defineProperty(G, "defaultValue", { value: Y });
      let eo = function (...e) {
        let t = X(),
          [r, n, i] = Q(e),
          o = Z(t, i),
          a = ei,
          { use: u } = o,
          l = (u || []).concat(et);
        for (let e = l.length; e--; ) a = l[e](a);
        return a(r, n || o.fetcher || null, o);
      };
    },
  },
]);
