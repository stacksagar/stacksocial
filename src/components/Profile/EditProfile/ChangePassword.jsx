import React, {useState} from "react";
import Input from "../../utilities/input";
import Button from "../../utilities/Button";
import keys from "../../utilities/keys";

const Left = ({children}) => (
  <div className="w-80 text-right flex justify-end pr-3">{children}</div>
);
const Right = ({children}) => (
  <div className="w-full flex flex-col items-start justify-center pl-3">
    {children}
  </div>
);

const Layout = ({children}) => (
  <div className="flex items-start justify-center">{children}</div>
);

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [btnText, setBtnText] = useState("Change Password");
  const changePassword = () => {
    fetch(keys.BACKEND_URL + "/user/changePassword", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        console.log(data);
        setBtnText("Changed");
      })
      .catch(console.log);
  };

  return (
    <div className="flex flex-col space-y-5">
      <Layout>
        <Left> Old Password </Left>
        <Right>
          <Input
            value={oldPassword}
            onChange={(e) => {
              setBtnText("Change Password");
              setOldPassword(e.target.value);
            }}
            type="password"
          />
        </Right>
      </Layout>

      <Layout>
        <Left> New Password </Left>
        <Right>
          <Input
            value={newPassword}
            onChange={(e) => {
              setBtnText("Change Password");
              setNewPassword(e.target.value);
            }}
            type="password"
          />
        </Right>
      </Layout>

      <Layout>
        <Left> </Left>
        <Right>
          <Button
            onClick={changePassword}
            bg="bg-blue-500"
            className="py-2"
            text={btnText}
          />
          <br />
          <br />
          <a href="/">Forgot Password</a>
        </Right>
      </Layout>
    </div>
  );
};

export default ChangePassword;
