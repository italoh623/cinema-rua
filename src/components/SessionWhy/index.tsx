'use client';

import styles from "./styles.module.css";

export default function SessionWhy() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.report}>
          <span>POR QUÊ?</span>
          <p>É necessário que reconheçamos a importância dos cinemas de rua não apenas como lugares que contam sobre a história do Cinema e da própria cidade, mas como locais de esperança para o futuro. É essencial valorizar esses equipamentos culturais e incentivar que todas as camadas da sociedade se envolvam nessa causa, que ocupem esses espaços.</p>
        
          <span>COMO?</span>
          <p>Para que isso ocorra, além da participação popular, também é preciso que haja recursos públicos para preservar e financiar essas ferramentas culturais. Desde incentivos fiscais até políticas de revitalização urbana, é fundamental que todos os níveis de governo se unam para garantir que os cinemas de rua não se apaguem por completo.</p>
        </section>
      </div>
        {/* <img className={styles.image} src="./draws/ornamento.svg" alt="" /> */}
    </div>
  )
}