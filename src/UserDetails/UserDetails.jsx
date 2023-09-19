import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
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
    </div>
  );
};

export default UserDetails;
