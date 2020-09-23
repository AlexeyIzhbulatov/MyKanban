import React from 'react';
import './App.css';
import NameTask from "./NameTask";




function ColumnTask(props) {






  return (
    <div className="columnTask">
      {
        props.tasks.filter(el => el.status === props.status).map((el,index) => <NameTask key={el.id} tasks={el} changeStatus={props.changeStatus} upTaskArrow={props.upTaskArrow} el={el} index={index}/>)
      }
    </div>
  );
}

export default ColumnTask;

