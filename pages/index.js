import { HeaderComponent } from "components/header";
import Image from "next/image";

import skillset from "data/skillset.json";
import experience from "data/experience.json";
import education from "data/education.json";
import projects from "data/projects.json";
import about from "data/about.json";
import { SkillSet } from "components/skillset";
import { EducationCard } from "components/cards/education";
import { ProjectCard } from "components/cards/projects";
import { Timeline } from "components/timeline";

export default function Home() {
  return (
    <>
      <HeaderComponent data={about} />
      <div className="grid bg-[#003566] grid-cols-1 md:grid-cols-2" id="about">
        <div className="p-8 lg:p-4 flex flex-col gap-2 justify-center">
          <h2 className="text-2xl">About me</h2>
          <p className="text-sm text-justify">{about.description}</p>
          <p className="text-sm mb-4">
            Some of the technologies and tools that I have worked with are:{" "}
          </p>
          <SkillSet data={skillset.data} />
        </div>

        <div className="w-full h-full">
          <Image
            src="https://portfolio-jordi.s3.amazonaws.com/_DSC4508.JPG"
            alt="Jordi Espinoza"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#000814] p-8 flex flex-col gap-8" id="experience">
        <h2 className="text-2xl">Experience</h2>
        <Timeline experience={experience.data} />
      </div>

      <div className="bg-[#000814] p-8 flex flex-col gap-8" id="projects">
        <h2 className="text-2xl">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.data
            .map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
        </div>
      </div>

      <div className="bg-[#003566] p-8 flex flex-col gap-8" id="education">
        <h2 className="text-2xl">Education and Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {education?.data.map((item, index) => (
            <EducationCard key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="bg-[#000814] p-8 flex flex-col gap-8">
        <h2 className="text-2xl">Contact</h2>
        <div className="flex flex-col gap-4">
          <p className="text-sm">
            If you want to get in touch, talk to me about a project
            collaboration or just say hi, feel free to send me an email at{" "}
            <a
              href={`mailto:${about.email_contact}?subject=Hello%20Jjordi%20Espinoza`}
              className="text-blue-400"
            >
              {about.email_contact}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
