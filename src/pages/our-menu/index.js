import Image from 'next/image';
import { Comment, Header, Icon, Segment } from 'semantic-ui-react';
import styles from '../../styles/Home.module.scss';

function OurMenu({ data }) {
  console.log(data);
  return (
    <>
      <Segment style={{ backgroundColor: 'transparent' }} padded='very' raised>
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
          style={{ fontFamily: 'Mon_Amour_One, Arial, sans-serif' }}
        >
          Какой-то хедер
        </Header>
        <Comment.Group
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1200px',
          }}
        >
          <Comment>
            <Comment.Content>
              <Comment.Author
                style={{
                  margin: '0',
                  display: 'table',
                  borderCollapse: 'collapse',
                  width: '100%',
                  fontFamily: 'Mon_Amour_One, Arial, sans-serif',
                }}
              >
                <p className={styles.product}>Хачапури по аджарски</p>
                <p
                  style={{
                    display: 'table-cell',
                    paddingBottom: '0.5rem',
                    verticalAlign: 'bottom',
                  }}
                >
                  asdasd
                </p>
              </Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
                <div>
                  <Icon name='star' />5 Faves
                </div>
              </Comment.Metadata>
              <Comment.Text>Как-то атк бывает</Comment.Text>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar as='a' src='/images/title-fireplace.jpg' />
            <Comment.Content>
              <Comment.Author>Stevie Feliciano</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
                <div>
                  <Icon name='star' />5 Faves
                </div>
              </Comment.Metadata>
              <Comment.Text
                style={{
                  margin: '1em 0',
                  display: 'table',
                  borderCollapse: 'collapse',
                  width: '100%',
                }}
              >
                <p className={styles.product}>
                  Hey guys, I hope this example comment is helping you read this
                  documentation
                </p>
                <p>asdasd</p>
              </Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
      <Segment padded='very' piled raised secondary>
        <Comment.Group style={{ maxWidth: 'none' }}>
          <Comment>
            <Comment.Content>
              <Comment.Author
                style={{
                  margin: '0',
                  display: 'table',
                  borderCollapse: 'collapse',
                  width: '100%',
                  fontFamily: 'Mon_Amour_One, Arial, sans-serif',
                }}
              >
                <p className={styles.product}>Хачапури по аджарски</p>
                <p
                  style={{
                    display: 'table-cell',
                    paddingBottom: '0.5rem',
                    verticalAlign: 'bottom',
                  }}
                >
                  asdasd
                </p>
              </Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
                <div>
                  <Icon name='star' />5 Faves
                </div>
              </Comment.Metadata>
              <Comment.Text>Как-то атк бывает</Comment.Text>
            </Comment.Content>
          </Comment>
          <Comment>
            <Comment.Avatar as='a' src='/images/title-fireplace.jpg' />
            <Comment.Content>
              <Comment.Author>Stevie Feliciano</Comment.Author>
              <Comment.Metadata>
                <div>2 days ago</div>
                <div>
                  <Icon name='star' />5 Faves
                </div>
              </Comment.Metadata>
              <Comment.Text
                style={{
                  margin: '1em 0',
                  display: 'table',
                  borderCollapse: 'collapse',
                  width: '100%',
                }}
              >
                <p className={styles.product}>
                  Hey guys, I hope this example comment is helping you read this
                  documentation
                </p>
                <p>asdasd</p>
              </Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/hello`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default OurMenu;
