import { fontFamily, fontSize } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { layout } from "styles/mixins";
import { pxToRem } from "utils";

const { xl } = fontSize;
const { white, lightGreen } = colors;
const { kanit, overpass } = fontFamily;
export default styled.section`
  padding: ${pxToRem(30)};
  max-width: ${pxToRem(1550)};
  margin: 0 auto;
  text-align: center;
  .edu__title {
    font-size: ${xl};
    color: ${white};
    font-family: ${overpass};
  }
  .courses {
    ${layout("grid", { cols: 4, rows: 3, rowsH: pxToRem(300) })}
    grid-gap: 20px;
  }
  .course__card {
    color: ${white};
    font-family: ${kanit};
    overflow: hidden;
    padding: ${pxToRem(20)};
    border-inline-start: ${pxToRem(1)} solid;
    border-block-start: ${pxToRem(1)} solid;
    border-image-source: radial-gradient(
      circle at top left,
      ${lightGreen},
      transparent 30%
    );
    border-image-slice: 1;
    transition: 350ms ease-in-out;
    &:hover {
      cursor: pointer;
      border-inline-end: ${pxToRem(1)} solid;
      border-block-end: ${pxToRem(1)} solid;
      border-image-source: radial-gradient(
        circle at bottom left,
        transparent 30%,
        ${lightGreen}
      );
    }
    
  }
  .overlay {
    display: none;
  }
`;
