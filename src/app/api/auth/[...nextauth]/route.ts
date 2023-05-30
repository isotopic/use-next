import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


function getLoginURL(){
  const url = process.env.VERCEL_URL + '' + process.env.LOGIN_PATH;
  if(!url.startsWith('http')){
    return 'https://' + url;
  }
  return url;
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "username" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
              const res = await fetch(getLoginURL(), {
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

              if (res.ok && user) {
                return user
              }
              
              return null
            }
          })
    ],
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token }) {
        token.userRole = "admin"
        return token
      },
    },
    /*
    callbacks: {
      async jwt({ token, user }) {
        console.log('======================== config callback: JWT');
        console.log(token);
        
        return {...token, ...user};
      },
      async session({ session, token }) {
        console.log('======================== config callback: SESSION');
        
        console.log(session);
        console.log(token);
        
        session.user = token as any;
        return session;
      },
    },
    */
});

export { handler as GET, handler as POST}
