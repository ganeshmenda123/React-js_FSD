import { useState } from "react";
import React from "react";
function Form(){
    const [name,setName]=useState('');
    const[rno,setRno]=useState('');
    function handleSubmit(events){
        events.preventDefault()
        console.log(name)
        console.log(rno)
    }
    return(
        <>
        <h1>This from home page</h1>
        <form onSubmit={handleSubmit}>
            <lable>Name</lable>
            <input type="text" name="fullname" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <lable>Roll No</lable>
            <input type="text" name="roll_no" onChange={(e)=>setRno(e.target.value)}/>
            <br/>
            <input type='submit' name='submit'/>
        </form>
        </>
    )
}
export default Form;