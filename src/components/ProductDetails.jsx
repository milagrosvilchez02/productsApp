import React from "react";

const ProductDetails = ({ product, onReturn }) => {
  const handleReturn = () => {
    onReturn();
  };

  return (
    <React.Fragment>
      <div className="details-container">
        <div className="show-product">
          <h1>{product.name}</h1>
          <div>
            <img src={product.image_url} alt="product" />
          </div>
        </div>

        <div className="show-product-data">
          <p>$ {product.price}</p>
          <div>{product.description}</div>
        </div>
      </div>

      <div className="buttons">
        <button className="button" onClick={handleReturn}>
          BACK
        </button>
        <a class="buy">Buy Now</a>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
