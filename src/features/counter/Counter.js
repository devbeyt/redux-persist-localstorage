import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {selectCount,increment,decrement,incrementByAmount} from './counterSlice'

function Counter() {

    const [amount,setAmount] = useState('')
    const dispatch = useDispatch();
    const count = useSelector(selectCount)

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <br/>
        <input type="text" value={amount} onChange={e=>setAmount(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(amount))}>incrementByAmount</button>
        <hr/>
    </div>
  )
}

export default Counter