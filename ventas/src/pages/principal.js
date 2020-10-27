import React from 'react'
import Productos from '../components/productos'
import Carousel from '../components/Carousel'
import DetalleProvider from '../Contex/DetalleProvider'

function Principal(){
    const estilos = {
        textAlign: "center"
    }
    return (
        <div >
            <DetalleProvider>
                <Carousel />
                <div className = "container-fluid mt-5">
                    <h1 style = {estilos}>Catalogo</h1>
                    <Productos />  
                
                </div>
            </DetalleProvider>
        </div>
        )
}

export default Principal