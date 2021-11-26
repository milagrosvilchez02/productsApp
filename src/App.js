import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

import Products from "./components/Products";

import "./App.scss";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState({ logInClicked: false, adminView: false });

  const handleLoadLogIn = () => {
    setState({ logInClicked: true });
  };

  const handleReturn = () => {
    setState({ logInClicked: false });
  };

  const handleAdminView = () => {
    setState({ adminView: true, ...state });
  };

  return (
    <div className="App">
      <Header
        onLoadLogIn={handleLoadLogIn}
        showLink={!state.logInClicked}
        onReturn={handleReturn}
        admin={state.adminView}
      />
      {!state.logInClicked && (
        <div>
          <Products />
        </div>
      )}
      {state.logInClicked && !state.adminView && (
        <LoginForm onAdminView={handleAdminView} />
      )}
      {state.adminView && <Products admin={true} />}
    </div>
  );
}

export default App;
