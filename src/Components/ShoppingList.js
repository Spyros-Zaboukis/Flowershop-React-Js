import { plantList } from '../datas/plantList'
import '../styles/ShopingList.css'
import PlantItem from './PlantItem'
import '../styles/Cart.css'




function ShoppingList(){


    let categoryPlant = plantList.reduce(
        (acc,plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category) , []
    )

   
    return(
        <div>

        <ul className='lmj-plant-list' >
            {
                plantList.map((plant, index) => (
                            <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} key={plant.id}/>
                    )
                )
            }
        </ul>


        </div>
    )
}

export default ShoppingList