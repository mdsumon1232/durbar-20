import moment from "moment";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const BlogList = () => {
  const blogData = useLoaderData();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData.data);
  }, []);

  console.log(blogs);

  const handleDeletePost = (id) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.response);
        console.log(response);
        if (response.success) {
          const newBlogs = blogs.filter((blog) => blog.blog.id !== id);
          setBlogs(newBlogs);
        } else {
          alert(response.message);
        }
      }
    };
    xhr.open("POST", "http://localhost/durbar-20-client/deleteBlog.php", true);
    xhr.send(id);
  };

  return (
    <table className="w-[80%] mx-auto border border-red-300 mt-3 p-2">
      <caption>
        <h2>All Admin</h2>
      </caption>
      <thead>
        <tr className="bg-purple-700 text-white text-center">
          <th className="py-2">Serial No.</th>
          <th className="py-2">Title</th>
          <th className="py-2">Admin</th>
          <th className="py-2">Create post</th>
          <th className="py-2" colSpan="2">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map((blog, index) => {
          return (
            <tr
              key={blog.blog_id}
              className="text-left odd:bg-purple-200 even:bg-purple-300"
            >
              <td className="text-center py-3">{index + 1}</td>
              <td>{blog.title}</td>
              <td className="text-center capitalize">{blog.full_name}</td>
              <td className="text-center">
                {moment(blog.post_at).format(" Do MMM  YYYY")}
              </td>
              <td className="text-center">
                <button className="bg-green-600 py-1 px-4 text-white rounded-md">
                  Edit
                </button>
              </td>
              <td className="text-center">
                <button
                  className="bg-red-600 py-1 px-4 text-white rounded-md"
                  onClick={() => handleDeletePost(blog.blog_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BlogList;
