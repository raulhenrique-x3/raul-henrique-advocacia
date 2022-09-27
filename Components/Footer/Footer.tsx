import { NextPage } from "next";
import { footerPracticeArea } from "../../const/footerPracticeArea";
import styles from "./footer.module.scss";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ContactInfo } from "../ContactInfo/ContactInfo";

export const Footer: NextPage = () => {
  return (
    <footer className={styles.footerContent} id="footer">
      <main className={styles.footerMain}>
        <div className={styles.footerAboutUs}>
          <span className={styles.footerHeader}>
            <p className={styles.aboutUsText}>Sobre nós</p>
          </span>
          <p className={styles.aboutUsSubtitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptate tenetur vel aut! Rerum molestias
            reprehenderit perferendis hic ex nobis voluptatum blanditiis excepturi similique, modi nostrum, quo ab
            laborum fuga.
          </p>
        </div>

        <div className={styles.footerPracticeAreas}>
          <p className={styles.footerPracticeAreasText}>Áreas de atuação</p>
          <ul className={styles.footerPracticeAreasUnList}>
            {footerPracticeArea.map((area, index) => (
              <li className={styles.footerPracticeAreasList} key={index}>
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <span className={styles.contactInfoHeader}>
            <p className={styles.contactInfoTitle}>Informações de contato</p>
            <p className={styles.contactInfoSubTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </span>

          <ContactInfo />
        </div>
      </main>

      <div className={styles.footerCopyright}>
        <span className={styles.footerCopyrightText}>
          <p className={styles.footerCopyrightInfo}>© COPYRIGHT 2022 -</p>
          <p className={styles.footerCopyrightDevName}>Raul Henrique</p>
        </span>
        <div className={styles.followUs}>
          <BsTwitter className={styles.BsIcon} />
          <BsFacebook className={styles.BsIcon} />
          <BsInstagram className={styles.BsIcon} />
          <BsLinkedin className={styles.BsIcon} />
        </div>
      </div>
    </footer>
  );
};
