import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import CustomerTable from "./customer-table";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/customer/")
      .then((res) => {
        this.setState({
          shop: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DataTable() {
    return this.state.shop.map((res, i) => {
      return <CustomerTable obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <a href="/add-items/">
          <div className="additem">Add Items</div>
        </a>
        <div className="table-wrapper">
          <div className="itemlist">Customer List</div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
