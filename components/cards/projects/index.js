import Image from "next/image";

export const ProjectCard = ({ data }) => {
  const { name, image_url, tags, description } = data;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center overflow-hidden">
        <Image
          src={image_url}
          alt={name}
          width={400}
          height={400}
          quality={100}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="m-0">{name}</h3>

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
