import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import Reply from "./Reply";

const Comment = ({comment: {body, user, _id}}) => {
  const replyInput = useRef();
  const replyBtn = useRef();

  const [openReply, setOpenReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [allReplies, setAllReplies] = useState([]);

  useEffect(() => {
    fetch(`/post/replies/${_id}`, {
      method: "get",
    })
      .then((r) => r.json())
      .then((data) => {
        setAllReplies(data.replies);
      })
      .catch(console.log);
  }, [_id]);

  const replyHandler = (e) => {
    e.preventDefault();
    fetch("/post/reply", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        _id,
        text: replyText,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        replyBtn.current.focus();
        setReplyText("");
        setAllReplies((prev) => [...prev, {...data.reply}]);
      })
      .catch(console.log);
  };

  return (
    <>
      <div className="flex items-start space-x-2">
        <Link to="/profile">
          <img
            src={user?.photo}
            alt=""
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </Link>
        <div>
          <div className="bg-gray-500 bg-opacity-20 px-2 py-1 rounded">
            <Link to="/profile">
              <p className="font-semibold text-sm cursor-pointer text-blue-300 hover:underline">
                {user?.username}
              </p>
            </Link>
            <p className="text-xs font-medium p-1">{body}</p>
          </div>
          <div className="pl-2">
            <button className="text-xs font-semibold hover:underline">
              Like
            </button>
            <button
              onClick={() => {
                setOpenReply((prev) => !prev);
                setTimeout(() => {
                  replyInput.current?.focus();
                }, 50);
              }}
              className="text-xs font-semibold hover:underline mx-3"
            >
              Reply
            </button>
            <small>6h</small>
          </div>
        </div>
      </div>

      {allReplies.map((reply) => (
        <Reply username={user?.username} key={reply._id} reply={reply} />
      ))}

      {openReply && (
        <form onSubmit={replyHandler}>
          <input
            ref={replyInput}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder={`your reply...`}
            className="p-2 ml-5 mr-2 bg-gray-600 text-xs focus:bg-gray-700 rounded focus:ring outline-none"
          />
          <button
            ref={replyBtn}
            type="submit"
            onClick={replyHandler}
            className="p-2 text-xs rounded outline-none focus:ring bg-gray-700"
          >
            Reply
          </button>
        </form>
      )}
    </>
  );
};

export default Comment;
