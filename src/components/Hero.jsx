import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <header id="home">
      <div className={styles.heroImg}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h1 className={styles.h1}>Feel</h1>
              <h1 className={styles.h1}>the</h1>
              <h1 className={styles.h1}>steel</h1>
            </div>
            <p className={styles.moreInfo}>
              Zjedź w dół <br />
              dowiedz się więcej
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
