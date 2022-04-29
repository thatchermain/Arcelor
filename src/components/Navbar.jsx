import React from "react";
import styles from "../styles/Navbar.module.scss";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.logo}>
          <a href="#home">
            <img src={Logo} alt="ArcelorMittal Brand Logo" />
          </a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.navList}>
            <li>
              <a className="link" href="#o_nas">
                O nas
              </a>
            </li>
            <li>
              <a className="link" href="#staze">
                Staże
              </a>
            </li>
            <li>
              <a className="link" href="#praktyki">
                Praktyki
              </a>
            </li>
            <li>
              <a className="link" href="#praca">
                Praca
              </a>
            </li>
            <li>
              <a className="link" href="#rekrutacja">
                Rekrutacja
              </a>
            </li>
            <li>
              <a className="link" href="#staze">
                Benefity
              </a>
            </li>
            <li>
              <a className="link" href="#wartosci">
                Wartości
              </a>
            </li>
            <li>
              <a className="link" href="#wspolpraca">
                Nasze współprace
              </a>
            </li>
            <li>
              <a className="link" href="#kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
