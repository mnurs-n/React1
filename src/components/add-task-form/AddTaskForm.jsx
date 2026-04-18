import Field from './Field' //Компонент добавления тасков
import Button from './Button'

const AddTaskForm = (props) => {
  const {
    addTask,
  } = props
 
 //Крч эта кастомная функция костыль просто для понимания работает ли элемент или нет и чтобы при отправке формы страница не перезагружалась, позже исчезнет

  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
      />
      <Button 
       type="submit"
       >Add</Button>
    </form>
  )
}

export default AddTaskForm
