import Image from 'next/image';
import Link from 'next/link';
import {
  Comment,
  Header,
  Icon,
  Segment,
  Menu,
  Button,
} from 'semantic-ui-react';
import styles from '../../styles/Home.module.scss';
import getData from '../api/menu';

function OurMenu({ data }) {
  return (
    <>
      {data.map((sheet, index) => {
        const { type, schedule } = sheet;
        return (
          <Segment
            key={type}
            style={{ backgroundColor: 'transparent' }}
            padded='very'
            raised
          >
            <Image
              src='/images/222.jpg'
              alt='Папирус'
              fill
              style={{
                objectFit: 'fill',
                zIndex: -1,
              }}
            />
            {index === 0 && (
              <Header
                textAlign='center'
                as='h2'
                className='header-style__mon-amour-one'
                content='Наш ассортимент блюд'
              />
            )}
            <Header
              textAlign='center'
              as='h3'
              className='header-style__mon-amour-one'
            >
              {type}
            </Header>
            <Comment.Group
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '1200px',
              }}
            >
              {schedule.map((dish) => {
                const { title, price, description, portion } = dish;
                return (
                  <Comment key={`${title}${price}`}>
                    <Comment.Content>
                      <Comment.Author
                        className='header-style__mon-amour-one'
                        style={{
                          margin: '0',
                          display: 'table',
                          borderCollapse: 'collapse',
                          width: '100%',
                        }}
                      >
                        <p className={styles.product}>{title}</p>
                        <p
                          style={{
                            display: 'table-cell',
                            paddingBottom: '0.5rem',
                            verticalAlign: 'bottom',
                          }}
                        >
                          {price}
                        </p>
                      </Comment.Author>
                      <Comment.Metadata>
                        <div>{portion}</div>
                        <div>
                          <Icon name='star' />5 Faves
                        </div>
                      </Comment.Metadata>
                      <Comment.Text>{description}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                );
              })}
            </Comment.Group>
          </Segment>
        );
      })}
      <Menu fixed='bottom' secondary style={{ justifyContent: 'center' }}>
        <Menu.Item>
          <Link href='/'>
            <Button icon='home' inverted color='brown' />
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await getData();
  const data = JSON.parse(res);
  // Pass data to the page via props
  return { props: { data } };
}

export default OurMenu;
