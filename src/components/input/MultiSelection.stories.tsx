import { Meta, StoryFn } from "@storybook/react";
import cn from "@styles/cssUtils";
import MultiSelectionComponent, {
  Option,
  SingleSelection as SingleSelectionComponent,
} from "./MultiSelection";

export default {
  component: MultiSelectionComponent,
  argTypes: {
    selectedOptions: {
      table: {
        disable: true,
      },
    },
    setSelectedOptions: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof MultiSelectionComponent>;

const Template: StoryFn<typeof MultiSelectionComponent> = (args) => (
  <MultiSelectionComponent {...args} />
);

const options = [
  "Chocolate",
  "Vanilla",
  "Strawberry",
  "Mint",
  "Pistachio",
] as const;

type SelectionOptions = {
  value: typeof options[number];
  label: typeof options[number];
};

const selectionOptions: readonly SelectionOptions[] = options.map((sort) => ({
  value: sort,
  label: sort,
}));

export const MultiSelection = Template.bind({});
MultiSelection.args = {
  options: selectionOptions,
};
MultiSelection.decorators = [
  (Story) => {
    const [selectedOptions, setSelectedOptions] = useState<readonly Option[]>(
      []
    );
    return (
      <div className={cn("p-8")}>
        <Story
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
    );
  },
];

const TemplateSingleSelection: StoryFn<typeof SingleSelectionComponent> = (
  args
) => <SingleSelectionComponent {...args} />;

export const SingleSelection = TemplateSingleSelection.bind({});
SingleSelection.args = {
  options: selectionOptions,
};
SingleSelection.decorators = [
  (Story) => {
    const [selectedOption, setSelectedOption] = useState<readonly Option[]>([]);
    return (
      <div className={cn("p-8")}>
        <Story
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    );
  },
];
