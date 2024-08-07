import { useState } from "react";
import Link from "next/link";
import { handleGetTime } from "utils";

const TimeLineItem = ({ experience }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <li className="mb-10 ms-4" key={experience.company_url}>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {handleGetTime(experience.time_data, experience.present)}
      </time>
      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
      <Link
        href={experience.company_url}
        className="text-blue-500 underline hover:text-blue-700 w-fit text-sm"
      >
        {experience.company}
      </Link>
      {experience.description.length > 255 && !showMore ? (
        <p className="mb-4 text-base font-normal text-gray-200 text-justify">
          {experience.description.slice(0, 255)}...
          <button
            className="text-blue-500 underline hover:text-blue-700"
            onClick={() => setShowMore(!showMore)}
          >
            Read more
          </button>
        </p>
      ) : (
        <p className="mb-4 text-base font-normal text-gray-200 text-justify">
          {experience.description}
          <button
            className="text-blue-500 underline hover:text-blue-700"
            onClick={() => setShowMore(!showMore)}
          >
            Show less
          </button>
        </p>
      )}
    </li>
  );
};

export const Timeline = ({ experience }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experience
          .sort(
            ({ time_data: a }, { time_data: b }) => b.start.year - a.start.year
          )
          .sort((a, b) => b.present - a.present)
          .slice(0, showMore ? experience.length : 4)
          .map((experience) => (
            <TimeLineItem experience={experience} />
          ))}
      </ol>
      <div className="flex justify-center">
        <button
          className="btn btn-secondary w-fit"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
};
