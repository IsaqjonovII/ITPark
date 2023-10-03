import styled from "styled-components";
import { notfound } from "assets";

export default styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-image: url(${notfound});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
