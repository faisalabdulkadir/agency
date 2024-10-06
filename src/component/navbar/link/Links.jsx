"use client";
import styles from "./links.module.css";
import NavLink from "../navLink/NavLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogoutGithub } from "@/lib/action";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // Temporary conditions
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={index} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogoutGithub}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        src="/menu.png"
        height={30}
        width={50}
        alt=""
        onClick={() => setOpen(!open)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
            <NavLink item={link} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
