import React, {useEffect, useState} from 'react'

function Contact(){
    const [name, setName] = useState("Avdesh")
    const [age, setAge] = useState(28)
    const [mobile, setMobile] = useState("6393363243")
    useEffect(()=>{
        console.warn("hello from hoke")
    },[age, mobile])
    let data = "About Function Component"
    return(
        <div>
            <h1>{data}</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Mobile: {mobile}</h2>
            <button onClick={()=>setName("Avdesh Kumar")}>Update Name</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>setAge(27)}>Update Age</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>setMobile("7376002483")}>Update Mobile</button>
        </div>
    )
}

export default Contact;