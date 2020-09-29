import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ColumnTask from "./ColumnTask";


const taskList = [
    {id: uuidv4(), nameTask: 'Task1', priority: 0, taskGenetation: 'Good job jo next man!', status: 'todo'},
    {id: uuidv4(), nameTask: 'Task2', priority: 1, taskGenetation: 'Good job jo next man!', status: 'review'},
    {id: uuidv4(), nameTask: 'Task3', priority: 2, taskGenetation: 'Good job jo next man!', status: 'progress'},
    {id: uuidv4(), nameTask: 'Task4', priority: 2, taskGenetation: 'Good job jo next man!', status: 'done'},
]


function App() {

    const [tasks, setTasks] = useState(taskList);


  return (
    <div className="App">
        <div className="container">
            Kanban
            <div className="row">
                <div className="col-sm">
                    To do
                 <ColumnTask tasks={tasks} status='todo'/>
                </div>
                <div className="col-sm">
                    Review
                    <ColumnTask tasks={tasks}  status='review'/>
                </div>
                <div className="col-sm">
                    Progress
                    <ColumnTask tasks={tasks}  status='progress'/>
                </div>
                <div className="col-sm">
                    Done
                    <ColumnTask tasks={tasks} status='done'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;


