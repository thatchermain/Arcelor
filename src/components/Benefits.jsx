import React from "react";
import benefitList from "../data/benefitList";
import styles from "../styles/Benefits.module.scss";
import BenefitSingle from "./BenefitSingle";
import BtnArrow from "../images/BtbArrow.png";

const Benefits = ({ toggle, isOpen, setIsOpen }) => {
  return (
    <section id="benefity">
      <div className={styles.wrapper}>
        <h3 className={styles.h3}>Benefity</h3>
        <div className={styles.benefits}>
          {benefitList.map((item) => {
            return (
              <BenefitSingle src={item.icon} info={item.info} alt={item.alt} />
            );
          })}
        </div>
        <div className={styles.hiperlink} onClick={toggle}>
          <img src={BtnArrow} alt="Strzałka w lewo" />
          <span className={styles.span}>Wróc</span>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
