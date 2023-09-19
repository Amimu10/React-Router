
import { Link } from "react-router-dom";

const Post = ({post}) => {
  const { id, title, body } = post;
  return (
    <div className="bg-amber-400 w-full p-4 mx-auto">
      <h3>{title}</h3>
      <h3 className="mb-6">{body}</h3>
      <Link to={`/post/${id}`} className="bg-red-600 p-2 rounded-md text-white font-bold">
        Show Details
      </Link>
    </div>
  );
};

export default Post;
