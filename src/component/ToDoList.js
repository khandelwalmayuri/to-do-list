import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { remove, save } from '../redux/toDo.js';
function ToDoList() {
const {todos}=useSelector((store)=>store.todos)
const [input,setInput]=useState("")
console.log(todos)
const dispatch=useDispatch();

const handleSubmit=(e)=>{
  console.log(input)
  e.preventDefault();
  dispatch(save({text:input}))
}
  return (
    <>
    <form className="App-Form" onSubmit={handleSubmit}>
    <input type="text" onInput={(e) => setInput(e.target.value)}/>
    <button type="submit">+</button>
    </form>
   <ul>
  {
    todos.map(todo=>(
      <li key={todo.id}
      >{todo.text}<span onClick={()=>dispatch(remove({id:todo.id}))}>X</span></li>
    ))
  }
   </ul>
   </>
  )
}

export default ToDoList