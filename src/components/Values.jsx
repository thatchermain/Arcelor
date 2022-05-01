import React from "react";
import styles from "../styles/Values.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
// import PracaImg from "../images/Praca.png";
// import Colab from "../images/Colab.png";
// import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
// import RecruitmentStep from "./RecruitmentStep";
import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
// import Staze from "./Staze";
// import Praktyki from "./Praktyki";
// import Praca from "./Praca";
// import Recruitment from "./Recruitment";

const Values = () => {
  return (
    <section id="wartosci">
      <div className={styles.values}>
        <div className={`${styles.wrapper} container`}>
          <div className={styles.column}>
            <h2 className={styles.h2White}>Nasze wartości</h2>
          </div>
          <div className={styles.column}>
            <ul className={styles.valuesList}>
              <li className={styles.valueListItem}>
                <ValuesListItem
                  title="Zdrowie i bezpieczeństwo"
                  description="Nic nie jest ważniejsze od zdrowia i bezpieczeństwa. To właśnie na tym fundamencie oparte są nasze trzy wartości – zrównoważony rozwój, jakość i przywództwo. 
            "
                />
              </li>
              <li className={styles.valueListItem}>
                <ValuesListItem
                  title="Zrównoważony rozwój"
                  description="Chcemy być konkurencyjni i rozwijać się w świecie jutra. Oznacza to, że musimy zrozumieć, jak świat się zmienia, nie tylko z punktu widzenia ekonomicznego i rynkowego, ale również pod względem globalnych trendów społecznych i środowiskowych.
            "
                />
              </li>
              <li className={styles.valueListItem}>
                <ValuesListItem
                  title="Jakość"
                  description="Jakość jest niezbędna dla naszej przewagi konkurencyjnej. Powinniśmy dążyć do osiągnięcia doskonałości we wszystkim, co robimy, inspirując naszych współpracowników do opracowywania nowych pomysłów tak, by osiągnąć sukces.
            "
                />
              </li>
              <li className={styles.valueListItem}>
                <ValuesListItem
                  title="Przywództwo"
                  description="Nie czekamy, aż inni pokażą nam, jak mamy działać; sami znajdujemy rozwiązania i w ten sposób pokazujemy interesariuszom wartości, jakie nasza firma może przynieść społeczeństwu."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
