import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function EditItem(props) {
  const [edit, setEdit] = useState({
    category: "category",
    name: "name",
    price: 1,
    weight: 1,
  });

  useEffect(() => {
    getItemDetail();
  }, []);

  const getItemDetail = () => {
    axios
      .get("http://localhost:4000/item/edit/" + props.match.params.id)
      .then((res) => {
        setEdit({
          category: res.data.category,
          name: res.data.name,
          price: res.data.price,
          weight: res.data.weight,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeCategory=(e) => setEdit({ category: e.target.value });
  const changeName=(e) => setEdit({ name: e.target.value });
  const changePrice=(e) => setEdit({ price: e.target.value });
  const changeWeight=(e) => setEdit({ weight: e.target.value });

  const Submit = (e) => {
    e.preventDefault();
    const itemDetail = {
      category: edit.category,
      name: edit.name,
      price: edit.price,
      weight: edit.weight,
    };
    console.log("item Detail", itemDetail);
    axios
      .put(
        "http://localhost:4000/item/update/" + props.match.params.id,
        itemDetail
      )
      .then(() => {
        console.log("Item successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to Item List
    props.history.push("/item-list");
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={Submit}>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            className="Form-box"
            type="text"
            value={edit.category}
            onChange={changeCategory}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            className="Form-box"
            type="text"
            value={edit.name}
            onChange={changeName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="Form-box"
            type="number"
            value={edit.price}
            onChange={changePrice}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            className="Form-box"
            type="number"
            value={edit.weight}
            onChange={changeWeight}
          />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Product
        </Button>
      </Form>
    </div>
  );
}
