import React, {useEffect, useState, Fragment} from 'react'
import {Table} from 'react-bootstrap'

function UserList()
{
    //http://dummy.restapiexample.com/api/v1/employees
    const [user, setUser] = useState([])   
    useEffect(()=>{
        fetch("https://api.mocki.io/v1/05d2069f").then((data)=>{
            data.json().then(result=>{
                console.warn("result", result)
                setUser(result)
            })  
        })
    },[])
    return(
        <Fragment>
            <h1> User List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Fragment>
    )
}

export default UserList;