import Links from "./link/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MyStuff</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
