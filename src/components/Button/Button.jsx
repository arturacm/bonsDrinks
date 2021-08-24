import React , {useState} from 'react'
import style from './Button.module.css'

function Button (props){
    const [disabled, setDisabled] = useState(false)
    console.log(props)
    function clique(){
        setDisabled(true);
        setTimeout(()=>{
            setDisabled(false)
        },3000)
        console.log("A cor do props foi "+ props.cor);
    }

    return(
        <button disabled={disabled} onClick={clique} className = {style.botao}>
            {props.texto}
        </button>)
    }



export default Button;