import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Input from "../utils/input";

const Form = ({ singinHandler, stateHandler, loading, errors }) => {
  return (
    <form
      onSubmit={singinHandler}
      className="w-96 p-5 rounded border-2 border-gray-300 flex flex-col space-y-3"
    >
      <Input
        error={errors?.email}
        onChange={stateHandler}
        name="email"
        type="email"
        placeholder="Your Email"
      />
      <Input
        error={errors?.password}
        onChange={stateHandler}
        name="password"
        type="password"
        placeholder="Your Password"
      />
      <Button loading={loading} text="Sign In" />

      <p>
        Don't have an account
        <span className="underline text-blue-600 ml-2">
          <Link to="/signup">create one!</Link>
        </span>
      </p>
    </form>
  );
};

export default Form;
