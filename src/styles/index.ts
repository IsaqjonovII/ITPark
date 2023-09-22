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
    }
`