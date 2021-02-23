import React from "react";

const SignUpForm = () => {
  return (
    <form className="d-flex flex-column">
      <label htmlFor="id" className="text-uppercase">
        Isikukood
      </label>
      <input
        id="id"
        type="number"
        className="mb-3 p-1 rounded-pill border-1 border-dark"
      />
      <label htmlFor="email" className="text-uppercase">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        className="mb-1 p-1 rounded-pill border-1 border-dark"
      />
      <p className="small">
        E-maili kasutatakse vajadusel teavituste saatmiseks
      </p>
    </form>
  );
};

export default SignUpForm;
