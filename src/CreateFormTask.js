import React, {useState} from 'react';
import './App.css';




function CreateFormTask(props) {

    const [tasks, setTasks] = useState('')

    const addTask = () => {
        props.onCreateTaskForm(tasks)
        setTasks('')
    }

    return (
        <div className="createFormTask">
            <input type="text" value={tasks} onChange={e => setTasks(e.target.value)}/>
            <button onClick={addTask}>Add task</button>
            </div>
    );
}

export default CreateFormTask;