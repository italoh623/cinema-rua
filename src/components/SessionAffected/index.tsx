'use client';

import styles from "./styles.module.css";

export default function SessionAffected() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.report}>
          <h1 className={styles.title}>Mas como os cinemas de rua são afetados por isso?</h1>
          <p>Com menos público frequentando esse tipo de equipamento, há menos interesse e pressão social pela manutenção desses espaços. Nesse sentido, os equipamentos que já vêm sendo ameaçados pelos interesses neoliberais de tornar tudo financeiramente lucrativo, vão aos poucos perdendo seu motivo de existência, isto é, atender aos seus frequentadores.</p>
        
        </section>
      </div>
      <img className={styles.image} src="./images/session-why/ornamento.svg" alt="" />
    </div>
  )
}