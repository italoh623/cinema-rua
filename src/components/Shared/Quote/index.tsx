"use client";

import styles from "./styles.module.css";

export interface QuoteProps {
  quote: string;
  description: string;
}

export default function Quote({ quote, description }: QuoteProps) {
  return (
    <div className={styles.container}>
      <img className={styles.vector} src="./images/quote-vector.svg"/>
      <div className={styles.content}>  
        <span className={styles.description}>
          { description }
        </span>
        <div className={styles.quote}>
          <img src="./images/quote-left.svg"/>
          <span>{ quote }</span>
        </div>
      </div>
    </div>
  );
}
