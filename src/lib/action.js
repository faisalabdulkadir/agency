"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./util";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);

  console.log(title, desc, userId, slug);

  try {
    connectToDB();
    const newPost = new Post({ title, desc, userId, slug });
    await newPost.save();
    revalidatePath("/blog");
    return console.log("saved to db");
  } catch (error) {
    console.log("something went wrong during posting");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.findOneAndDelete(id);
    revalidatePath("/blog");
    return console.log("deleted from db");
  } catch (error) {
    console.log("something went wrong during posting");
  }
};

export const handleLoginGithub = async () => {
  await signIn("github");
};

export const handleLogoutGithub = async () => {
  await signOut();
};
