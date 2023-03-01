import Image from 'next/image';
import { Container, Header } from 'semantic-ui-react';

function HomepageHeading() {
  return (
    <Container text>
      <Header
        as='h1'
        content='Мцхета'
        inverted
        style={{
          fontFamily: 'Arbor, Arial, sans-serif',
          textShadow:
            '0.1rem -0.2rem 0.5rem #e25822, -0.1rem -0.2rem 0.3rem #e25822, 0px 0.2rem 0.2rem black',
        }}
      />
      <Header
        as='h2'
        content='Грузинские блюда в печи на дровах'
        inverted
        style={{
          fontFamily: 'Arbor, Arial, sans-serif',
          textShadow:
            '3px -3px 4px black, -4px -2px 4px black, 4px 3px 2px black',
        }}
      />
      <Image
        style={{
          filter: 'drop-shadow(0px 0px 4px #e25822)',
        }}
        src='/images/mountains.png'
        width={150}
        height={80}
        alt='горы'
      />
    </Container>
  );
}

export default HomepageHeading;
