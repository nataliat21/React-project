import {useEffect, useState} from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail"
import {products} from "../Data/Data"
import { useParams } from "react-router-dom";
import "../ItemDetailContainer/ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [itemProducto, setItemProducto] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })

    // useEffect(() => {
    //     const getProducto = async() => {
    //         const productos = await promesa
    //         const producto = productos.find(elemento => elemento.id === parseInt(id))
    //         setItemProducto(producto)
    //         setLoading(false)
    //     }
    //     getProducto()
    // }, [id])

    useEffect(() => {
        const getProducto = async () => {
            const productos = await promesa;
            const producto = productos.find(
            (elemento) => elemento.id === parseInt(id)
        );
            setItemProducto(producto);
            setIsLoading(false); // Desactivar el loading cuando se obtengan los datos
        };
        getProducto();
    }, [id]);

    return(

        <div className="ItemDetailContainer">
        {isLoading ? (
          <p className="CargandoProducto">Cargando Producto ... </p> // Mostrar el mensaje de loading mientras isLoading sea verdadero
        ) : (
            <ItemDetail item={itemProducto}></ItemDetail>
        )}
        </div>
    )
}