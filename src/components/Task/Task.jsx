import React from 'react'
import './Task.css'
import {CgClose, CgInfo} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

export const Task = ({ task,handlerTaskClick,handlerTaskRemoved }) => {
    const history = useHistory()

    let titleTaskFormat = task.title;
    if(titleTaskFormat.length > 30) {
        titleTaskFormat = titleTaskFormat.substring(0, 40) + '...';
    }



    const handlerTaskDetailsClick = () => {
        history.push(`/${titleTaskFormat}`)
    }

    


    return (
        <div 
        className="task--container" 
        style={task.completed ? {transition: 'all 0.4s ease',textDecoration: 'line-through',fontStyle:'italic',borderLeft: '30px solid #5e005e'}:{}}
        >
            <div className="task--title" onClick={() => handlerTaskClick(task.id)}>
                {titleTaskFormat}
            </div>

            <div className="task--buttons--container">
                <button 
                    className="see--task--details"
                    onClick={handlerTaskDetailsClick}
                >
                    <CgInfo/>
                </button>
                <button 
                    className="remove--task" 
                    onClick={() => handlerTaskRemoved(task.id)}
                >
                    <CgClose/>
                </button>
            </div>
            
        </div>
    )
}
