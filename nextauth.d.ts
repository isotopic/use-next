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