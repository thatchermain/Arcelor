import React from "react";
import styles from "../styles/Praca.module.scss";
import Button from "./Button";

const Praca = () => {
  return (
    <article id="praca" className={styles.wrapper}>
      <div className={styles.desktopView}>
        <div className={styles.image}></div>
        <div className={styles.info}>
          <div className="container">
            <h2 className={styles.h2}>Praca</h2>
            <p className={styles.paragraph}>
              Pierwsze doświadczenie zawodowe już za Tobą? Chcesz stać się
              częścią firmy, która ma prawdziwy wpływ na rzeczywistość? Dołącz
              do zespołu ArcelorMittal Poland i ciesz się swobodą kształtowania
              własnej kariery.
            </p>
            <p className={styles.paragraph}>U nas możesz liczyć na:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Szeroki wachlarz szkoleń pracowniczych, udział w innowacyjnych
                projektach i konferencjach. Dofinansowujemy naukę, lektoraty
                języka angielskiego oraz szkolenia e-learningowe.
              </li>
              <li className={styles.listItem}>
                Indywidualne plany rozwoju i motywację do ciągłego poszerzania
                wiedzy i zdobywania nowych umiejętności.
              </li>
              <li className={styles.listItem}>
                Możliwość rozwijania kariery w zagranicznych oddziałach grupy
                ArcelorMittal. Dzięki temu będziesz czerpać z wiedzy i
                doświadczeń pracowników z całego świata!
              </li>
              <li className={styles.listItem}>
                Udział w życiu społeczności lokalnych. Stale wspieramy ciekawe i
                nowatorskie rozwiązania w takich dziedzinach jak edukacja,
                zdrowie, ekologia, kultura i sztuka.
              </li>
            </ul>
            <a
              className="link"
              href="https://emfg.fa.em4.oraclecloud.com/hcmUI/CandidateExperience/pl/sites/CX_1001/"
              target="_blank"
              rel="noreferrer"
            >
              <Button title="Sprawdź oferty pracy" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Praca;
