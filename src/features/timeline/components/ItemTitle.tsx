import cn from "@styles/cssUtils";
import { HashLink } from "react-router-hash-link";

import TimelineItemData from "../types/TimelineData";
import ItemCategory from "./ItemCategory";

type ItemTitleProps = {
  isOddIndex: boolean;
  data: TimelineItemData;
};

const ItemTitle: React.FC<ItemTitleProps> = ({
  isOddIndex,
  data: itemData,
}) => {
  const copyFragment = useCallback(
    () =>
      navigator.clipboard.writeText(
        `${location.href.split("#")[0] ?? ""}#${itemData.title}`
      ),
    [itemData.title]
  );

  return isOddIndex ? (
    <>
      <h3
        className={cn(
          "mb-0 uppercase leading-snug text-main-brand",
          "flex-grow",
          "basis-min-content hyphens-none"
        )}
      >
        <HashLink
          className={cn("hash-link-right")}
          onClick={copyFragment}
          to={`${location.search}#${itemData.title}`}
        >
          {itemData.title}{" "}
        </HashLink>
      </h3>
      <ItemCategory
        className={cn("text-right text-main-brand")}
        data={itemData}
      />
    </>
  ) : (
    <>
      <ItemCategory
        className={cn("text-left text-main-brand")}
        data={itemData}
      />
      <h3
        className={cn(
          "mb-0 uppercase leading-snug text-main-brand",
          "flex-grow",
          "hyphens-none"
        )}
      >
        <HashLink
          className={cn("hash-link-left")}
          onClick={copyFragment}
          to={`${location.search}#${itemData.title}`}
        >
          {" "}
          {itemData.title}
        </HashLink>
      </h3>
    </>
  );
};

export default ItemTitle;
