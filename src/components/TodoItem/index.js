// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, onTodoDelete} = props
  const {title, id} = details

  const onDelete = () => {
    onTodoDelete(id)
  }

  return (
    <li className="container">
      <p className="para">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
