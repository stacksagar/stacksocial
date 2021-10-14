import React from "react";
import DisplayHomeData from "./DisplayHomeData";
import UnauthUser from "./UnauthUser";
import {useRootContext} from "../../context";

const Home = () => {
  const {
    state: {user},
  } = useRootContext();
  return (
    <div className="full flex justify-center items-center h-minus_header  overflow-y-auto">
      {user ? <DisplayHomeData /> : <UnauthUser />}
    </div>
  );
};

export default Home;
