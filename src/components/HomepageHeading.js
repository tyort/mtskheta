import React from 'react';
import Image from 'next/image';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

function HomepageHeading() {
  return (
    <Container text>
      <Image
        style={{ marginTop: '10vh' }}
        src='/images/mountains.png'
        width={150}
        height={80}
        alt='горы'
      />
      <Header
        as='h1'
        content='Мцхета'
        inverted
        style={{
          fontFamily: 'Arbor, Arial, sans-serif !important',
          marginTop: '0 !important',
        }}
      />
      <Header
        as='h2'
        content='Грузинские блюда в печи на дровах'
        inverted
        style={{
          fontFamily: 'Arbor, Arial, sans-serif !important',
          marginBottom: '2rem',
        }}
      />
    </Container>
  );
}

export default HomepageHeading;
