import React, {useState} from "react";
import {useRootContext} from "../../context";
import keys from "../utilities/keys";

const withFetch = (WrappedComponent, fetchPath) => {
  return () => {
    const {dispatch} = useRootContext();
    const [formdata, setFormdata] = useState({});
    const [error, setError] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInput = (e, photo) => {
      if (photo) {
        setFormdata((prev) => ({
          ...prev,
          photo,
        }));
      }

      if (e) {
        const {
          target: {name, value},
        } = e;
        if (value.length < 0) {
          setErrors((prev) => ({...prev, [name]: "required!"}));
        } else {
          setErrors((prev) => ({...prev, [name]: null}));
        }

        setFormdata((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };

    const whenSubmitCompleted = (data) => {
      setLoading(false);
      if (data?.errors) {
        setErrors(data.errors);
        return;
      }
      if (data?.error) {
        setError(data.error);
        return;
      }
      localStorage.setItem("stackmedia_token", data.token);
      dispatch({type: "TOGGLE_REG"});
      dispatch({type: "SET_USER", payload: data.user});
    };

    const handleForm = (e) => {
      setLoading(true);
      e.preventDefault();

      fetch(keys.BACKEND_URL + fetchPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formdata,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          whenSubmitCompleted(data);
        })
        .catch((error) => console.log(error));
    };

    return (
      <WrappedComponent
        error={error}
        errors={errors}
        loading={loading}
        handleInput={handleInput}
        handleForm={handleForm}
      />
    );
  };
};

export default withFetch;
