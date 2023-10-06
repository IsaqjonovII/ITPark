import { colors } from "constants/colors";
import { createGlobalStyle } from "styled-components";
import { pxToRem } from "utils";

const { darkGray, green } = colors;
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
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
    .app {
        position: relative;
    }
    .container__nav {
        height: 5rem;
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 99;
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
