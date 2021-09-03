
import './App.css';
import {email , password} from "./actions";
import {useDispatch , useSelector} from "react-redux";
function App() {

  const count = useSelector(state =>state.counter);
  const count2 = useSelector(state =>state.counter2);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Input</h1>
    <input type="text"placeholder = "email"  onChange= {(e) =>dispatch(email(e.target.value)) }/>
    <input type="Username" placeholder="password" onChange= {(e) =>dispatch(password(e.target.value))}/>
      
<h1>Data</h1>
<h3>Email:{count}</h3>
<h3>Username:{count2}</h3>
</div>
  );
}

export default App;
