import React, {useEffect, useState} from 'react'

function PropFunction(props){
    
    useEffect(()=>{
        console.warn("Props Function", props.name)
    },[])
    useEffect(()=>{
        console.warn("Props Function 2 Updated", props.name)
    },[props.name])
    let data = "About PropsFunction Component"
    return(
        <div>
            <h1>{data}</h1>  
            <h2>{props.name}</h2>
            
        </div>
    )
}

export default PropFunction;