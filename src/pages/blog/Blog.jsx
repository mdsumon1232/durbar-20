import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayBlog from "../../components/displayBlog/DisplayBlog";

const Blog = () => {
  const data = useLoaderData();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data.data);
  }, []);

  return (
    <div className="grid grid-cols-4 container mx-auto gap-5">
      {blogs.map((blog) => (
        <DisplayBlog key={blog.blog_id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
