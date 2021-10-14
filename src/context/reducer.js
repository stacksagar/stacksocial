import initialState from "./state";

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case "TOGGLE_REG":
      return {...state, showReg: !state.showReg};

    case "SET_ACTIVE_REG":
      return {...state, activeReg: payload};

    case "SET_USER":
      return {...state, user: payload};

    case "FETCH_POSTS":
      return {...state, fetchPosts: !state.fetchPosts};

    default:
      return state;
  }
};

export default reducer;
