import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { FaPhotoFilm } from "react-icons/fa6";

const AboutEditor = () => {
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [photo, setPhoto] = useState("");
  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 500,
    uploader: {
      insertImageAsBase64URI: true,
      url: "your-server-upload-url",
      format: "json",
      imagesExtensions: ["jpg", "png", "jpeg", "gif"],
    },
    filebrowser: {
      ajax: {
        url: "your-server-browse-url",
      },
    },
  };

  const handleFormData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("coverBg", photo);
    formData.append("content", content);

    // send data to server

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log(xhr.response);
      }
    };
    xhr.open("POST", "http://localhost/durbar-20-client/about.php", true);
    xhr.send(formData);
  };

  return (
    <div>
      <form
        action=""
        className="w-[90%] mx-auto mt-10"
        onSubmit={handleFormData}
      >
        <div>
          <label htmlFor="" className="text-[18px]">
            Heading
          </label>
          <input
            type="text"
            placeholder="About section heading"
            className="border block w-full rounded-md py-1 px-3 my-2 outline-none"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex items-center mb-10 mt-4">
          <label htmlFor="" className="text-[20px]">
            Banner
          </label>
          <input
            type="file"
            hidden
            id="about_banner"
            onChange={(e) => {
              setPhotoName(e.target.value);
              setPhoto(e.target.files[0]);
            }}
          />
          <label htmlFor="about_banner">
            <FaPhotoFilm className="text-xl ms-5"> </FaPhotoFilm>
          </label>
          <p className="ms-5">{photoName}</p>
        </div>
        <JoditEditor
          ref={editor}
          value={content}
          onBlur={(newContent) => setContent(newContent)}
          tabIndex={1}
          config={config}
          className="mt-5"
        />
        <input
          type="submit"
          value="post"
          className="py-1 px-3 rounded-md bg-red-600 text-white mt-5"
        />
      </form>
    </div>
  );
};

export default AboutEditor;
