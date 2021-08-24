import React, { useState, useEffect } from 'react'
import style from './Drinks.module.css'

function Drinks () {

    useEffect(()=>{
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            setDrinks(json.drinks)
        })
    },[])
    
    const [drinks, setDrinks] = useState([]);
    
    return (
        <div className = {style.drinksGrid}>
            {drinks.length>0?drinks.map((drink,i)=>{
                return i<10?(
                    
                    <div className={style.caixa} key={drink.idDrink}>
                        <img src={drink.strDrinkThumb} alt={`imagem do drink ${drink.strDrink}`} width="50px"/>
                        {drink.strDrink} 
                    </div>
                ):'';
                
            }):"Carregando..."}
            
        </div>
    )

}

export default Drinks;