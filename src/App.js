import React, { useState } from "react"
import Footer from "./Footer/footer";
import Todo from './Todo'
import { useEffect } from "react";
// import { getInitialTodoData } from "./utils/Utils";


function App() {

  const [todos, setTodos] = useState([])
  const [todoToAdd, setTodoToAdd] = useState('')
  const [allTodos, setAllTodos] = useState([])

  // useEffect(()=>{
  //   setTodos(getInitialTodoData())
  //   setAllTodos(getInitialTodoData())
  // },[])

  const handleChange = (event) => {
    setTodoToAdd(event.target.value)
  }

  const addToDo = () => {
    if (todoToAdd !== '') {

      setTodos([...todos, { text: todoToAdd, isCompleted: false, id: allTodos.length + 1 }])

      // console.log(todos)
      setTodoToAdd('')
      setAllTodos([...allTodos, { text: todoToAdd, isCompleted: false, id: allTodos.length + 1 }])
    }
  }

  const handleStatusChange = (id) => {
    // console.log(todos, id)
    const tempArray = [...allTodos]
    const tempItem = tempArray[id - 1]
    tempItem.isCompleted = !tempItem.isCompleted
    tempArray[id - 1] = tempItem
    setAllTodos(tempArray)
  }


  const handleFilter = (event) => {
    // console.log(event)
    let tempArray = []
    // console.log(allTodos)
    if (event.target.textContent === 'All') {
      setTodos(allTodos)
    }
    if (event.target.textContent === 'Completed') {
      tempArray = allTodos.filter((item) => {
        return item.isCompleted
      })
      setTodos(tempArray)

    }
    if (event.target.textContent === 'Active') {
      tempArray = allTodos.filter(item => {
        return !item.isCompleted
      })
      setTodos(tempArray)
    }
  }


  const handleSearch = () => {
    let tempArray = allTodos.filter((item) => {
      return item.text.includes(todoToAdd)
    })
    setTodos(tempArray)
  };

  // const [count, setCount] = useState(0)


  return (
    <div className="App">

      <div>
        <h1 className="header">THINGS TO DO</h1>

        <input className="search" type="text" placeholder="Add new" value={todoToAdd} onChange={handleChange} />

      </div>

      <ul >
        {todos.length > 0 && todos.map((element, index) => {
          return <Todo key={index} element={element} index={index} handleStatusChange={handleStatusChange} />
        })}

      </ul>

      <Footer addToDo={addToDo} handleFilter={handleFilter} handleSearch={handleSearch} allTodos={allTodos} />


    </div>


  );
}

export default App;
