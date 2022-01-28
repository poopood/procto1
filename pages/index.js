import React,{useState,useEffect} from 'react'
// import { render } from 'react-dom';

export default function Home() {
  const [todo, settodo] = useState("")

    const [todos, settodos] = useState([])


    const formSubmit = (e) => {
        e.preventDefault();
        settodos((prevState) => [...prevState, todo])
        settodo('')
    }
    const removeItem = (item) => {
      let filteredTodos = todos.filter((todoItem) => {
        return  todoItem !== item
      })

      // settodos(todos.filter((todoItem) => {
      //   return  todoItem !== item
      // }))
      settodos([...filteredTodos])
    }
    

    useEffect(() => {
      
     let hydrate =  JSON.parse(localStorage.getItem('todos'));

     if(hydrate){
      settodos(hydrate)
     }
     
      console.log(hydrate, "hydrate")
     
    }, [])
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

  return (
    <div>
        <h1>Hello There</h1>
        <h2>Todo List</h2>


        <h3>Add Todo</h3>
        <form action="#" onSubmit={formSubmit}>
          <input type="text" placeholder="add todo" value={todo} onChange={(e) => {settodo(e.target.value)}}/>
          <button type="submit">Submit</button>
        </form>
        <pre>{todo}</pre>
          <pre>{todos && todos.length}</pre>
        <h4>Todo list</h4>
        <ul>
          {todos && todos.map((item) => {
            return(
              <>
              <li>{item}  <span onClick={() => removeItem(item)}> X </span></li>
              </>
            )
          })}
        </ul>
    </div>
  )
}
