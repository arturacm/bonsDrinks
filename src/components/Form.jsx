import React from 'react'

class Form extends React.Component{
    render(){
        return(<form className="formulario">
            <input type="text" placeholder="testando aqui" />
            <input type="text" placeholder="testando E aqui" />
            <input type="text" placeholder="testando E aqui TBM" />
            <input type="button" value="submit" />

        </form>)
    }
}

export default Form;