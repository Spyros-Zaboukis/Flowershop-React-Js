import { plantList } from '../datas/plantList'


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
            { plantList.map((plant, index)=>(
                <li key={`plantList-${plant.name}-${index}`} >{plant.name}</li>
            )) }
        </ul>


        </div>
    )
}

export default ShoppingList