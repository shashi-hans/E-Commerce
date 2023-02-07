import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
      super(props);
      // Setting up functions
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeNumber = this.onChangeNumber.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      // Setting up state
      this.state = {
        name: "",
        email: "",
        number: "",
        password: "",
      };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/customer/edit/:id/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              name: res.data.name,
              email: res.data.email,
              number: res.data.number,
              password: res.data.password
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangeName(e) {
        this.setState({ name: e.target.value });
      }
      onChangeEmail(e) {
        this.setState({ email: e.target.value });
      }
      onChangeNumber(e) {
        this.setState({ number: e.target.value });
      }
      onChangePassword(e) {
        this.setState({ password: e.target.value });
      }
      onSubmit(e) {
        e.preventDefault();
        const profileObject = {
          name: this.state.name,
          email: this.state.email,
          number: this.state.number,
          password: this.state.password,
        };
        axios
        .post("http://localhost:4000/customer/update/:id", profileObject)
        .then((res) => console.log(res.data));
        this.setState({ name: "", email: "", number: "", password: "" });
        this.props.history.push('/');
      }
      render() {
        return (
          <div className="form-wrapper">
            <Form.Label className="login-register">Update Profile</Form.Label>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </Form.Group>
              <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </Form.Group>
              <Form.Group controlId="Number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
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
                Continue
              </Button>
            </Form>
          </div>
        );
      }
}