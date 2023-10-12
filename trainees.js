import Student from "./student"

function Trainees(){
    let trainees=[{
        name:'kiran',
        rollno:123,
    },
    {
        name:'nivas',
        rollno:456,
    },
    {
        name:'veera',
        rollno:987
    }]
    return(
        <div>
            {/* <h2>Trainees List</h2>
            <Student name='ganesh  123  ECE'/>
            <Student name='nivas'/>
            <Student name='veera'/> */}
            <h3>Trainees</h3>
            <table border={1} cellSpacing={0} align="center" width={'200px'}>
                <tr><th>S.No</th><th>Name</th><th>Roll No</th></tr>
            {
                trainees.map((ele,i)=>{
                    return(<Student index={i} name={ele.name} rollno={ele.rollno}/>)
                })
            }
            </table>
        </div>
    )
}
export default Trainees

// import React,{ Component } from "react";
// class Trainees extends Component{
//     render(){
//       let trainees=[{
//         name:'kiran',
//         rollno:123,
//     },
//     {
//         name:'nivas',
//         rollno:456,
//     },
//     {
//         name:'veera',
//         rollno:987
//     }]
//     return(
//         <div>
//             {/* <h2>Trainees List</h2>
//             <Student name='ganesh  123  ECE'/>
//             <Student name='nivas'/>
//             <Student name='veera'/> */}
//             <h3>Trainees</h3>
//             <table border={1} cellSpacing={0} align="center" width={'200px'}>
//                 <tr><th>S.No</th><th>Name</th><th>Roll No</th></tr>
//             {
//                 trainees.map((ele,i)=>{
//                     return(<Trainees index={i} name={ele.name} rollno={ele.rollno}/>)
//                 })
//             }
//             </table>
//         </div>
//     )
// }
// }
// export default Trainees;