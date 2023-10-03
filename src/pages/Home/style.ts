import styled from "styled-components";
import { pxToRem } from "utils";
import { fontFamily } from "constants";
import { colors } from "constants/colors";

const { lightGray, lightGreen, white } = colors;
const { overpass } = fontFamily;
export default styled.main`
  width: 100%;
  height: calc(100vh - 8rem);
  display: grid;
  place-items: center;
  padding-bottom: 5rem;
  .home__content {
    position: absolute;
    z-index: 99;
  }
  .main__title {
    font-size: calc(${pxToRem(20)} + 3vw);
    font-family: ${overpass};
    text-align: center;
    color: ${white};
    font-weight: 700;
    user-select: none;
    text-shadow: ${pxToRem(5)} ${pxToRem(5)} ${pxToRem(0)} ${lightGray};
    span {
      color: ${lightGreen};
      text-shadow: 0 0 ${pxToRem(0)} ${lightGreen}40;
      animation: glowText 2s infinite linear alternate;
    }
  }
  @media screen and (max-width: ${pxToRem(678)}) {
    .main__title span {
      animation: glowTextSM 2s infinit e linear alternate;
    }
  }
  @keyframes glowText {
    to {
      text-shadow: 0 0 ${pxToRem(100)} ${lightGreen};
    }
  }
  @keyframes glowTextSM {
    to {
      text-shadow: 0 0 ${pxToRem(20)} ${lightGreen};
    }
  }
`;
