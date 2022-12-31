import Button from "@components/Button";
import MultiSelection, {
  Option,
  SingleSelection,
} from "@components/MultiSelection";
import Card from "@components/blog/Card";
import LoadingCard from "@components/blog/LoadingCard";
import useDevdottoArticlesMeta from "@hooks/useDevdottoArticlesMeta";
import cn from "@styles/cssUtils";
import { DevdottoArticleMeta } from "@utils/devdottoArticle";
import { SiDevdotto, SiMedium } from "react-icons/si";

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

const Contact = () => {
  const recentArticles = useDevdottoArticlesMeta(100);
  const [selectedTags, setSelectedTags] = useState<readonly Option[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[0]!);
  const [tagOptions, setTagOptions] = useState<readonly Option[]>([]);

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
          {recentArticles.loading
            ? [...Array(6).keys()].map((key) => <LoadingCard key={key} />)
            : recentArticles.articles
                .sort(sortByPopularity)
                .sort(sortFuncFromOption(selectedSort.value))
                .filter((articleMeta) => {
                  const tags = selectedTags.map((tag) => tag.value);
                  return (
                    selectedTags.length === 0 ||
                    articleMeta.tag_list.filter((articleTag) =>
                      tags.includes(articleTag)
                    ).length !== 0
                  );
                })
                .map((articleMeta, index) => (
                  <Card article={articleMeta} key={index} />
                ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
