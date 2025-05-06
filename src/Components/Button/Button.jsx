import "./Button.css"

function Button( {onClick, text}) {
  return (
    <button onClick={ onClick } className="order__button">{text}</button>
  )
}

export default Button