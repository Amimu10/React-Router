import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
//   console.log(users);
    return (
        <div>
            <h3>Our Users</h3>
             <h3>Our users: {users.length}</h3>
             <div className=" mt-12 grid grid-cols-1 lg:grid-cols-4 px-8 mx-auto gap-4">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
             </div>
        </div>
    );
};

export default Users;