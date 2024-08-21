"use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";

// const HydrationTestSSR = dynamic(() => import("@/component/hydrationTest"), {
//   ssr: false,
// });

// export const metadata = {
//   title: "Contact page",
//   description: "Contact description",
// };

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" sizes="100%" fill className={styles.img} alt="" />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Phone number (optional)" />
          <textarea cols={30} rows={10} placeholder="Message"></textarea>
          <button onClick={() => console.log("clicked")}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
