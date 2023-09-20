import { useLoaderData, useNavigate} from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();

  const post = useLoaderData();

  const { id, title, body } = post;
  return (
    <div className="text-center items-center bg-red-800 p-4 w-96 mx-auto text-white font-bold">
        <h3>Post Id: {id}</h3>
      <h3>{title}</h3>
      <h3 className="mb-6">{body}</h3>
      <button className="bg-gray-950 text-white font-bold p-2 rounded-md" onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  );
};


export default PostDetails;
