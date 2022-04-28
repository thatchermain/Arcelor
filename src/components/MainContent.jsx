import React from "react";
import styles from "../styles/MainContent.module.scss";
import StazImg from "../images/Staz.png";
import PraktykiImg from "../images/Praktyki.png";
import PracaImg from "../images/Praca.png";
import Button from "./Button";
import BtnArrow from "../images/BtbArrow.png";
// import apprenticeshipData from "../data/apprenticeshipData";
// import internshipData from "../data/internshipData";
// import jobData from "../data/jobData";

const MainContent = () => {
  return (
    <main>
      <article id="staze" className={styles.internship}>
        <div className={styles.image}>
          <img src={StazImg} alt="" />
        </div>
        <div className={styles.info}>
          <h4 className={styles.h4}>Szukamy Ciebie</h4>
          <h2 className={styles.h2}>Staże</h2>
          <p className={styles.paragraph}>
            Zapraszamy studentów i absolwentów (do roku po ukończeniu studiów)
            uczelni wyższych do aplikowania na płatny staż w ArcelorMittal
            Poland.
          </p>
          <p className={styles.paragraph}>
            Szukamy otwartych osób, które chcą razem z nami przeżyć zawodową
            przygodę w arcyciekawej branży. Wspólnie z nami i innymi stażystami
            poznasz hutnictwo „od kuchni”, zmierzysz się z interesującymi
            wyzwaniami, a to wszystko w otoczeniu i przy wsparciu prawdziwych
            pasjonatów!
          </p>
          <p className={styles.paragraph}>
            Traktujemy staże poważnie i perspektywicznie – oprócz wynagrodzenia
            oferujemy dostosowaną do stażystów ścieżkę szkoleniową, posiłki w
            stołówkach firmowych, prywatną opiekę medyczną, w przypadku
            wybranych staży możliwość pracy zdalnej przez część czasu, dodatkowy
            dzień wolny (4 maja to nasze święto – Dzień Hutnika) czy
            dofinansowania z funduszu socjalnego.
          </p>
          <p className={styles.paragraph}>
            Interesuje Cię proces surowcowy? Przetwórstwo stali? Z nami możesz
            rozwijać swoje umiejętności w różnych lokalizacjach i obszarach.
          </p>
          <div className={styles.hiperlink}>
            <span className={styles.span}>Sprawdź benefity</span>
            <img src={BtnArrow} alt="Strzałka w prawo" />
          </div>

          <Button title="Sprawdź oferty stażowe" />
        </div>
      </article>
      <article id="praktyki" className={styles.internship}>
        <div className={`${styles.infoLeft}`}>
          <h2 className={styles.h2}>Praktyki</h2>
          <p className={styles.paragraph}>
            Uczniów szkół technicznych i zawodowych, a także studentów uczelni
            wyższych zachęcamy do realizowania praktyk zawodowych pod okiem
            doświadczonych ekspertów ArcelorMittal Poland.
          </p>
          <p className={styles.paragraph}>
            Jeśli lubisz zdobywać nowe umiejętności i poszerzać swoją wiedzę, a
            do tego chcesz zobaczyć, na czym polega praca w przemyśle – te
            praktyki są właśnie dla Ciebie.
          </p>
          <p className={styles.paragraph}>
            Ponieważ zależy nam na Twoim bezpieczeństwie, przed rozpoczęciem
            programu poprosimy Cię o przejście wstępnych badań medycznych,
            szkolenia BHP oraz instruktażu związanego ze stanowiskiem pracy.
          </p>
          <p className={styles.paragraph}>
            Szczegółowe informacje na temat praktyk wraz z terminami realizacji
            znajdziesz w poszczególnych ofertach.
          </p>

          <Button title="Sprawdź oferty praktyk" />
        </div>
        <div className={`${styles.image} ${styles.imageRight}`}>
          <img src={PraktykiImg} alt="" />
        </div>
      </article>
      <article id="praca" className={styles.internship}>
        <div className={styles.image}>
          <img src={PracaImg} alt="" />
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
              projektach i konferencjach. Dofinansowujemy naukę, lektoraty
              języka angielskiego oraz szkolenia e-learningowe.
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
              nowatorskie rozwiązania w takich dziedzinach jak edukacja,
              zdrowie, ekologia, kultura i sztuka.
            </li>
          </ul>

          <Button title="Sprawdź oferty pracy" />
        </div>
      </article>
    </main>
  );
};

export default MainContent;
