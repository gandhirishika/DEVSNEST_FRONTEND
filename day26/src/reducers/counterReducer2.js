const intialState = "";
const counter2 = (state = intialState, action) => {
  switch(action.type)
 {
         case "PASSWORD" :
                return action.payload;
        default:
               return state;             
 }
    
};

export default counter2;