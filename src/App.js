import React from "react"
import "./App.css"
import Header from "./Components/Header"
import EmployeeList from "./Components/EmployeeList"

const App = () => {
  return (
    <div className="p-10 font-sans">
      <Header />
      <EmployeeList />
    </div>
  )
}

export default App
