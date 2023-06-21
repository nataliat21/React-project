import { createContext, useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [productosCarrito, setProductosCarrito] = useState([])
    //Verifica si el producto ya existe o no
    const isInCart = (id) => {
        const productExist = productosCarrito.some((elemento) => elemento.id === id)
        return productExist
    }

    const addProduct = (item, quantity) => {
        const productosCarritoCopy = [...productosCarrito]
        //si el producto ya existe, modifico la propiedad quantity de ese objeto
        if(isInCart(item.id)){
            const posProduct = productosCarritoCopy.findIndex((elemento) => elemento.id === item.id)
            productosCarritoCopy[posProduct].quantity += quantity
            productosCarritoCopy[posProduct].quantityPrice =  productosCarritoCopy[posProduct].quantity*  productosCarritoCopy[posProduct].price
            setProductosCarrito(productosCarritoCopy)
        }
        else{ //si no agrego el nuevo producto al arreglo
            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice: quantity*item.price,
            }
           
            productosCarritoCopy.push(newProduct)
            setProductosCarrito(productosCarritoCopy)
        }
    }

    const getTotalPrice = () => {
        const precioTotal = productosCarrito.reduce((acumulador, curr) =>acumulador + curr.quantityPrice, 0 )
        return precioTotal
    }

    
    const getTotalProducts = () => {

        const totalProducts = productosCarrito.reduce((acumulador, curr) => acumulador + curr.quantity, 0 )
        return totalProducts
    }

    const removeItem = (id) => {
        const newProducts = productosCarrito.filter((elemento) => elemento.id !== id)
        setProductosCarrito(newProducts)
    }

    const removeAll = () => {
        setProductosCarrito([])
    }

    return (
        <CartContext.Provider value={{productosCarrito, addProduct, getTotalPrice, getTotalProducts,removeItem, removeAll}}>
            {children}
        </CartContext.Provider>
    )
}