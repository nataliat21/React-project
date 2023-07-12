import "./ItemDetail.css"
import {ItemCount} from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../contex/CartContext"
import { useState } from "react"

export const ItemDetail = ({item}) => {
    const {addProduct} = useContext(CartContext)

    
    const agregarProducto = (quantity) => {
        console.log(quantity)
        addProduct(item, quantity)
    }

    return(
        <div className="MainItemDetailContainer">
            <div className="CardItemDetailContainer">
                <div className="MainDetailContainer">
                    <h2 className="ItemDetailTitle">{item.title}</h2>
                        <div className="ItemDetailPictureContainer">
                            <img className="ItemDetailPicture" src={item.picture} alt={item.title}></img>
                        </div>
                        <div className="ItemDetailPriceContainer">
                            <h2 className="ItemDetailPrice">{item.price}</h2>
                        </div>
                        <div className="ItemCountContainer">
                            <ItemCount stock={10} onAdd={agregarProducto}/>
                        </div>
                </div>

            </div>
            <div className="ItemDetailDescriptionContainer">
                <h2>Detalles del Producto</h2>
                <div className="nombre">
                <ul>
                    <li className="ItemDetailDescription">{item.description}</li>
                </ul>
                </div>
            </div>
        </div>

    )
}