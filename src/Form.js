import React from 'react';
class Form extends React.Component {
constructor(props)
{
    super(props);
    this.input = React.createRef();
    this.input1 = React.createRef();
}
updateSubmit=(event) =>{
    document.write("The name is "+this.input.current.value+"<br>");
    document.write("The company name is "+this.input1.current.value);
    event.preventDefault();
}
render() {
        return (
        <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled Form Example</h1>
        <label>Name:
        <input type="text" ref={this.input} />
        </label>
        <label>
        CompanyName:
        <input type="text" ref={this.input1} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        ); 
    } 
} export default Form;