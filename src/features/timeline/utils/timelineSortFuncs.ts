import { TimelineItemData } from "../data/timelineData";

export const sortByDuration = (a: TimelineItemData, b: TimelineItemData) =>
  b.endDate.getTime() -
  b.startDate.getTime() -
  (a.endDate.getTime() - a.startDate.getTime());

export const sortByCategoryAlphabetical = (
  a: TimelineItemData,
  b: TimelineItemData
) => a.category.toLowerCase().localeCompare(b.category.toLowerCase());

export const sortByTechnologiesCount = (
  a: TimelineItemData,
  b: TimelineItemData
) =>
  a.technologies && !b.technologies
    ? -1
    : b.technologies && !a.technologies
    ? 1
    : a.technologies && b.technologies
    ? b.technologies.length - a.technologies.length
    : 0;

export const sortByFeatured = (a: TimelineItemData, b: TimelineItemData) =>
  a.isFeatured && !b.isFeatured ? -1 : b.isFeatured && !a.isFeatured ? 1 : 0;
