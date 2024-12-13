import React,{useRef} from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { remove, save, update } from '../redux/toDo.js';
function ToDoList() {
const {todos}=useSelector((store)=>store.todos)
const [input,setInput]=useState("")
const [Id,setId]=useState("")
const dispatch=useDispatch();
const updatebtn=useRef();
const savebtn=useRef();
const handleUpdate=(e)=>{
  e.preventDefault();
  if(input.trim())dispatch(update({text:input,id:Id}))
  savebtn.current.style.display="inline"
  updatebtn.current.style.display="none"
  setInput("")
}

const handleSubmit=(e)=>{
  // console.log(input)
  e.preventDefault();
  if(input.trim())dispatch(save({text:input}))
  setInput("")
}
const handleUpdation=(todo)=>{
  savebtn.current.style.display="none"
  updatebtn.current.style.display="inline";
  setInput(todo.text)
  setId(todo.id)
}
  return (
    <div>
    <form className="App-Form" style={{textAlign:"center"}}>
    <input 
      type="text" 
      placeholder="enter the task" 
      value={input} onInput={(e) => setInput(e.target.value)} 
      style={{
        backgroundColor:"whitesmoke",
        width:"50%",
        padding:"0.50%",
        borderRadius:"10%"
      }}/>
    <button 
      ref={savebtn} 
      onClick={handleSubmit}>+
    </button>
    <button 
      style={{display:"none"}} 
      ref={updatebtn} 
      onClick={handleUpdate}>Update
    </button>
    </form>
   <ul>
  {
    todos.map(todo=>(
      <li key={todo.id}
      >{todo.text}<button onClick={()=>handleUpdation(todo)}>update</button><button onClick={()=>dispatch(remove({id:todo.id}))}>X</button></li>
    ))
  }
   </ul>
   </div>
  )
}

export default ToDoList