import {
  ADD_CHAR,
  INSERT_CHAR,
  REMOVE_ALL,
  REMOVE_CHAR,
  UPDATE_CHAR,
} from './Array-Action-Types';

const initialState = {
  user: [],
};
const ArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAR:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case REMOVE_CHAR:
      return {
        ...state,
        user: state.user.filter(user => user.name !== action.payload),
        //an other way
        // user: [
        //   ...state.user.slice(0, action.payload),
        //   ...state.user.slice(action.payload + 1),
        // ],
      };
    case REMOVE_ALL:
      return {
        user: [],
        //other way
        // state.user.filter(user => user.name == '%^%%%%%%'),
      };
    case INSERT_CHAR:
      return {
        ...state,
        user: [
          ...state.user.slice(0, action.payload.index),
          {name: action.payload.name},
          ...state.user.slice(action.payload.index),
        ],
      };
    case UPDATE_CHAR:
      debugger;
      const newArray = [...state.user]; //making a new array
      newArray[action.payload.index].name = action.payload.name; //changing value in the new array
      return {
        ...state, //copying the orignal state
        user: newArray, //reassingning todos to new array
      };
    default:
      return state;
  }
};

export default ArrayReducer;
