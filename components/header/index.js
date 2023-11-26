import styles from "./styles.module.sass";
import Link from "next/link";
import Image from "next/image";

export const HeaderComponent = ({ data }) => {
  const { attributes } = data.data || {};

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__info__content}>
          <div className={styles.header__text}>
            <h1>Hey, I'm Jordi Espinoza</h1>
            <p>{attributes?.header_subtitle_en}</p>
          </div>
          <div className={styles.header__buttons}>
            <button className="btn btn-primary">
              <Link href={attributes?.cv_url} passHref={true}>
                View CV
              </Link>
            </button>
            <button className="btn btn-secondary">
              <Link
                href={`mailto:${attributes?.email_contact}?subject=Hello%20Jordi%20Espinoza`}
                passHref={true}
              >
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.header__avatar}>
        <Image
          src="https://portfolio-jordi.s3.amazonaws.com/hackmty.jpeg"
          alt="Jordi Espinoza"
          className={styles.header__avatar__image}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};
