import React, { useState } from 'react'; // states are hooks
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  // todos is gonna refference all the infor inside the use state
  // setTodos is gonna be used to update todos 
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Feed jaguar', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Feed frog', rowAssigned: 'User Three'},
    {rowNumber: 4, rowDescription: 'Rest', rowAssigned: 'Coco'}
  ])

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };

      // todos.push(newTodo);
      setTodos(todos => [...todos, newTodo]); // we create a new array
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }


  return (
    <div className='mt-5 container'>
    <div className='card'>
      <div className='card-header'>
        Your To Dos
      </div>
      <div className='card-body'>
        <TodoTable todos = {todos} deleteTodo={deleteTodo}/>
        {/*we need to add pointer addToDo instead of function so it won't be automatically called when the app is rendered*/}
        {/*<button className = 'btn btn-primary' onClick={addTodo}>*/}
        <button onClick = {() => setShowAddTodoForm(!showAddTodoForm)} className = 'btn btn-primary'>
          {showAddTodoForm ? 'Close New To Do' : 'New To Do'} 
        </button> 
        {showAddTodoForm &&
          <NewTodoForm addTodo = {addTodo}/>
        } 
      </div>
    </div>
    </div>
  );
}
