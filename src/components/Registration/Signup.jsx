import React from "react";
import Input from "../utilities/input";
import UploadPhoto from "../utilities/UploadPhoto";
import withFetch from "./handleFetch";
import SubmitBtn from "./SubmitBtn";

const Signup = ({handleForm, handleInput, error, errors, loading}) => {
  return (
    <form onSubmit={handleForm}>
      <UploadPhoto handleInput={handleInput} />

      <Input
        error={errors?.username}
        onChange={handleInput}
        type="text"
        name="username"
      />
      <Input
        error={errors?.email}
        onChange={handleInput}
        type="email"
        name="email"
      />
      <Input
        error={errors?.password}
        onChange={handleInput}
        type="password"
        name="password"
      />
      <Input
        error={errors?.confirmPassword}
        onChange={handleInput}
        type="password"
        name="confirmPassword"
      />

      <p className="text-xs my-3">
        By clicking Sign Up, you are indicating that you have read and
        acknowledge
        <span className="text-blue-400 mx-1 cursor-pointer">
          the Terms of Service
        </span>
        and
        <span className="text-blue-400 mx-1 cursor-pointer">
          Privacy Notice
        </span>
      </p>

      <SubmitBtn text="Sign up" loading={loading} />
    </form>
  );
};

export default withFetch(Signup, "/user/signup");
