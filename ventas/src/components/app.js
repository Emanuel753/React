import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'

//Pages
import notFound from '../pages/notFound'
import Principal from '../pages/principal'
import Pedido from '../pages/pedidos'
import Detalle from './detalle'
import NavBar from './NavBar'
import Footer from './Footer'

function App(){
    return (
        <BrowserRouter>
        <NavBar />
        
            <Switch>  
                <Route exact path='/' component = {Principal} />
                <Route exact path='/pedido' component = {Pedido} />
                <Route exact path='/detalle/:id' component = {Detalle} />
                <Route component = {notFound} />
            </Switch> 
        <Footer />
        </BrowserRouter>
        
    )
}

export default App
