import React from "react";
import styles from "../styles/Recruitment.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
// import PracaImg from "../images/Praca.png";
// import Colab from "../images/Colab.png";
// import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
import RecruitmentStep from "./RecruitmentStep";
// import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
// import Staze from "./Staze";
// import Praktyki from "./Praktyki";
// import Praca from "./Praca";

const Recruitment = (props) => {
  return (
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
              addClass="styles.firstOnList"
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
  );
};

export default Recruitment;
