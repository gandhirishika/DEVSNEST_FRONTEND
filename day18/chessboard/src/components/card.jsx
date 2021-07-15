var arr = [];
for(var i=0;i<121;i++){
    arr.push(i);
}
const board= (i) =>{
if(i%2===0)
return (<div className = "black"></div>)
else
return (<div className = "white"></div>)
}
const Card =() =>{
    return(
    arr.map(board)
    );
};



export default Card;
