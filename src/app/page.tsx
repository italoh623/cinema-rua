import React from "react";

import Head from "next/head";
import { Sometype_Mono } from "next/font/google";

import styles from "./page.module.css";
import Map from "@/components/Map";



export default function Home() {
  return (
    <div>
      <main>
        <Map />
        <h1>asdasd</h1>
      </main>
      
    </div>
  );
}
