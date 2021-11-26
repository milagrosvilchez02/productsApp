import React from "react";

const Product = ({ product, admin }) => {
  return (
    <div className="single-prod">
      <div className="single-prod-img">
        <img src={product.image_url} alt="product" />
      </div>
      <div className="single-prod-data">
        <a>{product.name}</a>
        <p>{product.price}</p>
      </div>
      {admin && (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Product;
