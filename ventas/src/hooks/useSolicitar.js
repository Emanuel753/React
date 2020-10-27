import {useState, useEffect} from 'react'
import productos from '../produtos.json'

function useSolicitar(){
    const [prods,setProds] = useState("")
   
    useEffect(()=>{
       
        setProds("hola") 
    },[])
    return {prods}
}

export default useSolicitar