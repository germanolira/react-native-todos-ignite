import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshPage, setRefreshPage] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (!newTaskTitle) return; // Caso o newTaskTitle esteja vazio, não faz nada

    const newTask = { // declara newTask
      id: String(new Date().getTime()), // Cria uma key de acordo com o id + a data atual
      title: newTaskTitle,
      done: false
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists

    const checkbox = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task)

    setTasks(checkbox);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks(filteredTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}