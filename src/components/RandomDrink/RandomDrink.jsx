import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Corpo = styled.main`
    display: flex;
    flex-direction:column;
    align-items:center;

    img{
        height:100px;
    }
`


function RandomDrink() {
    const [randomDrink, setRandomDrink] = useState([])
    const [trocaDrink, setTrocaDrink] = useState(1)
    useEffect(()=>{
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            setRandomDrink(json.drinks)
        })
        return ()=> console.log(`o drink foi trocado ${trocaDrink} vezes`)
    },[trocaDrink])
    
    return (
        <Corpo>
            {randomDrink.length>0?randomDrink.map(drink=>{
                const ingredientes = []
                for(let i=1; i<=15; i++){
                    if(drink["strIngredient"+i]){
                        ingredientes.push({
                            strIngredient: drink["strIngredient"+i],
                            strMeasure: drink["strMeasure"+i]
                        })
                    }else{
                        break;
                    }
                }
                return(
                <>
                    <h1>{drink.strDrink}</h1>
                    <img src={drink.strDrinkThumb}/>
                    <table>
                        <th>Ingrediente</th>
                        <th>Quantidade</th>
                        {ingredientes.map((ingrediente,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{ingrediente.strIngredient}</td>
                                    <td>{ingrediente.strMeasure}</td>
                                </tr>
                            )
                        })}
                    </table>
                </>
                )
            }):"Carregando..."}
            <button onClick={()=>setTrocaDrink(trocaDrink+1)}> Novo drink</button>
        </Corpo>
    )
}

export default RandomDrink
