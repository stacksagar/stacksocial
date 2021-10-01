import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import Input from "../utils/input";

const Form = ({ singupHandler, errors, stateHandler, loading }) => {
  return (
    <form
      onSubmit={singupHandler}
      className="w-96 p-5 rounded border-2 border-gray-300 flex flex-col space-y-3"
    >
      <Input
        error={errors?.name}
        onChange={stateHandler}
        name="name"
        placeholder="Your Name"
      />
      <Input
        error={errors?.username}
        onChange={stateHandler}
        name="username"
        placeholder="Username"
      />
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
        placeholder="New Password"
      />
      <Input
        error={errors?.confirmPassword}
        onChange={stateHandler}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <Button loading={loading} text="Sign up" />
      <p>
        Already have an account
        <span className="underline text-blue-600 ml-2">
          <Link to="/signin">login</Link>
        </span>
      </p>
    </form>
  );
};

export default Form;
