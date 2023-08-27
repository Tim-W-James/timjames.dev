import categories from "../data/categories";
import TimelineItemData from "../types/TimelineData";

type ItemCategoryProps = {
  data: TimelineItemData;
  className: string;
};

const ItemCategory: React.FC<ItemCategoryProps> = ({
  data: itemData,
  className,
}) =>
  categories[itemData.category].link ? (
    <a
      className={className}
      href={categories[itemData.category].link}
      rel="noreferrer"
      target="_blank"
      title={itemData.category}
    >
      {itemData.category}
    </a>
  ) : (
    <span className={className}>{itemData.category}</span>
  );

export default ItemCategory;
