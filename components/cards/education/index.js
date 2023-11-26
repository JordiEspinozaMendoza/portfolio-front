import { handleGetTime } from "utils";
import styles from "./styles.module.sass";
import Link from "next/link";

export const EducationCard = ({ data }) => {
  const { title_en, description_en, time_data, item_url, present } = data;

  return (
    <div className={styles.education__card}>
      <div className={styles.education__card__title}>
        <h3>{title_en}</h3>
        <p className={styles.education__card__title__time}>
          {handleGetTime(time_data, present)}
        </p>
        {item_url && (
          <Link href={item_url} className={styles.education__card__title__link}>
            View
          </Link>
        )}
      </div>
      <div className={styles.education__card__description}>
        <p>{description_en}</p>
      </div>
    </div>
  );
};
