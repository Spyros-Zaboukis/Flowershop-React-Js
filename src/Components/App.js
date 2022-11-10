import Banner from './Banner'
import Cart from './Cart';
import React from 'react';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState, useEffect } from 'react';
import Catselect from '../Components/Catselect';

function App() {

  const savedCart = localStorage.getItem('cart')
  
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  //ici je vais déclarer le state de mon composant Catselect
  const [catPlant, setCatPlant]= useState({'catState' : 'default-value'})
  

  return (
    <div>
        
        <Banner/>
       <div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart}/>
          <Catselect catPlant={catPlant} setCatPlant={setCatPlant}/>
          <ShoppingList cart={cart} updateCart={updateCart} catPlant={catPlant} />
        </div>

        <Footer/>

    </div>
  );
}

export default App;

