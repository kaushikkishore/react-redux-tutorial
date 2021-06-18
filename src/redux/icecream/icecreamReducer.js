import { BUY_ICECREAME } from "./icecreamTypes";

const initialState = {
  numberOfIcecreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAME:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default icecreamReducer;
