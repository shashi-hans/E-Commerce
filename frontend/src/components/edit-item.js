import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditItem  extends Component {
  constructor(props) {
    super(props);
    console.log("props ", props)
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      category: "",
      name: "",
      price: "",
      weight: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/item/edit/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          category: res.data.category,
          name: res.data.name,
          price: res.data.price,
          weight: res.data.weight,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    const itemObject = {
      category: this.state.category,
      name: this.state.name,
      price: this.state.price,
      weight: this.state.weight,
    };
    axios
      .put(
        "http://localhost:4000/item/update/" + this.props.match.params.id,
        itemObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Item successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Item List
    this.props.history.push("/item-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Category</Form.Label>
            <Form.Control
              className="Form-box"
              type="text"
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              className="Form-box"
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group controlId="Number">
            <Form.Label>Price</Form.Label>
            <Form.Control
              className="Form-box"
              type="number"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </Form.Group>
          <Form.Group controlId="Number">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              className="Form-box"
              type="number"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Update Product
          </Button>
        </Form>
      </div>
    );
  }
}
