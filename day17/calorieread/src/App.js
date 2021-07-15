import React  from "react";
import "./App.css";
import Card from "./components/Card";
function App(props) {
  return( 
  <div className = "App">
  <div className="container">
    <Card title = "pani puri" description  = "100 calories"/>
    <Card   title = "pav bhaji" description  = "10 calories"/>
    <Card  title = "bhel puri" description  = "1000 calories"/>
    <Card  title = "sev puri" description  = "400 calories"/>
    <Card  title = "dosa" description  = "200 calories"/>
    <Card  title = "pani puri" description  = "600 calories"/>
  </div></div>
  );
}
export default App;
