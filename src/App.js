import './App.css';
import {Provider} from 'react-redux';
import  store  from './store.js';
import ToDoList from './component/ToDoList.js';

function App() {
  return (
    <Provider store={store}>
      <h1>Example of how to use redux toolkit</h1>
      <ToDoList/>
    </Provider>
  )
}

export default App;
