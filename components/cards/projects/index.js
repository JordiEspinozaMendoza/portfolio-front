import styles from "./styles.module.sass";
import Image from "next/image";

export const ProjectCard = ({ data, onClick }) => {
  const { name_en, image_url, tags, description_en } = data;

  return (
    <div className={styles.project__card}>
      <div className={styles.project__card__image}>
        <Image
          src={image_url}
          alt={name_en}
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className={styles.project__card__text}>
        <h3>{name_en}</h3>

        {tags?.data?.length > 0 && (
          <div className={styles.project__card__text__tags}>
            <p>Tags: </p>
            <div className={styles.project__card__text__tags__list}>
              {tags.data.map((tag, index) => (
                <p
                  className={styles.project__card__text__tags__tag}
                  key={index}
                >
                  {`${tag}${index !== tags.data.length - 1 ? "," : " "}`}
                </p>
              ))}
            </div>
          </div>
        )}
        <p className={styles.project__card__text__description}>
          {description_en}
        </p>
      </div>
    </div>
  );
};
