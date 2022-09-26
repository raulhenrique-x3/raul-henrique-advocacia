import { NextPage } from "next";
import styles from "./sectionTwo.module.scss";
import { GoLaw } from "react-icons/go";
import { BiBuildings } from "react-icons/bi";
import { GiRevolver } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";

export const SectionTwo: NextPage = () => {
  return (
    <section className={styles.mainContent02}>
      <main className={styles.sectionContent02}>
        <div className={styles.titleContent}>
          <h1 className={styles.praticeAreaH1}>Áreas de atuação</h1>
          <p className={styles.praticeAreaSubtitle}>There are many variations of passages of Lorem Ipsum available</p>
        </div>

        <div className={styles.practiceAreas}>
          <figure className={styles.practiceArea}>
            <span className={styles.figTitle}>
              <GoLaw className={styles.GoLaw} />
              <h2 className={styles.figArea}>Direitos Civis</h2>
            </span>

            <p className={styles.figAreaSubtitle}>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </figure>
          <figure className={styles.practiceArea}>
            <span className={styles.figTitle}>
              <BiBuildings className={styles.GoLaw} />
              <h2 className={styles.figArea}>Direitos Corporativos</h2>
            </span>
            <p className={styles.figAreaSubtitle}>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </figure>
          <figure className={styles.practiceArea}>
            <span className={styles.figTitle}>
              <GiRevolver className={styles.GoLaw} />
              <h2 className={styles.figArea}>Advogados criminais</h2>
            </span>
            <p className={styles.figAreaSubtitle}>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </figure>
          <figure className={styles.practiceArea}>
            <span className={styles.figTitle}>
              <RiBuilding2Fill className={styles.GoLaw} />
              <h2 className={styles.figArea}>Advogados comerciais</h2>
            </span>
            <p className={styles.figAreaSubtitle}>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </figure>
        </div>
      </main>
    </section>
  );
};
