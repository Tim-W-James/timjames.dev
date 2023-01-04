export const encodeArrayAsCsv = (data: string[]) =>
  data.map((item) => encodeURIComponent(item)).join(",");

export const decodeArrayAsCsv = (data: string) =>
  data.split(",").map((item) => decodeURIComponent(item));
