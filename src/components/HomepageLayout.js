import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image as ImageUI,
  List,
  Modal,
  Popup,
  Segment,
} from 'semantic-ui-react';
import ResponsiveCarousel from './ResponsiveCarousel';
import Specialties from './Specialities';
import SpecialityDescription from './SpecialityDescription';

function HomepageLayout({ isComputer }) {
  const [open, setOpen] = useState(false);
  const [speciality, setSpecialtity] = useState(false);

  const handleBtnClick = ({ id }) => {
    setSpecialtity(id);
    setOpen(true);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Content image>
          <ImageUI
            size='big'
            src={`/images/specialities/pic${speciality}-big.jpg`}
          />
          <Modal.Description>
            <Header>Описание</Header>
            <p>
              <SpecialityDescription id={speciality} />
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content='OK'
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      <Segment
        id={`page-about${isComputer ? '-clone' : ''}`}
        style={{ padding: '5em 1em' }}
        vertical
      >
        <Image
          src='/images/mtskheta-landscape.webp'
          alt='Мцхета пейзаж'
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
                особенностями нашего Ресторана, но не единственными.
                <Icon name='hand peace' />
                <br />
                <br />
                <small>
                  <em>Время работы: c 12 до 00 (каждый день)</em>
                </small>
              </p>
            </Grid.Column>
            <Grid.Column floated='right' computer={8}>
              <ResponsiveCarousel />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button
                as='a'
                basic
                color='black'
                size='huge'
                href='https://t.me/mtskhetarest'
              >
                Забронировать стол
              </Button>
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
                }}
              >
                &quot;Хотелось бы вкусно и сытно поесть грузинской кухни&quot;
              </Header>
              <Icon size='big' bordered circular name='thumbs up outline' />
              <p style={{ fontSize: '1.33em' }}>
                Этим и славится наш ресторан :)
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header
                as='h3'
                style={{
                  fontSize: '2em',
                }}
              >
                &quot;Провести романтический вечер в компании живой музыки&quot;
              </Header>
              <Icon size='big' bordered circular name='heart outline' />
              <p style={{ fontSize: '1.33em' }}>
                Этот вечер может стать незабываемым для вас и ваших близких
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment id={`page-specialities${isComputer ? '-clone' : ''}`} vertical>
        <Header
          as='h3'
          textAlign='center'
          style={{
            fontSize: '2em',
          }}
        >
          Популярные блюда
        </Header>
        <Specialties handleBtnClick={handleBtnClick} />
      </Segment>

      <Segment
        id={`page-affiche${isComputer ? '-clone' : ''}`}
        style={{ padding: '8em 0em' }}
        vertical
      >
        <Image
          src='/images/concert-hall.jpg'
          alt='Концертный зал'
          fill
          style={{
            objectFit: 'cover',
            zIndex: -1,
            filter: 'hue-rotate(180deg) contrast(150%) brightness(20%)',
          }}
        />
        <Container text textAlign='right'>
          <Header
            as='h3'
            style={{
              fontSize: '3em',
              color: 'white',
              textShadow:
                '0.1rem -0.2rem 0.5rem #e25822, -0.2rem 0.2rem 0.2rem #e25822',
            }}
          >
            Афиша
          </Header>
          <p
            style={{ fontSize: '1.2em', color: 'white', textAlign: 'justify' }}
          >
            Поддержанию приятной непринужденной атмосферы способствует музыка,
            <strong> исполненная вживую</strong>, самых разных направлений.
            Веселая озорная или мелодичная душевная - мы вместе с Вами подберем
            репертуар соответствующий вашему настроению или событию. Позвольте
            <em> Cебе и Вашим близким</em> хоть немного расслабиться и забыть о
            внешней суете города.
            <br />
            <br />
            <small>Каждый вечер с 19:00 (Кроме Пн, Вт).</small>
          </p>
          <Button
            as='a'
            inverted
            color='orange'
            size='big'
            href='https://t.me/mtskhetarest'
          >
            Узнать о мероприятиях
          </Button>
        </Container>
      </Segment>

      <Segment
        id={`page-contacts${isComputer ? '-clone' : ''}`}
        inverted
        vertical
        style={{ padding: '5em 1em' }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header size='medium' inverted as='h4' content='Адрес' />
                <address>
                  Россия, 117303, г. Москва, ул. Керченская 1Б
                  <br />
                  <br />
                  <small>Время работы: с 12 до 00 (каждый день)</small>
                </address>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header size='medium' inverted as='h4' content='Информация' />
                <List link inverted>
                  <List.Item as='a'>О нас</List.Item>
                  <List.Item>
                    Свяжитесь с нами:
                    <br />
                    <Link href='https://t.me/mtskhetarest'>
                      <Icon name='telegram plane' circular />
                    </Link>
                    <Link href='tel:+79692700006'>
                      <Icon name='phone' circular />
                    </Link>
                    <Link href='mailto:mcheta777@mail.ru'>
                      <Icon name='mail' circular />
                    </Link>
                  </List.Item>
                  <List.Item as='a'>
                    <Popup
                      content={
                        <p>
                          На стадии разработки
                          <Icon name='smile outline' size='large' />
                        </p>
                      }
                      trigger={<p>Для партнеров</p>}
                    />
                  </List.Item>
                  <List.Item as='a'>
                    <Popup
                      content={
                        <p>
                          На стадии разработки
                          <Icon name='smile outline' size='large' />
                        </p>
                      }
                      trigger={<p>Карьера</p>}
                    />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header size='medium' inverted as='h4' content='Блог' />
                <List link inverted>
                  <List.Item as='a'>
                    <Icon name='instagram' size='large' />
                  </List.Item>
                  <List.Item as='a'>
                    <Popup
                      content={
                        <p>
                          На стадии разработки
                          <Icon name='smile outline' size='large' />
                        </p>
                      }
                      trigger={<p>Отзывы</p>}
                    />
                  </List.Item>
                  <List.Item as='a'>
                    <Popup
                      content={
                        <p>
                          На стадии разработки
                          <Icon name='smile outline' size='large' />
                        </p>
                      }
                      trigger={<p>Мероприятия</p>}
                    />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' size='medium' inverted>
                  Остальное
                </Header>
                <p>
                  Некоторые сервисы сайта находятся на стадии разработки. По
                  всем вопросам обращайтесь по любому из указанным контактов.
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
