import React from "react";
import Card from "./itemCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Search(props) {
  const [shop, setShop] = useState([]);
  const category = props.match.params.category
 //get search list
  useEffect(() => {
    getSearchList();
  }, []);
  const getSearchList = () => {
    axios
      .get("http://localhost:4000/item/")
      .then((res) => {
        setShop(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SearchResult = () => {
    const catList = shop.filter((item) => item.category === category )
    const cardList = catList.map( (item, index) => <Card key={index} property={item} />)
    const notFoundJSX = <div><h1>{String(category).toUpperCase()} Out of stock!</h1></div>
    return cardList.length ? cardList : notFoundJSX ;
  };

  return (
    <div id="demo" className="img-container">
      <div className="result">{SearchResult()}</div>
    </div>
  );
}
