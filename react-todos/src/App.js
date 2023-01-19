import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Feed jaguar', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Feed frog', rowAssigned: 'User Three'},
    {rowNumber: 4, rowDescription: 'Rest', rowAssigned: 'Coco'}
  ]

  return (
    <div className='mt-5 container'>
    <div className='card'>
      <div className='card-header'>
        Your To Dos
      </div>
      <div className='card-body'>
        <TodoTable todos={todos}/> 
      </div>
    </div>
    </div>
  );
}

export default App;
