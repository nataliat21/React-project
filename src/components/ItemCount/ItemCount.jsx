import React, {useState} from 'react';
import "../ItemCount/ItemCount.css"
import {Link} from "react-router-dom"

export const ItemCount = ({stock, onAdd}) => {
    let [counter, setCounter] = useState(0);
    const [irCarrito, setIrCarrito] = useState(false)
    const[seguirComprando, setSeguirComprando] = useState(false)


     //Se le puede pasar como parametro "event", es un evento relacionado a una etiqueta
    const IncrementCounter = () => {
    if (counter < stock)
        setCounter(counter + 1);
    };

    const DecrementCounter = () => {
        if( counter === 0){
            counter = 0;
        }
        else{
            setCounter(counter - 1);
        }
        
    };  

    

    return(
    <div>
        <div className='CounterContainer'>
            <p className='stock'>Stock disponible: {stock}</p>
            <button onClick={IncrementCounter} className='IncrementBtn'>+</button>
            <input className='InputCounter' type='text' value={counter} readOnly></input>
            <button onClick={DecrementCounter} className='DecrementBtn'>-</button>
        </div>

        <div className='AddCarContainer'>
            <button className='AddCar' onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>

        {counter >= 1 && (
        <div className="ButtonContainer">
            <Link to='/inicio'>
            <button className='btnSeguirComprando'  onClick={() => onAdd(counter)}>Seguir comprando</button>
            </Link>
            <Link to='/cart'>
            <button className='btnIrAlCarrito'>Ir al carrito</button>
            </Link>
        </div>
        )}
    </div>
        )
    }

