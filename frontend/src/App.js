import React from "react";
import Nav from "react-bootstrap/Nav"; 
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditItem from "./components/EditItem";
import ItemList from "./components/item-list";
import Home from "./components/home";
import Login from "./components/login";
import CreateAccount from "./components/create-account";
import AdminLogin from "./components/adminLogin";
import AddItems from "./components/add-items";
import CustomerList from "./components/customer-list"; 
import Profile from "./components/profile";
import Search from "./components/searchlist";
import Cart from "./components/cart"

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand className="nav-link">Shopping App</Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/cart"} className="nav-link">
                    Cart
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                <Route
                    exact
                    path="/cart"
                    component={(props) => <Cart {...props} />}
                  />
                  <Route
                    exact
                    path="/"
                    component={(props) => <Home {...props} />}
                  />
                  <Route
                    exact
                    path="/home"
                    component={(props) => <Home {...props} />}
                  />
                  <Route
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  <Route
                    exact
                    path="/create-account"
                    component={(props) => <CreateAccount {...props} />}
                  />
                  <Route
                    exact
                    path="/profile"
                    component={(props) => <Profile {...props} />}
                  />
                  <Route
                    exact
                    path="/adminLogin"
                    component={(props) => <AdminLogin {...props} />}
                  />
                  <Route
                    exact
                    path="/add-items"
                    component={(props) => <AddItems {...props} />}
                  />
                  <Route
                    exact
                    path="/EditItem/:id"
                    component={(props) => <EditItem {...props} />}
                  />
                  <Route
                    exact
                    path="/item-list"
                    component={(props) => <ItemList {...props} />}
                  />
                  <Route
                    exact
                    path="/customer-list"
                    component={(props) => <CustomerList {...props} />}
                  />
                  <Route
                    exact
                    path="/searchlist/:category"
                    component={(props) => <Search {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
