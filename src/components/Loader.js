import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import "./css/Loader.css";

const Loader = () => {
  const { isLoading } = useContext(LoadingContext);

  return <section>{isLoading ? <div className="loader"></div> : null}</section>;
};

export default Loader;
