import React from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'


const Card = ({data}) =>{
    const contenidoModal = () =>{
        return(
            <div>
                <h1>Se agrego al carrito</h1>
            </div>
        )
    }
   
return (
    
    <div className = "product " key = {data.id}>
        <div className = "">
        <Link  to = {`detalle/${data.id}`}>
            <img alt = {data.nombre} src = {data.img} className = "card-img"/>
        </Link>  
        </div>
        <div className = "container">
            <h2 className = "card-title">{data.nombre}</h2>
            <p className = "card-text">Precio: ${data.precio}</p>
            <div className = "row">
                    <Modal uso = {false} 
                    data = {data} 
                    contenido = {contenidoModal()} 
                    estilo = "btn-block btn-carrito"
                  />

            </div>     
        </div>      
    </div>
)  
}

export default Card