import React from 'react';
import '../App.css';

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="container">
      <div className="info">
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <button ><i className="bx bx-edit"></i></button>
        <button onClick={() => deleteTask(index)}><i className="bx bxs-trash"></i></button>
      </div>
    </div>
  );
};

// 2 state hogyi  button pe click krne pr form khulega 

export default Task;
  