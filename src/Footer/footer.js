import React, { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";


const Footer = ({ addToDo, handleFilter, handleSearch, allTodos }) => {

  const handleAddClick = () => {
    addToDo()
  }

  const handleButtonClick = (event) => {
    // console.log(event.target.textContent)
    handleFilter(event)
  }

  const [count, setCount] = useState(0)
  useEffect(() => {
    let tempCount = 0
    allTodos.forEach((element) => {
      if(!element.isCompleted){
        tempCount++
      }
    });
    setCount(tempCount)
    return(()=>{
      console.log("unmounted");
    })  
  },[allTodos])

  return (

    <footer className='foo'>
      <div className='footer-content'>
        <AiOutlinePlus className="footer-icon" onClick={handleAddClick} />
        <AiOutlineSearch className="footer-icon" onClick={handleSearch} />
        <p className='para'> {count} items left</p>
        <div className='bttn'>
        <button onClick={handleButtonClick}>All</button>
        <button onClick={handleButtonClick}>Active</button>
        <button onClick={handleButtonClick}>Completed</button>
        </div>

      </div>
    </footer>
  )
}

export default Footer

