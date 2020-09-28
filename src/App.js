import React, {useState} from 'react';
import './App.css';
import ColumnTask from "./ColumnTask";
import { v4 as uuidv4 } from 'uuid';
import CreateTaskForm from "./CreateTaskForm";


const initialTask = [
  {id: uuidv4(), name: 'Test1', priority: 0, status: 'todo'},
  {id: uuidv4(), name: 'Test2', priority: 1, status: 'progress'},
  {id: uuidv4(), name: 'Test3', priority: 2, status: 'review'},
  {id: uuidv4(), name: 'Test4', priority: 2, status: 'done'},
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
                if(direction === 'up') {
                    el.priority = changeLevel[changeLevel.indexOf(el.priority) + 1]
                }
               return el;
            } else return el;
        })
        setTask(changeStatuses)
    }

    const onCreateTask = (onCreateTask) => {
        const updateCreateTaskForm = [...task];
      updateCreateTaskForm.push({id: uuidv4(), name: onCreateTask, status: 'todo'})
        setTask(updateCreateTaskForm)
    }

    const changeLevel = [0, 1, 2];


в

  return (
    <div className="App">
        <div className="container">
            Kanban
            <CreateTaskForm onCreateTask={onCreateTask}/>
            <div className="row">
                <div className="col-sm">
                    To do
                    <ColumnTask tasks={task} status='todo' changeStatus={changeStatus}/>
                </div>
                <div className="col-sm">
                    Progress
                    <ColumnTask tasks={task} status='progress' changeStatus={changeStatus}/>
                </div>
                <div className="col-sm">
                    Review
                    <ColumnTask tasks={task} status='review' changeStatus={changeStatus}/>
                </div>
                <div className="col-sm">
                    Done
                    <ColumnTask tasks={task} status='done' changeStatus={changeStatus}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;


