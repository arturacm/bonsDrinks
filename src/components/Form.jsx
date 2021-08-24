import React, { useState } from 'react'

function Form () {
    const [label, setLabel] = useState("Teste")
    const novoValor = (event)=> {
        setLabel(event.target.value)
        console.log(event,event.target)
    }
    return(
        <form className="formulario">
        <input type="text" onChange={novoValor} placeholder="testando aqui" />
        {/* <input type="text" placeholder="Função" />
        <input type="text" placeholder="braba" /> */}
        <h1>{label}</h1>
        <input type="button" value="submit" />

    </form>)
}


export default Form;