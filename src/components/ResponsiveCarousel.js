import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Responsive.module.scss';

function ResponsiveCarousel() {
  return (
    <div className={styles.container}>
      <Carousel
        showArrows
        showIndicators
        infiniteLoop
        dynamicHeight={false}
        className={styles.mySwiper}
        autoPlay
        transitionTime={1500}
        interval={5000}
        showThumbs={false}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={styles.swipItem}>
            <picture>
              <source
                srcSet={`/images/restaurant-slider/slide${item}.webp`}
                type='image/webp'
              />
              <img
                src={`/images/restaurant-slider/slide${item}.jpg`}
                alt='что-то там'
              />
            </picture>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ResponsiveCarousel;
