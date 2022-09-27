import { NextPage } from "next";
import styles from "./sectionOne.module.scss";
import Image from "next/image";
import { ImArrowRight } from "react-icons/im";

export const SectionOne: NextPage = () => {
  return (
    <section className={styles.mainContent} id="home">
      <main className={styles.mainSection}>
        <div className={styles.mainImg}>
          <Image
            className={styles.lawImg}
            src={"/serious-handsome-young-businessman-adjusting-glasses-and-holding-folder.jpg"}
            layout={"fill"}
          />
          <div className={styles.diagBox}>
            <h1 className={styles.diagBoxText}>Advogados de direito</h1>
            <p className={styles.diagBoxDescription}>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className={styles.contactButton}>
              Contacte nossos advogados
              <ImArrowRight />
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};
