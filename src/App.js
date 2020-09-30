import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Board from "./Board";
import CreateFormTask from "./CreateFormTask";

const initialTasks = [
    {id: uuidv4(), title: 'Task1', priority: 0, status: 'todo'},
    {id: uuidv4(), title: 'Task2', priority: 1, status: 'progress'},
    {id: uuidv4(), title: 'Task3', priority: 2, status: 'review'},
    {id: uuidv4(), title: 'Task4', priority: 2, status: 'done'},
]


function App() {

    const [task, setTask] = useState(initialTasks)



    const updateArrowStatus = ({id, direction}) => {
        console.log(id, direction)
        const statuses = ['todo', 'progress', 'review', 'done']
        const arrowLeftUpdate = task.map(el => {
            if(el.id === id) {
                if(direction === 'left'){
                    el.status = statuses[statuses.indexOf(el.status) - 1];
                }
                if(direction === 'right'){
                    el.status = statuses[statuses.indexOf(el.status) + 1];
                }
                return el;
            } else return el;
        });
        setTask(arrowLeftUpdate)
    }

    const onCreateTaskForm = (tasks) => {
        const updateOnCreateTaskForm = [...task]
        updateOnCreateTaskForm.push({id: uuidv4(), title: tasks, status: 'todo'})
        setTask(task)
    }

    return (
        <div className="App">
            <div className="container">
                Kanban
                <CreateFormTask onCreateTaskForm={onCreateTaskForm}/>
                <div className="row">
                    <div className="col-sm">
                        Todo
                        <Board task={task} status={'todo'} updateArrowStatus={updateArrowStatus}/>
                    </div>
                    <div className="col-sm">
                        Progress
                        <Board task={task} status={'progress'} updateArrowStatus={updateArrowStatus}/>
                    </div>
                    <div className="col-sm">
                        Review
                        <Board task={task} status={'review'} updateArrowStatus={updateArrowStatus}/>
                    </div>
                    <div className="col-sm">
                        Done
                        <Board task={task} status={'done'} updateArrowStatus={updateArrowStatus}/>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default App;