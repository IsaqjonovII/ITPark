import styled from "styled-components";
import { colors } from "constants/colors";
import { pxToRem } from "utils";
import { layout } from "styles/mixins";
import { fontFamily, fontSize } from "constants";

const { borderGray, gray, white } = colors;
const { md, lg } = fontSize;
const { kanit } = fontFamily;
export default styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${gray}80;
  backdrop-filter: blur(8px) brightness(1) contrast(1) grayscale(0)
    hue-rotate(0) invert(0) opacity(1) saturate(1) sepia(0);
  border-bottom: ${pxToRem(1)} solid ${borderGray}10;
  padding: 0 ${pxToRem(40)};
  ${layout("flex")}
  .nav__container {
    width: 100%;
    max-width: ${pxToRem(1550)};
    ${layout("flex")}
  }
  color: #30d70f;

  .nav__logo {
    width: 100%;
    height: 100%;
    max-width: ${pxToRem(215)};
    padding: 0 ${pxToRem(8)};
    user-select: none;
    ${layout("flex")}
    .logo__img {
      width: 100%;
      max-width: ${pxToRem(70)};
      height: 90%;
      object-fit: cover;
    }
    .logo__text {
      color: ${white};
      font-size: ${lg};
      line-height: 0.68;
      font-family: ${kanit};
      span {
        font-size: ${md};
        font-weight: 300;
      }
    }
    &:hover {
      cursor: pointer;
      .logo__img {
        filter: drop-shadow(0 ${pxToRem(0)} ${pxToRem(10)} ${white}30);
      }
      .logo__text {
        text-shadow: 0 ${pxToRem(2)} ${pxToRem(100)} ${white};
      }
    }
  }
`;
