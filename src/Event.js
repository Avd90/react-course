import React,{useState} from 'react'

function Event(){
    
    const [val, setValue] = useState("Avdesh")
    
    const test = (e)=>{
         console.warn("test function", e.target.value)
         setValue(e.target.value)
    }

    return(
        <div>
            <h1>Events Inside Functions Componant in React</h1>
            <input type="text" value={val} onChange={test} />
            <button onClick={()=>alert(val)}>Click Me</button>
        </div>
    )
}

export default Event;