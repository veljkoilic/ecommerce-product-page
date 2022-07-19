import { useEffect, useState } from "react";
import styled from "styled-components";
import { Overlay } from "../components/Overlay";

import { useDispatch } from "react-redux/es/exports";
import { switchGalleryOpen } from "../redux/gallerySlice";
import { mobile, tablet } from "../responsive";

export const Gallery = ({ images }) => {
  const dispatch = useDispatch();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const changeImage = (index) => {
    setActiveImageIndex(index);
    setActiveThumbnail(index);
  };
  useEffect(() => {
    if (activeImageIndex < 0) {
      setActiveImageIndex(images.big.length - 1);
      setActiveThumbnail(images.big.length - 1);
    }
    if (activeImageIndex > images.big.length - 1) {
      setActiveImageIndex(0);
      setActiveThumbnail(0);
    }
  }, [activeImageIndex]);
  return (
    <Container
      className="gallery"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Overlay images={images} />
      <MainImage
        onClick={() => {
          if (window.innerWidth > 450) dispatch(switchGalleryOpen(true));
        }}
      >
        <svg
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => {
            e.stopPropagation();
            changeImage(activeImageIndex - 1);
          }}
        >
          <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
        <img src={images.big[activeImageIndex]} alt="product 1" />
        <svg
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => {
            e.stopPropagation();
            changeImage(activeImageIndex + 1);
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
            onClick={(e) => {
              changeImage(index, e);
            }}
            style={activeThumbnail === index ? { border: "4px solid var(--orange)" } : {}}
          />
        ))}
      </Thumbnails>
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  ${mobile({
    width: "120%",
    padding: 0,
  })}
`;
const MainImage = styled.div`
  padding: 20px 30px;
  ${mobile({
    padding: 0,
  })}
  img {
    cursor: pointer;
    width: 100%;
    border-radius: 20px;
    ${mobile({
      borderRadius: "0",
      cursor:'default'
    })}
  }
  svg{
    display: none;
    background-color: white;
    padding: 10px 13px;
    border-radius: 50%;
    position: absolute;
    top: calc(35%);
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
    ${mobile({
        display: 'block',
        
    })}
  }
`;
const Thumbnails = styled.div`
  padding: 20px 30px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}

  img {
    border-radius: 16px;
    box-sizing: border-box;
    width: 25%;
    border: 3px solid rgba(0, 0, 0, 0);
    &:hover {
      opacity: 0.4;
    }
  }
`;
