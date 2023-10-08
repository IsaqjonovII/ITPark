import { fontFamily } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { layout } from "styles/mixins";
import { pxToRem } from "utils";

const { white, green } = colors;
const { kanit, overpass } = fontFamily;

export default styled.div`
  width: 100%;
  max-width: ${pxToRem(1550)};
  padding: ${pxToRem(50)};
  color: ${white};
  margin: auto;
  .main {
    ${layout("flex")}
    .banner__img {
        width: 50%;
        position: relative;
        margin-right: ${pxToRem(50)};
        border-radius: ${pxToRem(30)};
        border: ${pxToRem(5)} solid ${green};
    }
  }
  .logo__wrp {
      ${layout("flex")}
      max-width: ${pxToRem(350)};
      justify-content: start;
      .logo {
          width: 100%;
          max-width: ${pxToRem(100)};
          margin-right: ${pxToRem(20)};
        }
        h1 {
            font-size: ${pxToRem(43)};
            font-family: ${kanit};
            line-height: .7;
            span {
                font-size: ${pxToRem(16)};
                text-transform: uppercase;
            }
        }
    }
    .about__text {
        font-size: ${pxToRem(23)};
        font-family: ${kanit};
        margin-bottom: ${pxToRem(20)};
        line-height: 1.3;
  }
  .section__title {
    font-size: ${pxToRem(45)};
    font-family: ${overpass};
    margin: ${pxToRem(20)} 0;
  }
  .section {
    margin: ${pxToRem(30)} 0;
  }
`;
