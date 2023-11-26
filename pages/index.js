import { HeaderComponent } from "components/header";
import styles from "../styles/Home.module.sass";

import skillset from "data/skillset.json";
import experience from "data/experience.json";
import education from "data/education.json";
import projects from "data/projects.json";
import about from "data/about.json";
import { SkillSet } from "components/skillset";
import { ExperienceCard } from "components/cards/experience";
import { EducationCard } from "components/cards/education";
import { ProjectCard } from "components/cards/projects";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <HeaderComponent data={about} />
      </div>
      <div className={styles.about}>
        <div className={styles.about__image}>
          <img
            src="https://portfolio-jordi.s3.amazonaws.com/_DSC4508.JPG"
            alt="Jordi Espinoza"
          />
        </div>

        <div className={styles.about__text}>
          <h2>About me</h2>
          <p>{about.data.attributes.description_en}</p>
          <SkillSet data={skillset.data.attributes.data.data} />
        </div>
      </div>

      <div className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.list__cards}>
          {projects.data
            .sort((a, b) => b.attributes.featured - a.attributes.featured)
            .map((item, index) => (
              <ProjectCard key={index} data={item?.attributes} />
            ))}
        </div>
      </div>

      <div className={styles.experience}>
        <h2>Experience</h2>
        <div className={styles.list__cards}>
          {experience?.data.map((item, index) => (
            <ExperienceCard key={index} data={item?.attributes} />
          ))}
        </div>
      </div>

      <div className={styles.education}>
        <h2>Education and Certifications</h2>
        <div className={styles.list__cards}>
          {education?.data.map((item, index) => (
            <EducationCard key={index} data={item.attributes} />
          ))}
        </div>
      </div>
    </>
  );
}
