import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid'

import './App.css';
import { AddTask } from './components/Addtask/AddTask';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Task/Tasks';
import { TaskDetails } from './components/Taskdetails/TaskDetails';
import axios from 'axios';
import { Footer } from './components/Footer/Footer';


const App = () => {
  const [tasks, setTasks] = React.useState([])

  React.useEffect(() =>{
    const fetchTask = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=3'
        );

        setTasks(data);
        
    }
    fetchTask()

    
    
  },[]);

  const handlerTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {...task, completed: !task.completed};
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  const handlerTaskAddtional = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      }
    ]

    setTasks(newTasks)
  }

  const handlerTaskRemoved = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks)
    
  }


  return (
    <Router>
      <div className="container">
        <Header/>
        <AddTask handlerTaskAddtional={handlerTaskAddtional}/>
      </div>
      
      <Route 
          path="/" 
          exact 
          render={() =>(
              <>
                <div className="tasks--container">
                  <Tasks 
                  tasks={tasks} 
                  handlerTaskClick={handlerTaskClick}
                  handlerTaskRemoved={handlerTaskRemoved}
                  />
                </div>
              </>
          )}/>

        <Route
          path="/:taskTitle"
          exact
          component={TaskDetails}
        />
      <Footer/>
    </Router>
  );
}

export default App;