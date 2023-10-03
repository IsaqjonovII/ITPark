import styled from "styled-components";
import { nodata } from "assets";
import { layout } from "styles/mixins";

export default styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  ${layout("center")}
  background-image: url(${nodata});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
