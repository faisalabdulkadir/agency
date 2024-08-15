import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./util";

export const addPost = async (formData) => {
  "use server";
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
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
   await Post.findOneAndDelete(id)
    revalidatePath("/blog");
    return console.log("deleted from db");
  } catch (error) {
    console.log("something went wrong during posting");
  }
};

