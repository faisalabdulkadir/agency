import { getUser } from "@/lib/data";
import styles from "../postUser/postUser.module.css";
import Image from "next/image";

// const getUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const postUser = await getUser(userId);
  const postUser = await getUser(userId);
  console.log("username", postUser);

  return (
    <div className={styles.container}>
      <Image
        src={postUser.img ? postUser.img : "/noavatar.png"}
        width={50}
        height={50}
        sizes="100%"
        alt=""
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{postUser?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
