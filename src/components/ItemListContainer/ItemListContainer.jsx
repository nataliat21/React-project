import { ItemList } from "../ItemList/ItemList"
import {useEffect, useState} from "react";
import {products} from "../Data/Data"
import "./ItemListContainer.css"



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const resultado = await getProducts();
            setProductos(resultado);
            setLoading(false);
        };
    
        fetchData();
    }, []);

    return(
        <div>
            {
                loading ?
                <p className="CargandoProductos">Cargando Productos ... </p>
                :
                <ItemList producto ={productos}></ItemList>
            }
            
        </div>
    )
}

