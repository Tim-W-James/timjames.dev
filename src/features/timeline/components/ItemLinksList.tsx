import Divider from "@components/layout/Divider";
import cn from "@styles/cssUtils";

import TimelineItemData from "../types/TimelineData";

const ItemLinksList: React.FC<{
  data: TimelineItemData;
  isOddIndex: boolean;
}> = ({ data: itemData, isOddIndex }) =>
  itemData.links ? (
    <>
      <Divider isReversed={!isOddIndex} label="Links" />

      <section aria-label="Links">
        {itemData.links.map((link, index) => (
          <span key={index}>
            {index !== itemData.links?.length && index !== 0 ? " - " : ""}
            <a
              className={cn("link")}
              href={link.url}
              rel="noreferrer"
              target="_blank"
              title={link.text}
            >
              {link.icon ? <>{link.icon} </> : ""}
              {link.text}
            </a>
          </span>
        ))}
      </section>
    </>
  ) : null;

export default ItemLinksList;
