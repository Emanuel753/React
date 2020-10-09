import React from 'react'
import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'
import Spinner from './spinner'

const Campeones = () =>{
    const {datos,spinner} = useFetch("http://ddragon.leagueoflegends.com/cdn/10.20.1/data/es_MX/champion.json")

    if(spinner){
      return <Spinner/>
    }

    return (
        <div className = "container">
          <h1 className = "titulo-centrado">Campeones</h1>
          <hr/>
          <div className = "row container-fluid">
                {datos.map((campeon)=>(     
                  Object.keys(campeon).map((nombre)=>(
                    <Link to = {`/detalles/${nombre}`} className = "campeones  col-md-2 col-6 mt-3 ">
                      <img className = "avatar-champ" alt = {nombre} src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nombre}_0.jpg`}/>
                      <span className = "avatar-name ">{nombre}</span>
                    </Link>
                  ))
                ))} 
          </div>
        </div>
    )
}

export default Campeones
