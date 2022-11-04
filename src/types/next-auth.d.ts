import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string;
    role?: string;
    avatar?: string;
    accessToken?: strn;
  }
}

declare module 'next-auth' {
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: string;
    accessToken: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      image?: string;
      role: string;
      accessToken: string;
    };
  }
}
interface Account {}
interface Profile {}
