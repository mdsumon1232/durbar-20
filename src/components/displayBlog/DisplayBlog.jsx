import moment from "moment";
import { Link } from "react-router-dom";
import user from "../../assets/images/profile.png";

const DisplayBlog = (params) => {
  console.log(params.blog);
  const { blog_id, title, article, cover, full_name, profile, post_at, meta } =
    params.blog;

  return (
    <div className=" h-auto bg-red-100 rounded-md shadow-orange-200 shadow-md">
      <img
        src={`http://localhost/durbar-20-client/${cover}`}
        alt="image"
        className="w-full h-[300px] mb-1 rounded-t-md"
      />
      <div className="p-5">
        <h2 className="text-[25px] font-bold mb-2 w-full overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h2>
        <p className="text-[18px] mb-1">
          {meta}
          <Link to={`/blog/${blog_id}`} className="underline">
            read more
          </Link>
        </p>
      </div>
      <div className="flex items-center px-5 py-2">
        <img
          src={profile ? `http://localhost/durbar-20-client/${profile}` : user}
          className="w-12 h-12 rounded-full"
          alt="user-profile"
        />
        <div className="ms-3">
          <h5 className="capitalize text-[18px]">{full_name}</h5>
          <p className="text-[14px] font-[300]">
            {moment(post_at).format(" Do MMM  YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBlog;
