// import React from "react";
import styles from "../styles/Praktyki.module.scss";
// import StazImg from "../images/Staz.png";
import PraktykiImg from "../images/Praktyki.webp";
// import PracaImg from "../images/Praca.png";
// import Colab from "../images/Colab.png";
import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
// import RecruitmentStep from "./RecruitmentStep";
// import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
// import Staze from "./Staze";

const Praktyki = () => {
  return (
    <article id="praktyki">
      {/* <div className="container"> */}
      <div className={styles.desktopView}>
        <div className={styles.wrapper}>
          <div>
            <div className={`${styles.info}`}>
              <h2 className={styles.h2}>Praktyki</h2>
              <p className={styles.paragraph}>
                Uczniów szkół technicznych i zawodowych, a także studentów
                uczelni wyższych zachęcamy do realizowania praktyk zawodowych
                pod okiem doświadczonych ekspertów ArcelorMittal Poland.
              </p>
              <p className={styles.paragraph}>
                Jeśli lubisz zdobywać nowe umiejętności i poszerzać swoją
                wiedzę, a do tego chcesz zobaczyć, na czym polega praca w
                przemyśle – te praktyki są właśnie dla Ciebie.
              </p>
              <p className={styles.paragraph}>
                Ponieważ zależy nam na Twoim bezpieczeństwie, przed rozpoczęciem
                programu poprosimy Cię o przejście wstępnych badań medycznych,
                szkolenia BHP oraz instruktażu związanego ze stanowiskiem pracy.
              </p>
              <p className={styles.paragraph}>
                Szczegółowe informacje na temat praktyk wraz z terminami
                realizacji znajdziesz w poszczególnych ofertach.
                <br />
                <br />
              </p>

              <Button title="Sprawdź oferty praktyk" />
            </div>
          </div>
          <div className={styles.image}>
            {/* <img src={PraktykiImg} alt="" className={styles.picture} /> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Praktyki;
