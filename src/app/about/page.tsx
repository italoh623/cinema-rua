import React from "react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Motivation from "@/components/About/Motivation";
import Team from "@/components/About/Team";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Menu />
      <main>
        <img className={styles.image} src="./images/about/cinema.svg" alt="" />
        <Motivation />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
