import React from 'react';
// import Image from 'next/image';
import { Grid, Card, Rating, Image, Button } from 'semantic-ui-react';

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
            <Card.Description>
              Matthew is a musician living in Nashville.
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
            <Card.Description>
              Matthew is a musician living in Nashville.
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
            <Card.Description>
              Matthew is a musician living in Nashville.
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
            <Card.Description>
              Грузинская кухня богата не только мясными изделиями и выпечкой.
              Данная закуска является неотъемлемым атрибутом национального
              стола. Годами отработанный рецепт блюда с нежным вкусом
              разнообразие вкусов подается как отдельное блюдо, так и закуска
              перед основными блюдами. Блюдо из фасоли с добавлением грецких
              орехов, специй и чеснока. Главное в пхали — острая ореховая
              заправка. Смешение вкусов овощей и специй свекла фасоль шпинат.
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
