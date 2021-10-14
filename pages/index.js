import Head from 'next/head';
import styles from '../styles/Home.module.css';
import InstaFooter from './main/footer/Footer';
import MainContent from './main/mainContent/MainContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
          <MainContent></MainContent>
      </main>

      <footer className={styles.footer}>
        <InstaFooter />
      </footer>
    </div>
  );
}
