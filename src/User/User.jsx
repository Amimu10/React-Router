
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const {id, name, email, phone, website } = user;
  return (
    <div className="bg-amber-400 w-full p-4 mx-auto">
      <h3>{name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3 className="mb-8">Website: {website}</h3>
      <Link className="bg-red-600 p-2 rounded-md text-white font-bold" to={`/user/${id}`}>Show Details</Link>
    </div> 
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
