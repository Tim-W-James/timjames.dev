/* eslint-disable @typescript-eslint/restrict-template-expressions */
import cn from "@styles/cssUtils";
import { HashLink } from "react-router-hash-link";
import TimelineItemData from "../types/TimelineData";
import ItemCategory from "./ItemCategory";

const ItemTitle: React.FC<{
  isOddIndex: boolean;
  data: TimelineItemData;
}> = ({ isOddIndex, data: itemData }) =>
  isOddIndex ? (
    <>
      <h3
        className={cn(
          "text-main-brand uppercase mb-0 leading-snug",
          "flex-grow",
          "basis-min-content hyphens-none"
        )}
      >
        <HashLink
          className={cn("hash-link-right")}
          onClick={() =>
            navigator.clipboard.writeText(
              `${location.href.split("#")[0] || ""}#${itemData.title}`
            )
          }
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
          "text-main-brand uppercase mb-0 leading-snug",
          "flex-grow",
          "hyphens-none"
        )}
      >
        <HashLink
          className={cn("hash-link-left")}
          onClick={() =>
            navigator.clipboard.writeText(
              `${location.href.split("#")[0] || ""}#${itemData.title}`
            )
          }
          to={`${location.search}#${itemData.title}`}
        >
          {" "}
          {itemData.title}
        </HashLink>
      </h3>
    </>
  );

export default ItemTitle;
