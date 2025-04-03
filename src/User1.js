import React from 'react';
class User1 extends React.Component{
    constructor(){
        super()
        this.state={name:"Joash Thomas", Clgname:"VIT Vellore",Address:"Kerala"
        }
    }
    updateState=()=>
    {
        this.setState(
            {name:"Thomas Abraham", Clgname:"VIT Chennai",Address:"Dubai"
        }
        )
    }
    render()
    {
        return(
            <div>
                <h1>Hi my name is {this.state.name}</h1>
                <h1>I study in {this.state.Clgname}</h1>
                <h1>I am from {this.state.Address}</h1>
                <button onClick={this.updateState}>Click Me</button>
            </div>
        )
    }
}

export default User1