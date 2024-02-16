import {
  FETCHUSERS,
  FETCHSUCCESS,
  FETCHFAILURE,
  ADDUSER,
  UPDATEUSER,
} from "./ActionType"
import axios from "axios"

export const fetchusers = () => {
  return {
    type: FETCHUSERS,
  }
}

export const fetchsuccess = (data) => {
  return {
    type: FETCHSUCCESS,
    payload: data,
  }
}

export const fetchfailure = (err) => {
  return {
    type: FETCHFAILURE,
    payload: err,
  }
}

export const addUser = (data) => {
  return {
    type: ADDUSER,
    payload: data,
  }
}

export const updateUser = (data) => {
  return {
    type: UPDATEUSER,
    payload: data,
  }
}

export const fetchUserThunk = () => {
  return async function (dispatch) {
    dispatch(fetchusers())
    await axios
      .get("http://localhost:8000/users")
      .then((res) => {
        const users = res.data
        dispatch(fetchsuccess(users))
      })
      .catch((err) => {
        dispatch(fetchfailure(err.message))
      })
  }
}
