import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const Detail: React.FC = () => {
  const { id } = useParams<string>()
  const [todo, setTodo] = useState<any>()

  useEffect(() => {
    let isCancelled: Boolean = false
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          setTodo(data)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [id])

  return (
    <div className="detail-page">
      <h2>Details Page</h2>
      {todo && (
        <div className="todo-details">
          <span>
            <b>Status: </b>{" "}
            {todo.completed === false ? "Not completed" : "Completed"}
          </span>
          <span>
            <b>ID:</b> {todo.id}
          </span>
          <span>
            <b>Title:</b> {todo.title}
          </span>
          <span>
            <b>UserID:</b> {todo.userId}
          </span>
        </div>
      )}
      <Link to="/">
        <i className="bi bi-caret-right"></i>
        <span>Back To Home Page </span>
      </Link>
    </div>
  )
}

export default Detail
