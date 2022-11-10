import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart , updateCart}){

    const [isOpen, setIsOpen ] = useState(true);

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    useEffect(()=>{
        alert(`je vais devoir payer : ${total}`)
    }, [total])

    return(
        isOpen ? (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <button onClick={() => setIsOpen(false)}>Fermer</button>

            {cart.map(({name, price, amount}, index ) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ * {amount}
                    </div>   
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([]) }>Vider Le panier</button>
        </div>
        )
        :
        (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        )
        
    )
    
}

export default Cart

