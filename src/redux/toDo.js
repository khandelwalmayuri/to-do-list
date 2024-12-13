import { createSlice ,nanoid} from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"hello world"}],
}

const todoSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        save:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        remove:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                 return todo.id!==action.payload.id
           })
        },
        update:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
               if(todo.id===action.payload.id){
                todo.text=action.payload.text
               }
               return todo;
            })
        }
    }
})
export const {save,remove,update} = todoSlice.actions
export default todoSlice.reducer;