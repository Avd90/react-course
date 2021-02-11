import React from 'react'
class About extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Avdesh",
            age:28
        }
    }
    componentDidMount(){
        console.warn("Did Mount");
    }
    componentDidUpdate(){
        console.warn("Did Update");
        alert("Name and Age Successfully Updated");
    }
    render(){
        return(
            <div>
               <h1>About Class Component</h1>
               <h2>{this.state.name}</h2>
               <h2>{this.state.age}</h2>
               <button onClick={()=>{this.setState({name:"Avdesh Kumar", age:27})}}>Update State</button>
            </div>
        )
    }
}

export default About;