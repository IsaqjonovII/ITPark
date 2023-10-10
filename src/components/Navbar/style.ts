import styled from "styled-components";
import { pxToRem } from "utils";
import { layout } from "styles/mixins";
import { colors } from "constants/colors";
import { fontFamily, fontSize } from "constants";

const { borderGray, gray, white, lightGreen } = colors;
const { sm, md, xxl } = fontSize;
const { kanit } = fontFamily;
export default styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${gray}30;
  backdrop-filter: blur(8px) brightness(1) contrast(1) grayscale(0)
    hue-rotate(0) invert(0) opacity(1) saturate(1) sepia(0);
  border-bottom: ${pxToRem(1)} solid ${borderGray}10;
  padding: 0 ${pxToRem(40)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  ${layout("flex")}
  .nav__container {
    width: 100%;
    max-width: ${pxToRem(1550)};
    ${layout("flex")}
    margin: 0 auto;
  }

  .logo__wrp {
      ${layout("flex")}
      max-width: ${pxToRem(350)};
      justify-content: start;
      color: ${white};
      max-height: 5rem;
      .logo {
          width: 100%;
          max-width: ${pxToRem(70)};
          margin-right: ${pxToRem(10)};
        }
        h1 {
            font-size: ${pxToRem(33)};
            font-family: ${kanit};
            line-height: .7;
            font-weight: 400;
            span {
                font-size: ${pxToRem(13)};
                text-transform: uppercase;
            }
        }
    }
  .nav__menu {
    ${layout("flex")}
    font-family: ${kanit};
    font-size: ${pxToRem(20)};
    color: ${white};
    width: auto;
    height: ${xxl};
    padding: 0 ${md};
    .menu__link {
      margin: 0 ${pxToRem(20)};
      position: relative;
      transition: color 300ms ease-in-out;
      a {
        padding: ${sm} 0;
        ${layout("flex")}
      }
      &::before {
        content: "";
        position: absolute;
        bottom: ${pxToRem(8)};
        left: 0;
        width: 100%;
        height: ${pxToRem(2)};
        background-color: ${lightGreen};
        transform: scaleX(0);
        transform-origin: left;
        transition: 600ms ease-in-out;
      }
      &:hover::before {
        transform: scaleX(1.3);
        transition: 250ms ease-in-out;
      }
      &:hover {
        color: ${lightGreen};
        transition: 200ms ease-in-out;
      }
    }
  }
  .lang__select {
    border: ${pxToRem(1)};
    padding: ${pxToRem(8)} ${pxToRem(15)};
    font-size: ${pxToRem(17)};
    font-family: ${kanit};
    background-color: transparent;
    color: ${lightGreen};
    outline: #30d70f;
    option {
      border: none;
      background-color: ${gray};
    }
    margin-right: ${pxToRem(20)};
  }
  .nav__right {
    display: none;
  }
  @media screen and (max-width: ${pxToRem(1150)}) {
    .nav__menu {
      .menu__link {
        margin: 0 ${pxToRem(10)};
      }
    }
  }
  @media screen and (max-width: ${pxToRem(1024)}) {
    .nav__menu {
      display: none;
    }
    .nav__right {
    ${layout("flex")}
    .bars {
      color: ${white};
    }
    }
  }
  @media (max-width: ${pxToRem(550)}) {
    padding: 0 ${pxToRem(15)};
  
      .logo__img {
        max-width: ${pxToRem(45)};
      }
      .logo__text {
        font-size:${pxToRem(25)};
        span {
          font-size: ${pxToRem(16)};
        }
      }
  
  }
`;
