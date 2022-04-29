import React from "react";
import styles from "../styles/Footer.module.scss";
import Twitter from "../images/Twitter.png";
import Linkedin from "../images/Linkedin.png";
import YouTube from "../images/YouTube.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <h6 className={styles.name}>ArcelorMittal Poland</h6>
              <div className={styles.address}>
                <p>41-308 Dąbrowa Górnicza,</p>
                <p>Al. Piłsudskiego 92,</p>
              </div>
              <span className={styles.copyright}>
                {" "}
                {"  "}2022 ArcelorMittal
              </span>
            </div>
            <div className={styles.column}>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <img src={Linkedin} alt="" />
                </div>
                <div className={styles.icon}>
                  <img src={Twitter} alt="" />
                </div>
                <div className={styles.icon}>
                  <img src={YouTube} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
