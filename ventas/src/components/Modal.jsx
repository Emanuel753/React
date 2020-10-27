import React from 'react'
import carrito1 from '../resources/carrito1.png'
import {DetalleContex} from '../Contex/DetalleProvider'

const Modal = (props) => {
    const [styleModal, setStyleModal] = React.useState({})
    const uso = props.uso

    const {carrito,setCarrito} = React.useContext(DetalleContex)

    const agregar = () =>{
        const pedidos = {
            id:props.data.id,
            nomb: props.data.nombre,
            precio: props.data.precio
        }

        setCarrito([...carrito,pedidos])
        btnModal()
    }

    const btnModal = () =>{

        const styleModal = {
            display: "block"
        }
        setStyleModal(styleModal)
    }

    window.onclick = function(e) {
        if (e.target.id === "tvesModal") {
            cerrarModal()
            console.log("Se cerro")
        }
        if (e.target.id === "modalCard") {
            cerrarModal()
            console.log("Se modalCard")
           
        } 
    }
    const cerrarModal = () =>{
        const styleModal = {
            display: "none"
        }
        setStyleModal(styleModal)
    }

//////////////////////////////////////////////
    return (
        <div className = "container">
            <button className = {props.estilo} onClick = {uso ? ()=>btnModal(): ()=>agregar()}>
                
                {uso===true ? (<img alt = "carrito" src = {carrito1} />):(<span>Añadir al carrito</span>)}

            </button>
                <div id="tvesModal" style = {styleModal} className = "modalContainer" >
            		<div className = "container col-md-6 col-12 modal-content">
            			<span className = "close" onClick = {()=>cerrarModal()}>×</span>
                        {props.contenido}
                         {props.boton}
                       
                       {uso===false && <button onClick = {()=>cerrarModal()} className = "btn btn-success">Aceptar</button>}
                       
            		</div>
            </div>
                                  
        </div>
    )
}

export default Modal
