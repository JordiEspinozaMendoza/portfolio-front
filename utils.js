export const handleGetTime = (time_data, present) => {
  const { start, end } = time_data;
  const { year: startYear, month: startMonth } = start;
  const { year: endYear, month: endMonth } = end;
  const language = "en";

  const startDate = `${new Date(startYear, startMonth).toLocaleString(
    language,
    { month: "long" }
  )} ${startYear}`;
  const endDate = `${new Date(endYear, endMonth).toLocaleString(language, {
    month: "long",
  })} ${endYear}`;

  if (present) {
    return `${startDate} - Present`;
  }

  return `${startDate} - ${endDate}`;
};
