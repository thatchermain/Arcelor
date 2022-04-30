import React from "react";
import styles from "../styles/MainContent.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
// import PracaImg from "../images/Praca.png";
import Colab from "../images/Colab.png";
// import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
import RecruitmentStep from "./RecruitmentStep";
import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
import Staze from "./Staze";
import Praktyki from "./Praktyki";
import Praca from "./Praca";

const MainContent = () => {
  return (
    <main>
      <section>
        <Staze />
        <Praktyki />
        <Praca />
      </section>
      <section id="rekrutacja">
        <div className="container">
          <h2 className={styles.h2}>Etapy rekrutacji</h2>
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <h3 className={styles.h3}>Rekrutacja do pracy</h3>
              <RecruitmentStep
                number="01"
                title="Przesłanie aplikacji"
                description="Wszystkie dostępne ogłoszenia rekrutacyjne znajdziesz w zakładce „Oferty pracy”. Zapoznaj się z nimi i aplikuj przez naszą wewnętrzną platformę rekrutacyjną."
              />
              <RecruitmentStep
                number="02"
                title="Rozmowa kwalifikacyjna"
                description="Po pozytywnym rozpatrzeniu Twojej aplikacji zaprosimy Cię na rozmowę kwalifikacyjną z osobą z działu rekrutacji oraz menedżerem – Twoim potencjalnym przełożonym."
              />
              <RecruitmentStep
                number="03"
                title="Test"
                description="W przypadku niektórych stanowisk możesz otrzymać zaproszenie do wykonania testów online, np. sprawdzających Twój poziom znajomości programowania."
              />
              <RecruitmentStep
                number="04"
                title="Rozmowa z dyrektorem"
                description="W zależności od Twojej przyszłej roli w naszej firmie, możesz spodziewać się także dodatkowego spotkania z dyrektorem. Jeśli znajdziesz się na tym etapie rekrutacji, to znak, że jesteś osobą, której szukamy."
              />
              <RecruitmentStep
                number="05"
                title="Decyzja"
                description="Informację zwrotną przekażemy Ci tak szybko, jak to możliwe."
              />
              <RecruitmentStep
                number="06"
                title="Zatrudnienie"
                description="Tylko kilka kroków dzieli Cię od dołączenia do naszego zespołu – nie zwlekaj, aplikuj już dziś i FEEL THE STEEL!"
              />
            </div>
            <div className={styles.column}>
              <h3 className={styles.h3}>Rekrutacja na staż</h3>
              <RecruitmentStep
                number="01"
                title="Przesłanie aplikacji"
                description="Wybierz interesującą Cię ofertę stażu i wyślij do nas swoją aplikację."
              />
              <RecruitmentStep
                number="02"
                title="Rozmowa wstępna"
                description="Podczas krótkiej rozmowy telefonicznej nasz rekruter zada Ci kilka pytań, aby sprawdzić Twoje dopasowanie do stanowiska. "
              />
              <RecruitmentStep
                number="03"
                title="Rozmowa kwalifikacyjna "
                description="Na spotkaniu poznasz swojego przełożonego lub mentora i będziesz mieć okazję dowiedzieć się więcej na temat naszej firmy. Na tym etapie możemy Cię też poprosić   o zrobienie testu dotyczącego znajomości MS EXCEL.
"
              />
              <RecruitmentStep
                number="04"
                title="Decyzja"
                description="Po rozmowie otrzymasz od nas informację zwrotną – odezwiemy się tak szybko, jak to możliwe. 
"
              />
              <RecruitmentStep
                number="05"
                title="Zaproszenie na staż
"
                description="Jeśli wszystko pójdzie pomyślnie, zaprosimy Cię do naszego zespołu. Do zobaczenia na stażu!"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="wartosci">
        <div className={styles.values}>
          <div className={`${styles.wrapper} container`}>
            <div className={styles.column}>
              <h2 className={`${styles.h2} ${styles.h2White}`}>
                Nasze wartości
              </h2>
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
      <section id="wspolpraca">
        <div className="container">
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
                <img src={Colab} alt="To be filled with content" />
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
      </section>
      <section id="kontakt" className={styles.contact}>
        <div className="container">
          <h2 className={`${styles.h2} ${styles.h2Contact}`}>
            Gdzie nas znajdziesz
          </h2>
          <div className={styles.contactWrapper}>
            <div className={styles.column}>
              <p className={styles.contactParagraph}>
                Jeśli masz pytania lub wątpliwości, napisz do nas na:
              </p>
            </div>
            <div className={styles.column}>
              <p className={styles.contactParagraph}>
                wiktoria.werner@arcelormittal.com
              </p>
              <p className={styles.contactParagraph}>
                zainstalujsie@arcelormittal.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
