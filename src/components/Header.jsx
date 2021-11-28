import React from "react";

const Header = ({ onLoadLogIn, showLink, onReturn, admin }) => {
  const handleClick = () => {
    onLoadLogIn();
  };

  const handleReturn = () => {
    onReturn();
  };

  return (
    <div className="header">
      <div className="header-title" onClick={handleReturn}>
        <img
          src="https://redragon.es/content/uploads/2021/04/logo.svg"
          alt="icon"
        />
      </div>
      {showLink && (
        <div className="login" onClick={handleClick}>
          Log in
        </div>
      )}
      {admin && (
        <div className="login" onClick={handleReturn}>
          Log out
        </div>
      )}
    </div>
  );
};

export default Header;
