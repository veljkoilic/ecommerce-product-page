import { useState } from "react";
import styled from "styled-components";
import { tablet, laptop, mobile } from "../responsive";
import { Gallery } from "./Gallery";
import { useSelector,useDispatch } from "react-redux/es/exports";
import {pushToCart} from '../redux/cartSlice'
export const Product = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart.products)

  const product = {
    id: 1,
    brand: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: {
      old: "250.00",
      new: "125.00",
      discount: "50%",
    },
    images: {
      big: [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg",
      ],
      thumbnails: [
        "./images/image-product-1-thumbnail.jpg",
        "./images/image-product-2-thumbnail.jpg",
        "./images/image-product-3-thumbnail.jpg",
        "./images/image-product-4-thumbnail.jpg",
      ],
    },
  };

  const addProductToCart = () => {
    if(cart.length ===5){
        alert("Your Cart is full. Check out current items to continue.")
        return
    }
    dispatch(pushToCart({...product, amount, id:cart.length+1}))
  }
  const [amount, setAmount] = useState(1);
  const changeAmount = (type) => {
    if (type === "inc") {
      setAmount(amount + 1);
    }
    if (type === "dec") {
      if (amount === 0) return;
      setAmount(amount - 1);
    }
  };
  return (
    <Container>
      <Left>
        <Gallery images={product.images} />
      </Left>
      <Right>
        <Brand>{product.brand}</Brand>
        <Title>{product.title}</Title>
        <Desc>{product.desc}</Desc>
        <Price>
          <div className="upper">
            <NewPrice>$ {product.price.new}</NewPrice>
            <Discount>{product.price.discount}</Discount>
          </div>
          <OldPrice>$ {product.price.old}</OldPrice>
        </Price>
        <Controls>
          <Amount>
            <span
              onClick={() => {
                changeAmount("dec");
              }}
            >
              -
            </span>
            <span>{amount}</span>
            <span
              onClick={() => {
                changeAmount("inc");
              }}
            >
              +
            </span>
          </Amount>
          <AddToCart onClick={()=>{addProductToCart()}}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </AddToCart>
        </Controls>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  padding: 40px 0;
  box-sizing: border-box;
  display: flex;
  gap: 100px;
  flex-direction: row;
  justify-content: space-between;
  ${tablet({
    flexDirection: "column",
    width: "96%",
    padding: "20px",
  })}
  ${laptop({
    width: "96%",
  })}
  ${mobile({
    width: "100%",
    marginLeft:'0',
    marginRight: '0',
    marginTop: '0',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    gap: "20px"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4%;
`;

const Brand = styled.span`
  color: var(--orange);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 14px;
`;
const Title = styled.h2`
  font-size: 40px;
`;
const Desc = styled.p`
  color: gray;
  letter-spacing: 1px;
  margin-top: 0px;
`;
const Price = styled.div`
  .upper {
    display: flex;
    align-items: center;
  }
`;
const NewPrice = styled.span`
  font-size: 26px;
  font-weight: bold;
`;
const Discount = styled.span`
  background-color: var(--pale-orange);
  padding: 3px 8px;
  border-radius: 5px;
  color: var(--orange);
  margin-left: 20px;
  font-weight: bold;
`;
const OldPrice = styled.span`
  color: lightgray;
  text-decoration: line-through;
  font-weight: bold;
  margin: 10px 0;
  display: block;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  ${tablet({
    flexDirection: "column",
  })}
`;
const Amount = styled.div`
  flex: 2;
  background-color: var(--light-grayish-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border-radius: 15px;
  box-sizing: border-box;
  span {
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    &:first-of-type,
    &:last-of-type {
      color: var(--orange);
      font-size: 23px;
    }
  }
  ${tablet({
    width: "100%",
    padding: "18px 25px",
  })}
`;
const AddToCart = styled.button`
  flex: 3;
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
  svg {
    padding: 0 15px;
  }
  ${tablet({
    width: "100%",
  })}
`;
