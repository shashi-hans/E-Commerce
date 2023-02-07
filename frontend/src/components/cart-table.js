import React, { useState } from "react";
import axios from "axios";
import Cart from "./cart"

export default function CartTable(props) {
  const item = props.obj;
  let [quantity, setQuantity] = useState(1);

  const deleteItem = () => {
    axios
      .delete("http://localhost:4000/cart/delete/" + item._id)
      .then((res) => {
        console.log("Successfully deleted!", res.data.success);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let sumTotal=0;
  let total = quantity * item.price;
  sumTotal = sumTotal+total;
  const decrease = () => {
    if (quantity > 1) {
      quantity -= 1;
      setQuantity(quantity);
    }
  };
  const increase = () => {
    if (quantity <= 5) {
      quantity += 1;
      setQuantity(quantity);
    }
  };
  <Cart total sumTotal/>
 
 
  return (
    <>
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.weight}</td>
        <td>
          <button className="m-9" onClick={decrease}>
            -
          </button>
          <span className="m-10">{quantity}</span>
          <button className="m-9" onClick={increase}>
            +
          </button>
        </td>
        <td>{total}</td>
        <td>
          <a href=" " onClick={deleteItem} className="deleteButton">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}
