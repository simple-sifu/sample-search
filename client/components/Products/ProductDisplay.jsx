import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContextProvider";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 150px;
  border: 1px solid gray;
  box-shadow: 2px 2px lightgray;
  text-align: center;
`;

const ProductResults = styled.div`
  font-family: ano_regular, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.30000001192092896px;
  line-height: 1.16667;
`;

const Span = styled.span`
  text-decoration: underline;
  color: black;
  cursor: pointer;
  margin: 0px 5px;
`;

const HorizontalRule = styled.hr`
  margin: 1rem 0px 1rem;
`;

export default function ProductDisplay({ searchTerms }) {
  const [dataReturned, setDataReturned] = useState([]);

  const searchValue = searchTerms ? searchTerms : "";
  const Product_API_URL =
    process.env.REACT_APP_PRODUCT_API_CONFIG + searchValue;
  const { data, error } = useFetch(Product_API_URL);

  const { isSearchBarEmpty, toggleSearchContainer, setData, setError } =
    useSearch();

  React.useEffect(() => {
    if (data?.data) {
      setData(data.data);
      setError(error);
      setDataReturned(data.data);
    }
  }, [data]);

  return (
    <React.Fragment>
      {error && <h1>{error}</h1>}
      {!error &&
        dataReturned &&
        dataReturned.length !== 0 &&
        !isSearchBarEmpty && (
          <div>
            <HorizontalRule />
            <ProductResults>
              {`Displaying ${
                dataReturned.length > 4 ? 4 : dataReturned.length
              } out of ${dataReturned.length} results.`}
              <Span>
                <Link to="/display" onClick={toggleSearchContainer}>
                  See all Results.
                </Link>
              </Span>
            </ProductResults>
            <HorizontalRule />
            <ProductContainer>
              {dataReturned.slice(0, 4).map((product) => {
                return (
                  <ProductCard key={product._id}>
                    <img height="200px" width="100px" src={product.picture} />
                    <div key={product._id}>{product.name}</div>
                  </ProductCard>
                );
              })}
            </ProductContainer>
          </div>
        )}
    </React.Fragment>
  );
}
