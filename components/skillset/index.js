import Icon from "components/icon";

export const SkillSet = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
      {data
        .sort((a, b) => b.name < a.name)
        .map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              <Icon nameIcon={item.icon} className="w-4 h-4" />
            </a>
            <p className="text-xs m-0">{item.name}</p>
          </div>
        ))}
    </div>
  );
};
