import {useSelector,useDispatch} from 'react-redux'
import React from 'react';
import {decrement,reset, increment} from './red/actCo';
  const Counter =()=>{
    const count= useSelector((state) => state.counter);
    const dis=useDispatch();
    return(
    <div>
        <h1>counter</h1>
        <button onClick={()=>dis(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={()=>dis(increment())}>+</button>
        <button onClick={()=>dis(reset())}>reset</button>
    </div>
    )}
/*const mapstate =(state)=>{
    return{count : state.counter}

};
const mapdis =(dispatch)=>{
    return{increment: ()=>{dispatch(increment())}
    }   

};*/
export default Counter;