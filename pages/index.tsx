import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Showcase</title>
        <meta name="description" content="Welcome to the React Showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Welcome to the React Showcase</h1>
          <p>
            Embark on a fantastical adventure into a magical world where you can explore and discover the boundless potential of React. Unleash your creativity as you dive into a realm filled with awe-inspiring components and mesmerizing interactions. This enchanted land will reveal the secrets to enhancing your React applications, transforming them into captivating experiences that will leave your users spellbound.
          </p>
        </div>
      </main>
    </>
  );
}
