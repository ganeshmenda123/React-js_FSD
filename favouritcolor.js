//task----1

// import React, { useState } from 'react';

// function  App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     if(count<10){
//     setCount(count + 1);}
//   }; 
//   const decrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };
//   return (
//     <center>
//     <div style={{height:"200px",width:'200px',border:'1px solid black',backgroundColor:'skyblue'}}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment} style={{color:'red',backgroundColor:'whitesmoke',}}>Increment</button>
//       <button onClick={decrement} style={{color:'green',backgroundColor:'whitesmoke',marginLeft:'10px'}}>Decrement</button>
//     </div>
//     </center>
//   );
// }

// export default App;

//task---2
import React, { useState } from 'react';
import './App.css';

function App() {
const [backgroundColor, setBackgroundColor] = useState('white');
const changeBackgroundColor = () => {
const colors = ['red', 'blue', 'green', 'yellow', 'purple','pink','grey'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
setBackgroundColor(randomColor);
 };

 return (
   <center>
    <div className="App1" style={{ backgroundColor }} >
      <h1 style={{color:'white'}}>Full Stack</h1>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
    </center>
  );
}
export default App;
