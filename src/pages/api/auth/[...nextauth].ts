import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import client from '@lib/client';
import { SignInDocument, MutationSignInArgs, Session } from '@ctypes/graphql';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const {
          data: {
            signIn: { token, user },
          },
        } = await client.mutate<{ signIn: Session }, MutationSignInArgs>({
          mutation: SignInDocument,
          variables: { signInInput: { email, password } },
        });

        return {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar,
          role: user.role,
          accessToken: token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = `${user.firstName} ${user.lastName}`;
        token.role = user.role || '';
        token.accessToken = user.accessToken;
        token.avatar = user.avatar;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.image = token.avatar;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signup',
    error: '/auth/signin', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
  },
});
