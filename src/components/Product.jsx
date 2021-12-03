import React from "react";

const Product = ({ product, admin, onEdit, onShowExtended, onDelete }) => {
  const handleShowExtended = (product) => {
    onShowExtended(product);
  };

  const handleEdit = (product) => {
    onEdit(product);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="content">
      <div className="single-prod" onClick={() => handleShowExtended(product)}>
        <div className="single-prod-img">
          <img src={product.image_url} alt="product" />
        </div>
        <div className="single-prod-data">
          <a>{product.name}</a>
          <p className="price">$ {product.price}</p>
          <a class="buy">Buy Now</a>
        </div>
      </div>
      {admin && (
        <div className="product-actions">
          <button onClick={() => handleEdit(product)}>EDIT</button>
          <button onClick={() => handleDelete(product.id)}>DELETE</button>
        </div>
      )}
    </div>
  );
};

export default Product;
