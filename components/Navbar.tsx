import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss"; // Assuming you have a CSS module for styling
import "../app/globals.scss"; // Import global styles if needed

const Navbar = () => {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <Link href="/">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/works">Some my works</Link>
      </nav>
    </div>
  );
};

export default Navbar;
