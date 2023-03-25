import cn from "@styles/cssUtils";

const SearchField: React.FC<{
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}> = ({ handleChange, searchText }) => (
  <input
    aria-label="Search..."
    className={cn(
      "text-dark-shades mb-4 w-full rounded py-[5px] px-[9px]",
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
