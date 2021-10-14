import React, {useState} from "react";
import ChangePassword from "./ChangePassword";
import LoginActivity from "./LoginActivity";
import Profile from "./Profile";

const Button = ({text, active, ...all}) => (
  <button
    {...all}
    className={`border-l-4  ${
      active === text ? "text-blue-300 border-blue-300" : "border-transparent"
    } text-left px-3`}
    style={{marginLeft: "-2.5px"}}
  >
    {text}
  </button>
);

const EditProfile = () => {
  const [current, setCurrent] = useState("Edit Profile");
  return (
    <div style={{padding: "25px"}} className="flex min-h-minus_header">
      <div className="w-80 py-5 bg-gray-900 border border-gray-500 flex flex-col space-y-3">
        <Button
          onClick={(e) => setCurrent(e.target.innerText)}
          active={current}
          text="Edit Profile"
        />
        <Button
          onClick={(e) => setCurrent(e.target.innerText)}
          active={current}
          text="Change Password"
        />
        <Button
          onClick={(e) => setCurrent(e.target.innerText)}
          active={current}
          text="Activity"
        />
      </div>
      <div className="border border-l-0 bg-gray-900 border-gray-500 overflow-y-auto w-full max-h-minus_header_dbl p-12">
        {current === "Edit Profile" && <Profile />}
        {current === "Change Password" && <ChangePassword />}
        {current === "Activity" && <LoginActivity />}
      </div>
    </div>
  );
};

export default EditProfile;
