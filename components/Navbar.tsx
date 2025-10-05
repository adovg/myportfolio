"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import "../app/globals.scss"; // Import global styles if needed
import { ThemeToggle } from "./ThemeToggle"; // Import the ThemeToggle component
// import { LanguageSwitcher } from "./LanguageSwitcher";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className={styles.navbar__wrapper}>
      <button
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={
            isMenuOpen ? styles.hamburger__line_active : styles.hamburger__line
          }
        ></span>
        <span
          className={
            isMenuOpen ? styles.hamburger__line_active : styles.hamburger__line
          }
        ></span>
        <span
          className={
            isMenuOpen ? styles.hamburger__line_active : styles.hamburger__line
          }
        ></span>
      </button>

      {/* Main nav */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ""}`}>
        {isMenuOpen && (
          <button
            className={styles.close_button}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        )}
        <Link
          href="/"
          className={pathname === "/" ? styles.active : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/skills"
          className={pathname === "/skills" ? styles.active : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          href="/works"
          className={pathname === "/works" ? styles.active : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Works
        </Link>
        <Link
          href="/contacts"
          className={pathname === "/contacts" ? styles.active : ""}
          onClick={() => setIsMenuOpen(false)}
        >
          Contacts
        </Link>
      </nav>
      <div className={styles.nav__toggles}>
        <ThemeToggle />
        {/* <LanguageSwitcher /> */}
      </div>
    </div>
  );
};

export default Navbar;
