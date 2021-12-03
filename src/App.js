import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import ProductForm from "./components/ProductForm";
import ProductDetails from "./components/ProductDetails";

import Products from "./components/Products";

import "./App.scss";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState({
    logInClicked: false,
    adminView: false,
    displayProductForm: false,
    displayExtendedProduct: null,
  });

  const handleLoadLogIn = () => {
    setState({ logInClicked: true });
  };

  const handleReturn = () => {
    setState({ logInClicked: false });
  };

  const handleAdminView = () => {
    setState({ ...state, adminView: true });
  };

  const handleEdit = (product) => {
    setState({ ...state, displayProductForm: product });
  };

  const handleShowExtended = (product) => {
    setState({ ...state, displayExtendedProduct: product });
  };

  const handleUpdateProducts = () => {
    setState({ ...state, displayProductForm: false });
  };

  return (
    <div className="App">
      <Header
        onLoadLogIn={handleLoadLogIn}
        showLink={!state.logInClicked}
        onReturn={handleReturn}
        admin={state.adminView}
      />
      {!state.logInClicked && !state.displayExtendedProduct && (
        <Products onShowExtended={handleShowExtended} onEdit={null} />
      )}
      {state.logInClicked && !state.adminView && (
        <LoginForm onAdminView={handleAdminView} onReturn={handleReturn} />
      )}
      {state.adminView && !state.displayProductForm && (
        <Products admin={true} onEdit={handleEdit} />
      )}
      {state.displayProductForm && (
        <ProductForm
          product={state.displayProductForm}
          onReturn={handleEdit}
          updateProducts={handleUpdateProducts}
        />
      )}
      {state.displayExtendedProduct && (
        <ProductDetails
          product={state.displayExtendedProduct}
          onReturn={handleReturn}
        />
      )}
    </div>
  );
}

export default App;
