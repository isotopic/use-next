import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


function getLoginURL(){
  console.log('secret', process.env.NEXTAUTH_SECRET);
  let url = process.env.VERCEL_URL + '' + process.env.LOGIN_PATH;
  if(!url.startsWith('http')){
    return 'https://' + url;
  }
  return url;
}

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
                return user

              }catch(e){
                console.log(e);
                return null

              }
              
            }
          })
    ],
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
