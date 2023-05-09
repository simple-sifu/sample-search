import React from "react";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import { Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContextProvider";
import styled from "styled-components";
import "./styles/App.scss";

const Container = styled.div`
  margin: 0;
  font-family: Cambria;
  color: #1b2522;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <SearchContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </SearchContextProvider>
    </Container>
  );
}
export default App;
