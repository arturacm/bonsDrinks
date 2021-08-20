import React, { Component } from 'react'
import style from './Drinks.module.css'

export default class Drinks extends Component {
    constructor(props){
        super(props);
        this.url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        this.state = {
            dados: [],
        }
    }
    render() {
        console.log(this.state)
        return (
            <div className = {style.drinksGrid}>
                {this.state.dados.map((drink,i)=>{
                    return i<10?(
                       
                        <div className={style.caixa} key={drink.idDrink}>
                            <img src={drink.strDrinkThumb} alt={`imagem do drink ${drink.strDrink}`} width="50px"/>
                            {drink.strDrink} 
                        </div>
                    ):'';
                    
                })}
             
            </div>
        )
    }
    componentDidMount(){
        fetch(this.url)
        .then(res=>res.json())
        .then(json=>{
            this.setState({dados: json.drinks})
        })
    }
    componentWillUnmount(){
        console.log("Tchau drinks");
    }
}
