import {useState} from "react";

export default function UploadPhoto({handleInput}) {
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState("");

  const handleUpload = (e) => {
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
          handleInput(null, data.secure_url);
          console.log("see cloudinary data ", data);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            setImage(event.target.result);
          };
          setIsUploading("Upload Complete.");
        })
        .catch((err) => {
          setIsUploading(err.message);
        });
    }
  };

  return (
    <div className="relative overflow-hidden flex justify-start space-x-5 items-center my-5">
      {isUploading === "Uploading..." ? (
        <div className="w-14 h-14 rounded-full bg-gray-500 animate-pulse" />
      ) : (
        <img
          className="w-14 h-14 rounded-full object-cover object-center"
          src={
            image ||
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAHgAA/+EDKmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMThCRkM0QUEzRTkxMUVCODEyQ0MwNTg2ODk0MkU4RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMThCRkM0OUEzRTkxMUVCODEyQ0MwNTg2ODk0MkU4RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTYzMjlGNzQwNzgxMTFFQkJFMEVBRDM1MTdBOEYzODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTYzMjlGNzUwNzgxMTFFQkJFMEVBRDM1MTdBOEYzODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcf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"
          }
          alt=""
        />
      )}
      <p className="relative">
        <span>
          <span className="ring-1 px-3 py-1">Choose</span> Your Profile Picture
        </span>
        <small className="absolute left-0  top-full text-gray-300 items-start justify-center">
          <small className="-mb-3">
            {isUploading ? isUploading : "or drag & drop here"}
          </small>
        </small>
      </p>
      <input
        type="file"
        onChange={handleUpload}
        className="w-full h-full opacity-0 absolute inset-0 cursor-pointer"
        accept="image/*"
      />
    </div>
  );
}
