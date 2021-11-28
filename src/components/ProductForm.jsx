import React from "react";
import Joi from "joi-browser";
import Form from "./Form";

class ProductForm extends Form {
  state = {
    data: { name: "", description: "", image_url: "", price: 0 },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    description: Joi.string().required().label("Description"),
    image_url: Joi.string().required().label("Image url"),
    price: Joi.number().required().label("Price"),
  };

  doSubmit = () => {
    // call the server
    console.log("Submitted");
    this.props.onAdminView();
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} className="form">
          {this.renderInput("name", "Name")}
          {this.renderInput("description", "Description")}
          {this.renderInput("imageUrl", "Image url")}
          {this.renderInput("price", "Price")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ProductForm;
