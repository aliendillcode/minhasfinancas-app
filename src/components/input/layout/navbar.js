"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState("");

  const handleShowNav = () => {
    show ? setShow("") : setShow("showToogle");
  };

  return (
    <section className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.logo_menu}>
          <li>
            <Link href="/">Minhas Finanças</Link>
          </li>
        </ul>
        <ul
          onClick={handleShowNav}
          className={`${styles.menu} ${styles[show]}`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Usuários</Link>
          </li>
          <li>
            <Link href="/lancamentos">Lançamentos</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>

        <div onClick={handleShowNav} className={styles.toogle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </section>
  );
}
