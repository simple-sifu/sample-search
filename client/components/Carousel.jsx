import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
`;

const Button = styled.button`
  font-size: 2rem;
  background-color: white;
  border: 2px solid black;
  padding: 0.5rem 1rem;
  margin: 1rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 200px;
  margin: 1rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 40px;
  border: 1px solid gray;
  box-shadow: 2px 2px lightgray;
  text-align: center;
`;

function Carousel({ data }) {
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = startIndex + 3;

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 1, data.length - 3));
  };

  return (
    <CarouselContainer>
      <Button onClick={handlePrevClick} disabled={startIndex === 0}>
        Prev
      </Button>
      {data.slice(startIndex, endIndex).map((product) => (
        <ProductCard key={product._id}>
          <Image src={product.picture} alt={product.name} />
          <Title>{product.name}</Title>
        </ProductCard>
      ))}
      <Button
        onClick={handleNextClick}
        disabled={startIndex === data.length - 3}
      >
        Next
      </Button>
    </CarouselContainer>
  );
}

export default Carousel;
