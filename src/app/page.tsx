import React from "react";

import Head from "next/head";
import { Sometype_Mono } from "next/font/google";

import styles from "./page.module.css";
import Map from "@/components/Map";
import Menu from "@/components/Menu";



export default function Home() {
  return (
    <div>
      <main>
        <Menu />
        <Map />
        <h1>asdasd</h1>
      </main>
      
    </div>
  );
}
