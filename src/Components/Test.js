function Test(){
    return (
        <p onClick={(e)=>{console.log(e);

        }}>Testez-moi <span onClick={(event)=>{
            event.stopPropagation();
            console.log("coucou");
        }}>Coucou</span></p>
    )
}

export default Test