(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [105],
  {
    7015: function (n, e, i) {
      Promise.resolve().then(i.bind(i, 4884));
    },
    4884: function (n, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return d;
          },
        });
      var t = i(9268),
        r = i(730);
      let c = function () {
        for (var n = arguments.length, e = Array(n), i = 0; i < n; i++)
          e[i] = arguments[i];
        return fetch(...[e]).then((n) => n.json());
      };
      function d(n) {
        let { params: e } = n,
          { data: i, error: d } = (0, r.ZP)(
            "https://jsonplaceholder.typicode.com/todos/".concat(e.id),
            c
          );
        return d
          ? (0, t.jsx)("div", { children: "Failed to load" })
          : i
          ? (0, t.jsx)("main", {
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h3", { children: "/dynamic/[id]/page.tsx" }),
                  (0, t.jsxs)("code", {
                    children: [
                      (0, t.jsxs)("b", { children: ["ID: ", i.id] }),
                      (0, t.jsx)("br", {}),
                      i.title,
                    ],
                  }),
                ],
              }),
            })
          : (0, t.jsx)("div", { children: "Loading..." });
      }
    },
  },
  function (n) {
    n.O(0, [632, 667, 139, 744], function () {
      return n((n.s = 7015));
    }),
      (_N_E = n.O());
  },
]);
