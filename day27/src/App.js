import AddTodo from './components/AddTodo';
import './App.css';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="App">
     <h1>Todo List</h1>
     
     <AddTodo/>
     <ListTodo/>
    </div>
  );
}

export default App;
