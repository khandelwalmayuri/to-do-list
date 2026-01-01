import React,{useRef} from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { remove, save, update } from '../redux/toDo.js';
import './toDoList.css'
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
  <div className="todo-container">
    <h2 className="title">📝 My Tasks</h2>

    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onInput={(e) => setInput(e.target.value)}
        className="todo-input"
      />

      <button ref={savebtn} onClick={handleSubmit} className="btn add-btn">
        ➕ Add
      </button>

      <button
        ref={updatebtn}
        onClick={handleUpdate}
        className="btn update-btn"
        style={{ display: "none" }}
      >
        🔄 Update
      </button>
    </form>

    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>

          <div className="action-btns">
            <button
              onClick={() => handleUpdation(todo)}
              className="btn edit-btn"
            >
              ✏️
            </button>
            <button
              onClick={() => dispatch(remove({ id: todo.id }))}
              className="btn delete-btn"
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

}

export default ToDoList