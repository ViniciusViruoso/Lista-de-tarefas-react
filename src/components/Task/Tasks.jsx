import React from 'react'
import { Task } from './Task';

import './Tasks.css'


export const Tasks = ({tasks,handlerTaskClick,handlerTaskRemoved}) => {
    
    return (
        
        <main>
           <div>
           {tasks.map((task) => (
               
               <Task 
                   key={task.id}
                   task={task} 
                   handlerTaskClick={handlerTaskClick}
                   handlerTaskRemoved={handlerTaskRemoved}
               />
          ))}
           </div>
        </main>
    )
}
