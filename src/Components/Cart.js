function Cart(){

    let monsteraPrice = 8 ;
    let lierrePrice = 10 ;
    let bouquetDeFleurPrice = 15 ;

    return(
        <div>
            <ul>
                <li>monstera : {monsteraPrice}€ </li>
                <li>lierre : {lierrePrice}€ </li>
                <li>bouquet de fleurs : {bouquetDeFleurPrice}€</li>
            </ul>

            <p>Total : { monsteraPrice + lierrePrice + bouquetDeFleurPrice }€</p>

        </div>
    )
}

export default Cart