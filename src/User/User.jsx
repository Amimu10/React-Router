import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone, website } = user;
  const navigate = useNavigate();

  return (
    <div className="bg-amber-400 w-full p-4 mx-auto">
      <h3>{name}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3 className="mb-8">Website: {website}</h3>
      <Link className="bg-red-600 p-2 rounded-md text-white font-bold" to={`/user/${id}`}>
        Show Details
      </Link>
      <button
        className="p-2 rounded-md text-white font-bold bg-stone-600 mt-6"
        onClick={() => navigate(`/user/${id}`)}
      >
        Click to Show Details
      </button>
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
