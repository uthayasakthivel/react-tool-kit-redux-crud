import {
  FETCHUSERS,
  FETCHSUCCESS,
  FETCHFAILURE,
  ADDUSER,
  UPDATEUSER,
} from "./ActionType"

const initialState = {
  loading: true,
  data: [],
  error: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHUSERS:
      return { ...state }
    case FETCHSUCCESS:
      return { loading: false, data: action.payload, error: false }
    case FETCHFAILURE:
      return { loading: false, data: [], error: action.payload }
    case ADDUSER:
      return { ...state, data: [...state.data, action.payload] }
    case UPDATEUSER:
      alert(action.payload)
      return { ...state, data: action.payload }
    default:
      return state
  }
}
