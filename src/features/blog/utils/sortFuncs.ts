import { DevdottoArticleMeta } from "../types/devdottoArticle";

const sorts = ["Popularity", "Latest", "Quick Reads"] as const;

export type SortOption = {
  value: (typeof sorts)[number];
  label: (typeof sorts)[number];
};

export const sortOptions: readonly SortOption[] = sorts.map((sort) => ({
  value: sort,
  label: sort,
}));

export const sortByPopularity = (
  a: DevdottoArticleMeta,
  b: DevdottoArticleMeta
) => b.public_reactions_count - a.public_reactions_count;

export const sortByQuickReads = (
  a: DevdottoArticleMeta,
  b: DevdottoArticleMeta
) => a.reading_time_minutes - b.reading_time_minutes;

export const sortByLatest = (a: DevdottoArticleMeta, b: DevdottoArticleMeta) =>
  new Date(b.published_timestamp).getTime() -
  new Date(a.published_timestamp).getTime();

export const sortFuncFromOption = (
  sort: (typeof sorts)[number]
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

export default sortFuncFromOption;
