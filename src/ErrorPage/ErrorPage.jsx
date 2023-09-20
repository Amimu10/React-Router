import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h3 className="text-5xl font-bold">Oops !!</h3> 
            <div className="text-center">
                <p className="text-3xl font-bold">Not Found</p>
                <p className="text-3xl font-bold">Page not found</p>
                <p className="text-3xl font-bold">Go back where you came from</p>
                <button onClick={() => navigate("/")} className="bg-slate-600 text-white font-bold rounded-md p-2 mt-4">Go Back</button> 
            </div>
        </div>
    );
};

export default ErrorPage;
