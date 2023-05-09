import React from "react";
import styled from "styled-components";
import img from "../assets/header.jpg";

const HomePage = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position-y: 95%;
  height: 100vh;
`;

export default function Home() {
  return <HomePage />;
}
