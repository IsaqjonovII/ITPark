import styled from "styled-components";
import { pxToRem } from "utils";
import { fontFamily } from "constants";
import { layout } from "styles/mixins";
import { colors } from "constants/colors";

const { white, green, lightGray } = colors;
const { overpass } = fontFamily;
export default styled.section`
  font-family: ${overpass};
  padding: ${pxToRem(50)};
  .startup__title {
    font-size: ${pxToRem(40)};
    font-family: ${overpass};
    text-align: center;
    color: ${white};
    letter-spacing: ${pxToRem(2)};
    margin-bottom: ${pxToRem(30)};
  }
  .categories__wrp {
    width: 100%;
    max-width: ${pxToRem(900)};
    height: auto;
    margin: 0 auto; 
    grid-gap: ${pxToRem(20)};
    ${layout("grid", {
      cols: 3,
      rows: 3,
      rowsH: pxToRem(150),
    })}
  }
  .category__card {
    color: ${white};
    display: grid;
    ${layout("center")}
    font-size: ${pxToRem(20)};
    border: ${pxToRem(1)} solid ${lightGray};
    border-radius: ${pxToRem(10)};
    padding: ${pxToRem(10)};
    transition: 200ms ease-in-out;
    text-align: center;
    &:hover {
        box-shadow: 0 ${pxToRem(5)} ${pxToRem(2)} ${green};
        transform: translateY(-${pxToRem(10)}) scale(1.06);
        cursor: pointer;
    }
    svg {
      font-size: ${pxToRem(50)};
      color: ${green};
      object-fit: contain;
    }
  }
  @media screen and (max-width: ${pxToRem(768)}) {
    .categories__wrp {
      ${layout("grid", {
        cols: 2,
        rows: 5,
        rowsH: pxToRem(150),
      })}
    }
  padding: ${pxToRem(20)};
  .startup__title {
    font-size: ${pxToRem(30)};
  }

  }
  @media screen and (max-width: ${pxToRem(550)}) {
    .category__card {
      font-size: ${pxToRem(18)};
      svg {
        font-size: ${pxToRem(40)};
      }
  padding: ${pxToRem(10)};
    }
    .categories__wrp {
      grid-gap: ${pxToRem(10)};
    }
    .startup__title {
    font-size: ${pxToRem(25)};
  }
  }
`;
