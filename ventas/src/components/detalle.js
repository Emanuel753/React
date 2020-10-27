import React from 'react'
import NotFound from '../pages/notFound';
import productos from '../produtos.json'



const Detalle = ({match}) =>{

    const id = match.params.id

    const pinturas = productos.filter((item)=>(parseInt(item.id) === parseInt(id)))

    if (pinturas.length < 1){
        return <NotFound/>
    }

    console.log(pinturas[0].nombre)
    return (
        <div className = "container mt-1">
          <h3 id = "detalle-compra">Informacion del producto</h3>
               <div className = "row container-fluid" key = {pinturas[0].nombre}>
                   <div className = " col-8"> 
                       <img className = "compra" src = {pinturas[0].img} alt = {pinturas[0].img}/>
                    </div>
                   <div className = "col-4 compra">
                       <h1>{pinturas[0].nombre}</h1>
                       <h2>$ {pinturas[0].precio}</h2>
                       <form className = "frm-detalle">
                           <div className = "form-group">
                                <input className = "form-control" 
                                type = "text" 
                                placeholder = "Cantidad"></input>
                                <button className = "btn btn-primary  btn-block mt-2" 
                                type="submit">Comprar</button>
                           </div>
                       </form>
                   </div>
                   
               </div>
            <div className = "mt-3">
                <h3>Detalle de la pintura</h3>
                <p>{pinturas[0].detalle}</p> 
            </div>    
        </div>
    )
}

export default Detalle