"use client";

import styles from "./styles.module.css";

import { type Person, editors, developers, designers } from "./team";

export default function Team() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CONHEÇA NOSSA EQUIPE</h1>

      <h2 className={styles.subtitle}>redatores</h2>
      <section className={styles.team}>
        {editors.map((editor: Person, index) => {
          return (
            <li key={`editor-${index}`} className={styles.member}>
              <img src={editor.picture} className={styles.teamPicture} />
              <div className={styles.teamInfo}>
                <span>{editor.name}</span>
                <span className={styles.teamRole}>{editor.role}</span>
              </div>
            </li>
          );
        })}
      </section>

      <img
        className={styles.separator}
        src="./images/about/separator.svg"
        alt=""
      />

      <h2 className={styles.subtitle}>desenvolvedores</h2>
      <section className={styles.team}>
        {developers.map((developer: Person, index) => {
          return (
            <li key={`developer-${index}`} className={styles.member}>
              <img src={developer.picture} className={styles.teamPicture} />
              <div className={styles.teamInfo}>
                <span>{developer.name}</span>
                <span className={styles.teamRole}>{developer.role}</span>
              </div>
            </li>
          );
        })}
      </section>

      <img
        className={styles.separator}
        src="./images/about/separator.svg"
        alt=""
      />

      <h2 className={styles.subtitle}>designers</h2>
      <section className={styles.team}>
        {designers.map((designer: Person, index) => {
          return (
            <li key={`designer-${index}`} className={styles.member}>
              <img src={designer.picture} className={styles.teamPicture} />
              <div className={styles.teamInfo}>
                <span>{designer.name}</span>
                <span className={styles.teamRole}>{designer.role}</span>
              </div>
            </li>
          );
        })}
      </section>
    </div>
  );
}
