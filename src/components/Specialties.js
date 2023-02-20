import React from 'react';
// import Image from 'next/image';
import { Grid, Card, Rating, Image, Button } from 'semantic-ui-react';
import styles from '../styles/Specialties.module.scss';

function Specialties({ handleBtnClick }) {
  return (
    <Grid>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <Card centered>
          <Image
            loading='lazy'
            src='/images/specialities/pic1.jpg'
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Хачапури по-аджарски</Card.Header>
            <Card.Meta>
              <span className='date'>Выпечка</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              Достаточно точное описание формы звучит, как{' '}
              <i>
                открытая лодочка, внутри которой находится аппетитная начинка с
                сыром, сливочным маслом и запеченным яйцом
              </i>
              . В каком блюде мира ещё так органично сочетаются нежное тесто на
              молоке и два сорта грузинского сыра (<strong>сулугуни</strong> и
              <strong> имеретинский</strong>). Сам ритуал поедания блюда руками,
              отламывая хлебный край и макая его в начинку - вызывает
              определенный пиетет.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick()}
            >
              Подробнее
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <Card centered>
          <Image
            loading='lazy'
            src='/images/specialities/pic2.jpg'
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Хинкали</Card.Header>
            <Card.Meta>
              <span className='date'>Горячие блюда</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              Конечно же первое что приходит в голову при упоминании грузинской
              кухни - <strong>хинкали</strong>. Сочный, сытный и ароматный
              мясной бульон, закрытый в мешочке из теста — это блюдо одно из
              визитных карточек Грузии. Долго рассказывать о достоинствах вкуса
              и секретах приготовления именно наших хинкали нет никакого смысла.
              Нам будет приятно услышать от Вас лестный отзыв о кулинарном
              мастерстве наших поваров.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick()}
            >
              Подробнее
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <Card centered>
          <Image
            loading='lazy'
            src='/images/specialities/pic3.jpg'
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Шашлычное ассорти &quot;Мцхета&quot;</Card.Header>
            <Card.Meta>
              <span className='date'>Блюда на углях</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              Натуральное мясо входит в рацион каждого здорового человека. А
              какое кавказское застолье обходится без мясных кулинарных изысков?
              Да и сложно отказать себе в удобвольствии отведать хотя бы кусочек
              из широкого ассортимента представленного блюда.
              <br />
              <strong>Ассорти из шашлыков и люля-кебаб</strong>, украшенное
              ананасом и апельсиновыми дольками. Свинина, курица, каре ягненка,
              люля из телятины, из баранины - все это подаётся с запеченными
              овощами.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick()}
            >
              Подробнее
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <Card centered>
          <Image
            loading='lazy'
            src='/images/specialities/pic4.jpg'
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Пхали</Card.Header>
            <Card.Meta>
              <span className='date'>Холодная закуска</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              Грузинская кухня богата не только мясными изделиями, сырами и
              выпечкой. Данная закуска является неотъемлемым атрибутом
              национального стола. Подается как отдельное кушанье, так и закуска
              перед основными блюдами. Основной ингридиент{' '}
              <strong>пхали</strong> - свекла (фасоль, шпинат), но особую
              пикантность придает <em>ореховая заправка</em>, в основе которой
              использованы{' '}
              <em>
                грецкие орехи, многообразие душистых специй, свежих и сушеных
                трав.
              </em>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick()}
            >
              Подробнее
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default Specialties;
