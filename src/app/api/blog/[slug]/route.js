import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await Post.findOne({slug});
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when fetching data");
  }
};
