import styled from "styled-components";
import { colors } from "constants/colors";
import { pxToRem } from "utils";

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
    text-align: center;
  }
  .loader__video {
    width: 100%;
    max-width: ${pxToRem(450)};
    object-fit: contain;
  }
  .not__loading {
    display: none;
  }
`;
