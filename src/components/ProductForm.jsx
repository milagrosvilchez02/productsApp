import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class ProductForm extends Form {
  state = {
    data: {
      name: this.props.product.name,
      description: this.props.product.description,
      image_url: this.props.product.image_url,
      price: this.props.product.price,
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    description: Joi.string().required().label("Description"),
    image_url: Joi.string().required().label("Image url"),
    price: Joi.number().required().label("Price"),
  };

  doSubmit = async () => {
    if (this.props.product.id) {
      await fetch(
        `https://productsapp-backend.herokuapp.com/api/products/${this.props.product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.data),
        }
      );
    } else {
      const data = await fetch(
        `https://productsapp-backend.herokuapp.com/api/products/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.data),
        }
      );
    }

    this.props.updateProducts();
  };

  render() {
    const handleReturn = () => {
      this.props.onReturn();
    };

    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("name", "Name")}
          {this.renderInput("description", "Description")}
          {this.renderInput("image_url", "Image url")}
          {this.renderInput("price", "Price")}
          {this.renderButton("Save")}
          <button onClick={handleReturn}>BACK</button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
