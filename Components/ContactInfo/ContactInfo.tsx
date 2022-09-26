import { NextPage } from "next";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import styles from "../Footer/footer.module.scss";

export const ContactInfo: NextPage = () => {
  return (
    <div className={styles.contactIcons}>
      <span className={styles.contactIconsAdress}>
        <MdLocationOn className={styles.MdLocationOn} />
        <span className={styles.contactInfoFooter}>
          <p className={styles.contactIconsAdressText}>Adress:</p>
          <p className={styles.contactIconsAdressCity}>Pernambuco, Brasil</p>
        </span>
      </span>
      <span className={styles.contactIconsPhone}>
        <MdPhone className={styles.MdPhone} />
        <span className={styles.contactInfoFooter}>
          <p className={styles.contactIconsNumberText}>Número:</p>
          <p className={styles.contactIconsNumber}>(55)9.8765-4321</p>
        </span>
      </span>
      <span className={styles.contactIconsEmail}>
        <MdEmail className={styles.MdEmail} />
        <span className={styles.contactInfoFooter}>
          <p className={styles.emailText}>Email:</p>
          <p className={styles.contactIconEmailText}>raulhenrique@adv.com</p>
        </span>
      </span>
    </div>
  );
};
