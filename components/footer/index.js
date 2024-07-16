import { socialLinks } from "../../constants";
import Icon from "components/icon";

export const Footer = () => {
  return (
    <div className="min-h-[35vh] w-full flex items-center justify-center bg-[#001d3d] p-4">
      <div className="text-center">
        <div className="mb-4 flex flex-col items-center justify-center">
          <p className="font-bold">Reach out to me</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Icon
              nameIcon="AiFillGithub"
              onClick={() => window.open(socialLinks.github, "_blank")}
              className="rounded-full p-2 border border-white text-3xl text-white hover:cursor-pointer hover:opacity-80"
            />
            <Icon
              nameIcon="AiFillLinkedin"
              onClick={() => window.open(socialLinks.linkedin, "_blank")}
              className="rounded-full p-2 border border-white text-3xl text-white hover:cursor-pointer hover:opacity-80"
            />
            <Icon
              nameIcon="AiFillTwitterCircle"
              onClick={() => window.open(socialLinks.twitter, "_blank")}
              className="rounded-full p-2 border border-white text-3xl text-white hover:cursor-pointer hover:opacity-80"
            />
            <Icon
              nameIcon="AiOutlineMail"
              onClick={() =>
                window.open(
                  `mailto:${socialLinks.email}?subject=Hello%20Jordi%20Espinoza`,
                  "_blank"
                )
              }
              className="rounded-full p-2 border border-white text-3xl text-white hover:cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
        <p className="w-full text-center text-lg">
          Made with ❤️ by Jordi Espinoza Mendoza © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
