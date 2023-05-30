import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    role?: string;
    firstName: string;
    lastName: string;
    gender: string;
    token: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    firstName: string;
    lastName: string;
    gender: string;
    token: string;
  }
}

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
