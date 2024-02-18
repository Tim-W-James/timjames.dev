import Button from "@components/buttons/Button";
import MultiSelection, {
  Option,
  SingleSelection,
} from "@components/input/MultiSelection";
import SearchField from "@components/input/SearchField";
import BlogCard from "@features/blog/components/BlogCard";
import BlogCardLoading from "@features/blog/components/BlogCardLoading";
import { devdottoArticlesMeta } from "@features/blog/services/devdottoArticle";
import { DevdottoArticleMeta } from "@features/blog/types/devdottoArticle";
import sortFuncFromOption, {
  sortByPopularity,
  SortOption,
  sortOptions,
} from "@features/blog/utils/sortFuncs";
import useLocalStorage from "@hooks/useLocalStorage";
import useMediaQuery from "@hooks/useMediaQuery";
import { useQueryParams } from "@hooks/useQueryParams";
import cn from "@styles/cssUtils";
import { useQuery } from "@tanstack/react-query";
import { decodeArrayAsCsv, encodeArrayAsCsv } from "@utils/encodeQueryParams";
import FadeIn from "react-fade-in";
import { RiRefreshFill } from "react-icons/ri";
import { SiDevdotto, SiMedium } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const searchFilter = (searchText: string, item: DevdottoArticleMeta) => {
  const search = searchText.toLowerCase();
  return (
    search.length === 0 ||
    item.title.toLowerCase().includes(search) ||
    item.description.toLowerCase().includes(search) ||
    (typeof item.tag_list !== "string" &&
      item.tag_list.some((tag) => tag.toLowerCase().includes(search)))
  );
};

type BlogOptions = {
  tags: readonly Option[];
  sort: SortOption;
  searchText: string;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const defaultSort = sortOptions[0]!;

const articlesToDisplay = 30;

const Blog = () => {
  const [selectedTags, setSelectedTags] = useState<readonly Option[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(defaultSort);
  const [tagOptions, setTagOptions] = useState<readonly Option[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const { status, data: articles } = useQuery({
    queryKey: ["devdotto", "articlesMeta", articlesToDisplay, 1],
    queryFn: devdottoArticlesMeta(articlesToDisplay),
  });

  useEffect(() => {
    setTagOptions(
      !articles
        ? []
        : [...new Set(articles.flatMap((articleMeta) => articleMeta.tag_list))]
            .map((tag) => {
              const count = articles.filter((articleMeta) =>
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
    );
  }, [articles]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }, []);

  const [isResetButtonAnimated, setIsResetButtonAnimated] = useState(false);

  const resetOptions = useCallback(() => {
    setSelectedTags([]);
    setSelectedSort(defaultSort);
    setSearchText("");
    setIsResetButtonAnimated(true);
    setTimeout(() => {
      setIsResetButtonAnimated(false);
    }, 500);
  }, []);

  const shouldShrinkButtons = useMediaQuery("(max-width: 500px)");

  const navigate = useNavigate();

  const [localStorageProjectOptions, setLocalStorageProjectOptions] =
    useLocalStorage<BlogOptions>("blogOptions", {
      tags: [],
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
      setSelectedTags([]);
      decodeArrayAsCsv(queryParams.get("technologies") ?? "").forEach(
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
        ) ?? defaultSort
      );
      setSearchText(queryParams.get("searchText") ?? "");
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
    navigate(
      {
        hash: window.location.hash,
        search: `?${new URLSearchParams(
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
        ).toString()}`,
      },
      {
        replace: true,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, selectedSort, selectedTags]);

  const filteredArticles = useMemo(
    () =>
      status === "pending" || status === "error" || !articles
        ? []
        : articles
            .sort(sortByPopularity)
            .sort(sortFuncFromOption(selectedSort.value))
            .filter((articleMeta) => {
              const tags = selectedTags.map((tag) => tag.value);
              return (
                searchFilter(searchText, articleMeta) &&
                (selectedTags.length === 0 ||
                  (typeof articleMeta.tag_list !== "string" &&
                    articleMeta.tag_list.filter((articleTag) =>
                      tags.includes(articleTag)
                    ).length !== 0))
              );
            })
            .map((articleMeta, index) => (
              <BlogCard article={articleMeta} key={index} />
            )),
    [articles, searchText, selectedSort.value, selectedTags, status]
  );

  return (
    <div>
      <FadeIn transitionDuration={200}>
        <div
          className={cn(
            "mx-auto mb-8 flex max-w-2xl items-center justify-center gap-4",
            "flex-row",
            "flex-wrap"
          )}
        >
          <Button
            icon={<SiDevdotto />}
            isLabelHidden={shouldShrinkButtons}
            isLight
            label="DEV.to"
            to="https://dev.to/timwjames"
            tooltip="Find my personal blog @timwjames"
          />
          <Button
            icon={<SiMedium />}
            isLabelHidden={shouldShrinkButtons}
            isLight
            label="Medium"
            to="https://medium.com/@twjames"
            tooltip="Find my professional @twjames"
          />
        </div>
        <section
          aria-label="Search Controls"
          className={cn(
            "mx-auto mb-4 flex place-content-center items-center",
            "flex-col"
          )}
        >
          <div className={cn("flex w-full gap-4")}>
            <SearchField handleChange={handleChange} searchText={searchText} />
            <Button
              childProps={{ onClick: resetOptions, type: "reset" }}
              className={
                shouldShrinkButtons
                  ? cn("!-mt-1 !px-2 !py-2 !text-3xl")
                  : cn("!-mt-1", "!h-[50px]", "!py-0")
              }
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
              isLabelHidden={shouldShrinkButtons}
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
                options={tagOptions}
                placeholder="Filter by tags..."
                selectedOptions={selectedTags}
                setSelectedOptions={setSelectedTags}
              />
            </div>
          </div>
        </section>
        <section
          aria-label="Blogs"
          className={cn("flex justify-center gap-4 p-0", "flex-wrap")}
          data-chromatic="ignore"
        >
          {status === "pending" ? (
            [...Array(6).keys()].map((key) => <BlogCardLoading key={key} />)
          ) : status === "error" || !articles ? (
            <div className={cn("mb-8 text-center text-xl ")}>
              <span className={cn("text-danger")}>Something went wrong</span> -
              Try again later
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className={cn("mb-8 text-center text-xl ")}>
              <span className={cn("text-danger")}>No articles found</span> - Try
              a different filter
            </div>
          ) : (
            filteredArticles
          )}
        </section>
      </FadeIn>
    </div>
  );
};

export default Blog;
