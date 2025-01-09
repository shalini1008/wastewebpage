import React from 'react';
import styles from './HeroHome.module.css';

function HomePageHero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi User, I'm your <span>BinBandhu</span>
        </h1>
        <p className={styles.description}>
          BinBandhu is here to help you make recycling and sustainability simple. Whether you're looking to recycle, sell used items, or learn more about eco-friendly practices, we’ve got you covered. With our easy-to-use platform, you can schedule pickups, explore green products, and get valuable insights on how to reduce waste. BinBandhu is your trusted companion in building a cleaner, greener world!
        </p>
        <a href="#contact" className={styles.contactBtn}>Contact Us</a>
      </div>
      <img className={styles.heroImg} src="./heroImag.png" alt="BinBandhu" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default HomePageHero;

