import styled from "styled-components";
import { pxToRem } from "utils";
import { residentsBG } from "assets";
import { fontFamily } from "constants";
import { layout } from "styles/mixins";
import { colors } from "constants/colors";

const { white, lightGray, darkGray, green } = colors;
const { kanit } = fontFamily;

export default styled.section`
    width: 100%;
    height: calc(100vh - 5rem);
    background-image: url(${residentsBG});
    padding: ${pxToRem(30)};

    .table__wrp {
        width: 100%;
        max-width: ${pxToRem(1200)};
        height: auto;
        padding:  ${pxToRem(20)};
        margin: 0 auto;
        border: ${pxToRem(1)} solid ${lightGray};
        border-radius: ${pxToRem(6)};
        background-color: ${darkGray}c5;
    }
    .thead {
        ${layout("flex")}
        font-family: ${kanit};
        font-size: ${pxToRem(20)};
        color: ${green};
        .th {
            padding: ${pxToRem(10)} ${pxToRem(20)};
            cursor: pointer;
            width: 100%;
            &:first-child {
                max-width: ${pxToRem(120)};
            }
        }
    }
    .tbody {
        color: ${white};
        .tr {
            ${layout("flex")}
            margin: ${pxToRem(10)} 0;
            border-radius: ${pxToRem(4)};
            transition: 300ms ease-out;
            &:hover {
                background-color: ${lightGray};
                cursor: pointer;
            }
            .td {
                text-align: left !important;
                padding: ${pxToRem(10)} ${pxToRem(20)};
                width: 100%;
                font-family: ${kanit};
                font-size: ${pxToRem(22)};
                &:first-child {
                    max-width: ${pxToRem(120)};
                }
            }
        }
    }
    @media screen and (max-width: ${pxToRem(1024)}) {
        .th:first-child, .td:first-child {
            max-width: ${pxToRem(50)} !important;
            padding: 0;
        }
        .th:nth-child(3),
        .th:nth-child(4),
        .td:nth-child(3), 
        .td:nth-child(4) {
            max-width: ${pxToRem(180)};
            padding: ${pxToRem(10)} ${pxToRem(10)} !important;
        }
    }
    @media screen and (max-width: ${pxToRem(700)}) {
        .td, .th {
            font-size: ${pxToRem(16)} !important;
            padding: 0 !important;
        }      
        height: calc(100vh - 3rem);
    }
    @media screen and (max-width: ${pxToRem(550)}) {
        padding: ${pxToRem(20)};
    }
`;
