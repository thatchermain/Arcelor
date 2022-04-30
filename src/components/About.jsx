import React from "react";
import styles from "../styles/About.module.scss";
import Button from "./Button";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>
            Chcesz, aby Twoja praca miała <br /> wpływ na przyszłe pokolenia?
          </h2>
          <h4 className={styles.h4}>
            Masz głowę pełną pomysłów i nie boisz się wcielać ich w życie?
          </h4>
          <h4 className={styles.h4}>
            Aplikuj na staż w ArcelorMittal <br /> Poland i przejmij stery
            swojej kariery.
          </h4>
          <Button
            title="Aplikuj"
            additionalClass={styles.applyBtn}
            className={styles.applyBtn}
          />
        </div>
      </div>
      <div className={styles.wrapperGray} id="o_nas">
        <div className={`${styles.wrapper} container`}>
          <div className={styles.content}>
            <h2 className={styles.h2Gradient}>Poznaj nas</h2>
            <h3 className={styles.h3}>
              ArcelorMittal to największa firma działająca w branży stalowej i
              wydobywczej. Jesteśmy obecni w 60 krajach, a efekty naszej pracy
              są widoczne wszędzie – od smartfonów, przez samochody, aż po
              drapacze chmur.
            </h3>
            <p className={styles.paragraph}>
              Tworząc stal, wychodzimy naprzeciw oczekiwaniom nowoczesnego
              świata.
              <br /> Chcemy, aby nasze produkty były coraz bardziej wytrzymałe,
              lżejsze i produkowane
              <br /> w zrównoważony sposób. Efekty naszej pracy będą obecne
              także w życiu kolejnych pokoleń!
            </p>
            <p className={styles.paragraph}>
              W Polsce zatrudniamy 10 tysięcy pracowników w sześciu oddziałach w
              województwach
              <br /> śląskim, małopolskim i opolskim. ArcelorMittal Poland jest
              największym i najnowocześniejszym
              <br /> producentem stali w Polsce, skupiającym 50 proc. krajowego
              potencjału hutniczego,
              <br /> oraz największym producentem koksu w Europie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
