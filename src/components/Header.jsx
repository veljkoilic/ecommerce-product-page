import React, { useState } from "react";
import styled from "styled-components";
import { tablet } from "../responsive";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          {!menuIsOpen && (
            <Hamburger
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
              width="16"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" />
            </Hamburger>
          )}
          {menuIsOpen && (
            <Hamburger
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </Hamburger>
          )}
          {/* <Hamburger
            src={menuIsOpen ? "./images/icon-close.svg" : "./images/icon-menu.svg"}
            alt="menu button"
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          /> */}
          <Logo src="./images/logo.svg" alt="Sneakers logo" />
          <Menu menuIsOpen={menuIsOpen}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </Menu>
        </Left>
        <CartProfile>
          <CartNumber>3</CartNumber>
          <Cart src="./images/icon-cart.svg" />
          <Profile src="./images/image-avatar.png" />
        </CartProfile>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  ${tablet({
    width: "100%",
    padding: "20px 5%",
    boxSizing: "border-box",
  })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Hamburger = styled.svg`
  padding: 0 20px;
  width: 20px;
  cursor: pointer;
  display: none;
  z-index: 10;
  transition: 0.2s;
  &:hover path{
    transition: 0.2s;
    fill: var(--orange);
  }
  ${tablet({
    display: "block",
  })}
`;
const Logo = styled.img`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  color: gray;
  background-color: white;
  margin: 0;
  ${tablet({
    display: (props) => (props.menuIsOpen ? "flex" : "none"),
    flexDirection: "column",
    position: "absolute",
    top: "-20px",
    paddingTop: "100px",
    paddingLeft: "100px",
    left: 0,
    width: "55%",
    height: "calc(100vh - 82px)",
    boxShadow: "200px 200px 0px 200px rgba(0,0,0,0.75)",
  })}
  li {
    padding: 40px 10px;
    transition: 0.3s;
    border: 2px solid rgba(0, 0, 0, 0);

    &:hover {
      ${tablet({
        transform: "scale(1.1)",
        transformOrigin: "right",
      })}
      cursor: pointer;
      color: #000;
      border-bottom: 2px solid var(--orange);
    }
    ${tablet({
      padding: "20px",
      fontWeight: "bold",
      color: "#000",
      fontSize: "22px",
    })}
  }
`;
const CartProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const CartNumber = styled.span`
  position: relative;
  top: -15px;
  left: 50px;
  color: #fff;
  background-color: var(--orange);
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 10px;
  z-index: -1;
`;
const Cart = styled.img`
  cursor: pointer;
`;
const Profile = styled.img`
  width: 30px;
  padding: 3px;
  border: 1px solid rgba(0, 0, 0, 0);

  &:hover {
    border: 1px solid var(--orange);
    border-radius: 50%;
    cursor: pointer;
  }
`;
