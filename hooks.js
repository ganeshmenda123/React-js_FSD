// import { useState } from "react";

import { useState } from "react"

// function Hooks(){
//     //let cnt=0;
//     const [cnt,setCnt]=useState((0))
//     // const getCont=()=>{
//     //     ++cnt;
//     //     console.log(cnt)
//     // }
//     const [name,setName]=useState((""))
//     return(
//         <div>
//             <h1>React Hooks</h1>
//             <p>Count is:{cnt}</p>
//             <button onClick={()=>setCnt(cnt+1)}>Increment By 1</button>
//             <br/>
//             <input type="text" onChange={(e)=> setName(e.target.value)}/>
//             <p>The name is: {name}</p>
//         </div>
//     )
// }
// export default Hooks
function Hooks(){
    //let arr=[10,20,30,40,50]
    const[arr,setArr]=useState(['apple','banana','apple','papaya'])
    const [fruitname,setFruitname]=useState('')
    const Filterfruits=()=>{
        // console.log(arr)
        // console.log(fruitname)
        let filteredarray=arr.filter((ele)=>{
            return(ele===fruitname)
        })
        if(filteredarray.length==0){
            setArr(['apple','banana','apple','papaya'])
        }else{
            setArr(filteredarray)
        }
    }
    //const[arr,setArr]=useState([10,20,30,40,50])
    return(
        <div>
            <h1>Fruits </h1>
            <input type="text" onChange={(e)=>setFruitname(e.target.value)}/>
            <button onClick={Filterfruits}>chesk Fruits</button>
            <br/>
            <ul style={{'display':'inline-block'}}>
                {
                    arr.map((ele,i)=>{
                        return(<li key={i}>{ele}</li>)
                    })
                }
            </ul> 
        </div>
    )
}
export default Hooks;