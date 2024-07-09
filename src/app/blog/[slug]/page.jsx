import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/23698640/pexels-photo-23698640/free-photo-of-a-wind-turbine-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1>Title</h1>
        <div className={styles.details}>
          <Image
            src="https://images.pexels.com/photos/23698640/pexels-photo-23698640/free-photo-of-a-wind-turbine-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={50}
            height={50}
            alt=""
            className={styles.avatar}
          />
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Author</span>
            <span className={styles.detailsValue}>Jhon Smith</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailsValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.detailsContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
