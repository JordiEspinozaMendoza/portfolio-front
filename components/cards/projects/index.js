import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ data }) => {
  const { name, image_url, tags, description, link } = data;

  const renderProjectImage = (image_url, link) => {
    return (
      <div className="flex justify-center items-center overflow-hidden">
        <Image
          src={image_url}
          alt={name}
          width={400}
          height={400}
          quality={100}
          className={`object-contain w-full h-auto ${link ? "hover:scale-105 transition-transform duration-300" : ""
            }`}
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {renderProjectImage(image_url, link)}
        </Link>
      ) : (
        renderProjectImage(image_url, link)
      )}

      <div className="flex flex-col gap-2">
        {link ? (
          <Link href={link} target ="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-semibold hover:underline">{name}</h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold">{name}</h3>
        )}

        {tags?.data?.length > 0 && (
          <div className="flex flex-col gap-2">
            <p className="m-0">Tools: </p>
            <div className="flex flex-wrap items-center gap-1 text-sm">
              {tags.data
                .sort((a, b) => a > b)
                .map((tag, index) => (
                  <p className="m-0" key={index}>
                    {`${tag}${index !== tags.data.length - 1 ? "," : " "}`}
                  </p>
                ))}
            </div>
          </div>
        )}
        <p className="text-sm m-0">{description}</p>
      </div>
    </div>
  );
};
