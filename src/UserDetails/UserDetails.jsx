import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const user = useLoaderData();
  const { id, name, email, phone, website } = user;
  return (
    <div className="text-center items-center bg-red-800 p-4 w-96 mx-auto text-white font-bold">
      <h3>Details about User</h3> 
      <h3>User Id: {id}</h3>
      <h3>{name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3 className="mb-8">Website: {website}</h3> 
      <button className="bg-gray-950 text-white font-bold p-2 rounded-md duration-500" onClick={()=>navigate(-1)}>Go Back</button>
    </div> 
  );
};

export default UserDetails; 
