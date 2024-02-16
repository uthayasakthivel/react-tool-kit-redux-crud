import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchEmployees } from "../features/EmployeeSlice"
// import { fetchUserThunk } from "../Redux/Action"
import TableRow from "./TableRow"

const EmployeeList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.employee.data)

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchEmployees())
    }
  }, [])

  const data = useSelector((state) => state.employee.data)
  console.log("data added", data)
  const isLoading = useSelector((state) => state.employee.isLoading)
  const error = useSelector((state) => state.employee.error)

  if (isLoading) {
    return "loading..."
  }

  if (error) {
    return error
  }

  console.log("from employee", data)

  return (
    <div>
      <TableRow users={data} />
    </div>
  )
}

export default EmployeeList
