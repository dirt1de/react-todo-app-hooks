import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
    return (
            todos.map(todo=>{
                return <TodoItem key={todo.id} item={todo}></TodoItem>
              })
    )
}
