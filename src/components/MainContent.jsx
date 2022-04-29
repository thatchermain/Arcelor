import React, { useState } from "react";
import styles from "../styles/MainContent.module.scss";
import StazImg from "../images/Staz.png";
import PraktykiImg from "../images/Praktyki.png";
import PracaImg from "../images/Praca.png";
import Colab from "../images/Colab.png";
import Button from "./Button";
import BtnArrow from "../images/BtbArrow.png";
import RecruitmentStep from "./RecruitmentStep";
import ValuesListItem from "./ValuesListItem";
import Benefits from "./Benefits";

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <main>
      <section>
        <article id="staze" className={styles.internship}>
          <div className={styles.image}>
            <img src={StazImg} alt="" />
          </div>
          {isOpen ? (
            <Benefits toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} />
          ) : (
            <div className={styles.info}>
              <h4 className={styles.h4}>Szukamy Ciebie</h4>
              <h2 className={styles.h2}>Staże</h2>
              <p className={styles.paragraph}>
                Zapraszamy studentów i absolwentów (do roku po ukończeniu
                studiów) uczelni wyższych do aplikowania na płatny staż w
                ArcelorMittal Poland.
              </p>
              <p className={styles.paragraph}>
                Szukamy otwartych osób, które chcą razem z nami przeżyć zawodową
                przygodę w arcyciekawej branży. Wspólnie z nami i innymi
                stażystami poznasz hutnictwo „od kuchni”, zmierzysz się z
                interesującymi wyzwaniami, a to wszystko w otoczeniu i przy
                wsparciu prawdziwych pasjonatów!
              </p>
              <p className={styles.paragraph}>
                Traktujemy staże poważnie i perspektywicznie – oprócz
                wynagrodzenia oferujemy dostosowaną do stażystów ścieżkę
                szkoleniową, posiłki w stołówkach firmowych, prywatną opiekę
                medyczną, w przypadku wybranych staży możliwość pracy zdalnej
                przez część czasu, dodatkowy dzień wolny (4 maja to nasze święto
                – Dzień Hutnika) czy dofinansowania z funduszu socjalnego.
              </p>
              <p className={styles.paragraph}>
                Interesuje Cię proces surowcowy? Przetwórstwo stali? Z nami
                możesz rozwijać swoje umiejętności w różnych lokalizacjach i
                obszarach.
              </p>
              <div className={styles.hiperlink} onClick={toggle}>
                <span className={styles.span}>Sprawdź benefity</span>
                <img src={BtnArrow} alt="Strzałka w prawo" />
              </div>

              <Button title="Sprawdź oferty stażowe" />
            </div>
          )}
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
              Jeśli lubisz zdobywać nowe umiejętności i poszerzać swoją wiedzę,
              a do tego chcesz zobaczyć, na czym polega praca w przemyśle – te
              praktyki są właśnie dla Ciebie.
            </p>
            <p className={styles.paragraph}>
              Ponieważ zależy nam na Twoim bezpieczeństwie, przed rozpoczęciem
              programu poprosimy Cię o przejście wstępnych badań medycznych,
              szkolenia BHP oraz instruktażu związanego ze stanowiskiem pracy.
            </p>
            <p className={styles.paragraph}>
              Szczegółowe informacje na temat praktyk wraz z terminami
              realizacji znajdziesz w poszczególnych ofertach.
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

            <Button title="Sprawdź oferty pracy" />
          </div>
        </article>
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
