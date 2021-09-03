
const intialState = "";
const counter = (state = intialState, action) => {
  switch(action.type)
 {
        case "EMAIL":
               return action.payload;
         
        default:
               return state;             
 }
    
};

export default counter;