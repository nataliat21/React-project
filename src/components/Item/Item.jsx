import "./Item.css";
import { Link } from "react-router-dom";


export const Item = (props) => {
  return (
    <div>
      <div className="MainContainerCard">
        <div className="CardContainer">
          <h2 className="CardTitle">{props.title}</h2>
          <div className="PictureContainer">
            <img className="CardPicture" src={props.picture} alt="Imagen del producto"></img>
          </div>
          <Link to={`/item/${props.id}`}>
            <div className="ButtonDetailContainer">
              <button className="ButtonDetail">Ver Detalles</button>
            </div>
          </Link>
          <div className="PriceContainer">
            <h2 className="CardPrice">{props.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
