import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Main />
      <Footer />
    </div>
  );
};
export default Home;
