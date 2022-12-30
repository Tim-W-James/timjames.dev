import Button from "@components/Button";
import MultiSelection, {
  Option,
  SingleSelection,
} from "@components/MultiSelection";
import Timeline, { TimelineItemData } from "@components/Timeline";
import technologies from "@constants/technologies";
import timelineData, { categories } from "@constants/timelineData";
import cn from "@styles/cssUtils";
import { BsGithub } from "react-icons/bs";

const technologyOptions: readonly Option[] = Object.keys(technologies)
  .map((technology) => {
    const count = timelineData.filter((item) =>
      item.technologies?.includes(technology as keyof typeof technologies)
    ).length;
    return {
      value: technology,
      count,
      label: `${technology} (${count})`,
    };
  })
  .sort((a, b) => b.count - a.count);

const categoryOptions: readonly Option[] = Object.keys(categories)
  .map((category) => {
    const count = timelineData.filter(
      (item) => item.category === category
    ).length;
    return {
      value: category,
      count,
      label: `${category} (${count})`,
    };
  })
  .sort((a, b) => b.count - a.count);

const sorts = [
  "Featured",
  "Newest",
  "Duration",
  "Number of Technologies",
  "Category",
] as const;

type SortOption = {
  value: typeof sorts[number];
  label: typeof sorts[number];
};

const sortOptions: readonly SortOption[] = sorts.map((sort) => ({
  value: sort,
  label: sort,
}));

const sortByDuration = (a: TimelineItemData, b: TimelineItemData) =>
  b.endDate.getTime() -
  b.startDate.getTime() -
  (a.endDate.getTime() - a.startDate.getTime());

const sortByCategoryAlphabetical = (a: TimelineItemData, b: TimelineItemData) =>
  a.category.toLowerCase().localeCompare(b.category.toLowerCase());

const sortByTechnologiesCount = (a: TimelineItemData, b: TimelineItemData) =>
  a.technologies && !b.technologies
    ? 1
    : b.technologies && !a.technologies
    ? -1
    : a.technologies && b.technologies
    ? b.technologies.length - a.technologies.length
    : 0;

const sortByFeatured = (a: TimelineItemData, b: TimelineItemData) =>
  a.isFeatured && !b.isFeatured ? -1 : b.isFeatured && !a.isFeatured ? 1 : 0;

const sortFuncFromOption = (
  sort: typeof sorts[number]
): ((a: TimelineItemData, b: TimelineItemData) => number) => {
  switch (sort) {
    case "Duration":
      return sortByDuration;

    case "Category":
      return sortByCategoryAlphabetical;

    case "Number of Technologies":
      return sortByTechnologiesCount;

    case "Featured":
      return sortByFeatured;

    default:
      return () => 0;
  }
};

const Projects: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    readonly Option[]
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<
    readonly Option[]
  >([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[0]!);

  return (
    <div>
      <div
        className={cn(
          "flex mx-auto items-center place-content-center px-8",
          "flex-col"
        )}
      >
        <h1 className={cn("text-light-accent font-bold")} id="projects">
          Projects
          <hr className={cn("radial-border")} />
        </h1>
      </div>
      <div
        className={cn(
          "flex mx-auto items-center place-content-center mb-4",
          "flex-col"
        )}
      >
        <div className={cn("flex gap-4 w-full", "flex-wrap")}>
          <div className={cn("z-30 grow min-w-fit")}>
            <SingleSelection
              options={sortOptions}
              selectedOption={selectedSort}
              setSelectedOption={setSelectedSort}
            />
          </div>
          <div className={cn("z-20 grow")}>
            <MultiSelection
              options={categoryOptions}
              placeholder="Filter by category..."
              selectedOptions={selectedCategories}
              setSelectedOptions={setSelectedCategories}
            />
          </div>
          <div className={cn("z-10 grow")}>
            <MultiSelection
              options={technologyOptions}
              placeholder="Filter by technology..."
              selectedOptions={selectedTechnologies}
              setSelectedOptions={setSelectedTechnologies}
            />
          </div>
        </div>
      </div>
      <div className={cn("mb-8")}>
        <Timeline
          data={timelineData}
          filterFunc={(item) => {
            const selectedTechnology = selectedTechnologies.map(
              (technology) => technology.value
            );
            const isTechnologySelected =
              selectedTechnology.length === 0 ||
              item.technologies?.filter((technology) =>
                selectedTechnology.includes(technology)
              )?.length !== 0;

            const selectedCategory = selectedCategories.map(
              (technology) => technology.value
            );
            const isCategorySelected =
              selectedCategory.length === 0 ||
              selectedCategory.includes(item.category);

            return isTechnologySelected && isCategorySelected;
          }}
          sortFunc={sortFuncFromOption(selectedSort.value)}
        />

        <div className={cn("flex justify-center")}>
          <Button
            icon={<BsGithub />}
            isLight
            label={"GitHub"}
            linkIsRoute
            to="/projects"
            tooltip="Find more projects on GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
