import React from "react";
import styles from "../styles/MainContent.module.scss";
// import StazImg from "../images/Staz.png";
// import PraktykiImg from "../images/Praktyki.png";
// import PracaImg from "../images/Praca.png";
// import Colaboration from "../images/Colab.png";
// import Button from "./Button";
// import BtnArrow from "../images/BtbArrow.png";
// import RecruitmentStep from "./RecruitmentStep";
// import ValuesListItem from "./ValuesListItem";
// import Benefits from "./Benefits";
import Staze from "./Staze";
import Praktyki from "./Praktyki";
import Praca from "./Praca";
import Recruitment from "./Recruitment";
import Values from "./Values";
import Colab from "./Colab";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <main>
      <Staze />
      <Praktyki />
      <Praca />
      <Recruitment />
      <Values />
      <Colab />
      <Contact />
    </main>
  );
};

export default MainContent;
