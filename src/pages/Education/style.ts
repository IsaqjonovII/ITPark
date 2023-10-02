import { fontFamily, fontSize } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { layout } from "styles/mixins";
import { pxToRem } from "utils";

const { xl } = fontSize;
const { green, white, lightGreen } = colors;
const { kanit, overpass } = fontFamily;
export default styled.section`
  padding: ${pxToRem(30)};
  max-width: ${pxToRem(1550)};
  margin: 0 auto;
  .edu__title {
    font-size: ${xl};
    text-align: center;
    color: ${white};
    font-family: ${overpass};
    margin: ${pxToRem(20)} 0;
  }
  .courses {
    ${layout("grid", { cols: 4, rows: 2, rowsH: pxToRem(300) })}
    grid-gap: 20px;
  }
  .course__card {
    color: ${white};
    font-family: ${kanit};
    overflow: hidden;
    padding: ${pxToRem(20)};
    border-inline-start: ${pxToRem(1)} solid;
    border-block-start: ${pxToRem(1)} solid;
    border: ${pxToRem(1)} solid transparent;
    border-image-source: radial-gradient(
      circle at top left,
      ${lightGreen},
      transparent 30%
      );
      border-image-slice: 1;
      transition: 300ms ease-in-out;
      .card__wrp {
        flex: 1;
        height: 100%;
        display: grid;
        place-items: center;
    }
    &:hover {
      cursor: pointer;
      border-inline-end: ${pxToRem(1)} solid;
      border-block-end: ${pxToRem(1)} solid;
      border-image-source: radial-gradient(
        circle at bottom left,
        transparent 30%,
        ${lightGreen}
      );
      .course__icons {
        color: ${green};
      }
    }
  }
  .course__icons {
    width: 100%;
    ${layout("flex")}
    padding: 0 ${pxToRem(20)};
      transition: 300ms ease-in-out;
    color: ${green}70;
    height: 50%;
    font-size: ${pxToRem(55)};  
  }
  .course__title {
    font-size: ${pxToRem(30)};
  }
  .overlay {
    display: none;
  }

  @media screen and (max-width: ${pxToRem(1550)}){
    .courses{
      ${layout("grid", { cols: 3, rows: 3, rowsH: pxToRem(300) })}
    }
  }
  @media screen and (max-width: ${pxToRem(1024)}){
    .courses{
      ${layout("grid", { cols: 2, rows: 4, rowsH: pxToRem(250) })}
    }
  }
  @media screen and (max-width: ${pxToRem(768)}){
    .course__card {
      padding: ${pxToRem(10)};
      .course__title {
        font-size: ${pxToRem(25)};
      }
      .course__icons {
        font-size: ${pxToRem(40)};
      }
    }
    .edu__title {
    font-size: ${pxToRem(30)};
    }
  }
  @media screen and (max-width: ${pxToRem(550)}){
    .courses{
      ${layout("grid", { cols: 1, rows: 8, rowsH: pxToRem(200) })}
    }
  }
`;
