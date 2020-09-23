import React, {useState} from 'react';
import './App.css';




function CreateTaskForm(props) {

 const [createTaskForm, setCreateTaskForm] = useState('')

 const addTask = () => {
     props.onCreateTask(createTaskForm)
     setCreateTaskForm('')
 }


  return (
    <div className="createTaskForm">
      <input type="text" value={createTaskForm} onChange={e => setCreateTaskForm(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>

    </div>
  );
}

export default CreateTaskForm;
