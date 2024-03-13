"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export default function SessionMore() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const textRef = useRef(null);

  const fullText = 'Saiba mais sobre';

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
      if (currentIndex < fullText.length) {
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
        setText(prevText => prevText + fullText[currentIndex]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [text, startAnimation]);

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
        <p ref={textRef}>{text}</p>
        <button onClick={handleClick('/about')}>O PROJETO</button>
      </div>
    </div>
  );
}
