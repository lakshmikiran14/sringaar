import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Jumbotron,
  Tab,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Tabs,
  Toast,
  Alert,
} from "react-bootstrap";
import logo from "./logo.png";
import "./App.css";
import response from "./saree_img.js";

import React, { useState, useEffect, Component } from "react";
// import { getAllByPlaceholderText } from "@testing-library/react";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="justify-content-between"
      bg="primary"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand>SRINGAAR</Navbar.Brand>
      <Form inline className="mr-sm-2">
        <Navbar.Collapse id="responsive-navbar-nav">
          <FormControl type="text" placeholder="Terms" />
          <Button>Search</Button>
        </Navbar.Collapse>
      </Form>
    </Navbar>
  );
}

function Heading() {
  return (
    <React.Fragment>
      <Jumbotron
        thumbnail
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#d5bda1",
        }}
      ></Jumbotron>
    </React.Fragment>
  );
}

function Content() {
  return (
    <div>
      <ControlledTabs> </ControlledTabs>
    </div>
  );
}

function ControlledTabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="justify-content-center"
    >
      <Tab eventKey="home" title="Sarees ">
        <Container
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-around",
          }}
        >
          <Popular_News />
        </Container>
      </Tab>
      <Tab eventKey="profile" title="Dress">
        <Container
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            "justify-content": "space-around",
          }}
        >
          <Popular_News />
        </Container>
      </Tab>
    </Tabs>
  );
}

const API_C = "sample";

class Popular_News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ResponseState: false, Response: { articles: [] } };
  }

  componentDidMount() {
    fetch(API_C)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ Response: data, ResponseState: true });
      })
      .catch((err) => {
        this.setState({ Response: response, ResponseState: true });
      });
  }

  render() {
    console.log(this.state.Response, this.state.ResponseState);
    return this.state.ResponseState ? (
      this.state.Response["product"].map((product) => (
        <Article img={product.img} name={product.name} price={product.price} />
      ))
    ) : (
      <div style={{ margin: "10px" }}>
        <ErrorMessage />
      </div>
    );
  }
}

function ErrorMessage() {
  return (
    <Alert variant="dark">Might take some time or refresh after 30sec.</Alert>
  );
}

function Article(props) {
  return (
    <Card style={{ width: "12rem", margin: "10px" }}>
      {/* <Card.Img variant="top" src="./logo.png" /> */}

      <Card.Body>
        <Card.Text>
          <strong> {props.name} </strong>
        </Card.Text>
      </Card.Body>
      <Card.Img src={props.img} />
      <ListGroup className="list-group-flush">
        <ListGroupItem> </ListGroupItem>
        <ListGroupItem>Price : {props.price} </ListGroupItem>
        <Button style={{ backgroundColor: "grey" }}>Add to cart</Button>
      </ListGroup>
    </Card>
  );
}

function App() {
  return (
    <div>
      <Heading></Heading>
      <Content></Content>
    </div>
  );
}

export default App;
