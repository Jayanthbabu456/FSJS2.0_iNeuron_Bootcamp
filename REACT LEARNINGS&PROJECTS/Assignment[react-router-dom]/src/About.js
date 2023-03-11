import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <p>ABOUT</p>
        <div className="a-star">
          <div className="line1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line2"></div>
        </div>
        <div className="txt">
          <p>
            A successful website does three things:
            <p>It attracts the right kinds of visitors.</p>
            <p>Guides them to the main services or product you offer.</p>
            <p>Collect Contact details for future ongoing relation.</p>
          </p>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
};
export default About;
