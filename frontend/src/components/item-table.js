import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TableRow(props) {
  const item = props.obj;

  const deleteItem = () => {
    axios
      .delete("http://localhost:4000/item/delete/" + item._id)
      .then((res) => {
        console.log("Successfully deleted!", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td>{item.category}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.weight}</td>
      <td>
        <Link className="edit-link" to={"/EditItem/" + item._id}>
          Edit
        </Link>
        <a href=" " onClick={deleteItem} className="deleteButton">
          Delete
        </a>
      </td>
    </tr>
  );
}
