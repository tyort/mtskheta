import React from 'react';
import { Button, Container, Header, Icon } from 'semantic-ui-react';

function HomepageHeading() {
  return (
    <Container text>
      <Header as='h1' content='Мцхета' inverted />
      <Header as='h2' content='Грузинские блюда в печи на дровах' inverted />
      <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  );
}

export default HomepageHeading;
