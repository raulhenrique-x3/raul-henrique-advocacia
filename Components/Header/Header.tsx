import React, { useState } from "react";
import { NextPage } from "next";
import styles from "./header.module.scss";
import { headerLiHome } from "../../const/headerLiHome";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsBank2, BsList, BsChevronCompactRight } from "react-icons/bs";

export const Header: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.headerPage}>
      <span className={styles.headerContacts}>
        <p className={styles.phoneNumber}>Ligue-nos: (55)9.8765-4321</p>
        <div className={styles.socialIcons}>
          <BsTwitter className={styles.BsIcon} />
          <BsFacebook className={styles.BsIcon} />
          <BsInstagram className={styles.BsIcon} />
          <BsLinkedin className={styles.BsIcon} />
        </div>
      </span>
      <nav className={styles.headerContent}>
        <span className={styles.mobileNav}>
          <p className={styles.logoPage}>
            <BsBank2 />
            Henrique Advocacia
          </p>
          <BsList className={styles.BsList} onClick={() => setShowMenu(!showMenu)} />
        </span>

        <ul className={showMenu ? styles.headerMenu : styles.headerMenuHidden}>
          <li className={styles.headerLiHome}>Home</li>
          {headerLiHome.map((option, index) => (
            <li className={styles.headerLi} key={index}>
              {option}
              <BsChevronCompactRight className={styles.BsChevronCompactRight} />
            </li>
          ))}
          <div className={styles.socialIconsMobile}>
            <BsTwitter className={styles.BsIconMobile} />
            <BsFacebook className={styles.BsIconMobile} />
            <BsInstagram className={styles.BsIconMobile} />
            <BsLinkedin className={styles.BsIconMobile} />
          </div>
        </ul>
      </nav>
    </header>
  );
};
