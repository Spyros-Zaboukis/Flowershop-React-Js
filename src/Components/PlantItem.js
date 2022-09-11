import { plantList } from "../datas/plantList"
import '../styles/Item.css'
import p1 from '../assets/photos/p1.jpg'
import CareScale from './CareScale'


function HandleClick(plant){
    console.log(`hello the plant is : ${plant}`);
}



function PlantItem(plant){

    return (
             <li className="lmj-plant-item" key={plant.id} onClick={()=> HandleClick(plant.name)}>

            <img className="lmj-plant-item-cover" src= {p1} />

            <h2>{plant.name}</h2>

            <CareScale CareType="light" scaleValue={plant.light}/>
            <CareScale CareType="water" scaleValue={plant.water}/>
            
            
            </li>
          
            
    
    )
}

export default PlantItem