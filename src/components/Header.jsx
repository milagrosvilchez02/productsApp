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
          src="https://img.icons8.com/fluency/80/000000/shopping-bag.png"
          alt="icon"
        />
        <h2>mercado</h2>
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
