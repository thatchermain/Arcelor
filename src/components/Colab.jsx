import React from "react";
import styles from "../styles/Colab.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
// import PracaImg from "../images/Praca.png";
import Colaboration from "../images/Colab.webp";
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

const Colab = () => {
  return (
    <section id="wspolpraca">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.coopTitle}>
            <h2 className={styles.h2}>Nasza współpraca z uczelniami</h2>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <div className={styles.coopParagraph}>
                <p>
                  Współpracujemy z największymi ośrodkami naukowymi w naszym
                  regionie. W ramach tej współpracy.
                </p>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  organizujemy wizyty studyjne dla studentów,
                </li>
                <li className={styles.listItem}>
                  wspieramy proces pisania prac dyplomowych,
                </li>
                <li className={styles.listItem}>
                  {" "}
                  bierzemy udział w badaniach na uniwersytetach dot. profilu
                  kandydatów,
                </li>
                <li className={styles.listItem}>
                  {" "}
                  realizujemy program stypendiów dla najzdolniejszych uczniów na
                  krakowskiej AGH,
                </li>
                <li className={styles.listItem}>
                  bierzemy udział w targach pracy,
                </li>
                <li className={styles.listItem}>
                  zapraszamy studentów na letnie praktyki zawodowe,{" "}
                </li>
                <li className={styles.listItem}>
                  angażujemy się w wydarzenia z życia uczelni.
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.coopImg}>
                <img
                  src={Colaboration}
                  alt="To be filled with content"
                  className={styles.coopPicture}
                />
              </div>
              <div className={styles.coopParagraph}>
                <p>
                  Dodatkowo przyznajemy granty dla kół naukowych i stypendia:
                </p>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Rozkręć koło z ArcelorMittal Poland – grant w wysokości 65
                  tys. złotych dla wybranych kół naukowych.
                </li>
                <li className={styles.listItem}>
                  Stypendia dla studentów AGH – ArcelorMittal Poland S.A.
                  zapewnia środki na wypłatę dwóch stypendiów w wysokości po 900
                  PLN brutto na miesiąc.
                </li>
                <li className={styles.listItem}>
                  Stypendium sTALe przełamując bariery dla studentów
                  niepełnosprawnych i ich opiekunów.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colab;
