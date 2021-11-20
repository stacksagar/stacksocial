import React from "react";
import Input from "../utilities/input";
import withFetch from "./handleFetch";
import SubmitBtn from "./SubmitBtn";

const Signin = ({handleInput, handleForm, error, errors, loading}) => {
  return (
    <form onSubmit={handleForm}>
      <small className="text-red-400 mt-3 block">{error && error}</small>
      <Input onChange={handleInput} type="text" name="username" />
      <Input onChange={handleInput} type="password" name="password" />

      <a href="/" className="my-3 inline-block text-xs text-blue-400">
        Forgot Password
      </a>
      <SubmitBtn text="Sign in" loading={loading} />
    </form>
  );
};

export default withFetch(
  Signin,
  "https://stacksocial-backend.herokuapp.com/user/signin"
);
