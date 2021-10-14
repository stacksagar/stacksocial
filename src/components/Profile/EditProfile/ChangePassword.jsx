import React from "react";
import Input from "../../utilities/input";
import Button from "../../utilities/Button";

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
  return (
    <div className="flex flex-col space-y-5">
      <Layout>
        <Left> Old Password </Left>
        <Right>
          <Input type="password" />
        </Right>
      </Layout>

      <Layout>
        <Left> New Password </Left>
        <Right>
          <Input type="password" />
        </Right>
      </Layout>

      <Layout>
        <Left> Confirm New Password </Left>
        <Right>
          <Input type="password" />
        </Right>
      </Layout>

      <Layout>
        <Left> </Left>
        <Right>
          <Button bg="bg-blue-500" className="py-2" text="Change Password" />
          <br />
          <br />
          <a href="/">Forgot Password</a>
        </Right>
      </Layout>
    </div>
  );
};

export default ChangePassword;
