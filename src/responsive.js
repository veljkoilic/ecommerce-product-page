import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    } 
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 1439px) {
      ${props}
    }
  `;
};