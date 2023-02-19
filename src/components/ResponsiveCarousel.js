import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Button, Image, Modal } from 'semantic-ui-react';
import styles from '../styles/Responsive.module.scss';

function ResponsiveCarousel() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Content image>
          <Image
            fluid
            src={`/images/restaurant-slider/slide${currentSlide + 1}-big.jpg`}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            content='ОК'
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
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
          showThumbs
          onClickItem={(data) => {
            setCurrentSlide(data);
            setOpen(true);
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className={styles.swipItem}>
              <picture>
                <source
                  srcSet={`/images/restaurant-slider/slide${item}.webp`}
                  type='image/webp'
                />
                <img
                  loading='lazy'
                  src={`/images/restaurant-slider/slide${item}.jpg`}
                  alt='что-то там'
                />
              </picture>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default ResponsiveCarousel;
