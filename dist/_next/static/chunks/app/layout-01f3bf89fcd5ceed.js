(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    8157: function (e, n, r) {
      Promise.resolve().then(r.t.bind(r, 3854, 23)),
        Promise.resolve().then(r.t.bind(r, 4026, 23)),
        Promise.resolve().then(r.t.bind(r, 1575, 23)),
        Promise.resolve().then(r.bind(r, 5892)),
        Promise.resolve().then(r.t.bind(r, 2011, 23)),
        Promise.resolve().then(r.t.bind(r, 956, 23));
    },
    5892: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return l;
          },
        });
      var s = r(9268),
        t = r(7448),
        i = r.n(t),
        o = r(6008),
        a = r(5846),
        c = r.n(a);
      function l() {
        let e = (0, o.usePathname)();
        return (0, s.jsx)("div", {
          className: i().menu,
          children: (0, s.jsx)("ul", {
            children: [
              { src: "/", name: "Home" },
              { src: "/search-params?id=1", name: "Search params" },
              { src: "/dynamic/1", name: "Dynamic path" },
              { src: "/special-files", name: "Special files" },
            ].map((n) =>
              (0, s.jsx)(
                "li",
                {
                  className: e == n.src.split("?")[0] ? i().active : "",
                  children: (0, s.jsx)(c(), { href: n.src, children: n.name }),
                },
                n.src
              )
            ),
          }),
        });
      }
    },
    4026: function () {},
    1575: function (e) {
      e.exports = { footer: "footer_footer__Uv1gf" };
    },
    956: function (e) {
      e.exports = {
        header: "header_header__Va_ow",
        logo_subtitle: "header_logo_subtitle__SEDmu",
      };
    },
    7448: function (e) {
      e.exports = { menu: "menu_menu__D0bfE", active: "menu_active__Qg3ql" };
    },
  },
  function (e) {
    e.O(0, [452, 667, 139, 744], function () {
      return e((e.s = 8157));
    }),
      (_N_E = e.O());
  },
]);
