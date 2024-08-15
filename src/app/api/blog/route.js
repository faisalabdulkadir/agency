import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when fetching data");
  }
};
