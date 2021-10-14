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

const Profile = () => {
  return (
    <div className="flex flex-col space-y-5">
      <Layout>
        <Left>
          <img
            className="w-9 h-9 rounded-full object-cover object-center "
            src="https://pbs.twimg.com/profile_images/1445641158554648585/OG07L9Wa_400x400.jpg"
            alt=""
          />
        </Left>
        <Right>
          <p className="font-semibold">John Doe</p>
          <button className="font-medium text-xs text-blue-300 cursor-pointer">
            Change Profile Photo
          </button>
        </Right>
      </Layout>

      <Layout>
        <Left> Display Name </Left>
        <Right>
          <Input type="text" />
        </Right>
      </Layout>

      <Layout>
        <Left> Username </Left>
        <Right>
          <Input type="text" />
          <small className="w-80 my-3 text-gray-300">
            In most cases, you'll be able to change your username back to for
            another 14 days.
          </small>
        </Right>
      </Layout>

      <Layout>
        <Left> Email </Left>
        <Right>
          <Input type="text" />
          <Button
            bg="bg-green-500"
            className="text-xs mt-2"
            text="Confirm Email"
          />
        </Right>
      </Layout>

      <Layout>
        <Left> Website </Left>
        <Right>
          <Input type="text" />
        </Right>
      </Layout>
      <Layout>
        <Left> Bio </Left>
        <Right>
          <textarea
            name="bio"
            className="w-full h-32 bg-gray-700 focus:bg-black focus:ring outline-none p-3 rounded"
          ></textarea>
        </Right>
      </Layout>

      <Layout>
        <Left></Left>
        <Right>
          <button className="text-sm focus:ring font-normal py-2 px-3 rounded bg-blue-500">
            Update
          </button>
        </Right>
      </Layout>
    </div>
  );
};

export default Profile;
