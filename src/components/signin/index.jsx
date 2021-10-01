import axios from "axios";
import React, { useState } from "react";
import Form from "./Form";
import { useRootContext } from "../../contexts/rootContext";
import { useHistory } from "react-router";

const Signin = () => {
  const history = useHistory();
  const { dispatch } = useRootContext();

  const [state, setState] = useState({});
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const stateHandler = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value.length > 0) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: `${e.target.name} is required`,
      }));
    }
  };

  const singinHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:1000/auth/signin",
      data: state,
    }).then(({ data: { errors, results } }) => {
      setLoading(false);
      if (results) {
        history.push("/");
        dispatch({
          type: "SET_USER",
          payload: results,
        });
      } else {
        setErrors(errors);
      }
    });
  };

  return (
    <div className="w-full min-h-minus_header w-full bg-gray-50 flex items-center justify-center">
      <Form
        singinHandler={singinHandler}
        stateHandler={stateHandler}
        loading={loading}
        errors={errors}
      />
    </div>
  );
};

export default Signin;
