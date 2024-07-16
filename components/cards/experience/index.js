import { handleGetTime } from "utils";
import Link from "next/link";

export const ExperienceCard = ({ data }) => {
  const { title, description, company, time_data, company_url, present } = data;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <Link
          href={company_url}
          className="text-blue-500 underline hover:text-blue-700"
        >
          {company}
        </Link>
        <p className="text-gray-500">{handleGetTime(time_data, present)}</p>
      </div>
      <div className="text-sm">
        <p>{description}</p>
      </div>
    </div>
  );
};
