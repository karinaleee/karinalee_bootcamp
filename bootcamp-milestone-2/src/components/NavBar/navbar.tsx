import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.page_title}>Karina&apos;s Personal Website</h1>
      <nav className={style.nav_list}>
        {/* We'll use Link from now on instead of <a></a>
           Links are just Next.js wrapper around <a> elements anyways
        */}
        <Link className={style.link} href="/">Home</Link>
        <Link className={style.link} href="/blogs">Blog</Link>
        <Link className={style.link} href="/resume">Resume</Link>
        <Link className={style.link} href="/contact">Contact Me</Link>
        <Link className={style.link} href="/portfolio">Portfolio</Link>
        {/* More Links ... */}
      </nav>
    </header>
  );
}
