import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

    const {todos} = props           /*first steps were in main.jsx*/

  return (
    <ul className='main'>
           {todos.map ((todo, todoIndex) => {
            return (
               <TodoCard {...props} key={todoIndex} index=
               {todoIndex}>     
                    <p>{todo}</p>
               </TodoCard>
            )                              /*{...props} this means spread components from app recived in props to the todo card  */
           })}              
    </ul>
  )
}
