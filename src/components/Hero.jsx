import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <header id="home">
      <div className={styles.heroImg}>
        <div className="container">
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>Feel the steel</h1>
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
