import cn from "@styles/cssUtils";

import TimelineItemData from "../types/TimelineData";

type ItemThumbnailProps = {
  data: TimelineItemData;
  isOddIndex: boolean;
};

const ItemThumbnail: React.FC<ItemThumbnailProps> = ({
  data: itemData,
  isOddIndex,
}) =>
  itemData.thumbnailSrc ? (
    <img
      alt={itemData.title}
      className={cn(
        "xl:w-1/3",
        "xl:basis-content",
        isOddIndex ? "xl:order-1" : "max-xl:mb-4 max-xl:ml-auto max-xl:w-auto"
      )}
      src={itemData.thumbnailSrc}
    />
  ) : null;

export default ItemThumbnail;
