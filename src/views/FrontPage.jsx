import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="frontpage__btns position-relative d-flex flex-column align-items-center">
      <Link
        to="/signup"
        className="mb-2 btn rounded-pill fw-bold 
             bg-light text-primary border-primary"
        aria-label="loo konto"
      >
        Loo konto
      </Link>
      <Link
        to="/"
        className="mb-2 btn rounded-pill fw-bold 
          bg-transparent text-light border-light"
        aria-label="logi sisse"
      >
        Logi sisse
      </Link>
    </div>
  );
};

export default FrontPage;
