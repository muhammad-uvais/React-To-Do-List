import React, { useEffect, useState } from 'react';
import '../App.css';
import Task from './task';

const Home = () => {
  const initialArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState(initialArray);

  const handler = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (index) => {
    const filterArray = tasks.filter((value, i) => {
      return i !== index;
    });
    setTasks(filterArray);
    localStorage.setItem('tasks', JSON.stringify(filterArray));
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className='home'>
        <h1>Get Things Done !</h1>
        <form onSubmit={handler}>
          <input value={title} type='text' placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} required />
          <textarea
            value={description}
            placeholder='Enter Description'
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button>ADD TASK</button>
        </form>

        {tasks.map((item, index) => {
          return <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />;
        })}
      </div>
    </>
  );
};

export default Home;
