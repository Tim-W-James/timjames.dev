import Button from "@components/Button";
import Card from "@components/blog/Card";
import LoadingCard from "@components/blog/LoadingCard";
import MultiSelection, {
  Option,
  SingleSelection,
} from "@components/input/MultiSelection";
import SearchField from "@components/input/SearchField";
import useDevdottoArticlesMeta from "@hooks/useDevdottoArticlesMeta";
import useLocalStorage from "@hooks/useLocalStorage";
import { useQueryParams } from "@hooks/useQueryParams";
import cn from "@styles/cssUtils";
import { DevdottoArticleMeta } from "@utils/devdottoArticle";
import { decodeArrayAsCsv, encodeArrayAsCsv } from "@utils/encodeQueryParams";
import { RiRefreshFill } from "react-icons/ri";
import { SiDevdotto, SiMedium } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const sorts = ["Popularity", "Latest", "Quick Reads"] as const;

type SortOption = {
  value: typeof sorts[number];
  label: typeof sorts[number];
};

const sortOptions: readonly SortOption[] = sorts.map((sort) => ({
  value: sort,
  label: sort,
}));

const sortByPopularity = (a: DevdottoArticleMeta, b: DevdottoArticleMeta) =>
  b.public_reactions_count - a.public_reactions_count;

const sortByQuickReads = (a: DevdottoArticleMeta, b: DevdottoArticleMeta) =>
  a.reading_time_minutes - b.reading_time_minutes;

const sortByLatest = (a: DevdottoArticleMeta, b: DevdottoArticleMeta) =>
  new Date(b.published_timestamp).getTime() -
  new Date(a.published_timestamp).getTime();

const sortFuncFromOption = (
  sort: typeof sorts[number]
): ((a: DevdottoArticleMeta, b: DevdottoArticleMeta) => number) => {
  switch (sort) {
    case "Latest":
      return sortByLatest;

    case "Quick Reads":
      return sortByQuickReads;

    case "Popularity":
      return sortByPopularity;

    default:
      return () => 0;
  }
};

const searchFilter = (searchText: string, item: DevdottoArticleMeta) => {
  const search = searchText.toLowerCase();
  return (
    search.length === 0 ||
    item.title.toLowerCase().includes(search) ||
    item.description.toLowerCase().includes(search) ||
    item.tag_list.some((tag) => tag.toLowerCase().includes(search))
  );
};

type BlogOptions = {
  tags: readonly Option[];
  sort: SortOption;
  searchText: string;
};

const Blog = () => {
  const recentArticles = useDevdottoArticlesMeta(100);
  const [selectedTags, setSelectedTags] = useState<readonly Option[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[0]!);
  const [tagOptions, setTagOptions] = useState<readonly Option[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    setTagOptions(
      !recentArticles.loading
        ? [
            ...new Set(
              recentArticles.articles.flatMap(
                (articleMeta) => articleMeta.tag_list
              )
            ),
          ]
            .map((tag) => {
              const count = recentArticles.articles.filter((articleMeta) =>
                articleMeta.tag_list.includes(tag)
              ).length;
              return {
                value: tag,
                count,
                label: `${tag} (${count})`,
              };
            })
            .filter((option) => option.count > 0)
            .sort((a, b) => b.count - a.count)
        : []
    );
  }, [recentArticles.articles, recentArticles.loading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const [isResetButtonAnimated, setIsResetButtonAnimated] = useState(false);

  const resetOptions = () => {
    setSelectedTags([]);
    setSelectedSort(sortOptions[0]!);
    setSearchText("");
    setIsResetButtonAnimated(true);
    setTimeout(() => {
      setIsResetButtonAnimated(false);
    }, 500);
  };

  const navigate = useNavigate();

  const [localStorageProjectOptions, setLocalStorageProjectOptions] =
    useLocalStorage<BlogOptions>("blogOptions", {
      tags: [],
      sort: sortOptions[0]!,
      searchText: "",
    });

  const queryParams = useQueryParams();

  useEffect(() => {
    if (queryParams.toString()) {
      // Query params take precedence over local storage on initial load
      if (queryParams.get("reset")) {
        resetOptions();
        navigate({
          hash: window.location.hash,
          search: "",
        });
        return () => {};
      }
      setSelectedTags([]);
      decodeArrayAsCsv(queryParams.get("technologies") || "").forEach(
        (value) => {
          const option = selectedTags.find(
            (o) => o.value.toLowerCase() === value.toLowerCase()
          );
          if (option) {
            setSelectedTags((prev) => [...prev, option]);
          }
        }
      );
      setSelectedSort(
        sortOptions.find(
          (o) =>
            o.value.toLowerCase() === queryParams.get("sort")?.toLowerCase()
        ) || sortOptions[0]!
      );
      setSearchText(queryParams.get("searchText") || "");
    } else {
      // Populate the options from local storage
      setSelectedTags(localStorageProjectOptions.tags);
      setSelectedSort(localStorageProjectOptions.sort);
      setSearchText(localStorageProjectOptions.searchText);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Update local storage when options change
    setLocalStorageProjectOptions({
      tags: selectedTags,
      sort: selectedSort,
      searchText,
    });
    // Update query params
    navigate({
      hash: window.location.hash,
      search:
        "?" +
        new URLSearchParams(
          // Strip any undefined values
          JSON.parse(
            JSON.stringify({
              tags:
                encodeArrayAsCsv(selectedTags.map((t) => t.value)) || undefined,
              sort:
                selectedSort.value === sortOptions[0]?.value
                  ? undefined
                  : selectedSort.value,
              searchText: searchText || undefined,
            })
          )
        ).toString(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, selectedSort, selectedTags]);

  const filteredArticles = recentArticles.loading
    ? []
    : recentArticles.articles
        .sort(sortByPopularity)
        .sort(sortFuncFromOption(selectedSort.value))
        .filter((articleMeta) => {
          const tags = selectedTags.map((tag) => tag.value);
          return (
            searchFilter(searchText, articleMeta) &&
            (selectedTags.length === 0 ||
              articleMeta.tag_list.filter((articleTag) =>
                tags.includes(articleTag)
              ).length !== 0)
          );
        })
        .map((articleMeta, index) => (
          <Card article={articleMeta} key={index} />
        ));

  return (
    <div>
      <section>
        <div
          className={cn(
            "flex gap-4 justify-center items-center max-w-2xl mx-auto mb-8",
            "flex-row",
            "flex-wrap"
          )}
        >
          <Button
            icon={<SiDevdotto />}
            isLight
            label={"DEV.to"}
            to="https://dev.to/timwjames"
            tooltip="Find my personal blog @timwjames"
          />
          <Button
            icon={<SiMedium />}
            isLight
            label={"Medium"}
            to="https://medium.com/@twjames"
            tooltip="Find my professional @twjames"
          />
        </div>
        <div
          className={cn(
            "flex mx-auto items-center place-content-center mb-4",
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
                options={tagOptions}
                placeholder="Filter by tags..."
                selectedOptions={selectedTags}
                setSelectedOptions={setSelectedTags}
              />
            </div>
          </div>
        </div>
        <div className={cn("flex gap-4 p-0 justify-center", "flex-wrap")}>
          {recentArticles.loading ? (
            [...Array(6).keys()].map((key) => <LoadingCard key={key} />)
          ) : filteredArticles.length === 0 ? (
            <div className={cn("text-center mb-8 text-xl ")}>
              <span className={cn("text-danger")}>No Articles Found</span> - Try
              a different filter
            </div>
          ) : (
            filteredArticles
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
