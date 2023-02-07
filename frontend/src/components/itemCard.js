import rupeeicon from "../assets/img/rupeeicon.png";
import "../assets/css/card.css";
import axios from "axios";
import React from "react";
import cake from "../assets/img/cake.jpg";

function Card(props) {
  const {  category,name,price, weight, _id } = props.property;
  
  const click = () => {
    const itemDetail = {
      category:category, 
      name: name,
      price: price,
      weight: weight,
      id: _id,
      quantity: 1,
      total: price*1,
    };
    axios
      .post("http://localhost:4000/cart/add", itemDetail)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <div className="card">
        <div>
          <img className="heading-img" src={cake} alt="card-img" />
        </div>
        <div className="body">
          <div className="name">{name}</div>
          <div>
            <img className="rupee" src={rupeeicon} alt="rupee"></img>
            <span className="price">{price}</span>
          </div>
          <div>{weight} gm</div>
        </div>
        <div id="addCart">
          <button className="addCart" onClick={click}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}  

export default Card;
