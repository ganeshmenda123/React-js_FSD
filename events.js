// function Events(){
//     const evn=()=>{
//         alert("hello...");
//     };
//     return(
//         <>
//         <h3>ganesh</h3>
//         <button onClick={evn}>click</button>
//         </>
//     )
// }
// export default Events

// function Events(){
//     const evn=(name)=>{
//         alert("hello..."+name);
//     };
//     return(
//         <>
//         <h3>ganesh</h3>
//         <button onClick={()=>evn('ganesh')}>click</button>
//         </>
//     )
// }
// export default Events


function Events(){
    //let arr=[10,20,30]
    let arr=[{
        name:'ganesh',
        rollno:1234
    },
    {
        name:'nivas',
        rollno:98765,
    }]
    const evn=(res)=>{
        res.map((ele,i)=>{
            document.write(i+1+"."+ele.name+" "+ele.rollno+"<br>")
        })
    }
    return(
        <>
        <h3>ganesh</h3>
        <button onClick={()=>evn(arr)}>click</button>
        </>
    )
}
export default Events