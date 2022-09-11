function CareScale({scaleValue, CareType}){
    const range = [1,2,3];
    const ScaleType = CareType === 'light'?  '☀️' : '💧' ;
    
    let matiere = CareType==='water' ? "d'eau" : 'de soleil';
   

    return (
        <div onClick={ ()=> {
            if(scaleValue === 1){
                alert(`Cette plante à besoin de peu ${matiere}`);
            }else if(scaleValue===2){
                    alert(`Cette plante à besoin modérement ${matiere}`);
            }else{
                alert(`Cette plante à besoin de beaucoup ${matiere}`);
            }}
    }>
            
            {
            range.map((rangeElem) => 
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{ScaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale
