"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export interface QuoteProps {
  quote: string;
  description: string;
  inverted?: boolean;
}

export default function Quote({ quote, description, inverted }: QuoteProps) {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Define o quanto do elemento precisa estar visível
    };

    const observer = new IntersectionObserver(entries => {
      console.log("AQUI")
      console.log(entries)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const timer = setTimeout(() => {
      if (currentIndex < quote.length) {
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
        setText(prevText => prevText + quote[currentIndex]);
      }
    }, 25);

    return () => clearTimeout(timer);
  }, [text, startAnimation]);

  return (
    <div className={styles.container} ref={textRef}>
      <img className={styles.vector} src="./images/quote-vector.svg"/>
      <div 
        className={styles.content} 
        style={{flexDirection: inverted ? "column-reverse" : "column"}}
      >  
        <span className={styles.description}>
          { description }
        </span>
        <div className={styles.quote}>
          <img src="./images/quote-left.svg"/>
          <span>{ text }</span>
        </div>
      </div>
    </div>
  );
}
