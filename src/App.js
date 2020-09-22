import React, {useState} from 'react';
import './App.css';
import ColumnTask from "./ColumnTask";
import { v4 as uuidv4 } from 'uuid';


const initialTask = [
  {id: uuidv4(), name: 'Test1', priority: 1, status: 'todo'},
  {id: uuidv4(), name: 'Test2', priority: 2, status: 'progress'},
  {id: uuidv4(), name: 'Test3', priority: 3, status: 'review'},
  {id: uuidv4(), name: 'Test4', priority: 4, status: 'done'},
]



function App() {
  const [task,setTask] = useState(initialTask)

    const changeStatus = ({id, direction, index}) => {
      console.log(id, direction)
        const statuses = ['todo', 'progress', 'review', 'done']
        if(index === 0 || index < task.length)
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



  return (
    <div className="App">
        <div className="container">
            Kanban
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
