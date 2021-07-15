const Card = (props) => {
    console.log(props);
    return (
      
        <div className = "card">
            <div className = "title">{props.title } </div>
            <div className = "description">{props.description}</div>
        </div>
     
        
    );
};
export default Card;
