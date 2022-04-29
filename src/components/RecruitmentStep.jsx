import React from "react";
import styles from "../styles/RecruitmentStep.module.scss";

const RecruitmentStep = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.number}>
        <span className={styles.span}>{props.number}</span>
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default RecruitmentStep;
