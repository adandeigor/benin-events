import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs';
import { prisma } from "./lib/prisma-client";
import { signInSchema } from "./lib/type-zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Resend, Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = null
      const { email, password } = await signInSchema.parseAsync(credentials)
      // logic to salt and hash password
      const pwHash = saltAndHashPassword(credentials.password as string)

      // logic to verify if the user exists
      user = await getUserFromDb(credentials.email, pwHash)

      if (!user) {
        
        throw new Error("Invalid credentials.")
      }

      // return user object with their profile data
      return user
    },
  })],
})
function saltAndHashPassword(password: string): string {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

async function getUserFromDb(email: unknown, pwHash: string): Promise<any> {
  if (typeof email !== 'string') {
    throw new Error("Invalid email type.");
  }

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (user && bcrypt.compareSync(pwHash, user.password)) {
    return user;
  }

  return null;
}

