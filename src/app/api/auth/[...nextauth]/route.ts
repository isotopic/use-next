import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "name@email.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
              
              try{
                const res = await fetch("http://localhost:3000/api/login", {
                  method: "POST",
                  headers: {
                    "Content-Type":"application/json",
                  },
                  body: JSON.stringify({
                    "username": credentials?.username,
                    "password": credentials?.password
                  })
                }) 
                const user = await res.json();
                user.name = user.firstName;
                return user

              }catch(e){
                console.log(e);
                return null

              }
              
            }
          })
    ],
    session: {
      strategy: "jwt"
    },
    callbacks: {
      async jwt({ token, user }) {
        /* Step 1: include custom user properties inside token */
        return {...token, ...user};
      },
      session({ session, token }) {
        /* Step 2: update the session.user based on the token object */
        session.user = token as any;
        return session;
      },
    },
});

export { handler as GET, handler as POST}
