import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Board from "./Board";

const initialTasks = [
    {id: uuidv4(), title: 'Task1', priority: 0, status: 'todo'},
    {id: uuidv4(), title: 'Task2', priority: 1, status: 'progress'},
    {id: uuidv4(), title: 'Task3', priority: 2, status: 'review'},
    {id: uuidv4(), title: 'Task4', priority: 2, status: 'done'},
]


function App() {

    const [task, setTask] = useState(initialTasks)

    const leftArrow = (id, status) => {
        console.log(id, status)
    }

    return (
        <div className="App">
            <div className="container">
                Kanban
                <div className="row">
                    <div className="col-sm">
                        Todo
                        <Board task={task} status={'progress'} leftArrow={leftArrow}/>
                    </div>
                    <div className="col-sm">
                        Progress
                        <Board task={task} status={'progress'} leftArrow={leftArrow}/>
                    </div>
                    <div className="col-sm">
                        Review
                        <Board task={task} status={'review'} leftArrow={leftArrow}/>
                    </div>
                    <div className="col-sm">
                        Done
                        <Board task={task} status={'done'} leftArrow={leftArrow}/>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default App;


44