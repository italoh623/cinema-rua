'use client';

import styles from "./styles.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel }  from 'react-responsive-carousel';

export interface CarouselProps {
  images: string[];
  autoPlay: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  height?: string;
}

export default function Carousel ({
  images,
  autoPlay,
  showArrows,
  showIndicators,
  height
}: CarouselProps) {
  return (
    <div className={styles.container}>
      <ReactCarousel
        className={styles.carousel}
        infiniteLoop
        autoPlay={autoPlay}
        axis='horizontal'
        swipeable={false}
        showArrows={showArrows}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        showIndicators={showIndicators}
        useKeyboardArrows={false}
        dynamicHeight={false}
      >
          {
            images.map((imageSrc, index) => {
              return (
                <div key={index}>
                  <img 
                    src={imageSrc} 
                    className={styles['carousel-img']} 
                    style={{"height": `${height || "inherit"}`}}
                  />
                </div>
              )
            })
          }
      </ReactCarousel>
    </div>
);
}