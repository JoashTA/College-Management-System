const Welcom=(props)=>{
    return(
        <div>
            <h1>Hallo</h1>
            <h1>Welcome {props.name}</h1>
            <h1>{props.children}</h1>
        </div>
    )
}
export default Welcom;