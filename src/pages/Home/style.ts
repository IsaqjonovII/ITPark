import { fontFamily } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { pxToRem } from "utils";

const { lightGray, lightGreen, white } = colors;
const { overpass } = fontFamily;
export default styled.main`
  width: 100%;
  height: calc(100vh - 8rem);
  display: grid;
  place-items: center;
  padding-bottom: 5rem;
  .main__title {
    font-size: calc(${pxToRem(20)} + 3vw);
    font-family: ${overpass};
    text-align: center;
    color: ${white};
    font-weight: 700;
    text-shadow: ${pxToRem(5)} ${pxToRem(5)} ${pxToRem(0)} ${lightGray};
    span {
      color: ${lightGreen};
      text-shadow: 0 0 ${pxToRem(40)} ${lightGreen}40;
      animation: glowText 2s infinite linear alternate;
    }
  }
  @keyframes glowText {
    to {
      text-shadow: 0 0 ${pxToRem(100)} ${lightGreen};
    }
  }
`;
