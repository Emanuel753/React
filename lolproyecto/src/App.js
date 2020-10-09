import React from 'react';
import Campeones from './components/campeones';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NotFound from './pages/notFound';
import Detalles from './pages/detalles'
import Mapas from './pages/mapas'
import Modos from './pages/modoJuegos'
import NavBar from './components/navBar'

function App() {
  return (
     <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path = "/detalles/:name" component =  {Detalles} />
        <Route exact path = "/mapas" component =  {Mapas} />
        <Route exact path = "/modosjuego" component =  {Modos} />
        <Route exact path = "/" component =  {Campeones} />
        <Route exact  component =  {NotFound} />
      </Switch>
     </BrowserRouter>

     
    
  )
}

export default App;
