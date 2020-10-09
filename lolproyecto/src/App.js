import React from 'react';
import Campeones from './components/campeones';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NotFound from './pages/notFound';
import Detalles from './pages/detalles'


function App() {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path = "/detalles/:name" component =  {Detalles} />
        <Route exact path = "/" component =  {Campeones} />
        <Route exact  component =  {NotFound} />
      </Switch>
     </BrowserRouter>

     
    
  )
}

export default App;
