import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Button } from './../Buttons/Button';
import './TaskDetails.css'
import {CgArrowLeft} from 'react-icons/cg';


export const TaskDetails = () => {
    const params = useParams()
    const history = useHistory()
    
    const handleClickBack = () => {
        history.goBack();
    }



    return (
        <>
            <div className="back--button--container container">
                <h2>{params.taskTitle}</h2>
                <Button onClick={handleClickBack}>
                    <CgArrowLeft style={{fontSize : '4rem'}}/>
                </Button>
                
                
            </div>
        </>
    )
}
