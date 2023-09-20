import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = () => {
  const navigation = useNavigation();
 const location = useLocation();
 console.log(location);
  return (
    <div> 
      <Header />
      {
        navigation.state === "loading"? <PropagateLoader className="text-center mt-10 text-5xl duration-3000" color="#36d7b7"></PropagateLoader>: <Outlet></Outlet> 
      }
      <Footer /> 
    </div>
  );
};

export default Home;
