import cn from "@styles/cssUtils";
import { Dispatch } from "react";
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
    // HACK override default colors
    primary: "hsl(185deg 46% 52%)",
    primary75: "hsl(185deg 46% 62%)",
    primary50: "hsl(185deg 46% 72%)",
    primary25: "hsl(193deg 22% 60%)",
    neutral0: "hsl(180deg 5% 91%)",
    neutral5: "hsl(180deg 5% 81%)",
    neutral10: "hsl(185deg 46% 52%)",
    neutral20: "hsl(193deg 22% 60%)",
    neutral30: "hsl(180deg 56% 21%)",
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

type SingleSelectionProps = {
  placeholder?: string;
  options: readonly Option[];
  selectedOption: Option;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedOption: Dispatch<React.SetStateAction<any>>;
};

/**
 * Single Selection component with dropdown
 */
export const SingleSelection: React.FC<SingleSelectionProps> = ({
  selectedOption,
  setSelectedOption,
  options,
  placeholder,
}) => (
  <div className={cn("multi-select scroll-dark z-10 w-full text-dark-shades")}>
    <Select
      aria-label={placeholder ?? "Select..."}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      placeholder={placeholder ?? "Select..."}
      theme={theme}
      value={selectedOption}
    />
  </div>
);

type MultiSelectionProps = {
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
};

/**
 * Multi Selection component with dropdown
 */
const MultiSelection: React.FC<MultiSelectionProps> = ({
  selectedOptions,
  setSelectedOptions,
  options,
  placeholder,
}) => (
  <div className={cn("multi-select scroll-dark z-10 w-full text-dark-shades")}>
    <Select
      aria-label={placeholder ?? "Select..."}
      aria-live="off"
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={selectedOptions}
      isMulti
      onChange={setSelectedOptions}
      options={options}
      placeholder={placeholder ?? "Select..."}
      theme={theme}
      value={selectedOptions}
    />
  </div>
);

export default MultiSelection;
