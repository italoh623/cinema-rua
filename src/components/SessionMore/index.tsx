"use client";

import styles from "./styles.module.css";

export default function SessionMore() {
  const handleClick = (path: string) => {
    return () => window.location.href = path;
  };

  return (
    <div className={styles.container} id="affection">
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src="./images/session-affection/illustration-2.svg"
          alt=""
        />
        <img
          style={{ "opacity": "0", "position": "relative" }}
          className={styles.image}
          src="./images/session-affection/illustration-2.svg"
          alt=""
        />
      </div>

      <div className={styles.findOutMore}>
        <p>Saiba mais sobre</p>
        <button onClick={handleClick('/about')}>O PROJETO</button>
      </div>
    </div>
  );
}
