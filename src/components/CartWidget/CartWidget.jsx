import { CartContext } from "../../contex/CartContext"
import "./CartWidget.css"
import { useContext } from "react"
export const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext)
    return(
        <div>
              <div className="CartWidgetContainer">
            <div className="CarContainer">
            <span><img className="Car" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="ShoppingCar"></img></span>
            <div className="NumberContainer">
                <span className="Number">{getTotalProducts()} </span>
                </div>
            </div>
            </div>
        </div>
    )
}