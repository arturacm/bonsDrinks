import React from 'react'
import style from './Button.module.css'
class Button extends React.Component{
    constructor(props){
        super(props);
        this.clique = this.clique.bind(this);
        this.state = {
            disabled:false
        }
        console.log(`${this.props.texto} foi construido`);
    }
    clique(){
        this.setState({
            disabled:true
        })
        setTimeout(()=>{
            this.setState({
                disabled:false
            })
        },3000)
        console.log("A cor do props foi "+ this.props.cor);
    }
    render(){
        console.log(`${this.props.texto} foi renderizado`);
        return(
        <button disabled={this.state.disabled?true:false} onClick={this.clique} className = {style.botao}>
            {this.props.texto}
        </button>)
    }
    componentDidMount(){
        console.log(`${this.props.texto} foi montado`);
    }
    componentDidUpdate(){
        console.log(`${this.props.texto} foi atualizado`);
    }
    componentWillUnmount(){
        console.log("Tchau botao");
    }
}

export default Button;