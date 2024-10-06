import { auth } from "@/lib/auth";
import Links from "./link/Links";
import styles from "./navbar.module.css";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MyStuff</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
