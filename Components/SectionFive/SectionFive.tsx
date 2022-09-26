import { NextPage } from "next";
import styles from "./sectionFive.module.scss";
import { attorneyInfo } from "../../const/attorneysInfo";
import { AttorneyCard } from "../AttorneyCard/AttorneyCard";

export const SectionFive: NextPage = () => {
  return (
    <section className={styles.sectionFive}>
      <div className={styles.sectionFiveContent}>
        <span className={styles.titleContent}>
          <h1 className={styles.sectionFiveTitle}>Uma dedicada equipe de advogados!</h1>
          <p className={styles.sectionFiveSubTitle}>Sed cursus ante dapibus diam sed nisi nulla quis</p>
        </span>
        <div className={styles.ourAttorneys}>
          {attorneyInfo.map((attorney, index) => (
            <AttorneyCard
              key={index}
              src={attorney.img}
              description={attorney.description}
              name={attorney.name}
              practiceArea={attorney.area}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
