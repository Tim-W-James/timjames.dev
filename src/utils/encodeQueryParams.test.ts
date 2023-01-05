import { decodeArrayAsCsv, encodeArrayAsCsv } from "./encodeQueryParams";

const mockArray = ["red", "green", "blue"];

it("array can be serialised then deserialised to the same input", () => {
  expect(decodeArrayAsCsv(encodeArrayAsCsv(mockArray))).toEqual(mockArray);
});
