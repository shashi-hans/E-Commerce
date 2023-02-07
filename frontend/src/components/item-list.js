import React,{ useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ItemTable from "./item-table";

export default function ItemList() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItemList();
  }, []);

  const getItemList = () => {
    axios
      .get("http://localhost:4000/item/")
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DataTable = () => {
    return item.map((res, i) => {
      return <ItemTable obj={res} key={i} />;
    });
  };

  return (
    <div>
      <a href="/add-items/">
        <div className="additem">Add Items</div>
      </a>
      <div className="table-wrapper">
        <div className="itemlist">Items List</div>
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Price(Rs)</th>
              <th>Weight(gm)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
        </Table>
      </div>
    </div>
  );
}
