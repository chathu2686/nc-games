import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const Nopath = () => {
  const { setIsLoading } = useContext(LoadingContext);

  setIsLoading(false);
  return <div>Error! Non-existent path!!!</div>;
};

export default Nopath;
