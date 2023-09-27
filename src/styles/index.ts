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
    ::-webkit-scrollbar {
        width: ${pxToRem(8)};
        background-color: ${green};
    }
    ::-webkit-scrollbar-thumb {
        width: 100%;
        background-color: ${darkGray};
    }
`;
