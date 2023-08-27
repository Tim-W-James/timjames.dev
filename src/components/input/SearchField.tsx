import cn from "@styles/cssUtils";

type SearchFieldProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
};

/**
 * Controlled search box
 */
const SearchField: React.FC<SearchFieldProps> = ({
  handleChange,
  searchText,
}) => (
  <input
    aria-label="Search..."
    className={cn(
      "mb-4 w-full rounded px-[9px] py-[5px] text-dark-shades",
      "border-2",
      "!ring-0",
      "border-dark-accent",
      "bg-light-shades",
      "hover:border-main-brand",
      "focus:border-light-accent"
    )}
    onChange={handleChange}
    placeholder="Search..."
    type="search"
    value={searchText}
  />
);

export default SearchField;
