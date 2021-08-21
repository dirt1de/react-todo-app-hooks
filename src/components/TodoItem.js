import React,{useContext, useRef} from 'react'
import { TodoContext } from '../App'

export default function TodoItem({item}) {
    const dispatch = useContext(TodoContext)

    const inputRef = useRef()

    return (
        <div>
            <input type="checkbox" checked={item.completed} onClick={()=>dispatch({type:"completed", payload:item.id})}/>
            <input type="text" ref={inputRef} defaultValue={item.text} onChange={()=>dispatch({type:"editText", payload:{text:inputRef.current.value, id:item.id}})}/>
            <button onClick={()=>dispatch({type:"delete", payload:item.id})}>delete</button>
        </div>
    )
}
