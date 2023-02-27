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
          showThumbs={false}
          showArrows
          showIndicators
          infiniteLoop
          dynamicHeight={false}
          className={styles.mySwiper}
          autoPlay
          transitionTime={1500}
          interval={5000}
          onClickItem={(data) => {
            setCurrentSlide(data);
            setOpen(true);
          }}
        >
          {new Array(16).fill('').map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={styles.swipItem}>
              <picture>
                <source
                  srcSet={`/images/restaurant-slider/slide${index + 1}.webp`}
                  type='image/webp'
                />
                <img
                  loading='lazy'
                  src={`/images/restaurant-slider/slide${index + 1}.jpg`}
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
