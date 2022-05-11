import React from "react";
import styles from "../styles/Values.module.scss";
import ValuesListItem from "./ValuesListItem";

const Values = () => {
  return (
    <section id="wartosci">
      <div className={styles.values}>
        <div className="container">
          <div className={`${styles.wrapper}`}>
            <h2 className={styles.h2White}>Nasze wartości</h2>
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
