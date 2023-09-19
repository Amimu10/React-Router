import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
             <h3>Here is our posts: {posts.length}</h3>
             <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 px-8 mx-auto gap-4">
             {
                posts.map(post=><Post key={post.id} post={post}></Post>)
             }
             </div>
            
        </div>
    );
};

export default Posts;