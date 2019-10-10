import React, { useState, useEffect } from "react";
import './Contador.scss'

const Contador = () => {
    const [personagens, setPersonagens] = useState(1)
    const Avançar  = () =>{
        setPersonagens(personagens + 1);
    } 
    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character/${personagens}`, {
          method: "GET"
        }).then(result=>{
          return result.json()
        }).then(data=>{
          console.log(data.name)
        })
      },[personagens])
      return(
          <div>
              <button onClick={Avançar}>ADICIONAR</button>
          </div>
      )
      }
    export default Contador;