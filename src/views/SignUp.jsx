import React from "react";
import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up__content position-relative d-flex flex-column align-items-center">
      <SignUpForm />
      <Link
        to="/"
        className="mb-2 btn rounded-pill fw-bold bg-primary text-light border-light"
        aria-label="registreeru"
      >
        Registreeru
      </Link>
    </div>
  );
};

export default SignUp;
