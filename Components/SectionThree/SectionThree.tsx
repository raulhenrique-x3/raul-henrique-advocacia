import { NextPage } from "next";
import styles from "./sectionThree.module.scss";
import { ImUserTie, ImTrophy } from "react-icons/im";
import { FaHandshake, FaAward } from "react-icons/fa";

export const SectionThree: NextPage = () => {
  return (
    <section className={styles.mainContent03}>
      <main className={styles.section03}>
        <span className={styles.titleContent}>
          <h1 className={styles.sectionTitle}>Definindo o sucesso juntos!</h1>
          <p className={styles.sectionSubTitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </span>

        <div className={styles.mainAwards}>
          <figure className={styles.awardFigures}>
            <ImUserTie className={styles.iconsFigure} />
            <p className={styles.figTitle}>- Reconhecimento</p>
            <p className={styles.figSubTitle}>Lorem Ipsum is simply dummy text of the printing</p>
          </figure>
          <figure className={styles.awardFigures}>
            <ImTrophy className={styles.iconsFigure} />
            <p className={styles.figTitle}>- Comercial</p>
            <p className={styles.figSubTitle}>Lorem Ipsum is simply dummy text of the printing</p>
          </figure>
          <figure className={styles.awardFigures}>
            <FaHandshake className={styles.iconsFigure} />
            <p className={styles.figTitle}>- Confiáveis</p>
            <p className={styles.figSubTitle}>Lorem Ipsum is simply dummy text of the printing</p>
          </figure>
          <figure className={styles.awardFigures}>
            <FaAward className={styles.iconsFigure} />
            <p className={styles.figTitle}>- Apoiadores</p>
            <p className={styles.figSubTitle}>Lorem Ipsum is simply dummy text of the printing</p>
          </figure>
        </div>
      </main>
    </section>
  );
};
