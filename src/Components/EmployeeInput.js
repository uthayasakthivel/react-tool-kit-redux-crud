import React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addUser, updateUser } from "../features/EmployeeSlice"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

const EmployeeInput = ({ pageTitle, userId }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  const allUser = useSelector((state) => state.employee.data)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (pageTitle === "Add Employee") {
      console.log(name, email, address)
      dispatch(addUser({ id: uuidv4(), name, email, address, phone }))
    } else if (pageTitle === "Update Employee") {
      let newUser = { id: uuidv4(), name, email, address, phone }
      const userIndex = allUser.findIndex((user) => user.id === userId)
      if (userIndex !== -1) {
        console.log("newvalues", allUser, userIndex, newUser)
        const updatedAllUser = [...allUser]
        updatedAllUser[userIndex] = newUser
        dispatch(updateUser(updatedAllUser))
      }
    }
    navigate("/")
  }
  return (
    <div className=" flex-col flex items-center justify-center h-screen">
      <div className="w-1/2">
        <h2 className="text-center">{pageTitle}</h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeInput
