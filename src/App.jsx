import { useState } from 'react';
import AddTask from './assets/components/AddTask';
import Tasks from './assets/components/Tasks';
import './App.css';
import { v4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: 'Estudar programação para ser um desenvolvedor FullStack',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar inglês',
      description: 'Estudar inglês para melhorar a comunicação',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Fazer exercícios físicos',
      description: 'Praticar exercícios físicos para manter a saúde em dia',
      isCompleted: false
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit  (title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className='container'>
      <div id='div2'>
        <h1 id='title-gt'>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;
