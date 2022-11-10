import React from 'react';
import { plantList } from '../datas/plantList';

function Catselect({catPlant, setCatPlant}){
        
    const categoryPlant = plantList.reduce(
        (acc,plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category) , []
    )

    return(
        <select defaultValue='default-value' 
        onChange={(e)=> { 
            setCatPlant({...catPlant, 'catState' : e.target.value })
            }}>
            
            <option key="default-value" value='default-value'>Toutes les plantes</option> 
            
            {categoryPlant.map((cat) => (
                <option key={cat} value={cat}>Plante {cat} </option>
            ))}
        </select>
    )
}


export default Catselect