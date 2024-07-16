import { handleGetTime } from "utils";
import Link from "next/link";

export const EducationCard = ({ data }) => {
  const { title, description, time_data, item_url, present } = data;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="m-0">{title}</h3>
        <p className="text-xs opacity-50 m-0">
          {handleGetTime(time_data, present)}
        </p>
        {item_url && (
          <Link
            href={item_url}
            passHref={true}
            className="text-xs opacity-50 hover:cursor-pointer hover:underline w-fit"
          >
            View
          </Link>
        )}
      </div>
      <div className="text-xs">
        <p className="m-0">{description}</p>
      </div>
    </div>
  );
};
