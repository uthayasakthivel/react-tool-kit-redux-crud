import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isLoading: true,
  data: [],
  error: false,
}

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const res = await axios("http://localhost:8000/users")
    const data = await res.data
    return data
  }
)

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = [...state.data, action.payload]
    },
    updateUser: (state, action) => {
      state.data = action.payload
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      //   alert(2)
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export default EmployeeSlice.reducer
export const { addUser, updateUser } = EmployeeSlice.actions
