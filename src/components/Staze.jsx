import React, { useState } from "react";
import styles from "../styles/Staze.module.scss";
import Button from "./Button";
import BtnArrow from "../images/BtbArrow.png";
import Benefits from "./Benefits";

const Staze = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <article id="staze">
      <div className={styles.desktopView}>
        <div className={styles.image}></div>
        <div className={styles.info}>
          <div className="container">
            {isOpen ? (
              <Benefits toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} />
            ) : (
              <>
                <h4 className={styles.h4}>Szukamy Ciebie</h4>
                <h2 className={styles.h2}>Staże</h2>
                <p className={styles.paragraph}>
                  Zapraszamy studentów i absolwentów (do roku po ukończeniu
                  studiów) uczelni wyższych do aplikowania na płatny staż w
                  ArcelorMittal Poland.
                </p>
                <p className={styles.paragraph}>
                  Szukamy otwartych osób, które chcą razem z nami przeżyć
                  zawodową przygodę w arcyciekawej branży. Wspólnie z nami i
                  innymi stażystami poznasz hutnictwo „od kuchni”, zmierzysz się
                  z interesującymi wyzwaniami, a to wszystko w otoczeniu i przy
                  wsparciu prawdziwych pasjonatów!
                </p>
                <p className={styles.paragraph}>
                  Traktujemy staże poważnie i perspektywicznie – oprócz
                  wynagrodzenia oferujemy dostosowaną do stażystów ścieżkę
                  szkoleniową, posiłki w stołówkach firmowych, prywatną opiekę
                  medyczną, w przypadku wybranych staży możliwość pracy zdalnej
                  przez część czasu, dodatkowy dzień wolny (4 maja to nasze
                  święto – Dzień Hutnika) czy dofinansowania z funduszu
                  socjalnego.
                </p>
                <p className={styles.paragraph}>
                  Interesuje Cię proces surowcowy? Przetwórstwo stali? Z nami
                  możesz rozwijać swoje umiejętności w różnych lokalizacjach i
                  obszarach.
                </p>
                <a href="#benefity" className={styles.customLink}>
                  <div className={styles.hiperlink} onClick={toggle}>
                    <span className={styles.span}>Sprawdź benefity</span>
                    <img src={BtnArrow} alt="Strzałka w prawo" />
                  </div>
                </a>
                <a
                  className="link"
                  href="https://emfg.fa.em4.oraclecloud.com/hcmUI/CandidateExperience/pl/sites/CX_1001/requisitions?keyword=sta%C5%BC"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button title="Sprawdź oferty stażowe" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Staze;
