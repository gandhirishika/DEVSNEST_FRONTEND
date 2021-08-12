import Card from "./components/Card";
import React, {useState} from "react";
import "./App.css" ;



function App(props){
return(
    
        <div className = "container">
        <Card title= "Pizza"  calories = "There are 250 calories" index = "1"/>
        <Card title= "Burger" calories = "There are 150 calories" index = "2"/>
        <Card title= "Bhelpuri" calories = "There are 100 calories" index = "3" />
        <Card title= "PAVBHAJI" calories = "There are 170 calories" index = "4"/>
        <Card title= "GEVAR" calories = "There are 20 calories" index = "5"/>
    </div>
);
}
const deleteCard = (index) => {
        const newArr = calories.filter((ex) => ex.index !== index);
        setCal(newArr);
      };
export default App;


function App() {
        const [cal, setCal] = useState([
          { index: 1, title: "pizza", desc: "calories consumed by you ", value: 160},
          { index: 2, title: "popcorn", desc: "calories consumed by you ", value: "60" },
          { index: 3, title: "burger", desc: "calories consumed by you ", value: 260 },
          { index: 4, title: "Noodles", desc: "calories consumed by you ", value: 350 },
          { index: 5, title: "Pasta", desc: "calories consumed by you ", value: 400 }
        ]);
        const deleteCard = (id) => {
          const newArr = cal.filter((ex) => ex.id !== id);
          setCal(newArr);
        };
      
        return (
          <div className="App">
            <h1>Calorie Read Only</h1>
            <div className="box">
              {cal.map((i) => (
                <Card
                  title={i.title}
                  desc={i.desc}
                  value={i.value}
                  cal={cal}
                  setCal={setCal}
                  deleteCard={() => {
                    deleteCard(i.id);
                  }}
                />
              ))}
            </div>
          </div>
        );
      }
      export default App;