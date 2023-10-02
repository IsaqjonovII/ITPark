import { useEffect, useState } from "react";
import StyledLoader from "./style";
import { logoGif } from "assets";

const Loader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);
  return (
    <StyledLoader>
      <div className={isLoading ? "loading" : "not__loading"}>
        <img src={logoGif} alt="" />
      </div>
    </StyledLoader>
  );
};

export default Loader;
