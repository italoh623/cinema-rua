'use client';

import styles from "./styles.module.css";

export default function Menu() {

  const handleClick = () => console.log("KKKKK");

  return(
    <menu className={styles.container}>
      <div className={styles.title}>
        <h1>CINEMA DE RUA</h1>
        <h2>DO RECIFE</h2>
      </div>
      <div className={styles.menu}>
        <li><button onClick={handleClick}>INÍCIO</button></li>
        <li><button>CINEMA DE RUA</button></li>
        <li><button>VALORIZAÇÃO</button></li>
        <li><button>AFETIVIDADE</button></li>
        <li><button>O QUE FAZER?</button></li>
        <li><button>O PROJETO</button></li>
      </div>
      
    </menu>
  )
}