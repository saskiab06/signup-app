import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up__content position-relative d-flex flex-column align-items-center ps-1">
      <SignUpForm />
      <Link
        to="/"
        className="mt-5 btn rounded-pill fw-bold bg-primary bg-gradient text-light border-light"
        aria-label="registreeru"
      >
        Registreeru
      </Link>
    </div>
  );
};

export default SignUp;
