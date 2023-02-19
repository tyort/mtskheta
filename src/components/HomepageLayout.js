import React, { useState } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image as ImageUI,
  List,
  Segment,
  Modal,
  Icon,
} from 'semantic-ui-react';
import Image from 'next/image';
import ResponsiveCarousel from './ResponsiveCarousel';
import Specialties from './Specialties';

function HomepageLayout() {
  const [open, setOpen] = useState(false);

  const handleBtnClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <ImageUI
            size='medium'
            src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
            wrapped
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      <Segment style={{ padding: '5em 1em' }} vertical>
        <Image
          src='/images/mtskheta-landscape.webp'
          alt='грузинская печь'
          fill
          style={{
            objectFit: 'cover',
            zIndex: -1,
            opacity: '0.2',
            filter: 'sepia(100%)',
          }}
        />
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Header
                as='h3'
                style={{
                  fontSize: '2em',
                  fontFamily: 'Arbor, Arial, sans-serif !important',
                }}
              >
                О Ресторане
              </Header>
              <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                Только у нас Вы сможете погрузиться в атмсоферу кулинарных
                традиций одного из{' '}
                <strong>Древних христианских городов Грузии</strong>. Трепетное
                отношение к национальной кухне и архаичный способ приготовления
                еды в <em>печи на дровах</em> - являются отличительными
                особенностями нашего Ресторана, но не единственными :) <br />
                Яства из мяса и овощей, приправленные разнообразными специями,
                органично составляют более глубокий богатый насыщенный вкус.
                Ждем Вас и ваших близких
                <Icon name='hand peace' />
              </p>
            </Grid.Column>
            <Grid.Column floated='right' computer={8}>
              <ResponsiveCarousel />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Забронировать стол</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header
                as='h3'
                style={{
                  fontSize: '2em',
                  fontFamily: 'Arbor, Arial, sans-serif !important',
                }}
              >
                &quot;Хотелось бы вкусно и сытно поесть грузинской кухни&quot;
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Это то чем славится наш ресторан
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header
                as='h3'
                style={{
                  fontSize: '2em',
                  fontFamily: 'Arbor, Arial, sans-serif !important',
                }}
              >
                &quot;Провести романтический вечер в компании живой музыки&quot;
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Этот вечер может стать незабываемым для вас и ваших близких
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment vertical>
        <Header
          as='h3'
          textAlign='center'
          style={{
            fontSize: '2em',
            fontFamily: 'Arbor, Arial, sans-serif !important',
          }}
        >
          Фирменные блюда
        </Header>
        <Specialties handleBtnClick={handleBtnClick} />
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as='a' size='large'>
            Read More
          </Button>
        </Container>
      </Segment>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}

export default HomepageLayout;
