import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../About/Contact/Contact";
// import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div>
      <h2>This is the Home component</h2>
      <Header></Header>
      <Outlet></Outlet>
       <About></About>
       {/* <Posts></Posts> */}
       <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
