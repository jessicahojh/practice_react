import React from "react"
import TodoItem from "./ToDoItem"
import todosData from "./todosData"

function ToDoList() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default ToDoList