import { Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Detail from "./page/Detail"

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
