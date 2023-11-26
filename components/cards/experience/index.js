import styles from "./styles.module.sass";
import Link from "next/link";

export const ExperienceCard = ({ data }) => {
  const { title_en, description_en, company, time_data, company_url, present } =
    data;

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
      let text = language === "es" ? "Actualidad" : "Present";
      return `${startDate} - ${text}`;
    }

    return `${startDate} - ${endDate}`;
  };

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
          {handleGetTime()}
        </p>
      </div>
      <div className={styles.experience__card__description}>
        <p>{description_en}</p>
      </div>
    </div>
  );
};
