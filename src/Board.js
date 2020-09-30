import React from 'react';
import './App.css';
import Tasks from "./Tasks";


function Board(props) {


    return (
        <div className="board">
            {
              props.task.filter(el => el.status === props.status).map((el,index) => <Tasks key={el.id} task={el} updateArrowStatus={props.updateArrowStatus}/>)
            }
        </div>
    );
}

export default Board;
