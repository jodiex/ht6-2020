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
      restaurantname: "",
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
        this.state.restaurantname +
        this.state.address +
        this.state.phonenumber
    );

    fetch("http://127.0.0.1:8000/foodproviders/", {
      method: "GET",
      // We convert the React state to JSON and send it as the POST body
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Nav />
        <div style={loginStyle}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "5%",
            }}
          >
            {" "}
            Sign up as a Food Provider{" "}
          </h1>
          <Form style={formStyle} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
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
                placeholder="Alberto's Pizza Palace"
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={this.state.phonenumber}
                onChange={this.handlePhoneNumberChange}
                placeholder="(xxx)-(xxx)-(xxxx)"
                required
              />
              <Button
                bsStyle=""
                style={btn}
                bsClass="btn"
                href="/restaurantform"
                variant="primary"
                type="submit"
              >
                Sign up
              </Button>{" "}
            </Form.Group>
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
  paddingTop: "15%",
  backgroundColor: "#FFDABB",
  paddingRight: "10%",
  paddingLeft: "10%",
  paddingBottom: "10%",
  borderRadius: "21px",
  color: "black",
};

const btn = {
  backgroundColor: "#ff8364",
  borderColor: "#edf7fa",
  color: "#edf7fa",
  marginTop: "5%",
};
