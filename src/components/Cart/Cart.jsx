import { useContext, useState } from "react" //Permite acceder a las variables o funciones que estan dentro del objeto value en el cartContex
import { CartContext } from "../../contex/CartContext"
import "./Cart.css"
import {db} from '../../utils/firebase'
import {collection, addDoc} from "firebase/firestore"
import {Link} from "react-router-dom"

export const Cart = () => {
    const value = useContext(CartContext)
    const {productosCarrito, getTotalPrice, getTotalProducts, removeItem, removeAll} = value
    const [enviado, setEnviado] = useState(false);
    const [compraId, setCompraId] = useState("")
    

    const sendOrder = (evt) => {
        //evita que se recargue la pagina
        evt.preventDefault()
        //console.log(evt.target[0].value)
        const compra = {
            buyer: {
                name: evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value
            },
            items:productosCarrito, 
            total: getTotalPrice()
        }
        //console.log("compra", compra)
        //crear la referencia de donde voy a guardar el info en la bd
        const queryRef= collection(db, "orders")
        //agregar la informacion
        addDoc(queryRef, compra).then((resultado) => {
            console.log(resultado.id)
            setCompraId(resultado.id)
            setEnviado(true);
            evt.target.reset();

            setTimeout(() => {
                setEnviado(false);
              }, 30000); 
        })
    }
    
    return(

        <div>
    <div className="CarritoContainer">
        {productosCarrito.length === 0 ? (
        <h2 className="NoProductos">No hay productos en el carrito</h2>
        ) : (
        <>
            {productosCarrito.map((producto) => (
            <div className="ProductoAgregadoContainer">
                <h3>{producto.title}</h3>
                <p className="PrecioUnitario">Precio unitario: {producto.price}</p>
                <p className="Cantidad">Cantidad: {producto.quantity}</p>
                <p className="PrecioPorCantidad">Precio por cantidad {producto.quantityPrice}</p>
                <button className="BtnEliminar" onClick={() => removeItem(producto.id)}>Eliminar</button>
            </div>
            ))}
            <div className="ResumenCompra">
            <p className="PrecioTotal">
            <strong>Precio total: {getTotalPrice()}{" "}</strong>
            </p>
            <p className="TotalProductos">
            <strong>Total de productos: {getTotalProducts()}{" "}</strong>
            </p>

            <button className="RemoverTodo" onClick={removeAll}>Eliminar todos los productos</button>

            <div className="FormContainer">
                <h2 className="TituloFinalizarCompra">Estas a un paso de obtener los productos que deseas! Por favor llena los siguientes datos</h2>
            <form onSubmit={sendOrder}>
                <label className="NombreForm">Nombre</label>
                <input className='InputNombreForm'type="text"  placeholder="Nombre completo" required/>
                <label className="TelefonoForm">Telefono</label>
                <input className="InputTelefonoForm" type="tel"  placeholder="Telefono" pattern="[0-9]{10}" required/>
                <label className="CorreoForm">Correo</label>
                <input className="InputCorreoForm" type="email"  placeholder="Ingrese su correo" required/>
                <label className="DireccionForm">Direccion de Residencia</label>
                <input className="InputDireccionForm" type="text"  placeholder="Ingrese su direccion" required/>
                <button className="EnviarForm" type="submit">Enviar orden</button>
            </form>
            </div>

            {enviado && (
                                <p className="MensajeOrden"> Su compra fue realizada con la orden: {compraId}</p>
                            )}

            <Link to="/inicio">
            <button className="RegresoPaginaInicio">Regresar a la pagina de inicio</button>
            </Link>
            </div>
        </>
        )}
    </div>
    </div>

    )
}