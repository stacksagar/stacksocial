import rootState from "./state";
const rootReducer = (state = rootState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      return { ...state, currentUser: { ...payload } };

    default:
      return state;
  }
};

export default rootReducer;
