// eslint-disable-next-line import/no-extraneous-dependencies
const { describe, expect, test } = require("@jest/globals");
const CreateSearchCache = require("./CreateSearchCache");

const productData = [
  {
    _id: "001",
    name: "Damage Reverse Oil Conditioner",
    tags: ["ojon", "oil", "conditioner"],
  },
  {
    _id: "002",
    name: "Extra Clear Shampoo",
    tags: ["hair", "comb", "soap"],
  },
];

describe("Search Utility", () => {
  test("searchterm match returns correct result", () => {
    const search = CreateSearchCache(productData);
    const searchTerm = "hair";

    const searchResult = search(searchTerm);

    expect(searchResult).toEqual([
      {
        _id: "002",
        name: "Extra Clear Shampoo",
        tags: ["hair", "comb", "soap"],
      },
    ]);
  });

  test("searchterm not found should return empty array", () => {
    const search = CreateSearchCache(productData);
    const searchTerm = "bat";

    const searchResult = search(searchTerm);

    expect(searchResult).toEqual([]);
  });

  test("searchterm should be case insensitive and will return correct result", () => {
    const search = CreateSearchCache(productData);
    const searchTerm = "DAMAGE";

    const searchResult = search(searchTerm);

    expect(searchResult).toEqual([
      {
        _id: "001",
        name: "Damage Reverse Oil Conditioner",
        tags: ["ojon", "oil", "conditioner"],
      },
    ]);
  });

  test("found searchterm should use prefix search should not return results when  do not start from beginning", () => {
    const search = CreateSearchCache(productData);
    const searchTerm = "age";

    const searchResult = search(searchTerm);

    expect(searchResult).toEqual([]);
  });

  test("found searchterm should use prefix search and only return results when terms starts from beginning", () => {
    const search = CreateSearchCache(productData);
    const searchTerm = "d";

    const searchResult = search(searchTerm);

    expect(searchResult).toEqual([
      {
        _id: "001",
        name: "Damage Reverse Oil Conditioner",
        tags: ["ojon", "oil", "conditioner"],
      },
    ]);
  });

  test("empty string searchterm should return empty array", () => {
    const search = CreateSearchCache(productData);
    const searchTerm = "";

    const searchResult = search(searchTerm);

    expect(searchResult).toEqual([]);
  });
});
