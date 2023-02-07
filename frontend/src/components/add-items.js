import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from "axios";


export default class AddItems extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      category: "",
      name: "",
      price: "",
      weight: "",
    };
  }
  onChangeCategory(e) {
    this.setState({ category: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangePrice(e) {
    this.setState({ price: e.target.value });
  }
  onChangeWeight(e) {
    this.setState({ weight: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const itemDetail = {
      category: this.state.category,
      name: this.state.name,
      price: this.state.price,
      weight: this.state.weight,
    };
    axios
      .post("http://localhost:4000/item/add", itemDetail)
      .then((res) => console.log(res.data));
    this.setState({ category: "", name: "", price: "", weight: "" });
  }
  render() {
    return (
      <div className="form-wrapper">
        <Form.Label className="login-register">Add Items</Form.Label>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group controlId="Number">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </Form.Group>
          <Form.Group controlId="Number">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </Form.Group>
          
          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Add
          </Button>
        </Form>
        <div className="divider"></div>
        <Link to={"/item-list"} className="itemList">
          Item List
        </Link>
        <div className="divider"></div>
          <Link to={"/customer-list"} className="itemList2" >
            Customer List
          </Link>
      </div>
    );
  }
}
