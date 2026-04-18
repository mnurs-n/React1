const Field = (props) => { //Получаем данные по props от родителя AddTaskForm и деструктурируем их в нижние переменные
  const {
    className ='',
    id,
    label,
    type = 'text',
    onInput,
  } = props

  return ( //Данная разметка дублирует значения из верхних переменных , строки 3-6. Dataflow - передача данных сверху вниз
    <div className={`field ${className}`}> 
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
    </div>
  )
}

export default Field
