import { BG, BG2 } from "assets";
import { colors } from "constants/colors";
import { createGlobalStyle } from "styled-components";
import { pxToRem } from "utils";

const { darkGray, green } = colors;
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${darkGray};
        background-image: url(${BG});
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul, li {
        color: inherit;
        list-style-type: none;
    }
    ::selection {
        background-color: ${green}40;
    }
    @media (max-width: ${pxToRem(678)}) {
        body {
            background-image: url(${BG2});
        }
    }
`;
