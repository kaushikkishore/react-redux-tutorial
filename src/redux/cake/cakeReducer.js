import { BUY_CAKE } from "./cakeTypes";

const inititalState = {
  numberOfCakes: 12,
};
const cakeReducer = (state = inititalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cakeReducer;
