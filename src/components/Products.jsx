import React, { useState } from "react";
import products from "../sample.json";

import Product from "./Product";

const Products = ({ admin, onEdit, onShowExtended }) => {
  const [state, setState] = useState({
    products: products,
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  });

  // const getProducts = async () => {
  //   const url = "http://localhost:3000/api/products";
  //   const data = await fetch(url);
  //   const products = await data.json();
  //   setState({ products });
  // };

  // useState(() => {
  //   getProducts();
  // }, []);

  const handleEdit = (product) => {
    onEdit(product);
  };

  const handleShowExtended = (product) => {
    onShowExtended(product);
  };

  return (
    <div className="products-container">
      {admin && <a className="add">Add product</a>}
      {/* {!state.products && <p>Loading...</p>} */}
      {state.products &&
        state.products.map((p) => (
          <Product
            product={p}
            admin={admin}
            onEdit={handleEdit}
            onShowExtended={handleShowExtended}
          />
        ))}
    </div>
  );
};

export default Products;
