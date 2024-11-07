import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const url = request.nextUrl.pathname;
      const isOnAdminPage = url.startsWith("/admin");
      const isOnBlogPage = url.startsWith("/blog");
      const isOnLoginPage = url.startsWith("/login");

      console.log({ isOnAdminPage, isOnBlogPage, isOnLoginPage });
      //ONLY ADMIN CAN ACCESS THE ADMIN PAGE
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      //ONLY AUTHENTICATED USERS CAN ACCESS THE BLOG PAGE
      if (isOnBlogPage && !user) {
        return false;
      }

      //ONLY UNAUTHENTICATED USERS CAN SEE THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      console.log(auth);
      return true;
    },
  },
  providers: [],
};
