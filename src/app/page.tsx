import React from "react";

import Map from "@/components/Map";
import Menu from "@/components/Menu";
import SessionImportance from "@/components/SessionImportance";

import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
      <main>
        <Menu />
        <Map />
        <SessionImportance />
        <h1>asdasd</h1>
      </main>
      
    </div>
  );
}
