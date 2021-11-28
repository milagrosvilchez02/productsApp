import React from "react";

const Product = ({ product, admin, onEdit, onShowExtended }) => {
  const handleShowExtended = (product) => {
    onShowExtended(product);
  };

  const handleEdit = (product) => {
    onEdit(product);
  };

  return (
    <div className="single-prod" onClick={() => handleShowExtended(product)}>
      <div className="single-prod-img">
        <img src={product.image_url} alt="product" />
      </div>
      <div className="single-prod-data">
        <a>{product.name}</a>
        <p className="price">$ {product.price}</p>
        <a class="buy">Buy Now</a>
      </div>
      {admin && (
        <div className="product-actions">
          <button onClick={() => handleEdit(product)}>EDIT</button>
          <button>DELETE</button>
        </div>
      )}
    </div>
  );
};

export default Product;
