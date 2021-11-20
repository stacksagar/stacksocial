import React, {useEffect, useState} from "react";
import Input from "../../utilities/input";
import Button from "../../utilities/Button";
import {useRootContext} from "../../../context";
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

const Profile = () => {
  const {
    dispatch,
    state: {user},
  } = useRootContext();
  const [updateText, setUpdateText] = useState("Update");

  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setUpdateText("Update");
  }, [username, displayName, email, website, bio]);

  useEffect(() => {
    setUsername(user?.username || "");
    setDisplayName(user?.displayName || "");
    setEmail(user?.email || "");
    setWebsite(user?.website || "");
    setBio(user?.bio || "");
  }, [user]);

  const updateProfile = () => {
    fetch(keys.BACKEND_URL + "/user/update", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        displayName,
        username,
        website,
        email,
        bio,
      }),
    })
      .then((res) => res.json())
      .then(({user}) => {
        dispatch({type: "SET_USER", payload: user});
        setUpdateText("Updated");
      })
      .catch(console.log);
  };

  return (
    <div className="flex flex-col space-y-5">
      <Layout>
        <Left>
          <img
            className="w-9 h-9 rounded-full object-cover object-center "
            src={user?.photo}
            alt=""
          />
        </Left>
        <Right>
          <p className="font-semibold">{user?.displayName || user?.username}</p>
          <button className="font-medium text-xs text-blue-300 cursor-pointer">
            Change Profile Photo
          </button>
        </Right>
      </Layout>

      <Layout>
        <Left> Display Name </Left>
        <Right>
          <Input
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            value={displayName}
          />
        </Right>
      </Layout>

      <Layout>
        <Left> Username </Left>
        <Right>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            value={username}
          />
          <small className="w-42 my-3 text-gray-300">
            In most cases, you'll be able to change your username back to for
            another 14 days.
          </small>
        </Right>
      </Layout>

      <Layout>
        <Left> Email </Left>
        <Right>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <Input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Right>
      </Layout>
      <Layout>
        <Left> Bio </Left>
        <Right>
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            className="w-full h-32 bg-gray-700 focus:bg-black focus:ring outline-none p-3 rounded"
          ></textarea>
        </Right>
      </Layout>

      <Layout>
        <Left></Left>
        <Right>
          <button
            onClick={updateProfile}
            className="text-sm focus:ring font-normal py-2 px-3 rounded bg-blue-500"
          >
            {updateText}
          </button>
        </Right>
      </Layout>
    </div>
  );
};

export default Profile;
