import React, { useState } from "react";
import styles from "../styles/NavbarMobile.module.scss";
import Logo from "../images/logo-mobile.png";
import LogoMobileActive from "../images/logo-mobile-active.png";

const NavbarMobile = ({ toggle, isOpen, setIsOpen }) => {
  const [showMobile, setShowMobile] = useState(false);

  const toggleMobile = () => {
    setShowMobile(!showMobile);
    console.log(showMobile);
  };

  return (
    <nav>
      <nav className={showMobile ? `${styles.navActive}` : `${styles.nav}`}>
        <div className={styles.wrapperNav}>
          <div className={styles.logo}>
            <a href="#home">
              {!showMobile ? (
                <img src={Logo} alt="ArcelorMittal Brand Logo" />
              ) : (
                <img
                  src={LogoMobileActive}
                  alt="ArcelorMittal Brand Logo"
                  className={styles.logoMobileActive}
                />
              )}
            </a>
          </div>
          <div className={styles.hamburger}>
            <div className={styles.logo} onClick={toggleMobile}>
              <div
                className={
                  !showMobile ? `${styles.menuOpen}` : `${styles.menuClose}`
                }
              ></div>
            </div>
          </div>
        </div>
        <div className={showMobile ? `${styles.isActive}` : `${styles.hidden}`}>
          <ul className={styles.navList}>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#o_nas">
                O nas
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#staze">
                Staże
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#praktyki">
                Praktyki
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#praca">
                Praca
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#rekrutacja">
                Rekrutacja
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
              toggle={toggle}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              <a className="linkMobile" href="#staze">
                Benefity
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#wartosci">
                Wartości
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#wspolpraca">
                Nasze współprace
              </a>
            </li>
            <li
              className={styles.listItem}
              onClick={() => setShowMobile(false)}
            >
              <a className="linkMobile" href="#kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default NavbarMobile;
