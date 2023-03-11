import React from "react";

const Profile = ({ imageURL, name, profession }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imageURL} alt="sandeep" />
      </div>
      <div className="social">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <div className="name">{name}</div>
      <div className="profession">{profession}</div>
      <div className="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  );
};

export default Profile;
