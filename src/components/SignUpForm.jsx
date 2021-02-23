import React from "react";

const SignUpForm = () => {
  return (
    <form>
      <label htmlFor="id">Isikukood</label>
      <input id="id" type="number" />
      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" />
      <p>E-maili kasutatakse vajadusel teavituste saatmiseks</p>
    </form>
  );
};

export default SignUpForm;
