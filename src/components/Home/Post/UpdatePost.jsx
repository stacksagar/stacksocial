import React, {useState} from "react";
import {useRootContext} from "../../../context";

const UpdatePost = ({post, showEdit, setShowEdit}) => {
  const [body, setBody] = useState(post?.body);
  const [loading, setLoading] = useState(false);
  const {dispatch} = useRootContext();

  const updatehandle = (_id) => {
    setLoading(true);
    fetch("post/update", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: "FETCH_POSTS"});
        setShowEdit(false);
        setLoading(false);
      })
      .catch((error) => {
        dispatch({type: "FETCH_POSTS"});
        setShowEdit(false);
        setLoading(false);
      });
  };

  return (
    <div
      className={`${
        showEdit ? "flex" : "hidden"
      } w-full z-50 bg-opacity-30 h-full items-center justify-center p-4 rounded  fixed inset-0 bg-black`}
    >
      <div className="w-96 p-4 rounded bg-gray-600">
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="outline-none bg-gray-700 focus:ring-2 ring-1 p-2 rounded h-32 w-full"
        />

        <div className="flex justify-between">
          <button
            onClick={() => setShowEdit(false)}
            className="flex items-center justify-evenly space-x-3 px-3 mt-4 py-1 bg-pink-500 text-white rounded outline-none focus:ring"
          >
            Cencel
          </button>
          <button
            onClick={() => updatehandle(post._id)}
            className={`flex items-center justify-evenly space-x-3 px-3 mt-4  py-1 bg-blue-500 text-white rounded outline-none focus:ring`}
          >
            <span>Update</span>
            {loading && (
              <span
                style={{borderTopColor: "transparent"}}
                className="border-4 w-5 h-5 rounded-full animate-spin"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
