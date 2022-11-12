import { Link } from "react-router-dom"
import { Props } from "./NormalView"
import { myObj } from "../page/Home"

/* function to group todo tasks by userID */
const handleData = (todos: myObj[]): myObj[][] => {
  const data: number[] = todos.reduce((acc: number[], cur: myObj) => {
    if (!acc.some((x: number) => x === cur.userId)) {
      acc.push(cur.userId)
    }
    return acc
  }, [])
  const groupedTodos: myObj[][] = data.map((item: number) =>
    todos.filter((todo: myObj) => todo.userId === item)
  )
  return groupedTodos
}

const GroupByID: React.FC<Props> = ({ todos }: Props) => {
  const groupedTodos = handleData(todos)

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
          {groupedTodos?.map((todo: myObj[]) => (
            <tr key={todo[0].userId}>
              <td>{todo[0].userId}</td>
              <td className="title">
                {
                  <ul>
                    {todo.map((item: myObj) => (
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
