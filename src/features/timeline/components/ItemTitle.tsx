/* eslint-disable @typescript-eslint/restrict-template-expressions */
import cn from "@styles/cssUtils";
import { HashLink } from "react-router-hash-link";

import TimelineItemData from "../types/TimelineData";
import ItemCategory from "./ItemCategory";

const ItemTitle: React.FC<{
  isOddIndex: boolean;
  data: TimelineItemData;
}> = ({ isOddIndex, data: itemData }) => {
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
          "text-main-brand mb-0 uppercase leading-snug",
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
        className={cn("text-main-brand text-right")}
        data={itemData}
      />
    </>
  ) : (
    <>
      <ItemCategory
        className={cn("text-main-brand text-left")}
        data={itemData}
      />
      <h3
        className={cn(
          "text-main-brand mb-0 uppercase leading-snug",
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
