import cn from "@styles/cssUtils";
import TimelineItemData from "../types/TimelineData";

const ItemThumbnail: React.FC<{
  data: TimelineItemData;
  isOddIndex: boolean;
}> = ({ data: itemData, isOddIndex }) =>
  itemData.thumbnailSrc ? (
    <img
      alt={itemData.title}
      className={
        "2xl:w-1/3 2xl:basis-content " +
        (isOddIndex
          ? "2xl:order-1 "
          : "" + cn("max-2xl:w-auto max-2xl:ml-auto max-2xl:mb-4"))
      }
      src={itemData.thumbnailSrc}
    />
  ) : null;

export default ItemThumbnail;
