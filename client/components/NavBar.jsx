import React from "react";
import "../styles/SearchContainer.scss";
import ProductSearch from "./Products/ProductSearch";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContextProvider";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const MenuContainer = styled.div`
  background-color: #040a2b;
`;

const MenuHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 2rem 0px;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  line-height: 40px;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: flex-end;
`;

const SearchIcon = styled.i`
  vertical-align: -5px;
  color: white;
  line-height: 40px;
`;

const NavItem = styled.a`
  font-family: Helvetica, Arial, Sans-Serif;
  font-size: 1.2rem;
  line-height: 40px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  color: #fff;
  margin-right: 1rem;
  &:hover {
    color: lightGray;
  }
`;

export default function NavBar() {
  const { setSearchValue, setShowingSearch, toggleSearchContainer } =
    useSearch();

  function hideSearchContainer() {
    setSearchValue("");
    setShowingSearch(false);
  }

  return (
    <Header className="menu full-screen-header">
      <MenuContainer>
        <MenuHolder>
          <Link to="/" onClick={hideSearchContainer}>
            <Title>ELC</Title>
          </Link>
          <Nav>
            <NavItem href="#">HOLIDAY</NavItem>
            <NavItem href="#">WHAT'S NEW</NavItem>
            <NavItem href="#">PRODUCTS</NavItem>
            <NavItem href="#">BESTSELLERS</NavItem>
            <NavItem href="#">GOODBYES</NavItem>
            <NavItem href="#">STORES</NavItem>
            <NavItem href="#">INSPIRATION</NavItem>

            <NavItem href="#" onClick={() => toggleSearchContainer()}>
              <SearchIcon className="material-icons search">search</SearchIcon>
            </NavItem>
          </Nav>
        </MenuHolder>
      </MenuContainer>
      <ProductSearch />
    </Header>
  );
}
