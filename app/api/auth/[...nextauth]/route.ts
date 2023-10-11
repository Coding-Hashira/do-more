import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GitHub_CLIENT_ID ?? "",
      clientSecret: process.env.GitHub_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };
