
import { INCREMENT ,DECREMENT,RESET} from './typAct';


const initialState ={
counter :0,
visible:false
};
const counterRed =(state=initialState,action)=>{ 
    switch (action.type) {
        case INCREMENT: 
        return{...state,counter:state.counter+1};

        case DECREMENT : 
        return{...state,counter:state.counter-1};
        case RESET : 
        return{...state,counter:0}
            
           
    
        default: 
        return state;
            
    }

}
export default counterRed