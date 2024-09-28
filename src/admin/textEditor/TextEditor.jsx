import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { FaPhotoFilm } from "react-icons/fa6";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
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

  //   handle form data

  const formData = (e) => {
    e.preventDefault();

    const blogData = new FormData();

    blogData.append(content, content);

    //  http request

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log(xhr.response);
      }
    };

    xhr.open("POST", "http://localhost/durbar-20-client/blogContent.php", true);
    xhr.send(blogData);
  };

  return (
    <div className="w-[90%] mx-auto">
      <form action="" className="w-full my-5" onSubmit={formData}>
        <label htmlFor="title" className="block text-[20px] mb-2">
          Title
        </label>
        <input
          type="text"
          className="w-full border border-black p-2 outline-none rounded-md"
          id="title"
          name="title"
        />
        <div className="flex mt-5 items-center">
          <label htmlFor="" className="text-xl">
            Cover
          </label>
          <input type="file" id="photo" hidden name="cover" />
          <label htmlFor="photo">
            <FaPhotoFilm className="text-xl ms-5"> </FaPhotoFilm>
          </label>
        </div>

        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          config={config}
          className="mt-5"
        />
        <div className="mt-7">
          <input
            type="submit"
            value="Post"
            className="bg-green-700 text-white py-1 px-3 rounded  me-5"
          />
          <input
            type="reset"
            value="cancel"
            className="bg-red-700 text-white py-1 px-3 rounded  me-5"
          />
        </div>
      </form>
    </div>
  );
};

export default TextEditor;
