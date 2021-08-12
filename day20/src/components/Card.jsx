const Card = ({ index , title , calories}) => {
    return (
      <div className = "card">             
            <div className = "title">{title|| "foodname"}</div>
            {/* <button className = "del" onClick = {deletetodo}>Delete</button> */}
            <div className = "calories">{calories|| "foodname"}</div> 
       {/* <h2 className="todo">{todo}</h2> */}
            <button onClick={() => deleteCard(index)}>Delete</button>
            </div>
            
    );
    };
export default Card;
    