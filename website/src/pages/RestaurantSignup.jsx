import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

class RestaurantSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      phonenumber: "",
      restaurtname: "",
    };
  }
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  handlePhoneNumberChange = (event) => {
    this.setState({ phonenumber: event.target.value });
  };
  handleRestaurantNameChange = (event) => {
    this.setState({ restaurantname: event.target.value });
  };
  handleSubmit = (event) => {
    alert(
      this.state.email +
        this.state.password +
        this.state.restaurtname +
        this.state.addres +
        this.state.phonenumber
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* // <div className="RestaurantSignup-component"> */}
        <Nav />
        {/* <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
      </Navbar>{" "} */}
        <div style={loginStyle}>
          <h1> Sign up as a Food Provider </h1>
          <Form style={formStyle} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={this.state.address}
                onChange={this.handleAddressChange}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control
                value={this.state.restaurantname}
                onChange={this.handleRestaurantNameChange}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={this.state.phonenumber}
                onChange={this.handlePhoneNumberChange}
                placeholder="000-000-0000"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
            </Form.Group>
            <Link to="/restaurantform">
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}

export default RestaurantSignup;

const loginStyle = {
  paddingTop: "5%",
  paddingRight: "30%",
  paddingLeft: "30%",
};
const formStyle = {
  paddingTop: "5%",
};