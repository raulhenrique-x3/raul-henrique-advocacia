import React, { useState } from "react";
import { NextPage } from "next";
import styles from "./header.module.scss";
import { Link } from "react-scroll";
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
          <li className={styles.headerLiHome}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className={styles.headerLi}>
            <Link activeClass="active" to="sectionTwo" spy={true} smooth={true} offset={50} duration={500}>
              Áreas de atuação
              <BsChevronCompactRight className={styles.BsChevronCompactRight} />
            </Link>
          </li>
          <li className={styles.headerLi}>
            <Link activeClass="active" to="sectionFive" spy={true} smooth={true} offset={50} duration={500}>
              Advogados
              <BsChevronCompactRight className={styles.BsChevronCompactRight} />
            </Link>
          </li>
          <li className={styles.headerLi}>
            <Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={500}>
              Sobre
              <BsChevronCompactRight className={styles.BsChevronCompactRight} />
            </Link>
          </li>
          <li className={styles.headerLi}>
            <Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={500}>
              Contatos
              <BsChevronCompactRight className={styles.BsChevronCompactRight} />
            </Link>
          </li>

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
