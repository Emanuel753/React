import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const ObtenerDetalles = () =>{
    const {name} = useParams()
    const {datos} = useFetch(`http://ddragon.leagueoflegends.com/cdn/10.20.1/data/es_MX/champion/${name}.json`)


    return (
            datos.map((campeon)=>Object.values(campeon).map((final)=>{
                return (
                    <div>
                        <h1>{final.name}</h1>
                        <h3>{final.title}</h3>
                        <p>{final.lore}</p>
                     <div></div>
                    {final.skins.map((skins)=>(console.l))}
                    </div>
                    )}))
        )

}

export default ObtenerDetalles