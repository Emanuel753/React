import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) =>{

    const [datos, setDatos] = useState([])
    const [spinner,setSpinner] = useState(true)

    useEffect(() =>{
        const traerCampeones = async () =>{
            try {
                const res = await axios.get(url)
                const data = res.data.data
                setDatos([data])
                setSpinner(false)
            } catch (error) {
                setSpinner(false)
                console.log("no se pudo conectar con la API")
            }
            
      
        }

        traerCampeones()
    },[url])

    return {datos, spinner}
}

export default useFetch