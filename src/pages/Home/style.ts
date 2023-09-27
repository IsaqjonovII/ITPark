import { fontFamily } from "constants";
import { colors } from "constants/colors";
import styled from "styled-components";
import { pxToRem } from "utils";

const { lightGray, lightGreen } = colors;
const { overpass } = fontFamily;
export default styled.main`
    width: 100%;
    height: calc(100vh - 8rem);
    display: grid;
    place-items: center;
    padding-bottom: 5rem;
    .main__title {
        font-size: calc(${pxToRem(20)} + 3vw);
        font-family: ${overpass};
        text-align: center;
        color: transparent;
        font-weight: 700;
        -webkit-text-stroke: ${pxToRem(0.001)} ${lightGreen};
        text-shadow: 
        ${pxToRem(0.1)} ${pxToRem(0.1)} ${pxToRem(0)} ${lightGray},
        ${pxToRem(0.5)} ${pxToRem(0.5)} ${pxToRem(0)} ${lightGray},
        ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(0)} ${lightGray}, 
        ${pxToRem(2)} ${pxToRem(2)} ${pxToRem(0)} ${lightGray},
        ${pxToRem(3)} ${pxToRem(3)} ${pxToRem(0)} ${lightGray},
        ${pxToRem(4)} ${pxToRem(4)} ${pxToRem(0)} ${lightGray},
        ${pxToRem(5)} ${pxToRem(5)} ${pxToRem(0)} ${lightGray},
        ${pxToRem(6)} ${pxToRem(6)} ${pxToRem(0)} ${lightGray};
    }

`