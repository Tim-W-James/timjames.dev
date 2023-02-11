import technologies from "@data/technologies";
import categories from "../data/categories";

type TimelineItemData = {
  startDate: Date;
  endDate: Date;
  title: string;
  body: JSX.Element;
  thumbnailSrc?: string;
  category: keyof typeof categories;
  technologies?: (keyof typeof technologies)[];
  isFeatured?: boolean;
  links?: {
    text: string;
    url: string;
    icon?: JSX.Element;
  }[];
  searchOnly?: boolean;
};

export default TimelineItemData;
