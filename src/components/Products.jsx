import React, { useEffect, useState } from "react";

import Product from "./Product";

const Products = ({ admin, onEdit, onShowExtended }) => {
  const [state, setState] = useState({
    products: null,
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(
      "https://productsapp-backend.herokuapp.com/api/products/"
    );

    const products = await data.json();
    setState({ products });
  };

  const handleEdit = async (product) => {
    onEdit(product);
  };

  const handleDelete = async (id) => {
    const data = await fetch(
      `https://productsapp-backend.herokuapp.com/api/products/${id}`,
      {
        method: "DELETE",
      }
    );
    const products = await data.json();
    setState({ products });
  };

  const handleShowExtended = (product) => {
    onShowExtended(product);
  };

  return (
    <div className="main">
      {admin && (
        <a className="add" onClick={handleEdit}>
          Add product
        </a>
      )}
      <div className="products-container">
        {!state.products && <p>Loading...</p>}
        {state.products &&
          state.products.map((p) => (
            <Product
              product={p}
              admin={admin}
              onEdit={handleEdit}
              onShowExtended={handleShowExtended}
              onDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
