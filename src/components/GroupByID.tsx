import { useState } from "react"
import { Link } from "react-router-dom"

/* function to group todo tasks by userID */
const handleData = (todos: any) => {
  const data: any[] = todos.reduce((acc: any, cur: any) => {
    if (!acc.some((x: any) => x === cur.userId)) {
      acc.push(cur.userId)
    }
    return acc
  }, [])
  const groupedTodos: any[] = data.map((item: any) =>
    todos.filter((todo: any) => todo.userId === item)
  )
  return groupedTodos
}

// Props type declaration
interface Props {
  todos: []
}

const GroupByID: React.FC<Props> = ({ todos }: Props) => {
  const groupedTodos = useState(handleData(todos))[0]

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {groupedTodos?.map((todo: any) => (
            <tr key={todo[0].userId}>
              <td>{todo[0].userId}</td>
              <td className="title">
                {
                  <ul>
                    {todo.map((item: any) => (
                      <li key={item.id}>
                        <i className="bi bi-arrow-right-short"></i>
                        <Link to={`/details/${item.id}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default GroupByID
