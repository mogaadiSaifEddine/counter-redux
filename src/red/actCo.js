import { INCREMENT ,DECREMENT,RESET} from './typAct';
export const increment =()=>{
    return{type : INCREMENT}
}
export const decrement =()=>{
    return {type : DECREMENT}
}
export const reset =()=>{
    return {type : RESET}
}
