'use client';

import styles from "./styles.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel }  from 'react-responsive-carousel';

const carouselImages = new Array(8).fill(null).map((_, i) => `/images/carousel/carousel-${i+1}.png`)

export default function Carousel () {
  return (
    <div className={styles.container}>
      <ReactCarousel
        className={styles.carousel}
        infiniteLoop
        autoPlay
        axis='horizontal'
        swipeable={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        showIndicators={false}
        useKeyboardArrows={false}
        dynamicHeight={false}
      >
          {
            carouselImages.map((imageSrc, index) => {
              return (
                <div key={index}>
                  <img src={imageSrc} className={styles['carousel-img']}/>
                </div>
              )
            })
          }
      </ReactCarousel>
    </div>
);
}