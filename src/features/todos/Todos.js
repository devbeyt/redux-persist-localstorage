import React, { useState,useEffect } from 'react'
import {addTodo,removeTodo} from './todosSlice'
import {useDispatch,useSelector} from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';


function Todos() {

    const todo = useSelector(state=>state.todo.items)
    const [title,setTitle] = useState('')
    const dispatch = useDispatch();
    
    const handleSumbit = (e) =>{
        e.preventDefault()
        dispatch(addTodo({id:nanoid(),title,}))
        localStorage.setItem('items',JSON.stringify(title))
        setTitle('')
    }

   useEffect(()=>{
       window.onload = localStorage.getItem('items')
   },[])
    

  return (
    <div>
        <form onSubmit={handleSumbit}>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            <button>add Todos</button>
        </form>
        {
            todo.map(item=>(
                <p>{item.title}
                <span onClick={()=>dispatch(removeTodo(item.id))} style={{marginLeft:'130px',color:'red',cursor:'pointer',fontWeight:'bold'}}>X</span></p>
            ))
        }
    </div>
  )
}

export default Todos