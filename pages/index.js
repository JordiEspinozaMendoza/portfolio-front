import { HeaderComponent } from "components/header";
import Image from "next/image";

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
      <HeaderComponent data={about} />
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] bg-[#003566]"
        id="about"
      >
        <div className="w-full h-full">
          <Image
            src="https://portfolio-jordi.s3.amazonaws.com/_DSC4508.JPG"
            alt="Jordi Espinoza"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 lg:p-4">
          <h2>About me</h2>
          <p>{about.description}</p>
          <p>
            Some of the technologies and tools that I have worked with are:{" "}
          </p>
          <SkillSet data={skillset.data} />
        </div>
      </div>

      <div className="bg-[#000814] p-8 flex flex-col gap-8" id="experience">
        <h2>Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experience?.data.map((item, index) => (
            <ExperienceCard key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="bg-[#000814] p-8 flex flex-col gap-8" id="projects">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.data
            .sort((a, b) => b.featured - a.featured)
            .map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
        </div>
      </div>

      <div className="bg-[#003566] p-8 flex flex-col gap-8" id="education">
        <h2>Education and Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education?.data.map((item, index) => (
            <EducationCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
