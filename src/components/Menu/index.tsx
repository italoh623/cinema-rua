"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import Link from "next/link";



export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (path: string) => {
    return () => window.location.href = path;
  };

  return (
    <menu className={styles.container}>
      <div className={styles.principal}>
        <div className={styles.menuTitle} onClick={handleClick('/')}>
          <h1>CINEMA DE RUA</h1>
          <h2>DO RECIFE</h2>
        </div>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          <img src={`${menuOpen ? "./images/close.svg" : "./images/menu-bar.svg"}`}/>
        </button>
      </div>
      
      <div className={[styles.menu, menuOpen ? styles.open : ""].join(' ')}>
        <li>
          <Link className={styles.menuButton} href='/'>INÍCIO</Link>
        </li>
        <li>
          <Link className={styles.menuButton} href="/#cinema-de-rua">CINEMA DE RUA</Link>
        </li>
        <li>
          <Link className={styles.menuButton} href="/#valorizacao">VALORIZAÇÃO</Link>
        </li>
        <li>
          <Link className={styles.menuButton} href="/#afetividade">AFETIVIDADE</Link>
        </li>
        <li>
          <Link className={styles.menuButton} href="/#panorama">PANORAMA</Link>
        </li>
        <li>
          <Link className={styles.menuButton} href="/#o-que-fazer">O QUE FAZER?</Link>
        </li>
        <li>
          <Link className={styles.menuButton} href='/about'>O PROJETO</Link>
        </li>
      </div>
    </menu>
  );
}
