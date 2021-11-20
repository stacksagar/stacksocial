import React, {useEffect, useState} from "react";
import {useRootContext} from "../../../../context";
import keys from "../../../utilities/keys";
import AllComments from "./AllComments";
import NewComment from "./NewComment";

const Comments = ({postID}) => {
  const {dispatch} = useRootContext();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let mount = true;
    fetch(keys.BACKEND_URL + `/post/comments/${postID}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (mount) {
          setComments(data?.comments);
        }
      })
      .catch((error) => console.log("error ", error));
    return () => (mount = false);
  }, [postID]);

  const addComment = (e, submitBtn) => {
    e.preventDefault();
    const value = e.target[0].value;
    if (!value) return;
    submitBtn.current.focus();

    fetch(keys.BACKEND_URL + "/post/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("stackmedia_token"),
      },
      body: JSON.stringify({
        _id: postID,
        text: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments((prev) => [...prev, data.comment]);
        dispatch({type: "FETCH_POSTS"});
      })
      .catch((error) => console.log(error));

    e.target[0].value = "";
  };

  return (
    <>
      <NewComment addComment={addComment} />
      <AllComments comments={comments} />
    </>
  );
};

export default Comments;
