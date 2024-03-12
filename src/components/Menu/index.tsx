"use client";

import styles from "./styles.module.css";
import { useState } from "react";



export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (path: string) => {
    return () => window.location.href = path;
  };

  return (
    <menu className={styles.container}>
      <div className={styles.principal}>
        <div className={styles.title} onClick={handleClick('/')}>
          <h1>CINEMA DE RUA</h1>
          <h2>DO RECIFE</h2>
        </div>
        <img src={`${menuOpen ? "./images/close.svg" : "./images/menu-bar.svg"}`} className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}/>
      </div>
      
      <div className={[styles.menu, menuOpen ? styles.open : ""].join(' ')}>
        <li>
          <a className={styles.menuButton} onClick={handleClick('/')}>INÍCIO</a>
        </li>
        <li>
          <a className={styles.menuButton} href="#importance">CINEMA DE RUA</a>
        </li>
        <li>
          <a className={styles.menuButton} href="#appreciation">VALORIZAÇÃO</a>
        </li>
        <li>
          <a className={styles.menuButton} href="#affection">AFETIVIDADE</a>
        </li>
        <li>
          <a className={styles.menuButton} href="#panorama">PANORAMA</a>
        </li>
        <li>
          <a className={styles.menuButton} href="#disappearance">O QUE FAZER?</a>
        </li>
        <li>
          <a className={styles.menuButton} onClick={handleClick('/about')}>O PROJETO</a>
        </li>
      </div>
    </menu>
  );
}
