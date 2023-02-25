import React from 'react';
// import Image from 'next/image';
import { Grid, Card, Rating, Image, Button } from 'semantic-ui-react';
import SpecialityDescription from './SpecialityDescription';
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
            <Card.Header style={{ height: '4rem' }}>
              Хачапури по-аджарски
            </Card.Header>
            <Card.Meta>
              <span className='date'>Выпечка</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              <SpecialityDescription id={1} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick({ id: 1 })}
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
            <Card.Header style={{ height: '4rem' }}>Хинкали</Card.Header>
            <Card.Meta>
              <span className='date'>Горячие блюда</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              <SpecialityDescription id={2} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick({ id: 2 })}
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
            <Card.Header style={{ height: '4rem' }}>
              Шашлычное ассорти &quot;Мцхета&quot;
            </Card.Header>
            <Card.Meta>
              <span className='date'>Блюда на углях</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              <SpecialityDescription id={3} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick({ id: 3 })}
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
            <Card.Header style={{ height: '4rem' }}>Пхали</Card.Header>
            <Card.Meta>
              <span className='date'>Холодная закуска</span>
            </Card.Meta>
            <Card.Description className={styles['items-text']}>
              <SpecialityDescription id={4} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon='star' defaultRating={4} maxRating={5} />
            <Button
              inverted
              color='orange'
              floated='right'
              onClick={() => handleBtnClick({ id: 4 })}
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
