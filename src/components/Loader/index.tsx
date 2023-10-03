import { useState } from "react";
import { logoGif } from "assets";
import StyledLoader from "./style";
import LazyImage from "components/LazyImage";

const Loader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 0);

  return (
    <StyledLoader>
      <div className={`loader ${isLoading ? "loading" : "not__loading"}`}>
        <LazyImage src={logoGif} />
      </div>
    </StyledLoader>
  );
};

export default Loader;
