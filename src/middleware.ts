import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === "/restricted-server-role") {
        return token?.role === "admin";
      }
      // only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/restricted-server", "/restricted-server-role"],
};
