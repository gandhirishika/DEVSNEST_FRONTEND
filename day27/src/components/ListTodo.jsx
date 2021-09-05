
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../actions";
const ListTodo = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
return (
    <div>
        {todos.map((todo , index) => ( 
       <div key={index}>
       <h3 style ={{display:"inline-block"}}>{todo.title}</h3>
        <button 
        onClick={() => {
               dispatch(deleteItem((index)));
        }}
        >
        Delete
        </button>
        </div>
        ))}
    </div>
);
};




export default ListTodo;