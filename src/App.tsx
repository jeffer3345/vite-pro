
import React from "react";
import Banner from "./components/Banner";
import Title from "./components/Title";
import Card from "./components/Card";
import "./App.css";


import imagen2 from "../src/img/images2.jpg";
import imagen3 from "../src/img/images3.jpg";
import imagen4 from "../src/img/images4.jpg";
import imagen5 from "../src/img/images5.jpg";

function App() {
  const cardsData = [
    { id: 2, image: imagen2, title: "Tarjeta 2" },
    { id: 3, image: imagen3, title: "Tarjeta 3" },
    { id: 4, image: imagen4, title: "Tarjeta 4" },
    { id: 5, image: imagen5, title: "Tarjeta 5" },
    { id: 6, image: imagen5, title: "Tarjeta 5" },
  ];

  return (
    
    <div>
      
      <Title />
      <Banner />
      <div className="container">
        <div className="card-container">
          {cardsData.map((card) => (
            <Card key={card.id} image={card.image} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
}




export default App;
