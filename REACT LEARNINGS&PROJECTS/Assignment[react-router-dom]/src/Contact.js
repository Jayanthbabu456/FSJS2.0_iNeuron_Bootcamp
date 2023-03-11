import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact">
        <p>CONTACT ME</p>
        <div className="c-star">
          <div className="line1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line2"></div>
        </div>
        <form action="#" className="form">
          <input type="text" id="name" placeholder="Full Name" />
          <input type="email" id="email" placeholder="Email" />
          <input type="number" id="number" placeholder="Number" />
          <textarea
            id="msg"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
      <Main />
      <Footer />
    </div>
  );
};
export default Contact;
