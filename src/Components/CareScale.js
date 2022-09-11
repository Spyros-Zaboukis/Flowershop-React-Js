function CareScale({scaleValue, CareType}){
    const range = [1,2,3];
    const ScaleType = CareType === 'light'?  '☀️' : '💧' ;

    return (
        <div>
            {
            range.map((rangeElem) => 
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{ScaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale
