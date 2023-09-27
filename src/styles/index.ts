import { colors } from "constants/colors";
import { createGlobalStyle } from "styled-components";

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
`;
