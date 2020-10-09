import React from 'react'
import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'

const Campeones = () =>{
    const {datos} = useFetch("http://ddragon.leagueoflegends.com/cdn/10.20.1/data/es_MX/champion.json")
    return (
        <div>
          <ul>
              {datos.map((campeon)=>(     
                Object.keys(campeon).map((nombre)=>(
                    <li><Link to = {`/detalles/${nombre}`}>{nombre}</Link></li>
                ))
              ))} 
          </ul>
        </div>
    )
}

export default Campeones
