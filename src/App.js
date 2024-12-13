import {Provider} from 'react-redux';
import  store  from './store.js';
import ToDoList from './component/ToDoList.js';

function App() {
  return (
    <Provider store={store}>
      <div>
      <h1 style={{textAlign:"center",color:"whitesmoke"}}>Example of how to use redux toolkit</h1>
      <ToDoList/>
      </div>
    </Provider>
  )
}

export default App;
