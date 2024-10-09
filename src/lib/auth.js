import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./util";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (cred) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: cred.username });
    // if (!user) return "Wrong credentials";
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        cred.password,
        user.password
      );
      console.log({ isPasswordCorrect });
      if (isPasswordCorrect) return user
    }

    // if (!isPasswordCorrect) return "Wrong credentials";

    return null;
  } catch (error) {
    console.log(error);
    throw new Error("Wrong credentials");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(cred) {
        try {
          const user = await login(cred);
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
          return "Invalid credentials";
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log({ user, account, profile });
      if (account.provider === "github") {
        connectToDB();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
