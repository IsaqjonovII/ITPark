import { useEffect, useState } from "react";
import { logoMP4 } from "assets";
import StyledLoader from "./style";

const Loader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    isLoading
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isLoading]);
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
