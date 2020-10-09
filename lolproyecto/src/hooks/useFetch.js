import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) =>{

    const [datos, setDatos] = useState([])

    useEffect(() =>{
        const traerCampeones = async () =>{
            try {
                const res = await axios.get(url)
                const data = res.data.data
                setDatos([data])
            } catch (error) {
                console.log("no se pudo conectar con la API")
            }
            
      
        }

        traerCampeones()
    },[url])

    return {datos}
}

export default useFetch