import AddTaskForm from './add-task-form/AddTaskForm' //Главный компонент
import SearchTaskForm from './searchTask+TodoInfo/SearchTaskForm'
import TodoInfo from './searchTask+TodoInfo/TodoInfo'
import TodoList from './ToDo list/TodoList'
import { useState } from 'react'
  // Функция с массивом, передает формат отображаемых данных в TaskList
const Todo = () => {

  const [tasks, setTasks] = useState(
    { id: 'task-1', title: 'download VS-code', isDone: false },
    { id: 'task-2', title: 'delete Deadlock', isDone: true },
    { id: 'task-3', title: 'take a break', isDone: false })

  // Функция удаления всего списка тасков для TodoInfo
  const deleteAllTasks = () => {
     console.log("Удаляем все задачи!")
  }

  // Функция удаления таска, в пераметре принимает id таска который надо удалить для TodoList
  const deleteTask = (taskId) => {
    console.log('Удаляем задачу по id')
  }
  
  // Функция проверки выполнения тасков для TodoList
  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Удаляем задачу с id: ${isDone ? 'Выполнена':'Не выполнена'}`)
  }

  //Функция поиска тасков для searchTaskForm
  const filterTasks = (query) => {
    console.log(`Поиск ${query}`)
  }

  //Функция добавления задачи для addTaskForm
  const addTask = () => {
    console.log('Задача добавлена!')
  }

  //Главный блок возвращающий разметку из компонентов и передающий в них данные
  return (
    <div className="todo"> 
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
       addTask={addTask}
       />
      <SearchTaskForm 
       onSearchInput={filterTasks}
       />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList 
       tasks={tasks}
       onDeleteTaskButtonClick={deleteTask}
       onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo
