import React from 'react'
import './todo.css';


function TodoComponent(props){
    return(
        
    <div className="container">
        <h4>USER ID: {props.userId}</h4>     
       <h4> ID: {props.id}</h4> 
       <h4>TITLE: {props.title}</h4>   
       <h4>BODY: {props.body}</h4>   
     </div>
    )
}

export default TodoComponent;