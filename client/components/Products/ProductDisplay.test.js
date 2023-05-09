/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductDisplay from "./ProductDisplay";
import useFetch from "../../hooks/useFetch";
import { useSearch } from "../../context/SearchContextProvider";
import React from "react";

jest.mock("../../hooks/useFetch");
jest.mock("../../context/SearchContextProvider");
useSearch.mockImplementation(() => {
  return {
    isSearchBarEmpty: false,
    toggleSearchContainer: jest.fn(),
    setData: () => {
      return {
        data: {
          data: [
            {
              id: "01",
              name: "product 1",
              picture: "https://example.com/picture1.jpg",
            },
            {
              id: "02",
              name: "product 1",
              picture: "https://example.com/picture1.jpg",
            },
            {
              id: "03",
              name: "product 1",
              picture: "https://example.com/picture1.jpg",
            },
          ],
        },
      };
    },
    setError: () => {
      return null;
    },
  };
});

describe("ProductDisplay", () => {
  it("renders product cards when data is returned", async () => {
    const mockData = {
      data: {
        data: [
          {
            _id: "1",
            name: "Product 1",
            picture: "https://example.com/picture1.jpg",
          },
          {
            _id: "2",
            name: "Product 2",
            picture: "https://example.com/picture2.jpg",
          },
        ],
        error: null,
      }
    };
    useFetch.mockReturnValue(mockData);
    const mockSearchData = {
      isSearchBarEmpty: false,
      toggleSearchContainer: jest.fn(),
      setData: (d) => d,
      setError: jest.fn(),
    };
    // // console.log("useSearch", typeof useSearch);
    useSearch.mockReturnValue(mockSearchData);

    render(<ProductDisplay searchTerms="test" />);

    console.log("screen", screen.debug());
    const productCards = await screen.findAllByRole("img");
    expect(productCards).toHaveLength(mockData.data.length);
  });

  it("displays an error message when an error occurs", async () => {
    const mockError = "Something went wrong";
    useFetch.mockReturnValue({ data: null, error: mockError });
    const mockSearchData = {
      isSearchBarEmpty: false,
      toggleSearchContainer: jest.fn(),
      setData: jest.fn(),
      setError: jest.fn(),
    };
    useSearch.mockReturnValue(mockSearchData);

    render(<ProductDisplay searchTerms="test" />);

    const errorMessage = await screen.findByText(mockError);
    expect(errorMessage).toBeInTheDocument();
  });

  it("displays a message when no data is returned", async () => {
    useFetch.mockReturnValue({ data: null, error: null });
    const mockSearchData = {
      isSearchBarEmpty: false,
      toggleSearchContainer: jest.fn(),
      setData: jest.fn(),
      setError: jest.fn(),
    };
    useSearch.mockReturnValue(mockSearchData);

    render(<ProductDisplay searchTerms="test" />);

    const noResultsMessage = await screen.findByText("No results found.");
    expect(noResultsMessage).toBeInTheDocument();
  });

  it("displays a link to see all results when there are more than 4 results", async () => {
    const mockData = {
      data: [
        {
          _id: "1",
          name: "Product 1",
          picture: "https://example.com/picture1.jpg",
        },
        {
          _id: "2",
          name: "Product 2",
          picture: "https://example.com/picture2.jpg",
        },
        {
          _id: "3",
          name: "Product 3",
          picture: "https://example.com/picture3.jpg",
        },
        {
          _id: "4",
          name: "Product 4",
          picture: "https://example.com/picture4.jpg",
        },
        {
          _id: "5",
          name: "Product 5",
          picture: "https://example.com/picture5.jpg",
        },
      ],
      error: null,
    };
    useFetch.mockReturnValue(mockData);
    const mockSearchData = {
      isSearchBarEmpty: false,
      toggleSearchContainer: jest.fn(),
      setData: jest.fn(),
      setError: jest.fn(),
    };
    useSearch.mockReturnValue(mockSearchData);

    render(<ProductDisplay searchTerms="test" />);

    const seeAllResultsLink = await screen.findByText("See all Results.");
    expect(seeAllResultsLink).toBeInTheDocument();

    userEvent.click(seeAllResultsLink);

    const searchContainer = await screen.findByTestId("search-container");
    expect(searchContainer).toBeInTheDocument();
  });
});
