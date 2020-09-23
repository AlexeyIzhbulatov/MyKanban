import React from 'react';
import './App.css';




function NameTask(props) {

    const {index} = props


const left = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>)

    const right = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>)

    const up = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up-short" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>)



  return (
    <div className="nameTask">
        <div className="card-body">
            <h5 className="card-title">{props.tasks.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
  );
}

export default NameTask;


{props.tasks.name}


<span onClick={() => props.changeStatus({ id: props.tasks.id, direction: 'left'})}>
          {left}
      </span>
<span onClick={() => props.upTaskArrow(index)}>{up}</span>

<span onClick={() => props.changeStatus({ id: props.tasks.id, direction: 'right'})}>
          {right}
      </span>