import { configureStore } from "@reduxjs/toolkit"
import EmployeeReducer from "../features/EmployeeSlice"

export const store = configureStore({
  reducer: {
    employee: EmployeeReducer,
  },
})
