import cn from "@styles/cssUtils";
import Select, { Theme } from "react-select";
import makeAnimated from "react-select/animated";

export type Option = {
  value: string;
  label: string;
};

const animatedComponents = makeAnimated();

const theme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "hsl(185deg 46% 52%)",
    primary75: "hsl(185deg 46% 62%)",
    primary50: "hsl(185deg 46% 72%)",
    primary25: "hsl(193deg 22% 60%)",
    neutral0: "hsl(180deg 5% 91%)",
    neutral5: "hsl(180deg 5% 81%)",
    neutral10: "hsl(185deg 46% 52%)",
    neutral20: "hsl(218deg 22% 60%)",
    neutral30: "hsl(218deg 22% 50%)",
    neutral40: "hsl(218deg 22% 40%)",
    neutral50: "hsl(218deg 22% 30%)",
    neutral60: "hsl(218deg 22% 25%)",
    neutral70: "hsl(218deg 22% 20%)",
    neutral80: "hsl(218deg 22% 15%)",
    neutral90: "hsl(218deg 22% 10%)",
    danger: "hsl(180deg 5% 91%)",
    dangerLight: "hsl(180deg 56% 21%)",
  },
});

/**
 * Single Selection component with dropdown
 *
 * @param {{ selectedOptions; setSelectedOptions; options; placeholder; }} {
 * default options, on change function, options, placeholder text }
 */
export const SingleSelection: React.FC<{
  placeholder?: string;
  options: readonly Option[];
  selectedOption: Option;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
}> = ({ selectedOption, setSelectedOption, options, placeholder }) => (
  <div
    className={cn("multi-select text-dark-shades scroll-dark z-10 mb-4 w-full")}
  >
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      placeholder={placeholder || "Select..."}
      theme={theme}
    />
  </div>
);

/**
 * Multi Selection component with dropdown
 *
 * @param {{ selectedOptions; setSelectedOptions; options; placeholder; }} {
 * default options, on change function, options, placeholder text }
 */
const MultiSelection: React.FC<{
  placeholder?: string;
  options: readonly Option[];
  selectedOptions: readonly Option[];
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<
      readonly {
        value: string;
        label: string;
      }[]
    >
  >;
}> = ({ selectedOptions, setSelectedOptions, options, placeholder }) => (
  <div
    className={cn("multi-select text-dark-shades scroll-dark z-10 mb-4 w-full")}
  >
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={selectedOptions}
      isMulti
      onChange={setSelectedOptions}
      options={options}
      placeholder={placeholder || "Select..."}
      theme={theme}
    />
  </div>
);

export default MultiSelection;
