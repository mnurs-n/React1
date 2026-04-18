import TodoItem from "./TodoItem"  //компонент списка тасков (в этот блок добавляються таски)

const TodoList = (props) => {
  const {
    tasks = [], //Будет принимать массив объектов с полями - title,id,isDone
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task)=>(
        <TodoItem
         className="todo__item"
         key = {task.id}
         onDeleteTaskButtonClick={onDeleteTaskButtonClick}
         onTaskCompleteChange={onTaskCompleteChange}
         title={task.title}     
         id={task.id}           
         isDone={task.isDone}
        />
      ))}
    </ul>
  )
}

export default TodoList
