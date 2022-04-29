import React from "react";
import styles from "../styles/BenefitSingle.module.scss";

const BenefitSingle = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className={styles.info}>
        <p className={styles.description}>{props.info}</p>
      </div>
    </div>
  );
};

export default BenefitSingle;
