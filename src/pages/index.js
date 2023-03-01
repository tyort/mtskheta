// import Head from 'next/head';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name='description' content='Generated by create next app' />
//         <meta name='viewport' content='width=device-width, initial-scale=1' />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       {/* <main className={styles.main}>
//         <div className={styles.description}>
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>src/pages/index.js</code>
//           </p>
//           <div>
//             <a
//               href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//               target='_blank'
//               rel='noopener noreferrer'
//             >
//               By{' '}
//               <Image
//                 src='/vercel.svg'
//                 alt='Vercel Logo'
//                 className={styles.vercelLogo}
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <div className={styles.center}>
//           <Image
//             className={styles.logo}
//             src='/next.svg'
//             alt='Next.js Logo'
//             width={180}
//             height={37}
//             priority
//           />
//           <div className={styles.thirteen}>
//             <Image
//               src='/thirteen.svg'
//               alt='13'
//               width={40}
//               height={31}
//               priority
//             />
//           </div>
//         </div>

//         <div className={styles.grid}>
//           <a
//             href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//             className={styles.card}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <h2 className={inter.className}>
//               Docs <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Find in-depth information about Next.js features and&nbsp;API.
//             </p>
//           </a>

//           <a
//             href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//             className={styles.card}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <h2 className={inter.className}>
//               Learn <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Learn about Next.js in an interactive course with&nbsp;quizzes!
//             </p>
//           </a>

//           <a
//             href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//             className={styles.card}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <h2 className={inter.className}>
//               Templates <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Discover and deploy boilerplate example Next.js&nbsp;projects.
//             </p>
//           </a>

//           <a
//             href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//             className={styles.card}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <h2 className={inter.className}>
//               Deploy <span>-&gt;</span>
//             </h2>
//             <p className={inter.className}>
//               Instantly deploy your Next.js site to a shareable URL
//               with&nbsp;Vercel.
//             </p>
//           </a>
//         </div>
//       </main> */}
//     </>
//   );
// }

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Grid,
} from 'semantic-ui-react';

import HomepageHeading from '../components/HomepageHeading';
import HomepageLayout from '../components/HomepageLayout';

export default function ResponsiveContainer() {
  const [isFixedMenuShow, setShowFixedMenu] = useState(false);
  const [isSidebarOpened, setSidebarOpened] = useState(false);
  const [activeMenuitem, setActiveMenuItem] = useState('page-main_top');

  const handleClickMenuItem = (_evt, data) => {
    const element = document.getElementById(data.name);
    isSidebarOpened && setSidebarOpened(false);
    setActiveMenuItem(data.name);
    element.scrollIntoView();
  };

  return (
    <Grid columns={1} id='page-main_top'>
      <Grid.Column only='tablet mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={() => setSidebarOpened(false)}
            vertical
            visible={isSidebarOpened}
          >
            <Menu.Item
              name='page-about'
              active={activeMenuitem === 'page-about'}
              onClick={handleClickMenuItem}
            >
              О ресторане
            </Menu.Item>
            <Menu.Item
              name='page-specialities'
              active={activeMenuitem === 'page-specialities'}
              onClick={handleClickMenuItem}
            >
              Популярные блюда
            </Menu.Item>
            <Menu.Item
              name='page-affiche'
              active={activeMenuitem === 'page-affiche'}
              onClick={handleClickMenuItem}
            >
              Афиша
            </Menu.Item>
            <Menu.Item
              name='page-contacts'
              active={activeMenuitem === 'page-contacts'}
              onClick={handleClickMenuItem}
            >
              Контакты
            </Menu.Item>
            <Menu.Item>
              <Link href='/our-menu'>Наше меню</Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={isSidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{
                minHeight: 350,
                padding: '1em 0em',
                background:
                  'linear-gradient(to top, transparent, transparent 80%,  #030305 92%), linear-gradient(0.52turn, transparent, transparent 90%, #cce2ff 100%), linear-gradient(-0.51turn, transparent, transparent 93%, #cce2ff 100%)',
              }}
              vertical
            >
              <Image
                src='/images/title-fireplace.webp'
                alt='грузинская печь'
                fill
                style={{ objectFit: 'cover', zIndex: -1 }}
              />
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item
                    onClick={() => setSidebarOpened((prevState) => !prevState)}
                  >
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Icon name='phone' />
                    +7 (969) 270-00-06
                    <Button
                      as='a'
                      inverted
                      style={{ marginLeft: '0.5em' }}
                      href='tel:+79692700006'
                    >
                      Позвонить
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading />
            </Segment>

            <HomepageLayout isComputer={false} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
      <Grid.Column only='computer'>
        <Visibility
          once={false}
          onBottomPassed={() => setShowFixedMenu(true)}
          onBottomPassedReverse={() => setShowFixedMenu(false)}
        >
          <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: 700,
              padding: '1em 0em',
              background:
                'linear-gradient(to top, transparent, transparent 80%,  #030305 92%), linear-gradient(0.52turn, transparent, transparent 90%, #cce2ff 100%), linear-gradient(-0.51turn, transparent, transparent 93%, #cce2ff 100%)',
            }}
            vertical
          >
            <Image
              src='/images/title-fireplace.webp'
              alt='грузинская печь'
              fill
              style={{
                objectFit: 'cover',
                zIndex: -1,
              }}
            />
            <Menu
              fixed={isFixedMenuShow ? 'top' : null}
              inverted={!isFixedMenuShow}
              pointing={!isFixedMenuShow}
              secondary={!isFixedMenuShow}
              size='large'
              style={{ border: 'none' }}
            >
              <Container>
                <Menu.Item
                  name='page-main_top'
                  active={activeMenuitem === 'page-main_top'}
                  onClick={handleClickMenuItem}
                >
                  <Icon name='home' />
                </Menu.Item>
                <Menu.Item
                  name='page-about-clone'
                  active={activeMenuitem === 'page-about-clone'}
                  onClick={handleClickMenuItem}
                >
                  О Ресторане
                </Menu.Item>
                <Menu.Item
                  name='page-specialities-clone'
                  active={activeMenuitem === 'page-specialities-clone'}
                  onClick={handleClickMenuItem}
                >
                  Популярные блюда
                </Menu.Item>
                <Menu.Item
                  active={activeMenuitem === 'page-affiche-clone'}
                  onClick={handleClickMenuItem}
                  name='page-affiche-clone'
                >
                  Афиша
                </Menu.Item>
                <Menu.Item
                  name='page-contacts-clone'
                  active={activeMenuitem === 'page-contacts-clone'}
                  onClick={handleClickMenuItem}
                >
                  Контакты
                </Menu.Item>
                <Menu.Item>
                  <Link style={{ marginBottom: '-2px' }} href='/our-menu'>
                    Наше меню
                  </Link>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Icon name='phone' />
                  +7 (969) 270-00-06
                  <Button
                    as='a'
                    inverted={!isFixedMenuShow}
                    primary={isFixedMenuShow}
                    style={{ marginLeft: '0.5em' }}
                    href='tel:+79692700006'
                  >
                    Позвоните нам
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        <HomepageLayout isComputer />
      </Grid.Column>
    </Grid>
  );
}
