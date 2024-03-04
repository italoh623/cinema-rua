'use client';

import styles from "./styles.module.css";

export default function Footer () {
  return (
    <div className={styles.container}>
      <img
        src="./draws/footer.svg"
        className={styles.draw}
      />
      <div className={styles['container-text']}>
        Projeto realizado para a disciplina Narrativas Inovadoras com Dados na Comunicação Digital - em colaboração com os cursos de Computação, Design e Jornalismo da UFPE.
      </div>
    </div>
);
}