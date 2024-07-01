import styles from "./footer.module.css"
const Footer = () => {
  return <div className={styles.container}>
    <div className={styles.logo}>MyStuff</div>
    <div className={styles.text}>
      MyStuff Creative Agency 	&#169; All rights reserved
    </div>
  </div>;
};

export default Footer;
