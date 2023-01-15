import cn from "@styles/cssUtils";

const SearchField: React.FC<{
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}> = ({ handleChange, searchText }) => (
  <input
    className={cn(
      "w-full rounded text-dark-shades mb-4 py-[5px] px-[9px]",
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
