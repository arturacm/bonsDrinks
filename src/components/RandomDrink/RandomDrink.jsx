import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Corpo = styled.main`
    display: flex;
    flex-direction:column;
    align-items:center;
    .infos{
        display: flex;
        justify-content:center
    }
    .infos h4{
        width: 40%;
    }
    .infos table{
        width: 40%;
    }
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
                    <img src={drink.strDrinkThumb} alt={`imagem do drink ${drink.strDrink}`}/>
                    <div className="infos">
                    <table>
                        <th>Ingrediente</th>
                        <th>Quantidade</th>
                        <tbody>
                            {ingredientes.map((ingrediente,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{ingrediente.strIngredient}</td>
                                        <td>{ingrediente.strMeasure}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                        <h4>{drink.strInstructions}</h4>
                    </div>
                </>
                )
            }):"Carregando..."}
            <button onClick={()=>setTrocaDrink(trocaDrink+1)}> Novo drink</button>
        </Corpo>
    )
}

export default RandomDrink
