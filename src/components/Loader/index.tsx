import { useState } from "react";
import StyledLoader from "./style";
import LazyImage from "components/LazyImage";
import { LOGO } from "assets";

const Loader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 600);

  return (
    <StyledLoader>
      <div className={`loader ${isLoading ? "loading" : "not__loading"}`}>
        <div>
          <LazyImage className="loader__img" src={LOGO} />
          <h1>IT Park</h1>
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
