import { plantList } from '../datas/plantList'
import '../styles/ShopingList.css'


function ShoppingList(){


    let categoryPlant = plantList.reduce(
        (acc,plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category) , []
    )

    return(
        <div>


        <ul>
            {categoryPlant.map((cat)=>(
                <li key={cat} > {cat} </li>
            ))}
        </ul>

        <ul>
            {
                plantList.map((plant, index) => (
                
                        <li key={plant.id}>{plant.name}
                            {plant.isSpecialOffer && <span className='solde'> (Soldes) </span>}
                        </li>
                    )
                )
            }
        </ul>


        </div>
    )
}

export default ShoppingList