import React, { useState } from "react";
import styled from "styled-components";
import {tablet} from '../responsive'

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Hamburger src={menuIsOpen ? "./images/icon-close.svg" : "./images/icon-menu.svg"} alt="menu button" onClick={()=>{setMenuIsOpen(!menuIsOpen)}}/>
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
  padding: 20px 0;
  ${tablet({
    width: "100%",
    padding: "20px 5%",
    boxSizing:'border-box'
  })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Hamburger = styled.img`
  padding: 0 20px;
  width: 20px;
  cursor: pointer;
  display: none;
  z-index: 10;
  ${tablet({
    display: "block"
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
  ${tablet({
     display: (props) => (props.menuIsOpen ? "flex" : "none"),
     flexDirection:'column',
     position: 'absolute',
     top: "-20px",
     paddingTop: "55px",
     paddingLeft: "100px",
     left: 0,
     width: "55%",
     height: "calc(100vh - 52px)",
     boxShadow:"200px 200px 0px 200px rgba(0,0,0,0.75)"
  })}
  li {
    padding: 0 10px;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      color: #000;
      transition: 0.3s;
      ${tablet({
        transform:"scale(1.1)",

      })}
    }
    ${tablet({
      padding: "20px",
      fontWeight: 'bold',
      color: '#000'
    })}
  }
`;
const CartProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Cart = styled.img``;
const Profile = styled.img`
  width: 30px;
`;
