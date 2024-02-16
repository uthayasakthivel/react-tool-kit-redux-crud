import React from "react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#425c7d] text-white p-10 text-3xl">
      <div className="font-bold">
        <span className="font-medium">Manage </span>
        Employees
      </div>
      <div className="flex gap-5 justify-between items-center">
        <Link
          to="/add-employee"
          className="flex justify-between items-center bg-[#5db85d] px-5 py-3 no-underline text-white"
        >
          <FaCirclePlus className="mx-3" />
          Add New Employee
        </Link>
      </div>
    </div>
  )
}

export default Header
