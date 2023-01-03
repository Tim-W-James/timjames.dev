import Button from "@components/Button";
import MultiSelection, {
  Option,
  SingleSelection,
} from "@components/input/MultiSelection";
import SearchField from "@components/input/SearchField";
import Timeline from "@components/timeline/Timeline";
import technologies from "@constants/technologies";
import timelineData, {
  TimelineItemData,
  categories,
} from "@constants/timelineData";
import cn from "@styles/cssUtils";
import {
  sortByCategoryAlphabetical,
  sortByDuration,
  sortByFeatured,
  sortByTechnologiesCount,
} from "@utils/timelineSortFuncs";
import Children from "react-children-utilities";
import { BsFillArrowUpCircleFill, BsGithub } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";

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
  .filter((option) => option.count > 0)
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
  .filter((option) => option.count > 0)
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

const searchFilter = (searchText: string, item: TimelineItemData) => {
  const search = searchText.toLowerCase();
  return (
    search.length === 0 ||
    item.title.toLowerCase().includes(search) ||
    Children.onlyText(item.body).toLowerCase().includes(search) ||
    item.technologies?.some((technology) =>
      technology.toLowerCase().includes(search)
    ) ||
    item.category.toLowerCase().includes(search)
  );
};

const Projects: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    readonly Option[]
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<
    readonly Option[]
  >([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[0]!);
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const [isResetButtonAnimated, setIsResetButtonAnimated] = useState(false);

  const resetOptions = () => {
    setSelectedTechnologies([]);
    setSelectedCategories([]);
    setSelectedSort(sortOptions[0]!);
    setSearchText("");
    setIsResetButtonAnimated(true);
    setTimeout(() => {
      setIsResetButtonAnimated(false);
    }, 500);
  };

  return (
    <div>
      <div className={cn("flex justify-center mb-8")}>
        <Button
          icon={<BsGithub />}
          isLight
          label={"GitHub"}
          to="https://github.com/Tim-W-James"
          tooltip="Find more projects on GitHub"
        />
      </div>
      <div
        className={cn(
          "flex mx-auto items-center place-content-center mb-4 max-md:mb-8",
          "flex-col"
        )}
      >
        <div className={cn("w-full flex gap-4")}>
          <SearchField handleChange={handleChange} searchText={searchText} />
          <Button
            className={cn("h-11", "flex")}
            icon={
              isResetButtonAnimated ? (
                <span
                  className={cn(
                    "inline-block",
                    "leading-0",
                    "motion-safe:animate-spin"
                  )}
                >
                  <RiRefreshFill />
                </span>
              ) : (
                <RiRefreshFill />
              )
            }
            iconRight
            isLight
            label={"Reset"}
            mode="button"
            onClick={resetOptions}
            tooltip="Reset search and filters options"
          />
        </div>
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
      <section className={cn("mb-8")}>
        <Timeline
          data={timelineData}
          filterFunc={(item) => {
            const selectedTechnology = selectedTechnologies.map(
              (technology) => technology.value
            );
            const isTechnologySelected =
              selectedTechnology.length === 0 ||
              (item.technologies &&
                item.technologies.filter((technology) =>
                  selectedTechnology.includes(technology)
                ).length > 0);

            const selectedCategory = selectedCategories.map(
              (technology) => technology.value
            );
            const isCategorySelected =
              selectedCategory.length === 0 ||
              selectedCategory.includes(item.category);

            return !!(
              isTechnologySelected &&
              isCategorySelected &&
              searchFilter(searchText, item)
            );
          }}
          sortFunc={sortFuncFromOption(selectedSort.value)}
        />
        <div className={cn("flex justify-center")}>
          <Button
            icon={<BsFillArrowUpCircleFill />}
            isLight
            label={"Back to top"}
            mode="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            tooltip="Back to top"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
