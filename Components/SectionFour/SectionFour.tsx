import { NextPage } from "next";
import { IoIosPeople } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import Image from "next/image";
import styles from "./sectionFour.module.scss";

export const SectionFour: NextPage = () => {
  return (
    <section className={styles.sectionFour}>
      <div className={styles.sectionFourContent}>
        <div className={styles.whyUsImg}>
          <Image
            src={
              "/modern-office-building-low-angle-view-of-skyscrapers-in-city-of-singapore-modern-office-building-low-angle-view-of-skyscrapers-in-city-of-singapore.jpg"
            }
            layout={"fill"}
            objectFit={"cover"}
          />
        </div>
        <div className={styles.whyUsContent}>
          <span className={styles.whyUsInfo}>
            <h1 className={styles.whyUsTitle}>Por que escolher nossos serviços?</h1>
            <p className={styles.whyUsSubTitle}>It was popularised in the 1960s with the release of Letraset sheets</p>
          </span>

          <div className={styles.whyUsIconInfo}>
            <span className={styles.whyUsInfo}>
              <div className={styles.whyUsIconTitle}>
                <IoIosPeople className={styles.whyUsIcon} />
                <h2 className={styles.whyUsTitleh2}>Advogados experientes</h2>
              </div>
              <p className={styles.whyUsSubTitleDesc}>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </span>
            <span className={styles.whyUsInfo}>
              <div className={styles.whyUsIconTitle}>
                <GoLaw className={styles.whyUsIcon} />
                <h2 className={styles.whyUsTitleh2}>Melhores estratégias</h2>
              </div>
              <p className={styles.whyUsSubTitleDesc}>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </span>
            <span className={styles.whyUsInfo}>
              <div className={styles.whyUsIconTitle}>
                <MdOutlineWork className={styles.whyUsIcon} />
                <h2 className={styles.whyUsTitleh2}>Com você - Do começo ao fim!</h2>
              </div>
              <p className={styles.whyUsSubTitleDesc}>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
