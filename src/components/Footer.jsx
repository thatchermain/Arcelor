import React from "react";
import styles from "../styles/Footer.module.scss";
import Twitter from "../images/Twitter.png";
import Linkedin from "../images/Linkedin.png";
import YouTube from "../images/YouTube.png";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <h6 className={styles.name}>ArcelorMittal Poland</h6>
              <div className={styles.address}>
                <p>41-308 Dąbrowa Górnicza</p>
                <p>Al. Piłsudskiego 92</p>
              </div>
              <span className={styles.copyright}>
                {" "}
                {"  "}2022 ArcelorMittal
              </span>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <a
                  className="link"
                  href="https://www.linkedin.com/company/arcelormittal-poland-s-a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="" />
                </a>
              </div>
              <div className={styles.icon}>
                <a
                  className="link"
                  href="https://twitter.com/arcelormittalpl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitter} alt="" />
                </a>
              </div>
              <div className={styles.icon}>
                <a
                  className="link"
                  href="https://www.youtube.com/channel/UCVtDcmERIrG1EwSKrNLAylw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={YouTube} alt="" />
                </a>
              </div>
              <div className={styles.icon}>
                <a
                  className="link-footer"
                  href="https://www.facebook.com/ArcelorMittalPoland/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook size="22px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
