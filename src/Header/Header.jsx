import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav className="flex gap-6 text-orange-600 ">
               <Link className="hover:bg-orange-400 p-4" to="/">Home</Link>
               <Link className="hover:bg-orange-400 p-4" to="/about">About</Link>
               <Link className="hover:bg-orange-400 p-4" to="/posts">Posts</Link>
               <Link className="hover:bg-orange-400 p-4" to="/contact">Contact</Link>
               <Link className="hover:bg-orange-400 p-4" to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;