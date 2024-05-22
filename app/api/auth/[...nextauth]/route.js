import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/db/models/user";
import { connectToDB } from "@/db/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        //connect to database
        await connectToDB();
        //check for existing user
        const existUser = await User.findOne({ email: profile.email });
        //if there is no existing user create new user in db

        if (!existUser) {
          await User.create({
            email: profile.email,
            username:
              profile.name.toLowerCase() +
              Math.random().toString(36).substring(2),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async session({ session }) {
      const sesstionUser = await User.findOne({ email: session.user.email });
      session.user.id = sesstionUser._id.toString();
      return session;
    },
  },
});

export { handler as GET, handler as POST };
