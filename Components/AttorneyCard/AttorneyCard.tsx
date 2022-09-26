import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "../SectionFive/sectionFive.module.scss";

interface IProps {
  src: string;
  name: string;
  practiceArea: string;
  description: string;
}

export const AttorneyCard: React.FC<IProps> = ({ src, name, practiceArea, description }) => {
  return (
    <figure className={styles.attorneyFigure}>
      <div className={styles.attorneyImg}>
        <Image src={src} layout={"fill"} alt={"smiling-confident-businesswoman-posing-with-arms-folded"} />
      </div>

      <div className={styles.attorneyInfo}>
        <h2 className={styles.attorneyName}>{name}</h2>
        <p className={styles.attorneyArea}>{practiceArea}</p>
        <hr />
        <p className={styles.attorneyDescription}>{description}</p>
      </div>
      <div className={styles.followUs}>
        <BsTwitter className={styles.BsIcon} />
        <BsFacebook className={styles.BsIcon} />
        <BsInstagram className={styles.BsIcon} />
        <BsLinkedin className={styles.BsIcon} />
      </div>
    </figure>
  );
};
