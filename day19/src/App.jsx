import React, { useState } from "react" ;
import "./App.css";
function App(props){
   const [count , setCount] = useState(0);
   const [count2 , setCount2] = useState(0);
   const [count3 , setCount3] = useState(0);
   const [count4 , setCount4] = useState(0);
    return(
        <div className = "App">
            <button onClick = {() => {
               const newCount = count + 1;
               setCount(newCount);
               console.log(count);
            }}
            >
            {count}
            </button>
            
            <button onClick = {() => {
               const newCount2 = count2 + 1;
               setCount2(newCount2);
               console.log(count2);
            }}
            >
            {count2}
                </button>

            <button onClick = {() => {
               const newCount3 = count3 + 1;
               setCount3(newCount3);
               console.log(count3);
            }}
            >
            {count3}
                </button>
            
            <button onClick = {() => {
               const newCount4 = count4 + 1;
               setCount4(newCount4);
               console.log(count4);
            }}
            >
            {count4}
                </button>
            </div>
    );
}
export default App;