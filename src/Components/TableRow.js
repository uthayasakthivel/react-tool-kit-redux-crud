import React from "react"
import { MdModeEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateUser } from "../features/EmployeeSlice"

const TableRow = ({ users }) => {
  const allUser = useSelector((state) => state.employee.data)
  const dispatch = useDispatch()
  const handleDelete = (userId) => {
    // alert(userId)
    // const [willdeleteUser] = allUser.filter(
    //   (EachUser) => EachUser.id === userId
    // )

    const newUsers = allUser.filter((EachUser) => EachUser.id !== userId)
    dispatch(updateUser(newUsers))

    // const willdeleteUserIndex = allUser.findIndex((eachUser) => eachUser.id === userId)
    // if(willdeleteUserIndex !== -1) {
    //   allUser[willdeleteUserIndex]
    // }
  }

  return (
    <>
      <table className="w-full border-collapse text-2xl">
        <thead className="text-center border p-2 border-solid border-[#ddd]">
          <tr>
            <th className="table-cells">Name</th>
            <th className="table-cells">Email</th>
            {/* <th>Address</th> */}
            <th className="table-cells">Phone</th>
            <th className="table-cells">Action</th>
          </tr>
        </thead>
        <tbody className="text-center border p-2 border-solid border-[#ddd]">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="table-cells">{user.name}</td>
              <td className="table-cells">{user.email}</td>
              {/* <td className="border border-solid border-[#ddd]">
                {Object.values(user.address).join(", ")}
              </td> */}
              <td className="table-cells">{user.phone}</td>
              <td className="table-cells ">
                <div className="flex justify-evenly">
                  {/* <Link to={`/update-employee/${user.id}`}>
                    <MdModeEdit color="#ffc828" />
                  </Link> */}
                  <Link
                    to={`/update-employee/${user.id}`}
                    state={{ userId: user.id }}
                  >
                    <MdModeEdit color="#ffc828" />
                  </Link>
                  <button onClick={() => handleDelete(user.id)}>
                    <AiFillDelete color="#f55b4f" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableRow
