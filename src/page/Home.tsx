import { useEffect, useState } from "react"
import GroupByID from "../components/GroupByID"
import NormalView from "../components/NormalView"

export interface myObj {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<myObj[]>([])
  const [viewType, setViewType] = useState<string>("normal")

  useEffect(() => {
    let isCancelled: Boolean = false
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          setTodos(data)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [])

  // sorting function
  const handleSort = (sortType: string): void => {
    if (todos) {
      if (sortType === "byId") {
        setTodos([...todos].sort((a: myObj, b: myObj) => a.id - b.id))
      }
      if (sortType === "byTitle") {
        setTodos(
          [...todos].sort((a: myObj, b: myObj) =>
            a.title.localeCompare(b.title)
          )
        )
      }
    }
  }

  return (
    <div className="homepage">
      <h2>Home Page</h2>
      <div className="view-type">
        <button onClick={() => setViewType("normal")}>View Normal</button>
        <button onClick={() => setViewType("groupById")}>
          Group By User ID
        </button>
      </div>
      {viewType === "normal" && (
        <NormalView todos={todos} handleSort={handleSort} />
      )}
      {viewType === "groupById" && <GroupByID todos={todos} />}
    </div>
  )
}

export default Home
