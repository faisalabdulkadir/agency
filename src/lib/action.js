"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDB } from "./util";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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

export const register = async (data) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(data);
  console.log({ username, email, password, passwordRepeat, img });
  if (password !== passwordRepeat) {
    return "Password do not match";
  }
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      return "User already exist in our record";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return "user saved to db";
  } catch (error) {
    console.log(error);
    return { Error: "Something went wrong" };
  }
  //test if user already exists then notify us
  //if user doesn't exist create a new user and save on the db
};
