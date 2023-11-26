import { handleGetTime } from "utils";
import styles from "./styles.module.sass";
import Link from "next/link";

export const ExperienceCard = ({ data }) => {
  const { title_en, description_en, company, time_data, company_url, present } =
    data;

  return (
    <div className={styles.experience__card}>
      <div className={styles.experience__card__title}>
        <h3>{title_en}</h3>
        <Link
          href={company_url}
          className={styles.experience__card__title__company}
        >
          {company}
        </Link>

        <p className={styles.experience__card__title__time}>
          {handleGetTime(time_data, present)}
        </p>
      </div>
      <div className={styles.experience__card__description}>
        <p>{description_en}</p>
      </div>
    </div>
  );
};
