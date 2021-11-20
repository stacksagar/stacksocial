import {
  DotsVerticalIcon,
  TrashIcon,
  PencilAltIcon,
  BanIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useRootContext} from "../../../context";

const Button = ({Icon, text, setShowOptions, onClick}) => (
  <button
    onClick={(e) => {
      setShowOptions(false);
      if (onClick) {
        onClick(e);
      }
    }}
    className="flex space-x-2 hover:bg-gray-500 focus:ring-1 p-3  text-left"
  >
    <Icon className="w-4" /> <span>{text}</span>
  </button>
);

const PostHeader = ({post, setShowEdit}) => {
  const {postedBy} = post;
  const {
    dispatch,
    state: {user},
  } = useRootContext();
  const [showOptions, setShowOptions] = useState(false);

  const deletePostHandler = (id) => {
    fetch("/post/delete", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({type: "FETCH_POSTS"});
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-between relative">
      <Link to={`/${postedBy?.username}`}>
        <div className="flex space-x-3">
          <img className="w-8 h-8 rounded-full" src={postedBy?.photo} alt="" />
          <p className="text-gray-300">{postedBy?.username}</p>
        </div>
      </Link>
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-700 focus:ring"
      >
        <DotsVerticalIcon className="w-5" />
      </button>

      {showOptions && (
        <div className="flex flex-col text-xs rounded-sm bg-gray-700 ring-1 absolute right-0 top-8">
          {user._id === postedBy._id ? (
            <>
              <Button
                setShowOptions={setShowOptions}
                onClick={() => deletePostHandler(post._id)}
                Icon={TrashIcon}
                text="Delete Post"
              />
              <Button
                setShowOptions={setShowOptions}
                onClick={() => setShowEdit(true)}
                Icon={PencilAltIcon}
                text="Edit Post"
              />
            </>
          ) : (
            <>
              <Button
                setShowOptions={setShowOptions}
                Icon={BanIcon}
                text="Block"
              />
              <Button
                setShowOptions={setShowOptions}
                Icon={EyeOffIcon}
                text="Not Interested"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PostHeader;
