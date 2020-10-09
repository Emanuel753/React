import React from 'react'

const Campeon = ({data}) =>{
    return (
        <div>
            {data.map((a)=>a.id)}
        </div>
    )
}

export default Campeon