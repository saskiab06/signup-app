import React from "react";

const SignUpForm = () => {
  return (
    <form className="d-flex flex-column">
      <label htmlFor="id" className="text-uppercase small">
        Isikukood
      </label>
      <input
        id="id"
        type="number"
        inputMode="numeric"
        className="mb-4 p-1 rounded-pill border-1 border-dark bg-light lh-1"
      />
      <label htmlFor="email" className="text-uppercase small">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        inputMode="email"
        className="mb-1 p-1 rounded-pill border-1 border-dark bg-light lh-1"
      />
      <p className="small">
        E-maili kasutatakse vajadusel teavituste saatmiseks
      </p>
    </form>
  );
};

export default SignUpForm;
