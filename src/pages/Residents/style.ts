import styled from "styled-components";
import { pxToRem } from "utils";
import { residentsBG } from "assets";
import { fontFamily } from "constants";
import { layout } from "styles/mixins";
import { colors } from "constants/colors";

const { white, green } = colors;
const { kanit, overpass, roboto } = fontFamily;

export default styled.div`
background-image: url(${residentsBG});
background-attachment: fixed;
height: auto;
min-height: 90vh;
  .pros__title {
    padding: ${pxToRem(100)} ${pxToRem(50)};
    text-align: center;
    font-family: ${overpass};
    color: ${white};
    font-size: ${pxToRem(30)};
    max-width: ${pxToRem(1000)};
    line-height: 1.2;
    margin: 0 auto;
    font-weight: 300;
  }
  .pros__cards {
    ${layout("grid", { cols: 4, rows: 1 })}
    max-width: ${pxToRem(1000)};
    margin: 0 auto;
    .card {
      padding: ${pxToRem(20)};
      text-align: center;
      margin: 0 ${pxToRem(10)};
      &:last-child {
        width: ${pxToRem(320)};
      }
      .text {
        font-family: ${roboto};
        color: ${white};
        font-size: ${pxToRem(20)};
      }
      .indicator {
        font-size: ${pxToRem(30)};
        line-height: 1.5;
        font-weight: 800;
        font-family: ${kanit};
        color: ${green};
        text-shadow: 0 0 ${pxToRem(3)} ${green};
      }
    }
  } 
  @media screen and (max-width: ${pxToRem(1024)}) {
    .pros__cards {
        ${layout("grid", { cols: 2, rows: 2 })}
        .card:last-child {
            width: 100%;
        }
        .card {
            .text {
                font-size: ${pxToRem(17)};
            }
        }
    }
    .pros__title {
        padding: ${pxToRem(50)};
        font-size: ${pxToRem(25)};
    }
  }
  @media screen and (max-width: ${pxToRem(678)}) {
    .pros__cards {
        ${layout("grid", { cols: 1, rows: 4 })}
        .card {
            padding: 0;
            .text {
                font-size: ${pxToRem(18)};
            }
        }
        .card:last-child {
            width: 100%;
        }
    }
    .pros__title {
        margin-bottom: ${pxToRem(50)};
        padding: ${pxToRem(20)};
        font-size: ${pxToRem(20)};
    }
  }
`;
