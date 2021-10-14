import React, {useRef} from "react";
import {useRootContext} from "../../../../context";

const NewComment = ({addComment}) => {
  const submitBtn = useRef();
  const {
    state: {user},
  } = useRootContext();

  return (
    <div className="flex mt-9 mb-2">
      <img src={user?.photo} alt="" className="w-7 h-7 rounded-full" />
      <form
        className="flex w-full mx-3 space-x-3"
        onSubmit={(e) => addComment(e, submitBtn)}
      >
        <input
          name=""
          className="rounded w-full outline-none text-xs bg-gray-800 ring-1 focus:ring-2 p-2 flex items-center"
          placeholder="write a comment..."
        />
        <button
          ref={submitBtn}
          type="submit"
          className="outline-none text-xs px-3 py-1 rounded bg-gray-500 focus:ring"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default NewComment;
