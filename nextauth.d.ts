import "next-auth/jwt"
/*
export enum Role {
    user = "user",
    admin = "admin",
}

declare module "next-auth" {
    interface User {
        role?: Role;
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
      role?: Role;
      firstName: string;
      lastName: string;
      gender: string;
      token: string;
    }
  }
  */


// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}