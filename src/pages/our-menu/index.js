import Image from 'next/image';
import { Comment, Header, Icon, Segment } from 'semantic-ui-react';
import styles from '../../styles/Home.module.scss';

function OurMenu({ data }) {
  return (
    <>
      {data.map((sheet) => {
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
              alt='грузинская печь'
              fill
              style={{
                objectFit: 'fill',
                zIndex: -1,
              }}
            />
            <Header
              textAlign='center'
              as='h2'
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
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/menu`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default OurMenu;
