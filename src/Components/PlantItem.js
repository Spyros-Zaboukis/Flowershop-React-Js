import { plantList } from "../datas/plantList"
import '../styles/Item.css'
import p1 from '../assets/photos/p1.jpg'
import CareScale from './CareScale'
import '../styles/ShopingList.css'
import '../styles/Cart.css'





function PlantItem(plant){

    return (
        <div>
             <li className="lmj-plant-item" key={plant.id}>
                <img className="lmj-plant-item-cover" src= {p1} alt='photoPlant' />     
            </li>

            <p> {plant.name}<br/>
                 prix : {plant.price}€ </p>
                <CareScale CareType="light" scaleValue={plant.light}/>
                <CareScale CareType="water" scaleValue={plant.water}/>
            </div>
            
          
            
    
    )
}

export default PlantItem