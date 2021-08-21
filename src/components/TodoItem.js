import React,{useContext} from 'react'
import { TodoContext } from '../App'

export default function TodoItem({item}) {
    const dispatch = useContext(TodoContext)

    return (
        <div>
            {/* <input type="checkbox" checked={item.completed} /> */}
            <input type="text" defaultValue={item.id}/>
            <button onClick={()=>dispatch({type:"delete", payload:item.id})}>delete</button>
        </div>
    )
}
