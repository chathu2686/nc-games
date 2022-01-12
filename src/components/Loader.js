import "./css/Loader.css";

const Loader = ({ isLoading }) => {
  return <section>{isLoading ? <div className="loader"></div> : null}</section>;
};

export default Loader;
