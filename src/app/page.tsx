import React from "react";

import Head from "next/head";
import { Sometype_Mono } from "next/font/google";

import styles from "./page.module.css";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div>
      <main>
        <Menu />
        <Carousel />
        <Map />
        <h1>asdasd</h1>
      </main>
      
    </div>
  );
}
