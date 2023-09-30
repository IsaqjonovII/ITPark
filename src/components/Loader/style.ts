import { colors } from "constants/colors";
import styled from "styled-components";

const { darkGray } = colors;
export default styled.div`
  .loading {
    width: 100%;
    height: 100vh;
    background-color: ${darkGray};
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 9999;
  }
  .not__loading {
    display: none;
  }
`;
