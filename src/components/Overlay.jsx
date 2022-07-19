import { useEffect, useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux/es/exports";
import { switchGalleryOpen } from "../redux/gallerySlice";
import { laptop, tablet, mobile } from "../responsive";

export const Overlay = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const galleryIsOpen = useSelector((state) => state.gallery.open);
  const dispatch = useDispatch();

  const changeImage = (index, increment = false) => {
    if (!increment) {
      setActiveImageIndex(index);
      setActiveThumbnail(index);
    }
    if (increment) {
      setActiveImageIndex(index + increment);
      setActiveThumbnail(index + increment);

      if (activeImageIndex > images.big.length - 2) {
        setActiveImageIndex(0);
        setActiveThumbnail(0);
      }
      if (activeImageIndex < 0) {
        setActiveImageIndex(images.big.length - 2);
        setActiveThumbnail(images.big.length - 2);
      }
    }
  };
  return (
    <Wrapper
      style={galleryIsOpen ? { display: "flex" } : { display: "none" }}
      onClick={() => {
        dispatch(switchGalleryOpen());
      }}
    >
      <Container
        className="gallery"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MainImage>
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              changeImage(activeImageIndex, -1);
            }}
          >
            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
          <img src={images.big[activeImageIndex]} alt="product  1" onClick={() => {}} />
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              changeImage(activeImageIndex, 1);
            }}
          >
            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </MainImage>
        <Thumbnails>
          {images.thumbnails.map((thumbnail, index) => (
            <img
              className="thumbnail"
              src={thumbnail}
              alt="thumbnail 1"
              key={index}
              onClick={() => {
                changeImage(index);
              }}
              style={activeThumbnail === index ? { border: "4px solid var(--orange)" } : {}}
            />
          ))}
        </Thumbnails>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  opacity: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  .gallery {
    min-width: 320px;
    max-width: 30%;
    ${laptop({
      maxWidth: "50%",
    })}
    ${tablet({
      maxWidth: "70%",
    })}
    ${mobile({
      maxWidth: "100%",
    })}
  }
`;
const Container = styled.div`
  width: 80%;
`;
const MainImage = styled.div`
  padding: 20px 30px;
  position: relative;
  svg {
    background-color: white;
    padding: 10px 13px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 19px);
    &:first-of-type {
      left: 15px;
    }
    &:last-of-type {
      right: 10px;
    }
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
  img {
    width: 100%;
    border-radius: 20px;
  }
`;
const Thumbnails = styled.div`
  padding: 20px 30px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  cursor: pointer;

  img {
    border-radius: 16px;
    box-sizing: border-box;
    width: 25%;
    border: 3px solid rgba(0, 0, 0, 0);
    &:hover {
      opacity: 0.4;
      /* border: 2px solid var(--orange); */
    }
  }
`;
