import { fontFamily, fontSize } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { pxToRem } from "utils";

const { md, xxl, xl } = fontSize;
const { green, gray, white, lightGreen } = colors;
const { kanit, overpass } = fontFamily;
export default styled.section`
  padding: ${pxToRem(30)} ${pxToRem(50)};
  .edu__title {
    font-size: ${xl};
    color: ${white};
    font-family: ${overpass};
  }
`;
