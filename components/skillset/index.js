import Icon from "components/icon";
import styles from "./styles.module.sass";

export const SkillSet = ({ data }) => {
  return (
    <div className={styles.skillset}>
      {data
        .sort((a, b) => b.name < a.name)
        .map((item, index) => (
          <div className={styles.skill__item} key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Icon nameIcon={item.icon} />
            </a>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
};
