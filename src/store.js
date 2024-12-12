import {configureStore} from '@reduxjs/toolkit';
import toDoReducer from './redux/toDo.js'
const store=configureStore({
    reducer:{todos:toDoReducer},
})
export default store;