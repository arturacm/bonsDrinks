import React, { useState, useRef, useEffect } from 'react'

function Form () {

    

    const novaRef = useRef(null)
    useEffect(()=>{
        novaRef.current.addEventListener("mouseover",()=>{
            if(novaRef.current.style.backgroundColor == "red"){
                novaRef.current.style.backgroundColor = "blue"
            }else{
                novaRef.current.style.backgroundColor = "red"
            }
            
        })
    },[])

    const [label, setLabel] = useState("Teste")
    const novoValor = (event)=> {
        setLabel(event.target.value)
        console.log(event,event.target)
    }
    return(
        <form className="formulario">
            <h1 ref={novaRef}>Teste da ref</h1>
        <input type="text" onChange={novoValor} placeholder="testando aqui" />
        {/* <input type="text" placeholder="Função" />
        <input type="text" placeholder="braba" /> */}
        <h1>{label}</h1>
        <input type="button" value="submit" />

    </form>)
}


export default Form;