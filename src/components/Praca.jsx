import React from "react";
import styles from "../styles/Praca.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
import PracaImg from "../images/Praca.png";
// import Colab from "../images/Colab.png";
import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
// import RecruitmentStep from "./RecruitmentStep";
// import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
// import Staze from "./Staze";

const Praca = () => {
  return (
    <article id="praca" className={styles.wrapper}>
      <div className={styles.image}>
        <img src={PracaImg} alt="" className={styles.picture} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.h2}>Praca</h2>
        <p className={styles.paragraph}>
          Pierwsze doświadczenie zawodowe już za Tobą? Chcesz stać się częścią
          firmy, która ma prawdziwy wpływ na rzeczywistość? Dołącz do zespołu
          ArcelorMittal Poland i ciesz się swobodą kształtowania własnej
          kariery.
        </p>
        <p className={styles.paragraph}>U nas możesz liczyć na:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Szeroki wachlarz szkoleń pracowniczych, udział w innowacyjnych
            projektach i konferencjach. Dofinansowujemy naukę, lektoraty języka
            angielskiego oraz szkolenia e-learningowe.
          </li>
          <li className={styles.listItem}>
            Indywidualne plany rozwoju i motywację do ciągłego poszerzania
            wiedzy i zdobywania nowych umiejętności.
          </li>
          <li className={styles.listItem}>
            Możliwość rozwijania kariery w zagranicznych oddziałach grupy
            ArcelorMittal. Dzięki temu będziesz czerpać z wiedzy i doświadczeń
            pracowników z całego świata!
          </li>
          <li className={styles.listItem}>
            Udział w życiu społeczności lokalnych. Stale wspieramy ciekawe i
            nowatorskie rozwiązania w takich dziedzinach jak edukacja, zdrowie,
            ekologia, kultura i sztuka.
          </li>
        </ul>

        <Button title="Sprawdź oferty pracy" />
      </div>
    </article>
  );
};

export default Praca;
