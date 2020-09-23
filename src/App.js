import React, {useState} from 'react';
import './App.css';
import ColumnTask from "./ColumnTask";
import { v4 as uuidv4 } from 'uuid';
import CreateTaskForm from "./CreateTaskForm";


const initialTask = [
  {id: uuidv4(), name: 'Test1', priority: 1, status: 'todo'},
  {id: uuidv4(), name: 'Test2', priority: 2, status: 'progress'},
  {id: uuidv4(), name: 'Test3', priority: 3, status: 'review'},
  {id: uuidv4(), name: 'Test4', priority: 4, status: 'done'},
]



function App() {
  const [task,setTask] = useState(initialTask)

    const changeStatus = ({id, direction}) => {
      console.log(id, direction)
        const statuses = ['todo', 'progress', 'review', 'done']
        const changeStatuses = task.map(el => {
            if(el.id === id) {
               if(direction === 'left') {
 el.status = statuses[statuses.indexOf(el.status) - 1]
               }
                if(direction === 'right') {
                    el.status = statuses[statuses.indexOf(el.status) + 1]
                }
               return el;
            } else return el;
        })
        setTask(changeStatuses)
    }

    const onCreateTask = (onCreateTask) => {
        const updateCreateTaskForm = [...task];
      updateCreateTaskForm.push({id: uuidv4(), name: onCreateTask, priority: uuidv4(), status: 'todo'})
        setTask(updateCreateTaskForm)
    }

    const upTaskArrow = (index) => {
     console.log(index)
    }



  return (
    <div className="App">
        <div className="container">
            Kanban
            <CreateTaskForm onCreateTask={onCreateTask}/>
            <div className="row">
                <div className="col-sm">
                    To do
                    <ColumnTask tasks={task} status='todo' changeStatus={changeStatus} upTaskArrow={upTaskArrow}/>
                </div>
                <div className="col-sm">
                    Progress
                    <ColumnTask tasks={task} status='progress' changeStatus={changeStatus}  upTaskArrow={upTaskArrow}/>
                </div>
                <div className="col-sm">
                    Review
                    <ColumnTask tasks={task} status='review' changeStatus={changeStatus}  upTaskArrow={upTaskArrow}/>
                </div>
                <div className="col-sm">
                    Done
                    <ColumnTask tasks={task} status='done' changeStatus={changeStatus}  upTaskArrow={upTaskArrow}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;


