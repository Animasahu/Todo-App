import React from 'react'

const Todo = ({ element, index, handleStatusChange }) => {

  return (
    <ul className='list'>
      <div className='row'>
        {
          element.isCompleted ?
           <input type='checkbox' checked onClick={() => handleStatusChange(element.id)} /> : 
          <input type='checkbox' onClick={() => handleStatusChange(element.id)} />
        }
        
        <p className='text'>{element.text}</p>

      </div>
    </ul>
  )
}

export default Todo

