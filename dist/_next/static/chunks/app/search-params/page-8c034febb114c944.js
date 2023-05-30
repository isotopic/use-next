(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [157],
  {
    8297: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 1077));
    },
    1077: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return o;
          },
        });
      var t = n(9268),
        s = n(6008);
      function o() {
        let e = (0, s.useSearchParams)();
        return (0, t.jsx)("main", {
          children: (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { children: "/search-params/page.tsx" }),
              (0, t.jsxs)("code", {
                children: [
                  "searchParams.get(id)",
                  (0, t.jsx)("br", {}),
                  (0, t.jsx)("b", { children: e.get("id") }),
                ],
              }),
            ],
          }),
        });
      }
    },
    3177: function (e, r, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var t = n(6006),
        s = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        c =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(e, r, n) {
        var t,
          u = {},
          f = null,
          a = null;
        for (t in (void 0 !== n && (f = "" + n),
        void 0 !== r.key && (f = "" + r.key),
        void 0 !== r.ref && (a = r.ref),
        r))
          o.call(r, t) && !i.hasOwnProperty(t) && (u[t] = r[t]);
        if (e && e.defaultProps)
          for (t in (r = e.defaultProps)) void 0 === u[t] && (u[t] = r[t]);
        return {
          $$typeof: s,
          type: e,
          key: f,
          ref: a,
          props: u,
          _owner: c.current,
        };
      }
      (r.jsx = u), (r.jsxs = u);
    },
    9268: function (e, r, n) {
      "use strict";
      e.exports = n(3177);
    },
    6008: function (e, r, n) {
      e.exports = n(167);
    },
  },
  function (e) {
    e.O(0, [667, 139, 744], function () {
      return e((e.s = 8297));
    }),
      (_N_E = e.O());
  },
]);
