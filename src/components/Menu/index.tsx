"use client";

import styles from "./styles.module.css";

export default function Menu() {
  const handleClick = (path: string) => {
    return () => window.location.href = path;
  };

  return (
    <menu className={styles.container}>
      <div className={styles.title} onClick={handleClick('/')}>
        <h1>CINEMA DE RUA</h1>
        <h2>DO RECIFE</h2>
      </div>
      <div className={styles.menu}>
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
          <a className={styles.menuButton}>O QUE FAZER?</a>
        </li>
        <li>
          <a className={styles.menuButton} onClick={handleClick('/about')}>O PROJETO</a>
        </li>
      </div>
    </menu>
  );
}
