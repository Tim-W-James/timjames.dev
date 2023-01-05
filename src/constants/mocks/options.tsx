const options = [
  "Chocolate",
  "Vanilla",
  "Strawberry",
  "Mint",
  "Pistachio",
] as const;

export type SelectionOptions = {
  value: typeof options[number];
  label: typeof options[number];
};

const selectionOptions: readonly SelectionOptions[] = options.map((sort) => ({
  value: sort,
  label: sort,
}));

export default selectionOptions;
