import React, { useState } from "react";
import styled from "styled-components";
import { laptop, tablet } from "../responsive";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { removeFromCart } from "../redux/cartSlice";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  const amount = 2;
  return (
    <Container>
      <Wrapper>
        <Left>
          {!menuIsOpen && (
            <Hamburger
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
                setCartIsOpen(false);

              }}
              width="16"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" />
            </Hamburger>
          )}
          {menuIsOpen && (
            <Hamburger
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
                setCartIsOpen(false);

              }}
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </Hamburger>
          )}
          <Logo src="./images/logo.svg" alt="Sneakers logo" />
          <Overlay className="overlay" menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
            <Menu menuIsOpen={menuIsOpen}>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </Menu>
          </Overlay>
        </Left>
        <CartProfile>
          <CartNumber>{cart.length}</CartNumber>
          <CartIcon
            src="./images/icon-cart.svg"
            alt="cart"
            onClick={() => {
              setCartIsOpen(!cartIsOpen);
            }}
          />
          <Profile src="./images/image-avatar.png" />
        </CartProfile>
        {cartIsOpen && (
          <Cart>
            <CartTop>Cart</CartTop>
            <CartBottom>
              {cart.length === 0 && (
                <div className="empty">
                  <span>Your cart is empty</span>
                </div>
              )}
              {cart.length > 0 && <div>
                {cart.map((e) => {
                  return (
                    <div className="cartItems" key={e.id}>
                      <img src={e.images.big[0]} alt="" />
                      <div className="text">
                        <span>{e.title}</span>
                        <span>
                          ${e.price.new} x {e.amount} <b>${e.price.new * e.amount}</b>
                        </span>
                      </div>
                      <svg
                        className="deleteIcon"
                        onClick={() => {
                          dispatch(removeFromCart(e.id));
                        }}
                        width="14"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <path
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            id="a"
                          />
                        </defs>
                        <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                      </svg>
                    </div>
                  );
                })}
                <Button>Checkout</Button>
                </div>}
            </CartBottom>
          </Cart>
        )}
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
  &:hover path {
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
const Overlay = styled.div`
  ${tablet({
    display: (props) => (props.menuIsOpen ? "flex" : "none"),
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "fixed",
    top: 0,
    left: 0,
  })}
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
const CartIcon = styled.img`
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
const Cart = styled.div`
  position: absolute;
  right: 20px;
  top: 120px;
  border-radius: 10px;
  box-shadow: 0px 10px 31px -3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  ${laptop({
    right: "8%",
  })}
  ${tablet({
    right: "20px",
    marginLeft: "20px",
  })}
`;
const CartTop = styled.div`
  padding: 20px;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
`;
const CartBottom = styled.div`
  padding: 20px;
  min-height: 80px;
  min-width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .cartItems {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    margin-top: 15px;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: gray;
    span:first-of-type {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  img {
    height: 50px;
    border-radius: 5px;
  }
  svg {
    cursor: pointer;
  }
  use {
    &:hover {
      fill: var(--orange);
    }
  }
`;
const Button = styled.button`
  width: 100%;
  margin-top: 25px;
  background-color: var(--orange);
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 0px 0px -0px rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 7px 29px -10px var(--orange);
    transition: 0.3s;
    transform: scale(1.01);
  }
  ${tablet({
    width: "100%",
  })}
`;
