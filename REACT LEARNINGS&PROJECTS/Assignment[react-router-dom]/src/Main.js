import suresh from "./assets/suresh.jpg";
import sandeep from "./assets/sandeep.jpeg";
import Profile from "./components/Profile";

const Main = () => {
  const profiles = [
    {
      name: "Sandeep K Dasari",
      profession: "Frontend Dev",
      imageURL: sandeep,
    },
    {
      name: "Suresh Alabani",
      profession: "Full Stack ",

      imageURL: suresh,
    },
    {
      name: "Sandeep K Dasari",
      profession: "Backend Dev",

      imageURL: sandeep,
    },
  ];
  return (
    <section className="main">
      <section className="avatar">
        <div className="logo">
          <img
            src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
            alt="aimg"
          />
        </div>

        <div className="star">
          <div className="line1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line2"></div>
        </div>

        <div className="m">WEB ENTHUSIAST</div>
      </section>

      <section className="cards">
        {profiles.map((profile, index) => {
          return (
            <Profile
              key={index}
              imageURL={profile.imageURL}
              name={profile.name}
              profession={profile.profession}
            />
          );
        })}
      </section>
    </section>
  );
};
export default Main;
