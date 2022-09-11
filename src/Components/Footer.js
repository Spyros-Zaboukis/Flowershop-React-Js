import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	const [inputValue, setInputValue] = useState('Entrez votre e-mail')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form>
                <input placeholder={inputValue}  
                    
                    onChange={(e) => setInputValue(e.target.value)} 
                    
                    onBlur={(e)=>{
                        console.log(inputValue);
                        const ismail = inputValue.includes('@');
                        if(!ismail){
                            alert('votre adresse ne contient pas le signe @');
                        }
                     }}>
                </input>

            </form>
		</footer>
	)
}

export default Footer