import { Link } from "react-router-dom"

// Props type declaration
interface Props {
  todos: []
  handleSort: any
}

const NormalView: React.FC<Props> = ({ todos, handleSort }: Props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              ID
              <button onClick={() => handleSort("byId")}>
                <i className="bi bi-sort-numeric-down"></i>
              </button>
            </th>
            <th>User ID</th>
            <th>
              Title
              <button onClick={() => handleSort("byTitle")}>
                <i className="bi bi-sort-alpha-down"></i>
              </button>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos?.map((todo: any) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td className="title">{todo.title}</td>
                <td>
                  <span>
                    <Link to={`/details/${todo.id}`}>
                      <i className="bi bi-caret-right"></i>
                      View detail
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default NormalView