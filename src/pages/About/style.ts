import { fontFamily } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { layout } from "styles/mixins";
import { pxToRem } from "utils";

const { white } = colors;
const { kanit } = fontFamily;

export default styled.div`
  width: 100%;
  max-width: ${pxToRem(1550)};
  padding: ${pxToRem(50)};
  color: ${white};
  .main {
    ${layout("flex")}
    .banner__img {
        width: 50%;
        margin-right: ${pxToRem(30)};
    }
  }
  .logo__wrp {
      ${layout("flex")}
      max-width: ${pxToRem(350)};
      justify-content: center;
      margin: auto;
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
        text-align: center;
        font-family: ${kanit};
        margin-bottom: ${pxToRem(20)};
        line-height: 1.3;
  }
`;
