function Student(props){
    //let name='vidhyardhi'
    return(
        <>
            {/* <h2>Student name is {props.name}</h2> */}
            <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr>
        </>
    )
}
export default Student