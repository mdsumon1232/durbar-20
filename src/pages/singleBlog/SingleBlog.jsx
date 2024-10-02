import DOMPurify from "dompurify";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const blog = useLoaderData();

  const { article, cover, title } = blog.data[0];
  console.log(article);
  const sanitizedHTML = DOMPurify.sanitize(article);

  return (
    <div className="container mx-auto mt-[20px]">
      <h2 className="text-[30px] py-3">{title}</h2>
      <img
        src={`http://localhost/durbar-20-client/${cover}`}
        className="w-full h-[450px] object-contain my-6 rounded-sm "
        alt=""
      />

      <article className="">
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
      </article>
    </div>
  );
};

export default SingleBlog;
