import React, {useState} from 'react'
import "../App.css"
//making array 
const Todo = () => {
    const [inputData , setInputData] = useState('');
    const [items , setItems] = useState([]);
    const [toggleButton , setToggleButton] = useState(true);
    const [isEdit , setisEdit] = useState(null);
//add button
    const addItem = () => {
       if (!inputData)
       {
       }
       else if(inputData && !toggleButton)
       {
setItems(
    items.map((elem) => {
        if(elem.id ==isEdit){
            return {...elem, name:inputData}
        }
        return elem;
    })
)
       }
       else{
      setItems([...items, inputData]);
     setInputData('')
       }
    }
 //edit button
 const editItem = (id) => {
     let newEditItem = items.find((elem) => {
         return elem.id == id
     });
console.log(newEditItem);
setToggleButton(false);
setInputData(newEditItem.name);
setisEdit(id);
 }   

//delete button
const deleteItem = (id) => {
console.log(id);
const updatedItems = items.filter((elem, ind) => {
return ind!==id;
});
setItems(updatedItems);
}
//remove
const removeAll = ()=>{
    setItems([]);
}
    return (
        <>
        <div className = "main">
            <div className = "child">
                <div className = "item">
                    <input type = "text" placeholder = "Add items" 
                     value = {inputData}
                    onChange = {(e) => setInputData(e.target.value)}
                    />
                    {
                        toggleButton ? <button className = "add" onClick = {addItem}>Add</button> :
                        
                        <button className = "edit" onClick = {addItem}>Edit</button>
                    }
                   
                   
                </div>
                <div className = "showitems">
                    {
                        items.map((elem , ind) => {
return(
                    <div className = "eachitems" key = {ind}>
                        <h3>{elem}</h3>
                        <div className = "eachitem">
                        <button className = "edit" onClick ={() => {editItem(ind)}}>Edit</button>
                        <button className = "del" onClick ={() => {deleteItem(ind)}}>Delete</button>
                        </div>
            </div>

)
                        })
                    }
            </div>
            <div className = "showitems">
                {/* <button className = "check"><span>CHECKLIST</span></button> */}
                <button className = "remove" onClick = {removeAll}><span>REMOVE</span></button>
            </div>
            </div>
            </div>
            </>
            
    );
};
export default Todo