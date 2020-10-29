import {
    GET_USERS,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    SET_CURRENT,
    CLEAR_CURRENT,
    LOGIN_USER
} from '../types';

export const usersReducer =(state, action) => {
  switch(action.type){
    case GET_USERS: {
        return {
            ...state,
            users: action.payload
        }
    }
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
        
      };
    case UPDATE_USER: {
      return {
        ...state,
        users: state.users.map(user =>  user.id === action.payload.id ? action.payload : user)
      }
    }
    case DELETE_USER: {
      return{
        ...state,
        users: state.users.filter(
          user => user.id !== action.payload
        )
      }
    }

    case SET_CURRENT: {
      return{
        ...state,
        current: action.payload
      }
    }
    case CLEAR_CURRENT: {
      return{
        ...state,
        current: null
      }
    }
  }
}

export default usersReducer

