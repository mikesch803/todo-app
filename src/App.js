import { Button, TextField } from '@material-ui/core'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { db } from './firebaseConfig';
import firebase from 'firebase'
import { TodoListItem } from './Todo';


function App() {

const [todo, setTodo] = useState('')
const [todoItems, setTodoItems] = useState([])
useEffect(() => {
  getTodos();
},[]) //dependency [] for the browser loads only for first time

function getTodos(){
    db.collection("todos").onSnapshot(function(querySnapshot){
      setTodoItems(
      querySnapshot.docs.map((doc) => ({
        id : doc.id,
        todo : doc.data().todo,
        inprogress : doc.data().inprogress
      })))
    })
}

const addTodo = (e) => {
  e.preventDefault();  // prevent to reload the browser
  db.collection("todos").add({
    inprogress:true,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    todo: todo
  })
}

  return (
    <div>
    <div className="App" >
      <h1 className="title" data-hover="You are fucking awesome" style={{letterSpacing:"3px"}} >Make your todo list</h1>
      <form style={{marginBottom:"2rem"}}>
      <TextField id="standard-basic" label="write a todo" value={todo} onChange={(e) => { 
        setTodo(e.target.value);
       }}
       />
      <Button variant="contained" color="primary" 
       className="add-task"  onClick={addTodo} 
      style={{marginTop:"0.5rem"}}>Add task</Button>
      </form>
      <div className="todo-inprogress" >
      {todoItems.map((todo) => 
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id} key={todo.id} />
      )}
      </div>
      <div className="blank"></div>
    </div>
        <h1 className="credits">Made with ❤️ by Mahendra😄</h1>
    </div>
  );
}

export default App;
