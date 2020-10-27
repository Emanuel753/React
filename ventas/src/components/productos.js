import React, { useEffect, useState } from 'react'
import productos from '../produtos.json'
import Card from '../components/card'
import Modal from './Modal'
import {DetalleContex} from '../Contex/DetalleProvider'

const Listado = () =>{
    // estilos modal
    const claseEstilos = "btnModal"

    const [datos,setDatos] = useState([])
    const [total,setTotal] = useState(0)
    
    const {carrito,setCarrito} = React.useContext(DetalleContex)
    useEffect(()=>{
        const obtenerDatos = ()=>{
            const info = []
            productos.map((data)=>(info.push(data)))
            setDatos(info)
        }
        const calcularTotalVentas = () =>{
                   // Calcular total de la ventas
            let totalC = 0
            carrito.map((carro)=>{
            totalC = totalC + parseInt(carro.precio)
            setTotal(totalC)
            return totalC
        }) 
        }
        obtenerDatos()
        calcularTotalVentas()
    },[carrito,total])
    
    const contenidoCarrito = () =>{
 
        return (<div>
            <table className = "col-md-12">
            <thead>
                <tr>
                   <th>Producto</th>
                   <th>Precio</th>
                   <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map((carro,index)=>(
                    <tr key = {index}>
                        <td>{carro.nomb}</td>
                        <td>{carro.precio}</td>
                        <td>1</td>
                        <td><button className = "btn btn-danger mt-3" onClick= {()=>eliminarCompra(carro.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table> 
      
         </div>)
    }
    const contenidoBotonModal = () =>{
        return(
            total <= 0 
                ? (<div className = "alert alert-dark mt-3" role="alert">
                        Tu carrito esta vacio
                   </div>)
                :(<div className = "mt-3">
                    <h3><span>Total: $</span><strong>{total}</strong></h3>
                    <button onClick={()=>finalizarCompra()} className = "btn btn-success">Finalizar compra</button>
                    </div> )      
        )
    }
    const finalizarCompra = () =>{
        console.log("Finalizo la compra")
    }
    // Eliminar una compra

    const eliminarCompra = (id) =>{
        console.log(id)
        const arrayNuevo = carrito.filter((datos)=>(datos.id !== id))
        setCarrito(arrayNuevo)
        
        // Calcular total de la ventas
        let totalC = 0
        if(arrayNuevo.length === 0){
           setTotal(0)
        }else{
        arrayNuevo.map((carro)=>{
            
            totalC = totalC + parseInt(carro.precio)
            setTotal(totalC)
            return totalC
        })}

    }
    return (
         <div className = "row">
             {datos.map(((items,index)=>(
                 <div key = {index} className = "col-md-4 col-sm-6 col-xs-12 mb-4">
                    <Card data = {items}/>
                 </div>
             )))}
            <Modal uso = {true} contenido = {contenidoCarrito()} estilo = {claseEstilos} boton = {contenidoBotonModal()}/>
         </div>         
    )
}


export default Listado