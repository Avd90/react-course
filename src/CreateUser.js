import React,{useState} from 'react'
import {Button} from 'react-bootstrap';

function CreateUser()
{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function MakeUser()
    {
        let data = {name, age, address}
        console.warn("Called", data)
    }
    return(
      <div>
          <h1>Create New User</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} name="username" value={name} placeholder="User Name"/><br/><br/>
            <input type="text" onChange={(e) => setAge(e.target.value)} name="username" value={age} placeholder="User Age"/><br/><br/>
            <input type="text" onChange={(e) => setAddress(e.target.value)} name="username" value={address} placeholder="User Address"/><br/><br/>
            <button onClick={MakeUser}>Create User</button>
            {/* <Button variant="primary" onClick={MakeUser}>Create User</Button> */}
      </div>
    )
}

export default CreateUser;