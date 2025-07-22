import { ProjectCard } from "components/cards/projects";
import projects from "data/projects.json";

export default function Projects() {
    return (
        <>
            <div className="bg-[#000814] p-8 flex flex-col gap-8" id="projects">
                <h2 className="text-3xl text-center">Projects Freelancer</h2>
                <span className="text-center text-sm mb-4">
                    Here are some of the projects I have worked on.
                </span>
            </div>

            <div className="bg-[#000814] p-8 flex flex-col gap-8" id="projects">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.data
                        .filter((item) => item.freelance)
                        .map((item, index) => (
                            <ProjectCard key={index} data={item} />
                        ))}
                </div>
            </div>
        </>
    )
};
