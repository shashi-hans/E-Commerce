import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      email: "",
      password: "",
    };
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const profileObject = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.history.push("/");
    axios
      .post("http://localhost:4000/customer/", profileObject)
      .then((res) => console.log(res.data));
    this.setState({ email: "", password: "" });
  }
  render() {
    return (
      <div className="form-wrapper">
        <Form.Label className="login-register">Customer Login</Form.Label>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </Form.Group>
          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Login
          </Button>
        </Form>
        <div className="divider">
          <p className="new">New to Shop?</p>
        </div>
        <a href="/create-account" >
          <div className="create" >Create Account</div>
        </a>
        <div className="divider"></div>
        <a href="/adminLogin" >
          <div className="admin" >Admin Login</div>
        </a>
      </div>
    );
  }
}
