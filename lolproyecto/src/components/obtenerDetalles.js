import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
 import Spinner from '../components/spinner'


const ObtenerDetalles = () =>{
    const {name} = useParams()
    const {datos,spinner} = useFetch(`http://ddragon.leagueoflegends.com/cdn/10.20.1/data/es_MX/champion/${name}.json`)
    
    const divStyle = {
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg)`,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      
    }
    if(spinner){
        return <Spinner />
    }
        
    return (
            datos.map((campeon)=>Object.values(campeon).map((final)=>{
                return (
                    <div className = "oscuro">
                     <div className = "container-fluid header-detail" >
                     <img className = "img-header" alt = {name} src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`}/>
                         <div className = "container champ-detalles-img ">
                            <div className = "">
                                <img className = "img-detail" alt = {name} src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`}/>
                            </div>
                            <div className = "col-md-10 offset-md-1 align-items-center champ-detalles-descript">
                               <h1 className = "titulo-centrado titulo-global ">
                                   <span className = "title-detail-title">{final.title}</span>
                                   <strong className = "title-detail-name">{final.name}</strong>
                               </h1>
                                <p className = "detail-lore">{final.lore}</p>
                            </div>
                         </div>
                     </div>
                     <div>
                        {/* {final.skins.map((skin)=>(
                            
                             <img alt = {skin.name} src = {`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`} />
                        ))} */}
                     </div>
                    </div>
                    )}))
           
        )

}

export default ObtenerDetalles