import React, { useState } from 'react';
function User(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h1>You clicked this button {count} times</h1>
            <button onClick={()=>setCount(count+1)}>Clicke here</button>
        </div>
    )
}

export default User
/*import React from 'react';
class User extends React.Component{
    constructor(props)
    {
        super(props)
        {
            this.state={
                username:'',comments:'',topic:''
            }
        }
    }
    handleChange=(event)=>{
      this.setState({username:event.target.value});
      }
    handleCommentsChange=(event)=>{
        this.setState({comments:event.target.value});
      }
    handleTopicChange=(event)=>{
        this.setState({topic:event.target.value});
      }
    handleSubmit=(event)=>{
        document.write("The name is "+this.state.username+"<br>");
        document.write("The comment is "+this.state.comments+"<br>");
        document.write("The Topic is "+this.state.topic+"<br>");
        event.preventDefault();
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Uncontrolled Form Example</h1>
                <label>Name:
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label>
                    Comments
                    <input type="text" value={this.state.comments} onChange={this.handleCommentsChange}/>
                </label>
                <label> Select Topics: <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Angular</option>
                    </select></label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default User;*/