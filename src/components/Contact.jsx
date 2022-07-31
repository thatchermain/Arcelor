import React from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`${styles.h2} ${styles.h2Contact}`}>
            Gdzie nas znajdziesz
          </h2>
          <div className={styles.contactWrapper}>
            <div className={styles.column}>
              <p className={styles.contactParagraph}>
                Bądź na bieżąco i zaobserwuj nasze konto na{" "}
                <a
                  href="https://www.instagram.com/arcelormittal_poland /"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.instagram}
                >
                  Instagramie
                </a>
              </p>
              <p className={styles.contactParagraph}>
                Jeśli masz pytania lub wątpliwości, napisz do nas na:
              </p>
            </div>
            <div>
              <p className={styles.contactName}>
                wiktoria.werner@arcelormittal.com
              </p>
              <p className={styles.contactName}>
                zainstalujsie@arcelormittal.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
