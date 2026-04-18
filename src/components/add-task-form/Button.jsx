const Button = (props) => { //компонент кнопки
  const {
    className = '',
    type = 'button',
    children,
  } = props

  return (
    <button
      className={`button ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
