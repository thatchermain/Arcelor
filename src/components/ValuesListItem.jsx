import React from "react";
import styles from "../styles/ValuesListItem.module.scss";

const ValuesListItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default ValuesListItem;
