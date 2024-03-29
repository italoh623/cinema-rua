import React from "react";


import Menu from "@/components/Menu";
import SessionImportance from "@/components/SessionImportance";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import SessionAppreciation from "@/components/SessionAppreciation";
import SessionWhy from "@/components/SessionWhy";
import SessionAffection from "@/components/SessionAffection";
import SessionPanorama from "@/components/SessionPanorama";
import SessionAffected from "@/components/SessionAffected";
import SessionDisappearance from "@/components/SessionDisappearance";
import SessionRevitalize from "@/components/SessionRevitalize";
import SessionMore from "@/components/SessionMore";

import styles from "./page.module.css";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <div>"Loading..."</div>,
  ssr: false,
})

const carouselImages = new Array(8).fill(null).map((_, i) => `./images/carousel/carousel-${i+1}.png`)

export default function Home() {
  return (
    <div>
      <Menu />
      <main>
        <Carousel 
          images={carouselImages}
          autoPlay 
          showArrows={false} 
          showIndicators={false}
          height="60vw"
        />
        <SessionImportance />
        <SessionAppreciation />
        <SessionWhy />
        <SessionAffection />
        <SessionPanorama />
        <SessionAffected />
        <SessionDisappearance />
        <SessionRevitalize />
        <SessionMore />
        {/* <Map /> */}
      </main>
      <Footer />
    </div>
  );
}
