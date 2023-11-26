import styles from "./styles.module.sass";
import Link from "next/link";

export const EducationCard = ({ data }) => {
  const { title_en, description_en, time_data, item_url, present } = data;

  const handleGetTime = () => {
    const { start, end } = time_data;
    const { year: startYear, month: startMonth } = start;
    const { year: endYear, month: endMonth } = end;
    const language = "en";

    const startDate = `${new Date(startYear, startMonth).toLocaleString(
      language,
      { month: "long" }
    )} ${startYear}`;
    const endDate = `${new Date(endYear, endMonth).toLocaleString(language, {
      month: "long",
    })} ${endYear}`;

    if (present) {
      return `${startDate} - Present`;
    }

    return `${startDate} - ${endDate}`;
  };

  return (
    <div className={styles.education__card}>
      <div className={styles.education__card__title}>
        <h3>{title_en}</h3>
        <p className={styles.education__card__title__time}>{handleGetTime()}</p>
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
