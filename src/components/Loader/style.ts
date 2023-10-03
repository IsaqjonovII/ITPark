import styled from "styled-components";
import { pxToRem } from "utils";
import { fontFamily } from "constants";
import { colors } from "constants/colors";

const { darkGray, white } = colors;
const { overpass } = fontFamily;

export default styled.div`
  .loading {
    width: 100%;
    height: 100vh;
    background-color: ${darkGray};
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 9999;
    text-align: center;
    .loader__wrp {
      overflow: hidden;
      height: ${pxToRem(300)};
      h1 {
        font-family: ${overpass};
        font-size: ${pxToRem(45)};
        color: ${white};
        opacity: 0;
        animation: shown 1s 1 linear;
        transform: translateY(${pxToRem(120)});
      }
      .loader__img {
        width: 100%;
        max-width: ${pxToRem(150)};
        opacity: 0;
        animation: shown 1s 1 linear;
        transform: translateY(${pxToRem(120)});
      }
    }
  }
  .not__loading {
    display: none;
  }

  @keyframes shown {
    to {
      opacity: 1;
      transform: translateY(-${pxToRem(30)});
    }
  }
`;
