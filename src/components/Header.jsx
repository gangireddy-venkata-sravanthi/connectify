import React from "react";


const Header = () => {
  return (
    <header className="app-header">
      <div className="left">
        <button className="icon-button">📷</button>
      </div>

      <div className="center">
        <h1>SocialApp</h1>
      </div>

      <div className="right">
        <img
          className="profile-avatar"
          src="/images/avatar.jpg"
          alt="Profile"
        />
      </div>
    </header>
  );
};

export default Header;