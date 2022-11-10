import { plantList } from '../datas/plantList'
import '../styles/ShopingList.css'
import PlantItem from './PlantItem'
import '../styles/Cart.css'
import React from 'react'


function ShoppingList({cart , updateCart, catPlant}){



    function addToCart(name, price){
        const currentPlantAdded= cart.find((plant)=> plant.name === name )

        if(currentPlantAdded){
            const cardFilteredCurrentPlant = cart.filter((plant => plant.name !== name)) 
       

        updateCart([...cardFilteredCurrentPlant, 
            { name , price, amount : currentPlantAdded.amount + 1 }
        ])
    }
    else{
        updateCart([...cart, {name , price , amount : 1}])
    }}
   
    return (
        <div>
            <ul className='lmj-plant-list' >
                {
                    plantList.map(({id, cover, name, water, light, price, category }) => (
                       
                        catPlant.catState==='default-value' ? (
                            <li key={id}>
                                        <PlantItem name={name} cover={cover} id={id} light={light} water={water} price={price}key={id} catPlant={catPlant}/>
                                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                    </li>
                        ) :
                        
                                category === catPlant.catState ? ( 
                                    <li key={id}>
                                        <PlantItem name={name} cover={cover} id={id} light={light} water={water} price={price}key={id} catPlant={catPlant}/>
                                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                    </li>
                                ) : null

                                    
                        )
                    )
                }
            </ul>
        </div>
    )

}

export default ShoppingList