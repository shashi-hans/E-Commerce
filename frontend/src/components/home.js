import pasteries from "../assets/img/pasteries.jpg";
import desert from "../assets/img/desert.jpg";
import icecream from "../assets/img/ice-cream.jpg";
import cake from "../assets/img/cake.jpg";
import React from "react";


function Home() {
  return (  
    <div>
      <div className="img-container">
        <div>
          <a href="./searchlist/cake">
            <img className="img" src={cake} alt="cake"></img> 
          </a>
          <p>Cake</p>
        </div>
        <div>
          <a href="./searchlist/pasteries">
            <img className="img" src={pasteries} alt="pasteries"></img>
          </a>
          <p>Pasteries</p>
        </div>
        <div>
          <a href="./searchlist/desert">
            <img className="img" src={desert} alt="desert"></img>
          </a>
          <p>Desert</p>
        </div>
        <div>
          <a href="./searchlist/icecream">
            <img className="img" src={icecream} alt="ice-cream"></img>
          </a>
          <p>Ice cream</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
