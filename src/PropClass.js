import React from 'react'

class PropClass extends React.Component{
    constructor(){
        super();
        
    }
    componentDidMount(){
        console.warn("props in Did Mount", this.props.name);
    }
    componentDidUpdate(){
        console.warn("props Updated", this.props.name);
    }
    render(){
        return(<div>
            <h1>About PropsClass</h1>
            <h2>{this.props.name}</h2>
        </div>)
    }
}

export default PropClass;