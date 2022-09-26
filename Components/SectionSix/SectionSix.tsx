import { NextPage } from "next";
import { ClientCard } from "../ClientCard/ClientCard";
import { clientOpinions } from "../../const/clientOpinions";
import styles from "./sectionSix.module.scss";

export const SectionSix: NextPage = () => {
  return (
    <section className={styles.sectionSix}>
      <div className={styles.sectionSixContent}>
        <header className={styles.titleContent}>
          <h1 className={styles.clientSays}>O que dizem nossos clientes?</h1>
          <p className={styles.clientSaysSubtitle}>Aenean lectus elit, fermentum non convallis sagittis</p>
        </header>

        <div className={styles.clientsCards}>
          {clientOpinions.map((client, index) => (
            <ClientCard
              key={index}
              clientId={client.id}
              clientName={client.name}
              srcClient={client.src}
              description={client.Description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
