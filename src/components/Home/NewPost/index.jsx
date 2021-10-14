import {XCircleIcon} from "@heroicons/react/solid";
import {CameraIcon} from "@heroicons/react/outline";
import {useEffect, useRef, useState} from "react";
import {useRootContext} from "../../../context";

export default function PostForm() {
  const {
    dispatch,
    state: {user},
  } = useRootContext();
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");
  const [postText, setPostText] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const imageRef = useRef();
  const postInput = useRef();

  const [isUploading, setIsUploading] = useState("");

  const handleSubmit = (e) => {
    console.log(thumbnail);
    e.preventDefault();

    setLoading(true);

    fetch("/post/new", {
      method: "post",
      headers: {
        authorization: localStorage.getItem("stackmedia_token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: postText,
        thumbnail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostText("");
        // console.log(data);
        setUploadedImage("");
        setLoading(false);
        dispatch({type: "FETCH_POSTS"});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const imageUploadHandle = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading("Uploading...");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "stackmedia");
      const options = {
        method: "POST",
        body: formData,
      };

      return fetch(
        "https://api.cloudinary.com/v1_1/dq1i37rxi/image/upload",
        options
      )
        .then((res) => res.json())
        .then((data) => {
          setIsUploading("Upload Complete.");
          setThumbnail(data.secure_url);
          // Reader
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (ev) => {
            setUploadedImage(ev.target.result);
          };
        })
        .catch((err) => {
          setIsUploading(err.message);
        });
    }
  };

  return (
    <section style={{background: "#242526"}} className="p-5 rounded-lg">
      <div className="items-start flex space-x-5 ">
        <img className="w-9 h-9 rounded-full" src={user.photo} alt="" />
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <textarea
              onChange={(e) => setPostText(e.target.value)}
              value={postText}
              ref={postInput}
              placeholder={`what's on your mind?`}
              className="h-20 p-2 text-sm rounded w-full outline-none bg-gray-800 ring-1 focus:ring-2 focus:bg-gray-900"
            />

            <div className="flex justify-between mt-5">
              <button
                onClick={() => imageRef.current.click()}
                type="button"
                className="px-4 py-2 bg-gray-700 flex items-center justify-evenly hover:border-1 focus:ring rounded"
              >
                <CameraIcon className="w-5 mr-3" />
                Add Thumbnail
              </button>

              <input
                ref={imageRef}
                type="file"
                hidden={true}
                onChange={imageUploadHandle}
              />

              <button
                type="submit"
                className="px-4 py-2 bg-gray-700 flex items-center justify-evenly focus:ring rounded"
              >
                Post
                {loading && (
                  <span
                    style={{borderTopColor: "transparent"}}
                    className="border-4 w-5 h-5 ml-3 rounded-full block animate-spin"
                  />
                )}
              </button>
            </div>
          </form>

          {isUploading && <h1 className="my-2 text-sm">{isUploading}</h1>}
          {uploadedImage && (
            <div className="relative mt-5">
              <img className="rounded" src={uploadedImage} alt="" />
              <XCircleIcon
                onClick={() => {
                  setIsUploading("");
                  setUploadedImage(null);
                }}
                className="w-12 h-12 absolute left-0 cursor-pointer top-0 text-red-600 transform group-hover:shadow-2xl"
                fill="#fff"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
