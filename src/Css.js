import React from 'react';
function Css() {
    const mystyle = {
    color: "Green",
    backgroundColor: "lightBlue",
    padding: "10px",
    fontFamily: "Arial"
    };
    const mystyle1 = {
    color: "red",
    fontWeight: "bold"
    };
return (
    <>
    <h1 style={mystyle}>Wow a background </h1>
    <p style={mystyle1}>Using CSS</p>
    </> 
    );
}
export default Css