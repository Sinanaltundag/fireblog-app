import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from "../types/authTypes"

const initialState = {
    currentUser:null,
}

const authReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_CURRENT_USER:
    return { ...state, currentUser: payload }
  case CLEAR_CURRENT_USER:
    return initialState.currentUser

  default:
    return state
  }
}

export default authReducer