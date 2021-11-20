import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Profile from "./components/Profile";
import {useRootContext} from "./context/index";
import EditProfile from "./components/Profile/EditProfile";
import PrivateRoute from "./components/Routes/PrivateRoute";

const App = () => {
  const {
    dispatch,
    state: {showReg, user, fetchPosts},
  } = useRootContext();

  useEffect(() => {
    const token = localStorage.getItem("stackmedia_token");
    if (!user && token) {
      fetch("/user/getinfo", {
        method: "get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({type: "SET_USER", payload: data.user});
        })
        .catch((error) => alert("error ", error));
    }
  }, [user, dispatch, fetchPosts]);

  return (
    <div style={{background: "#100e17"}} className="text-white">
      <BrowserRouter>
        <Navbar />
        {showReg && <Registration />}
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/:username" component={Profile} />
          <PrivateRoute exact path="/profile/edit" component={EditProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
