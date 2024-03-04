import React from "react";

import Map from "@/components/Map";
import Menu from "@/components/Menu";
import SessionImportance from "@/components/SessionImportance";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

import styles from "./page.module.css";
import SessionAppreciation from "@/components/SessionAppreciation";


export default function Home() {
  return (
    <div>
      <main>
        <Menu />
        <Carousel />
        <SessionImportance />
        <SessionAppreciation />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
