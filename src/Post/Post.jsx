
import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleShowDetail = () => {
     navigate(`/post/${id}`)
  }
  return (
    <div className="bg-amber-400 w-full p-4 mx-auto">
      <h3>PostId: {id}</h3>
      <h3>{title}</h3>
      <h3 className="mb-6">{body}</h3>
      <Link to={`/post/${id}`} className="bg-red-600 p-2 rounded-md text-white font-bold">
        Show Details
      </Link>
      <button className=" bg-stone-600 p-2 rounded-md mt-6 text-white font-bold" onClick={handleShowDetail}>Click to show Detals</button>

    </div>
  );
};

export default Post;
