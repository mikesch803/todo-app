import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebaseConfig'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

export function TodoListItem({todo, inprogress, id}) {
    const updateTodo = () => {
          db.collection("todos").doc(id).update({
              inprogress:!inprogress
          }) 
    }

    const deleteTodo = () => {
        db.collection("todos").doc(id).delete()
    }

    return (
        <div className="main">
            <ListItem >
                <ListItemText  primary={todo} secondary={inprogress?"complete":"in progress" }/>
            </ListItem>
            <Button onClick={updateTodo} style={{padding:"0.5rem"}}>{inprogress? <CheckCircleIcon/>:<LiveHelpIcon/>}</Button>
            <DeleteForeverIcon onClick={deleteTodo} style={{marginTop:"1rem", fontSize:"2rem"}}/>
        </div>
    )
}
