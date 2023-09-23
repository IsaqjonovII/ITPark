import { BG } from "assets";
import { colors } from "constants/colors";
import { createGlobalStyle } from "styled-components";

const { darkGray } = colors;
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
`;
