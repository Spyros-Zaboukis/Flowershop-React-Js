import { plantList } from '../datas/plantList'
import '../styles/ShopingList.css'
import PlantItem from './PlantItem'
import '../styles/Cart.css'
import React from 'react'




function ShoppingList({cart , updateCart}){


    const categoryPlant = plantList.reduce(
        (acc,plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category) , []
    )

    function addToCart(name, price){
        const currentPlantAdded= cart.find((plant)=> plant.name === name )

        if(currentPlantAdded){
            const cardFilteredCurrentPlant = cart.filter((plant => plant.name !== name)) 
       

        updateCart([...cardFilteredCurrentPlant, 
            { name , price, amount : currentPlantAdded.amount + 1 }
        ])
    }
    else{
        updateCart([... cart, {name , price , amount : 1}])
    }}



   
    return(
        <div>
            <ul>
                {categoryPlant.map((cat) => (
                <li key={cat}>{cat}</li>
                ))}
            </ul>

            <ul className='lmj-plant-list' >
                {
                    plantList.map(({id, cover, name, water, light, price}) => (
                                <div key={id}>
                                    <PlantItem name={name} cover={cover} id={id} light={light} water={water} price={price}key={id}/>
                                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                </div>
                        )
                    )
                }
            </ul>


        </div>
    )
}

export default ShoppingList