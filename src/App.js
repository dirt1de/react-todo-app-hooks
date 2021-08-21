import React,{useReducer} from 'react'
import './App.css';
import TodoList from './components/TodoList';

// This is how you export the Context object for the components to use
export const TodoContext = React.createContext()


export default function App() {
  const appReducer = (state, action) => {
    switch (action.type) {
      case "addPost":
        return [
          ...state,
          {
            id: Date.now(),
            text:"",
            completed: false
          }
        ]
      case "delete":{
        return state.filter(item=>item.id!==action.payload)
      }
      case "completed":{
        return state.map(item=>{
          if(item.id===action.payload){
            return {
              ...item,
              completed:!item.completed
            }
          }
          return item
        })
      }
      case "editText":{
        return state.map(item=>{
          if(item.id===action.payload.id){
            return {
              // this is how you edit the content of an object by 
              // overwriting part of it
              ...item,
              text:action.payload.text
            }
          }
          return item
        }) 
      }
      default:
        return state
    }
  }


  const [state, dispatch] = useReducer(appReducer, [])


  return (

    <TodoContext.Provider value={dispatch}>
      <div className="App">
        <h1>Todo App demo</h1>
        <button onClick={() => dispatch({type:"addPost"})}>Add new todo</button>
        <br />
        <br />
        <div>
          {state.map((item)=>{
            return <h4 key={item.id}>{JSON.stringify(item)}</h4>
          })}
        </div>
        <TodoList todos={state}></TodoList>
      </div>
    </TodoContext.Provider>
  )
}
