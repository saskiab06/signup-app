import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="frontpage__btns position-relative d-flex flex-column align-items-center">
      <div className="row flex-row-reverse justify-content-center w-75">
        <Link
          to="/signup"
          className="col mb-3 ms-n1 btn rounded-pill fw-bold 
             bg-light text-primary border-primary"
          aria-label="loo konto"
        >
          Loo konto
        </Link>
        <span className="col-1 bird-icon position-relative"></span>
      </div>
      <div className="row flex-row-reverse justify-content-center w-75">
        <Link
          to="/"
          className="col ms-n1 btn rounded-pill fw-bold 
          bg-transparent text-light border-light"
          aria-label="logi sisse"
        >
          Logi sisse
        </Link>
        <span className="col-1"></span>
      </div>
    </div>
  );
};

export default FrontPage;
