import React from "react"
import EmployeeInput from "./EmployeeInput"
import { useLocation } from "react-router-dom"

const UpdateEmployee = () => {
  let { state } = useLocation()
  let userId = state.userId
  return (
    <div>
      <EmployeeInput pageTitle="Update Employee" userId={userId} />
    </div>
  )
}

export default UpdateEmployee
