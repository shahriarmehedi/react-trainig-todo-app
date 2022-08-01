import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const todoData = [

  ]

  console.log(todos);


  // BUTTON FUNCTION
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todoData.length + 1,
      text: todo
    }
    setTodo('');
    todoData.push(newTodo);
    setTodos([...todos, newTodo]);
  }


  // ONCHNAGE FUNCTION
  const onchange = (e) => {
    setTodo(e.target.value);
    console.log(e.target.value);
  }



  return (
    <div className="App">

      <h3>Todo Application</h3>

      <input onChange={onchange} type="text" />
      <button onClick={addTodo}>Add</button>

      <div>
        {
          todos.map(todo => {
            return <div key={todo.id}>{todo.text}</div>
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
