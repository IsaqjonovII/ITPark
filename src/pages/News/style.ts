import { fontFamily } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { layout } from "styles/mixins";
import { pxToRem } from "utils";

const { kanit, overpass } = fontFamily;
const { white, green } = colors;

export default styled.div`
  padding: ${pxToRem(40)} ${pxToRem(80)};
  max-width: ${pxToRem(1550)};
  margin: auto;
  .news__header,
  .search__wrp {
    ${layout("flex")}
  }
  .news__header {
    margin-bottom: ${pxToRem(40)};
    .search__wrp {
      width: 100%;
      max-width: ${pxToRem(1050)};
      height: ${pxToRem(50)};
      background-color: ${white}20;
      border-radius: ${pxToRem(6)};
      .search__inp {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: ${pxToRem(20)};
        padding: 0 ${pxToRem(15)};
        color: ${white};
        &:focus {
          border: ${pxToRem(2)} solid ${green}70;
        }
      }
      button {
        all: unset;
        width: ${pxToRem(70)};
        height: 100%;
        font-size: ${pxToRem(24)};
        display: grid;
        place-items: center;
        border-radius: 0 ${pxToRem(6)} ${pxToRem(6)} 0;
        background-color: ${green}70;
        color: ${white};
        cursor: pointer;
      }
    }
  }
  .news__title {
    font-size: ${pxToRem(45)};
    font-family: ${overpass};
    color: ${white};
    margin-right: ${pxToRem(40)};
  }
  .news__cards__wrp {
    width: 100%;
    max-width: ${pxToRem(1550)};
    height: auto;
    margin: auto;
    ${layout("grid", { cols: 3, rows: "auto" })}
    grid-gap: ${pxToRem(20)};
    .news__card {
      padding: ${pxToRem(20)};
      border-radius: ${pxToRem(10)};
      border: ${pxToRem(1)} solid ${green};
      cursor: pointer;
      &:hover {
        h1 {
            color: ${green};
        }
      }
      .card__img {
        width: 100%;
        border-radius: ${pxToRem(10)};
        object-fit: cover;
      }
      .card__content {
        color: ${white};
        font-family: ${kanit};
        margin-bottom: ${pxToRem(20)};
        h2 {
        color: ${white}80;
        font-weight: 300;
        font-size: ${pxToRem(20)};
        }
      }
    }
  }

  @media screen and (max-width: ${pxToRem(1100)}) {
    .news__cards__wrp {
        ${layout("grid", { cols: 2, rows: "auto" })}
    }
    .news__title {
        font-size: ${pxToRem(35)};
    }
}
@media screen and (max-width: ${pxToRem(768)}) {
      padding: ${pxToRem(30)};
    .news__cards__wrp {
        .news__card h1{ 
            font-size: ${pxToRem(18)};
        } 
        .news__card h3 {
            font-size: ${pxToRem(16)};
        }
    }
  }
  @media screen and (max-width: ${pxToRem(550)}) {
    .news__header {
        ${layout("center")}
        .search__wrp {
            width: 100%;
        }
    }
    .news__title {
        font-size: ${pxToRem(25)};
        margin-right: 0;
        margin-bottom: ${pxToRem(20)};
    }
    .news__cards__wrp {
        ${layout("grid", { cols: 1, rows: "auto" })}
    }
}
`;
