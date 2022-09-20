import * as Actions from './cart-Action-Types';

const initialState = {
  // processing: false,
  // error: false,
  // message: null,
  count: 0,
  COVID: [],
};
const reducer = (state = initialState, action) => {
  const {type} = action;
  switch (action.type) {
    case Actions.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case Actions.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case Actions.COVID_REPORT:
      return {
        ...state,
        COVID: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
