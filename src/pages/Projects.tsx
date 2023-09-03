import Button from "@components/buttons/Button";
import MultiSelection, {
  Option,
  SingleSelection,
} from "@components/input/MultiSelection";
import SearchField from "@components/input/SearchField";
import technologies from "@data/technologies";
import Timeline from "@features/timeline/components/Timeline";
import categories from "@features/timeline/data/categories";
import timelineData from "@features/timeline/data/timelineData";
import TimelineItemData from "@features/timeline/types/TimelineData";
import {
  sortByCategoryAlphabetical,
  sortByDuration,
  sortByFeatured,
  sortByTechnologiesCount,
} from "@features/timeline/utils/timelineSortFuncs";
import useLocalStorage from "@hooks/useLocalStorage";
import { useQueryParams } from "@hooks/useQueryParams";
import cn from "@styles/cssUtils";
import { decodeArrayAsCsv, encodeArrayAsCsv } from "@utils/encodeQueryParams";
import Children from "react-children-utilities";
import FadeIn from "react-fade-in";
import { BsFillArrowUpCircleFill, BsGithub } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const technologyOptions: readonly Option[] = Object.keys(technologies)
  .map((technology) => {
    const count = timelineData.filter(
      (item) =>
        // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
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
  value: (typeof sorts)[number];
  label: (typeof sorts)[number];
};

const sortOptions: readonly SortOption[] = sorts.map((sort) => ({
  value: sort,
  label: sort,
}));

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const defaultSort = sortOptions[0]!;

const sortFuncFromOption = (
  sort: (typeof sorts)[number]
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
    (search.length === 0 && !item.searchOnly) ||
    (search.length > 0 &&
      ((item.title.toLowerCase().includes(search) ||
        Children.onlyText(item.body).toLowerCase().includes(search) ||
        item.technologies?.some((technology) =>
          technology.toLowerCase().includes(search)
        )) ??
        item.category.toLowerCase().includes(search)))
  );
};

type ProjectOptions = {
  technologies: readonly Option[];
  categories: readonly Option[];
  sort: SortOption;
  searchText: string;
};

const Projects: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    readonly Option[]
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<
    readonly Option[]
  >([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(defaultSort);
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }, []);

  const [isResetButtonAnimated, setIsResetButtonAnimated] = useState(false);

  const resetOptions = useCallback(() => {
    setSelectedTechnologies([]);
    setSelectedCategories([]);
    setSelectedSort(defaultSort);
    setSearchText("");
    setIsResetButtonAnimated(true);
    setTimeout(() => {
      setIsResetButtonAnimated(false);
    }, 500);
  }, []);

  const navigate = useNavigate();

  const [localStorageProjectOptions, setLocalStorageProjectOptions] =
    useLocalStorage<ProjectOptions>("projectOptions", {
      technologies: [],
      categories: [],
      sort: defaultSort,
      searchText: "",
    });

  const queryParams = useQueryParams();

  useEffect(() => {
    if (queryParams.toString()) {
      // Query params take precedence over local storage on initial load
      if (queryParams.get("reset")) {
        resetOptions();
        navigate(
          {
            hash: window.location.hash,
            search: "",
          },
          {
            replace: true,
          }
        );
        return () => {};
      }
      setSelectedTechnologies([]);
      decodeArrayAsCsv(queryParams.get("technologies") ?? "").forEach(
        (value) => {
          const option = technologyOptions.find(
            (o) => o.value.toLowerCase() === value.toLowerCase()
          );
          if (option) {
            setSelectedTechnologies((prev) => [...prev, option]);
          }
        }
      );
      setSelectedCategories([]);
      decodeArrayAsCsv(queryParams.get("categories") ?? "").forEach((value) => {
        const option = categoryOptions.find(
          (o) => o.value.toLowerCase() === value.toLowerCase()
        );
        if (option) {
          setSelectedCategories((prev) => [...prev, option]);
        }
      });
      setSelectedSort(
        sortOptions.find(
          (o) =>
            o.value.toLowerCase() === queryParams.get("sort")?.toLowerCase()
        ) ?? defaultSort
      );
      setSearchText(queryParams.get("searchText") ?? "");
    } else {
      // Populate the options from local storage
      setSelectedTechnologies(localStorageProjectOptions.technologies);
      setSelectedCategories(localStorageProjectOptions.categories);
      setSelectedSort(localStorageProjectOptions.sort);
      setSearchText(localStorageProjectOptions.searchText);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Update local storage when options change
    setLocalStorageProjectOptions({
      technologies: selectedTechnologies,
      categories: selectedCategories,
      sort: selectedSort,
      searchText,
    });
    // Update query params
    navigate(
      {
        hash: window.location.hash,
        search: `?${new URLSearchParams(
          // Strip any undefined values
          JSON.parse(
            JSON.stringify({
              technologies:
                encodeArrayAsCsv(selectedTechnologies.map((t) => t.value)) ||
                undefined,
              categories:
                encodeArrayAsCsv(selectedCategories.map((c) => c.value)) ||
                undefined,
              sort:
                selectedSort.value === sortOptions[0]?.value
                  ? undefined
                  : selectedSort.value,
              searchText: searchText || undefined,
            })
          )
        ).toString()}`,
      },
      {
        replace: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, selectedCategories, selectedSort, selectedTechnologies]);

  const filterFunc = useCallback(
    (item: TimelineItemData) => {
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

      return Boolean(
        isTechnologySelected &&
          isCategorySelected &&
          searchFilter(searchText, item)
      );
    },
    [searchText, selectedCategories, selectedTechnologies]
  );

  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    []
  );

  return (
    <div>
      <FadeIn transitionDuration={200}>
        <div className={cn("mb-8 flex justify-center")}>
          <Button
            icon={<BsGithub />}
            isLight
            label="GitHub"
            to="https://github.com/Tim-W-James"
            tooltip="Find more projects on GitHub"
          />
        </div>
        <section
          aria-label="Search Controls"
          className={cn(
            "mx-auto mb-4 flex place-content-center items-center max-md:mb-8",
            "flex-col"
          )}
        >
          <div className={cn("flex w-full gap-4")}>
            <SearchField handleChange={handleChange} searchText={searchText} />
            <Button
              childProps={{ onClick: resetOptions, type: "reset" }}
              className={cn("!-mt-1 !px-2 !py-2 !text-3xl")}
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
              isLabelHidden
              isLight
              label="Reset"
              mode="button"
              tooltip="Reset search and filter options"
            />
          </div>
          <div className={cn("flex w-full gap-4", "flex-wrap")}>
            <div className={cn("z-30 min-w-fit grow")}>
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
        </section>
        <section aria-label="Timeline" className={cn("mb-8")} id="timeline">
          <Timeline
            data={timelineData}
            filterFunc={filterFunc}
            sortFunc={sortFuncFromOption(selectedSort.value)}
          />
          <div className={cn("flex justify-center")}>
            <Button
              childProps={{ onClick: scrollToTop }}
              icon={<BsFillArrowUpCircleFill />}
              isLight
              label="Back to top"
              mode="button"
              tooltip="Back to top"
            />
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default Projects;
