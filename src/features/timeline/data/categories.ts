const categories = {
  "Career Event": {
    // We need to help type inference here with an explicit undefined
    link: undefined,
  },
  "Agile Digital": {
    link: "https://agiledigital.com.au/",
  },
  "Australian National University": {
    link: "https://www.anu.edu.au/",
  },
  "Personal Project": {
    link: undefined,
  },
  "Canberra College": {
    link: "https://www.canberrac.act.edu.au/",
  },
} as const satisfies Record<string, { link?: string }>;

export default categories;
