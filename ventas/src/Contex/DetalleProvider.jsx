import React from 'react'

export const DetalleContex = React.createContext()

const DetalleProvider = (props) => {

    
    const [carrito,setCarrito] = React.useState([])
    const [totalCarro] = React.useState(50)

    return (
        <DetalleContex.Provider value = {{carrito,setCarrito,totalCarro}}>
            {props.children}
        </DetalleContex.Provider>
    )
}

export default DetalleProvider
