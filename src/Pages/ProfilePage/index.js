import React from "react";
import "./styles.css";
import Image from "../../assets/Ellipse 114@2x.png"

function ProfilePage() {
  return (
    <div className="profile">
      <div className="top">
        <p>Account Settings</p>
      </div>
      <div className="bg" >
        <div className="details">
          <div className="img">
            <img src={Image} alt="img"/>
          </div>
          <div className="data">
            <h3>Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>
        </div>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
