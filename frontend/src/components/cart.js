import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import CartTable from "./cart-table";
import { useState, useEffect } from "react";

export default function Cart(props) {
  const [cart, setCart] = useState([]);
  console.log(props)

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    axios
      .get("http://localhost:4000/cart/")
      .then((res) => {
        setCart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DataTable = () => {
    return cart.map((res, i) => {
      return <CartTable obj={res} key={i} />;
    });
  };

  return (
    <>
      <div className="table-wrapper">
        <div className="itemlist">Cart</div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price(Rs)</th>
              <th>Weight(gm)</th>
              <th>Quantity</th>
              <th>Total </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
          <tbody>Sum Total = sumTotal</tbody>
        </Table>
      </div>
    </>
  );
}
