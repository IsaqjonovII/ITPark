import styled from "styled-components";
import { pxToRem } from "utils";
import { fontFamily } from "constants";
import { colors } from "constants/colors";

const { lightGray, darkGray, white, lightGreen } = colors;
const { kanit } = fontFamily;

export default styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: red;
  position: absolute;
  right: 0;
  top: 5rem;
  background-color: ${darkGray}50;
  padding: ${pxToRem(50)};
  text-align: center;
  color: ${white};
  z-index: 9999;
  backdrop-filter: blur(8px) brightness(1) contrast(1) grayscale(0)
    hue-rotate(0) invert(0) opacity(1) saturate(1) sepia(0);
  border-left: ${pxToRem(1)} solid ${lightGray}80;
  .sidebar__link {
    font-size: ${pxToRem(25)};
    line-height: 2;
    font-family: ${kanit};
    .link:hover {
      color: ${lightGreen};
    }
  }
  @media (min-width: ${pxToRem(1025)}) {
    display: none;
  }
`;
