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
            console.log(action.payload)
            state.todos=state.todos.filter((todo)=>{
                 return todo.id!==action.payload.id
           })
        }
    }
})
export const {save,remove} = todoSlice.actions
export default todoSlice.reducer;