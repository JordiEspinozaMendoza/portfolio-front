import { useState, useEffect } from "react";
import { formatLanguageText, TextComponent } from "components";
import { PageContainer } from "components/containers";
import { HeaderComponent } from "components/header";
import { Section } from "components/sections";
import { SkillSet } from "components/skillset";
import { useLanguage } from "hooks";
import { getAPIServerSideProps } from "utils/api";
import en from "utils/locales/home/en.json";
import es from "utils/locales/home/es.json";
import styles from "../styles/Home.module.sass";
import styled from "styled-components";
import { ExperienceCard } from "components/cards/experience";
import { EducationCard } from "components/cards/education";
import { ProjectCard } from "components/cards/projects";
import { Modal } from "components/modal";
const Container = styled.div`
  .experience,
  .education {
    background-color: ${(props) => props.theme.quinaryColor};
    p,
    h2 {
      color: ${(props) => props.theme.textColorInverted};
    }
  }
  .projects {
    background-color: ${(props) => props.theme.primaryColor};
    p,
    h2 {
      color: ${(props) => props.theme.textColorInverted};
    }
  }
`;
export default function Home(props) {
  useEffect(() => {
    console.log(props.test);
  }, []);
  const { skillset, experience, education, projects, about } = props;
  const { data: dataSkillset, error: errorSkillset } = skillset || {
    data: null,
    error: true,
  };
  const { data: dataExperience, error: errorExperience } = experience || {
    data: null,
    error: true,
  };
  const { data: dataEducation, error: errorEducation } = education || {
    data: null,
    error: true,
  };
  const { data: dataProjects, error: errorProjects } = projects || {
    data: null,
    error: true,
  };
  const { data: dataAbout, error: errorAbout } = about || {
    data: null,
    error: true,
  };
  const { t, language } = useLanguage({ es, en });
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <PageContainer title={t.title} description={t.description}>
      <div className={styles.container}>
        <HeaderComponent data={dataAbout} error={errorAbout} />
      </div>
      <div className={styles.about}>
        <Section
          title={t.about.title}
          image="https://res.cloudinary.com/jordiespinoza/image/upload/v1668973629/portfolio/IMG_2447_cn4det.jpg"
          locales
          background="primary"
        >
          <TextComponent
            locales={
              dataAbout && dataAbout?.attributes && !errorAbout
                ? formatLanguageText({
                    language,
                    en: dataAbout?.attributes?.description_en,
                    es: dataAbout?.attributes?.description,
                  })
                : t.description
            }
            type="p"
          />
          <TextComponent
            locales={t.about.skill_set}
            type="p"
            modifiers={["tertiaryColor"]}
          />
          {!errorSkillset && dataSkillset && dataSkillset.data?.attributes && (
            <SkillSet data={dataSkillset.data.attributes?.data.data} />
          )}
        </Section>
      </div>
      <Container>
        <div className={`${styles.experience} experience`}>
          <div className={styles.experience__title}>
            <TextComponent
              type="h2"
              locales={t.experience.title}
              modifiers={["tertiaryColor"]}
            />
            <TextComponent type="p" locales={t.experience.description} />
          </div>
          {!errorExperience && dataExperience && dataExperience.data && (
            <div className={styles.experience__content}>
              {dataExperience?.data.map((item, index) => (
                <ExperienceCard key={index} data={item?.attributes} />
              ))}
            </div>
          )}
        </div>
        <div className={`${styles.education} education`}>
          <div className={styles.education__title}>
            <TextComponent
              type="h2"
              locales={t.education.title}
              modifiers={["tertiaryColor"]}
            />
          </div>
          {!errorEducation && dataEducation && dataEducation?.data && (
            <div className={styles.experience__content}>
              {dataEducation?.data.map((item, index) => (
                <EducationCard key={index} data={item?.attributes} />
              ))}
            </div>
          )}
        </div>
        <div className={`${styles.projects} projects`}>
          <div className={styles.projects__title}>
            <TextComponent
              type="h2"
              locales={t.projects.title}
              modifiers={["tertiaryColor"]}
            />
          </div>
          {!errorProjects && dataProjects && dataProjects.data && (
            <div className={styles.projects__content}>
              {dataProjects.data
                .sort((a, b) => b.attributes?.featured - a.attributes?.featured)
                .map((item, index) => (
                  <ProjectCard
                    key={index}
                    data={item?.attributes}
                    onClick={(data) => setSelectedProject(data)}
                  />
                ))}
            </div>
          )}
          <Modal
            show={selectedProject}
            title={formatLanguageText({
              language,
              en: selectedProject?.name_en,
              es: selectedProject?.name,
            })}
            onClose={() => setSelectedProject(null)}
          >
            <div className={styles.modal__content}>
              <TextComponent
                type="p"
                text={{
                  en: selectedProject?.description_en,
                  es: selectedProject?.description,
                }}
              />
              {selectedProject?.urls?.data?.length > 0 && (
                <div className={styles.modal__content__links}>
                  <TextComponent type="h5" locales={t.projects.links} />
                  <ul>
                    {selectedProject?.urls?.data?.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item?.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedProject?.image_url && (
                <div className={styles.modal__content__image}>
                  <img src={selectedProject?.image_url} alt="" />
                </div>
              )}
            </div>
          </Modal>
        </div>
      </Container>
    </PageContainer>
  );
}
export async function getStaticProps() {
  const skillset = await getAPIServerSideProps({
    url: "/api/skillset",
  });
  const experience = await getAPIServerSideProps({
    url: "/api/experiences",
  });
  const education = await getAPIServerSideProps({
    url: "/api/educations",
  });
  const projects = await getAPIServerSideProps({
    url: "/api/projects",
  });
  const about = await getAPIServerSideProps({
    url: "/api/about",
  });
  return {
    props: {
      skillset,
      experience,
      education,
      projects,
      about,
      test: process.env.API_URL
    },
  };
}
