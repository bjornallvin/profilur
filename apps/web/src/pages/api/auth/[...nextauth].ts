import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@profilur/database'
import { type DefaultSession } from 'next-auth'
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user']
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

const prisma = new PrismaClient()

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // session({ session, user }) {
    //   console.log("getting session...", new Date().toLocaleTimeString());
    //   sleep(2);
    //   if (session.user) {
    //     session.user.id = user.id;
    //     // session.user.role = user.role; <-- put other properties on the session here
    //   }
    //   return session;
    // },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
})
