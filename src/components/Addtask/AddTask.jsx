import React from 'react'
import './AddTask.css'
import { Button } from '../Buttons/Button';

export const AddTask = ({handlerTaskAddtional}) => {
    const [inputData, setInputData] = React.useState('')

    const handlerInputChange = (e) => {
        let valorInput = e.target.value
        setInputData(valorInput)
    }

    const handlerAddTaskClick = () => {

        if(inputData !== '') {
            handlerTaskAddtional(inputData)
        } else {
            return null
        }
        setInputData('')
    }

    return (
        <div className="add--task--container">
           <input 
            onChange={handlerInputChange} 
            className="add--task--input" 
            type="text"
            value={inputData}
            required
           /> 
           <div className="add--task--button--container">
                <Button onClick={handlerAddTaskClick}>Adicionar</Button>
           </div>

        </div>
    )
}
