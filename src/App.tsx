import "./App.css";
import imagen2 from "../src/img/images2.jpg";
import imagen3 from "../src/img/images3.jpg";
import imagen4 from "../src/img/images4.jpg";
import imagen5 from "../src/img/images5.jpg";
import imagen6 from "../src/img/images6.jpg";

const cardsData = [
  { id: 2, imagen: imagen2, title: "Tarjeta 2" },
  { id: 3, imagen: imagen3, title: "Tarjeta 3" },
  { id: 4, imagen: imagen4, title: "Tarjeta 4" },
  { id: 5, imagen: imagen5, title: "Tarjeta 5" },
  { id: 6, imagen: imagen6, title: "Tarjeta 6" },
  // Agrega más objetos de tarjeta según tus necesidades
];

function App() {
  return (
    <div className="container">
      <h2> javascript </h2>
      {cardsData.map((card) => (
        <div className="card card-container" key={card.id}>
          <img src={card.imagen} alt={card.title} />
          <div className="card-content">
            <h3 className="card-title"> 71%Dto.</h3>
            <p className="card-text">Contenido adicional de la tarjeta</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
