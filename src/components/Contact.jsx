import React from "react";
import styles from "../styles/Contact.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
// import PracaImg from "../images/Praca.png";
// import Colaboration from "../images/Colab.png";
// import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
// import RecruitmentStep from "./RecruitmentStep";
// import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
// import Staze from "./Staze";
// import Praktyki from "./Praktyki";
// import Praca from "./Praca";
// import Recruitment from "./Recruitment";
// import Values from "./Values";
// import Colab from "./Colab";

const Contact = () => {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.h2} ${styles.h2Contact}`}>
            Gdzie nas znajdziesz
          </h2>
          <div className={styles.contactWrapper}>
            <div className={styles.column}>
              <p className={styles.contactParagraph}>
                Jeśli masz pytania lub wątpliwości, napisz do nas na:
              </p>
            </div>
            <div>
              <p className={styles.contactName}>
                wiktoria.werner@arcelormittal.com
              </p>
              <p className={styles.contactName}>
                zainstalujsie@arcelormittal.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
