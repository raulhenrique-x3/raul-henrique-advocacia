import React from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "../SectionSix/sectionSix.module.scss";

interface IProps {
  description: React.ReactNode;
  clientName: React.ReactNode;
  clientId: React.ReactNode;
  srcClient: React.ReactNode;
}

export const ClientCard: React.FC<IProps> = ({ description, clientName, clientId, srcClient }) => {
  return (
    <div className={styles.clientCard}>
      <p className={styles.clientDescription}>{description}</p>

      <div className={styles.clientInfos}>
        <Avatar format="round" name={clientName} src={srcClient} size="big" />
        <span className={styles.clientNameId}>
          <p className={styles.clientName}>{clientName}</p>
          <p className={styles.clientId}>{clientId}</p>
        </span>
      </div>
    </div>
  );
};
