import { useState } from 'react';
import Head from 'next/head';
import { useTheme } from '../contexts/ThemeContext';
import styles from '@/styles/Home.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Image from 'next/image';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [count, setCount] = useState(0);
  const carouselContainerStyle = {
    maxWidth: '600px', // Set the maximum width to match your image dimensions
    margin: '0 auto', // Center the container horizontally
  };

  return (
    <>
     <div className={styles.themeToggle}>
          <button onClick={toggleTheme}>Light/Dark Mode</button>
          <br></br>
        </div>
      <Head>
        <title>React Showcase</title>
        <meta name="description" content="Welcome to the React Showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles[theme]}`}>
        <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the React Showcase</h1>
          <p className={styles.description}>
            Embark on a fantastical adventure into a magical world where you can explore and discover the boundless potential of React. Unleash your creativity as you dive into a realm filled with awe-inspiring components and mesmerizing interactions. This enchanted land will reveal the secrets to enhancing your React applications, transforming them into captivating experiences that will leave your users spellbound.
          </p>
        </div>
        <div className={styles.counter}>
          <h2>Counter</h2>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
       
<br></br>
<div style={carouselContainerStyle}>
  <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    interval={3000}
    showArrows={false}
    stopOnHover={false}
  >
    <div>
      <Image src="/images/carousel-image-1.jpg" alt="Carousel Image 1" width={600} height={600} />
    </div>
    <div>
      <Image src="/images/carousel-image-2.jpg" alt="Carousel Image 2" width={600} height={600} />
    </div>
    <div>
      <Image src="/images/carousel-image-3.jpg" alt="Carousel Image 3" width={600} height={600} />
    </div>
  </Carousel>
</div>

      </main>
    </>
  );
}
