import { useEffect, useState } from "react"
import GroupByID from "../components/GroupByID"
import NormalView from "../components/NormalView"

const Home: React.FC = () => {
  const [todos, setTodos] = useState<any[]>([])
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
        setTodos([...todos].sort((a: any, b: any) => a.id - b.id))
      }
      if (sortType === "byTitle") {
        setTodos(
          [...todos].sort((a: any, b: any) => a.title.localeCompare(b.title))
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
