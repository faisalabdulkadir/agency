import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/component/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//FETCHING DATA FROM API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  //WITHOUT AN API
  // const post = await getPost(slug);
  // console.log("single", post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image
            src={post.img}
            fill
            sizes="100%"
            alt=""
            className={styles.img}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1>{post.title}</h1>
        <div className={styles.details}>
          {post && (
            <Suspense fallback={<h3>Loading...</h3>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailsValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.detailsContent}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
