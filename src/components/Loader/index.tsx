import React from "react";
import { logoMP4 } from "assets";
import StyledLoader from "./style";

type TLoader = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const Loader = ({ isLoading, setIsLoading }: TLoader) => {
  return (
    <StyledLoader>
      <div className={`loader ${isLoading ? "loading" : "not__loading"}`}>
        <video
          className="loader__video"
          src={logoMP4}
          muted
          autoPlay
          onEnded={() => setIsLoading(false)}
        ></video>
      </div>
    </StyledLoader>
  );
};

export default Loader;
