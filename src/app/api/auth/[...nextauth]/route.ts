import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

function getLoginURL() {
  const url = process.env.VERCEL_URL + "" + process.env.LOGIN_PATH;
  if (!url.startsWith("http")) {
    return "https://" + url;
  }
  return url;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(getLoginURL(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        user.name = user.firstName;
        // For testing purposes only since dummyjson does not provide role property
        user.role = user.gender == "female" ? "admin" : "user";

        return res.ok && user ? user : null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Merge user properties from dummyjson into nextauth token
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
