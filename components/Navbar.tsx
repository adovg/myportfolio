"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import "../app/globals.scss"; // Import global styles if needed
import { ThemeToggle } from "./ThemeToggle"; // Import the ThemeToggle component
import { LanguageSwitcher } from "./LanguageSwitcher";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.navbar__wrapper}>
      <nav className={styles.nav}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          About
        </Link>
        <Link
          href="/skills"
          className={pathname === "/skills" ? styles.active : ""}
        >
          Skills
        </Link>
        <Link
          href="/works"
          className={pathname === "/works" ? styles.active : ""}
        >
          Some my works
        </Link>
      </nav>
      <div className={styles.nav__toggles}>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
